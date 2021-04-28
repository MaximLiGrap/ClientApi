// Body
const container = document.createElement('div')
container.classList.add('container', 'body_container');
const title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'Клиенты';

// Оформление Header
function createHeader() {
    const header = document.createElement('header');
    const headerBlock = document.createElement('div');
    headerBlock.classList.add('header_block', 'container')
    const btnLogo = document.createElement('button');
    btnLogo.textContent = 'skb.'
    btnLogo.classList.add('heade_logo')
    headerBlock.append(btnLogo);
    header.append(headerBlock);
    document.body.append(header);
    return {
        headerBlock,
    }
}

// Экран Загрузки

const loadWindow = document.createElement('div');
loadWindow.classList.add('load_window')

// Error
const errorWindow = document.createElement('div');
errorWindow.textContent = 'Клиент не найден...'
errorWindow.classList.add('error')

const state = {
    clients: []
}

let timeout;


//Header Form
function createFormHeader() {
    const formSearch = document.createElement('form');
    formSearch.classList.add('header_form')
    const inputSearch = document.createElement('input');
    inputSearch.classList.add('header_input');
    inputSearch.placeholder = 'Введите запрос'
    formSearch.append(inputSearch);
    // headerBlock.append(formSearch);
    return {
        formSearch,
        inputSearch,
    }
}


//Table Head
function createTable() {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const trTh = document.createElement('tr');
    trTh.classList.add('thead_item');

    const thId = document.createElement('th');
    const btnSortId = document.createElement('button');
    thId.classList.add('th_id')
    btnSortId.textContent = 'ID';

    btnSortId.classList.add('btn_revers')
    thId.append(btnSortId);
    trTh.append(thId);

    const thName = document.createElement('th');
    const btnSortName = document.createElement('button');
    thName.textContent = 'Фамилия Имя Отчество'
    btnSortName.textContent = 'А-Я'
    btnSortName.classList.add('btn_revers')
    thName.append(btnSortName);
    trTh.append(thName);

    const thDateCreate = document.createElement('th');
    const btnSortDateCreate = document.createElement('button');
    btnSortDateCreate.textContent = 'Дата и время создания'
    btnSortDateCreate.classList.add('btn_revers')
    btnSortDateCreate.classList.add('btn_revers_date_create')
    thDateCreate.append(btnSortDateCreate);
    trTh.append(thDateCreate)

    const thDateСhange = document.createElement('th');
    const btnSortDateСhange = document.createElement('button');
    btnSortDateСhange.textContent = 'Дата и время изменения'
    btnSortDateСhange.classList.add('btn_revers')
    btnSortDateСhange.classList.add('btn_revers_date_change')
    thDateСhange.append(btnSortDateСhange);
    trTh.append(thDateСhange)

    const thContackt = document.createElement('th')
    thContackt.textContent = 'Контакты';
    trTh.append(thContackt);

    const thDo = document.createElement('th');
    thDo.textContent = 'Действия';
    trTh.append(thDo);

    thead.append(trTh)
    table.append(thead);

    //Table Body
    const tbody = document.createElement('tbody');
    table.append(tbody)

    let frag = 0;
    btnSortId.addEventListener('click', function () {
        if (frag === 0) {
            sotrTableUp('id', tbody)
            btnSortId.classList.toggle('revers_down')
            frag = 1;
        } else {
            sotrTable('id', tbody)
            btnSortId.classList.toggle('revers_down')
            frag = 0;
        }
    })

    let nameSort = 0;
    btnSortName.addEventListener('click', function () {
        if (nameSort === 0) {
            sotrTableUp('surname', tbody)
            btnSortName.classList.toggle('revers_down')
            nameSort = 1;
        } else {
            sotrTable('surname', tbody)
            btnSortName.classList.toggle('revers_down')
            nameSort = 0;
        }

    })

    let dateCreate = 0;
    btnSortDateCreate.addEventListener('click', function () {
        if (dateCreate === 0) {
            sotrTableUp('createdAt', tbody)
            btnSortDateCreate.classList.toggle('revers_down')
            dateCreate = 1;
        } else {
            sotrTable('createdAt', tbody)
            btnSortDateCreate.classList.toggle('revers_down')
            dateCreate = 0;
        }

    })

    let dateChange = 0;
    btnSortDateСhange.addEventListener('click', function () {
        if (dateChange === 0) {
            sotrTableUp('updatedAt', tbody)
            btnSortDateСhange.classList.toggle('revers_down')
            dateChange = 1;
        } else {
            sotrTable('updatedAt', tbody)
            btnSortDateСhange.classList.toggle('revers_down')
            dateChange = 0;
        }

    })

    container.append(title);
    container.append(table);
    document.body.append(container)
    return {
        tbody,
    }
}


