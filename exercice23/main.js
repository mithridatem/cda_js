/* Partie HTML :
Ajouter dans la page les éléments suivants :
-1 input type text (id = email),
-1 input type password(id= password),
-1 input type button (id=bt)
Partie JS :
1 Ajouter un écouteur événement (keyup (touche clavier est relâchée )-> input (id= email) 
         -> vérifier si le contenu de l'input (id= email) match  le pattern suivant :
                   --
let regexEmail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

         -> si le emailmatch le pattern mettre l'input (email) en vert (backgroundColor)
         -> sinon mettre l'input (email) en rouge(backgroundColor)
2 Ajouter un écouteur événement (blur(désélection de l'input)-> input (id= password) 
         -> vérifier si le contenu de l'input (id= password) match  le pattern suivant :
let regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{12,20}$/;

         -> si le password match le pattern mettre l'input (password) en vert (backgroundColor)
         -> sinon mettre l'input (password) en rouge(backgroundColor)
Bonus : Ajouter un paragraphe (id = error)  dans la partie HTML :
Afficher à l'intérieur :
Si le password et l' email sont valides => valide,
Si le password ou l' email sont invalides => invalide ,
Utiliser test() plutôt que match() dans vos conditions. */

//récupération de l'input email
const email = document.getElementById('email');
const password = document.getElementById('password');
//regex email
let regexEmail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//regex password
let regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{12,20}$/;
//ajouter une écouteur sur email
email.addEventListener('keyup', ()=>{
    //test si l'email correspond au regex
    if(email.value.match(regexEmail)){
        //passer la couleur 
        email.style.backgroundColor = "green";
    }
    //test si le mail n'est pas valide
    else{
        email.style.backgroundColor = "red";
    }
});
password.addEventListener('blur', ()=>{
    //tester si le password correspond au regex
    if(password.value.match(regexPassword)){
        //passer la couleur de fond à vert
        password.style.backgroundColor = "green";
    }
    //test si le password n'est pas valide
    else{
        //passer la couleur de fond à rouge
        password.style.backgroundColor = "red";
    }
});

//correction bonus
//récupérer le bouton
const bt = document.getElementById('bt');
//récupérer le paragraphe 
const paragraphe = document.getElementById('error');
//ajouter un évenement clic sur le bouton
bt.addEventListener('click', ()=>{
    //test si le mail et le password sont valides
    if(regexEmail.test(email.value) && regexPassword.test(password.value)){
        //écrire valide dans le paragraphe
        paragraphe.textContent = "valide";
    }
    else{
        //écrire invalide dans le paragraphe
        paragraphe.textContent = "invalide";
    }
});
//version alternative avec la couleur du fond (email et password)
bt.addEventListener('click', ()=>{
    //test si le mail et le password sont valides
    if(email.style.backgroundColor == "green" && password.style.backgroundColor == "green"){
        paragraphe.textContent = "valide";
    }
    else{
        paragraphe.textContent = "invalide";
    }
});