import React from 'react';
import { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const StudentItem = ({student}) => {
const{changeColor}=useContext(StudentContext);

const {id, name, age, color, email}=student;
//changeColor arrow ile cagirmamiz zorunlu yoksa otomatik cagirilir her defasinda
    return (
        <div style={{
            background: student.color,
            paddingBottom: "2rem",
            padding: "1rem",
            marginLeft:"8rem",
            marginRight:"8rem",
            marginBottom:"2rem",
          }}>
            <h3> Name: {name}</h3>
            <h4>Email: {email}</h4>
            <h4>Age: {age}</h4>
            <h4>Color:</h4> <input type="text" value={color} 
            onChange={(e)=> changeColor(e.target.value, id)}/>
        </div>
    )
}

export default StudentItem
