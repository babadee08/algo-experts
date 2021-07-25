function arrayOfProducts(array) {
    // Write your code here.
    let products = new Array(array.length).fill(1);

    for (let i = 0; i < array.length; i++) {
        let runningProduct = 1;
        for (let j = 0; j < array.length; j++) {
            if (i !== j) {
                runningProduct *= array[j];
            }
        }
        products[i] = runningProduct;
    }
    return products;
}

function arrayOfProducts(array) {
    // Write your code here.
    let products = new Array(array.length).fill(1);
    let leftProducts = new Array(array.length).fill(1);
    let rightProducts = new Array(array.length).fill(1);

    let leftRunningProduct = 1;
    for (let i = 0; i < array.length; i++) {
        leftProducts[i] = leftRunningProduct;
        leftRunningProduct *= array[i]
    }

    let rightRunningProduct = 1;
    for (let i = array.length - 1; i > -1; i--) {
        rightProducts[i] = rightRunningProduct;
        rightRunningProduct *= array[i];
    }

    for (let i = 0; i < array.length; i++) {
        products[i] = leftProducts[i] * rightProducts[i];
    }

    return products;
}

function arrayOfProducts(array) {
    // Write your code here.
    let products = new Array(array.length).fill(1);

    let leftRunningProduct = 1;
    for (let i = 0; i < array.length; i++) {
        products[i] = leftRunningProduct;
        leftRunningProduct *= array[i]
    }

    let rightRunningProduct = 1;
    for (let i = array.length - 1; i > -1; i--) {
        products[i] *= rightRunningProduct;
        rightRunningProduct *= array[i];
    }

    return products;
}