import React, { useEffect, useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { generateCityBarData } from './FakeData'; // Assuming this generates data with city statistics
import '../pages/homePage/dashboard.css'; 

const BarChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const generatedData = generateCityBarData(); // Get the city bar data
    setData(generatedData); // Set the data in the state
  }, []);

  // Debugging to check if data is being generated properly
  useEffect(() => {
    console.log('Generated city bar data:', data);
  }, [data]);

  const cities = [
    { name: 'Lagos', color: '#ff0000' }, // Replace with your desired colors
    { name: 'Benin', color: '#00ff00' },
    { name: 'Abuja', color: '#0000ff' },
    { name: 'Niger', color: '#ffff00' },
  ];

  return (
    <div className="barChartContainer">
      <div  style={{marginLeft:"10px"}}>No. of Orders by City</div>
      
      <ResponsiveBar
        data={data}
        keys={['Lagos', 'Benin', 'Abuja', 'Niger']} // Specify the city keys
        indexBy="month" // Use month as the index
        margin={{ top: 20, right: 60, bottom: 50, left: 90 }}
        padding={0.3} // Adjusted padding for spacing
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }} // You can customize colors if needed
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}

        // Set x-axis properties with white fill for text
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Months',
          legendPosition: 'middle',
          legendOffset: 32,
          tickTextColor: '#ffffff', // White fill for x-axis text
        }}

        // Set y-axis properties with white fill for text
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Value',
          legendPosition: 'middle',
          legendOffset: -40,
          tickTextColor: '#ffffff', // White fill for y-axis text
        }}

        enableLabel={false} // Disable labels inside bars
        
        tooltip={({ id, value }) => (
          <strong className="tooltipText"> {/* White text in tooltip */}
            {id}: {value}
          </strong>
        )}

        enableGridX={false}
        enableGridY={false}
        groupMode="grouped" // This allows multiple bars per category
        theme={{
          axis: {
            ticks: {
              text: {
                fill: '#ffffff', // White fill for both x-axis and y-axis
              },
            },
            legend: {
              text: {
                fill: '#ffffff', // White fill for axis legends
              },
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
