
import React, { Component } from 'react';

// Principios de programación funcional

// function suma(a, b){
//   return function(b){
//     return a+b;
//   }
// }
// var add = suma(6);
// console.log(add(7));
  

// function match(what, str){
//   return function(str){
//      return str.match(what);
//   }
// } 
// var hasNumberOne = match(/1+/g);
// console.log(hasNumberOne('pe1rro1'));

const withClickable = (WrappedComponent) => class Counter extends Component {
  constructor(){
    super();
    this.state = {text: 'Click me!'};
    this.onComponentClick = this.onComponentClick.bind(this);
  }
  onComponentClick(e){
    alert(e.target);
  }
  render(){
    const props = this.state;
    return (<WrappedComponent onComponentClick={this.onComponentClick} {...props}/>)
  }
}

//Convertir en stateless
class Button extends Component {
  render(){
    console.log(this.props);
    return(<button onClick={this.props.onComponentClick}>{this.props.text}</button>)
  }
}

class FalseButton extends Component {
  render(){
    return(<p onClick={this.props.onComponentClick}>{this.props.text}</p>)
  }
}

const HOC = withClickable(Button);

export default HOC;

//export const HOC = withClickable(Button);
