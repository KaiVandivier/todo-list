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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* Global Styles */\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: Helvetica, Arial, sans-serif;\n}\n\n/* Dialog styles */\n.hidden {\n  display: none;\n}\n\n.dialog.opened {\n  display: block;\n}\n\n.dialog-window {\n  display: inline-block;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background-color: lightskyblue;\n  z-index: 101;\n  padding: 1.5em;\n}\n\n.dialog-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  z-index: 100;\n  background-color: rgb(0,0,0);\n  background-color: rgba(0,0,0,0.4);\n}\n\n\n/* Project list styles */\n#project-list-header-div {\n  padding: 1em .2em 2em;\n}\n\n#project-list-header-div h2 {\n  float: left;\n  margin: auto;\n}\n\n#project-list-header-div button {\n  float: right;\n}\n\n#project-list-ul li {\n  padding: .3em .2em;\n  font-size: large;\n}\n\n#project-list-ul li:hover {\n  background-color: lightgrey;  \n}\n\n\n/* Project and Todo list styles */\n#project-header-div {\n  display: block;\n  padding: 1em .2em 0em;\n  border-top: 1px solid black;\n}\n\n#project-header-div h3 {\n  float: left;\n  margin: 0;\n}\n\n#project-buttons {\n  float: right;\n}\n\nspan.complete {\n  text-decoration: line-through;\n}\n\n/* Table styles */\ntable {\n  table-layout: fixed;\n  width: 100%;\n  border-collapse: collapse;\n}\n\nthead th:nth-child(1) {\n  width: 10%;\n}\n\nthead th:nth-child(2) {\n  width: 10%;\n}\n\nthead th:nth-child(3) {\n  width: 30%;\n}\n\nthead th:nth-child(4) {\n  width: 15%;\n}\n\nthead th:nth-child(5) {\n  width: 10%;\n} \n\nthead th:nth-child(6) {\n  width: 10%;\n}\n\nthead th {\n  background-color: #a0c6ff;\n}\n\ntbody tr:nth-child(odd) {\n  background-color: #f5f9ff;\n}\n\ntbody tr:nth-child(even) {\n  background-color: #deebff;\n}\n\nth, td {\n  padding: 10px;\n  text-align: left;\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/pubsub-js/src/pubsub.js":
/*!**********************************************!*\
  !*** ./node_modules/pubsub-js/src/pubsub.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/**
 * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
 * License: MIT - http://mrgnrdrck.mit-license.org
 *
 * https://github.com/mroderick/PubSubJS
 */

(function (root, factory){
    'use strict';

    var PubSub = {};
    root.PubSub = PubSub;

    var define = root.define;

    factory(PubSub);

    // AMD support
    if (typeof define === 'function' && define.amd){
        define(function() { return PubSub; });

        // CommonJS and Node.js module support
    } else if (true){
        if (module !== undefined && module.exports) {
            exports = module.exports = PubSub; // Node.js specific `module.exports`
        }
        exports.PubSub = PubSub; // CommonJS module 1.1.1 spec
        module.exports = exports = PubSub; // CommonJS
    }

}(( typeof window === 'object' && window ) || this, function (PubSub){
    'use strict';

    var messages = {},
        lastUid = -1;

    function hasKeys(obj){
        var key;

        for (key in obj){
            if ( obj.hasOwnProperty(key) ){
                return true;
            }
        }
        return false;
    }

    /**
     * Returns a function that throws the passed exception, for use as argument for setTimeout
     * @alias throwException
     * @function
     * @param { Object } ex An Error object
     */
    function throwException( ex ){
        return function reThrowException(){
            throw ex;
        };
    }

    function callSubscriberWithDelayedExceptions( subscriber, message, data ){
        try {
            subscriber( message, data );
        } catch( ex ){
            setTimeout( throwException( ex ), 0);
        }
    }

    function callSubscriberWithImmediateExceptions( subscriber, message, data ){
        subscriber( message, data );
    }

    function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){
        var subscribers = messages[matchedMessage],
            callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,
            s;

        if ( !messages.hasOwnProperty( matchedMessage ) ) {
            return;
        }

        for (s in subscribers){
            if ( subscribers.hasOwnProperty(s)){
                callSubscriber( subscribers[s], originalMessage, data );
            }
        }
    }

    function createDeliveryFunction( message, data, immediateExceptions ){
        return function deliverNamespaced(){
            var topic = String( message ),
                position = topic.lastIndexOf( '.' );

            // deliver the message as it is now
            deliverMessage(message, message, data, immediateExceptions);

            // trim the hierarchy and deliver message to each level
            while( position !== -1 ){
                topic = topic.substr( 0, position );
                position = topic.lastIndexOf('.');
                deliverMessage( message, topic, data, immediateExceptions );
            }
        };
    }

    function messageHasSubscribers( message ){
        var topic = String( message ),
            found = Boolean(messages.hasOwnProperty( topic ) && hasKeys(messages[topic])),
            position = topic.lastIndexOf( '.' );

        while ( !found && position !== -1 ){
            topic = topic.substr( 0, position );
            position = topic.lastIndexOf( '.' );
            found = Boolean(messages.hasOwnProperty( topic ) && hasKeys(messages[topic]));
        }

        return found;
    }

    function publish( message, data, sync, immediateExceptions ){
        message = (typeof message === 'symbol') ? message.toString() : message;

        var deliver = createDeliveryFunction( message, data, immediateExceptions ),
            hasSubscribers = messageHasSubscribers( message );

        if ( !hasSubscribers ){
            return false;
        }

        if ( sync === true ){
            deliver();
        } else {
            setTimeout( deliver, 0 );
        }
        return true;
    }

    /**
     * Publishes the message, passing the data to it's subscribers
     * @function
     * @alias publish
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */
    PubSub.publish = function( message, data ){
        return publish( message, data, false, PubSub.immediateExceptions );
    };

    /**
     * Publishes the the message synchronously, passing the data to it's subscribers
     * @function
     * @alias publishSync
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */
    PubSub.publishSync = function( message, data ){
        return publish( message, data, true, PubSub.immediateExceptions );
    };

    /**
     * Subscribes the passed function to the passed message. Every returned token is unique and should be stored if you need to unsubscribe
     * @function
     * @alias subscribe
     * @param { String } message The message to subscribe to
     * @param { Function } func The function to call when a new message is published
     * @return { String }
     */
    PubSub.subscribe = function( message, func ){
        if ( typeof func !== 'function'){
            return false;
        }

        message = (typeof message === 'symbol') ? message.toString() : message;

        // message is not registered yet
        if ( !messages.hasOwnProperty( message ) ){
            messages[message] = {};
        }

        // forcing token as String, to allow for future expansions without breaking usage
        // and allow for easy use as key names for the 'messages' object
        var token = 'uid_' + String(++lastUid);
        messages[message][token] = func;
        
        // return token for unsubscribing
        return token;
    };

    /**
     * Subscribes the passed function to the passed message once
     * @function
     * @alias subscribeOnce
     * @param { String } message The message to subscribe to
     * @param { Function } func The function to call when a new message is published
     * @return { PubSub }
     */
    PubSub.subscribeOnce = function( message, func ){
        var token = PubSub.subscribe( message, function(){
            // before func apply, unsubscribe message
            PubSub.unsubscribe( token );
            func.apply( this, arguments );
        });
        return PubSub;
    };

    /**
     * Clears all subscriptions
     * @function
     * @public
     * @alias clearAllSubscriptions
     */
    PubSub.clearAllSubscriptions = function clearAllSubscriptions(){
        messages = {};
    };

    /**
     * Clear subscriptions by the topic
     * @function
     * @public
     * @alias clearAllSubscriptions
     */
    PubSub.clearSubscriptions = function clearSubscriptions(topic){
        var m;
        for (m in messages){
            if (messages.hasOwnProperty(m) && m.indexOf(topic) === 0){
                delete messages[m];
            }
        }
    };

    /**
     * Removes subscriptions
     *
     * - When passed a token, removes a specific subscription.
     *
	 * - When passed a function, removes all subscriptions for that function
     *
	 * - When passed a topic, removes all subscriptions for that topic (hierarchy)
     * @function
     * @public
     * @alias subscribeOnce
     * @param { String | Function } value A token, function or topic to unsubscribe from
     * @example // Unsubscribing with a token
     * var token = PubSub.subscribe('mytopic', myFunc);
     * PubSub.unsubscribe(token);
     * @example // Unsubscribing with a function
     * PubSub.unsubscribe(myFunc);
     * @example // Unsubscribing from a topic
     * PubSub.unsubscribe('mytopic');
     */
    PubSub.unsubscribe = function(value){
        var descendantTopicExists = function(topic) {
                var m;
                for ( m in messages ){
                    if ( messages.hasOwnProperty(m) && m.indexOf(topic) === 0 ){
                        // a descendant of the topic exists:
                        return true;
                    }
                }

                return false;
            },
            isTopic    = typeof value === 'string' && ( messages.hasOwnProperty(value) || descendantTopicExists(value) ),
            isToken    = !isTopic && typeof value === 'string',
            isFunction = typeof value === 'function',
            result = false,
            m, message, t;

        if (isTopic){
            PubSub.clearSubscriptions(value);
            return;
        }

        for ( m in messages ){
            if ( messages.hasOwnProperty( m ) ){
                message = messages[m];

                if ( isToken && message[value] ){
                    delete message[value];
                    result = value;
                    // tokens are unique, so we can just stop here
                    break;
                }

                if (isFunction) {
                    for ( t in message ){
                        if (message.hasOwnProperty(t) && message[t] === value){
                            delete message[t];
                            result = true;
                        }
                    }
                }
            }
        }

        return result;
    };
}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/dom-manager.js":
/*!****************************!*\
  !*** ./src/dom-manager.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _event_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-types */ "./src/event-types.js");



