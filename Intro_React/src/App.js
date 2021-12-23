import logo from './logo.svg';
import './App.css';

function App() {
  const os = ["Android" , "Blackberry" ,"iPhone" ,"Windows Phone"]
  const Manufacturers = ["Samsung" , "HTC" , "Micromax" , "Apple"]
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      <div className='list'>
      {os.map((e) => (
        <ul>
          <li><h3>{e}</h3></li>
        </ul>
      ))}
      </div>
     <h1>Mobile Manufacturers</h1>
     <div className='list'>
     {Manufacturers.map((e)=>(
        <ul>
        <li> <Todos num = {e}/></li>
      </ul>
       
      ))}
     </div>
     
    </div>
   
  );
}

function Todos({num}){
  return <h3>{num} </h3>
}

export default App;
