//tableau d'objet :

const usersHuman = [{
    type: "humain",
    name: "John Doe",
    email: "j.smith@gmail.com",
    age: 25
},
{
    type: "humain",
    name: "Jane Smith",
    email: "ja.doe@sfr.fr",
    age: 5
},
{
    type: "humain",
    name: "Le Vénérable",
    email: "levy@gmail.com",
    age: 500
}
];

const usersPet = [{
    type: "animal de compagnie",
    espece: "chien",
    name: "Rox",
    age: 7,
    propriétaire: "John Doe"
},
{
    type: "animal de compagnie",
    espece: "renard",
    name: "Roukie",
    age: 300,
    propriétaire: "Le Vénérable"
}
];

const usersXeno = [{
    type: "Xeno",
    espece: "Krogan",
    name: "Wrex",
    menace: "Rouge",
    age: 45
},
{
    type: "Xeno",
    espece: "Turien",
    name: "Garrus",
    menace: "Vert",
    age: 35
},
{
    type: "Xeno",
    espece: "Asari",
    name: "Liara",
    menace: "ULTRA Rouge",
    age: 25
}
];
const usersError = [
    { 
        type : "autre",
        name : "test1",    
    },
    {
        type: "autre",
        name: "test2"
    }
];
/* 1) Créer une constante tabData et lui assigner un tableau vide.
2) Ajouter à tabData les const usersHuman, usersPet et usersXeno dans l'ordre de votre choix, grâce à
une méthode de tableau.
3) Créer la fonction afficherHummain() qui prendra un objet en paramètre.
Faire en sorte qu'elle affiche dans la console le profil d'un humain sous la forme :
----------------------------------------
nom : nom_de_l'objet
email : mail_de_l'objet
age : age_de_l'objet ans
----------------------------------------
4) Créer la fonction afficherAnimal() qui prendra un objet en paramètre.
Faire en sorte qu'elle affiche dans la console le profil d'un animal sous la forme :
----------------------------------------
nom : nom_de_l'objet
espece : espece_de_l'objet
age : age_de_l'objet ans
propriétaire : propriétaire_de_l'objet
----------------------------------------
EVALUATION JAVASCRIPT : Base Algorithmique
 Mathieu MITHRIDATE
01-09-2023
01-09-2023
2
5) Créer la fonction afficherXeno() qui prendra un objet en paramètre.
Faire en sorte qu'elle affiche dans la console le profil d'un Xéno sous la forme :
----------------------------------------
nom : nom_de_l'objet
espece : espece_de_l'objet
age : age_de_l'objet ans
niveau de menace: menace_de_l'objet
----------------------------------------
6) Créer une fonction profil() qui prend un tableau d'objet en paramètre.
7) Faire en sorte que la fonction profil() parcourt chaque objet du tableau.
8) Dans la fonction profil(), pour chaque objet, SI l'objet est de type "humain", appeler la fonction
afficherHumain(). SINON SI l'objet est de type "animal de compagnie", appeler la fonction
afficherAnimal(). SINON SI l'obet est de type "Xeno", appeler la fonction afficherXeno(). SINON
afficher dans la console, le message d'erreur "Type de Profil non Existant".
9) Appeler la fonction profil() sur chacun des tableaux usersHuman, usersPet, usersXeno
10) Créer la fonction profilAll() que prend en paramètre un grand tableaux constitué de petit tableaux
qui sont constitué d'objet (voir la structure de tabData)
11) Faire en sorte que la fonction profilAll() appelle la fonction profil() sur chaque petit tableau.
12) Appeler la fonction profilAll() sur le tableau tabData.
13) Envoyer votre fichier script.js au formateur par MP */

//1) Créer une constante tabData et lui assigner un tableau vide.
const tabData = [];

//2) Ajouter à tabData les const usersHuman, usersPet et usersXeno dans l'ordre de votre choix, grâce à
//une méthode de tableau.
tabData.push(usersHuman,usersPet,usersXeno, usersError);

