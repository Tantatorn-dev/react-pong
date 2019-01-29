import React, { Component } from 'react';
import './App.css';
import Paddle1 from './components/Paddle1';
import Paddle2 from './components/Paddle2';


class App extends Component {
  render() {
    return (
      <div className="App">
      <center>
        <svg className="Screen">
          <Paddle1 />  
          <Paddle2 />
          
        </svg>
      </center>
      </div>
    );
  }
}

export default App;
