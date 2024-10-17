// src/components/PageBuilder.js
import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import { COMPONENT_TYPES } from './Sidebar';

const PageBuilder = ({ components, updateComponent, setSelectedComponent, setComponents }) => {
    const containerRef = useRef(null);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: COMPONENT_TYPES,
        drop: (item, monitor) => {
            const containerRect = containerRef.current.getBoundingClientRect();
            const delta = monitor.getClientOffset();
            const left = Math.round(delta.x - containerRect.left);
            const top = Math.round(delta.y - containerRect.top);
            addComponent(item, left, top);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    const addComponent = (item, left, top) => {
        const newComponent = {
            ...item,
            id: Date.now(), // Generate a unique ID for each component
            settings: {}, // Initial settings for each component
            left, // Initial left position
            top, // Initial top position
            width: 200, // Initial width
            height: 100, // Initial height
        };
        setComponents((prevComponents) => [...prevComponents, newComponent]);
    };

    const handleComponentClick = (component) => {
        setSelectedComponent(component); // Select the component for editing
    };

    const moveComponent = (id, left, top) => {
        setComponents((prevComponents) =>
            prevComponents.map((component) =>
                component.id === id ? { ...component, left, top } : component
            )
        );
    };

    const resizeComponent = (id, width, height) => {
        setComponents((prevComponents) =>
            prevComponents.map((component) =>
                component.id === id ? { ...component, width, height } : component
            )
        );
    };

    const handleTextChange = (id, text) => {
        setComponents((prevComponents) =>
            prevComponents.map((component) =>
                component.id === id ? { ...component, settings: { ...component.settings, text } } : component
            )
        );
    };

    const DraggableComponent = ({ component }) => {
        const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
            type: component.type,
            item: { id: component.id, left: component.left, top: component.top },
            end: (item, monitor) => {
                const delta = monitor.getDifferenceFromInitialOffset();
                const left = Math.round(item.left + delta.x);
                const top = Math.round(item.top + delta.y);
                moveComponent(item.id, left, top);
            },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }));

        return (
            <ResizableBox
                width={component.width}
                height={component.height}
                onResizeStop={(e, data) => resizeComponent(component.id, data.size.width, data.size.height)}
                minConstraints={[50, 50]}
                maxConstraints={[500, 500]}
                style={{
                    position: 'absolute',
                    left: component.left,
                    top: component.top,
                    opacity: isDragging ? 0.5 : 1,
                    cursor: 'move',
                }}
                className="border border-gray-300 p-2 rounded-md"
            >
                <div ref={dragPreview} onClick={() => handleComponentClick(component)}>
                    <div ref={drag}>
                        {renderComponent(component)}
                    </div>
                </div>
            </ResizableBox>
        );
    };

    console.log(components);

    const renderComponent = (component) => {
        switch (component.type) {
            case 'text':
                return (
                    <p
                        onBlur={(e) => handleTextChange(component.id, e.target.innerText)}
                        style={{ fontSize: component.settings.fontSize+'px' || '16px', color: component.settings.color || '#000000' }}
                    >
                        {component.settings.text || 'Editable text'}
                    </p>
                );
            case 'image':
                return <img src={component.settings.src || 'https://via.placeholder.com/150'} alt={component.settings.alt || 'Placeholder'} style={{
                    width: component.settings.width+'px' || '150px',
                    height: component.settings.height+'px' || '150px',
                    objectFit: component.settings.objectFit || 'cover',
                    borderRadius: component.settings.borderRadius+'px' || '0px',
                    boxShadow: component.settings.boxShadow || 'none',
                    filter: component.settings.filter || 'none',
                    transform: component.settings.transform || 'none',
                    transition: component.settings.transition || 'none',
                    opacity: component.settings.opacity || '1',
                    cursor: 'pointer',
                    userSelect: 'none',
                    pointerEvents: 'none',
                    position: 'relative',
                    left: component.settings.left+'px' || '0px',
                    top: component.settings.top+'px' || '0px',
                    zIndex: component.settings.zIndex || '0',
                    mixBlendMode: component.settings.mixBlendMode || 'normal',
                    clipPath: component.settings.clipPath || 'none',
                    background: component.settings.background || 'none',
                    border: component.settings.border+'px' || 'none',
                    margin: component.settings.margin+'px' || '0px',
                    padding: component.settings.padding+'px' || '0px',
                    display: component.settings.display || 'block',
                    justifyContent: component.settings.justifyContent || 'center',
                    alignItems: component.settings.alignItems || 'center',
                }} />;
            case 'header':
                return <h1 className="text-3xl" style={{ fontSize: component.settings.fontSize+'px' || '24px' }}>{component.settings.text || 'Header Component'}</h1>;
            case 'list':
                return (
                    <ul className="list-disc ml-6">
                        {(component.settings.items || '').split(',').map((item, index) => (
                            <li key={index}>{item.trim()}</li>
                        ))}
                    </ul>
                );
            case 'video':
                return (
                    <video controls width="100%">
                        <source src={component.settings.src || 'https://www.w3schools.com/html/mov_bbb.mp4'} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                );
            case 'carousel':
                return (
                    <div className="carousel">
                        {(component.settings.images || '').split(',').map((src, index) => (
                            <img key={index} src={src.trim()} alt={`Carousel ${index}`} />
                        ))}
                    </div>
                );
            case 'priceList':
                return (
                    <div>
                        <pre>{component.settings.data || 'Price Listing Component'}</pre>
                    </div>
                );
            case 'grid':
                return (
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: `repeat(${component.settings.columns || 1}, 1fr)`,
                            gap: component.settings.gap || '0px',
                        }}
                    >
                        {component.children && component.children.map((child) => renderComponent(child))}
                    </div>
                );
            case 'flex':
                return (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: component.settings.direction || 'row',
                            justifyContent: component.settings.justifyContent || 'flex-start',
                            alignItems: component.settings.alignItems || 'stretch',
                        }}
                    >
                        {component.children && component.children.map((child) => renderComponent(child))}
                    </div>
                );
            case 'table':
                return (
                    <table className="table-auto">
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
    };

    return (
        <div
            ref={(node) => {
                containerRef.current = node;
                drop(node);
            }}
            className={`flex-1 bg-white p-6 border-2 border-dashed border-gray-300 rounded-md ${isOver ? 'bg-gray-100' : 'bg-white'
                }`}
            style={{ position: 'relative', height: '100vh' }}
        >
            {isOver ? (
                <p className="text-center text-gray-500">Release to drop component</p>
            ) : (
                <p className="text-center text-gray-500">Drag and drop components here</p>
            )}

            <div className="mt-4 space-y-4 relative">
                {components.map((component) => (
                    <DraggableComponent key={component.id} component={component} />
                ))}
            </div>
        </div>
    );
};

export default PageBuilder;