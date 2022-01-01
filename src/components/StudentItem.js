import React from 'react';
import { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const StudentItem = ({student}) => {
const{changeColor}=useContext(StudentContext);

const {id, name, age, color, email}=student;
//changeColor arrow ile cagirmamiz zorunlu yoksa otomatik cagirilir her defasinda
    return (
        <div>
            <h3>{name}</h3>
            <h4>{email}</h4>
            <h4>{age}</h4>
            Color: <input type="text" value={color} 
            onChange={(e)=> changeColor(e.target.value, id)}/>
        </div>
    )
}

export default StudentItem
