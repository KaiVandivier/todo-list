import PubSub from 'pubsub-js';

/*
1. Print list (with indices)
2. Ask for input: new? edit? delete? (finish?)
3. Send that action to PubSub
*/

// TODO: Move these
const PRINT_LIST = 'print list';
const GET_ACTION = 'get action';
const GET_INDEX = 'get index';
const CREATE_TODO = 'create todo';
const EDIT_TODO = 'edit todo';
const DELETE_TODO = 'delete todo';

const TodoIO = (function() {
  const printList = function(_, todoList) {
    console.log('----- TODO LIST -----');
    todoList.forEach((todo, index) => {
      console.log(`${index}. ${todo.title}: ${todo.description}, ` + 
        `due ${todo.dueDate}. Priority ${todo.priority}`)
    })
  };

  const getAction = function() {
    const action = prompt(`Enter an action:\n'new', 'edit', or 'delete'`)
    if (['new', 'edit', 'delete'].includes(action)) {
      console.log(action);
      return action;
      // TODO: Call that actual action by publishing
    }
    else return false;
    // TODO: Publish a call to that actual action
  };

  const getIndex = function() {
    const index = Number(prompt('Enter index of target entry:'));
    if (!isNaN(index)) {
      console.log(index);
      return index;
    }
    else return false;
  }

  let token1 = PubSub.subscribe(PRINT_LIST, printList);
  let token2 = PubSub.subscribe(GET_ACTION, getAction);
  let token3 = PubSub.subscribe(GET_INDEX, getIndex);

  return {
    printList,
    getAction,
    getIndex,
  };
})();

export default TodoIO;