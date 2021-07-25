// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class TreeInfo {
    constructor(isBalanced, height) {
        this.isBalanced = isBalanced;
        this.height = height;
    }
}
  
function heightBalancedBinaryTree(tree) {
    // Write your code here.
    return getTreeInfo(tree).isBalanced;
}

function getTreeInfo(node) {
    if (node === null) {
        return new TreeInfo(true, -1);
    }
    let leftSubtreeInfo = getTreeInfo(node.left);
    let rightSubtreeInfo = getTreeInfo(node.right);

    let isBalanced = leftSubtreeInfo.isBalanced && rightSubtreeInfo.isBalanced && Math.abs(leftSubtreeInfo.height - rightSubtreeInfo.height) <= 1;
    let height = Math.max(leftSubtreeInfo.height, rightSubtreeInfo.height) + 1;
    return new TreeInfo(isBalanced, height)
}