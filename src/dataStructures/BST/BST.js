import Node from './Node';

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertNode(data, left = null, right = null) {
    const newNode = new Node(data, left, right);
    if (!this.root) {
      this.root = newNode;
      return this.root;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else if (data > currentNode.data) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    return this.root;
  }

  findNode(value) {
    if (!this.root) {
      return undefined;
    }

    const auxilarySearch = (node, data) => {
      if (node === null) return null;
      if (data < node.data) {
        return auxilarySearch(node.left, data);
      }
      if (data > node.data) {
        return auxilarySearch(node.right, data);
      }
      return node;
    };

    return auxilarySearch(this.root, value);
  }
}

export default BinarySearchTree;
