!function(t){function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var e={};n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=19)}({19:function(t,n,e){t.exports=e(20)},20:function(t,n,e){"use strict";e(21)},21:function(t,n,e){"use strict";self.addEventListener("push",function(t){var n=void 0,e=void 0,r=void 0,c=void 0;try{n=t.data.json(),e=n.title,r=n.message,c=n.tag}catch(n){e="",r=t.data.text(),c=""}self.registration.showNotification(o(e),i(r,c)),self.clients.matchAll({includeUncontrolled:!0,type:"window"}).then(function(t){t.forEach(function(t){t.postMessage({data:c,data_title:e,data_body:r})})})}),self.addEventListener("notificationclick",function(t){t.notification.close(),t.waitUntil(self.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(t){for(var n=0;n<t.length;n++){var e=t[n];if("focus"in e)return e.focus()}}))});var o=function(t){return""===t&&(t="TITLE DEFAULT"),t},i=function(t,n){return{body:t,icon:"/img/icon_120.png",tag:n,vibrate:[200,100,200,100,200,100,200]}}}});