// DEPENDENCIES (not necessary for this webpage)

// DATA (Global Variables)

//we need to store all possible values
//we need to store user selection
//we need to store computer selection
var items = ["R", "P", "S"]
var userSelect = prompt("Let's play Rock, Paper, Scissors! Enter R, P, or S.")
var computerSelect = Math.floor(Math.random() * items.length);

// FUNCTIONS
// ask the user to enter r, p, or s
    // show a prompt
    // take the input and set it into a variable
    //have a statement to cover non-valid values
    //select computer value (array, randomnumber to select from array each time)
    //tell user what computer chose
//display to the user if they won, lost, or tied
//display stats
    function startGame() {

    }
    function askWhat() {
        userSelect;
    }

    //Give them the option to play again
        // yes > start the game
        // no > end the game
    function playAgain() {
        confirm("Want to play again?")
    }

    function outcome() {
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
    if userSelect 
    }


    // USER INTERACTIONS (not necessary for this webpage)

    // INITIALIZATION
    startGame();