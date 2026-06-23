/*------------------------ Cached Element References ------------------------*/
const resultDisplayElement = document.querySelector('#result-display')
const rockElement = document.querySelector('#rock')
const paperElement = document.querySelector('#paper')
const scissorElement = document.querySelector('#scissors')
const resetElement = document.querySelector('#reset')


/*-------------------------------- Constants --------------------------------*/
const choices = ['rock', 'paper', 'scissors', 'reset']
console.log(choices)

/*-------------------------------- Variables --------------------------------*/
let playerChoice
let computerChoice
let message

/*-------------------------------- Functions --------------------------------*/

function play(event){
    //1. Identify what choice I picked
    getPlayerChoice(event)
    //2. Randomly pick computer choice
    getComputerChoice()

    //3. compare my choice vs computer choice
    compareChoices()
    console.log(message)

    //4. display winner
    resultDisplayElement.innerHTML = `<div style = text-align:center>${message}<br> You picked ${playerChoice} and Computer picked ${computerChoice}</div>`
    console.log('Player Choice:' ,playerChoice)
    console.log('Compuetr Choice:', computerChoice)

}

function getPlayerChoice(event){
    playerChoice = event.target.id

}

function getComputerChoice(){

    computerChoice = choices[Math.floor(Math.random() * 3)]

}

function compareChoices(){
    if(playerChoice === computerChoice){
        message = 'Tie game: Try again!'
    }

    else if (playerChoice === 'rock' && computerChoice === 'scissors'){
        message = 'You Win!'

    }
     else if (playerChoice === 'paper' && computerChoice === 'rock'){
        message = 'You Win!'

    } else if (playerChoice === 'sicssors' && computerChoice === 'paper'){
        message = 'You Win!'

    }
    else if (playerChoice === ''){

    }
    else {
        message = 'You lose :( '
    }
  
}


function resetChoices(){
    playerChoice = null
    computerChoice = null
    message = ''
     resultDisplayElement.innerHTML = ' '
   
}
/*----------------------------- Event Listeners -----------------------------*/
rockElement.addEventListener('click', play)
paperElement.addEventListener('click', play)
scissorElement.addEventListener('click', play)
resetElement.addEventListener('click', resetChoices)