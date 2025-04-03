import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// In-memory database for demonstration
let teachers = [
  {
    id: 1,
    name: "John Doe",
    subject: "Mathematics",
    email: "john.doe@school.com",
    phone: "123-456-7890",
    experience: 5
  }
];

// Get all teachers
app.get('/api/teachers', (req, res) => {
  res.json(teachers);
});

// Add a new teacher
app.post('/api/teachers', (req, res) => {
  const teacher = {
    id: teachers.length + 1,
    ...req.body
  };
  teachers.push(teacher);
  res.status(201).json(teacher);
});

// Delete a teacher
app.delete('/api/teachers/:id', (req, res) => {
  const id = parseInt(req.params.id);
  teachers = teachers.filter(teacher => teacher.id !== id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});