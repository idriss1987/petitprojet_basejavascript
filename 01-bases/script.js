/*
commentaire sur
plusieurs lignes
*/

// commentaire sur une ligne

// document.write('Hello world!');

let contenu = document.getElementById('contenu');

contenu.innerHTML = '<h1>Javascript</h1>';
contenu.innerHTML += '<h2>Les bases</h2>';

// LES VARIABLES
var uneVariable = 10; // déclaration/affectation


let uneAutreVariable; // déclaration
uneAutreVariable = 'un texte'; // affectation

contenu.innerHTML += uneAutreVariable;

// Concaténation
let fruit = 'pomme';
fruit += 'fraise'; // + est le symbole de la concaténation
console.log(fruit);
console.info(fruit);
// console.error('erreur');

contenu.innerHTML += '<br>Ma variable fruit contient ' + fruit + '<br>';
contenu.innerHTML += `<br>Ma variable fruit contient ${fruit}<br>`; // ALTGR + 7
// les variables ou expressions JS seront interprêtées entre ${}

let chiffre = 5; // number
console.log(typeof (chiffre));

let uneChaine = 'un texte'; // string
console.log(typeof (uneChaine));

let unBooleen = true; // boolean
console.log(typeof (unBooleen));

let regexp = /^[0-9]{5}$/; // RegExp
console.log(typeof (regexp)); // object
console.log(regexp.test('75012')); // true

console.log(5 > 2); // boolean resultant de la comparaison

// Les constantes
const URL = 'https://monsite.com';
// URL = 'autre chose'; ERREUR


// Opérateurs arithmétiques
contenu.innerHTML += '<hr>';
contenu.innerHTML += 5 + 5 + '<br>'; //  + se comporte en addition car les deux éléments sont de type number
contenu.innerHTML += 5 + '5' + '<br>'; // + se comporte en concaténation car un des deux éléments est une chaine
contenu.innerHTML += 10 - 3 + '<br>';
contenu.innerHTML += 10 * 3 + '<br>';
contenu.innerHTML += 10 / 3 + '<br>';
contenu.innerHTML += 10 % 3 + '<br>'; // modulo : reste de la division entière
contenu.innerHTML += 4 ** 2 + '<br>'; // puissance

contenu.innerHTML += Math.pow(4, 2) + '<br>'; // puissance avec l'utilisation de l'objet Math
contenu.innerHTML += Math.PI + '<br>';

// parseInt() et parseFloat()
console.log('8');
console.log(parseInt('8')); // number
console.log(parseInt('150px')); // extrait 150 en number

console.log(parseInt('42.7'));
console.log(parseFloat('42.7m')); // extrait 42.7

// Boites de dialogues : alert, prompt, confirm

// window.alert('Message');

// let reponse = window.prompt('Quel âge avez vous ?');
// console.log(reponse);

// let confirmation = window.confirm('Etes vous sur de vouloir faire cela ?');
// console.log(confirmation);

// Exercice : demander un chiffre à l'utilisateur et afficher sur la page le chiffre auquel on a ajouté 5

// let chiffreUtilisateur = window.prompt('Saisir un chiffre');
// contenu.innerHTML += parseFloat(chiffreUtilisateur) + 5;

contenu.innerHTML += '<h2>Structures conditionnelles</h2>';

let a = 10, b = 5, c = 2;

// if
//   BOOL
if (a > b) contenu.innerHTML += 'a est supérieur à b<br>';

// if/else
if (b > c) contenu.innerHTML += 'b est supérieur à c<br>';
else contenu.innerHTML += "b n'est pas supérieur à c<br>";

/*
if (b > c){
    contenu.innerHTML += 'b est supérieur à c<br>';
}
else{
    contenu.innerHTML += "b n'est pas supérieur à c<br>";
} 
*/

// if/else if/ else (intercaler des conditions intermédiaires)
if (a == 9) {
    contenu.innerHTML += 'a vaut 9<br>';
}
else if (a > 10) {
    contenu.innerHTML += 'a est supérieur à 10<br>';
}
else {
    contenu.innerHTML += 'Tout est faux<br>';
}


//  !  NOT
if (b != 6) contenu.innerHTML += 'b est différent de 6<br>';
if (!(b == 6)) contenu.innerHTML += 'b est différent de 6<br>';

