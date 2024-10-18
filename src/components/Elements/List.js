import React from 'react';
import { useNode } from '@craftjs/core';

export const List = ({ items }) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <ul ref={ref => connect(drag(ref))} className="list-disc pl-5">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

List.craft = {
  props: {
    items: ['Item 1', 'Item 2', 'Item 3']
  },
  rules: {
    canDrag: () => true
  }
};
