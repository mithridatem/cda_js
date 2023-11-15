/* Ecrire un programme qui demande un nombre de départ (prompt), 
et qui ensuite affiche la table de multiplication de ce nombre dans la console, 
présentée comme suit (cas où l'utilisateur entre le nombre 7) :
Table de 7 :
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
…
7 x 10 = 70 */
//récupérer le nombre de l'utilisateur
const nombre = parseInt(prompt("Saisir un nombre"));
//tester si nombre est bien un nombre
if(!isNaN(nombre)){
    //afficher la table à calculer
    console.log("Table de "+nombre);
    //boucle qui va tourner 10 fois
    for (let i = 0; i < 10; i++) {
        console.log(nombre+" x "+ (i+1)+ " = "+(nombre*(i+1)));
    }
}
//test si ce n'est pas un nombre
else{
    console.log("Veuillez choisir un nombre entier");
}
