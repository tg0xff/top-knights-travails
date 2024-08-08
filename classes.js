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
  enqueue(value) {
    const listItem = {
      value,
      prev: null,
      next: null,
    }
    if (size === 0) {
      this.#first = listItem;
      this.#last = listItem;
    } else {
      listItem.prev = this.#last;
      this.#last.next = listItem;
      this.#last = listItem;
    }
    this.size++;
  }
  dequeue() {
    if (this.size < 1) return null;
    const val = this.#last.value;
    if (this.size === 1) {
      this.#first = null;
      this.#last = null;
    } else {
      this.#last.prev.next = null;
      this.#last = this.#last.prev;
    }
    this.size--;
    return val;
  }
  isEmpty() {
    return this.size === 0;
  }
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
