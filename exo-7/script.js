console.log("exercice 7");

function getData() {
  return data; // data is defined in DATA.js file
} 

function addLineToTable(data) { //
  let tr = $("<tr/>");
  let td = $("<td/>");

  td.text(data.email);
  tr.append(td);
  td = $("<td/>");
  
  td.text(data.name.last);
  tr.append(td);
  td = $("<td/>");
  
  td.text(data.name.first);
  tr.append(td);
  td = $("<td/>");
  
  td.text(data.phone);
  tr.append(td);
  $("tbody").append(tr);

}
getData().forEach(data => {
  addLineToTable(data);
});