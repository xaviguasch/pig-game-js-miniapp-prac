'use strict'

// Selecting elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0')
const score1El = document.querySelector('#score--1')
const diceEl = document.querySelector('.dice')
let current0El = document.querySelector('#current--0')
let current1El = document.querySelector('#current--1')

const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// State variables
let scores, currentScore, activePlayer, playing

// Starting conditions
const init = function () {
  scores = [0, 0]
  currentScore = 0
  activePlayer = 0
  playing = true

  score0El.textContent = 0
  score1El.textContent = 0
  current0El.textContent = 0
  current1El.textContent = 0

  diceEl.classList.add('hidden')
  player0El.classList.remove('player--winner')
  player1El.classList.remove('player--winner')
  player0El.classList.add('player--active')
  player1El.classList.remove('player--active')
}

init()

const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0
  currentScore = 0

  activePlayer = activePlayer === 1 ? 0 : 1
  player0El.classList.toggle('player--active')
  player1El.classList.toggle('player--active')
}

btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generate a random dice roll
    const dice = Math.floor(Math.random() * 6) + 1

    // 2. Display dice
    if (diceEl.classList.contains('hidden')) {
      diceEl.classList.remove('hidden')
    }
    diceEl.src = `./resources/dice-${dice}.png`

    // 3. Check for rolled 1:

    if (dice !== 1) {
      // add dice result to the current score
      currentScore += dice
      document.querySelector(`#current--${activePlayer}`).textContent = currentScore
    } else {
      switchPlayer()
    }
  }
})

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to the active player's score
    scores[activePlayer] += currentScore

    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer]

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false
      diceEl.classList.add('hidden')

      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active')
    } else {
      // Switch to next player
      switchPlayer()
    }
  }
})

btnNew.addEventListener('click', init)
