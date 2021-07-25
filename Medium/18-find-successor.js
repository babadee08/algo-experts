// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}
  
function findSuccessor(tree, node) {
    // Write your code here.
    let inOrderTraversalOrder = inOrderTraverse(tree, []);
    for (let idx = 0; idx < inOrderTraversalOrder.length; idx++) {
        if (node !== inOrderTraversalOrder[idx]) {
            continue;
        }

        if (idx === inOrderTraversalOrder.length - 1) {
            return null;
        }

        return inOrderTraversalOrder[idx + 1];
    }
}

function inOrderTraverse(tree, array) {
    // Write your code here.
    if (tree !== null) {
        inOrderTraverse(tree.left, array);
        array.push(tree);
        inOrderTraverse(tree.right, array);
    }
    return array;     
}

function findSuccessor(tree, node) {
    // Write your code here.
    if (node.right !== null) {
        return getLeftmostChild(node.right);
    }

    return getRightmostParent(node);
}

function getLeftmostChild(node) {
    let currentNode = node;
    while (currentNode.left !== null) {
        currentNode = currentNode.left;
    }
    return currentNode;
}

function getRightmostParent(node) {
    let currentNode = node;
    while (currentNode.parent !== null && currentNode.parent.right === currentNode) {
        currentNode = currentNode.parent;
    }
    return currentNode.parent;
}