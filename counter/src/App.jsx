import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function addCount() {
    setCount(count + 1)
  }

  function subCount() {
    if (count > 0) {
      setCount(count - 1)
    } else {
      alert("Can not go below than 0")
    }
  }

  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={addCount}> Add 1</button>
      <button onClick={subCount}> Sub 1</button>
    </>
  )
}

export default App