const Display = (function() {
  const root = document.getElementById("root");
  let submitProjectFormMethod = null;
  let submitTodoFormMethod = null;
  let previousActiveElement = null;

  // Project List Div (container)
  const projectListDiv = document.createElement("div");
  projectListDiv.id = "project-list-div";
  root.appendChild(projectListDiv);
  // Project List Header
  const projectListHeader = document.createElement("div");
  projectListHeader.id = "project-list-header-div";
  projectListDiv.appendChild(projectListHeader);
  // Header: title
  const projectListTitle = document.createElement("h2");
  projectListTitle.textContent = "Project List";
  projectListHeader.appendChild(projectListTitle);
  // New Project Button
  const newProjectButton = document.createElement("button");
  newProjectButton.textContent = "New Project";
  newProjectButton.addEventListener("click", () => {
    displayProjectDialog(_event_types__WEBPACK_IMPORTED_MODULE_1__["CREATE_PROJECT"], {});
  });
  projectListHeader.appendChild(newProjectButton);
  // Project List Ul (to be populated by "render ... " below)
  const projectListUl = document.createElement("ul");
  projectListUl.id = "project-list-ul";
  projectListDiv.appendChild(projectListUl);

  // Project Div (container)
  const projectDiv = document.createElement("div");
  root.appendChild(projectDiv);
  projectDiv.id = "project-div";

  const renderProjectList = function(msg, projectList) {
    console.log(msg);
    // clear project list
    while (projectListUl.firstChild) {
      projectListUl.removeChild(projectListUl.firstChild);
    } // ... to write a new one

    projectList.forEach((project, index) => {
      const projectLi = document.createElement("li");
      projectLi.textContent = project.title;
      projectLi.setAttribute("data-index", index);
      projectListUl.appendChild(projectLi);
      projectLi.addEventListener("click", e => {
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_1__["SWITCH_PROJECT"], e.target.getAttribute("data-index"));
      });
    });
  };

  const renderProject = function(msg, project) {
    console.log(msg);

    // clear project div ...
    while (projectDiv.firstChild) {
      projectDiv.removeChild(projectDiv.firstChild);
    } // ... to write a new one

    // header
    const headerDiv = document.createElement("div");
    headerDiv.id = "project-header-div";
    projectDiv.appendChild(headerDiv);

    // header: title
    const titleHeader = document.createElement("h3");
    try {
      // handle "no active projects"
      titleHeader.textContent = project.title;
      headerDiv.appendChild(titleHeader);
    } catch (e) {
      titleHeader.textContent = "No active projects";
      headerDiv.appendChild(titleHeader);
      return;
    }

    // header: buttons
    const buttonsSpan = document.createElement("span");
    buttonsSpan.id = "project-buttons";
    headerDiv.appendChild(buttonsSpan);

    // header buttons: "new todo" button
    const newTodoButton = document.createElement("button");
    newTodoButton.textContent = "New Todo";
    newTodoButton.addEventListener("click", () => {
      displayTodoDialog(_event_types__WEBPACK_IMPORTED_MODULE_1__["CREATE_TODO"], {});
    });
    buttonsSpan.appendChild(newTodoButton);

    // header buttons: "edit project" button
    const editProjectButton = document.createElement("button");
    editProjectButton.textContent = "Edit Project";
    editProjectButton.addEventListener("click", () => {
      console.log("editing project");
      displayProjectDialog(_event_types__WEBPACK_IMPORTED_MODULE_1__["EDIT_PROJECT"], { project });
    });
    buttonsSpan.appendChild(editProjectButton);

    // header buttons: "delete project" button
    const deleteProjectButton = document.createElement("button");
    deleteProjectButton.textContent = "Delete Project";
    deleteProjectButton.addEventListener("click", () => {
      pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_1__["DELETE_PROJECT"], project);
    });
    buttonsSpan.appendChild(deleteProjectButton);

    // line break TODO: replace with padding/margin?
    projectDiv.appendChild(document.createElement("br"));
    projectDiv.appendChild(document.createElement("br"));

    // create a table to organize todos
    const todoTable = document.createElement("table");
    projectDiv.appendChild(todoTable);

    const todoHead = document.createElement("thead");
    todoTable.appendChild(todoHead);
    const titles = ["Done", "Priority", "Title", "Due Date", "Edit", "Delete"];
    titles.forEach(title => {
      const th = document.createElement("th");
      th.scope = "col";
      th.textContent = title;
      todoHead.appendChild(th);
    });

    // create a table body to populate with todos
    const todoBody = document.createElement("tbody");
    todoTable.appendChild(todoBody);
    project.todoList.forEach((todo, index) => {
      renderTodo(todoBody, todo, index);
    });
  };

  const renderTodo = function(/* todoUl, */ todoBody, todo, index) {
    const todoRow = document.createElement("tr");
    todoBody.appendChild(todoRow);

    // 'Mark complete' button
    const buttonCell = document.createElement("td");
    todoRow.appendChild(buttonCell);
    const completeButton = document.createElement("button");
    completeButton.textContent = "Done";
    buttonCell.appendChild(completeButton);
    completeButton.addEventListener("click", toggleTodoComplete);

    function toggleTodoComplete(e) {
      const todoSpan = e.target.parentElement.querySelector("span");
      todoSpan.classList.toggle("complete");
    }

    // priority indicator
    const priorityCell = document.createElement("td");
    todoRow.appendChild(priorityCell);
    const priorityText = document.createElement("span");
    priorityText.textContent = todo.priority;
    priorityCell.appendChild(priorityText);

    // Todo title
    const titleCell = document.createElement("td");
    todoRow.appendChild(titleCell);
    const textSpan = document.createElement("span");
    textSpan.textContent = todo.title;
    titleCell.appendChild(textSpan);

    // due date
    const dueDateCell = document.createElement("td");
    todoRow.appendChild(dueDateCell);
    dueDateCell.textContent = todo.dueDate;

    // draw edit button (todo: pencil icon)
    const editCell = document.createElement("td");
    todoRow.appendChild(editCell);
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editCell.appendChild(editButton);
    editButton.addEventListener("click", () => {
      console.log("beep! editing todo.");
      displayTodoDialog(_event_types__WEBPACK_IMPORTED_MODULE_1__["EDIT_TODO"], { todo, index });
    });

    // draw delete button (trash icon)
    const deleteCell = document.createElement("td");
    todoRow.appendChild(deleteCell);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteCell.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
      pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_1__["DELETE_TODO"], { index });
    });
  };

  // Project Dialog setup:
  function displayProjectDialog(method, data) {
    // selector setup
    const dialog = document.getElementById("project-form-container");
    const dialogMask = dialog.querySelector("div.dialog-mask");
    const form = dialog.querySelector("form#project-form");

    // Save active element
    previousActiveElement = document.activeElement;

    // Show the dialog
    dialog.classList.add("opened");

    // Populate fields appropriately for "new" or "edit"
    if (method === _event_types__WEBPACK_IMPORTED_MODULE_1__["CREATE_PROJECT"]) {
      form.elements.title.value = "New Project";
    } else if (method === _event_types__WEBPACK_IMPORTED_MODULE_1__["EDIT_PROJECT"]) {
      form.elements.title.value = data.project.title;
    }

    // Listen for form completion
    submitProjectFormMethod = submitProjectForm.bind({ method, data });
    form.addEventListener("submit", submitProjectFormMethod);

    // Add listeners to close window
    dialogMask.addEventListener("click", closeProjectDialog);
    window.addEventListener("keydown", checkCloseProjectDialog);
    dialog
      .querySelector("button.close")
      .addEventListener("click", closeProjectDialog);

    // Focus the dialog
    dialog.querySelector("input").focus();
  }

  function submitProjectForm(e) {
    console.log("form submitted!");
    // handles either "edit" or "new"
    const newData = Object.assign(this.data, {
      title: e.target.elements.title.value
    });
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publish(this.method, newData);
    e.preventDefault(); // stay on same page
    closeProjectDialog();
  }

  function checkCloseProjectDialog(e) {
    if (e.keyCode === 27) closeProjectDialog();
  }

  function closeProjectDialog() {
    // selector setup
    const dialog = document.getElementById("project-form-container");
    const dialogMask = dialog.querySelector("div.dialog-mask");
    const form = document.getElementById("project-form");

    // Remove event listeners
    dialogMask.removeEventListener("click", closeProjectDialog);
    window.removeEventListener("keydown", checkCloseProjectDialog);
    dialog
      .querySelector("button.close")
      .removeEventListener("click", closeProjectDialog);
    form.removeEventListener("submit", submitProjectFormMethod);

    dialog.classList.remove("opened");

    // Return focus outside of the modal
    previousActiveElement.focus();
  }

  // Todo Dialog setup:
  function displayTodoDialog(method, data) {
    // selector setup
    const dialog = document.getElementById("todo-form-container");
    const dialogMask = dialog.querySelector("div.dialog-mask");
    const form = dialog.querySelector("form#todo-form");

    // Save active element
    previousActiveElement = document.activeElement;

    // Show the dialog
    dialog.classList.add("opened");

    // Populate fields appropriately for "new" or "edit"
    if (method === _event_types__WEBPACK_IMPORTED_MODULE_1__["CREATE_TODO"]) {
      form.elements.title.value = "New Todo";
      form.elements.description.value = "";
      form.elements.priority.value = "normal";
      form.elements.dueDate.value = "today";
    } else if (method === _event_types__WEBPACK_IMPORTED_MODULE_1__["EDIT_TODO"]) {
      form.elements.title.value = data.todo.title;
      form.elements.description.value = data.todo.description;
      form.elements.priority.value = data.todo.priority;
      form.elements.dueDate.value = data.todo.dueDate;
    }

    // Listen for form completion
    submitTodoFormMethod = submitTodoForm.bind({ method, data });
    form.addEventListener("submit", submitTodoFormMethod);

    // Add listeners to close window
    dialogMask.addEventListener("click", closeTodoDialog);
    window.addEventListener("keydown", checkCloseTodoDialog);
    dialog
      .querySelector("button.close")
      .addEventListener("click", closeTodoDialog);

    dialog.querySelector("input").focus();
  }

  function submitTodoForm(e) {
    console.log("form submitted!");
    const { elements } = e.target;
    const properties = ["title", "description", "priority", "dueDate"];
    const info = {};
    properties.forEach(p => (info[p] = elements[p].value));
    const newData = Object.assign(this.data, info);
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publish(this.method, newData);
    e.preventDefault(); // stay on same page
    closeTodoDialog();
  }

  function checkCloseTodoDialog(e) {
    if (e.keyCode === 27) closeTodoDialog();
  }

  function closeTodoDialog() {
    // selector setup
    const dialog = document.getElementById("todo-form-container");
    const dialogMask = dialog.querySelector("div.dialog-mask");
    const form = dialog.querySelector("form#todo-form");

    // Remove event listeners
    dialogMask.removeEventListener("click", closeTodoDialog);
    window.removeEventListener("keydown", checkCloseTodoDialog);
    dialog
      .querySelector("button.close")
      .removeEventListener("click", closeTodoDialog);
    form.removeEventListener("submit", submitTodoFormMethod);

    dialog.classList.remove("opened");

    // Return focus outside of the modal
    previousActiveElement.focus();
  }

  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.subscribe(_event_types__WEBPACK_IMPORTED_MODULE_1__["RENDER_PROJECT_LIST"], renderProjectList);
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.subscribe(_event_types__WEBPACK_IMPORTED_MODULE_1__["RENDER_PROJECT"], renderProject);
})();


/***/ }),

/***/ "./src/event-types.js":
/*!****************************!*\
  !*** ./src/event-types.js ***!
  \****************************/
