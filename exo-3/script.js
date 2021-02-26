console.log('----------');
console.log('Exercice 3');
console.log('----------');

// Faites toutes vos manipulations de DOM ici

// Et pas dans votre fichier HTML ! 

$(document).ready(function () {
    $('h1').text('Steven')
    $('#tagline').text("J'apprends JS")
    $('#myNavbar ul:first').remove();
    $('.glyphicon').addClass('bi bi-arrow-bar-left').removeClass('glyphicon glyphicon-log-in');
    $('footer p').html('<b>Copyright 2021</b>');
    $('div h3').text('Mes projets')
    $('.container-fluid .col-sm-3 p').text('Mon projet');
    $('img').attr('src', 'https://source.unsplash.com/random/225x125');
    $('#work1').before(`
    <div id='work1' class='row'>
        <div class='col-sm-3'>
            <p>Mon dernier projet</p>
            <img id="last-project" src='https://source.unsplash.com/random/500x250'>
        </div>
    </div>
    `)
    $('footer').addClass('intro');

})
