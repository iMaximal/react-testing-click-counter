import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: '',
            counter: 0,
        };
    }

    showCountError = () => {
        this.setState({
            error: `The counter can't go below zero`
        });
    };

    hideCountError = () => {
        this.setState({ error: '' });
    }

    incrementCounter = () => {
        if (this.state.error) {
            this.hideCountError();
        }
        this.setState({
            counter: this.state.counter + 1
        });
    };

    decrementCounter = () => {
        // can't be below 0
        if (this.state.counter === 0) {
            this.showCountError();
            return;
        }

        this.setState({
            counter: this.state.counter - 1
        });
    };

    render() {
        const { error } = this.state;

        return (
            <div data-test="component-app">
                <h1 data-test="counter-display">
                    The counter is currently { this.state.counter }
                </h1>
                {error && <div
                    data-test="error-message"
                    style={{ color: 'red' }}
                >
                    { error }
                </div>}
                <button
                    data-test="increment-button"
                    onClick={ this.incrementCounter }
                >
                    Increment counter
                </button>
                <button
                    data-test="decrement-button"
                    onClick={ this.decrementCounter }
                >
                    Increment counter
                </button>
            </div>
        );
    }
}

export default App;
