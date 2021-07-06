function isPalindrome(string) {
    // Write your code here.
    let start = 0;
    let end = string.length - 1;

    while (start <= end) {
        if (string[start] !== string[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

function isPalindrome(string) {
    // Write your code here.
    let revStr = "";
    for (let idx = string.length - 1; idx >= 0; idx--) {
        revStr += string[idx]
    }
    return revStr === string
}

function isPalindrome(string) {
    // Write your code here.
    let revChar = []
    for (let idx = string.length - 1; idx >= 0; idx--) {
        revChar.push(string[idx])
    }
    return revChar.join('') === string
}

function isPalindrome(string, i = 0) {
    // Write your code here.
    let j = string.length - 1 - i;
    if (i >= j) {
        return true;
    } else {
        return string[i] === string[j] && isPalindrome(string, i + 1);
    }
}