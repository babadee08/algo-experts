// Recursive approach
function binarySearch(array, target) {
    // Write your code here.
    return binarySearchHelper(array, target, 0, array.length);
}

function binarySearchHelper(array, target, left, right) {
    if (left > right) {
        return -1;
    }
    let middle = Math.floor((left + right)/2);
    let potentialMatch = array[middle];

    if (target === potentialMatch) {
        return middle;
    } else if (target < potentialMatch) {
        return binarySearchHelper(array, target, left, middle -1);
    } else {
        return binarySearchHelper(array, target, middle + 1, right);
    }
}

// Iterative Approach
function binarySearch(array, target) {
    // Write your code here.
    return binarySearchHelper(array, target, 0, array.length);
}

function binarySearchHelper(array, target, left, right) {
    while (left <= right) {
        let middle = Math.floor((left + right)/2);
        let potentialMatch = array[middle];

        if (target === potentialMatch) {
            return middle;
        } else if (target < potentialMatch) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
}