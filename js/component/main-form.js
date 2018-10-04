//var isEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

/*

TODO

1- Arrumar .push se for vazio
2- Listar na table [...]

*/

const nome = document.querySelector('#name');
const email = document.querySelector('#email');
const cpf = document.querySelector('#cpf');
const telefone = document.querySelector('#telefone');
const formEl = document.querySelector('.main-form');

name.value = "111";

formEl.addEventListener('submit', ev => {
    ev.preventDefault();
    addData();

});

function getValues() {

    var user = {
        "name": nome.value,
        "email": email.value,
        "cpf": cpf.value,
        "telefone": telefone.value,
    };

    return user;

}

function addData() {


    let user = JSON.parse(localStorage.getItem("users"));
    user || [];
    user.push(getValues());

    let users = user;

    localStorage.setItem("users", JSON.stringify(users));

}

function getUsersAPI() {

    let getUsers = fetch('https://private-21e8de-rafaellucio.apiary-mock.com/users');
    let user = [];
    let users = {};

    getUsers
    .then(data => data.json())
    .then(data => data.forEach(u => {

        users = {
            "nome": u.name,
            "cpf": u.cpf,
            "phone": u.phone,
            "email": u.email,
        }
        
        if(localStorage.getItem("usersAPI")) {
            let localUser = {};

            localUser = JSON.parse(localStorage.getItem("usersAPI"));
            user.push(localUser);
            console.log(user);
        }

        if(!localStorage.getItem("usersAPI")) {
            localStorage.setItem("usersAPI", JSON.stringify(user));
        }

    }));
  
}



