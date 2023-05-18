// DEPENDENCIES (not necessary for this webpage)

// DATA (Global Variables)

//we need to store all possible values
//we need to store user selection
//we need to store computer selection

/* maybe this will work ?
var items = ["R", "P", "S"];
var gamePlay = true;
var tie = 0
var win = 0
var lose = 0
var computerSelect = Math.floor(Math.random() * items.length);*/

// FUNCTIONS
// ask the user to enter r, p, or s
    // show a prompt
    // take the input and set it into a variable
    //have a statement to cover non-valid values
    //select computer value (array, randomnumber to select from array each time)
    //tell user what computer chose
//display to the user if they won, lost, or tied
//display stats
/* maybe these will work?
    function startGame() {
        console.log("The game is about to start!")
        while (gamePlay === true) {
            var userChoice = prompt("Let's play Rock, Paper, Scissors! Enter R, P, or S.");
            if(userChoice === computerSelect) {
                tie = tie + 1;
                alert("It's a tie!");
                alert("Your Score: Wins:" + wins + " Losses: " + losses + "Ties: " + tie);
                gamePlay = confirm("Want to play again?");
            }
            else if ((userChoice === "R" && computerSelect === "S") || (userChoice === "S" && computerSelect === "P") || (userChoice === "P" && computerSelect === "R"))
                wins = wins +1;
                alert("You won!");
                alert("Score: Wins" + wins + " Losses: " + losses + " Ties: " + tie);
                gamePlay = confirm("Want to play again?");
            }
            else {
                losses = losses + 1;
                alert("Sorry, you lost.");
                alert("Score: Wins:" + wins + " Losses: " + losses + " Ties: " + tie);
                gamePlay = confirm("Want to play again?");
            }
    }*/
   
   /* function getUserChoice() {
        return "R"
    }
    function startGame() {
        var userChoice = getUserChoice();
        console.log("User choice:", userChoice);*/
    
   /*input = prompt("Choose rock(R), paper(P), or scissors(S)");
    if(input === "R"){
        if(response === "S") {
            alert("The computer chose S\nYou Win")
            win = win + 1 
        }else if(response === "R"){
            alert("The computer chose R\nIt's a tie")
            tie = tie + 1
        }else{
            alert("The computer chose P\nYou lose")
            lose = lose + 1
        }
    alert("Ties: " + tie + " Wins: " + win + " losses: " + lose)
    gamePlay = confirm("Would you like to play again?")
        }
        }*/
    

    //Give them the option to play again
        // yes > start the game
        // no > end the game
    /*function playAgain() {
        confirm("Want to play again?")
    }*/

   /* function outcome() {*/
        //Types of alerts:
        //alert("You Won!")
        //alert ("It's a tie!")
        //alert("Sorry, you lost!")
            //Rock and Rock
            //Rock and Scissors
            //Rock and Paper
            //Scissors and Rock
            //Scissors and Scissors 
            //Scissors and Paper
            //Paper and Paper 
            //Paper and Rock
            //Paper and Scissors
   

    // USER INTERACTIONS (not necessary for this webpage)

    // INITIALIZATION
   

    // in class demo 
    var options = "RPS".split(""); // ["R", "P", "S"] --> USE THIS FOR HW
    var wins = 0
    var losses = 0
    var ties = 0

    function getUserChoice() {
        var userChoice = prompt("Please enter R, P, or S").toUpperCase();
        if (!options.includes.userChoice) { // if user chooses an option that is not r,p, or, s then page will ask getuserchoice again
            return getUserChoice(); //
        }
        return userChoice;
    }
function getComputerChoice() {
    var RandomSeed = Math.random();
    var scale = options.length

    var randomIndex = Math.floor[randomSeed * scale]
    console.log(RandomSeed)
    var randomIndex = 0
    var choice = options[randomIndex]
    return choice;

}

function tie(computerChoice) {
    ties++;
    alert("Computer chose " + computerChoice + ".")
    alert("It's a tie");
}

function checkWin(userChoice, computerChoice){
console.log("Checking the winner...")
}

    if (userChoice === computerChoice) {
        tie[computerChoice];
    }

    function displayScores() {

    }

    function checkIfWantsToPlayAgain() {
        varplayAgain = confirm("Want to play again?");
        if (playAgain) {
            playGame()
        }else {
            alert("Thanks for playing!")
        }
    }

    function playGame() {
        console.log("The game is about to start!");
        var userChoice = getUserChoice();
        console.log("User Choice: ", userChoice);
        var computerChoice = getComputerChoice();
        console.log("Computer Choice: ", computerChoice)
        checkWin[userChoice, computerChoice];
        displayScores();
        checkIfWantsToPlayAgain();
    }





    playGame();