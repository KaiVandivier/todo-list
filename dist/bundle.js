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



var Display = function () {
  var root = document.getElementById("root");
  var submitProjectFormMethod = null;
  var submitTodoFormMethod = null;
  var previousActiveElement = null; // Project List Div (container)

  var projectListDiv = document.createElement("div");
  projectListDiv.id = "project-list-div";
  root.appendChild(projectListDiv); // Project List Header

  var projectListHeader = document.createElement("div");
  projectListHeader.id = "project-list-header-div";
  projectListDiv.appendChild(projectListHeader); // Header: title

  var projectListTitle = document.createElement("h2");
  projectListTitle.textContent = "Project List";
  projectListHeader.appendChild(projectListTitle); // New Project Button

  var newProjectButton = document.createElement("button");
  newProjectButton.textContent = "New Project";
  newProjectButton.addEventListener("click", function () {
    displayProjectDialog(_event_types__WEBPACK_IMPORTED_MODULE_1__["CREATE_PROJECT"], {});
  });
  projectListHeader.appendChild(newProjectButton); // Project List Ul (to be populated by "render ... " below)

  var projectListUl = document.createElement("ul");
  projectListUl.id = "project-list-ul";
  projectListDiv.appendChild(projectListUl); // Project Div (container)

  var projectDiv = document.createElement("div");
  root.appendChild(projectDiv);
  projectDiv.id = "project-div";

  var renderProjectList = function renderProjectList(msg, projectList) {
    console.log(msg); // clear project list

    while (projectListUl.firstChild) {
      projectListUl.removeChild(projectListUl.firstChild);
    } // ... to write a new one


    projectList.forEach(function (project, index) {
      var projectLi = document.createElement("li");
      projectLi.textContent = project.title;
      projectLi.setAttribute("data-index", index);
      projectListUl.appendChild(projectLi);
      projectLi.addEventListener("click", function (e) {
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_1__["SWITCH_PROJECT"], e.target.getAttribute("data-index"));
      });
    });
  };

  var renderProject = function renderProject(msg, project) {
    console.log(msg); // clear project div ...

    while (projectDiv.firstChild) {
      projectDiv.removeChild(projectDiv.firstChild);
    } // ... to write a new one
    // header


    var headerDiv = document.createElement("div");
    headerDiv.id = "project-header-div";
    projectDiv.appendChild(headerDiv); // header: title

    var titleHeader = document.createElement("h3");

    try {
      // handle "no active projects"
      titleHeader.textContent = project.title;
      headerDiv.appendChild(titleHeader);
    } catch (e) {
      titleHeader.textContent = "No active projects";
      headerDiv.appendChild(titleHeader);
      return;
    } // header: buttons


    var buttonsSpan = document.createElement("span");
    buttonsSpan.id = "project-buttons";
    headerDiv.appendChild(buttonsSpan); // header buttons: "new todo" button

    var newTodoButton = document.createElement("button");
    newTodoButton.textContent = "New Todo";
    newTodoButton.addEventListener("click", function () {
      displayTodoDialog(_event_types__WEBPACK_IMPORTED_MODULE_1__["CREATE_TODO"], {});
    });
    buttonsSpan.appendChild(newTodoButton); // header buttons: "edit project" button

    var editProjectButton = document.createElement("button");
    editProjectButton.textContent = "Edit Project";
    editProjectButton.addEventListener("click", function () {
      console.log("editing project");
      displayProjectDialog(_event_types__WEBPACK_IMPORTED_MODULE_1__["EDIT_PROJECT"], {
        project: project
      });
    });
    buttonsSpan.appendChild(editProjectButton); // header buttons: "delete project" button

    var deleteProjectButton = document.createElement("button");
    deleteProjectButton.textContent = "Delete Project";
    deleteProjectButton.addEventListener("click", function () {
      pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_1__["DELETE_PROJECT"], project);
    });
    buttonsSpan.appendChild(deleteProjectButton); // line break TODO: replace with padding/margin?

    projectDiv.appendChild(document.createElement("br"));
    projectDiv.appendChild(document.createElement("br")); // create a table to organize todos

    var todoTable = document.createElement("table");
    projectDiv.appendChild(todoTable);
    var todoHead = document.createElement("thead");
    todoTable.appendChild(todoHead);
    var titles = ["Done", "Priority", "Title", "Due Date", "Edit", "Delete"];
    titles.forEach(function (title) {
      var th = document.createElement("th");
      th.scope = "col";
      th.textContent = title;
      todoHead.appendChild(th);
    }); // create a table body to populate with todos

    var todoBody = document.createElement("tbody");
    todoTable.appendChild(todoBody);
    project.todoList.forEach(function (todo, index) {
      renderTodo(todoBody, todo, index);
    });
  };

  var renderTodo = function renderTodo(
  /* todoUl, */
  todoBody, todo, index) {
    var todoRow = document.createElement("tr");
    todoBody.appendChild(todoRow); // 'Mark complete' button

    var buttonCell = document.createElement("td");
    todoRow.appendChild(buttonCell);
    var completeButton = document.createElement("button");
    completeButton.textContent = "Done";
    buttonCell.appendChild(completeButton);
    completeButton.addEventListener("click", toggleTodoComplete);

    function toggleTodoComplete(e) {
      var todoSpan = e.target.parentElement.querySelector("span");
      todoSpan.classList.toggle("complete");
    } // priority indicator


    var priorityCell = document.createElement("td");
    todoRow.appendChild(priorityCell);
    var priorityText = document.createElement("span");
    priorityText.textContent = todo.priority;
    priorityCell.appendChild(priorityText); // Todo title

    var titleCell = document.createElement("td");
    todoRow.appendChild(titleCell);
    var textSpan = document.createElement("span");
    textSpan.textContent = todo.title;
    titleCell.appendChild(textSpan); // due date

    var dueDateCell = document.createElement("td");
    todoRow.appendChild(dueDateCell);
    dueDateCell.textContent = todo.dueDate; // draw edit button (todo: pencil icon)

    var editCell = document.createElement("td");
    todoRow.appendChild(editCell);
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editCell.appendChild(editButton);
    editButton.addEventListener("click", function () {
      console.log("beep! editing todo.");
      displayTodoDialog(_event_types__WEBPACK_IMPORTED_MODULE_1__["EDIT_TODO"], {
        todo: todo,
        index: index
      });
    }); // draw delete button (trash icon)

    var deleteCell = document.createElement("td");
    todoRow.appendChild(deleteCell);
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteCell.appendChild(deleteButton);
    deleteButton.addEventListener("click", function () {
      pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_1__["DELETE_TODO"], {
        index: index
      });
    });
  }; // Project Dialog setup:


  function displayProjectDialog(method, data) {
    // selector setup
    var dialog = document.getElementById("project-form-container");
    var dialogMask = dialog.querySelector("div.dialog-mask");
    var form = dialog.querySelector("form#project-form"); // Save active element

    previousActiveElement = document.activeElement; // Show the dialog

    dialog.classList.add("opened"); // Populate fields appropriately for "new" or "edit"

    if (method === _event_types__WEBPACK_IMPORTED_MODULE_1__["CREATE_PROJECT"]) {
      form.elements.title.value = "New Project";
    } else if (method === _event_types__WEBPACK_IMPORTED_MODULE_1__["EDIT_PROJECT"]) {
      form.elements.title.value = data.project.title;
    } // Listen for form completion


    submitProjectFormMethod = submitProjectForm.bind({
      method: method,
      data: data
    });
    form.addEventListener("submit", submitProjectFormMethod); // Add listeners to close window

    dialogMask.addEventListener("click", closeProjectDialog);
    window.addEventListener("keydown", checkCloseProjectDialog);
    dialog.querySelector("button.close").addEventListener("click", closeProjectDialog); // Focus the dialog

    dialog.querySelector("input").focus();
  }

  function submitProjectForm(e) {
    console.log("form submitted!"); // handles either "edit" or "new"

    var newData = Object.assign(this.data, {
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
    var dialog = document.getElementById("project-form-container");
    var dialogMask = dialog.querySelector("div.dialog-mask");
    var form = document.getElementById("project-form"); // Remove event listeners

    dialogMask.removeEventListener("click", closeProjectDialog);
    window.removeEventListener("keydown", checkCloseProjectDialog);
    dialog.querySelector("button.close").removeEventListener("click", closeProjectDialog);
    form.removeEventListener("submit", submitProjectFormMethod);
    dialog.classList.remove("opened"); // Return focus outside of the modal

    previousActiveElement.focus();
  } // Todo Dialog setup:


  function displayTodoDialog(method, data) {
    // selector setup
    var dialog = document.getElementById("todo-form-container");
    var dialogMask = dialog.querySelector("div.dialog-mask");
    var form = dialog.querySelector("form#todo-form"); // Save active element

    previousActiveElement = document.activeElement; // Show the dialog

    dialog.classList.add("opened"); // Populate fields appropriately for "new" or "edit"

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
    } // Listen for form completion


    submitTodoFormMethod = submitTodoForm.bind({
      method: method,
      data: data
    });
    form.addEventListener("submit", submitTodoFormMethod); // Add listeners to close window

    dialogMask.addEventListener("click", closeTodoDialog);
    window.addEventListener("keydown", checkCloseTodoDialog);
    dialog.querySelector("button.close").addEventListener("click", closeTodoDialog);
    dialog.querySelector("input").focus();
  }

  function submitTodoForm(e) {
    console.log("form submitted!");
    var elements = e.target.elements;
    var properties = ["title", "description", "priority", "dueDate"];
    var info = {};
    properties.forEach(function (p) {
      return info[p] = elements[p].value;
    });
    var newData = Object.assign(this.data, info);
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publish(this.method, newData);
    e.preventDefault(); // stay on same page

    closeTodoDialog();
  }

  function checkCloseTodoDialog(e) {
    if (e.keyCode === 27) closeTodoDialog();
  }

  function closeTodoDialog() {
    // selector setup
    var dialog = document.getElementById("todo-form-container");
    var dialogMask = dialog.querySelector("div.dialog-mask");
    var form = dialog.querySelector("form#todo-form"); // Remove event listeners

    dialogMask.removeEventListener("click", closeTodoDialog);
    window.removeEventListener("keydown", checkCloseTodoDialog);
    dialog.querySelector("button.close").removeEventListener("click", closeTodoDialog);
    form.removeEventListener("submit", submitTodoFormMethod);
    dialog.classList.remove("opened"); // Return focus outside of the modal

    previousActiveElement.focus();
  }

  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.subscribe(_event_types__WEBPACK_IMPORTED_MODULE_1__["RENDER_PROJECT_LIST"], renderProjectList);
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.subscribe(_event_types__WEBPACK_IMPORTED_MODULE_1__["RENDER_PROJECT"], renderProject);
}();

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
var PRINT_LIST = "print list";
var GET_ACTION = "get action";
var CREATE_TODO = "create todo";
var EDIT_TODO = "edit todo";
var DELETE_TODO = "delete todo";
var CREATE_PROJECT = "create project";
var EDIT_PROJECT = "edit project";
var DELETE_PROJECT = "delete project";
var SET_UP_PAGE = "set up page";
var RENDER_PROJECT_LIST = "render project list";
var RENDER_PROJECT = "render project";
var SWITCH_PROJECT = "switch project";


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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }








