/* Exercice 14 Classes et Objet :
Créer un programme permettant de Calculer l’IMC d’une personne
    -Créer une classe Imc avec un constructeur qui recevra un nom, un poids, une taille
    -Créer une fonction de calcul d’IMC, qui retourne le résultat du calcul 
    (à 2 nombre après la virgule si possible)
    -Créer une fonction d’affichage « display », elle a pour rôle d’afficher en console : 
Le nom de la personne, son poids, sa taille et son imc dans une phrase 
    -En dehors de la class (donc dans le programme principal), 
    récupérer la variable list (un tableau de nouvelle instances de la class) 
    -Trouver un moyen de parcourir les éléments dans la variable list, 
    sur chaque element utiliser la fonction display . */
    class Imc{
        constructor(nom, poids, taille){
            this.nom = nom;
            this.poids = poids;
            this.taille = taille;
        }
        //fonction pour retourner l'imc 
        caculImc(){
            return (this.poids/(this.taille**2)).toFixed(2);
        }
        //fonction pour afficher les informations d'un utilisateur
        display(){
            console.log(`Nom : ${this.nom}, poids : ${this.poids}, taille : ${this.taille}, imc ${this.caculImc()}`)
        }
    }
    //création d'un tableau list
    let list = [];
    //ajout de 4 objet Imc
    list.push(new Imc('test1', 60, 1.60));
    list.push(new Imc('test2', 70, 1.45));
    list.push(new Imc('test3', 90, 1.90));
    list.push(new Imc('test4', 88, 1.76));
    //parcours de la liste avec boucle forEach
    list.forEach((element)=>{
        //appel de la fonction display
        element.display();
    });
    //parcours de la liste avec une boucle For
    /* for(let i = 0; i<list.length; i++){
        list[i].display();
    } */
