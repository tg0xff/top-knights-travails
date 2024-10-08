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

function isValidMove(moveArr) {
  const [x, y] = moveArr;
  return x >= 0 && x < 8 && y >= 0 && y < 8;
}

// function processAllValidMoves() {
//   const validMoves = [];
//   const moveDifMatrix = [[2, 1], [2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2], [-2, 1], [-2, -1]];
//   for (let x = 0; x < 8; x++) {
//     validMoves[x] = [];
//     for (let y = 0; y < 8; y++) {
//       validMoves[x][y] = [];
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

function knightMoves(startArr, destinationArr) {
  if (!isValidMove(startArr) || !isValidMove(destinationArr)) {
    throw new Error(
      "The coordinates must be within the range of a chessboard.",
    );
  }
  const moveTree = new MoveTree(startArr);
  const movePath = moveTree.findMovePath(destinationArr);
  return movePath;
}

const testMoves = [
  ["a1", "b3"],
  ["a1", "d4"],
  ["d4", "a1"],
  ["a1", "h8"],
];
for (const testMove of testMoves) {
  const [start, end] = testMove;
  const startArr = notationToArray(start);
  const endArr = notationToArray(end);
  console.log({
    start: `${start} = [${startArr}]`,
    end: `${end} = [${endArr}]`,
  });
  const movePath = knightMoves(startArr, endArr);

  let pathString = "";
  movePath.forEach((move) => (pathString += `, ${arrayToNotation(move)}`));
  pathString = pathString.slice(2);
  console.log(pathString);

  pathString = "";
  movePath.forEach((move) => (pathString += `, [${move}]`));
  pathString = pathString.slice(2);
  console.log(pathString);
  console.log("");
}
