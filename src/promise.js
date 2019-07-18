const app = document.getElementById('app');

const inputName = document.getElementById('input-find');
const findBtn = document.getElementById('find');
findBtn.addEventListener('click', function() {
  find(inputName.value);
});

function find(name) {
  let promise = fetch(`https://api.tvmaze.com/search/shows?q=${name}`);

  promise
    .then( function (response) {
      return response.json();
    })
    .then( function (data) {
      console.log(data);
      render(data);
    });
}
// Создали промис, внутри которого происходит обращение к серверу
let btnStateClick = [];

function render (data) {
  btnStateClick = [];

  const cards = [];

  data.forEach( function (film, index)  {
    btnStateClick.push(0);
    cards.push(
      `
      <div class="card">
      <h4 class="card__title">${film.show.name}</h4>
        <img class="card__img" src="${film.show.image.medium}" alt="картинка">
        <div id="description" class="description">
        ${film.show.summary}
        </div>
        <button id="open-btn" class="read-more" onclick="show(${index}) ">Подробное описание</button>
      </div>
      `
    );
  });

  app.innerHTML = cards.join('');
}

function show(index) {
  let cardImg = document.getElementsByClassName ('card__img');
  let descr = document.getElementsByClassName ('description');
  let cardBtn = document.getElementsByClassName ('read-more');
  if (btnStateClick[index] === 0){
    descr[index].style.height = 'auto';
    cardImg[index].style.display = 'none';
    cardBtn[index].textContent = "Скрыть описание";
    btnStateClick[index] = 1;
  } else if (btnStateClick[index] === 1){
    descr[index].style.height = '110px';
    cardImg[index].style.display = 'block';
    cardBtn[index].textContent = "Подробное описание";
    btnStateClick[index] = 0;
  }
}
