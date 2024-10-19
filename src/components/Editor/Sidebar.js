import React from 'react';
import { useEditor, Element } from '@craftjs/core';
import { Text } from '../Elements/Text';
import { Card } from '../Elements/Card';
import { Header } from '../Elements/Header';
import { List } from '../Elements/List';
import { Table } from '../Elements/Table';
import { Image } from '../Elements/Image';
import { Button } from '../Elements/Button';
import { Container } from '../Elements/Container';

import { FaFont, FaRegSquare, FaHeading, FaList, FaTable, FaImage, FaRegHandPointer, FaRegObjectGroup } from 'react-icons/fa';

const componentList = [
    { name: 'Text', type: Text, props: { text: 'Sample Text', dataCy: 'text-component' }, icon: FaFont },
    { name: 'Card', type: Card, icon: FaRegSquare },
    { name: 'Header', type: Header, icon: FaHeading },
    { name: 'List', type: List, icon: FaList },
    { name: 'Table', type: Table, icon: FaTable },
    { name: 'Image', type: Image, icon: FaImage },
    { name: 'Button', type: Button, icon: FaRegHandPointer },
    { name: 'Container', type: Container, icon: FaRegObjectGroup }
];

const Sidebar = () => {
    const { connectors } = useEditor();

    return (
        <div className="w-64 bg-gray-800 text-white p-4 flex flex-col">
            <h2 className="text-xl font-bold mb-6 text-center">Components</h2>
            <div className="mb-8 space-y-2">
                {componentList.map((component) => (
                    <div
                        key={component.name}
                        ref={(ref) => connectors.create(ref,
                            <Element canvas is={component.type} {...component.props} />
                            , component.props)}
                        className="flex items-center w-full text-left p-3 hover:bg-gray-700 rounded cursor-move transition duration-200 ease-in-out"
                    >
                        <component.icon className="mr-3 text-blue-400" />
                        <span>{component.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
