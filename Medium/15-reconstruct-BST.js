// This is an input class. Do not edit.
class BST {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
  
function reconstructBst(preOrderTraversalValues) {
    // Write your code here.
    if (preOrderTraversalValues.length === 0) {
        return null;
    }
    let currVal = preOrderTraversalValues[0];
    let rightSubtreeRootIdx = preOrderTraversalValues.length;

    for (let idx = 1; idx < preOrderTraversalValues.length; idx++) {
        if (preOrderTraversalValues[idx] >= currVal) {
            rightSubtreeRootIdx = idx;
            break;
        }
    }

    let leftSubtree = reconstructBst(preOrderTraversalValues.slice(1, rightSubtreeRootIdx));
    let rightSubtree = reconstructBst(preOrderTraversalValues.slice(rightSubtreeRootIdx));
    return new BST(currVal, leftSubtree, rightSubtree);
}

class TreeInfo {
    constructor(rootIdx) {
        this.rootIdx = rootIdx;
    }
}

function reconstructBst(preOrderTraversalValues) {
    // Write your code here.
    const treeInfo = new TreeInfo(0);
    return reconstructBstFromRange(-Infinity, Infinity, preOrderTraversalValues, treeInfo);
}

function reconstructBstFromRange(lowerBound, upperBound, preOrderTraversalValues, currSubtreeInfo) {
    if (currSubtreeInfo.rootIdx === preOrderTraversalValues.length) {
        return null;
    }

    let rootVal = preOrderTraversalValues[currSubtreeInfo.rootIdx];
    if (rootVal < lowerBound || rootVal >= upperBound) {
        return null;
    }

    currSubtreeInfo.rootIdx++;
    let leftSubtree = reconstructBstFromRange(lowerBound, rootVal, preOrderTraversalValues, currSubtreeInfo);
    let rightSubtree = reconstructBstFromRange(rootVal, upperBound, preOrderTraversalValues, currSubtreeInfo);
    return new BST(rootVal, leftSubtree, rightSubtree);
}