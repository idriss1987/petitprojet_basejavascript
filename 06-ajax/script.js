/*
Asynchronous
Javascript
And
Xml

XMLHttpRequest()
    .readyState (0-4)
    .status (200 OK)
    .responseText

    .open()
    .send()
    .onreadystatechange = () => {}

*/

fetch('departements-region.json')
    .then((reponse) => {
        console.log(reponse);
        if (reponse.status == 200) {
            return reponse.json(); // alimente la variable datas du then suivant
        }
    })
    .then((datas) => {
        console.log(datas);
        if (datas && datas.length > 0) {

            for (let i = 0; i < datas.length; i++) {
                let option = document.createElement('option');
                option.innerHTML = datas[i].num_dep + ' ' + datas[i].dep_name;
                option.value = datas[i].num_dep;
                document.querySelector('#departement').appendChild(option);
            }

        }
    })
    .catch((erreur) => {
        console.log(erreur);
    });

console.log('hello')    ;

