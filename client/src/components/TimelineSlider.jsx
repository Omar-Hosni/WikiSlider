import React from 'react';
import ReactSlider from 'react-slider';

const TimelineSlider = ({ dateRange, setDateRange }) => {
  const handleSliderChange = (values) => {
    setDateRange(values);
  };

  return (
    <div className="my-4">
      <h3 className="font-semibold mb-2">Select Date Range</h3>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="slider-thumb"
        trackClassName="slider-track"
        min={5}
        max={2025}
        value={dateRange}
        onChange={handleSliderChange}
        pearling
        minDistance={1}
      />
      <div className="flex justify-between mt-2 text-sm">
        <span>{dateRange[0]}</span>
        <span>{dateRange[1]}</span>
      </div>
    </div>
  );
};

export default TimelineSlider;
