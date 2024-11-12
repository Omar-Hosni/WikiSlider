
import React, { useState } from 'react';
import CategorySidebar from './CategorySidebar';
import TimelineSlider from './TimelineSlider';
import Timeline from './Timeline';

const Home = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [dateRange, setDateRange] = useState([1950, 2023]);

  return (
    <div className="app flex">
      <CategorySidebar selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
      <div className="flex-grow p-6">
        <TimelineSlider dateRange={dateRange} setDateRange={setDateRange} />
        <Timeline selectedCategories={selectedCategories} dateRange={dateRange} />
      </div>
    </div>
  );
};

export default Home;
