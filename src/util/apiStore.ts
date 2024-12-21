/// <reference types="vite/client" />
import { reactive } from "vue";

export const apiStore = reactive({
  utilisateurConnecte: null,
  estConnecte : false,
  apiUrl: import.meta.env.VITE_API_URL,

  getAll(ressource: string): Promise<unknown> {
    return fetch(`${this.apiUrl}${ressource}`)
      .then(reponsehttp => reponsehttp.json())
  },
  getById(ressource: string, id: number): Promise<unknown> {
    return fetch(`${this.apiUrl}${ressource}/${id}`)
      .then(response => response.json());
  },
  login(login: string, password: string): Promise<{ success: boolean, error?: string }> {
    console.log("Sending request with login:", login, "password:", password);
    return fetch(this.apiUrl + "auth", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        email: login,
        password: password
      }),
    })
      .then(reponsehttp => {
        if (!reponsehttp.ok) {
          return reponsehttp.json()
            .then(reponseJSON => {
              return {success: false, error: reponseJSON.message};
            })
        } else {
          return reponsehttp.json()
            .then(reponseJSON => {
              this.utilisateurConnecte = reponseJSON;
              this.estConnecte = true;
              console.log(reponseJSON);
              return {success: true};
            })
        }
      })
  },
  logout(): Promise<{ success: boolean, error?: string }> {
    console.log("LogOut");
    return fetch(`${this.apiUrl}token/invalidate`, {
      method: "POST",
      credentials: "include",
    })
      .then(reponsehttp => {
        if (!reponsehttp.ok) {
          return reponsehttp.json()
            .then(reponseJSON => ({ success: false, error: reponseJSON.message }));
        }
        this.estConnecte = false;
        this.utilisateurConnecte = null;
        console.log("BienLog Out");
        console.log("Value : "+ this.estConnecte);
        return { success: true };
      })
      .catch(error => ({ success: false, error: error.message }));
  },

  refresh(): Promise<{ success: boolean, error?: string }> {
    return fetch(`${this.apiUrl}token/refresh`, {
      method: "POST",
      credentials: "include",
    })
      .then(reponsehttp => {
        if (!reponsehttp.ok) {
          return reponsehttp.json()
            .then(reponseJSON => ({ success: false, error: reponseJSON.message }));
        }else {
          return reponsehttp.json()
          .then(reponseJSON => {
            this.utilisateurConnecte = reponseJSON;
            this.estConnecte = true;
            console.log(reponseJSON);
            return {success: true};
          })
        }
      })
      .catch(error => ({ success: false, error: error.message }));
  },
  createUser(login: string, password: string): Promise<{ success: boolean, error?: string }> {
    console.log("Sending request with login:", login, "password:", password);
    return fetch(this.apiUrl + "users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        email: login,
        plainPassword: password
      }),
    })
      .then(reponsehttp => {
        if (!reponsehttp.ok) {
          return reponsehttp.json()
            .then(reponseJSON => {
              return {success: false, error: reponseJSON.message};
            })
        } else {
          return reponsehttp.json()
            .then(reponseJSON => {
              //this.utilisateurConnecte = reponseJSON;
              console.log(reponseJSON);
              return {success: true};
            })
        }
      })
  },
  create(ressource: string, data: Record<string, unknown>, refreshAllowed = true): Promise<{ success: boolean, error?: string }> {
    console.log("data create : "+ JSON.stringify(data));
    return fetch(`${this.apiUrl}${ressource}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify(data),
    })
    .then(reponsehttp => {
      if (reponsehttp.ok) {
        return reponsehttp.json()
          .then(() => {
            return { success: true };
          });
      } else if (reponsehttp.status === 401 && refreshAllowed) {
        return this.refresh()
          .then(() => {
            // Appel récursif après le rafraîchissement
            return this.create(ressource, data, false);
          });
      } else {
        return reponsehttp.json()
          .then(reponseJSON => {
            return { success: false, error: reponseJSON.message };
          });
      }
    })
    .catch(error => {
      console.error("Request failed:", error);
      return { success: false, error: error.message };
    });
  },
  patch(ressource: string, id:number, data: Record<string, unknown>): Promise<{ success: boolean, error?: string }> {
    console.log("data create : "+ JSON.stringify(data));
    return fetch(`${this.apiUrl}${ressource}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify(data),
    })
      .then(reponsehttp => {
        if (reponsehttp.ok) {
          return reponsehttp.json()
            .then(() => {
              return { success: true };
            });
        }
        else {
          return reponsehttp.json()
            .then(reponseJSON => {
              return { success: false, error: reponseJSON.message };
            });
        }
      })
      .catch(error => {
        console.error("Request failed:", error);
        return { success: false, error: error.message };
      });
  },
  delete(ressource: string, id:number): Promise<{ success: boolean, error?: string }> {
    return fetch(`${this.apiUrl}${ressource}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
    })
      .then(reponsehttp => {
        if (reponsehttp.ok) {
          return reponsehttp.json()
            .then(() => {
              return { success: true };
            });
        }
        else {
          return reponsehttp.json()
            .then(reponseJSON => {
              return { success: false, error: reponseJSON.message };
            });
        }
      })
      .catch(error => {
        console.error("Request failed:", error);
        return { success: false, error: error.message };
      });
  },
  getByCode(id: string): Promise<unknown> {
    return fetch(`http://localhost/stalker/public/users/${id}/json`)
      .then(response => response.json());
  },
})
