#alev-modal

alev-modal is a modal library, is wrritten in Javascript. It is a minimal library without any other dependencies, while being performant and straightforward to use, requiring developers to write fewer lines of code than other form libraries.

A library of React components created using <a href="https://www.npmjs.com/package/create-react-library">create-react-library</a>.

# Demo

![Demo text](demo.png)

# Installation

Install alev-modal with npm

```javascript
npm i alev-modal
```

# Example

```javascript
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
```
