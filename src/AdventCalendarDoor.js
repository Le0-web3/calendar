import React, { useState } from 'react';
import './App.css';

const AdventCalendarDoor = ({ day, currentDay, doorText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDoorClick = () => {
    if (day <= currentDay) {
      setIsOpen(true);
    }
  //  console.log("isOpen : ", isOpen);
  };

  return (
    <div
      className={`advent-door ${isOpen ? 'open' : ''}`}
      onClick={handleDoorClick}
    >
            {isOpen ? doorText : day} {/* Affiche la chaîne de caractères si la porte est ouverte, sinon affiche le numéro de la porte */}
    </div>
  );
};

export default AdventCalendarDoor;
