import React, { Component } from 'react';


class Paddle2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            x: 320,
            y: 40,
            speed: 3,
            direction: 0,
            x_ball:null,
            y_ball:null
        }
        
        this.updatePosBall = this.updatePosBall.bind(this);

        this.handleLeft = this.handleLeft.bind(this);
        this.handleStill = this.handleStill.bind(this);
        this.handleRight = this.handleRight.bind(this);

        this.movePaddle = this.movePaddle.bind(this);

        this.returnPos = this.returnPos.bind(this);
    }

    returnPos(){
        this.props.getPos(this.state.x,this.state.y,this.state.direction);
    }

    componentDidMount() {
        var interval = setInterval(this.returnPos, 10);
        
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentWillReceiveProps(nextProps){

        this.setState({
            x_ball:nextProps.x_ball,
            y_ball:nextProps.y_ball
        })

        this.updatePosBall();

    }
    
    updatePosBall() {

        if(this.state.x_ball<this.state.x+170 && this.state.x_ball>this.state.x){
            this.handleStill();
        }
        else if(this.state.x_ball<=this.state.x){
            this.handleLeft();
        }
        else if(this.state.x_ball>=this.state.x+170){
            this.handleRight();
        }
        this.movePaddle();
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
        if (this.state.x >= 800) {
            this.setState({
                direction: 0
            })
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
        return <rect x={this.state.x}
            y={this.state.y}
            width='170px'
            height='20px'
            style={{ fill: 'red' }} />;
    }
}


export default Paddle2;
