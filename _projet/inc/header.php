<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title ?></title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/leaflet.min.css" integrity="sha512-KJRB1wUfcipHY35z9dEE+Jqd+pGCuQ2JMZmQPAjwPjXuzz9oL1pZm2cd79vyUgHQxvb9sFQ6f05DIz0IqcG1Jw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
    <link rel="stylesheet" href="<?php echo URLSITE ?>css/style.css">
</head>
<body>
<header>
    <nav>
        <h1><a href="<?php echo URLSITE ?>">TITRE</a></h1>

        <div id="burger">&#9776;</div>

        <ul id="menu">
            <li id="fermer">&times;</li>
            <li><a href="<?php echo URLSITE ?>">Accueil</a></li>
            <li><a href="<?php echo URLSITE ?>produits.php">Produits</a></li>
            <li><a href="<?php echo URLSITE ?>inscription.php">Inscription</a></li>
            <li><a href="<?php echo URLSITE ?>connexion.php">Connexion</a></li>
            <li><a href="<?php echo URLSITE ?>contact.php">Contact</a></li>
        </ul>
    </nav>

</header>
<main>

