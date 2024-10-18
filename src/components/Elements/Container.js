import React from 'react';
import { useNode } from '@craftjs/core';

export const Container = ({background, padding, borderRadius, borderWidth, borderColor, margin, height, width, children, ...props }) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <div ref={ref => connect(drag(ref))} className="p-6 my-2 border border-gray-300 rounded-lg"
    {...props}
    >
      {children}
    </div>
  );
};

export const ContainerSettings = () => {
  const { background, padding, borderRadius, borderWidth, borderColor, margin, height, width, actions: { setProp } } = useNode((node) => ({
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
    <div>
      <input type="text" value={background} onChange={(e) => setProp({ background: e.target.value })} />
      <input type="text" value={padding} onChange={(e) => setProp({ padding: e.target.value })} />
      <input type="text" value={borderRadius} onChange={(e) => setProp({ borderRadius: e.target.value })} />
      <input type="text" value={borderWidth} onChange={(e) => setProp({ borderWidth: e.target.value })} />
      <input type="text" value={borderColor} onChange={(e) => setProp({ borderColor: e.target.value })} />
      <input type="text" value={margin} onChange={(e) => setProp({ margin: e.target.value })} />
      <input type="text" value={height} onChange={(e) => setProp({ height: e.target.value })} />
      <input type="text" value={width} onChange={(e) => setProp({ width: e.target.value })} />
    </div>
  );
}

export const ContainerDefaultProps = {
    backgroud: '#FFFFFF',
    padding: 3,
};

Container.craft = {
    props: ContainerDefaultProps,
    related: {
        settings: ContainerSettings
    }
};

