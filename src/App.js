import React, { Component } from 'react';
import { Switch, Prompt, Redirect, Route, Link, withRouter } from 'react-router-dom'

//TODO: Importar Promises con namespace

import './App.css';
import StarWars from './StarWars';
import Board, * as withR from './Board';

const store = {
  board: {
    squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    completed: false
  },
  username: '',
  records: [123, 12, 323, 2123]
}

class App extends Component {
  constructor() {
    super();
    this.state = { location: '' }
  }
  componentDidMount() {
    this.props.history.listen((location) => {
      if (location.pathname !== '') {
        this.setState({ location: location.pathname })
      }
    }
    );
  }

  formIsHalfFilledOut() {
    return true
  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to="/board">Board</Link></li>
          <li><Link to="/starwars">StarWars</Link></li>
          <li><Link to="/router">Router</Link></li>
        </ul>

        <Prompt
          when={this.formIsHalfFilledOut()}
          message="Are you sure you want to leave?"
        />
        <Route path='/board' component={() => <Board store={store} />} />
        <Route path='/starwars' component={StarWars} />
        <Route path='/router' component={withR.BoardWithRouter} />

      </div>
    )
  }
}

const AppWithRouter = withRouter(App);



export default AppWithRouter;
