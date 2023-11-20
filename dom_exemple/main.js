//récupérer des élements HTML
//récupération du premier élément qui correspond à un sélecteur
const titre = document.querySelector("h1");
console.log(titre);

//récupération du premier élément qui correspond un id
const article1 = document.getElementById("article1");
console.log(article1);

//récupération de tous les articles avec un sélecteur (nodelist)
const articles = document.querySelectorAll('.article');
console.log(articles);

//récupération de tous les articles avec leurs classe (htmlCollection)
const articles2 = document.getElementsByClassName('article');
console.log(articles2);

//récupération de tous les élement par leur tagName (htmlCollection)
const titres = document.getElementsByTagName('h1');
console.log(titres);

//récupération d'un élément par son attribut name
const nom = document.querySelector('input[name="nom"]');
console.log(nom);

//récupération d'un élément par son attribut name (nodeListe avec 1 élémént)
const nom2 = document.getElementsByName('nom');
console.log(nom2);

//remplacer le contenu d'un élément html
titre.textContent = "Nouveau texte"
//ou
titre.innerText = "Nouveau texte 2"

//ajouter du style css sur un élément html
titre.style.color = "red";
//on remplace font-size en css -> fontSize -> js
titre.style.fontSize = "14px";