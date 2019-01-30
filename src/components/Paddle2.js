import React, { Component } from 'react';


class Paddle2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            x: 320,
            y: 40
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress(event) {
       
    }

    render() {
        return <rect x={this.state.x} y={this.state.y} width='170px' height='20px' style={{ fill: 'red' }}></rect>;
    }
}


export default Paddle2;
