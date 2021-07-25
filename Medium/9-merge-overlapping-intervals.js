function mergeOverlappingIntervals(array) {
    // Write your code here.
    array.sort((a, b) => a[0] - b[0]);

    const mergedIntervals = [];
    let currInterval = array[0];
    mergedIntervals.push(currInterval);

    for (const nextInterval of array) {
        const [_, currIntervalEnd] = currInterval
        const [nextIntervalStart, nextIntervalEnds] = nextInterval;

        if (currIntervalEnd >= nextIntervalStart) {
            currInterval[1] = Math.max(currIntervalEnd, nextIntervalEnds);
        } else {
            currInterval = nextInterval;
            mergedIntervals.push(currInterval);
        }
    }
    return mergedIntervals;
}