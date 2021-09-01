function subarraySort(array) {
    // Write your code here.
    let minOutofOrder = Infinity;
    let maxOutOfOrder = -Infinity;

    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        if (isOutOfOrder(i, num, array)) {
            minOutofOrder = Math.min(minOutofOrder, num);
            maxOutOfOrder = Math.max(maxOutOfOrder, num);
        }
    }

    if (minOutofOrder === Infinity) {
        return [-1, -1]
    }

    let subarrayLeftIdx = 0;
    while (minOutofOrder >= array[subarrayLeftIdx]) {
        subarrayLeftIdx++;
    }

    let subarrayRightIdx = array.length - 1;
    while (maxOutOfOrder <= array[subarrayRightIdx]) {
        subarrayRightIdx--;
    }

    return [subarrayLeftIdx, subarrayRightIdx];
}

function isOutOfOrder(i, num, array) {
    if (i === 0) {
        return num > array[i + 1];
    }
    if (i === array.length - 1) {
        return num < array[i - 1];
    }
    return num > array[i + 1] || num < array[i - 1];
}