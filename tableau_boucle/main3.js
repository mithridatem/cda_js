//exemple ajouter un tableau associatif dans un tableau indéxé
let notes = [];
let cpt = 0;
while(cpt<5){
    const note = {
        "nom": prompt("Saisir le nom"),
        "prenom": prompt("saisir le prénom"),
        "note": parseInt(prompt("saisir la note"))
    }
    notes.push(note);
    cpt++
}
//récupérer la note du second utilisateur
notes[1].note