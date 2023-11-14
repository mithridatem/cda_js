/* 
Version avec des variables
//récupération des mots
let mot1 = prompt("Saisir le 1 mot");
let mot2 = prompt("Saisir le 2 mot");
let mot3 = prompt("Saisir le 3 mot");

//tester
if(mot1<=mot2 && mot2<=mot3){
    console.log("Les mots sont dans l'ordre croissant");
}
else{
    console.log("Les mots ne sont pas dans l'ordre croissant");
} 


Version avec un tableau
*/
//constuction du tableau de mot
let tableau = [prompt("Saisir le 1 mot"), prompt("Saisir le 2 mot"), prompt("Saisir le 3 mot")];
//cloner le tableau
let tableauTrie = Object.values(tableau);
//let tableauTrie = [...tableau];
//trier le tableau
tableauTrie.sort();

//variable pour la boucle
//compteur
let i = 0;
//condition d'arret de la boucle
let ok = true;
//tant que ok vaut true et que i est plus petit que la longueur du tableau on continu
while(ok && i<tableau.length){
    //test si une colonne d'un tableau est différente d'une colonne de l'autre tableau
    if(tableau[i]!=tableauTrie[i]){
        //on passe ok à false
        ok = false;
    }
    //on incrémente le compteur de tours
    i++;
}
//test si ok vaut true
if(ok){
    console.log("Les mots sont dans l'ordre croissant");
}
//test si ok vaut false
else{
    console.log("Les mots ne sont pas dans l'ordre croissant");
}
