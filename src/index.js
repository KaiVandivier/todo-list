import PubSub from 'pubsub-js';
import todo from './todo.js';
import TodoIO from './todoConsole.js';

/* PUBSUB SYNTAX
const mySubscriber = (msg, data) => {
  console.log( msg, data );
};
var token = PubSub.subscribe('MY TOPIC', mySubscriber);
PubSub.publish('MY TOPIC', 'hello world!');        */

// TODO: Get these from a separate file
// Also make them symbols?
const PRINT_LIST = 'print list';
const GET_ACTION = 'get action';
const GET_INDEX = 'get index';
const CREATE_TODO = 'create todo';

const TodoController = (function() {
  let todoList = [];

  const createTodo = function(msg, args) { //working
    // This happens on form completion
    console.log(msg);
    const newTodo = todo(args.title, args.description, args.dueDate, args.priority);
    todoList.push(newTodo);
    PubSub.publish(PRINT_LIST, todoList);
    // TODO: get next action ("Print" can go in there too)
  };

  // edit
  const editTodo = function(msg, args) { // needs testing
    // Expecting and object with:
    // 1) an index and 2) new values for the entry
    const targetIndex = args.index;
    const newTodo = todo(args.title, args.description, args.dueDate,
      args.priority);
    todoList.splice(targetIndex, 1, newTodo)


  };

  // delete/complete
  const deleteTodo = function(msg, removalIndex) { // needs testing
    // Expecting "data" to be index to remove
    // Same as edit
    const targetIndex = -1; // TODO; ".findIndex()"
    todoList.splice(removalIndex, 1);
  };

  let token = PubSub.subscribe(CREATE_TODO, createTodo);

  return {
    todoList,
  }
})();



// ------ Testing --------

const testTodo = todo('Simona\'s birthday', 'Get her a present! :)', 'January 24', 'high');
const testTodo1 = todo('Socialize', 'Get in touch with friends', 'this week', 'medium');
const testTodo2 = todo('Synergize', 'Network', 'ASAP', 'critical')

PubSub.publish(CREATE_TODO, testTodo);
PubSub.publish(CREATE_TODO, testTodo1);
PubSub.publish(CREATE_TODO, testTodo2);

// PubSub.publish(PRINT_LIST, todoList);

// const testTodoList = [testTodo, testTodo1, testTodo2];

// PubSub.publish(PRINT_LIST, testTodoList);
// PubSub.publish(GET_ACTION);
// PubSub.publish(GET_INDEX);
