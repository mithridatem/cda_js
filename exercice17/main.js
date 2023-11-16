/* Gérer des compte en banque :
Créer une classe CompteBancaire avec des méthodes de crédit, 
de retrait, de visualisation de l’état du compte bancaire (en console), 
on doit pouvoir aussi faire un virement d’un membre à un autre.
Faire une scénario avec la gestion de 3 comptes crédités à 1000 € chacun (Alex, Clovis, Marco)
Puis Alex retire 100
Puis Marco fait un virement de 300 à Clovis
Enfin Alex tente un retrait de 600
Afficher tous les soldes finaux.
Ces compte sont placés dans un tableau associatif de clients (modifié)
 */

class CompteBancaire{
    constructor(nom, solde){
        this.nom = nom;
        this.solde = solde;
    }
    credit(montant){
        this.solde += montant;
    }
    debit(montant){
        if(this.solde < montant){
            console.log("les fonds ne sont pas disponible");
        }
        else{
            this.solde -= montant;
        }
    }
    virement(montant, client){
        this.debit(montant);
        if(this.solde<montant){
            console.log("le virement est impossible");
        }
        else{
           client.credit(montant); 
        }
    }
    detail(){
        return `${this.nom} posséde : ${this.solde}`;
    }
}
//instancier 3 utilisateurs
const alex = new CompteBancaire("Alex", 1000);
const clovis = new CompteBancaire("Clovis", 1000);
const marco = new CompteBancaire("Marco", 1000);
//Alex retire 100
alex.debit(100);
console.log(alex.detail());
//Marco fait un virement de 300 à Clovis
marco.virement(1400, clovis);
console.log(marco.detail());
console.log(clovis.detail());
alex.debit(1600);
console.log(alex.detail());