var Application = function () {
  /* Storage logic */
  var saveProjectList = function saveProjectList() {
    localStorage.setItem("projectList", JSON.stringify(projectList));
  };

  var loadProjectList = function loadProjectList() {
    var storedString = localStorage.getItem("projectList");
    var storedList = JSON.parse(storedString);
    var newList = storedList.map(function (p) {
      var newTodoList = p.todoList.map(function (t) {
        return Object(_todo__WEBPACK_IMPORTED_MODULE_3__["default"])(t.title, t.description, t.dueDate, t.priority);
      });
      var newProject = Object(_project__WEBPACK_IMPORTED_MODULE_4__["default"])(p.title, newTodoList);
      return newProject;
    });
    return newList;
  };
  /* ... end storage logic */

  /* Todo logic --  */


  var createTodo = function createTodo(msg, _ref) {
    var title = _ref.title,
        description = _ref.description,
        dueDate = _ref.dueDate,
        priority = _ref.priority;
    // working
    console.log(msg);
    var newTodo = Object(_todo__WEBPACK_IMPORTED_MODULE_3__["default"])(title, description, dueDate, priority);
    activeProject.todoList.push(newTodo);
    pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_2__["RENDER_PROJECT"], activeProject);
    saveProjectList();
  };

  var editTodo = function editTodo(msg, _ref2) {
    var index = _ref2.index,
        title = _ref2.title,
        description = _ref2.description,
        dueDate = _ref2.dueDate,
        priority = _ref2.priority;
    console.log(msg);
    var newTodo = Object(_todo__WEBPACK_IMPORTED_MODULE_3__["default"])(title, description, dueDate, priority);
    activeProject.todoList.splice(index, 1, newTodo);
    pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_2__["RENDER_PROJECT"], activeProject);
    saveProjectList();
  };

  var deleteTodo = function deleteTodo(msg, _ref3) {
    var index = _ref3.index;
    console.log(msg);
    activeProject.todoList.splice(index, 1);
    pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_2__["RENDER_PROJECT"], activeProject);
    saveProjectList();
  };
  /* End Todo logic */

  /* Project Logic */


  var createProject = function createProject(msg, _ref4) {
    var title = _ref4.title;
    console.log(msg);
    var newProject = Object(_project__WEBPACK_IMPORTED_MODULE_4__["default"])(title);
    projectList.push(newProject);
    switchProject(_event_types__WEBPACK_IMPORTED_MODULE_2__["SWITCH_PROJECT"], projectList.length - 1);
    pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_2__["RENDER_PROJECT_LIST"], projectList);
    saveProjectList();
  };

  var editProject = function editProject(msg, _ref5) {
    var title = _ref5.title;
    console.log(msg);
    activeProject.title = title;
    pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_2__["RENDER_PROJECT_LIST"], projectList);
    pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_2__["RENDER_PROJECT"], activeProject);
    saveProjectList();
  };

  var deleteProject = function deleteProject(msg, targetProject) {
    console.log(msg);
    if (targetProject === activeProject) pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_2__["SWITCH_PROJECT"], 0);
    var index = projectList.findIndex(function (proj) {
      return proj === _project__WEBPACK_IMPORTED_MODULE_4__["default"];
    });
    projectList.splice(index, 1);
    pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_2__["RENDER_PROJECT_LIST"], projectList);
    saveProjectList();
  };

  var switchProject = function switchProject(msg, index) {
    console.log(msg);
    activeProject = projectList[index];
    pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_2__["RENDER_PROJECT"], activeProject);
  };
  /* End Project Logic */
  // Subscriptions


  var token0 = pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.subscribe(_event_types__WEBPACK_IMPORTED_MODULE_2__["CREATE_TODO"], createTodo);
  var token1 = pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.subscribe(_event_types__WEBPACK_IMPORTED_MODULE_2__["EDIT_TODO"], editTodo);
  var token2 = pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.subscribe(_event_types__WEBPACK_IMPORTED_MODULE_2__["DELETE_TODO"], deleteTodo);
  var token3 = pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.subscribe(_event_types__WEBPACK_IMPORTED_MODULE_2__["CREATE_PROJECT"], createProject);
  var token4 = pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.subscribe(_event_types__WEBPACK_IMPORTED_MODULE_2__["EDIT_PROJECT"], editProject);
  var token5 = pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.subscribe(_event_types__WEBPACK_IMPORTED_MODULE_2__["DELETE_PROJECT"], deleteProject);
  var token6 = pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.subscribe(_event_types__WEBPACK_IMPORTED_MODULE_2__["SWITCH_PROJECT"], switchProject); // get project list from storage

  var projectList = [];

  if (localStorage.getItem("projectList")) {
    projectList.push.apply(projectList, _toConsumableArray(loadProjectList()));
  } // choose active project


  var activeProject = projectList[0] || null; // const getActiveProject = () => { return activeProject }; // for unit tests
  // optionally load sample projects

  if (projectList.length === 0 && confirm("Load sample projects?")) {
    loadTestProjects();
  } // display lists


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
}();

