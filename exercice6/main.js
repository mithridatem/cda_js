//version 1 en créant le tableau et en ajoutant les valeurs directement
//création du tableau avec les 3 valeurs
/* let articles = [prompt("Saisir le nom de l'article"),parseFloat(prompt("Saisir le prix HT")),parseInt(prompt("Saisir quantité"))];

let prixTtcArticle = articles[1]*1.20*articles[2];
console.log(`Le prix ttc de ${articles[0]} est égal à ${prixTtcArticle.toFixed(2)}`); */

//version avec création du tableau (push des 3 valeurs ensuite)
/* let articles2 = [];
articles2.push(prompt("Saisir le nom de l'article"));
articles2.push(parseFloat(prompt("Saisir le prix de l'article")));
articles2.push(parseInt(prompt("Saisir la quantité de l'article")));
//calculer le prix TTC
let prixTtc = (articles2[1]*1.20*articles2[2]).toFixed(2);
console.log(`Le prix TTC de :${articles2[0]} est égal à ${prixTtc} €`); */

//version avec un tableau associatif
//stocker dans un tableau associatif
let articles3 = {
    "nom":prompt("Saisir le nom de l'article"),
    "prixHt": parseFloat(prompt("Saisir le prix HT de l'article")),
    "quantite": parseInt(prompt("Saisir la quantité de l'article"))
}
articles3.prixTtc = (articles3.prixHt*articles3.quantite*1.20).toFixed(2);
console.log(`Le prix TTC de : ${articles3.nom} est égal à ${articles3.prixTtc} €`)