function firstDuplicateValue(array) {
    // Write your code here.
    let minSecIdx = array.length;
    for (let i = 0; i < array.length; i++) {
        let val = array[i];
        for (let j = i + 1; j < array.length; j++) {
            let valToCompare = array[j];
            if (val == valToCompare) {
                minSecIdx = Math.min(minSecIdx, j);
            }
        }
    }
    if (minSecIdx === array.length) {
        return -1;
    }
    return array[minSecIdx];
}

function firstDuplicateValue(array) {
    // Write your code here.
    let seen = new Set();

    for (const value of array) {
        if (seen.has(value)) {
            return value;
        }
        seen.add(value);
    }
    return -1;
}

function firstDuplicateValue(array) {
    // Write your code here.
    for (const value of array) {
        let absValue = Math.abs(value);

        if (array[absValue - 1] < 0) {
            return absValue;
        }
        array[absValue - 1] *= -1;
    }
    return -1;
}