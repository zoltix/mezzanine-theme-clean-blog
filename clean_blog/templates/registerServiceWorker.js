!function(n){function e(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};e.m=n,e.c=o,e.d=function(n,o,t){e.o(n,o)||Object.defineProperty(n,o,{configurable:!1,enumerable:!0,get:t})},e.n=function(n){var o=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(o,"a",o),o},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=0)}([function(n,e,o){"use strict";function t(){if("serviceWorker"in navigator){if(new URL("/",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="/service-worker.js";a?i(n):r(n)})}}function r(n){navigator.serviceWorker.register(n,{scope:"/"}).then(function(n){n.onupdatefound=function(){var e=n.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(n){console.error("Error during service worker registration:",n)})}function i(n){fetch(n).then(function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):r(n)}).catch(function(n){console.log("No internet connection found. App is running in offline mode.",n)})}function c(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=t,e.registerValidSW=r,e.checkValidServiceWorker=i,e.unregister=c;var a=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))}]);