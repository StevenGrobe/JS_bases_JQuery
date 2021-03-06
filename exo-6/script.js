console.log("exercice 6");

// Verifie que la chaine de charactère est bien un email
function isEmail(email) {
    var regex = /^(([a-zA-Z0-9_.+-])+\@([a-zA-Z0-9-])+\.([a-zA-Z0-9]{2,4}))+$/; // regex sert à vérifier des chaines de caracteres spécial (email, num sécu, num siret etc etc)
    // /^ début de ligne
    // [a-zA-Z0-9_.+-] = 1er groupe  de chaine de caractere
    // \@ [a-zA-Z0-9-] = Après le @ 2nd groupe
    // \. [a-zA-Z0-9] {2,4} = Après le . 3eme groupe, avec une longueur comprise entre 2 et 4
    // $/ fin de ligne
    return regex.test(email);
}

$("#subBtn").click(function () {
    // Verification Email
    if (!$('#mail').val()) { // On vérifie la valeur de l'id mail
        $("#mailAlert").fadeIn(); // Montre l'alerte
        $("#mailAlert").text("Email obligatoire"); // Affiche alerte en ajoutant du texte à id mailAlert
    } else if (!isEmail($('#mail').val())) { // Vérification regex
        $("#mailAlert").fadeIn();
        $("#mailAlert").text("Veuillez entrer un email valide");
    } else {
        $("#mailAlert").fadeOut(); // Cache l'alerte
    }

    // Verification Mot de passe 
    if (!$("#mdp").val()) { // On vérifie la valeur de l'id mdp
        $("#mdpAlert").fadeIn(); // Montre l'alerte
        $("#mdpAlert").text("Mot de passe obligatoire");
    } else if ($("#mdp").val().length < 6) { // Vérifie la taille du mdp < à 6
        $("#mdpAlert").fadeIn();
        $("#mdpAlert").text("Veuillez entrer un mot de passe de + 6 caractères");
    } else {
        $("#mdpAlert").fadeOut(); // Cache l'alerte
    }

    // Verification des champs
    if ($('#mail').val() === "hello@me.com" && $("#mdp").val() === "secret8") { // Champs valide pour la connexion
        console.log("vous etes connecté!")
    } 
});
