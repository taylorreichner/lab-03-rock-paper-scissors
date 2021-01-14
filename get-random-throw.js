

export function getRandomThrow() {
   

   const oneTwoOrThree = Math.ceil(Math.random() * 3);

    if (oneTwoOrThree === 1) {
        return 'rock';
    }

    if (oneTwoOrThree === 2) {
        return 'paper';
    }
    if (oneTwoOrThree === 3) {
        return 'scissors';
    }


};
