/* Ecrivez un programme permettant à l’utilisateur de saisir un nombre quelconque de valeurs (prompt), 
qui devront être stockées dans un tableau. 
Afficher dans la console le nombre de valeurs négatives et le nombre de valeurs positives contenu 
dans le tableau (dans la console)
Bonus :
Afficher la valeur absolu la plus grande (dans la console). */
//variables
//tableau des nombres
let tableau = [];
//variable pour faire tourner la boucle
let statut = true;
//compteur de nombres positif et négatif
let cptPositif = 0;
let cptNegatif = 0;
//boucle pour alimenter le tableau
while(statut){
    //demander de saisir un nombre
    let nombre = parseInt(prompt("Saisir un nombre"));
    //ajouter le nombre au tableau
    tableau.push(nombre);
    //condition pour incrémenter les nombres positif
    if(nombre > 0){
        cptPositif++;
    //condition pour incrémenter les nombres négatif
    }else{
        cptNegatif++
    }
    //demander d'arréter la boucle de tourner
    let arret = prompt("Saisir stop pour arréter");
    //condition d'arret de la boucle
    if(arret == "stop"){
        statut = false;
    }
}
//valeur absolu par défaut
let maxValue = tableau[0];
//boucle pour trouver la valeur absolue
for(let i = 0; i<tableau.length; i++){
    //condition pour tester si la valeur du tableu est plus grande que maxValue
    if(Math.abs(tableau[i] > Math.abs(maxValue))){
        maxValue = Math.abs(tableau[i]);
    }
}
console.log(`Le tableau contient ${cptPositif == 1?"positif ":"positifs "} et ${cptNegatif ==1?"negatif":"negatifs"}`);
console.log(`La valeur absolue la plus grande est : ${maxValue}`);