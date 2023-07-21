/* DOM Elements */

// Home Player Elements
const homeScore = document.getElementById("home_score");
const homePlusOne = document.getElementById("home_plusone");
const homePlusTwo = document.getElementById("home_plustwo");
const homePlusThree = document.getElementById("home_plusthree");

// Guest Player Elements
const guestScore = document.getElementById("guest_score");
const guestPlusOne = document.getElementById("guest_plusone");
const guestPlusTwo = document.getElementById("guest_plustwo");
const guestPlusThree = document.getElementById("guest_plusthree");

/* Functional Variables */
let homePlayerTotal = 0;
let guestPlayerTotal = 0;

// Home Player Functions
const homeOne = () => {
  homePlayerTotal += 1;
  homeScore.innerText = homePlayerTotal;
};

const homeTwo = () => {
  homePlayerTotal += 2;
  homeScore.innerText = homePlayerTotal;
};

const homeThree = () => {
  homePlayerTotal += 3;
  homeScore.innerText = homePlayerTotal;
};

// Guest Player Functions
const guestOne = () => {
  guestPlayerTotal += 1;
  guestScore.innerText = guestPlayerTotal;
};

const guestTwo = () => {
  guestPlayerTotal += 2;
  guestScore.innerText = guestPlayerTotal;
};

const guestThree = () => {
  guestPlayerTotal += 3;
  guestScore.innerText = guestPlayerTotal;
};

/* Reset Function */
const resetGame = () => {
  homePlayerTotal = 0;
  guestPlayerTotal = 0;
  homeScore.innerText = homePlayerTotal;
  guestScore.innerText = guestPlayerTotal;
};