// Plusieurs conditions

// && : ET
if (a > b && b > c) {
    contenu.innerHTML += 'Les 2 conditions sont vraies<br>';
}
/*
    vrai && vrai => vrai
    vrai && faux => faux
    faux && faux => faux
*/
// || : OU  (inclusif)  ALTGR + 6
if (a == 9 || b > c) {
    contenu.innerHTML += 'Au moins une des deux conditions est vraie<br>';
}

/*
    vrai || vrai => vrai
    vrai || faux => vrai
    faux || faux => faux
*/

let nb1 = 5, // number
    nb2 = '5'; // string
if (nb1 === nb2) contenu.innerHTML += 'C\'est la meme chose';

/*
= affectation
== comparaison en valeur
=== comparaison en valeur ET en type
!= différence en valeur
!== différence en valeur OU en type
*/

if (0 === false) console.log("C'est vrai !!!");
// number  boolean


// Forme contractée : forme ternaire
let sexe = 'm';

if (sexe == 'm') {
    contenu.innerHTML += 'Bonjour Monsieur<br>';
}
else {
    contenu.innerHTML += 'Bonjour Madame<br>';
}

contenu.innerHTML += (sexe == 'm') ? 'Bonjour Monsieur<br>' : 'Bonjour Madame<br>';
//  (condition) ? si vrai : si faux

// structure SWITCH
let superHero = 'Batman';

switch (superHero) {

    // traiter plusieurs cas de la même manière
    case 'Thor':
    case 'Spider-Man':
    case 'IronMan':
        contenu.innerHTML += 'Héros Marvel<br>'; break;
    // break permet de sortir du switch

    case 'Batman':
    case 'Wonder Woman':
    case 'Superman':
        contenu.innerHTML += 'Héros DC Comics<br>'; break;

    default:
        contenu.innerHTML += 'Autres héros<br>';
}

// fonction isNaN()
// is Not a Number
console.log(isNaN(uneChaine));
// tester qu'une variable n'est pas un nombre

console.log(!isNaN(chiffre)); // NOT is NOT a number
// tester qu'on a à faire à un number

let uneAutreChaine = 'une phrase'; // prototype String
console.log(uneAutreChaine.length); // longueur de chaine (nb de caractères)
console.log(uneAutreChaine.toUpperCase());


contenu.innerHTML += '<h2>Prototypes</h2>';

// Prototype Math
// arrondis
contenu.innerHTML += Math.round(2.2) + '<br>'; // arrondi à l'entier le plus proche
contenu.innerHTML += Math.ceil(2.1) + '<br>'; // arrondi à l'entier supérieur
contenu.innerHTML += Math.floor(2.99) + '<br>'; // arrondi à l'entier inférieur

contenu.innerHTML += (2.2).toFixed() + '<br>'; // arrondi à l'entier le plus proche
contenu.innerHTML += (2.2488751).toFixed(4) + '<br>'; // nbre de décimales après la virgule
// /!\ la méthode toFixed() renvoie un string

contenu.innerHTML += Math.round(2.2488751 * 10000) / 10000 + '<br>';
contenu.innerHTML += (40).toFixed(2) + '€<br>';

// puissance et racine carrée
contenu.innerHTML += Math.pow(5, 3) + '<br>'; // puissance
contenu.innerHTML += Math.sqrt(16) + '<br>'; // racine carrée (square root)

// Nombre aléatoire
contenu.innerHTML += Math.random() + '<br>'; // génére un nombre aléatoire compris entre 0 inclus et 1 non inclus

// Nombre entre 1 et 100
contenu.innerHTML += Math.floor(Math.random() * 100) + 1;

contenu.innerHTML += '<h2>Structures itératives : boucles</h2>';

/*
1 - situation de départ
2 - condition qui fait tourner la boucle
3 - incrementation
*/

// Boucle WHILE (tant que)
let i = 0; // situation de départ

while (i <= 10) { // condition qui fait tourner la boucle
    contenu.innerHTML += i + ' ';
    // i = i + 1;   == >  i += 1;
    i++; // incrementation
}

// exemple où la boucle while permet de controler une situation indépendante d'une incrémentation numérique
// let reponse = '';
// while(reponse != 'stop'){
//     reponse = window.prompt('Ecrivez stop');
// }

