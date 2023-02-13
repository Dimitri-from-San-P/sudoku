const boardString =
  '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

const origNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
function solve(boardString) {
  // console.log(typeof boardString);
  const goriz = [];
  const onlyEq = [];
  for (let i = 0; i < boardString.length; i += 9) {
    const devider = boardString.slice(i, i + 9);
    //   console.log(devider.replaceAll('-', ''));
    goriz.push(devider.split('')); // всунул в массивы каждые 9 цифр
    onlyEq.push(devider.replaceAll('-', '').split(''));
  }
  let vert = [];
  for (let p = 0; p < goriz.length; p++) {
    let ver = [];
    for (let k = 0; k < goriz.length; k++) {
      ver.push(goriz[k][p]);
    }
    vert.push(ver);
  }
  console.log(goriz);
  console.log(vert);
  for (let w = 0; w < goriz.length; w++) {
    console.log(goriz[w], vert[w]);
  }
  let obj = {};
}
solve(boardString);
console.log('re');
