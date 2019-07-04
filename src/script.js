const data = [
  {
    title: 'Заголовок 2342355',
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

data.forEach(function (item) {

  let container = document.getElementById('container');

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

});

