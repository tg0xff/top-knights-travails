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

function knightMoves(startSq, destinationSq) {
  const startArr = notationToArray(startSq);
  const destinationArr = notationToArray(destinationSq);
}
