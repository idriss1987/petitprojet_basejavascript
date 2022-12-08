let burger = document.querySelector("#burger");
let menu = document.querySelector("#menu");
let fermer = document.querySelector("#fermer");
const URLSITE = '/javascript/_projet/';

burger.addEventListener('click', () => {
    menu.classList.add('deploye', 'transition');
});

fermer.addEventListener('click', () => {
    menu.classList.remove('deploye');
});

window.addEventListener("resize", () => {

    if (window.innerWidth >= 768) {
        menu.classList.remove('deploye', 'transition');
    }


});


/* exercice : afficher le mot de passe en clair sur clic de l'oeil */

// tester la présence d'un élément sur la page
if (document.getElementById('mdp')) {
    // code qui concerne le formulaire
    let oeil = document.querySelector('#oeil');
    let mdp = document.querySelector('#mdp');

    oeil.addEventListener('click', () => {

        if (mdp.getAttribute('type') == 'password') {
            mdp.setAttribute('type', 'text');
        }
        else {
            mdp.setAttribute('type', 'password');
        }
    });
}


if (document.getElementById('avatar')) {

    let avatar = document.getElementById('avatar');
    let preview = document.getElementById('preview');
    let mimesAutorises = ['image/jpeg', 'image/png'];
    let validavatar = document.getElementById('validavatar');

    avatar.addEventListener('change', function (e) {
        console.log(e);
        validavatar.innerHTML = '';
        let fichier = e.target.files[0];

        if (!mimesAutorises.includes(fichier.type)) {
            validavatar.innerHTML = 'Fichier invalide. Merci de choisir une image JPEG ou PNG';
        }
        else {

            // 400x400 max
            let reader = new FileReader();
            reader.readAsDataURL(fichier); // lecture du fichier
            reader.onload = (e) => {

                let image = new Image();
                image.src = e.target.result; // encodage base64
                image.onload = function () {
                    let largeur = this.width;
                    let hauteur = this.height;
                    if (largeur > 400 || hauteur > 400) {
                        validavatar.innerHTML = `Votre fichier ${largeur}x${hauteur} est trop grand. Format maxi: 400x400`;
                    }
                    else {
                        preview.setAttribute('src', e.target.result);
                    }
                }
            }
        }
    });

    // Drag and drop
    document.querySelector('html').addEventListener('dragover', function (e) {
        e.preventDefault();
        e.stopPropagation();
        preview.classList.add('bordure');
    });

    document.querySelector('html').addEventListener('dragleave', function (e) {
        e.preventDefault();
        e.stopPropagation();
        preview.classList.remove('bordure');
    });

    document.querySelector('html').addEventListener('drop', function (e) {
        e.preventDefault();
        e.stopPropagation();
        preview.classList.remove('bordure');

        // console.log(e.dataTransfer.files);
        // avatar.files = e.dataTransfer.files;

        // let evenement = new Event('change');
        // avatar.dispatchEvent(evenement);

    });

    preview.addEventListener('drop', function (e) {

        console.log(e.dataTransfer.files);
        avatar.files = e.dataTransfer.files;

        let evenement = new Event('change');
        avatar.dispatchEvent(evenement);

    });
}


if (document.getElementById('formregister')) {


    let patternMdp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[_\-!*$|§µ¤£¨@])[\wéàèù\-!*$|§µ¤£¨@|§µ¤£¨]{8,15}$/;

    let login = document.getElementById('login');
    let mdp = document.getElementById('mdp');
    let validationLogin = document.getElementById('validlogin');
    let validationMdp = document.getElementById('validmdp');
    let controleLogin = false;
    let controleMdp = false;

    /*
        &times; croix
        &#10004; coche
    */

    let controles = () => {

        if (login.value.length > 0) {

            if (login.value.length >= 3) {
                validationLogin.innerHTML = '&#10004;';
                controleLogin = true;
            }
            else {
                validationLogin.innerHTML = '&times;';
                controleLogin = false;
            }

        }
        else {
            validationLogin.innerHTML = '';
            controleLogin = false;
        }

        if (mdp.value.length > 0) {

            if (patternMdp.test(mdp.value)) {
                validationMdp.innerHTML = '&#10004;';
                controleMdp = true;
            }
            else {
                validationMdp.innerHTML = '&times;';
                controleMdp = false;
            }

        }
        else {
            validationMdp.innerHTML = '';
            controleMdp = false;
        }

        if (controleLogin && controleMdp) {

            document.querySelector('#formregister button[type="submit"]').disabled = false;
        }
        else {
            document.querySelector('#formregister button[type="submit"]').disabled = true;
        }

    };

    login.addEventListener('input', controles);
    mdp.addEventListener('input', controles);
}



