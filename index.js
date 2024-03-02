var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imagePath1 = "images/dice" + randomNumber1 + ".png";
var imagePath2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").src = imagePath1;
document.querySelector(".img2").src = imagePath2;

var h1Element = document.querySelector("h1");


if (randomNumber1 > randomNumber2) {
  h1Element.textContent = "Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
  h1Element.textContent = "Player 2 wins!";
} else {
  h1Element.textContent = "It's a draw!";
}