let info = document.querySelector('#contenu').dataset.custom;

console.log(info);

// dataset est une propriété qui récupère les attributs personnalisés qui commencent par data-

// let info =  document.querySelector('#contenu').getAttribute('data-custom');

/*

SETTERS
    .setAttribute()
    .disabled = true;
    .checked = true;

GETTERS
    .getAttribute()
    .disabled
    .checked 

*/

// Ajouter une méthode au prototype
HTMLElement.prototype.setAttributes = function (attributs) {
    // la boucle for..in est applicable aux objets
    for (let index in attributs) {
        this.setAttribute(index, attributs[index]);
    }
};


let paragraphe = document.createElement('p');
paragraphe.innerHTML = 'mon paragraphe';
paragraphe.setAttribute('id', 'p1');

let span = document.createElement('span');
span.innerHTML = ' une span';
paragraphe.appendChild(span);

let uneImage = document.createElement('img');
uneImage.setAttribute('src', 'https://picsum.photos/200/300');
uneImage.setAttribute('alt', 'une photo');

let sautLigne = document.createElement('br');

let unInput = document.createElement('input');
// unInput.setAttribute('type','text');
// unInput.setAttribute('value','du texte');
unInput.setAttributes({
    "type": "text",
    "value": "du texte"
});

unInput.disabled = true;

document.getElementById('contenu').appendChild(paragraphe);
paragraphe.after(uneImage);
document.getElementById('contenu').appendChild(sautLigne);
document.getElementById('contenu').appendChild(unInput);
/*

    .appendChild()
    .before()
    .after()
*/

// LE TEMPS

setTimeout(function () {
    console.log('2 secondes se sont écoulées')
}, 2000);

setTimeout(redirection, 5000);

function redirection() {
    /*
     Redirection
     document.location.href = 'https://google.com';  
    */  

   // ouvrir un fenetre ou onglet (/!\ )

   // onglet
   window.open('https://youtube.com','_blank'); 

    // nouvelle fenetre
   window.open('https://youtube.com','_blank','popup,width=400,height=200,resizable=0,menubar=no,status=no'); 
}

let timer = setInterval(function(){
    console.log('Un intervalle')
},1000); // lance la fonction au bout de 1000ms et ensuite toutes les 1000ms

setTimeout(function(){
    clearInterval(timer);
},10000);

