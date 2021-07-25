// This is an input class. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function validateBst(tree) {
    // Write your code here.
    return validateBstHelper(tree, -Infinity, Infinity)
}

function validateBstHelper(tree, minVal, maxVal) {
    if (tree === null) {
        return true;
    }
    if (tree.value < minVal || tree.value >= maxVal) {
        return false;
    }
    let leftIsValid = validateBstHelper(tree.left, minVal, tree.value);
    return leftIsValid && validateBstHelper(tree.right, tree.value, maxVal);
}

