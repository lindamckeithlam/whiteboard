//tries - type of tree

class Node {
  constructor(value) {
    //neighbors has a char of a key
    // the value is the instance of the node
    this.neighbors = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }
}

const root = new Node();
const a = new Node();
const b = new Node();
const c = new Node();

root.neighbors["a"] = a;
root.neighbors["b"] = b;
root.neighbors["c"] = c;
