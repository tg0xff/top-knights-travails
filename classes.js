class Node {
  constructor(parent, move) {
    this.parent = parent,
    this.move = move;
    this.children = [];
  }
}

export default class MoveTree {
  constructor(moveArr) {
    this.root = generateMoveTree(moveArr);
  }
}
