const Gameboard = () => {
  const boardSize = 10;
  const gameboard = Array.from({length: boardSize**2});
  const displayBoard = Array.from({length: boardSize**2}).map( () => 'open');
  const openAttackPositions = new Set(Array.from({length: boardSize**2}).map((i, index) => index));
  const activeShips = new Set();
  let axis = 'horizontal';

  const getGameboard = () => gameboard;
  const getDisplayBoard = () => displayBoard;
  const setAxis = (direction) => {
    axis = direction;
  }
  
  const placeShip = (ship, startLocation) => {
    const placeAxis = axis === 'horizontal' ? 1 : 10;
    if (validateLocation(ship, startLocation)) { // validate location is acceptable;
      for (let i = 0; i < ship.getLength(); i++) {
        gameboard[startLocation + i * placeAxis] = {ship, name: ship.getName(), hitbox: i};
        activeShips.add(ship);
      }
      return true;
    } 
    return false;
  }

  const validateLocation = (ship, startLocation) => {
    
    const checkForShip = () => { // check if there is a ship in positions needed.
      const placeAxis = axis === 'horizontal' ? 1 : 10;
        for (let i = 0; i < ship.getLength(); i++) { // check if there is a ship in the possible positions.
          if(gameboard[startLocation + i * placeAxis]) {
            return false;
          }
        }
      return true;
    }

    if (axis === 'horizontal') {
      const endHorizontal = startLocation - (startLocation % 10) + (boardSize - 1); //Calculates the final index of the row the ship is placed.
      if (startLocation + ship.getLength() > endHorizontal) { //First validate if the position is possible without going out of the row.
       return false;
      } else {
        if(!checkForShip()) {
            return false;
        }
      }
    } else {
      const endVertical = startLocation % 10 + (10 * (boardSize - 1)); //Calculates the final index of the column the ship is placed.
      if (startLocation + ship.getLength() * 10 > endVertical) { //First validate if the position is possible without going out of the column.
        return false;
      } else {
        if(!checkForShip()) {
          return false;
        }
      }
    }
    return true;
  }

  const allShipsSunk = () => {
    return activeShips.size === 0;
  }

  const receiveAttack = (x) => {
    // check if ship at x coordinate.
    x = Number(x);
    if(openAttackPositions.has(x)) { //checks if this position has been selected yet.
      openAttackPositions.delete(x); //removes from possible attack positions and proceeds to check if ship is there
      if(gameboard[x]) { //check if ship in location
        if(gameboard[x].ship.hit(gameboard[x].hitbox)) {
          activeShips.delete(gameboard[x].ship); // the hit method returns true if the ship is sunk, so this will remove it from the activeShips.
        };
        displayBoard[x] = 'hit';
        return `hit ${gameboard[x].ship.getName()}`;
      } else {
        displayBoard[x] = 'miss';
        return 'miss';
      }
    } else {
      return false;
    }
  }

  return {receiveAttack, placeShip, setAxis, getGameboard, getDisplayBoard, allShipsSunk};
}

export default Gameboard;