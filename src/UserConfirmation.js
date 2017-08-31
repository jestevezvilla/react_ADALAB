import React from 'react';
import ReactDOM from 'react-dom';
import glamorous from 'glamorous';

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
  <Modal className='modal'>
    {props.message}
    <button onClick={props.onCancel}>NO</button>
    <button onClick={props.onConfirm}>SI</button>
  </Modal>

const Modal = glamorous.div({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.2)'
  });

  // const Modal = glamorous(UserConfirmation)({
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   width: '100%',
  //   height: '100%',
  //   backgroundColor: 'rgba(0,0,0,.2)'
  // });


export default getUserConfirmation;