// // Масиив контактов объета




function createAddForm({ title, client, tbody, removeText }) {
    const modalAddClient = document.createElement('div');
    modalAddClient.classList.add('is-active', 'active')
    container.append(modalAddClient)

    const addContactBtn = document.createElement('button');
    addContactBtn.classList.add('add_contact_btn')
    addContactBtn.textContent = 'Добавить контакт'

    const wrapContact = document.createElement('div')
    wrapContact.classList.add('wrap_contact')

    const wrapContactBtn = document.createElement('div')
    wrapContactBtn.classList.add('wrap_contact_btn')

    // Нажатие на добавить контакт
    addContactBtn.addEventListener('click', function (e) {
        e.preventDefault()
        if (wrapContact.children.length >= 10) {
            addContactBtn.setAttribute('disabled', 'true')
        }
        newContact({
            form: wrapContact,
            addNewContactBtn: addContactBtn
        })
    })




    const formContainer = document.createElement('div');
    formContainer.classList.add('form_container')
    const formContainerTitle = document.createElement('h3')
    const formContainerTitleId = document.createElement('span')
    formContainerTitle.textContent = title;
    formContainerTitleId.classList.add('title_id')

    formContainerTitle.append(formContainerTitleId)
    formContainer.append(formContainerTitle)
    const addForm = document.createElement('form');
    addForm.classList.add('add_form')
    const inputsurname = document.createElement('input');
    inputsurname.classList.add('input_text')
    inputsurname.setAttribute('name', 'surname')
    const inputname = document.createElement('input');
    inputname.setAttribute('name', 'name')
    inputname.classList.add('input_text')
    const inputLastName = document.createElement('input');
    inputLastName.classList.add('input_text')
    inputLastName.setAttribute('name', 'lastname')
    const addBtnForm = document.createElement('button');
    const cancel = document.createElement('button');
    cancel.classList.add('btn_cancel')
    cancel.textContent = removeText;

    const close = document.createElement('button')
    close.classList.add('close')

    // Отмена
    cancel.addEventListener('click', function () {
        modalAddClient.classList.toggle('active');
        addForm.reset()
        wrapContact.innerHTML = '';
        addContactBtn.removeAttribute('disabled', 'true')
    })

    close.addEventListener('click', function () {
        if (client) {
            container.removeChild(modalAddClient)
        }
        modalAddClient.classList.toggle('active');
        addForm.reset()
        wrapContact.innerHTML = '';
        addContactBtn.removeAttribute('disabled', 'true')
    })

    const surnameLabel = document.createElement('label')
    inputsurname.placeholder = 'Фамилия*'
    addForm.append(surnameLabel)
    addForm.append(inputsurname);


    const nameLabel = document.createElement('label')
    inputname.placeholder = 'Имя*'
    addForm.append(nameLabel)
    addForm.append(inputname);


    const lastnameLabel = document.createElement('label')
    inputLastName.placeholder = 'Отчество'
    addForm.append(lastnameLabel);
    addForm.append(inputLastName);


    addBtnForm.textContent = 'Сохранить';
    addBtnForm.classList.add('btn_style')

    // if(modalAddClient.classList.contains('active')){
    // } else {
        modalAddClient.addEventListener('click', function(e){
            const modal = addForm.closest('form')
            const formDiv = formContainer.closest('div')
            console.log(e.target)
            if(e.target != (modal && formDiv)){
                modalAddClient.classList.add('active');
            } 
        })
    // }




    if (client) {
        modalAddClient.classList.toggle('active');
        surnameLabel.textContent = 'Фамилия*'
        nameLabel.textContent = 'Имя*'
        lastnameLabel.textContent = 'Отчество'

        inputsurname.value = client.surname;
        inputname.value = client.name;
        inputLastName.value = client.lastName;
        formContainerTitleId.textContent = `ID: ${client.id}`;
        for (let contact of client.contacts) {
            newContact({
                form: wrapContact,
                contact,
                addNewContactBtn: addContactBtn
            })
        }

        addForm.addEventListener('submit', async function (e) {
            e.preventDefault()
            inputsurname.setAttribute('disabled', 'true')
            inputname.setAttribute('disabled', 'true')
            inputLastName.setAttribute('disabled', 'true')
            addBtnForm.classList.add('btn_save_load')
            clearTimeout(timeout);
            timeout = setTimeout(async () => {
                addBtnForm.classList.remove('btn_save_load')
                const time = new Date();
                const timeCreate = time.toISOString()
                let changerClient = {
                    id: client.id,
                    name: inputname.value.trim(),
                    surname: inputsurname.value.trim(),
                    lastName: inputLastName.value.trim(),
                    createdAt: client.createdAt,
                    updatedAt: timeCreate,
                    contacts: getContact(),
                }
                const clientChang = await chanderClientApi(changerClient, changerClient.id)
                switch (clientChang.response.status) {
                    case 200:
                    case 201: {
                        console.log(clientChang.data);
                        modalAddClient.classList.toggle('active');
                        cleanTable(tbody)
                        state.clients = state.clients.map((client) => {
                            if (clientChang.data.id === client.id) {
                                client = clientChang.data;
                            }
                            return client
                        })

                        renderSort(state.clients, tbody)
                        wrapContact.innerHTML = '';
                        container.removeChild(modalAddClient)
                    }
                        break;
                    case 404: {
                        addBtnForm.before(errorWindow)
                    }
                        break;
                    case 422: {
                        if (clientChang.data.errors) {
                            for (let error of clientChang.data.errors) {
                                // const input = document.querySelector(`[name=${error.field}]`);
                                // console.log(input)
                                // searchErrorName(input, error.message)
                                if (error.field === 'name') {
                                    searchErrorName(inputname, error.message)
                                }
                                if (error.field === 'surname') {
                                    searchErrorName(inputsurname, error.message)
                                }
                            }
                        }
                    }
                        break;

                    case 500: {
                        errorWindow.textContent = 'Упс, что-то пошло не так)'
                        addForm.before(errorWindow)
                    }
                        break;
                    default:
                        break;
                }
            }, 500);
        })
    }

    addForm.append(wrapContact);
    wrapContactBtn.append(addContactBtn);
    addForm.append(wrapContactBtn)
    addForm.append(addBtnForm);
    formContainer.append(addForm)
    formContainer.append(cancel)
    formContainer.append(close)
    modalAddClient.append(formContainer);


    return {
        modalAddClient,
        addContactBtn,
        addForm,
        wrapContact,
        inputsurname,
        inputname,
        inputLastName,
        surnameLabel,
        nameLabel,
        addBtnForm,
        cancel,
        close,
    }
}


