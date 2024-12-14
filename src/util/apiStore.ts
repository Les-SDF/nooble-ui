export const apiStore = {
  apiUrl: "http://localhost:8086/nooble/public/api/",

  getAll(ressource: string): Promise<unknown> {
    return fetch(`${this.apiUrl}${ressource}`)
      .then(reponsehttp => reponsehttp.json())
  },
  getById(ressource: string, id: number): Promise<unknown> {
    return fetch(`${this.apiUrl}${ressource}/${id}`)
      .then(response => response.json());
  },
}
