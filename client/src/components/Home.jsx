
import React, { useEffect, useState } from 'react';
import CategorySidebar from './CategorySidebar';
import TimelineSlider from './TimelineSlider';
import Timeline from './Timeline';

const Home = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCard, setSelectedCard] = useState()
  const [dateRange, setDateRange] = useState([-10000, 2023]);


  useEffect(()=>{
    console.log("dayum", selectedCard)

  },[selectedCard])

  return (
    <div className="app flex">
      <CategorySidebar selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
      
      <div className="flex-grow p-10">
        <TimelineSlider dateRange={dateRange} setDateRange={setDateRange} />
        <Timeline selectedCategories={selectedCategories} dateRange={dateRange} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />

        {/* Modal */}
        {selectedCard && (
        <div className="modal fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal-content bg-white p-6 rounded shadow-lg flex flex-col items-center">
            <h2 className="text-xl font-bold text-center">{selectedCard.header}</h2>
            <img className="w-50 h-50 my-4 object-cover" src={selectedCard.picture} alt={selectedCard.header} />
            <p className="mt-4 text-center">{selectedCard.description}</p>
            <button 
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" 
              onClick={() => setSelectedCard(null)} // Close the modal
            >
              Close
            </button>
          </div>
        </div>
      )}

      </div>
    </div>
  );
};

export default Home;
