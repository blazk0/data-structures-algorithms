import Node from './Node';

class BinaryTree {
  constructor() {
    this.root = null;
  }

  addChild(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    } else {
      let currentNode = this.root;
      let added = false;

      while (!added && currentNode) {
        if (currentNode.value === value) {
          return 'No Duplicates can be added';
        }

        if (value < currentNode.value) {
          if (currentNode.leftChild === null) {
            currentNode.leftChild = new Node(value);
            added = true;
          } else {
            // iterate from the next left child
            currentNode = currentNode.leftChild;
          }
        } else if (value > currentNode.value) {
          if (currentNode.rightChild === null) {
            currentNode.rightChild = new Node(value);
            added = true;
          } else {
            currentNode = currentNode.rightChild;
          }
        }
      }
    }
  }

  removeChild(value) {
    let currentNode = this.root;
    let found = false;
    let nodeToRemove;
    let parentNode = null;

    while (!found) {
      if (currentNode === null || currentNode.value === null) {
        return 'Node was not found';
      }

      if (value === currentNode.value) {
        nodeToRemove = currentNode;
        found = true;
      } else if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.leftChild;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.rightChild;
      }
    }
  }
}

export default BinaryTree;
