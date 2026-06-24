import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("students"));
    if (data) setStudents(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = () => {
    if (!name || !course) return;

    const newStudent = {
      id: Date.now(),
      name,
      course,
    };

    setStudents([...students, newStudent]);
    setName("");
    setCourse("");
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        Student Management System
      </h2>

      <div className="card p-3">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          className="form-control mb-2"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <button
          className="btn btn-primary"
          onClick={addStudent}
        >
          Add Student
        </button>
      </div>

      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() =>
                    deleteStudent(student.id)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;