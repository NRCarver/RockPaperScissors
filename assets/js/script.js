/* Rules for all the different possible outcomes in the Game */

const CHOICES = [
    {
        name: 'rock',
        beats: 'scissors', 
        also: 'lizard'
    },
    {
        name: 'paper',
        beats: 'rock',
        also: 'spock'
    },
    {
        name: 'scissors',
        beats: 'paper',
        also: 'lizard'
    },
    {
        name: 'lizard',
        beats: 'paper',
        also: 'spock'
    },
    {
        name: 'spock',
        beats: 'scissors',
        also: 'rock'
    },
];


const choiceButtons = document.querySelectorAll('[data-choice]')
const resultsColumn = document.querySelector('[results-column]')
const computerScore = document.querySelector('[computer-score]')
const userScore = document.querySelector('[user-score]')
let roundCount = 0
let maxRounds = 5
let roundCountOutput = document.getElementById('round-count')

choiceButtons.forEach(choiceButton => {
    choiceButton.addEventListener('click', e => {
        const choiceName = choiceButton.dataset.choice
        const choice = CHOICES.find(choice => choice.name === choiceName)
        makeChoice(choice)
    })
})

function makeChoice(choice) {
    const computerChoice = computerIndex()
    let userWinner = decideWinner(choice, computerChoice)
    let computerWinner = decideWinner(computerChoice, choice)
    
    addChoiceResult(computerChoice, computerWinner)
    addChoiceResult(choice, userWinner)

    if (userWinner) incrementUserScore(userScore)
    if (computerWinner) incrementComputerScore(computerScore)

    roundCount++;
    roundCountOutput.innerText = `${roundCount}`;

     if (roundCount >= maxRounds) {
        playAgain.classList.remove('hidden');
        setTimeout(function() {
            alert("Game Over. The score was " + userScore.innerText + "-" + computerScore.innerText)
        }, 300);

        let disabledButtons = document.getElementsByClassName("choice");
            for(var i = 0; i < disabledButtons.length; i++) {
            disabledButtons[i].disabled = true;
        }
        
    }
}

function incrementUserScore(userScore) {
    userScore.innerText = parseInt(userScore.innerText) + 1
}

function incrementComputerScore(computerScore) {
    computerScore.innerText = parseInt(computerScore.innerText) + 1
}

function addChoiceResult(choice, winner) {
    const pastResults = document.createElement('div')
    pastResults.innerText = choice.name
    pastResults.classList.add('result-choice')
    if (winner) pastResults.classList.add('winner')
    else pastResults.classList.add('loser')
    resultsColumn.after(pastResults)
}


function decideWinner(choice, computerChoice){
    if (choice.beats == computerChoice.name) {
        return choice.beats == computerChoice.name
    }
    if (choice.also == computerChoice.name) {
        return choice.also == computerChoice.name
    }   
}


function computerIndex () {
    const randomIndex = Math.floor(Math.random() * CHOICES.length)
    return CHOICES[randomIndex]
}

const startClassicButton = document.getElementById('start-classic-button')
const startRPSLSButton = document.getElementById('start-rpsls-button')
const gameContainer = document.getElementById('game-container')
const extraOptions = document.getElementById('rpsls-only')
const gameLengthBox = document.getElementById('game-length-choices')
const playAgain = document.getElementById('play-again')

/* Listener Events for starting each version of the Game */

startClassicButton.addEventListener('click', startClassic);
startRPSLSButton.addEventListener('click', startRPSLS);
playAgain.addEventListener('click', resetGame)

function startClassic() {
    startClassicButton.classList.add('hidden');
    startRPSLSButton.classList.add('hidden');
    extraOptions.classList.add('hidden');
    gameContainer.classList.remove('hidden');
    gameLengthBox.classList.remove('hidden');
    CHOICES.splice(3,2);
}

function startRPSLS() {
    startClassicButton.classList.add('hidden');
    startRPSLSButton.classList.add('hidden');
    gameContainer.classList.remove('hidden');
    gameLengthBox.classList.remove('hidden')
}

/* Reload the Game so you can play again */

function resetGame() {
    return window.location.assign(`index.html`)
}