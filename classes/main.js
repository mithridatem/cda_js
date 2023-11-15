class Animal{
    //attributs
    espece;
    nbrPattes;
    age;
    taille;
    poid;
    couleur;
    //Constructeur
    constructor(newEspece, newNbrPattes, newTaille, newPoid){
        this.espece = newEspece;
        this.nbrPattes = newNbrPattes;
        this.taille = newTaille;
        this.poid = newPoid;
    }
    //méthode
    crier(){
        if(this.espece == "Tigre" || this.espece == "tigre"){
            console.log("Grrr");
        }
        else if(this.espece == "Chat" || this.espece == "chat"){
            console.log("Miaou");
        }
        else if(this.espece == "Chien"|| this.espece == "chien"){
            console.log("Ouaff");
        }
        else if(this.espece == "Coq" || this.espece == "coq"){
            console.log("Cocorico");
        }
        else{
            console.log("Aucun cris pour cette espéce");
        }
        
    }
    dormir(){
        console.log("Zzzzz");
    }
}
const chien = new Animal('chien', 4, 50, 9);
const coq = new Animal('coq', 2, 40, 3);
chien.crier();
coq.crier();
chien.dormir();
coq.dormir();