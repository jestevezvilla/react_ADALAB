import React, { Component } from 'react';

//TODO: Importar Promises con namespace

import './App.css';
import StarWars from './StarWars';
import Square from './Square';
import Counter from './Counter';
import ControlledForm from './ControlledForm';
import HOC from './HOC';
//import {HOC} from './HOC';
//import * as components from './HOC';

import ModalShorthand from './Toolkit';

const store = {
  board: {
    squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    completed: false
  },
  username: '',
  records: [123,12,323,2123]
}

const App = () => (
  <div>
    <Board store={store} />
    <StarWars />
  </div>
);

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = this.props.store.board;
  }

  handleClick(idx) {

    //Preservar la inmutabilidad
    //const squares2 = [...this.state.squares];
    //console.log(squares2 === this.state.squares);
    const squares = this.state.squares.slice();
    
    squares[idx] = squares[idx] === 'X' ? 0 : 'X';

    this.setState({ squares: squares });
    
    if(squares.indexOf(0) === -1){
      this.setState({ completed: true });
    }
  
  }

  inputChange(el) {
    console.log(el.value);
  }

  componentDidUpdate(prevProps, prevState) {
    
  }

  render() {

    const renderSquares =
      this.state.squares.map((item, idx) =>
        (<Square key={idx} onSquareClick={() => this.handleClick(idx)}>
        
          <span>{item}</span>
          <div>Hola!</div>
        
        </Square>)
      );
      
    return (<div>
      
      <ModalShorthand />

      <Search onInputChange={this.inputChange}/>

      {this.state.completed ?
          <p>Prueba superada</p> :
          <p>Ya falta poco</p>
      }
      {renderSquares}

      <Counter completed={this.state.completed} increment={2} />
      <ControlledForm title='Controlled' />
      <HOC/>
    </div>)
  }

}

//TODO: Convertir en funcional
class Search extends Component {
  render(){
    let inputRef;
    return(<input
            ref={(inputText) => inputRef = inputText}
            onChange={()=>this.props.onInputChange(inputRef)} />)
    // return(<input
    //         ref='search'
    //         onChange={()=>this.props.onInputChange(this.refs.search)} />)
  }

}



export default App;
