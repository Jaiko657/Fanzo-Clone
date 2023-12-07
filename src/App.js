import './App.css';
import './customFont.css'
import Header from './Header';
import Ticket from './Ticket';

function App() {
  return (
    <div className="App">
      <Header pubName="Hatfield House"/>
      <Ticket pubName="Hatfield House"/>
    </div>
  );
}

export default App;