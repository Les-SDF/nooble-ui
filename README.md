# [Dépôt du projet GitHub](https://github.com/Les-SDF/nooble-ui)
#### HTTPS : `https://github.com/Les-SDF/nooble-ui.git`
#### SSH : `git@github.com:Les-SDF/nooble-ui.git`

# Mettre en place le projet

- Exécuter les commandes suivantes :

```shell
docker exec -it but3-web-container-server-1 bash
```

```shell
cd ~/workspace/nooble-ui
```

```shell
npm install
```

```shell
npm run dev
```

```shell
npx tailwindcss -i .\src\assets\base.css -o .\src\assets\main.css --watch
```
