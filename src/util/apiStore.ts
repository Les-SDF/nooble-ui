export const apiStore = {
  apiUrl: "http://localhost:80/nooble/public/api/",

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
              //this.utilisateurConnecte = reponseJSON;
              console.log(reponseJSON);
              return {success: true};
            })
        }
      })
  },
  create(login: string, password: string): Promise<{ success: boolean, error?: string }> {
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
}
