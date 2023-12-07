import './App.css';
import back from './assets/imgs/back.jpg'
import share from './assets/imgs/share.png'

function Header(props) {
  return (
    <div className="Header">
        <img src={back} id='back'></img>
        <div>{props.pubName}</div>
        <img src={share}></img>
    </div>
  );
}

export default Header;