<?php


require_once('inc/init.php');

$title = "Accueil";
require_once('inc/header.php');
?>

<div class="conteneur">
    
      <!--  .carrousel>.reglette>figure*4>img+figcaption -->
      <div class="carrousel" data-vitesse="3000">
        <div class="reglette">
            <figure>
                <img src="<?php echo URLSITE ?>img/exo.jpg" alt="exo">
                <figcaption>expo</figcaption>
            </figure>
            <figure>
                <img src="<?php echo URLSITE ?>img/fleur.jpg" alt="fleur">
                <figcaption>fleur</figcaption>
            </figure>
            <figure>
                <img src="<?php echo URLSITE ?>img/nature.jpg" alt="nature">
                <figcaption>Nature</figcaption>
            </figure>
            
        </div>
        <div class="previous">&larr;</div>
        <div class="next">&rarr;</div>
      </div>


</div>

<?php
require_once('inc/footer.php');