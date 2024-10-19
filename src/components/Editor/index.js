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
import { Button } from '../Elements/Button';
import { Image } from '../Elements/Image';

const EditorComponent = () => {
  return (
    <Editor resolver={{ Text, Container, Image, Button, Header, List, Card, Table }}>
      <div className="flex h-screen bg-gray-100 justify-between">
        <Sidebar className="w-[200px]" />
        <div className=" p-4 overflow-auto w-full max-w-[800px]">
          <Frame>
            <Element is={Container} canvas data-cy="root-container" background="#FFFFFF" padding={20} >
            </Element>
          </Frame>
        </div>
        <SettingsPanel className="w-[200px]" />
      </div>
    </Editor>
  );
};

export default EditorComponent;

