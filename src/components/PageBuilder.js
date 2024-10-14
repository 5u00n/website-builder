// src/components/PageBuilder.js
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { COMPONENT_TYPES } from './Sidebar';

const PageBuilder = ({ components, updateComponent, setSelectedComponent, setComponents }) => {
    //const [components, setComponents] = useState([]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: COMPONENT_TYPES,
        drop: (item) => addComponent(item),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    const addComponent = (item) => {
        const newComponent = {
            ...item,
            id: Date.now(), // Generate a unique ID for each component
            settings: {}, // Initial settings for each component
        };
        setComponents((prevComponents) => [...prevComponents, newComponent]);
    };

    const handleComponentClick = (component) => {
        setSelectedComponent(component); // Select the component for editing

    };


    return (
        <div
            ref={drop}
            className={`flex-1 bg-white p-6 border-2 border-dashed border-gray-300 rounded-md ${isOver ? 'bg-gray-100' : 'bg-white'
                }`}
        >
            {isOver ? (
                <p className="text-center text-gray-500">Release to drop component</p>
            ) : (
                <p className="text-center text-gray-500">Drag and drop components here</p>
            )}

            <div className="mt-4 space-y-4">
                {components.map((component) => {
                    switch (component.type) {
                        case 'text':
                            return (
                                <p
                                    key={component.id}
                                    onClick={() => handleComponentClick(component)}
                                    className="cursor-pointer border hover:border-gray-300 p-2 rounded-md"
                                    style={{ fontSize: component.settings.fontSize || '16px', color: component.settings.color || '#000000FF' }}

                                >
                                    {component.settings.text || 'Editable text'}
                                </p>
                            );
                        case 'image':
                            return (
                                <img
                                    key={component.id}
                                    onClick={() => handleComponentClick(component)}
                                    src="https://via.placeholder.com/150"
                                    alt="Placeholder"
                                    className="cursor-pointer border border-gray-300 p-2 rounded-md"
                                />
                            );
                        case 'header':
                            return (
                                <h1
                                    key={component.id}
                                    onClick={() => handleComponentClick(component)}
                                    className="text-3xl cursor-pointer border border-gray-300 p-2 rounded-md"
                                >
                                    Header Component
                                </h1>
                            );
                        case 'list':
                            return (
                                <ul
                                    key={component.id}
                                    onClick={() => handleComponentClick(component)}
                                    className="list-disc ml-6 cursor-pointer border border-gray-300 p-2 rounded-md"
                                >
                                    <li>Item 1</li>
                                    <li>Item 2</li>
                                    <li>Item 3</li>
                                </ul>
                            );
                        case 'video':
                            return (
                                <div
                                    key={component.id}
                                    onClick={() => handleComponentClick(component)}
                                    className="border border-gray-300 p-2 rounded-md cursor-pointer"
                                >
                                    <video controls width="100%">
                                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            );
                        case 'carousel':
                            return (
                                <div
                                    key={component.id}
                                    onClick={() => handleComponentClick(component)}
                                    className="border border-gray-300 p-2 rounded-md cursor-pointer"
                                >
                                    Carousel Component
                                </div>
                            );
                        case 'priceList':
                            return (
                                <div
                                    key={component.id}
                                    onClick={() => handleComponentClick(component)}
                                    className="border border-gray-300 p-2 rounded-md cursor-pointer"
                                >
                                    Price Listing Component
                                </div>
                            );
                        case 'table':
                            return (
                                <table
                                    key={component.id}
                                    onClick={() => handleComponentClick(component)}
                                    className="table-auto border border-gray-300 p-2 rounded-md cursor-pointer"
                                >
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2">Heading 1</th>
                                            <th className="px-4 py-2">Heading 2</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border px-4 py-2">Data 1</td>
                                            <td className="border px-4 py-2">Data 2</td>
                                        </tr>
                                    </tbody>
                                </table>
                            );
                        default:
                            return null;
                    }
                })}
            </div>
        </div>
    );
};

export default PageBuilder;
