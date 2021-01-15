import { getRandomThrow } from './get-random-throw.js';
import { didUserWin } from './utils.js';

// import functions and grab DOM elements
const confirmButton = document.getElementById('confirm-button');
const secretTies = document.getElementById('secret-ties')
const whoWins = document.getElementById('you-won-secret-div');
const secretWins = document.getElementById('secret-wins');
const secretLosses = document.getElementById('secret-losses');
const secretTotal = document.getElementById('secret-total');
const userThrowImg = document.querySelector('#user-throw-img');
const computerThrowImg = document.querySelector('#computer-throw-img');
// initialize state
let wins = 0;
let losses = 0;
let total = 0;
let ties = 0;
const paper = 'https://nyc3.digitaloceanspaces.com/aph/app/uploads/2019/04/26160704/1-04851-00_BL_Notebook_Paper_Punch_G-600x735';
const rock = 'https://static.toiimg.com/thumb/msid-76750498,imgsize-965136,width-800,height-600,resizemode-75/76750498';
const scissors = 'https://images-na.ssl-images-amazon.com/images/I/61vNqndZyJL._AC_SL1280_'; 

confirmButton.addEventListener('click', () => {
    const userInput = document.querySelector('input:checked');
    const userThrow = userInput.value;
    const computerThrow = getRandomThrow();
    const result = didUserWin(userThrow, computerThrow);
    if (userThrow === 'paper') {
        userThrowImg.src = `${paper}.jpg`;
    } else if (userThrow === 'rock') {
        userThrowImg.src = `${rock}.jpg`;
    } else {
        userThrowImg.src = `${scissors}.jpg`;
    }
    if (computerThrow === 'paper') {
        computerThrowImg.src = `${paper}.jpg`;
    } else if (computerThrow === 'rock') {
        computerThrowImg.src = `${rock}.jpg`;
    } else {
        computerThrowImg.src = `${scissors}.jpg`;
    }

   if (result === 'tie') {
       ties++;
       secretTies.textContent = `Ties: ${ties}`;
        whoWins.textContent = `YOU TIED WITH THE COMPUTER`;
   } else if (result === 'you lose') {
        losses++;
        whoWins.textContent = `YOU HAVE WON! SILLY MACHINE`;
    } else if (result === 'you win') {
        wins++;
        whoWins.textContent = `YOU HAVE LOST AGAIN SILLY HUMAN`;
    } 

    total++;
    secretTotal.textContent = total;
    
    
}); 