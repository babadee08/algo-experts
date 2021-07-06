// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) { 
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function branchSums(root) {
    // Write your code here.
    sums = [];
    calculateBranchSum(root, 0, sums)
    return sums;
}

function calculateBranchSum(node, runningSum, sums) {
    if (node == null) {
        return;
    }
    
    let newRunningSum = runningSum + node.value;

    if (node.left == null && node.right == null) {
        sums.push(newRunningSum);
        return;
    }

    calculateBranchSum(node.left, newRunningSum, sums);
    calculateBranchSum(node.right, newRunningSum, sums);
}