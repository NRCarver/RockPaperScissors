function newGame () {

}

function computerChoice () {

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

const CHOICE = [
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
        const choice = CHOICE.find(choice => choice.name === choiceName)
        makeChoice(choice)
    })
})

function makeChoice(choice) {
    console.log(choice)
}

