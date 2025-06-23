'use strict';

//setting inital conditions
let totalScore1 = (document.querySelector('#score--0').textContent = 0);
let totalScore2 = (document.querySelector('#score--1').textContent = 0);
const dice = document.querySelector('.dice');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
//hiding dice initally
dice.classList.add('hidden');

let scores = [0, 0];

//declaring a dice-no variable

let diceNumber;
let currentscore = 0;
let totalscore = 0;
let activeplayer = 0;
let isGamePlaying = true;

//switching to next player

function switchingTONextPlayer() {
  document.querySelector(`#current--${activeplayer}`).textContent = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  currentscore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

//roll-dice listener
document.querySelector('.btn--roll').addEventListener('click', function () {
  if (isGamePlaying) {
    dice.classList.remove('hidden');
    diceNumber = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.dice').src = `dice-${diceNumber}.png`;
    //if dice is 1
    if (diceNumber !== 1) {
      currentscore = currentscore + diceNumber;
      document.querySelector(`#current--${activeplayer}`).textContent =
        currentscore;
    } else {
      switchingTONextPlayer();
    }
  }
});

// Holding the score

document.querySelector('.btn--hold').addEventListener('click', function () {
  if (isGamePlaying) {
    scores[activeplayer] += currentscore;
    document.querySelector(`#score--${activeplayer}`).textContent =
      scores[activeplayer];
    if (scores[activeplayer] >= 100) {
      isGamePlaying = false;
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      dice.classList.add('hidden');
    } else {
      switchingTONextPlayer();
    }
  }
});

//resetting the game

document.querySelector('.btn--new').addEventListener('click', function () {
  console.log('again..');
  document.querySelector(`#current--0`).textContent = 0;
  document.querySelector(`#current--1`).textContent = 0;
  document.querySelector(`#score--0`).textContent = 0;
  document.querySelector(`#score--1`).textContent = 0;
  dice.classList.add('hidden');
  diceNumber = 0;
  activeplayer = 0;
  currentscore = 0;
  scores = [0, 0];
  dice.classList.remove('hidden');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
});
