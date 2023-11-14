/* //tableau pour stocker les utilisateurs
let users = [];

//boucle pour ajouter 5 utilisateurs (tableau associatif user)
for(let i = 0; i<5; i++){
    //création du tableau associatif user
    const user = {
        "nom": prompt("Saisir le nom de l'utilisateur"),
        "prenom": prompt("Saisir le prénom de l'utilisateur"),
        "age": prompt("Saisir l'age' de l'utilisateur")
    }
    //ajouter le tableau au tableau users
    users.push(user);
}
//stocker l'age minimum
let minAge = users[0].age;
//stocker l'indice
let indice = 0;
//boucle pour parcourir le tableau users
for(let i = 0; i<users.length; i++){
    //tester si la valeur de l'age est plus petite que minAge
    if(users[i].age<minAge){
        minAge = users[i].age;
        indice = i;
    }
}
console.log(`L'utilisateur : ${users[indice].nom} ${users[indice].prenom} est le plus jeune`);

 */

//version avec une seule boucle
//variable pour stocker le tableau
let users2 = [];
//variable pour stocker l'age minimum
let minAge2 = 0;
//variable pour stocker l'indice de l'utilisateur (age le plus petit)
let indice2 = 0;

for(let i = 0; i<5; i++){
    //création du tableau associatif user
    const user = {
        "nom": prompt("Saisir le nom de l'utilisateur "+(i+1)),
        "prenom": prompt("Saisir le prénom de l'utilisateur "+(i+1)),
        "age": parseInt(prompt("Saisir l'age' de l'utilisateur "+(i+1)))
    }
    //ajouter le tableau au tableau users
    users2.push(user);
    if(i == 0){
        indice2 = i;
        minAge2 = users2[indice2].age;
    }
    if(i>0 && users2[i].age<minAge2){
        minAge2 = users2[i].age;
        indice2 = i;
    }
}
console.log(`L'utilisateur : ${users2[indice2].nom} ${users2[indice2].prenom} est le plus jeune`);