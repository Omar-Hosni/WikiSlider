import React, {useState, useEffect} from 'react';
import WikiCard from './WikiCard';


const Timeline = ({ selectedCategories, dateRange }) => {
  
  const [data, setData] = useState([])

  const getRandomCategory = ()=>{
    const categories = ["Geography", "Physics", "Chemistry", "Mathematics", "Technology", "Energy", "Food", "Medicine"];
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
  }

  const generateData = () => {
    const newData = [];
    for (let i = 1; i < 500; i++) {
      const temp = {
        id: i,
        picture: 'https://th.bing.com/th/id/OIP.CP66Qh9DqL_66ESN6Hzu6wHaE7?rs=1&pid=ImgDetMain',
        header: `Sample ${i}`,
        description: `Description ${i}`,
        year: Math.floor(Math.random() * (2024 - 5 + 1)) + 5,
        category: getRandomCategory(),
      };
      newData.push(temp);
    }
    setData(newData);
  };

  useEffect(() => {
    generateData();
  }, []);

  let filteredData = null
  if(data.length > 1){
    filteredData = data // Assuming `data` is your array of wiki entries
    .filter((entry) => selectedCategories.includes(entry.category))
    .filter((entry) => entry.year >= dateRange[0] && entry.year <= dateRange[1]);
  }
  
  return (
    <div className="timeline grid grid-cols-1 gap-4">
      {selectedCategories.map((category) => (
        <div key={category} className="category-row mb-4">
          <h2 className="text-lg font-bold">{category}</h2>
          <div className="category-timeline flex overflow-x-auto">
            {filteredData
              .filter((entry) => entry.category === category)
              .map((entry) => (
                <WikiCard key={entry.id} {...entry} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
