import React from 'react';
import { useNode } from '@craftjs/core';

export const Header = ({ text }) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <h1 ref={ref => connect(drag(ref))} className="text-2xl font-bold">
      {text}
    </h1>
  );
};

Header.craft = {
  props: {
    text: 'Header Text'
  },
  rules: {
    canDrag: () => true
  }
};
