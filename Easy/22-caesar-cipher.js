function caesarCipherEncryptor(string, key) {
    // Write your code here.
    let newLetters = [];
    let newKey = key % 26;

    for (const letter of string) {
        newLetters.push(getNewLetter(letter, newKey));
    }
    return newLetters.join('');
}

function getNewLetter(letter, key) {
    let newLetterCode = letter.charCodeAt() + key;
    if (newLetterCode <= 122) {
        return String.fromCharCode(newLetterCode);
    } else {
        return String.fromCharCode(96 + (newLetterCode % 122))
    }
}

function caesarCipherEncryptor(string, key) {
    // Write your code here.
    let newLetters = [];
    let newKey = key % 26;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (const letter of string) {
        newLetters.push(getNewLetter(letter, newKey, alphabet));
    }
    return newLetters.join('');
}

function getNewLetter(letter, key, alphabet) {
    let newLetterCode = alphabet.indexOf(letter) + key;

    return alphabet[newLetterCode % 26]
}