// Boucle FOR
contenu.innerHTML += '<hr>';
//   depart    cond    incrementation
for (let i = 0; i <= 10; i++) {
    contenu.innerHTML += i + ' ';
}

// Boucle DO...WHILE
let j = 6;
do {
    console.log('Ce code sera au moins exécuté une fois');
}
while (j < 5);

// Exemple
// let reponseUtilisateur;
// let listeCouleurs = '';
// do{
//     reponseUtilisateur = window.prompt("Ecrire une couleur ou stop pour arrêter");
//     if(reponseUtilisateur != 'stop')  listeCouleurs += reponseUtilisateur+ ' ';
// }
// while(reponseUtilisateur != 'stop');

// contenu.innerHTML += `<br>Voici vos couleurs : ${listeCouleurs}`;

/* exercice : avec la boucle de votre choix, écrire sur la page un comptage allant de 5 à 35 de 5 en 5
    resultat attendu : 5 10 15 20 25 30 35
*/
contenu.innerHTML += '<hr>';

for (let i = 5; i <= 35; i += 5) {
    contenu.innerHTML += i + ' ';
}

let htmlBuild = '<select>';

for (let annee = 2022; annee >= 1922; annee--) {
    htmlBuild += `<option>${annee}</option>`;
}

htmlBuild += '</select>';

contenu.innerHTML += htmlBuild;

// Boucles imbriquées
// tableau à 2 dimensions
let lignes = 8;
let colonnes = 8;

let tableau = '<table>';

for (let cptl = 1; cptl <= lignes; cptl++) {
    tableau += '<tr>';
    for (let cptc = 1; cptc <= colonnes; cptc++) {
        tableau += '<td></td>';
    }
    tableau += '</tr>';
}
tableau += '</table>';

contenu.innerHTML += tableau;

contenu.innerHTML += '<h2>Fonctions predéfinies</h2>';

// les fonctions prédéfinies sont souvent des méthodes associées à un prototype

let phrase = "Je m'appelle Sébastien"; // string

contenu.innerHTML += `Ma phrase contient ${phrase.length} caractères<br>`;
contenu.innerHTML += phrase.toLowerCase() + '<br>';
contenu.innerHTML += phrase.toUpperCase() + '<br>';
contenu.innerHTML += `Sébastien se trouve à la position ${phrase.indexOf('Sébastien')}<br>`;
// indexOf() renvoie la position de la chaine en paramètre
// indexOf() renvoie -1 si la chaine n'est pas trouvée

contenu.innerHTML += phrase.substring(13) + '<br>'; // substring(depart)
contenu.innerHTML += phrase.substring(13, 16) + '<br>'; // substring(depart,arrivée)

// Taille partie visible
console.log(window.innerWidth + 'x' + window.innerHeight);

navigator.geolocation.getCurrentPosition(function (infos) {
    console.log(infos);
});

// watchPosition()

console.log(chiffre);
console.log(chiffre.toString()); // convertit un nombre en chaine

contenu.innerHTML += '<h2>Fonctions utilisateur</h2>';

// es5
function direBonjour1() {
    return 'Bonjour!<br>';
}

let direBonjour2 = function () {
    return 'Bonjour!<br>';
}

contenu.innerHTML += direBonjour1();
contenu.innerHTML += direBonjour2();

// es6 : fonctions flechées
let auCarre = a => Math.pow(a, 2);
contenu.innerHTML += auCarre(8) + '<br>';

let addition1 = (a, b) => a + b; // 1 seule instruction
contenu.innerHTML += addition1(5, 3) + '<br>';

let addition2 = (a, b) => {
    let resultat = a + b;
    return resultat;
};
contenu.innerHTML += addition2(4, 5) + '<br>';

let direBonjour3 = (prenom = '') => `Bonjour ${prenom}<br>`;
// prenom devient un paramètre optionnel si je lui affecte une valeur par défaut

contenu.innerHTML += direBonjour3('Jamel');
contenu.innerHTML += direBonjour3('Mathilde');
contenu.innerHTML += direBonjour3();

/*
Ecrire une fonction calculTVA qui permet à partir d'un prix HT et d'un eventuel taux (défaut 20) de calculer le prix TTC
*/

// function calculTVA(prixHT, taux = 20){
//     return (prixHT * ( 1 + taux / 100)).toFixed(2);
// }

