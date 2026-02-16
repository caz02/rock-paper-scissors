
let humanScore = 0; //variable to keep track of human score
let computerScore = 0; //variable to keep track of computer score

// Rock Paper Scissors Game
// Create a function that randomly returns either 'rock', 'paper', or 'scissors'
// Each time the function is called
function getComputerChoice() { //function to get computer's choice
    const options = ['rock', 'paper', 'scissors'];//array of options
    const randomIndex = Math.floor(Math.random() * options.length);//get random index
    return options[randomIndex];//return the option at the random index
}
//Write the logic to get the human choice

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`Final Scores: Human - ${humanScore}, Computer - ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You are the overall winner!");
    } else if (humanScore < computerScore) {
        console.log("Computer is the overall winner!");
    } else {
        console.log("It's a tie overall!");
    }
}
playGame();





function getHumanChoice() {
    let userInput;
    do {
        userInput = prompt("Enter rock, paper, or scissors:").toLowerCase();
    } while (userInput !== 'rock' && userInput !== 'paper' && userInput !== 'scissors');
    return userInput;
}
//Declare the players score variables
//Create two new variables named humanScore and computerScore in the global scope.


/*Write the logic to play a single round
Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

Create a new function named playRound.
Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
Increment the humanScore or computerScore variable based on the round winner.*/

function playRound(humanChoice, computerChoice) { 
        console.log(`Human choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);//function to play a single round
        humanChoice = humanChoice.toLowerCase(); //convert human choice to lowercase for case-insensitivity
    if (humanChoice === computerChoice) { //if both choices are the same
        console.log("It's a tie! Both chose " + humanChoice + "."); //log tie message
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') || //human wins conditions
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++; //increment human score
        console.log("You win! " + humanChoice + " beats " + computerChoice + "."); //log win message
    } else {
        computerScore++; //increment computer score
        console.log("You lose! " + computerChoice + " beats " + humanChoice + "."); //log lose message
    }

}


const humanSelection = getHumanChoice(); //get human choice
const computerSelection = getComputerChoice();//get computer choice
playRound(humanSelection, computerSelection);//play a single round

/*Write the logic to play the entire game
Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.

Create a new function named playGame.
Move your playRound function and score variables so that they’re declared inside of the new playGame function
Play 5 rounds by calling playRound 5 times.
Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.*/

function playGame() { //function to play the entire game
    let humanScore = 0; //variable to keep track of human score
    let computerScore = 0; //variable to keep track of computer score

    function playRound(humanChoice, computerChoice) { //function to play a single round
    humanChoice = humanChoice.toLowerCase(); // Ensure case-insensitivity
    if (humanChoice === computerChoice) {// Check for a tie
        console.log("It's a tie! Both chose " + humanChoice + ".");// Log tie message
    } else if (// Check for human win conditions
        (humanChoice === 'rock' && computerChoice === 'scissors') ||// Human wins conditions
        (humanChoice === 'paper' && computerChoice === 'rock') ||// Human wins conditions
        (humanChoice === 'scissors' && computerChoice === 'paper') // Human wins conditions
    ) {
        humanScore++; // Increment human score
        console.log("You win! " + humanChoice + " beats " + computerChoice + ".");// Log win message
    } else {
        computerScore++; // Increment computer score
        console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");// Log lose message
    }
}

    for (let round = 1; round <= 5; round++) { //loop to play 5 rounds
        const humanChoice = getHumanChoice(); //get human choice
        const computerChoice = getComputerChoice(); //get computer choice
        playRound(humanChoice, computerChoice); //play a single round
    }

    console.log("Final Scores - You: " + humanScore + " Computer: " + computerScore); //log final scores

    if (humanScore > computerScore) { //if human score is greater
        console.log("Congratulations! You are the overall winner!"); //log win message
    } else if (computerScore > humanScore) { //if computer score is greater
        console.log("Sorry! The computer is the overall winner!"); //log lose message
    } else {
        console.log("It's a tie overall!"); //log tie message
    }
}


const winConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
};
if (winConditions[humanChoice] === computerChoice) {
    // Human wins
}