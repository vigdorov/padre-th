const data = [
  1945,
  2019,
  2890,
  1289,
  1789,
  1988,
];

const filterData = data.filter( year => {
  if (year > 1900 && year < 2000 ) {
    return true;
  } else {
    return false;
  }
});

console.log('filterData:', filterData);

const stringArray = '1, 3, 5, 34, 23, 1'.split(', ').map(
  strNumber => Number(strNumber)
);

console.log('stringArray:', stringArray);

const arrayToString = [1, 4, 5, 3].join('-');
console.log('arrayToString:', arrayToString);

// Метод splice

const numbers = [1, 2, 5, 34, 2, 5];
console.log('numbers:', numbers);

// удаление splice
numbers.splice(3, 1);
console.log('deleteNumbers:', numbers);

// замена splice
numbers.splice(0, 1, 'eight');
console.log('updateNumbers:', numbers);

// вставка splice
numbers.splice(0, 0, 'five');
console.log('pasteNumbers:', numbers);

// копирование массива
const newNumbersArray = numbers.slice();
console.log('копирование:', newNumbersArray);

// объединение массивов
const firstArray = [1, 2, 3];
const secondArray = ['text', 're', true];

const thirdArray = firstArray.concat(secondArray, 56, false, 'dffg', firstArray);

console.log('thirdArray:', thirdArray);

// методы проверки массивов
// проверяет все ли элементы массива соответствуют условию

const counts = [34, 24, 6, 8, 10, 78, 3];

const isEven = counts.every( count => {
  return count % 2 === 0;
});

console.log('isEven:', isEven);

// проверяет соответствует ли хотя бы одно значение условию

const reply = ['red', 'white', 'black'];

const isContainsRed = reply.some( (color, i) => {
  if (color === 'red') {
    console.log('i =', i);
    return color === 'red';
  }

  return false;
});

console.log('isContainsRed:', isContainsRed);

// выполняет некую последовательность действий над массивом, передавая в каждый шаг результат предыдущей работы цикла

const fullNumbers = [1, 4, 5, 2, 1, 34];

const sum = fullNumbers.reduce( (acc, item) => {
  return item % 2 === 0 ? acc + item : acc;
});

// Работа с массивом

const arr = [1, 2, 4, 5, 3];

// добавление элемента в конец массива
arr.push('45');
// удаление элемента с конца массива (удалить последний элемент)
let del = arr.pop(); // возвращает удаленный элемент
// добавить элемент в начало массива
arr.unshift('234');
// удаление элемента из начала массива (удалить первый элемент)
arr.shift();



