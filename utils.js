


export function didUserWin(user, computer) {
    if (user === computer) 
        { return 'tie'; }
    if (user === 'rock' && computer === 'paper') {
         return 'you lose';}
    if (user === 'rock' && computer === 'scissors') {
        return 'you win';}
    if (user === 'paper' && computer === 'rock') {
        return 'you win';}
    if (user === 'paper' && computer === 'scissors') {
    return 'you lose';}
    if (user === 'scissors' && computer === 'paper') {
        return 'you win';}
    if (user === 'scissors' && computer === 'rock') {
        return 'you lose'
    }
    }

