# TODO:
* Be able to tab through projects or separate lists of todos
  * When a user first opens the app, there should be some sort of ‘default’ project to which all of their todos are put. 
  * Users should be able to create new projects and choose which project their todos go into.

* The look of the User Interface is up to you, but it should be able to do the following:
    * view all projects
    * view all todos in each project (probably just the title and duedate.. perhaps changing color for different priorities)
    * expand a single todo to see/edit it’s details
    * delete a todo

* Consider external libraries like date-fns, which gives you a bunch of handy functions for formatting and manipulating dates and times

* Implement an MVC architecture



# FINISHED AND NOTES:
* Realized that testing functions with PubSub from /inside/ a module doesn't work! Other modules have not had the time to subscribe.
* An error in which TodoIO subscribers were not firing was fixed by reincluding the import statement of TodoIO in index.js.  Why was it working before?
* Making several publications to "Create todo" increased the size of the todo list before the calls to "print list" were shown even once - interesting.  Using "setTimeout()" worked to space them out.
* Create, edit, and delete are working 
* Enable several Todo Lists / projects
* Move 'topic constants' to a single place; make symbols
* Make a "Todo" object: either a class, module, or factory function
* Has properties: title, description, dueDate, priority
* Application logic (i.e. creating new todos, setting todos as complete, changing todo priority etc.) should be separate from the DOM-related stuff, so keep all of those things in separate modules.
* Use localStorage to save users' projects and todos

