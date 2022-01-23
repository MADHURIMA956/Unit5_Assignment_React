import logo from './logo.svg';
import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import {Todo} from './Components/Todo';
import {Items} from './Components/Items';
import {Edit} from './Components/Edit';
import {Count} from './Components/Count';

function App () {
  return (
    <div className="App">
      {/* <Todo /> */}
      <Routes>

        <Route path={'/home'} element={<Todo />} />
        <Route path={'/todo/:id'} element={<Items />} />
        <Route path={'/todo/:id/edit'} element={<Edit />} />
        <Route path={'/count'} element={<Count />} />
      </Routes>
    </div>
  );
}

export default App;