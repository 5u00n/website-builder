import React from 'react';
import { useEditor } from '@craftjs/core';

const SettingsPanel = () => {
  const { actions, selected } = useEditor((state, query) => {
    const currentNodeId = state.events.selected;
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId]?.data.name,
        settings: state.nodes[currentNodeId]?.related?.settings,
      };
    }

    return {
      selected,
    };
  });

  if (!selected) return null;

  return (
    <div className="w-64 bg-gray-100 p-4">
      <h2 className="text-lg font-bold mb-4">{selected.name} Settings</h2>
      {selected.settings && React.createElement(selected.settings)}
    </div>
  );
};

export default SettingsPanel;
