const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];


//*** array.reduce */
// const heightSum = characters.reduce((acc, char) => {
//     return acc += char.height;
// }, 0);
const heightSum = characters.reduce((acc, char) => acc += char.height, 0);
console.log(heightSum);

const charEyeColor = characters.reduce((acc, curr) => {
    if (acc[curr.eye_color]) {
        acc[curr.eye_color]++;
    } else {
        acc[curr.eye_color] = 1;
    }
    return acc;
}, {})
console.log(charEyeColor);

const totalNameLength = characters.reduce((acc, char) => acc + char.name.length, 0);
console.log(totalNameLength);


const arr = [
    [3,5],
    [9,10],
    [4,7],
    [1,2],
    [6,8]
];

function mergeOverlappingIntervals(array) {
    // Write your code here.
    array.sort((a, b) => a[0] - b[0]);

    const mergedIntervals = [];
    let currInterval = array[0];
    mergedIntervals.push(currInterval);

    for (const nextInterval of array) {
        console.log(nextInterval);
        const [_, currIntervalEnd] = currInterval
        const [nextIntervalStart, nextIntervalEnds] = nextInterval;
        // console.log(currIntervalEnd, nextIntervalStart, nextIntervalEnds);

        if (currIntervalEnd >= nextIntervalStart) {
            currInterval[1] = Math.max(currIntervalEnd, nextIntervalEnds);
        } else {
            currInterval = nextInterval;
            mergedIntervals.push(currInterval);
        }
    }
    return mergedIntervals;
}

console.log(mergeOverlappingIntervals(arr));