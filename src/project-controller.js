// Create, edit, and delete projects

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
import project from './project.js';

const ProjectController = (function() {
  // create 
  const createProject = function(msg, { projectList, title, description, participants }) {
    // This happens on form completion
    console.log(msg);
    const newProject = project(title, description, participants);
    projectList.push(newProject); 
    // getNextAction();
  };

  // edit
  const editProject = function(msg, { projectList, index, title, description, participants }) {
    console.log(msg)
    const newProject = project(title, description, participants);
    projectList.splice(index, 1, newProject)
    // getNextAction();
  };

  // delete/complete
  const deleteProject = function(msg, { projectList, index }) {
    console.log(msg);
    projectList.splice(index, 1);
    // getNextAction();
  };

  let token0 = PubSub.subscribe(CREATE_PROJECT, createProject);
  let token1 = PubSub.subscribe(EDIT_PROJECT, editProject);
  let token2 = PubSub.subscribe(DELETE_PROJECT, deleteProject);

  return
})();