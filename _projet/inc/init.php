<?php
session_name('MONSITE');
session_start();
//constantes de site 
define('URLSITE','/javascript/_projet/');

$pdo = new PDO(
    'mysql:host=localhost;chaset=utf8;dbname=boutique',
    'root',
    '',
    array(
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ
        )

);