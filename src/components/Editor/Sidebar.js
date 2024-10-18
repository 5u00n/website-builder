import React from 'react';
import { useEditor, Element } from '@craftjs/core';
import { Text } from '../Elements/Text';
import { Card } from '../Elements/Card';
import { Header } from '../Elements/Header';
import { List } from '../Elements/List';
import { Table } from '../Elements/Table';

const componentList = [
    { name: 'Text', type: Text, props: { text: 'Sample Text' } },
    { name: 'Card', type: Card },
    { name: 'Header', type: Header },
    { name: 'List', type: List },
    { name: 'Table', type: Table },
];

const Sidebar = () => {
    const { connectors } = useEditor();

    return (
        <div className="w-64 bg-gray-100 p-4 flex flex-col">
            <h2 className="text-lg font-bold mb-4">Components</h2>
            <div className="mb-8">
                {componentList.map((component) => (
                    <div
                        key={component.name}
                        ref={(ref) => connectors.create(ref,
                            <Element is={component.type} {...component.props} text="Hello" />
                            , component.props)}
                        className="w-full text-left p-2 hover:bg-gray-200 rounded cursor-move mb-2"
                    >
                        {component.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