// Валидация формы
async function searchErrorName(errorName, message) {
    errorName.classList.add('error_input')
    errorName.removeAttribute('disabled', 'true')
    errorName.placeholder = message
    errorName.addEventListener('focus', function () {
        errorName.classList.remove('error_input')
    })

}

function getContact() {
    let contacts = [];
    let elements = document.getElementsByClassName('input_contact');
    for (let elem of elements) {
        let obj = {
            type: elem.firstChild.value,
            value: elem.childNodes[1].value,
        }
        contacts.push(obj)
    }
    return contacts
}





// Option
function createOption(valueOpion, select) {
    const nameOption = document.createElement('option');
    nameOption.textContent = valueOpion;
    nameOption.setAttribute('value', [valueOpion])
    select.append(nameOption);

}




// Контакты  
function createNewContactInput(form) {
    const selectContact = document.createElement('select');
    selectContact.classList.add('select')
    const inputContact = document.createElement('input');
    inputContact.classList.add('input_new_contact')
    const btnDeleteContact = document.createElement('button');
    btnDeleteContact.classList.add('btn_delete_contact')
    inputContact.setAttribute('required', '')
    inputContact.placeholder = 'Введите данные контакта';




    createOption('Телефон', selectContact)

    createOption('vk', selectContact)

    createOption('fb', selectContact)

    createOption('email', selectContact)

    createOption('other', selectContact)

    const wrapNewInputContact = document.createElement('div')
    wrapNewInputContact.classList.add('input_contact')

    wrapNewInputContact.append(selectContact);
    wrapNewInputContact.append(inputContact);
    wrapNewInputContact.append(btnDeleteContact);
    form.prepend(wrapNewInputContact);


    return {
        wrapNewInputContact,
        selectContact,
        inputContact,
        btnDeleteContact,
    }
}

