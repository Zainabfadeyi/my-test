import React from 'react';
import Piechart from '../../component/Piechart';
import LineChart from '../../component/LineChart';
import BarChart from '../../component/BarChart';
import Form from '../../component/Form';
import './dashboard.css'; // Import the CSS file

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="charts-container">
        <div className="charts-row">
          <div className="chart-item">
            <LineChart />
          </div>
          <div className="chart-pie-item">
            <Piechart />
          </div>
        </div>
        <div className="bar-chart-container">
          <BarChart />
        </div>
      </div>
      <div className="form-container">
        <Form />
      </div>
    </div>
  );
};

export default Dashboard;
