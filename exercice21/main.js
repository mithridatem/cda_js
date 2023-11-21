/* Depuis l'exemple ci-dessus et la correction de l'exercice 9 (prix des chocolatines) :
-Dans la page HTML ajouter les éléments suivants :
      --un titre h1 (calculer le prix à payer),
      --un input de type text ( id = quantite),
      --un bouton (onclick = calculer()),
      --un paragraphe (id= resultat),
-Dans la partie JS :
créer une fonction qui va se nommer calculer et qui va effectuer le calcul du prix à payer des chocolatines :
récupérer la valeur de l'input (id quantité) avec value,
afficher dans le paragraphe (id = résultat) le montant à payer.
Bonus : Tester si le champ quantité est vide 
      => afficher dans le paragraphe "Veuillez choisir un nombre de chocolatine" 
 */
function calculer(){
    //récupérer la valeur stockée dans l'input quantité
    const quantite = parseInt(document.getElementById('quantite').value);
    //récupération du paragraphe resultat
    const resultat = document.getElementById('resultat');
    //variable pour stocker 
    let total = 0;
    //test si nombre est inférieur ou égal à 10
    if(quantite <=10 && quantite >0){
        total = quantite * 1.4;
    }
    //test si quantite est inférieur ou égal à 20
    else if(quantite <=20 && quantite>0){
        total = 14 + ((quantite-10)*1.30);
    }
    //test si quantite est supérieur à 20
    else if(quantite >20){
        total = 27 + ((quantite - 20) *1.20);
    }
    //test si le nombre est négatif
    else{
        total = "Saisir un nombre positif";
    }
    //version avec isNaN (test si ce n'est pas un nombre )
    resultat.textContent = !isNaN(total)?"Le prix total est égal à "+total.toFixed(2)+" €":total;
}
//récupérer l'élément HTML
const bt = document.querySelector('button');
//ajouter un écouteur événement
bt.addEventListener('click', calculer);
/* bt.addEventListener('click', function(){

}); */
/* bt.addEventListener('click', (e)=>{
   e.target.textContent = "clique";
}) */