(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"6XXL":function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/songs",function(){return i("6mCN")}])},"6mCN":function(e,n,i){"use strict";i.r(n);var t=i("q1tI"),a=i.n(t),r=i("L6Je"),o=i("KQm4"),c=i("uB5j"),p=i.n(c),s=i("9UQZ"),m=i("3k0K"),u=i("C13l"),l=a.a.createElement;var d=function(e){var n=e.title,i=e.emoji,a=e.missingLabel,r=e.collectedLabel,o=e.list,c=e.selected,p=o.filter((function(e){return!c.includes(e.id)})).map((function(e){return"".concat(i," \xb7 ").concat(e.name)})).join("\n"),s=o.filter((function(e){return c.includes(e.id)})).map((function(e){return"".concat(i," \xb7 ").concat(e.name)})).join("\n"),m={missing:p,caught:s},u=Object(t.useRef)(null),d=Object(t.useRef)(null);function K(e){e.current.value=m[e.current.name],e.current.select(),document.execCommand("copy"),alert("Copied")}return l("div",{className:"textCenter"},l("h2",null,n),l("p",null,l("button",{className:"button",onClick:function(){return K(u)}},a)),l("p",null,l("button",{className:"button buttonSecondary",onClick:function(){return K(d)}},r),l("label",{style:{position:"absolute",left:"-100vw",width:0,height:0,padding:0}},a,l("textarea",{name:"missing",ref:u,defaultValue:p,style:{position:"absolute",left:"-100vw",width:0,height:0,padding:0,fontSize:"1em"}})),l("label",{style:{position:"absolute",left:"-100vw",opactiy:0,width:0,height:0,padding:0}},r,l("textarea",{name:"caught",ref:d,style:{position:"absolute",left:"-100vw",opactiy:0,width:0,height:0,padding:0,fontSize:"1em"},defaultValue:s}))))},K=i("KwL+"),f=i.n(K),g=a.a.createElement;var y=function(e){var n=e.language,i=Object(t.useState)(""),r=i[0],c=i[1],l=Object(t.useState)([]),K=l[0],y=l[1];return Object(t.useEffect)((function(){var e=[];try{e=localStorage.getItem("songs"),e=JSON.parse(e)||[]}catch(n){e=[]}y(e)}),[]),g(a.a.Fragment,null,g("div",{className:"textCenter"},g(m.a,{language:n}),g("p",null,g(u.a,{current:K.length,total:p.a.length}))),g(s.a,{language:n,keyword:r,setKeyword:c}),g("div",{className:f.a.songs},p.a.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase().trim())})).map((function(e){var n=[f.a.songsItem];return K.includes(e.id)&&n.push(f.a.songsItemActive),g("button",{className:n.join(" "),key:"song-".concat(e.id),onClick:function(){return function(e){var n=Object(o.a)(K);n.includes(e)?n.splice(n.indexOf(e),1):n.push(e),localStorage.setItem("songs",JSON.stringify(n)),y(n)}(e.id)}},g("img",{className:f.a.songsItemImage,src:"/songs/".concat(e.id,".png"),alt:e.name,title:e.name,width:"140",height:"140",loading:"lazy"}),g("span",{className:f.a.songsItemName},e.name))}))),g(d,{list:p.a,selected:K,title:n.copyToClipboard,emoji:"\ud83c\udfb5",collectedLabel:n.copyCollectedSongs,missingLabel:n.copyMissingSongs}))},b=i("MQ4D"),S=i.n(b),h=a.a.createElement;n.default=function(e){var n=e.language;return h(r.a,{background:S.a.layout},h("h1",null,n.songs),h(y,{language:n}))}},"7W2i":function(e,n,i){var t=i("SksO");e.exports=function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&t(e,n)}},"KwL+":function(e,n,i){e.exports={songs:"Songs_songs__3jcm8",songsItem:"Songs_songsItem__FOV40",songsItemActive:"Songs_songsItemActive__1MdG9",songsItemImage:"Songs_songsItemImage__2FDPV",songsItemName:"Songs_songsItemName__yDa1j"}},MQ4D:function(e,n,i){e.exports={layout:"songs_layout__2LZ5N"}},Nsbk:function(e,n){function i(n){return e.exports=i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},i(n)}e.exports=i},PJYZ:function(e,n){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,n,i){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},SksO:function(e,n){function i(n,t){return e.exports=i=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},i(n,t)}e.exports=i},W8MJ:function(e,n){function i(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}e.exports=function(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e}},a1gu:function(e,n,i){var t=i("cDf5"),a=i("PJYZ");e.exports=function(e,n){return!n||"object"!==t(n)&&"function"!==typeof n?a(e):n}},cDf5:function(e,n){function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function t(n){return"function"===typeof Symbol&&"symbol"===i(Symbol.iterator)?e.exports=t=function(e){return i(e)}:e.exports=t=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":i(e)},t(n)}e.exports=t},lwsE:function(e,n){e.exports=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}},uB5j:function(e,n){e.exports=[{id:1,name:"Agent K.K.",price:3200},{id:2,name:"Aloha K.K.",price:3200},{id:3,name:"Animal City",price:3200},{id:4,name:"Bubblegum K.K.",price:3200},{id:5,name:"Caf\xe9 K.K.",price:3200},{id:6,name:"Comrade K.K.",price:3200},{id:7,name:"DJ K.K.",price:3200},{id:8,name:"Drivin'",price:3200},{id:9,name:"Farewell",price:3200},{id:10,name:"Forest Life",price:3200},{id:11,name:"Go K.K. Rider",price:3200},{id:12,name:"Hypno K.K.",price:3200},{id:13,name:"I Love You",price:3200},{id:14,name:"Imperial K.K.",price:3200},{id:15,name:"King K.K.",price:3200},{id:16,name:"K.K. Adventure",price:3200},{id:17,name:"K.K. Aria",price:3200},{id:18,name:"K.K. Ballad",price:3200},{id:19,name:"K.K. Bazaar",price:3200},{id:20,name:"K.K. Birthday",price:3200},{id:21,name:"K.K. Blues",price:3200},{id:22,name:"K.K. Bossa",price:3200},{id:23,name:"K.K. Calypso",price:3200},{id:24,name:"K.K. Casbah",price:3200},{id:25,name:"K.K. Chorale",price:3200},{id:26,name:"K.K. Condor",price:3200},{id:27,name:"K.K. Country",price:3200},{id:28,name:"K.K. Cruisin'",price:3200},{id:29,name:"K.K. D&B",price:3200},{id:30,name:"K.K. Dirge",price:3200},{id:31,name:"K.K. Disco",price:3200},{id:32,name:"K.K. Dixie",price:3200},{id:33,name:"K.K. \xc9tude",price:3200},{id:34,name:"K.K. Faire",price:3200},{id:35,name:"K.K. Flamenco",price:3200},{id:36,name:"K.K. Folk",price:3200},{id:37,name:"K.K. Fusion",price:3200},{id:38,name:"K.K. Groove",price:3200},{id:39,name:"K.K. Gumbo",price:3200},{id:40,name:"K.K. House",price:3200},{id:41,name:"K.K. Island",price:3200},{id:42,name:"K.K. Jazz",price:3200},{id:43,name:"K.K. Jongara",price:3200},{id:44,name:"K.K. Lament",price:3200},{id:45,name:"K.K. Love Song",price:3200},{id:46,name:"K.K. Lullaby",price:3200},{id:47,name:"K.K. Mambo",price:3200},{id:48,name:"K.K. Marathon",price:3200},{id:49,name:"K.K. March",price:3200},{id:50,name:"K.K. Mariachi",price:3200},{id:51,name:"K.K. Metal",price:3200},{id:52,name:"K.K. Milonga",price:3200},{id:53,name:"K.K. Moody",price:3200},{id:54,name:"K.K. Oasis",price:3200},{id:55,name:"K.K. Parade",price:3200},{id:56,name:"K.K. Ragtime",price:3200},{id:57,name:"K.K. Rally",price:3200},{id:58,name:"K.K. Reggae",price:3200},{id:59,name:"K.K. Rock",price:3200},{id:60,name:"K.K. Rockabilly",price:3200},{id:61,name:"K.K. Safari",price:3200},{id:62,name:"K.K. Salsa",price:3200},{id:63,name:"K.K. Samba",price:3200},{id:64,name:"K.K. Ska",price:3200},{id:65,name:"K.K. Sonata",price:3200},{id:66,name:"K.K. Song",price:3200},{id:67,name:"K.K. Soul",price:3200},{id:68,name:"K.K. Steppe",price:3200},{id:69,name:"K.K. Stroll",price:3200},{id:70,name:"K.K. Swing",price:3200},{id:71,name:"K.K. Synth",price:3200},{id:72,name:"K.K. Tango",price:3200},{id:73,name:"K.K. Technopop",price:3200},{id:74,name:"K.K. Waltz",price:3200},{id:75,name:"K.K. Western",price:3200},{id:76,name:"Lucky K.K.",price:3200},{id:77,name:"Marine Song 2001",price:3200},{id:78,name:"Mountain Song",price:3200},{id:79,name:"Mr. K.K.",price:3200},{id:80,name:"My Place",price:3200},{id:81,name:"Neapolitan",price:3200},{id:82,name:"Only Me",price:3200},{id:83,name:"Pondering",price:3200},{id:84,name:"Rockin' K.K.",price:3200},{id:85,name:"Soulful K.K.",price:3200},{id:86,name:"Space K.K.",price:3200},{id:87,name:"Spring Blossoms",price:3200},{id:88,name:"Stale Cupcakes",price:3200},{id:89,name:"Steep Hill",price:3200},{id:90,name:"Surfin' K.K.",price:3200},{id:91,name:"The K. Funk",price:3200},{id:92,name:"To the Edge",price:3200},{id:93,name:"Two Days Ago",price:3200},{id:94,name:"Wandering",price:3200},{id:95,name:"Welcome Horizons",price:3200}]}},[["6XXL",0,1,3]]]);