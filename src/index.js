import PubSub from 'pubsub-js';
import {
  PRINT_LIST,
  GET_ACTION,
  CREATE_TODO,
  EDIT_TODO,
  DELETE_TODO,
  CREATE_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT,
} from './event-types.js';
import todo from './todo.js';
import TodoIO from './todo-io.js';
import TodoController from './todo-controller.js';
import project from './project.js'
import ProjectController from './project-controller.js';


// --------- TESTING TODOS ---------------

/*
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
setTimeout(() => PubSub.publish(DELETE_TODO, {index: 1}), 400);

// GET_ACTION
setTimeout(() => PubSub.publish(GET_ACTION), 500);
*/


// -------- TESTING PROJECTS ---------------

/*
// project objects
const testProj0 = project('myProj', 'a test', 'just me!');
console.log(testProj0);
const testProj1 = project('myProj1', 'test2', 'hello');

// CREATE - working
const testProjectList = [];
const testArgs1 = Object.assign(testProj0, {projectList: testProjectList});
const testArgs2 = Object.assign(testProj1, {projectList: testProjectList})
PubSub.publish(CREATE_PROJECT, testArgs1);
PubSub.publish(CREATE_PROJECT, testArgs2);
console.log(testProjectList);

// EDIT - working
const editArgs1 = Object.assign(testArgs1, {index: 1});
PubSub.publish(EDIT_PROJECT, editArgs1);
console.log(testProjectList);

// DELETE -- working
PubSub.publish(DELETE_PROJECT, {index: 1, projectList: testProjectList});
console.log(testProjectList);
*/

