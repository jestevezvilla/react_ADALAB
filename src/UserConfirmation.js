import React from 'react';
import ReactDOM from 'react-dom';

export const getUserConfirmation = (message, callback) => {
  
  const modal = document.createElement('div')
  document.body.appendChild(modal)
  
  const withCleanup = (answer) => {
    ReactDOM.unmountComponentAtNode(modal)
    document.body.removeChild(modal)
    callback(answer)
  }
  
  ReactDOM.render(
    <UserConfirmation
      message={message}
      onCancel={() => withCleanup(false)}
      onConfirm={() => withCleanup(true)}
    />,
    modal
  )
}

const UserConfirmation = (props) => 
  <p className='modal'>
  {props.message}
  <button onClick={props.onCancel}>NO</button>
  <button onClick={props.onConfirm}>SI</button>
  </p>


export default getUserConfirmation;