import React, { Component } from 'react';

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

export default Search;
