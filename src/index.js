import PubSub from 'pubsub-js';
import todo from './todo.js';
import TodoIO from './todo-io.js';
import {
  PRINT_LIST,
  GET_ACTION,
  CREATE_TODO,
  EDIT_TODO,
  DELETE_TODO,
} from './event-types.js';

const TodoController = (function() {
  let todoList = [];

  // These will need to accept an argument of the list they are editing...
    // in which case, the DOM will need to sense which project is active
  // OR, making this into a factory function
    // only the "active" project will have subscriptions
    // (Achieve this by removing subscriptions to CRUD topics from the inactive projects)
    // Would these functions move to a prototype?

  const createTodo = function(msg, { title, description, dueDate, priority }) { //working
    // This happens on form completion
    console.log(msg);
    const newTodo = todo(title, description, dueDate, priority);
    todoList.push(newTodo); // will need an edit to work with projects
    getNextAction();
  };

  // edit
  const editTodo = function(msg, { index, title, description, dueDate, priority }) {
    // Expecting an object with:
    // 1) an index and 2) new values for the entry
    console.log(msg)
    const targetIndex = index;
    const newTodo = todo(title, description, dueDate, priority);
    todoList.splice(targetIndex, 1, newTodo)
    getNextAction();
  };

  // delete/complete
  const deleteTodo = function(msg, removalIndex) {
    // Expecting "data" to be index to remove
    console.log(msg);
    todoList.splice(removalIndex, 1);
    getNextAction();
  };

  const getNextAction = function() {
    PubSub.publish(PRINT_LIST, todoList);
    // PubSub.publish(GET_ACTION); // TODO: Remove when DOM is online
  }

  let token = PubSub.subscribe(CREATE_TODO, createTodo);
  let token1 = PubSub.subscribe(EDIT_TODO, editTodo);
  let token2 = PubSub.subscribe(DELETE_TODO, deleteTodo);

  return
})();



// ------ Testing --------


const testTodo = todo('Simona\'s birthday', 'Get her a present! :)', 'January 24', 'high');
const testTodo1 = todo('Socialize', 'Get in touch with friends', 'this week', 'medium');
const testTodo2 = todo('Synergize', 'Network', 'ASAP', 'critical')

// CREATE
PubSub.publish(CREATE_TODO, testTodo);
PubSub.publish(CREATE_TODO, testTodo1);
PubSub.publish(CREATE_TODO, testTodo2);

// EDIT
const newTestTodo = todo('A', 'B', 'C', 'D');
const editTest = Object.assign({index: 1}, newTestTodo)
setTimeout(() => PubSub.publish(EDIT_TODO, editTest), 300);

// DELETE
setTimeout(() => PubSub.publish(DELETE_TODO, 1), 400);

// GET_ACTION
setTimeout(() => PubSub.publish(GET_ACTION), 500);

