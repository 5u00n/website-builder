import React from 'react';
import { useNode } from '@craftjs/core';

export const Card = ({ content }) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <div ref={ref => connect(drag(ref))} className="bg-white shadow-md rounded-lg p-4">
      <p>{content}</p>
    </div>
  );
};

Card.craft = {
  props: {
    content: 'Card content goes here'
  },
  rules: {
    canDrag: () => true
  }
};
