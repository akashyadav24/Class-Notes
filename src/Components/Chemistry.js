import React, {useState} from 'react'
import './Subjects.css'
import { v4 as uuidv4 } from 'uuid';
import LawOfmotion from './Notes/LawsOfMotion'

export default function Subjects() {

    const [showStatements, setShowStatements] = useState(false);
    const onClick = () =>  setShowStatements(true)


    const initialList = [
        {
          id: '1',
          name: 'Atoms',
        },
        {
          id: '2',
          name: 'Compounds',
        },
        {
            id:'3',
            name:'inorganic',
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
            <ul className='Subject-list' >
            {list.map((item) => (
                <li className='Subjects-name' onClick={onClick} key={item.id}>{item.name}</li>
            ))}
            </ul>

            <div>
                <input id='add-more-input' type="text" value={name} onChange={handleChange} />
                <button id='add-more-button' type="button" onClick={handleAdd}>
                    Add
                </button>
            </div>

            { showStatements ? <LawOfmotion /> : null }
        </div>
    )
}
