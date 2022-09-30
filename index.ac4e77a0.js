!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i.register("bpxeT",(function(e,t){"use strict";function n(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(i,a){var o=e.apply(t,r);function s(e){n(o,i,a,s,u,"next",e)}function u(e){n(o,i,a,s,u,"throw",e)}s(void 0)}))}}})),i.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),i.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=i("8NIkP"))&&n.__esModule?n:{default:n}})),i.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),i.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),i.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=i("8NIkP"))&&n.__esModule?n:{default:n}})),i.register("2TvXO",(function(e,t){var n=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof y?t:y,a=Object.create(i.prototype),o=new S(r||[]);return a._invoke=function(e,t,n){var r=h;return function(i,a){if(r===f)throw new Error("Generator is already running");if(r===v){if("throw"===i)throw a;return N()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=T(o,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?v:d,u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=v,n.method="throw",n.arg=u.arg)}}}(e,n,o),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var h="suspendedStart",d="suspendedYield",f="executing",v="completed",p={};function y(){}function _(){}function m(){}var g={};u(g,a,(function(){return this}));var k=Object.getPrototypeOf,b=k&&k(k(P([])));b&&b!==n&&r.call(b,a)&&(g=b);var w=m.prototype=y.prototype=Object.create(g);function I(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){function n(i,a,o,s){var u=l(e[i],e,a);if("throw"!==u.type){var c=u.arg,h=c.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(h).then((function(e){c.value=e,o(c)}),(function(e){return n("throw",e,o,s)}))}s(u.arg)}var i;this._invoke=function(e,r){function a(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(a,a):a()}}function T(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,T(e,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,p;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,p):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function P(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:N}}function N(){return{value:t,done:!0}}return _.prototype=m,u(w,"constructor",m),u(m,"constructor",_),_.displayName=u(m,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===_||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},I(C.prototype),u(C.prototype,o,(function(){return this})),e.AsyncIterator=C,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new C(c(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},I(w),u(w,s,"Generator"),u(w,a,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=P,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;E(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:P(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),i.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),i.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),i.register("gD1JV",(function(e,t){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n(e,t)}})),i.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return o.apply(null,arguments)};var n,r=(n=i("gD1JV"))&&n.__esModule?n:{default:n};function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=a()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return n&&r.default(a,n.prototype),a}).apply(null,arguments)}})),i.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),i.register("fVNic",(function(e,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n(e)}})),i.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),i.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==r.default(t)&&"function"!=typeof t?n.default(e):t};var n=a(i("ds8z5")),r=a(i("l5bVx"));function a(e){return e&&e.__esModule?e:{default:e}}})),i.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),i.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=i("fVNic"))&&n.__esModule?n:{default:n}}));var a=i("bpxeT"),o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var s={};function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t,n){t&&u(e.prototype,t);n&&u(e,n);return e};var c=i("hKHmD"),l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e){return h.default(e)||d.default(e)||v.default(e)||f.default()};var h=p(i("kMC0W")),d=p(i("7AJDX")),f=p(i("8CtQK")),v=p(i("auk6i"));function p(e){return e&&e.__esModule?e:{default:e}}var y=i("2TvXO"),_=(a=i("bpxeT"),{});Object.defineProperty(_,"__esModule",{value:!0}),_.default=function(e,t){return m.default(e)||g.default(e,t)||b.default(e,t)||k.default()};var m=w(i("8slrw")),g=w(i("7AJDX")),k=w(i("ifqQW")),b=w(i("auk6i"));function w(e){return e&&e.__esModule?e:{default:e}}y=i("2TvXO");var I=i("ds8z5"),C={};Object.defineProperty(C,"__esModule",{value:!0}),C.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x.default(e,t)};var T,x=(T=i("gD1JV"))&&T.__esModule?T:{default:T};var E={};Object.defineProperty(E,"__esModule",{value:!0}),E.default=function(e){return A(e)};var S=O(i("ge8co")),P=O(i("cZGw3")),N=O(i("fVNic")),R=O(i("gD1JV"));function O(e){return e&&e.__esModule?e:{default:e}}function A(e){var t="function"==typeof Map?new Map:void 0;return A=function(e){if(null===e||!P.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return S.default(e,arguments,N.default(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),R.default(n,e)},A(e)}var D={};Object.defineProperty(D,"__esModule",{value:!0}),D.default=function(e){var t=L.default();return function(){var n,r=M.default(e);if(t){var i=M.default(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return F.default(this,n)}};var L=U(i("aTHs7")),M=U(i("fVNic")),F=U(i("jmhxu"));function U(e){return e&&e.__esModule?e:{default:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q=!1,j=!1,W="${JSCORE_VERSION}",V=function(e,t){if(!e)throw H(t)},H=function(e){return new Error("Firebase Database ("+W+") INTERNAL ASSERT FAILED: "+e)},z=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},B={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,h=(3&a)<<4|s>>4,d=(15&s)<<2|c>>6,f=63&c;u||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(z(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw Error();var c=a<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var h=s<<6&192|u;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},K=function(e){var t=z(e);return B.encodeByteArray(t,!0)},G=function(e){return K(e).replace(/\./g,"")},Y=function(e){try{return B.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(e){return Q(void 0,e)}function Q(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=Q(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var X=function(){"use strict";function t(){var n=this;e(o)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return e(s)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Z(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($())}function ee(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function te(){return!0===q||!0===j}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ne=function(t){"use strict";e(C)(r,t);var n=e(D)(r);function r(t,i,a){var s;return e(o)(this,r),(s=n.call(this,i)).code=t,s.customData=a,s.name="FirebaseError",Object.setPrototypeOf(e(I)(s),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(I)(s),re.prototype.create),s}return r}(e(E)(Error)),re=function(){"use strict";function t(n,r,i){e(o)(this,t),this.service=n,this.serviceName=r,this.errors=i}return e(s)(t,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?ie(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new ne(a,u,i);return c}}]),t}();function ie(e,t){return e.replace(ae,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var ae=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e){return JSON.parse(e)}function se(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue=function(e){var t={},n={},r={},i="";try{var a=e.split(".");t=oe(Y(a[0])||""),n=oe(Y(a[1])||""),i=a[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},ce=function(e){var t=ue(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function le(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function he(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function de(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function fe(e,t,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function ve(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],h=t[c];if(pe(l)&&pe(h)){if(!ve(l,h))return!1}else if(l!==h)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var d=!0,f=!1,v=void 0;try{for(var p,y=r[Symbol.iterator]();!(d=(p=y.next()).done);d=!0){var _=p.value;if(!n.includes(_))return!1}}catch(e){f=!0,v=e}finally{try{d||null==y.return||y.return()}finally{if(f)throw v}}return!0}function pe(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ye(t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=function(t,r){var i=e(_)(r.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){n.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(t)[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n.length?"&"+n.join("&"):""}function _e(t){var n={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var r=e(_)(t.split("="),2),i=r[0],a=r[1];n[decodeURIComponent(i)]=decodeURIComponent(a)}})),n}function me(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge=function(){"use strict";function t(){e(o)(this,t),this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var n=1;n<this.blockSize;++n)this.pad_[n]=0;this.reset()}return e(s)(t,[{key:"reset",value:function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}},{key:"compress_",value:function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(var i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(var a=16;a<80;a++){var o=n[a-3]^n[a-8]^n[a-14]^n[a-16];n[a]=4294967295&(o<<1|o>>>31)}for(var s,u,c=this.chain_[0],l=this.chain_[1],h=this.chain_[2],d=this.chain_[3],f=this.chain_[4],v=0;v<80;v++){v<40?v<20?(s=d^l&(h^d),u=1518500249):(s=l^h^d,u=1859775393):v<60?(s=l&h|d&(l|h),u=2400959708):(s=l^h^d,u=3395469782);var p=(c<<5|c>>>27)+s+f+u+n[v]&4294967295;f=d,d=h,h=4294967295&(l<<30|l>>>2),l=c,c=p}this.chain_[0]=this.chain_[0]+c&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}},{key:"update",value:function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,a=this.inbuf_;r<t;){if(0===a)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[a]=e.charCodeAt(r),++r,++a===this.blockSize){this.compress_(i),a=0;break}}else for(;r<t;)if(i[a]=e[r],++r,++a===this.blockSize){this.compress_(i),a=0;break}}this.inbuf_=a,this.total_+=t}}},{key:"digest",value:function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);for(var r=0,i=0;i<5;i++)for(var a=24;a>=0;a-=8)e[r]=this.chain_[i]>>a&255,++r;return e}}]),t}();var ke=function(){"use strict";function t(n,r){var i=this;e(o)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return e(s)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=be),void 0===r.error&&(r.error=be),void 0===r.complete&&(r.complete=be);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function be(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(e,t){return"".concat(e," failed: ").concat(t," argument ")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ie=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319){var a=i-55296;r++,V(r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(a<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Ce=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Te(e){return e&&e._delegate?e._delegate:e}var xe=function(){"use strict";function t(n,r,i){e(o)(this,t),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(s)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),Ee="[DEFAULT]",Se=function(){"use strict";function t(n,r){e(o)(this,t),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(s)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new X;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:Ee})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=e(_)(a.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var h=this.getOrInitializeService({instanceIdentifier:l});c.resolve(h)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(a)(e(y).mark((function n(){var r;return e(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(t.instances.values()),n.next=3,Promise.all(e(l)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(l)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:r}),o=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h=e(_)(c.value,2),d=h[0],f=h[1],v=this.normalizeInstanceIdentifier(d);i===v&&f.resolve(a)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return a}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===Ee?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee;return this.component?this.component.multipleInstances?e:Ee:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe,Ne,Re=function(){"use strict";function t(n){e(o)(this,t),this.name=n,this.providers=new Map}return e(s)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Se(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),Oe=(c=i("hKHmD"),[]);(Ne=Pe||(Pe={}))[Ne.DEBUG=0]="DEBUG",Ne[Ne.VERBOSE=1]="VERBOSE",Ne[Ne.INFO=2]="INFO",Ne[Ne.WARN=3]="WARN",Ne[Ne.ERROR=4]="ERROR",Ne[Ne.SILENT=5]="SILENT";var Ae,De={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},Le=Pe.INFO,Me=(Ae={},e(c)(Ae,Pe.DEBUG,"log"),e(c)(Ae,Pe.VERBOSE,"log"),e(c)(Ae,Pe.INFO,"info"),e(c)(Ae,Pe.WARN,"warn"),e(c)(Ae,Pe.ERROR,"error"),Ae),Fe=function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var o;if(!(n<t.logLevel)){var s=(new Date).toISOString(),u=Me[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(t.name,":")].concat(e(l)(i)))}},Ue=function(){"use strict";function t(n){e(o)(this,t),this.name=n,this._logLevel=Le,this._logHandler=Fe,this._userLogHandler=null,Oe.push(this)}return e(s)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in Pe))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?De[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Pe.DEBUG].concat(e(l)(n))),this._logHandler.apply(this,[this,Pe.DEBUG].concat(e(l)(n)))}},{key:"log",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Pe.VERBOSE].concat(e(l)(n))),this._logHandler.apply(this,[this,Pe.VERBOSE].concat(e(l)(n)))}},{key:"info",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Pe.INFO].concat(e(l)(n))),this._logHandler.apply(this,[this,Pe.INFO].concat(e(l)(n)))}},{key:"warn",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Pe.WARN].concat(e(l)(n))),this._logHandler.apply(this,[this,Pe.WARN].concat(e(l)(n)))}},{key:"error",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Pe.ERROR].concat(e(l)(n))),this._logHandler.apply(this,[this,Pe.ERROR].concat(e(l)(n)))}}]),t}();a=i("bpxeT");var qe={};Object.defineProperty(qe,"__esModule",{value:!0}),qe.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){je.default(e,t,n[t])}))}return e};var je=function(e){return e&&e.__esModule?e:{default:e}}(i("hKHmD"));var We,Ve;y=i("2TvXO");var He=new WeakMap,ze=new WeakMap,Be=new WeakMap,Ke=new WeakMap,Ge=new WeakMap;var Ye={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return ze.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Be.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xe(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function Je(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ve||(Ve=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply($e(this),n),Xe(He.get(this))}:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Xe(t.apply($e(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var o,s=(o=t).call.apply(o,[$e(this),n].concat(e(l)(i)));return Be.set(s,n.sort?n.sort():[n]),Xe(s)}}function Qe(e){return"function"==typeof e?Je(e):(e instanceof IDBTransaction&&function(e){if(!ze.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));ze.set(e,t)}}(e),t=e,(We||(We=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,Ye):e);var t}function Xe(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(Xe(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&He.set(e,t)})).catch((function(){})),Ge.set(n,t),n;var t,n;if(Ke.has(e))return Ke.get(e);var r=Qe(e);return r!==e&&(Ke.set(e,r),Ge.set(r,e)),r}var $e=function(e){return Ge.get(e)};function Ze(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=Xe(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(Xe(s.result),e.oldVersion,e.newVersion,Xe(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var et=["get","getKey","getAll","getAllKeys","count"],tt=["put","add","delete","clear"],nt=new Map;function rt(t,n){if(t instanceof IDBDatabase&&!(n in t)&&"string"==typeof n){if(nt.get(n))return nt.get(n);var r=n.replace(/FromIndex$/,""),i=n!==r,o=tt.includes(r);if(r in(i?IDBIndex:IDBObjectStore).prototype&&(o||et.includes(r))){var s,u=(s=e(a)(e(y).mark((function t(n){var a,s,u,c,h,d,f=arguments;return e(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=f.length,s=new Array(a>1?a-1:0),u=1;u<a;u++)s[u-1]=f[u];return h=this.transaction(n,o?"readwrite":"readonly"),d=h.store,i&&(d=d.index(s.shift())),t.next=7,Promise.all([(c=d)[r].apply(c,e(l)(s)),o&&h.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return s.apply(this,arguments)});return nt.set(n,u),u}}}Ye=function(t){return e(qe)({},t,{get:function(e,n,r){return rt(e,n)||t.get(e,n,r)},has:function(e,n){return!!rt(e,n)||t.has(e,n)}})}(Ye);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var it=function(){"use strict";function t(n){e(o)(this,t),this.container=n}return e(s)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var at,ot,st="@firebase/app",ut="0.7.33",ct=new Ue("@firebase/app"),lt="[DEFAULT]",ht=(at={},e(c)(at,st,"fire-core"),e(c)(at,"@firebase/app-compat","fire-core-compat"),e(c)(at,"@firebase/analytics","fire-analytics"),e(c)(at,"@firebase/analytics-compat","fire-analytics-compat"),e(c)(at,"@firebase/app-check","fire-app-check"),e(c)(at,"@firebase/app-check-compat","fire-app-check-compat"),e(c)(at,"@firebase/auth","fire-auth"),e(c)(at,"@firebase/auth-compat","fire-auth-compat"),e(c)(at,"@firebase/database","fire-rtdb"),e(c)(at,"@firebase/database-compat","fire-rtdb-compat"),e(c)(at,"@firebase/functions","fire-fn"),e(c)(at,"@firebase/functions-compat","fire-fn-compat"),e(c)(at,"@firebase/installations","fire-iid"),e(c)(at,"@firebase/installations-compat","fire-iid-compat"),e(c)(at,"@firebase/messaging","fire-fcm"),e(c)(at,"@firebase/messaging-compat","fire-fcm-compat"),e(c)(at,"@firebase/performance","fire-perf"),e(c)(at,"@firebase/performance-compat","fire-perf-compat"),e(c)(at,"@firebase/remote-config","fire-rc"),e(c)(at,"@firebase/remote-config-compat","fire-rc-compat"),e(c)(at,"@firebase/storage","fire-gcs"),e(c)(at,"@firebase/storage-compat","fire-gcs-compat"),e(c)(at,"@firebase/firestore","fire-fst"),e(c)(at,"@firebase/firestore-compat","fire-fst-compat"),e(c)(at,"fire-js","fire-js"),e(c)(at,"firebase","fire-js-all"),at),dt=new Map,ft=new Map;function vt(e,t){try{e.container.addComponent(t)}catch(n){ct.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function pt(e){var t=e.name;if(ft.has(t))return ct.debug("There were multiple attempts to register component ".concat(t,".")),!1;ft.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=dt.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){vt(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function yt(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _t=(ot={},e(c)(ot,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e(c)(ot,"bad-app-name","Illegal App name: '{$appName}"),e(c)(ot,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(c)(ot,"app-deleted","Firebase App named '{$appName}' already deleted"),e(c)(ot,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(c)(ot,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(c)(ot,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e(c)(ot,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e(c)(ot,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e(c)(ot,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),ot),mt=new re("app","Firebase",_t),gt=function(){"use strict";function t(n,r,i){var a=this;e(o)(this,t),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new xe("app",(function(){return a}),"PUBLIC"))}return e(s)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw mt.create("app-deleted",{appName:this._name})}}]),t}(),kt="9.10.0";function bt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"!=typeof t){var n=t;t={name:n}}var r=Object.assign({name:lt,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw mt.create("bad-app-name",{appName:String(i)});var a=dt.get(i);if(a){if(ve(e,a.options)&&ve(r,a.config))return a;throw mt.create("duplicate-app",{appName:i})}var o=new Re(i),s=!0,u=!1,c=void 0;try{for(var l,h=ft.values()[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var d=l.value;o.addComponent(d)}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}var f=new gt(e,r,o);return dt.set(i,f),f}function wt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=dt.get(e);if(!t)throw mt.create("no-app",{appName:e});return t}function It(e,t,n){var r,i=null!==(r=ht[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void ct.warn(s.join(" "))}pt(new xe("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ct="firebase-heartbeat-store",Tt=null;function xt(){return Tt||(Tt=Ze("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(Ct)}}).catch((function(e){throw mt.create("idb-open",{originalErrorMessage:e.message})}))),Tt}function Et(e){return St.apply(this,arguments)}function St(){return(St=e(a)(e(y).mark((function t(n){var r,i,a;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,xt();case 4:return i=e.sent,e.abrupt("return",i.transaction(Ct).objectStore(Ct).get(Rt(n)));case 8:e.prev=8,e.t0=e.catch(1),e.t0 instanceof ne?ct.warn(e.t0.message):(a=mt.create("idb-get",{originalErrorMessage:null===(r=e.t0)||void 0===r?void 0:r.message}),ct.warn(a.message));case 11:case"end":return e.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function Pt(e,t){return Nt.apply(this,arguments)}function Nt(){return(Nt=e(a)(e(y).mark((function t(n,r){var i,a,o,s,u;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,xt();case 4:return a=e.sent,o=a.transaction(Ct,"readwrite"),s=o.objectStore(Ct),e.next=9,s.put(r,Rt(n));case 9:return e.abrupt("return",o.done);case 12:e.prev=12,e.t0=e.catch(1),e.t0 instanceof ne?ct.warn(e.t0.message):(u=mt.create("idb-set",{originalErrorMessage:null===(i=e.t0)||void 0===i?void 0:i.message}),ct.warn(u.message));case 15:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function Rt(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ot=function(){"use strict";function t(n){var r=this;e(o)(this,t),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new Mt(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return e(s)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(a)(e(y).mark((function n(){var r,i,a;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),a=At(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==a&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(a)(e(y).mark((function n(){var r,i,a,o,s;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(r=At(),i=Dt(t._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,s=G(JSON.stringify({version:2,heartbeats:a})),t._heartbeatsCache.lastSentHeartbeatDate=r,!(o.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=o,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",s);case 17:case"end":return e.stop()}}),n)})))()}}]),t}();function At(){return(new Date).toISOString().substring(0,10)}function Dt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=n.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),Ft(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:a.agent,dates:[a.date]}),Ft(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var Lt,Mt=function(){"use strict";function t(n){e(o)(this,t),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(s)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(a)(e(y).mark((function t(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("object"==typeof indexedDB){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(a)(e(y).mark((function n(){var r;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,Et(t.app);case 9:return r=e.sent,e.abrupt("return",r||{heartbeats:[]});case 11:case"end":return e.stop()}}),n)})))()}},{key:"overwrite",value:function(t){var n=this;return e(a)(e(y).mark((function r(){var i,a;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,n.read();case 10:return a=e.sent,e.abrupt("return",Pt(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),r)})))()}},{key:"add",value:function(t){var n=this;return e(a)(e(y).mark((function r(){var i,a;return e(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return a=r.sent,r.abrupt("return",Pt(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e(l)(a.heartbeats).concat(e(l)(t.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),t}();function Ft(e){return G(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt="",pt(new xe("platform-logger",(function(e){return new it(e)}),"PRIVATE")),pt(new xe("heartbeat",(function(e){return new Ot(e)}),"PRIVATE")),It(st,ut,Lt),It(st,ut,"esm2017"),It("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
It("firebase","9.10.0","app");I=i("ds8z5"),a=i("bpxeT"),c=i("hKHmD");var Ut={};Object.defineProperty(Ut,"__esModule",{value:!0}),Ut.default=function(e,t,n){return jt(e,t,n)};var qt=function(e){return e&&e.__esModule?e:{default:e}}(i("2mz0K"));function jt(e,t,n){return(jt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=qt.default(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}})(e,t,n)}var Wt=i("fVNic");y=i("2TvXO");function Vt(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function Ht(){return e(c)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var zt=Ht,Bt=new re("auth","Firebase",Ht()),Kt=new Ue("@firebase/auth");function Gt(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;Kt.logLevel<=Pe.ERROR&&(a=Kt).error.apply(a,["Auth (".concat(kt,"): ").concat(t)].concat(e(l)(r)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw Xt.apply(void 0,[t].concat(e(l)(r)))}function Jt(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return Xt.apply(void 0,[t].concat(e(l)(r)))}function Qt(t,n,r){var i=Object.assign(Object.assign({},zt()),e(c)({},n,r));return new re("auth","Firebase",i).create(n,{appName:t.name})}function Xt(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;if("string"!=typeof t){var o,s=r[0],u=e(l)(r.slice(1));return u[0]&&(u[0].appName=t.name),(o=t._errorFactory).create.apply(o,[s].concat(e(l)(u)))}return(a=Bt).create.apply(a,[t].concat(e(l)(r)))}function $t(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(!t)throw Xt.apply(void 0,[n].concat(e(l)(i)))}function Zt(e){var t="INTERNAL ASSERTION FAILED: "+e;throw Gt(t),new Error(t)}function en(e,t){e||Zt(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tn=new Map;function nn(e){en(e instanceof Function,"Expected a class definition");var t=tn.get(e);return t?(en(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,tn.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(e,t){var n=yt(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(ve(n.getOptions(),null!=t?t:{}))return r;Yt(r,"already-initialized")}return n.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function an(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function on(){return"http:"===sn()||"https:"===sn()}function sn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!on()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var cn=function(){"use strict";function t(n,r){e(o)(this,t),this.shortDelay=n,this.longDelay=r,en(r>n,"Short delay should be less than long delay!"),this.isMobile=Z()||ee()}return e(s)(t,[{key:"get",value:function(){return un()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(e,t){en(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hn,dn=function(){"use strict";function t(){e(o)(this,t)}return e(s)(t,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),fn=(hn={},e(c)(hn,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(c)(hn,"MISSING_CUSTOM_TOKEN","internal-error"),e(c)(hn,"INVALID_IDENTIFIER","invalid-email"),e(c)(hn,"MISSING_CONTINUE_URI","internal-error"),e(c)(hn,"INVALID_PASSWORD","wrong-password"),e(c)(hn,"MISSING_PASSWORD","internal-error"),e(c)(hn,"EMAIL_EXISTS","email-already-in-use"),e(c)(hn,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(c)(hn,"INVALID_IDP_RESPONSE","invalid-credential"),e(c)(hn,"INVALID_PENDING_TOKEN","invalid-credential"),e(c)(hn,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(c)(hn,"MISSING_REQ_TYPE","internal-error"),e(c)(hn,"EMAIL_NOT_FOUND","user-not-found"),e(c)(hn,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(c)(hn,"EXPIRED_OOB_CODE","expired-action-code"),e(c)(hn,"INVALID_OOB_CODE","invalid-action-code"),e(c)(hn,"MISSING_OOB_CODE","internal-error"),e(c)(hn,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(c)(hn,"INVALID_ID_TOKEN","invalid-user-token"),e(c)(hn,"TOKEN_EXPIRED","user-token-expired"),e(c)(hn,"USER_NOT_FOUND","user-token-expired"),e(c)(hn,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(c)(hn,"INVALID_CODE","invalid-verification-code"),e(c)(hn,"INVALID_SESSION_INFO","invalid-verification-id"),e(c)(hn,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(c)(hn,"MISSING_SESSION_INFO","missing-verification-id"),e(c)(hn,"SESSION_EXPIRED","code-expired"),e(c)(hn,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(c)(hn,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(c)(hn,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(c)(hn,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(c)(hn,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(c)(hn,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(c)(hn,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(c)(hn,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(c)(hn,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(c)(hn,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(c)(hn,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),hn),vn=new cn(3e4,6e4);function pn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function yn(e,t,n,r){return _n.apply(this,arguments)}function _n(){return _n=e(a)(e(y).mark((function t(n,r,i,o){var s,u=arguments;return e(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=u.length>4&&void 0!==u[4]?u[4]:{},t.abrupt("return",mn(n,s,e(a)(e(y).mark((function t(){var a,s,u,c;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},s={},o&&("GET"===r?s=o:a={body:JSON.stringify(o)}),u=ye(Object.assign({key:n.config.apiKey},s)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(c=e.sent)["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",dn.fetch()(wn(n,n.config.apiHost,i,u),Object.assign({method:r,headers:c,referrerPolicy:"no-referrer"},a)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),_n.apply(this,arguments)}function mn(e,t,n){return gn.apply(this,arguments)}function gn(){return(gn=e(a)(e(y).mark((function t(n,r,i){var a,o,s,u,c,l,h,d,f;return e(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n._canInitEmulator=!1,a=Object.assign(Object.assign({},fn),r),t.prev=2,o=new In(n),t.next=6,Promise.race([i(),o.promise]);case 6:return s=t.sent,o.clearNetworkTimeout(),t.next=10,s.json();case 10:if(!("needConfirmation"in(u=t.sent))){t.next=13;break}throw Cn(n,"account-exists-with-different-credential",u);case 13:if(!s.ok||"errorMessage"in u){t.next=17;break}return t.abrupt("return",u);case 17:if(c=s.ok?u.errorMessage:u.error.message,l=e(_)(c.split(" : "),2),h=l[0],d=l[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==h){t.next=23;break}throw Cn(n,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==h){t.next=27;break}throw Cn(n,"email-already-in-use",u);case 27:if("USER_DISABLED"!==h){t.next=29;break}throw Cn(n,"user-disabled",u);case 29:if(f=a[h]||h.toLowerCase().replace(/[_\s]+/g,"-"),!d){t.next=34;break}throw Qt(n,f,d);case 34:Yt(n,f);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof ne)){t.next=41;break}throw t.t0;case 41:Yt(n,"network-request-failed");case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function kn(e,t,n,r){return bn.apply(this,arguments)}function bn(){return bn=e(a)(e(y).mark((function t(n,r,i,a){var o,s,u=arguments;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,yn(n,r,i,a,o);case 3:return"mfaPendingCredential"in(s=e.sent)&&Yt(n,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),t)}))),bn.apply(this,arguments)}function wn(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?ln(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var In=function(){"use strict";function t(n){var r=this;e(o)(this,t),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(Jt(n.auth,"network-request-failed"))}),vn.get())}))}return e(s)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function Cn(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=Jt(e,t,r);return i.customData._tokenResponse=n,i}function Tn(e,t){return xn.apply(this,arguments)}function xn(){return(xn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",yn(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function En(e,t){return Sn.apply(this,arguments)}function Sn(){return(Sn=e(a)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",yn(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(){return Nn=e(a)(e(y).mark((function t(n){var r,i,a,o,s,u,c=arguments;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]&&c[1],i=Te(n),e.next=4,i.getIdToken(r);case 4:return a=e.sent,$t((o=On(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),s="object"==typeof o.firebase?o.firebase:void 0,u=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:Pn(Rn(o.auth_time)),issuedAtTime:Pn(Rn(o.iat)),expirationTime:Pn(Rn(o.exp)),signInProvider:u||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),Nn.apply(this,arguments)}function Rn(e){return 1e3*Number(e)}function On(t){var n,r=e(_)(t.split("."),3),i=r[0],a=r[1],o=r[2];if(void 0===i||void 0===a||void 0===o)return Gt("JWT malformed, contained fewer than 3 sections"),null;try{var s=Y(a);return s?JSON.parse(s):(Gt("Failed to decode base64 JWT payload"),null)}catch(e){return Gt("Caught error parsing JWT payload as JSON",null===(n=e)||void 0===n?void 0:n.toString()),null}}function An(e,t){return Dn.apply(this,arguments)}function Dn(){return Dn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(y).mark((function t(n,r){var i=arguments;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof ne&&Ln(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),Dn.apply(this,arguments)}function Ln(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mn=function(){"use strict";function t(n){e(o)(this,t),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(s)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(t),r=this;this.timerId=setTimeout(e(a)(e(y).mark((function t(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),t)}))),n)}}},{key:"iteration",value:function(){var t=this;return e(a)(e(y).mark((function n(){var r;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,t.user.getIdToken(!0);case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(1),"auth/network-request-failed"===(null===(r=e.t0)||void 0===r?void 0:r.code)&&t.schedule(!0),e.abrupt("return");case 10:t.schedule();case 11:case"end":return e.stop()}}),n,null,[[1,6]])})))()}}]),t}(),Fn=function(){"use strict";function t(n,r){e(o)(this,t),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return e(s)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=Pn(this.lastLoginAt),this.creationTime=Pn(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(e){return qn.apply(this,arguments)}function qn(){return(qn=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(y).mark((function t(n){var r,i,a,o,s,u,c,l,h,d,f;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return a=e.sent,e.next=7,An(n,En(i,{idToken:a}));case 7:$t(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),s=o.users[0],n._notifyReloadListener(s),u=(null===(r=s.providerUserInfo)||void 0===r?void 0:r.length)?Vn(s.providerUserInfo):[],c=Wn(n.providerData,u),l=n.isAnonymous,h=!(n.email&&s.passwordHash||(null==c?void 0:c.length)),d=!!l&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Fn(s.createdAt,s.lastLoginAt),isAnonymous:d},Object.assign(n,f);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function jn(){return(jn=e(a)(e(y).mark((function t(n){var r;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Te(n),e.next=3,Un(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Wn(t,n){var r=t.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return e(l)(r).concat(e(l)(n))}function Vn(e){return e.map((function(e){var t=e.providerId,n=Vt(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function Hn(e,t){return zn.apply(this,arguments)}function zn(){return(zn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(y).mark((function t(n,r){var i;return e(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,mn(n,{},e(a)(e(y).mark((function t(){var i,a,o,s,u,c;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=ye({grant_type:"refresh_token",refresh_token:r}).slice(1),a=n.config,o=a.tokenApiHost,s=a.apiKey,u=wn(n,o,"/v1/token","key=".concat(s)),e.next=5,n._getAdditionalHeaders();case 5:return(c=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",dn.fetch()(u,{method:"POST",headers:c,body:i}));case 8:case"end":return e.stop()}}),t)}))));case 2:return i=t.sent,t.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bn=function(){"use strict";function t(){e(o)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(s)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){$t(e.idToken,"internal-error"),$t(void 0!==e.idToken,"internal-error"),$t(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,$t(n=On(t),"internal-error"),$t(void 0!==n.exp,"internal-error"),$t(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(y).mark((function i(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if($t(!r.accessToken||r.refreshToken,t,"user-token-expired"),n||!r.accessToken||r.isExpired){e.next=3;break}return e.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){e.next=7;break}return e.next=6,r.refresh(t,r.refreshToken);case 6:return e.abrupt("return",r.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,n){var r=this;return e(a)(e(y).mark((function i(){var a,o,s,u;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Hn(t,n);case 2:a=e.sent,o=a.accessToken,s=a.refreshToken,u=a.expiresIn,r.updateTokensAndExpiration(o,s,Number(u));case 7:case"end":return e.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return Zt("not implemented")}}],[{key:"fromJSON",value:function(e,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,o=new t;return r&&($t("string"==typeof r,"internal-error",{appName:e}),o.refreshToken=r),i&&($t("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),a&&($t("number"==typeof a,"internal-error",{appName:e}),o.expirationTime=a),o}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(e,t){$t("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Gn=function(){"use strict";function t(n){e(o)(this,t);var r=n.uid,i=n.auth,a=n.stsTokenManager,s=Vt(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Mn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?e(l)(s.providerData):[],this.metadata=new Fn(s.createdAt||void 0,s.lastLoginAt||void 0)}return e(s)(t,[{key:"getIdToken",value:function(t){var n=this;return e(a)(e(y).mark((function r(){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,An(n,n.stsTokenManager.getToken(n.auth,t));case 2:if($t(i=e.sent,n.auth,"internal-error"),n.accessToken===i){e.next=9;break}return n.accessToken=i,e.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return Nn.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return jn.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&($t(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){return new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){$t(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(y).mark((function i(){var a;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!1,t.idToken&&t.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(t),a=!0),!n){e.next=5;break}return e.next=5,Un(r);case 5:return e.next=7,r.auth._persistUserIfCurrent(r);case 7:a&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return e.stop()}}),i)})))()}},{key:"delete",value:function(){var t=this;return e(a)(e(y).mark((function n(){var r;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return r=e.sent,e.next=5,An(t,Tn(t.auth,{idToken:r}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,n){var r,i,a,o,s,u,c,l,h=null!==(r=n.displayName)&&void 0!==r?r:void 0,d=null!==(i=n.email)&&void 0!==i?i:void 0,f=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,v=null!==(o=n.photoURL)&&void 0!==o?o:void 0,p=null!==(s=n.tenantId)&&void 0!==s?s:void 0,y=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,_=null!==(c=n.createdAt)&&void 0!==c?c:void 0,m=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,g=n.uid,k=n.emailVerified,b=n.isAnonymous,w=n.providerData,I=n.stsTokenManager;$t(g&&I,e,"internal-error");var C=Bn.fromJSON(this.name,I);$t("string"==typeof g,e,"internal-error"),Kn(h,e.name),Kn(d,e.name),$t("boolean"==typeof k,e,"internal-error"),$t("boolean"==typeof b,e,"internal-error"),Kn(f,e.name),Kn(v,e.name),Kn(p,e.name),Kn(y,e.name),Kn(_,e.name),Kn(m,e.name);var T=new t({uid:g,auth:e,email:d,emailVerified:k,displayName:h,isAnonymous:b,photoURL:v,phoneNumber:f,tenantId:p,stsTokenManager:C,createdAt:_,lastLoginAt:m});return w&&Array.isArray(w)&&(T.providerData=w.map((function(e){return Object.assign({},e)}))),y&&(T._redirectEventId=y),T}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(a)(e(y).mark((function a(){var o,s;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new Bn).updateFromServerResponse(r),s=new t({uid:r.localId,auth:n,stsTokenManager:o,isAnonymous:i}),e.next=5,Un(s);case 5:return e.abrupt("return",s);case 6:case"end":return e.stop()}}),a)})))()}}]),t}(),Yn=function(){"use strict";function t(){e(o)(this,t),this.type="NONE",this.storage={}}return e(s)(t,[{key:"_isAvailable",value:function(){return e(a)(e(y).mark((function t(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,n){var r=this;return e(a)(e(y).mark((function i(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.storage[t]=n;case 1:case"end":return e.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(a)(e(y).mark((function r(){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.storage[t],e.abrupt("return",void 0===i?null:i);case 2:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(a)(e(y).mark((function r(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete n.storage[t];case 1:case"end":return e.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yn.type="NONE";var Jn=Yn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var Xn=function(){"use strict";function t(n,r,i){e(o)(this,t),this.persistence=n,this.auth=r,this.userKey=i;var a=this.auth,s=a.config,u=a.name;this.fullUserKey=Qn(this.userKey,s.apiKey,u),this.fullPersistenceKey=Qn("persistence",s.apiKey,u),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(s)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(a)(e(y).mark((function n(){var r;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return r=e.sent,e.abrupt("return",r?Gn._fromJSON(t.auth,r):null);case 4:case"end":return e.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var n=this;return e(a)(e(y).mark((function r(){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.getCurrentUser();case 4:return i=e.sent,e.next=7,n.removeCurrentUser();case 7:if(n.persistence=t,!i){e.next=10;break}return e.abrupt("return",n.setCurrentUser(i));case 10:case"end":return e.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(a)(e(y).mark((function o(){var s,u,c,l,h,d,f,v,p,_,m,g,k;return e(y).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(r.length){o.next=2;break}return o.abrupt("return",new t(nn(Jn),n,i));case 2:return o.next=4,Promise.all(r.map(function(){var t=e(a)(e(y).mark((function t(n){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:s=o.sent.filter((function(e){return e})),u=s[0]||nn(Jn),c=Qn(i,n.config.apiKey,n.name),l=null,h=!0,d=!1,f=void 0,o.prev=9,v=r[Symbol.iterator]();case 11:if(h=(p=v.next()).done){o.next=29;break}return _=p.value,o.prev=13,o.next=16,_._get(c);case 16:if(!(m=o.sent)){o.next=22;break}return g=Gn._fromJSON(n,m),_!==u&&(l=g),u=_,o.abrupt("break",29);case 22:o.next=26;break;case 24:o.prev=24,o.t0=o.catch(13);case 26:h=!0,o.next=11;break;case 29:o.next=35;break;case 31:o.prev=31,o.t1=o.catch(9),d=!0,f=o.t1;case 35:o.prev=35,o.prev=36,h||null==v.return||v.return();case 38:if(o.prev=38,!d){o.next=41;break}throw f;case 41:return o.finish(38);case 42:return o.finish(35);case 43:if(k=s.filter((function(e){return e._shouldAllowMigration})),u._shouldAllowMigration&&k.length){o.next=46;break}return o.abrupt("return",new t(u,n,i));case 46:if(u=k[0],!l){o.next=50;break}return o.next=50,u._set(c,l.toJSON());case 50:return o.next=52,Promise.all(r.map(function(){var t=e(a)(e(y).mark((function t(n){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===u){e.next=8;break}return e.prev=1,e.next=4,n._remove(c);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return o.abrupt("return",new t(u,n,i));case 53:case"end":return o.stop()}}),o,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(nr(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Zn(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ir(t))return"Blackberry";if(ar(t))return"Webos";if(er(t))return"Safari";if((t.includes("chrome/")||tr(t))&&!t.includes("edge/"))return"Chrome";if(rr(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function Zn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$();return/firefox\//i.test(e)}function er(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function tr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$();return/crios\//i.test(e)}function nr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$();return/iemobile/i.test(e)}function rr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$();return/android/i.test(e)}function ir(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$();return/blackberry/i.test(e)}function ar(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$();return/webos/i.test(e)}function or(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function sr(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$();return or(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function ur(){return((e=$()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function cr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$();return or(e)||rr(e)||ar(e)||ir(e)||/windows phone/i.test(e)||nr(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lr(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=$n($());break;case"Worker":t="".concat($n($()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(kt,"/").concat(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hr=function(){"use strict";function t(n){e(o)(this,t),this.auth=n,this.queue=[]}return e(s)(t,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var n=this;return e(a)(e(y).mark((function r(){var i,a,o,s,u,c,l,h,d,f,v,p,_,m;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.auth.currentUser!==t){e.next=3;break}return e.abrupt("return");case 3:a=[],e.prev=4,o=!0,s=!1,u=void 0,e.prev=6,c=n.queue[Symbol.iterator]();case 8:if(o=(l=c.next()).done){e.next=16;break}return h=l.value,e.next=12,h(t);case 12:h.onAbort&&a.push(h.onAbort);case 13:o=!0,e.next=8;break;case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(6),s=!0,u=e.t0;case 22:e.prev=22,e.prev=23,o||null==c.return||c.return();case 25:if(e.prev=25,!s){e.next=28;break}throw u;case 28:return e.finish(25);case 29:return e.finish(22);case 30:e.next=53;break;case 32:for(e.prev=32,e.t1=e.catch(4),a.reverse(),d=!0,f=!1,v=void 0,e.prev=36,p=a[Symbol.iterator]();!(d=(_=p.next()).done);d=!0){m=_.value;try{m()}catch(e){}}e.next=44;break;case 40:e.prev=40,e.t2=e.catch(36),f=!0,v=e.t2;case 44:e.prev=44,e.prev=45,d||null==p.return||p.return();case 47:if(e.prev=47,!f){e.next=50;break}throw v;case 50:return e.finish(47);case 51:return e.finish(44);case 52:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===(i=e.t1)||void 0===i?void 0:i.message});case 53:case"end":return e.stop()}}),r,null,[[4,32],[6,18,22,30],[23,,25,29],[36,40,44,52],[45,,47,51]])})))()}}]),t}(),dr=function(){"use strict";function t(n,r,i){e(o)(this,t),this.app=n,this.heartbeatServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vr(this),this.idTokenSubscription=new vr(this),this.beforeStateQueue=new hr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bt,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=i.sdkClientVersion}return e(s)(t,[{key:"_initializeWithPersistence",value:function(t,n){n&&(this._popupRedirectResolver=nn(n));var r=this;return this._initializationPromise=this.queue(e(a)(e(y).mark((function i(){var a,o;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,Xn.create(r,t);case 5:if(r.persistenceManager=e.sent,!r._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(a=r._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,r._popupRedirectResolver._initialize(r);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(o=r.currentUser)||void 0===o?void 0:o.uid)||null,!r._deleted){e.next=21;break}return e.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return e.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(a)(e(y).mark((function n(){var r;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(r=e.sent,t.currentUser||r){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!r||t.currentUser.uid!==r.uid){e.next=12;break}return t._currentUser._assign(r),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(r,!0);case 14:case"end":return e.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(t){var n=this;return e(a)(e(y).mark((function r(){var i,a,o,s,u,c,l;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n.assertedPersistence.getCurrentUser();case 3:if(a=e.sent,o=a,s=!1,!t||!n.config.authDomain){e.next=15;break}return e.next=9,n.getOrInitRedirectPersistenceManager();case 9:return u=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,c=null==o?void 0:o._redirectEventId,e.next=13,n.tryRedirectSignIn(t);case 13:l=e.sent,u&&u!==c||!(null==l?void 0:l.user)||(o=l.user,s=!0);case 15:if(o){e.next=17;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 17:if(o._redirectEventId){e.next=33;break}if(!s){e.next=28;break}return e.prev=19,e.next=22,n.beforeStateQueue.runMiddleware(o);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),o=a,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(e.t0)}));case 28:if(!o){e.next=32;break}return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 32:return e.abrupt("return",n.directlySetCurrentUser(null));case 33:return $t(n._popupRedirectResolver,n,"argument-error"),e.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==o._redirectEventId){e.next=38;break}return e.abrupt("return",n.directlySetCurrentUser(o));case 38:return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return e.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var n=this;return e(a)(e(y).mark((function r(){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null,e.prev=1,e.next=4,n._popupRedirectResolver._completeRedirectFn(n,t,!0);case 4:i=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,n._setRedirectUser(null);case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var n=this;return e(a)(e(y).mark((function r(){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Un(t);case 4:e.next=10;break;case 6:if(e.prev=6,e.t0=e.catch(1),"auth/network-request-failed"===(null===(i=e.t0)||void 0===i?void 0:i.code)){e.next=10;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 10:return e.abrupt("return",n.directlySetCurrentUser(t));case 11:case"end":return e.stop()}}),r,null,[[1,6]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(a)(e(y).mark((function n(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(t){var n=this;return e(a)(e(y).mark((function r(){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t?Te(t):null)&&$t(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),e.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return e.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(y).mark((function i(){return e(y).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(t&&$t(r.tenantId===t.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(t);case 6:return i.abrupt("return",r.queue(e(a)(e(y).mark((function n(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.directlySetCurrentUser(t);case 2:r.notifyAuthListeners();case 3:case"end":return e.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var t=this;return e(a)(e(y).mark((function n(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),n)})))()}},{key:"setPersistence",value:function(t){var n=this;return this.queue(e(a)(e(y).mark((function r(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.assertedPersistence.setPersistence(nn(t));case 2:case"end":return e.stop()}}),r)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new re("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,n){var r=this;return e(a)(e(y).mark((function i(){var a;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return a=e.sent,e.abrupt("return",null===t?a.removeCurrentUser():a.setCurrentUser(t));case 4:case"end":return e.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var n=this;return e(a)(e(y).mark((function r(){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.redirectPersistenceManager){e.next=9;break}return $t(i=t&&nn(t)||n._popupRedirectResolver,n,"argument-error"),e.next=5,Xn.create(n,[nn(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=e.sent,e.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=e.sent;case 9:return e.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return e.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(t){var n=this;return e(a)(e(y).mark((function r(){var i,o;return e(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(e(a)(e(y).mark((function t(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==t){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(o=n.redirectUser)||void 0===o?void 0:o._redirectEventId)!==t){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(t){var n=this;return e(a)(e(y).mark((function r(){return e(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(e(a)(e(y).mark((function r(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $t(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var n=this;return e(a)(e(y).mark((function r(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.currentUser&&n.currentUser!==t&&n._currentUser._stopProactiveRefresh(),t&&n.isProactiveRefreshEnabled&&t._startProactiveRefresh(),n.currentUser=t,!t){e.next=8;break}return e.next=6,n.assertedPersistence.setCurrentUser(t);case 6:e.next=10;break;case 8:return e.next=10,n.assertedPersistence.removeCurrentUser();case 10:case"end":return e.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return $t(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lr(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(a)(e(y).mark((function n(){var r,i,a;return e(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e(c)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(i["X-Firebase-gmpid"]=t.app.options.appId),n.next=5,null===(r=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(a=n.sent)&&(i["X-Firebase-Client"]=a),n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(e){return Te(e)}var vr=function(){"use strict";function t(n){var r,i,a=this;e(o)(this,t),this.auth=n,this.observer=null,this.addObserver=(i=new ke((function(e){return a.observer=e}),r)).subscribe.bind(i)}return e(s)(t,[{key:"next",get:function(){return $t(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var pr=function(){"use strict";function t(n,r){e(o)(this,t),this.providerId=n,this.signInMethod=r}return e(s)(t,[{key:"toJSON",value:function(){return Zt("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return Zt("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return Zt("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return Zt("not implemented")}}]),t}();function yr(e,t){return _r.apply(this,arguments)}function _r(){return(_r=e(a)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",yn(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function mr(e,t){return gr.apply(this,arguments)}function gr(){return(gr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",kn(n,"POST","/v1/accounts:signInWithPassword",pn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function kr(e,t){return br.apply(this,arguments)}function br(){return(br=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",kn(n,"POST","/v1/accounts:signInWithEmailLink",pn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function wr(e,t){return Ir.apply(this,arguments)}function Ir(){return(Ir=e(a)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",kn(n,"POST","/v1/accounts:signInWithEmailLink",pn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cr=function(t){"use strict";e(C)(r,t);var n=e(D)(r);function r(t,i,a){var s,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(o)(this,r),(s=n.call(this,"password",a))._email=t,s._password=i,s._tenantId=u,s}return e(s)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var n=this;return e(a)(e(y).mark((function r(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",mr(t,{returnSecureToken:!0,email:n._email,password:n._password}));case 4:return e.abrupt("return",kr(t,{email:n._email,oobCode:n._password}));case 5:Yt(t,"internal-error");case 6:case"end":return e.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(t,n){var r=this;return e(a)(e(y).mark((function i(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",yr(t,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",wr(t,{idToken:n,email:r._email,oobCode:r._password}));case 5:Yt(t,"internal-error");case 6:case"end":return e.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(pr);function Tr(e,t){return xr.apply(this,arguments)}function xr(){return(xr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",kn(n,"POST","/v1/accounts:signInWithIdp",pn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Er=function(t){"use strict";e(C)(r,t);var n=e(D)(r);function r(){var t;return e(o)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(s)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return Tr(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,Tr(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,Tr(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ye(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Yt("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,a=Vt(t,["providerId","signInMethod"]);if(!n||!i)return null;var o=new r(n,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),r}(pr);function Sr(e,t){return Pr.apply(this,arguments)}function Pr(){return(Pr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",yn(n,"POST","/v1/accounts:sendVerificationCode",pn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Nr(){return(Nr=e(a)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",kn(n,"POST","/v1/accounts:signInWithPhoneNumber",pn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Rr(){return(Rr=e(a)(e(y).mark((function t(n,r){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,kn(n,"POST","/v1/accounts:signInWithPhoneNumber",pn(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw Cn(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var Or=e(c)({},"USER_NOT_FOUND","user-not-found");function Ar(){return(Ar=e(a)(e(y).mark((function t(n,r){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",kn(n,"POST","/v1/accounts:signInWithPhoneNumber",pn(n,i),Or));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dr=function(t){"use strict";e(C)(r,t);var n=e(D)(r);function r(t){var i;return e(o)(this,r),(i=n.call(this,"phone","phone")).params=t,i}return e(s)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return Nr.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return Rr.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return Ar.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return n||t||i||a?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a}):null}}]),r}(pr);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lr=function(){"use strict";function t(n){var r,i,a,s,u,c;e(o)(this,t);var l=_e(me(n)),h=null!==(r=l.apiKey)&&void 0!==r?r:null,d=null!==(i=l.oobCode)&&void 0!==i?i:null,f=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=l.mode)&&void 0!==a?a:null);$t(h&&d&&f,"argument-error"),this.apiKey=h,this.operation=f,this.code=d,this.continueUrl=null!==(s=l.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(u=l.languageCode)&&void 0!==u?u:null,this.tenantId=null!==(c=l.tenantId)&&void 0!==c?c:null}return e(s)(t,null,[{key:"parseLink",value:function(e){var n=function(e){var t=_e(me(e)).link,n=t?_e(me(t)).deep_link_id:null,r=_e(me(e)).deep_link_id;return(r?_e(me(r)).link:null)||r||n||t||e}(e);try{return new t(n)}catch(e){return null}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Mr=function(){"use strict";function t(){e(o)(this,t),this.providerId=t.PROVIDER_ID}return e(s)(t,null,[{key:"credential",value:function(e,t){return Cr._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=Lr.parseLink(t);return $t(n,"argument-error"),Cr._fromEmailAndCode(e,n.code,n.tenantId)}}]),t}();Mr.PROVIDER_ID="password",Mr.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Mr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Fr=function(){"use strict";function t(n){e(o)(this,t),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return e(s)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),Ur=function(t){"use strict";e(C)(r,t);var n=e(D)(r);function r(){var t;return e(o)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(s)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(l)(this.scopes)}}]),r}(Fr),qr=function(t){"use strict";e(C)(r,t);var n=e(D)(r);function r(){return e(o)(this,r),n.call(this,"facebook.com")}return e(s)(r,null,[{key:"credential",value:function(e){return Er._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(Ur);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qr.FACEBOOK_SIGN_IN_METHOD="facebook.com",qr.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var jr=function(t){"use strict";e(C)(r,t);var n=e(D)(r);function r(){var t;return e(o)(this,r),(t=n.call(this,"google.com")).addScope("profile"),t}return e(s)(r,null,[{key:"credential",value:function(e,t){return Er._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(Ur);jr.GOOGLE_SIGN_IN_METHOD="google.com",jr.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Wr=function(t){"use strict";e(C)(r,t);var n=e(D)(r);function r(){return e(o)(this,r),n.call(this,"github.com")}return e(s)(r,null,[{key:"credential",value:function(e){return Er._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(Ur);Wr.GITHUB_SIGN_IN_METHOD="github.com",Wr.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Vr=function(t){"use strict";e(C)(r,t);var n=e(D)(r);function r(){return e(o)(this,r),n.call(this,"twitter.com")}return e(s)(r,null,[{key:"credential",value:function(e,t){return Er._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(Ur);function Hr(e,t){return zr.apply(this,arguments)}function zr(){return(zr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",kn(n,"POST","/v1/accounts:signUp",pn(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vr.TWITTER_SIGN_IN_METHOD="twitter.com",Vr.PROVIDER_ID="twitter.com";var Br=function(){"use strict";function t(n){e(o)(this,t),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return e(s)(t,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(a)(e(y).mark((function a(){var s,u,c;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Gn._fromIdTokenResponse(n,i,o);case 2:return s=e.sent,u=Kr(i),c=new t({user:s,providerId:u,_tokenResponse:i,operationType:r}),e.abrupt("return",c);case 6:case"end":return e.stop()}}),a)})))()}},{key:"_forOperation",value:function(n,r,i){return e(a)(e(y).mark((function a(){var o;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._updateTokensIfNecessary(i,!0);case 2:return o=Kr(i),e.abrupt("return",new t({user:n,providerId:o,_tokenResponse:i,operationType:r}));case 4:case"end":return e.stop()}}),a)})))()}}]),t}();function Kr(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Gr=function(t){"use strict";e(C)(r,t);var n=e(D)(r);function r(t,i,a,s){var u,c;return e(o)(this,r),(u=n.call(this,i.code,i.message)).operationType=a,u.user=s,Object.setPrototypeOf(e(I)(u),r.prototype),u.customData={appName:t.name,tenantId:null!==(c=t.tenantId)&&void 0!==c?c:void 0,_serverResponse:i.customData._serverResponse,operationType:a},u}return e(s)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(ne);function Yr(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw Gr._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(e,t){return Qr.apply(this,arguments)}function Qr(){return Qr=e(a)(e(y).mark((function t(n,r){var i,a,o=arguments;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=An,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",Br._forOperation(n,"link",a));case 14:case"end":return e.stop()}}),t)}))),Qr.apply(this,arguments)}function Xr(e,t){return $r.apply(this,arguments)}function $r(){return $r=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(y).mark((function t(n,r){var i,a,o,s,u,c,l,h=arguments;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=h.length>2&&void 0!==h[2]&&h[2],o=n.auth,s="reauthenticate",e.prev=4,e.next=7,An(n,Yr(o,s,r,n),i);case 7:return $t((u=e.sent).idToken,o,"internal-error"),$t(c=On(u.idToken),o,"internal-error"),l=c.sub,$t(n.uid===l,o,"user-mismatch"),e.abrupt("return",Br._forOperation(n,s,u));case 16:throw e.prev=16,e.t0=e.catch(4),"auth/user-not-found"===(null===(a=e.t0)||void 0===a?void 0:a.code)&&Yt(o,"user-mismatch"),e.t0;case 20:case"end":return e.stop()}}),t,null,[[4,16]])}))),$r.apply(this,arguments)}function Zr(e,t){return ei.apply(this,arguments)}function ei(){return ei=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(y).mark((function t(n,r){var i,a,o,s,u=arguments;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>2&&void 0!==u[2]&&u[2],a="signIn",e.next=4,Yr(n,a,r);case 4:return o=e.sent,e.next=7,Br._fromIdTokenResponse(n,a,o);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),t)}))),ei.apply(this,arguments)}function ti(e,t){return ni.apply(this,arguments)}function ni(){return(ni=e(a)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Zr(fr(n),r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ri(e,t,n){return ii.apply(this,arguments)}function ii(){return(ii=e(a)(e(y).mark((function t(n,r,i){var a,o,s;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=fr(n),e.next=3,Hr(a,{returnSecureToken:!0,email:r,password:i});case 3:return o=e.sent,e.next=6,Br._fromIdTokenResponse(a,"signIn",o);case 6:return s=e.sent,e.next=9,a._updateCurrentUser(s.user);case 9:return e.abrupt("return",s);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ai(e,t,n){return ti(Te(e),Mr.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function oi(e,t){return yn(e,"POST","/v2/accounts/mfaEnrollment:start",pn(e,t))}new WeakMap;var si="__sak",ui=function(){"use strict";function t(n,r){e(o)(this,t),this.storageRetriever=n,this.type=r}return e(s)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(si,"1"),this.storage.removeItem(si),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ci=function(t){"use strict";e(C)(r,t);var n=e(D)(r);function r(){var t,i;return e(o)(this,r),(t=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,n){return t.onStorageEvent(e,n)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(er(i=$())||or(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=cr(),t._shouldAllowMigration=!0,t}return e(s)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var a=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);ur()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,n){var i=this,o=this;return e(a)(e(y).mark((function a(){return e(y).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Ut)(e(Wt)(r.prototype),"_set",i).call(o,t,n);case 2:o.localCache[t]=JSON.stringify(n);case 3:case"end":return a.stop()}}),a)})))()}},{key:"_get",value:function(t){var n=this,i=this;return e(a)(e(y).mark((function a(){var o;return e(y).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Ut)(e(Wt)(r.prototype),"_get",n).call(i,t);case 2:return o=a.sent,i.localCache[t]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(t){var n=this,i=this;return e(a)(e(y).mark((function a(){return e(y).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Ut)(e(Wt)(r.prototype),"_remove",n).call(i,t);case 2:delete i.localCache[t];case 3:case"end":return a.stop()}}),a)})))()}}]),r}(ui);ci.type="LOCAL";var li=ci,hi=function(t){"use strict";e(C)(r,t);var n=e(D)(r);function r(){return e(o)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(s)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(ui);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hi.type="SESSION";var di=hi;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(t){return Promise.all(t.map((n=e(a)(e(y).mark((function t(n){var r;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])}))),function(e){return n.apply(this,arguments)})));var n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vi=function(){"use strict";function t(n){e(o)(this,t),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(s)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var n=this;return e(a)(e(y).mark((function r(){var i,o,s,u,c,l,h,d;return e(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=(i=t).data,s=o.eventId,u=o.eventType,c=o.data,null==(l=n.handlersMap[u])?void 0:l.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:s,eventType:u}),h=Array.from(l).map(function(){var t=e(a)(e(y).mark((function t(n){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,c));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r.next=9,fi(h);case 9:d=r.sent,i.ports[0].postMessage({status:"done",eventId:s,eventType:u,response:d});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var n=this.receivers.find((function(t){return t.isListeningto(e)}));if(n)return n;var r=new t(e);return this.receivers.push(r),r}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pi(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vi.receivers=[];var yi=function(){"use strict";function t(n){e(o)(this,t),this.target=n,this.handlers=new Set}return e(s)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return e(a)(e(y).mark((function a(){var o,s,u;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,a){var c=pi("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),r);u={messageChannel:o,onMessage:function(t){var n=t;if(n.data.eventId===c)switch(n.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),e(n.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},i.handlers.add(u),o.port1.addEventListener("message",u.onMessage),i.target.postMessage({eventType:t,eventId:c,data:n},[o.port2])})).finally((function(){u&&i.removeMessageHandler(u)})));case 6:case"end":return e.stop()}}),a)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mi(){return void 0!==_i().WorkerGlobalScope&&"function"==typeof _i().importScripts}function gi(){return ki.apply(this,arguments)}function ki(){return(ki=e(a)(e(y).mark((function t(){var n;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var bi="firebaseLocalStorageDb",wi="firebaseLocalStorage",Ii="fbase_key",Ci=function(){"use strict";function t(n){e(o)(this,t),this.request=n}return e(s)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),t}();function Ti(e,t){return e.transaction([wi],t?"readwrite":"readonly").objectStore(wi)}function xi(){var e=indexedDB.deleteDatabase(bi);return new Ci(e).toPromise()}function Ei(){var t=indexedDB.open(bi,1);return new Promise((function(n,r){t.addEventListener("error",(function(){r(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(wi,{keyPath:Ii})}catch(e){r(e)}})),t.addEventListener("success",e(a)(e(y).mark((function r(){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=t.result).objectStoreNames.contains(wi)){e.next=12;break}return i.close(),e.next=5,xi();case 5:return e.t0=n,e.next=8,Ei();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:n(i);case 13:case"end":return e.stop()}}),r)}))))}))}function Si(e,t,n){return Pi.apply(this,arguments)}function Pi(){return(Pi=e(a)(e(y).mark((function t(n,r,i){var a,o;return e(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=Ti(n,!0).put((a={},e(c)(a,Ii,r),e(c)(a,"value",i),a)),t.abrupt("return",new Ci(o).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Ni(e,t){return Ri.apply(this,arguments)}function Ri(){return(Ri=e(a)(e(y).mark((function t(n,r){var i,a;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Ti(n,!1).get(r),e.next=3,new Ci(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Oi(e,t){var n=Ti(e,!0).delete(t);return new Ci(n).toPromise()}var Ai=function(){"use strict";function t(){e(o)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(s)(t,[{key:"_openDb",value:function(){var t=this;return e(a)(e(y).mark((function n(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,Ei();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),n)})))()}},{key:"_withRetries",value:function(t){var n=this;return e(a)(e(y).mark((function r(){var i,a;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:return e.prev=2,e.next=5,n._openDb();case 5:return a=e.sent,e.next=8,t(a);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(i++>3)){e.next=15;break}throw e.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(a)(e(y).mark((function n(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",mi()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(a)(e(y).mark((function n(){return e(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.receiver=vi._getInstance(mi()?self:null),t.receiver._subscribe("keyChanged",function(){var n=e(a)(e(y).mark((function n(r,i){var a;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return a=e.sent,e.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return e.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(a)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var t=this;return e(a)(e(y).mark((function n(){var r,i,a;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,gi();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new yi(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(a=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(r=a[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(t){var n=this;return e(a)(e(y).mark((function r(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,n.sender._send("keyChanged",{key:t},n.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(a)(e(y).mark((function t(){var n;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Ei();case 5:return n=e.sent,e.next=8,Si(n,si,"1");case 8:return e.next=10,Oi(n,si);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var n=this;return e(a)(e(y).mark((function r(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,n.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,n){var r=this;return e(a)(e(y).mark((function i(){return e(y).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(e(a)(e(y).mark((function i(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return Si(e,t,n)}));case 2:return r.localCache[t]=n,e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(a)(e(y).mark((function r(){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Ni(e,t)}));case 2:return i=e.sent,n.localCache[t]=i,e.abrupt("return",i);case 5:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(a)(e(y).mark((function r(){return e(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(e(a)(e(y).mark((function r(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Oi(e,t)}));case 2:return delete n.localCache[t],e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var t=this;return e(a)(e(y).mark((function n(){var r,i,a,o,s,u,c,l,h,d,f,v,p,_,m,g,k;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=Ti(e,!1).getAll();return new Ci(t).toPromise()}));case 2:if(r=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,s=!1,u=void 0,e.prev=10,c=r[Symbol.iterator]();!(o=(l=c.next()).done);o=!0)h=l.value,d=h.fbase_key,f=h.value,a.add(d),JSON.stringify(t.localCache[d])!==JSON.stringify(f)&&(t.notifyListeners(d,f),i.push(d));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),s=!0,u=e.t0;case 18:e.prev=18,e.prev=19,o||null==c.return||c.return();case 21:if(e.prev=21,!s){e.next=24;break}throw u;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(v=!0,p=!1,_=void 0,e.prev=27,m=Object.keys(t.localCache)[Symbol.iterator]();!(v=(g=m.next()).done);v=!0)k=g.value,t.localCache[k]&&!a.has(k)&&(t.notifyListeners(k,null),i.push(k));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),p=!0,_=e.t1;case 35:e.prev=35,e.prev=36,v||null==m.return||m.return();case 38:if(e.prev=38,!p){e.next=41;break}throw _;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",i);case 44:case"end":return e.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(a)(e(y).mark((function n(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();Ai.type="LOCAL";var Di=Ai;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(e,t){return yn(e,"POST","/v2/accounts/mfaSignIn:start",pn(e,t))}function Mi(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=Jt("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))}function Fi(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Fi("rcb"),new cn(3e4,6e4);var Ui="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(e,t,n){return ji.apply(this,arguments)}function ji(){return(ji=e(a)(e(y).mark((function t(n,r,i){var a,o,s,u,c,l,h,d;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,$t("string"==typeof o,n,"argument-error"),$t(i.type===Ui,n,"argument-error"),!("session"in(s="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(u=s.session,!("phoneNumber"in s)){e.next=19;break}return $t("enroll"===u.type,n,"internal-error"),e.next=15,oi(n,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}});case 15:return c=e.sent,e.abrupt("return",c.phoneSessionInfo.sessionInfo);case 19:return $t("signin"===u.type,n,"internal-error"),$t(l=(null===(a=s.multiFactorHint)||void 0===a?void 0:a.uid)||s.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,Li(n,{mfaPendingCredential:u.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:o}});case 24:return h=e.sent,e.abrupt("return",h.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,Sr(n,{phoneNumber:s.phoneNumber,recaptchaToken:o});case 30:return d=e.sent.sessionInfo,e.abrupt("return",d);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Wi=function(){"use strict";function t(n){e(o)(this,t),this.providerId=t.PROVIDER_ID,this.auth=fr(n)}return e(s)(t,[{key:"verifyPhoneNumber",value:function(e,t){return qi(this.auth,e,Te(t))}}],[{key:"credential",value:function(e,t){return Dr._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var n=e;return t.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?Dr._fromTokenResponse(n,r):null}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vi(e,t){return t?nn(t):($t(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wi.PROVIDER_ID="phone",Wi.PHONE_SIGN_IN_METHOD="phone";var Hi=function(t){"use strict";e(C)(r,t);var n=e(D)(r);function r(t){var i;return e(o)(this,r),(i=n.call(this,"custom","custom")).params=t,i}return e(s)(r,[{key:"_getIdTokenResponse",value:function(e){return Tr(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return Tr(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return Tr(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(pr);function zi(e){return Zr(e.auth,new Hi(e),e.bypassAuthState)}function Bi(e){var t=e.auth,n=e.user;return $t(n,t,"internal-error"),Xr(n,new Hi(e),e.bypassAuthState)}function Ki(e){return Gi.apply(this,arguments)}function Gi(){return(Gi=e(a)(e(y).mark((function t(n){var r,i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,$t(i=n.user,r,"internal-error"),e.abrupt("return",Jr(i,new Hi(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yi=function(){"use strict";function t(n,r,i,a){var s=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(o)(this,t),this.auth=n,this.resolver=i,this.user=a,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return e(s)(t,[{key:"execute",value:function(){var t,n=this;return new Promise((t=e(a)(e(y).mark((function t(r,i){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,n.resolver._initialize(n.auth);case 4:return n.eventManager=e.sent,e.next=7,n.onExecution();case 7:n.eventManager.registerConsumer(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.reject(e.t0);case 13:case"end":return e.stop()}}),t,null,[[1,10]])}))),function(e,n){return t.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(t){var n=this;return e(a)(e(y).mark((function r(){var i,a,o,s,u,c,l;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.urlResponse,a=t.sessionId,o=t.postBody,s=t.tenantId,u=t.error,c=t.type,!u){e.next=4;break}return n.reject(u),e.abrupt("return");case 4:return l={auth:n.auth,requestUri:i,sessionId:a,tenantId:s||void 0,postBody:o||void 0,user:n.user,bypassAuthState:n.bypassAuthState},e.prev=5,e.t0=n,e.next=9,n.getIdpTask(c)(l);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),n.reject(e.t2);case 16:case"end":return e.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zi;case"linkViaPopup":case"linkViaRedirect":return Ki;case"reauthViaPopup":case"reauthViaRedirect":return Bi;default:Yt(this.auth,"internal-error")}}},{key:"resolve",value:function(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),Ji=new cn(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qi=function(t){"use strict";e(C)(r,t);var n=e(D)(r);function r(t,i,a,s,u){var c;return e(o)(this,r),(c=n.call(this,t,i,s,u)).provider=a,c.authWindow=null,c.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=e(I)(c),c}return e(s)(r,[{key:"executeNotNull",value:function(){var t=this;return e(a)(e(y).mark((function n(){var r;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return $t(r=e.sent,t.auth,"internal-error"),e.abrupt("return",r);case 5:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){var t=this;return e(a)(e(y).mark((function n(){var r;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return en(1===t.filter.length,"Popup operations only handle one event"),r=pi(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],r);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=r,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(Jt(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(Jt(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(Jt(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,Ji.get())};t()}}]),r}(Yi);Qi.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Xi=new Map,$i=function(t){"use strict";e(C)(r,t);var n=e(D)(r);function r(t,i){var a,s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(o)(this,r),(a=n.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,s)).eventId=null,a}return e(s)(r,[{key:"execute",value:function(){var t=this,n=this;return e(a)(e(y).mark((function i(){var a,o;return e(y).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=Xi.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,Zi(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,e(Ut)(e(Wt)(r.prototype),"execute",t).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:Xi.set(n.auth._key(),a);case 21:return n.bypassAuthState||Xi.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var n=this,i=this,o=function(){return e(Ut)(e(Wt)(r.prototype),"onAuthEvent",n)};return e(a)(e(y).mark((function n(){var r;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",o().call(i,t));case 4:if("unknown"!==t.type){e.next=7;break}return i.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,i.auth._redirectUserForId(t.eventId);case 10:if(!(r=e.sent)){e.next=16;break}return i.user=r,e.abrupt("return",o().call(i,t));case 16:i.resolve(null);case 17:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){return e(a)(e(y).mark((function t(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),r}(Yi);function Zi(e,t){return ea.apply(this,arguments)}function ea(){return(ea=e(a)(e(y).mark((function t(n,r){var i,a,o;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=ra(r),a=na(n),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ta(e,t){Xi.set(e._key(),t)}function na(e){return nn(e._redirectPersistence)}function ra(e){return Qn("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(e,t){return aa.apply(this,arguments)}function aa(){return aa=e(a)(e(y).mark((function t(n,r){var i,a,o,s,u,c=arguments;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a=fr(n),o=Vi(a,r),s=new $i(a,o,i),e.next=6,s.execute();case 6:if(!(u=e.sent)||i){e.next=13;break}return delete u.user._redirectEventId,e.next=11,a._persistUserIfCurrent(u.user);case 11:return e.next=13,a._setRedirectUser(null,r);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),t)}))),aa.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var oa=function(){"use strict";function t(n){e(o)(this,t),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(s)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ua(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!ua(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Jt(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(sa(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(sa(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function sa(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function ua(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function ca(e){return la.apply(this,arguments)}function la(){return la=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(y).mark((function t(n){var r,i=arguments;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",yn(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),t)}))),la.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ha=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,da=/^https?/;function fa(){return(fa=e(a)(e(y).mark((function t(n){var r,i,a,o,s,u,c;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,ca(n);case 4:r=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,s=r[Symbol.iterator]();case 8:if(i=(u=s.next()).done){e.next=20;break}if(c=u.value,e.prev=10,!va(c)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:Yt(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function va(e){var t=an(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!da.test(r))return!1;if(ha.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pa=new cn(3e4,6e4);function ya(){var t=_i().___jsl,n=!0,r=!1,i=void 0;if(null==t?void 0:t.H)try{for(var a,o=Object.keys(t.H)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(t.H[s].r=t.H[s].r||[],t.H[s].L=t.H[s].L||[],t.H[s].r=e(l)(t.H[s].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}var _a=null;function ma(e){return _a=_a||function(e){return new Promise((function(t,n){var r,i,a;function o(){ya(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){ya(),n(Jt(e,"network-request-failed"))},timeout:pa.get()})}if(null===(i=null===(r=_i().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=_i().gapi)||void 0===a?void 0:a.load)){var s=Fi("iframefcb");return _i()[s]=function(){gapi.load?o():n(Jt(e,"network-request-failed"))},Mi("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw _a=null,e}))}(e),_a}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ga=new cn(5e3,15e3),ka={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ba=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wa(e){var t=e.config;$t(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?ln(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:kt},i=ba.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat(ye(r).slice(1))}function Ia(e){return Ca.apply(this,arguments)}function Ca(){return Ca=e(a)(e(y).mark((function t(n){var r,i;return e(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ma(n);case 2:return r=t.sent,$t(i=_i().gapi,n,"internal-error"),t.abrupt("return",r.open({where:document.body,url:wa(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ka,dontclear:!0},(function(t){return new Promise((r=e(a)(e(y).mark((function r(i,a){var o,s,u;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=function(){_i().clearTimeout(s),i(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:o=Jt(n,"network-request-failed"),s=_i().setTimeout((function(){a(o)}),ga.get()),t.ping(u).then(u,(function(){a(o)}));case 7:case"end":return e.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return t.stop()}}),t)}))),Ca.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ta={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xa="_blank",Ea="http://localhost",Sa=function(){"use strict";function t(n){e(o)(this,t),this.window=n,this.associatedEvent=null}return e(s)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function Pa(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},Ta),{width:i.toString(),height:a.toString(),top:o,left:s}),l=$().toLowerCase();r&&(u=tr(l)?xa:r),Zn(l)&&(n=n||Ea,c.scrollbars="yes");var h=Object.entries(c).reduce((function(t,n){var r=e(_)(n,2),i=r[0],a=r[1];return"".concat(t).concat(i,"=").concat(a,",")}),"");if(sr(l)&&"_self"!==u)return Na(n||"",u),new Sa(null);var d=window.open(n||"",u,h);$t(d,t,"popup-blocked");try{d.focus()}catch(e){}return new Sa(d)}function Na(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ra="__/auth/handler",Oa="emulator/auth/handler";function Aa(t,n,r,i,a,o){$t(t.config.authDomain,t,"auth-domain-config-required"),$t(t.config.apiKey,t,"invalid-api-key");var s={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:i,v:kt,eventId:a};if(n instanceof Fr){n.setDefaultLanguage(t.languageCode),s.providerId=n.providerId||"",de(n.getCustomParameters())||(s.customParameters=JSON.stringify(n.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var h,d=Object.entries(o||{})[Symbol.iterator]();!(u=(h=d.next()).done);u=!0){var f=e(_)(h.value,2),v=f[0],p=f[1];s[v]=p}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}}if(n instanceof Ur){var y=n.getScopes().filter((function(e){return""!==e}));y.length>0&&(s.scopes=y.join(","))}t.tenantId&&(s.tid=t.tenantId);var m,g,k=s,b=!0,w=!1,I=void 0;try{for(var C,T=Object.keys(k)[Symbol.iterator]();!(b=(C=T.next()).done);b=!0){var x=C.value;void 0===k[x]&&delete k[x]}}catch(e){w=!0,I=e}finally{try{b||null==T.return||T.return()}finally{if(w)throw I}}return"".concat((m=t,g=m.config,g.emulator?ln(g,Oa):"https://".concat(g.authDomain,"/").concat(Ra)),"?").concat(ye(k).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Da="webStorageSupport",La=function(){"use strict";function t(){e(o)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=di,this._completeRedirectFn=ia,this._overrideRedirectResult=ta}return e(s)(t,[{key:"_openPopup",value:function(t,n,r,i){var o=this;return e(a)(e(y).mark((function a(){var s,u;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return en(null===(s=o.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),u=Aa(t,n,r,an(),i),e.abrupt("return",Pa(t,u,pi()));case 4:case"end":return e.stop()}}),a)})))()}},{key:"_openRedirect",value:function(t,n,r,i){var o=this;return e(a)(e(y).mark((function a(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o._originValidation(t);case 2:return a=Aa(t,n,r,an(),i),_i().location.href=a,e.abrupt("return",new Promise((function(){})));case 4:case"end":return e.stop()}var a}),a)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(en(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(t){var n=this;return e(a)(e(y).mark((function r(){var i,a;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ia(t);case 2:return i=e.sent,a=new oa(t),i.register("authEvent",(function(e){return $t(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:a.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[t._key()]={manager:a},n.iframes[t._key()]=i,e.abrupt("return",a);case 8:case"end":return e.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(Da,{type:Da},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Yt(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return fa.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return cr()||er()||or()}}]),t}(),Ma=La,Fa=function(t){"use strict";e(C)(r,t);var n=e(D)(r);function r(t){var i;return e(o)(this,r),(i=n.call(this,"phone")).credential=t,i}return e(s)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return yn(e,"POST","/v2/accounts/mfaEnrollment:finalize",pn(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return yn(e,"POST","/v2/accounts/mfaSignIn:finalize",pn(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(function(){"use strict";function t(n){e(o)(this,t),this.factorId=n}return e(s)(t,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return Zt("unexpected MultiFactorSessionType")}}}]),t}());(function(){"use strict";function t(){e(o)(this,t)}return e(s)(t,null,[{key:"assertion",value:function(e){return Fa._fromCredential(e)}}]),t}()).FACTOR_ID="phone";var Ua,qa="@firebase/auth",ja="0.20.7",Wa=function(){"use strict";function t(n){e(o)(this,t),this.auth=n,this.internalListeners=new Map}return e(s)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var n=this;return e(a)(e(y).mark((function r(){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.assertAuthConfigured(),e.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,n.auth.currentUser.getIdToken(t);case 7:return i=e.sent,e.abrupt("return",{accessToken:i});case 9:case"end":return e.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){$t(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();Ua="Browser",pt(new xe("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=r.options,o=a.apiKey,s=a.authDomain;return function(e,t){$t(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),$t(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:o,authDomain:s,clientPlatform:Ua,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lr(Ua)},i=new dr(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nn);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),pt(new xe("auth-internal",(function(e){var t=fr(e.getProvider("auth").getImmediate());return new Wa(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),It(qa,ja,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ua)),It(qa,ja,"esm2017");var Va={apiKey:"AIzaSyCBxxRSUEogARLc21jYUMyG-oQ62S7fczo",authDomain:"filmoteka-9ac74.firebaseapp.com",projectId:"filmoteka-9ac74",storageBucket:"filmoteka-9ac74.appspot.com",messagingSenderId:"294408467658",appId:"1:294408467658:web:cb60f19715353b83323033",measurementId:"G-KN88PKYZVD",databaseURL:"https://filmoteka-9ac74-default-rtdb.europe-west1.firebasedatabase.app"},Ha=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt(),t=yt(e,"auth");return t.isInitialized()?t.getImmediate():rn(e,{popupRedirectResolver:Ma,persistence:[Di,li,di]})}(bt(Va));function za(e,t){ri(Ha,e,t).then((function(e){e.user})).catch((function(e){e.code,e.message;console.error(e.message)}))}function Ba(e,t){ai(Ha,e,t).then((function(e){e.user})).catch((function(e){e.code,e.message}))}var Ka,Ga,Ya,Ja=document.querySelector("#email-input"),Qa=document.querySelector("#pwd-input"),Xa=document.querySelector("#register-form"),$a=document.querySelector("#log-out"),Za=document.querySelector("#login-email-input"),eo=document.querySelector("#login-pwd-input"),to=document.querySelector("#login-form"),no=null;$a.addEventListener("click",(function(){Te(Ha).signOut()})),Xa.addEventListener("submit",(function(e){e.preventDefault();try{za(Ja.value,Qa.value),e.currentTarget.reset()}catch(e){console.error(e)}})),to.addEventListener("submit",(function(e){e.preventDefault();try{Ba(Za.value,eo.value),e.currentTarget.reset()}catch(e){console.error(e)}})),Ka=function(e){e?(no=e.uid,console.log("юзер залогинен, ID = ".concat(e.uid))):console.log("нема юзера")},Te(Ha).onAuthStateChanged(Ka,Ga,Ya);I=i("ds8z5"),a=i("bpxeT");var ro,io,ao,oo=i("l5bVx"),so=(y=i("2TvXO"),ro={});function uo(){throw new Error("setTimeout has not been defined")}function co(){throw new Error("clearTimeout has not been defined")}function lo(e){if(io===setTimeout)return setTimeout(e,0);if((io===uo||!io)&&setTimeout)return io=setTimeout,setTimeout(e,0);try{return io(e,0)}catch(t){try{return io.call(null,e,0)}catch(t){return io.call(this,e,0)}}}!function(){try{io="function"==typeof setTimeout?setTimeout:uo}catch(e){io=uo}try{ao="function"==typeof clearTimeout?clearTimeout:co}catch(e){ao=co}}();var ho,fo=[],vo=!1,po=-1;function yo(){vo&&ho&&(vo=!1,ho.length?fo=ho.concat(fo):po=-1,fo.length&&_o())}function _o(){if(!vo){var e=lo(yo);vo=!0;for(var t=fo.length;t;){for(ho=fo,fo=[];++po<t;)ho&&ho[po].run();po=-1,t=fo.length}ho=null,vo=!1,function(e){if(ao===clearTimeout)return clearTimeout(e);if((ao===co||!ao)&&clearTimeout)return ao=clearTimeout,clearTimeout(e);try{ao(e)}catch(t){try{return ao.call(null,e)}catch(t){return ao.call(this,e)}}}(e)}}function mo(e,t){this.fun=e,this.array=t}function go(){}so.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];fo.push(new mo(e,t)),1!==fo.length||vo||lo(_o)},mo.prototype.run=function(){this.fun.apply(null,this.array)},so.title="browser",so.browser=!0,so.env={},so.argv=[],so.version="",so.versions={},so.on=go,so.addListener=go,so.once=go,so.off=go,so.removeListener=go,so.removeAllListeners=go,so.emit=go,so.prependListener=go,so.prependOnceListener=go,so.listeners=function(e){return[]},so.binding=function(e){throw new Error("process.binding is not supported")},so.cwd=function(){return"/"},so.chdir=function(e){throw new Error("process.chdir is not supported")},so.umask=function(){return 0};var ko="@firebase/database",bo="0.13.6",wo="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Io,Co=function(){"use strict";function t(n){e(o)(this,t),this.domStorage_=n,this.prefix_="firebase:"}return e(s)(t,[{key:"set",value:function(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),se(t))}},{key:"get",value:function(e){var t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:oe(t)}},{key:"remove",value:function(e){this.domStorage_.removeItem(this.prefixedName_(e))}},{key:"prefixedName_",value:function(e){return this.prefix_+e}},{key:"toString",value:function(){return this.domStorage_.toString()}}]),t}(),To=function(){"use strict";function t(){e(o)(this,t),this.cache_={},this.isInMemoryStorage=!0}return e(s)(t,[{key:"set",value:function(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}},{key:"get",value:function(e){return le(this.cache_,e)?this.cache_[e]:null}},{key:"remove",value:function(e){delete this.cache_[e]}}]),t}(),xo=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){var t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Co(t)}}catch(e){}return new To},Eo=xo("localStorage"),So=xo("sessionStorage"),Po=new Ue("@firebase/database"),No=(Io=1,function(){return Io++}),Ro=function(e){var t=Ie(e),n=new ge;n.update(t);var r=n.digest();return B.encodeByteArray(r)},Oo=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r="",i=0;i<t.length;i++){var a=t[i];Array.isArray(a)||a&&"object"==typeof a&&"number"==typeof a.length?r+=Oo.apply(null,a):r+="object"==typeof a?se(a):a,r+=" "}return r},Ao=null,Do=!0,Lo=function(e,t){V(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(Po.logLevel=Pe.VERBOSE,Ao=Po.log.bind(Po),t&&So.set("logging_enabled",!0)):"function"==typeof e?Ao=e:(Ao=null,So.remove("logging_enabled"))},Mo=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!0===Do&&(Do=!1,null===Ao&&!0===So.get("logging_enabled")&&Lo(!0)),Ao){var r=Oo.apply(null,t);Ao(r)}},Fo=function(t){return function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];Mo.apply(void 0,[t].concat(e(l)(r)))}},Uo=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE INTERNAL ERROR: "+Oo.apply(void 0,e(l)(n));Po.error(i)},qo=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE FATAL ERROR: ".concat(Oo.apply(void 0,e(l)(n)));throw Po.error(i),new Error(i)},jo=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE WARNING: "+Oo.apply(void 0,e(l)(n));Po.warn(i)},Wo=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Vo="[MIN_NAME]",Ho="[MAX_NAME]",zo=function(e,t){if(e===t)return 0;if(e===Vo||t===Ho)return-1;if(t===Vo||e===Ho)return 1;var n=es(e),r=es(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1},Bo=function(e,t){return e===t?0:e<t?-1:1},Ko=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+se(t))},Go=function(e){if("object"!=typeof e||null===e)return se(e);var t=[];for(var n in e)t.push(n);t.sort();for(var r="{",i=0;i<t.length;i++)0!==i&&(r+=","),r+=se(t[i]),r+=":",r+=Go(e[t[i]]);return r+="}"},Yo=function(e,t){var n=e.length;if(n<=t)return[e];for(var r=[],i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(e,t){for(var n in e)e.hasOwnProperty(n)&&t(n,e[n])}var Qo=function(e){V(!Wo(e),"Invalid JSON number");var t,n,r,i,a,o=1023;0===e?(n=0,r=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(n=(i=Math.min(Math.floor(Math.log(e)/Math.LN2),o))+o,r=Math.round(e*Math.pow(2,52-i)-Math.pow(2,52))):(n=0,r=Math.round(e/Math.pow(2,-1074))));var s=[];for(a=52;a;a-=1)s.push(r%2?1:0),r=Math.floor(r/2);for(a=11;a;a-=1)s.push(n%2?1:0),n=Math.floor(n/2);s.push(t?1:0),s.reverse();var u=s.join(""),c="";for(a=0;a<64;a+=8){var l=parseInt(u.substr(a,8),2).toString(16);1===l.length&&(l="0"+l),c+=l}return c.toLowerCase()};var Xo=new RegExp("^-?(0*)\\d{1,10}$"),$o=-2147483648,Zo=2147483647,es=function(e){if(Xo.test(e)){var t=Number(e);if(t>=$o&&t<=Zo)return t}return null},ts=function(e){try{e()}catch(e){setTimeout((function(){var t=e.stack||"";throw jo("Exception was thrown by user callback.",t),e}),Math.floor(0))}},ns=function(e,t){var n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n},rs=function(){"use strict";function t(n,r){var i=this;e(o)(this,t),this.appName_=n,this.appCheckProvider=r,this.appCheck=null==r?void 0:r.getImmediate({optional:!0}),this.appCheck||null==r||r.get().then((function(e){return i.appCheck=e}))}return e(s)(t,[{key:"getToken",value:function(e){var t=this;return this.appCheck?this.appCheck.getToken(e):new Promise((function(n,r){var i=t;setTimeout((function(){i.appCheck?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((function(t){return t.addTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){jo('Provided AppCheck credentials for the app named "'.concat(this.appName_,'" ')+"are invalid. This usually indicates your app was not initialized correctly.")}}]),t}(),is=function(){"use strict";function t(n,r,i){var a=this;e(o)(this,t),this.appName_=n,this.firebaseOptions_=r,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit((function(e){return a.auth_=e}))}return e(s)(t,[{key:"getToken",value:function(e){var t=this;return this.auth_?this.auth_.getToken(e).catch((function(e){return e&&"auth/token-not-initialized"===e.code?(Mo("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)})):new Promise((function(n,r){var i=t;setTimeout((function(){i.auth_?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((function(t){return t.addAuthTokenListener(e)}))}},{key:"removeTokenChangeListener",value:function(e){this.authProvider_.get().then((function(t){return t.removeAuthTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){var e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',jo(e)}}]),t}(),as=function(){"use strict";function t(n){e(o)(this,t),this.accessToken=n}return e(s)(t,[{key:"getToken",value:function(e){return Promise.resolve({accessToken:this.accessToken})}},{key:"addTokenChangeListener",value:function(e){e(this.accessToken)}},{key:"removeTokenChangeListener",value:function(e){}},{key:"notifyForInvalidToken",value:function(){}}]),t}();as.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var os="5",ss=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,us="websocket",cs="long_polling",ls=function(){"use strict";function t(n,r,i,a){var s=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",c=arguments.length>6&&void 0!==arguments[6]&&arguments[6];e(o)(this,t),this.secure=r,this.namespace=i,this.webSocketOnly=a,this.nodeAdmin=s,this.persistenceKey=u,this.includeNamespaceInQueryParams=c,this._host=n.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Eo.get("host:"+n)||this._host}return e(s)(t,[{key:"isCacheableHost",value:function(){return"s-"===this.internalHost.substr(0,2)}},{key:"isCustomHost",value:function(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}},{key:"host",get:function(){return this._host},set:function(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Eo.set("host:"+this._host,this.internalHost))}},{key:"toString",value:function(){var e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}},{key:"toURLString",value:function(){var e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns=".concat(this.namespace):"";return"".concat(e).concat(this.host,"/").concat(t)}}]),t}();function hs(e,t,n){var r;if(V("string"==typeof t,"typeof type must == string"),V("object"==typeof n,"typeof params must == object"),t===us)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==cs)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);var i=[];return Jo(n,(function(e,t){i.push(e+"="+t)})),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ds=function(){"use strict";function t(){e(o)(this,t),this.counters_={}}return e(s)(t,[{key:"incrementCounter",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;le(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}},{key:"get",value:function(){return J(this.counters_)}}]),t}(),fs={},vs={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(e){var t=e.toString();return fs[t]||(fs[t]=new ds),fs[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ys=function(){"use strict";function t(n){e(o)(this,t),this.onMessage_=n,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}return e(s)(t,[{key:"closeAfter",value:function(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}},{key:"handleResponse",value:function(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){var n=function(e){i[e]&&ts((function(){r.onMessage_(i[e])}))},r=this,i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(var a=0;a<i.length;++a)n(a);if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}]),t}(),_s="start",ms="close",gs=function(){"use strict";function t(n,r,i,a,s,u,c){var l=this;e(o)(this,t),this.connId=n,this.repoInfo=r,this.applicationId=i,this.appCheckToken=a,this.authToken=s,this.transportSessionId=u,this.lastSessionId=c,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Fo(n),this.stats_=ps(r),this.urlFn=function(e){return l.appCheckToken&&(e.ac=l.appCheckToken),hs(r,cs,e)}}return e(s)(t,[{key:"open",value:function(t,n){var r=this;this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new ys(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((function(){r.log_("Timed out trying to connect."),r.onClosed_(),r.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(te()||"complete"===document.readyState)e();else{var t=!1,n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((function(){var t=r;if(!r.isClosed_){r.scriptTagHolder=new ks((function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var a=e(_)(r,5),o=a[0],s=a[1],u=a[2];a[3],a[4];if(t.incrementIncomingBytes_(r),t.scriptTagHolder)if(t.connectTimeoutTimer_&&(clearTimeout(t.connectTimeoutTimer_),t.connectTimeoutTimer_=null),t.everConnected_=!0,o===_s)t.id=s,t.password=u;else{if(o!==ms)throw new Error("Unrecognized command received: "+o);if(s){var c=t;t.scriptTagHolder.sendNewPolls=!1,t.myPacketOrderer.closeAfter(s,(function(){c.onClosed_()}))}else t.onClosed_()}}),(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var a=e(_)(r,2),o=a[0],s=a[1];t.incrementIncomingBytes_(r),t.myPacketOrderer.handleResponse(o,s)}),(function(){t.onClosed_()}),r.urlFn);var n={start:"t"};n.ser=Math.floor(1e8*Math.random()),r.scriptTagHolder.uniqueCallbackIdentifier&&(n.cb=r.scriptTagHolder.uniqueCallbackIdentifier),n.v=os,r.transportSessionId&&(n.s=r.transportSessionId),r.lastSessionId&&(n.ls=r.lastSessionId),r.applicationId&&(n.p=r.applicationId),r.appCheckToken&&(n.ac=r.appCheckToken),"undefined"!=typeof location&&location.hostname&&ss.test(location.hostname)&&(n.r="f");var i=r.urlFn(n);r.log_("Connecting via long-poll to "+i),r.scriptTagHolder.addTag(i,(function(){}))}}))}},{key:"start",value:function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}},{key:"markConnectionHealthy",value:function(){}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}},{key:"send",value:function(e){var t=se(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);for(var n=K(t),r=Yo(n,1840),i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}},{key:"addDisconnectPingFrame",value:function(e,t){if(!te()){this.myDisconnFrame=document.createElement("iframe");var n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}}},{key:"incrementIncomingBytes_",value:function(e){var t=se(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}],[{key:"forceAllow",value:function(){t.forceAllow_=!0}},{key:"forceDisallow",value:function(){t.forceDisallow_=!0}},{key:"isAvailable",value:function(){return!te()&&(!!t.forceAllow_||!(t.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}}]),t}(),ks=function(){"use strict";function t(n,r,i,a){if(e(o)(this,t),this.onDisconnect=i,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,te())this.commandCB=n,this.onMessageCB=r;else{this.uniqueCallbackIdentifier=No(),window["pLPCommand"+this.uniqueCallbackIdentifier]=n,window["pRTLPCB"+this.uniqueCallbackIdentifier]=r,this.myIFrame=t.createIFrame_();var s="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11))s='<script>document.domain="'+document.domain+'";<\/script>';var u="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(e){Mo("frame writing exception"),e.stack&&Mo(e.stack),Mo(e)}}}return e(s)(t,[{key:"close",value:function(){if(this.alive=!1,this.myIFrame){var e=this;this.myIFrame.doc.body.innerHTML="",setTimeout((function(){null!==e.myIFrame&&(document.body.removeChild(e.myIFrame),e.myIFrame=null)}),Math.floor(0))}var t=this.onDisconnect;t&&(this.onDisconnect=null,t())}},{key:"startLongPoll",value:function(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}},{key:"newRequest_",value:function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;var e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;for(var t=this.urlFn(e),n="",r=0;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;var i=this.pendingSegs.shift();n=n+"&seg"+r+"="+i.seg+"&ts"+r+"="+i.ts+"&d"+r+"="+i.d,r++}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}},{key:"enqueueSegment",value:function(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}},{key:"addLongPollTag_",value:function(e,t){var n=this;this.outstandingRequests.add(t);var r=function(){n.outstandingRequests.delete(t),n.newRequest_()},i=setTimeout(r,Math.floor(25e3));this.addTag(e,(function(){clearTimeout(i),r()}))}},{key:"addTag",value:function(e,t){var n=this;te()?this.doNodeLongPoll(e,t):setTimeout((function(){try{var r=n;if(!n.sendNewPolls)return;var i=n.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){var e=i.readyState;e&&"loaded"!==e&&"complete"!==e||(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=function(){Mo("Long-poll script failed to load: "+e),r.sendNewPolls=!1,r.close()},n.myIFrame.doc.body.appendChild(i)}catch(e){}}),Math.floor(1))}}],[{key:"createIFrame_",value:function(){var e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Mo("No IE domain setting required")}catch(n){var t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}}]),t}(),bs=null;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */"undefined"!=typeof MozWebSocket?bs=MozWebSocket:"undefined"!=typeof WebSocket&&(bs=WebSocket);var ws=function(){"use strict";function t(n,r,i,a,s,u,c){e(o)(this,t),this.connId=n,this.applicationId=i,this.appCheckToken=a,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Fo(this.connId),this.stats_=ps(r),this.connURL=t.connectionURL_(r,u,c,a,i),this.nodeAdmin=r.nodeAdmin}return e(s)(t,[{key:"open",value:function(e,t){var n=this;this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Eo.set("previous_websocket_failure",!0);try{var r;if(te()){var i=this.nodeAdmin?"AdminNode":"Node";r={headers:{"User-Agent":"Firebase/".concat(os,"/").concat(wo,"/").concat(ro.platform,"/").concat(i),"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(r.headers.Authorization="Bearer ".concat(this.authToken)),this.appCheckToken&&(r.headers["X-Firebase-AppCheck"]=this.appCheckToken);var a={},o=0===this.connURL.indexOf("wss://")?a.HTTPS_PROXY||a.https_proxy:a.HTTP_PROXY||a.http_proxy;o&&(r.proxy={origin:o})}this.mySock=new bs(this.connURL,[],r)}catch(e){this.log_("Error instantiating WebSocket.");var s=e.message||e.data;return s&&this.log_(s),void this.onClosed_()}this.mySock.onopen=function(){n.log_("Websocket connected."),n.everConnected_=!0},this.mySock.onclose=function(){n.log_("Websocket connection was disconnected."),n.mySock=null,n.onClosed_()},this.mySock.onmessage=function(e){n.handleIncomingFrame(e)},this.mySock.onerror=function(e){n.log_("WebSocket error.  Closing connection.");var t=e.message||e.data;t&&n.log_(t),n.onClosed_()}}},{key:"start",value:function(){}},{key:"markConnectionHealthy",value:function(){Eo.remove("previous_websocket_failure")}},{key:"appendFrame_",value:function(e){if(this.frames.push(e),this.frames.length===this.totalFrames){var t=this.frames.join("");this.frames=null;var n=oe(t);this.onMessage(n)}}},{key:"handleNewFrameCount_",value:function(e){this.totalFrames=e,this.frames=[]}},{key:"extractFrameCount_",value:function(e){if(V(null===this.frames,"We already have a frame buffer"),e.length<=6){var t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}},{key:"handleIncomingFrame",value:function(e){if(null!==this.mySock){var t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{var n=this.extractFrameCount_(t);null!==n&&this.appendFrame_(n)}}}},{key:"send",value:function(e){this.resetKeepAlive();var t=se(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);var n=Yo(t,16384);n.length>1&&this.sendString_(String(n.length));for(var r=0;r<n.length;r++)this.sendString_(n[r])}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}},{key:"resetKeepAlive",value:function(){var e=this;clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((function(){e.mySock&&e.sendString_("0"),e.resetKeepAlive()}),Math.floor(45e3))}},{key:"sendString_",value:function(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}],[{key:"connectionURL_",value:function(e,t,n,r,i){var a={};return a.v=os,!te()&&"undefined"!=typeof location&&location.hostname&&ss.test(location.hostname)&&(a.r="f"),t&&(a.s=t),n&&(a.ls=n),r&&(a.ac=r),i&&(a.p=i),hs(e,us,a)}},{key:"forceDisallow",value:function(){t.forceDisallow_=!0}},{key:"isAvailable",value:function(){var e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){var n=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==bs&&!t.forceDisallow_}},{key:"previouslyFailed",value:function(){return Eo.isInMemoryStorage||!0===Eo.get("previous_websocket_failure")}}]),t}();ws.responsesRequiredToBeHealthy=2,ws.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Is=function(){"use strict";function t(n){e(o)(this,t),this.initTransports_(n)}return e(s)(t,[{key:"initTransports_",value:function(e){var n=ws&&ws.isAvailable(),r=n&&!ws.previouslyFailed();if(e.webSocketOnly&&(n||jo("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ws];else{var i=this.transports_=[],a=!0,o=!1,s=void 0;try{for(var u,c=t.ALL_TRANSPORTS[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;l&&l.isAvailable()&&i.push(l)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}t.globalTransportInitialized_=!0}}},{key:"initialTransport",value:function(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}},{key:"upgradeTransport",value:function(){return this.transports_.length>1?this.transports_[1]:null}}],[{key:"ALL_TRANSPORTS",get:function(){return[gs,ws]}},{key:"IS_TRANSPORT_INITIALIZED",get:function(){return this.globalTransportInitialized_}}]),t}();Is.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Cs=function(){"use strict";function t(n,r,i,a,s,u,c,l,h,d){e(o)(this,t),this.id=n,this.repoInfo_=r,this.applicationId_=i,this.appCheckToken_=a,this.authToken_=s,this.onMessage_=u,this.onReady_=c,this.onDisconnect_=l,this.onKill_=h,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Fo("c:"+this.id+":"),this.transportManager_=new Is(r),this.log_("Connection created"),this.start_()}return e(s)(t,[{key:"start_",value:function(){var e=this,t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((function(){e.conn_&&e.conn_.open(n,r)}),Math.floor(0));var i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=ns((function(){e.healthyTimeout_=null,e.isHealthy_||(e.conn_&&e.conn_.bytesReceived>102400?(e.log_("Connection exceeded healthy timeout but has received "+e.conn_.bytesReceived+" bytes.  Marking connection healthy."),e.isHealthy_=!0,e.conn_.markConnectionHealthy()):e.conn_&&e.conn_.bytesSent>10240?e.log_("Connection exceeded healthy timeout but has sent "+e.conn_.bytesSent+" bytes.  Leaving connection alive."):(e.log_("Closing unhealthy connection after timeout."),e.close()))}),Math.floor(i)))}},{key:"nextTransportId_",value:function(){return"c:"+this.id+":"+this.connectionCount++}},{key:"disconnReceiver_",value:function(e){var t=this;return function(n){e===t.conn_?t.onConnectionLost_(n):e===t.secondaryConn_?(t.log_("Secondary connection lost."),t.onSecondaryConnectionLost_()):t.log_("closing an old connection")}}},{key:"connReceiver_",value:function(e){var t=this;return function(n){2!==t.state_&&(e===t.rx_?t.onPrimaryMessageReceived_(n):e===t.secondaryConn_?t.onSecondaryMessageReceived_(n):t.log_("message on old connection"))}}},{key:"sendRequest",value:function(e){var t={t:"d",d:e};this.sendData_(t)}},{key:"tryCleanupConnection",value:function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}},{key:"onSecondaryControl_",value:function(e){if("t"in e){var t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}},{key:"onSecondaryMessageReceived_",value:function(e){var t=Ko("t",e),n=Ko("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}},{key:"upgradeIfSecondaryHealthy_",value:function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}},{key:"proceedWithUpgrade_",value:function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}},{key:"onPrimaryMessageReceived_",value:function(e){var t=Ko("t",e),n=Ko("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}},{key:"onDataMessage_",value:function(e){this.onPrimaryResponse_(),this.onMessage_(e)}},{key:"onPrimaryResponse_",value:function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}},{key:"onControl_",value:function(e){var t=Ko("t",e);if("d"in e){var n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(var r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Uo("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Uo("Unknown control packet command: "+t)}}},{key:"onHandshake_",value:function(e){var t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),os!==n&&jo("Protocol version mismatch detected"),this.tryStartUpgrade_())}},{key:"tryStartUpgrade_",value:function(){var e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}},{key:"startUpgrade_",value:function(e){var t=this;this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ns((function(){t.secondaryConn_&&(t.log_("Timed out trying to upgrade."),t.secondaryConn_.close())}),Math.floor(6e4))}},{key:"onReset_",value:function(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}},{key:"onConnectionEstablished_",value:function(e,t){var n=this;this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ns((function(){n.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}},{key:"sendPingOnPrimaryIfNecessary_",value:function(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}},{key:"onSecondaryConnectionLost_",value:function(){var e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}},{key:"onConnectionLost_",value:function(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Eo.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}},{key:"onConnectionShutdown_",value:function(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}},{key:"sendData_",value:function(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}},{key:"close",value:function(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}},{key:"closeConnections_",value:function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}]),t}(),Ts=function(){"use strict";function t(){e(o)(this,t)}return e(s)(t,[{key:"put",value:function(e,t,n,r){}},{key:"merge",value:function(e,t,n,r){}},{key:"refreshAuthToken",value:function(e){}},{key:"refreshAppCheckToken",value:function(e){}},{key:"onDisconnectPut",value:function(e,t,n){}},{key:"onDisconnectMerge",value:function(e,t,n){}},{key:"onDisconnectCancel",value:function(e,t){}},{key:"reportStats",value:function(e){}}]),t}(),xs=function(){"use strict";function t(n){e(o)(this,t),this.allowedEvents_=n,this.listeners_={},V(Array.isArray(n)&&n.length>0,"Requires a non-empty array")}return e(s)(t,[{key:"trigger",value:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Array.isArray(this.listeners_[t]))for(var a=e(l)(this.listeners_[t]),o=0;o<a.length;o++)a[o].callback.apply(a[o].context,r)}},{key:"on",value:function(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});var r=this.getInitialEvent(e);r&&t.apply(n,r)}},{key:"off",value:function(e,t,n){this.validateEventType_(e);for(var r=this.listeners_[e]||[],i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}},{key:"validateEventType_",value:function(e){V(this.allowedEvents_.find((function(t){return t===e})),"Unknown event: "+e)}}]),t}(),Es=function(t){"use strict";e(C)(r,t);var n=e(D)(r);function r(){var t;return e(o)(this,r),(t=n.call(this,["online"])).online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Z()||(window.addEventListener("online",(function(){t.online_||(t.online_=!0,t.trigger("online",!0))}),!1),window.addEventListener("offline",(function(){t.online_&&(t.online_=!1,t.trigger("online",!1))}),!1)),t}return e(s)(r,[{key:"getInitialEvent",value:function(e){return V("online"===e,"Unknown event type: "+e),[this.online_]}},{key:"currentlyOnline",value:function(){return this.online_}}],[{key:"getInstance",value:function(){return new r}}]),r}(xs),Ss=function(){"use strict";function t(n,r){if(e(o)(this,t),void 0===r){this.pieces_=n.split("/");for(var i=0,a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[i]=this.pieces_[a],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=n,this.pieceNum_=r}return e(s)(t,[{key:"toString",value:function(){for(var e="",t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}]),t}();function Ps(){return new Ss("")}function Ns(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Rs(e){return e.pieces_.length-e.pieceNum_}function Os(e){var t=e.pieceNum_;return t<e.pieces_.length&&t++,new Ss(e.pieces_,t)}function As(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Ds(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.pieces_.slice(e.pieceNum_+t)}function Ls(e){if(e.pieceNum_>=e.pieces_.length)return null;for(var t=[],n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Ss(t,0)}function Ms(e,t){for(var n=[],r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof Ss)for(var i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else for(var a=t.split("/"),o=0;o<a.length;o++)a[o].length>0&&n.push(a[o]);return new Ss(n,0)}function Fs(e){return e.pieceNum_>=e.pieces_.length}function Us(e,t){var n=Ns(e),r=Ns(t);if(null===n)return t;if(n===r)return Us(Os(e),Os(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function qs(e,t){if(Rs(e)!==Rs(t))return!1;for(var n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function js(e,t){var n=e.pieceNum_,r=t.pieceNum_;if(Rs(e)>Rs(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}var Ws=function t(n,r){"use strict";e(o)(this,t),this.errorPrefix_=r,this.parts_=Ds(n,0),this.byteLength_=Math.max(1,this.parts_.length);for(var i=0;i<this.parts_.length;i++)this.byteLength_+=Ce(this.parts_[i]);Vs(this)};function Vs(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Hs(e))}function Hs(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zs=function(t){"use strict";e(C)(r,t);var n=e(D)(r);function r(){var t,i,a;return e(o)(this,r),t=n.call(this,["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(a="visibilitychange",i="hidden"):void 0!==document.mozHidden?(a="mozvisibilitychange",i="mozHidden"):void 0!==document.msHidden?(a="msvisibilitychange",i="msHidden"):void 0!==document.webkitHidden&&(a="webkitvisibilitychange",i="webkitHidden")),t.visible_=!0,a&&document.addEventListener(a,(function(){var e=!document[i];e!==t.visible_&&(t.visible_=e,t.trigger("visible",e))}),!1),t}return e(s)(r,[{key:"getInitialEvent",value:function(e){return V("visible"===e,"Unknown event type: "+e),[this.visible_]}}],[{key:"getInstance",value:function(){return new r}}]),r}(xs),Bs=1e3,Ks=function(t){"use strict";e(C)(r,t);var n=e(D)(r);function r(t,i,a,s,u,c,l,h){var d;if(e(o)(this,r),(d=n.call(this)).repoInfo_=t,d.applicationId_=i,d.onDataUpdate_=a,d.onConnectStatus_=s,d.onServerInfoUpdate_=u,d.authTokenProvider_=c,d.appCheckTokenProvider_=l,d.authOverride_=h,d.id=r.nextPersistentConnectionId_++,d.log_=Fo("p:"+d.id+":"),d.interruptReasons_={},d.listens=new Map,d.outstandingPuts_=[],d.outstandingGets_=[],d.outstandingPutCount_=0,d.outstandingGetCount_=0,d.onDisconnectRequestQueue_=[],d.connected_=!1,d.reconnectDelay_=Bs,d.maxReconnectDelay_=3e5,d.securityDebugCallback_=null,d.lastSessionId=null,d.establishConnectionTimer_=null,d.visible_=!1,d.requestCBHash_={},d.requestNumber_=0,d.realtime_=null,d.authToken_=null,d.appCheckToken_=null,d.forceTokenRefresh_=!1,d.invalidAuthTokenCount_=0,d.invalidAppCheckTokenCount_=0,d.firstConnection_=!0,d.lastConnectionAttemptTime_=null,d.lastConnectionEstablishedTime_=null,h&&!te())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");return zs.getInstance().on("visible",d.onVisible_,e(I)(d)),-1===t.host.indexOf("fblocal")&&Es.getInstance().on("online",d.onOnline_,e(I)(d)),d}return e(s)(r,[{key:"sendRequest",value:function(e,t,n){var r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(se(i)),V(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}},{key:"get",value:function(e){this.initConnection_();var t=new X,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:function(e){var n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;var r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}},{key:"listen",value:function(e,t,n,r){this.initConnection_();var i=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+i),this.listens.has(a)||this.listens.set(a,new Map),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),V(!this.listens.get(a).has(i),"listen() called twice for same path/queryId.");var o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(a).set(i,o),this.connected_&&this.sendListen_(o)}},{key:"sendGet_",value:function(e){var t=this,n=this.outstandingGets_[e];this.sendRequest("g",n.request,(function(r){delete t.outstandingGets_[e],t.outstandingGetCount_--,0===t.outstandingGetCount_&&(t.outstandingGets_=[]),n.onComplete&&n.onComplete(r)}))}},{key:"sendListen_",value:function(e){var t=this,n=e.query,i=n._path.toString(),a=n._queryIdentifier;this.log_("Listen on "+i+" for "+a);var o={p:i};e.tag&&(o.q=n._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest("q",o,(function(o){var s=o.d,u=o.s;r.warnOnListenWarnings_(s,n),(t.listens.get(i)&&t.listens.get(i).get(a))===e&&(t.log_("listen response",o),"ok"!==u&&t.removeListen_(i,a),e.onComplete&&e.onComplete(u,s))}))}},{key:"refreshAuthToken",value:function(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(function(){})),this.reduceReconnectDelayIfAdminCredential_(e)}},{key:"reduceReconnectDelayIfAdminCredential_",value:function(e){var t;(e&&40===e.length||"object"==typeof(t=ue(e).claims)&&!0===t.admin)&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}},{key:"refreshAppCheckToken",value:function(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(function(){}))}},{key:"tryAuth",value:function(){if(this.connected_&&this.authToken_){var e=this,t=this.authToken_,n=ce(t)?"auth":"gauth",r={cred:t};null===this.authOverride_?r.noauth=!0:"object"==typeof this.authOverride_&&(r.authvar=this.authOverride_),this.sendRequest(n,r,(function(n){var r=n.s,i=n.d||"error";e.authToken_===t&&("ok"===r?e.invalidAuthTokenCount_=0:e.onAuthRevoked_(r,i))}))}}},{key:"tryAppCheck",value:function(){var e=this;this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(function(t){var n=t.s,r=t.d||"error";"ok"===n?e.invalidAppCheckTokenCount_=0:e.onAppCheckRevoked_(n,r)}))}},{key:"unlisten",value:function(e,t){var n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}},{key:"sendUnlisten_",value:function(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);var i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}},{key:"onDisconnectPut",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}},{key:"onDisconnectMerge",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}},{key:"onDisconnectCancel",value:function(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}},{key:"sendOnDisconnect_",value:function(e,t,n,r){var i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(function(e){r&&setTimeout((function(){r(e.s,e.d)}),Math.floor(0))}))}},{key:"put",value:function(e,t,n,r){this.putInternal("p",e,t,n,r)}},{key:"merge",value:function(e,t,n,r){this.putInternal("m",e,t,n,r)}},{key:"putInternal",value:function(e,t,n,r,i){this.initConnection_();var a={p:t,d:n};void 0!==i&&(a.h=i),this.outstandingPuts_.push({action:e,request:a,onComplete:r}),this.outstandingPutCount_++;var o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}},{key:"sendPut_",value:function(e){var t=this,n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,(function(r){t.log_(n+" response",r),delete t.outstandingPuts_[e],t.outstandingPutCount_--,0===t.outstandingPutCount_&&(t.outstandingPuts_=[]),i&&i(r.s,r.d)}))}},{key:"reportStats",value:function(e){if(this.connected_){var t=this,n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,(function(e){if("ok"!==e.s){var n=e.d;t.log_("reportStats","Error sending stats: "+n)}}))}}},{key:"onDataMessage_",value:function(e){if("r"in e){this.log_("from server: "+se(e));var t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}},{key:"onDataPush_",value:function(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Uo("Unrecognized action received from server: "+se(e)+"\nAre you using the latest client?")}},{key:"onReady_",value:function(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}},{key:"scheduleConnect_",value:function(e){var t=this;V(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((function(){t.establishConnectionTimer_=null,t.establishConnection_()}),Math.floor(e))}},{key:"initConnection_",value:function(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}},{key:"onVisible_",value:function(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Bs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}},{key:"onOnline_",value:function(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Bs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}},{key:"onRealtimeDisconnect_",value:function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Bs),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();var e=(new Date).getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}},{key:"establishConnection_",value:function(){var t=this;return e(a)(e(y).mark((function n(){var i,a,o,s,u,c,l,h,d,f,v,p,m;return e(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.shouldReconnect_()){n.next=31;break}return t.log_("Making a connection attempt"),t.lastConnectionAttemptTime_=(new Date).getTime(),t.lastConnectionEstablishedTime_=null,i=t.onDataMessage_.bind(t),a=t.onReady_.bind(t),o=t.onRealtimeDisconnect_.bind(t),s=t.id+":"+r.nextConnectionId_++,u=t.lastSessionId,c=!1,l=null,h=function(){l?l.close():(c=!0,o())},d=function(e){V(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(e)},t.realtime_={close:h,sendRequest:d},f=t.forceTokenRefresh_,t.forceTokenRefresh_=!1,n.prev=16,n.t0=e(_),n.next=20,Promise.all([t.authTokenProvider_.getToken(f),t.appCheckTokenProvider_.getToken(f)]);case 20:n.t1=n.sent,v=(0,n.t0)(n.t1,2),p=v[0],m=v[1],c?Mo("getToken() completed but was canceled"):(Mo("getToken() completed. Creating connection."),t.authToken_=p&&p.accessToken,t.appCheckToken_=m&&m.token,l=new Cs(s,t.repoInfo_,t.applicationId_,t.appCheckToken_,t.authToken_,i,a,o,(function(e){jo(e+" ("+t.repoInfo_.toString()+")"),t.interrupt("server_kill")}),u)),n.next=31;break;case 27:n.prev=27,n.t2=n.catch(16),t.log_("Failed to get token: "+n.t2),c||(t.repoInfo_.nodeAdmin&&jo(n.t2),h());case 31:case"end":return n.stop()}}),n,null,[[16,27]])})))()}},{key:"interrupt",value:function(e){Mo("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}},{key:"resume",value:function(e){Mo("Resuming connection for reason: "+e),delete this.interruptReasons_[e],de(this.interruptReasons_)&&(this.reconnectDelay_=Bs,this.realtime_||this.scheduleConnect_(0))}},{key:"handleTimestamp_",value:function(e){var t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}},{key:"cancelSentTransactions_",value:function(){for(var e=0;e<this.outstandingPuts_.length;e++){var t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}},{key:"onListenRevoked_",value:function(e,t){var n;n=t?t.map((function(e){return Go(e)})).join("$"):"default";var r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}},{key:"removeListen_",value:function(e,t){var n,r=new Ss(e).toString();if(this.listens.has(r)){var i=this.listens.get(r);n=i.get(t),i.delete(t),0===i.size&&this.listens.delete(r)}else n=void 0;return n}},{key:"onAuthRevoked_",value:function(e,t){Mo("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}},{key:"onAppCheckRevoked_",value:function(e,t){Mo("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}},{key:"onSecurityDebugPacket_",value:function(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}},{key:"restoreState_",value:function(){this.tryAuth(),this.tryAppCheck();var e=!0,t=!1,n=void 0,r=!0,i=!1,a=void 0;try{for(var o,s=this.listens.values()[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{for(var c,l=u.values()[Symbol.iterator]();!(e=(c=l.next()).done);e=!0){var h=c.value;this.sendListen_(h)}}catch(e){t=!0,n=e}finally{try{e||null==l.return||l.return()}finally{if(t)throw n}}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}for(var d=0;d<this.outstandingPuts_.length;d++)this.outstandingPuts_[d]&&this.sendPut_(d);for(;this.onDisconnectRequestQueue_.length;){var f=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(f.action,f.pathString,f.data,f.onComplete)}for(var v=0;v<this.outstandingGets_.length;v++)this.outstandingGets_[v]&&this.sendGet_(v)}},{key:"sendConnectStats_",value:function(){var e={},t="js";te()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+wo.replace(/\./g,"-")]=1,Z()?e["framework.cordova"]=1:ee()&&(e["framework.reactnative"]=1),this.reportStats(e)}},{key:"shouldReconnect_",value:function(){var e=Es.getInstance().currentlyOnline();return de(this.interruptReasons_)&&e}}],[{key:"warnOnListenWarnings_",value:function(e,t){if(e&&"object"==typeof e&&le(e,"w")){var n=he(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){var r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();jo("Using an unspecified index. Your data will be downloaded and "+"filtered on the client. Consider adding ".concat(r," at ")+"".concat(i," to your security rules for better performance."))}}}}]),r}(Ts);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ks.nextPersistentConnectionId_=0,Ks.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Gs,Ys=function(){"use strict";function t(n,r){e(o)(this,t),this.name=n,this.node=r}return e(s)(t,null,[{key:"Wrap",value:function(e,n){return new t(e,n)}}]),t}(),Js=function(){"use strict";function t(){e(o)(this,t)}return e(s)(t,[{key:"getCompare",value:function(){return this.compare.bind(this)}},{key:"indexedValueChanged",value:function(e,t){var n=new Ys(Vo,e),r=new Ys(Vo,t);return 0!==this.compare(n,r)}},{key:"minPost",value:function(){return Ys.MIN}}]),t}(),Qs=function(t){"use strict";e(C)(r,t);var n=e(D)(r);function r(){return e(o)(this,r),n.apply(this,arguments)}return e(s)(r,[{key:"compare",value:function(e,t){return zo(e.name,t.name)}},{key:"isDefinedOn",value:function(e){throw H("KeyIndex.isDefinedOn not expected to be called.")}},{key:"indexedValueChanged",value:function(e,t){return!1}},{key:"minPost",value:function(){return Ys.MIN}},{key:"maxPost",value:function(){return new Ys(Ho,Gs)}},{key:"makePost",value:function(e,t){return V("string"==typeof e,"KeyIndex indexValue must always be a string."),new Ys(e,Gs)}},{key:"toString",value:function(){return".key"}}],[{key:"__EMPTY_NODE",get:function(){return Gs},set:function(e){Gs=e}}]),r}(Js),Xs=new Qs,$s=function(){"use strict";function t(n,r,i,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;e(o)(this,t),this.isReverse_=a,this.resultGenerator_=s,this.nodeStack_=[];for(var u=1;!n.isEmpty();)if(u=r?i(n.key,r):1,a&&(u*=-1),u<0)n=this.isReverse_?n.left:n.right;else{if(0===u){this.nodeStack_.push(n);break}this.nodeStack_.push(n),n=this.isReverse_?n.right:n.left}}return e(s)(t,[{key:"getNext",value:function(){if(0===this.nodeStack_.length)return null;var e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}},{key:"hasNext",value:function(){return this.nodeStack_.length>0}},{key:"peek",value:function(){if(0===this.nodeStack_.length)return null;var e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}]),t}(),Zs=function(){"use strict";function t(n,r,i,a,s){e(o)(this,t),this.key=n,this.value=r,this.color=null!=i?i:t.RED,this.left=null!=a?a:nu.EMPTY_NODE,this.right=null!=s?s:nu.EMPTY_NODE}return e(s)(t,[{key:"copy",value:function(e,n,r,i,a){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=a?a:this.right)}},{key:"count",value:function(){return this.left.count()+1+this.right.count()}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min_",value:function(){return this.left.isEmpty()?this:this.left.min_()}},{key:"minKey",value:function(){return this.min_().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp_()}},{key:"removeMin_",value:function(){if(this.left.isEmpty())return nu.EMPTY_NODE;var e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}},{key:"remove",value:function(e,t){var n,r;if(t(e,(n=this).key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return nu.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}},{key:"isRed_",value:function(){return this.color}},{key:"fixUp_",value:function(){var e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}},{key:"moveRedLeft_",value:function(){var e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}},{key:"moveRedRight_",value:function(){var e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}},{key:"rotateLeft_",value:function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}},{key:"rotateRight_",value:function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}},{key:"colorFlip_",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth_",value:function(){var e=this.check_();return Math.pow(2,e)<=this.count()+1}},{key:"check_",value:function(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");var e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zs.RED=!0,Zs.BLACK=!1;var eu,tu=function(){"use strict";function t(){e(o)(this,t)}return e(s)(t,[{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new Zs(e,t,null)}},{key:"remove",value:function(e,t){return this}},{key:"count",value:function(){return 0}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"check_",value:function(){return 0}},{key:"isRed_",value:function(){return!1}}]),t}(),nu=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.EMPTY_NODE;e(o)(this,t),this.comparator_=n,this.root_=r}return e(s)(t,[{key:"insert",value:function(e,n){return new t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Zs.BLACK,null,null))}},{key:"remove",value:function(e){return new t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Zs.BLACK,null,null))}},{key:"get",value:function(e){for(var t,n=this.root_;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}},{key:"getPredecessorKey",value:function(e){for(var t,n=this.root_,r=null;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}},{key:"isEmpty",value:function(){return this.root_.isEmpty()}},{key:"count",value:function(){return this.root_.count()}},{key:"minKey",value:function(){return this.root_.minKey()}},{key:"maxKey",value:function(){return this.root_.maxKey()}},{key:"inorderTraversal",value:function(e){return this.root_.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.root_.reverseTraversal(e)}},{key:"getIterator",value:function(e){return new $s(this.root_,null,this.comparator_,!1,e)}},{key:"getIteratorFrom",value:function(e,t){return new $s(this.root_,e,this.comparator_,!1,t)}},{key:"getReverseIteratorFrom",value:function(e,t){return new $s(this.root_,e,this.comparator_,!0,t)}},{key:"getReverseIterator",value:function(e){return new $s(this.root_,null,this.comparator_,!0,e)}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ru(e,t){return zo(e.name,t.name)}function iu(e,t){return zo(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nu.EMPTY_NODE=new tu;var au,ou,su,uu=function(e){return"number"==typeof e?"number:"+Qo(e):"string:"+e},cu=function(e){if(e.isLeafNode()){var t=e.val();V("string"==typeof t||"number"==typeof t||"object"==typeof t&&le(t,".sv"),"Priority must be a string or number.")}else V(e===eu||e.isEmpty(),"priority of unexpected type.");V(e===eu||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")},lu=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.__childrenNodeConstructor.EMPTY_NODE;e(o)(this,t),this.value_=n,this.priorityNode_=r,this.lazyHash_=null,V(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),cu(this.priorityNode_)}return e(s)(t,[{key:"isLeafNode",value:function(){return!0}},{key:"getPriority",value:function(){return this.priorityNode_}},{key:"updatePriority",value:function(e){return new t(this.value_,e)}},{key:"getImmediateChild",value:function(e){return".priority"===e?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE}},{key:"getChild",value:function(e){return Fs(e)?this:".priority"===Ns(e)?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE}},{key:"hasChild",value:function(){return!1}},{key:"getPredecessorChildName",value:function(e,t){return null}},{key:"updateImmediateChild",value:function(e,n){return".priority"===e?this.updatePriority(n):n.isEmpty()&&".priority"!==e?this:t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}},{key:"updateChild",value:function(e,n){var r=Ns(e);return null===r?n:n.isEmpty()&&".priority"!==r?this:(V(".priority"!==r||1===Rs(e),".priority must be the last token in a path"),this.updateImmediateChild(r,t.__childrenNodeConstructor.EMPTY_NODE.updateChild(Os(e),n)))}},{key:"isEmpty",value:function(){return!1}},{key:"numChildren",value:function(){return 0}},{key:"forEachChild",value:function(e,t){return!1}},{key:"val",value:function(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}},{key:"hash",value:function(){if(null===this.lazyHash_){var t="";this.priorityNode_.isEmpty()||(t+="priority:"+uu(this.priorityNode_.val())+":");var n=e(oo)(this.value_);t+=n+":",t+="number"===n?Qo(this.value_):this.value_,this.lazyHash_=Ro(t)}return this.lazyHash_}},{key:"getValue",value:function(){return this.value_}},{key:"compareTo",value:function(e){return e===t.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof t.__childrenNodeConstructor?-1:(V(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}},{key:"compareToLeafNode_",value:function(n){var r=e(oo)(n.value_),i=e(oo)(this.value_),a=t.VALUE_TYPE_ORDER.indexOf(r),o=t.VALUE_TYPE_ORDER.indexOf(i);return V(a>=0,"Unknown leaf type: "+r),V(o>=0,"Unknown leaf type: "+i),a===o?"object"===i?0:this.value_<n.value_?-1:this.value_===n.value_?0:1:o-a}},{key:"withIndex",value:function(){return this}},{key:"isIndexed",value:function(){return!0}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode()){var t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}],[{key:"__childrenNodeConstructor",get:function(){return au},set:function(e){au=e}}]),t}();lu.VALUE_TYPE_ORDER=["object","boolean","number","string"];var hu,du,fu=function(t){"use strict";e(C)(r,t);var n=e(D)(r);function r(){return e(o)(this,r),n.apply(this,arguments)}return e(s)(r,[{key:"compare",value:function(e,t){var n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?zo(e.name,t.name):i}},{key:"isDefinedOn",value:function(e){return!e.getPriority().isEmpty()}},{key:"indexedValueChanged",value:function(e,t){return!e.getPriority().equals(t.getPriority())}},{key:"minPost",value:function(){return Ys.MIN}},{key:"maxPost",value:function(){return new Ys(Ho,new lu("[PRIORITY-POST]",su))}},{key:"makePost",value:function(e,t){var n=ou(e);return new Ys(t,new lu("[PRIORITY-POST]",n))}},{key:"toString",value:function(){return".priority"}}]),r}(Js),vu=new fu,pu=Math.log(2),yu=function(){"use strict";function t(n){e(o)(this,t);var r;this.count=(r=n+1,parseInt(Math.log(r)/pu,10)),this.current_=this.count-1;var i,a=(i=this.count,parseInt(Array(i+1).join("1"),2));this.bits_=n+1&a}return e(s)(t,[{key:"nextBitIsOne",value:function(){var e=!(this.bits_&1<<this.current_);return this.current_--,e}}]),t}(),_u=function(e,t,n,r){e.sort(t);var i=function(t,r){var a,o,s=r-t;if(0===s)return null;if(1===s)return a=e[t],o=n?n(a):a,new Zs(o,a.node,Zs.BLACK,null,null);var u=parseInt(s/2,10)+t,c=i(t,u),l=i(u+1,r);return a=e[u],o=n?n(a):a,new Zs(o,a.node,Zs.BLACK,c,l)},a=function(t){for(var r=null,a=null,o=e.length,s=function(t,r){var a=o-t,s=o;o-=t;var c=i(a+1,s),l=e[a],h=n?n(l):l;u(new Zs(h,l.node,r,null,c))},u=function(e){r?(r.left=e,r=e):(a=e,r=e)},c=0;c<t.count;++c){var l=t.nextBitIsOne(),h=Math.pow(2,t.count-(c+1));l?s(h,Zs.BLACK):(s(h,Zs.BLACK),s(h,Zs.RED))}return a}(new yu(e.length));return new nu(r||t,a)},mu={},gu=function(){"use strict";function t(n,r){e(o)(this,t),this.indexes_=n,this.indexSet_=r}return e(s)(t,[{key:"get",value:function(e){var t=he(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof nu?t:null}},{key:"hasIndex",value:function(e){return le(this.indexSet_,e.toString())}},{key:"addIndex",value:function(e,n){V(e!==Xs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var r,i=[],a=!1,o=n.getIterator(Ys.Wrap),s=o.getNext();s;)a=a||e.isDefinedOn(s.node),i.push(s),s=o.getNext();r=a?_u(i,e.getCompare()):mu;var u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;var l=Object.assign({},this.indexes_);return l[u]=r,new t(l,c)}},{key:"addToIndexes",value:function(e,n){var r=this;return new t(fe(this.indexes_,(function(t,i){var a=he(r.indexSet_,i);if(V(a,"Missing index implementation for "+i),t===mu){if(a.isDefinedOn(e.node)){for(var o=[],s=n.getIterator(Ys.Wrap),u=s.getNext();u;)u.name!==e.name&&o.push(u),u=s.getNext();return o.push(e),_u(o,a.getCompare())}return mu}var c=n.get(e.name),l=t;return c&&(l=l.remove(new Ys(e.name,c))),l.insert(e,e.node)})),this.indexSet_)}},{key:"removeFromIndexes",value:function(e,n){return new t(fe(this.indexes_,(function(t){if(t===mu)return t;var r=n.get(e.name);return r?t.remove(new Ys(e.name,r)):t})),this.indexSet_)}}],[{key:"Default",get:function(){return V(mu&&vu,"ChildrenNode.ts has not been loaded"),hu=hu||new t({".priority":mu},{".priority":vu})}}]),t}(),ku=function(){"use strict";function t(n,r,i){e(o)(this,t),this.children_=n,this.priorityNode_=r,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&cu(this.priorityNode_),this.children_.isEmpty()&&V(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}return e(s)(t,[{key:"isLeafNode",value:function(){return!1}},{key:"getPriority",value:function(){return this.priorityNode_||du}},{key:"updatePriority",value:function(e){return this.children_.isEmpty()?this:new t(this.children_,e,this.indexMap_)}},{key:"getImmediateChild",value:function(e){if(".priority"===e)return this.getPriority();var t=this.children_.get(e);return null===t?du:t}},{key:"getChild",value:function(e){var t=Ns(e);return null===t?this:this.getImmediateChild(t).getChild(Os(e))}},{key:"hasChild",value:function(e){return null!==this.children_.get(e)}},{key:"updateImmediateChild",value:function(e,n){if(V(n,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(n);var r,i,a=new Ys(e,n);n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(a,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(a,this.children_));var o=r.isEmpty()?du:this.priorityNode_;return new t(r,o,i)}},{key:"updateChild",value:function(e,t){var n=Ns(e);if(null===n)return t;V(".priority"!==Ns(e)||1===Rs(e),".priority must be the last token in a path");var r=this.getImmediateChild(n).updateChild(Os(e),t);return this.updateImmediateChild(n,r)}},{key:"isEmpty",value:function(){return this.children_.isEmpty()}},{key:"numChildren",value:function(){return this.children_.count()}},{key:"val",value:function(e){if(this.isEmpty())return null;var n={},r=0,i=0,a=!0;if(this.forEachChild(vu,(function(o,s){n[o]=s.val(e),r++,a&&t.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):a=!1})),!e&&a&&i<2*r){var o=[];for(var s in n)o[s]=n[s];return o}return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}},{key:"hash",value:function(){if(null===this.lazyHash_){var e="";this.getPriority().isEmpty()||(e+="priority:"+uu(this.getPriority().val())+":"),this.forEachChild(vu,(function(t,n){var r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":Ro(e)}return this.lazyHash_}},{key:"getPredecessorChildName",value:function(e,t,n){var r=this.resolveIndex_(n);if(r){var i=r.getPredecessorKey(new Ys(e,t));return i?i.name:null}return this.children_.getPredecessorKey(e)}},{key:"getFirstChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.minKey();return n&&n.name}return this.children_.minKey()}},{key:"getFirstChild",value:function(e){var t=this.getFirstChildName(e);return t?new Ys(t,this.children_.get(t)):null}},{key:"getLastChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.maxKey();return n&&n.name}return this.children_.maxKey()}},{key:"getLastChild",value:function(e){var t=this.getLastChildName(e);return t?new Ys(t,this.children_.get(t)):null}},{key:"forEachChild",value:function(e,t){var n=this.resolveIndex_(e);return n?n.inorderTraversal((function(e){return t(e.name,e.node)})):this.children_.inorderTraversal(t)}},{key:"getIterator",value:function(e){return this.getIteratorFrom(e.minPost(),e)}},{key:"getIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getIteratorFrom(e.name,Ys.Wrap),i=r.peek();null!=i&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}},{key:"getReverseIterator",value:function(e){return this.getReverseIteratorFrom(e.maxPost(),e)}},{key:"getReverseIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getReverseIteratorFrom(e.name,Ys.Wrap),i=r.peek();null!=i&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}},{key:"compareTo",value:function(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===bu?-1:0}},{key:"withIndex",value:function(e){if(e===Xs||this.indexMap_.hasIndex(e))return this;var n=this.indexMap_.addIndex(e,this.children_);return new t(this.children_,this.priorityNode_,n)}},{key:"isIndexed",value:function(e){return e===Xs||this.indexMap_.hasIndex(e)}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode())return!1;var t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){for(var n=this.getIterator(vu),r=t.getIterator(vu),i=n.getNext(),a=r.getNext();i&&a;){if(i.name!==a.name||!i.node.equals(a.node))return!1;i=n.getNext(),a=r.getNext()}return null===i&&null===a}return!1}return!1}},{key:"resolveIndex_",value:function(e){return e===Xs?null:this.indexMap_.get(e.toString())}}],[{key:"EMPTY_NODE",get:function(){return du||(du=new t(new nu(iu),null,gu.Default))}}]),t}();ku.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;var bu=new(function(t){"use strict";e(C)(r,t);var n=e(D)(r);function r(){return e(o)(this,r),n.call(this,new nu(iu),ku.EMPTY_NODE,gu.Default)}return e(s)(r,[{key:"compareTo",value:function(e){return e===this?0:1}},{key:"equals",value:function(e){return e===this}},{key:"getPriority",value:function(){return this}},{key:"getImmediateChild",value:function(e){return ku.EMPTY_NODE}},{key:"isEmpty",value:function(){return!1}}]),r}(ku));Object.defineProperties(Ys,{MIN:{value:new Ys(Vo,ku.EMPTY_NODE)},MAX:{value:new Ys(Ho,bu)}}),Qs.__EMPTY_NODE=ku.EMPTY_NODE,lu.__childrenNodeConstructor=ku,eu=bu,function(e){su=e}(bu);function wu(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(null===t)return ku.EMPTY_NODE;if("object"==typeof t&&".priority"in t&&(n=t[".priority"]),V(null===n||"string"==typeof n||"number"==typeof n||"object"==typeof n&&".sv"in n,"Invalid priority type found: "+(void 0===n?"undefined":e(oo)(n))),"object"==typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!=typeof t||".sv"in t){var r=t;return new lu(r,wu(n))}if(t instanceof Array){var i=ku.EMPTY_NODE;return Jo(t,(function(e,n){if(le(t,e)&&"."!==e.substring(0,1)){var r=wu(n);!r.isLeafNode()&&r.isEmpty()||(i=i.updateImmediateChild(e,r))}})),i.updatePriority(wu(n))}var a=[],o=!1,s=t;if(Jo(s,(function(e,t){if("."!==e.substring(0,1)){var n=wu(t);n.isEmpty()||(o=o||!n.getPriority().isEmpty(),a.push(new Ys(e,n)))}})),0===a.length)return ku.EMPTY_NODE;var u=_u(a,ru,(function(e){return e.name}),iu);if(o){var c=_u(a,vu.getCompare());return new ku(u,wu(n),new gu({".priority":c},{".priority":vu}))}return new ku(u,wu(n),gu.Default)}!function(e){ou=e}(wu);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Iu,Cu,Tu=function(t){"use strict";e(C)(r,t);var n=e(D)(r);function r(t){var i;return e(o)(this,r),(i=n.call(this)).indexPath_=t,V(!Fs(t)&&".priority"!==Ns(t),"Can't create PathIndex with empty path or .priority key"),i}return e(s)(r,[{key:"extractChild",value:function(e){return e.getChild(this.indexPath_)}},{key:"isDefinedOn",value:function(e){return!e.getChild(this.indexPath_).isEmpty()}},{key:"compare",value:function(e,t){var n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?zo(e.name,t.name):i}},{key:"makePost",value:function(e,t){var n=wu(e),r=ku.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ys(t,r)}},{key:"maxPost",value:function(){var e=ku.EMPTY_NODE.updateChild(this.indexPath_,bu);return new Ys(Ho,e)}},{key:"toString",value:function(){return Ds(this.indexPath_,0).join("/")}}]),r}(Js),xu=function(t){"use strict";e(C)(r,t);var n=e(D)(r);function r(){return e(o)(this,r),n.apply(this,arguments)}return e(s)(r,[{key:"compare",value:function(e,t){var n=e.node.compareTo(t.node);return 0===n?zo(e.name,t.name):n}},{key:"isDefinedOn",value:function(e){return!0}},{key:"indexedValueChanged",value:function(e,t){return!e.equals(t)}},{key:"minPost",value:function(){return Ys.MIN}},{key:"maxPost",value:function(){return Ys.MAX}},{key:"makePost",value:function(e,t){var n=wu(e);return new Ys(t,n)}},{key:"toString",value:function(){return".value"}}]),r}(Js),Eu=new xu,Su="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Pu=(Iu=0,Cu=[],function(e){var t,n=e===Iu;Iu=e;var r=new Array(8);for(t=7;t>=0;t--)r[t]=Su.charAt(e%64),e=Math.floor(e/64);V(0===e,"Cannot push at time == 0");var i=r.join("");if(n){for(t=11;t>=0&&63===Cu[t];t--)Cu[t]=0;Cu[t]++}else for(t=0;t<12;t++)Cu[t]=Math.floor(64*Math.random());for(t=0;t<12;t++)i+=Su.charAt(Cu[t]);return V(20===i.length,"nextPushId: Length should be 20."),i});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nu(e){return{type:"value",snapshotNode:e}}function Ru(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Ou(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Au(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Du=function(){"use strict";function t(n){e(o)(this,t),this.index_=n}return e(s)(t,[{key:"updateChild",value:function(e,t,n,r,i,a){V(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");var o=e.getImmediateChild(t);return o.getChild(r).equals(n.getChild(r))&&o.isEmpty()===n.isEmpty()?e:(null!=a&&(n.isEmpty()?e.hasChild(t)?a.trackChildChange(Ou(t,o)):V(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?a.trackChildChange(Ru(t,n)):a.trackChildChange(Au(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}},{key:"updateFullNode",value:function(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(vu,(function(e,r){t.hasChild(e)||n.trackChildChange(Ou(e,r))})),t.isLeafNode()||t.forEachChild(vu,(function(t,r){if(e.hasChild(t)){var i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(Au(t,r,i))}else n.trackChildChange(Ru(t,r))}))),t.withIndex(this.index_)}},{key:"updatePriority",value:function(e,t){return e.isEmpty()?ku.EMPTY_NODE:e.updatePriority(t)}},{key:"filtersNodes",value:function(){return!1}},{key:"getIndexedFilter",value:function(){return this}},{key:"getIndex",value:function(){return this.index_}}]),t}(),Lu=function(){"use strict";function t(n){e(o)(this,t),this.indexedFilter_=new Du(n.getIndex()),this.index_=n.getIndex(),this.startPost_=t.getStartPost_(n),this.endPost_=t.getEndPost_(n)}return e(s)(t,[{key:"getStartPost",value:function(){return this.startPost_}},{key:"getEndPost",value:function(){return this.endPost_}},{key:"matches",value:function(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}},{key:"updateChild",value:function(e,t,n,r,i,a){return this.matches(new Ys(t,n))||(n=ku.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,a)}},{key:"updateFullNode",value:function(e,t,n){t.isLeafNode()&&(t=ku.EMPTY_NODE);var r=t.withIndex(this.index_);r=r.updatePriority(ku.EMPTY_NODE);var i=this;return t.forEachChild(vu,(function(e,t){i.matches(new Ys(e,t))||(r=r.updateImmediateChild(e,ku.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}},{key:"updatePriority",value:function(e,t){return e}},{key:"filtersNodes",value:function(){return!0}},{key:"getIndexedFilter",value:function(){return this.indexedFilter_}},{key:"getIndex",value:function(){return this.index_}}],[{key:"getStartPost_",value:function(e){if(e.hasStart()){var t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}},{key:"getEndPost_",value:function(e){if(e.hasEnd()){var t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}]),t}(),Mu=function(){"use strict";function t(n){e(o)(this,t),this.rangedFilter_=new Lu(n),this.index_=n.getIndex(),this.limit_=n.getLimit(),this.reverse_=!n.isViewFromLeft()}return e(s)(t,[{key:"updateChild",value:function(e,t,n,r,i,a){return this.rangedFilter_.matches(new Ys(t,n))||(n=ku.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,a):this.fullLimitUpdateChild_(e,t,n,i,a)}},{key:"updateFullNode",value:function(e,t,n){var r;if(t.isLeafNode()||t.isEmpty())r=ku.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){var i;r=ku.EMPTY_NODE.withIndex(this.index_),i=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);for(var a=0;i.hasNext()&&a<this.limit_;){var o=i.getNext();if(!(this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),o)<=0:this.index_.compare(o,this.rangedFilter_.getEndPost())<=0))break;r=r.updateImmediateChild(o.name,o.node),a++}}else{var s,u,c,l;if(r=(r=t.withIndex(this.index_)).updatePriority(ku.EMPTY_NODE),this.reverse_){l=r.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),u=this.rangedFilter_.getStartPost();var h=this.index_.getCompare();c=function(e,t){return h(t,e)}}else l=r.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),u=this.rangedFilter_.getEndPost(),c=this.index_.getCompare();for(var d=0,f=!1;l.hasNext();){var v=l.getNext();!f&&c(s,v)<=0&&(f=!0),f&&d<this.limit_&&c(v,u)<=0?d++:r=r.updateImmediateChild(v.name,ku.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}},{key:"updatePriority",value:function(e,t){return e}},{key:"filtersNodes",value:function(){return!0}},{key:"getIndexedFilter",value:function(){return this.rangedFilter_.getIndexedFilter()}},{key:"getIndex",value:function(){return this.index_}},{key:"fullLimitUpdateChild_",value:function(e,t,n,r,i){var a;if(this.reverse_){var o=this.index_.getCompare();a=function(e,t){return o(t,e)}}else a=this.index_.getCompare();var s=e;V(s.numChildren()===this.limit_,"");var u=new Ys(t,n),c=this.reverse_?s.getFirstChild(this.index_):s.getLastChild(this.index_),l=this.rangedFilter_.matches(u);if(s.hasChild(t)){for(var h=s.getImmediateChild(t),d=r.getChildAfterChild(this.index_,c,this.reverse_);null!=d&&(d.name===t||s.hasChild(d.name));)d=r.getChildAfterChild(this.index_,d,this.reverse_);var f=null==d?1:a(d,u);if(l&&!n.isEmpty()&&f>=0)return null!=i&&i.trackChildChange(Au(t,n,h)),s.updateImmediateChild(t,n);null!=i&&i.trackChildChange(Ou(t,h));var v=s.updateImmediateChild(t,ku.EMPTY_NODE);return null!=d&&this.rangedFilter_.matches(d)?(null!=i&&i.trackChildChange(Ru(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}return n.isEmpty()?e:l&&a(c,u)>=0?(null!=i&&(i.trackChildChange(Ou(c.name,c.node)),i.trackChildChange(Ru(t,n))),s.updateImmediateChild(t,n).updateImmediateChild(c.name,ku.EMPTY_NODE)):e}}]),t}(),Fu=function(){"use strict";function t(){e(o)(this,t),this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=vu}return e(s)(t,[{key:"hasStart",value:function(){return this.startSet_}},{key:"hasStartAfter",value:function(){return this.startAfterSet_}},{key:"hasEndBefore",value:function(){return this.endBeforeSet_}},{key:"isViewFromLeft",value:function(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}},{key:"getIndexStartValue",value:function(){return V(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}},{key:"getIndexStartName",value:function(){return V(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Vo}},{key:"hasEnd",value:function(){return this.endSet_}},{key:"getIndexEndValue",value:function(){return V(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}},{key:"getIndexEndName",value:function(){return V(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ho}},{key:"hasLimit",value:function(){return this.limitSet_}},{key:"hasAnchoredLimit",value:function(){return this.limitSet_&&""!==this.viewFrom_}},{key:"getLimit",value:function(){return V(this.limitSet_,"Only valid if limit has been set"),this.limit_}},{key:"getIndex",value:function(){return this.index_}},{key:"loadsAllData",value:function(){return!(this.startSet_||this.endSet_||this.limitSet_)}},{key:"isDefault",value:function(){return this.loadsAllData()&&this.index_===vu}},{key:"copy",value:function(){var e=new t;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(e){var t,n={};return e.isDefault()||(e.index_===vu?t="$priority":e.index_===Eu?t="$value":e.index_===Xs?t="$key":(V(e.index_ instanceof Tu,"Unrecognized index type!"),t=e.index_.toString()),n.orderBy=se(t),e.startSet_&&(n.startAt=se(e.indexStartValue_),e.startNameSet_&&(n.startAt+=","+se(e.indexStartName_))),e.endSet_&&(n.endAt=se(e.indexEndValue_),e.endNameSet_&&(n.endAt+=","+se(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?n.limitToFirst=e.limit_:n.limitToLast=e.limit_)),n}function qu(e){var t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;var n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==vu&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ju=function(t){"use strict";e(C)(r,t);var n=e(D)(r);function r(t,i,a,s){var u;return e(o)(this,r),(u=n.call(this)).repoInfo_=t,u.onDataUpdate_=i,u.authTokenProvider_=a,u.appCheckTokenProvider_=s,u.log_=Fo("p:rest:"),u.listens_={},u}return e(s)(r,[{key:"reportStats",value:function(e){throw new Error("Method not implemented.")}},{key:"listen",value:function(e,t,n,i){var a=this,o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);var s=r.getListenId_(e,n),u={};this.listens_[s]=u;var c=Uu(e._queryParams);this.restRequest_(o+".json",c,(function(e,t){var r=t;(404===e&&(r=null,e=null),null===e&&a.onDataUpdate_(o,r,!1,n),he(a.listens_,s)===u)&&i(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)}))}},{key:"unlisten",value:function(e,t){var n=r.getListenId_(e,t);delete this.listens_[n]}},{key:"get",value:function(e){var t=this,n=Uu(e._queryParams),r=e._path.toString(),i=new X;return this.restRequest_(r+".json",n,(function(e,n){var a=n;404===e&&(a=null,e=null),null===e?(t.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))})),i.promise}},{key:"refreshAuthToken",value:function(e){}},{key:"restRequest_",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,i=this;return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((function(a){var o=e(_)(a,2),s=o[0],u=o[1],c=i;s&&s.accessToken&&(n.auth=s.accessToken),u&&u.token&&(n.ac=u.token);var l=(i.repoInfo_.secure?"https://":"http://")+i.repoInfo_.host+t+"?ns="+i.repoInfo_.namespace+ye(n);i.log_("Sending REST request for "+l);var h=new XMLHttpRequest;h.onreadystatechange=function(){if(r&&4===h.readyState){c.log_("REST Response for "+l+" received. status:",h.status,"response:",h.responseText);var e=null;if(h.status>=200&&h.status<300){try{e=oe(h.responseText)}catch(e){jo("Failed to parse JSON response for "+l+": "+h.responseText)}r(null,e)}else 401!==h.status&&404!==h.status&&jo("Got unsuccessful REST response for "+l+" Status: "+h.status),r(h.status);r=null}},h.open("GET",l,!0),h.send()}))}}],[{key:"getListenId_",value:function(e,t){return void 0!==t?"tag$"+t:(V(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}}]),r}(Ts),Wu=function(){"use strict";function t(){e(o)(this,t),this.rootNode_=ku.EMPTY_NODE}return e(s)(t,[{key:"getNode",value:function(e){return this.rootNode_.getChild(e)}},{key:"updateSnapshot",value:function(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vu(){return{value:null,children:new Map}}function Hu(e,t,n){if(Fs(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{var r=Ns(t);e.children.has(r)||e.children.set(r,Vu()),Hu(e.children.get(r),t=Os(t),n)}}function zu(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((function(e,n){t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,(function(e,r){zu(r,new Ss(t.toString()+"/"+e),n)}))}var Bu,Ku,Gu=function(){"use strict";function t(n){e(o)(this,t),this.collection_=n,this.last_=null}return e(s)(t,[{key:"get",value:function(){var e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Jo(this.last_,(function(e,n){t[e]=t[e]-n})),this.last_=e,t}}]),t}(),Yu=function(){"use strict";function t(n,r){e(o)(this,t),this.server_=r,this.statsToReport_={},this.statsListener_=new Gu(n);var i=1e4+2e4*Math.random();ns(this.reportStats_.bind(this),Math.floor(i))}return e(s)(t,[{key:"reportStats_",value:function(){var e=this,t=this.statsListener_.get(),n={},r=!1;Jo(t,(function(t,i){i>0&&le(e.statsToReport_,t)&&(n[t]=i,r=!0)})),r&&this.server_.reportStats(n),ns(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Ku=Bu||(Bu={}))[Ku.OVERWRITE=0]="OVERWRITE",Ku[Ku.MERGE=1]="MERGE",Ku[Ku.ACK_USER_WRITE=2]="ACK_USER_WRITE",Ku[Ku.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";var Qu,Xu=function(){"use strict";function t(n,r,i){e(o)(this,t),this.path=n,this.affectedTree=r,this.revert=i,this.type=Bu.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}return e(s)(t,[{key:"operationForChild",value:function(e){if(Fs(this.path)){if(null!=this.affectedTree.value)return V(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;var n=this.affectedTree.subtree(new Ss(e));return new t(Ps(),n,this.revert)}return V(Ns(this.path)===e,"operationForChild called for unrelated child."),new t(Os(this.path),this.affectedTree,this.revert)}}]),t}(),$u=function(){"use strict";function t(n,r){e(o)(this,t),this.source=n,this.path=r,this.type=Bu.LISTEN_COMPLETE}return e(s)(t,[{key:"operationForChild",value:function(e){return Fs(this.path)?new t(this.source,Ps()):new t(this.source,Os(this.path))}}]),t}(),Zu=function(){"use strict";function t(n,r,i){e(o)(this,t),this.source=n,this.path=r,this.snap=i,this.type=Bu.OVERWRITE}return e(s)(t,[{key:"operationForChild",value:function(e){return Fs(this.path)?new t(this.source,Ps(),this.snap.getImmediateChild(e)):new t(this.source,Os(this.path),this.snap)}}]),t}(),ec=function(){"use strict";function t(n,r,i){e(o)(this,t),this.source=n,this.path=r,this.children=i,this.type=Bu.MERGE}return e(s)(t,[{key:"operationForChild",value:function(e){if(Fs(this.path)){var n=this.children.subtree(new Ss(e));return n.isEmpty()?null:n.value?new Zu(this.source,Ps(),n.value):new t(this.source,Ps(),n)}return V(Ns(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new t(this.source,Os(this.path),this.children)}},{key:"toString",value:function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}]),t}(),tc=function(){"use strict";function t(n,r,i){e(o)(this,t),this.node_=n,this.fullyInitialized_=r,this.filtered_=i}return e(s)(t,[{key:"isFullyInitialized",value:function(){return this.fullyInitialized_}},{key:"isFiltered",value:function(){return this.filtered_}},{key:"isCompleteForPath",value:function(e){if(Fs(e))return this.isFullyInitialized()&&!this.filtered_;var t=Ns(e);return this.isCompleteForChild(t)}},{key:"isCompleteForChild",value:function(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}},{key:"getNode",value:function(){return this.node_}}]),t}(),nc=function t(n){"use strict";e(o)(this,t),this.query_=n,this.index_=this.query_._queryParams.getIndex()};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(e,t,n,r,i,a){var o=r.filter((function(e){return e.type===n}));o.sort((function(t,n){return function(e,t,n){if(null==t.childName||null==n.childName)throw H("Should only compare child_ events.");var r=new Ys(t.childName,t.snapshotNode),i=new Ys(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n)})),o.forEach((function(n){var r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,a);i.forEach((function(i){i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function ic(e,t){return{eventCache:e,serverCache:t}}function ac(e,t,n,r){return ic(new tc(t,n,r),e.serverCache)}function oc(e,t,n,r){return ic(e.eventCache,new tc(t,n,r))}function sc(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function uc(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cc=function(){return Qu||(Qu=new nu(Bo)),Qu},lc=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:cc();e(o)(this,t),this.value=n,this.children=r}return e(s)(t,[{key:"isEmpty",value:function(){return null===this.value&&this.children.isEmpty()}},{key:"findRootMostMatchingPathAndValue",value:function(e,t){if(null!=this.value&&t(this.value))return{path:Ps(),value:this.value};if(Fs(e))return null;var n=Ns(e),r=this.children.get(n);if(null!==r){var i=r.findRootMostMatchingPathAndValue(Os(e),t);return null!=i?{path:Ms(new Ss(n),i.path),value:i.value}:null}return null}},{key:"findRootMostValueAndPath",value:function(e){return this.findRootMostMatchingPathAndValue(e,(function(){return!0}))}},{key:"subtree",value:function(e){if(Fs(e))return this;var n=Ns(e),r=this.children.get(n);return null!==r?r.subtree(Os(e)):new t(null)}},{key:"set",value:function(e,n){if(Fs(e))return new t(n,this.children);var r=Ns(e),i=(this.children.get(r)||new t(null)).set(Os(e),n),a=this.children.insert(r,i);return new t(this.value,a)}},{key:"remove",value:function(e){if(Fs(e))return this.children.isEmpty()?new t(null):new t(null,this.children);var n=Ns(e),r=this.children.get(n);if(r){var i,a=r.remove(Os(e));return i=a.isEmpty()?this.children.remove(n):this.children.insert(n,a),null===this.value&&i.isEmpty()?new t(null):new t(this.value,i)}return this}},{key:"get",value:function(e){if(Fs(e))return this.value;var t=Ns(e),n=this.children.get(t);return n?n.get(Os(e)):null}},{key:"setTree",value:function(e,n){if(Fs(e))return n;var r,i=Ns(e),a=(this.children.get(i)||new t(null)).setTree(Os(e),n);return r=a.isEmpty()?this.children.remove(i):this.children.insert(i,a),new t(this.value,r)}},{key:"fold",value:function(e){return this.fold_(Ps(),e)}},{key:"fold_",value:function(e,t){var n={};return this.children.inorderTraversal((function(r,i){n[r]=i.fold_(Ms(e,r),t)})),t(e,this.value,n)}},{key:"findOnPath",value:function(e,t){return this.findOnPath_(e,Ps(),t)}},{key:"findOnPath_",value:function(e,t,n){var r=!!this.value&&n(t,this.value);if(r)return r;if(Fs(e))return null;var i=Ns(e),a=this.children.get(i);return a?a.findOnPath_(Os(e),Ms(t,i),n):null}},{key:"foreachOnPath",value:function(e,t){return this.foreachOnPath_(e,Ps(),t)}},{key:"foreachOnPath_",value:function(e,n,r){if(Fs(e))return this;this.value&&r(n,this.value);var i=Ns(e),a=this.children.get(i);return a?a.foreachOnPath_(Os(e),Ms(n,i),r):new t(null)}},{key:"foreach",value:function(e){this.foreach_(Ps(),e)}},{key:"foreach_",value:function(e,t){this.children.inorderTraversal((function(n,r){r.foreach_(Ms(e,n),t)})),this.value&&t(e,this.value)}},{key:"foreachChild",value:function(e){this.children.inorderTraversal((function(t,n){n.value&&e(t,n.value)}))}}],[{key:"fromObject",value:function(e){var n=new t(null);return Jo(e,(function(e,t){n=n.set(new Ss(e),t)})),n}}]),t}(),hc=function(){"use strict";function t(n){e(o)(this,t),this.writeTree_=n}return e(s)(t,null,[{key:"empty",value:function(){return new t(new lc(null))}}]),t}();function dc(e,t,n){if(Fs(t))return new hc(new lc(n));var r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){var i=r.path,a=r.value,o=Us(i,t);return a=a.updateChild(o,n),new hc(e.writeTree_.set(i,a))}var s=new lc(n),u=e.writeTree_.setTree(t,s);return new hc(u)}function fc(e,t,n){var r=e;return Jo(n,(function(e,n){r=dc(r,Ms(t,e),n)})),r}function vc(e,t){if(Fs(t))return hc.empty();var n=e.writeTree_.setTree(t,new lc(null));return new hc(n)}function pc(e,t){return null!=yc(e,t)}function yc(e,t){var n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Us(n.path,t)):null}function _c(e){var t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(vu,(function(e,n){t.push(new Ys(e,n))})):e.writeTree_.children.inorderTraversal((function(e,n){null!=n.value&&t.push(new Ys(e,n.value))})),t}function mc(e,t){if(Fs(t))return e;var n=yc(e,t);return new hc(null!=n?new lc(n):e.writeTree_.subtree(t))}function gc(e){return e.writeTree_.isEmpty()}function kc(e,t){return bc(Ps(),e.writeTree_,t)}function bc(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);var r=null;return t.children.inorderTraversal((function(t,i){".priority"===t?(V(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=bc(Ms(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(Ms(e,".priority"),r)),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(e,t){return Mc(t,e)}function Ic(e,t){for(var n=0;n<e.allWrites.length;n++){var r=e.allWrites[n];if(r.writeId===t)return r}return null}function Cc(e,t){var n=e.allWrites.findIndex((function(e){return e.writeId===t}));V(n>=0,"removeWrite called with nonexistent writeId.");var r=e.allWrites[n];e.allWrites.splice(n,1);for(var i=r.visible,a=!1,o=e.allWrites.length-1;i&&o>=0;){var s=e.allWrites[o];s.visible&&(o>=n&&Tc(s,r.path)?i=!1:js(r.path,s.path)&&(a=!0)),o--}if(i){if(a)return function(e){e.visibleWrites=Ec(e.allWrites,xc,Ps()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;r.snap?e.visibleWrites=vc(e.visibleWrites,r.path):Jo(r.children,(function(t){e.visibleWrites=vc(e.visibleWrites,Ms(r.path,t))}));return!0}return!1}function Tc(e,t){if(e.snap)return js(e.path,t);for(var n in e.children)if(e.children.hasOwnProperty(n)&&js(Ms(e.path,n),t))return!0;return!1}function xc(e){return e.visible}function Ec(e,t,n){for(var r=hc.empty(),i=0;i<e.length;++i){var a=e[i];if(t(a)){var o=a.path,s=void 0;if(a.snap)js(n,o)?r=dc(r,s=Us(n,o),a.snap):js(o,n)&&(s=Us(o,n),r=dc(r,Ps(),a.snap.getChild(s)));else{if(!a.children)throw H("WriteRecord should have .snap or .children");if(js(n,o))r=fc(r,s=Us(n,o),a.children);else if(js(o,n))if(Fs(s=Us(o,n)))r=fc(r,Ps(),a.children);else{var u=he(a.children,Ns(s));if(u){var c=u.getChild(Os(s));r=dc(r,Ps(),c)}}}}}return r}function Sc(e,t,n,r,i){if(r||i){var a=mc(e.visibleWrites,t);if(!i&&gc(a))return n;if(i||null!=n||pc(a,Ps())){return kc(Ec(e.allWrites,(function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(js(e.path,t)||js(t,e.path))}),t),n||ku.EMPTY_NODE)}return null}var o=yc(e.visibleWrites,t);if(null!=o)return o;var s=mc(e.visibleWrites,t);return gc(s)?n:null!=n||pc(s,Ps())?kc(s,n||ku.EMPTY_NODE):null}function Pc(e,t,n,r){return Sc(e.writeTree,e.treePath,t,n,r)}function Nc(e,t){return function(e,t,n){var r=ku.EMPTY_NODE,i=yc(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(vu,(function(e,t){r=r.updateImmediateChild(e,t)})),r;if(n){var a=mc(e.visibleWrites,t);return n.forEachChild(vu,(function(e,t){var n=kc(mc(a,new Ss(e)),t);r=r.updateImmediateChild(e,n)})),_c(a).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}return _c(mc(e.visibleWrites,t)).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function Rc(e,t,n,r){return function(e,t,n,r,i){V(r||i,"Either existingEventSnap or existingServerSnap must exist");var a=Ms(t,n);if(pc(e.visibleWrites,a))return null;var o=mc(e.visibleWrites,a);return gc(o)?i.getChild(n):kc(o,i.getChild(n))}(e.writeTree,e.treePath,t,n,r)}function Oc(e,t){return function(e,t){return yc(e.visibleWrites,t)}(e.writeTree,Ms(e.treePath,t))}function Ac(e,t,n,r,i,a){return function(e,t,n,r,i,a,o){var s,u=mc(e.visibleWrites,t),c=yc(u,Ps());if(null!=c)s=c;else{if(null==n)return[];s=kc(u,n)}if((s=s.withIndex(o)).isEmpty()||s.isLeafNode())return[];for(var l=[],h=o.getCompare(),d=a?s.getReverseIteratorFrom(r,o):s.getIteratorFrom(r,o),f=d.getNext();f&&l.length<i;)0!==h(f,r)&&l.push(f),f=d.getNext();return l}(e.writeTree,e.treePath,t,n,r,i,a)}function Dc(e,t,n){return function(e,t,n,r){var i=Ms(t,n),a=yc(e.visibleWrites,i);return null!=a?a:r.isCompleteForChild(n)?kc(mc(e.visibleWrites,i),r.getNode().getImmediateChild(n)):null}(e.writeTree,e.treePath,t,n)}function Lc(e,t){return Mc(Ms(e.treePath,t),e.writeTree)}function Mc(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fc=function(){"use strict";function t(){e(o)(this,t),this.changeMap=new Map}return e(s)(t,[{key:"trackChildChange",value:function(e){var t=e.type,n=e.childName;V("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),V(".priority"!==n,"Only non-priority child changes can be tracked.");var r=this.changeMap.get(n);if(r){var i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Au(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Ou(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,Ru(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw H("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Au(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}},{key:"getChanges",value:function(){return Array.from(this.changeMap.values())}}]),t}(),Uc=new(function(){"use strict";function t(){e(o)(this,t)}return e(s)(t,[{key:"getCompleteChild",value:function(e){return null}},{key:"getChildAfterChild",value:function(e,t,n){return null}}]),t}()),qc=function(){"use strict";function t(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e(o)(this,t),this.writes_=n,this.viewCache_=r,this.optCompleteServerCache_=i}return e(s)(t,[{key:"getCompleteChild",value:function(e){var t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);var n=null!=this.optCompleteServerCache_?new tc(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Dc(this.writes_,e,n)}},{key:"getChildAfterChild",value:function(e,t,n){var r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:uc(this.viewCache_),i=Ac(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(e,t,n,r,i){var a,o,s=new Fc;if(n.type===Bu.OVERWRITE){var u=n;u.source.fromUser?a=Hc(e,t,u.path,u.snap,r,i,s):(V(u.source.fromServer,"Unknown source."),o=u.source.tagged||t.serverCache.isFiltered()&&!Fs(u.path),a=Vc(e,t,u.path,u.snap,r,i,o,s))}else if(n.type===Bu.MERGE){var c=n;c.source.fromUser?a=function(e,t,n,r,i,a,o){var s=t;return r.foreach((function(r,u){var c=Ms(n,r);zc(t,Ns(c))&&(s=Hc(e,s,c,u,i,a,o))})),r.foreach((function(r,u){var c=Ms(n,r);zc(t,Ns(c))||(s=Hc(e,s,c,u,i,a,o))})),s}(e,t,c.path,c.children,r,i,s):(V(c.source.fromServer,"Unknown source."),o=c.source.tagged||t.serverCache.isFiltered(),a=Kc(e,t,c.path,c.children,r,i,o,s))}else if(n.type===Bu.ACK_USER_WRITE){var l=n;a=l.revert?function(e,t,n,r,i,a){var o;if(null!=Oc(r,n))return t;var s,u=new qc(r,t,i),c=t.eventCache.getNode();if(Fs(n)||".priority"===Ns(n)){var l;if(t.serverCache.isFullyInitialized())l=Pc(r,uc(t));else{var h=t.serverCache.getNode();V(h instanceof ku,"serverChildren would be complete if leaf node"),l=Nc(r,h)}s=e.filter.updateFullNode(c,l,a)}else{var d=Ns(n),f=Dc(r,d,t.serverCache);null==f&&t.serverCache.isCompleteForChild(d)&&(f=c.getImmediateChild(d)),(s=null!=f?e.filter.updateChild(c,d,f,Os(n),u,a):t.eventCache.getNode().hasChild(d)?e.filter.updateChild(c,d,ku.EMPTY_NODE,Os(n),u,a):c).isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Pc(r,uc(t))).isLeafNode()&&(s=e.filter.updateFullNode(s,o,a))}return o=t.serverCache.isFullyInitialized()||null!=Oc(r,Ps()),ac(t,s,o,e.filter.filtersNodes())}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,l.path,r,i,s):function(e,t,n,r,i,a,o){if(null!=Oc(i,n))return t;var s=t.serverCache.isFiltered(),u=t.serverCache;if(null!=r.value){if(Fs(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Vc(e,t,n,u.getNode().getChild(n),i,a,s,o);if(Fs(n)){var c=new lc(null);return u.getNode().forEachChild(Xs,(function(e,t){c=c.set(new Ss(e),t)})),Kc(e,t,n,c,i,a,s,o)}return t}var l=new lc(null);return r.foreach((function(e,t){var r=Ms(n,e);u.isCompleteForPath(r)&&(l=l.set(e,u.getNode().getChild(r)))})),Kc(e,t,n,l,i,a,s,o)}(e,t,l.path,l.affectedTree,r,i,s)}else{if(n.type!==Bu.LISTEN_COMPLETE)throw H("Unknown operation type: "+n.type);a=function(e,t,n,r,i){var a=t.serverCache,o=oc(t,a.getNode(),a.isFullyInitialized()||Fs(n),a.isFiltered());return Wc(e,o,n,r,Uc,i)}(e,t,n.path,r,s)}var h=s.getChanges();return function(e,t,n){var r=t.eventCache;if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=sc(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&n.push(Nu(sc(t)))}}(t,a,h),{viewCache:a,changes:h}}function Wc(e,t,n,r,i,a){var o,s,u=t.eventCache;if(null!=Oc(r,n))return t;if(Fs(n))if(V(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){var c=uc(t),l=Nc(r,c instanceof ku?c:ku.EMPTY_NODE);o=e.filter.updateFullNode(t.eventCache.getNode(),l,a)}else{var h=Pc(r,uc(t));o=e.filter.updateFullNode(t.eventCache.getNode(),h,a)}else{var d=Ns(n);if(".priority"===d){V(1===Rs(n),"Can't have a priority with additional path components");var f=u.getNode(),v=Rc(r,n,f,s=t.serverCache.getNode());o=null!=v?e.filter.updatePriority(f,v):u.getNode()}else{var p,y=Os(n);if(u.isCompleteForChild(d)){s=t.serverCache.getNode();var _=Rc(r,n,u.getNode(),s);p=null!=_?u.getNode().getImmediateChild(d).updateChild(y,_):u.getNode().getImmediateChild(d)}else p=Dc(r,d,t.serverCache);o=null!=p?e.filter.updateChild(u.getNode(),d,p,y,i,a):u.getNode()}}return ac(t,o,u.isFullyInitialized()||Fs(n),e.filter.filtersNodes())}function Vc(e,t,n,r,i,a,o,s){var u,c=t.serverCache,l=o?e.filter:e.filter.getIndexedFilter();if(Fs(n))u=l.updateFullNode(c.getNode(),r,null);else if(l.filtersNodes()&&!c.isFiltered()){var h=c.getNode().updateChild(n,r);u=l.updateFullNode(c.getNode(),h,null)}else{var d=Ns(n);if(!c.isCompleteForPath(n)&&Rs(n)>1)return t;var f=Os(n),v=c.getNode().getImmediateChild(d).updateChild(f,r);u=".priority"===d?l.updatePriority(c.getNode(),v):l.updateChild(c.getNode(),d,v,f,Uc,null)}var p=oc(t,u,c.isFullyInitialized()||Fs(n),l.filtersNodes());return Wc(e,p,n,i,new qc(i,p,a),s)}function Hc(e,t,n,r,i,a,o){var s,u,c=t.eventCache,l=new qc(i,t,a);if(Fs(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,o),s=ac(t,u,!0,e.filter.filtersNodes());else{var h=Ns(n);if(".priority"===h)u=e.filter.updatePriority(t.eventCache.getNode(),r),s=ac(t,u,c.isFullyInitialized(),c.isFiltered());else{var d,f=Os(n),v=c.getNode().getImmediateChild(h);if(Fs(f))d=r;else{var p=l.getCompleteChild(h);d=null!=p?".priority"===As(f)&&p.getChild(Ls(f)).isEmpty()?p:p.updateChild(f,r):ku.EMPTY_NODE}if(v.equals(d))s=t;else s=ac(t,e.filter.updateChild(c.getNode(),h,d,f,l,o),c.isFullyInitialized(),e.filter.filtersNodes())}}return s}function zc(e,t){return e.eventCache.isCompleteForChild(t)}function Bc(e,t,n){return n.foreach((function(e,n){t=t.updateChild(e,n)})),t}function Kc(e,t,n,r,i,a,o,s){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;var u,c=t;u=Fs(n)?r:new lc(null).setTree(n,r);var l=t.serverCache.getNode();return u.children.inorderTraversal((function(n,r){if(l.hasChild(n)){var u=Bc(0,t.serverCache.getNode().getImmediateChild(n),r);c=Vc(e,c,new Ss(n),u,i,a,o,s)}})),u.children.inorderTraversal((function(n,r){var u=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!l.hasChild(n)&&!u){var h=Bc(0,t.serverCache.getNode().getImmediateChild(n),r);c=Vc(e,c,new Ss(n),h,i,a,o,s)}})),c}var Gc,Yc=function(){"use strict";function t(n,r){e(o)(this,t),this.query_=n,this.eventRegistrations_=[];var i,a=this.query_._queryParams,s=new Du(a.getIndex()),u=(i=a).loadsAllData()?new Du(i.getIndex()):i.hasLimit()?new Mu(i):new Lu(i);this.processor_=
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){return{filter:e}}(u);var c=r.serverCache,l=r.eventCache,h=s.updateFullNode(ku.EMPTY_NODE,c.getNode(),null),d=u.updateFullNode(ku.EMPTY_NODE,l.getNode(),null),f=new tc(h,c.isFullyInitialized(),s.filtersNodes()),v=new tc(d,l.isFullyInitialized(),u.filtersNodes());this.viewCache_=ic(v,f),this.eventGenerator_=new nc(this.query_)}return e(s)(t,[{key:"query",get:function(){return this.query_}}]),t}();function Jc(e,t){var n=uc(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Fs(t)&&!n.getImmediateChild(Ns(t)).isEmpty())?n.getChild(t):null}function Qc(e){return 0===e.eventRegistrations_.length}function Xc(e,t,n){var r=[];if(n){V(null==t,"A cancel should cancel all event registrations.");var i=e.query._path;e.eventRegistrations_.forEach((function(e){var t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){for(var a=[],o=0;o<e.eventRegistrations_.length;++o){var s=e.eventRegistrations_[o];if(s.matches(t)){if(t.hasAnyCallback()){a=a.concat(e.eventRegistrations_.slice(o+1));break}}else a.push(s)}e.eventRegistrations_=a}else e.eventRegistrations_=[];return r}function $c(e,t,n,r){t.type===Bu.MERGE&&null!==t.source.queryId&&(V(uc(e.viewCache_),"We should always have a full cache before handling merges"),V(sc(e.viewCache_),"Missing event cache, even though we have a server cache"));var i,a,o=e.viewCache_,s=jc(e.processor_,o,t,n,r);return i=e.processor_,a=s.viewCache,V(a.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),V(a.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed"),V(s.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Zc(e,s.changes,s.viewCache.eventCache.getNode(),null)}function Zc(e,t,n,r){var i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){var i=[],a=[];return t.forEach((function(t){var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&a.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),rc(e,i,"child_removed",t,r,n),rc(e,i,"child_added",t,r,n),rc(e,i,"child_moved",a,r,n),rc(e,i,"child_changed",t,r,n),rc(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var el,tl=function t(){"use strict";e(o)(this,t),this.views=new Map};function nl(e){return 0===e.views.size}function rl(e,t,n,r){var i=t.source.queryId;if(null!==i){var a=e.views.get(i);return V(null!=a,"SyncTree gave us an op for an invalid query."),$c(a,t,n,r)}var o=[],s=!0,u=!1,c=void 0;try{for(var l,h=e.views.values()[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var d=l.value;o=o.concat($c(d,t,n,r))}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}return o}function il(e,t,n,r,i){var a=t._queryIdentifier,o=e.views.get(a);if(!o){var s=Pc(n,i?r:null),u=!1;s?u=!0:r instanceof ku?(s=Nc(n,r),u=!1):(s=ku.EMPTY_NODE,u=!1);var c=ic(new tc(s,u,!1),new tc(r,i,!1));return new Yc(t,c)}return o}function al(e,t,n,r,i,a){var o=il(e,t,r,i,a);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){var n=e.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(vu,(function(e,t){r.push(Ru(e,t))})),n.isFullyInitialized()&&r.push(Nu(n.getNode())),Zc(e,r,n.getNode(),t)}(o,n)}function ol(t,n,r,i){var a=n._queryIdentifier,o=[],s=[],u=hl(t),c=!0,l=!1,h=void 0;if("default"===a)try{for(var d,f=t.views.entries()[Symbol.iterator]();!(c=(d=f.next()).done);c=!0){var v=e(_)(d.value,2),p=v[0],y=v[1];s=s.concat(Xc(y,r,i)),Qc(y)&&(t.views.delete(p),y.query._queryParams.loadsAllData()||o.push(y.query))}}catch(e){l=!0,h=e}finally{try{c||null==f.return||f.return()}finally{if(l)throw h}}else{var m=t.views.get(a);m&&(s=s.concat(Xc(m,r,i)),Qc(m)&&(t.views.delete(a),m.query._queryParams.loadsAllData()||o.push(m.query)))}return u&&!hl(t)&&o.push(new(V(Gc,"Reference.ts has not been loaded"),Gc)(n._repo,n._path)),{removed:o,events:s}}function sl(e){var t=[],n=!0,r=!1,i=void 0;try{for(var a,o=e.views.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;s.query._queryParams.loadsAllData()||t.push(s)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t}function ul(e,t){var n=null,r=!0,i=!1,a=void 0;try{for(var o,s=e.views.values()[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n=n||Jc(u,t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}function cl(e,t){if(t._queryParams.loadsAllData())return dl(e);var n=t._queryIdentifier;return e.views.get(n)}function ll(e,t){return null!=cl(e,t)}function hl(e){return null!=dl(e)}function dl(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.views.values()[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(o.query._queryParams.loadsAllData())return o}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fl=1,vl=function t(n){"use strict";e(o)(this,t),this.listenProvider_=n,this.syncPointTree_=new lc(null),this.pendingWriteTree_={visibleWrites:hc.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map};function pl(e,t,n,r,i){return function(e,t,n,r,i){V(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=dc(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?wl(e,new Zu({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function yl(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Ic(e.pendingWriteTree_,t),i=Cc(e.pendingWriteTree_,t);if(i){var a=new lc(null);return null!=r.snap?a=a.set(Ps(),!0):Jo(r.children,(function(e){a=a.set(new Ss(e),!0)})),wl(e,new Xu(r.path,a,n))}return[]}function _l(e,t,n){return wl(e,new Zu({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function ml(e,t,n,r){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=t._path,o=e.syncPointTree_.get(a),s=[];if(o&&("default"===t._queryIdentifier||ll(o,t))){var u=ol(o,t,n,r);nl(o)&&(e.syncPointTree_=e.syncPointTree_.remove(a));var c=u.removed;if(s=u.events,!i){var l=-1!==c.findIndex((function(e){return e._queryParams.loadsAllData()})),h=e.syncPointTree_.findOnPath(a,(function(e,t){return hl(t)}));if(l&&!h){var d=e.syncPointTree_.subtree(a);if(!d.isEmpty())for(var f=Rl(d),v=0;v<f.length;++v){var p=f[v],y=p.query,_=Tl(e,p);e.listenProvider_.startListening(Ol(y),xl(e,y),_.hashFn,_.onComplete)}}if(!h&&c.length>0&&!r)if(l){var m=null;e.listenProvider_.stopListening(Ol(t),m)}else c.forEach((function(t){var n=e.queryToTagMap.get(El(t));e.listenProvider_.stopListening(Ol(t),n)}))}Al(e,c)}return s}function gl(e,t,n,r){var i=Sl(e,r);if(null!=i){var a=Pl(i),o=a.path,s=a.queryId,u=Us(o,t);return Nl(e,o,new Zu(Ju(s),u,n))}return[]}function kl(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=t._path,a=null,o=!1;e.syncPointTree_.foreachOnPath(i,(function(e,t){var n=Us(e,i);a=a||ul(t,n),o=o||hl(t)}));var s,u=e.syncPointTree_.get(i);if(u?(o=o||hl(u),a=a||ul(u,Ps())):(u=new tl,e.syncPointTree_=e.syncPointTree_.set(i,u)),null!=a)s=!0;else{s=!1,a=ku.EMPTY_NODE;var c=e.syncPointTree_.subtree(i);c.foreachChild((function(e,t){var n=ul(t,Ps());n&&(a=a.updateImmediateChild(e,n))}))}var l=ll(u,t);if(!l&&!t._queryParams.loadsAllData()){var h=El(t);V(!e.queryToTagMap.has(h),"View does not exist, but we have a tag");var d=Dl();e.queryToTagMap.set(h,d),e.tagToQueryMap.set(d,h)}var f=wc(e.pendingWriteTree_,i),v=al(u,t,n,f,a,s);if(!l&&!o&&!r){var p=cl(u,t);v=v.concat(Ll(e,t,p))}return v}function bl(e,t,n){var r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,(function(e,n){var r=ul(n,Us(e,t));if(r)return r}));return Sc(r,t,i,n,!0)}function wl(e,t){return Il(t,e.syncPointTree_,null,wc(e.pendingWriteTree_,Ps()))}function Il(e,t,n,r){if(Fs(e.path))return Cl(e,t,n,r);var i=t.get(Ps());null==n&&null!=i&&(n=ul(i,Ps()));var a=[],o=Ns(e.path),s=e.operationForChild(o),u=t.children.get(o);if(u&&s){var c=n?n.getImmediateChild(o):null,l=Lc(r,o);a=a.concat(Il(s,u,c,l))}return i&&(a=a.concat(rl(i,e,r,n))),a}function Cl(e,t,n,r){var i=t.get(Ps());null==n&&null!=i&&(n=ul(i,Ps()));var a=[];return t.children.inorderTraversal((function(t,i){var o=n?n.getImmediateChild(t):null,s=Lc(r,t),u=e.operationForChild(t);u&&(a=a.concat(Cl(u,i,o,s)))})),i&&(a=a.concat(rl(i,e,r,n))),a}function Tl(e,t){var n=t.query,r=xl(e,n);return{hashFn:function(){var e=function(e){return e.viewCache_.serverCache.getNode()}(t)||ku.EMPTY_NODE;return e.hash()},onComplete:function(t){if("ok"===t)return r?function(e,t,n){var r=Sl(e,n);if(r){var i=Pl(r),a=i.path,o=i.queryId,s=Us(a,t);return Nl(e,a,new $u(Ju(o),s))}return[]}(e,n._path,r):function(e,t){return wl(e,new $u({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);var i=function(e,t){var n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");var r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return ml(e,n,null,i)}}}function xl(e,t){var n=El(t);return e.queryToTagMap.get(n)}function El(e){return e._path.toString()+"$"+e._queryIdentifier}function Sl(e,t){return e.tagToQueryMap.get(t)}function Pl(e){var t=e.indexOf("$");return V(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Ss(e.substr(0,t))}}function Nl(e,t,n){var r=e.syncPointTree_.get(t);return V(r,"Missing sync point for query tag that we're tracking"),rl(r,n,wc(e.pendingWriteTree_,t),null)}function Rl(e){return e.fold((function(e,t,n){if(t&&hl(t))return[dl(t)];var r=[];return t&&(r=sl(t)),Jo(n,(function(e,t){r=r.concat(t)})),r}))}function Ol(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(V(el,"Reference.ts has not been loaded"),el)(e._repo,e._path):e}function Al(e,t){for(var n=0;n<t.length;++n){var r=t[n];if(!r._queryParams.loadsAllData()){var i=El(r),a=e.queryToTagMap.get(i);e.queryToTagMap.delete(i),e.tagToQueryMap.delete(a)}}}function Dl(){return fl++}function Ll(e,t,n){var r=t._path,i=xl(e,t),a=Tl(e,n),o=e.listenProvider_.startListening(Ol(t),i,a.hashFn,a.onComplete),s=e.syncPointTree_.subtree(r);if(i)V(!hl(s.value),"If we're adding a query, it shouldn't be shadowed");else for(var u=s.fold((function(e,t,n){if(!Fs(e)&&t&&hl(t))return[dl(t).query];var r=[];return t&&(r=r.concat(sl(t).map((function(e){return e.query})))),Jo(n,(function(e,t){r=r.concat(t)})),r})),c=0;c<u.length;++c){var l=u[c];e.listenProvider_.stopListening(Ol(l),xl(e,l))}return o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ml=function(){"use strict";function t(n){e(o)(this,t),this.node_=n}return e(s)(t,[{key:"getImmediateChild",value:function(e){return new t(this.node_.getImmediateChild(e))}},{key:"node",value:function(){return this.node_}}]),t}(),Fl=function(){"use strict";function t(n,r){e(o)(this,t),this.syncTree_=n,this.path_=r}return e(s)(t,[{key:"getImmediateChild",value:function(e){var n=Ms(this.path_,e);return new t(this.syncTree_,n)}},{key:"node",value:function(){return bl(this.syncTree_,this.path_)}}]),t}(),Ul=function(e,t,n){return e&&"object"==typeof e?(V(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?ql(e[".sv"],t,n):"object"==typeof e[".sv"]?jl(e[".sv"],t):void V(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},ql=function(e,t,n){if("timestamp"===e)return n.timestamp;V(!1,"Unexpected server value: "+e)},jl=function(e,t,n){e.hasOwnProperty("increment")||V(!1,"Unexpected server value: "+JSON.stringify(e,null,2));var r=e.increment;"number"!=typeof r&&V(!1,"Unexpected increment value: "+r);var i=t.node();if(V(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;var a=i.getValue();return"number"!=typeof a?r:a+r},Wl=function(e,t,n,r){return Hl(t,new Fl(n,e),r)},Vl=function(e,t,n){return Hl(e,new Ml(t),n)};function Hl(e,t,n){var r,i=e.getPriority().val(),a=Ul(i,t.getImmediateChild(".priority"),n);if(e.isLeafNode()){var o=e,s=Ul(o.getValue(),t,n);return s!==o.getValue()||a!==o.getPriority().val()?new lu(s,wu(a)):e}var u=e;return r=u,a!==u.getPriority().val()&&(r=r.updatePriority(new lu(a))),u.forEachChild(vu,(function(e,i){var a=Hl(i,t.getImmediateChild(e),n);a!==i&&(r=r.updateImmediateChild(e,a))})),r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zl=function t(){"use strict";var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{children:{},childCount:0};e(o)(this,t),this.name=n,this.parent=r,this.node=i};function Bl(e,t){for(var n=t instanceof Ss?t:new Ss(t),r=e,i=Ns(n);null!==i;){var a=he(r.node.children,i)||{children:{},childCount:0};r=new zl(i,r,a),i=Ns(n=Os(n))}return r}function Kl(e){return e.node.value}function Gl(e,t){e.node.value=t,$l(e)}function Yl(e){return e.node.childCount>0}function Jl(e,t){Jo(e.node.children,(function(n,r){t(new zl(n,e,r))}))}function Ql(e,t,n,r){n&&!r&&t(e),Jl(e,(function(e){Ql(e,t,!0,r)})),n&&r&&t(e)}function Xl(e){return new Ss(null===e.parent?e.name:Xl(e.parent)+"/"+e.name)}function $l(e){null!==e.parent&&function(e,t,n){var r=function(e){return void 0===Kl(e)&&!Yl(e)}(n),i=le(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,$l(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,$l(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}var Zl=/[\[\].#$\/\u0000-\u001F\u007F]/,eh=/[\[\].#$\u0000-\u001F\u007F]/,th=10485760,nh=function(e){return"string"==typeof e&&0!==e.length&&!Zl.test(e)},rh=function(e){return"string"==typeof e&&0!==e.length&&!eh.test(e)},ih=function(e,t,n,r){r&&void 0===t||ah(we(e,"value"),t,n)},ah=function(e,t,n){var r=n instanceof Ss?new Ws(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Hs(r));if("function"==typeof t)throw new Error(e+"contains a function "+Hs(r)+" with contents = "+t.toString());if(Wo(t))throw new Error(e+"contains "+t.toString()+" "+Hs(r));if("string"==typeof t&&t.length>3495253.3333333335&&Ce(t)>th)throw new Error(e+"contains a string greater than "+"10485760 utf8 bytes "+Hs(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){var i=!1,a=!1;if(Jo(t,(function(t,n){if(".value"===t)i=!0;else if(".priority"!==t&&".sv"!==t&&(a=!0,!nh(t)))throw new Error(e+" contains an invalid key ("+t+") "+Hs(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,s;s=t,(o=r).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(s),o.byteLength_+=Ce(s),Vs(o),ah(e,n,r),function(e){var t=e.parts_.pop();e.byteLength_-=Ce(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),i&&a)throw new Error(e+' contains ".value" child '+Hs(r)+" in addition to actual children.")}},oh=function(e,t,n,r){if(!(r&&void 0===n||rh(n)))throw new Error(we(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},sh=function(e,t){if(".info"===Ns(t))throw new Error(e+" failed = Can't modify data under /.info/")},uh=function(e,t){var n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!nh(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),rh(e)}(n))throw new Error(we(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')},ch=function t(){"use strict";e(o)(this,t),this.eventLists_=[],this.recursionDepth_=0};function lh(e,t){for(var n=null,r=0;r<t.length;r++){var i=t[r],a=i.getPath();null===n||qs(a,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:a}),n.events.push(i)}n&&e.eventLists_.push(n)}function hh(e,t,n){lh(e,n),fh(e,(function(e){return qs(e,t)}))}function dh(e,t,n){lh(e,n),fh(e,(function(e){return js(e,t)||js(t,e)}))}function fh(e,t){e.recursionDepth_++;for(var n=!0,r=0;r<e.eventLists_.length;r++){var i=e.eventLists_[r];if(i)t(i.path)?(vh(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}n&&(e.eventLists_=[]),e.recursionDepth_--}function vh(e){for(var t=0;t<e.events.length;t++){var n=e.events[t];if(null!==n){e.events[t]=null;var r=n.getEventRunner();Ao&&Mo("event: "+n.toString()),ts(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ph="repo_interrupt",yh=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this.repoInfo_=n,this.forceRestClient_=r,this.authTokenProvider_=i,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ch,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Vu(),this.transactionQueueTree_=new zl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}return e(s)(t,[{key:"toString",value:function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}]),t}();function _h(e,t,n){if(e.stats_=ps(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new ju(e.repoInfo_,(function(t,n,r,i){kh(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((function(){return bh(e,!0)}),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{se(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Ks(e.repoInfo_,t,(function(t,n,r,i){kh(e,t,n,r,i)}),(function(t){bh(e,t)}),(function(t){!function(e,t){Jo(t,(function(t,n){wh(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}var r,i,a;e.authTokenProvider_.addTokenChangeListener((function(t){e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((function(t){e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=(r=e.repoInfo_,i=function(){return new Yu(e.stats_,e.server_)},a=r.toString(),vs[a]||(vs[a]=i()),vs[a]),e.infoData_=new Wu,e.infoSyncTree_=new vl({startListening:function(t,n,r,i){var a=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(a=_l(e.infoSyncTree_,t._path,o),setTimeout((function(){i("ok")}),0)),a},stopListening:function(){}}),wh(e,"connected",!1),e.serverSyncTree_=new vl({startListening:function(t,n,r,i){return e.server_.listen(t,r,n,(function(n,r){var a=i(n,r);dh(e.eventQueue_,t._path,a)})),[]},stopListening:function(t,n){e.server_.unlisten(t,n)}})}function mh(e){var t=e.infoData_.getNode(new Ss(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function gh(e){return(t=(t={timestamp:mh(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function kh(e,t,n,r,i){e.dataUpdateCount++;var a=new Ss(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;var o=[];if(i)if(r){var s=fe(n,(function(e){return wu(e)}));o=function(e,t,n,r){var i=Sl(e,r);if(i){var a=Pl(i),o=a.path,s=a.queryId,u=Us(o,t),c=lc.fromObject(n);return Nl(e,o,new ec(Ju(s),u,c))}return[]}(e.serverSyncTree_,a,s,i)}else{var u=wu(n);o=gl(e.serverSyncTree_,a,u,i)}else if(r){var c=fe(n,(function(e){return wu(e)}));o=function(e,t,n){var r=lc.fromObject(n);return wl(e,new ec({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,a,c)}else{var l=wu(n);o=_l(e.serverSyncTree_,a,l)}var h=a;o.length>0&&(h=Oh(e,a)),dh(e.eventQueue_,h,o)}function bh(e,t){wh(e,"connected",t),!1===t&&function(e){Eh(e,"onDisconnectEvents");var t=gh(e),n=Vu();zu(e.onDisconnect_,Ps(),(function(r,i){var a=Wl(r,i,e.serverSyncTree_,t);Hu(n,r,a)}));var r=[];zu(n,Ps(),(function(t,n){r=r.concat(_l(e.serverSyncTree_,t,n));var i=Fh(e,t);Oh(e,i)})),e.onDisconnect_=Vu(),dh(e.eventQueue_,Ps(),r)}(e)}function wh(e,t,n){var r=new Ss("/.info/"+t),i=wu(n);e.infoData_.updateSnapshot(r,i);var a=_l(e.infoSyncTree_,r,i);dh(e.eventQueue_,r,a)}function Ih(e){return e.nextWriteId_++}function Ch(e,t,n,r,i){Eh(e,"set",{path:t.toString(),value:n,priority:r});var a=gh(e),o=wu(n,r),s=bl(e.serverSyncTree_,t),u=Vl(o,s,a),c=Ih(e),l=pl(e.serverSyncTree_,t,u,c,!0);lh(e.eventQueue_,l),e.server_.put(t.toString(),o.val(!0),(function(n,r){var a="ok"===n;a||jo("set at "+t+" failed: "+n);var o=yl(e.serverSyncTree_,c,!a);dh(e.eventQueue_,t,o),Sh(e,i,n,r)}));var h=Fh(e,t);Oh(e,h),dh(e.eventQueue_,h,[])}function Th(e,t,n){var r;r=".info"===Ns(t._path)?ml(e.infoSyncTree_,t,n):ml(e.serverSyncTree_,t,n),hh(e.eventQueue_,t._path,r)}function xh(e){e.persistentConnection_&&e.persistentConnection_.interrupt(ph)}function Eh(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a="";t.persistentConnection_&&(a=t.persistentConnection_.id+":"),Mo.apply(void 0,[a].concat(e(l)(r)))}function Sh(e,t,n,r){t&&ts((function(){if("ok"===n)t(null);else{var e=(n||"error").toUpperCase(),i=e;r&&(i+=": "+r);var a=new Error(i);a.code=e,t(a)}}))}function Ph(e,t,n){return bl(e.serverSyncTree_,t,n)||ku.EMPTY_NODE}function Nh(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.transactionQueueTree_;if(t||Mh(e,t),Kl(t)){var n=Dh(e,t);V(n.length>0,"Sending zero length transaction queue");var r=n.every((function(e){return 0===e.status}));r&&Rh(e,Xl(t),n)}else Yl(t)&&Jl(t,(function(t){Nh(e,t)}))}function Rh(e,t,n){for(var r=n.map((function(e){return e.currentWriteId})),i=Ph(e,t,r),a=i,o=i.hash(),s=0;s<n.length;s++){var u=n[s];V(0===u.status,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;var c=Us(t,u.path);a=a.updateChild(c,u.currentOutputSnapshotRaw)}var l=a.val(!0),h=t;e.server_.put(h.toString(),l,(function(r){Eh(e,"transaction put response",{path:h.toString(),status:r});var i=[];if("ok"===r){for(var a=function(t){n[t].status=2,i=i.concat(yl(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&o.push((function(){return n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)})),n[t].unwatcher()},o=[],s=0;s<n.length;s++)a(s);Mh(e,Bl(e.transactionQueueTree_,t)),Nh(e,e.transactionQueueTree_),dh(e.eventQueue_,t,i);for(var u=0;u<o.length;u++)ts(o[u])}else{if("datastale"===r)for(var c=0;c<n.length;c++)3===n[c].status?n[c].status=4:n[c].status=0;else{jo("transaction at "+h.toString()+" failed: "+r);for(var l=0;l<n.length;l++)n[l].status=4,n[l].abortReason=r}Oh(e,t)}}),o)}function Oh(e,t){var n=Ah(e,t),r=Xl(n);return function(e,t,n){var r=function(r){var s,u=t[r],c=Us(n,u.path),l=!1,h=void 0;if(V(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===u.status)l=!0,h=u.abortReason,a=a.concat(yl(e.serverSyncTree_,u.currentWriteId,!0));else if(0===u.status)if(u.retryCount>=25)l=!0,h="maxretry",a=a.concat(yl(e.serverSyncTree_,u.currentWriteId,!0));else{var d=Ph(e,u.path,o);u.currentInputSnapshot=d;var f=t[r].update(d.val());if(void 0!==f){ah("transaction failed: Data returned ",f,u.path);var v=wu(f);"object"==typeof f&&null!=f&&le(f,".priority")||(v=v.updatePriority(d.getPriority()));var p=u.currentWriteId,y=gh(e),_=Vl(v,d,y);u.currentOutputSnapshotRaw=v,u.currentOutputSnapshotResolved=_,u.currentWriteId=Ih(e),o.splice(o.indexOf(p),1),a=(a=a.concat(pl(e.serverSyncTree_,u.path,_,u.currentWriteId,u.applyLocally))).concat(yl(e.serverSyncTree_,p,!0))}else l=!0,h="nodata",a=a.concat(yl(e.serverSyncTree_,u.currentWriteId,!0))}dh(e.eventQueue_,n,a),a=[],l&&(t[r].status=2,s=t[r].unwatcher,setTimeout(s,Math.floor(0)),t[r].onComplete&&("nodata"===h?i.push((function(){return t[r].onComplete(null,!1,t[r].currentInputSnapshot)})):i.push((function(){return t[r].onComplete(new Error(h),!1,null)}))))};if(0===t.length)return;for(var i=[],a=[],o=t.filter((function(e){return 0===e.status})).map((function(e){return e.currentWriteId})),s=0;s<t.length;s++)r(s);Mh(e,e.transactionQueueTree_);for(var u=0;u<i.length;u++)ts(i[u]);Nh(e,e.transactionQueueTree_)}(e,Dh(e,n),r),r}function Ah(e,t){var n,r=e.transactionQueueTree_;for(n=Ns(t);null!==n&&void 0===Kl(r);)r=Bl(r,n),n=Ns(t=Os(t));return r}function Dh(e,t){var n=[];return Lh(e,t,n),n.sort((function(e,t){return e.order-t.order})),n}function Lh(e,t,n){var r=Kl(t);if(r)for(var i=0;i<r.length;i++)n.push(r[i]);Jl(t,(function(t){Lh(e,t,n)}))}function Mh(e,t){var n=Kl(t);if(n){for(var r=0,i=0;i<n.length;i++)2!==n[i].status&&(n[r]=n[i],r++);n.length=r,Gl(t,n.length>0?n:void 0)}Jl(t,(function(t){Mh(e,t)}))}function Fh(e,t){var n=Xl(Ah(e,t)),r=Bl(e.transactionQueueTree_,t);return function(e,t,n){for(var r=n?e:e.parent;null!==r;){if(t(r))return!0;r=r.parent}}(r,(function(t){Uh(e,t)})),Uh(e,r),Ql(r,(function(t){Uh(e,t)})),n}function Uh(e,t){var n=Kl(t);if(n){for(var r=[],i=[],a=-1,o=0;o<n.length;o++)3===n[o].status||(1===n[o].status?(V(a===o-1,"All SENT items should be at beginning of queue."),a=o,n[o].status=3,n[o].abortReason="set"):(V(0===n[o].status,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(yl(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));-1===a?Gl(t,void 0):n.length=a+1,dh(e.eventQueue_,Xl(t),i);for(var s=0;s<r.length;s++)ts(r[s])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qh=function(e,t){var n=jh(e),r=n.namespace;"firebase.com"===n.domain&&qo(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||qo("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&jo("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");var i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ls(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new Ss(n.pathString)}},jh=function(e){var t="",n="",r="",i="",a="",o=!0,s="https",u=443;if("string"==typeof e){var c=e.indexOf("//");c>=0&&(s=e.substring(0,c-1),e=e.substring(c+2));var l=e.indexOf("/");-1===l&&(l=e.length);var h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(l,h)),l<h&&(i=function(e){for(var t="",n=e.split("/"),r=0;r<n.length;r++)if(n[r].length>0){var i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(l,h)));var d=function(e){var t={};"?"===e.charAt(0)&&(e=e.substring(1));var n=!0,r=!1,i=void 0;try{for(var a,o=e.split("&")[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(0!==s.length){var u=s.split("=");2===u.length?t[decodeURIComponent(u[0])]=decodeURIComponent(u[1]):jo("Invalid query segment '".concat(s,"' in query '").concat(e,"'"))}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t}(e.substring(Math.min(e.length,h)));(c=t.indexOf(":"))>=0?(o="https"===s||"wss"===s,u=parseInt(t.substring(c+1),10)):c=t.length;var f=t.slice(0,c);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{var v=t.indexOf(".");r=t.substring(0,v).toLowerCase(),n=t.substring(v+1),a=r}"ns"in d&&(a=d.ns)}return{host:t,port:u,domain:n,subdomain:r,secure:o,scheme:s,pathString:i,namespace:a}},Wh=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this.eventType=n,this.eventRegistration=r,this.snapshot=i,this.prevName=a}return e(s)(t,[{key:"getPath",value:function(){var e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}},{key:"getEventType",value:function(){return this.eventType}},{key:"getEventRunner",value:function(){return this.eventRegistration.getEventRunner(this)}},{key:"toString",value:function(){return this.getPath().toString()+":"+this.eventType+":"+se(this.snapshot.exportVal())}}]),t}(),Vh=function(){"use strict";function t(n,r,i){e(o)(this,t),this.eventRegistration=n,this.error=r,this.path=i}return e(s)(t,[{key:"getPath",value:function(){return this.path}},{key:"getEventType",value:function(){return"cancel"}},{key:"getEventRunner",value:function(){return this.eventRegistration.getEventRunner(this)}},{key:"toString",value:function(){return this.path.toString()+":cancel"}}]),t}(),Hh=function(){"use strict";function t(n,r){e(o)(this,t),this.snapshotCallback=n,this.cancelCallback=r}return e(s)(t,[{key:"onValue",value:function(e,t){this.snapshotCallback.call(null,e,t)}},{key:"onCancel",value:function(e){return V(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}},{key:"hasCancelCallback",get:function(){return!!this.cancelCallback}},{key:"matches",value:function(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}]),t}(),zh=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this._repo=n,this._path=r,this._queryParams=i,this._orderByCalled=a}return e(s)(t,[{key:"key",get:function(){return Fs(this._path)?null:As(this._path)}},{key:"ref",get:function(){return new Bh(this._repo,this._path)}},{key:"_queryIdentifier",get:function(){var e=qu(this._queryParams),t=Go(e);return"{}"===t?"default":t}},{key:"_queryObject",get:function(){return qu(this._queryParams)}},{key:"isEqual",value:function(e){if(!((e=Te(e))instanceof t))return!1;var n=this._repo===e._repo,r=qs(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}},{key:"toJSON",value:function(){return this.toString()}},{key:"toString",value:function(){return this._repo.toString()+function(e){for(var t="",n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}]),t}();var Bh=function(t){"use strict";e(C)(r,t);var n=e(D)(r);function r(t,i){return e(o)(this,r),n.call(this,t,i,new Fu,!1)}return e(s)(r,[{key:"parent",get:function(){var e=Ls(this._path);return null===e?null:new r(this._repo,e)}},{key:"root",get:function(){for(var e=this;null!==e.parent;)e=e.parent;return e}}]),r}(zh),Kh=function(){"use strict";function t(n,r,i){e(o)(this,t),this._node=n,this.ref=r,this._index=i}return e(s)(t,[{key:"priority",get:function(){return this._node.getPriority().val()}},{key:"key",get:function(){return this.ref.key}},{key:"size",get:function(){return this._node.numChildren()}},{key:"child",value:function(e){var n=new Ss(e),r=Yh(this.ref,e);return new t(this._node.getChild(n),r,vu)}},{key:"exists",value:function(){return!this._node.isEmpty()}},{key:"exportVal",value:function(){return this._node.val(!0)}},{key:"forEach",value:function(e){var n=this;return!this._node.isLeafNode()&&!!this._node.forEachChild(this._index,(function(r,i){return e(new t(i,Yh(n.ref,r),vu))}))}},{key:"hasChild",value:function(e){var t=new Ss(e);return!this._node.getChild(t).isEmpty()}},{key:"hasChildren",value:function(){return!this._node.isLeafNode()&&!this._node.isEmpty()}},{key:"toJSON",value:function(){return this.exportVal()}},{key:"val",value:function(){return this._node.val()}}]),t}();function Gh(e,t){return(e=Te(e))._checkNotDeleted("ref"),void 0!==t?Yh(e._root,t):e._root}function Yh(e,t){var n,r,i,a;return null===Ns((e=Te(e))._path)?(n="child",r="path",a=!1,(i=t)&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),oh(n,r,i,a)):oh("child","path",t,!1),new Bh(e._repo,Ms(e._path,t))}function Jh(e,t){e=Te(e),sh("push",e._path),ih("push",t,e._path,!0);var n,r=mh(e._repo),i=Pu(r),a=Yh(e,i),o=Yh(e,i);return n=null!=t?Qh(o,t).then((function(){return o})):Promise.resolve(o),a.then=n.then.bind(n),a.catch=n.then.bind(n,void 0),a}function Qh(e,t){e=Te(e),sh("set",e._path),ih("set",t,e._path,!1);var n=new X;return Ch(e._repo,e._path,t,null,n.wrapCallback((function(){}))),n.promise}var Xh=function(){"use strict";function t(n){e(o)(this,t),this.callbackContext=n}return e(s)(t,[{key:"respondsTo",value:function(e){return"value"===e}},{key:"createEvent",value:function(e,t){var n=t._queryParams.getIndex();return new Wh("value",this,new Kh(e.snapshotNode,new Bh(t._repo,t._path),n))}},{key:"getEventRunner",value:function(e){var t=this;return"cancel"===e.getEventType()?function(){return t.callbackContext.onCancel(e.error)}:function(){return t.callbackContext.onValue(e.snapshot,null)}}},{key:"createCancelEvent",value:function(e,t){return this.callbackContext.hasCancelCallback?new Vh(this,e,t):null}},{key:"matches",value:function(e){return e instanceof t&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}},{key:"hasAnyCallback",value:function(){return null!==this.callbackContext}}]),t}(),$h=function(){"use strict";function t(n,r){e(o)(this,t),this.eventType=n,this.callbackContext=r}return e(s)(t,[{key:"respondsTo",value:function(e){var t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}},{key:"createCancelEvent",value:function(e,t){return this.callbackContext.hasCancelCallback?new Vh(this,e,t):null}},{key:"createEvent",value:function(e,t){V(null!=e.childName,"Child events should have a childName.");var n=Yh(new Bh(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new Wh(e.type,this,new Kh(e.snapshotNode,n,r),e.prevName)}},{key:"getEventRunner",value:function(e){var t=this;return"cancel"===e.getEventType()?function(){return t.callbackContext.onCancel(e.error)}:function(){return t.callbackContext.onValue(e.snapshot,e.prevName)}}},{key:"matches",value:function(e){return e instanceof t&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}},{key:"hasAnyCallback",value:function(){return!!this.callbackContext}}]),t}();function Zh(e,t,n,r,i){var a;if("object"==typeof r&&(a=void 0,i=r),"function"==typeof r&&(a=r),i&&i.onlyOnce){var o=n,s=function(t,n){Th(e._repo,e,f),o(t,n)};s.userCallback=n.userCallback,s.context=n.context,n=s}var u,c,l,h,d=new Hh(n,a||void 0),f="value"===t?new Xh(d):new $h(t,d);return u=e._repo,l=f,h=".info"===Ns((c=e)._path)?kl(u.infoSyncTree_,c,l):kl(u.serverSyncTree_,c,l),hh(u.eventQueue_,c._path,h),function(){return Th(e._repo,e,f)}}function ed(e,t,n,r){return Zh(e,"value",t,n,r)}!function(e){V(!Gc,"__referenceConstructor has already been defined"),Gc=e}(Bh),function(e){V(!el,"__referenceConstructor has already been defined"),el=e}(Bh);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var td={},nd=!1;function rd(e,t,n,r,i){var a=r||e.options.databaseURL;void 0===a&&(e.options.projectId||qo("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Mo("Using default host for project ",e.options.projectId),a="".concat(e.options.projectId,"-default-rtdb.firebaseio.com"));var o,s=qh(a,i),u=s.repoInfo,c=void 0;void 0!==ro&&ro.env&&(c=ro.env.FIREBASE_DATABASE_EMULATOR_HOST),c?(o=!0,a="http://".concat(c,"?ns=").concat(u.namespace),u=(s=qh(a,i)).repoInfo):o=!s.repoInfo.secure;var l=i&&o?new as(as.OWNER):new is(e.name,e.options,t);uh("Invalid Firebase Database URL",s),Fs(s.path)||qo("Database URL must point to the root of a Firebase Database (not including a child path).");var h=function(e,t,n,r){var i=td[t.name];i||(i={},td[t.name]=i);var a=i[e.toURLString()];a&&qo("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return a=new yh(e,nd,n,r),i[e.toURLString()]=a,a}(u,e,l,new rs(e.name,n));return new id(h,e)}var id=function(){"use strict";function t(n,r){e(o)(this,t),this._repoInternal=n,this.app=r,this.type="database",this._instanceStarted=!1}return e(s)(t,[{key:"_repo",get:function(){return this._instanceStarted||(_h(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}},{key:"_root",get:function(){return this._rootInternal||(this._rootInternal=new Bh(this._repo,Ps())),this._rootInternal}},{key:"_delete",value:function(){var e,t,n;return null!==this._rootInternal&&(e=this._repo,t=this.app.name,(n=td[t])&&n[e.key]===e||qo("Database ".concat(t,"(").concat(e.repoInfo_,") has already been deleted.")),xh(e),delete n[e.key],this._repoInternal=null,this._rootInternal=null),Promise.resolve()}},{key:"_checkNotDeleted",value:function(e){null===this._rootInternal&&qo("Cannot call "+e+" on a deleted database.")}}]),t}();Ks.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Ks.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){wo=kt,pt(new xe("database",(function(e,t){var n=t.instanceIdentifier;return rd(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),n)}),"PUBLIC").setMultipleInstances(!0)),It(ko,bo,e),It(ko,bo,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();var ad=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt(),t=arguments.length>1?arguments[1]:void 0;return yt(e,"database").getImmediate({identifier:t})}(bt(Va)),od="";function sd(e){var t=[];return ed(Gh(ad,"user/".concat(e,"/queue/")),(function(e){e.forEach((function(e){t.push(e.val())}))}),{onlyOnce:!0}),console.dir(t),t}var ud={addWatched:document.querySelector("#add-watched"),addQueue:document.querySelector("#add-queue"),removeWatched:document.querySelector("#remove-watched"),removeQueue:document.querySelector("#remove-queue"),getWatched:document.querySelector("#get-watched"),getQueue:document.querySelector("#get-queue")};ud.addWatched.addEventListener("click",(function(){console.log(no),no||console.log("добавить всплывашку залогинься");e=no,t=cd,Qh(Jh(Gh(ad,"user/".concat(e,"/watched/"))),t);var e,t})),ud.removeWatched.addEventListener("click",(function(){e=no,t=ld,ed(Gh(ad,"user/".concat(e,"/watched/")),(function(e){e.forEach((function(e){e.val().id===t&&(od=e.key)}))}),{onlyOnce:!0}),Qh(Gh(ad,"user/".concat(e,"/watched/").concat(od)),null);var e,t})),ud.addQueue.addEventListener("click",(function(){console.log(no),no||console.log("добавить всплывашку залогинься");e=no,t=cd,ld=void Qh(Jh(Gh(ad,"user/".concat(e,"/queue/"))),t),console.log(ld);var e,t})),ud.removeQueue.addEventListener("click",(function(){e=no,t=ld,ed(Gh(ad,"user/".concat(e,"/queue/")),(function(e){e.forEach((function(e){e.val().id===t&&(od=e.key)}))}),{onlyOnce:!0}),Qh(Gh(ad,"user/".concat(e,"/queue/").concat(od)),null);var e,t})),ud.getWatched.addEventListener("click",(function(){e=no,t=[],ed(Gh(ad,"user/".concat(e,"/watched/")),(function(e){e.forEach((function(e){t.push(e.val())}))}),{onlyOnce:!0}),console.log(t);var e,t})),ud.getQueue.addEventListener("click",(function(){sd(no)}));var cd={adult:!1,backdrop_path:"/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg",belongs_to_collection:{id:131296,name:"Thor Collection",poster_path:"/yw7gr7DhHHVTLlO8Se8uH17TDMA.jpg",backdrop_path:"/3KL8UNKFWgIKXzLHjwY0uwgjzYl.jpg"},budget:25e7,genres:[{id:14,name:"Fantasy"},{id:28,name:"Action"},{id:35,name:"Comedy"}],homepage:"https://www.marvel.com/movies/thor-love-and-thunder",id:616037,imdb_id:"tt10648342",original_language:"en",original_title:"Thor: Love and Thunder",overview:"After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",popularity:1869.63,poster_path:"/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",production_companies:[{id:420,logo_path:"/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",name:"Marvel Studios",origin_country:"US"},{id:176762,logo_path:null,name:"Kevin Feige Productions",origin_country:"US"}],production_countries:[{iso_3166_1:"US",name:"United States of America"}],release_date:"2022-07-06",revenue:758004063,runtime:119,spoken_languages:[{english_name:"English",iso_639_1:"en",name:"English"}],status:"Released",tagline:"The one is not the only.",title:"Thor: Love and Thunder",video:!1,vote_average:6.772,vote_count:3840},ld=cd.id;var hd=document.querySelector(".gallary-films");fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=cfb01d01cf730c010b0d096c15822b40").then((function(e){return e.json()})).then((function(e){fetch("https://api.themoviedb.org/3//genre/movie/list?api_key=cfb01d01cf730c010b0d096c15822b40").then((function(e){return e.json()})).then((function(t){var n=t.genres;console.log(n);var r=e.results;console.log(r);var i=r.map((function(e){var t=e.genre_ids.map((function(e){var t=!0,r=!1,i=void 0;try{for(var a,o=n[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var s=a.value;if(e===s.id)return s.name}}catch(e){r=!0,i=e}finally{try{t||null==o.return||o.return()}finally{if(r)throw i}}}));return e.genres=t,e})).map((function(e){var t=new Date("".concat(e.release_date)).getFullYear();return'\n                <div class="photo-card">\n                  <img src= "https://image.tmdb.org/t/p/w500'.concat(e.poster_path,'" alt="').concat(e.original_title,' loading="lazy">\n                  <div class="info">\n                    <p class="info-item">\n                      <b>').concat(e.title,'</b>\n                    </p>\n                    <p class="info-item">\n                      <b>').concat(t,'</b>\n                    </p>\n                    <p class="info-item">\n                      <b>').concat(e.genres.join(", "),'</b>\n                    </p>\n                    <p class="info-item">\n                      <b></b>\n                    </p>\n                  </a>\n                  </div>\n                </div>')})).join("");hd.insertAdjacentHTML("afterbegin",i)}))})),console.log(no);var dd=[],fd=sd(),vd=document.querySelector(".header"),pd=document.querySelector(".search-form"),yd=document.querySelector(".home-link"),_d=document.querySelector(".library-link"),md=document.querySelector(".library-btn__wrap"),gd=document.querySelector(".watched-btn"),kd=document.querySelector(".queue-btn"),bd=document.querySelector(".logo-link");function wd(e){e.preventDefault(),md.classList.add("visually-hidden"),pd.classList.remove("visually-hidden"),yd.classList.add("current"),_d.classList.remove("current"),vd.classList.remove("header__my-library-bg"),vd.classList.add("home-header-bg")}yd.addEventListener("click",wd),_d.addEventListener("click",(function(e){e.preventDefault(),pd.classList.add("visually-hidden"),md.classList.remove("visually-hidden"),_d.classList.add("current"),yd.classList.remove("current"),vd.classList.remove("home-header-bg"),vd.classList.add("header__my-library-bg")})),gd.addEventListener("click",(function(){kd.classList.remove("active"),gd.classList.add("active"),gd.disabled=!0,kd.disabled=!1,Cd(dd)})),kd.addEventListener("click",(function(){gd.classList.remove("active"),kd.classList.add("active"),gd.disabled=!1,kd.disabled=!0,Cd(fd)})),bd.addEventListener("click",wd);var Id=document.querySelector("body");function Cd(e){if(0!==e.length)return t=e.map((function(e){return function(e,t,n,r,i){return"".concat(e,", ").concat(t,", ").concat(n,", ").concat(r,", ").concat(i)}(e.poster_path,e.original_title,e.genres,e.release_date,e.vote_average)})),console.log(t),void Id.insertAdjacentHTML("beforeend",t);var t;console.log("There is no items yet"),showEmptyLibrary()}}();
//# sourceMappingURL=index.ac4e77a0.js.map
