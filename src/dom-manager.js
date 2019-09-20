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
} from './event-types.js';

const Display = (function() {
  const root = document.getElementById('root');

  // Project List Div (container)
  const projectListDiv = document.createElement('div');
  projectListDiv.id = 'project-list-div';
  root.appendChild(projectListDiv);

  // Project List Ul
  const projectListUl = document.createElement('ul');
  projectListUl.id = 'project-list-ul';
  projectListDiv.appendChild(projectListUl);

  // Project Div (container)
  const projectDiv = document.createElement('div');
  root.appendChild(projectDiv);
  projectDiv.id = 'project-div'

  const setUpPage = function() {
    // todo
  };

  const renderProjectList = function(msg, projectList) {
    console.log(msg);
    // clear project list
    projectListUl.childNodes.forEach((child) => {
      projectListUl.removeChild(child);
    });

    // write a new one
    projectList.forEach((project) => {
      const projectLi = document.createElement('li');
      projectLi.textContent = project.title;
      projectListUl.appendChild(projectLi);
    });
  };

  const renderProject = function(msg, project) {
    // todo
    console.log(msg);
    // clear project div
    projectDiv.childNodes.forEach((child) => {
      projectDiv.removeChild(child);
    });

    // write a new one
    const titleH2 = document.createElement('h1');
    titleH2.textContent = project.title;
    projectDiv.appendChild(titleH2);

    const todoUl = document.createElement('ul');
    projectDiv.appendChild(todoUl);

    project.todoList.forEach((todo) => {
      const todoLi = document.createElement('li');
      // TODO: flesh this out with buttons etc.
      todoLi.textContent = `${todo.title}: ${todo.description}, ` + 
      `due ${todo.dueDate}. Priority ${todo.priority}`;
      todoUl.appendChild(todoLi);
    });
  };

  PubSub.subscribe(SET_UP_PAGE, setUpPage);
  PubSub.subscribe(RENDER_PROJECT_LIST, renderProjectList);
  PubSub.subscribe(RENDER_PROJECT, renderProject);
})();