//tooltip


function tooltip() {
    let tooltipElem;
    const toolBtn = document.querySelectorAll('[data-tooltip]');

    for (tool of toolBtn) {
        tool.addEventListener('mouseover', function (event) {
            let target = event.target;

            // если у нас есть подсказка...
            let tooltipHtml = target.dataset.tooltip;
            if (!tooltipHtml) return;

            // ...создадим элемент для подсказки

            tooltipElem = document.createElement('div');
            tooltipElem.className = 'tooltip';
            tooltipElem.innerHTML = tooltipHtml;
            document.body.append(tooltipElem);

            // спозиционируем его сверху от аннотируемого элемента (top-center)
            let coords = target.getBoundingClientRect();

            let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
            if (left < 0) left = 0; // не заезжать за левый край окна

            let top = coords.top - tooltipElem.offsetHeight - 5;
            if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
                top = coords.top + target.offsetHeight + 5;
            }

            tooltipElem.style.left = left + 'px';
            tooltipElem.style.top = top + 'px';

        })


        tool.addEventListener('mouseout', function (event) {

            if (tooltipElem) {
                tooltipElem.remove();
                tooltipElem = null;
            }

        })

    }
    return { toolBtn };
}


//Добавление иконки контакта 
function createIconSelection(iconClass, contact) {
    const icon = document.createElement('button');
    icon.classList.add(iconClass);
    icon.setAttribute('data-tooltip', contact.type + ': ' + contact.value)
    return icon
}

function createIconContact(tr, array) {
    const tdContact = document.createElement('td')
    if (array.length <= 4) {
        for (let contact of array) {
            let newIcon = switchIcon(contact)
            tdContact.append(newIcon);
        }
    } else {
        for (let i = 0; i < 4; i++) {
            let newIcon = switchIcon(array[i])
            tdContact.append(newIcon);
        }
        const btnAllContact = document.createElement('button')
        btnAllContact.classList.add('btn_all_contact')
        btnAllContact.textContent = `+${array.length - 4}`
        btnAllContact.addEventListener('click', function () {
            tdContact.innerHTML = '';
            for (let contact of array) {
                let newIcon = switchIcon(contact)
                tdContact.append(newIcon);
            }
            let newToll = tooltip()

        })
        tdContact.classList.add('td_contact')

        tdContact.append(btnAllContact)
    }
    tr.append(tdContact)
}

function switchIcon(contact) {
    let icon;
    switch (contact.type) {
        case 'Телефон':
            icon = createIconSelection('icon_phone', contact)
            break;
        case 'vk':
            icon = createIconSelection('icon_vk', contact)
            break;
        case 'fb':
            icon = createIconSelection('icon_fb', contact)
            break;
        case 'email':
            icon = createIconSelection('icon_email', contact)
            break;
        default:
            icon = createIconSelection('icon_other', contact)
    }
    return icon
}



function newContact({ form, contact, addNewContactBtn }) {
    let newCont = createNewContactInput(form);
    if (contact) {
        newCont.inputContact.value = contact.value;
        newCont.selectContact.value = contact.type;
    }
    newCont.btnDeleteContact.addEventListener('click', function () {
        form.removeChild(newCont.wrapNewInputContact);
        if (newCont.wrapNewInputContact.children.length < 10) {
            addNewContactBtn.removeAttribute('disabled', 'true')
        }
    })

}

