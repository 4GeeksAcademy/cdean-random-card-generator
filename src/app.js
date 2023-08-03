/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  getRandomCard();
};
let palo = ["♦", "♥", "♠", "♣"];
let cardNumber = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "K",
  "Q",
  "J",
  "A"
];

let nuevaCarta = document.getElementById("btn");
nuevaCarta.addEventListener("click", getRandomCard);

function getRandomCard() {
  let paloRandom = Math.floor(Math.random() * palo.length);
  let cardNumberRandom = Math.floor(Math.random() * cardNumber.length);
  let paloHeader = document.getElementById("paloHeader");
  let numero = document.getElementById("numero");
  let paloFooter = document.getElementById("paloFooter");
  if (palo[paloRandom] == "♥" || palo[paloRandom] == "♦") {
    paloHeader.className =
      "card-header border-bottom-0 bg-white red text-start";
    paloFooter.className = "red rotate";
    numero.className = "card-body text-center align-middle my-auto red";
  } else {
    paloHeader.className = "card-header border-bottom-0 bg-white text-start";
    paloFooter.className = "rotate";
    numero.className = "card-body text-center align-middle my-auto";
  }
  paloHeader.innerHTML = palo[paloRandom];
  numero.innerHTML = cardNumber[cardNumberRandom];
  paloFooter.innerHTML = palo[paloRandom];
}
setInterval(getRandomCard, 5000);
