import React from 'react';

const categories = ["Geography", "Physics", "Chemistry", "Mathematics", "Technology", "Energy", "Food", "Medicine"];

const CategorySidebar = ({ selectedCategories, setSelectedCategories }) => {
    
  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((cat) => cat !== category) : [...prev, category]
    );
  };

  return (
    <div className="w-64 p-4 bg-gray-100 border-r">
      <h2 className="font-bold mb-4">Categories</h2>
      {categories.map((category) => (
        <label key={category} className="block mb-2">
          <input
            type="checkbox"
            checked={selectedCategories.includes(category)}
            onChange={() => toggleCategory(category)}
            className="mr-2"
          />
          {category}
        </label>
      ))}
    </div>
  );
};

export default CategorySidebar;
