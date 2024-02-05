import React from 'react';
import './App.css'
import claim from './assets/imgs/claim.png'

const Modal = ({ showModal, toggleModal, type }) => {
  if (!showModal) return null;

  return (
    <div style={{
      position: 'fixed', // Fixed position to cover the whole screen
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      padding: '2vw',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
    }}>
      <div style={{
        // backgroundColor: '#152C12',
        height: '50vh',
        width: '80vw',
        marginRight: '2vw',
        marginLeft: '2vw',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <img src={claim} style={{
          width: '98vw',
          height: '47vh'
        }}></img>
      </div>
    </div>
  );
};

export default Modal;
