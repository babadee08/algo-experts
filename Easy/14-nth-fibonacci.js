// recursive method
function getNthFib(n) {
    // Write your code here.
    if (n == 2) return 1;
    else if (n == 1) return 0;
    else return getNthFib(n-1) + getNthFib(n-2);
}

// memoization (dynamic programing)
function getNthFib(n, memoize = {1: 0, 2: 1}) {
    // Write your code here.
    if (n in memoize) {
        return memoize[n];
    } else {
        memoize[n] = getNthFib(n-1, memoize) + getNthFib(n-2, memoize);
        return memoize[n];
    }
}

// iterative (Best case/option)
function getNthFib(n) {
    // Write your code here.
    let lastTwo = [0, 1];
    let counter = 3;

    while (counter <= n) {
        let nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = nextFib;
        counter++;
    }
    if (n > 1) {
        return lastTwo[1];
    } else {
        return lastTwo[0];
    }
}