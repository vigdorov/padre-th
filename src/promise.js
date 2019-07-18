const app = document.getElementById('app');

// Создали промис, внутри которого происходит обращение к серверу
let promise = fetch('https://api.tvmaze.com/search/shows?q=batman');


promise
  .then( function (response) {
    return response.json();
  })
  .then( function (data) {
    console.log(data);
    render(data);
  });
let btnClick = 0;
function show(index) {
    let cardImg = document.getElementsByClassName ('card__img');
    let descr = document.getElementsByClassName ('description');
    let cardBtn = document.getElementsByClassName ('read-more');
    if (btnClick === 0){
        descr[index].style.height = 'auto';
        cardImg[index].style.display = 'none';
        cardBtn[index].textContent = "Скрыть описание";
        return btnClick = 1;
    } else if (btnClick === 1){
        descr[index].style.height = '110px';
        cardImg[index].style.display = 'block';
        cardBtn[index].textContent = "Подробное описание";
        return btnClick = 0;
    }

}

function render (data) {
  const cards = [];

  data.forEach( function (film, index)  {
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

