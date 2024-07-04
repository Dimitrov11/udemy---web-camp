// //First Way with foreach loop
// let buttons = document.querySelectorAll("button");

// buttons.forEach(e => {
//     e.addEventListener("click", handleClick);
// });

// Second way with for loop
let numberOfDrums = document.querySelectorAll(".drum").length;
let drumsClicked = document.querySelectorAll(".drum");

// Detecting Click
for (let i = 0; i < numberOfDrums; i++) {
    drumsClicked[i].addEventListener("click", function () {
        
        let pushedLetter = this.innerHTML;
        
        switch (pushedLetter) {
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
    });
}

// Detecting Keyboard Press
document.addEventListener("keypress", function(e) {
    
    switch (e.key) {
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
})