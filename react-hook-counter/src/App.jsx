import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const changeState = (value) => {
    setCount((prev) => {
      return prev + value;
    })
  }

  const changeMul = (value) => {
    setCount((prev) => {
      return prev * value;
    })
  }
   return (
    <div className="App">
      <h1>Count : {count}</h1>
      <div className='btnSection'>
        <button onClick={() => changeState(1)}>INCREASE</button>
        <button onClick={() => changeState(-1)}>DECREASE</button>
        <button onClick={() => changeMul(2)}>DOUBLE</button>
        <button onClick={() => changeMul(0)}>REFRESH</button>

      </div>
    </div>
  );
}

export default App;
