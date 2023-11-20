/* Gérer une PME
Cahier des charges :

-Un Salarié a un nom, prénom, âge, salaire mensuel
Il est payé sur N mois.
En plus il y a XXX de charges

-Une Pme c’est un nom, une équipe de plusieurs salariés
Grace à ses ventes elle a des revenus R
Mais aussi … : 
des frais fixes FF (impôts etc…)
Des frais d’achats de matériel et de logiciels FA

TODO : 
Créer une classe Pme et une classe Employee
Utiliser des fonctions
Faire le bilan annuel de l’entreprise et l’afficher en console.
(Bilan reste en solde de la Pme)

Détails : 
3 salariés qui gagnent par mois : 2000, 3000 et 4000 euros
R = 300000 (trois cent mille)
FF = 20000 (vingt mille)
FA = 50000 (cinquante mille)
N = 12
XXX = 10% */
//variables
const N = 12;
const XXX = 1.10;
//classe salarie
class Salarie{
    salaireAnnuel = 0;
    constructor(nom, prenom, age, salaire){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.salaire = salaire;
    }
    calculSalaire(){
        this.salaireAnnuel = (this.salaire*N*XXX).toFixed(0);
        return this.salaireAnnuel;
    }
}
//class PME
class Pme{
    solde = 0;
    salaires = 0;
    constructor(revenue, fraisFixe, fraisAchat, equipe){
        this.revenue = revenue;
        this.fraisFixe = fraisFixe;
        this.fraisAchat = fraisAchat;
        this.equipe = equipe;
    }
    //calcul du bilan de l'entreprise (revenue - tous les frais)
    bilan(){
        //calcul du montant de salaire des employés
        this.equipe.forEach(element => {
            //appel de la fonction calculSalaire sur chaque employé
            this.salaires += parseInt(element.calculSalaire());
        });
        //calcul du solde restant
        this.solde = this.revenue-this.fraisFixe-this.fraisAchat-this.salaires;
        //retour du solde de l'entreprise
        return this.solde;
    }
}
//ajout de 3 salaries
const bob = new Salarie("Bob", "Bob", 25, 2000);
const angie = new Salarie("Angie", "Angie", 29, 3000);
const tom = new Salarie("Tom", "Tom", 40 , 4000);

//création d'un tableau de salarie
let tab = [];
tab.push(bob);
tab.push(angie);
tab.push(tom);
//créer une entreprise
const monEntreprise = new Pme(300000,20000,50000,tab);
//Affichage du solde de l'entreprise
console.log(`Il reste à l'entreprise : ${monEntreprise.bilan()} €`);
