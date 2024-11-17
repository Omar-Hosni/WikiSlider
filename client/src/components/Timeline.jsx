import React, { useState } from 'react';
import WikiCard from './WikiCard';
import { allData } from './data';

const Timeline = ({ selectedCategories, dateRange, setSelectedCard }) => {
  const [data] = useState(allData);

  const filteredData = data
    .filter((entry) => selectedCategories.includes(entry.category))
    .filter((entry) => entry.year >= dateRange[0] && entry.year <= dateRange[1]);

  return (
    <div className="timeline grid grid-cols-1 gap-4">
      {selectedCategories.map((category) => (
        <div key={category} className="category-row mb-4">
          <h2 className="text-lg font-bold">{category}</h2>
          <div className="category-timeline flex overflow-x-auto">
            {filteredData
              .filter((entry) => entry.category === category)
              .map((entry) => (
                <WikiCard 
                  key={entry.id} 
                  {...entry} 
                  onClick={() => setSelectedCard(entry)} // Pass card details on click
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
