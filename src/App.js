
import { useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">

      {show ? <Counter /> : <h1>No counter</h1>}
      <div><button onClick={()=>setShow(!show)}>{ show ? "Dont show": "Show" }</button></div>
    </div>
  );
}

export default App;
