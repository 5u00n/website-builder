import React from 'react';
import { useEditor } from '@craftjs/core';

const SettingsPanel = () => {
  const { actions, selected,    } = useEditor((state, query) => {
    const currentNodeId = query.getEvent('selected').last();
    console.log("currentnodeid",currentNodeId);
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
      isEnabled: state.options.enabled,
    };
  });

  //if (!selected) return null;

  console.log(selected);

  return (
    <div className="w-64 bg-gray-100 p-4">
      <h2 className="text-lg font-bold mb-4"> Settings</h2>
      <div className="flex flex-row justify-between">
        <p className="text-sm font-bold mb-2">Selected Component</p>
        <div className="p-2 border border-gray-300 rounded-lg">
            {selected?.name?selected.name:"None"}
        </div>
      </div>
     {
        selected?
        <div>
            <div className="text-sm font-bold mb-2">

            {React.createElement(selected.settings)}
            </div>
            <div className="text-sm font-bold mb-2">
              <button className=" text-white font-bold py-2 px-4 rounded bg-red-500 hover:bg-red-700" onClick={()=>actions.delete(selected.id)}>Delete</button>
            </div>
        </div>
        :null
     }
    </div>
  );
};

export default SettingsPanel;
