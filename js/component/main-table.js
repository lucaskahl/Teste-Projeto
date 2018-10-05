const mainTableEl = document.querySelector('.main-table');
const tableBodyEl = document.querySelector('#table-users');


function getUsersDb() {
    let users = JSON.parse(localStorage.getItem("users"));
    return users;
}

function addDataTable() {
    let users = getUsersDb();
    
    users.forEach(users => {
        let tr = document.createElement("tr");
        tr.innerHTML = ` 
            <td>${users.name}</td>
            <td>${users.email}</td>
            <td>${users.cpf}</td>
            <td>${users.phone}</td>
        `
    tableBodyEl.appendChild(tr); 
    
    });

}


setUsers();
addDataTable();

