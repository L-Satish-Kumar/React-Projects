import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('lightcoral')

  return (
    <div className="app" style={{ backgroundColor: color }}>
      <h1 className="title">Current color: {color}</h1>

      <div className="controls">
        <button
          className="color-btn red"
          onClick={() => setColor('red')}
        >
          RED
        </button>

        <button
          className="color-btn blue"
          onClick={() => setColor('blue')}
        >
          BLUE
        </button>

        <button
          className="color-btn green"
          onClick={() => setColor('green')}
        >
          GREEN
        </button>
      </div>
    </div>
  )
}

export default App
