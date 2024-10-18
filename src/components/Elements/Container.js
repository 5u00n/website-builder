import React from 'react';
import { useNode } from '@craftjs/core';

export const Container = ({ children }) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <div ref={ref => connect(drag(ref))} className="p-4 border border-gray-300 rounded-lg">
      {children}
    </div>
  );
};

Container.craft = {
  props: {
    children: []
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true
  }
};

export default Container;
