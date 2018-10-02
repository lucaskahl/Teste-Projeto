const mainTableEl = document.querySelector('.main-table');
const tableBodyEl = document.querySelector('#table-users');

function getUsers() {

  let users = fetch('https://private-21e8de-rafaellucio.apiary-mock.com/users');

  users
  .then(data => data.json())
  .then(data => data.forEach(users => {

    let tr = document.createElement("tr");

    tr.innerHTML = ` 
    <td>${users.name}</td>
    <td>${users.cpf}</td>
    <td>${users.phone}</td>
    <td>${users.email}</td>
    `
    tableBodyEl.appendChild(tr); 
  }));
  

}

getUsers();