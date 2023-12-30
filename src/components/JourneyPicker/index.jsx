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

export const JourneyPicker = ({ onJourneyChange }) => {
  const [cities, setCities] = useState([]);
  const [date, setDate] = useState('');
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');

  useEffect(() => {
    const fetchCities = async () => {
      await fetch('https://apps.kodim.cz/daweb/leviexpress/api/cities')
      .then(response => response.json())
      .then(data => setCities(data.results));
    };
      
    fetchCities();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      'From: ' + fromCity +
      '; To: ' + toCity +
      '; Date: ' + date
    );
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
              <option value="">Vyberte</option>
              <option value="date01">Date 01</option>
              <option value="date02">Date 02</option>
              <option value="date03">Date 03</option>
              <option value="date04">Date 04</option>
              <option value="date05">Date 05</option>
            </select>
          </label>
          <div className="journey-picker__controls">
            <button 
              className="btn" 
              type="submit"
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
