import { carrier } from './ships';

const Gameboard = () => {
  const boardSize = 10;
  const gameboard = Array.from({length: boardSize*boardSize});
  const attackPositions = new Set(Array.from({length: boardSize*boardSize}).map((i, index) => index));
  const axis = 'horizontal';
  
  const placeShip = (ship, board, startLocation) => {
    // validate valid location;
    const placeAxis = axis === 'horizontal' ? 1 : 10;
    for (let i = 0; i < ship.getLength(); i+=axis) {
      board[startLocation + i] = {ship, hitbox: i};
    }
  }

  placeShip(carrier, gameboard, 2);

  const receiveAttack = (x) => {
    // check if ship at x coordinate.
    if(attackPositions.has(x)) { //checks if this position has been selected yet.
      attackPositions.delete(x); //removes from options and proceeds to check if ship is there
      if(gameboard[x]) { //check if ship in location
        gameboard[x][ship].hit(gameboard[x].hitbox);
        return 'hit';
      } else {
        return 'miss';
      }
    } else {
      return;
    }
  }
  return {receiveAttack};
}

export default Gameboard;