//Создание строки таблицы с новым клиентом
function createTrTable(obj, body) {
    const trClient = document.createElement('tr');
    const tdId = createTdTable(obj.id);
    const tdFullName = createTdTable(obj.surname + ' ' + obj.name + ' ' + obj.lastName);
    const timeCreate = document.createElement('span')
    timeCreate.classList.add('time')
    timeCreate.textContent = obj.createdAt.slice(11, 16)
    const tdDateCreate = createTdTable(obj.createdAt.slice(0, 10))
    tdDateCreate.tdName.append(timeCreate)
    const timeCanger = document.createElement('span')
    timeCanger.classList.add('time')
    timeCanger.textContent = obj.updatedAt.slice(11, 16)
    const tdDateChange = createTdTable(obj.updatedAt.slice(0, 10))
    tdDateChange.tdName.append(timeCanger)

    trClient.append(tdId.tdName);
    trClient.append(tdFullName.tdName);
    trClient.append(tdDateCreate.tdName);
    trClient.append(tdDateChange.tdName);
    body.append(trClient)

    return trClient;

}
// Создание ячейки с данными клиента
function createTdTable(value) {
    const tdName = document.createElement('td');
    tdName.textContent = value;
    return {
        tdName
    }
}

// Состировка таблицы



function sotrTable(key, tbody) {
    // let arrayClient = await loadClients()
    cleanTable(tbody)
    state.clients.sort((prev, next) => {
        if (prev[key] < next[key]) return -1;
        if (prev[key] < next[key]) return 1;
    });
    renderSort(state.clients, tbody)
    return state.clients
}

function sotrTableUp(key, tbody) {
    // let arrayClient = await loadClients()
    cleanTable(tbody)
    state.clients.sort((prev, next) => {
        if (prev[key] > next[key]) return -1;
        if (prev[key] > next[key]) return 1;
    });
    renderSort(state.clients, tbody)
    console.log(state.clients);
    return state.clients
}






// Отправка формы
function addClientInTable(surname, name, lastname) {
    const time = new Date();
    const timeCreate = time.toISOString()
    // Добавление клиета в массив
    let newClient = {
        id: ' ',
        name: name.value.trim(),
        surname: surname.value.trim(),
        lastName: lastname.value.trim(),
        createdAt: timeCreate,
        updatedAt: ' ',
        contacts: [],
    }
    //  Очистка формы
    // name.value = '';
    // surname.value = '';
    // lastname.value = '';
    // Изменение данных клиента
    return newClient
}


// Изменение данных клиента
function changerClient(tableItem, arrayClient, tbody) {
    const changerTd = document.createElement('td')
    const btnChanger = document.createElement('button')
    btnChanger.textContent = 'Изменить';
    btnChanger.classList.add('btn_changer')
    changerTd.append(btnChanger)
    tableItem.append(changerTd);

    btnChanger.addEventListener('click', function () {
        btnChanger.classList.add('btn_load')
        clearTimeout(timeout);
        timeout = setTimeout(async () => {
            btnChanger.classList.remove('btn_load')
            let objChanger = arrayClient.find(item => item.id == tableItem.firstChild.textContent);
            const newForm = createAddForm({
                title: 'Изменить данные клиента  ',
                client: objChanger,
                tbody,
                removeText: 'Удалить клиента'
            });
            btnChanger.setAttribute('data-index', `${objChanger.id}`)
            newForm.cancel.addEventListener('click', function () {
                createDeleteModal(btnChanger)
                container.removeChild(newForm.modalAddClient)
            })
            if (objChanger.contacts.length >= 10) {
                newForm.addContactBtn.setAttribute('disabled', 'true')
            }

        }, 500);
    })

    return changerTd;
}

