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
        id: (Math.random() * 100).toFixed(),
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
            template += `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.cel}</td>
                    <td>${user.city}</td>
                    <td>
                        <button type="button" class="button green" onclick="editUserData(${user.id})">Editar</button>
                        <button type="button" class="button red">Excluir</button>
                    </td>
                </tr>    
            `
        });
        
        tableData.innerHTML = template;
    }
}





function editUserData(id){

    const saveButton = document.getElementById('modalFooterID');
    let template = `
        <footer class="modalFooter">
            <button class="button green" id="saveValues2">
                Salvar
            </button>
            <button class="button red" id="cancelSave">
                Cancelar
            </button>
        </footer>
        `;
    
    saveButton.innerHTML = template;

    

    const editModal = document.getElementById('modalHeader');
    editModal.innerHTML =  `<h2>
                                Editar Usuário
                            </h2>`;
    modalOpen();

    const listUsers = JSON.parse(localStorage.getItem('users'));
    //Método find para validar se o email que o usuário informou está dentro do meu array de usuários
    const userHunter = listUsers.find(user =>
        user.id == id
    );

    document.getElementById('name').value = userHunter.name;
    document.getElementById('email').value = userHunter.email;
    document.getElementById('cel').value = userHunter.cel;
    document.getElementById('city').value = userHunter.city;

    //Substitui os dados antigos pelos novos
    document.getElementById('cancelSave').addEventListener('click', () => {
        modalClose()
        window.location.reload()
    });
    document.getElementById('saveValues2').addEventListener('click', () => {
        userHunter.name = document.getElementById('name').value;
        userHunter.email = document.getElementById('email').value;
        userHunter.cel = document.getElementById('cel').value;
        userHunter.city = document.getElementById('city').value;
        window.location.reload();
    });
}