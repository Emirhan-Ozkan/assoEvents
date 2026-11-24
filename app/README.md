PROJET UTILISATEURS AVEC EXPRESS.JS

Le projet utilise un modèle MVC en node.js, fonctionne avec TypeScript transpilé en JavaScript.

PACKAGES:

typescript: langage TypeScript
ts-node: TypeScript sous node.js
nodemon: Relance le serveur à chaque modification
express: Express.js
express-validator: module Express.js avec validateurs de saisie (ici nom et email)
jsdom: utiliser le DOM dans le script TS

LA STRUCTURE MODEL VIEW CONTROLLER :

M - Modèle

/models/utilisateur.ts : Définit la structure 'Utilisateur' et la base de données 'users'

V - Vue

/views/users.html : page client avec les utilisateurs et un formulaire pour en ajouter
../public/script.js : script de la page html

C - Controleur

/controllers/utilisateurControleur.ts : contient toutes les fonctions essentielles du côté serveur

Autres :

/routes/utilisateurRoutes.ts : contient toutes les routes des requêtes possible
/validators/utilisateurValidators.ts : contient les validateurs de saisie


app.ts : le 'main' du programme

EXEMPLE : l'utilisateur va sur la page /html:

1 - L'utilisateur envoie la requête GET /html
2 - Dans app.ts, redirigé vers le routeur
3 - Le routeur appelle la fonction 'showUsers' (Routes)
4 - La fonction 'showUsers' est exécutée (Controleur)
5 - La page HTML est récupérée (Vue)
6 - La page est transformée
7 - 'showUsers' renvoie la page HTML (c'est la Response)
8 - Le navigateur affiche la Response du serveur