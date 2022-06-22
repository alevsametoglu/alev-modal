import React, { useState } from 'react';
import { Modal } from '../lib/components/Modal';
import logo from './logo.png';

export const App = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(true)}>show model</button>
      {show ? 'show' : 'close'}
      <Modal
        image={logo}
        width='400px'
        onClose={() => {
          setShow(false);
          console.log('close event fired');
        }}
        show={show}
        title='Succes'
        text='New employe has been created'
      ></Modal>
    </>
  );
};
