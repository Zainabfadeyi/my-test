import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { generateChartData } from './FakeData'; // Adjust the import path accordingly
import '../pages/homePage/dashboard.css';

const LineChart = () => {
  const chartData = generateChartData();

  return (
    <div className="lineChartContainer">
      <div style={{marginBottom:"10px"}} className="lineChartLabel">User SignUps</div>
      <div className="chartWrapper">
      <ResponsiveLine
        data={chartData}
        margin={{ top: 30, right: 20, bottom: 30, left: 40 }} // Adjust top margin to fit labels
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 0, // Start from 0
          max: 400, // Set maximum to 400
          stacked: false,
          reverse: false,
        }}
        
        axisTop={null}
        axisRight={null}
       
        enablePoints={true}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        enableArea={false}
        useMesh={true}
        enableGridX={false} // Disable vertical grid lines
        enableGridY={false} // Disable horizontal grid lines
        legends={[
          {
            anchor: 'top', // Position the legend above the chart
            direction: 'row',
            justify: false,
            translateY: -20, // Adjust position above the chart
            translateX: 0,
            itemsSpacing: 20,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
            itemTextColor: '#ffffff', // Text color for legend items
          },
        ]}
        theme={{
          textColor: '#ffffff', // Set all text to white
          axis: {
            ticks: {
              line: {
                stroke: '#ffffff', // Tick marks in white
              },
              text: {
                fill: '#ffffff', // Tick text in white
              },
            },
          },
         
        }}
      
        
      />
      </div>
      
    </div>
  );
};

export default LineChart;
