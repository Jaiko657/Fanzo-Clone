import React from 'react';
import './App.css'

const Modal = ({ showModal, toggleModal, type }) => {
  if (!showModal) return null;

  return (
    <div style={{
      position: 'fixed', // Fixed position to cover the whole screen
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
    }}>
      <div style={{
        backgroundColor: '#152C12',
        height: '50vh',
        width: '90vw',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div id="voucher">You've now claimed your</div>
        <div id="promo">FREE PINT OF ROCKSHORE {type}</div>
        <button onClick={toggleModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
