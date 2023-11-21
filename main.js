const bt = document.getElementById('bt');
const paragraphe = document.getElementById('texte');
let statut = true;
//exemple écouteur fonction (en boucle cacher/afficher)
bt.addEventListener('click', ()=>{
    if(statut==true){
        paragraphe.style.visibility = "hidden";
        statut= false;
        bt.textContent = "Afficher";
    }
    else{
        paragraphe.style.visibility = "visible";
        statut=true;
        bt.textContent = "Cacher";
    }
});