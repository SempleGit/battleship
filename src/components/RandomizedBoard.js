import Gameboard from './Gameboard';
import ships from './ships';

const RandomizedBoard = () => {
  const randomizedBoard = Gameboard();
  const newShips = {...ships};
  for (const ship in newShips) {
    let placeSuccessful = false;
    let randomPosition;
    while (!placeSuccessful) {
      randomPosition = Math.floor(Math.random() * 100);
      Math.floor(Math.random() * 2) ? randomizedBoard.setAxis('horizontal') : randomizedBoard.setAxis('vertical');
      placeSuccessful = randomizedBoard.placeShip(ships[ship], randomPosition);
    }
  }
  return randomizedBoard;
}

export default RandomizedBoard;