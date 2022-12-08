document.addEventListener('DOMContentLoaded',function(){

    //  document.getElementById('masection')
    document.querySelector('#masection').addEventListener('click',function(e){

        // on Stoppe la propagation de l'evenement click aux éléments parents
        e.stopPropagation(); 
           
        // this.classList.add('bleu');
        this.classList.toggle('bleu');

    });

    let mesP = document.querySelectorAll('p');

    for(let i=0; i < mesP.length; i++){

        mesP[i].addEventListener('mouseover',function(){
            this.classList.add('orange');
        });
        mesP[i].addEventListener('mouseout',function(){
            this.classList.remove('orange');
        });
    }

    // Fonction extérieure
    function ajoutBordure(){
        this.classList.add('bordure');
    }

    let mesSpan = document.querySelectorAll('span');
    for(let i=0; i < mesSpan.length; i++){
        mesSpan[i].addEventListener('mouseenter',ajoutBordure);
    }

    document.querySelector('#masection').addEventListener('mouseenter',ajoutBordure);


    document.addEventListener('contextmenu',function(e){
        console.log(e);
        e.preventDefault(); // neutraliser le comportement habituel

    });

    // dblclick
    document.addEventListener('click',function(){
        document.body.classList.add('orange');
    });

    document.querySelector('a').onclick = function(e){
        e.stopPropagation();
        return(window.confirm('Etes vous sûr(e) de vouloir aller sur youtube ?'));
    };

    document.getElementById('message').addEventListener('input',function(e){

        console.log(e);

        let nbCaracteres = this.value.length; 
        document.getElementById('comptage').innerHTML = 'Nb de caractères : ' + nbCaracteres;

    });

    document.addEventListener('mouseup',function(e){
        // e.preventDefault();
        console.log(e.button);
    });


    document.addEventListener('keydown',function(e){
        console.log(e);
        console.log(e.key);
        console.log(e.code);
    });

    document.querySelector('#choix').addEventListener('change',function(){

        let content = document.querySelector('#content');
        switch(this.value){
            case 'fr': content.innerHTML = 'Ce site est en français';  
            document.querySelector('html').setAttribute('lang','fr_FR');
            break;

            case 'en' : content.innerHTML = 'This website is in english';
            document.querySelector('html').setAttribute('lang','en_US');
            
            break;

            case 'es' : content.innerHTML = 'El sitio es en español'; 
            document.querySelector('html').setAttribute('lang','es_ES');
            break;
        }

    });
    

});