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

const Display = (function() {
  const root = document.getElementById('root');

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
    console.log('making new project');
    // TODO: Open "new project" form
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

  const setUpPage = function() {
    // todo
  };

  const renderProjectList = function(msg, projectList) {
    console.log(msg);
    // clear project list
    while (projectListUl.firstChild) {
      projectListUl.removeChild(projectListUl.firstChild);
    }

    // write a new one
    projectList.forEach((project, index) => {
      const projectLi = document.createElement('li');
      projectLi.textContent = project.title;
      projectLi.setAttribute('data-index', index);
      projectListUl.appendChild(projectLi);
      projectLi.addEventListener('click', (e) => {
        console.log('switching to project:');
        console.log(e.target);
        PubSub.publish(SWITCH_PROJECT, e.target.getAttribute('data-index'));
      })
    });
  };

  const renderProject = function(msg, project) {
    console.log(msg);

    // clear project div ...
    while (projectDiv.firstChild) {
      projectDiv.removeChild(projectDiv.firstChild);
    };
    // ... and write a new one

    // TODO: If no projects, write a message to make a new one
    try {
      let test = project.title;
    } catch (e) {
      console.log('No projects');
    }

    // title
    const titleHeader = document.createElement('h3');
    titleHeader.textContent = project.title;
    projectDiv.appendChild(titleHeader);

    // "new todo" button
    const newTodoButton = document.createElement('button');
    newTodoButton.textContent = "New Todo";
    newTodoButton.addEventListener('click', () => {
      console.log('creating new todo');
      // TODO: open "new todo" form
    });
    projectDiv.appendChild(newTodoButton);

    // "edit project" button
    const editProjectButton = document.createElement('button');
    editProjectButton.textContent = "Edit Project";
    editProjectButton.addEventListener('click', () => {
      console.log('editing project');
      // TODO: open "edit project" form (same as "new proj", kinda)
    });
    projectDiv.appendChild(editProjectButton);

    // "delete project" button
    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.textContent = "Delete Project";
    deleteProjectButton.addEventListener('click', (e) => {
      console.log('deleting project');
      // TODO: Get project index
      // Maybe e.target['data-index']
      // maybe publish data = project; del.proj. function
      // uses .findIndex() to get object
      PubSub.publish(DELETE_PROJECT, project)
    });
    projectDiv.appendChild(deleteProjectButton);

    // create a list to populate with todos
    const todoUl = document.createElement('ul');
    projectDiv.appendChild(todoUl);
    // ... and populate the list
    project.todoList.forEach((todo) => {
      renderTodo(todoUl, todo);
    });
  };

  const renderTodo = function(todoUl, todo) {
    const todoLi = document.createElement('li');
    // todoLi.setAttribute('data-index', "indexOf(todo)");
    todoUl.appendChild(todoLi);

    // 'Mark complete' button
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Mark Complete';
    todoLi.appendChild(completeButton);
    completeButton.addEventListener('click', () => {
      console.log('boop! complete.'); // TODO
    })
    
    // TODO: Priority indicator
    // const priorityButton = document.createElement('button');

    // Todo info (TODO: Make into just title)
    const textSpan = document.createElement('span');
    textSpan.textContent = `${todo.title}: ${todo.description}, ` + 
    `due ${todo.dueDate}. Priority ${todo.priority}`;
    todoLi.appendChild(textSpan);

    // draw edit button (pencil icon)
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit Todo';
    todoLi.appendChild(editButton);
    editButton.addEventListener('click', () => {
      console.log('beep! editing todo.'); // TODO
      // TODO: open edit dialog
    })

    // draw delete button (trash icon)
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Todo';
    todoLi.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
      console.log('boop! I\'m a delete button'); // TODO
      // PubSub.publish(DELETE_TODO, {index?})
    });
  };

  const displayProjectForm = function() {
    // const projectForm = document.getElementById('project-form');
    const formContainer = document.createElement('div');
    const titleHeader = document.createElement('h3');
    const projectForm = document.createElement('form');
    const titleLabel = document.createElement('label');
    const titleInput = document.createElement('input');
    const submitButton = document.createElement('input');

    formContainer.id = "form-container";
    root.appendChild(formContainer);

    titleHeader.textContent = "Project"; // TODO: Adjust to message
    formContainer.appendChild(titleHeader);

    projectForm.id = "project-form";
    formContainer.appendChild(projectForm);

    titleLabel.for = "title";
    titleLabel.textContent = "Project Title: ";
    projectForm.appendChild(titleLabel);

    titleInput.name = "title";
    titleInput.type = "text";
    titleInput.required = true;
    // TODO: Paste default text here: titleInput.value = ....;
    projectForm.appendChild(titleInput);

    submitButton.type = "submit";
    submitButton.value = "Save";
    projectForm.appendChild(submitButton);

    projectForm.addEventListener('submit', () => {
      console.log('form submitted!');
      console.log(e.target);
      e.preventDefault();
    });
  }

  const closeProjectForm = function() {
    const formContainer = document.getElementById('form-container');
    if (formContainer) formContainer.parentElement.removeChild(formContainer);
  }

  PubSub.subscribe(SET_UP_PAGE, setUpPage);
  PubSub.subscribe(RENDER_PROJECT_LIST, renderProjectList);
  PubSub.subscribe(RENDER_PROJECT, renderProject);
})();