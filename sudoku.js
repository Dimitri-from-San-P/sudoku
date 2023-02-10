/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function solve(boardString) {

  const size =9; // задаем параметры для циклов
  const boxSize =3;

  const arrFromStr = boardString.split(''); //функция перевода строки из тхт в массив
  const res = [];

  for (let i = 0; i < arrFromStr.length; i += 9) {
    const devider = arrFromStr.slice(i, i + 9);
    res.push(devider);
  }
  console.table(res); // результат функции перевода строки в массив


  function findEmpty (res) { // функция поиска пустых ячеек
    for (let row =0; row<size; row++){ //итерация по строкам
      for (let column=0;column<size;column++){ //итерация по колоннам
        if (res[row][column]==='-'){
          return [row][column]
        }
      }
    }
    return null; // когда заполнены все колонки
  }

  // функция проверки валидности будущего результата:
  function validate (num,pos,res){

    const [row,column]=pos; // получаем строку и колонку для проверки циклом:

    for (let i=0;i<size;i++){
      if (res[i][column]===num && i!=row){   // проверяем строку
        return false
      }
    }

    for (let i=0;i<size;i++){
      if (res[row][i]===num && i!=column){ // проверяем колонну
        return false
      }
    }

  }
  function solvingInProgress(){
    const currentPos=findEmpty(res); // приравниваем currentpos к функции поиска пустой ячейки

    if(currentPos===null){
      return true // вернуло булевое значение-значит ячейка заполнена, судоку решено
    }
    // если есть пустые ячейки-идем по ним циклом (перебираем числа-поэтому идем от 1):
    for (let i=1;i<=size;i++){
      const currentNum = i.toString();
      // const checkValid =validate(currentNum, currentPos,res){

      // }
    }
  }
  }


/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
const currentPos=findEmpty(res);

// if (currentPos===null){

// }
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