function loadTestProjects() {
  console.log("loading test projects");
  var testProj1 = Object(_project__WEBPACK_IMPORTED_MODULE_4__["default"])("Test Project 1");
  var testProj2 = Object(_project__WEBPACK_IMPORTED_MODULE_4__["default"])("Test Project 2");
  pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_2__["CREATE_PROJECT"], testProj1);
  pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.publish(_event_types__WEBPACK_IMPORTED_MODULE_2__["CREATE_PROJECT"], testProj2);
  var testTodo = Object(_todo__WEBPACK_IMPORTED_MODULE_3__["default"])("Simona's birthday", "Get her a present! :)", "January 24", "high");
  var testTodo1 = Object(_todo__WEBPACK_IMPORTED_MODULE_3__["default"])("Socialize", "Get in touch with friends", "this week", "medium");
  var testTodo2 = Object(_todo__WEBPACK_IMPORTED_MODULE_3__["default"])("Synergize", "Network", "ASAP", "critical");
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
var project = function project(title, todoListIn) {
  var todoList = todoListIn || [];
  return {
    title: title,
    todoList: todoList
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
var todo = function todo(title, description, dueDate, priority) {
  return {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority
  };
};

/* harmony default export */ __webpack_exports__["default"] = (todo);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHVic3ViLWpzL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudC10eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3M/ODMwMSIsIndlYnBhY2s6Ly8vLi9zcmMvdG9kby5qcyJdLCJuYW1lcyI6WyJEaXNwbGF5Iiwicm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdWJtaXRQcm9qZWN0Rm9ybU1ldGhvZCIsInN1Ym1pdFRvZG9Gb3JtTWV0aG9kIiwicHJldmlvdXNBY3RpdmVFbGVtZW50IiwicHJvamVjdExpc3REaXYiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJhcHBlbmRDaGlsZCIsInByb2plY3RMaXN0SGVhZGVyIiwicHJvamVjdExpc3RUaXRsZSIsInRleHRDb250ZW50IiwibmV3UHJvamVjdEJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXNwbGF5UHJvamVjdERpYWxvZyIsIkNSRUFURV9QUk9KRUNUIiwicHJvamVjdExpc3RVbCIsInByb2plY3REaXYiLCJyZW5kZXJQcm9qZWN0TGlzdCIsIm1zZyIsInByb2plY3RMaXN0IiwiY29uc29sZSIsImxvZyIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImZvckVhY2giLCJwcm9qZWN0IiwiaW5kZXgiLCJwcm9qZWN0TGkiLCJ0aXRsZSIsInNldEF0dHJpYnV0ZSIsImUiLCJQdWJTdWIiLCJwdWJsaXNoIiwiU1dJVENIX1BST0pFQ1QiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJyZW5kZXJQcm9qZWN0IiwiaGVhZGVyRGl2IiwidGl0bGVIZWFkZXIiLCJidXR0b25zU3BhbiIsIm5ld1RvZG9CdXR0b24iLCJkaXNwbGF5VG9kb0RpYWxvZyIsIkNSRUFURV9UT0RPIiwiZWRpdFByb2plY3RCdXR0b24iLCJFRElUX1BST0pFQ1QiLCJkZWxldGVQcm9qZWN0QnV0dG9uIiwiREVMRVRFX1BST0pFQ1QiLCJ0b2RvVGFibGUiLCJ0b2RvSGVhZCIsInRpdGxlcyIsInRoIiwic2NvcGUiLCJ0b2RvQm9keSIsInRvZG9MaXN0IiwidG9kbyIsInJlbmRlclRvZG8iLCJ0b2RvUm93IiwiYnV0dG9uQ2VsbCIsImNvbXBsZXRlQnV0dG9uIiwidG9nZ2xlVG9kb0NvbXBsZXRlIiwidG9kb1NwYW4iLCJwYXJlbnRFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInByaW9yaXR5Q2VsbCIsInByaW9yaXR5VGV4dCIsInByaW9yaXR5IiwidGl0bGVDZWxsIiwidGV4dFNwYW4iLCJkdWVEYXRlQ2VsbCIsImR1ZURhdGUiLCJlZGl0Q2VsbCIsImVkaXRCdXR0b24iLCJFRElUX1RPRE8iLCJkZWxldGVDZWxsIiwiZGVsZXRlQnV0dG9uIiwiREVMRVRFX1RPRE8iLCJtZXRob2QiLCJkYXRhIiwiZGlhbG9nIiwiZGlhbG9nTWFzayIsImZvcm0iLCJhY3RpdmVFbGVtZW50IiwiYWRkIiwiZWxlbWVudHMiLCJ2YWx1ZSIsInN1Ym1pdFByb2plY3RGb3JtIiwiYmluZCIsImNsb3NlUHJvamVjdERpYWxvZyIsIndpbmRvdyIsImNoZWNrQ2xvc2VQcm9qZWN0RGlhbG9nIiwiZm9jdXMiLCJuZXdEYXRhIiwiT2JqZWN0IiwiYXNzaWduIiwicHJldmVudERlZmF1bHQiLCJrZXlDb2RlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsImRlc2NyaXB0aW9uIiwic3VibWl0VG9kb0Zvcm0iLCJjbG9zZVRvZG9EaWFsb2ciLCJjaGVja0Nsb3NlVG9kb0RpYWxvZyIsInByb3BlcnRpZXMiLCJpbmZvIiwicCIsInN1YnNjcmliZSIsIlJFTkRFUl9QUk9KRUNUX0xJU1QiLCJSRU5ERVJfUFJPSkVDVCIsIlBSSU5UX0xJU1QiLCJHRVRfQUNUSU9OIiwiU0VUX1VQX1BBR0UiLCJBcHBsaWNhdGlvbiIsInNhdmVQcm9qZWN0TGlzdCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwibG9hZFByb2plY3RMaXN0Iiwic3RvcmVkU3RyaW5nIiwiZ2V0SXRlbSIsInN0b3JlZExpc3QiLCJwYXJzZSIsIm5ld0xpc3QiLCJtYXAiLCJuZXdUb2RvTGlzdCIsInQiLCJuZXdQcm9qZWN0IiwiY3JlYXRlVG9kbyIsIm5ld1RvZG8iLCJhY3RpdmVQcm9qZWN0IiwicHVzaCIsImVkaXRUb2RvIiwic3BsaWNlIiwiZGVsZXRlVG9kbyIsImNyZWF0ZVByb2plY3QiLCJzd2l0Y2hQcm9qZWN0IiwibGVuZ3RoIiwiZWRpdFByb2plY3QiLCJkZWxldGVQcm9qZWN0IiwidGFyZ2V0UHJvamVjdCIsImZpbmRJbmRleCIsInByb2oiLCJ0b2tlbjAiLCJ0b2tlbjEiLCJ0b2tlbjIiLCJ0b2tlbjMiLCJ0b2tlbjQiLCJ0b2tlbjUiLCJ0b2tlbjYiLCJjb25maXJtIiwibG9hZFRlc3RQcm9qZWN0cyIsInRlc3RQcm9qMSIsInRlc3RQcm9qMiIsInRlc3RUb2RvIiwidGVzdFRvZG8xIiwidGVzdFRvZG8yIiwidG9kb0xpc3RJbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztR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O0FDZkE7QUFBQSxJQUFNNkIsSUFBSSxHQUFHLFNBQVNBLElBQVQsQ0FBYzFCLEtBQWQsRUFBcUJ3RSxXQUFyQixFQUFrQzdCLE9BQWxDLEVBQTJDSixRQUEzQyxFQUFxRDtBQUNoRSxTQUFPO0FBQ0x2QyxTQUFLLEVBQUxBLEtBREs7QUFFTHdFLGVBQVcsRUFBWEEsV0FGSztBQUdMN0IsV0FBTyxFQUFQQSxPQUhLO0FBSUxKLFlBQVEsRUFBUkE7QUFKSyxHQUFQO0FBTUQsQ0FQRDs7QUFTZWIsbUVBQWYsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogR2xvYmFsIFN0eWxlcyAqL1xcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLyogRGlhbG9nIHN0eWxlcyAqL1xcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmRpYWxvZy5vcGVuZWQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5kaWFsb2ctd2luZG93IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxuICB6LWluZGV4OiAxMDE7XFxuICBwYWRkaW5nOiAxLjVlbTtcXG59XFxuXFxuLmRpYWxvZy1tYXNrIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB6LWluZGV4OiAxMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xcbn1cXG5cXG5cXG4vKiBQcm9qZWN0IGxpc3Qgc3R5bGVzICovXFxuI3Byb2plY3QtbGlzdC1oZWFkZXItZGl2IHtcXG4gIHBhZGRpbmc6IDFlbSAuMmVtIDJlbTtcXG59XFxuXFxuI3Byb2plY3QtbGlzdC1oZWFkZXItZGl2IGgyIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdC1saXN0LWhlYWRlci1kaXYgYnV0dG9uIHtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuXFxuI3Byb2plY3QtbGlzdC11bCBsaSB7XFxuICBwYWRkaW5nOiAuM2VtIC4yZW07XFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG4jcHJvamVjdC1saXN0LXVsIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTsgIFxcbn1cXG5cXG5cXG4vKiBQcm9qZWN0IGFuZCBUb2RvIGxpc3Qgc3R5bGVzICovXFxuI3Byb2plY3QtaGVhZGVyLWRpdiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDFlbSAuMmVtIDBlbTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI3Byb2plY3QtaGVhZGVyLWRpdiBoMyB7XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuI3Byb2plY3QtYnV0dG9ucyB7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbnNwYW4uY29tcGxldGUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi8qIFRhYmxlIHN0eWxlcyAqL1xcbnRhYmxlIHtcXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbnRoZWFkIHRoOm50aC1jaGlsZCgxKSB7XFxuICB3aWR0aDogMTAlO1xcbn1cXG5cXG50aGVhZCB0aDpudGgtY2hpbGQoMikge1xcbiAgd2lkdGg6IDEwJTtcXG59XFxuXFxudGhlYWQgdGg6bnRoLWNoaWxkKDMpIHtcXG4gIHdpZHRoOiAzMCU7XFxufVxcblxcbnRoZWFkIHRoOm50aC1jaGlsZCg0KSB7XFxuICB3aWR0aDogMTUlO1xcbn1cXG5cXG50aGVhZCB0aDpudGgtY2hpbGQoNSkge1xcbiAgd2lkdGg6IDEwJTtcXG59IFxcblxcbnRoZWFkIHRoOm50aC1jaGlsZCg2KSB7XFxuICB3aWR0aDogMTAlO1xcbn1cXG5cXG50aGVhZCB0aCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBjNmZmO1xcbn1cXG5cXG50Ym9keSB0cjpudGgtY2hpbGQob2RkKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmOWZmO1xcbn1cXG5cXG50Ym9keSB0cjpudGgtY2hpbGQoZXZlbikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZWJmZjtcXG59XFxuXFxudGgsIHRkIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cIiwgXCJcIl0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMCwyMDExLDIwMTIsMjAxMywyMDE0IE1vcmdhbiBSb2RlcmljayBodHRwOi8vcm9kZXJpY2suZGtcbiAqIExpY2Vuc2U6IE1JVCAtIGh0dHA6Ly9tcmducmRyY2subWl0LWxpY2Vuc2Uub3JnXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL21yb2Rlcmljay9QdWJTdWJKU1xuICovXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSl7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIFB1YlN1YiA9IHt9O1xuICAgIHJvb3QuUHViU3ViID0gUHViU3ViO1xuXG4gICAgdmFyIGRlZmluZSA9IHJvb3QuZGVmaW5lO1xuXG4gICAgZmFjdG9yeShQdWJTdWIpO1xuXG4gICAgLy8gQU1EIHN1cHBvcnRcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKXtcbiAgICAgICAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gUHViU3ViOyB9KTtcblxuICAgICAgICAvLyBDb21tb25KUyBhbmQgTm9kZS5qcyBtb2R1bGUgc3VwcG9ydFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKXtcbiAgICAgICAgaWYgKG1vZHVsZSAhPT0gdW5kZWZpbmVkICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBQdWJTdWI7IC8vIE5vZGUuanMgc3BlY2lmaWMgYG1vZHVsZS5leHBvcnRzYFxuICAgICAgICB9XG4gICAgICAgIGV4cG9ydHMuUHViU3ViID0gUHViU3ViOyAvLyBDb21tb25KUyBtb2R1bGUgMS4xLjEgc3BlY1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBQdWJTdWI7IC8vIENvbW1vbkpTXG4gICAgfVxuXG59KCggdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93ICkgfHwgdGhpcywgZnVuY3Rpb24gKFB1YlN1Yil7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIG1lc3NhZ2VzID0ge30sXG4gICAgICAgIGxhc3RVaWQgPSAtMTtcblxuICAgIGZ1bmN0aW9uIGhhc0tleXMob2JqKXtcbiAgICAgICAgdmFyIGtleTtcblxuICAgICAgICBmb3IgKGtleSBpbiBvYmope1xuICAgICAgICAgICAgaWYgKCBvYmouaGFzT3duUHJvcGVydHkoa2V5KSApe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB0aHJvd3MgdGhlIHBhc3NlZCBleGNlcHRpb24sIGZvciB1c2UgYXMgYXJndW1lbnQgZm9yIHNldFRpbWVvdXRcbiAgICAgKiBAYWxpYXMgdGhyb3dFeGNlcHRpb25cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSBleCBBbiBFcnJvciBvYmplY3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0aHJvd0V4Y2VwdGlvbiggZXggKXtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlVGhyb3dFeGNlcHRpb24oKXtcbiAgICAgICAgICAgIHRocm93IGV4O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGxTdWJzY3JpYmVyV2l0aERlbGF5ZWRFeGNlcHRpb25zKCBzdWJzY3JpYmVyLCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyKCBtZXNzYWdlLCBkYXRhICk7XG4gICAgICAgIH0gY2F0Y2goIGV4ICl7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCB0aHJvd0V4Y2VwdGlvbiggZXggKSwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxsU3Vic2NyaWJlcldpdGhJbW1lZGlhdGVFeGNlcHRpb25zKCBzdWJzY3JpYmVyLCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHN1YnNjcmliZXIoIG1lc3NhZ2UsIGRhdGEgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxpdmVyTWVzc2FnZSggb3JpZ2luYWxNZXNzYWdlLCBtYXRjaGVkTWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICB2YXIgc3Vic2NyaWJlcnMgPSBtZXNzYWdlc1ttYXRjaGVkTWVzc2FnZV0sXG4gICAgICAgICAgICBjYWxsU3Vic2NyaWJlciA9IGltbWVkaWF0ZUV4Y2VwdGlvbnMgPyBjYWxsU3Vic2NyaWJlcldpdGhJbW1lZGlhdGVFeGNlcHRpb25zIDogY2FsbFN1YnNjcmliZXJXaXRoRGVsYXllZEV4Y2VwdGlvbnMsXG4gICAgICAgICAgICBzO1xuXG4gICAgICAgIGlmICggIW1lc3NhZ2VzLmhhc093blByb3BlcnR5KCBtYXRjaGVkTWVzc2FnZSApICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChzIGluIHN1YnNjcmliZXJzKXtcbiAgICAgICAgICAgIGlmICggc3Vic2NyaWJlcnMuaGFzT3duUHJvcGVydHkocykpe1xuICAgICAgICAgICAgICAgIGNhbGxTdWJzY3JpYmVyKCBzdWJzY3JpYmVyc1tzXSwgb3JpZ2luYWxNZXNzYWdlLCBkYXRhICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBkZWxpdmVyTmFtZXNwYWNlZCgpe1xuICAgICAgICAgICAgdmFyIHRvcGljID0gU3RyaW5nKCBtZXNzYWdlICksXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG5cbiAgICAgICAgICAgIC8vIGRlbGl2ZXIgdGhlIG1lc3NhZ2UgYXMgaXQgaXMgbm93XG4gICAgICAgICAgICBkZWxpdmVyTWVzc2FnZShtZXNzYWdlLCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zKTtcblxuICAgICAgICAgICAgLy8gdHJpbSB0aGUgaGllcmFyY2h5IGFuZCBkZWxpdmVyIG1lc3NhZ2UgdG8gZWFjaCBsZXZlbFxuICAgICAgICAgICAgd2hpbGUoIHBvc2l0aW9uICE9PSAtMSApe1xuICAgICAgICAgICAgICAgIHRvcGljID0gdG9waWMuc3Vic3RyKCAwLCBwb3NpdGlvbiApO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoJy4nKTtcbiAgICAgICAgICAgICAgICBkZWxpdmVyTWVzc2FnZSggbWVzc2FnZSwgdG9waWMsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtZXNzYWdlSGFzU3Vic2NyaWJlcnMoIG1lc3NhZ2UgKXtcbiAgICAgICAgdmFyIHRvcGljID0gU3RyaW5nKCBtZXNzYWdlICksXG4gICAgICAgICAgICBmb3VuZCA9IEJvb2xlYW4obWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIHRvcGljICkgJiYgaGFzS2V5cyhtZXNzYWdlc1t0b3BpY10pKSxcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXG4gICAgICAgIHdoaWxlICggIWZvdW5kICYmIHBvc2l0aW9uICE9PSAtMSApe1xuICAgICAgICAgICAgdG9waWMgPSB0b3BpYy5zdWJzdHIoIDAsIHBvc2l0aW9uICk7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcbiAgICAgICAgICAgIGZvdW5kID0gQm9vbGVhbihtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggdG9waWMgKSAmJiBoYXNLZXlzKG1lc3NhZ2VzW3RvcGljXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIHN5bmMsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKXtcbiAgICAgICAgbWVzc2FnZSA9ICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N5bWJvbCcpID8gbWVzc2FnZS50b1N0cmluZygpIDogbWVzc2FnZTtcblxuICAgICAgICB2YXIgZGVsaXZlciA9IGNyZWF0ZURlbGl2ZXJ5RnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKSxcbiAgICAgICAgICAgIGhhc1N1YnNjcmliZXJzID0gbWVzc2FnZUhhc1N1YnNjcmliZXJzKCBtZXNzYWdlICk7XG5cbiAgICAgICAgaWYgKCAhaGFzU3Vic2NyaWJlcnMgKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggc3luYyA9PT0gdHJ1ZSApe1xuICAgICAgICAgICAgZGVsaXZlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dCggZGVsaXZlciwgMCApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFB1Ymxpc2hlcyB0aGUgbWVzc2FnZSwgcGFzc2luZyB0aGUgZGF0YSB0byBpdCdzIHN1YnNjcmliZXJzXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0ge30gZGF0YSBUaGUgZGF0YSB0byBwYXNzIHRvIHN1YnNjcmliZXJzXG4gICAgICogQHJldHVybiB7IEJvb2xlYW4gfVxuICAgICAqL1xuICAgIFB1YlN1Yi5wdWJsaXNoID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgcmV0dXJuIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIGZhbHNlLCBQdWJTdWIuaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaXNoZXMgdGhlIHRoZSBtZXNzYWdlIHN5bmNocm9ub3VzbHksIHBhc3NpbmcgdGhlIGRhdGEgdG8gaXQncyBzdWJzY3JpYmVyc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBwdWJsaXNoU3luY1xuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gcHVibGlzaFxuICAgICAqIEBwYXJhbSB7fSBkYXRhIFRoZSBkYXRhIHRvIHBhc3MgdG8gc3Vic2NyaWJlcnNcbiAgICAgKiBAcmV0dXJuIHsgQm9vbGVhbiB9XG4gICAgICovXG4gICAgUHViU3ViLnB1Ymxpc2hTeW5jID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgcmV0dXJuIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIHRydWUsIFB1YlN1Yi5pbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZXMgdGhlIHBhc3NlZCBmdW5jdGlvbiB0byB0aGUgcGFzc2VkIG1lc3NhZ2UuIEV2ZXJ5IHJldHVybmVkIHRva2VuIGlzIHVuaXF1ZSBhbmQgc2hvdWxkIGJlIHN0b3JlZCBpZiB5b3UgbmVlZCB0byB1bnN1YnNjcmliZVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHN1YnNjcmliZSB0b1xuICAgICAqIEBwYXJhbSB7IEZ1bmN0aW9uIH0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGEgbmV3IG1lc3NhZ2UgaXMgcHVibGlzaGVkXG4gICAgICogQHJldHVybiB7IFN0cmluZyB9XG4gICAgICovXG4gICAgUHViU3ViLnN1YnNjcmliZSA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBmdW5jICl7XG4gICAgICAgIGlmICggdHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVzc2FnZSA9ICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N5bWJvbCcpID8gbWVzc2FnZS50b1N0cmluZygpIDogbWVzc2FnZTtcblxuICAgICAgICAvLyBtZXNzYWdlIGlzIG5vdCByZWdpc3RlcmVkIHlldFxuICAgICAgICBpZiAoICFtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggbWVzc2FnZSApICl7XG4gICAgICAgICAgICBtZXNzYWdlc1ttZXNzYWdlXSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yY2luZyB0b2tlbiBhcyBTdHJpbmcsIHRvIGFsbG93IGZvciBmdXR1cmUgZXhwYW5zaW9ucyB3aXRob3V0IGJyZWFraW5nIHVzYWdlXG4gICAgICAgIC8vIGFuZCBhbGxvdyBmb3IgZWFzeSB1c2UgYXMga2V5IG5hbWVzIGZvciB0aGUgJ21lc3NhZ2VzJyBvYmplY3RcbiAgICAgICAgdmFyIHRva2VuID0gJ3VpZF8nICsgU3RyaW5nKCsrbGFzdFVpZCk7XG4gICAgICAgIG1lc3NhZ2VzW21lc3NhZ2VdW3Rva2VuXSA9IGZ1bmM7XG4gICAgICAgIFxuICAgICAgICAvLyByZXR1cm4gdG9rZW4gZm9yIHVuc3Vic2NyaWJpbmdcbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRoZSBwYXNzZWQgZnVuY3Rpb24gdG8gdGhlIHBhc3NlZCBtZXNzYWdlIG9uY2VcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAYWxpYXMgc3Vic2NyaWJlT25jZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gc3Vic2NyaWJlIHRvXG4gICAgICogQHBhcmFtIHsgRnVuY3Rpb24gfSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gYSBuZXcgbWVzc2FnZSBpcyBwdWJsaXNoZWRcbiAgICAgKiBAcmV0dXJuIHsgUHViU3ViIH1cbiAgICAgKi9cbiAgICBQdWJTdWIuc3Vic2NyaWJlT25jZSA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBmdW5jICl7XG4gICAgICAgIHZhciB0b2tlbiA9IFB1YlN1Yi5zdWJzY3JpYmUoIG1lc3NhZ2UsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvLyBiZWZvcmUgZnVuYyBhcHBseSwgdW5zdWJzY3JpYmUgbWVzc2FnZVxuICAgICAgICAgICAgUHViU3ViLnVuc3Vic2NyaWJlKCB0b2tlbiApO1xuICAgICAgICAgICAgZnVuYy5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUHViU3ViO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIHN1YnNjcmlwdGlvbnNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGNsZWFyQWxsU3Vic2NyaXB0aW9uc1xuICAgICAqL1xuICAgIFB1YlN1Yi5jbGVhckFsbFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjbGVhckFsbFN1YnNjcmlwdGlvbnMoKXtcbiAgICAgICAgbWVzc2FnZXMgPSB7fTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgc3Vic2NyaXB0aW9ucyBieSB0aGUgdG9waWNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGNsZWFyQWxsU3Vic2NyaXB0aW9uc1xuICAgICAqL1xuICAgIFB1YlN1Yi5jbGVhclN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjbGVhclN1YnNjcmlwdGlvbnModG9waWMpe1xuICAgICAgICB2YXIgbTtcbiAgICAgICAgZm9yIChtIGluIG1lc3NhZ2VzKXtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eShtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwKXtcbiAgICAgICAgICAgICAgICBkZWxldGUgbWVzc2FnZXNbbV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBzdWJzY3JpcHRpb25zXG4gICAgICpcbiAgICAgKiAtIFdoZW4gcGFzc2VkIGEgdG9rZW4sIHJlbW92ZXMgYSBzcGVjaWZpYyBzdWJzY3JpcHRpb24uXG4gICAgICpcblx0ICogLSBXaGVuIHBhc3NlZCBhIGZ1bmN0aW9uLCByZW1vdmVzIGFsbCBzdWJzY3JpcHRpb25zIGZvciB0aGF0IGZ1bmN0aW9uXG4gICAgICpcblx0ICogLSBXaGVuIHBhc3NlZCBhIHRvcGljLCByZW1vdmVzIGFsbCBzdWJzY3JpcHRpb25zIGZvciB0aGF0IHRvcGljIChoaWVyYXJjaHkpXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVPbmNlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIHwgRnVuY3Rpb24gfSB2YWx1ZSBBIHRva2VuLCBmdW5jdGlvbiBvciB0b3BpYyB0byB1bnN1YnNjcmliZSBmcm9tXG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyB3aXRoIGEgdG9rZW5cbiAgICAgKiB2YXIgdG9rZW4gPSBQdWJTdWIuc3Vic2NyaWJlKCdteXRvcGljJywgbXlGdW5jKTtcbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUodG9rZW4pO1xuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgd2l0aCBhIGZ1bmN0aW9uXG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKG15RnVuYyk7XG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyBmcm9tIGEgdG9waWNcbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUoJ215dG9waWMnKTtcbiAgICAgKi9cbiAgICBQdWJTdWIudW5zdWJzY3JpYmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgIHZhciBkZXNjZW5kYW50VG9waWNFeGlzdHMgPSBmdW5jdGlvbih0b3BpYykge1xuICAgICAgICAgICAgICAgIHZhciBtO1xuICAgICAgICAgICAgICAgIGZvciAoIG0gaW4gbWVzc2FnZXMgKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eShtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhIGRlc2NlbmRhbnQgb2YgdGhlIHRvcGljIGV4aXN0czpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzVG9waWMgICAgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICggbWVzc2FnZXMuaGFzT3duUHJvcGVydHkodmFsdWUpIHx8IGRlc2NlbmRhbnRUb3BpY0V4aXN0cyh2YWx1ZSkgKSxcbiAgICAgICAgICAgIGlzVG9rZW4gICAgPSAhaXNUb3BpYyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnLFxuICAgICAgICAgICAgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyxcbiAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlLFxuICAgICAgICAgICAgbSwgbWVzc2FnZSwgdDtcblxuICAgICAgICBpZiAoaXNUb3BpYyl7XG4gICAgICAgICAgICBQdWJTdWIuY2xlYXJTdWJzY3JpcHRpb25zKHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoIG0gaW4gbWVzc2FnZXMgKXtcbiAgICAgICAgICAgIGlmICggbWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIG0gKSApe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlc1ttXTtcblxuICAgICAgICAgICAgICAgIGlmICggaXNUb2tlbiAmJiBtZXNzYWdlW3ZhbHVlXSApe1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVzc2FnZVt2YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAvLyB0b2tlbnMgYXJlIHVuaXF1ZSwgc28gd2UgY2FuIGp1c3Qgc3RvcCBoZXJlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoIHQgaW4gbWVzc2FnZSApe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuaGFzT3duUHJvcGVydHkodCkgJiYgbWVzc2FnZVt0XSA9PT0gdmFsdWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlW3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59KSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucykge1xuICB2YXIgc3R5bGVzID0gW107XG4gIHZhciBuZXdTdHlsZXMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNzcyA9IGl0ZW1bMV07XG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXTtcbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXTtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9O1xuXG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHBhcnRzOiBbcGFydF1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG4gICAgdmFyIGogPSAwO1xuXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKys7XG5cbiAgICAgIGZvciAoOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW107XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7XG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICByZWZzOiAxLFxuICAgICAgICBwYXJ0czogcGFydHNcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMob3B0aW9ucy5hdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRpb25zLmF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5hdHRyaWJ1dGVzID0gdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmF0dHJpYnV0ZXMgOiB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuICAgICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICAgIGRvbVN0eWxlLnJlZnMtLTtcbiAgICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICB2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgICAgYWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbWF5UmVtb3ZlLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9kb21TdHlsZSA9IG1heVJlbW92ZVtfaV07XG5cbiAgICAgIGlmIChfZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IF9kb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIF9kb21TdHlsZS5wYXJ0c1tqXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW19kb21TdHlsZS5pZF07XG4gICAgICB9XG4gICAgfVxuICB9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgUHViU3ViIGZyb20gXCJwdWJzdWItanNcIjtcbmltcG9ydCB7XG4gIENSRUFURV9UT0RPLFxuICBFRElUX1RPRE8sXG4gIERFTEVURV9UT0RPLFxuICBDUkVBVEVfUFJPSkVDVCxcbiAgRURJVF9QUk9KRUNULFxuICBERUxFVEVfUFJPSkVDVCxcbiAgUkVOREVSX1BST0pFQ1RfTElTVCxcbiAgUkVOREVSX1BST0pFQ1QsXG4gIFNXSVRDSF9QUk9KRUNUXG59IGZyb20gXCIuL2V2ZW50LXR5cGVzXCI7XG5cbmNvbnN0IERpc3BsYXkgPSAoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG4gIGxldCBzdWJtaXRQcm9qZWN0Rm9ybU1ldGhvZCA9IG51bGw7XG4gIGxldCBzdWJtaXRUb2RvRm9ybU1ldGhvZCA9IG51bGw7XG4gIGxldCBwcmV2aW91c0FjdGl2ZUVsZW1lbnQgPSBudWxsO1xuXG4gIC8vIFByb2plY3QgTGlzdCBEaXYgKGNvbnRhaW5lcilcbiAgY29uc3QgcHJvamVjdExpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0TGlzdERpdi5pZCA9IFwicHJvamVjdC1saXN0LWRpdlwiO1xuICByb290LmFwcGVuZENoaWxkKHByb2plY3RMaXN0RGl2KTtcbiAgLy8gUHJvamVjdCBMaXN0IEhlYWRlclxuICBjb25zdCBwcm9qZWN0TGlzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RMaXN0SGVhZGVyLmlkID0gXCJwcm9qZWN0LWxpc3QtaGVhZGVyLWRpdlwiO1xuICBwcm9qZWN0TGlzdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdEhlYWRlcik7XG4gIC8vIEhlYWRlcjogdGl0bGVcbiAgY29uc3QgcHJvamVjdExpc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgcHJvamVjdExpc3RUaXRsZS50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBMaXN0XCI7XG4gIHByb2plY3RMaXN0SGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3RMaXN0VGl0bGUpO1xuICAvLyBOZXcgUHJvamVjdCBCdXR0b25cbiAgY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG5ld1Byb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0XCI7XG4gIG5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkaXNwbGF5UHJvamVjdERpYWxvZyhDUkVBVEVfUFJPSkVDVCwge30pO1xuICB9KTtcbiAgcHJvamVjdExpc3RIZWFkZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ1dHRvbik7XG4gIC8vIFByb2plY3QgTGlzdCBVbCAodG8gYmUgcG9wdWxhdGVkIGJ5IFwicmVuZGVyIC4uLiBcIiBiZWxvdylcbiAgY29uc3QgcHJvamVjdExpc3RVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgcHJvamVjdExpc3RVbC5pZCA9IFwicHJvamVjdC1saXN0LXVsXCI7XG4gIHByb2plY3RMaXN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RMaXN0VWwpO1xuXG4gIC8vIFByb2plY3QgRGl2IChjb250YWluZXIpXG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByb290LmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICBwcm9qZWN0RGl2LmlkID0gXCJwcm9qZWN0LWRpdlwiO1xuXG4gIGNvbnN0IHJlbmRlclByb2plY3RMaXN0ID0gZnVuY3Rpb24obXNnLCBwcm9qZWN0TGlzdCkge1xuICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgLy8gY2xlYXIgcHJvamVjdCBsaXN0XG4gICAgd2hpbGUgKHByb2plY3RMaXN0VWwuZmlyc3RDaGlsZCkge1xuICAgICAgcHJvamVjdExpc3RVbC5yZW1vdmVDaGlsZChwcm9qZWN0TGlzdFVsLmZpcnN0Q2hpbGQpO1xuICAgIH0gLy8gLi4uIHRvIHdyaXRlIGEgbmV3IG9uZVxuXG4gICAgcHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIHByb2plY3RMaS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgICBwcm9qZWN0TGkuc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBpbmRleCk7XG4gICAgICBwcm9qZWN0TGlzdFVsLmFwcGVuZENoaWxkKHByb2plY3RMaSk7XG4gICAgICBwcm9qZWN0TGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICBQdWJTdWIucHVibGlzaChTV0lUQ0hfUFJPSkVDVCwgZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJQcm9qZWN0ID0gZnVuY3Rpb24obXNnLCBwcm9qZWN0KSB7XG4gICAgY29uc29sZS5sb2cobXNnKTtcblxuICAgIC8vIGNsZWFyIHByb2plY3QgZGl2IC4uLlxuICAgIHdoaWxlIChwcm9qZWN0RGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHByb2plY3REaXYucmVtb3ZlQ2hpbGQocHJvamVjdERpdi5maXJzdENoaWxkKTtcbiAgICB9IC8vIC4uLiB0byB3cml0ZSBhIG5ldyBvbmVcblxuICAgIC8vIGhlYWRlclxuICAgIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyRGl2LmlkID0gXCJwcm9qZWN0LWhlYWRlci1kaXZcIjtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGhlYWRlckRpdik7XG5cbiAgICAvLyBoZWFkZXI6IHRpdGxlXG4gICAgY29uc3QgdGl0bGVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgdHJ5IHtcbiAgICAgIC8vIGhhbmRsZSBcIm5vIGFjdGl2ZSBwcm9qZWN0c1wiXG4gICAgICB0aXRsZUhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQodGl0bGVIZWFkZXIpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRpdGxlSGVhZGVyLnRleHRDb250ZW50ID0gXCJObyBhY3RpdmUgcHJvamVjdHNcIjtcbiAgICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZCh0aXRsZUhlYWRlcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaGVhZGVyOiBidXR0b25zXG4gICAgY29uc3QgYnV0dG9uc1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBidXR0b25zU3Bhbi5pZCA9IFwicHJvamVjdC1idXR0b25zXCI7XG4gICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGJ1dHRvbnNTcGFuKTtcblxuICAgIC8vIGhlYWRlciBidXR0b25zOiBcIm5ldyB0b2RvXCIgYnV0dG9uXG4gICAgY29uc3QgbmV3VG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbmV3VG9kb0J1dHRvbi50ZXh0Q29udGVudCA9IFwiTmV3IFRvZG9cIjtcbiAgICBuZXdUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBkaXNwbGF5VG9kb0RpYWxvZyhDUkVBVEVfVE9ETywge30pO1xuICAgIH0pO1xuICAgIGJ1dHRvbnNTcGFuLmFwcGVuZENoaWxkKG5ld1RvZG9CdXR0b24pO1xuXG4gICAgLy8gaGVhZGVyIGJ1dHRvbnM6IFwiZWRpdCBwcm9qZWN0XCIgYnV0dG9uXG4gICAgY29uc3QgZWRpdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJFZGl0IFByb2plY3RcIjtcbiAgICBlZGl0UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJlZGl0aW5nIHByb2plY3RcIik7XG4gICAgICBkaXNwbGF5UHJvamVjdERpYWxvZyhFRElUX1BST0pFQ1QsIHsgcHJvamVjdCB9KTtcbiAgICB9KTtcbiAgICBidXR0b25zU3Bhbi5hcHBlbmRDaGlsZChlZGl0UHJvamVjdEJ1dHRvbik7XG5cbiAgICAvLyBoZWFkZXIgYnV0dG9uczogXCJkZWxldGUgcHJvamVjdFwiIGJ1dHRvblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZSBQcm9qZWN0XCI7XG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgUHViU3ViLnB1Ymxpc2goREVMRVRFX1BST0pFQ1QsIHByb2plY3QpO1xuICAgIH0pO1xuICAgIGJ1dHRvbnNTcGFuLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdXR0b24pO1xuXG4gICAgLy8gbGluZSBicmVhayBUT0RPOiByZXBsYWNlIHdpdGggcGFkZGluZy9tYXJnaW4/XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcblxuICAgIC8vIGNyZWF0ZSBhIHRhYmxlIHRvIG9yZ2FuaXplIHRvZG9zXG4gICAgY29uc3QgdG9kb1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQodG9kb1RhYmxlKTtcblxuICAgIGNvbnN0IHRvZG9IZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xuICAgIHRvZG9UYWJsZS5hcHBlbmRDaGlsZCh0b2RvSGVhZCk7XG4gICAgY29uc3QgdGl0bGVzID0gW1wiRG9uZVwiLCBcIlByaW9yaXR5XCIsIFwiVGl0bGVcIiwgXCJEdWUgRGF0ZVwiLCBcIkVkaXRcIiwgXCJEZWxldGVcIl07XG4gICAgdGl0bGVzLmZvckVhY2godGl0bGUgPT4ge1xuICAgICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgICB0aC5zY29wZSA9IFwiY29sXCI7XG4gICAgICB0aC50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgdG9kb0hlYWQuYXBwZW5kQ2hpbGQodGgpO1xuICAgIH0pO1xuXG4gICAgLy8gY3JlYXRlIGEgdGFibGUgYm9keSB0byBwb3B1bGF0ZSB3aXRoIHRvZG9zXG4gICAgY29uc3QgdG9kb0JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XG4gICAgdG9kb1RhYmxlLmFwcGVuZENoaWxkKHRvZG9Cb2R5KTtcbiAgICBwcm9qZWN0LnRvZG9MaXN0LmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICByZW5kZXJUb2RvKHRvZG9Cb2R5LCB0b2RvLCBpbmRleCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyVG9kbyA9IGZ1bmN0aW9uKC8qIHRvZG9VbCwgKi8gdG9kb0JvZHksIHRvZG8sIGluZGV4KSB7XG4gICAgY29uc3QgdG9kb1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICB0b2RvQm9keS5hcHBlbmRDaGlsZCh0b2RvUm93KTtcblxuICAgIC8vICdNYXJrIGNvbXBsZXRlJyBidXR0b25cbiAgICBjb25zdCBidXR0b25DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgIHRvZG9Sb3cuYXBwZW5kQ2hpbGQoYnV0dG9uQ2VsbCk7XG4gICAgY29uc3QgY29tcGxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbXBsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEb25lXCI7XG4gICAgYnV0dG9uQ2VsbC5hcHBlbmRDaGlsZChjb21wbGV0ZUJ1dHRvbik7XG4gICAgY29tcGxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZVRvZG9Db21wbGV0ZSk7XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVUb2RvQ29tcGxldGUoZSkge1xuICAgICAgY29uc3QgdG9kb1NwYW4gPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpO1xuICAgICAgdG9kb1NwYW4uY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlXCIpO1xuICAgIH1cblxuICAgIC8vIHByaW9yaXR5IGluZGljYXRvclxuICAgIGNvbnN0IHByaW9yaXR5Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICB0b2RvUm93LmFwcGVuZENoaWxkKHByaW9yaXR5Q2VsbCk7XG4gICAgY29uc3QgcHJpb3JpdHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgcHJpb3JpdHlUZXh0LnRleHRDb250ZW50ID0gdG9kby5wcmlvcml0eTtcbiAgICBwcmlvcml0eUNlbGwuYXBwZW5kQ2hpbGQocHJpb3JpdHlUZXh0KTtcblxuICAgIC8vIFRvZG8gdGl0bGVcbiAgICBjb25zdCB0aXRsZUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgdG9kb1Jvdy5hcHBlbmRDaGlsZCh0aXRsZUNlbGwpO1xuICAgIGNvbnN0IHRleHRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdGV4dFNwYW4udGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgIHRpdGxlQ2VsbC5hcHBlbmRDaGlsZCh0ZXh0U3Bhbik7XG5cbiAgICAvLyBkdWUgZGF0ZVxuICAgIGNvbnN0IGR1ZURhdGVDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgIHRvZG9Sb3cuYXBwZW5kQ2hpbGQoZHVlRGF0ZUNlbGwpO1xuICAgIGR1ZURhdGVDZWxsLnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlO1xuXG4gICAgLy8gZHJhdyBlZGl0IGJ1dHRvbiAodG9kbzogcGVuY2lsIGljb24pXG4gICAgY29uc3QgZWRpdENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgdG9kb1Jvdy5hcHBlbmRDaGlsZChlZGl0Q2VsbCk7XG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAgIGVkaXRDZWxsLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiYmVlcCEgZWRpdGluZyB0b2RvLlwiKTtcbiAgICAgIGRpc3BsYXlUb2RvRGlhbG9nKEVESVRfVE9ETywgeyB0b2RvLCBpbmRleCB9KTtcbiAgICB9KTtcblxuICAgIC8vIGRyYXcgZGVsZXRlIGJ1dHRvbiAodHJhc2ggaWNvbilcbiAgICBjb25zdCBkZWxldGVDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgIHRvZG9Sb3cuYXBwZW5kQ2hpbGQoZGVsZXRlQ2VsbCk7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgIGRlbGV0ZUNlbGwuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIFB1YlN1Yi5wdWJsaXNoKERFTEVURV9UT0RPLCB7IGluZGV4IH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIFByb2plY3QgRGlhbG9nIHNldHVwOlxuICBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdERpYWxvZyhtZXRob2QsIGRhdGEpIHtcbiAgICAvLyBzZWxlY3RvciBzZXR1cFxuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1mb3JtLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBkaWFsb2dNYXNrID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCJkaXYuZGlhbG9nLW1hc2tcIik7XG4gICAgY29uc3QgZm9ybSA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKFwiZm9ybSNwcm9qZWN0LWZvcm1cIik7XG5cbiAgICAvLyBTYXZlIGFjdGl2ZSBlbGVtZW50XG4gICAgcHJldmlvdXNBY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgIC8vIFNob3cgdGhlIGRpYWxvZ1xuICAgIGRpYWxvZy5jbGFzc0xpc3QuYWRkKFwib3BlbmVkXCIpO1xuXG4gICAgLy8gUG9wdWxhdGUgZmllbGRzIGFwcHJvcHJpYXRlbHkgZm9yIFwibmV3XCIgb3IgXCJlZGl0XCJcbiAgICBpZiAobWV0aG9kID09PSBDUkVBVEVfUFJPSkVDVCkge1xuICAgICAgZm9ybS5lbGVtZW50cy50aXRsZS52YWx1ZSA9IFwiTmV3IFByb2plY3RcIjtcbiAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gRURJVF9QUk9KRUNUKSB7XG4gICAgICBmb3JtLmVsZW1lbnRzLnRpdGxlLnZhbHVlID0gZGF0YS5wcm9qZWN0LnRpdGxlO1xuICAgIH1cblxuICAgIC8vIExpc3RlbiBmb3IgZm9ybSBjb21wbGV0aW9uXG4gICAgc3VibWl0UHJvamVjdEZvcm1NZXRob2QgPSBzdWJtaXRQcm9qZWN0Rm9ybS5iaW5kKHsgbWV0aG9kLCBkYXRhIH0pO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBzdWJtaXRQcm9qZWN0Rm9ybU1ldGhvZCk7XG5cbiAgICAvLyBBZGQgbGlzdGVuZXJzIHRvIGNsb3NlIHdpbmRvd1xuICAgIGRpYWxvZ01hc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlUHJvamVjdERpYWxvZyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNoZWNrQ2xvc2VQcm9qZWN0RGlhbG9nKTtcbiAgICBkaWFsb2dcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmNsb3NlXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlUHJvamVjdERpYWxvZyk7XG5cbiAgICAvLyBGb2N1cyB0aGUgZGlhbG9nXG4gICAgZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS5mb2N1cygpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3VibWl0UHJvamVjdEZvcm0oZSkge1xuICAgIGNvbnNvbGUubG9nKFwiZm9ybSBzdWJtaXR0ZWQhXCIpO1xuICAgIC8vIGhhbmRsZXMgZWl0aGVyIFwiZWRpdFwiIG9yIFwibmV3XCJcbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih0aGlzLmRhdGEsIHtcbiAgICAgIHRpdGxlOiBlLnRhcmdldC5lbGVtZW50cy50aXRsZS52YWx1ZVxuICAgIH0pO1xuICAgIFB1YlN1Yi5wdWJsaXNoKHRoaXMubWV0aG9kLCBuZXdEYXRhKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIHN0YXkgb24gc2FtZSBwYWdlXG4gICAgY2xvc2VQcm9qZWN0RGlhbG9nKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0Nsb3NlUHJvamVjdERpYWxvZyhlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIGNsb3NlUHJvamVjdERpYWxvZygpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VQcm9qZWN0RGlhbG9nKCkge1xuICAgIC8vIHNlbGVjdG9yIHNldHVwXG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWZvcm0tY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGRpYWxvZ01hc2sgPSBkaWFsb2cucXVlcnlTZWxlY3RvcihcImRpdi5kaWFsb2ctbWFza1wiKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWZvcm1cIik7XG5cbiAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzXG4gICAgZGlhbG9nTWFzay5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VQcm9qZWN0RGlhbG9nKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgY2hlY2tDbG9zZVByb2plY3REaWFsb2cpO1xuICAgIGRpYWxvZ1xuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uY2xvc2VcIilcbiAgICAgIC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VQcm9qZWN0RGlhbG9nKTtcbiAgICBmb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc3VibWl0UHJvamVjdEZvcm1NZXRob2QpO1xuXG4gICAgZGlhbG9nLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuZWRcIik7XG5cbiAgICAvLyBSZXR1cm4gZm9jdXMgb3V0c2lkZSBvZiB0aGUgbW9kYWxcbiAgICBwcmV2aW91c0FjdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIC8vIFRvZG8gRGlhbG9nIHNldHVwOlxuICBmdW5jdGlvbiBkaXNwbGF5VG9kb0RpYWxvZyhtZXRob2QsIGRhdGEpIHtcbiAgICAvLyBzZWxlY3RvciBzZXR1cFxuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1mb3JtLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBkaWFsb2dNYXNrID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCJkaXYuZGlhbG9nLW1hc2tcIik7XG4gICAgY29uc3QgZm9ybSA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKFwiZm9ybSN0b2RvLWZvcm1cIik7XG5cbiAgICAvLyBTYXZlIGFjdGl2ZSBlbGVtZW50XG4gICAgcHJldmlvdXNBY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgIC8vIFNob3cgdGhlIGRpYWxvZ1xuICAgIGRpYWxvZy5jbGFzc0xpc3QuYWRkKFwib3BlbmVkXCIpO1xuXG4gICAgLy8gUG9wdWxhdGUgZmllbGRzIGFwcHJvcHJpYXRlbHkgZm9yIFwibmV3XCIgb3IgXCJlZGl0XCJcbiAgICBpZiAobWV0aG9kID09PSBDUkVBVEVfVE9ETykge1xuICAgICAgZm9ybS5lbGVtZW50cy50aXRsZS52YWx1ZSA9IFwiTmV3IFRvZG9cIjtcbiAgICAgIGZvcm0uZWxlbWVudHMuZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgZm9ybS5lbGVtZW50cy5wcmlvcml0eS52YWx1ZSA9IFwibm9ybWFsXCI7XG4gICAgICBmb3JtLmVsZW1lbnRzLmR1ZURhdGUudmFsdWUgPSBcInRvZGF5XCI7XG4gICAgfSBlbHNlIGlmIChtZXRob2QgPT09IEVESVRfVE9ETykge1xuICAgICAgZm9ybS5lbGVtZW50cy50aXRsZS52YWx1ZSA9IGRhdGEudG9kby50aXRsZTtcbiAgICAgIGZvcm0uZWxlbWVudHMuZGVzY3JpcHRpb24udmFsdWUgPSBkYXRhLnRvZG8uZGVzY3JpcHRpb247XG4gICAgICBmb3JtLmVsZW1lbnRzLnByaW9yaXR5LnZhbHVlID0gZGF0YS50b2RvLnByaW9yaXR5O1xuICAgICAgZm9ybS5lbGVtZW50cy5kdWVEYXRlLnZhbHVlID0gZGF0YS50b2RvLmR1ZURhdGU7XG4gICAgfVxuXG4gICAgLy8gTGlzdGVuIGZvciBmb3JtIGNvbXBsZXRpb25cbiAgICBzdWJtaXRUb2RvRm9ybU1ldGhvZCA9IHN1Ym1pdFRvZG9Gb3JtLmJpbmQoeyBtZXRob2QsIGRhdGEgfSk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN1Ym1pdFRvZG9Gb3JtTWV0aG9kKTtcblxuICAgIC8vIEFkZCBsaXN0ZW5lcnMgdG8gY2xvc2Ugd2luZG93XG4gICAgZGlhbG9nTWFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VUb2RvRGlhbG9nKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgY2hlY2tDbG9zZVRvZG9EaWFsb2cpO1xuICAgIGRpYWxvZ1xuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uY2xvc2VcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VUb2RvRGlhbG9nKTtcblxuICAgIGRpYWxvZy5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikuZm9jdXMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN1Ym1pdFRvZG9Gb3JtKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcImZvcm0gc3VibWl0dGVkIVwiKTtcbiAgICBjb25zdCB7IGVsZW1lbnRzIH0gPSBlLnRhcmdldDtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gW1widGl0bGVcIiwgXCJkZXNjcmlwdGlvblwiLCBcInByaW9yaXR5XCIsIFwiZHVlRGF0ZVwiXTtcbiAgICBjb25zdCBpbmZvID0ge307XG4gICAgcHJvcGVydGllcy5mb3JFYWNoKHAgPT4gKGluZm9bcF0gPSBlbGVtZW50c1twXS52YWx1ZSkpO1xuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHRoaXMuZGF0YSwgaW5mbyk7XG4gICAgUHViU3ViLnB1Ymxpc2godGhpcy5tZXRob2QsIG5ld0RhdGEpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gc3RheSBvbiBzYW1lIHBhZ2VcbiAgICBjbG9zZVRvZG9EaWFsb2coKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrQ2xvc2VUb2RvRGlhbG9nKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAyNykgY2xvc2VUb2RvRGlhbG9nKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZVRvZG9EaWFsb2coKSB7XG4gICAgLy8gc2VsZWN0b3Igc2V0dXBcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZm9ybS1jb250YWluZXJcIik7XG4gICAgY29uc3QgZGlhbG9nTWFzayA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKFwiZGl2LmRpYWxvZy1tYXNrXCIpO1xuICAgIGNvbnN0IGZvcm0gPSBkaWFsb2cucXVlcnlTZWxlY3RvcihcImZvcm0jdG9kby1mb3JtXCIpO1xuXG4gICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyc1xuICAgIGRpYWxvZ01hc2sucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlVG9kb0RpYWxvZyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNoZWNrQ2xvc2VUb2RvRGlhbG9nKTtcbiAgICBkaWFsb2dcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmNsb3NlXCIpXG4gICAgICAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlVG9kb0RpYWxvZyk7XG4gICAgZm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN1Ym1pdFRvZG9Gb3JtTWV0aG9kKTtcblxuICAgIGRpYWxvZy5jbGFzc0xpc3QucmVtb3ZlKFwib3BlbmVkXCIpO1xuXG4gICAgLy8gUmV0dXJuIGZvY3VzIG91dHNpZGUgb2YgdGhlIG1vZGFsXG4gICAgcHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBQdWJTdWIuc3Vic2NyaWJlKFJFTkRFUl9QUk9KRUNUX0xJU1QsIHJlbmRlclByb2plY3RMaXN0KTtcbiAgUHViU3ViLnN1YnNjcmliZShSRU5ERVJfUFJPSkVDVCwgcmVuZGVyUHJvamVjdCk7XG59KSgpO1xuIiwiY29uc3QgUFJJTlRfTElTVCA9IFwicHJpbnQgbGlzdFwiO1xuY29uc3QgR0VUX0FDVElPTiA9IFwiZ2V0IGFjdGlvblwiO1xuXG5jb25zdCBDUkVBVEVfVE9ETyA9IFwiY3JlYXRlIHRvZG9cIjtcbmNvbnN0IEVESVRfVE9ETyA9IFwiZWRpdCB0b2RvXCI7XG5jb25zdCBERUxFVEVfVE9ETyA9IFwiZGVsZXRlIHRvZG9cIjtcblxuY29uc3QgQ1JFQVRFX1BST0pFQ1QgPSBcImNyZWF0ZSBwcm9qZWN0XCI7XG5jb25zdCBFRElUX1BST0pFQ1QgPSBcImVkaXQgcHJvamVjdFwiO1xuY29uc3QgREVMRVRFX1BST0pFQ1QgPSBcImRlbGV0ZSBwcm9qZWN0XCI7XG5cbmNvbnN0IFNFVF9VUF9QQUdFID0gXCJzZXQgdXAgcGFnZVwiO1xuY29uc3QgUkVOREVSX1BST0pFQ1RfTElTVCA9IFwicmVuZGVyIHByb2plY3QgbGlzdFwiO1xuY29uc3QgUkVOREVSX1BST0pFQ1QgPSBcInJlbmRlciBwcm9qZWN0XCI7XG5cbmNvbnN0IFNXSVRDSF9QUk9KRUNUID0gXCJzd2l0Y2ggcHJvamVjdFwiO1xuXG5leHBvcnQge1xuICBQUklOVF9MSVNULFxuICBHRVRfQUNUSU9OLFxuICBDUkVBVEVfVE9ETyxcbiAgRURJVF9UT0RPLFxuICBERUxFVEVfVE9ETyxcbiAgQ1JFQVRFX1BST0pFQ1QsXG4gIEVESVRfUFJPSkVDVCxcbiAgREVMRVRFX1BST0pFQ1QsXG4gIFNFVF9VUF9QQUdFLFxuICBSRU5ERVJfUFJPSkVDVF9MSVNULFxuICBSRU5ERVJfUFJPSkVDVCxcbiAgU1dJVENIX1BST0pFQ1Rcbn07XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBQdWJTdWIgZnJvbSBcInB1YnN1Yi1qc1wiO1xuaW1wb3J0IHtcbiAgQ1JFQVRFX1RPRE8sXG4gIEVESVRfVE9ETyxcbiAgREVMRVRFX1RPRE8sXG4gIENSRUFURV9QUk9KRUNULFxuICBFRElUX1BST0pFQ1QsXG4gIERFTEVURV9QUk9KRUNULFxuICBSRU5ERVJfUFJPSkVDVF9MSVNULFxuICBSRU5ERVJfUFJPSkVDVCxcbiAgU1dJVENIX1BST0pFQ1Rcbn0gZnJvbSBcIi4vZXZlbnQtdHlwZXNcIjtcbmltcG9ydCB0b2RvIGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCBwcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBcIi4vZG9tLW1hbmFnZXJcIjtcblxuY29uc3QgQXBwbGljYXRpb24gPSAoZnVuY3Rpb24oKSB7XG4gIC8qIFN0b3JhZ2UgbG9naWMgKi9cbiAgY29uc3Qgc2F2ZVByb2plY3RMaXN0ID0gZnVuY3Rpb24oKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0TGlzdFwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRQcm9qZWN0TGlzdCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHN0b3JlZFN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdExpc3RcIik7XG4gICAgY29uc3Qgc3RvcmVkTGlzdCA9IEpTT04ucGFyc2Uoc3RvcmVkU3RyaW5nKTtcbiAgICBjb25zdCBuZXdMaXN0ID0gc3RvcmVkTGlzdC5tYXAocCA9PiB7XG4gICAgICBjb25zdCBuZXdUb2RvTGlzdCA9IHAudG9kb0xpc3QubWFwKHQgPT4ge1xuICAgICAgICByZXR1cm4gdG9kbyh0LnRpdGxlLCB0LmRlc2NyaXB0aW9uLCB0LmR1ZURhdGUsIHQucHJpb3JpdHkpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdChwLnRpdGxlLCBuZXdUb2RvTGlzdCk7XG4gICAgICByZXR1cm4gbmV3UHJvamVjdDtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3TGlzdDtcbiAgfTtcbiAgLyogLi4uIGVuZCBzdG9yYWdlIGxvZ2ljICovXG5cbiAgLyogVG9kbyBsb2dpYyAtLSAgKi9cbiAgY29uc3QgY3JlYXRlVG9kbyA9IGZ1bmN0aW9uKG1zZywgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5IH0pIHtcbiAgICAvLyB3b3JraW5nXG4gICAgY29uc29sZS5sb2cobXNnKTtcbiAgICBjb25zdCBuZXdUb2RvID0gdG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICBhY3RpdmVQcm9qZWN0LnRvZG9MaXN0LnB1c2gobmV3VG9kbyk7XG4gICAgUHViU3ViLnB1Ymxpc2goUkVOREVSX1BST0pFQ1QsIGFjdGl2ZVByb2plY3QpO1xuICAgIHNhdmVQcm9qZWN0TGlzdCgpO1xuICB9O1xuXG4gIGNvbnN0IGVkaXRUb2RvID0gZnVuY3Rpb24oXG4gICAgbXNnLFxuICAgIHsgaW5kZXgsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgfVxuICApIHtcbiAgICBjb25zb2xlLmxvZyhtc2cpO1xuICAgIGNvbnN0IG5ld1RvZG8gPSB0b2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgIGFjdGl2ZVByb2plY3QudG9kb0xpc3Quc3BsaWNlKGluZGV4LCAxLCBuZXdUb2RvKTtcbiAgICBQdWJTdWIucHVibGlzaChSRU5ERVJfUFJPSkVDVCwgYWN0aXZlUHJvamVjdCk7XG4gICAgc2F2ZVByb2plY3RMaXN0KCk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVG9kbyA9IGZ1bmN0aW9uKG1zZywgeyBpbmRleCB9KSB7XG4gICAgY29uc29sZS5sb2cobXNnKTtcbiAgICBhY3RpdmVQcm9qZWN0LnRvZG9MaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgUHViU3ViLnB1Ymxpc2goUkVOREVSX1BST0pFQ1QsIGFjdGl2ZVByb2plY3QpO1xuICAgIHNhdmVQcm9qZWN0TGlzdCgpO1xuICB9O1xuICAvKiBFbmQgVG9kbyBsb2dpYyAqL1xuXG4gIC8qIFByb2plY3QgTG9naWMgKi9cbiAgY29uc3QgY3JlYXRlUHJvamVjdCA9IGZ1bmN0aW9uKG1zZywgeyB0aXRsZSB9KSB7XG4gICAgY29uc29sZS5sb2cobXNnKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdCh0aXRsZSk7XG4gICAgcHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0KTtcbiAgICBzd2l0Y2hQcm9qZWN0KFNXSVRDSF9QUk9KRUNULCBwcm9qZWN0TGlzdC5sZW5ndGggLSAxKTtcbiAgICBQdWJTdWIucHVibGlzaChSRU5ERVJfUFJPSkVDVF9MSVNULCBwcm9qZWN0TGlzdCk7XG4gICAgc2F2ZVByb2plY3RMaXN0KCk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFByb2plY3QgPSBmdW5jdGlvbihtc2csIHsgdGl0bGUgfSkge1xuICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgYWN0aXZlUHJvamVjdC50aXRsZSA9IHRpdGxlO1xuICAgIFB1YlN1Yi5wdWJsaXNoKFJFTkRFUl9QUk9KRUNUX0xJU1QsIHByb2plY3RMaXN0KTtcbiAgICBQdWJTdWIucHVibGlzaChSRU5ERVJfUFJPSkVDVCwgYWN0aXZlUHJvamVjdCk7XG4gICAgc2F2ZVByb2plY3RMaXN0KCk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IGZ1bmN0aW9uKG1zZywgdGFyZ2V0UHJvamVjdCkge1xuICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgaWYgKHRhcmdldFByb2plY3QgPT09IGFjdGl2ZVByb2plY3QpIFB1YlN1Yi5wdWJsaXNoKFNXSVRDSF9QUk9KRUNULCAwKTtcbiAgICBjb25zdCBpbmRleCA9IHByb2plY3RMaXN0LmZpbmRJbmRleChwcm9qID0+IHByb2ogPT09IHByb2plY3QpO1xuICAgIHByb2plY3RMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgUHViU3ViLnB1Ymxpc2goUkVOREVSX1BST0pFQ1RfTElTVCwgcHJvamVjdExpc3QpO1xuICAgIHNhdmVQcm9qZWN0TGlzdCgpO1xuICB9O1xuXG4gIGNvbnN0IHN3aXRjaFByb2plY3QgPSBmdW5jdGlvbihtc2csIGluZGV4KSB7XG4gICAgY29uc29sZS5sb2cobXNnKTtcbiAgICBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdExpc3RbaW5kZXhdO1xuICAgIFB1YlN1Yi5wdWJsaXNoKFJFTkRFUl9QUk9KRUNULCBhY3RpdmVQcm9qZWN0KTtcbiAgfTtcbiAgLyogRW5kIFByb2plY3QgTG9naWMgKi9cblxuICAvLyBTdWJzY3JpcHRpb25zXG4gIGNvbnN0IHRva2VuMCA9IFB1YlN1Yi5zdWJzY3JpYmUoQ1JFQVRFX1RPRE8sIGNyZWF0ZVRvZG8pO1xuICBjb25zdCB0b2tlbjEgPSBQdWJTdWIuc3Vic2NyaWJlKEVESVRfVE9ETywgZWRpdFRvZG8pO1xuICBjb25zdCB0b2tlbjIgPSBQdWJTdWIuc3Vic2NyaWJlKERFTEVURV9UT0RPLCBkZWxldGVUb2RvKTtcbiAgY29uc3QgdG9rZW4zID0gUHViU3ViLnN1YnNjcmliZShDUkVBVEVfUFJPSkVDVCwgY3JlYXRlUHJvamVjdCk7XG4gIGNvbnN0IHRva2VuNCA9IFB1YlN1Yi5zdWJzY3JpYmUoRURJVF9QUk9KRUNULCBlZGl0UHJvamVjdCk7XG4gIGNvbnN0IHRva2VuNSA9IFB1YlN1Yi5zdWJzY3JpYmUoREVMRVRFX1BST0pFQ1QsIGRlbGV0ZVByb2plY3QpO1xuICBjb25zdCB0b2tlbjYgPSBQdWJTdWIuc3Vic2NyaWJlKFNXSVRDSF9QUk9KRUNULCBzd2l0Y2hQcm9qZWN0KTtcblxuICAvLyBnZXQgcHJvamVjdCBsaXN0IGZyb20gc3RvcmFnZVxuICBjb25zdCBwcm9qZWN0TGlzdCA9IFtdO1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0TGlzdFwiKSkge1xuICAgIHByb2plY3RMaXN0LnB1c2goLi4ubG9hZFByb2plY3RMaXN0KCkpO1xuICB9XG5cbiAgLy8gY2hvb3NlIGFjdGl2ZSBwcm9qZWN0XG4gIGxldCBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdExpc3RbMF0gfHwgbnVsbDtcbiAgLy8gY29uc3QgZ2V0QWN0aXZlUHJvamVjdCA9ICgpID0+IHsgcmV0dXJuIGFjdGl2ZVByb2plY3QgfTsgLy8gZm9yIHVuaXQgdGVzdHNcblxuICAvLyBvcHRpb25hbGx5IGxvYWQgc2FtcGxlIHByb2plY3RzXG4gIGlmIChwcm9qZWN0TGlzdC5sZW5ndGggPT09IDAgJiYgY29uZmlybShcIkxvYWQgc2FtcGxlIHByb2plY3RzP1wiKSkge1xuICAgIGxvYWRUZXN0UHJvamVjdHMoKTtcbiAgfVxuXG4gIC8vIGRpc3BsYXkgbGlzdHNcbiAgUHViU3ViLnB1Ymxpc2goUkVOREVSX1BST0pFQ1RfTElTVCwgcHJvamVjdExpc3QpO1xuICBQdWJTdWIucHVibGlzaChSRU5ERVJfUFJPSkVDVCwgYWN0aXZlUHJvamVjdCk7XG5cbiAgLypcbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0TGlzdCwgLy8gZm9yIHRlc3RpbmcgcHVycG9zZXNcbiAgICBhY3RpdmVQcm9qZWN0LFxuICAgIGdldEFjdGl2ZVByb2plY3QsXG4gICAgc2F2ZVByb2plY3RMaXN0LFxuICAgIGxvYWRQcm9qZWN0TGlzdFxuICB9ICovXG59KSgpO1xuXG5mdW5jdGlvbiBsb2FkVGVzdFByb2plY3RzKCkge1xuICBjb25zb2xlLmxvZyhcImxvYWRpbmcgdGVzdCBwcm9qZWN0c1wiKTtcblxuICBjb25zdCB0ZXN0UHJvajEgPSBwcm9qZWN0KFwiVGVzdCBQcm9qZWN0IDFcIik7XG4gIGNvbnN0IHRlc3RQcm9qMiA9IHByb2plY3QoXCJUZXN0IFByb2plY3QgMlwiKTtcbiAgUHViU3ViLnB1Ymxpc2goQ1JFQVRFX1BST0pFQ1QsIHRlc3RQcm9qMSk7XG4gIFB1YlN1Yi5wdWJsaXNoKENSRUFURV9QUk9KRUNULCB0ZXN0UHJvajIpO1xuXG4gIGNvbnN0IHRlc3RUb2RvID0gdG9kbyhcbiAgICBcIlNpbW9uYSdzIGJpcnRoZGF5XCIsXG4gICAgXCJHZXQgaGVyIGEgcHJlc2VudCEgOilcIixcbiAgICBcIkphbnVhcnkgMjRcIixcbiAgICBcImhpZ2hcIlxuICApO1xuICBjb25zdCB0ZXN0VG9kbzEgPSB0b2RvKFxuICAgIFwiU29jaWFsaXplXCIsXG4gICAgXCJHZXQgaW4gdG91Y2ggd2l0aCBmcmllbmRzXCIsXG4gICAgXCJ0aGlzIHdlZWtcIixcbiAgICBcIm1lZGl1bVwiXG4gICk7XG4gIGNvbnN0IHRlc3RUb2RvMiA9IHRvZG8oXCJTeW5lcmdpemVcIiwgXCJOZXR3b3JrXCIsIFwiQVNBUFwiLCBcImNyaXRpY2FsXCIpO1xuXG4gIFB1YlN1Yi5wdWJsaXNoKENSRUFURV9UT0RPLCB0ZXN0VG9kbyk7XG4gIFB1YlN1Yi5wdWJsaXNoKENSRUFURV9UT0RPLCB0ZXN0VG9kbzEpO1xuICBQdWJTdWIucHVibGlzaChDUkVBVEVfVE9ETywgdGVzdFRvZG8yKTtcbn1cbiIsIi8vIE1ha2UgYSBwcm9qZWN0IG9iamVjdFxuXG5jb25zdCBwcm9qZWN0ID0gZnVuY3Rpb24gcHJvamVjdCh0aXRsZSwgdG9kb0xpc3RJbikge1xuICBjb25zdCB0b2RvTGlzdCA9IHRvZG9MaXN0SW4gfHwgW107XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgdG9kb0xpc3RcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3Q7XG4iLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iLCJjb25zdCB0b2RvID0gZnVuY3Rpb24gdG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9kbztcbiJdLCJzb3VyY2VSb290IjoiIn0=