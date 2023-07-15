"use strict";

const drums = document.querySelectorAll(".drum");

drums.forEach((drum) => {
  drum.addEventListener("click", function () {
    let pressedBtn = this.innerHTML; //?will store the element's content
    console.log(pressedBtn);
    playDrumSound(pressedBtn);
  });
});

document.addEventListener("keydown", function (event) {
  //   console.log(event.key);
  let pressedKey = event.key;
  playDrumSound(pressedKey);
});

function playDrumSound(key) {
  // console.log(this); // will return the html element as we know to test

  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log("not a key");

      break;
  }
  buttonStyles(key);
}

function buttonStyles(key) {
  let activeButton = document.querySelector(`.${key}`);
  activeButton.classList.add("key-pressed");
  setTimeout(() => {
    activeButton.classList.remove("key-pressed");
  }, 100);
  //   presskey.classList.remove("key-pressed");
}
