function newGame () {

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
    const userWinner = decideWinner(choice, computerChoice)
    const computerWinner = decideWinner(computerChoice, choice)
    console.log(computerChoice)
}



function decideWinner(choice, computerChoice){
    return choice.beats == computerChoice.name
}


function computerIndex () {
    const randomIndex = Math.floor(Math.random() * CHOICES.length)
    return CHOICES[randomIndex]
}

