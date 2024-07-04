// MY CODE 
//     // Get the h1
//     let theWinnerText = document.querySelector("h1");
    
//     // Get the players dice images
//     let firstPlayerDice = document.querySelector(".img1");
//     let secondPlayerDice = document.querySelector(".img2");

//     // Get the image assets and the path
//     let imagesArr = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
    
//     function displayImage() {
//         // arr+1 to return from 0..6 numbers
//         let randomNumberOne = Math.floor(Math.random() * (imagesArr.length + 1));     
//         let randomNumberTwo = Math.floor(Math.random() * (imagesArr.length + 1)); 
        
//         console.log(randomNumberOne, randomNumberTwo);

//         // Get the dice number
//         let firstDice = imagesArr[randomNumberOne];
//         let secondDice = imagesArr[randomNumberTwo];
        
//         // Append the dice images
//         firstPlayerDice.setAttribute("src", "./images/" + firstDice);
//         secondPlayerDice.setAttribute("src", "./images/" + secondDice);

//     if (randomNumberOne > randomNumberTwo) {
//         theWinnerText.textContent = "Player 1 Wins!"       
//     } else if(randomNumberOne == randomNumberTwo) {
//         theWinnerText.textContent = "Draw";
//     } else {
//         theWinnerText.textContent = "Player 2 Wins!"       
//     } 
// }
// displayImage();


// LECTOR's CODE

// random number
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// get the dice image
let randomImageSource1 = "./images/dice" + randomNumber1 + ".png";
let randomImageSource2 = "./images/dice" + randomNumber2 + ".png";

// apply the dice image
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// get h1
let text = document.querySelector("h1");

// check
if (randomNumber1 > randomNumber2) {
    text.textContent = "🚩 Player 1 Wins!"
} else if (randomNumber1 == randomNumber2) {
    text.textContent = "Draw!"
} else {
    text.textContent = "Player 2 Wins! 🚩"
}
