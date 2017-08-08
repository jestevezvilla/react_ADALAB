
import React, { Component } from 'react';

class ControlledForm extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      avatar: ''
    }
  }
  
  updateUsername = (e) => {

    this.setState({
      username: this.refs.username.value,
      avatar: this.refs.avatar.value
    })
  }

  // this.updateUsername.bind(this)
  // updateUsername(e){
  //   this.setState({
  //     username: e.target.value,
  //   })
  // }
  handleSubmit = () => {}
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>{this.props.title}</h2>
        
        <p>{this.state.username}</p>
        <input
          type='text'
          ref='username'
          value={this.state.username}
          onChange={this.updateUsername} />

        <p>{this.state.avatar}</p>
        <input
          type='text'
          ref='avatar'
          value={this.state.avatar}
          onChange={this.updateUsername} />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

ControlledForm.propTypes = {
  title: (props, propName, component) =>
    (props[propName].length > 10) ? new Error(`${propName} to long`) : null
  
}

// ControlledForm.propTypes = {
//   title: React.PropTypes.string
// }

ControlledForm.defaultProps = {
  title: 'Default title'
}

export default ControlledForm;