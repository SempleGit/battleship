import Ship from './Ship';

const ships = {
  carrier: Ship('Carrier', 5),
  battleship: Ship('Battleship', 4),
  destroyer: Ship('Destroyer', 3),
  submarine: Ship('Submarine', 3),
  patrolBoat: Ship('Patrol Boat', 2),
}

export default ships;