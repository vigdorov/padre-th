// boolean
const a = true;
const b = false;

// null - пустая коробка

// undefined - адрес есть, а коробки нет

// number
const x = Infinity;
const y = -Infinity;
const z = NaN; // Not a Number

// string

// Object

// Symbol
let newCount = Symbol;

let tot = {
  name: 'Izya',
  [newCount]: 'hgif'
};

// Приведение типов (typeof в том числе)

let go = Number(null);
/*
Числовое преобразование
null - 0
undefined - NaN
true/false - 1/0
string - "" - 0, любая другая строка NaN, "    5   " - 5
 */

/*
Логическое преобразование
операторы сравнения > < >= <= == if()
undefined - false
null - false
числа - все числа - true, кроме 0 NaN - false
строки - все строки - true, кроме пустых "" - false
объекты - всегда true (массивы)
 */

let isStr = false;

if (isStr) {
  console.log(isStr);
}
//console.log(go);

// Условные операторы

if (isStr || 45 == '45') {
  // если одно из значений правда, то условие выполниться
}

if (isStr && 45 == '45') {
  // выполниться только если оба значчения правда
}
let isActive = false;

let btnClass = isActive && 'btn-active';

//console.log(btnClass);

let dataHTTP;

let arrayData = dataHTTP || [];

//console.log(arrayData);

let liClass = isActive ? 'btn-active' : 'btn-inactive';
console.log(liClass);


const h1 = document.getElementsByTagName('h1')[0];
h1.style.cursor = 'pointer';
h1.onselectstart = () => false;

h1.addEventListener('click', () => {
  isActive = !isActive;
  h1.style.color = isActive ? 'blue' : 'black';
});

if (isActive) {
  true;
} else if (isActive) {
  false;
} else {
  false;
}

// Почитать таблицу приоритетов операторов
