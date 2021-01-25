import Gameboard from './Gameboard';
import ships from './ships';

const game = Gameboard();

test('expect to pass', () => {
  expect(game.placeShip(ships.carrier, 2)).toBe(true);
});

test('expect to fail', () => {
  expect(game.placeShip(ships.battleship, 10)).toBe(true);
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
  expect(game.placeShip(ships.destroyer, 27)).toBe(true);
});

test('expect to fail', () => {
  game.setAxis('vertical');
  expect(game.placeShip(ships.submarine, 85)).toBe(false);
});

test('expect to fail', () => {
  game.setAxis('vertical');
  expect(game.placeShip(ships.patrolBoat, 17)).toBe(false);
});

test('expect to see hit', () => {
  expect(game.receiveAttack(37)).toBe('hit Destroyer');
});

test('expect to fail, no sunk', () => {
  expect(ships.carrier.getSunk()).toBe(false);
});

test('expect to fail, no sunk', () => {
  expect(ships.carrier.getSunk()).toBe(false);
});

test('expect to pass, sunk', () => {
  game.receiveAttack(2);
  game.receiveAttack(3);
  game.receiveAttack(4);
  game.receiveAttack(5);
  game.receiveAttack(6);
  console.table(game.getGameboard());
  expect(ships.carrier.getSunk()).toBe(true);
});
