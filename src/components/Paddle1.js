import React, { Component } from 'react';


class Paddle1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            x: 320,
            y: 560
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleLeft = this.handleLeft.bind(this);
        this.handleRight = this.handleRight.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress(event) {
        if (event.keyCode === 37) {
            this.handleLeft();
        }
        else if (event.keyCode == 39) {
            this.handleRight();
        }
    }

    handleLeft() { 
            this.setState({
                x: this.state.x - 5
            })     
    }

    handleRight(){     
            this.setState({
                x: this.state.x + 5
            })
    }

    render() {
        return <rect x={this.state.x} y={this.state.y} width='170px' height='20px' style={{fill:'blue'}}></rect>;
    }
}


export default Paddle1;
