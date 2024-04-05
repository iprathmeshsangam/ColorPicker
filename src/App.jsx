import './App.css'
import { useState } from 'react';
function App() {

  const [color , setColor] = useState("#000000");

  function handleColorChange(e){
    setColor(e.target.value)
  }

  return (
    <>
        <div className="color-picker-container">
          <h1>Color Picker</h1>
          <div className="color-display" style={{backgroundColor: color}}>
              <p>{color.toUpperCase()}</p>
              <button onClick={()=>navigator.clipboard.writeText(color)} style={{padding:"5px 8px"}}>Copy</button>
          </div>
          <div className="color-elem">
          <label> Pick color </label>
          <input type='color' onChange={handleColorChange} value={color}/>
          
          </div>
        </div>
    </>
  )
}

export default App
