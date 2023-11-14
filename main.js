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
//boucle for in
for (const key in tableau) {
    console.log(tableau[key]);
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
    console.log(tabAsso[iterator]);
}
