// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class TreeInfo {
    constructor(diameter, height) {
        this.diameter = diameter;
        this.height = height;
    }
}

function binaryTreeDiameter(tree) {
    // Write your code here.
    return getTreeInfo(tree).diameter;
}

function getTreeInfo(tree) {
    if (tree === null) {
        return new TreeInfo(0, 0);
    }
    let leftTreeInfo = getTreeInfo(tree.left);
    let rightTreeInfo = getTreeInfo(tree.right);

    let longestPathThruRoot = leftTreeInfo.height + rightTreeInfo.height;
    let maxDiameterSoFar = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter);
    let currDiameter = Math.max(longestPathThruRoot, maxDiameterSoFar);
    let currHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);

    return new TreeInfo(currDiameter, currHeight);
}