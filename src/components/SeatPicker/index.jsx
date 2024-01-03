import {SeatRow} from '../SeatRow';
import './style.css';

export const SeatPicker = ({seats, selectedSeat, onSeatSelected}) => {
  return (
    <div className="seat-picker container">
      <h2>Choose a seat</h2>
      <div className="seats">
        {seats.map((row, index) => {
          return (
            <SeatRow
              key={index}
              row={row}
              rowSelectedSeat={selectedSeat}
              onSeatSelected={onSeatSelected}
            />
          );
        })}
      </div>
    </div>
  );
};