/* 3) Créer la fonction afficherHummain() qui prendra un objet en paramètre.
Faire en sorte qu'elle affiche dans la console le profil d'un humain sous la forme :
----------------------------------------
nom : nom_de_l'objet
email : mail_de_l'objet
age : age_de_l'objet ans
---------------------------------------- */
function afficherHumain(objet){
    const afficher = 
    `----------------------------------------
    nom : ${objet.name}
    email : ${objet.email}
    age : ${objet.age}
    ----------------------------------------`;
    console.log(afficher);
}
//test de la fonction
//afficherHumain(usersHuman[1]);
/* 4) Créer la fonction afficherAnimal() qui prendra un objet en paramètre.
Faire en sorte qu'elle affiche dans la console le profil d'un animal sous la forme :
----------------------------------------
nom : nom_de_l'objet
espece : espece_de_l'objet
age : age_de_l'objet ans
propriétaire : propriétaire_de_l'objet
---------------------------------------- */
function afficherAnimal(objet){
    const afficher = 
    `----------------------------------------
    nom : ${objet.name}
    espece : ${objet.espece}
    age : ${objet.age}
    propriétaire : ${objet.propriétaire}
    ----------------------------------------`;
    console.log(afficher);
}
//test de la fonction
//afficherAnimal(usersPet[0]);
/* 5) Créer la fonction afficherXeno() qui prendra un objet en paramètre.
Faire en sorte qu'elle affiche dans la console le profil d'un Xéno sous la forme :
----------------------------------------
nom : nom_de_l'objet
espece : espece_de_l'objet
age : age_de_l'objet ans
niveau de menace: menace_de_l'objet
---------------------------------------- */
function afficherXeno(objet){
    const afficher = 
    `----------------------------------------
    nom : ${objet.name}
    espece : ${objet.espece}
    age : ${objet.age}
    niveau de menace: ${objet.menace}
    ----------------------------------------`
    console.log(afficher);
}
//test de la fonction
//afficherXeno(usersXeno[0]);
/* 6) Créer une fonction profil() qui prend un tableau d'objet en paramètre.
7) Faire en sorte que la fonction profil() parcourt chaque objet du tableau.
8) Dans la fonction profil(), pour chaque objet, SI l'objet est de type "humain", appeler la fonction
afficherHumain(). SINON SI l'objet est de type "animal de compagnie", appeler la fonction
afficherAnimal(). SINON SI l'obet est de type "Xeno", appeler la fonction afficherXeno(). SINON
afficher dans la console, le message d'erreur "Type de Profil non Existant". */

function profil(tab){
    tab.forEach(element => {
        if(element.type == "humain"){
            afficherHumain(element);
        }
        else if(element.type == "animal de compagnie"){
            afficherAnimal(element);
        }
        else if(element.type == "Xeno"){
            afficherXeno(element);
        }
        else{
            console.log("Profil inexistant");
        }
    });
}
//tester la fonction
//profil(usersXeno);
//exemple avec une boucle for
function profilFor(tab){
    for(let i = 0; i<tab.length; i++){
        if(tab[i].type == "humain"){
            afficherHumain(tab[i]);
        }
        else if(tab[i].type == "animal de compagnie"){
            afficherAnimal(tab[i]);
        }
        else if(tab[i].type == "Xeno"){
            afficherXeno(tab[i]);
        }
        else{
            console.log("Profil inexistant");
        }
    }
}
//test version for
//profilFor(usersPet);
/* 10) Créer la fonction profilAll() que prend en paramètre un grand tableaux constitué de petit tableaux
qui sont constitué d'objet (voir la structure de tabData)
11) Faire en sorte que la fonction profilAll() appelle la fonction profil() sur chaque petit tableau.
12) Appeler la fonction profilAll() sur le tableau tabData. */

function profilAll(tab){
    tab.forEach(element =>{
        profil(element);
    });
}
//profilAll(tabData);
//version boucle for
function profilAllFor(tab){
    for(let i = 0; i<tab.length; i++){
        profilFor(tab[i]);
    }
}
profilAllFor(tabData);
