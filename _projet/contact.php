<?php

require_once('inc/init.php');

$title='Contact';
require_once('inc/header.php');
?>
<div class="conteneur">

    <input type="text" id="adresse"> <button id="aller">Se rendre à cette adresse</button>

    <div id="map"></div>

</div>

<?php
require_once('inc/footer.php');