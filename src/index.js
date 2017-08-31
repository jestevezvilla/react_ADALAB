import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import AppWithRouter from './App';
import getUserConfirmation from './UserConfirmation'

ReactDOM.render(
  (<Router getUserConfirmation={getUserConfirmation}>
    <AppWithRouter />
   </Router>),document.getElementById('root'));
