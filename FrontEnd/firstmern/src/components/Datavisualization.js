// frontend/src/components/DataVisualization.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const DataVisualization = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.timestamp),
    datasets: [
      {
        label: 'Sample Data',
        data: data.map(item => item.value),
        backgroundColor: data.map(item => item.value === 0 ? 'yellow' : item.value === 1 ? 'green' : 'red'),
        borderColor: 'black',
        borderWidth: 1
      }
    ]
  };

  const options = {
    scales: {
      xAxes: [{
        type: 'time',
        time: {
          displayFormats: {
            minute: 'HH:mm'
          }
        },
        scaleLabel: {
          display: true,
          labelString: 'Time'
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Value'
        }
      }]
    }
  };

  return (
    <div>
      <h2>Data Visualization</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default DataVisualization;
