import React from 'react'
import './App.css'
// import { DndProvider } from 'react-dnd'
import { DndProvider } from 'react-dnd-multi-backend';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
// import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch'
import MultiBackend, { TouchTransition } from 'react-dnd-multi-backend';

import Bucket from './Bucket.js'
import Ball from './Ball.js'


const HTML5toTouch = {
  backends: [
    {
      backend: HTML5Backend
    },
    {
      backend: TouchBackend, // Note that you can call your backends with options
      options: {enableMouseEvents: true},
      preview: true,
      transition: TouchTransition,
      skipDispatchOnTransition: true
    }
  ]
};

function App() {
  return (
    <div className="App" style={{
      display: 'flex',
      height: '100vh'
    }}>
      <DndProvider backend={MultiBackend} options={HTML5toTouch} >
      
      <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Ball hiddenColor="red" id="1" />
          <Ball hiddenColor="green" id="2" />
          <Ball hiddenColor="blue" id="3" />
        </div>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(30, 45px)',
          gridTemplateRows: 'repeat(20, 45px)'

           }}>
             {Array((30 * 20)).fill(<Bucket />)}
        </div>

      </DndProvider>
    </div>
  )
}

export default App
