import React from 'react';
import ReactDom from 'react-dom';
import bannerImg from './banner.jpg';
import bannerImg2 from './banner2.png';
import style from './index.css';

function App() {
  return (
    <header>
      <h1 className={style.font}>Hello World</h1>
      <figure>
        <img src={bannerImg2} alt="" />
        <img src={bannerImg} alt="Banner" />
      </figure>
    </header>
  );
}

ReactDom.render(<App />, document.getElementById('app'));