let calculTVA = (prixHT, taux = 20) => (prixHT * (1 + taux / 100)).toFixed(2);

contenu.innerHTML += calculTVA(100) + '€<br>';
contenu.innerHTML += calculTVA(87, 5.5) + '€<br>';



// Espace local/global

// Espace global
let animal = 'Tigre';

let savane = ()=>{
    // Espace local
    let animal = 'Lion';
    return animal;
}

contenu.innerHTML += animal + '<br>'; // Tigre
contenu.innerHTML += savane() +'<br>'; // Lion
contenu.innerHTML += animal + '<br>'; // Tigre

let b2=15;

if(b2<20){
    // espace local
    let c2= 12;  
    c2 = 'autre chose';
}
// console.log(c2);  ERREUR c2 n'est pas accessible dans l'espace global
// Pour rendre accessible la variable, il est nécessaire de la déclarer avant, dans l'espace global

contenu.innerHTML += '<h2>Tableaux de données : Array</h2>';

let fruits = ['pomme','raisin','banane','fraise'];
//               0       1       2         3 
console.log(fruits);
contenu.innerHTML += `Mon tableau contient ${fruits.length} éléments<br>`;

fruits.push('orange'); // ajouter un élément à la fin du tableau
console.log(fruits);
fruits.unshift('cerise'); // ajouter un élément en début de tableau
console.log(fruits);

fruits.pop(); // retire le dernier élément du tableau
fruits.shift(); // retire le premier élément du tableau

let legumes = new Array('carotte','courgette','poireau');
let elements = new Array(10); // definit la taille du tableau si 1 seul paramètre (numérique)
console.log(elements);

contenu.innerHTML += fruits[1] + '<br>'; // j'affiche l'élément à partir de son index

let liste = '<ul>';
for(let i=0; i < fruits.length; i++){
    liste += `<li>${fruits[i]}</li>`;
}
liste += '</ul>';

contenu.innerHTML += liste;
contenu.innerHTML += fruits.join() + '<br>';
contenu.innerHTML += fruits.join('-') + '<br>'; // cf. implode() PHP
contenu.innerHTML += '<ul><li>' + fruits.join('</li><li>') + '</li></ul>';

/*
    split()
*/
let dateJour = '2022-12-02';
let detailsDate = dateJour.split('-'); // cf. explode() PHP
console.log(detailsDate);

fruits.push('orange','cerise');
console.log(fruits);

// On  veut retirer banane
fruits.splice(2,1); // retirer un élément splice(position_depart,nb_elements_a_retirer)
console.log(fruits);

fruits.splice(2,0,'ananas'); // intercaler un élémént à la position 2 sans en supprimer splice(position_depart,0,'element');

fruits.splice(2,1,'papaye'); // remplacer un élément à la position 2 splice(position_depart,1,'element')

// Tests de présence d'éléments dans le tableau
console.log(fruits.includes('raisin'));
console.log(fruits.includes('poire'));

// Renvoie l'index de l'élément s'il le trouve
console.log(fruits.indexOf('raisin'));
console.log(fruits.indexOf('poire')); // si l'élément n'est pas trouvé, renvoie -1

// methode forEach() - boucle
fruits.forEach( (valeur,index)  => {
    console.log(index + ' ===> ' + valeur);
}); // on appelle la fonction à l'intérieur des parenthèses une fonction callback (en retour)


// boucles for..in, et for..of
for(let i in fruits){
    console.log(i); // i est l'index du tableau
    console.log(fruits[i]);
}

for(let i of fruits){
    console.log(i); // i est la valeur du tableau
}

// Tableaux imbriqués
let superHeros = [
    ['Superman','Batman','Wonder Woman'],  // 0
 //      0         1           2   
    ['Ironman','Thor','Spider-Man']  // 1
 //     0        1        2 
];

console.log(superHeros);

contenu.innerHTML += superHeros[1][2] + '<hr>'; // affiche Spider-Man

superHeros.forEach(tableau => tableau.forEach( hero => contenu.innerHTML += hero + '<br>'));

contenu.innerHTML +='<hr>';
superHeros.forEach(tableau =>{
    tableau.forEach( hero =>{
        contenu.innerHTML += hero + '<br>';
    });
});

