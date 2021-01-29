import Gameboard from './Gameboard';
import ships from './ships';

const game = Gameboard();

test('expect to pass', () => {
  expect(game.placeShip(ships.carrier, 2)).toBe(true);
});

// test('expect to fail', () => {
//   expect(game.placeShip(ships.battleship, 10)).toBe(true);
// });

// test('expect to see hit', () => {
//   expect(game.receiveAttack(4)).toBe('hit Carrier');
// });

// test('expect to see hit bs', () => {
//   expect(game.receiveAttack(11)).toBe('hit Battleship');
// });

// test('expect to see miss', () => {
//   expect(game.receiveAttack(0)).toBe('miss');
// });


// test('expect to pass', () => {
//   game.setAxis('vertical');
//   expect(game.placeShip(ships.destroyer, 27)).toBe(true);
// });

// test('expect to fail', () => {
//   game.setAxis('vertical');
//   expect(game.placeShip(ships.submarine, 85)).toBe(false);
// });

// test('expect to fail', () => {
//   game.setAxis('vertical');
//   expect(game.placeShip(ships.patrolBoat, 17)).toBe(false);
// });

// test('expect to see hit d', () => {
//   expect(game.receiveAttack(37)).toBe('hit Destroyer');
// });

test('expect to fail, no sunk', () => {
  expect(ships.carrier.getSunk()).toBe(false);
});



test('expect to pass, sunk carrier', () => {
  game.receiveAttack(2);
  game.receiveAttack(3);
  game.receiveAttack(4);
  game.receiveAttack(5);
  game.receiveAttack(6);
  expect(ships.carrier.getSunk()).toBe(true);
});

test('expect to pass placing battleship', () => {
  expect(game.placeShip(ships.battleship, 12)).toBe(true);
});

test('expect all ships not sunk, so false', () => {
  expect(game.allShipsSunk()).toBe(false);
});

test('expect to pass, sunk battleship', () => {
  game.receiveAttack(12);
  game.receiveAttack(13);
  game.receiveAttack(14);
  game.receiveAttack(15);
  expect(ships.battleship.getSunk()).toBe(true);
});

test('expect to see hit on display', () => {
  expect(game.getDisplayBoard(3)).toBe('hit');
});

test('expect to see open on display', () => {
  expect(game.getDisplayBoard(35)).toBe('open');
});

test('expect all ships sunk, so true', () => {
  expect(game.allShipsSunk()).toBe(true);
});

