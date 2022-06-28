function newGame () {

}

function selectRock () {

}

function selectPaper () {
 
}

function selectScissors () {
   
}

function selectLizard () {
  
}

function selectSpock () {
  
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

const choiceButtons = document.querySelectorAll(`[data-choice]`)

choiceButtons.forEach(choiceButton => {
    choiceButton.addEventListener('click', e => {
        const choiceName = choiceButton.dataset.choice
        makeChoice(choiceName)
    })
})

function makeChoice(choice) {
    console.log(choice)
}