contenu.innerHTML +='<hr>';
superHeros.forEach(function(tableau){
    tableau.forEach(function(hero){
        contenu.innerHTML += hero + '<br>';
    });
});

contenu.innerHTML += '<h2>Prototypes Set et Map</h2>';

// Set (gestion des doublons)
let courses = new Set();

courses.add('oeufs');
courses.add('tomates');
courses.add('oeufs');
courses.add('farine');

console.log(courses);
/*
    .add() ajoute un élément si non présent
    .delete() retirer un élément
    .clear() vide le set
    .has() test de présence
*/
console.log(courses.has('jambon'));
console.log(courses.has('oeufs'));
contenu.innerHTML += `Ma liste de courses contient ${courses.size} élements<br>`;

// Map
let voitures = new Map();

voitures.set('r','renault'); // index, valeur
voitures.set('p','peugeot');
console.log(voitures);
console.log(voitures.get('p'));
/*
    .set()
    .get()
    .delete(index)
    .has(index)
    .clear() vide la map
*/
console.log(voitures.has('p'));

console.log(voitures.keys()); // liste les index
console.log(voitures.values()); // liste des valeurs

let mapIterator = voitures.values();
console.log(mapIterator.next().value);
console.log(mapIterator.next().value);
contenu.innerHTML += `Ma liste de voitures contient ${voitures.size} éléments<br>`;

contenu.innerHTML += '<h2>Les Objets et les classes</h2>';

let monObjet = {
    // propriétés
    "couleur" : "jaune",
    "modele" : "standard",
    "premiere-matiere" : "métal",

    // méthodes
    "quiSuisJe" : function(){
        // this désigne l'objet lui-même
        return `Je suis un objet ${this.modele} de couleur ${this.couleur}`;

        // /!\ les fonctions fléchées ne supportent pas this
    }
};
// JavaScript Object Notation : JSON

contenu.innerHTML += monObjet.couleur + '<br>';
contenu.innerHTML += monObjet["couleur"] + '<br>';
contenu.innerHTML += monObjet["premiere-matiere"] + '<br>';
contenu.innerHTML += monObjet.quiSuisJe() + '<br>';

// EN es6, il est possible de créer des classes
class Telephone{

    marque;
    modele;
    #couleur;  // propriété privée

    // méthode magique : constructeur
    constructor(marque,modele){
        this.marque = marque;
        this.modele = modele;
    }
    // setter
    setCouleur(couleur){
        this.#couleur = couleur;
    }
    // getter
    getCouleur(){
        return this.#couleur;
    }

}

let telephone1 = new Telephone('Apple','Iphone');
contenu.innerHTML += `Mon téléphone 1 est de marque ${telephone1.marque}<br>`;
telephone1.setCouleur('blanc');
contenu.innerHTML +=  telephone1.getCouleur();

contenu.innerHTML += '<hr>';

// Héritage
class User{
    login;
    mdp;
    email;

    seConnecter(){
        return "Je me connecte<br>";
    }
    afficheDroits(){
        return ['lire','ecrire un message'];
    }
}

// Administrator hérite de User
class Administrator  extends User{
    accesBackOffice(){
        return "accés Back Office";
    }
    afficheDroits(){
        // redéfinition et surcharge
        let droits = super.afficheDroits(); // super designe la classe parente
        droits.push('expulser un utilisateur','nommer un modérateur');
        return droits;
    }
}

let admin1 = new Administrator;
contenu.innerHTML += admin1.seConnecter();
contenu.innerHTML += admin1.afficheDroits().join(', ');

// Classes existantes

let maDate = new Date();

contenu.innerHTML += '<hr>' + maDate.getFullYear() + '<br>';
contenu.innerHTML += '<hr>' + maDate.getDay() + '<br>'; // 0-6 , 0 Dimanche
contenu.innerHTML += '<hr>' + maDate.getMonth() + '<br>'; // 0-11 , 0 Janvier
contenu.innerHTML += '<hr>' + maDate.getDate() + '<br>'; // jour du mois 1-31
contenu.innerHTML += '<hr>' + maDate.getHours() + '<br>';
contenu.innerHTML += '<hr>' + maDate.getMinutes() + '<br>';
contenu.innerHTML += '<hr>' + maDate.getSeconds() + '<br>';
contenu.innerHTML += '<hr>' + maDate.toGMTString();

