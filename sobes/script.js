/**
 * Темы на собеседованиях: прототипы, промисы, замыкания, ajax-запросы, определение типов typeof
 */

// задача 1.
const str = 'fgfgggg';
// console.log( str[3] );

// реализовать методы, чтобы можно было вот так (2).plus(3).minus(1)

Number.prototype.plus = function (value) {
  return this + value;
};

Number.prototype.minus = function (value) {
  return this - value;
};

const x = (2).plus(3).minus(1);
// console.log( x );

(function consoleLog () {
  //console.log(54);
})();

// Реализовать так чтобы было 1*b*1c

const task04 = (sign, numberOne, numberTwo, numberThree) => {
  return numberOne + sign + numberTwo + sign + numberThree;
};

task04('*', '1', 'b', '1c');

// дано дерево, найти сумму всех вершин

const tree = {
  1: {
    4: {
      3: {
        1: 3
      },
      1: {
        3: 4
      },
      0: {
        9: 0
      },
    },
    2: {
      7: 1,
      3: 2
    },
  },
  2: 3
};

function sumLeave (tree) {
  let sum = 0;

  const recursion = (value) => {
    if (typeof value === 'number') {
      sum += value;
    } else if (typeof value === 'object') {
      Object.values(value).forEach( childValue => {
        recursion(childValue);
      });
      /* for (let key in value) {
        if (value.hasOwnProperty(key)) {
          recursion(value[key]);
        }
      } */
    }
  };

  recursion(tree);

  return sum;
}

//console.log( sumLeave(tree) );

// Отсортировать массив с датами

const arrayDate = [
  new Date(2019, 2, 2),
  new Date(2013, 2, 2),
  new Date(2025, 2, 2),
];

function sortDate (array) {
  // почитай про сортировку массивов, алгоритмы и напиши один из алгоритмов
}

// console.log( sortDate(arrayDate) );

const arrayString = ['kot', 'tok', 'okt'];

const etalon = arrayString[0];

arrayString.forEach( (string, i) => {
  arrayString[i] = string.split('').sort().join('');
});

/*console.log( arrayString.every( string => {
  return string === etalon;
}));*/

// Замыкания

for (var i = 0; i < 10; i++) {
  setTimeout(function (index) {
      return function () {
        console.log(index);
      }
  }(i), 0);
}

// Палиндром = шалаш. Написать функцию которая проверяет слово палиндром оно или нет

function palindrom (string)  {

}

/**
 * Написать приложение Книга Контактов. Хранит список твои телефонных
 * контактов. Контакт - имя, фамилия, телефон человека. Выводит список
 * всех контактов. Можно добавлять, удалять, редактировать контакты.
 * Редактирование и добавление контактов происходит в модальном окне.
 * При совершении действия (удаления, добавления) вылезает уведомление.
 * Использовать для хранения localStorage. Справа от списка контактов,
 * есть список увлечений: музыка, скейтборд, канибализм. С помощью
 * драганддропа можно добавлять увлечения контактам. Увлечения выглядят
 * как этикетки. Приложение должно быть адаптивным, стильное красивое,
 * на flex'ах.
 */
