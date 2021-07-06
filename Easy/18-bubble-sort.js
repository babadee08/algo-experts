function bubbleSort(array) {
    // Write your code here.
    let isSorted = false;
    let counter = 0
    while (!isSorted) {
        isSorted = true;
        for (let idx = 0; idx < array.length - 1 - counter; idx++) {
            if (array[idx] > array[idx + 1]) {
                swap(idx, idx+1, array);
                isSorted = false
            }
        }
        counter++;
    }
    return array;
}

function swap(i, j, array) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
