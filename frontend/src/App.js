import React, {useState, useEffect} from 'react';
import List from './components/List';
import axios from "axios"
import { baseURL } from './utils/constant';

function App(props) {

  const [usrInput, setUsrInput] = useState("")
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    axios.get(`${baseURL}/get`)
    .then((res) => {
      console.log(res.data)
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
    })
  }, [])

  const addTask = () => {
    axios.post(`${baseURL}/save`, {task: usrInput})
    .then((res) => {
      console.log(res.data)
      setUsrInput("")
    })
    .catch((error) => {
      console.error('Error saving data:', error)
    })
  }

  return (
    <div className='main'>
      <h1 className='title'>Task List CRUD Operations</h1>

      <div className='input_holder'>
        <input type="text" value={usrInput} onChange={(e) => setUsrInput(e.target.value)} />
      </div>

      <button className='button' type="submit" onClick={addTask}>
        Add Task!!!
      </button>

      <ul className='task-list'>
        <List task={"Something task example."} />
      </ul>

    </div>
  );
}

export default App;