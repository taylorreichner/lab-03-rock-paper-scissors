import { getRandomThrow } from '../get-random-throw.js';
import { didUserWin } from '../utils.js';

const test = QUnit.test;

test('it should return rock when 1 is selected', (expect) => {
    const expected = true;
    const actual = getRandomThrow(1);

    expect.equal(['rock', 'paper', 'scissors'].includes(actual), expected);
});



test('it should return tie when both parties choose 1', (expect) => {
    const expected = 'draw';
    const actual = didUserWin('rock', 'rock');

    expect.equal(actual, expected);
});

test('it should return you lose when you select rock and pc selects paper', (expect) => {
    const expected = 'lose';
    const actual = didUserWin('rock', 'paper')

    expect.equal(actual, expected);
});
