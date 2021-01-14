export function didUserWin(user, computer) {
    if (user === computer) {
        return 'draw';
    } else if (user === 'rock' && computer === 'paper') {
        return 'lose';
    } else if (user === 'rock' && computer === 'scissors') {
        return 'win';
    } else if (user === 'paper' && computer === 'rock') {
        return 'win';
    } else if (user === 'paper' && computer === 'scissors') {
        return 'lose';
    } else if (user === 'scissors' && computer === 'rock') {
        return 'lose';
    } else if (user === 'scissors' && computer === 'paper') {
        return 'win';
    }
}