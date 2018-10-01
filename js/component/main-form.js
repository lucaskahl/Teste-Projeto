//var isEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const mainTableEl = document.querySelector('.main-table');
const tableBodyEl = document.querySelector('#table-users');
var trEl = document.createElement("tr");  

function getUsers() {

  let users = fetch('https://private-21e8de-rafaellucio.apiary-mock.com/users');

  users
  .then(data => data.json())
  .then(data => data.map(inf => {
    console.log(inf.name);
  
  }));

}

getUsers();

