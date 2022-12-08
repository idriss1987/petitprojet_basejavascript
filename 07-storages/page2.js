// l'information est accessible sur la même session , même onglet

console.log(sessionStorage.getItem('login'));
console.log(localStorage.getItem('langue'));

if (localStorage.getItem('panier')) {

    let panier = JSON.parse(localStorage.getItem('panier'));
    let quantites = JSON.parse(localStorage.getItem('quantites'));

    let tablePanier = document.createElement('table');
    let entete = document.createElement('tr');
    let enteteProduit = document.createElement('th');
    enteteProduit.innerHTML='Nom du produit';
    let enteteQuantite = document.createElement('th');
    enteteQuantite.innerHTML = 'Quantité';
    entete.appendChild(enteteProduit);
    entete.appendChild(enteteQuantite);
    tablePanier.appendChild(entete);

    for (let i = 0; i < panier.length; i++) {
        let lignePanier = document.createElement('tr');
        let nomProduit = document.createElement('td');

        nomProduit.innerHTML = panier[i];

        let quantiteProduit = document.createElement('td');

        quantiteProduit.innerHTML = quantites[i];
        
        lignePanier.appendChild(nomProduit);
        lignePanier.appendChild(quantiteProduit);
        tablePanier.appendChild(lignePanier);
    }
    document.getElementById('panier').appendChild(tablePanier);

}
else {
    document.getElementById('panier').innerHTML = 'Votre panier est vide';
}