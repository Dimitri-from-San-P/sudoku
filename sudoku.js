
// const solution = document.querySelector('.solution');

function solve(boardString) {
  // Разбивка задачи на массив 9x9:
  const newBoardString = boardString.split('');
  const board = [];

  for (let i = 0; i < newBoardString.length; i += 9) {
    const devider = newBoardString.slice(i, i + 9);
    board.push(devider);
  }

  // Находим пересечения пустых мест в строках и колонках:
  const size = 9;
  const boxSize = 3;

  function findEmpty(board) {
    for (let row = 0; row < size; row += 1) {
      for (let col = 0; col < size; col += 1) {
        if (board[row][col] === '-') {
          return [row, col];
        }
      }
    }
    return null;
  }
  function getValidate(number, position, board) {
    const [row, col] = position;

    // Проверка строки
    for (let i = 0; i < size; i++) {
      if (board[i][col] === number && i !== row) {
        return false;
      }
    }

    // Проверка столбца
    for (let i = 0; i < size; i++) {
      if (board[row][i] === number && i !== col) {
        return false;
      }
    }
    // Проверка маленького поля 3x3
    const boxRow = Math.floor(row / boxSize) * boxSize;
    const boxCol = Math.floor(col / boxSize) * boxSize;

    for (let i = boxRow; i < boxRow + boxSize; i++) {
      for (let j = boxCol; j < boxCol + boxSize; j++) {
        if (board[i][j] === number && i !== row && j !== col) {
          return false;
        }
      }
    }
    return true;
  }

  function getResult() {
    const currentPosition = findEmpty(board);

    if (currentPosition === null) {
      return true;
    }

    for (let i = 1; i < size + 1; i++) {
      const currentNumber = i.toString();
      const isValid = getValidate(currentNumber, currentPosition, board);

      if (isValid) {
        const [x, y] = currentPosition;
        board[x][y] = currentNumber;

        if (getResult()) {
          return true;
        }

        board[x][y] = '-';
      }
    }
    return false;
  }
  // console.table(board);
  getResult();
  // console.table(board);
  return board;
}
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */


function isSolved(board) {
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board.length; j += 1) {
      if (board[i][j] === '-') return false;
    }
  }

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */

function prettyBoard(board) {
  console.log('🦫  🦫  🦫  🦫  🦫  🦫  🦫  🦫  🦫  🦫  🦫  🦫  🦫  🦫  🦫');
  console.log('   ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓');
  console.log(
    `🦫 ┃   ${board[0][0]}    ${board[0][1]}    ${board[0][2]}  │  ${board[0][3]}    ${board[0][4]}    ${board[0][5]}  │  ${board[0][6]}    ${board[0][7]}    ${board[0][8]}   ┃  🦫`
  );
  console.log('');
  console.log(
    `🦫 |   ${board[1][0]}    ${board[1][1]}    ${board[1][2]}  │  ${board[1][3]}    ${board[1][4]}    ${board[1][5]}  │  ${board[1][6]}    ${board[1][7]}    ${board[1][8]}   |  🦫`
  );
  console.log('');
  console.log(
    `   ┃   ${board[2][0]}    ${board[2][1]}    ${board[2][2]}  │  ${board[2][3]}    ${board[2][4]}    ${board[2][5]}  │  ${board[2][6]}    ${board[2][7]}    ${board[2][8]}   ┃`
  );
  console.log('🦫 ┣ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┫  🦫');
  console.log(
    `   ┃   ${board[3][0]}    ${board[3][1]}    ${board[3][2]}  │  ${board[3][3]}    ${board[3][4]}    ${board[3][5]}  │  ${board[3][6]}    ${board[3][7]}    ${board[3][8]}   ┃`
  );
  console.log('');
  console.log(
    `🦫 |   ${board[4][0]}    ${board[4][1]}    ${board[4][2]}  │  ${board[4][3]}    ${board[4][4]}    ${board[4][5]}  │  ${board[4][6]}    ${board[4][7]}    ${board[4][8]}   |  🦫`
  );
  console.log('');
  console.log(
    `   ┃   ${board[5][0]}    ${board[5][1]}    ${board[5][2]}  │  ${board[5][3]}    ${board[5][4]}    ${board[5][5]}  │  ${board[5][6]}    ${board[5][7]}    ${board[5][8]}   ┃`
  );
  console.log('🦫 ┣ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┫  🦫');
  console.log(
    `   ┃   ${board[6][0]}    ${board[6][1]}    ${board[6][2]}  │  ${board[6][3]}    ${board[6][4]}    ${board[6][5]}  │  ${board[6][6]}    ${board[6][7]}    ${board[6][8]}   ┃`
  );
  console.log('');
  console.log(
    `🦫 |   ${board[7][0]}    ${board[7][1]}    ${board[7][2]}  │  ${board[7][3]}    ${board[7][4]}    ${board[7][5]}  │  ${board[7][6]}    ${board[7][7]}    ${board[7][8]}   |  🦫`
  );
  console.log('');
  console.log(
    `🦫 ┃   ${board[8][0]}    ${board[8][1]}    ${board[8][2]}  │  ${board[8][3]}    ${board[8][4]}    ${board[8][5]}  ┆  ${board[8][6]}    ${board[8][7]}    ${board[8][8]}   ┃  🦫`
  );
  console.log('   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛');
  console.log('🦫  🦫  🦫  🦫  🦫  🦫  🦫  🦫  🦫  🦫  🦫  🦫  🦫  🦫  🦫');
  console.log(EOL);

}
// solution.addEventListener('click', () => {
//   solve();
// }); // подумать как реализовать

// Экспортировать функции для использования в другом файле (например,. readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
