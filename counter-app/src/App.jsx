import React from 'react'

function App() {
  const [counter, setCounter] = React.useState(0)

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }


  return (
    <div id='counter'>
      <h1>Click Counter</h1>
      <p>Counter Value : {counter}</p>

      <button onClick={addValue}>Add</button>
      <br></br>
      <button onClick={removeValue}>Remove</button>
    </div>
  )
}

export default App
