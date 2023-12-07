import './App.css';
import back from './assets/imgs/back.jpg'
import share from './assets/imgs/share.png'

function Header({pubName, onClick}) {
  return (
    <div className="Header" onClick={onClick}>
        <img src={back} id='back'></img>
        <div>{pubName}</div>
        <img src={share}></img>
    </div>
  );
}

export default Header;