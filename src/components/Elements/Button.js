
import React from 'react';
import { useNode } from '@craftjs/core';

export const Button = ({ text, onClick, className, ...props }) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <button
      ref={(ref) => connect(drag(ref))}
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

Button.craft = {
  props: {
    text: 'Click me',
    onClick: () => {},
    className: '',
  },
  rules: {
    canDrag: () => true,
  },
};

const ButtonSettings = () => {
  const { text, className, actions: { setProp } } = useNode((node) => ({
    text: node.data.props.text,
    className: node.data.props.className,
  }));

  return (
    <div>
      <div>
        <label>Button Text</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setProp((props) => (props.text = e.target.value))}
        />
      </div>
      <div>
        <label>Additional Classes</label>
        <input
          type="text"
          value={className}
          onChange={(e) => setProp((props) => (props.className = e.target.value))}
        />
      </div>
    </div>
  );
};

Button.craft = {
  ...Button.craft,
  related: {
    settings: ButtonSettings,
  },
};
