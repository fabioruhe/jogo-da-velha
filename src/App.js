import React from "react";
import "./App.css";
import Board from "./objects/Board";
import Header from "./components/Header";
import Player from "./objects/Player";
import Hashtag from "./components/hashtag";
import Input from "./objects/Input";


function App() {
  return (
    <main className='app'>
      <Header />
      <Hashtag />
      <Input type='checkbox'id='show' value='show' content='Mostrar eventos' />
    </main>
  );
}

export default App;