let cookies = document.cookie;
let trouve = false;
console.log(cookies);

let tabCookies = cookies.split('; ');
for (let i of tabCookies) {
    let elements = i.split('=');
    if (elements[0] == 'acceptCookies') {
        trouve = true;
    }
}

if (!trouve) {
    document.getElementById('bandeaucookies').classList.add('ouvert');
}

if (document.getElementById('bandeaucookies')) {

    document.getElementById('acceptcookies').addEventListener('click', () => {

        let expiration = new Date;
        expiration.setTime(expiration.getTime() + 10 * 24 * 3600 * 1000); // 10 jours

        // Ajout d'un cookie
        document.cookie = `acceptCookies=yes; expires=${expiration.toGMTString()}; path=/`;
        // nom=valeur;expires=(date GMT);path
        document.getElementById('bandeaucookies').classList.remove('ouvert');

    });

}



if (document.getElementById('code_postal')) {

    const URLAPI = 'https://apicarto.ign.fr/api/codes-postaux/communes/';


    let loadCommunes = (codepostal, reussite, echec) => {

        fetch(URLAPI + codepostal)
            .then((reponse) => {
                if (reponse.status == 200) return reponse.json();
            })
            .then(datas => { reussite(datas) })
            .catch(error => { echec(error) });
    };


    // test unitaire
    loadCommunes(95800, function (datas) {
        console.log(datas);
    }, function (erreur) {
        console.log(erreur);
    });

    let codepostal = document.getElementById('code_postal');
    let listecommunes = document.getElementById('listecommunes');

    codepostal.addEventListener('input', () => {

        let pattern = /^[0-9]{5}$/;
        if (pattern.test(codepostal.value)) {

            loadCommunes(codepostal.value, (datas) => {
                listecommunes.innerHTML = '';
                for (let i = 0; i < datas.length; i++) {
                    let option = document.createElement('option');
                    option.innerHTML = codepostal.value + ' ' + datas[i].nomCommune;
                    listecommunes.appendChild(option);
                }
            }, (error) => {
                listecommunes.innerHTML = '';
                let option = document.createElement('option');
                option.innerHTML = codepostal.value + ' Code postal non trouvé';
                listecommunes.appendChild(option);
            });

        }

    });
}


if (document.getElementById('map')) {

    const URLAPICARTO = 'https://nominatim.openstreetmap.org/search/';
    const URLAPIADRESSE = 'https://nominatim.openstreetmap.org/reverse';

    let macarte;
    let zoom = 17; /* 1-20 */
    let marqueur;


    function getAdresse(lat, lon, callback) {
        fetch(URLAPIADRESSE + `?lat=${lat}&lon=${lon}&format=json&addressdetails=1`)
            .then(reponse => reponse.json())
            .then(datas => callback(datas))
            .catch(error => console.log(error));
    }

    // Utilisation de la bibliothèque
    navigator.geolocation.getCurrentPosition((infos) => {

        console.log(infos);
        let lat = infos.coords.latitude;
        let lon = infos.coords.longitude;

        // L correspond à l'objet leaflet que fournit la bibliothéque JS ajoutée dans le footer
        macarte = L.map(document.getElementById('map')).setView([lat, lon], zoom);

        L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
            minZoom: 1,
            maxZoom: 20
        }).addTo(macarte);

        L.circle([lat, lon], {
            radius: 100
        }).addTo(macarte);

        getAdresse(lat, lon, function (datas) {

            console.log(datas);
            marqueur = L.marker([lat, lon]).addTo(macarte).bindPopup(datas.display_name).openPopup();

        });

    });


    // Utiliser l'API de géolocalisation à partir d'une adresse


    function getCoords(adresse, callback) {

        fetch(URLAPICARTO + `${adresse}?format=json&limit=1&accept-language=fr-FR`)
            .then(reponse => reponse.json())
            .then(datas => callback(datas))
            .catch(error => console.log(error));
    }

    document.getElementById('aller').addEventListener('click', () => {

        let adresse = document.getElementById('adresse').value.trim(); // trim() retire les espaces avant et après

        if (adresse.length > 0) {

            getCoords(adresse, function (datas) {
                console.log(datas);
                let lat = datas[0].lat;
                let lon = datas[0].lon;

                // retrait du marqueur
                macarte.removeLayer(marqueur);
                // nouveau marqueur
                marqueur = L.marker([lat, lon]).addTo(macarte).bindPopup(datas[0].display_name).openPopup();

                macarte.flyTo([lat, lon], zoom);
            });

        }
    });

    document.getElementById('adresse').addEventListener('keyup', (e) => {

        if (e.key == 'Enter') {
            let event = new Event('click');
            document.getElementById('aller').dispatchEvent(event);
        }

    });

}

