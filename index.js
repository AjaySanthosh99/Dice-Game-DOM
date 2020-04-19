

document.querySelector(".start").addEventListener("click",playGame);

function playGame(){

var randumNumber1 = Math.floor(Math.random() * 6) + 1;

if (randumNumber1 === 1) {
  document.querySelector(".img1").setAttribute("src", "images/dice1.png");
} else if (randumNumber1 === 2) {
  document.querySelector(".img1").setAttribute("src", "images/dice2.png");
} else if (randumNumber1 === 3) {
  document.querySelector(".img1").setAttribute("src", "images/dice3.png");
} else if (randumNumber1 === 4) {
  document.querySelector(".img1").setAttribute("src", "images/dice4.png");
} else if (randumNumber1 === 5) {
  document.querySelector(".img1").setAttribute("src", "images/dice5.png");
} else {
  document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}

var randumNumber2 = Math.floor(Math.random() * 6) + 1;

if (randumNumber2 === 1) {
  document.querySelector(".img2").setAttribute("src", "images/dice1.png");
} else if (randumNumber2 === 2) {
  document.querySelector(".img2").setAttribute("src", "images/dice2.png");
} else if (randumNumber2 === 3) {
  document.querySelector(".img2").setAttribute("src", "images/dice3.png");
} else if (randumNumber2 === 4) {
  document.querySelector(".img2").setAttribute("src", "images/dice4.png");
} else if (randumNumber2 === 5) {
  document.querySelector(".img2").setAttribute("src", "images/dice5.png");
} else {
  document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}

if (randumNumber1 === randumNumber2) {
  document.querySelector("h1").innerHTML = "Draw Match !";
} else if (randumNumber1 > randumNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins !";
} else {
  document.querySelector("h1").innerHTML = "Player 2 wins !";
}


}
