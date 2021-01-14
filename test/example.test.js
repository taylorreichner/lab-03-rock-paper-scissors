// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getRandomThrow } from '../get-random-throw.js';

import { didUserWin } from '../utils.js';

const test = QUnit.test;

test('it should return rock when 1 is selected', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow(1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(['rock','paper','scissors'].includes(actual), expected);


});



test('it should return tie when both parties choose 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'tie';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock','rock');
  
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);

});

test('it should return you lose when you select rock and pc selects paper', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'you lose';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock','paper')
  
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);

});
