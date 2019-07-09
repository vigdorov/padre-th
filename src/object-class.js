function Animal (name, feet) {
  this.name = name;
  this.feet = feet;
}

Animal.prototype.type = 'млекопитающие';

const rabbit = new Animal('Rabbit', 5);
const wolf = new Animal('Wolf', 3);
const suslik = new Animal('Suslik', 1);



console.log(rabbit);
console.log(wolf);
console.log(suslik);

console.log(rabbit.type);

class Animal2 {
  constructor (name, feet) {
    this.name = name;
    this.feet = feet;
  }

  moveForward = () => {
    console.log(this.name + ' побежал вперед');
  };

  moveBack = () => {

  };
}

const rabbit2 = new Animal2('Rabbit', 5);

rabbit2.moveForward();

