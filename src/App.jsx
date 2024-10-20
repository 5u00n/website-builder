// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import EditPage from './pages/EditPage';
import PreviewPage from './pages/PreviewPage';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/edit/:slug" element={<EditPage />} />
            <Route path="/preview/:slug" element={<PreviewPage />} />
          </Routes>
        </div>
      </Router>
    </DndProvider>
  );
}

export default App;
