// src/components/settings/ImageSettings.js
import React from 'react';

const ImageSettings = ({ settings, handleSettingChange }) => (
  <>
    <div className="mb-4">
      <label className="block mb-2 font-medium">Image URL</label>
      <input
        type="text"
        name="src"
        value={settings.src || 'https://via.placeholder.com/150'}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 font-medium">Alt Text</label>
      <input
        type="text"
        name="alt"
        value={settings.alt || 'some-alt-text'}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 font-medium">Width</label>
      <input
        type="number"
        name="width"
        value={settings.width || 100}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 font-medium">Height</label>
      <input
        type="number"
        name="height"
        value={settings.height || 100}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  </>
);

export default ImageSettings;