import { useState } from 'react';

import { JourneyDetail } from '../../components/JourneyDetail';
import { JourneyPicker } from '../../components/JourneyPicker';
import { SelectedSeat } from '../../components/SelectedSeat';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journey) => {
    setJourney(journey);
    console.log(journey);
  }

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey ? (
        <>
          {/* <p>Found connection ID {journey.journeyId}</p> */}
          <JourneyDetail journey={journey} />
          <SelectedSeat number={journey.autoSeat} />
        </>
      ) : null}
    </main>
  );
};