function createDeleteModal(btnDeleteModal) {
    const modalDeleteWindow = document.createElement('div');
    const deleteWindow = document.createElement('div');
    modalDeleteWindow.classList.add('is-active');
    deleteWindow.classList.add('delete_container');
    const deleteTitle = document.createElement('h3');
    deleteTitle.textContent = 'Удалить клиента?';

    const deleteText = document.createElement('p');
    deleteText.textContent = 'Вы действительно хотите удалить данного клиента?';

    const deleteWindowBtn = document.createElement('button');
    deleteWindowBtn.classList.add('btn_style');
    deleteWindowBtn.textContent = 'Удалить';
    const deleteWindowBtnCancel = document.createElement('button');
    deleteWindowBtnCancel.classList.add('btn_cancel')
    deleteWindowBtnCancel.textContent = 'Отмена';
    const close = document.createElement('button')
    close.classList.add('close')

    deleteWindowBtnCancel.addEventListener('click', function () {
        modalDeleteWindow.remove(modalDeleteWindow);
    })

    close.addEventListener('click', function () {
        modalDeleteWindow.remove(modalDeleteWindow);
    })

    deleteWindowBtn.addEventListener('click', async function () {
        const response = await deleteClientInArray(btnDeleteModal.dataset.index)
        switch (response.status) {
            case 200:
            case 201: {
                let delClient = state.clients.findIndex(item => item.id === btnDeleteModal.dataset.index);
                state.clients.splice(delClient, 1);
                btnDeleteModal.parentNode.parentNode.parentNode.removeChild(btnDeleteModal.parentNode.parentNode);
                deleteWindow.remove(deleteWindow);
                modalDeleteWindow.remove(modalDeleteWindow);
            }
            case 404: {
                deleteWindow.before(errorWindow)
            }

            default:
                break;
        }
    })


    deleteWindow.append(deleteTitle);
    deleteWindow.append(deleteText)
    deleteWindow.append(deleteWindowBtn);
    deleteWindow.append(close)
    deleteWindow.append(deleteWindowBtnCancel);
    modalDeleteWindow.append(deleteWindow)
    container.append(modalDeleteWindow)
    return modalDeleteWindow
}

// Удаление клиента
function deleteClient(deleteItem, tableItem, arrayClient) {


    const btnDelete = document.createElement('button')
    btnDelete.textContent = 'Удалить'
    btnDelete.classList.add('btn_delete')
    deleteItem.append(btnDelete)
    tableItem.append(deleteItem)

    btnDelete.addEventListener('click', function () {
        let deleteModal = createDeleteModal(btnDelete)
        let objChanger = arrayClient.find(item => item.id == tableItem.firstChild.textContent);
        let j = objChanger.id
        console.log(j)
        btnDelete.setAttribute('data-index', `${j}`)
    })

}

// Фильтр
async function filterForm(key, tbody) {
    let search = key.value;
    let searchInnerClient = await searchClient(search);
    console.log(searchInnerClient)

    renderSort(searchInnerClient, tbody)
}



// Очистка таблицы
function cleanTable(tbody) {
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild)
    }
}

// Отрисовка таблицы

async function render(tbody) {
    let clients = await loadClients()
    for (let obj of clients) {
        const newTrTable = createTrTable(obj, tbody);
        createIconContact(newTrTable, obj.contacts)
        const changerBtn = changerClient(newTrTable, clients, tbody)
        deleteClient(changerBtn, newTrTable, clients)
        let newToll = tooltip()
    }
}

async function renderSort(arrayClient, tbody) {
    clearTimeout(timeout);
    tbody.append(loadWindow)
    timeout = setTimeout(async () => {
        loadWindow.remove(loadWindow)
        for (let obj of arrayClient) {
            const newTrTable = createTrTable(obj, tbody);
            createIconContact(newTrTable, obj.contacts)
            const changerBtn = changerClient(newTrTable, arrayClient, tbody)
            deleteClient(changerBtn, newTrTable, arrayClient)
            let newToll = tooltip()
        }
    }, 1000);
}


