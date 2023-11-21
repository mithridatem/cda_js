//récupération du bouton
const bt = document.getElementById('bt');
//ajout d'un écouteur événement clic sur le bouton 
//à chaque clic sur le bouton lance le code 
bt.addEventListener('click', ()=>{
    console.log("le bouton à été cliqué");
});
//récupération de l'input
const input = document.getElementById('nom');
//ajout d'un écouteur focus sur l'input (se lansélectionne l'input
//à chaque fois que l'on sélectionne l'input lance le code
input.addEventListener('focus', ()=>{
    console.log("on a sélectionné l'input");
});
//avec une fonction anonyme
input.addEventListener('focus', function(){
    console.log("on a sélectionné l'input");
});

//version avec une fonction nommé sans paramétre
input.addEventListener('keyup', afficher);

//version avec une fonction nommé avec un paramètre
input.addEventListener('dblclick', function(){
    afficherMessage("on a tapé une touche du clavier")
});

function afficher(){
    console.log("afficher dans la console");
}
function afficherMessage(message){
    console.log(message);
}