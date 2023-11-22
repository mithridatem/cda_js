/* Depuis l'exercice 24 précédent modifier la fonction updateTask :
-Ajouter une variable (let)  statut qui va contenir un boolean => true
elle va effectuer le traitement suivant (updateTask):
-ajouter une condition qui va tester la valeur de la variable statut :
       -> si statut est égal à true (if)
                -1 récupérer la valeur du paragraphe,
                -2 créer un input de type texte,
                -3 remplacer le paragraphe par l'input précédemment créé, (replaceChild(nouvel élément, enfant)
                -4 assigner la valeur (1) à l'input,
                -5 passer statut à false,
      -> si statut est égal à false (else) :
                -1 récupérer la valeur de l'input (value),
                -2 créer un paragraphe,
                -3 remplacer l'input par le paragraphe replaceChild (paragraphe, enfant (input),
                -4 assigner au paragraphe la valeur (1),
                -5 passer statut à true,*/
const tasks = document.querySelector('#tasks'); 
let statut = true;
//ajout de la fonction addTask
function addTask(){
    //récupérer la valeur dans l'input (id = task)
    const task = document.querySelector('#task').value;
    //tester la valeur de task
    if(task!=""){
        //créer une div
        const container = document.createElement('div');
        //assigner un id
        container.setAttribute('id', 'container');
        //création de l'élément
        const paragraphe = document.createElement('p');
        //assigner la valeur au paragraphe
        paragraphe.textContent = task;
        //créer le bouton delete
        const btDel = document.createElement('button');
        //ajouter les attributs
        btDel.setAttribute('id', 'delete');
        btDel.setAttribute('onclick', 'deleteTask(this)');
        btDel.textContent = "delete";
        //créer le bouton update
        const btUpdate = document.createElement('button');
        //ajouter les attributs
        btUpdate.setAttribute('id', 'update');
        btUpdate.setAttribute('onclick', 'updateTask(this)');
        btUpdate.textContent = "update";
        //ajouter les éléments dans la div container
        container.appendChild(paragraphe);
        container.appendChild(btDel);
        container.appendChild(btUpdate);
        //ajouter container à la div tasks
        tasks.appendChild(container);
    }
}

//fonction supprimer les taches
function delAllTask(){
    while(tasks.firstChild){
        tasks.firstChild.remove();
    }
}

//fonction pour recharger la page
function reload(){
    location.reload();
}
//fonction supprimer une tache (la tache ciblée)
function deleteTask(e){
    e.parentNode.remove();
}
//fonction pour mette à jour une tache
function updateTask(e){
    //tester si la variable statut est à true
    if(statut){
        //récupére la valeur du paragraphe
        const valeur = e.parentNode.firstChild.textContent;
        //créer un input de formulaire
        const input = document.createElement('input');
        //remplace le paragraphe par l'input
        e.parentNode.replaceChild(input, e.parentNode.firstChild);
        //assigner la valeur à l'input
        e.parentNode.firstChild.value = valeur;
        //passe le statut à false
        statut = false;
        //changer le texte du bouton
        e.parentNode.firstChild.nextSibling.nextSibling.textContent = "valider";
    }
    //test si statut est à false
    else{
        //récupérer la valeur de l'input
        const recup = e.parentNode.firstChild.value;
        //créer un paragraphe
        const paragraphe = document.createElement('p');
        //remplacer l'input par le paragraphe
        e.parentNode.replaceChild(paragraphe, e.parentNode.firstChild);
        //ajouter la valeur au paragraphe
        e.parentNode.firstChild.textContent = recup;
        //passer le statut à true
        statut = true;
        //changer le texte du bouton
        e.parentNode.firstChild.nextSibling.nextSibling.textContent = "update";
    }
}