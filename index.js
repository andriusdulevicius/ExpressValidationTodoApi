//visa info npm express , kad paziureti nuo ko pradeti , ir kaip atrodo visas express remas
const express = require('express');
const { findTodoWithId, handleFindErr, handleDelete, postOneTodo, editTodo } = require('./helper/functions');
const todoDb = require('./DB/todoDb');

const app = express();

//MiddleWare
//to get request body parsed(uncoded)
app.use(express.json());

//get all todos
app.get('/api/todos', (req, res) => {
  res.json(todoDb);
});
//get one todo
app.get('/api/todos/:id', (req, res) => {
  const found = findTodoWithId(req.params.id);
  //req.params.id - bus nurodytas todo linke :id vietoje
  if (!found) {
    handleFindErr(req.params.id, res);
    return;
  }

  res.json(found);
});
//delete one todo

app.delete('/api/todos/:id', (req, res) => {
  const paramId = req.params.id;
  const found = findTodoWithId(paramId);

  if (!found) {
    handleFindErr(paramId, res);
    return;
  }
  handleDelete(found);
  res.json({ deleted: found, todoDb });
});
//post one todo

app.post('/api/todos/', (req, res) => {
  postOneTodo(req);
  res.json({
    msg: 'Success',
    todoDb,
  });
});

//update todos /// put route
/// api/todos/:id

app.put('/api/todos/:id', (req, res) => {
  const paramId = req.params.id;
  let found = findTodoWithId(paramId);

  if (!found) {
    handleFindErr(paramId, res);
    return;
  }
  editTodo(found, req);

  res.json({ updated: found, todoDb });
});

app.listen(3000, () => console.log('server is runing'));
