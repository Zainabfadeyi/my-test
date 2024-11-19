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

 

  return (
    <div className="barChartContainer">
      <div  style={{marginLeft:"10px"}}>No. of Orders by City</div>
      <div className="barWrapper">
      <ResponsiveBar
        data={data}
        keys={['Lagos', 'Benin', 'Abuja', 'Niger']} // Specify the city keys
        indexBy="month" // Use month as the index
        margin={{ top: 20, right: 30, bottom: 50, left: 50 }}
        padding={0.3} // Adjusted padding for spacing
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }} // You can customize colors if needed
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}

        // Set x-axis properties with white fill for text
     

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
    </div>
  );
};

export default BarChart;
