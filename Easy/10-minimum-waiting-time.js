// Greedy Algorithm 
function minimumWaitingTime(queries) {
    // Write your code here.
    queries.sort((a, b) => a - b);

	let total = 0
	for (let idx = 0; idx < queries.length; idx++) {
        total += queries[idx] * (queries.length - (idx + 1))
	}

	return total;
}