/* Ajouter les éléments HTML suivants dans votre page index.html :
-Titre h1 avec un texte à l'intérieur,
-Une div avec du texte à l'intérieur,
-Dans la div un paragraphe avec du texte à l'intérieur,
En JS :
Vous allez changer:
-la taille de la police du titre h1 en 14 px,
-la police de la div et du paragraphe en Arial,
-la couleur du texte du paragraphe en vert,
-Ajouter un margin top à la div de 30 px,
Remplacer :
-le contenu du titre h1 par -> nouveau titre,
-le contenu du paragraphe -> nouveau contenu du paragraphe.
NB : En utilisant querySelector. (textContent pour remplacer le texte)
Bonus : remplacer le texte de la div sans suppimer le paragraphe à l'intérieur.  */
//récupération des éléments HTML
const titre = document.querySelector('h1');
const div = document.querySelector('div');
const paragraphe = document.querySelector('div > p');
//modification du style du titre
titre.style.fontSize = "14px";
//modification du style de la div
div.style.fontFamily = "Arial";
//modification du paragraphe
paragraphe.style.color = "green";
//ajouter un margin top sur la div
div.style.marginTop = "30px";
//remplacer le texte du titre
titre.textContent = "nouveau titre";
//remplacer le texte du paragraphe
paragraphe.textContent = "nouveau contenu du paragraphe";

//bonus
div.firstChild.textContent = "remplacement du texte 1 enfant";

