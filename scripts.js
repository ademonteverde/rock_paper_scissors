var results = {
    win: ['RS', 'PR', 'SP'],
    draw: ['RR', 'PP', 'SS'],
    lose: ['SR', 'RP', 'RS'],
    againMessage: function () {
        console.log("Play again?");
    }
}

var options = ['R', 'P', 'S'];

function computerOption() {
    var index = Math.floor(Math.random() * 3);
    return options[index]
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let ties = 0;

    function displayScore() {
        return "\nPlayer Won: " + playerScore + "\nComputer Won: " + computerScore + "\nTies: " + ties
    }



    var playAgain = true

    while (playAgain) {
        var computerChoice = computerOption();

        let userPick = prompt("Do you choose rock, paper or scissors?\nR for rock\nP for paper\nS for scissors");
        var userChoice = userPick.toUpperCase();
        while(!options.includes(userChoice)) {
            var userChoice = userPick.toUpperCase();
            userChoice = prompt("Wrong entry! Pick rock, paper, or scissors\nR for rock\nP for paper\nS for scissors") 
        }
        alert('You choose ' + userChoice + '. Computer choose ' + computerChoice)
        if (results['win'].includes(userChoice + computerChoice)) {
            playerScore++;
            alert('You Win ' + 'Compuer ' + displayScore());
        } else if (results['lose'].includes(userChoice + computerChoice)) {
            computerScore++;
            alert('You Lose ' + displayScore());
        } else if (results['draw'].includes(userChoice + computerChoice)) {
            ties++;
            alert('Draw! ' + displayScore());
        } else {
            alert('Invalid Entry!')
        } playAgain = confirm('Play Again?');
    } document.write('<p style="text-align: center;">Thank you for playing! Refresh the page to play again.</p>')

} 

game();

// {
//     else document.write('<p style="align-text:center">Thank you for playing! Refresh the page to play again!</p>')
// }



// alert("Rock, Paper, or Scissors?");
// var userChoice;
// do {
//   userChoice = prompt("Do you choose ROCK, PAPER or SCISSORS?");
// }
// while (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors");

// var userChoice = prompt("Do you choose rock, paper or scissors?");

// Capture user's input (R, P, S)
// function userInput() {
//     return "R"
// }


// Display computer's random input



// Display Win or Lose

// var userChoice = userInput();
// var computerChoice = computerOption();
// console.log(userChoice + computerChoice);
// const getUserChoice = userInputR

// let userChoice = prompt("Do you choose rock, paper or scissors?")
//     if (results['win'].includes(userChoice + computerChoice)) {
//         console.log('You Win');
//     } else if (results['lose'].includes(userChoice + computerChoice)) {
//         console.log('You Lose');
//     } else if (results['draw'].includes(userChoice + computerChoice)) {
//         console.log('Draw!');
//     } else {
//         console.log('Invalid Entry!')
//     }


//     console.log("You choose", userChoice);
// console.log("Computer choose", computerChoice);
// compare(userChoice + computerChoice);
