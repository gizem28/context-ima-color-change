import React from "react";
import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import StudentItem from "./StudentItem";

const StudentList = () => {
  //! StudentContext'in içerisideki students'ı
  //! useContext hook'u ile okuduk.
  const { students } = useContext(StudentContext);

  return (
    <div>
      <h1 style={{textAlign:"center", color:"pink"}}>User List</h1>
      {students.map((student)=>
          (<StudentItem key={student.id} student={student} />
          ))}
    </div>
  );
};

export default StudentList;