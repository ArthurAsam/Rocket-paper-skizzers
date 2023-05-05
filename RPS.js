//Options the computer has to select from
const cpuOptions = ["rock", "paper", "scissors"]; 


 //function to get random selection from the array above
function getComputerChoice() {
    
                
    const randomOption = cpuOptions[Math.floor(Math.random() * cpuOptions.length)]
    
    return randomOption; 
    
    }


let computerSelection = getComputerChoice();


let playerSelection = prompt("Choose: rock, paper, or scissors", "").toLowerCase(); 
let playerCounter = 0; 
let cpuCounter = 0; 
        

        function playRound(playerSelection, computerSelection) {
            
           
            if (computerSelection === "rock" && playerSelection === "rock"){
                return 'You tied! You both picked rock'
            } else if (computerSelection === "rock" && playerSelection === "paper") {
                playerCounter++
                return 'You Won! Paper beats rock All Day'
            } else if (computerSelection === "rock" && playerSelection === "scissors") {
                cpuCounter++
                return 'You lose! Opponents rock smashes your scissors'
            } else if (computerSelection === "paper" && playerSelection === "rock") {
                cpuCounter++
                return 'You lose! Opponents paper covers your rock'
            
            } else if (computerSelection === "paper" && playerSelection === "paper") {
                return 'You tied! You both chose paper'
            } else if (computerSelection === "paper" && playerSelection === "scissors"){
                playerCounter++
                return 'You Won! Your scissors sliced their paper'                 
            } else if (computerSelection === "scissors" && playerSelection === "rock") {
                playerCounter++
                return 'You Won! Your rock smashed their scissors'                 
            } else if (computerSelection === "scissors" && playerSelection === "paper") {
                cpuCounter++
                return 'You lose! Opponents scissors gave you the slice N\' dice'                
                
            } else if (computerSelection === "scissors" && playerSelection === "scissors") {
                return 'You tied! You both chose scissors'
               
            } else {
                return 'Error'
            }
        }
     
        playRound(playerSelection, computerSelection)

// Part One of the RPS game





//part two function, run a 5 game simulation 

const game = () => {
    for (let i = 0; i < 5; i++){
        let computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection)
    }

    if (playerCounter > cpuCounter){
        return `Winner Winner Chicken Dinner! You won ${playerCounter} out of 5 times`
    } else if (cpuCounter > playerCounter){
        return `You lost this time...Bummer. You lost CPU beat you ${cpuCounter} out of 5 times` 
    } else {
        return 'It\'s a draw...let\'s play again!'
    }
}

console.log(game())


