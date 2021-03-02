console.log("exercice 7");

function getData() {
  return data; // data is defined in DATA.js file
}

function addLineToTable (data) { //Ajoute une nouvelle ligne dans la balise tbody
  $('tbody').append(`
    <tr>
      <td>${data.email}</td>
      <td>${data.name.last}</td>
      <td>${data.name.first}</td>
      <td>${data.phone}</td>
    </tr>
  `);
} // Append() permet d'insérer du contenu (texte, html)

// Boucle forEach qui va appeler addLineToTable pour afficher les données de data
$(document).ready(function () {
  getData().forEach(data => { 
    addLineToTable(data); 
  });
});

console.log(data);