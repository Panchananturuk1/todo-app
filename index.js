const express = require('express');
const app = express();

// data structure to store todos
let todos = [
  { id: 1, todo: 'Clean the room', status: false },
  { id: 2, todo: 'Go to the gym', status: true },
  { id: 3, todo: 'Go to the college', status: true }
];

// GET /todo
app.get('/todo', (req, res) => {
  res.send(todos);
});

// POST /todo
app.post('/todo', (req, res) => {
  const newTodo = req.body;
  newTodo.id = todos.length + 1;
  todos.push(newTodo);
  res.send(newTodo);
});

// PUT /todo/:id
app.put('/todo/:id', (req, res) => {
  const updatedTodo = req.body;
  const id = req.params.id;
  todos = todos.map(todo => {
    if (todo.id === Number(id)) {
      return updatedTodo;
    }
    return todo;
  });
  res.send(updatedTodo);
});

// DELETE /todo/:id
app.delete('/todo/:id', (req, res) => {
  const id = req.params.id;
  todos = todos.filter(todo => todo.id !== Number(id));
  res.send({});
});

app.listen(3000, () => {
  console.log('Todo API is running on port 3000');
});
