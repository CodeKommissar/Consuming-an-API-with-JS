// This code is heavily borrowed from the 'You might not need jQuery' website.
const request = new XMLHttpRequest();
request.open('GET', "https://randomuser.me/api/?results=5", true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // If the request is successful, we save the response in the data variable
    // And execute the displayHTMLTable() function.
    const data = JSON.parse(request.responseText);
    dislayHTMLTable(data);
  } else {
    // We reached our target server, but it returned an error
    console.log("Oh no, something went horribly wrong!")
  }
};

request.send();

// My code (With some help of MDN and 'ES6 for Everybody').
function dislayHTMLTable(data) {
  // Had to use [0] at the end because getElementsByClassName() returns a node list.
  const table_body = document.getElementsByClassName("table-body-js")[0];
  let persons = "";
  for (person of data.results) {
    // Add the data of each person as a string representing an HTML <tr> element
    // in the persons variable.
    persons += `<tr>
        <td>${person.name.first}</td>
        <td>${person.name.last}</td>
        <td>${person.gender}</td>
      </tr>`;
  }
  // Insert our table rows to our table body.
  table_body.innerHTML = persons;
}
