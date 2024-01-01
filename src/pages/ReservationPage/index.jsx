import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import './style.css';

export const ReservationPage = () => {
  const {id} = useParams();
  const [reservation, setReservation] = useState(null);

  useEffect(() => {
    const fetchReservation = async () => {
      await fetch(`https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=${id}`)
        .then(response => response.json())
        .then(data => setReservation(data.results));
    };

    fetchReservation();
  }, []);

  return (
    <>
      <div className="reservation container">
        <h2>Your e-ticket No. {id}</h2>
        <div className="reservation__body">
          <div className="reservation__headings">
            <p>Journey date:</p>
            <p>Departure:</p>
            <p>Arrival:</p>
            <p>Seat:</p>
          </div>
          <div className="reservation__info">
            <p>{reservation ? reservation.date : null}</p>
            <p>{reservation ? (
                reservation.fromCity.name + ', ' + reservation.fromCity.time
              ) : null}</p>
            <p>{reservation ? (
                reservation.toCity.name + ', ' + reservation.toCity.time
              ) : null}</p>
            <p>{reservation ? reservation.seatNumber : null}</p>
          </div>
        </div>
      </div>
    </>
  );
};
