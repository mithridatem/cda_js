let start = performance.now();
//nombre random à trouver
let nbrATrouve = numberRandom(100);
console.log(nbrATrouve);
//nombre de tour de jeu
let tour = 1;
//première tentative
let nbrTrouve = prompt("Saisir le nombre à trouver. Tour : "+tour);
//boucle pour le jeu
while(nbrATrouve != nbrTrouve && tour < 11){
    //test si la valeur n'est pas un nombre
    if(nbrTrouve==""){
        alert("ce n'est pas un nombre");
    }
    else{
        //condition si le nombre est trop grand
        if(nbrTrouve > nbrATrouve){
            alert("Saisir un nombre plus petit");
        }
        //condition si le nombre est trop petit
        if(nbrTrouve < nbrATrouve){
            alert("Saisir un nombre plus Grand");
        }
    }
    //incrémenter le tour
    tour++;
    //test si le tour est plus petit que 11
    if(tour < 11){
        //redemander la saisie d'un nombre
        nbrTrouve = prompt("Saisir le nombre à trouver. Tour : "+tour);
    }
}
//condition de victoire
if(nbrATrouve==nbrTrouve){
    alert("Bravo tu as gagné en : "+tour+" tours");
}
//condition de défaite
if(nbrATrouve!=nbrTrouve){
    alert("Vous avez perdu vous pouvez changer de métier !");
}
let end = performance.now();
console.log(((end-start)/1000).toFixed(1));
//fonction qui génére un nombre random
function numberRandom(nbr){
    return Math.floor((Math.random() * nbr) + 1);
}