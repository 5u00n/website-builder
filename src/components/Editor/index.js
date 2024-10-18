import React from 'react';
import { Editor, Frame, Element } from '@craftjs/core';
import Sidebar from './Sidebar';
import SettingsPanel from './SettingsPanel';
import { Text } from '../Elements/Text';
import { Card } from '../Elements/Card';
import { Header } from '../Elements/Header';
import { List } from '../Elements/List';
import { Table } from '../Elements/Table';
import { Container } from '../Elements/Container';

const EditorComponent = () => {
  return (
    <Editor resolver={{ Text, Card, Header, List, Table,Container }}>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 p-4 overflow-auto">
          <Frame>
            <Element is={Container} canvas>
                <Element is={Header} text="Welcome to the Editor" />
                <Element is={Text} text="Start editing by selecting components and adjusting their properties in the settings panel." />
                <Element is={List} items={["Drag and drop components", "Edit component properties", "Rearrange layout as needed"]} />
                <Element is={Table} rows={3} columns={3} />
                <Element is={Card} content="This is a sample card component. You can drag and drop components from the sidebar to build your layout." />
               
            </Element>
          </Frame>
        </div>
        <SettingsPanel />
      </div>
    </Editor>
  );
};

export default EditorComponent;

