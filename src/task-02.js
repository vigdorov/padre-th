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


// Задания на массивы. Общие данные
const arrayData = [1, 2, 6, 3, 7, 8, 9, 2];

// 1. Написать функцию, которая возвращает новый массив состоящий только из четных чисел.
let newArrayData = [];
function find() {
    arrayData.forEach(function (item) {
        if (item % 2 === 0) {
          newArrayData.push (item);
        }
    });
}
find();

console.log(newArrayData);



//2. Написать функцию, которая возвращает новый массив, где каждое число массива умножено на собственный индекс.
let newArrayData2 = [];
function find2() {
    arrayData.forEach(function (item, index) {
      let i = item * index;
            newArrayData2.push (i);
    });
}
find2();
console.log(newArrayData2);


// 3. Написать функцию, которая возвращает массив развертнутый наоборот.
let newArrayData3 = [];
function find3() {
        newArrayData3 = arrayData.reverse();
}
find3();
console.log(newArrayData3);


// 4. Написать функцию, которая возвращает массив с строковыми названиями месяцев по соответствию с цифрами.
let newArrayData4 = [];
function find4() {
    arrayData.forEach(function (item) {
            let date = new Date (1999, item - 1, 12) ;
            let options = {
                month: 'long'
            };
        newArrayData4.push (date.toLocaleString("ru", options));

    });
}
find4();
console.log(newArrayData4);


// 5. Написать функцию, которая возвращает самое большое число из массива.
let maxNum = Math.max(...arrayData);
console.log(maxNum);


// Задания на объекты.

/*
Написать конструктор для автомобиля, который содержит свойства, которые можно задать при создании объекта:
марка, цвет, год выпуска, цвет салона, материал салона.
если пользователь  не указал какое либо свойство, то конструктор ставит "какието" значения по умолчанию
Так же у конструктора должны быть дополнительное свойство: пройденное расстояние. Это свойство изначально равно 0 км.
Так же у автомобиля должен быть метод - ехать. Который принимает количество км и прибавляет их к счетчику пройденного расстояния.
И второй метода который возвращает пройденное автомобилем количество км.

После этого с помощью конструктора создать такой авто и отправить его в путь несколько раз. Вывести пробег авто в консоль.
 */
let carDefault = {
    name: "Машина",
    color: "черная",
    year: "2000",
    salonColor: "Серый",
    salonMaterial: "Кожа",
    probeg: "0",
    getFullProbeg: function () {
      return this.probeg + "км";
    }
};

function CarConstructor (name, color, year, salonColor, salonMaterial, probeg, way) {
  if (name != 0){
      this.name = name;
  } else {
    this.name = carDefault.name
  }
    if (color != 0){
        this.color = color;
    } else {
        this.color = carDefault.color
    }
    if (year != 0){
        this.year = year;
    } else {
        this.year = carDefault.year
    }
    if (salonColor != 0){
        this.salonColor = salonColor;
    } else {
        this.salonColor = carDefault.salonColor
    }
    if (salonMaterial != 0){
        this.salonMaterial = salonMaterial;
    } else {
        this.salonMaterial = carDefault.salonMaterial
    }
    if (probeg != 0){
        this.probeg = probeg;
    } else {
        this.probeg = carDefault.probeg
    }
    this.fullProbeg = function () {
        return  this.probeg + way + ' км';
    }
}
let porshe = new CarConstructor("porshe 911", "синий","2017", "черный", "кожа", 20000, 4000);
console.log(porshe);
console.log(porshe.fullProbeg());

let lamba = new CarConstructor("lamborgini", "красный","2019", "желтый", "кожа","", 5000);
console.log(lamba);
console.log(lamba.fullProbeg());

// Задания на условные операторы (оформить в виде функций, которые принимают значения).

// Даны два числа, вывести их сумму. пример:
function sum (x, y) {
  return x + y;
}

console.log(sum(3, 15));

// 1. Дано целое число. Если оно является положительным, то прибавить
//    к нему 1; в противном случае вычесть из него 2. Вывести полученное число.
function ifSum(x, y) {
    if (x % 2 === 0){
      return x + 1
    }else {
      return x - 2
    }
        }
   console.log(ifSum(54));


// 2. Даны три целых числа. Найти количество положительных чисел
//    в исходном наборе.
  let arr = [6, -3, 5];
  let count = [].filter.call(arr, function (el) {
      return el > 0;
  }).length;
  console.log(count);

// 3. Даны два числа. Вывести большее из них, а потом меньшее.
function name3(x, y) {
    if (x >= y) {
      return x + " " + y
    } else {
        return y + " " + x
    }
}
console.log(name3(12, 80));
// 4. Даны три числа. Найти наименьшее из них.
function mathMin(x, y, z) {
  let a = Math.min(x, y, z);
  return a
}
console.log(mathMin(43, 15, 98));