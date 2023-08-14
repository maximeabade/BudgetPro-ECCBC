<?php
  include './php/services/ini.php';
?>

<nav id="navbar" class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#myPage">
        <p>ECCBC USER</p>
      </a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#WHAT">QUOI?</a></li>
        <li><a href="#whofor">POUR QUI?</a></li> 
        <li><a href="#budgets">BUDGETS</a></li>             
      </ul>
    </div>
  </div>
</nav>

<!-- Modal d'affichage des informations utilisateur -->
<div id="userInfoModal" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Informations utilisateur</h4>
      </div>
      <div class="modal-body">
        <p id="user-info-username"></p>
        <p id="user-info-is-admin"></p>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
      </div>
    </div>
  </div>
</div>
<!-- Modal de connexion -->
<div id="loginModal" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Connexion</h4>
      </div>
      <div class="modal-body">
        <p id="connexionError" style="display:none; color:red;">Logs incorrects</p>
        <form id="loginForm" method="POST">
          <div class="form-group">
            <label for="username">Nom d'utilisateur:</label>
            <input type="text" class="form-control" id="usernameEntered" name="username" required>
          </div>
          <div class="form-group">
            <label for="password">Mot de passe:</label>
            <input type="password" class="form-control" id="passwordEntered" name="password" required>
          </div>
          <button type="button" class="btn btn-default" id="submitButton" onclick="submitUser();" data-dismiss="modal">Se connecter</button>
        </form>
        <div id="loginMessage"></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal de déconnexion -->
<div id="logoutModal" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Déconnexion</h4>
      </div>
      <div class="modal-body">
        <p>Êtes-vous sûr de vouloir vous déconnecter ?</p>
      </div>
      <div class="modal-footer">
        <form action="" method="post">
          <button type="submit" class="btn btn-default" onclick="disconnect()" >Oui</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">Non</button>
        </form>
      </div>
    </div>
  </div>
</div>


