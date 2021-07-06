/** Solution 1 */
function isValidSubsequence(array, sequence) {
    // Write your code here.
    let arrIdx = 0;
    let seqIdx = 0;

    while (arrIdx < array.length && seqIdx < sequence.length) {
        if (array[arrIdx] === sequence[seqIdx]) {
            seqIdx++; 
        }
        arrIdx++;
    }

    return seqIdx === sequence.length;
}

function isValidSubsequence(array, sequence) {
    // Write your code here.
    let seqIdx = 0;

    for (let i = 0; i < array.length; i++) {
        if (seqIdx === sequence.length) {
            return true;
        }
        if (sequence[seqIdx] === array[i]) {
            seqIdx++;
        }
    }

    return seqIdx === sequence.length;
}
  