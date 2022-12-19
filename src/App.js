import React from 'react';
import './App.css';
import Head from './UI/Head';
import MyMenu from './UI/MyMenu';
import Content from './UI/Content';

import Foto1 from './Images/Foto1.png';
import Foto2 from './Images/Foto2.png';
import Foto3 from './Images/Foto3.png';

export{Foto1};
export{Foto2};
export{Foto3};

function App() {
  return (
    <div className="App">
      <Head></Head>
      <div class="Photos">
        <div class="ImageContainer">
          <img src={Foto1} alt=""/>
          <img src={Foto2} alt=""/>
          <img src={Foto3} alt=""/>
        </div>
      </div>
      <div className="Main">
        <MyMenu></MyMenu>
        <Content></Content>
      </div>
    </div>
  );
}

export default App;