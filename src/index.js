import './styles.css';
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

  // TODO: Display Page

  /* Todo logic -- working */
  const createTodo = function(msg, { title, description, dueDate, priority }) { //working
    console.log(msg);
    const newTodo = todo(title, description, dueDate, priority);
    activeProject.todoList.push(newTodo);
    PubSub.publish(RENDER_PROJECT, activeProject);
  };

  // edit
  const editTodo = function(msg, { index, title, description, dueDate, priority }) {
    console.log(msg);
    const newTodo = todo(title, description, dueDate, priority);
    activeProject.todoList.splice(index, 1, newTodo)
    PubSub.publish(RENDER_PROJECT, activeProject);
  };

  // delete/complete
  const deleteTodo = function(msg, { index }) {
    console.log(msg);
    activeProject.todoList.splice(index, 1);
    PubSub.publish(RENDER_PROJECT, activeProject);
  };
    // PubSub.publish(CREATE_TODO, info);

  let token0 = PubSub.subscribe(CREATE_TODO, createTodo);
  let token1 = PubSub.subscribe(EDIT_TODO, editTodo);
  let token2 = PubSub.subscribe(DELETE_TODO, deleteTodo);
  /* End Todo logic */


  /* Project Logic */
  // create 
  const createProject = function(msg, { title }) {
    console.log(msg);
    const newProject = project(title);
    projectList.push(newProject); 
    switchProject(SWITCH_PROJECT, (projectList.length-1));
    PubSub.publish(RENDER_PROJECT_LIST, projectList);
  };

  // edit
  const editProject = function(msg, { title }) {
    console.log(msg)
    activeProject.title = title;
    PubSub.publish(RENDER_PROJECT_LIST, projectList);
    PubSub.publish(RENDER_PROJECT, activeProject);
  };

  // delete/complete
  const deleteProject = function(msg, project) {
    console.log(msg);
    if (project === activeProject) PubSub.publish(SWITCH_PROJECT, 0);
    const index = projectList.findIndex((proj) => {
      return proj === project;
    });
    projectList.splice(index, 1);
    PubSub.publish(RENDER_PROJECT_LIST, projectList);
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

// ----------- TESTING DOM MANAGER -------------
// Working, using timeout at bottom -- huh

const testProj1 = project('Test Project 1');
const testProj2 = project('Test Project 2');
PubSub.publish(CREATE_PROJECT, testProj1);
PubSub.publish(CREATE_PROJECT, testProj2);

const testTodo = todo('Simona\'s birthday', 'Get her a present! :)', 'January 24', 'high');
const testTodo1 = todo('Socialize', 'Get in touch with friends', 'this week', 'medium');
const testTodo2 = todo('Synergize', 'Network', 'ASAP', 'critical')

PubSub.publish(CREATE_TODO, testTodo);
PubSub.publish(CREATE_TODO, testTodo1);
PubSub.publish(CREATE_TODO, testTodo2);

// WRITE PROJECT LIST AND PROJECT
PubSub.publish(RENDER_PROJECT_LIST, Application.projectList);
setTimeout(() => {
  PubSub.publish(RENDER_PROJECT, Application.getActiveProject());
});
/**/