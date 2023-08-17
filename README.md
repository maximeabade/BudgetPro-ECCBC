Pour lancer le serveur backend, il faut se placer dans le dossier backend et lancer la commande suivante:
```npm install && node app.js```

Pour lancer le serveur frontend, il faut se placer dans le dossier frontend et lancer la commande suivante:
```npm install && npm run dev```

Pour accéder aux pages cocaUser et cocaAdmin, placez leurs dossiers dans le dossier de votre localhost (www pour wamp, htdocs pour xampp, /var/www/html pour apache2). Il est essentiel d'avoir au préalable installé un serveur PHP (wamp, xampp, apache2).

Pour des raisons de sécurité, j'ai décidé de séparer en deux serveur différents la partie Admin de la partie User.

On retrouve les fonctionnalités basiques d'un CRUD (Create, Read, Update, Delete), avec une api de conexion LOGIN et une de LOGOUT. Au LOGIN le statut de la persone qui se connecte est vérifié par une api UserStatus. Si le statut est "admin", la personne est redirigée vers la page admin, sinon elle est redirigée vers la page user.
