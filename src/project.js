// Make a project object

const project = function(title, todoList) {
  todoList = todoList || [];
  return {
    title,
    todoList
  }
};

export default project;