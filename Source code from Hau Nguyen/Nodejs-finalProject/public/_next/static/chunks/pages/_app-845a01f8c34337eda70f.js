_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var n,a=(n=r("q1tI"))&&n.__esModule?n:{default:n},o=r("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,o=e.hasQuery,i=void 0!==o&&o;return r||a&&i}},0:function(e,t,r){r("GcxT"),e.exports=r("nOHt")},"1OyB":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",(function(){return n}))},"1TCz":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return K}));var n=r("o0o1"),a=r.n(n),o=r("HaE+"),i=r("rePB"),c=r("nKUr"),s=r("1OyB"),u=r("vuIU"),f=r("s4An");var p=r("cDf5"),l=r.n(p),d=r("JX7q");function h(e,t){return!t||"object"!==l()(t)&&"function"!==typeof t?Object(d.a)(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=r("q1tI"),v=r.n(y),b=r("i8i4"),g=r.n(b),O=r("8Bbg"),j=r.n(O),x=r("g4pe"),w=r.n(x),P=r("20a2"),k=r.n(P),_=r("R/WZ"),C=r("iae6"),M=r("jfJP");function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I={progress:{color:M.o,width:"6rem !important",height:"6rem !important"},wrapperDiv:{margin:"100px auto",padding:"0px",maxWidth:"360px",textAlign:"center",position:"relative",zIndex:"9999",top:"0"},iconWrapper:{display:"block"},title:S(S({},M.y),{},{color:"#FFFFFF"})};function E(e){var t=Object(_.a)(I)();return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:t.wrapperDiv,children:[Object(c.jsx)("div",{className:t.iconWrapper,children:Object(c.jsx)(C.a,{className:t.progress})}),Object(c.jsxs)("h4",{className:t.title,children:["Loading page contents for: ",e.path]})]})})}r("MVND");var A=r("viY9"),R=r("bWLx"),N=r("edxh"),q=r("/MKj"),H=r("i7Pf"),T=r("bJvQ"),B=Object(H.a)({reducer:{user:T.a}});function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function X(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=m(e);if(t){var a=m(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return h(this,r)}}k.a.events.on("routeChangeStart",(function(e){console.log("Loading: ".concat(e)),document.body.classList.add("body-page-transition"),g.a.render(Object(c.jsx)(E,{path:e}),document.getElementById("page-transition"))})),k.a.events.on("routeChangeComplete",(function(){g.a.unmountComponentAtNode(document.getElementById("page-transition")),document.body.classList.remove("body-page-transition")})),k.a.events.on("routeChangeError",(function(){g.a.unmountComponentAtNode(document.getElementById("page-transition")),document.body.classList.remove("body-page-transition")}));var K=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Object(f.a)(e,t)}(r,e);var t=X(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var e=this.props,t=e.Component,r=e.pageProps,n=t.layout||function(e){var t=e.children;return Object(c.jsx)(c.Fragment,{children:t})},a=Object(A.a)({palette:{primary:N.a,secondary:{main:"#8bc34a"}}});return Object(c.jsx)(v.a.Fragment,{children:Object(c.jsxs)(q.a,{store:B,children:[Object(c.jsxs)(w.a,{children:[Object(c.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),Object(c.jsx)("title",{children:"NextJS Material Dashboard "}),Object(c.jsx)("script",{src:"https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"})]}),Object(c.jsx)(n,{children:Object(c.jsx)(R.a,{theme:a,children:Object(c.jsx)(t,W({},r))})})]})})}}],[{key:"getInitialProps",value:function(){var e=Object(o.a)(a.a.mark((function e(t){var r,n,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.Component,t.router,n=t.ctx,o={},!r.getInitialProps){e.next=6;break}return e.next=5,r.getInitialProps(n);case 5:o=e.sent;case 6:return e.abrupt("return",{pageProps:o});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),r}(j.a)},"48fX":function(e,t,r){var n=r("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},"5fIB":function(e,t,r){var n=r("7eYB");e.exports=function(e){if(Array.isArray(e))return n(e)}},"8Bbg":function(e,t,r){e.exports=r("B5Ud")},"8Kt/":function(e,t,r){"use strict";r("oI91");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var n,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),o=(n=r("Xuae"))&&n.__esModule?n:{default:n},i=r("lwAK"),c=r("FYa8"),s=r("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var l=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var r=a.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var s=0,u=l.length;s<u;s++){var f=l[s];if(a.props.hasOwnProperty(f))if("charSet"===f)r.has(f)?o=!1:r.add(f);else{var p=a.props[f],d=n[f]||new Set;"name"===f&&i||!d.has(p)?(d.add(p),n[f]=d):o=!1}}}return o}}()).reverse().map((function(e,t){var r=e.key||t;return a.default.cloneElement(e,{key:r})}))}function h(e){var t=e.children,r=(0,a.useContext)(i.AmpStateContext),n=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:d,headManager:n,inAmpMode:(0,s.isInAmpMode)(r)},t)}h.rewind=function(){};var m=h;t.default=m},B5Ud:function(e,t,r){"use strict";var n=r("vJKn"),a=r("/GRZ"),o=r("i2R6"),i=r("48fX"),c=r("tCBg"),s=r("T0f4"),u=r("qVT1");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var a=s(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return c(this,r)}}var p=r("AroE");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=v,t.default=void 0;var l=p(r("q1tI")),d=r("g/15");function h(e){return m.apply(this,arguments)}function m(){return(m=u(n.mark((function e(t){var r,a,o;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.Component,a=t.ctx,e.next=3,(0,d.loadGetInitialProps)(r,a);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.AppInitialProps=d.AppInitialProps,t.NextWebVitalsMetric=d.NextWebVitalsMetric;var y=function(e){i(r,e);var t=f(r);function r(){return a(this,r),t.apply(this,arguments)}return o(r,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,r=e.Component,n=e.pageProps,a=e.__N_SSG,o=e.__N_SSP;return l.default.createElement(r,Object.assign({},n,a||o?{}:{url:v(t)}))}}]),r}(l.default.Component);function v(e){var t=e.pathname,r=e.asPath,n=e.query;return{get query(){return n},get pathname(){return t},get asPath(){return r},back:function(){e.back()},push:function(t,r){return e.push(t,r)},pushTo:function(t,r){var n=r?t:"",a=r||t;return e.push(n,a)},replace:function(t,r){return e.replace(t,r)},replaceTo:function(t,r){var n=r?t:"",a=r||t;return e.replace(n,a)}}}t.default=y,y.origGetInitialProps=h,y.getInitialProps=h},FYa8:function(e,t,r){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=a},GcxT:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("1TCz")}])},T0f4:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},Xuae:function(e,t,r){"use strict";var n=r("mPvQ"),a=r("/GRZ"),o=r("i2R6"),i=(r("qXWd"),r("48fX")),c=r("tCBg"),s=r("T0f4");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var a=s(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return c(this,r)}}t.__esModule=!0,t.default=void 0;var f=r("q1tI"),p=function(e){i(r,e);var t=u(r);function r(e){var o;return a(this,r),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(f.Component);t.default=p},bWLx:function(e,t,r){"use strict";var n=r("wx14"),a=r("q1tI"),o=r.n(a),i=(r("17x9"),r("OKji")),c=r("aXM8"),s=r("hfi/");t.a=function(e){var t=e.children,r=e.theme,a=Object(c.a)(),u=o.a.useMemo((function(){var e=null===a?r:function(e,t){return"function"===typeof t?t(e):Object(n.a)({},e,t)}(a,r);return null!=e&&(e[s.a]=null!==a),e}),[r,a]);return o.a.createElement(i.a.Provider,{value:u},t)}},g4pe:function(e,t,r){e.exports=r("8Kt/")},iae6:function(e,t,r){"use strict";var n=r("wx14"),a=r("Ff2n"),o=r("q1tI"),i=(r("17x9"),r("iuhU")),c=r("H2TA"),s=r("NqtD"),u=44,f=o.forwardRef((function(e,t){var r=e.classes,c=e.className,f=e.color,p=void 0===f?"primary":f,l=e.disableShrink,d=void 0!==l&&l,h=e.size,m=void 0===h?40:h,y=e.style,v=e.thickness,b=void 0===v?3.6:v,g=e.value,O=void 0===g?0:g,j=e.variant,x=void 0===j?"indeterminate":j,w=Object(a.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),P={},k={},_={};if("determinate"===x||"static"===x){var C=2*Math.PI*((u-b)/2);P.strokeDasharray=C.toFixed(3),_["aria-valuenow"]=Math.round(O),P.strokeDashoffset="".concat(((100-O)/100*C).toFixed(3),"px"),k.transform="rotate(-90deg)"}return o.createElement("div",Object(n.a)({className:Object(i.a)(r.root,c,"inherit"!==p&&r["color".concat(Object(s.a)(p))],{determinate:r.determinate,indeterminate:r.indeterminate,static:r.static}[x]),style:Object(n.a)({width:m,height:m},k,y),ref:t,role:"progressbar"},_,w),o.createElement("svg",{className:r.svg,viewBox:"".concat(22," ").concat(22," ").concat(u," ").concat(u)},o.createElement("circle",{className:Object(i.a)(r.circle,d&&r.circleDisableShrink,{determinate:r.circleDeterminate,indeterminate:r.circleIndeterminate,static:r.circleStatic}[x]),style:P,cx:u,cy:u,r:(u-b)/2,fill:"none",strokeWidth:b})))}));t.a=Object(c.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:e.transitions.create("transform")},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:e.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(f)},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var a=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},mPvQ:function(e,t,r){var n=r("5fIB"),a=r("rlHP"),o=r("KckH"),i=r("kG2m");e.exports=function(e){return n(e)||a(e)||o(e)||i()}},oI91:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,r){var n=r("C+bE"),a=r("qXWd");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?a(e):t}}},[[0,0,2,1,3,4,13,6]]]);