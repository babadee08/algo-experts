/** Solution 1 */
function twoNumberSum(array, targetSum) {
    // Write your code here.
      for (let i = 0; i < array.length - 1; i++) {
          let firstNum = array[i];
          for (let j = i + 1; j < array.length; j++) {
              let secondNum = array[j];
              if (firstNum + secondNum === targetSum) {
                  return [firstNum, secondNum];
              }
          }
      }
      return [];
  }

/** Solution 2 */
function twoNumberSum(array, targetSum) {
    // Write your code here.
      let nums = {};
      for (let i = 0; i < array.length; i++) {
          let currentNum = array[i];
          let possibleMatch = targetSum - currentNum;
          if (nums[possibleMatch] !== undefined) {
              return [possibleMatch, array[i]];
          } else {
              nums[currentNum] = true;
          }
      }
      return [];
  }

/** Solution 3 */
function twoNumberSum(array, targetSum) {
    // Write your code here.
      array.sort((a, b) => a - b);
      let left = 0;
      let right = array.length - 1;
      
      while (left < right) {
          let currentSum = array[left] + array[right];
          if (currentSum === targetSum) {
              return [array[left], array[right]]
          } else if (currentSum < targetSum) {
              left++;
          } else if (currentSum > targetSum) {
              right--;
          }
      }
      return [];
  }
