import React, { useEffect } from 'react';
import { ResponsivePie } from '@nivo/pie';
import { generateCityData } from './FakeData'; // Ensure this function returns the correct data structure
import '../pages/homePage/dashboard.css';

const PieChart = () => {
  const data = generateCityData(); // Get the city data

  // Debugging to check if data is being generated properly
  useEffect(() => {
    console.log('Generated city data:', data);
  }, [data]);

  // Custom legend to show the city names, colors, and rounded percentages
  const renderLegend = () => {
    return (
      <div className="pieChartLegend">
        {data.map((city, index) => (
          <div key={index} className="legendPieItem">
            <div
              className="legendPieColor"
              style={{ backgroundColor: city.color }} // Use city-specific color
            ></div>
            <span>{`${city.id}: ${Math.round(city.value)}%`}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="pieChartContainer">
      <div style={{marginBottom:"10px", color:"white"}}>Revenue by City</div>
      {/* Custom Legend */}
      {renderLegend()}

      <div className="pieChart">
        <ResponsivePie
          data={data.map(city => ({
            id: city.id,
            label: city.id,
            value: Math.round(city.value), // Round the value to whole numbers
            color: city.color, // Ensure the color is retained in data
          }))}
          margin={{ top: 20, right: 80, bottom: 0, left: 80 }}
          innerRadius={0.6} // Set inner radius for a donut chart
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          colors={{ scheme: 'nivo' }} // Use custom colors directly from data
          borderWidth={1}
          borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
          radialLabelsSkipAngle={100} // Hide radial labels entirely
          radialLabelsLinkLineLength={0} // Remove lines connecting labels to slices
          radialLabelsLinkOffset={0} // Set link offset to zero to prevent any additional spacing
          sliceLabelsSkipAngle={100} // Hide slice labels entirely
          enableArcLabels={false}
          enableArcLinkLabels={false}
          theme={{
            labels: {
              text: {
                fill: '#ffffff', // Set text color for labels to white
              },
            },
            legends: {
              text: {
                fill: '#ffffff', // Set text color for legends to white
              },
            },
          }}
        />

        {/* Add text in the middle of the pie chart */}
        <div style={{color:"white"}} className="pieChartLabel">100m</div>
      </div>
    </div>
  );
};

export default PieChart;
