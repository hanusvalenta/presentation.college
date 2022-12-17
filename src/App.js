import React from 'react';
import './App.css';
import GameName from './UI/GameName';
import Foto1 from './Images/Foto1.png';
import Foto2 from './Images/Foto2.png';
import Foto3 from './Images/Foto3.png';
import About from './Texts/About';
import Features from './Texts/Features';
import Optimalization from './Texts/Optimalization';
import Inspiration from './Texts/Inspiration';

function App() {
  return (
    <div className="App">
      <div className="Head">
        <div className="Header">
          <GameName></GameName>
        </div>
      </div>
      <div class="Photos">
        <div class="ImageContainer">
          <img src={Foto1} alt=""/>
          <img src={Foto2} alt=""/>
          <img src={Foto3} alt=""/>
        </div>
      </div>
      <div className="Main">
        <div className="Menu">
          <a className="Btn" href='#Section1'>
            About
          </a>
          <a className="Btn" href='#Section2'>
            Features
          </a>
          <a className="Btn" href='#Section3'>
            Optimalization
          </a>
          <a className="Btn" href='#Section4'>
            Inspiration
          </a>
        </div>
        <div className="Content">
          <About></About>
          <Features></Features>
          <Optimalization></Optimalization>
          <Inspiration></Inspiration>
        </div>
      </div>
    </div>
  );
}

export default App;