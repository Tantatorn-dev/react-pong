import React, { Component } from 'react';


class Ball extends Component {

    constructor(props) {
        super(props);
        this.state = {
            x: 400,
            y: 300
        }
        
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
        return <circle cx={this.state.x} cy={this.state.y} r="17" fill="LemonChiffon"></circle>;
    }
}


export default Ball;