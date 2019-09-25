import PubSub from 'pubsub-js';
import {
  CREATE_TODO,
  EDIT_TODO,
  DELETE_TODO,
  CREATE_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT,
  RENDER_PROJECT_LIST,
  RENDER_PROJECT,
  SWITCH_PROJECT,
} from './event-types.js';

const Display = (function() {
  const root = document.getElementById('root');
  let submitProjectFormMethod = null;
  let submitTodoFormMethod = null;
  let previousActiveElement = null;

  // Project List Div (container)
  const projectListDiv = document.createElement('div');
  projectListDiv.id = 'project-list-div';
  root.appendChild(projectListDiv);
  // Project List Header
  const projectListHeader = document.createElement('h2');
  projectListHeader.textContent = "Project List";
  projectListDiv.appendChild(projectListHeader);
  // New Project Button
  const newProjectButton = document.createElement('button');
  newProjectButton.textContent = "New Project";
  newProjectButton.addEventListener('click', () => {
    displayProjectDialog(CREATE_PROJECT, {});
  });
  projectListDiv.appendChild(newProjectButton);
  // Project List Ul (to be populated by "render ... " below)
  const projectListUl = document.createElement('ul');
  projectListUl.id = 'project-list-ul';
  projectListDiv.appendChild(projectListUl);

  // Project Div (container)
  const projectDiv = document.createElement('div');
  root.appendChild(projectDiv);
  projectDiv.id = 'project-div'

  const renderProjectList = function(msg, projectList) {
    console.log(msg);
    // clear project list
    while (projectListUl.firstChild) {
      projectListUl.removeChild(projectListUl.firstChild);
    } // ... to write a new one

    projectList.forEach((project, index) => {
      const projectLi = document.createElement('li');
      projectLi.textContent = project.title;
      projectLi.setAttribute('data-index', index);
      projectListUl.appendChild(projectLi);
      projectLi.addEventListener('click', (e) => {
        PubSub.publish(SWITCH_PROJECT, e.target.getAttribute('data-index'));
      })
    });
  };

  const renderProject = function(msg, project) {
    console.log(msg);

    // clear project div ...
    while (projectDiv.firstChild) {
      projectDiv.removeChild(projectDiv.firstChild);
    }; // ... to write a new one

    // title
    const titleHeader = document.createElement('h3');
    try { // handle "no active projects"
      titleHeader.textContent = project.title;
      projectDiv.appendChild(titleHeader);
    } catch(e) {
      titleHeader.textContent = "No active projects";
      projectDiv.appendChild(titleHeader);
      return;
    }

    // "new todo" button
    const newTodoButton = document.createElement('button');
    newTodoButton.textContent = "New Todo";
    newTodoButton.addEventListener('click', () => {
      displayTodoDialog(CREATE_TODO, {});
    }); 
    projectDiv.appendChild(newTodoButton);

    // "edit project" button
    const editProjectButton = document.createElement('button');
    editProjectButton.textContent = "Edit Project";
    editProjectButton.addEventListener('click', () => {
      console.log('editing project');
      displayProjectDialog(EDIT_PROJECT, {project});
    });
    projectDiv.appendChild(editProjectButton);

    // "delete project" button
    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.textContent = "Delete Project";
    deleteProjectButton.addEventListener('click', (e) => {
      PubSub.publish(DELETE_PROJECT, project)
    });
    projectDiv.appendChild(deleteProjectButton);

    // create a list to populate with todos
    const todoUl = document.createElement('ul');
    projectDiv.appendChild(todoUl);
    // ... and populate the list
    project.todoList.forEach((todo, index) => {
      renderTodo(todoUl, todo, index);
    });
  };

  const renderTodo = function(todoUl, todo, index) {
    const todoLi = document.createElement('li');
    todoLi.setAttribute('data-index', index);
    todoUl.appendChild(todoLi);

    // 'Mark complete' button
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Mark Complete';
    todoLi.appendChild(completeButton);
    completeButton.addEventListener('click', toggleTodoComplete);

    function toggleTodoComplete(e) {
      const todoSpan = e.target.parentElement.querySelector('span');
      todoSpan.classList.toggle('complete');
    }
    
    // TODO: Priority indicator
    // const priorityButton = document.createElement('button');

    // Todo info (TODO: Make into just title)
    const textSpan = document.createElement('span');
    textSpan.textContent = `  ${todo.title}: ${todo.description}, ` + 
    `due ${todo.dueDate}. Priority ${todo.priority}  `;
    todoLi.appendChild(textSpan);

    // draw edit button (todo: pencil icon)
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    todoLi.appendChild(editButton);
    editButton.addEventListener('click', () => {
      console.log('beep! editing todo.');
      displayTodoDialog(EDIT_TODO, {todo, index});
    });

    // draw delete button (trash icon)
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    todoLi.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
      PubSub.publish(DELETE_TODO, {index});
    });
  };


  // Project Dialog setup: 
  function displayProjectDialog(method, data) { 
    // selector setup
    const dialog = document.getElementById('project-form-container');
    const dialogMask = dialog.querySelector('div.dialog-mask');
    const form = dialog.querySelector('form#project-form');

    // Save active element
    previousActiveElement = document.activeElement;

    // Show the dialog
    dialog.classList.add('opened');
    
    // Populate fields appropriately for "new" or "edit"
    if (method === CREATE_PROJECT) {
      form.elements.title.value = "New Project"; 
    } else if (method === EDIT_PROJECT) {
      form.elements.title.value = data.project.title;
    }

    // Listen for form completion
    submitProjectFormMethod = submitProjectForm.bind({method, data});
    form.addEventListener('submit', submitProjectFormMethod);

    // Add listeners to close window
    dialogMask.addEventListener('click', closeProjectDialog);
    window.addEventListener('keydown', checkCloseProjectDialog);
    dialog.querySelector('button.close').addEventListener('click', closeProjectDialog);

    // Focus the dialog
    dialog.querySelector('input').focus();
  }

  function submitProjectForm(e) {
    console.log('form submitted!');
    const newData = Object.assign(this.data, {title: e.target.elements.title.value}); // handles either "edit" or "new"
    PubSub.publish(this.method, newData)
    e.preventDefault(); // stay on same page
    closeProjectDialog();
  }

  function checkCloseProjectDialog(e) {
    if (e.keyCode === 27) closeProjectDialog();
  }

  function closeProjectDialog() {
    // selector setup
    const dialog = document.getElementById('project-form-container');
    const dialogMask = dialog.querySelector('div.dialog-mask');
    const form = document.getElementById('project-form');

    // Remove event listeners
    dialogMask.removeEventListener('click', closeProjectDialog);
    window.removeEventListener('keydown', checkCloseProjectDialog);
    dialog.querySelector('button.close').removeEventListener('click',
      closeProjectDialog);
    form.removeEventListener('submit', submitProjectFormMethod);

    dialog.classList.remove('opened');

    // Return focus outside of the modal
    previousActiveElement.focus();
  }

  // Todo Dialog setup:
  function displayTodoDialog(method, data) {    
    // selector setup
    const dialog = document.getElementById('todo-form-container');
    const dialogMask = dialog.querySelector('div.dialog-mask');
    const form = dialog.querySelector('form#todo-form');

    // Save active element
    previousActiveElement = document.activeElement;

    // Show the dialog
    dialog.classList.add('opened');

    // Populate fields appropriately for "new" or "edit"
    if (method === CREATE_TODO) {
      form.elements.title.value = "New Todo"; 
      form.elements.description.value = "";
      form.elements.priority.value = "normal";
      form.elements.dueDate.value = "today";
    } else if (method === EDIT_TODO) {
      form.elements.title.value = data.todo.title;
      form.elements.description.value = data.todo.description;
      form.elements.priority.value = data.todo.priority;
      form.elements.dueDate.value = data.todo.dueDate;
    }

    // Listen for form completion
    submitTodoFormMethod = submitTodoForm.bind({method, data});
    form.addEventListener('submit', submitTodoFormMethod);

    // Add listeners to close window
    dialogMask.addEventListener('click', closeTodoDialog);
    window.addEventListener('keydown', checkCloseTodoDialog);
    dialog.querySelector('button.close').addEventListener('click', closeTodoDialog);

    dialog.querySelector('input').focus();
  }

  function submitTodoForm(e) {
    console.log('form submitted!');
    const elements = e.target.elements;
    const properties = ['title', 'description', 'priority', 'dueDate'];
    const info = {};
    properties.forEach((p) => info[p] = elements[p].value);
    const newData = Object.assign(this.data, info)
    PubSub.publish(this.method, newData);
    e.preventDefault(); // stay on same page
    closeTodoDialog();
  }

  function checkCloseTodoDialog(e) {
    if (e.keyCode === 27) closeTodoDialog();
  }

  function closeTodoDialog() {
    // selector setup
    const dialog = document.getElementById('todo-form-container');
    const dialogMask = dialog.querySelector('div.dialog-mask');
    const form = dialog.querySelector('form#todo-form');

    // Remove event listeners
    dialogMask.removeEventListener('click', closeTodoDialog);
    window.removeEventListener('keydown', checkCloseTodoDialog);
    dialog.querySelector('button.close').removeEventListener('click',
      closeTodoDialog);
    form.removeEventListener('submit', submitTodoFormMethod);

    dialog.classList.remove('opened');

    // Return focus outside of the modal
    previousActiveElement.focus();
  }

  PubSub.subscribe(RENDER_PROJECT_LIST, renderProjectList);
  PubSub.subscribe(RENDER_PROJECT, renderProject);
})();