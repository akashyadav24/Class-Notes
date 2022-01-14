import React, {useState} from 'react'
import './Subjects.css'
import { v4 as uuidv4 } from 'uuid';
import Physics from './Physics';
import Chemistry from './Chemistry';
import Maths from './Maths';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";



export default function Subjects() {

    const initialList = [
        {
          id: '1',
          name: 'Physics',
        },
        {
          id: '2',
          name: 'Chemistry',
        },
        {
            id:'3',
            name:'Maths'
        }
      ];

    const [list, setList] = useState(initialList);
    const [name, setName] = useState('');
    function handleChange(event) {
        setName(event.target.value);
    }
    function handleAdd() {
        const newList = list.concat({ name, id: uuidv4() });
        setList(newList);
        setName('');
    }
    return (
        <div className='Subject-div' >
            <Router>
            <ul className='Subject-list' >
            {list.map((item) => (
                <li  key={item.id}><Link className='Subjects-name' to= {"/" + item.name}>{item.name}</Link></li>
            ))}
            </ul>

            <div>
                <input id='add-more-input' type="text" value={name} onChange={handleChange} />
                <button id='add-more-button' type="button" onClick={handleAdd}>
                    Add
                </button>
            </div>

            <Routes>
                <Route path="/Physics" exact  element = { <Physics /> }  />
                <Route path="/Chemistry" exact element = { <Chemistry /> } />
                <Route path="/Maths" exact element = { <Maths /> } />
            </Routes>
        </Router>
        </div>
        
    )
}
