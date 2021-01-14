


// import functions and grab DOM elements
const confirmButton = document.getElementById('confirm-button');
const youWon = document.getElementById('you-won-secret-div');
const secretWins = document.getElementById('secret-wins');
const secretLosses = document.getElementById('secret-losses');
const secretTotal = document.getElementById('secret-total');
let rng = Math.ceil(Math.random() * 3);
// initialize state
let wins = 0;
let losses = 0;
let total = 0;

// set event listeners to update state and DOM

confirmButton.addEventListener('click', () => {
    total++;

    

   
    secretTotal.textContent = total;
}); 