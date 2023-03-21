// Clinet Brief...
// Create an application which can be used to keep track
// of a score in a football match..

// Sudo Coding
// Writing each step we think the code should execute to achieve the expected outcome
// MVP = Minimum Viable Product

// 1. Football has 2 teams, keep 2 scores going
let teamScoreOne = 0;
let teamScoreTwo = 0;
let isGameStopped = false;

// 2. When team one is clicked, increment team1 score
function handleTeamOneClick() {
    document.getElementById("team1").innerHTML = teamScoreOne += 1;
}

// 3. When team two is clicked, increment team2 score
function handleTeamTwoClick() {
    document.getElementById("team2").innerHTML = teamScoreTwo += 1;
}

// 4. When do we finish/stop?

// How to deliver final score
let finalScoreOne = document.getElementById("team1").innerHTML;
let finalScoreTwo = document.getElementById("team2").innerHTML;
console.log(finalScore1);

function handleStopGame() { // this feature not working yet
    isGameStopped = true;
    document.getElementById("stop").innerHTML = "Game Stopped";
    // if (isGameStopped = true) {
    //    document.write(`Game stopped, score: ${finalScore1} - ${finalScore2}. Thanks for playing!`)
    //} 
}

