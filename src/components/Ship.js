const Ship = (name, length) => {
  let sunk = false;
  const hitboxes = new Map(Array.from({length}).map((item, index) => [index, 'unhit']));

  const getSunk = () => sunk;
  const isSunk = () => {
    return Array.from(hitBoxes.values()).every(hitbox => hitbox ==='hit');
  }

  hit = (x) => {
    hitboxes.set(x, 'hit');
    sunk = isSunk();
  };

  return {name, length, hit, getSunk};
}