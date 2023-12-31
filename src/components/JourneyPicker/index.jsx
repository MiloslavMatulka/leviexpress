import React, { useEffect, useState } from 'react';
import './style.css';

const CityOptions = ({ cities }) => {
  return (
    <>
      <option value="">Choose</option>
      {cities.map((city) =>
        <option
          key={city.code}
          value={city.code}
        >
          {city.name}
        </option>
      )}
    </>
  );
};

const DatesOptions = ({ dates }) => {
  return (
    <>
      <option value="">Choose</option>
      {dates.map((date) =>
        <option
          key={date.dateBasic}
          value={date.dateBasic}
        >
          {date.dateCs}
        </option>)}
    </>
  );
};

export const JourneyPicker = ({ onJourneyChange }) => {
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);
  const [date, setDate] = useState('');
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');

  useEffect(() => {
    const fetchCities = async () => {
      await fetch('https://apps.kodim.cz/daweb/leviexpress/api/cities')
        .then(response => response.json())
        .then(data => setCities(data.results));
    };
    const fetchDates = async () => {
      await fetch('https://apps.kodim.cz/daweb/leviexpress/api/dates')
        .then(response => response.json())
        .then(data => setDates(data.results));
    }
      
    fetchCities();
    fetchDates();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const fetchConnection = async () => {
      await fetch(`https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`)
        .then(response => response.json())
        .then(data => onJourneyChange(data.results));
    }

    fetchConnection();
  }

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Where would you like to go?</h2>
      <div className="journey-picker__body">
        <form className="journey-picker__form" onSubmit={handleSubmit}>
          <label>
            <div className="journey-picker__label">From:</div>
            <select
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
            >
              <CityOptions cities={cities}/>
            </select>
          </label>
          <label>
            <div className="journey-picker__label">To:</div>
            <select
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
            >
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Date:</div>
            <select
              value={date}
              onChange={(e) => setDate(e.target.value)}
            >
              <DatesOptions dates={dates} />
            </select>
          </label>
          <div className="journey-picker__controls">
            <button 
              className="btn" 
              type="submit"
              disabled={date == '' || fromCity == '' || toCity == ''
                ? true
                : false
              }
            > 
              Find connection
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src="/map.svg" />
      </div>
    </div>
  );
};
