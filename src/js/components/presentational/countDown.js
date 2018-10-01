import React from 'react';

const CountDown = () => {
  const targetDate = new Date('2020-11-11T19:00:00.00');

  return (
    <div className="timer">
      {targetDate.toUTCString()}
    </div>
  );
}

export default CountDown;

