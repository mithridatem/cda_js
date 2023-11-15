/* Pour son nouveau spectacle, un mentaliste a besoin d'un programme 
pour s'exercer à deviner un nombre entre 1 et 100.
Pour réussir son tour il doit deviner le nombre en moins de 10 tentatives.
A chaque tour il va demander si le nombre qu’il énonce est plus petit ou plus grand que le nombre choisi.
-Si il réussit à découvrir le nombre en moins de 10 essais 
            -> afficher : son entrainement acharné a payé, 
-Sinon 
           -> afficher : il est un mauvais mentaliste et il va devoir changer de métier.
Il souhaite savoir en cas de réussite (nombre trouvé en moins de 10 essais) 
           -> afficher : le nombre d'essai qu'il a effectué pour trouver le nombre. */
//fonction qui génére un nombre random
let nbrAtrouver = numberRandom(100);
console.log(nbrAtrouver);
let statut = true;
let tour = 1;

let nbrTrouver = parseInt(prompt("Choisir un nombre entre 1 et 100"));
//boucle qui tourne tant que statut est égal à true et que tour est plus petit que 11
while(statut&&tour<11){
    console.log("nombre de "+tour);
    if(isNaN(nbrTrouver) || nbrTrouver == ""){
        nbrTrouver = parseInt(prompt("Veuillez choisir un nombre"));
        tour++;
    }
    //test si le nombre est plus petit
    if(nbrTrouver<nbrAtrouver){
        nbrTrouver = parseInt(prompt("Veuillez choisir un nombre plus grand"));
        tour++;
    }
    if(nbrTrouver>nbrAtrouver){
        nbrTrouver = parseInt(prompt("Veuillez choisir un nombre plus petit"));
        tour++;
    }
    //condition de victoire
    if(nbrTrouver==nbrAtrouver){
        alert("Vous avez trouvé le nom nombre : "+ nbrAtrouver+" en : "+tour +(tour==1?" tour":" tours"));
        statut = false;
    }
}
//test si le tour est égal à 11
if(tour==11){
    alert("Vous étes un mauvais mentaliste et il va devoir changer de métier.");
}
//fonction qui génére un nombre random
function numberRandom(nbr){
    return Math.floor((Math.random() * nbr) + 1);
}