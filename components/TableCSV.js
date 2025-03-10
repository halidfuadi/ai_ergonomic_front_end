"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TableCSV = ({csv_url}) => {
  const [tableData, setTableData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(csv_url);
        const rows = response.data.split('\n').map(row => row.split(','));
        // Round decimal numbers to one decimal place
        const roundedData = rows.map(row =>
          row.map(cell => (isNaN(cell) ? cell : Number(cell).toFixed(1)))
        );
        
        setTableData(roundedData);
      } catch (error) {
        console.error('Error fetching table data:', error);
        setTableData([]); // Set empty array in case of an error
      }
    };

    fetchData();
  }, []);

  return (
    <div className="border">
      <h2 className="text-2xl font-bold mb-4 px-2 py-2">Table Data</h2>
      <div className="max-h-64 overflow-y-scroll">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-red-500">
              <th className="py-2 px-4 border-b">ARM LEFT</th>
              <th className="py-2 px-4 border-b">ARM RIGHT</th>
              <th className="py-2 px-4 border-b">BACKPOSE LEFT</th>
              <th className="py-2 px-4 border-b">BACKPOSE RIGHT</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((rowData, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
              >
                {rowData.map((cellData, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`py-2 px-4 border-b ${
                      Number(cellData) > 90
                        ? 'text-red-500'
                        : Number(cellData) > 60
                        ? 'text-yellow-500'
                        : 'text-gray-800'
                    }`}
                  >
                    {cellData}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableCSV;
