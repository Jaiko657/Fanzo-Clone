import { useState } from 'react';
import './App.css';
import './customFont.css'
import Header from './Header';
import Ticket from './Ticket';

function App() {
  const [pubName, setPubName] = useState("Hatfield House");

  // Function to update the pub name
  const updatePubName = () => {
    const newName = prompt("Enter New Pub Name");
    if (newName) {
      setPubName(newName);
    }
  };

  return (
    <div className="App">
      <Header pubName={pubName} onClick={updatePubName}/>
      <Ticket pubName={pubName}/>
    </div>
  );
}

export default App;