"use strict";

let score = 20;
let highscore = 0;
let guessNumber = Math.floor(Math.random() * 20) + 1;
let numberEl = document.querySelector(".number");
let messageEl = document.querySelector(".message");
let checkBtn = document.querySelector(".check");
let scoreEl = document.querySelector(".score");
let againBtm = document.querySelector(".again");

// console.log(typeof scoreEl.textContent);
// // scoreEl.textContent = score;

// console.log(typeof guessEl);
// console.log(messageEl.textContent);

checkBtn.addEventListener("click", function () {
  let guessEl = Number(document.querySelector(".guess").value);

  if (!guessEl) {
    messageEl.textContent = "No number";
  } else if (guessEl === guessNumber) {
    // if(score=>1){
    messageEl.textContent = "You are right!";
    // score++;
    // scoreEl.textContent = score;
    numberEl.textContent = guessNumber;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guessEl < guessNumber) {
    if (score > 1) {
      messageEl.textContent = "Litlle low ";
      score--;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = "you lost! ";
      scoreEl.textContent = 0;
    }
  } else if (guessEl > guessNumber) {
    if (score > 1) {
      messageEl.textContent = "Little high";
      score--;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = "you lost! ";
      scoreEl.textContent = 0;
    }
  }
});

againBtm.addEventListener("click", function () {
  score = 20;
  guessNumber = Math.floor(Math.random() * 20) + 1;
  messageEl.textContent = "Start guessing...";
  scoreEl.textContent = 20;
  numberEl.textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});
