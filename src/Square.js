//TODO: Cambiar a Semantic UI


import React from 'react';

const Square = (props) => {
  return (<button onClick={props.onSquareClick}>{props.children}</button>)
};

export default Square;