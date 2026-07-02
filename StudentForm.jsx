import { useState } from "react";

function StudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [rollNumber, setRollNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedCourse = course.trim();
    const trimmedRollNumber = rollNumber.trim();

    if (!trimmedName || !trimmedCourse || !trimmedRollNumber) return;

    addStudent({
      id: Date.now(),
      name: trimmedName,
      course: trimmedCourse,
      rollNumber: trimmedRollNumber,
    });

    setName("");
    setCourse("");
    setRollNumber("");
  };

  return (
    <section className="card form-card">
      <div className="card-header">
        <h2>Add Student</h2>
        <p>Enter a new student profile</p>
      </div>
      <form className="student-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <input
          type="text"
          placeholder="Roll Number"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
        />

        <button type="submit">Add Student</button>
      </form>
    </section>
  );
}

export default StudentForm;
