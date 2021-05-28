//visa info npm express , kad paziureti nuo ko pradeti , ir kaip atrodo visas express remas
const express = require('express');
const { findTodoWithId } = require('./helper/functions');
const todoDb = require('./DB/todoDb');

const app = express();

app.get('/api/todos', (req, res) => {
  res.json(todoDb);
});

app.get('/api/todos/:id', (req, res) => {
  const found = findTodoWithId(req.params.id);

  res.json({ result: found });
});

app.listen(3000, () => console.log('server is runing'));
