const Ship = (name, length) => {
  let sunk = false;
  const hitboxes = new Map(Array.from({length}).map((item, index) => [index, 'unhit']));
  const getName = () => name;
  const getLength = () => length;
  const getSunk = () => sunk;
  const isSunk = () => {
    return Array.from(hitboxes.values()).every(hitbox => hitbox ==='hit');
  }

  const hit = (x) => {
    if (x >= length) {
      return false;
    }
    hitboxes.set(x, 'hit');
    sunk = isSunk();
    return sunk;
  };

  return {getName, getLength, hit, getSunk};
}

export default Ship;