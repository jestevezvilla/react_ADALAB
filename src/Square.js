
import React, { Component } from 'react';

const Square = (props) => {
  return (<button onClick={props.onSquareClick}>{props.children}</button>)
};

export default Square;