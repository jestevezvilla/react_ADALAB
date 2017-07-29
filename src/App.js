import React, { Component } from 'react';
import './App.css';

const store = {
  state: {
    squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    completed: false
  }
}

const App = () => (
  <Board store={store} />
);

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = this.props.store.state;
  }

  handleClick(idx) {

    //Preservar la inmutabilidad
    //const squares2 = [...this.state.squares];
    //console.log(squares2 === this.state.squares);
    const squares = this.state.squares.slice();
    squares[idx] = squares[idx] === 'X' ? 0 : 'X';

    this.setState({ squares: squares });
    this.setState({ completed: squares.indexOf(0) === -1 });

  }

  render() {

    const renderSquares =
      this.state.squares.map((item, idx) =>
        (<Square key={idx} onClick={() => this.handleClick(idx)}>{item}</Square>)
      );
      
    return (<div>
      {this.state.completed ? <p>Prueba superada</p> : <p>Ya falta poco</p>}
      {renderSquares}
      <Counter completed={this.state.completed} />
    </div>)
  }

}

class Counter extends Component {

  constructor() {
    super();
    this.state = { counter: 0 };
  };

  componentDidMount() {
    this.start();
  }

  start() {
    let counter = 0;
    this.running =
      setInterval(() =>
        this.setState({ counter: counter++ }),
        1000);
  }

  stop() {
    clearInterval(this.running);
    this.running = null;
  }

  componentDidUpdate(prev, next) {
    if (this.props.completed) {
      this.stop();
    }
  }

  render() {

    return (<span>{this.state.counter}</span>)
  }

}

const Square = (props) => {

  return (<button onClick={props.onClick}>{props.children}</button>)
};



export default App;
