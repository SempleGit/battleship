import Ship from './Ship';

const testShip = Ship('testShip', 4);

test('get name', () => {
  expect(testShip.getName()).toBe('testShip');
});

test('not sunk', () => {
  expect(testShip.getSunk()).toBe(false);
})

test('hit', () => {
  expect(testShip.hit(1)).toBe(false);
})

test('sunk', () => {
  for(let i = 0; i < 4; i++) {
    testShip.hit(i);
  }
  expect(testShip.getSunk()).toBe(true);
})


test('hit outside', () => {
  expect(testShip.hit(5)).toBe(false);
})