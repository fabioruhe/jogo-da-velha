import React from "react";
import "./styles.css";
import playerX from "../../img/playerX.png";
import playerO from "../../img/Circle.png";

const Player = ({ player }) => {
  const players = [];
  players["x"] = playerX;
  players["o"] = playerO;

  return (
    <button className="player">
      <img src={players[player]} alt={`Jogador ${player.toUpperCase()}`}></img>
    </button>
  );
};
export default Player;