async function createApp() {
    const newHeader = createHeader();
    const newFormHeader = createFormHeader();
    newHeader.headerBlock.append(newFormHeader.formSearch);
    const addTable = createTable();

    state.clients = await loadClients()
    sotrTable('id', addTable.tbody)
    // renderSort(state.clients, addTable.tbody)



    // Форма добавления нового клиента
    const btnAddClient = document.createElement('button')
    btnAddClient.textContent = 'Добавить клиента';
    btnAddClient.classList.add('btn_add_client')
    container.append(btnAddClient)

    const newForm = createAddForm({
        title: 'Новый клиент',
        removeText: 'Отмена',
    });
    btnAddClient.addEventListener('click', function () {
        newForm.modalAddClient.classList.toggle('active');

    })

    // Поиск
    newFormHeader.formSearch.addEventListener('input', async function () {
        clearTimeout(timeout);
        timeout = setTimeout(async () => {
            cleanTable(addTable.tbody)
            let search = newFormHeader.inputSearch
            await filterForm(search, addTable.tbody);
        }, 300);
    })


    // Отправка формы
    newForm.addForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        newForm.inputsurname.setAttribute('disabled', 'true')
        newForm.inputname.setAttribute('disabled', 'true')
        newForm.inputLastName.setAttribute('disabled', 'true')
        newForm.addBtnForm.classList.add('btn_save_load')
        clearTimeout(timeout);
        timeout = setTimeout(async () => {
            newForm.inputsurname.removeAttribute('disabled', 'true')
            newForm.inputname.removeAttribute('disabled', 'true')
            newForm.inputLastName.removeAttribute('disabled', 'true')
            newForm.addBtnForm.classList.remove('btn_save_load')
            const newclientAdd = addClientInTable(newForm.inputsurname, newForm.inputname, newForm.inputLastName);
            newclientAdd.contacts = getContact();
            const newClient = await createClientTable(newclientAdd)
            switch (newClient.response.status) {
                case 200:
                case 201: {
                    console.log(newClient.data);
                    newForm.modalAddClient.classList.toggle('active');
                    cleanTable(addTable.tbody)
                    newclientAdd.id = newClient.data.id
                    state.clients.push(newclientAdd)
                    sotrTable('id', addTable.tbody)
                    // renderSort(state.clients, addTable.tbody)
                    newForm.wrapContact.innerHTML = ''
                    newForm.addForm.reset()
                }
                    break;
                case 404: {
                    newForm.addForm.before(errorWindow)
                }
                    break;
                case 422: {
                    if (newClient.data.errors) {
                        for (let error of newClient.data.errors) {
                            if (error.field === 'name') {
                                searchErrorName(newForm.inputname, error.message)
                            }
                            if (error.field === 'surname') {
                                searchErrorName(newForm.inputsurname, error.message)
                            }
                            newForm.cancel.addEventListener('click', function () {
                                newForm.inputsurname.classList.remove('error_input')
                                newForm.inputname.classList.remove('error_input')
                                newForm.addForm.reset()

                            })
                            newForm.close.addEventListener('click', function () {
                                newForm.inputsurname.classList.remove('error_input')
                                newForm.inputname.classList.remove('error_input')
                                newForm.addForm.reset()
                            })

                        }
                    }
                }
                    break;
                case 500: {
                    errorWindow.textContent = 'Упс, что-то пошло не так)'
                    newForm.addForm.before(errorWindow)
                }

                default:
                    break;
            }

        }, 500);

    })


}


async function createClientTable(client) {
    const response = await fetch('http://localhost:3000/api/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'aplication/json' },
        body: JSON.stringify(client)
    })
    const data = await response.json()
    return { response, data }

}

// // Массив клиентов

async function loadClients() {
    const response = await fetch('http://localhost:3000/api/clients')
    const data = await response.json()
    return data;
}

async function deleteClientInArray(id) {
    return await fetch(`http://localhost:3000/api/clients/${id}`, {
        method: 'DELETE',
    })

}

async function chanderClientApi(client, id) {
    const response = await fetch(`http://localhost:3000/api/clients/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'aplication/json' },
        body: JSON.stringify(client)
    })
    const data = await response.json()
    return { response, data }
}

async function searchClient(searchString) {
    const response = await fetch(`http://localhost:3000/api/clients?search=${searchString}`)
    const data = await response.json()
    return data;
}



createApp()
