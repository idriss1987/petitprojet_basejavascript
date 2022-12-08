<?php

require_once('inc/init.php');

$title="Produits";
require_once('inc/header.php');

?>

<div class="conteneur">
    <label for="critere">Rechercher un produit</label>
    <input id="critere" type="text">
    <div id="resultats"></div>
</div>

<?php


require_once('inc/footer.php');