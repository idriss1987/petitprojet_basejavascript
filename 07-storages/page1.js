// sessionStorage
/*
disparait à la fermeture du site/navigateur

.setItem() ajout d'une entrée
.getItem() recupération d'une entrée
.removeItem() retrait d'une entrée
.clear() vidage complet

*/
sessionStorage.setItem('login', 'Fred');

// localStorage
// persistant tant que le stockage n'est pas supprimé via les cookies
localStorage.setItem('langue', 'fr');

let panier = new Array();
let quantites = new Array();
let boutons = document.querySelectorAll('.produit+button');

for (let i = 0; i < boutons.length; i++) {

    boutons[i].addEventListener('click', function () {

        let produit = this.dataset.produit;

        if (localStorage.getItem('panier')) {
            
            panier = JSON.parse(localStorage.getItem('panier'));
            quantites = JSON.parse(localStorage.getItem('quantites'));

            if (panier.indexOf(produit) != -1) {
                let idx = panier.indexOf(produit);
                quantites[idx]++;               
            }
            else{
                panier.push(produit);
                quantites.push(1);
            }
        }
        else{
            panier.push(produit);
            quantites.push(1);
        }
    
        localStorage.setItem('panier', JSON.stringify(panier));
        localStorage.setItem('quantites',JSON.stringify(quantites));

    });

}


