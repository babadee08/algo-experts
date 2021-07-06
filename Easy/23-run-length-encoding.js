function runLengthEncoding(string) {
    // Write your code here.
    let chars = [];
    let length = 1;
    for (let i = 1; i < string.length; i++) {
        let currChar = string[i];
        let prevChar = string[i - 1];

        if (currChar !== prevChar || length == 9) {
            chars.push(length, prevChar);
            length = 0;
        }

        length++;
    }
    chars.push(length, string[string.length - 1]);
    
    return chars.join('');
}