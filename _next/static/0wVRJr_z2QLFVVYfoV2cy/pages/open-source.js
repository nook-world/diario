(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/0+H":function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=o(n("q1tI")),a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,o=e.hybrid,r=void 0!==o&&o,a=e.hasQuery;return n||r&&(void 0!==a&&a)}t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(a.AmpStateContext))}},"7W2i":function(e,t,n){var o=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},"8Kt/":function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=o(n("q1tI")),a=o(n("Xuae")),i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=s;var p=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,o={};return function(r){var a=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?a=!1:t.add(r.type);break;case"meta":for(var c=0,u=p.length;c<u;c++){var s=p[c];if(r.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var l=r.props[s],m=o[s]||new Set;m.has(l)?a=!1:(m.add(l),o[s]=m)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var f=a.default();function d(e){var t=e.children;return r.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(f,{reduceComponentsToState:m,handleStateChange:n,inAmpMode:u.isInAmpMode(e)},t)}))}))}d.rewind=f.rewind,t.default=d},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var r=o(n("q1tI"));t.HeadManagerContext=r.createContext(null)},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},L6Je:function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o),a=n("8Kt/"),i=n.n(a),c=r.a.createElement;t.a=function(e){var t=e.children,n=e.background;return c("div",{className:[n,"layout"].join(" ")},c(i.a,null,c("meta",{charSet:"utf-8"}),c("title",null,"Di\xe1rio Nook World"),c("meta",{name:"application-name",content:"Di\xe1rio Nook World"}),c("meta",{name:"apple-mobile-web-app-title",content:"Di\xe1rio Nook World"}),c("meta",{name:"description",content:"Crie e acompanhe suas metas no Animal Crossing New Horizons!"}),c("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),c("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black-translucent"}),c("meta",{name:"format-detection",content:"telephone=no"}),c("meta",{name:"mobile-web-app-capable",content:"yes"}),c("meta",{name:"msapplication-config",content:"/browserconfig.xml"}),c("meta",{name:"msapplication-TileColor",content:"#5bbad5"}),c("meta",{name:"msapplication-tap-highlight",content:"no"}),c("meta",{name:"theme-color",content:"#5bbad5"}),c("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover"}),c("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),c("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png?v=".concat(2)}),c("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png?v=".concat(2)}),c("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png?v=".concat(2)}),c("link",{rel:"manifest",href:"/manifest.json?v=".concat(2)}),c("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg?v=".concat(2),color:"#5bbad5"}),c("link",{rel:"shortcut icon",href:"/favicon-32x32.png?v=".concat(2)}),c("meta",{name:"twitter:card",content:"summary_large_image"}),c("meta",{name:"twitter:url",content:"https://diario.nook.world"}),c("meta",{name:"twitter:title",content:"Di\xe1rio Nook World"}),c("meta",{name:"twitter:description",content:"Crie e acompanhe suas metas no Animal Crossing New Horizons!"}),c("meta",{name:"twitter:image",content:"https://diario.nook.world/twitter.png"}),c("meta",{name:"twitter:creator",content:"@NookWorldApp"}),c("meta",{property:"og:type",content:"website"}),c("meta",{property:"og:title",content:"Di\xe1rio Nook World"}),c("meta",{property:"og:description",content:"Crie e acompanhe suas metas no Animal Crossing New Horizons!"}),c("meta",{property:"og:site_name",content:"Di\xe1rio Nook World"}),c("meta",{property:"og:url",content:"https://diario.nook.world"}),c("meta",{property:"og:image",content:"https://diario.nook.world/opengraph.png"}),c("meta",{property:"og:image:width",content:"1200"}),c("meta",{property:"og:image:height",content:"630"})),t,c("div",{className:"ios-peek"}))}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var o=Object.assign.bind(Object);e.exports=o,e.exports.default=e.exports},RIqP:function(e,t,n){var o=n("Ijbi"),r=n("EbDI"),a=n("Bnag");e.exports=function(e){return o(e)||r(e)||a()}},SN4F:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),r=n.n(o),a=n("L6Je"),i=n("WSO1"),c=n.n(i),u=r.a.createElement;function s(e){var t=e.children;return u("section",{className:c.a.container},t)}t.default=function(e){return e.language,u(a.a,{background:c.a.layout},u("h1",null,"Open-source e o Futuro do Nook World"),u(s,null,u("article",{className:c.a.news},u("p",null,"Primeiramente, gostar\xedamos de agradecer a todos que usaram o nosso aplicativo, mesmo que tenha sido por pouco tempo. O Di\xe1rio nasceu da vontade que t\xednhamos de fazer um aplicativo para outros jogadores, assim como n\xf3s."),u("p",null,"A \xfaltima atualiza\xe7\xe3o significativa que publicamos foi a lista de m\xfasicas. De l\xe1 para c\xe1, muitas coisas aconteceram e o desenvolvimento do aplicativo acabou sendo suspenso por tempo indeterminado. Infelizmente, n\xe3o podemos mais dedicar o tempo que gostar\xedamos ao projeto, mas tamb\xe9m n\xe3o gostar\xedamos de abandon\xe1-lo completamente."),u("p",null,"Tivemos uma conversa recentemente e decidimos que a melhor coisa \xe0 fazer seria abrir o c\xf3digo do Di\xe1rio. Dessa forma, outras pessoas que tenham interesse podem contribuir pro desenvolvimento do aplicativo."),u("p",null,"As informa\xe7\xf5es sobre como contribuir estar\xe3o no"," ",u("a",{href:"https://github.com/nook-world/diario"},"reposit\xf3rio do Di\xe1rio no Github"),", junto com a \xfaltima vers\xe3o do c\xf3digo. Se voc\xea tiver uma conta no Github e quiser contribuir, basta fazer um ",u("i",null,"fork")," do projeto e abrir um ",u("i",null,"pull-request"),"."),u("p",null,"Agradecemos todo apoio que tivemos at\xe9 aqui e esperamos que essa nova fase do Nook World traga novas id\xe9ias e funcionalidades."," ",u("i",null,"Yes, yes"),"."),u("p",{className:c.a.signature},"Equipe Nook World"))))}},SksO:function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},WSO1:function(e,t,n){e.exports={layout:"opensource_layout__-AxDS",container:"opensource_container__Xlbpg",news:"opensource_news__PDmg2",signature:"opensource_signature__2bC0N"}},Xuae:function(e,t,n){"use strict";var o=n("lwsE"),r=n("PJYZ"),a=n("W8MJ"),i=n("7W2i"),c=n("a1gu"),u=n("Nsbk"),s=n("RIqP");function l(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var p=n("q1tI"),m=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(s(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(s){i(d,s);var p,f=(p=d,function(){var e,t=u(p);if(l()){var n=u(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return c(this,e)});function d(e){var a;return o(this,d),a=f.call(this,e),m&&(t.add(r(a)),n(r(a))),a}return a(d,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(d,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),d}(p.Component)}},a1gu:function(e,t,n){var o=n("cDf5"),r=n("PJYZ");e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?r(e):t}},cDf5:function(e,t){function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(t){return"function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=o=function(e){return n(e)}:e.exports=o=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},o(t)}e.exports=o},lwAK:function(e,t,n){"use strict";var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var r=o(n("q1tI"));t.AmpStateContext=r.createContext({})},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},sOTH:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/open-source",function(){return n("SN4F")}])}},[["sOTH",0,1]]]);