import React from 'react';
import {BiEditAlt} from "react-icons/bi"
import {BsTrash} from "react-icons/bs"
import axios from 'axios';
import { baseURL } from '../utils/constant';

function List({id, task, setUpdateUI, update}) {

    const removeTask = () => {
        axios.delete(`${baseURL}/delete/${id}`)
        .then((res) => {
            console.log(res)
            setUpdateUI((prevState) => !prevState)
        })
        .catch((error) => {
            console.error("Error deleting task:", error)
        })
    }

    return (
        <li className='task-item'>
            {task}
            <div className='buttons-container'>
                <BiEditAlt className='icon' onClick={() => update(id, task)}/>
                <BsTrash className='icon' onClick={removeTask} />
            </div>
        </li>
    );
}

export default List;