const age = parseInt(prompt("Saisir l'age de l'utilsiateur "));

//version avec les conditions 
/* if(age>=12){
    console.log("Cadet");

}else if(age >= 10){
    console.log("Minime");
}
else if(age >=8){
    console.log("Pupille");
}
else if(age >=6){
    console.log("Poussin");
}
else{
    console.log("Trop jeune");
} */

//version avec switch case (valeur)
/* switch (age) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("trop jeune");
        break;
    case 6:
    case 7:
        console.log("Poussin");
        break;
    case 8:
    case 9:
        console.log("pupille");
        break;
    case 10:
    case 11:
        console.log("Minime");
    default:
        console.log("Cadet");
        break;
} */

//version avec switch case (condition)
switch (true) {
    case age>=12:
        console.log("Cadet");
        break;
    case age>=10:
        console.log("Minime");
        break;
    case age>=8:
        console.log("Pupille")
        break;
    case age>=6:
        console.log("poussin");
        break;
    default:
        console.log("trop jeune");
        break;
}