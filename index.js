//visa info npm express , kad paziureti nuo ko pradeti , ir kaip atrodo visas express remas
const express = require('express');

const app = express();

const todoDb = [
  { id: 1, title: 'Go do stuff', done: false },
  { id: 2, title: 'Go do sports', done: true },
  { id: 3, title: 'Go buy milk', done: false },
];

app.get('/api/todos', (req, res) => {
  res.json(todoDb);
});

app.listen(3000, () => console.log('server is runing'));
