// This code is heavily borrowed from the 'You might not need jQuery' website
const request = new XMLHttpRequest();
request.open('GET', "https://randomuser.me/api/?results=5", true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    const data = JSON.parse(request.responseText);
    dislayHTMLTable(data);
  } else {
    // We reached our target server, but it returned an error
    console.log("Oh no, something went horribly wrong!")
  }
};

request.send();

// My code (With some help of MDN and 'ES6 for Everybody')
function dislayHTMLTable(data) {
  const table_body = document.getElementsByClassName("table-body-js")[0];
  let persons = "";
  for (person of data.results) {
    persons += `<tr>
        <td>${person.name.first}</td>
        <td>${person.name.last}</td>
        <td>${person.gender}</td>
      </tr>`;
  }
  table_body.innerHTML = persons;
}
