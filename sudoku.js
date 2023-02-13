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
  return true;
}
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */

function prettyBoard(board) {
  console.table(board);
}
// solution.addEventListener('click', () => {
//   solve();
// }); // подумать как реализовать

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
