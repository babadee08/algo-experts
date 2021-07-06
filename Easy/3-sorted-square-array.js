function sortedSquaredArray(array) {
    // Write your code here.
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] * array[i];
    }
    return array.sort((a, b) => a - b);
}

function sortedSquaredArray(array) {
    let start = 0;
    let end = array.length - 1;

    let sortedSquares = new Array(array.length).fill(0);

    for (let i = array.length - 1; i >= 0; i--) {
        const lowestVal = array[start];
        const highestVal = array[end];
        
        if (Math.abs(lowestVal) > Math.abs(highestVal)) {
            sortedSquares[i] = lowestVal * lowestVal;
            start++;
        } else {
            sortedSquares[i] = highestVal * highestVal;
            end--;
        }
    }

    return sortedSquares;
}