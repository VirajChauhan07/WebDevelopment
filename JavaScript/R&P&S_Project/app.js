let userScore = 0
let compScore = 0

const choices = document.querySelectorAll('.choice')
const msg = document.querySelector('#msg')

const userScorePoint = document.querySelector('#user-score')
const compScorePoint = document.querySelector('#comp-score')

const genComputerChoice = () => {
  const options = ['rock', 'paper', 'scissors']
  const randIdx = Math.floor(Math.random() * 3)
  return options[randIdx]
}

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    console.log('You win!')
    userScore++
    userScorePoint.innerText = userScore
    msg.innerText = `You win ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor = 'green'
  } else {
    console.log('comp win!')
    compScore++
    compScorePoint.innerText = compScore
    msg.innerText = `You lose ${userChoice} beats your ${compChoice}`
    msg.style.backgroundColor = 'red'
  }
}

const draw = () => {
  console.log('Game was draw')
  msg.innerText = 'Game Draw play again'
  msg.style.backgroundColor = 'grey'
}

const playGame = (userChoice) => {
  console.log('user choice', userChoice)
  const compChoice = genComputerChoice()
  console.log('comp choice', compChoice)

  if (userChoice == compChoice) {
    // Draw
    draw()
  } else {
    let userWin = true
    if (userChoice === 'rock') {
      userWin = compChoice === 'paper' ? false : true
    } else if (userChoice === 'paper') {
      userWin = compChoice === 'scissors' ? false : true
    } else if (userChoice === 'scissors') {
      userWin = compChoice === 'rock' ? false : true
    }
    showWinner(userWin, userChoice, compChoice)
  }
}

choices.forEach((choice) => {
  choice.addEventListener('click', () => {
    const userChoice = choice.getAttribute('id')
    playGame(userChoice)
  })
})
