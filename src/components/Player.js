import Gameboard from './Gameboard';
import RandomizedBoard from './RandomizedBoard';

const Player = (name = 'Player') => {
  let playerBoard = Gameboard();
  const getName = () => name;
  const randomBoard = () => {
    playerBoard = RandomizedBoard();
  }
  const getPlayerBoard = () => playerBoard;
  return {getPlayerBoard, randomBoard, getName};
}

export default Player;