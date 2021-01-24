import Gameboard from './Gameboard';
import { battleship, carrier, destroyer, submarine, patrolBoat } from './ships';

const game = Gameboard();

test('expect to pass', () => {
  expect(game.placeShip(carrier, 2)).toBe(true);
});

test('expect to fail', () => {
  expect(game.placeShip(battleship, 10)).toBe(true);
});

test('expect to see hit', () => {
  expect(game.receiveAttack(4)).toBe('hit Carrier');
});

test('expect to see hit', () => {
  expect(game.receiveAttack(11)).toBe('hit Battleship');
});

test('expect to see miss', () => {
  expect(game.receiveAttack(0)).toBe('miss');
});


test('expect to pass', () => {
  game.setAxis('vertical');
  expect(game.placeShip(destroyer, 27)).toBe(true);
});

test('expect to fail', () => {
  game.setAxis('vertical');
  expect(game.placeShip(submarine, 85)).toBe(false);
});

test('expect to fail', () => {
  game.setAxis('vertical');
  expect(game.placeShip(patrolBoat, 17)).toBe(false);
});

test('expect to see hit', () => {
  expect(game.receiveAttack(37)).toBe('hit Destroyer');
});