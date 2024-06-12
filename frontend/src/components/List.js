import React from 'react';
import {BiEditAlt} from "react-icons/bi"
import {BsTrash} from "react-icons/bs"

function List({id, task,}) {
    return (
        <li className='task-item'>
            {task}
            <div>
                <BiEditAlt className='icon' />
                <BsTrash className='icon' />
            </div>
        </li>
    );
}

export default List;