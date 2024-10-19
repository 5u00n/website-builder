
import React from 'react';
import { useNode } from '@craftjs/core';

export const Button = ({ text, onClick, className, backgroundColor, textColor, fontSize, padding, borderRadius, ...props }) => {
  const { connectors: { connect, drag } } = useNode();

  const buttonStyle = {
    backgroundColor,
    color: textColor,
    fontSize,
    padding,
    borderRadius,
  };

  return (
    <button
      ref={(ref) => connect(drag(ref))}
      onClick={onClick}
      className={`hover:opacity-80 transition-opacity ${className}`}
      style={buttonStyle}
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
    backgroundColor: '#3B82F6',
    textColor: '#FFFFFF',
    fontSize: '16px',
    padding: '8px 16px',
    borderRadius: '4px',
  },
  rules: {
    canDrag: () => true,
  },
};

const ButtonSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props
  }));

  return (
    <div className="space-y-4 p-4 bg-white rounded-lg shadow">
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Button Text</label>
        <input
          type="text"
          value={props.text}
          onChange={(e) => setProp((props) => (props.text = e.target.value))}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Background Color</label>
        <input
          type="color"
          value={props.backgroundColor}
          onChange={(e) => setProp((props) => (props.backgroundColor = e.target.value))}
          className="w-full h-10 rounded-md border border-gray-300 cursor-pointer"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Text Color</label>
        <input
          type="color"
          value={props.textColor}
          onChange={(e) => setProp((props) => (props.textColor = e.target.value))}
          className="w-full h-10 rounded-md border border-gray-300 cursor-pointer"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Font Size</label>
        <input
          type="text"
          value={props.fontSize}
          onChange={(e) => setProp((props) => (props.fontSize = e.target.value))}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Padding</label>
        <input
          type="text"
          value={props.padding}
          onChange={(e) => setProp((props) => (props.padding = e.target.value))}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Border Radius</label>
        <input
          type="text"
          value={props.borderRadius}
          onChange={(e) => setProp((props) => (props.borderRadius = e.target.value))}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Additional Classes</label>
        <input
          type="text"
          value={props.className}
          onChange={(e) => setProp((props) => (props.className = e.target.value))}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
