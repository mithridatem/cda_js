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
//récupération de la div (tasks)
const tasks = document.querySelector('#tasks');

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
    //récupérer la valeur dans l'input (id = task)
    const task = document.querySelector('#task').value;
    //vérification de la valeur de tache
    if(task!=""){
        e.parentNode.firstChild.textContent = task;
    }
}