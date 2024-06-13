var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');

addToDoButton.onclick = function(){
    //vérifier si l'input n'est pas vide
    if(inputField.value != ""){
        //si l'input n'est pas vide, créer un paragraphe
        var paragraph = document.createElement('p');
    }
    //valorisé ce paragraphe avec le conternu de l'input
    paragraph.innerText = inputField.value;

    //stylisé le paragraph
    paragraph.classList.add('paragraph_style');

    //insérer le paragraphe dans l'élément toDoContainer
    toDoContainer.appendChild(paragraph);

    //vidé l'input quand le paragraphe est ajouté
    inputField.value = "";

    //barré le paragraphe quand on clique dessus
    paragraph.addEventListener('click', function(){
        paragraph.classList.add('paragraph_click');
    })

    //supprimer la tache quand on doucle clique sur la tâche
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })

}
//Référence FaizDev https://www.youtube.com/watch?v=zKUjDQkofSo&list=PLuMW20nBgcbpUuBu8DUMvBN3rXtHDHGGz&index=2