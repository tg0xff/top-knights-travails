class Node {
  constructor(prev, move) {
    this.prev = prev,
    this.move = move;
    this.children = [];
  }
}

export default class MoveTree {
  constructor(moveArr) {
    this.root = generateMoveTree(moveArr);
  }
}
