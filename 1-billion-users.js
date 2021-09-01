// Add any extra import statements you may need here


// Add any helper functions you may need here


function getBillionUsersDay(growthRates) {
    // Write your code here
    let start = 1;
    let end = 2000;
    const target = 1000000000;

    while (start < end) {
        let total = 0;
        const mid = Math.floor(start + (end - start)/2);
        
        for (const growthRate of growthRates) {
            total += userOnDay(growthRate, mid);
        }
        console.log(`start: ${start}, end: ${end}, mid: ${mid}, total: ${total}`)

        if (total === target) {
            return mid;
        }
        if (total > target) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return start;
}

function userOnDay(growthRate, day) {
    return Math.pow(growthRate, day);
}







// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printInteger(n) {
    var out = '[' + n + ']';
    return out;
}

var test_case_number = 1;

function check(expected, output) {
    var result = (expected == output);
    var rightTick = "\u2713";
    var wrongTick = "\u2717";
    if (result) {
        var out = rightTick + ' Test #' + test_case_number;
        console.log(out);
    }
    else {
        var out = '';
        out += wrongTick + ' Test #' + test_case_number + ': Expected ';
        out += printInteger(expected);
        out += ' Your output: ';
        out += printInteger(output);
        console.log(out);
    }
    test_case_number++;
}

var test_1 = [1.1, 1.2, 1.3];
var expected_1 = 79;
var output_1 = getBillionUsersDay(test_1);
check(expected_1, output_1);

var test_2 = [1.01, 1.02];
var expected_2 = 1047;
var output_2 = getBillionUsersDay(test_2);
check(expected_2, output_2);

// Add your own test cases here
  