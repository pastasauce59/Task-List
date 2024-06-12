import React, {useState} from 'react';
import List from './components/List';

function App(props) {

  const [usrInput, setUsrInput] = useState("")

  return (
    <div className='main'>
      <h1 className='title'>Task List CRUD Operations</h1>

      <div className='input_holder'>
        <input type="text" value={usrInput} onChange={(e) => setUsrInput(e.target.value)} />
      </div>

      <button className='button' type="submit">
        Add Task!!!
      </button>

      <ul className='task-list'>
        <List task={"Something task example."} />
      </ul>

    </div>
  );
}

export default App;