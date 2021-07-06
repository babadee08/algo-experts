// First Approach (Recursive)
function nodeDepths(root) {
    // Write your code here.
    calculateNodeDepth(root, 0);
}

function calculateNodeDepth(node, depth) {
    if (node == null) {
        return 0;
    }
    return depth + calculateNodeDepth(node.left, depth + 1) + calculateNodeDepth(node.right, depth + 1);
}

// second Approach (Iterative)
function nodeDepths(root) {
    // Write your code here.
    let sumOfDepth = 0;
    let stack = [{"node": root, "depth": 0}];

    while (stack.length > 0) {
        let nodeInfo = stack.pop();
        let node = nodeInfo['node'];
        let depth = nodeInfo['depth'];

        if (node == null) {
            continue;
        }
        sumOfDepth += depth;
        stack.push({"node": node.left, "depth": depth + 1});
        stack.push({"node": node.right, "depth": depth + 1});
    }

    return sumOfDepth;
}
  
  // This is the class of the input binary tree.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}