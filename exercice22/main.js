/* Transformer l'exercice 6 pour que le programme utilise des éléments HTML plutôt que des prompts et console.log.
Partie HTML :
Ajouter  les éléments suivants :
-un titre h1 -> calculer le prix TTC,
-un input de (type text, id = prixHt),
-un input de (type text, id = quantite),
-un bouton (onclick =calculer()),
-un paragraphe (id= resultat),
Partie JS :
Créer une fonction calculer :
-récupérer les valeurs des 2 inputs,
-refaire le calcul comme dans l'exercice 6 (correction),
-Afficher le résultat dans le paragraphe (id= resultat) */

//méthode pour calculer le prix
function calculer(){
    //récupération des inputs 
    const prixHt = document.getElementById('prixHt');
    const quantite = document.getElementById('quantite');
    let total = "";
    //test si les champs sont remplis et si les valeurs sont des nombres
    if(prixHt.value !="" && quantite.value !=""&& !isNaN(quantite.value) &&!isNaN(prixHt.value)){
        //calcul du prix total
        total = "Le prix total est de : "+(parseFloat(prixHt.value)*parseInt(quantite.value)*1.20).toFixed(2)+" €";
    }else{
        //message d'erreur
        total = "Les données ne sont pas correctes saisir des nombres";
    }
    //affichage du montant ou des erreurs
    document.getElementById('resultat').textContent = total;
}