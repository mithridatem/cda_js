//récupération des valeurs
let nombre1 = parseInt(prompt("Saisir le 1 nombre"));
let nombre2 = parseInt(prompt("Saisir le 2 nombre"));
//test si le produit est positif
if((nombre1 > 0 && nombre2 >0) || (nombre1<0 && nombre2 <0)){
    console.log("le produit est positif");
}
//test si le produit est égal à zéro
else if(nombre1 == 0 || nombre2 ==0){
    console.log("le produit vaut zéro");
}
//test si le produit est négatif
else{
    console.log("le produit est négatif");
}
//version avec un switch case
/* switch (true) {
    //cas ou le produit est positif
    case ((nombre1 > 0 && nombre2 >0) || (nombre1<0 && nombre2 <0)):
        console.log("le produit est positif")
        break;
    case (nombre1 == 0 || nombre2 ==0):
        console.log("Le produit est égal à 0");
        break;
    default:
        console.log("le produit est négatif");
        break;
} */