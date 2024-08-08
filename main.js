import MoveTree from "./classes.js";

function notationToArray(chessSquare) {
  if (chessSquare.length !== 2) {
    throw new Error("A square is represented by two characters only.");
  }
  // Turn letter into index number.
  const x = chessSquare.charCodeAt(0) - 97;
  // Turn number into index number.
  const y = +chessSquare.charAt(1) - 1;
  return [x, y];
}

function arrayToNotation(array) {
  const xCodePoint = array[0] + 97;
  const sqLetter = String.fromCodePoint(xCodePoint);
  const yCodePoint = array[1] + 49;
  const sqNumber = String.fromCodePoint(yCodePoint);
  return `${sqLetter}${sqNumber}`;
}

// function isValidMove(moveArr) {
//   const [x, y] = moveArr;
//   return x >= 0 && x < 8 && y >= 0 && y < 8;
// }

// function processAllValidMoves() {
//   const validMoves = [];
//   for (let x = 0; x < 8; x++) {
//     validMoves[x] = [];
//     for (let y = 0; y < 8; y++) {
//       validMoves[x][y] = [];
//       let moveDifMatrix = [[2, 1], [2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2], [-2, 1], [-2, -1]];
//       for (const move of moveDifMatrix) {
//         const knightMove = [x + move[0], y + move[1]];
//         if (isValidMove(knightMove)) {
//           validMoves[x][y].push(knightMove);
//         }
//       }
//     }
//   }
//   return validMoves;
// }

function knightMoves(startSq, destinationSq) {
  const startArr = notationToArray(startSq);
  const destinationArr = notationToArray(destinationSq);
  const moveTree = new MoveTree(startArr);
  const movePath = moveTree.findMovePath(destinationArr);
  return movePath;
}

const start = "a1";
const end = "b7";
console.log(`knightMoves("${start}", "${end}"):`);
const movePath = knightMoves(start, end);
let pathString = "";
movePath.forEach((move) => pathString += `, ${arrayToNotation(move)}`);
pathString = pathString.slice(2);
console.log(pathString);
