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

    validateCpf()
    //addData();

});
// cpf e telefone por event listener
function validateCpf() {
    if(cpf.value == "") {
        cpf.classList.add("main-table-error");
        createMsgError("O seu CPF deve ter 11 dígitos.", ".cpf");
    }else if(nome.value == ""){
        createMsgError("O seu nome não pode estar vazío", ".nome");
    }else if(email.value == ""){
        createMsgError("Parece que o seu email está incorreto.", ".email");
    }else if(telefone.value == "") {
        createMsgError("O campo de telefone deve ter 9 digitos", ".telefone");
    }else{
        console.log('perr');
    }
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

function createMsgError(content, type) {
    let $mainError = document.querySelector(type);
  
    $mainError.classList.add("main-msg", "-error");
    $mainError.textContent = content;
  
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




