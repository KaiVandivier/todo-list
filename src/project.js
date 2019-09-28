// Make a project object

const project = function project(title, todoListIn) {
  const todoList = todoListIn || [];
  return {
    title,
    todoList
  };
};

export default project;
