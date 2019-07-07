//function name1 () {
//    console.log('я функция 1');
//}

//let name2 = function () {
//    console.log('я функция 2');
//};
// Стрелочные функции
//let name3 = (number) => {
 //   return number * 2;
//};

//let x = name3(5);

//let name4 = (number) => number * 2;

//let name5 = number => number * 2;

// Объекты

//let person = {
//    name: 'Саша',
//    surname: 'Ивушкин',
///    getFullName: function () {
//        return this.name + ' ' + this.surname;
 //   }
///};

//person.age = 25;

//console.log(person);

//delete person.age;

//console.log(person);

//const data2 = {
//    one: '234',
//    two: 'dfgdfg'
//};

//for (let key in data2) {
  //  console.log(key, data2[key]);
//}

/*
1. Починить крестик в карточках
2. Оформить кнопку добавления
3. Разработать форму (для создания карточек)
4. Форма должа быть в модальном окне (окно всегда строго по центру)

4. Решить задачки по объектам
 */
let car1 = {
    name: "Лада",
    power: "80 л.с.",
    color: "зеленый",
    getFullDiscrip: function () {
        return 'Этот автомобиль ' + this.name + ' мощностью ' + this.power + ' имеет ' + this.color + ' цвет'
    }
};
console.log(car1.getFullDiscrip());
let car2 = {
    name: "Мазда",
    power: "120 л.с.",
    color: "синий",
    getFullDiscrip: function () {
        return 'Этот автомобиль ' + this.name + ' мощностью ' + this.power + ' имеет ' + this.color + ' цвет'
    }
};
console.log(car2.getFullDiscrip());
let car3 = {
    name: "Рено",
    power: "87 л.с.",
    color: "красный",
    getFullDiscrip: function () {
        return 'Этот автомобиль ' + this.name + ' мощностью ' + this.power + ' имеет ' + this.color + ' цвет'
    }
};
console.log(car3.getFullDiscrip());

delete car1.color;
console.log(car1.getFullDiscrip());

car1.date = '1999 год';
console.log(car1);

car1.salon ={
  salonColor: 'черный',
  material: 'тряпка'
};
console.log(car1);

for (let key in car1){
    console.log(key, car1[key]);
}