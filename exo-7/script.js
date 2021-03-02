console.log("exercice 7");

function getData() {
  return data; // data is defined in DATA.js file
}

function addLineToTable (newUser) { //Ajoute une nouvelle ligne dans la balise tbody
  $('tbody').append(`
    <tr>
      <td>${newUser.email}</td>
      <td>${newUser.name.last}</td>
      <td>${newUser.name.first}</td>
      <td>${newUser.phone}</td>
    </tr>
  `);
} // Append() permet d'insérer du contenu (texte, html)

// Boucle forEach qui va appeler addLineToTable pour afficher les données de data
$(document).ready(function () {
  getData().forEach(newUser => { 
    addLineToTable(newUser); 
  });
});

console.log(data);