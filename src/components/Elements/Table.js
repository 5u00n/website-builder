import React from 'react';
import { useNode } from '@craftjs/core';

export const Table = ({ rows }) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <table ref={ref => connect(drag(ref))} className="table-auto w-full">
      <thead>
        <tr>
          {rows && rows[0]?.map((header, index) => (
            <th key={index} className="px-4 py-2">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {(Array.isArray(rows) ? rows.slice(1) : []).map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="border px-4 py-2">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.craft = {
  props: {
    rows: [
      ['Header 1', 'Header 2', 'Header 3'],
      ['Row 1 Col 1', 'Row 1 Col 2', 'Row 1 Col 3'],
      ['Row 2 Col 1', 'Row 2 Col 2', 'Row 2 Col 3']
    ]
  },
  rules: {
    canDrag: () => true
  }
};
