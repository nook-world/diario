(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))}},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),a=r(n("Xuae")),i=n("lwAK"),s=n("FYa8"),l=n("/0+H");function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=c;var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var s=0,l=p.length;s<l;s++){var c=p[s];if(o.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?a=!1:n.add(c);else{var u=o.props[c],f=r[c]||new Set;f.has(u)?a=!1:(f.add(u),r[c]=f)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var m=a.default();function h(e){var t=e.children;return o.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(s.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(m,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:l.isInAmpMode(e)},t)}))}))}h.rewind=m.rewind,t.default=h},"9ThN":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var r=n("rePB");function o(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=n("q1tI"),i=n.n(a).a.createElement;function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=Object(a.createContext)({});function u(e){var t=e.children,n=o(e,["children"]);return i(c.Provider,{value:l({},n)},t)}function p(){return Object(a.useContext)(c)}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.HeadManagerContext=o.createContext(null)},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},KQm4:function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",(function(){return r}))},L6Je:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("8Kt/"),i=n.n(a),s=o.a.createElement;t.a=function(e){var t=e.children,n=e.background;return s("div",{className:[n,"layout"].join(" ")},s(i.a,null,s("meta",{charSet:"utf-8"}),s("title",null,"Di\xe1rio Nook World"),s("meta",{name:"application-name",content:"Di\xe1rio Nook World"}),s("meta",{name:"apple-mobile-web-app-title",content:"Di\xe1rio Nook World"}),s("meta",{name:"description",content:"Crie e acompanhe suas metas no Animal Crossing New Horizons!"}),s("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),s("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black-translucent"}),s("meta",{name:"format-detection",content:"telephone=no"}),s("meta",{name:"mobile-web-app-capable",content:"yes"}),s("meta",{name:"msapplication-config",content:"/browserconfig.xml"}),s("meta",{name:"msapplication-TileColor",content:"#5bbad5"}),s("meta",{name:"msapplication-tap-highlight",content:"no"}),s("meta",{name:"theme-color",content:"#5bbad5"}),s("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover"}),s("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),s("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png?v=".concat(2)}),s("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png?v=".concat(2)}),s("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png?v=".concat(2)}),s("link",{rel:"manifest",href:"/manifest.json?v=".concat(2)}),s("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg?v=".concat(2),color:"#5bbad5"}),s("link",{rel:"shortcut icon",href:"/favicon-32x32.png?v=".concat(2)}),s("meta",{name:"twitter:card",content:"summary_large_image"}),s("meta",{name:"twitter:url",content:"https://diario.nook.world"}),s("meta",{name:"twitter:title",content:"Di\xe1rio Nook World"}),s("meta",{name:"twitter:description",content:"Crie e acompanhe suas metas no Animal Crossing New Horizons!"}),s("meta",{name:"twitter:image",content:"https://diario.nook.world/twitter.png"}),s("meta",{name:"twitter:creator",content:"@NookWorldApp"}),s("meta",{property:"og:type",content:"website"}),s("meta",{property:"og:title",content:"Di\xe1rio Nook World"}),s("meta",{property:"og:description",content:"Crie e acompanhe suas metas no Animal Crossing New Horizons!"}),s("meta",{property:"og:site_name",content:"Di\xe1rio Nook World"}),s("meta",{property:"og:url",content:"https://diario.nook.world"}),s("meta",{property:"og:image",content:"https://diario.nook.world/opengraph.png"}),s("meta",{property:"og:image:width",content:"1200"}),s("meta",{property:"og:image:height",content:"630"})),t,s("div",{className:"ios-peek"}))}},"PN+k":function(e,t,n){e.exports={layout:"settings_layout__39YFi"}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("Bnag");e.exports=function(e){return r(e)||o(e)||a()}},SMui:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("L6Je"),i=n("rePB"),s=n("YFqc"),l=n.n(s),c=o.a.createElement;var u=function(e){var t=e.className;return c("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),c("polyline",{points:"12 5 19 12 12 19"}))},p=n("KQm4"),f=n("9ThN"),m=n("axls"),h=n.n(m),g=o.a.createElement;var d=function(e){var t=e.language,n=Object(f.b)(),r=n.menuItems,a=n.setMenuItems;return g(o.a.Fragment,null,g("h2",null,t.display),g("p",null,t.chooseWhatYouWantToSeeInTheMenu,":"),r.map((function(e,n){return["","settings"].includes(e.rootPath)?null:g("p",{key:"setting-option-menu-".concat(e.rootPath),className:h.a.displayOptionsMenu},g("label",null,g("input",{type:"checkbox",className:"checkbox",checked:e.visible,onChange:function(){return function(e){var t=Object(p.a)(r);t[e].visible=!t[e].visible,a(t)}(n)}}),t[e.label]))})))},v=n("mpEC"),b=n.n(v),y=o.a.createElement;function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(e){var t=e.language,n=e.setSelectedLanguage,a=Object(r.useState)(""),i=a[0],s=a[1],c=Object(r.useState)({}),p=c[0],f=c[1],m=Object(r.useState)({tasks:!1,bugs:!1,fishes:!1,fossils:!1}),h=m[0],g=m[1],v=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e={tasks:localStorage.getItem("tasks"),bugs:localStorage.getItem("bugs"),fishes:localStorage.getItem("fishes"),fossils:localStorage.getItem("fossils")};f("data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e)))}),[]),y("nav",{className:b.a.settingsOptions},y("p",null,y(l.a,{href:"/settings/updates"},y("a",{className:"button"},t.seeLatestUpdates,y(u,null)))),y("h2",null,t.language),y("p",null,t.chooseTheDesiredLanguage),y("p",null,[{short:"pt",full:"Portugu\xeas",country:"Brazil"},{short:"en",full:"English",country:"USA"}].map((function(e){var r=[b.a.settingsOptionsChangeLanguage];return t.selectedLanguage===e.short&&r.push(b.a.settingsOptionsChangeLanguageSelected),y("button",{key:"language-selector-".concat(e.short),className:r.join(" "),onClick:function(){return function(e){n(e),localStorage.setItem("language",e)}(e.short)}},y("img",{src:"/languages/".concat(e.short,".png"),className:b.a.settingsOptionsFlag,alt:e.country}),e.full)}))),y(d,{language:t}),y("h2",null,t.backupData),y("p",null,t.getMyTasksAndMilestonesToUseInOtherPlace),y("p",null,y("a",{href:p,className:"button",download:"my-miles-backup.json"},t.export)),y("p",null,t.getTheDataYouAlreadyExported,y("br",null),y("label",{className:"fileArea"},y("input",{type:"file",ref:v,accept:"application/JSON",required:!0}),y("span",{className:"fileDummy"},y("span",{className:"fileSuccess"},t.fileSelectedNowYouCanImportYourData),y("span",{className:"fileDefault"},t.clickToSelectAFileToImport)))),y("p",null,y("button",{className:"button",onClick:function(){var e=v.current.files[0];if(!e)return s(t.addAFileToImport);var n=new FileReader;n.readAsText(e,"UTF-8"),n.onload=function(e){try{var n=JSON.parse(e.target.result);n.tasks&&localStorage.setItem("tasks",n.tasks),n.bugs&&localStorage.setItem("bugs",n.bugs),n.fishes&&localStorage.setItem("fishes",n.fishes),n.fossils&&localStorage.setItem("fossils",n.fossils),s(t.yourBackupIsBack)}catch(r){s(t.errorParsingFile)}}}},t.import)),i&&y("p",null,y("span",{className:b.a.settingsOptionsFeedback},i)),y("img",{src:"/assets/rule-confetti-brown.svg",alt:"Rule Confetti Brow"}),y("h2",null,t.removeContent," (",t.daaanger,")"),y("p",null,h.tasks&&y(o.a.Fragment,null,t.tasksReseted),!h.tasks&&y("button",{className:"button buttonDanger",onClick:function(){g(O({},h,{tasks:!0})),localStorage.removeItem("tasks")}},t.resetMyTasks)),y("p",null,h.bugs&&y(o.a.Fragment,null,t.bugsReseted),!h.bugs&&y("button",{className:"button buttonDanger",onClick:function(){g(O({},h,{bugs:!0})),localStorage.removeItem("bugs")}},t.uncheckBugs)),y("p",null,h.fishes&&y(o.a.Fragment,null,t.fishesReseted),!h.fishes&&y("button",{className:"button buttonDanger",onClick:function(){g(O({},h,{fishes:!0})),localStorage.removeItem("fishes")}},t.uncheckFishes)),y("p",null,h.fossils&&y(o.a.Fragment,null,t.fossilsReseted),!h.fossils&&y("button",{className:"button buttonDanger",onClick:function(){g(O({},h,{fossils:!0})),localStorage.removeItem("fossils")}},t.uncheckFossils)),y("p",null,y("button",{className:"button buttonDanger",onClick:function(){g({tasks:!0,bugs:!0,fishes:!0,fossils:!0}),localStorage.clear()}},t.cleanAll)),y("img",{src:"/assets/rule-confetti-brown.svg",alt:"Rule Confetti Brow"}),y("h2",null,t.creditsTitle),y("p",null,t.creditsBody," ",y("a",{href:"https://twitter.com/_luisf02"},"Chico"),","," ",y("a",{href:"https://instagr.am/fotografolixo"},"Dio"),","," ",y("a",{href:"https://twitter.com/vavomr"},"Gus")," &"," ",y("a",{href:"https://twitter.com/filipekiss"},"Kiss")),y("p",null,t.twitterBody," ",y("a",{href:"https://twitter.com/NookWorldApp"},"@NookWorldApp")))},C=n("PN+k"),S=n.n(C),j=o.a.createElement;function _(){return j("a",{style:{textDecoration:"none",display:"inline-block"},href:"https://nook.world"},j("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 283 182",fill:"none"},j("ellipse",{cx:"142",cy:"169.204",rx:"12.2038",ry:"21",transform:"rotate(90 142 169.204)",fill:"currentColor"}),j("path",{d:"M29.2536 75.4975L34.0283 68.7441C-1.27167 43.0618 64.4142 0.983464 68.3958 42.3234L75.3767 38.293C69.013 -27.7787 -26.0761 35.2427 29.2536 75.4975Z",fill:"currentColor"}),j("path",{d:"M253.45 75.4975L248.676 68.7441C283.976 43.0618 218.29 0.983464 214.308 42.3234L207.327 38.293C213.691 -27.7787 308.78 35.2427 253.45 75.4975Z",fill:"currentColor"}),j("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M141.051 25C32.2506 25 7.71725 103 9.05059 142C9.05059 175.798 56.0868 193.842 79.0506 169C127.602 126.773 155.075 127.328 204.5 169C230.604 189.958 271.175 177.94 274.051 142C275.051 103 249.851 25 141.051 25ZM205.057 103C205.057 116.807 198.552 128 190.528 128C182.505 128 176 116.807 176 103C176 89.1929 182.505 78 190.528 78C198.552 78 205.057 89.1929 205.057 103ZM93.5283 128C101.552 128 108.057 116.807 108.057 103C108.057 89.1929 101.552 78 93.5283 78C85.5045 78 79 89.1929 79 103C79 116.807 85.5045 128 93.5283 128Z",fill:"currentColor"})),j("br",null),"nook.world")}var x=o.a.createElement;t.default=function(e){var t=e.language,n=e.setSelectedLanguage;return x(a.a,{background:S.a.layout},x("h1",null,t.settings),x(k,{language:t,setSelectedLanguage:n}),x("footer",{className:"textCenter"},x(_,null)))}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),a=n("W8MJ"),i=n("7W2i"),s=n("a1gu"),l=n("Nsbk"),c=n("RIqP");function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var p=n("q1tI"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(c){i(h,c);var p,m=(p=h,function(){var e,t=l(p);if(u()){var n=l(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function h(e){var a;return r(this,h),a=m.call(this,e),f&&(t.add(o(a)),n(o(a))),a}return a(h,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(h,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),h}(p.Component)}},YFqc:function(e,t,n){e.exports=n("cTJO")},axls:function(e,t,n){e.exports={displayOptionsMenu:"DisplayOptions_displayOptionsMenu__3tQ6w"}},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),a=n("7W2i"),i=n("a1gu"),s=n("Nsbk");function l(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var c=n("TqRt"),u=n("284h");t.__esModule=!0,t.default=void 0;var p,f=u(n("q1tI")),m=n("QmWs"),h=n("g/15"),g=c(n("nOHt"));function d(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var v=new Map,b=window.IntersectionObserver,y={};function w(){return p||(b?p=new b((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var O=function(e){a(c,e);var t,n=(t=c,function(){var e,n=s(t);if(l()){var r=s(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return i(this,e)});function c(e){var t;return r(this,c),(t=n.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var i=e(o,a);return t=o,n=a,r=i,i}}((function(e,t){return{href:d(e),as:t?d(t):t}})),t.linkClicked=function(e){var n=e.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=t.formatUrls(t.props.href,t.props.as),i=a.href,s=a.as;if(function(e){var t=(0,m.parse)(e,!1,!0),n=(0,m.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var l=window.location.pathname;i=(0,m.resolve)(l,i),s=s?(0,m.resolve)(l,s):i,e.preventDefault();var c=t.props.scroll;null==c&&(c=s.indexOf("#")<0),g.default[t.props.replace?"replace":"push"](i,s,{shallow:t.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return o(c,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,m.resolve)(e,n);return[o,r?(0,m.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),y[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),v.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}v.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();g.default.prefetch(t[0],t[1],e).catch((function(e){0})),y[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=f.default.createElement("a",null,t));var a=f.Children.only(t),i={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),f.default.cloneElement(a,i)}}]),c}(f.Component);t.default=O},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.AmpStateContext=o.createContext({})},mpEC:function(e,t,n){e.exports={settingsOptions:"SettingsOptions_settingsOptions__3ymSg",settingsOptionsFeedback:"SettingsOptions_settingsOptionsFeedback__3tRy4",settingsOptionsChangeLanguage:"SettingsOptions_settingsOptionsChangeLanguage__3VCto",settingsOptionsChangeLanguageSelected:"SettingsOptions_settingsOptionsChangeLanguageSelected__37Zum",settingsOptionsFlag:"SettingsOptions_settingsOptionsFlag__3F0Z6"}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},wFL7:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings",function(){return n("SMui")}])}},[["wFL7",0,1,2]]]);