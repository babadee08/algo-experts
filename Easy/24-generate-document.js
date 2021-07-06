function generateDocument(characters, document) {
    // Write your code here.
    let charCount = {};

    for (const char of characters) {
        if (!(char in charCount)) {
            charCount[char] = 0;
        }
        charCount[char]++;
    }

    for (const char of document) {
        if (!(char in charCount) || charCount[char] === 0) {
            return false;
        }
        charCount[char]--;
    }

    return true;

    /*for (let idx = 0; idx < characters.length; idx++) {
        charCount[characters[idx]] += 1;
    }

    for (let idx = 0; idx < document.length; idx++) {
        if (charCount[document[idx]] > 0) {
            charCount[document[idx]] -= 1;
        } else {
            return false
        }
    }

    return true;*/
}