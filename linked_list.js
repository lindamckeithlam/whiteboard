// singly linked list
// has a head and optional tail
// inserting in front and tail takes constant time bc you are reassigning pointers

// array
// inserting and deleting in head takes more time
// because you have to shift the indices

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    if (this.head === null) {
      this.head = new Node(value);
      return;
    }
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = new Node(value);
  }

  print(curr = this.head) {
    if (curr === null) {
      return;
    } else {
      console.log(curr.value);
      this.print(curr.next);
    }
  }

  insertAtPos(val, idx, currPos = 0, currNode = this.head) {
    if (idx === currPos + 1) {
      let temp = currNode.next;
      currNode.next = new Node(val);
      currNode.next.next = temp;
    } else {
      this.insertAtPos(val, idx, currPos + 1, currNode.next);
    }
  }
}

const list = new LinkedList();
list.insert("a");
list.insert("b");
list.insert("c");
list.insert("d");
console.log(list.print());
list.insertAtPos("x", 3);   
console.log(list.print());
