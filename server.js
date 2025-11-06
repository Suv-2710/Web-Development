// Import express
const express = require('express');
const app = express();

// Middleware to handle JSON data
app.use(express.json());

// Sample student data (acts as a small database)
let students = [
  { id: 1, name: "Suvarna", age: 21, course: "Computer Engg" },
  { id: 2, name: "Riya", age: 20, course: "IT" }
];

// ✅ ROUTES

// 1. GET all students
app.get('/students', (req, res) => {
  res.json(students);
});

// 2. GET student by ID
app.get('/students/:id', (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  if (!student) return res.status(404).send("Student not found");
  res.json(student);
});

// 3. POST - Add new student
app.post('/students', (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    age: req.body.age,
    course: req.body.course
  };
  students.push(newStudent);
  res.status(201).json({ message: "Student added successfully", data: newStudent });
});



// 4. PUT - Update student by ID
app.put('/students/:id', (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  if (!student) return res.status(404).send("Student not found");

  student.name = req.body.name;
  student.age = req.body.age;
  student.course = req.body.course;
  res.json(student);
});

// 5. DELETE - Remove student by ID
app.delete('/students/:id', (req, res) => {
  students = students.filter(s => s.id != req.params.id);
  res.send("Student deleted successfully");
});

// Start the server
app.listen(3000, () => console.log("✅ Server running on http://localhost:3000"));
