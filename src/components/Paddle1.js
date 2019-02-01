import React, { Component } from 'react';


class Paddle1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            x: 320,
            y: 560,
            speed: 10,
            direction: 0
        }

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);

        this.handleLeft = this.handleLeft.bind(this);
        this.handleStill = this.handleStill.bind(this);
        this.handleRight = this.handleRight.bind(this);

        this.movePaddle = this.movePaddle.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
        document.addEventListener('keyup', this.handleKeyUp);
        this.props.getPos(this.state.x, this.state.y, this.state.direction);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
        document.removeEventListener('keyup', this.handleKeyUp);
    }

    handleKeyPress(event) {
        if (event.keyCode === 37) {
            this.handleLeft();
            this.props.getPos(this.state.x, this.state.y, this.state.direction);
        }
        else if (event.keyCode == 39) {
            this.handleRight();
            this.props.getPos(this.state.x, this.state.y, this.state.direction);
        }
        this.movePaddle();
    }

    handleKeyUp() {
        this.handleStill();
        this.props.getPos(this.state.x, this.state.y, this.state.direction);
    }

    handleLeft() {
        if (this.state.x <= 0) {
            this.setState({
                direction: 0
            })
        }
        else {
            this.setState({
                direction: -1
            })
        }
    }

    handleStill() {
        this.setState({
            direction: 0
        })
    }

    handleRight() {
        if (this.state.x >= 630) {
            this.setState({ direction: 0 })
        }
        else {
            this.setState({
                direction: 1
            })
        }
    }

    movePaddle() {
        this.setState({
            x: this.state.x + this.state.speed * this.state.direction
        })
    }

    render() {
        return <rect
            x={this.state.x}
            y={this.state.y}
            width='170px'
            height='20px'
            style={{ fill: 'blue' }} />;
    }
}


export default Paddle1;
