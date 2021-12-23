import logo from './logo.svg';
import './App.css';

function App() {
  const arr = ["Wake up" , "Have Tea" ,"Attened Scrum"]
  return (
    <div className="App">
      {[1,2,3,4,5,6].map((e) => (
        <h1>Hello {e}</h1>
      ))}
       
      {arr.map((e)=>(
        <Todos num = {e}/>
      ))}
    
    </div>
   
  );
}

function Todos({num}){
  return <h1>Todo : {num}</h1>
}
export default App;
