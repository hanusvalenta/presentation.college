import React from 'react';
import MyButton from './UI/MyButton';
import './App.css';
import GameName from './UI/GameName';
import MainText from './UI/MainText.js'
import Foto1 from './Images/Foto1.png';
import Foto2 from './Images/Foto2.png';
import Foto3 from './Images/Foto3.png';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <h1><GameName></GameName></h1> 
      </div>
      <div class="Photos">
        <span id="Slide-1"></span>
        <span id="Slide-2"></span>
        <span id="Slide-3"></span>
        <div class="image-container">
          <img src={Foto1} alt=""/>
          <img src={Foto2} alt=""/>
          <img src={Foto3} alt=""/>
        </div>
        <div class="Buttons">
          <a href="#Slide-1"></a>
          <a href="#Slide-2"></a>
          <a href="#Slide-3"></a>
        </div>
      </div>
      <div className="Main">
        <div className="Menu">
          <MyButton></MyButton>
        </div>
        <div className="Content">
          <MainText></MainText>
        </div>
      </div>
    </div>
  );
}

export default App;