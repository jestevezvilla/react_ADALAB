import React, { Component } from 'react';
import { Switch, Prompt, Redirect, Route, Link, withRouter } from 'react-router-dom'

//TODO: Importar Promises con namespace

import './App.css';
import StarWars from './StarWars';
import Square from './Square';
import Counter from './Counter';
import ControlledForm from './ControlledForm';
import HOC from './HOC';
import Search from './Search';
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

class App extends Component {
  constructor(){
    super();
    this.state = {location: ''}
  }
  componentDidMount() {
    this.props.history.listen((location) =>{
      if(location.pathname !== ''){
        this.setState({location:location.pathname})
      }
      }
    );
  }

  formIsHalfFilledOut(){
    return true
  }
  
  render(){
      return (
                <div>
                    <ul>
                      <li><Link to="/board">Board</Link></li>
                      <li><Link to="/starwars">StarWars</Link></li>
                      <li><Link to="/router">Router</Link></li>
                    </ul>
                    
                        <Switch>
                          {(this.state.location === '/board') ? <Prompt
                            when={this.formIsHalfFilledOut()}
                            message="Are you sure you want to leave?" 
                          /> : null}
                          <Route path='/board' component={() => <Board store={store} />} />
                          <Route path='/starwars' component={StarWars} />
                          <Route path='/router' component={BoardWithRouter} />
                        </Switch>
                </div>
              )
  }
}

const AppWithRouter = withRouter(App);

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

const BoardWithRouter = withRouter( ({history}) => {
  return <p>Hi</p>
})

export default AppWithRouter;
