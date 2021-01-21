import Gameboard from './Gameboard';

const game = Gameboard();

test('expect to see hit', () => {
  expect(game.receiveAttack(4)).toBe('hit');
});

test('expect to see miss', () => {
  expect(game.receiveAttack(0)).toBe('miss');
});