import React from "react";
import "./App.css";
import Board from "./objects/Board";
import Header from "./components/Header";
import Player from "./objects/Player";

function App() {
  return (
  <>
  <Header />
  <Board />
  <Player player="o" />
  </>
  )}

export default App;
