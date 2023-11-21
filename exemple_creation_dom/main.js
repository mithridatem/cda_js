//récupération de la div (id="container")
const container = document.querySelector('#container');
//stocker dans une variable un élément HTML
const paragraphe = document.createElement('p');
//ajouter du contenu au paragraphe
paragraphe.textContent = "ajout de texte";
//ajouter des attributs
paragraphe.setAttribute('id', "paragraphe1");
//ajouter à un parent
container.appendChild(paragraphe);

//récupérer l'élement html h1
const titre = document.querySelector('h1');
//supprimer du dom
titre.remove();