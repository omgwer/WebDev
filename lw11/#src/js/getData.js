window.addEventListener('load', function () {
    getData();
});

function getData() {
    const getDataButton = document.getElementById('getDataButton');
    const dataContainer = document.getElementById('dataContainer');

    getDataButton.addEventListener('click', () => {
        dataContainer.innerHTML = '';
        addElementsForUI();
    })
}

async function sendGetRequest() {
    const url = '/WebDev/lw11/dist/printData.php';
    let response = await fetch(url);
    if (response.ok) {
        return await response.json();
    } else {
        serverError();
        console.log('Error' + response.status + ' ' + response.statusText);
    }
}

async function addElementsForUI() {
    let responseJson = await sendGetRequest();
    if ('errorMessage' in responseJson) {
        noSuchElements();
    } else {
        responseJson.forEach(element => addElement(element));
    }
}

function addElement(elementData) {
    const dataContainer = document.getElementById('dataContainer');
    let element = document.createElement('div');
    let name = document.createElement('div');
    let email = document.createElement('div');
    let category = document.createElement('div');
    let spamApprove = document.createElement('div');

    name.innerHTML = elementData.userName;
    email.innerHTML = elementData.userEmail;
    category.innerHTML = elementData.category;
    spamApprove.innerHTML = elementData.spamApprove ? 'Согласен на рассылку' : 'Не согласен на рассылку';
    element.classList.add('data-form__data-element');
    name.classList.add('data-form__text');
    email.classList.add('data-form__text');
    category.classList.add('data-form__text');
    spamApprove.classList.add('data-form__text');
    element.append(name);
    element.append(email);
    element.append(category);
    element.append(spamApprove);
    dataContainer.append(element);
}

function noSuchElements() {
    const dataContainer = document.getElementById('dataContainer');
    let element = document.createElement('div');
    element.innerHTML = 'Элементов не найдено';
    dataContainer.append(element);
}

function serverError() {
    const dataContainer = document.getElementById('dataContainer');
    let element = document.createElement('div');
    element.innerHTML = 'Ошибка сервера, данные не найдены';
    dataContainer.append(element);
}