if (document.querySelector('.carrousel')) {

    let carrousel = document.querySelector('.carrousel');
    let vitesse = carrousel.dataset.vitesse || 4000;
    let reglette = document.querySelector('.carrousel .reglette');
    let figures = document.querySelectorAll('.carrousel .reglette figure');
    let nbFigures = figures.length;
    let tab = new Array(nbFigures);

    //Initialisation
    reglette.style.width = 100 * nbFigures + '%';
    reglette.style.left = 0;

    let initOrder = () => {
        for (let i = 0; i < nbFigures; i++) {
            figures[i].style.order = i;
            figures[i].style.width = (100 / nbFigures) + '%';
            tab[i] = i;
        }
    }
    initOrder();

    //Réattribution de l'ordre des slides
    let attribOrder = () => {
        for (let i = 0; i < nbFigures; i++) {
            figures[i].style.order = tab[i];
        }
    }

    // Organisation quand on avance (next)
    let next = () => {
        let elem = tab.shift();
        tab.push(elem);
        attribOrder();
    }

    // Organisation quand on recule (previous)
    let previous = () => {
        let elem = tab.pop();
        tab.unshift(elem);
        attribOrder();
    }

    let carrouselNext = () => {
        // let pas = 0;       
        // let avance = () => {
        //     pas += 10;
        //     reglette.style.left = -pas + '%';
        //     if (pas == 100) {
        //         clearInterval(timer);
        //         reglette.style.left = 0;
        //         previous();
        //     }
        // }
        // let timer = setInterval(avance, 75);

        reglette.classList.add('animavance');
        setTimeout(() => {
            reglette.style.left = 0;
            previous();
            reglette.classList.remove('animavance');
        }, 1000);

    };

    let carrouselPrevious = () => {

        next();
        reglette.style.left = '-100%';

        // let pas = 100;
        // let recule = () => {
        //     pas -= 10;
        //     reglette.style.left = -pas + '%';
        //     if (pas == 0) {
        //         clearInterval(timer);
        //         reglette.style.left = 0;
        //     }
        // }
        // let timer = setInterval(recule, 75);

        reglette.classList.add('animrecule');
        setTimeout(() => {
            reglette.classList.remove('animrecule');
            reglette.style.left = 0;
        }, 1000);
    }

    let timer1 = setInterval(carrouselNext, vitesse);

    // Actions des fleches
    document.querySelector('.previous').addEventListener('click', carrouselPrevious);
    document.querySelector('.next').addEventListener('click', carrouselNext);

    // Pause quand la souris est sur le carrousel
    carrousel.addEventListener('mouseenter', () => {
        clearInterval(timer1);
    });

    carrousel.addEventListener('mouseleave', () => {
        clearInterval(timer1); // par sécurité on arrete un eventuel redemarrage avant de le relancer
        timer1 = setInterval(carrouselNext, vitesse);
    });

}

if (document.getElementById('critere')) {

    let critere = document.getElementById('critere');
    let resultats = document.getElementById('resultats');

    critere.addEventListener('input', () => {

        let saisie = critere.value.trim();
        if (saisie.length > 0) {

            let form = new FormData();
            form.append('critere', saisie);

            let params = {
                method: 'POST',
                body: form
            };

            fetch(URLSITE + 'inc/process_ajax.php', params)
                .then(reponse => reponse.json())
                .then(datas => {
                    console.log(datas);
                    if (datas.nbProduits > 0) {
                        resultats.innerHTML = '';
                        let produits = datas.listeProduits;
                        for (let i = 0; i < produits.length; i++) {

                            let ficheProduit = document.createElement('div');
                            ficheProduit.classList.add('fiche_produit');
                            let titreProduit = document.createElement('h4');
                            titreProduit.innerHTML = produits[i].nom;

                            let photoProduit = document.createElement('img');
                            photoProduit.setAttribute('src', URLSITE + 'photos/' + produits[i].photo);
                            photoProduit.setAttribute('alt', produits[i].nom);

                            let prixProduit = document.createElement('div');
                            prixProduit.innerHTML = produits[i].prix + '€';


                            ficheProduit.appendChild(titreProduit);
                            ficheProduit.appendChild(photoProduit);
                            ficheProduit.appendChild(prixProduit);

                            resultats.appendChild(ficheProduit);
                        }
                    }
                    else {
                        resultats.innerHTML = 'Pas de produits trouvés avec ' + saisie;
                    }
                })
                .catch(error => console.log(error));

        }
        else{
            resultats.innerHTML = '';
        }

    });


}
