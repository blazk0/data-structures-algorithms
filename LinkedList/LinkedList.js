import Node from './Node';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  get(index) {
    if (index < 0 || index > this.length - 1 || this.isEmpty()) {
      return null;
    }

    if (index === 0) {
      return this.head;
    }

    if (index === this.length - 1) {
      return this.tail;
    }

    let currNode = this.head;
    let i = 0;
    while (i < index) {
      i++;
      currNode = currNode.next;
    }

    return currNode;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    } else if (this.length === 1) {
      const nodeToRemove = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return nodeToRemove;
    } else {
      let currNode = this.head;
      const nodeToRemove = this.tail;

      let secondToLastNode;

      while (currNode) {
        if (currNode.next === this.tail) {
          secondToLastNode = currNode;
          break;
        }

        currNode = currNode.next;
      }

      secondToLastNode.next = null;
      this.tail = secondToLastNode;
      this.length--;
      return nodeToRemove;
    }
  }
}
