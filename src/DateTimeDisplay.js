// to set the datetime to vertical
import React from 'react';

const DateTimeDisplay = ({ dateTime, isHorizontal }) => {
  return (
    <div className={`date-time-display ${isHorizontal ? 'horizontal' : 'vertical'}`}>
      <div className="box">
        <div>Date: {dateTime.date}</div>
      </div>
      <div className="box">
        <div>Time: {dateTime.time}</div>
      </div>
    </div>
  );
};

export default DateTimeDisplay;