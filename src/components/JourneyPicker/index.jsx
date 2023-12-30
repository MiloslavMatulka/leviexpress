import React, { useEffect, useState } from 'react';
import './style.css';

export const JourneyPicker = ({ onJourneyChange }) => {
  const [date, setDate] = useState('');
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('From city: ' + fromCity +
        ', to city: ' + toCity +
        ', date: ' + date);
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
              <option value="">Choose</option>
              <option value="city01">City 01</option>
              <option value="city02">City 02</option>
              <option value="city03">City 03</option>
              <option value="city04">City 04</option>
              <option value="city05">City 05</option>
            </select>
          </label>
          <label>
            <div className="journey-picker__label">To:</div>
            <select
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
            >
              <option value="">Choose</option>
              <option value="city01">City 01</option>
              <option value="city02">City 02</option>
              <option value="city03">City 03</option>
              <option value="city04">City 04</option>
              <option value="city05">City 05</option>
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
