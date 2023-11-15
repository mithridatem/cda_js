/* Nous avons un jeu de dés que nous souhaitons automatiser.
Les règles de ce jeu de dès sont les suivantes :
-Il y à 2 participants : la banque et le joueur.
-Le jeu dure 5 tours.
-A chaque tour :
    --La banque lance un dès de 6 faces (score 1 à 6).
    --Le joueur lance un dès de 6 faces (score 1 à 6).
    --Si le joueur fait plus que la banque, ajouter 1 pts au score du joueur,
    --Si le joueur fait le même lancé que la banque, ajouter 2 pts au score du joueur.
    --Si le joueur fait moins que la banque, ajouter 1 pts au score de la banque.
-A la fin des 5 tours le gagnant est celui qui a le score le plus élevé.
-> Afficher le gagnant et son score (nbr de pts). */

//variables pour stocker les scores :
let scoreBanque = 0;
let scoreJoueur = 0;

//boucle pour gérer les 5 tours
for (let i = 0; i < 5; i++) {
    //lancé de la banque
    const lanceBanque = numberRandom(6);
    //lancé du joueur
    const lanceJoueur = numberRandom(6);

    //condition de victoire d'un tour

    //condition de victoire de la banque
    if(lanceBanque>lanceJoueur){
        //ajouter +1 au score de la banque
        scoreBanque++;
    }
    //condition égalité (lancé joueur et banque)
    if(lanceBanque==lanceJoueur){
        //ajouter +2 au score du joueur
        scoreJoueur += 2;
    }
    //condition de victoire de la banque
    if(lanceJoueur>lanceBanque){
        //ajouter +1 au score du joueur
        scoreJoueur++;
    }
}
//conditions de victoire de la partie;
if(scoreBanque>scoreJoueur){
    console.log("La banque à gagnée avec un score de : "+scoreBanque);
}
if(scoreBanque==scoreJoueur){
    console.log("Egalité avec : "+scoreBanque+" pts");
}
if(scoreJoueur>scoreBanque){
    console.log("Le joueur a gagné avec un score de : "+scoreJoueur);
}
//fonction qui génére un nombre random
function numberRandom (nbr) {
    return Math.floor((Math.random() * nbr) + 1);
}