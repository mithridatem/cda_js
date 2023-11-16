/* Créer une classe Personnage qui va contenir les éléments suivants :
-nom, force, défense, vie
-une méthode pour attaquer 
(elle va soustraire à la vie du personnage (cible) la valeur de attaque (attaquant) 
moins la défense (cible),
Créer une classe Combat qui  va contenir les éléments suivants :
-nbr de tour, score joueur 1, score joueur 2,
-Une méthode qui va lancer les combats (elle va appeler la méthode attaque du joueur 1), (appeler la méthode d'attaque du joueur 2). 
Cela va s'exécuter autant de tour que la valeur nbr de tour. 
Celui qui arrive à zéro à perdu.
Ella va afficher le nom du gagnant. */
class Personnage{
    constructor(nom, force, defense, vie){
        this.nom = nom;
        this.force = force;
        this.defense = defense;
        this.vie = vie;   
    }
    //méthode
    attaquer(cible){
        const random = Math.floor((Math.random() * 6) + 1);
        //cas coup critique
        if(random == 6){
            //réduire la vie 
            cible.vie -= (this.force-cible.defense)*2;
        }
        //cas echec critique
        else if(random == 1){
            cible.vie -= 0;
        }
        //sinon coup normal
        else{
            cible.vie -= (this.force-cible.defense);
        }
    }
}
class Combat{
    //attribut statique (score des 2 joueurs)
    static scoreJ1 = 0;
    static scoreJ2 = 0;
    //Constructeur 
    constructor(p1, p2, nbrTour){
        this.p1 = p1;
        this.p2 = p2;
        this.nbrTour = nbrTour;
    }
    //Méthode pour lancer la partie
    lancerCombat(){
        for(let i = this.nbrTour; i > 0; i--){
            console.log(`tour restant ${i}`);
            //lancer l'attaque des 2 joueurs
            this.p1.attaquer(this.p2);
            this.p2.attaquer(this.p1);
            //test si la vie du joueur 1 arrive à 0
            if(this.p1.vie <= 0){
                Combat.scoreJ1 += 1;
                return `${this.p2.nom} a gagné`;
            }
            //test si la vie du joueur 2 arrive à 0
            else if(this.p2.vie <= 0){
                Combat.scoreJ2 += 1;
                return `${this.p1.nom} a gagné`;
            }
        }
        //test si les 2 joueurs ont leur vie suppérieure à 0
        if(this.p1.vie > 0 && this.p2.vie >0){
            return `Egalité`;
        }
    }
}
//instancier les 2 personnages
const mage = new Personnage("Mage", 7, 2, 10);
const voleur = new Personnage("Voleur", 6, 4, 8);
//instancier la classe combat
const partie = new Combat(mage, voleur, 10);
//lancer une partie
console.log(partie.lancerCombat());

//lancement de 10 partie
for(let j = 0; j< 10; j++){
    console.log(partie.lancerCombat());
}
console.log(`Le score du joueur 1 est égal à : ${Combat.scoreJ1}`);
console.log(`Le score du joueur 2 est égal à : ${Combat.scoreJ2}`);