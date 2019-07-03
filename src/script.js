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
function inner() {
    for (let i = 0; i < data.length; i++) {

        let container = document.getElementById('container');
        let card = document.createElement('div');
        card.className = "card";
        container.appendChild(card);
        let title = document.createElement('h3');
        title.textContent = data[i].title;
        card.appendChild(title);
        let info = document.createElement('div');
        info.className = "info";
        info.textContent = data[i].text;
        card.appendChild(info);
        let dateLine = document.createElement('i');
        dateLine.className = "date";
        dateLine.textContent = data[i].date;
        card.appendChild(dateLine);

    }
}
let func = inner;
func();
