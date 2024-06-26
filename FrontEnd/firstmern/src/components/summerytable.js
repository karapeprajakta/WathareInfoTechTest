// frontend/src/components/SummaryTable.js
import React from 'react';

const SummaryTable = ({ summary }) => {
  return (
    <div>
      <h2>Summary Table</h2>
      <table>
        <thead>
          <tr>
            <th>Statistic</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Number of 0s</td>
            <td>{summary.zeros}</td>
          </tr>
          <tr>
            <td>Number of 1s</td>
            <td>{summary.ones}</td>
          </tr>
          <tr>
            <td>Continuous 0s Variations</td>
            <td>{summary.continuousZeros}</td>
          </tr>
          <tr>
            <td>Continuous 1s Variations</td>
            <td>{summary.continuousOnes}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SummaryTable;
