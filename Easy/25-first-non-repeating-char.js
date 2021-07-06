function firstNonRepeatingCharacter(string) {
    // Write your code here.
    let charCount = {};

    for (const char of string) {
        if (!(char in charCount)) {
            charCount[char] = 0;
        }
        charCount[char]++;
    }
    for (let idx = 0; idx < string.length; idx++) {
        const char = string[idx];
        if (charCount[char] === 1) {
            return idx;
        }
    }
    return -1;
  }