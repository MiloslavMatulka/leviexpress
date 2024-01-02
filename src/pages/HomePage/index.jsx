import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { JourneyDetail } from '../../components/JourneyDetail';
import { JourneyPicker } from '../../components/JourneyPicker';
import { SeatPicker } from '../../components/SeatPicker';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);
  const navigate = useNavigate();
  const [reservation, setReservation] = useState(null);

  useEffect(() => {
    reservation ? console.log(reservation.reservationId) : null;
    reservation
      ? navigate(`/reservation/${reservation.reservationId}`)
      : null;
  }, [reservation]);

  const handleBuy = () => {
    console.log('Booking a ticket');
    const fetchReservation = async () => {
      await fetch('https://apps.kodim.cz/daweb/leviexpress/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'create',
          seat: journey.autoSeat,
          journeyId: journey.journeyId,
        }),
      }).then(response => response.json())
        .then (data => setReservation(data.results));
    };

    fetchReservation();
  };

  const handleJourneyChange = (journey) => {
    setJourney(journey);
    console.log(journey);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey ? (
        <>
          {/* <p>Found connection ID {journey.journeyId}</p> */}
          <JourneyDetail journey={journey} />
          <SeatPicker seats={journey.seats} />
          <div className="controls container">
            <button
              className="btn btn--big"
              type="button"
              onClick={handleBuy}
            >
              Book
            </button>
          </div>
        </>
      ) : null}
    </main>
  );
};
