import React from 'react';
import { useNode } from '@craftjs/core';

export const Image = ({ src, alt, width, height }) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <img
      ref={ref => connect(drag(ref))}
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="max-w-full h-auto"
    />
  );
};

Image.craft = {
  props: {
    src: 'https://via.placeholder.com/150',
    alt: 'Placeholder image',
    width: '100%',
    height: 'auto'
  },
  rules: {
    canDrag: () => true
  }
};

const ImageSettings = () => {
  const { src, alt, width, height, actions: { setProp } } = useNode((node) => ({
    src: node.data.props.src,
    alt: node.data.props.alt,
    width: node.data.props.width,
    height: node.data.props.height
  }));

  return (
    <div>
      <div>
        <label>Source URL</label>
        <input
          type="text"
          value={src}
          onChange={(e) => setProp((props) => (props.src = e.target.value))}
        />
      </div>
      <div>
        <label>Alt Text</label>
        <input
          type="text"
          value={alt}
          onChange={(e) => setProp((props) => (props.alt = e.target.value))}
        />
      </div>
      <div>
        <label>Width</label>
        <input
          type="text"
          value={width}
          onChange={(e) => setProp((props) => (props.width = e.target.value))}
        />
      </div>
      <div>
        <label>Height</label>
        <input
          type="text"
          value={height}
          onChange={(e) => setProp((props) => (props.height = e.target.value))}
        />
      </div>
    </div>
  );
};

Image.craft = {
  ...Image.craft,
  related: {
    settings: ImageSettings
  }
};
