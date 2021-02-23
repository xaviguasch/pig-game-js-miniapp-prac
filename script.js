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

// Starting condition
score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')

// Variables
const scores = [0, 0]
let currentScore = 0
let activePlayer = 0

btnRoll.addEventListener('click', function () {
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
    document.querySelector(`#current--${activePlayer}`).textContent = 0
    currentScore = 0

    activePlayer = activePlayer === 1 ? 0 : 1
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
  }
})
