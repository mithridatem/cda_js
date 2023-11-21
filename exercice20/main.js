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
const div = document.querySelector('div');
//ajout de l'attribut id
div.setAttribute('id', user.id);
//récupération des paragraphes avec un sélecteur css
const p1 = document.querySelector('div>p:nth-child(2)');
const p2 = document.querySelector('div>p:nth-child(3)');
const p3 = document.querySelector('div>p:nth-child(4)');
//version alternative pour récupérer les paragraphes (individuel)
const p1bis = div.firstChild.nextSibling;
const p2bis = p1bis.nextSibling;
const p3bis = p2bis.nextSibling;
//dans une node list
const liste = document.querySelectorAll('p');
//remplacer le contenu
p1.textContent = user.nom;
p2.textContent = user.prenom;
p3.textContent = user.age;
//ajouter la source de l'image
const img = document.querySelector('div>img');
//modifier avec setAttribute
/* img.setAttribute('src', user.image); */
//modifier la source avec src
img.src= user.image;
//modifier le style des paragraphes
p1.style.color = "blue";
p1.style.fontSize = "11px";
p2.style.color = "blue";
p1.style.fontSize = "11px";
p3.style.color = "blue";
p1.style.fontSize = "11px";
//avec une boucle
liste.forEach(paragraphe=>{
        paragraphe.style.color = "blue";
        paragraphe.style.fontSize = "11px";
});
//mise en forme l'image
img.style.height = "100px";
img.style.width = "100px";
img.style.display = "absolute";
img.style.right = 0;
img.style.top = 0;
img.style.margin = "10px";
//couleur de fond de la div
div.style.backgroundColor = "rgb(220,220,220)";