/*! exports provided: PRINT_LIST, GET_ACTION, CREATE_TODO, EDIT_TODO, DELETE_TODO, CREATE_PROJECT, EDIT_PROJECT, DELETE_PROJECT, SET_UP_PAGE, RENDER_PROJECT_LIST, RENDER_PROJECT, SWITCH_PROJECT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRINT_LIST", function() { return PRINT_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ACTION", function() { return GET_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_TODO", function() { return CREATE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_TODO", function() { return EDIT_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_TODO", function() { return DELETE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_PROJECT", function() { return CREATE_PROJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_PROJECT", function() { return EDIT_PROJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_PROJECT", function() { return DELETE_PROJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_UP_PAGE", function() { return SET_UP_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RENDER_PROJECT_LIST", function() { return RENDER_PROJECT_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RENDER_PROJECT", function() { return RENDER_PROJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWITCH_PROJECT", function() { return SWITCH_PROJECT; });
const PRINT_LIST = "print list";
const GET_ACTION = "get action";

const CREATE_TODO = "create todo";
const EDIT_TODO = "edit todo";
const DELETE_TODO = "delete todo";

const CREATE_PROJECT = "create project";
const EDIT_PROJECT = "edit project";
const DELETE_PROJECT = "delete project";

const SET_UP_PAGE = "set up page";
const RENDER_PROJECT_LIST = "render project list";
const RENDER_PROJECT = "render project";

const SWITCH_PROJECT = "switch project";




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _event_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-types */ "./src/event-types.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _dom_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom-manager */ "./src/dom-manager.js");







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
        return Object(_todo__WEBPACK_IMPORTED_MODULE_3__["default"])(t.title, t.description, t.dueDate, t.priority);
      });
      const newProject = Object(_project__WEBPACK_IMPORTED_MODULE_4__["default"])(p.title, newTodoList);
      return newProject;
    });
    return newList;
  };
  /* ... end storage logic */

  /* Todo logic --  */
  const createTodo = function(msg, { title, description, dueDate, priority }) {
    // working
    console.log(msg);
    const newTodo = Object(_todo__WEBPACK_IMPORTED_MODULE_3__["default"])(title, description, dueDate, priority);
    activeProject.todoList.push(newTodo);
    pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_2__["RENDER_PROJECT"], activeProject);
    saveProjectList();
  };

  const editTodo = function(
    msg,
    { index, title, description, dueDate, priority }
  ) {
    console.log(msg);
    const newTodo = Object(_todo__WEBPACK_IMPORTED_MODULE_3__["default"])(title, description, dueDate, priority);
    activeProject.todoList.splice(index, 1, newTodo);
    pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_2__["RENDER_PROJECT"], activeProject);
    saveProjectList();
  };

  const deleteTodo = function(msg, { index }) {
    console.log(msg);
    activeProject.todoList.splice(index, 1);
    pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_2__["RENDER_PROJECT"], activeProject);
    saveProjectList();
  };
  /* End Todo logic */

  /* Project Logic */
  const createProject = function(msg, { title }) {
    console.log(msg);
    const newProject = Object(_project__WEBPACK_IMPORTED_MODULE_4__["default"])(title);
    projectList.push(newProject);
    switchProject(_event_types__WEBPACK_IMPORTED_MODULE_2__["SWITCH_PROJECT"], projectList.length - 1);
    pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_2__["RENDER_PROJECT_LIST"], projectList);
    saveProjectList();
  };

  const editProject = function(msg, { title }) {
    console.log(msg);
    activeProject.title = title;
    pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_2__["RENDER_PROJECT_LIST"], projectList);
    pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_2__["RENDER_PROJECT"], activeProject);
    saveProjectList();
  };

  const deleteProject = function(msg, targetProject) {
    console.log(msg);
    if (targetProject === activeProject) pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_2__["SWITCH_PROJECT"], 0);
    const index = projectList.findIndex(proj => proj === _project__WEBPACK_IMPORTED_MODULE_4__["default"]);
    projectList.splice(index, 1);
    pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_2__["RENDER_PROJECT_LIST"], projectList);
    saveProjectList();
  };

  const switchProject = function(msg, index) {
    console.log(msg);
    activeProject = projectList[index];
    pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_2__["RENDER_PROJECT"], activeProject);
  };
  /* End Project Logic */

  // Subscriptions
  const token0 = pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.subscribe(_event_types__WEBPACK_IMPORTED_MODULE_2__["CREATE_TODO"], createTodo);
  const token1 = pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.subscribe(_event_types__WEBPACK_IMPORTED_MODULE_2__["EDIT_TODO"], editTodo);
  const token2 = pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.subscribe(_event_types__WEBPACK_IMPORTED_MODULE_2__["DELETE_TODO"], deleteTodo);
  const token3 = pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.subscribe(_event_types__WEBPACK_IMPORTED_MODULE_2__["CREATE_PROJECT"], createProject);
  const token4 = pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.subscribe(_event_types__WEBPACK_IMPORTED_MODULE_2__["EDIT_PROJECT"], editProject);
  const token5 = pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.subscribe(_event_types__WEBPACK_IMPORTED_MODULE_2__["DELETE_PROJECT"], deleteProject);
  const token6 = pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.subscribe(_event_types__WEBPACK_IMPORTED_MODULE_2__["SWITCH_PROJECT"], switchProject);

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
  pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_2__["RENDER_PROJECT_LIST"], projectList);
  pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_2__["RENDER_PROJECT"], activeProject);

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

  const testProj1 = Object(_project__WEBPACK_IMPORTED_MODULE_4__["default"])("Test Project 1");
  const testProj2 = Object(_project__WEBPACK_IMPORTED_MODULE_4__["default"])("Test Project 2");
  pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_2__["CREATE_PROJECT"], testProj1);
  pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_2__["CREATE_PROJECT"], testProj2);

  const testTodo = Object(_todo__WEBPACK_IMPORTED_MODULE_3__["default"])(
    "Simona's birthday",
    "Get her a present! :)",
    "January 24",
    "high"
  );
  const testTodo1 = Object(_todo__WEBPACK_IMPORTED_MODULE_3__["default"])(
    "Socialize",
    "Get in touch with friends",
    "this week",
    "medium"
  );
  const testTodo2 = Object(_todo__WEBPACK_IMPORTED_MODULE_3__["default"])("Synergize", "Network", "ASAP", "critical");

  pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_2__["CREATE_TODO"], testTodo);
  pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_2__["CREATE_TODO"], testTodo1);
  pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_2__["CREATE_TODO"], testTodo2);
}


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Make a project object

const project = function project(title, todoListIn) {
  const todoList = todoListIn || [];
  return {
    title,
    todoList
  };
};

/* harmony default export */ __webpack_exports__["default"] = (project);


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const todo = function todo(title, description, dueDate, priority) {
  return {
    title,
    description,
    dueDate,
    priority
  };
};

