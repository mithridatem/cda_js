//version  avec le bouton submit

/* document.getElementById('form').onsubmit = (event)=>{
    event.preventDefault();
    console.log('verif');
    let nom = document.getElementById('name').value;
    console.log(nom);
    let prenom = document.getElementById('firstname').value;
    console.log(prenom);
    let email = document.getElementById('email').value;
    console.log(email);
    let utilisateur = [];
    utilisateur.push(nom);
    utilisateur.push(prenom);
    utilisateur.push(email);
    console.log(utilisateur);
} */
/*avec une fonction et onclick en HTML
function ajouter(){
    //récupérer les 3 inputs du formulaire
    let nom = document.getElementById('name').value;
    console.log(nom);
    let prenom = document.getElementById('firstname').value;
    console.log(prenom);
    let email = document.getElementById('email').value;
    console.log(email);
    //création  d'un tableau vide
    let utilisateur = [];
    //ajout des valeurs au tableau
    utilisateur.push(nom);
    utilisateur.push(prenom);
    utilisateur.push(email);
    //affichage du tableau dans la console
    console.log(utilisateur); 
}*/

//avec un écouteur d'événement
document.getElementById('bt').addEventListener('click', function(){
    //récupération des 3 inputs du formulaire
    let nom = document.getElementById('name').value;
    let prenom = document.getElementById('firstname').value;
    let email = document.getElementById('email').value;
    //créationd 'un tableau
    let utilisateur = [];
    //ajout des données (colonne) dans le tableau
    utilisateur.push(nom, prenom, email);
    //affichage dans la console du tableau
    console.log(utilisateur);
});