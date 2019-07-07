let bmw = {
  model: 'bmw',
  year: 1998
};

function Car (model, year) {
  this.model = model;
  this.year = year;
  this.info = function () {
    return this.model + ' ' + this.year;
  }
}

let audi = new Car('audi', 2019);

