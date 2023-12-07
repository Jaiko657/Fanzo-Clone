import Timer from './Timer'

function Ticket(props) {
  return (
    <div className="Ticket">
      <div id="voucher">VOUCHER</div>
      <div id="promo">FREE PINT OF ROCKSHORE CIDER</div>
      <div id="location">At {props.pubName}</div>

      <Timer />
      <div id='claimed-text'>Once claimed, tap "Offer Received"</div>
      <div id='button'>Offer Received</div>
    </div>
  );
}

export default Ticket;
