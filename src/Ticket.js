import Timer from './Timer'

function Ticket({ pubName , type, setType, onClick }) {

  // Function to update the pub name
  const toggle = () => {
    if (type === 'CIDER') {
      setType('LAGER');
    } else {
      setType('CIDER');
    }
  };

  return (
    <div className="Ticket">
      <div id="voucher">VOUCHER</div>
      <div id="promo" onClick={toggle}>FREE PINT OF GUINESS</div>
      <div id="location">At {pubName}</div>

      <Timer />
      <div id='claimed-text'>Once claimed, tap "Offer Received"</div>
      <div id='button' onClick={onClick}>Offer Received</div>
    </div>
  );
}

export default Ticket;
