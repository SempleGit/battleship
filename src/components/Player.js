import Gameboard from './Gameboard';
import RandomizedBoard from './RandomizedBoard';

const Player = () => {
  let playerBoard = Gameboard();
  const randomBoard = () => {
    playerBoard = RandomizedBoard();
  }
  const getPlayerBoard = () => playerBoard;
  return {getPlayerBoard, randomBoard};
}

export default Player;