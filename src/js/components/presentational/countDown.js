import React from 'react';
import rabbits from './../../../images/rabbits.svg';

const CountDown = () => {
  const targetDate = new Date('2020-11-11T19:00:00.00');

  return (
    <div className="container">
      <div className="timer">
        {targetDate.toUTCString()}
      </div>
      <img
        src={rabbits}
        id="rabbits"
      />
    </div>
  );
}

export default CountDown;

