//var isEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

/*

TODO

1- Validar campo do formulario
2- Adicionar css

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

    user.push(getValues());

    let users = [user];

    localStorage.setItem("users", JSON.stringify(users));

}




