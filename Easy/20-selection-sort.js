function selectionSort(array) {
    // Write your code here.
    let currentIdx = 0;

    while (currentIdx < array.length - 1) {
        let smallestIdx = currentIdx;

        for (let i = currentIdx + 1; i < array.length; i++) {
            if (array[smallestIdx] > array[i]) {
                smallestIdx = i;
            }
        }
        swap(currentIdx, smallestIdx, array);
        currentIdx++;
    }
    return array;
}

function swap(i, j, array) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}