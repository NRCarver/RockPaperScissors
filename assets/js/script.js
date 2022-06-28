function newGame () {

}



function endGame () {

}

function playerWin () {
   
}

function computerWin () {

}

function endGame () {

}

function classicGame () {
   
}

const CHOICES = [
    {
        name: 'rock',
        beats: 'scissors' || 'lizard'
    },
    {
        name: 'paper',
        beats: 'rock' || 'spock'
    },
    {
        name: 'scissors',
        beats: 'paper' || 'lizard'
    },
    {
        name: 'lizard',
        beats: 'paper' || 'spock'
    },
    {
        name: 'spock',
        beats: 'scissors' || 'rock'
    }
];


const choiceButtons = document.querySelectorAll(`[data-choice]`)

choiceButtons.forEach(choiceButton => {
    choiceButton.addEventListener('click', e => {
        const choiceName = choiceButton.dataset.choice
        const choice = CHOICES.find(choice => choice.name === choiceName)
        makeChoice(choice)
    })
})

function makeChoice(choice) {
    const computerChoice = computerIndex()
    console.log(computerChoice)
}

function computerIndex () {
    const randomIndex = Math.floor(Math.random() * CHOICES.length)
    return CHOICES[randomIndex]
}

