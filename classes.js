import validKnightMoves from "./valid-moves.js";

class Node {
  constructor(parent, move) {
    this.parent = parent;
    this.move = move;
    this.children = [];
  }
}

class Queue {
  #first = null;
  #last = null;
  size = 0;
}

export default class MoveTree {
  constructor(moveArr) {
    this.root = generateMoveTree(moveArr);
  }
  generateMoveTree(moveArr, parent = null, n = 0) {
    if (n > 10) return null;
    const node = new Node(parent, moveArr);
    const [x, y] = moveArr;
    const validMoves = validKnightMoves()[x][y];
    for (const move of validMoves) {
      const child = this.generateMoveTree(move, node, n + 1);
      if (child) {
        node.children.push(child);
      }
    }
    return node;
  }
}
