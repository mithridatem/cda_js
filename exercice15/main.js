/* -Créer une classe Vehicule avec les attributs suivants :
nom, couleur, nbrRoue, vitesse,
-Instancier 2 nouveaux Vehicule avec les paramètres suivants :
-Objet voiture (nomVehicule = « Mercedes CLK », nbrRoue = 4, vitesse 250),
-Objet moto (nomVehicule = « Honda CBR », nbrRoue = 2, vitesse = 280),
-Créer une fonction detect() qui détecte si le véhicule est une moto ou une voiture 
(la méthode retourne une string  moto ou voiture avec return),
-Exécuter la méthode detect() sur les 2 objets voiture et moto,
-Afficher le type de Vehicule (méthode detect afficher dans la console)
-Créer une méthode boost qui ajoute 50 à la vitesse d’un Vehicule
-Appliquer la méthode boost a la voiture,
-Afficher la nouvelle vitesse de la voiture,

Bonus :
-Créer une méthode plusRapide() dans la classe Vehicule qui compare la vitesse des différents véhicules (moto et voiture) et retourne le Vehicule le plus rapide des 2 avec un return.
-Exécuter la méthode plusRapide(),
-Afficher le Vehicule le plus rapide dans la console. */

class Vehicule{
    constructor(nom, nbrRoue, vitesse, couleur= "bleu"){
        this.nom = nom;
        this.couleur = couleur;
        this.nbrRoue = nbrRoue;
        this.vitesse = vitesse;
    }
    detect(){
        //test si le nbr de roue est égal à 4
        if(this.nbrRoue == 4){
            return "Voiture";
        }
        //test si le nbr de roue est égal à 2
        else if(this.nbrRoue == 2){
            return "Moto";
        }
        //test si le nbr de roue est différent de 4 ou 2
        else{
            return "Autre véhicule";
        }
    }
    boost(){
        this.vitesse += 50;
    }
    plusRapide(objet){
        //test si l'objet courant est plus rapide
        if(this.vitesse > objet.vitesse){
            return `Le véhicule le plus rapide est : ${this.nom}`;
        }
        //test si l'objet en paramètre est plus rapide
        else if(this.vitesse < objet.vitesse){
            return `Le véhicule le plus rapide est : ${objet.nom}`;
        }
        //test si l'objet courant à la même vitesse que l'objet en paramètre
        else{
            return `Les 2 véhicules ont la même vitesse`;
        }
    }
}
//Instancier 2 objets Vehicule
const voiture = new Vehicule("Mercedes CLK", 4, 250);
const moto = new Vehicule("Honda CBR", 2, 280);
const camion = new Vehicule("Poids lourd", 8, 150);

//Utilisation de la méthode detect 
console.log(`Le type de véhicule de ${voiture.nom} est : ${voiture.detect()}`);
console.log(`Le type de véhicule de ${moto.nom} est : ${moto.detect()}`);
console.log(`Le type de véhicule de ${camion.nom} est : ${camion.detect()}`);

//Utilisation de la méthode boost sur la voiture
voiture.boost();
//Affichage de la vitesse de la voiture
console.log(`La nouvelle vitesse de ma voiture est : ${voiture.vitesse} km/h`);
//Appel de la méthode plusRapide
console.log(voiture.plusRapide(moto));
console.log(moto.plusRapide(voiture));