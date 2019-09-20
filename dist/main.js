/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/pubsub-js/src/pubsub.js":
/*!**********************************************!*\
  !*** ./node_modules/pubsub-js/src/pubsub.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {/**\n * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk\n * License: MIT - http://mrgnrdrck.mit-license.org\n *\n * https://github.com/mroderick/PubSubJS\n */\n\n(function (root, factory){\n    'use strict';\n\n    var PubSub = {};\n    root.PubSub = PubSub;\n\n    var define = root.define;\n\n    factory(PubSub);\n\n    // AMD support\n    if (typeof define === 'function' && define.amd){\n        define(function() { return PubSub; });\n\n        // CommonJS and Node.js module support\n    } else if (true){\n        if (module !== undefined && module.exports) {\n            exports = module.exports = PubSub; // Node.js specific `module.exports`\n        }\n        exports.PubSub = PubSub; // CommonJS module 1.1.1 spec\n        module.exports = exports = PubSub; // CommonJS\n    }\n\n}(( typeof window === 'object' && window ) || this, function (PubSub){\n    'use strict';\n\n    var messages = {},\n        lastUid = -1;\n\n    function hasKeys(obj){\n        var key;\n\n        for (key in obj){\n            if ( obj.hasOwnProperty(key) ){\n                return true;\n            }\n        }\n        return false;\n    }\n\n    /**\n     * Returns a function that throws the passed exception, for use as argument for setTimeout\n     * @alias throwException\n     * @function\n     * @param { Object } ex An Error object\n     */\n    function throwException( ex ){\n        return function reThrowException(){\n            throw ex;\n        };\n    }\n\n    function callSubscriberWithDelayedExceptions( subscriber, message, data ){\n        try {\n            subscriber( message, data );\n        } catch( ex ){\n            setTimeout( throwException( ex ), 0);\n        }\n    }\n\n    function callSubscriberWithImmediateExceptions( subscriber, message, data ){\n        subscriber( message, data );\n    }\n\n    function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){\n        var subscribers = messages[matchedMessage],\n            callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,\n            s;\n\n        if ( !messages.hasOwnProperty( matchedMessage ) ) {\n            return;\n        }\n\n        for (s in subscribers){\n            if ( subscribers.hasOwnProperty(s)){\n                callSubscriber( subscribers[s], originalMessage, data );\n            }\n        }\n    }\n\n    function createDeliveryFunction( message, data, immediateExceptions ){\n        return function deliverNamespaced(){\n            var topic = String( message ),\n                position = topic.lastIndexOf( '.' );\n\n            // deliver the message as it is now\n            deliverMessage(message, message, data, immediateExceptions);\n\n            // trim the hierarchy and deliver message to each level\n            while( position !== -1 ){\n                topic = topic.substr( 0, position );\n                position = topic.lastIndexOf('.');\n                deliverMessage( message, topic, data, immediateExceptions );\n            }\n        };\n    }\n\n    function messageHasSubscribers( message ){\n        var topic = String( message ),\n            found = Boolean(messages.hasOwnProperty( topic ) && hasKeys(messages[topic])),\n            position = topic.lastIndexOf( '.' );\n\n        while ( !found && position !== -1 ){\n            topic = topic.substr( 0, position );\n            position = topic.lastIndexOf( '.' );\n            found = Boolean(messages.hasOwnProperty( topic ) && hasKeys(messages[topic]));\n        }\n\n        return found;\n    }\n\n    function publish( message, data, sync, immediateExceptions ){\n        message = (typeof message === 'symbol') ? message.toString() : message;\n\n        var deliver = createDeliveryFunction( message, data, immediateExceptions ),\n            hasSubscribers = messageHasSubscribers( message );\n\n        if ( !hasSubscribers ){\n            return false;\n        }\n\n        if ( sync === true ){\n            deliver();\n        } else {\n            setTimeout( deliver, 0 );\n        }\n        return true;\n    }\n\n    /**\n     * Publishes the message, passing the data to it's subscribers\n     * @function\n     * @alias publish\n     * @param { String } message The message to publish\n     * @param {} data The data to pass to subscribers\n     * @return { Boolean }\n     */\n    PubSub.publish = function( message, data ){\n        return publish( message, data, false, PubSub.immediateExceptions );\n    };\n\n    /**\n     * Publishes the the message synchronously, passing the data to it's subscribers\n     * @function\n     * @alias publishSync\n     * @param { String } message The message to publish\n     * @param {} data The data to pass to subscribers\n     * @return { Boolean }\n     */\n    PubSub.publishSync = function( message, data ){\n        return publish( message, data, true, PubSub.immediateExceptions );\n    };\n\n    /**\n     * Subscribes the passed function to the passed message. Every returned token is unique and should be stored if you need to unsubscribe\n     * @function\n     * @alias subscribe\n     * @param { String } message The message to subscribe to\n     * @param { Function } func The function to call when a new message is published\n     * @return { String }\n     */\n    PubSub.subscribe = function( message, func ){\n        if ( typeof func !== 'function'){\n            return false;\n        }\n\n        message = (typeof message === 'symbol') ? message.toString() : message;\n\n        // message is not registered yet\n        if ( !messages.hasOwnProperty( message ) ){\n            messages[message] = {};\n        }\n\n        // forcing token as String, to allow for future expansions without breaking usage\n        // and allow for easy use as key names for the 'messages' object\n        var token = 'uid_' + String(++lastUid);\n        messages[message][token] = func;\n        \n        // return token for unsubscribing\n        return token;\n    };\n\n    /**\n     * Subscribes the passed function to the passed message once\n     * @function\n     * @alias subscribeOnce\n     * @param { String } message The message to subscribe to\n     * @param { Function } func The function to call when a new message is published\n     * @return { PubSub }\n     */\n    PubSub.subscribeOnce = function( message, func ){\n        var token = PubSub.subscribe( message, function(){\n            // before func apply, unsubscribe message\n            PubSub.unsubscribe( token );\n            func.apply( this, arguments );\n        });\n        return PubSub;\n    };\n\n    /**\n     * Clears all subscriptions\n     * @function\n     * @public\n     * @alias clearAllSubscriptions\n     */\n    PubSub.clearAllSubscriptions = function clearAllSubscriptions(){\n        messages = {};\n    };\n\n    /**\n     * Clear subscriptions by the topic\n     * @function\n     * @public\n     * @alias clearAllSubscriptions\n     */\n    PubSub.clearSubscriptions = function clearSubscriptions(topic){\n        var m;\n        for (m in messages){\n            if (messages.hasOwnProperty(m) && m.indexOf(topic) === 0){\n                delete messages[m];\n            }\n        }\n    };\n\n    /**\n     * Removes subscriptions\n     *\n     * - When passed a token, removes a specific subscription.\n     *\n\t * - When passed a function, removes all subscriptions for that function\n     *\n\t * - When passed a topic, removes all subscriptions for that topic (hierarchy)\n     * @function\n     * @public\n     * @alias subscribeOnce\n     * @param { String | Function } value A token, function or topic to unsubscribe from\n     * @example // Unsubscribing with a token\n     * var token = PubSub.subscribe('mytopic', myFunc);\n     * PubSub.unsubscribe(token);\n     * @example // Unsubscribing with a function\n     * PubSub.unsubscribe(myFunc);\n     * @example // Unsubscribing from a topic\n     * PubSub.unsubscribe('mytopic');\n     */\n    PubSub.unsubscribe = function(value){\n        var descendantTopicExists = function(topic) {\n                var m;\n                for ( m in messages ){\n                    if ( messages.hasOwnProperty(m) && m.indexOf(topic) === 0 ){\n                        // a descendant of the topic exists:\n                        return true;\n                    }\n                }\n\n                return false;\n            },\n            isTopic    = typeof value === 'string' && ( messages.hasOwnProperty(value) || descendantTopicExists(value) ),\n            isToken    = !isTopic && typeof value === 'string',\n            isFunction = typeof value === 'function',\n            result = false,\n            m, message, t;\n\n        if (isTopic){\n            PubSub.clearSubscriptions(value);\n            return;\n        }\n\n        for ( m in messages ){\n            if ( messages.hasOwnProperty( m ) ){\n                message = messages[m];\n\n                if ( isToken && message[value] ){\n                    delete message[value];\n                    result = value;\n                    // tokens are unique, so we can just stop here\n                    break;\n                }\n\n                if (isFunction) {\n                    for ( t in message ){\n                        if (message.hasOwnProperty(t) && message[t] === value){\n                            delete message[t];\n                            result = true;\n                        }\n                    }\n                }\n            }\n        }\n\n        return result;\n    };\n}));\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/pubsub-js/src/pubsub.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/event-types.js":
/*!****************************!*\
  !*** ./src/event-types.js ***!
  \****************************/
/*! exports provided: PRINT_LIST, GET_ACTION, CREATE_TODO, EDIT_TODO, DELETE_TODO, CREATE_PROJECT, EDIT_PROJECT, DELETE_PROJECT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PRINT_LIST\", function() { return PRINT_LIST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_ACTION\", function() { return GET_ACTION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CREATE_TODO\", function() { return CREATE_TODO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EDIT_TODO\", function() { return EDIT_TODO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DELETE_TODO\", function() { return DELETE_TODO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CREATE_PROJECT\", function() { return CREATE_PROJECT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EDIT_PROJECT\", function() { return EDIT_PROJECT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DELETE_PROJECT\", function() { return DELETE_PROJECT; });\nconst PRINT_LIST = 'print list';\nconst GET_ACTION = 'get action';\n\nconst CREATE_TODO = 'create todo';\nconst EDIT_TODO = 'edit todo';\nconst DELETE_TODO = 'delete todo';\n\nconst CREATE_PROJECT = 'create project';\nconst EDIT_PROJECT = 'edit project';\nconst DELETE_PROJECT = 'delete project';\n\n\n\n\n//# sourceURL=webpack:///./src/event-types.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ \"./node_modules/pubsub-js/src/pubsub.js\");\n/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _event_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-types.js */ \"./src/event-types.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _todo_io_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-io.js */ \"./src/todo-io.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\n\n\n\n\n\n//WIP\n\nconst Application = (function() {\n  // todo: get project list from storage\n  const projectList = [];\n  // todo: choose active project (currently a placeholder)\n  let activeProject = Object(_project_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('');\n  \n  if (projectList.length == 0) {\n    // make default project\n    // make it active\n  }; \n\n  // Display Page\n    // -Show project (display project)\n    // -Show each todo  \n\n\n  /* Todo logic -- working */\n  const createTodo = function(msg, { title, description, dueDate, priority }) { //working\n    // This happens on form completion\n    console.log(msg);\n    const newTodo = Object(_todo_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(title, description, dueDate, priority);\n    activeProject.todoList.push(newTodo);\n    getNextAction();\n  };\n\n  // edit\n  const editTodo = function(msg, { index, title, description, dueDate, priority }) {\n    console.log(msg);\n    const newTodo = Object(_todo_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(title, description, dueDate, priority);\n    activeProject.todoList.splice(index, 1, newTodo)\n    getNextAction();\n  };\n\n  // delete/complete\n  const deleteTodo = function(msg, { index }) {\n    console.log(msg);\n    activeProject.todoList.splice(index, 1);\n    getNextAction();\n  };\n\n  const getNextAction = function() {\n    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publish(_event_types_js__WEBPACK_IMPORTED_MODULE_1__[\"PRINT_LIST\"], activeProject.todoList);\n    // PubSub.publish(GET_ACTION); // TODO: Remove when DOM is online\n  }\n\n  let token0 = pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.subscribe(_event_types_js__WEBPACK_IMPORTED_MODULE_1__[\"CREATE_TODO\"], createTodo);\n  let token1 = pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.subscribe(_event_types_js__WEBPACK_IMPORTED_MODULE_1__[\"EDIT_TODO\"], editTodo);\n  let token2 = pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.subscribe(_event_types_js__WEBPACK_IMPORTED_MODULE_1__[\"DELETE_TODO\"], deleteTodo);\n  /* End Todo logic */\n\n\n  /* Project Logic -- working */\n  // create \n  const createProject = function(msg, { title }) {\n    // This happens on form completion\n    console.log(msg);\n    const newProject = Object(_project_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(title);\n    projectList.push(newProject); \n    // getNextAction();\n  };\n\n  // edit\n  const editProject = function(msg, { index, title }) {\n    console.log(msg)\n    const newProject = Object(_project_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(title);\n    projectList.splice(index, 1, newProject)\n    // getNextAction();\n  };\n\n  // delete/complete\n  const deleteProject = function(msg, { index }) {\n    console.log(msg);\n    projectList.splice(index, 1);\n    // getNextAction();\n  };\n\n  let token3 = pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.subscribe(_event_types_js__WEBPACK_IMPORTED_MODULE_1__[\"CREATE_PROJECT\"], createProject);\n  let token4 = pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.subscribe(_event_types_js__WEBPACK_IMPORTED_MODULE_1__[\"EDIT_PROJECT\"], editProject);\n  let token5 = pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.subscribe(_event_types_js__WEBPACK_IMPORTED_MODULE_1__[\"DELETE_PROJECT\"], deleteProject);\n  /* End Project Logic */\n \n\n  return {\n    projectList, // for testing purposes\n  }\n\n})();\n\n\n\n\n// ----------- TESTING PROTOTYPAL INHERITANCE -------\n\n/*\nconst project = function() {\n  const todoList = [];\n  return Object.assign(Object.create(Object.getPrototypeOf(TodoController)), {todoList});\n}\n\nconst TodoController = (function() {\n  const proto = {\n    add: function() {\n      console.log(this);\n      this.todoList.push('hi');\n    },\n    test: () => console.log('test successful!'),\n  }\n  return Object.create(proto);\n})();\n\n\n\nTodoController.test()\nconsole.log('TodoController prototype:');\nconsole.log(Object.getPrototypeOf(TodoController));\n\nconsole.log('this:');\nconsole.log(this)\n\n\n\nconst myProj = project();\nconsole.log('myProj prototype:');\n\nconsole.log(Object.getPrototypeOf(myProj));\n\nconsole.log('testing myProj.test():');\nmyProj.test();\n\nconsole.log('Testing myProj.todoList and add():');\nconsole.log(myProj.todoList);\nconsole.log('adding:');\nmyProj.add(); //works!\n//myProj.add.call(myProj) worked with 'this'!\nconsole.log(myProj.todoList);\n*/\n\n\n\n// --------- TESTING TODOS ---------------\n\n/*\nconst testTodo = todo('Simona\\'s birthday', 'Get her a present! :)', 'January 24', 'high');\nconst testTodo1 = todo('Socialize', 'Get in touch with friends', 'this week', 'medium');\nconst testTodo2 = todo('Synergize', 'Network', 'ASAP', 'critical')\n\n// CREATE\nPubSub.publish(CREATE_TODO, testTodo);\nPubSub.publish(CREATE_TODO, testTodo1);\nPubSub.publish(CREATE_TODO, testTodo2);\n\n// EDIT\nconst newTestTodo = todo('A', 'B', 'C', 'D');\nconst editTest = Object.assign({index: 1}, newTestTodo)\nsetTimeout(() => PubSub.publish(EDIT_TODO, editTest), 300);\n\n// DELETE\nsetTimeout(() => PubSub.publish(DELETE_TODO, {index: 1}), 400);\n\n// GET_ACTION\nsetTimeout(() => PubSub.publish(GET_ACTION), 500);\n*/\n\n\n// -------- TESTING PROJECTS ---------------\n\n/**/\n// project objects\nconst testProj1 = Object(_project_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('myProj');\nconsole.log('testProj1:');\nconsole.log(testProj1);\nconst testProj2 = Object(_project_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('myProj1');\n\n// CREATE - working\npubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publish(_event_types_js__WEBPACK_IMPORTED_MODULE_1__[\"CREATE_PROJECT\"], testProj1);\npubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publish(_event_types_js__WEBPACK_IMPORTED_MODULE_1__[\"CREATE_PROJECT\"], testProj2);\nconsole.log('project list after two create calls:');\nconsole.log(Application.projectList);\n\n// EDIT -- working\nconst editArgs1 = Object.assign(testProj1, {index: 1});\nsetTimeout(() => {\n  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publish(_event_types_js__WEBPACK_IMPORTED_MODULE_1__[\"EDIT_PROJECT\"], editArgs1);\n  console.log('project list after edit call:');\n  console.log(Application.projectList);\n}, 5000);\n\n\n// DELETE -- working\nsetTimeout(() => {\n  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publish(_event_types_js__WEBPACK_IMPORTED_MODULE_1__[\"DELETE_PROJECT\"], {index: 1});\n  console.log(Application.projectList);\n}, 10000);\n/**/\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Make a project object\n\nconst project = function(title) {\n  const todoList = [];\n  return {\n    title,\n    todoList\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (project);\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/todo-io.js":
/*!************************!*\
  !*** ./src/todo-io.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ \"./node_modules/pubsub-js/src/pubsub.js\");\n/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _event_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-types.js */ \"./src/event-types.js\");\n\n\n\n/*\n1. Print list (with indices)\n2. Ask for input: new? edit? delete? (finish?)\n3. Send that action to PubSub\n*/\n\nconst TodoIO = (function() {\n  const printList = function(_, todoList) {\n    console.log('----- TODO LIST -----');\n    todoList.forEach((todo, index) => {\n      console.log(`${index}. ${todo.title}: ${todo.description}, ` + \n        `due ${todo.dueDate}. Priority ${todo.priority}`)\n    })\n  };\n\n  const getAction = function() {\n    const action = prompt(`Enter an action:\\n'new', 'edit', or 'delete'`)\n\n    let index;\n    switch (action) {\n      case 'new':\n        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publish(_event_types_js__WEBPACK_IMPORTED_MODULE_1__[\"CREATE_TODO\"], {title: '', description: '', \n          dueDate: '', priority: ''});\n        break;\n      case 'edit':\n        index = getIndex();\n        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publish(_event_types_js__WEBPACK_IMPORTED_MODULE_1__[\"EDIT_TODO\"], {index, title: '', description: '',\n          dueDate: '', priority: ''});\n        break;\n      case 'delete':\n        index = getIndex();\n        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publish(_event_types_js__WEBPACK_IMPORTED_MODULE_1__[\"DELETE_TODO\"], {index});\n    }\n  };\n\n  const getIndex = function() {\n    const index = Number(prompt('Enter index of target entry:'));\n    if (!isNaN(index)) return index;\n    else return false;\n  }\n\n  let token1 = pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.subscribe(_event_types_js__WEBPACK_IMPORTED_MODULE_1__[\"PRINT_LIST\"], printList);\n  let token2 = pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.subscribe(_event_types_js__WEBPACK_IMPORTED_MODULE_1__[\"GET_ACTION\"], getAction);\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoIO);\n\n//# sourceURL=webpack:///./src/todo-io.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nconst todo = function(title, description, dueDate, priority) {\n  return {\n    title,\n    description,\n    dueDate,\n    priority,\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (todo);\n\n//# sourceURL=webpack:///./src/todo.js?");

/***/ })

/******/ });