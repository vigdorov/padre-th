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

function render (data) {
  const cards = [];

  data.forEach( film => {
    cards.push(
      `
      <div class="card">
        <img class="card__img" src="${film.show.image.medium}" alt="картинка">
        <h4 class="card__title">${film.show.name}</h4>
        ${film.show.summary}
      </div>
      `
    );
  });

  app.innerHTML = cards.join('');
}


