/* En vous inspirant de l'exemple ci-dessus :
Partie HTML :
-un titre h1 = liste des tâches,
-un input de type text (id= task),
-un bouton (id = add, onclick = addTask()) texte Ajouter,
-un bouton (id = delAllTask, onclick = delAllTask()) texte Tout Supprimer,
-un bouton (id = reload, onclick = reload()) texte Recharger la page,
-une div (id = tasks)
Partie JS :
-Créer une fonction addtask qui va ajouter à chaque clic sur le bouton 
une nouvelle tache à la div (id = task),:
-Récupérer la div (tasks)
Récupérer la valeur de l'input (id task),
-Créer un paragraphe,
Ajouter la valeur de l'input (id task)  au paragraphe,
Ajouter le paragraphe à la div (id = tasks)
-Créer une fonction delAllTask qui va à chaque clic sur le bouton supprimer tous 
les enfants (child) contenu dans la div (tasks),
-Créer une fonction reload qui va à chaque clic sur le bouton recharger la page.

Bonus :
-Dans la fonction addTask (remplacer le code précédent) :
A chaque clic sur la fonction : 
      -ajouter une div (class = container),
          -> à l'intérieur de la div pour aller ajouter un paragraphe,
          -> récupérer le contenu de l'input texte (task) et passer la valeur au paragraphe,
          -> ajouter un bouton (id = delete, onclick = deleteTask(this),
          -> ajouter un bouton (id = update, onclick = updateTask(this),
          ->Ajouter une fonction deleteTask qui va :
             Supprimer la tache sélectionnée,
          -Ajouter une fonction updateTask qui va :
            Mettre à jour le nom de la tache depuis l'input du formulaire (id = task)
NB : on à besoin d'utiliser la création d'élément (createElement() et appendChild()) */

//récupération de la div (id="tasks")
const tasks = document.querySelector('#tasks');
//function addTask
function addTask(){
    //récupération de la valeur saisie dans l'input task
    const task = document.getElementById('task').value;
    if(task!=""){
        //créer une div
        const container = document.createElement('div');
        //ajouter une classe
        container.setAttribute('class', 'container');
        //créer les 2 boutons
        const btDel = document.createElement('button');
        //ajouter id au bouton
        btDel.setAttribute('id', 'delete');
        //ajout du texte du bouton
        btDel.textContent = "Delete";
        //ajouter le onclick au bouton
        btDel.setAttribute('onclick', "deleteTask(this)");
        //créer le bouton update
        const btUpdate = document.createElement('button');
        //ajouter un id au bouton
        btUpdate.setAttribute('id', 'update');
        //ajout du texte du bouton
        btUpdate.textContent = "Update";
        //ajouter la fonction updateTask au bouton
        btUpdate.setAttribute('onclick', 'updateTask(this)');
        //créer un paragraphe
        const paragraphe = document.createElement('p');
        //ajouter la valeur de l'input au nouveau paragraphe
        paragraphe.textContent = task;
        //ajouter les enfants à la div (id="container")
        container.appendChild(paragraphe);
        container.appendChild(btDel);
        container.appendChild(btUpdate);
        //ajouter container à la div tasks
        tasks.appendChild(container);
    }
}
function delAllTask(){
    //boucle pour parcourir le premier enfant
    while(tasks.firstChild){
        //supprimer le premier enfant
        tasks.firstChild.remove();
    }
}
function reload(){
    //alternative
    //window.location.reload();
    //version raccourci
    location.reload();
}
//fonction supprimer une tache
function deleteTask(e) {
    //récupére le bouton-> passe au parent et on supprime le parent
    e.parentNode.remove();
}
//fonction pour mettre à jour une tache
function updateTask(e){
    //récupérer la valeur de task (input)
    const task = document.querySelector('#task').value;
    if(task!=""){
        //mise à jour du paragraphe
        e.parentNode.firstChild.textContent = task;
    }
}