// //First Way with foreach loop
// let buttons = document.querySelectorAll("button");

// buttons.forEach(e => {
//     e.addEventListener("click", handleClick);
// });

// Second way with for loop
let numberOfDrums = document.querySelectorAll(".drum").length;
let drumsClicked = document.querySelectorAll(".drum");

// Detecting Clicks
for (let i = 0; i < numberOfDrums; i++) {
    drumsClicked[i].addEventListener("click", function () {
        let clickedLetterDrumSymbol = this.innerHTML;
        // add sound
        makeSound(clickedLetterDrumSymbol);
        // add animation
        buttonAnimation(clickedLetterDrumSymbol);
    });
}

// Detecting Keyboard Press
document.addEventListener("keypress", function(event) {
    // add sound
    makeSound(event.key);
    // add animation
    buttonAnimation(event.key);
});
// Create the function with the sound
function makeSound(key) {
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
            let kick = new Audio("sounds/kick.mp3");
            kick.play();
        break;

        default: console.log(pushedLetter);
    }
}

function buttonAnimation(currentKey) {
   let activeButton = document.querySelector("." + currentKey);
   activeButton.classList.add("pressed");
   
   // set timeout to remove the .pressed class
   setTimeout(function (params) {
    activeButton.classList.remove("pressed");
   }, 100);
}
