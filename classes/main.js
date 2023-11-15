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
        if(this.espece == "Chat" || this.espece == "chat"){
            console.log("Miaou");
        }
    }
}
const tigre = new Animal('tigre', 4, 150, 180);
const chat = new Animal('chat', 4, 30,4);

console.log(tigre);
tigre.taille = 180;
tigre.couleur = "Blanc";
console.log(tigre);
tigre.crier();
chat.crier();