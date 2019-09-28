import "./styles.css";
import PubSub from "pubsub-js";
import {
  CREATE_TODO,
  EDIT_TODO,
  DELETE_TODO,
  CREATE_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT,
  RENDER_PROJECT_LIST,
  RENDER_PROJECT,
  SWITCH_PROJECT
} from "./event-types";
import todo from "./todo";
import project from "./project";
import "./dom-manager";

const Application = (function() {
  /* Storage logic */
  const saveProjectList = function() {
    localStorage.setItem("projectList", JSON.stringify(projectList));
  };

  const loadProjectList = function() {
    const storedString = localStorage.getItem("projectList");
    const storedList = JSON.parse(storedString);
    const newList = storedList.map(p => {
      const newTodoList = p.todoList.map(t => {
        return todo(t.title, t.description, t.dueDate, t.priority);
      });
      const newProject = project(p.title, newTodoList);
      return newProject;
    });
    return newList;
  };
  /* ... end storage logic */

  /* Todo logic --  */
  const createTodo = function(msg, { title, description, dueDate, priority }) {
    // working
    console.log(msg);
    const newTodo = todo(title, description, dueDate, priority);
    activeProject.todoList.push(newTodo);
    PubSub.publish(RENDER_PROJECT, activeProject);
    saveProjectList();
  };

  const editTodo = function(
    msg,
    { index, title, description, dueDate, priority }
  ) {
    console.log(msg);
    const newTodo = todo(title, description, dueDate, priority);
    activeProject.todoList.splice(index, 1, newTodo);
    PubSub.publish(RENDER_PROJECT, activeProject);
    saveProjectList();
  };

  const deleteTodo = function(msg, { index }) {
    console.log(msg);
    activeProject.todoList.splice(index, 1);
    PubSub.publish(RENDER_PROJECT, activeProject);
    saveProjectList();
  };
  /* End Todo logic */

  /* Project Logic */
  const createProject = function(msg, { title }) {
    console.log(msg);
    const newProject = project(title);
    projectList.push(newProject);
    switchProject(SWITCH_PROJECT, projectList.length - 1);
    PubSub.publish(RENDER_PROJECT_LIST, projectList);
    saveProjectList();
  };

  const editProject = function(msg, { title }) {
    console.log(msg);
    activeProject.title = title;
    PubSub.publish(RENDER_PROJECT_LIST, projectList);
    PubSub.publish(RENDER_PROJECT, activeProject);
    saveProjectList();
  };

  const deleteProject = function(msg, targetProject) {
    console.log(msg);
    if (targetProject === activeProject) PubSub.publish(SWITCH_PROJECT, 0);
    const index = projectList.findIndex(proj => proj === project);
    projectList.splice(index, 1);
    PubSub.publish(RENDER_PROJECT_LIST, projectList);
    saveProjectList();
  };

  const switchProject = function(msg, index) {
    console.log(msg);
    activeProject = projectList[index];
    PubSub.publish(RENDER_PROJECT, activeProject);
  };
  /* End Project Logic */

  // Subscriptions
  const token0 = PubSub.subscribe(CREATE_TODO, createTodo);
  const token1 = PubSub.subscribe(EDIT_TODO, editTodo);
  const token2 = PubSub.subscribe(DELETE_TODO, deleteTodo);
  const token3 = PubSub.subscribe(CREATE_PROJECT, createProject);
  const token4 = PubSub.subscribe(EDIT_PROJECT, editProject);
  const token5 = PubSub.subscribe(DELETE_PROJECT, deleteProject);
  const token6 = PubSub.subscribe(SWITCH_PROJECT, switchProject);

  // get project list from storage
  const projectList = [];
  if (localStorage.getItem("projectList")) {
    projectList.push(...loadProjectList());
  }

  // choose active project
  let activeProject = projectList[0] || null;
  // const getActiveProject = () => { return activeProject }; // for unit tests

  // optionally load sample projects
  if (projectList.length === 0 && confirm("Load sample projects?")) {
    loadTestProjects();
  }

  // display lists
  PubSub.publish(RENDER_PROJECT_LIST, projectList);
  PubSub.publish(RENDER_PROJECT, activeProject);

  /*
  return {
    projectList, // for testing purposes
    activeProject,
    getActiveProject,
    saveProjectList,
    loadProjectList
  } */
})();

function loadTestProjects() {
  console.log("loading test projects");

  const testProj1 = project("Test Project 1");
  const testProj2 = project("Test Project 2");
  PubSub.publish(CREATE_PROJECT, testProj1);
  PubSub.publish(CREATE_PROJECT, testProj2);

  const testTodo = todo(
    "Simona's birthday",
    "Get her a present! :)",
    "January 24",
    "high"
  );
  const testTodo1 = todo(
    "Socialize",
    "Get in touch with friends",
    "this week",
    "medium"
  );
  const testTodo2 = todo("Synergize", "Network", "ASAP", "critical");

  PubSub.publish(CREATE_TODO, testTodo);
  PubSub.publish(CREATE_TODO, testTodo1);
  PubSub.publish(CREATE_TODO, testTodo2);
}
