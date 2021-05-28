//visa info npm express , kad paziureti nuo ko pradeti , ir kaip atrodo visas express remas
const express = require('express');
const { findTodoWithId, handleFindErr } = require('./helper/functions');
const todoDb = require('./DB/todoDb');

const app = express();

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
  //istrinam todo su splice, nes todoDb yra const, mes rasim norimo istrinti todo index ir pasalinsim
  const index = todoDb.indexOf(found);
  todoDb.splice(index, 1);
  res.json({ deleted: found, todoDb });
});

app.listen(3000, () => console.log('server is runing'));
