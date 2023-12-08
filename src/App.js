import { useState } from 'react';
import './App.css';
import './customFont.css'
import Header from './Header';
import Ticket from './Ticket';
import Modal from './Modal';

function App() {
  const [pubName, setPubName] = useState("Hatfield House");
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState("CIDER");

  // Function to update the pub name
  const updatePubName = () => {
    const newName = prompt("Enter New Pub Name");
    if (newName) {
      setPubName(newName);
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <div className="App">
      <Header pubName={pubName} onClick={updatePubName}/>
      <Modal showModal={showModal} toggleModal={toggleModal} type={type}/>
      <Ticket pubName={pubName} setType={setType} type={type} onClick={toggleModal}/>
    </div>
  );
}

export default App;