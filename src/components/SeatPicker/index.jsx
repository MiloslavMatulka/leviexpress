import {SeatRow} from '../SeatRow';
import './style.css';

export const SeatPicker = ({seats}) => {
  return (
    <div className="seat-picker container">
      <h2>Choose a seat</h2>
      <div className="seats">
        {seats.map((row, index) => <SeatRow key={index} row={row} />)}
      </div>
    </div>
  );
};
