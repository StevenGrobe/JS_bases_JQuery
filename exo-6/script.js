console.log("exercice 6");

// Verifie que la chaine de charactère est bien un email
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$("#subBtn").click(function () {
    // Verification Email
    if (!$('#mail').val()) { // On vérifie la valeur de l'id mail
        $("#mailAlert").fadeIn(); // Montre l'alerte
        $("#mailAlert").text("email obligatoire"); // Affiche alerte en ajoutant du texte à id mailAlert
    } else if (!isEmail($('#mail').val())) { // Vérification regex
        $("#mailAlert").fadeIn();
        $("#mailAlert").text("Veuillez entrer un email valide!");
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

console.log($('#mail').val());
console.log($("#mdp").val());