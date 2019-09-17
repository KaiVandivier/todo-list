// use prompt

/*

1. Print list (with indices)
2. Ask for input: new? edit? delete? (finish?)
3. Send that action to PubSub

*/

const TodoIO = (function() {
  const printList = function(todoList) {
    todoList.forEach((todo, index) => {
      console.log(`${index}. ${todo.title}: ${todo.description}, ` + 
        `due ${todo.dueDate}. Priority ${todo.priority}`)
    })
  };

  const getAction = function() {
    const action = prompt(`Enter an action:\n'new', 'edit', or 'delete'`)
    if (['new', 'edit', 'delete'].includes(action)) return action;
    else return false;
  };

  const getIndex = function() {
    const index = Number(prompt('Enter index of target entry:'));
    if (!isNaN(index)) return index;
    else return false;
  }


  return {
    printList,
    getAction,
    getIndex,
  };
})();

export default TodoIO;