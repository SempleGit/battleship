

const Gameboard = () => {
  const boardSize = 10;
  const gameboard = Array.from({length: boardSize**2});
  const attackPositions = new Set(Array.from({length: boardSize**2}).map((i, index) => index));
  let axis = 'horizontal';
  const setAxis = (direction) => {
    axis = direction;
  }
  
  const placeShip = (ship, startLocation) => {
    const placeAxis = axis === 'horizontal' ? 1 : 10;
    if (validateLocation(ship, startLocation)) { // validate valid location;
      for (let i = 0; i < ship.getLength(); i++) {
        gameboard[startLocation + i * placeAxis] = {ship, hitbox: i};
      }
      return true;
    } 
    return false;
  }

  const validateLocation = (ship, startLocation) => {
    if (axis === 'horizontal') {
      const endOfRow = startLocation - (startLocation % 10) + (boardSize - 1); //Calculates the final index of the row the ship is placed.
      if (startLocation + ship.getLength() > endOfRow) { //First validate if the position is possible without going out of the row.
       return false;
      } else {
        for (let i = 0; i < ship.getLength(); i++) { // check if there is a ship in the possible positions.
          if(gameboard[startLocation + i]) {
            return false;
          }
        }
      }
    } else {
      const endVertical = startLocation % 10 + (boardSize * 9); //Calculates the final index of the column the ship is placed.
      if (startLocation + ship.getLength() * 10 > endVertical) { //First validate if the position is possible without going out of the column.
        return false;
      } else {
        for (let i = 0; i < ship.getLength(); i++) { // check if there is a ship in the possible positions.
          if(gameboard[startLocation + i * 10]) {
            return false;
          }
        }
      }
    }
    return true;
  }

  const receiveAttack = (x) => {
    // check if ship at x coordinate.
    if(attackPositions.has(x)) { //checks if this position has been selected yet.
      attackPositions.delete(x); //removes from options and proceeds to check if ship is there
      if(gameboard[x]) { //check if ship in location
        gameboard[x].ship.hit(gameboard[x].hitbox);
        return `hit ${gameboard[x].ship.getName()}`;
      } else {
        return 'miss';
      }
    } else {
      return;
    }
  }
  return {receiveAttack, placeShip, setAxis};
}

export default Gameboard;