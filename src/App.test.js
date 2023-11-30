import React, { useState } from 'react';

const AdventCalendar = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();

  const [openDoors, setOpenDoors] = useState([]);
  
  const handleDoorClick = (day) => {
    if (day <= currentDay) {
      if (!openDoors.includes(day)) {
        setOpenDoors([...openDoors, day]);
      }
    }
  };

  return (
    <div className="advent-calendar">
      <h1>Calendrier de l'Avent</h1>
      <div className="door-container">
        {[...Array(24).keys()].map((day) => (
          <div
            key={day}
            className={`door ${openDoors.includes(day + 1) ? 'open' : ''}`}
            onClick={() => handleDoorClick(day + 1)}
          >
            {day + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdventCalendar;
