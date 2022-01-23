
import './App.css';
import {Timer} from './components/Timer'
import { useState } from "react";

function App() {

 const [start,setStart]=useState()
 const [end,setEnd]=useState()
 const [status,setStatus]=useState(false)

 const handleSubmit=(e)=>{
  e.preventDefault()
  setStatus(true)
}
  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Start Time:</label>
        <input type="number" name="start" onChange={(e) => {setStart(+e.target.value)}} />
        <label htmlFor="">End Time:</label>
        <input type="number" name="end" onChange={(e) => {setEnd(+e.target.value)}} />
        <input type="submit" value ="Submit"/>
      </form>
      {status ? <Timer start={start} end={end} /> : <h1>Time start from: {start} </h1>}
    </div>
  );
}

export default App;

 

