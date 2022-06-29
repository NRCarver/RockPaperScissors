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

choiceButtons.forEach(choiceButton => {
    choiceButton.addEventListener('click', e => {
        const choiceName = choiceButton.dataset.choice
        const choice = CHOICES.find(choice => choice.name === choiceName)
        makeChoice(choice)
    })
})

function makeChoice(choice) {
    const computerChoice = computerIndex()
    const userWinner = decideWinner(choice, computerChoice)
    const computerWinner = decideWinner(computerChoice, choice)
    
    addChoiceResult(computerChoice, computerWinner)
    addChoiceResult(choice, userWinner)

    if (userWinner) incrementUserScore(userScore)
    if (computerWinner) incrementComputerScore(computerScore)
}

function incrementUserScore(userScore) {
    userScore.innerText = parseInt(userScore.innerText) + 1
}

function incrementComputerScore(computerScore) {
    computerScore.innerText = parseInt(computerScore.innerText) + 1
}

function addChoiceResult(choice, winner) {
    const div = document.createElement('div')
    div.innerText = choice.name
    div.classList.add('result-choice')
    if (winner) div.classList.add('winner')
    resultsColumn.after(div)
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

startClassicButton.addEventListener('click', startClassic);
startRPSLSButton.addEventListener('click', startRPSLS);

function startClassic() {
    startClassicButton.classList.add('hidden');
    startRPSLSButton.classList.add('hidden');
    extraOptions.classList.add('hidden');
    gameContainer.classList.remove('hidden');
    CHOICES.splice(3,2)
}

function startRPSLS() {
    startClassicButton.classList.add('hidden');
    startRPSLSButton.classList.add('hidden');
    gameContainer.classList.remove('hidden');
}

var gameLength = 5
const currentGameLength = parseInt(userScore.innerText) + parseInt(computerScore.innerText)