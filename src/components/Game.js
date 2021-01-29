import Player from './Player'
import './stylesheets/game.css';
import {useEffect} from 'react';

const Game = () => {
  const player1 = Player('player 1');
  
  useEffect(() => {

    const board = document.querySelector('.display-board');
    board.addEventListener('click', (e) => {
      console.log(e.target.id);
      const result = player1.getPlayerBoard().receiveAttack(e.target.id);
      e.target.classList.add(result);
    });

    return (
      board.removeEventListener('click', (e) => {
        console.log(e.target.id);
      })
    )

  })

  const displayBoard = () => player1.getPlayerBoard().getDisplayBoard().map( (item, index) => {
    return (
      <div className={`board-cell ${item}`} id={index} key={index}>
      </div>
    )
  })
  return (
    <div>
      <h1>{player1.getName()}</h1>
      <div className='display-board'>
        {displayBoard()}
      </div> 
    </div>
  )
}

export default Game;