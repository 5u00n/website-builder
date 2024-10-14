// src/components/SettingsPanel.js
import React, { useState, useEffect } from 'react';

const SettingsPanel = ({ selectedComponent, updateComponent }) => {
  const [settings, setSettings] = useState({});

  useEffect(() => {
    if (selectedComponent) {
      setSettings(selectedComponent.settings || {});
    }
  }, [selectedComponent]);

  const handleSettingChange = (e) => {
    const { name, value } = e.target;
    const updatedSettings = { ...settings, [name]: value };
    setSettings(updatedSettings);
    updateComponent(selectedComponent.id, updatedSettings); // Update the component settings
  };

  if (!selectedComponent) {
    return <div className="p-4 text-gray-500">Select a component to edit its settings</div>;
  }



  return (
    <div className="w-64 p-6 bg-gray-100 h-full border-l border-gray-300">
      <h3 className="text-xl font-bold mb-6">Settings</h3>
      <div className="mb-4">
        <label className="block mb-2 font-medium">Text</label>
        <input
          type="text"
          name="text"
          value={settings.text || ''}
          onChange={handleSettingChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-medium">Font Size</label>
        <input
          type="number"
          name="fontSize"
          value={settings.fontSize || ''}
          onChange={handleSettingChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-medium">Text Color</label>
        <input
          type="color"
          name="color"
          value={settings.color || '#000000FF'}
          onChange={handleSettingChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          style={{ height: '40px' }}
          
        />
      </div>
    </div>
  );
};

export default SettingsPanel;
