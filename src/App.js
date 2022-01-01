import React from 'react';
import './App.css';
import {useState} from "react";
import {StudentContext} from "./context/StudentContext";
import data from "./data";
import StudentList from "./components/StudentList";


function App() {
  const[students, setStudents]=useState(data);

  const changeColor=(color, id)=>{
    setStudents(students.map((student)=>student.id ===id ? 
    {...students, color:color} : student))
  }

  return (
    <div className="App">
    <StudentContext.Provider value={{students, changeColor}}>
      <StudentList/>
    </StudentContext.Provider>
    </div>
  );
}

export default App;
