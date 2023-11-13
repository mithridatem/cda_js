let nombre = 120;
//switch case avec une valeur
switch (nombre) {
    case 120:
        console.log("le nombre vaut 120")
        break;
    default:
        break;
}
//switch case (condition)
switch (true) {
    case nombre<120:case nombre<500:case nombre<1000:    
        console.log("je suis rentré dans ce cas");
        break;
    case nombre>120:
        break;
    default:
        break;
}
//opérateur ternaire
let test = nombre>0 ? "positif":"negatif";