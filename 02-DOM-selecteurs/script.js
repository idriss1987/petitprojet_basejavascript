// S'assurer que le DOM est chargé
document.addEventListener('DOMContentLoaded', function () {

    // code JS
    // Document Object Model

    // Selection naturelle (non recommandée)
    let monElement = masection;
    console.log(monElement);

    // Selection par ID
    let maSection = document.getElementById('masection');

    maSection.style.border = '1px solid black';
    maSection.style['background-color'] = 'yellow';
    // maSection.style.backgroundColor = 'green';

    // Selection par Classes
    let mesAvions = document.getElementsByClassName('avion');
    console.log(mesAvions);
    console.log(mesAvions.length);
    for(let i=0; i < mesAvions.length;  i++){
        mesAvions[i].style.textDecoration= 'underline';
    }

    // Selection par Balise
    let mesP = document.getElementsByTagName('p');
    mesP[0].style.border='1px solid red';

    // Selection par name
    document.getElementsByName('deux')[0].style.backgroundColor='orange';

    // Selecteurs universels : querySelector(), querySelectorAll()
    let query1 = document.querySelector('p'); // selection unique (par défaut le premier d'une HTMLCollection)
    console.log(query1);

    let query2 = document.querySelector('#masection'); // par id

    let query3 = document.querySelectorAll('.avion'); // par classes
    console.log(query3);

    // Selection multiple
    let multiple = document.querySelectorAll('span,.avion,#masection');
    console.log(multiple);

    for(let i=0; i < multiple.length; i++){
        multiple[i].style['font-style'] = 'italic';
    }


    // AGIR AVEC LES CLASSES

    mesP[2].classList.add('presentation1');
    /*
        .add() ajouter une classe
        .remove() retirer une classe
        .replace() remplacer une classe par une autre
        .toggle() mode bascule
        .contains() true/false : teste la présence d'une classe
    */
    // mesP[2].classList.replace('presentation1','presentation2');
    

    

}); // Fin du DOM chargé