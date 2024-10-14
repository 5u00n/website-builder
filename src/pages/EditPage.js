// src/pages/EditPage.js
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import PageBuilder from '../components/PageBuilder';
import SettingsPanel from '../components/SettingsPanel';

const EditPage = () => {
    const [selectedComponent, setSelectedComponent] = useState(null);
    const [components, setComponents] = useState([]);


    const updateComponent = (id, settings) => {

        setComponents((components) => {
            const updatedComponents = components.map((comp) => (comp.id === id ? { ...comp, settings } : comp));

            return updatedComponents;
        });
    };

    const handlePublish = () => {
        localStorage.setItem('page', JSON.stringify(components));
        alert('Page Published!');
    };

    return (
        <div className="flex w-full h-screen">
            <Sidebar />
            <div className="flex-1 p-6">
                <button
                    onClick={handlePublish}
                    className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 justify-end items-end align-end"
                >
                    Publish
                </button>
                <PageBuilder
                    components={components}
                    updateComponent={updateComponent}
                    setSelectedComponent={setSelectedComponent}
                    setComponents={setComponents}
                />

            </div>
            <SettingsPanel selectedComponent={selectedComponent} updateComponent={updateComponent} />
        </div>
    );
};

export default EditPage;
