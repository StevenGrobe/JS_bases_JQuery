console.log("exercice 4");

$(document).ready(function () {
    $('.btn').on('click', function() {
        let email = $('input').val(); 
        alert(`Merci ${ email } nous vous tiendrons informé des différentes offres`);
    });
    $('#myNavbar :first-child :last-child a').dblclick(function() {
        $('#myNavbar :first-child :last-child a').hide()
        console.log('dblclick & hide')
    });

    let count = 0
    $('img').on( 'click', function() {
        console.log('count');
        count += 1;
        $('.glyphicon-shopping-cart').text('('+count+')')
    });
    $('#myNavbar :last-child :last-child a').on( 'click', function() {
        console.log('cart')
    });

    let watchPicture = false;
    $('img').mouseover(function (img) {
    watchPicture = true;
    console.log("mouse on " + img.target.id);
    })

    $(".form-control").on('focus', function () {
        console.log('input click')
    });

    $(".form-control").on('input', function () {
        let email = $('input').val();
        console.log("user : "+email)
    });
    
});
