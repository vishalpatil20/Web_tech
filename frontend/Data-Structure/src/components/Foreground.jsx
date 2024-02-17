import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

function Foreground() {
  const ref = React.useRef(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace the following URL with your actual backend endpoint
        const response = await axios.get('http://localhost:3001/api/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
