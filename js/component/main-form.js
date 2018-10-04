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

    getUsers.then(data => data.json())
    .then(data => data.forEach(u => {
        users = {
            "nome": u.name,
            "cpf": u.cpf,
            "phone": u.phone,
            "email": u.email,
        }
        user.push(users);

    }));




      /*  if(localStorage.getItem("users")) {
            
            pegar variavel e guardar
            variavel + 1
            e continua
            
            let localUser = JSON.parse(localStorage.getItem("users"));
            console.log(localUser);
        }

        if(!localStorage.getItem("users")) {
            let user = [];
            user.push(users);
            localStorage.setItem("users", JSON.stringify(user));
        }
        */

  
}



