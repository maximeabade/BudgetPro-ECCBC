## BUDGET PRO ECCBC - COCA COLA
Ce projet a été réalié dans le cadre d'un stage par deux étudiants de CY-Tech PAU, FRA, 2023. Il a pour but de gérer les budgets des projets CAPEX et OPEX de COCA COLA Northern Africa.

# Dépendances
    Avant de lancer les différents serveurs, vérifiez que sur votre machine soient installés:
        - NodeJS
        - Un serveur PHP (wamp, xampp, apache2)
  
# A FAIRE AVANT DE LAUCH
Pour accéder aux pages cocaUser et cocaAdmin, placez leurs dossiers dans le dossier de votre localhost (www pour wamp, htdocs pour xampp, /var/www/html pour apache2). Il est essentiel de réaliser cette action pour que l'interpréteur / compilateur PHP puisse fonctionner correctement, et afficher les pages web.


# BACKEND - API
Pour lancer le serveur backend, il faut se placer dans le dossier backend avec
```cd cocaAdminUserBackend```
 puis lancer la commande suivante:
```npm install && node app.js``` 
Cela aura pour effet d'installer les dénpendances nécessaires au bon fonctionnement de l'API, puis de lancer le serveur backend.

# FRONTEND - PAGES WEB
Pour lancer le serveur frontend, il faut se placer dans le dossier frontend avec 
```cd budgetPro_frontend```
 puis lancer la commande suivante:
```npm install && npm run dev```
Cela aura pour effet d'installer les dépendances nécessaires au bon fonctionnement des pages web, puis de lancer le serveur frontend.

# ACCES AUX PAGES WEB
Pour azccéder au portail de connexion de l'application, il faut se rendre sur l'adresse suivante:
```http://localhost:5173/```. Si vous êtes un administrateur, vous serez redirigé vers la page admin accessible avec l'URL ```http://localhost/cocaAdmin``` , sinon vous serez redirigé vers la page user ```http://localhost/cocaUser```

# SÉCURITÉ
Pour des raisons de sécurité, nous avons décidé de séparer en deux serveur différents la partie Admin de la partie User. Ainsi les deux applications web seront séparées, et les données de l'application Admin ne seront pas accessibles par l'application User.

# Content
On retrouve les fonctionnalités basiques d'un CRUD (Create, Read, Update, Delete), avec une api de conexion LOGIN et une de LOGOUT. Au LOGIN le statut de la persone qui se connecte est vérifié par une api UserStatus. Si le statut est "admin", la personne est redirigée vers la page admin, sinon elle est redirigée vers la page user.
