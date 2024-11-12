import React, { useState } from 'react';

const WikiCard = ({ picture, header, description, year, category }) => {
  const [showDeck, setShowDeck] = useState(false);

  return (
    <div onClick={() => setShowDeck(!showDeck)} className="wiki-card border p-4 m-2 rounded-lg w-32 h-40 cursor-pointer">
      {showDeck ? (
        <div className="deck-view">
          {/* Render more details or related cards */}
        </div>
      ) : (
        <>
          <img src={picture} alt={header} className="w-full h-20 object-cover" />
          <h3 className="text-sm font-bold mt-2">{header}</h3>
          <p className="text-xs">{description}</p>
          <p className="text-xs text-gray-500">{year}</p>
        </>
      )}
    </div>
  );
};

export default WikiCard;
