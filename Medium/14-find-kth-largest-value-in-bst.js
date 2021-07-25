// This is an input class. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
  
function findKthLargestValueInBst(tree, k) {
    // Write your code here.
    let arr = inOrderTraverse(tree, []);
	return arr[arr.length - k]
}

function inOrderTraverse(tree, array) {
    // Write your code here.
    if (tree !== null) {
        inOrderTraverse(tree.left, array);
        array.push(tree.value);
        inOrderTraverse(tree.right, array);
    }
    return array;     
}


class TreeInfo {
    constructor(numberOfNodesVisited, latestVisitedNodeValue) {
        this.numberOfNodesVisited = numberOfNodesVisited;
        this.latestVisitedNodeValue = latestVisitedNodeValue;
    }
}
  
function findKthLargestValueInBst(tree, k) {
    // Write your code here.
    let treeInfo = new TreeInfo(0, -1);
    reverseInOrderTraverse(tree, k, treeInfo);
	return treeInfo.latestVisitedNodeValue;
}

function reverseInOrderTraverse(node, k, treeInfo) {
    if (node === null || treeInfo.numberOfNodesVisited >= k) return;

    reverseInOrderTraverse(node.right, k, treeInfo);
    if (treeInfo.numberOfNodesVisited < k) {
        treeInfo.numberOfNodesVisited++;
        treeInfo.latestVisitedNodeValue = node.value;
        reverseInOrderTraverse(node.left, k, treeInfo)
    }
}