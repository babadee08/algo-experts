function moveElementToEnd(array, toMove) {
    // Write your code here.
    let start = 0;
    let end = array.length - 1;

    while (start < end) {
        while (start < end && array[end] === toMove) {
            end--;
        }
        if (array[start] === toMove) {
            let temp = array[end];
            array[end] = array[start];
            array[start] = temp;
        }
        start++;
    }
    return array;
}