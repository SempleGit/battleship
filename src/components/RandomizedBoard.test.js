import RandomizedBoard from './RandomizedBoard';

test('expect successful board', () => {
  const cpuBoard = RandomizedBoard();
  console.table(cpuBoard.getGameboard());
  expect(cpuBoard).toBe(true);
})