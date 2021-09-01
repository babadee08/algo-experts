function nonConstructibleChange(coins) {
    // Write your code here.
    coins.sort((a, b) => a - b);
    let change = 0;
    for (let idx = 0; idx < coins.length; idx++) {
        if (coins[idx] > change + 1) {
            return change + 1
        }
        change += coins[idx];
    }
    return change + 1;
  }

function LargestFour(arr) { 
    arr.sort((a, b) => b - a);

    let total = 0
    for (let idx = 0; idx < 4; idx++) {
        total += arr[idx]        
    }
    // code goes here  
    return total;  
}