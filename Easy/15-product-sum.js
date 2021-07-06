// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array, multiplier = 1) {
    // Write your code here.
    let sum = 0
    // for of
    /*for (const element of array) {
        if (Array.isArray(element)) {
            sum += productSum(element, multiplier + 1);
        } else {
            sum += element;
        }
    }*/

    for (let idx = 0; idx < array.length; idx++) {
        if (Array.isArray(array[idx])) {
            sum += productSum(array[idx], multiplier + 1);
        } else {
            sum += array[idx]
        }
    }

    return sum * multiplier;
}