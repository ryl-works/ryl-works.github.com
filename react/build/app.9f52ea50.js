/*! Copyright by wangfupeng1988@github.com. */
webpackJsonp([1],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(4),u=r(o),a=n(79),i=n(45),l=n(69),c=n(286),f=r(c);n(143),n(141);var s=n(285),p=r(s),d=n(282),y=(0,f.default)();(0,d.testFetch)(),(0,a.render)(u.default.createElement(i.Provider,{store:y},u.default.createElement(p.default,{history:l.hashHistory})),document.getElementById("root"))},16:function(e,t,n){"use strict";var r=n(35);e.exports={shouldComponentUpdate:function(e,t){return!r(this.props,e)||!r(this.state,t)}}},125:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.USERINFO_UPDATE="USERINFO_UPDATE"},141:function(e,t){},142:function(e,t){},143:function(e,t){},271:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return{type:a.USERINFO_UPDATE,data:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.update=o;var u=n(125),a=r(u)},272:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(4),c=r(l),f=n(16),s=r(f);n(142);var p=function(e){function t(e,n){o(this,t);var r=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.shouldComponentUpdate=s.default.shouldComponentUpdate.bind(r),r}return a(t,e),i(t,[{key:"render",value:function(){return c.default.createElement("div",{id:"home-header",className:"clear-fix"},c.default.createElement("div",{className:"home-header-left float-left"},c.default.createElement("span",null,this.props.cityName)," ",c.default.createElement("i",{className:"icon-angle-down"})),c.default.createElement("div",{className:"home-header-right float-right"},c.default.createElement("i",{className:"icon-user"})),c.default.createElement("div",{className:"home-header-middle"},c.default.createElement("div",{className:"search-container"},c.default.createElement("i",{className:"icon-search"}),c.default.createElement("input",{type:"text",placeholder:"请输入关键字"}))))}}]),t}(c.default.Component);t.default=p},273:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.CITYNAME="USER_CURRENT_CITY_NAME"},274:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(4),c=r(l),f=n(16),s=r(f),p=function(e){function t(e,n){o(this,t);var r=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.shouldComponentUpdate=s.default.shouldComponentUpdate.bind(r),r}return a(t,e),i(t,[{key:"render",value:function(){return c.default.createElement("h1",null,"404 not found page")}}]),t}(c.default.Component);e.exports=p},275:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(4),c=r(l),f=n(16),s=r(f),p=function(e){function t(e,n){o(this,t);var r=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.shouldComponentUpdate=s.default.shouldComponentUpdate.bind(r),r}return a(t,e),i(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("h1",null,"city"))}}]),t}(c.default.Component);e.exports=p},276:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(4),c=r(l),f=n(16),s=r(f),p=function(e){function t(e,n){o(this,t);var r=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.shouldComponentUpdate=s.default.shouldComponentUpdate.bind(r),r}return a(t,e),i(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("h1",null,"Detail"))}}]),t}(c.default.Component);e.exports=p},277:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{userinfo:e.userinfo}}function l(e){return{}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(4),s=r(f),p=n(16),d=r(p),y=(n(28),n(45)),b=n(272),h=r(b),_=function(e){function t(e,n){o(this,t);var r=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.shouldComponentUpdate=d.default.shouldComponentUpdate.bind(r),r}return a(t,e),c(t,[{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement(h.default,{cityName:this.props.userinfo.cityName}),s.default.createElement("h1",null,"home"))}}]),t}(s.default.Component);t.default=(0,y.connect)(i,l)(_)},278:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(4),c=r(l),f=n(16),s=r(f),p=function(e){function t(e,n){o(this,t);var r=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.shouldComponentUpdate=s.default.shouldComponentUpdate.bind(r),r}return a(t,e),i(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("h1",null,"Search"))}}]),t}(c.default.Component);e.exports=p},279:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(4),c=r(l),f=n(16),s=r(f),p=function(e){function t(e,n){o(this,t);var r=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.shouldComponentUpdate=s.default.shouldComponentUpdate.bind(r),r}return a(t,e),i(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("h1",null,"User"))}}]),t}(c.default.Component);e.exports=p},280:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return{}}function c(e){return{userInfoActions:(0,m.bindActionCreators)(w,e)}}Object.defineProperty(t,"__esModule",{value:!0});var f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(4),p=o(s),d=n(16),y=o(d),b=n(287),h=o(b),_=n(273),m=n(28),v=n(45),O=n(271),w=r(O),E=function(e){function t(e,n){u(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.shouldComponentUpdate=y.default.shouldComponentUpdate.bind(r),r.state={initDone:!1},r}return i(t,e),f(t,[{key:"render",value:function(){return p.default.createElement("div",null,this.state.initDone?this.props.children:p.default.createElement("div",null,"加载中"))}},{key:"componentDidMount",value:function(){var e=h.default.getItem(_.CITYNAME);console.log(e),null==e&&(e="北京"),console.log(this.props.userInfoActions),this.props.userInfoActions.update({cityName:e}),this.setState({initDone:!0})}}]),t}(p.default.Component);t.default=(0,v.connect)(l,c)(E)},281:function(e,t,n){"use strict";function r(e){var t=fetch(e,{credentials:"include",headers:{Accept:"application/json, text/plain, */*"}});return t}Object.defineProperty(t,"__esModule",{value:!0}),t.get=r,n(74),n(118)},282:function(e,t,n){"use strict";function r(){return(0,o.get)("/api/2")}Object.defineProperty(t,"__esModule",{value:!0}),t.testFetch=r;var o=n(281)},283:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(28),u=n(284),a=r(u);t.default=(0,o.combineReducers)({userinfo:a.default})},284:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case a.USERINFO_LOGIN:return t.data;case a.USERINFO_UPDATE:return t.data;default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var u=n(125),a=r(u),i={}},285:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(4),c=r(l),f=n(69),s=n(280),p=r(s),d=n(277),y=r(d),b=n(275),h=r(b),_=n(279),m=r(_),v=n(278),O=r(v),w=n(276),E=r(w),j=n(274),P=r(j),g=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return c.default.createElement(f.Router,{history:this.props.history},c.default.createElement(f.Route,{path:"/",component:p.default},c.default.createElement(f.IndexRoute,{component:y.default}),c.default.createElement(f.Route,{path:"/city",component:h.default}),c.default.createElement(f.Route,{path:"/User",component:m.default}),c.default.createElement(f.Route,{path:"/search/:type(/:keyword)",component:O.default}),c.default.createElement(f.Route,{path:"/detail/:id",component:E.default}),c.default.createElement(f.Route,{path:"*",component:P.default})))}}]),t}(c.default.Component);t.default=g},286:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=(0,u.createStore)(i.default,e,window.devToolsExtension?window.devToolsExtension():void 0);return t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var u=n(28),a=n(283),i=r(a)},287:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={getItem:function(e){var t=void 0;try{t=localStorage.getItem(e)}catch(e){}finally{return t}},setItem:function(e,t){try{localStorage.setItem(e,t)}catch(e){}}}}});