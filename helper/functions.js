const todoDb = require('../DB/todoDb');

function findTodoWithId(id) {
  return todoDb.find((t) => t.id === +id);
}

function handleFindErr(paramId, res) {
  console.log('todo not found');

  //http status codes galima pasigooglinti
  return res.status(404).json({ error: `todo with id ${paramId} does not exist` });
}

module.exports = {
  findTodoWithId,
  handleFindErr,
};
