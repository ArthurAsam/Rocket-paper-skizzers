
const cpuOptions = ["rock", "paper", "scissors"]; 


 
function getComputerChoice() {
    
                
    const randomOption = cpuOptions[Math.floor(Math.random() * cpuOptions.length)]
    
    return randomOption; 
    
    }


let computerSelection = getComputerChoice();

let playerSelection = prompt("Choose: rock, paper, or scissors", "").toLowerCase(); 

        

        function playRound(playerSelection, computerSelection) {
            
            //Highlight the tiebreakers
            if (computerSelection === "rock" && playerSelection === "rock"){
                return 'You tied! You both picked rock'
            } else if (computerSelection === "rock" && playerSelection === "paper") {
                return 'You Won! Paper beats rock All Day'
            } else if (computerSelection === "rock" && playerSelection === "scissors") {
                return 'You lost! Opponents rock smashes your scissors'
            } else if (computerSelection === "paper" && playerSelection === "rock") {
                return 'You lose! Opponents paper covers your rock'
            //Highlight ties!
            } else if (computerSelection === "paper" && playerSelection === "paper") {
                return 'You tied! You both chose paper'
            } else if (computerSelection === "paper" && playerSelection === "scissors"){
                return 'You Won! Your scissors sliced their paper' 
            } else if (computerSelection === "scissors" && playerSelection === "rock") {
                return 'You Won! Your rock smashed their scissors' 
            } else if (computerSelection === "scissors" && playerSelection === "paper") {
                return 'You lose! Opponents scissors gave you the slice N\' dice'
                //Highlight ties!
            } else if (computerSelection === "scissors" && playerSelection === "scissors") {
                return 'You tied! You both chose scissors'
            } else {
                return 'Error'
            }
        }
        
        console.log(playRound(playerSelection, computerSelection))





