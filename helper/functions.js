const todoDb = require('../DB/todoDb');

function findTodoWithId(id) {
  return todoDb.find((t) => t.id === +id);
}

module.exports = {
  findTodoWithId,
};
