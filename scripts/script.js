function modalOpen() {
    document.getElementById('modal').classList.add('active');
}

function modalClose() {
    document.getElementById('modal').classList.remove('active');
}

document.getElementById('userRegistration').addEventListener('click', () => {
    const editModal = document.getElementById('modalHeader');
    editModal.innerHTML =  `<h2>
                                Novo Usuário
                            </h2>`;
    modalOpen();
});
document.getElementById('modalClose').addEventListener('click', modalClose);
document.getElementById('cancelSave').addEventListener('click', modalClose);





document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();
    //evento para chamar o alert
    //alert("A página foi totalmente carregada e o JS foi implementado!");

    //chamando a função para carregar os usuários
    loadUserDataList();
});

function loadUserData(){
    //Array
    let listUser = []; 

    //capturando os valores e colocando eles dentro de um objeto (userData)
    const userData = {
        //capturando os valores e colocando eles dentro das propriedades ou também atributos
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        cel: document.getElementById('cel').value,
        city: document.getElementById('city').value
    }

    if (localStorage.getItem('users')) {
        listUser = JSON.parse(localStorage.getItem('users'));       
    }

    listUser.push(userData);
    localStorage.setItem('users', JSON.stringify(listUser));

    window.location.reload();
}

const loadUserDataList = () => {
    const tableData = document.getElementById('tableBodyList');

    if (localStorage.getItem('users')) {
        const listUsers = JSON.parse(localStorage.getItem('users'));
        let template = "";

        listUsers.forEach(user => {
            var ++;
            template += `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.cel}</td>
                    <td>${user.city}</td>
                    <td>
                        <button type="button" class="button green" onclick="editUserData(${listUsers.findindex()})">Editar</button>
                        <button type="button" class="button red">Excluir</button>
                    </td>
                </tr>    
            `
        });
        
        tableData.innerHTML = template;
    }
}





function editUserData(){
    tableData.innerHTML = template;
}