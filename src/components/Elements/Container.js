import React from 'react';
import { useNode } from '@craftjs/core';

export const Container = ({ background, padding, borderRadius, borderWidth, borderColor, margin, height, width, children, ...props }) => {
  const { connectors: { connect, drag } } = useNode();

  const containerStyle = {
    background,
    padding,
    borderRadius,
    borderWidth,
    borderColor,
    margin,
    height,
    width,
  };

  return (
    <div 
      ref={ref => connect(drag(ref))} 
      style={containerStyle}
      className="container-element"
      {...props}
    >
      {children}
    </div>
  );
};

export const ContainerSettings = () => {
  const { actions: { setProp }, background, padding, borderRadius, borderWidth, borderColor, margin, height, width } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
    borderRadius: node.data.props.borderRadius,
    borderWidth: node.data.props.borderWidth,
    borderColor: node.data.props.borderColor,
    margin: node.data.props.margin,
    height: node.data.props.height,
    width: node.data.props.width,
  }));

  return (
    <div className="container-settings bg-white p-4 rounded-lg shadow-md">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">Background:</label>
          <input type="color" value={background} onChange={(e) => setProp((props) => props.background = e.target.value)} className="w-10 h-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">Padding:</label>
          <input type="text" value={padding} onChange={(e) => setProp((props) => props.padding = e.target.value)} className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">Border Radius:</label>
          <input type="text" value={borderRadius} onChange={(e) => setProp((props) => props.borderRadius = e.target.value)} className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">Border Width:</label>
          <input type="text" value={borderWidth} onChange={(e) => setProp((props) => props.borderWidth = e.target.value)} className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">Border Color:</label>
          <input type="color" value={borderColor} onChange={(e) => setProp((props) => props.borderColor = e.target.value)} className="w-10 h-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">Margin:</label>
          <input type="text" value={margin} onChange={(e) => setProp((props) => props.margin = e.target.value)} className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">Height:</label>
          <input type="text" value={height} onChange={(e) => setProp((props) => props.height = e.target.value)} className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">Width:</label>
          <input type="text" value={width} onChange={(e) => setProp((props) => props.width = e.target.value)} className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
      </div>
    </div>
  );
}

export const ContainerDefaultProps = {
  background: '#FFFFFF',
  padding: '20px',
  borderRadius: '5px',
  borderWidth: '1px',
  borderColor: '#E0E0E0',
  margin: '10px',
  height: 'auto',
  width: '100%',
};

Container.craft = {
  props: ContainerDefaultProps,
  related: {
    settings: ContainerSettings
  }
};