/* harmony default export */ __webpack_exports__["default"] = (todo);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHVic3ViLWpzL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudC10eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3M/ODMwMSIsIndlYnBhY2s6Ly8vLi9zcmMvdG9kby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFD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QVc7QUFDNUIsRUFBRSxnREFBTSxTQUFTLHdEQUFXO0FBQzVCOzs7Ozs7Ozs7Ozs7O0FDbktBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsc0VBQU8sRUFBQzs7Ozs7Ozs7Ozs7O0FDVnZCLGNBQWMsbUJBQU8sQ0FBQyxvSEFBdUQ7O0FBRTdFO0FBQ0EsY0FBYyxRQUFTO0FBQ3ZCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLG1KQUF3RTs7QUFFN0Y7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDZkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLG1FQUFJLEVBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIEdsb2JhbCBTdHlsZXMgKi9cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIERpYWxvZyBzdHlsZXMgKi9cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5kaWFsb2cub3BlbmVkIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZGlhbG9nLXdpbmRvdyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcbiAgei1pbmRleDogMTAxO1xcbiAgcGFkZGluZzogMS41ZW07XFxufVxcblxcbi5kaWFsb2ctbWFzayB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgei1pbmRleDogMTAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcXG59XFxuXFxuXFxuLyogUHJvamVjdCBsaXN0IHN0eWxlcyAqL1xcbiNwcm9qZWN0LWxpc3QtaGVhZGVyLWRpdiB7XFxuICBwYWRkaW5nOiAxZW0gLjJlbSAyZW07XFxufVxcblxcbiNwcm9qZWN0LWxpc3QtaGVhZGVyLWRpdiBoMiB7XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuI3Byb2plY3QtbGlzdC1oZWFkZXItZGl2IGJ1dHRvbiB7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbiNwcm9qZWN0LWxpc3QtdWwgbGkge1xcbiAgcGFkZGluZzogLjNlbSAuMmVtO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuI3Byb2plY3QtbGlzdC11bCBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7ICBcXG59XFxuXFxuXFxuLyogUHJvamVjdCBhbmQgVG9kbyBsaXN0IHN0eWxlcyAqL1xcbiNwcm9qZWN0LWhlYWRlci1kaXYge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAxZW0gLjJlbSAwZW07XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNwcm9qZWN0LWhlYWRlci1kaXYgaDMge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNwcm9qZWN0LWJ1dHRvbnMge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG5zcGFuLmNvbXBsZXRlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4vKiBUYWJsZSBzdHlsZXMgKi9cXG50YWJsZSB7XFxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG50aGVhZCB0aDpudGgtY2hpbGQoMSkge1xcbiAgd2lkdGg6IDEwJTtcXG59XFxuXFxudGhlYWQgdGg6bnRoLWNoaWxkKDIpIHtcXG4gIHdpZHRoOiAxMCU7XFxufVxcblxcbnRoZWFkIHRoOm50aC1jaGlsZCgzKSB7XFxuICB3aWR0aDogMzAlO1xcbn1cXG5cXG50aGVhZCB0aDpudGgtY2hpbGQoNCkge1xcbiAgd2lkdGg6IDE1JTtcXG59XFxuXFxudGhlYWQgdGg6bnRoLWNoaWxkKDUpIHtcXG4gIHdpZHRoOiAxMCU7XFxufSBcXG5cXG50aGVhZCB0aDpudGgtY2hpbGQoNikge1xcbiAgd2lkdGg6IDEwJTtcXG59XFxuXFxudGhlYWQgdGgge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EwYzZmZjtcXG59XFxuXFxudGJvZHkgdHI6bnRoLWNoaWxkKG9kZCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjlmZjtcXG59XFxuXFxudGJvZHkgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWViZmY7XFxufVxcblxcbnRoLCB0ZCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAsMjAxMSwyMDEyLDIwMTMsMjAxNCBNb3JnYW4gUm9kZXJpY2sgaHR0cDovL3JvZGVyaWNrLmRrXG4gKiBMaWNlbnNlOiBNSVQgLSBodHRwOi8vbXJnbnJkcmNrLm1pdC1saWNlbnNlLm9yZ1xuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tcm9kZXJpY2svUHViU3ViSlNcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3Rvcnkpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBQdWJTdWIgPSB7fTtcbiAgICByb290LlB1YlN1YiA9IFB1YlN1YjtcblxuICAgIHZhciBkZWZpbmUgPSByb290LmRlZmluZTtcblxuICAgIGZhY3RvcnkoUHViU3ViKTtcblxuICAgIC8vIEFNRCBzdXBwb3J0XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCl7XG4gICAgICAgIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIFB1YlN1YjsgfSk7XG5cbiAgICAgICAgLy8gQ29tbW9uSlMgYW5kIE5vZGUuanMgbW9kdWxlIHN1cHBvcnRcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jyl7XG4gICAgICAgIGlmIChtb2R1bGUgIT09IHVuZGVmaW5lZCAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gUHViU3ViOyAvLyBOb2RlLmpzIHNwZWNpZmljIGBtb2R1bGUuZXhwb3J0c2BcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRzLlB1YlN1YiA9IFB1YlN1YjsgLy8gQ29tbW9uSlMgbW9kdWxlIDEuMS4xIHNwZWNcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gUHViU3ViOyAvLyBDb21tb25KU1xuICAgIH1cblxufSgoIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdyApIHx8IHRoaXMsIGZ1bmN0aW9uIChQdWJTdWIpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBtZXNzYWdlcyA9IHt9LFxuICAgICAgICBsYXN0VWlkID0gLTE7XG5cbiAgICBmdW5jdGlvbiBoYXNLZXlzKG9iail7XG4gICAgICAgIHZhciBrZXk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gb2JqKXtcbiAgICAgICAgICAgIGlmICggb2JqLmhhc093blByb3BlcnR5KGtleSkgKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgdGhyb3dzIHRoZSBwYXNzZWQgZXhjZXB0aW9uLCBmb3IgdXNlIGFzIGFyZ3VtZW50IGZvciBzZXRUaW1lb3V0XG4gICAgICogQGFsaWFzIHRocm93RXhjZXB0aW9uXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gZXggQW4gRXJyb3Igb2JqZWN0XG4gICAgICovXG4gICAgZnVuY3Rpb24gdGhyb3dFeGNlcHRpb24oIGV4ICl7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiByZVRocm93RXhjZXB0aW9uKCl7XG4gICAgICAgICAgICB0aHJvdyBleDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxsU3Vic2NyaWJlcldpdGhEZWxheWVkRXhjZXB0aW9ucyggc3Vic2NyaWJlciwgbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3Vic2NyaWJlciggbWVzc2FnZSwgZGF0YSApO1xuICAgICAgICB9IGNhdGNoKCBleCApe1xuICAgICAgICAgICAgc2V0VGltZW91dCggdGhyb3dFeGNlcHRpb24oIGV4ICksIDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbFN1YnNjcmliZXJXaXRoSW1tZWRpYXRlRXhjZXB0aW9ucyggc3Vic2NyaWJlciwgbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICBzdWJzY3JpYmVyKCBtZXNzYWdlLCBkYXRhICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsaXZlck1lc3NhZ2UoIG9yaWdpbmFsTWVzc2FnZSwgbWF0Y2hlZE1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKXtcbiAgICAgICAgdmFyIHN1YnNjcmliZXJzID0gbWVzc2FnZXNbbWF0Y2hlZE1lc3NhZ2VdLFxuICAgICAgICAgICAgY2FsbFN1YnNjcmliZXIgPSBpbW1lZGlhdGVFeGNlcHRpb25zID8gY2FsbFN1YnNjcmliZXJXaXRoSW1tZWRpYXRlRXhjZXB0aW9ucyA6IGNhbGxTdWJzY3JpYmVyV2l0aERlbGF5ZWRFeGNlcHRpb25zLFxuICAgICAgICAgICAgcztcblxuICAgICAgICBpZiAoICFtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggbWF0Y2hlZE1lc3NhZ2UgKSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAocyBpbiBzdWJzY3JpYmVycyl7XG4gICAgICAgICAgICBpZiAoIHN1YnNjcmliZXJzLmhhc093blByb3BlcnR5KHMpKXtcbiAgICAgICAgICAgICAgICBjYWxsU3Vic2NyaWJlciggc3Vic2NyaWJlcnNbc10sIG9yaWdpbmFsTWVzc2FnZSwgZGF0YSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZGVsaXZlck5hbWVzcGFjZWQoKXtcbiAgICAgICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXG4gICAgICAgICAgICAvLyBkZWxpdmVyIHRoZSBtZXNzYWdlIGFzIGl0IGlzIG5vd1xuICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UobWVzc2FnZSwgbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyk7XG5cbiAgICAgICAgICAgIC8vIHRyaW0gdGhlIGhpZXJhcmNoeSBhbmQgZGVsaXZlciBtZXNzYWdlIHRvIGVhY2ggbGV2ZWxcbiAgICAgICAgICAgIHdoaWxlKCBwb3NpdGlvbiAhPT0gLTEgKXtcbiAgICAgICAgICAgICAgICB0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCcuJyk7XG4gICAgICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UoIG1lc3NhZ2UsIHRvcGljLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWVzc2FnZUhhc1N1YnNjcmliZXJzKCBtZXNzYWdlICl7XG4gICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgZm91bmQgPSBCb29sZWFuKG1lc3NhZ2VzLmhhc093blByb3BlcnR5KCB0b3BpYyApICYmIGhhc0tleXMobWVzc2FnZXNbdG9waWNdKSksXG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcblxuICAgICAgICB3aGlsZSAoICFmb3VuZCAmJiBwb3NpdGlvbiAhPT0gLTEgKXtcbiAgICAgICAgICAgIHRvcGljID0gdG9waWMuc3Vic3RyKCAwLCBwb3NpdGlvbiApO1xuICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG4gICAgICAgICAgICBmb3VuZCA9IEJvb2xlYW4obWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIHRvcGljICkgJiYgaGFzS2V5cyhtZXNzYWdlc1t0b3BpY10pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCBzeW5jLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIG1lc3NhZ2UgPSAodHlwZW9mIG1lc3NhZ2UgPT09ICdzeW1ib2wnKSA/IG1lc3NhZ2UudG9TdHJpbmcoKSA6IG1lc3NhZ2U7XG5cbiAgICAgICAgdmFyIGRlbGl2ZXIgPSBjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICksXG4gICAgICAgICAgICBoYXNTdWJzY3JpYmVycyA9IG1lc3NhZ2VIYXNTdWJzY3JpYmVycyggbWVzc2FnZSApO1xuXG4gICAgICAgIGlmICggIWhhc1N1YnNjcmliZXJzICl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHN5bmMgPT09IHRydWUgKXtcbiAgICAgICAgICAgIGRlbGl2ZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoIGRlbGl2ZXIsIDAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaXNoZXMgdGhlIG1lc3NhZ2UsIHBhc3NpbmcgdGhlIGRhdGEgdG8gaXQncyBzdWJzY3JpYmVyc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBwdWJsaXNoXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBwdWJsaXNoXG4gICAgICogQHBhcmFtIHt9IGRhdGEgVGhlIGRhdGEgdG8gcGFzcyB0byBzdWJzY3JpYmVyc1xuICAgICAqIEByZXR1cm4geyBCb29sZWFuIH1cbiAgICAgKi9cbiAgICBQdWJTdWIucHVibGlzaCA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCBmYWxzZSwgUHViU3ViLmltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHVibGlzaGVzIHRoZSB0aGUgbWVzc2FnZSBzeW5jaHJvbm91c2x5LCBwYXNzaW5nIHRoZSBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgcHVibGlzaFN5bmNcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0ge30gZGF0YSBUaGUgZGF0YSB0byBwYXNzIHRvIHN1YnNjcmliZXJzXG4gICAgICogQHJldHVybiB7IEJvb2xlYW4gfVxuICAgICAqL1xuICAgIFB1YlN1Yi5wdWJsaXNoU3luYyA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCB0cnVlLCBQdWJTdWIuaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBwYXNzZWQgZnVuY3Rpb24gdG8gdGhlIHBhc3NlZCBtZXNzYWdlLiBFdmVyeSByZXR1cm5lZCB0b2tlbiBpcyB1bmlxdWUgYW5kIHNob3VsZCBiZSBzdG9yZWQgaWYgeW91IG5lZWQgdG8gdW5zdWJzY3JpYmVcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0geyBGdW5jdGlvbiB9IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBhIG5ldyBtZXNzYWdlIGlzIHB1Ymxpc2hlZFxuICAgICAqIEByZXR1cm4geyBTdHJpbmcgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUgPSBmdW5jdGlvbiggbWVzc2FnZSwgZnVuYyApe1xuICAgICAgICBpZiAoIHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lc3NhZ2UgPSAodHlwZW9mIG1lc3NhZ2UgPT09ICdzeW1ib2wnKSA/IG1lc3NhZ2UudG9TdHJpbmcoKSA6IG1lc3NhZ2U7XG5cbiAgICAgICAgLy8gbWVzc2FnZSBpcyBub3QgcmVnaXN0ZXJlZCB5ZXRcbiAgICAgICAgaWYgKCAhbWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIG1lc3NhZ2UgKSApe1xuICAgICAgICAgICAgbWVzc2FnZXNbbWVzc2FnZV0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvcmNpbmcgdG9rZW4gYXMgU3RyaW5nLCB0byBhbGxvdyBmb3IgZnV0dXJlIGV4cGFuc2lvbnMgd2l0aG91dCBicmVha2luZyB1c2FnZVxuICAgICAgICAvLyBhbmQgYWxsb3cgZm9yIGVhc3kgdXNlIGFzIGtleSBuYW1lcyBmb3IgdGhlICdtZXNzYWdlcycgb2JqZWN0XG4gICAgICAgIHZhciB0b2tlbiA9ICd1aWRfJyArIFN0cmluZygrK2xhc3RVaWQpO1xuICAgICAgICBtZXNzYWdlc1ttZXNzYWdlXVt0b2tlbl0gPSBmdW5jO1xuICAgICAgICBcbiAgICAgICAgLy8gcmV0dXJuIHRva2VuIGZvciB1bnN1YnNjcmliaW5nXG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyB0aGUgcGFzc2VkIGZ1bmN0aW9uIHRvIHRoZSBwYXNzZWQgbWVzc2FnZSBvbmNlXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHN1YnNjcmliZU9uY2VcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHN1YnNjcmliZSB0b1xuICAgICAqIEBwYXJhbSB7IEZ1bmN0aW9uIH0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGEgbmV3IG1lc3NhZ2UgaXMgcHVibGlzaGVkXG4gICAgICogQHJldHVybiB7IFB1YlN1YiB9XG4gICAgICovXG4gICAgUHViU3ViLnN1YnNjcmliZU9uY2UgPSBmdW5jdGlvbiggbWVzc2FnZSwgZnVuYyApe1xuICAgICAgICB2YXIgdG9rZW4gPSBQdWJTdWIuc3Vic2NyaWJlKCBtZXNzYWdlLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgLy8gYmVmb3JlIGZ1bmMgYXBwbHksIHVuc3Vic2NyaWJlIG1lc3NhZ2VcbiAgICAgICAgICAgIFB1YlN1Yi51bnN1YnNjcmliZSggdG9rZW4gKTtcbiAgICAgICAgICAgIGZ1bmMuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFB1YlN1YjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBzdWJzY3JpcHRpb25zXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBjbGVhckFsbFN1YnNjcmlwdGlvbnNcbiAgICAgKi9cbiAgICBQdWJTdWIuY2xlYXJBbGxTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gY2xlYXJBbGxTdWJzY3JpcHRpb25zKCl7XG4gICAgICAgIG1lc3NhZ2VzID0ge307XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFyIHN1YnNjcmlwdGlvbnMgYnkgdGhlIHRvcGljXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBjbGVhckFsbFN1YnNjcmlwdGlvbnNcbiAgICAgKi9cbiAgICBQdWJTdWIuY2xlYXJTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gY2xlYXJTdWJzY3JpcHRpb25zKHRvcGljKXtcbiAgICAgICAgdmFyIG07XG4gICAgICAgIGZvciAobSBpbiBtZXNzYWdlcyl7XG4gICAgICAgICAgICBpZiAobWVzc2FnZXMuaGFzT3duUHJvcGVydHkobSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCl7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VzW21dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgc3Vic2NyaXB0aW9uc1xuICAgICAqXG4gICAgICogLSBXaGVuIHBhc3NlZCBhIHRva2VuLCByZW1vdmVzIGEgc3BlY2lmaWMgc3Vic2NyaXB0aW9uLlxuICAgICAqXG5cdCAqIC0gV2hlbiBwYXNzZWQgYSBmdW5jdGlvbiwgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCBmdW5jdGlvblxuICAgICAqXG5cdCAqIC0gV2hlbiBwYXNzZWQgYSB0b3BpYywgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCB0b3BpYyAoaGllcmFyY2h5KVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlT25jZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB8IEZ1bmN0aW9uIH0gdmFsdWUgQSB0b2tlbiwgZnVuY3Rpb24gb3IgdG9waWMgdG8gdW5zdWJzY3JpYmUgZnJvbVxuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgd2l0aCBhIHRva2VuXG4gICAgICogdmFyIHRva2VuID0gUHViU3ViLnN1YnNjcmliZSgnbXl0b3BpYycsIG15RnVuYyk7XG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKHRva2VuKTtcbiAgICAgKiBAZXhhbXBsZSAvLyBVbnN1YnNjcmliaW5nIHdpdGggYSBmdW5jdGlvblxuICAgICAqIFB1YlN1Yi51bnN1YnNjcmliZShteUZ1bmMpO1xuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgZnJvbSBhIHRvcGljXG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKCdteXRvcGljJyk7XG4gICAgICovXG4gICAgUHViU3ViLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICB2YXIgZGVzY2VuZGFudFRvcGljRXhpc3RzID0gZnVuY3Rpb24odG9waWMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbTtcbiAgICAgICAgICAgICAgICBmb3IgKCBtIGluIG1lc3NhZ2VzICl7XG4gICAgICAgICAgICAgICAgICAgIGlmICggbWVzc2FnZXMuaGFzT3duUHJvcGVydHkobSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCApe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYSBkZXNjZW5kYW50IG9mIHRoZSB0b3BpYyBleGlzdHM6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc1RvcGljICAgID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAoIG1lc3NhZ2VzLmhhc093blByb3BlcnR5KHZhbHVlKSB8fCBkZXNjZW5kYW50VG9waWNFeGlzdHModmFsdWUpICksXG4gICAgICAgICAgICBpc1Rva2VuICAgID0gIWlzVG9waWMgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyxcbiAgICAgICAgICAgIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicsXG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZSxcbiAgICAgICAgICAgIG0sIG1lc3NhZ2UsIHQ7XG5cbiAgICAgICAgaWYgKGlzVG9waWMpe1xuICAgICAgICAgICAgUHViU3ViLmNsZWFyU3Vic2NyaXB0aW9ucyh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKCBtIGluIG1lc3NhZ2VzICl7XG4gICAgICAgICAgICBpZiAoIG1lc3NhZ2VzLmhhc093blByb3BlcnR5KCBtICkgKXtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZXNbbV07XG5cbiAgICAgICAgICAgICAgICBpZiAoIGlzVG9rZW4gJiYgbWVzc2FnZVt2YWx1ZV0gKXtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VbdmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9rZW5zIGFyZSB1bmlxdWUsIHNvIHdlIGNhbiBqdXN0IHN0b3AgaGVyZVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKCB0IGluIG1lc3NhZ2UgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmhhc093blByb3BlcnR5KHQpICYmIG1lc3NhZ2VbdF0gPT09IHZhbHVlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVzc2FnZVt0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufSkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlcyA9IFtdO1xuICB2YXIgbmV3U3R5bGVzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjc3MgPSBpdGVtWzFdO1xuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl07XG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfTtcblxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBwYXJ0czogW3BhcnRdXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuICAgIHZhciBqID0gMDtcblxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrO1xuXG4gICAgICBmb3IgKDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge1xuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgcmVmczogMSxcbiAgICAgICAgcGFydHM6IHBhcnRzXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKG9wdGlvbnMuYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgb3B0aW9ucy5hdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMuYXR0cmlidXRlcyA9IHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMgPT09ICdvYmplY3QnID8gb3B0aW9ucy5hdHRyaWJ1dGVzIDoge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cbiAgICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgICBkb21TdHlsZS5yZWZzLS07XG4gICAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgdmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcbiAgICAgIGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1heVJlbW92ZS5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfZG9tU3R5bGUgPSBtYXlSZW1vdmVbX2ldO1xuXG4gICAgICBpZiAoX2RvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBfZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBfZG9tU3R5bGUucGFydHNbal0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtfZG9tU3R5bGUuaWRdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0IFB1YlN1YiBmcm9tIFwicHVic3ViLWpzXCI7XG5pbXBvcnQge1xuICBDUkVBVEVfVE9ETyxcbiAgRURJVF9UT0RPLFxuICBERUxFVEVfVE9ETyxcbiAgQ1JFQVRFX1BST0pFQ1QsXG4gIEVESVRfUFJPSkVDVCxcbiAgREVMRVRFX1BST0pFQ1QsXG4gIFJFTkRFUl9QUk9KRUNUX0xJU1QsXG4gIFJFTkRFUl9QUk9KRUNULFxuICBTV0lUQ0hfUFJPSkVDVFxufSBmcm9tIFwiLi9ldmVudC10eXBlc1wiO1xuXG5jb25zdCBEaXNwbGF5ID0gKGZ1bmN0aW9uKCkge1xuICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuICBsZXQgc3VibWl0UHJvamVjdEZvcm1NZXRob2QgPSBudWxsO1xuICBsZXQgc3VibWl0VG9kb0Zvcm1NZXRob2QgPSBudWxsO1xuICBsZXQgcHJldmlvdXNBY3RpdmVFbGVtZW50ID0gbnVsbDtcblxuICAvLyBQcm9qZWN0IExpc3QgRGl2IChjb250YWluZXIpXG4gIGNvbnN0IHByb2plY3RMaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdExpc3REaXYuaWQgPSBcInByb2plY3QtbGlzdC1kaXZcIjtcbiAgcm9vdC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdERpdik7XG4gIC8vIFByb2plY3QgTGlzdCBIZWFkZXJcbiAgY29uc3QgcHJvamVjdExpc3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0TGlzdEhlYWRlci5pZCA9IFwicHJvamVjdC1saXN0LWhlYWRlci1kaXZcIjtcbiAgcHJvamVjdExpc3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdExpc3RIZWFkZXIpO1xuICAvLyBIZWFkZXI6IHRpdGxlXG4gIGNvbnN0IHByb2plY3RMaXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHByb2plY3RMaXN0VGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3QgTGlzdFwiO1xuICBwcm9qZWN0TGlzdEhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdFRpdGxlKTtcbiAgLy8gTmV3IFByb2plY3QgQnV0dG9uXG4gIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBuZXdQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdFwiO1xuICBuZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZGlzcGxheVByb2plY3REaWFsb2coQ1JFQVRFX1BST0pFQ1QsIHt9KTtcbiAgfSk7XG4gIHByb2plY3RMaXN0SGVhZGVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdXR0b24pO1xuICAvLyBQcm9qZWN0IExpc3QgVWwgKHRvIGJlIHBvcHVsYXRlZCBieSBcInJlbmRlciAuLi4gXCIgYmVsb3cpXG4gIGNvbnN0IHByb2plY3RMaXN0VWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHByb2plY3RMaXN0VWwuaWQgPSBcInByb2plY3QtbGlzdC11bFwiO1xuICBwcm9qZWN0TGlzdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdFVsKTtcblxuICAvLyBQcm9qZWN0IERpdiAoY29udGFpbmVyKVxuICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcm9vdC5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgcHJvamVjdERpdi5pZCA9IFwicHJvamVjdC1kaXZcIjtcblxuICBjb25zdCByZW5kZXJQcm9qZWN0TGlzdCA9IGZ1bmN0aW9uKG1zZywgcHJvamVjdExpc3QpIHtcbiAgICBjb25zb2xlLmxvZyhtc2cpO1xuICAgIC8vIGNsZWFyIHByb2plY3QgbGlzdFxuICAgIHdoaWxlIChwcm9qZWN0TGlzdFVsLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHByb2plY3RMaXN0VWwucmVtb3ZlQ2hpbGQocHJvamVjdExpc3RVbC5maXJzdENoaWxkKTtcbiAgICB9IC8vIC4uLiB0byB3cml0ZSBhIG5ldyBvbmVcblxuICAgIHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBwcm9qZWN0TGkudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgcHJvamVjdExpLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgaW5kZXgpO1xuICAgICAgcHJvamVjdExpc3RVbC5hcHBlbmRDaGlsZChwcm9qZWN0TGkpO1xuICAgICAgcHJvamVjdExpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goU1dJVENIX1BST0pFQ1QsIGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyUHJvamVjdCA9IGZ1bmN0aW9uKG1zZywgcHJvamVjdCkge1xuICAgIGNvbnNvbGUubG9nKG1zZyk7XG5cbiAgICAvLyBjbGVhciBwcm9qZWN0IGRpdiAuLi5cbiAgICB3aGlsZSAocHJvamVjdERpdi5maXJzdENoaWxkKSB7XG4gICAgICBwcm9qZWN0RGl2LnJlbW92ZUNoaWxkKHByb2plY3REaXYuZmlyc3RDaGlsZCk7XG4gICAgfSAvLyAuLi4gdG8gd3JpdGUgYSBuZXcgb25lXG5cbiAgICAvLyBoZWFkZXJcbiAgICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlckRpdi5pZCA9IFwicHJvamVjdC1oZWFkZXItZGl2XCI7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChoZWFkZXJEaXYpO1xuXG4gICAgLy8gaGVhZGVyOiB0aXRsZVxuICAgIGNvbnN0IHRpdGxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHRyeSB7XG4gICAgICAvLyBoYW5kbGUgXCJubyBhY3RpdmUgcHJvamVjdHNcIlxuICAgICAgdGl0bGVIZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKHRpdGxlSGVhZGVyKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aXRsZUhlYWRlci50ZXh0Q29udGVudCA9IFwiTm8gYWN0aXZlIHByb2plY3RzXCI7XG4gICAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQodGl0bGVIZWFkZXIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGhlYWRlcjogYnV0dG9uc1xuICAgIGNvbnN0IGJ1dHRvbnNTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgYnV0dG9uc1NwYW4uaWQgPSBcInByb2plY3QtYnV0dG9uc1wiO1xuICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChidXR0b25zU3Bhbik7XG5cbiAgICAvLyBoZWFkZXIgYnV0dG9uczogXCJuZXcgdG9kb1wiIGJ1dHRvblxuICAgIGNvbnN0IG5ld1RvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG5ld1RvZG9CdXR0b24udGV4dENvbnRlbnQgPSBcIk5ldyBUb2RvXCI7XG4gICAgbmV3VG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZGlzcGxheVRvZG9EaWFsb2coQ1JFQVRFX1RPRE8sIHt9KTtcbiAgICB9KTtcbiAgICBidXR0b25zU3Bhbi5hcHBlbmRDaGlsZChuZXdUb2RvQnV0dG9uKTtcblxuICAgIC8vIGhlYWRlciBidXR0b25zOiBcImVkaXQgcHJvamVjdFwiIGJ1dHRvblxuICAgIGNvbnN0IGVkaXRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0UHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdCBQcm9qZWN0XCI7XG4gICAgZWRpdFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZWRpdGluZyBwcm9qZWN0XCIpO1xuICAgICAgZGlzcGxheVByb2plY3REaWFsb2coRURJVF9QUk9KRUNULCB7IHByb2plY3QgfSk7XG4gICAgfSk7XG4gICAgYnV0dG9uc1NwYW4uYXBwZW5kQ2hpbGQoZWRpdFByb2plY3RCdXR0b24pO1xuXG4gICAgLy8gaGVhZGVyIGJ1dHRvbnM6IFwiZGVsZXRlIHByb2plY3RcIiBidXR0b25cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGUgUHJvamVjdFwiO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIFB1YlN1Yi5wdWJsaXNoKERFTEVURV9QUk9KRUNULCBwcm9qZWN0KTtcbiAgICB9KTtcbiAgICBidXR0b25zU3Bhbi5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnV0dG9uKTtcblxuICAgIC8vIGxpbmUgYnJlYWsgVE9ETzogcmVwbGFjZSB3aXRoIHBhZGRpbmcvbWFyZ2luP1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG5cbiAgICAvLyBjcmVhdGUgYSB0YWJsZSB0byBvcmdhbml6ZSB0b2Rvc1xuICAgIGNvbnN0IHRvZG9UYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHRvZG9UYWJsZSk7XG5cbiAgICBjb25zdCB0b2RvSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcbiAgICB0b2RvVGFibGUuYXBwZW5kQ2hpbGQodG9kb0hlYWQpO1xuICAgIGNvbnN0IHRpdGxlcyA9IFtcIkRvbmVcIiwgXCJQcmlvcml0eVwiLCBcIlRpdGxlXCIsIFwiRHVlIERhdGVcIiwgXCJFZGl0XCIsIFwiRGVsZXRlXCJdO1xuICAgIHRpdGxlcy5mb3JFYWNoKHRpdGxlID0+IHtcbiAgICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgdGguc2NvcGUgPSBcImNvbFwiO1xuICAgICAgdGgudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgIHRvZG9IZWFkLmFwcGVuZENoaWxkKHRoKTtcbiAgICB9KTtcblxuICAgIC8vIGNyZWF0ZSBhIHRhYmxlIGJvZHkgdG8gcG9wdWxhdGUgd2l0aCB0b2Rvc1xuICAgIGNvbnN0IHRvZG9Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xuICAgIHRvZG9UYWJsZS5hcHBlbmRDaGlsZCh0b2RvQm9keSk7XG4gICAgcHJvamVjdC50b2RvTGlzdC5mb3JFYWNoKCh0b2RvLCBpbmRleCkgPT4ge1xuICAgICAgcmVuZGVyVG9kbyh0b2RvQm9keSwgdG9kbywgaW5kZXgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclRvZG8gPSBmdW5jdGlvbigvKiB0b2RvVWwsICovIHRvZG9Cb2R5LCB0b2RvLCBpbmRleCkge1xuICAgIGNvbnN0IHRvZG9Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgdG9kb0JvZHkuYXBwZW5kQ2hpbGQodG9kb1Jvdyk7XG5cbiAgICAvLyAnTWFyayBjb21wbGV0ZScgYnV0dG9uXG4gICAgY29uc3QgYnV0dG9uQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICB0b2RvUm93LmFwcGVuZENoaWxkKGJ1dHRvbkNlbGwpO1xuICAgIGNvbnN0IGNvbXBsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb21wbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRG9uZVwiO1xuICAgIGJ1dHRvbkNlbGwuYXBwZW5kQ2hpbGQoY29tcGxldGVCdXR0b24pO1xuICAgIGNvbXBsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVUb2RvQ29tcGxldGUpO1xuXG4gICAgZnVuY3Rpb24gdG9nZ2xlVG9kb0NvbXBsZXRlKGUpIHtcbiAgICAgIGNvbnN0IHRvZG9TcGFuID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcbiAgICAgIHRvZG9TcGFuLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZVwiKTtcbiAgICB9XG5cbiAgICAvLyBwcmlvcml0eSBpbmRpY2F0b3JcbiAgICBjb25zdCBwcmlvcml0eUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgdG9kb1Jvdy5hcHBlbmRDaGlsZChwcmlvcml0eUNlbGwpO1xuICAgIGNvbnN0IHByaW9yaXR5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHByaW9yaXR5VGV4dC50ZXh0Q29udGVudCA9IHRvZG8ucHJpb3JpdHk7XG4gICAgcHJpb3JpdHlDZWxsLmFwcGVuZENoaWxkKHByaW9yaXR5VGV4dCk7XG5cbiAgICAvLyBUb2RvIHRpdGxlXG4gICAgY29uc3QgdGl0bGVDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgIHRvZG9Sb3cuYXBwZW5kQ2hpbGQodGl0bGVDZWxsKTtcbiAgICBjb25zdCB0ZXh0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHRleHRTcGFuLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICB0aXRsZUNlbGwuYXBwZW5kQ2hpbGQodGV4dFNwYW4pO1xuXG4gICAgLy8gZHVlIGRhdGVcbiAgICBjb25zdCBkdWVEYXRlQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICB0b2RvUm93LmFwcGVuZENoaWxkKGR1ZURhdGVDZWxsKTtcbiAgICBkdWVEYXRlQ2VsbC50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcblxuICAgIC8vIGRyYXcgZWRpdCBidXR0b24gKHRvZG86IHBlbmNpbCBpY29uKVxuICAgIGNvbnN0IGVkaXRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgIHRvZG9Sb3cuYXBwZW5kQ2hpbGQoZWRpdENlbGwpO1xuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICBlZGl0Q2VsbC5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImJlZXAhIGVkaXRpbmcgdG9kby5cIik7XG4gICAgICBkaXNwbGF5VG9kb0RpYWxvZyhFRElUX1RPRE8sIHsgdG9kbywgaW5kZXggfSk7XG4gICAgfSk7XG5cbiAgICAvLyBkcmF3IGRlbGV0ZSBidXR0b24gKHRyYXNoIGljb24pXG4gICAgY29uc3QgZGVsZXRlQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICB0b2RvUm93LmFwcGVuZENoaWxkKGRlbGV0ZUNlbGwpO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgICBkZWxldGVDZWxsLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBQdWJTdWIucHVibGlzaChERUxFVEVfVE9ETywgeyBpbmRleCB9KTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBQcm9qZWN0IERpYWxvZyBzZXR1cDpcbiAgZnVuY3Rpb24gZGlzcGxheVByb2plY3REaWFsb2cobWV0aG9kLCBkYXRhKSB7XG4gICAgLy8gc2VsZWN0b3Igc2V0dXBcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtZm9ybS1jb250YWluZXJcIik7XG4gICAgY29uc3QgZGlhbG9nTWFzayA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKFwiZGl2LmRpYWxvZy1tYXNrXCIpO1xuICAgIGNvbnN0IGZvcm0gPSBkaWFsb2cucXVlcnlTZWxlY3RvcihcImZvcm0jcHJvamVjdC1mb3JtXCIpO1xuXG4gICAgLy8gU2F2ZSBhY3RpdmUgZWxlbWVudFxuICAgIHByZXZpb3VzQWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICAvLyBTaG93IHRoZSBkaWFsb2dcbiAgICBkaWFsb2cuY2xhc3NMaXN0LmFkZChcIm9wZW5lZFwiKTtcblxuICAgIC8vIFBvcHVsYXRlIGZpZWxkcyBhcHByb3ByaWF0ZWx5IGZvciBcIm5ld1wiIG9yIFwiZWRpdFwiXG4gICAgaWYgKG1ldGhvZCA9PT0gQ1JFQVRFX1BST0pFQ1QpIHtcbiAgICAgIGZvcm0uZWxlbWVudHMudGl0bGUudmFsdWUgPSBcIk5ldyBQcm9qZWN0XCI7XG4gICAgfSBlbHNlIGlmIChtZXRob2QgPT09IEVESVRfUFJPSkVDVCkge1xuICAgICAgZm9ybS5lbGVtZW50cy50aXRsZS52YWx1ZSA9IGRhdGEucHJvamVjdC50aXRsZTtcbiAgICB9XG5cbiAgICAvLyBMaXN0ZW4gZm9yIGZvcm0gY29tcGxldGlvblxuICAgIHN1Ym1pdFByb2plY3RGb3JtTWV0aG9kID0gc3VibWl0UHJvamVjdEZvcm0uYmluZCh7IG1ldGhvZCwgZGF0YSB9KTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc3VibWl0UHJvamVjdEZvcm1NZXRob2QpO1xuXG4gICAgLy8gQWRkIGxpc3RlbmVycyB0byBjbG9zZSB3aW5kb3dcbiAgICBkaWFsb2dNYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVByb2plY3REaWFsb2cpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBjaGVja0Nsb3NlUHJvamVjdERpYWxvZyk7XG4gICAgZGlhbG9nXG4gICAgICAucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5jbG9zZVwiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVByb2plY3REaWFsb2cpO1xuXG4gICAgLy8gRm9jdXMgdGhlIGRpYWxvZ1xuICAgIGRpYWxvZy5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikuZm9jdXMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN1Ym1pdFByb2plY3RGb3JtKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcImZvcm0gc3VibWl0dGVkIVwiKTtcbiAgICAvLyBoYW5kbGVzIGVpdGhlciBcImVkaXRcIiBvciBcIm5ld1wiXG4gICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24odGhpcy5kYXRhLCB7XG4gICAgICB0aXRsZTogZS50YXJnZXQuZWxlbWVudHMudGl0bGUudmFsdWVcbiAgICB9KTtcbiAgICBQdWJTdWIucHVibGlzaCh0aGlzLm1ldGhvZCwgbmV3RGF0YSk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBzdGF5IG9uIHNhbWUgcGFnZVxuICAgIGNsb3NlUHJvamVjdERpYWxvZygpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tDbG9zZVByb2plY3REaWFsb2coZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSBjbG9zZVByb2plY3REaWFsb2coKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlUHJvamVjdERpYWxvZygpIHtcbiAgICAvLyBzZWxlY3RvciBzZXR1cFxuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1mb3JtLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBkaWFsb2dNYXNrID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCJkaXYuZGlhbG9nLW1hc2tcIik7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1mb3JtXCIpO1xuXG4gICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyc1xuICAgIGRpYWxvZ01hc2sucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlUHJvamVjdERpYWxvZyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNoZWNrQ2xvc2VQcm9qZWN0RGlhbG9nKTtcbiAgICBkaWFsb2dcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmNsb3NlXCIpXG4gICAgICAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlUHJvamVjdERpYWxvZyk7XG4gICAgZm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN1Ym1pdFByb2plY3RGb3JtTWV0aG9kKTtcblxuICAgIGRpYWxvZy5jbGFzc0xpc3QucmVtb3ZlKFwib3BlbmVkXCIpO1xuXG4gICAgLy8gUmV0dXJuIGZvY3VzIG91dHNpZGUgb2YgdGhlIG1vZGFsXG4gICAgcHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICAvLyBUb2RvIERpYWxvZyBzZXR1cDpcbiAgZnVuY3Rpb24gZGlzcGxheVRvZG9EaWFsb2cobWV0aG9kLCBkYXRhKSB7XG4gICAgLy8gc2VsZWN0b3Igc2V0dXBcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZm9ybS1jb250YWluZXJcIik7XG4gICAgY29uc3QgZGlhbG9nTWFzayA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKFwiZGl2LmRpYWxvZy1tYXNrXCIpO1xuICAgIGNvbnN0IGZvcm0gPSBkaWFsb2cucXVlcnlTZWxlY3RvcihcImZvcm0jdG9kby1mb3JtXCIpO1xuXG4gICAgLy8gU2F2ZSBhY3RpdmUgZWxlbWVudFxuICAgIHByZXZpb3VzQWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICAvLyBTaG93IHRoZSBkaWFsb2dcbiAgICBkaWFsb2cuY2xhc3NMaXN0LmFkZChcIm9wZW5lZFwiKTtcblxuICAgIC8vIFBvcHVsYXRlIGZpZWxkcyBhcHByb3ByaWF0ZWx5IGZvciBcIm5ld1wiIG9yIFwiZWRpdFwiXG4gICAgaWYgKG1ldGhvZCA9PT0gQ1JFQVRFX1RPRE8pIHtcbiAgICAgIGZvcm0uZWxlbWVudHMudGl0bGUudmFsdWUgPSBcIk5ldyBUb2RvXCI7XG4gICAgICBmb3JtLmVsZW1lbnRzLmRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgIGZvcm0uZWxlbWVudHMucHJpb3JpdHkudmFsdWUgPSBcIm5vcm1hbFwiO1xuICAgICAgZm9ybS5lbGVtZW50cy5kdWVEYXRlLnZhbHVlID0gXCJ0b2RheVwiO1xuICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSBFRElUX1RPRE8pIHtcbiAgICAgIGZvcm0uZWxlbWVudHMudGl0bGUudmFsdWUgPSBkYXRhLnRvZG8udGl0bGU7XG4gICAgICBmb3JtLmVsZW1lbnRzLmRlc2NyaXB0aW9uLnZhbHVlID0gZGF0YS50b2RvLmRlc2NyaXB0aW9uO1xuICAgICAgZm9ybS5lbGVtZW50cy5wcmlvcml0eS52YWx1ZSA9IGRhdGEudG9kby5wcmlvcml0eTtcbiAgICAgIGZvcm0uZWxlbWVudHMuZHVlRGF0ZS52YWx1ZSA9IGRhdGEudG9kby5kdWVEYXRlO1xuICAgIH1cblxuICAgIC8vIExpc3RlbiBmb3IgZm9ybSBjb21wbGV0aW9uXG4gICAgc3VibWl0VG9kb0Zvcm1NZXRob2QgPSBzdWJtaXRUb2RvRm9ybS5iaW5kKHsgbWV0aG9kLCBkYXRhIH0pO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBzdWJtaXRUb2RvRm9ybU1ldGhvZCk7XG5cbiAgICAvLyBBZGQgbGlzdGVuZXJzIHRvIGNsb3NlIHdpbmRvd1xuICAgIGRpYWxvZ01hc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlVG9kb0RpYWxvZyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNoZWNrQ2xvc2VUb2RvRGlhbG9nKTtcbiAgICBkaWFsb2dcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmNsb3NlXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlVG9kb0RpYWxvZyk7XG5cbiAgICBkaWFsb2cucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLmZvY3VzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBzdWJtaXRUb2RvRm9ybShlKSB7XG4gICAgY29uc29sZS5sb2coXCJmb3JtIHN1Ym1pdHRlZCFcIik7XG4gICAgY29uc3QgeyBlbGVtZW50cyB9ID0gZS50YXJnZXQ7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IFtcInRpdGxlXCIsIFwiZGVzY3JpcHRpb25cIiwgXCJwcmlvcml0eVwiLCBcImR1ZURhdGVcIl07XG4gICAgY29uc3QgaW5mbyA9IHt9O1xuICAgIHByb3BlcnRpZXMuZm9yRWFjaChwID0+IChpbmZvW3BdID0gZWxlbWVudHNbcF0udmFsdWUpKTtcbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih0aGlzLmRhdGEsIGluZm8pO1xuICAgIFB1YlN1Yi5wdWJsaXNoKHRoaXMubWV0aG9kLCBuZXdEYXRhKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIHN0YXkgb24gc2FtZSBwYWdlXG4gICAgY2xvc2VUb2RvRGlhbG9nKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0Nsb3NlVG9kb0RpYWxvZyhlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIGNsb3NlVG9kb0RpYWxvZygpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VUb2RvRGlhbG9nKCkge1xuICAgIC8vIHNlbGVjdG9yIHNldHVwXG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWZvcm0tY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGRpYWxvZ01hc2sgPSBkaWFsb2cucXVlcnlTZWxlY3RvcihcImRpdi5kaWFsb2ctbWFza1wiKTtcbiAgICBjb25zdCBmb3JtID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtI3RvZG8tZm9ybVwiKTtcblxuICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnNcbiAgICBkaWFsb2dNYXNrLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVRvZG9EaWFsb2cpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBjaGVja0Nsb3NlVG9kb0RpYWxvZyk7XG4gICAgZGlhbG9nXG4gICAgICAucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5jbG9zZVwiKVxuICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVRvZG9EaWFsb2cpO1xuICAgIGZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBzdWJtaXRUb2RvRm9ybU1ldGhvZCk7XG5cbiAgICBkaWFsb2cuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5lZFwiKTtcblxuICAgIC8vIFJldHVybiBmb2N1cyBvdXRzaWRlIG9mIHRoZSBtb2RhbFxuICAgIHByZXZpb3VzQWN0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgUHViU3ViLnN1YnNjcmliZShSRU5ERVJfUFJPSkVDVF9MSVNULCByZW5kZXJQcm9qZWN0TGlzdCk7XG4gIFB1YlN1Yi5zdWJzY3JpYmUoUkVOREVSX1BST0pFQ1QsIHJlbmRlclByb2plY3QpO1xufSkoKTtcbiIsImNvbnN0IFBSSU5UX0xJU1QgPSBcInByaW50IGxpc3RcIjtcbmNvbnN0IEdFVF9BQ1RJT04gPSBcImdldCBhY3Rpb25cIjtcblxuY29uc3QgQ1JFQVRFX1RPRE8gPSBcImNyZWF0ZSB0b2RvXCI7XG5jb25zdCBFRElUX1RPRE8gPSBcImVkaXQgdG9kb1wiO1xuY29uc3QgREVMRVRFX1RPRE8gPSBcImRlbGV0ZSB0b2RvXCI7XG5cbmNvbnN0IENSRUFURV9QUk9KRUNUID0gXCJjcmVhdGUgcHJvamVjdFwiO1xuY29uc3QgRURJVF9QUk9KRUNUID0gXCJlZGl0IHByb2plY3RcIjtcbmNvbnN0IERFTEVURV9QUk9KRUNUID0gXCJkZWxldGUgcHJvamVjdFwiO1xuXG5jb25zdCBTRVRfVVBfUEFHRSA9IFwic2V0IHVwIHBhZ2VcIjtcbmNvbnN0IFJFTkRFUl9QUk9KRUNUX0xJU1QgPSBcInJlbmRlciBwcm9qZWN0IGxpc3RcIjtcbmNvbnN0IFJFTkRFUl9QUk9KRUNUID0gXCJyZW5kZXIgcHJvamVjdFwiO1xuXG5jb25zdCBTV0lUQ0hfUFJPSkVDVCA9IFwic3dpdGNoIHByb2plY3RcIjtcblxuZXhwb3J0IHtcbiAgUFJJTlRfTElTVCxcbiAgR0VUX0FDVElPTixcbiAgQ1JFQVRFX1RPRE8sXG4gIEVESVRfVE9ETyxcbiAgREVMRVRFX1RPRE8sXG4gIENSRUFURV9QUk9KRUNULFxuICBFRElUX1BST0pFQ1QsXG4gIERFTEVURV9QUk9KRUNULFxuICBTRVRfVVBfUEFHRSxcbiAgUkVOREVSX1BST0pFQ1RfTElTVCxcbiAgUkVOREVSX1BST0pFQ1QsXG4gIFNXSVRDSF9QUk9KRUNUXG59O1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgUHViU3ViIGZyb20gXCJwdWJzdWItanNcIjtcbmltcG9ydCB7XG4gIENSRUFURV9UT0RPLFxuICBFRElUX1RPRE8sXG4gIERFTEVURV9UT0RPLFxuICBDUkVBVEVfUFJPSkVDVCxcbiAgRURJVF9QUk9KRUNULFxuICBERUxFVEVfUFJPSkVDVCxcbiAgUkVOREVSX1BST0pFQ1RfTElTVCxcbiAgUkVOREVSX1BST0pFQ1QsXG4gIFNXSVRDSF9QUk9KRUNUXG59IGZyb20gXCIuL2V2ZW50LXR5cGVzXCI7XG5pbXBvcnQgdG9kbyBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgcHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgXCIuL2RvbS1tYW5hZ2VyXCI7XG5cbmNvbnN0IEFwcGxpY2F0aW9uID0gKGZ1bmN0aW9uKCkge1xuICAvKiBTdG9yYWdlIGxvZ2ljICovXG4gIGNvbnN0IHNhdmVQcm9qZWN0TGlzdCA9IGZ1bmN0aW9uKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdExpc3RcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgfTtcblxuICBjb25zdCBsb2FkUHJvamVjdExpc3QgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzdG9yZWRTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RMaXN0XCIpO1xuICAgIGNvbnN0IHN0b3JlZExpc3QgPSBKU09OLnBhcnNlKHN0b3JlZFN0cmluZyk7XG4gICAgY29uc3QgbmV3TGlzdCA9IHN0b3JlZExpc3QubWFwKHAgPT4ge1xuICAgICAgY29uc3QgbmV3VG9kb0xpc3QgPSBwLnRvZG9MaXN0Lm1hcCh0ID0+IHtcbiAgICAgICAgcmV0dXJuIHRvZG8odC50aXRsZSwgdC5kZXNjcmlwdGlvbiwgdC5kdWVEYXRlLCB0LnByaW9yaXR5KTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3QocC50aXRsZSwgbmV3VG9kb0xpc3QpO1xuICAgICAgcmV0dXJuIG5ld1Byb2plY3Q7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld0xpc3Q7XG4gIH07XG4gIC8qIC4uLiBlbmQgc3RvcmFnZSBsb2dpYyAqL1xuXG4gIC8qIFRvZG8gbG9naWMgLS0gICovXG4gIGNvbnN0IGNyZWF0ZVRvZG8gPSBmdW5jdGlvbihtc2csIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSB9KSB7XG4gICAgLy8gd29ya2luZ1xuICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgY29uc3QgbmV3VG9kbyA9IHRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgYWN0aXZlUHJvamVjdC50b2RvTGlzdC5wdXNoKG5ld1RvZG8pO1xuICAgIFB1YlN1Yi5wdWJsaXNoKFJFTkRFUl9QUk9KRUNULCBhY3RpdmVQcm9qZWN0KTtcbiAgICBzYXZlUHJvamVjdExpc3QoKTtcbiAgfTtcblxuICBjb25zdCBlZGl0VG9kbyA9IGZ1bmN0aW9uKFxuICAgIG1zZyxcbiAgICB7IGluZGV4LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5IH1cbiAgKSB7XG4gICAgY29uc29sZS5sb2cobXNnKTtcbiAgICBjb25zdCBuZXdUb2RvID0gdG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICBhY3RpdmVQcm9qZWN0LnRvZG9MaXN0LnNwbGljZShpbmRleCwgMSwgbmV3VG9kbyk7XG4gICAgUHViU3ViLnB1Ymxpc2goUkVOREVSX1BST0pFQ1QsIGFjdGl2ZVByb2plY3QpO1xuICAgIHNhdmVQcm9qZWN0TGlzdCgpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSBmdW5jdGlvbihtc2csIHsgaW5kZXggfSkge1xuICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgYWN0aXZlUHJvamVjdC50b2RvTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIFB1YlN1Yi5wdWJsaXNoKFJFTkRFUl9QUk9KRUNULCBhY3RpdmVQcm9qZWN0KTtcbiAgICBzYXZlUHJvamVjdExpc3QoKTtcbiAgfTtcbiAgLyogRW5kIFRvZG8gbG9naWMgKi9cblxuICAvKiBQcm9qZWN0IExvZ2ljICovXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBmdW5jdGlvbihtc2csIHsgdGl0bGUgfSkge1xuICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3QodGl0bGUpO1xuICAgIHByb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdCk7XG4gICAgc3dpdGNoUHJvamVjdChTV0lUQ0hfUFJPSkVDVCwgcHJvamVjdExpc3QubGVuZ3RoIC0gMSk7XG4gICAgUHViU3ViLnB1Ymxpc2goUkVOREVSX1BST0pFQ1RfTElTVCwgcHJvamVjdExpc3QpO1xuICAgIHNhdmVQcm9qZWN0TGlzdCgpO1xuICB9O1xuXG4gIGNvbnN0IGVkaXRQcm9qZWN0ID0gZnVuY3Rpb24obXNnLCB7IHRpdGxlIH0pIHtcbiAgICBjb25zb2xlLmxvZyhtc2cpO1xuICAgIGFjdGl2ZVByb2plY3QudGl0bGUgPSB0aXRsZTtcbiAgICBQdWJTdWIucHVibGlzaChSRU5ERVJfUFJPSkVDVF9MSVNULCBwcm9qZWN0TGlzdCk7XG4gICAgUHViU3ViLnB1Ymxpc2goUkVOREVSX1BST0pFQ1QsIGFjdGl2ZVByb2plY3QpO1xuICAgIHNhdmVQcm9qZWN0TGlzdCgpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBmdW5jdGlvbihtc2csIHRhcmdldFByb2plY3QpIHtcbiAgICBjb25zb2xlLmxvZyhtc2cpO1xuICAgIGlmICh0YXJnZXRQcm9qZWN0ID09PSBhY3RpdmVQcm9qZWN0KSBQdWJTdWIucHVibGlzaChTV0lUQ0hfUFJPSkVDVCwgMCk7XG4gICAgY29uc3QgaW5kZXggPSBwcm9qZWN0TGlzdC5maW5kSW5kZXgocHJvaiA9PiBwcm9qID09PSBwcm9qZWN0KTtcbiAgICBwcm9qZWN0TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIFB1YlN1Yi5wdWJsaXNoKFJFTkRFUl9QUk9KRUNUX0xJU1QsIHByb2plY3RMaXN0KTtcbiAgICBzYXZlUHJvamVjdExpc3QoKTtcbiAgfTtcblxuICBjb25zdCBzd2l0Y2hQcm9qZWN0ID0gZnVuY3Rpb24obXNnLCBpbmRleCkge1xuICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgYWN0aXZlUHJvamVjdCA9IHByb2plY3RMaXN0W2luZGV4XTtcbiAgICBQdWJTdWIucHVibGlzaChSRU5ERVJfUFJPSkVDVCwgYWN0aXZlUHJvamVjdCk7XG4gIH07XG4gIC8qIEVuZCBQcm9qZWN0IExvZ2ljICovXG5cbiAgLy8gU3Vic2NyaXB0aW9uc1xuICBjb25zdCB0b2tlbjAgPSBQdWJTdWIuc3Vic2NyaWJlKENSRUFURV9UT0RPLCBjcmVhdGVUb2RvKTtcbiAgY29uc3QgdG9rZW4xID0gUHViU3ViLnN1YnNjcmliZShFRElUX1RPRE8sIGVkaXRUb2RvKTtcbiAgY29uc3QgdG9rZW4yID0gUHViU3ViLnN1YnNjcmliZShERUxFVEVfVE9ETywgZGVsZXRlVG9kbyk7XG4gIGNvbnN0IHRva2VuMyA9IFB1YlN1Yi5zdWJzY3JpYmUoQ1JFQVRFX1BST0pFQ1QsIGNyZWF0ZVByb2plY3QpO1xuICBjb25zdCB0b2tlbjQgPSBQdWJTdWIuc3Vic2NyaWJlKEVESVRfUFJPSkVDVCwgZWRpdFByb2plY3QpO1xuICBjb25zdCB0b2tlbjUgPSBQdWJTdWIuc3Vic2NyaWJlKERFTEVURV9QUk9KRUNULCBkZWxldGVQcm9qZWN0KTtcbiAgY29uc3QgdG9rZW42ID0gUHViU3ViLnN1YnNjcmliZShTV0lUQ0hfUFJPSkVDVCwgc3dpdGNoUHJvamVjdCk7XG5cbiAgLy8gZ2V0IHByb2plY3QgbGlzdCBmcm9tIHN0b3JhZ2VcbiAgY29uc3QgcHJvamVjdExpc3QgPSBbXTtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdExpc3RcIikpIHtcbiAgICBwcm9qZWN0TGlzdC5wdXNoKC4uLmxvYWRQcm9qZWN0TGlzdCgpKTtcbiAgfVxuXG4gIC8vIGNob29zZSBhY3RpdmUgcHJvamVjdFxuICBsZXQgYWN0aXZlUHJvamVjdCA9IHByb2plY3RMaXN0WzBdIHx8IG51bGw7XG4gIC8vIGNvbnN0IGdldEFjdGl2ZVByb2plY3QgPSAoKSA9PiB7IHJldHVybiBhY3RpdmVQcm9qZWN0IH07IC8vIGZvciB1bml0IHRlc3RzXG5cbiAgLy8gb3B0aW9uYWxseSBsb2FkIHNhbXBsZSBwcm9qZWN0c1xuICBpZiAocHJvamVjdExpc3QubGVuZ3RoID09PSAwICYmIGNvbmZpcm0oXCJMb2FkIHNhbXBsZSBwcm9qZWN0cz9cIikpIHtcbiAgICBsb2FkVGVzdFByb2plY3RzKCk7XG4gIH1cblxuICAvLyBkaXNwbGF5IGxpc3RzXG4gIFB1YlN1Yi5wdWJsaXNoKFJFTkRFUl9QUk9KRUNUX0xJU1QsIHByb2plY3RMaXN0KTtcbiAgUHViU3ViLnB1Ymxpc2goUkVOREVSX1BST0pFQ1QsIGFjdGl2ZVByb2plY3QpO1xuXG4gIC8qXG4gIHJldHVybiB7XG4gICAgcHJvamVjdExpc3QsIC8vIGZvciB0ZXN0aW5nIHB1cnBvc2VzXG4gICAgYWN0aXZlUHJvamVjdCxcbiAgICBnZXRBY3RpdmVQcm9qZWN0LFxuICAgIHNhdmVQcm9qZWN0TGlzdCxcbiAgICBsb2FkUHJvamVjdExpc3RcbiAgfSAqL1xufSkoKTtcblxuZnVuY3Rpb24gbG9hZFRlc3RQcm9qZWN0cygpIHtcbiAgY29uc29sZS5sb2coXCJsb2FkaW5nIHRlc3QgcHJvamVjdHNcIik7XG5cbiAgY29uc3QgdGVzdFByb2oxID0gcHJvamVjdChcIlRlc3QgUHJvamVjdCAxXCIpO1xuICBjb25zdCB0ZXN0UHJvajIgPSBwcm9qZWN0KFwiVGVzdCBQcm9qZWN0IDJcIik7XG4gIFB1YlN1Yi5wdWJsaXNoKENSRUFURV9QUk9KRUNULCB0ZXN0UHJvajEpO1xuICBQdWJTdWIucHVibGlzaChDUkVBVEVfUFJPSkVDVCwgdGVzdFByb2oyKTtcblxuICBjb25zdCB0ZXN0VG9kbyA9IHRvZG8oXG4gICAgXCJTaW1vbmEncyBiaXJ0aGRheVwiLFxuICAgIFwiR2V0IGhlciBhIHByZXNlbnQhIDopXCIsXG4gICAgXCJKYW51YXJ5IDI0XCIsXG4gICAgXCJoaWdoXCJcbiAgKTtcbiAgY29uc3QgdGVzdFRvZG8xID0gdG9kbyhcbiAgICBcIlNvY2lhbGl6ZVwiLFxuICAgIFwiR2V0IGluIHRvdWNoIHdpdGggZnJpZW5kc1wiLFxuICAgIFwidGhpcyB3ZWVrXCIsXG4gICAgXCJtZWRpdW1cIlxuICApO1xuICBjb25zdCB0ZXN0VG9kbzIgPSB0b2RvKFwiU3luZXJnaXplXCIsIFwiTmV0d29ya1wiLCBcIkFTQVBcIiwgXCJjcml0aWNhbFwiKTtcblxuICBQdWJTdWIucHVibGlzaChDUkVBVEVfVE9ETywgdGVzdFRvZG8pO1xuICBQdWJTdWIucHVibGlzaChDUkVBVEVfVE9ETywgdGVzdFRvZG8xKTtcbiAgUHViU3ViLnB1Ymxpc2goQ1JFQVRFX1RPRE8sIHRlc3RUb2RvMik7XG59XG4iLCIvLyBNYWtlIGEgcHJvamVjdCBvYmplY3RcblxuY29uc3QgcHJvamVjdCA9IGZ1bmN0aW9uIHByb2plY3QodGl0bGUsIHRvZG9MaXN0SW4pIHtcbiAgY29uc3QgdG9kb0xpc3QgPSB0b2RvTGlzdEluIHx8IFtdO1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIHRvZG9MaXN0XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0O1xuIiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuIiwiY29uc3QgdG9kbyA9IGZ1bmN0aW9uIHRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHlcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG87XG4iXSwic291cmNlUm9vdCI6IiJ9