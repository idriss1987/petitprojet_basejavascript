<?php

require_once('inc/init.php');


if(!empty($_POST)){

    var_dump($_FILES);

    

}


$title = 'Inscription';
require_once('inc/header.php');
?>

<div class="conteneur">

    <h2>Inscription</h2>
    <hr>
    <form method="post" enctype="multipart/form-data" id="formregister">

        <div>
            <label for="login">Login</label>
            <input type="text" id="login" name="login">
            <span id="validlogin"></span>
        </div>
        <div>
            <label for="mdp">Mot de passe</label>
            <input type="password" id="mdp" name="mdp">
            <span id="oeil">&#128065;</span>
            <span id="validmdp"></span>
        </div>
        <div>
            <label for="code_postal">Code postal</label>
            <input type="text" id="code_postal" name="code_postal" list="listecommunes">
            <datalist id="listecommunes"></datalist>
        </div>
        <div>
            <label for="avatar">
                <img src="https://via.placeholder.com/400x400?text=Avatar" id="preview">
            </label>
            <input id="avatar" type="file" name="avatar" accept="image/jpeg,image/png"> 
            <!-- propriété multiple : pour choisir plusieurs fichiers avec la touche  CTRL -->   
            <span id="validavatar"></span>    
        </div>
        <div>
            <button type="submit" disabled>Envoyer</button>
        </div>
    </form>


</div>


<?php

// phpinfo();

require_once('inc/footer.php');