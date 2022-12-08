<?php

require_once('init.php');
// var_dump($_POST);

$tab = array();

extract($_POST);
// génére des variables à partir des index du tableau
/*
 [
    "critere" => "abc"
 ]

extract()
$critere ='abc'
*/

// on cherche les 10 premières réponses dans la base

$statement = $pdo->prepare("SELECT * FROM produits
WHERE nom LIKE CONCAT('%',:critere,'%') OR
description LIKE CONCAT('%',:critere,'%') LIMIT 0,10");
$statement->execute(array(
    'critere' => $critere
));

$nbProduits = $statement->rowCount();
$tab['nbProduits'] = $nbProduits;
if($nbProduits>0){
    $tab['listeProduits'] = $statement->fetchAll();
}

echo json_encode($tab);