import React, { Component } from 'react';

//TODO: Pasar counter como prop
class Counter extends Component {
  constructor() {
    super();
    this.state = {counter: 0};
  }

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    clearInterval(this.running);
    this.running = null;
  }
  

  start() {
    //let counter = 0
    this.running =
      setInterval(() =>
        //this.setState({counter: counter++}),
        //this.setState( (prevState, props) => ({counter: prevState.counter + 1})),
        this.setState(function(prev, props) {
          return {
            counter: prev.counter + props.increment
          };
        }),
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

export default Counter;