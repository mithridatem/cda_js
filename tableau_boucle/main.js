let tableau = [1,5,55,33,26,10];
//boucle for
for(let i = 0; i< tableau.length; i++){
    console.log(tableau[i]);
}
//boucle while
let j = 0;
while(j< tableau.length){
    console.log(tableau[j]);
    j++;
}
//fonction forEach
tableau.forEach((e)=>{
    console.log(e);
})
console.log("for in")
//boucle for in
for (const key in tableau) {
    console.log(tableau[key]);
}
console.log("for of")
//boucle for of
for (const iterator of tableau) {
    console.log(iterator);
}
//tableau associatif
let tabAsso = {
    "nom":"Mithridate",
    "prenom": "Mathieu",
    "email": "mathieu@test.com",
    "password":1234
}
//parcourir un tableau associatif
for (const iterator in tabAsso) {
    //afficher le contenu
    console.log(tabAsso[iterator]);
    //afficher le nom de la colonne
    console.log(iterator);
}