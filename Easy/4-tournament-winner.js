const HOME_TEAM_WON = 1;

function tournamentWinner(competitions, results) {
    // Write your code here.
    let currentBestTeam = ""
    let scores = {[currentBestTeam]: 0};

    for (let idx = 0; idx < competitions.length; idx++) {
        const result = results[idx];
        const [homeTeam, awayTeam] = competitions[idx];

        // const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;
        let winningTeam;
        if (result === HOME_TEAM_WON) {
            winningTeam = homeTeam;
        } else {
            winningTeam = awayTeam;
        }

        updateScores(winningTeam, 3, scores);

        if (scores[winningTeam] > scores[currentBestTeam]) {
            currentBestTeam = winningTeam;
        }
    }
    return currentBestTeam;
}

function updateScores(team, points, scores) {
    if (!(team in scores)) {
        scores[team] = 0;
    }

    scores[team] += points;
}