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
  SET_UP_PAGE,
  RENDER_PROJECT_LIST,
  RENDER_PROJECT,
  SWITCH_PROJECT,
} from './event-types.js';
import todo from './todo.js';
import TodoIO from './todo-io.js';
import project from './project.js';
import Display from './dom-manager.js';


//WIP
const Application = (function() {
  // todo: get project list from storage
  const projectList = [];
  // todo: choose active project (currently a placeholder)
  let activeProject = project('');
  const getActiveProject = () => {
    return activeProject;
  }
  
  if (projectList.length == 0) {
    // make default project
    // make it active
  }; 

  // Display Page
    // -Show project (display project)
    // -Show each todo  


  /* Todo logic -- working */
  const createTodo = function(msg, { title, description, dueDate, priority }) { //working
    // This happens on form completion
    console.log(msg);
    const newTodo = todo(title, description, dueDate, priority);
    activeProject.todoList.push(newTodo);
    getNextAction();
  };

  // edit
  const editTodo = function(msg, { index, title, description, dueDate, priority }) {
    console.log(msg);
    const newTodo = todo(title, description, dueDate, priority);
    activeProject.todoList.splice(index, 1, newTodo)
    getNextAction();
  };

  // delete/complete
  const deleteTodo = function(msg, { index }) {
    console.log(msg);
    activeProject.todoList.splice(index, 1);
    getNextAction();
  };

  const getNextAction = function() {
    PubSub.publish(PRINT_LIST, activeProject.todoList);
    // PubSub.publish(GET_ACTION); // TODO: Remove when DOM is online
  }

  let token0 = PubSub.subscribe(CREATE_TODO, createTodo);
  let token1 = PubSub.subscribe(EDIT_TODO, editTodo);
  let token2 = PubSub.subscribe(DELETE_TODO, deleteTodo);
  /* End Todo logic */


  /* Project Logic -- working */
  // create 
  const createProject = function(msg, { title }) {
    console.log(msg);
    const newProject = project(title);
    projectList.push(newProject); 
    activeProject = newProject;
    // getNextAction();
  };

  // edit
  const editProject = function(msg, { index, title }) {
    console.log(msg)
    const newProject = project(title);
    projectList.splice(index, 1, newProject)
    // getNextAction();
  };

  // delete/complete
  const deleteProject = function(msg, { index }) {
    console.log(msg);
    projectList.splice(index, 1);
    // getNextAction();
  };

  let token3 = PubSub.subscribe(CREATE_PROJECT, createProject);
  let token4 = PubSub.subscribe(EDIT_PROJECT, editProject);
  let token5 = PubSub.subscribe(DELETE_PROJECT, deleteProject);
  /* End Project Logic */

  const switchProject = function(msg, index) {
    console.log(msg);
    activeProject = projectList[index];
    PubSub.publish(RENDER_PROJECT, activeProject);
  }

  PubSub.subscribe(SWITCH_PROJECT, switchProject);
 
  return {
    projectList, // for testing purposes
    activeProject,
    getActiveProject,
  }

})();




// ----------- TESTING PROTOTYPAL INHERITANCE -------

/*
const project = function() {
  const todoList = [];
  return Object.assign(Object.create(Object.getPrototypeOf(TodoController)), {todoList});
}

const TodoController = (function() {
  const proto = {
    add: function() {
      console.log(this);
      this.todoList.push('hi');
    },
    test: () => console.log('test successful!'),
  }
  return Object.create(proto);
})();



TodoController.test()
console.log('TodoController prototype:');
console.log(Object.getPrototypeOf(TodoController));

console.log('this:');
console.log(this)



const myProj = project();
console.log('myProj prototype:');

console.log(Object.getPrototypeOf(myProj));

console.log('testing myProj.test():');
myProj.test();

console.log('Testing myProj.todoList and add():');
console.log(myProj.todoList);
console.log('adding:');
myProj.add(); //works!
//myProj.add.call(myProj) worked with 'this'!
console.log(myProj.todoList);
*/



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
const testProj1 = project('myProj');
console.log('testProj1:');
console.log(testProj1);
const testProj2 = project('myProj1');

// CREATE - working
PubSub.publish(CREATE_PROJECT, testProj1);
PubSub.publish(CREATE_PROJECT, testProj2);
console.log('project list after two create calls:');
console.log(Application.projectList);

// EDIT -- working
const editArgs1 = Object.assign(testProj1, {index: 1});
setTimeout(() => {
  PubSub.publish(EDIT_PROJECT, editArgs1);
  console.log('project list after edit call:');
  console.log(Application.projectList);
}, 5000);


// DELETE -- working
setTimeout(() => {
  PubSub.publish(DELETE_PROJECT, {index: 1});
  console.log(Application.projectList);
}, 10000);
/**/


// ----------- TESTING DOM MANAGER -------------
// Working, using timeout at bottom -- huh
// project objectsconsole
const testProj1 = project('Test Project 1');
console.log('testProj1:');
console.log(testProj1);
const testProj2 = project('Test Project 2');

// CREATE - working
PubSub.publish(CREATE_PROJECT, testProj1);
PubSub.publish(CREATE_PROJECT, testProj2);
console.log('project list after two create calls:');
console.log(Application.projectList);

// todo objects
const testTodo = todo('Simona\'s birthday', 'Get her a present! :)', 'January 24', 'high');
const testTodo1 = todo('Socialize', 'Get in touch with friends', 'this week', 'medium');
const testTodo2 = todo('Synergize', 'Network', 'ASAP', 'critical')

// CREATE
PubSub.publish(CREATE_TODO, testTodo);
PubSub.publish(CREATE_TODO, testTodo1);
PubSub.publish(CREATE_TODO, testTodo2);



// WRITE PROJECT LIST
PubSub.publish(RENDER_PROJECT_LIST, Application.projectList);

setTimeout(() => {
  console.log('Active project:');
  console.log(Application.getActiveProject());
  PubSub.publish(RENDER_PROJECT, Application.getActiveProject());
});
/**/