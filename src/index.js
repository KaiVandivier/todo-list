import PubSub from 'pubsub-js';
import todo from './todo.js';
import TodoIO from './todoConsole.js';

/* PubSub syntax */
const mySubscriber = function (msg, data) {
  console.log( msg, data );
};
var token = PubSub.subscribe('MY TOPIC', mySubscriber);
PubSub.publish('MY TOPIC', 'hello world!');
// */

const TodoController = (function() {
  /* TODO */
})();

// ------ Testing --------

const testTodo = todo('Simona\'s birthday', 'Get her a present! :)', 'January 24', 'high');
const testTodo1 = todo('Socialize', 'Get in touch with friends', 'this week', 'medium');
const testTodo2 = todo('Synergize', 'Network', 'ASAP', 'critical')

const todoList = [testTodo, testTodo1, testTodo2];

TodoIO.printList(todoList);
let returnVal = TodoIO.getAction();
console.log(returnVal);
let indexVal = TodoIO.getIndex();
console.log(indexVal);