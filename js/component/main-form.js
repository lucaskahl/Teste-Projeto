//var isEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

/*

TODO

1- Validar campo do formulario
2- Adicionar css

*/

const name = document.querySelector('#name');
const email = document.querySelector('#email');
const cpf = document.querySelector('#cpf');
const telefone = document.querySelector('#telefone');
const formEl = document.querySelector('.main-form');

cpf.addEventListener("keypress", e => {
    console.log(e);
    if ((e.keyCode >= 48 && e.keyCode <= 57)) { 
        console.log('numbers');
    }else{
        cpf.classList.add('')
    }
})


formEl.addEventListener('submit', ev => {
    ev.preventDefault();
    console.log('submitado');

});




