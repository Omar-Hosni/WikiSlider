import React from 'react';

const WikiCard = ({ picture, header, year, onClick }) => {
  return (
    <div
      onClick={onClick} // Trigger modal opening in Home.jsx
      className="p-2 border m-2 rounded-lg w-40 h-50 cursor-pointer hover:shadow-lg transition-shadow"
    >
      <img 
        src={picture} 
        alt={header} 
        className="w-full h-20 object-cover rounded-t-lg" 
      />
      <p className="text-xs font-bold mt-2">{header}</p>
      <p className="text-xs text-gray-500">{year}</p>
    </div>
  );
};

export default WikiCard;
