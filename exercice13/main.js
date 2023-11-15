/* Créer une classe Maison avec comme attributs (constructeur):
-Nom,
-Longueur,
-Largeur,
Créer une méthode périmètre de la maison, => (longueur+largeur) x 2)
Créer une méthode surface de la maison, => longueur*largeur
Afficher le périmètre dans la console en mètre linéaire,
Afficher la surface dans la console en mètre carré,

Bonus :
Ajouter un attribut nbrEtage à la maison,
Afficher dans la console la surface pour 3 étages en mètre carrés. 
 */
class Maison {
	constructor(newNom, newLongueur, newLargeur, newEtage = 1) {
		this.nom = newNom;
		this.longueur = newLongueur;
		this.largeur = newLargeur;
		this.nbrEtage = newEtage;
	}
	perimetre() {
		return (this.longueur + this.largeur) * 2;
	}
	surface() {
		return this.longueur * this.largeur * this.nbrEtage;
	}
}
//instancier un objet Maison
const villa = new Maison("villa", 10, 20);
console.log(`Le périmètre de ${villa.nom} est égal à : ${villa.perimetre()} m`);
console.log(`La surface de ${villa.nom} est égale à : ${villa.surface()} m²`);
const immeuble = new Maison("immeuble", 30, 40);
console.log(
	`Le périmètre de ${immeuble.nom} est égal à : ${immeuble.perimetre()} m`
);
console.log(
	`La surface de ${immeuble.nom} est égale à : ${immeuble.surface()} m²`
);
