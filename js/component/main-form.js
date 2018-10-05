//var isEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

/*

TODO
*/

const nome = document.querySelector('#name');
const email = document.querySelector('#email');
const cpf = document.querySelector('#cpf');
const telefone = document.querySelector('#telefone');
const formEl = document.querySelector('.main-form');

formEl.addEventListener('submit', ev => {
    ev.preventDefault();

    

    validaCampos();
    addData();

});

function validaCampos() {

    // TO DO


}

function getValues() {

    let user = {
        "name": nome.value,
        "cpf": cpf.value,
        "email": email.value,
        "phone": telefone.value,
    };

    return user;

}

function addData() {

    let user = getValues();
    let users = getUsersDb();

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

}

function setUsers() {

    if(!localStorage.getItem("users")) {
        
        fetch('https://private-21e8de-rafaellucio.apiary-mock.com/users')
        .then(data => data.json())
        .then(data => data.map(u => {
            return u;
        }))
        .then(u => {
            localStorage.setItem("users", JSON.stringify(u));
        });
    }

};




