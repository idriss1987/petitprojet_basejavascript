try{
    console.log(toto);

}
catch(erreur){

    // console.log('Erreur obtenue : ' + erreur);
    console.error("La variable toto n'est pas définie");
}

// ----------------------------------------------------------------------------------

function appel(){


    if(typeof(toto) == 'undefined'){
        throw new Error("toto n'existe pas");
    }
    else{
        return toto;
    }
}

try{

    console.log(appel());

}
catch(erreur){
    console.log('Erreur obtenue :' + erreur);
}

// ---------------------------------
class CustomErreur{

    constructor(message){
        this.message = message;
        this.name = 'Erreur utilisateur'
    }
}

function AireCercle(rayon){

    // pi * rayon²
    if(isNaN(rayon)){
        throw new CustomErreur("Le rayon n'est pas numérique");
    }
    else
    {
        return Math.PI * Math.pow(rayon,2);
    }
}

try{
    console.log(AireCercle('m'));
}
catch(erreur){
    console.error(erreur.name + ': ' + erreur.message);
}