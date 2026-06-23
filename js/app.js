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
    //1. Identify what choice I picked
    getPlayerChoice(event)
    console.log('Player Choice:' ,playerChoice)
    //2. Randomly pick computer choice
    getComputerChoice()
    console.log('Compuetr Choice:', computerChoice)

    //3. compare my choice vs computer choice
    //4. display winner
    
}

function getPlayerChoice(event){
    playerChoice = event.target.id

}

function getComputerChoice(){

    computerChoice = choices[Math.floor(Math.random() * 3)]

}

function compareChoices(){
  
}

/*----------------------------- Event Listeners -----------------------------*/
rockElement.addEventListener('click', play)
paperElement.addEventListener('click', play)
scissorElement.addEventListener('click', play)