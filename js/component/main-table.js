const mainTableEl = document.querySelector('.main-table');
const tableBodyEl = document.querySelector('#table-users');


function getUsersDb() {
  let user = localStorage.getItem('users');
  return info = JSON.parse(user);
}

function getUsers() {

  let users = fetch('https://private-21e8de-rafaellucio.apiary-mock.com/users');

  users
  .then(data => data.json())
  .then(data => data.forEach(users => {

    let tr = document.createElement("tr");

    tr.innerHTML = ` 
    <td>${users.name}</td>
    <td>${users.email}</td>
    <td>${users.cpf}</td>
    <td>${users.phone}</td>
    `
    tableBodyEl.appendChild(tr); 
  }));

  getUsersDb();
  console.log(info[0].name);

  let tr = document.createElement("tr");
  
  tr.innerHTML = ` 
  <td>${info[0].name}</td>
  <td>${info[0].email}</td>
  <td>${info[0].cpf}</td>
  <td>${info[0].telefone}</td>
  `
  tableBodyEl.appendChild(tr); 

}

getUsers();

