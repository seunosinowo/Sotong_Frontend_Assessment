import React, { useEffect, useState } from 'react';
import Table from './components/Table';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Table data={data} />
    </div>
  )
}

export default App;
