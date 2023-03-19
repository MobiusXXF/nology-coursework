function calculateYearsUnilRetirement(event) {

  const currentAge = event.target.value;

  const yearsleft = 65 - currentAge;

  alert("You have " + yearsleft + " years left until you retire.");
}

function getGreetingInFrench(event) {

  const greeting = event.target.value;

  let translation = "";
  if (greeting == "hello") {
    translation = "Bonjour";
  } else if (greeting == "goodbye") { // order of if,else,else if. very important
    translation = "Au Revoir";
  } else {
    translation = "not recognised"
  }
  
  alert(translation);
}

// If a name, is a coaches name, log "It's a coach"
// const name = "Anthony";
// if (name == "Anthony") {
// console.log("It's a coach")
// }

// If a greeting, is bonjour, log "Comment ca va"
// const greeting = "bonjour";
// if (name == "bonjour") {
// console.log("Comment ca va")
// }

// If a score, reached ten, log "You won the game"
// const score = 10;
// if (score == 10) {
// console.log("You won the game")
// }

// If age, is greater than 65, "Time to retire"
// const age = 10;
// if (age >= 65) {
// console.log("Time to retire")
// }

// If hasCovid, log "time to isolate", else "keep social distancing"
// const hasCovid = false;
// const isShielding = true;
// if (hasCovid || isShielding) { // '||' means or, so if either one of these is true it will execute the first code
// console.log("Time to self-isolate")
// } else {
//     console.log("Keep social disancing")
// }

// // If age, greater than 18, and isBritish, "You can vote in the next election"
// const isBritish = true;
// if (age > 17 + isBritish) {
//     console.log("You can vote in the next election")
// } else {
//     console.log("You cannot vote in the next election, please wait a few more years")
// }
