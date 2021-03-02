console.log('----------');
console.log('Exercice 3');
console.log('----------');

// Faites toutes vos manipulations de DOM ici

// Et pas dans votre fichier HTML ! 

$(document).ready(function () {
    $('h1').text('Steven') // Change le h1
    $('#tagline').text("J'apprends JS") // change le texte dans l'id tagline
    $('#myNavbar ul:first').remove(); // Enlève la navigation dans la navbar
    $('.glyphicon').addClass('bi bi-arrow-bar-left').removeClass('glyphicon glyphicon-log-in'); // Ajoute et enlève des class pour modifier l'icon
    $('footer p').html('<b>Copyright 2021</b>'); // Change le <p> du footer
    $('div h3').text('Mes projets') // Modifie le h3 dans une div
    $('#work1 p').replaceWith("Mon projet"); // Modifie 
    $('img').attr('src', 'https://source.unsplash.com/random/225x125'); // Modifie une image
    $('#work1').before(` 
    <div id='work1' class='row'>
        <div class='col-sm-3'>
            <p>Mon dernier projet</p>
            <img id="last-project" src='https://source.unsplash.com/random/500x250'>
        </div>
    </div>
    `) // Ajoute du html avant l'id work1
    $('footer').addClass('intro');  // Ajoute une class

})
