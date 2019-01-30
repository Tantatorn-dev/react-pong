import React, { Component } from 'react';
import './App.css';
import Paddle1 from './components/Paddle1';
import Paddle2 from './components/Paddle2';
import Ball from './components/Ball';


class App extends Component {
  render() {
    return (
      <div className="App">
      <center>
        <svg className="Screen">
          <Paddle1 />  
          <Paddle2 />
          <Ball />
          
        </svg>
      </center>
      </div>
    );
  }
}

export default App;
