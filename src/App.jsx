import React from 'react';
import style from './App.css';

/**
 * helloWord
 *
 * @params {any} word
 */
function helloWorld(word) {
  console.warn(`Hello ${word}`);
}

/**
 * App root component
 *
 * @return
 */
function App() {
  helloWorld('world');
  return (
    <header>
      <h1 className={style.font}>Hello World</h1>
    </header>
  );
}

export default App;
