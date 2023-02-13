/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

const boardString =
  '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

const origNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
function solve(boardString) {
  // console.log(typeof boardString);

  console.log(boardString.length);
  // const rrr = [];
  // for (let i = 0; i < boardString.length; i + 9) {
  //   const rr = [];
  //   for (let k = 0; k <= 8; k++) {
  //     // console.log(boardString[i][k]);
  //     // rr.push(boardString[i][k]);
  //   }
  //   rrr.push(rr);
  // }
  // console.log(rrr);
  // console.log([...rr].split(','));
  //   for (let num = 0; num < rrr.length; num++) {
  //     let to = rrr.map((el) => el.replace('-', num));
  //     // to;
  //   }
  //   let r = rrr.map((el) => el.replaceAll('-', '0'));
  //   console.log(r);
}

solve(boardString);

/*











*/
const masNum = [];
const onlyEq = [];
for (let i = 0; i < boardString.length; i += 9) {
  const devider = boardString.slice(i, i + 9);
  //   console.log(devider.replaceAll('-', ''));
  masNum.push(devider.split('')); // всунул в массивы каждые 9 цифр
  onlyEq.push(devider.replaceAll('-', '').split(''));
}
console.log(masNum);

let countItems = {};
for (const item of masNum) {
  countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
}
// console.log(countItems);
// const onlyEqMin = onlyEq.map((el) => el.split(""));

const sudokuMap = new Map();
// let arrEl = [];
const element = [];
for (let i = 0; i < masNum.length; i++) {
  for (let k = 0; k < masNum.length; k++) {
    // console.log([masNum[i][k], i, k]);
    element.push([masNum[i][k], i, k]);
    // sudokuMap.set(masNum[i][k], (i, k));
    // sudokuMap.set((i, k), masNum[i][k]);
  }
  //   arrEl.push(element);
  //   console.log(element);
}
console.log(sudokuMap.set('00', '1'));

// sudokuMap.set(element);
// console.log(element.map((el) => String(el)));
const strEl = element.map((el) => String(el));
// let r = strEl.map((el) => (el.includes('-') ? el : null));
// let re = strEl.filter((el) => (el.includes('-') ? el : ''));
console.log(strEl);
let ror = strEl.map((str) => str[2] + str[4]);
console.log(ror);
let roro = strEl.map((str) => str[0]);
//
let obj = {};

ror.forEach((el, i) => (obj[el] = roro[i]));
console.log(obj);
console.log(obj[10]);
// обьект не выкатывает 00

// создание ключ-значение --- оригинальные ключи
for (let i = 0; i < [...ror].length; i++) {
  sudokuMap.set(ror[i], roro[i]);
}
console.log(sudokuMap);
console.log(sudokuMap.get('00'));
// СЕТ тянет 00 - ему все равно
//
// console.log(sudokuMap);
// console.log([...sudokuMap.values()]);
// console.log([...sudokuMap.keys()]);
// console.log(...sudokuMap.entries());
const masNum1 = [];
// const onlyEq = [];
for (let i = 0; i < 81; i += 9) {
  const devider = [...sudokuMap.entries()].slice(i, i + 9);

  //   console.log(devider.replaceAll('-', ''));
  masNum1.push(devider);
}
console.table(masNum1);
let toop = '1';

// console.log([...sudokuMap.entries()].map((el) => (el[1] == toop ? el : null)));
// console.log([...sudokuMap.entries()].map((el) => Number(el[0])));

// function op() {
//   for (let i = 0; i < sudokuMap.size; i++) {
//     if ([...sudokuMap.values()][i] !== '-') {
//       console.log(sudokuMap.get([i]));
//     } else {
//       console.log(sudokuMap);
//     }
//   }
// }

// if()
let rooor = [];
for (let num = 1; num < 10; num++) {
  console.log(String(num));
  // console.log([...sudokuMap.entries()].map((el) => (el[1] == num ? el : null)));
  console.log(
    rooor.push(
      [...sudokuMap.entries()].map((el) =>
        el.map((ell) => ell.replaceAll('-', num))
      )
    )
  );

  // испл-ть на наличие свободных мест
}
rooor = rooor.flat();
console.log(rooor.map((el) => el.filter((ell) => ell[0])));
// console.log(sad);
// let ko = i-
// if(origNum[i] sudokuMap.has(num) ) {

// }
let rp = '3';
// [...sudokuMap.values()][15]  =   возращает по индексу ключу значение со смещением от потери порядка))
// console.log([...sudokuMap.values()]);
// console.log(sudokuMap.get('88'));
// console.log(sudokuMap.set('88', rp));
// console.log(sudokuMap.get('88'));
// console.log(sudokuMap.has(''));

// если взять валью и сравнить а потом заменить на другое///

// op();
/*






*/
let ropo = [];
for (let k = 0; k < strEl.length; k++) {
  // console.log( strEl[k]);
  //   let obj = {};
  //   for (const str of strEl) {
  //     console.log((obj[str] = strEl[str][k]));
  //   }
  //   ropo.push(obj);
}
// console.log(element.map((el) => el.map((er, i) => String(er)[1])));

// console.log(sudokuMap);

//
//
// console.log(onlyEq);

const onlyEqLength = onlyEq.map((el) => el.length);
// console.log(onlyEqLength);
//

// const arrOfExNum = origNum.concat(getNine(boardString))

// const arrOfExNum = [...masNum, ...onlyEq ]

// console.log(arrOfExNum.map((el, i) => el.splice(onlyEqLength[i])));
// console.log(new Set(arrOfExNum));
// const uniАrr = arrOfExNum.map((el) => new Set(el));
// console.log(uniАrr);
// const rem = uniАrr.map((el, i) => el);
// console.log(rem);

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
