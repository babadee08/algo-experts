function threeNumberSum(array, targetSum) {
    // Write your code here.
    array.sort((a, b) => (a - b));
	let result = [];
	for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            for (let k = j + 1; k < array.length; k++) {
                let sum = array[i] + array[j] + array[k];
                if (sum === targetSum) {
                        result.push([array[i], array[j], array[k]]);
                }
            }
        }
	}
	return result;
}

function threeNumberSum(array, targetSum) {
    // Write your code here.
    array.sort((a, b) => (a - b));
	let result = [];
        for (let i = 0; i < array.length; i++) {
        let left = i + 1;
        let right = array.length - 1;
        let currNum = array[i];
        while (left < right) {
            let calSum = currNum + array[left] + array[right];
            if (calSum === targetSum) {
                result.push([array[i], array[left], array[right]])
                left++;
                right--;
            } else if (calSum < targetSum) {
                left++
            } else if (calSum > targetSum) {
                right--;
            }
        }
	}
	return result;
}