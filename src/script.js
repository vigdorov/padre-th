const data = [
  {
    title: 'Заголовок 1',
    text: 'Текст для карточки номер 1, которая содержит текст',
    date: '12.09.2018'
  },
  {
    title: 'Заголовок 2',
    text: 'Текст для карточки номер 2, которая содержит текст',
    date: '12.09.2018'
  },
  {
    title: 'Заголовок 3',
    text: 'Текст для карточки номер 3, которая содержит текст',
    date: '12.09.2018'
  },
  {
    title: 'Заголовок 4',
    text: 'Текст для карточки номер 4, которая содержит текст',
    date: '12.09.2018'
  },
  {
    title: 'Заголовок 5',
    text: 'Текст для карточки номер 5, которая содержит текст',
    date: '12.09.2018'
  },
  {
    title: 'Заголовок 6',
    text: 'Текст для карточки номер 6, которая содержит текст',
    date: '12.09.2018'
  },
];

let counter = 7;
let openModalBtn = document.getElementById("btnAdd");
let modalCard = document.getElementById("addCard");
let closeModal = document.getElementsByClassName("close-box")[0];
openModalBtn.onclick = function () {
    modalCard.style.display = "flex";
    cardMode = "add";
};
closeModal.onclick = function () {
    modalCard.style.display = "none";
};
let inputTitle = document.getElementById("inputTitle");
let inputText = document.getElementById("inputText");
let inputDate = document.getElementById("inputDate");
let cardMode = "";
let editIndex;


function render() {

    let container = document.getElementById('container');
    container.innerHTML = "";
    data.forEach(function (item, index) {

        let card = document.createElement('div');
        card.className = "card";
        container.appendChild(card);

        let title = document.createElement('h3');
        title.textContent = item.title;
        card.appendChild(title);

        let info = document.createElement('div');
        info.className = "info";
        info.textContent = item.text;
        card.appendChild(info);

        let dateLine = document.createElement('i');
        dateLine.className = "date";
        dateLine.textContent = item.date;
        card.appendChild(dateLine);

        let delBtn = document.createElement('button');
        delBtn.className = "delete";
        delBtn.textContent = "x";
        card.appendChild(delBtn);
        delBtn.addEventListener('click', function () {
            handleDeleteCard(index);
        })

    let editBtn = document.createElement('button');
    editBtn.className = "edit";
    editBtn.textContent = "+";
    card.appendChild(editBtn);
    editBtn.addEventListener('click', function () {
        handleCardEdit(index);
    })
    });
}

function handleCardEdit(index) {
    modalCard.style.display = "flex";
    inputTitle.value = data[index].title;
    inputText.value = data[index].text;
    inputDate.value = data[index].date;
    cardMode = "edit";
    editIndex = index;
}

function handleDeleteCard (index) {
    data.splice(index, 1);
    render();
}

function handleAddCard (){
    if (cardMode === "add") {
        data.push({
            title: inputTitle.value,
            text: inputText.value,
            date: inputDate.value
        });
    }else {
        data[editIndex] = {
            title: inputTitle.value,
            text: inputText.value,
            date: inputDate.value
        }
    }
    inputTitle.value = "";
    inputText.value = "";
    inputDate.value = "";
    function hide() {
        modalCard.style.display = "none";
    }
    render();
    hide();
}

render();
