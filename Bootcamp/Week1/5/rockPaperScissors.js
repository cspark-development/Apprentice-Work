/*
randomChoice()
GOAL: Create a randomChoice function that returns a random selection of either "rock", "paper", or "scissors" every time the function is called.
Initialize a function called randomChoice().
Initialize a variable called choice and store the result of Math.random() in the variable.
Multiply Math.random by 3.
Wrap Math.random with Math.floor. Stuck? Click Reveal Content below.
Based on the value stored in choice:
Return the string rock if choice has a value of 0.
Return the string paper if choice has a value of 1.
Return the string scissors if choice has a value of 2.
Call the function and console.log() the result to verify that it works!

winner(player1, player2)
GOAL: Create a function called winner that takes two player choices of rock, paper, or scissors. The function should return the winner based on the two player choices.

Declare a function called winner that has two parameters: player1 and player2.
If player1 and player2 have he same value, return the string "It's a tie".
If the value in player1 beats the value stored in player2, return the string "Player 1 Wins!".
E.g. If player1 has a value of rock and player2 has a value of scissors, then the function returns "Player 1 Wins!".
If the value in player2 beats the value stored in player1, return the string "Player 2 Wins!".
E.g. If player1 has a value of paper and player2 has a value of scissors, then the function returns "Player 2 Wins!".

Create a variable called player1 and store the result of randomChoice() in the variable.
Create a variable called player2 and store the result of a separate call of randomChoice() in the variable.
Create a variable called result and call winner with the values stored in player1 and player2.
Log the values of player1, player2, and result to verify your game plays correctly!
*/

function randomChoice() {
  const choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else if (choice === 2) {
    return "scissors";
  }
}

function winner(player1, player2) {
  if (player1 === player2) {
    return "It's a tie";
  } else if (player1 === "rock" && player2 === "scissors") {
    return "Player 1 Wins!";
  } else if (player1 === "paper" && player2 === "rock") {
    return "Player 1 Wins!";
  } else if (player1 === "scissors" && player2 === "paper") {
    return "Player 1 Wins!";
  } else if (player2 === "rock" && player1 === "scissors") {
    return "Player 2 Wins!";
  } else if (player2 === "paper" && player1 === "rock") {
    return "Player 2 Wins!";
  } else if (player2 === "scissors" && player1 === "paper") {
    return "Player 2 Wins!";
  }
}

const player1 = randomChoice();
const player2 = randomChoice();
const result = winner(player1, player2);

console.log("Player 1: " + player1);
console.log("Player 2: " + player2);
console.log("Result: " + result);
