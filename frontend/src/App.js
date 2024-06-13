import React, {useState, useEffect} from 'react';
import List from './components/List';
import axios from "axios"
import { baseURL } from './utils/constant';

function App(props) {

  const [usrInput, setUsrInput] = useState("")
  const [tasks, setTasks] = useState([])
  const [updateUI, setUpdateUI] = useState(false)
  const [updateId, setUpdateId] = useState(null)
 
  useEffect(() => {
    axios.get(`${baseURL}/get`)
    .then((res) => {
      console.log(res.data)
      setTasks(res.data)
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
    })
  }, [updateUI])

  const addTask = () => {
    axios.post(`${baseURL}/save`, {task: usrInput})
    .then((res) => {
      console.log(res.data)
      setUsrInput("")
      setUpdateUI((prevState) => !prevState)
    })
    .catch((error) => {
      console.error('Error saving data:', error)
    })
  }

  const update = (id, text) => {
    console.log(text)
    setUsrInput(text)
    setUpdateId(id)
  }

  const updateTask = () => {
    axios.put(`${baseURL}/update/${updateId}`, {task: usrInput})
    .then((res) => {
      console.log(res.data)
      setUpdateUI((prevState) => !prevState)
      setUpdateId(null)
      setUsrInput("")
    })
    .catch((error) => {
      console.error('Error UPDATING data:', error)
    })
  }

  return (
    <div className='main'>
      <h1 className='title'>TASK LIST CRUD OPERATIONS</h1>

      <div className='input_holder'>
        <input type="text" placeholder={"What needs to get done?"} value={usrInput} onChange={(e) => setUsrInput(e.target.value)} />
      </div>

      <button className='button' type="submit" onClick={updateId ? updateTask : addTask}>
        {updateId ? "Update Task" : "Add Task"}
      </button>

      <ul className='task-list'>
        {/* <List task={"Something task example."} /> */}
        {tasks.map(task => <List 
        key={task._id} 
        id={task._id} 
        task={task.task} 
        setUpdateUI={setUpdateUI}
        update={update}
        />)}
      </ul>

    </div>
  );
}

export default App;