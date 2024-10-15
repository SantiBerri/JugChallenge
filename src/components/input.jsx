import React, { useState } from 'react';
import './input.css';

const JugInput = ({ onSolve }) => {
  const [jugX, setJugX] = useState('');
  const [jugY, setJugY] = useState('');
  const [targetZ, setTargetZ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSolve(parseInt(jugX), parseInt(jugY), parseInt(targetZ));
  };

  return (
    <div className="jug-input">
      <form onSubmit={handleSubmit}>
        <label>
          Jug X Capacity (Gallons):
          <input
            className='input'
            type="number"
            value={jugX}
            onChange={(e) => setJugX(e.target.value)}
            required
            min="1"
          />
        </label>
        <label>
          Jug Y Capacity (Gallons):
          <input
            className='input'
            type="number"
            value={jugY}
            onChange={(e) => setJugY(e.target.value)}
            required
            min="1"
          />
        </label>
        <label>
          Target Z Amount (Gallons):
          <input
            className='input'
            type="number"
            value={targetZ}
            onChange={(e) => setTargetZ(e.target.value)}
            required
            min="1"
          />
        </label>
        <button className="button" type="submit">Solve</button>
      </form>
    </div>
  );
};

export default JugInput;
