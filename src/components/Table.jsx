import React from 'react';

function Table({ data }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Getting API</h2>

      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="py-3 px-6 border border-gray-300 text-center">Id</th>
              <th className="py-3 px-6 border border-gray-300 text-center">Name</th>
              <th className="py-3 px-6 border border-gray-300 text-center">Colour</th>
              <th className="py-3 px-6 border border-gray-300 text-center">Capacity</th>
              <th className="py-3 px-6 border border-gray-300 text-center">Generation</th>
              <th className="py-3 px-6 border border-gray-300 text-center">Screen size</th>
            </tr>
          </thead>
          <tbody>
            {data ? data.map(item => (
              <tr key={item.id} className="text-center border-b border-gray-300">
                <td className="py-3 px-6 border border-gray-300">{item.id}</td>
                <td className="py-3 px-6 border border-gray-300">{item.name}</td>
                <td className="py-3 px-6 border border-gray-300">
                  {item.data && item.data.color ? item.data.color : 'N/A'}
                </td>
                <td className="py-3 px-6 border border-gray-300">
                  {item.data && item.data.capacity ? item.data.capacity : 'N/A'}
                </td>
                <td className="py-3 px-6 border border-gray-300">
                  {item.data && item.data.generation ? item.data.generation : 'N/A'}
                </td>
                <td className="py-3 px-6 border border-gray-300">
                  {item.data && item.data.screenSize ? item.data.screenSize : 'N/A'}
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="6" className="py-3 px-6 border border-gray-300 text-center">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
