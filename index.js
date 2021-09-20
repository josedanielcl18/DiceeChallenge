var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random number from 1 to 6
var imgSource1 = 'images/dice' + randomNumber1 + '.png';
document.getElementsByClassName("img1")[0].src = imgSource1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //random number from 1 to 6
var imgSource2 = 'images/dice' + randomNumber2 + '.png';
document.querySelectorAll("img")[1].src = imgSource2

function changeTitle(randomNumber1, randomNumber1) {
  if (randomNumber1 > randomNumber2) {
    return document.querySelector("h1").innerHTML = "💥 Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    return document.querySelector("h1").innerHTML = "Player 2 Wins! 💥";
  } else {
    return document.querySelector("h1").innerHTML = "💥 Draw! 💥";
  }
}

changeTitle(randomNumber1, randomNumber1)
