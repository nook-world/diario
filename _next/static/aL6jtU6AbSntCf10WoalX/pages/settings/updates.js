(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"/0+H":function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=o(n("q1tI")),a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,o=e.hybrid,r=void 0!==o&&o,a=e.hasQuery;return n||r&&(void 0!==a&&a)}t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(a.AmpStateContext))}},"7UnL":function(e,t,n){e.exports={layout:"updates_layout__E3SUS"}},"8Kt/":function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=o(n("q1tI")),a=o(n("Xuae")),i=n("lwAK"),s=n("FYa8"),c=n("/0+H");function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=l;var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,o={};return function(r){var a=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?a=!1:t.add(r.type);break;case"meta":for(var s=0,c=p.length;s<c;s++){var l=p[s];if(r.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var u=r.props[l],f=o[l]||new Set;f.has(u)?a=!1:(f.add(u),o[l]=f)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var d=a.default();function m(e){var t=e.children;return r.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(s.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(d,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:c.isInAmpMode(e)},t)}))}))}m.rewind=d.rewind,t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var r=o(n("q1tI"));t.HeadManagerContext=r.createContext(null)},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},L6Je:function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o),a=n("8Kt/"),i=n.n(a),s=r.a.createElement;t.a=function(e){var t=e.children,n=e.background;return s("div",{className:[n,"layout"].join(" ")},s(i.a,null,s("meta",{charSet:"utf-8"}),s("title",null,"Di\xe1rio Nook World"),s("meta",{name:"application-name",content:"Di\xe1rio Nook World"}),s("meta",{name:"apple-mobile-web-app-title",content:"Di\xe1rio Nook World"}),s("meta",{name:"description",content:"Crie e acompanhe suas metas no Animal Crossing New Horizons!"}),s("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),s("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black-translucent"}),s("meta",{name:"format-detection",content:"telephone=no"}),s("meta",{name:"mobile-web-app-capable",content:"yes"}),s("meta",{name:"msapplication-config",content:"/browserconfig.xml"}),s("meta",{name:"msapplication-TileColor",content:"#5bbad5"}),s("meta",{name:"msapplication-tap-highlight",content:"no"}),s("meta",{name:"theme-color",content:"#5bbad5"}),s("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover"}),s("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),s("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png?v=".concat(2)}),s("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png?v=".concat(2)}),s("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png?v=".concat(2)}),s("link",{rel:"manifest",href:"/manifest.json?v=".concat(2)}),s("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg?v=".concat(2),color:"#5bbad5"}),s("link",{rel:"shortcut icon",href:"/favicon-32x32.png?v=".concat(2)}),s("meta",{name:"twitter:card",content:"summary_large_image"}),s("meta",{name:"twitter:url",content:"https://diario.nook.world"}),s("meta",{name:"twitter:title",content:"Di\xe1rio Nook World"}),s("meta",{name:"twitter:description",content:"Crie e acompanhe suas metas no Animal Crossing New Horizons!"}),s("meta",{name:"twitter:image",content:"https://diario.nook.world/twitter.png"}),s("meta",{name:"twitter:creator",content:"@NookWorldApp"}),s("meta",{property:"og:type",content:"website"}),s("meta",{property:"og:title",content:"Di\xe1rio Nook World"}),s("meta",{property:"og:description",content:"Crie e acompanhe suas metas no Animal Crossing New Horizons!"}),s("meta",{property:"og:site_name",content:"Di\xe1rio Nook World"}),s("meta",{property:"og:url",content:"https://diario.nook.world"}),s("meta",{property:"og:image",content:"https://diario.nook.world/opengraph.png"}),s("meta",{property:"og:image:width",content:"1200"}),s("meta",{property:"og:image:height",content:"630"})),t,s("div",{className:"ios-peek"}))}},RIqP:function(e,t,n){var o=n("Ijbi"),r=n("EbDI"),a=n("Bnag");e.exports=function(e){return o(e)||r(e)||a()}},T3rY:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),r=n.n(o),a=n("L6Je"),i=n("YFqc"),s=n.n(i),c=r.a.createElement;var l=function(e){var t=e.className;return c("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),c("polyline",{points:"12 19 5 12 12 5"}))},u=n("oFDc"),p=n.n(u),f=r.a.createElement,d=function(e){return e.replace(/\[([^\]]+)\]\(([^\)]+)\)/gm,'<a target="_blank" rel="noopener" href="$2">$1</a>')};function m(e){var t=e.language;return f("h4",null,t.noUpdatesCopy)}function h(e){var t=e.children,n=e.language;return f("section",{className:p.a.updatesContainer},f("p",null,f(s.a,{href:"/settings"},f("a",{className:"button"},f(l,null),n.backToSettings))),t)}function v(e){var t=e.update,n=e.locale;return f("article",{className:p.a.updateItem},f("small",null,new Date(t.date).toLocaleDateString(n||"pt-BR")),f("h5",null,t.title),f("p",{dangerouslySetInnerHTML:{__html:d(t.message)}}))}var g=function(e){var t=e.language,n=(e.setSelectedLanguage,e.updates[t.selectedLanguage]||[]);return n.length<1?f(h,{language:t},f(m,{language:t})):f(h,{language:t},n.map((function(e,n){return f(v,{key:n,update:e,locale:t.locale})})))},y={en:[{date:"2020-06-30",title:"The Diary is now open-source",message:"The Diary from Nook World is now open-source. You can read the announcement (in Portuguese only) [clicking here](/open-source)."},{date:"2020-04-21",title:"K.K. Slider songlist",message:"All the 95 songs available in New Horizons have been added, including all covers. Filtering and copying missing songs will be coming in a future update."},{date:"2020-04-14",title:"Fossils list updated",message:"We updated the fossils list to remove duplicate, wrongfully named or itens from games prior to New Horizons. The new list is the final one. Big thanks to our friends [Matheus](https://twitter.com/darkpelos) and [Laercio](https://twitter.com/laerciomasala) for the help."}],pt:[{date:"2020-06-30",title:"O Di\xe1rio agora \xe9 open-source",message:"O D\xedario Nook World agora \xe9 open-source. Voc\xea pode ler o comunicado completo [clicando aqui](/open-source)."},{date:"2020-04-21",title:"Lista de M\xfasicas do K.K. Slider",message:"Adicionamos todas as 95 m\xfasicas do K.K. Slider dispon\xedveis em New Horizons, incluindo todas as capas. Ainda est\xe1 incompleto (por exemplo, n\xe3o temos filtros e nem os bot\xf5es pra copiar a lista de m\xfasicas que faltam), mas decidimos liberar essa atualiza\xe7\xe3o um pouquinho antes como forma de agradecimento \xe0 todos que responderam nosso feedback. Se voc\xea ainda n\xe3o respondeu e puder responder, voc\xea pode ajudar a definir quais ser\xe3o as pr\xf3ximas funcionalidades do Di\xe1rio Nook World. Basta clicar [aqui](https://forms.gle/f1CtvEEtxgqSbq6D7) e responder o formul\xe1rio. A pesquisa \xe9 completamente an\xf4nima. A equipe Nook World agradece a sua colabora\xe7\xe3o."},{date:"2020-04-14",title:"Lista de F\xf3sseis Atualizada",message:"Fizemos uma atualiza\xe7\xe3o na lista de f\xf3sseis e removemos alguns f\xf3sseis duplicados, com nomes errados ou de jogos anteriores ao New Horizons. A nova lista \xe9 a lista definitiva. Agradecimentos aos nossos amigos [Matheus](https://twitter.com/darkpelos) e [La\xe9rcio](https://twitter.com/laerciomasala) pela ajuda."}]},w=n("7UnL"),b=n.n(w),k=r.a.createElement;t.default=function(e){var t=e.language;return k(a.a,{background:b.a.layout},k("h1",null,t.updatesTitle),k(g,{language:t,updates:y}))}},Xuae:function(e,t,n){"use strict";var o=n("lwsE"),r=n("PJYZ"),a=n("W8MJ"),i=n("7W2i"),s=n("a1gu"),c=n("Nsbk"),l=n("RIqP");function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var p=n("q1tI"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(l){i(m,l);var p,d=(p=m,function(){var e,t=c(p);if(u()){var n=c(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function m(e){var a;return o(this,m),a=d.call(this,e),f&&(t.add(r(a)),n(r(a))),a}return a(m,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(m,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),m}(p.Component)}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var o=n("lwsE"),r=n("W8MJ"),a=n("7W2i"),i=n("a1gu"),s=n("Nsbk");function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var l=n("TqRt"),u=n("284h");t.__esModule=!0,t.default=void 0;var p,f=u(n("q1tI")),d=n("QmWs"),m=n("g/15"),h=l(n("nOHt"));function v(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var g=new Map,y=window.IntersectionObserver,w={};function b(){return p||(y?p=new y((function(e){e.forEach((function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),g.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var k=function(e){a(l,e);var t,n=(t=l,function(){var e,n=s(t);if(c()){var o=s(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return i(this,e)});function l(e){var t;return o(this,l),(t=n.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,n=null,o=null;return function(r,a){if(o&&r===t&&a===n)return o;var i=e(r,a);return t=r,n=a,o=i,i}}((function(e,t){return{href:v(e),as:t?v(t):t}})),t.linkClicked=function(e){var n=e.currentTarget,o=n.nodeName,r=n.target;if("A"!==o||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=t.formatUrls(t.props.href,t.props.as),i=a.href,s=a.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var c=window.location.pathname;i=(0,d.resolve)(c,i),s=s?(0,d.resolve)(c,s):i,e.preventDefault();var l=t.props.scroll;null==l&&(l=s.indexOf("#")<0),h.default[t.props.replace?"replace":"push"](i,s,{shallow:t.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return r(l,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,o=t.as,r=(0,d.resolve)(e,n);return[r,o?(0,d.resolve)(e,o):r]}},{key:"handleRef",value:function(e){var t=this;this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=b();return n?(n.observe(e),g.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}g.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();h.default.prefetch(t[0],t[1],e).catch((function(e){0})),w[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),o=n.href,r=n.as;"string"===typeof t&&(t=f.default.createElement("a",null,t));var a=f.Children.only(t),i={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=r||o),f.default.cloneElement(a,i)}}]),l}(f.Component);t.default=k},lwAK:function(e,t,n){"use strict";var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var r=o(n("q1tI"));t.AmpStateContext=r.createContext({})},oFDc:function(e,t,n){e.exports={updatesContainer:"Updates_updatesContainer__1CgI4",updateItem:"Updates_updateItem__M23Vy"}},zsqJ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/updates",function(){return n("T3rY")}])}},[["zsqJ",0,1,2]]]);