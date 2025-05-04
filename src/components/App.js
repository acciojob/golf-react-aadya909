import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderBall: false,
            posi: 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this);
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    // Button click handler
    buttonClickHandler() {
        this.setState({ renderBall: true });
    }

    // Handle Right Arrow key press
    handleKeyDown(event) {
        if (event.keyCode === 39 && this.state.renderBall) {
            const newPos = this.state.posi + 5;
            this.setState({
                posi: newPos,
                ballPosition: { left: newPos + "px" }
            });
        }
    }

    // Add keydown listener after component mounts
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }

    // Clean up the listener
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    renderBallOrButton() {
        if (this.state.renderBall) {
            return <div className="ball" style={this.state.ballPosition}></div>;
        } else {
            return <button className="start" onClick={this.buttonClickHandler}>Start</button>;
        }
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        );
    }
}

export default App;

