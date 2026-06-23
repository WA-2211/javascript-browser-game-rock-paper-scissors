/*------------------------ Cached Element References ------------------------*/
const resultDisplayElement = document.querySelector('#result-display')
const rockElement = document.querySelector('#rock')
const paperElement = document.querySelector('#paper')
const scissorElement = document.querySelector('#scissors')



/*-------------------------------- Constants --------------------------------*/
const choices = ['rock', 'paper', 'scissors']
console.log(choices)

/*-------------------------------- Variables --------------------------------*/
let playerChoice
let computerChoice
let message

/*-------------------------------- Functions --------------------------------*/

function play(event){
    getPlayerChoice(event)
    console.log(playerChoice)

}

function getPlayerChoice(event){
    playerChoice = event.target.id

}

/*----------------------------- Event Listeners -----------------------------*/
rockElement.addEventListener('click', play)
paperElement.addEventListener('click', play)
scissorElement.addEventListener('click', play)