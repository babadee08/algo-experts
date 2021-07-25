function isMonotonic(array) {
    // Write your code here.
    if (array.length <= 2) {
        return true;
    }

    let direction = array[1] - array[0];

    for (let i = 2; i < array.length; i++) {
        if (direction === 0) {
            direction = array[i] - array[i - 1];
            continue;
        }
        if (breaksDirection(direction, array[i - 1], array[i])) {
            return false;
        }
    }
    return true;
}

function breaksDirection(direction, prevNum, currNum) {
    let difference = currNum - prevNum;
    if (direction > 0) {
        return difference < 0.
    } else {
        return difference > 0;
    }
}

function isMonotonic(array) {
    // Write your code here.
    let isNonDecreasing = true;
    let isNonIncreasing = true;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            isNonDecreasing = false;
        }
        if (array[i] > array[i+1]) {
            isNonIncreasing = false;
        }
    }
    return isNonIncreasing || isNonDecreasing;
}