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

function find__1 (array) {
  const newArray = [];

  array.forEach( number => {
    if (number % 2 === 0) {
      newArray.push(number);
    }
  });

  return newArray;
}

console.log('find__1:', find__1(arrayData) );



//2. Написать функцию, которая возвращает новый массив, где каждое число массива умножено на собственный индекс.

// TODO: переписать функцию на чистую, и чтобы использовала map

function find2(array) {
    let newArrayData2 = array.map(function (item, index) {
      return item * index;

    });
 return newArrayData2;
}
console.log("Редактировано сейчас", find2(arrayData));


// 3. Написать функцию, которая возвращает массив развертнутый наоборот.
// TODO: переписать на свой алгоритм

function find3(array) {
    let newArrayData3 =[];
    let i;
    let n = array.length;
    for (i = 0; i < n; i++){
        newArrayData3[i]=array[n -1 - i];
    }
    return newArrayData3;
}

function find__3 (array) {
  const newArray = [];

  const lastIndex = array.length - 1;

  for (let i = lastIndex; i >= 0; i--) {
    newArray.push(array[i]);
  }

  return newArray;
}

console.log("Редактировано сейчас", find3(arrayData));
console.log("Редактировано сейчас 2", find__3(arrayData));


// 4. Написать функцию, которая возвращает массив с строковыми названиями месяцев по соответствию с цифрами.
// TODO: перенписать на чистую функцию
function find4(array) {
    let newArrayData4 =[];
    array.forEach(function (item) {
            let date = new Date (1999, item - 1, 12) ;
            let options = {
                month: 'long'
            };
        newArrayData4.push(date.toLocaleString("ru", options));
    });
    return newArrayData4;
}
console.log(find4(arrayData));


// 5. Написать функцию, которая возвращает самое большое число из массива.
// TODO: переписать на чистую функцию
function max (array) {
    let maxNum = Math.max(...array);
    return maxNum;
}
console.log(max(arrayData));
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

function CreateCar ({
                      name = 'lada',
                      color = 'silver',
                      year = '1956',
                      salonColor = 'black',
                      salonMaterial = 'тряпка' }) {

  this.name = name;
  this.color = color;
  this.year = year;
  this.salon = {
    color: salonColor,
    material: salonMaterial
  };

  this._distance = 0;

  this.goForward = km => {
    this._distance += km;
  };

  this.getDistance = () => {
    return `Автомобиль ${this.name} (${this.year}) прошел ${this._distance} км`;
  };
}

const opel = new CreateCar({
  name: 'opel',
  color: 'brown',
  year: '1999',
  salonColor: 'red',
  salonMaterial: 'wood'
});

opel.goForward(75);
opel.goForward(25);
opel.goForward(745);

console.log( opel.getDistance() );

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
  let count = arr.filter( function (el) {
      return el > 0;
  }).length;
  console.log(count);

  function task__02_p (array) {
    let count = 0;

    array.forEach( number => {
      if (number > 0) {
        count++;
      }
    });

    return count;
  }

  function task__02 (a, b, c) {
    let count = 0;
    if (a > 0) {
      count++;
    }
    if (b > 0) {
      count++;
    }
    if (c > 0){
      count++;
    }
    return count;
  }
console.log("редактировано:", task__02(15, -6, 49));
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


function nim (a, b, c) {
  let min = a;
  if (min > b) {
    min = b;
  }
  if (min > c){
    min = c;
  }
  return min;
}
console.log(nim(14, 12, 46));


// Задание на объекты

/*

Написать конструктор для стиральной машинки.

При создании имеются такие свойства: модель, марка, год, цвет.

Скрытые свойства: уровень воды в баке (5000 ml или 0 ml)

Методы: налить воду (наполняет бак и пишет об этом в консоль)
Методы: постирать вещи (выводит сообщение что постирал и опустошает бак)

Написать на классах

 */
class Machine {
    constructor(model= 'X500', brand= "Bosh", year= "2017", color= "white"
)
{
    this.model = model;
    this.brand = brand;
    this.year = year;
    this.color = color;

    this._wineContainer = 0;

    this._logs = [];

    this._addMessage = text => {
      const display = document.getElementById('display');

      this._logs.unshift(text);
      display.value = this._logs.join('\n');
    };

    this._clearLogs = () => {
      this._logs = [];
    };

    this.waterVolume = (ml) => {
        this._wineContainer = ml;
        if (this._wineContainer >= 3000){
          this._addMessage('Начался набор воды...');

          for (let percent = 0, timer = 1000; percent <= 100; percent += 25, timer += 1000) {
            setTimeout( () => {
              if (percent === 100) {
                this._addMessage(`Бак наполнен!`);
              } else {
                this._addMessage(`Бак заполнен на ${percent}%...`);
              }
            }, timer);
          }
        } else {
          this._addMessage('Бак с водой пуст!');
        }
    };

    this.getStart = () => {
        if (this._wineContainer >= 3000) {
          this._addMessage(`Стиральная машинка ${this.brand} (${this.model}) начала стирку с  ${this._wineContainer} ml воды`);
          this.waterVolume(0);
        } else {
          this._addMessage(`Стиральная машинка ${this.brand} (${this.model}) не может начать стирку если бак с водой пуст!`);
        }

    }
};
}
let zanussi = new Machine("Zanussi", "D200", "2019", "blue");

