import Timer from './Timer'
import { useState } from 'react';

function Ticket(props) {
  const [type, setType] = useState("CIDER");

  // Function to update the pub name
  const toggle = () => {
    if (type == 'CIDER') {
      setType('LAGER');
    } else {
      setType('CIDER');
    }
  };

  return (
    <div className="Ticket">
      <div id="voucher">VOUCHER</div>
      <div id="promo" onClick={toggle}>FREE PINT OF ROCKSHORE {type}</div>
      <div id="location">At {props.pubName}</div>

      <Timer />
      <div id='claimed-text'>Once claimed, tap "Offer Received"</div>
      <div id='button'>Offer Received</div>
    </div>
  );
}

export default Ticket;
