'use strict'

// Selecting elements
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
let currentScore = 0

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
    current0El.textContent = currentScore // CHANGE LATER
  } else {
    // Switch to the next player
    console.log('next player turn')
  }
})
