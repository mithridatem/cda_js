/* Créer une page HTML qui va contenir les éléments suivants :
-Un titre h1 -> "Liste des utilisateurs",
-Une div,
-Dans la div ajouter :
        --1 balise img,
        --3 paragraphes,
Depuis l'objet JS ci-dessous (remplacer les valeurs par vos propres informations):
 const user = {
  'id' : 1,
  'nom': 'votre nom',
  'prenom': 'votre prénom',
  'age': votre age,
  'image' :'./logo.jpg'
}

-Ajouter un attribut id à la div qui va avoir en valeur -> (user.id),
-Remplacer le contenu des 3 paragraphes par les valeurs user.nom, user.prenom et user.age,
-Remplacer l'image par l'url contenu dans user.image
Mettre en forme en JS les éléments suivants :
-paragraphe nom, prenom, age : police taille 11 px, couleur blue,
-taille de l'image : 100 px de large et 100 px de long,
-Aligner l'image à en haut à droite et ajouter un margin de 10 px.
-remplacer la couleur de fond de la div : rgb(220, 220, 220).
NB : pour remplacer le contenu text d'un élément HTML, utilisez textContent */
const user = {
                id : 1,
                nom: "Mithridate",
                prenom: "Mathieu",
                age: 44,
                image :'./logo.jpg'
        }
//récupération de la div
const div = document.querySelector('div');
//ajout de l'attribut id avec en valeur 1
div.setAttribute('id', user.id);
//récupération de la liste des paragraphes
//version  nodelist
const liste = document.querySelectorAll('p');
//version html Collection
const liste2 = document.getElementsByTagName('p');

//paragraphe individuel
const p1 = document.querySelector('div > p:nth-child(2)');
const p2 = document.querySelector('div > p:nth-child(3)');
const p3 = document.querySelector('div > p:nth-child(4)');
console.log(p1,p2,p3)
liste[0].textContent = user.nom;
liste[1].textContent = user.prenom;
liste[2].textContent = user.age;

//remplacer la valeur de src image
const img = document.querySelector('img');
img.src = user.image;
//style des paragraphes
liste.forEach(element=>{
        element.style.color = "blue";
        element.style.fontSize = "11px";
});
//taille de l'image
img.style.width = "100px";
img.style.height = "100px";
img.style.position=  "absolute";
img.style.top= "50px";
img.style.right= 0;
img.style.margin = "10px"
//couleur de la div
div.style.background = "rgb(220, 220, 220)";
div.style.height = "200px"

