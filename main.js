!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=2)}([function(t,n,e){(function(t){!function(e,r){"use strict";var o={};e.PubSub=o;var i=e.define;!function(t){var n={},e=-1;function r(t){var n;for(n in t)if(t.hasOwnProperty(n))return!0;return!1}function o(t,n,e){try{t(n,e)}catch(t){setTimeout(function(t){return function(){throw t}}(t),0)}}function i(t,n,e){t(n,e)}function u(t,e,r,u){var c,f=n[e],s=u?i:o;if(n.hasOwnProperty(e))for(c in f)f.hasOwnProperty(c)&&s(f[c],t,r)}function c(t,e,o,i){var c=function(t,n,e){return function(){var r=String(t),o=r.lastIndexOf(".");for(u(t,t,n,e);-1!==o;)o=(r=r.substr(0,o)).lastIndexOf("."),u(t,r,n,e)}}(t="symbol"==typeof t?t.toString():t,e,i);return!!function(t){for(var e=String(t),o=Boolean(n.hasOwnProperty(e)&&r(n[e])),i=e.lastIndexOf(".");!o&&-1!==i;)i=(e=e.substr(0,i)).lastIndexOf("."),o=Boolean(n.hasOwnProperty(e)&&r(n[e]));return o}(t)&&(!0===o?c():setTimeout(c,0),!0)}t.publish=function(n,e){return c(n,e,!1,t.immediateExceptions)},t.publishSync=function(n,e){return c(n,e,!0,t.immediateExceptions)},t.subscribe=function(t,r){if("function"!=typeof r)return!1;t="symbol"==typeof t?t.toString():t,n.hasOwnProperty(t)||(n[t]={});var o="uid_"+String(++e);return n[t][o]=r,o},t.subscribeOnce=function(n,e){var r=t.subscribe(n,(function(){t.unsubscribe(r),e.apply(this,arguments)}));return t},t.clearAllSubscriptions=function(){n={}},t.clearSubscriptions=function(t){var e;for(e in n)n.hasOwnProperty(e)&&0===e.indexOf(t)&&delete n[e]},t.unsubscribe=function(e){var r,o,i,u="string"==typeof e&&(n.hasOwnProperty(e)||function(t){var e;for(e in n)if(n.hasOwnProperty(e)&&0===e.indexOf(t))return!0;return!1}(e)),c=!u&&"string"==typeof e,f="function"==typeof e,s=!1;if(!u){for(r in n)if(n.hasOwnProperty(r)){if(o=n[r],c&&o[e]){delete o[e],s=e;break}if(f)for(i in o)o.hasOwnProperty(i)&&o[i]===e&&(delete o[i],s=!0)}return s}t.clearSubscriptions(e)}}(o),"function"==typeof i&&i.amd?i((function(){return o})):(void 0!==t&&t.exports&&(n=t.exports=o),n.PubSub=o,t.exports=n=o)}("object"==typeof window&&window||this)}).call(this,e(1)(t))},function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,n,e){"use strict";e.r(n);var r=e(0),o=e.n(r);var i=function(t,n,e,r){return{title:t,description:n,dueDate:e,priority:r}};var u={printList:function(t){t.forEach((t,n)=>{console.log(`${n}. ${t.title}: ${t.description}, `+`due ${t.dueDate}. Priority ${t.priority}`)})},getAction:function(){const t=prompt("Enter an action:\n'new', 'edit', or 'delete'");return!!["new","edit","delete"].includes(t)&&t},getIndex:function(){const t=Number(prompt("Enter index of target entry:"));return!isNaN(t)&&t}};o.a.subscribe("MY TOPIC",(function(t,n){console.log(t,n)}));o.a.publish("MY TOPIC","hello world!");const c=[i("Simona's birthday","Get her a present! :)","January 24","high"),i("Socialize","Get in touch with friends","this week","medium"),i("Synergize","Network","ASAP","critical")];u.printList(c);let f=u.getAction();console.log(f);let s=u.getIndex();console.log(s)}]);