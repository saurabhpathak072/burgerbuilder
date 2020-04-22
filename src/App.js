import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import BurgerSpace from './components/BurgerSpace/BurgerSpace';
import Ingredients from './components/Ingredients/Ingredients'

function App() {
  return (
    <div className="App">
      <Header />
      <BurgerSpace />
      <Ingredients />
    </div>
  );
}

export default App;
