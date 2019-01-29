import React, { Component } from 'react';


class Paddle1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            x: 320,
            y: 560
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress(event) {
        if (event.keyCode === 13) {
            this.handleEnter();
        }
    }

    handleEnter() {

    }

    render() {
        return <rect x={this.state.x} y={this.state.y} width='170px' height='20px' ></rect>;
    }
}


export default Paddle1;
