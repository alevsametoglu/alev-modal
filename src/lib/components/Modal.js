import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.css';
/**
 * @description Modal
 *
 * @param   {string}         props.title [title of message]
 * @param   {width}          props.width [width of modal]
 * @param   {onClose}        props.onClose [close modal]
 * @returns {Reactnode}  jsx injected in DOM
 */
export const Modal = ({ show, title, width, image, onClose, text }) => {
  const modal = (
    <div className='modal'>
      <div className='modal-container' style={{ width: width }}>
        {image && <img className='container-image' src={image}></img>}
        <h3 className='modal-title'>{title}!!!</h3>
        <p>{text}</p>
        <button
          className='close-button'
          onClick={() => {
            onClose();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );

  return show ? ReactDOM.createPortal(modal, document.body) : null;
};

/**
 * Modal Proptypes
 */

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  width: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  show: PropTypes.string.isRequired,
  image: PropTypes.string
};
