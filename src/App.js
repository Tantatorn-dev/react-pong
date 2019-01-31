import React, { Component } from 'react';
import './App.css';
import Paddle1 from './components/Paddle1';
import Paddle2 from './components/Paddle2';
import Ball from './components/Ball';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      x_paddle1: null,
      y_paddle1: null,
      direction_paddle1: null,
      x_paddle2: null,
      y_paddle2: null,
      direction_paddle2: null
    }
    this.getPaddle1Pos = this.getPaddle1Pos.bind(this);
    this.getPaddle2Pos = this.getPaddle2Pos.bind(this);
  }

  getPaddle1Pos(posX, posY, direction) {
    this.setState({
      x_paddle1: posX,
      y_paddle1: posY,
      direction_paddle1: direction
    });
  }

  getPaddle2Pos(posX, posY, direction) {
    this.setState({
      x_paddle2: posX,
      y_paddle2: posY,
      direction_paddle2: direction
    });
  }

  render() {
    return (
      <div className="App">
        <center>

          <svg className="Screen">
            <Paddle1 getPos={this.getPaddle1Pos} />
            <Paddle2 getPos={this.getPaddle2Pos} />
            <Ball
              x_paddle1={this.state.x_paddle1}
              y_paddle1={this.state.y_paddle1}
              direction_paddle1={this.state.direction_paddle1}
              x_paddle2={this.state.x_paddle2}
              y_paddle2={this.state.y_paddle2}
              direction_paddle2={this.state.direction_paddle2} />
          </svg>

        </center>
        <h1>{this.state.x_paddle1}</h1>
      </div>
    );
  }
}

export default App;
