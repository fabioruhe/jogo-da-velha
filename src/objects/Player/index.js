import React from 'react'
import './styles.css'
import PlayerX from '../../img/playerX.png'
import PlayerO from '../../img/circle.png'


const Player = (props) => {
   
   let player = '';
   if(props.player === 'x'){
       player = PlayerX
   }else if (props.player === 'o'){
       player = PlayerO
   }
   
    return(
        <button className="player">
            <img src={player} alt="Jogador X"></img>
        </button>
    )
}
export default Player;