import React from 'react';

const ValidationTable = ({ validationTable }) => (
  <table>
    <thead>
      <tr>
        <th className="table-header">Field</th>
        <th className="table-header">Validation Status</th>
      </tr>
    </thead>
    <tbody>
      {validationTable}
    </tbody>
  </table>
);

export default ValidationTable;