import { useState } from 'react';

import { JourneyDetail } from '../../components/JourneyDetail';
import { JourneyPicker } from '../../components/JourneyPicker';

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
        </>
      ) : null}
    </main>
  );
};
