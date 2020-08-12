import React from 'react'
import './App.css'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Bucket from './Bucket.js'
import Ball from './Ball.js'

function App() {
  return (
    <div className="App" style={{
      display: 'flex',
      height: '100vh'
    }}>
      <DndProvider backend={HTML5Backend}>
      
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
