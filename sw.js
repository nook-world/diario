if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise(async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()})),s.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},s=(s,i)=>{Promise.all(s.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(s)};self.define=(s,n,a)=>{i[s]||(i[s]=Promise.resolve().then(()=>{let i={};const f={uri:location.origin+s.slice(1)};return Promise.all(n.map(s=>{switch(s){case"exports":return i;case"module":return f;default:return e(s)}})).then(e=>{const s=a(...e);return i.default||(i.default=s),i})}))}}define("./sw.js",["./workbox-6f0d2936"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"_bU-1gn99D3RuEixt6lkm"},{url:"/_next/static/_bU-1gn99D3RuEixt6lkm/_buildManifest.js",revision:"fb535ca6b257c758f11aaaeaaa8cd1b0"},{url:"/_next/static/_bU-1gn99D3RuEixt6lkm/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/_bU-1gn99D3RuEixt6lkm/pages/404.js",revision:"f9af4ec056e01459ef92fc3a0589feaa"},{url:"/_next/static/_bU-1gn99D3RuEixt6lkm/pages/_app.js",revision:"e5adb7fa70c5250b382e572182c733ba"},{url:"/_next/static/_bU-1gn99D3RuEixt6lkm/pages/_error.js",revision:"974d325fdb5d7c8ae7b04b82b03691cb"},{url:"/_next/static/_bU-1gn99D3RuEixt6lkm/pages/index.js",revision:"70ab0dacc95a5986d1b727a585f58bf5"},{url:"/_next/static/_bU-1gn99D3RuEixt6lkm/pages/museum/bugs.js",revision:"4bb833e3642d5f8cc2c0af2638054b73"},{url:"/_next/static/_bU-1gn99D3RuEixt6lkm/pages/museum/fishes.js",revision:"7912ab787d54761cb2f457b61106d637"},{url:"/_next/static/_bU-1gn99D3RuEixt6lkm/pages/museum/fossils.js",revision:"85896a4e58e34f4ecb8599452af8d939"},{url:"/_next/static/_bU-1gn99D3RuEixt6lkm/pages/settings.js",revision:"b93f574e88ab413968a058f44328092f"},{url:"/_next/static/_bU-1gn99D3RuEixt6lkm/pages/settings/updates.js",revision:"6d7d7083e54ccb1657bff656dbeda815"},{url:"/_next/static/_bU-1gn99D3RuEixt6lkm/pages/songs.js",revision:"f53a4d8dec87a2d2c160d50603eb5c51"},{url:"/_next/static/chunks/6f85797bca78c72a7c0a5c92e21bb5f47777c6d7.92878cf99693685a7c2c.js",revision:"40af5a903ebe5b92815200598a2aad16"},{url:"/_next/static/chunks/b4e80381e0f7caf21cec6546f07a10c87709c4d8.a6fd9922368845c34aea.js",revision:"9a8172578e3f258a47d7cb029950f6f4"},{url:"/_next/static/chunks/f889a89fd746c97f5e1e15d161b5bb54b72547cc.12a4592f58735eb598e1.js",revision:"8c3e64fbe64199c02647b34bac4f768f"},{url:"/_next/static/chunks/framework.0f140d5eb2070c7e423d.js",revision:"a07dacbb502f5257565ceb7d460e71e6"},{url:"/_next/static/css/013605200f188e758b67.css",revision:"3d61028e69dfd77945fcfe51c8a8b875"},{url:"/_next/static/css/5812f3acef0a178be7f6.css",revision:"51158c0fa9addc7efa43f1a3f0378cff"},{url:"/_next/static/css/5aff072e163e640935d2.css",revision:"de82b66e561f5eb0f69f26cbba0fbf9b"},{url:"/_next/static/css/75ab0d8ccddf99c6d4fa.css",revision:"a97e2440507494f5532dc65a7dc9712c"},{url:"/_next/static/css/8c9ed4e6b5e94def85b7.css",revision:"a682c5abfe945058c4cb09033b350a27"},{url:"/_next/static/css/dc69dca2d726cd31fb24.css",revision:"4eda5d11919db6cb3aa7571d7f440327"},{url:"/_next/static/runtime/main-17a080a0757c64f31e66.js",revision:"d8c55067ff0fcb89270555b5218c6504"},{url:"/_next/static/runtime/polyfills-fcdaceb475a9116d3d01.js",revision:"cfd0b7650b78ac79b3add515900d61e7"},{url:"/_next/static/runtime/webpack-b65cab0b00afd201cbda.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/apple-touch-icon.png",revision:"875608d0dc40d89e9b48b94e82489103"},{url:"/assets/ball-tiles.png",revision:"9a9e7676b90a290f3bab07970ebf2eb7"},{url:"/assets/confetti.jpg",revision:"3b1189879e7572e52f30889e8d937943"},{url:"/assets/critterpedia.png",revision:"03e654008af7d22c91fb86a2e7acf5a3"},{url:"/assets/nook-shopping-filter.png",revision:"6edf8d73ab1c1666bfd767c970c121bf"},{url:"/assets/nook-shopping.png",revision:"b999e3df268e4bee6bf7d7fd750dc287"},{url:"/assets/nook-terminal.png",revision:"0c47081df3002731a71475afb1b53df3"},{url:"/assets/nook.jpg",revision:"442dcbae3e8edd34c4d2793f68c333ee"},{url:"/assets/opengraph.png",revision:"c3a86720b0076729d77ebce32f180666"},{url:"/assets/pattern-dots-2x.png",revision:"a82c8781cbdc75eb7c1d23b8ca2046a3"},{url:"/assets/pattern-grid-2x.png",revision:"b810f9645fa5b5392f4a4dab6e4b1236"},{url:"/assets/rule-confetti-brown.svg",revision:"c8da3cfa21b53794f58630618b118de1"},{url:"/assets/twitter.png",revision:"61ace09b18dd254fa1de3189b4cf9684"},{url:"/assets/waves.jpg",revision:"2eae7fafe4b635ddaf58bfa9860075f0"},{url:"/assets/waves.svg",revision:"3c705286c73aa579b53f9bfb28100c42"},{url:"/assets/wood.jpg",revision:"15b0d82b90537376001bd83888b92ac4"},{url:"/browserconfig.xml",revision:"e0b7bb895ea7194b5afa9ed3b07200f3"},{url:"/bugs/1.png",revision:"7304d4199e7d98428e7190f33d59c6c9"},{url:"/bugs/10.png",revision:"6e97181687a27747af560f2b5832ade5"},{url:"/bugs/11.png",revision:"d479085adbf60d82545dcc544f2d90b2"},{url:"/bugs/12.png",revision:"e7136654ba9ede0fe758acdf1c4059f9"},{url:"/bugs/13.png",revision:"d41627ea677844c829b1c0e9f2da240e"},{url:"/bugs/14.png",revision:"80c4ad47acf57bf24046974bf9729da0"},{url:"/bugs/15.png",revision:"01781a6978918cc638a80cf732074c61"},{url:"/bugs/16.png",revision:"1dd35c79fe71be391bc37141c87b94de"},{url:"/bugs/17.png",revision:"1959f67f9753f36c0a6931b1c965e98b"},{url:"/bugs/18.png",revision:"551c54d7dfe72b21ebe6acd88a696ccb"},{url:"/bugs/19.png",revision:"76a4c55e5c32fa78396ac94b611fcaa8"},{url:"/bugs/2.png",revision:"66897206c9a78468e7236b9956c606dc"},{url:"/bugs/20.png",revision:"167cbfaf429df8536bb982e2496e5754"},{url:"/bugs/21.png",revision:"f020aaeb336a3068b9f149fb744d326d"},{url:"/bugs/22.png",revision:"a9b4a61c80acbeaad932e58108166286"},{url:"/bugs/23.png",revision:"6548df03424a6ac31a018962d117cf7c"},{url:"/bugs/24.png",revision:"d6836aec5e3f85c71e9c34327fe0b40b"},{url:"/bugs/25.png",revision:"7b25124f45ce98195a7b1475dfbcb95a"},{url:"/bugs/26.png",revision:"4308d94b28134a8028abd75933c89afc"},{url:"/bugs/27.png",revision:"20aec690622ac380e502c7a9a48bde33"},{url:"/bugs/28.png",revision:"58199a4fce6409090e387ec53e41df51"},{url:"/bugs/29.png",revision:"608ed266743641608becc8bf8cb86b20"},{url:"/bugs/3.png",revision:"8ca103d70ea1f7c2fbaf8c1c36e1e63d"},{url:"/bugs/30.png",revision:"2762bd36f8fd3386746b7bea11a03c07"},{url:"/bugs/31.png",revision:"702d1b943d0d073dda271d1b755442db"},{url:"/bugs/32.png",revision:"bb66f027557719513d244c9c7a55f777"},{url:"/bugs/33.png",revision:"45d6b6ba034f8d80d88a722cd0543e44"},{url:"/bugs/34.png",revision:"dc67c25c1e15ea5c1c491f5b9b077279"},{url:"/bugs/35.png",revision:"97057f801f0f7eb75278c49bfd0b78e2"},{url:"/bugs/36.png",revision:"fb4367677f1ead1597fb657d45167777"},{url:"/bugs/37.png",revision:"b498cfd2b6d5847e6a41e0da9edb7727"},{url:"/bugs/38.png",revision:"7b5a07638df133308f2023e2a9c18f99"},{url:"/bugs/39.png",revision:"af81a3dfe08691c4bca12c6751b7c32c"},{url:"/bugs/4.png",revision:"8af92006f5492689326cfa69b35d8cc5"},{url:"/bugs/40.png",revision:"2115957637a331dd6683f0c4380194da"},{url:"/bugs/41.png",revision:"76a39dd7e8f158f3575a364e70b4ca6c"},{url:"/bugs/42.png",revision:"ef3665b04b2e8c9685fb7652c3cde392"},{url:"/bugs/43.png",revision:"aadf33f159ed06860918ebb4f70d2756"},{url:"/bugs/44.png",revision:"b3c56b0031eefa93842608cd568275d3"},{url:"/bugs/45.png",revision:"95b5b65343bb00b21d92922dfee49007"},{url:"/bugs/46.png",revision:"6575e706b7b23d896159616afeb4f469"},{url:"/bugs/47.png",revision:"b82a1a4fd2444e65fc0cbf78a979b2b4"},{url:"/bugs/48.png",revision:"b000efc13edaad1647bec43671a3f4c7"},{url:"/bugs/49.png",revision:"339a810815f7aac5dafc7421b4b7ee51"},{url:"/bugs/5.png",revision:"e38590f2b4bf2a461451438160da4f71"},{url:"/bugs/50.png",revision:"77ee8ed025481ae72e09367d615ee301"},{url:"/bugs/51.png",revision:"bdb2913f57236aa6f3305556adc221e8"},{url:"/bugs/52.png",revision:"97d950984532266679d77dbb662e2da5"},{url:"/bugs/53.png",revision:"d08bab585dc42518b1a09a1c8607edbf"},{url:"/bugs/54.png",revision:"4f0a64ada2772e6d8b2daad704a0d00c"},{url:"/bugs/55.png",revision:"45c6d6dfc5cc3da09a47adea442938d8"},{url:"/bugs/56.png",revision:"c8489875d2b0df7bf464498389411518"},{url:"/bugs/57.png",revision:"0e79cd99fe65cecf02ae4b5ca95fda9a"},{url:"/bugs/58.png",revision:"50244058ab69a002555159dea7f2a182"},{url:"/bugs/59.png",revision:"9c28ff3100dbd189c320dca3963b8d0a"},{url:"/bugs/6.png",revision:"256443989579af2c476246010ac50d0c"},{url:"/bugs/60.png",revision:"100f3883eeceffb62ac817f6f379ef19"},{url:"/bugs/61.png",revision:"707970f86bb28bd427bc0fe9b30a399d"},{url:"/bugs/62.png",revision:"dda1552bbc4b351d9346551579d8bd62"},{url:"/bugs/63.png",revision:"e16631101db584663fc05c1a974e8329"},{url:"/bugs/64.png",revision:"5842cf610ea3d53d5e7ad7e283cebd8a"},{url:"/bugs/65.png",revision:"c3b5f3a462456eb1830e5c7f1409eb09"},{url:"/bugs/66.png",revision:"3166a8b8933bd21e6554fb0be2814ae4"},{url:"/bugs/67.png",revision:"8ab890bfef8b8aaca0dff648de1010b9"},{url:"/bugs/68.png",revision:"2d0c23abcb895bcde8dde7b2feed8e55"},{url:"/bugs/69.png",revision:"7fa945983b3fd74971b3b0076ae39f24"},{url:"/bugs/7.png",revision:"a6de6bf70a4c59a7fbec5129af00e4f2"},{url:"/bugs/70.png",revision:"bb389cd09f7b9ca10cf6572464e0f8ef"},{url:"/bugs/71.png",revision:"153d29708fdda92aa493a1abef2d3323"},{url:"/bugs/72.png",revision:"6a56003dc774df4a2e092d0dee292c53"},{url:"/bugs/73.png",revision:"5c13a1149ddb5a248aa398de28b69a56"},{url:"/bugs/74.png",revision:"6522cd7d5352162a365d3ea595e169ea"},{url:"/bugs/75.png",revision:"2a7913fb443a7c34a47f4d9786cbdc5d"},{url:"/bugs/76.png",revision:"f8bb937d0c9d546fef01ff5e5507effa"},{url:"/bugs/77.png",revision:"5978d095fb0121c11136ab0b6d7b5c2f"},{url:"/bugs/78.png",revision:"fe2c655146b932637008a546b432b295"},{url:"/bugs/79.png",revision:"4e96fa40fc2b871c84ef94a78155e127"},{url:"/bugs/8.png",revision:"48f92624b2fd924f15d4c43cdeea64c2"},{url:"/bugs/80.png",revision:"49f19ddb87a6bdc6e4383ed24eb982bf"},{url:"/bugs/9.png",revision:"89d86f9c2f40b1358bce75ab9bd527c2"},{url:"/diario-icon-192.png",revision:"0934d464b52c36b326d812594df5ed88"},{url:"/diario-icon-256.png",revision:"a2cf58a77966edafa8708740ef9e8d71"},{url:"/diario-icon-512.png",revision:"e39429c6e658e1c93d081f8d6e7151e0"},{url:"/favicon-16x16.png",revision:"c86804fcb5629d4b5d5e8099439d9b7f"},{url:"/favicon-32x32.png",revision:"0cbcefe245f1bdfed30f1b48f8351ce6"},{url:"/favicon.ico",revision:"412192267449ea67eebabd3e62acfe51"},{url:"/fishes/1.png",revision:"b643e25dea3b996cd00d0b4495898404"},{url:"/fishes/10.png",revision:"3cbecc465ad58c3a191c8908aee082bb"},{url:"/fishes/11.png",revision:"03c86be9a78732a8a4189efaf0da236f"},{url:"/fishes/12.png",revision:"52b72d2e0014825498fe12b8b80f1fac"},{url:"/fishes/13.png",revision:"03ea26998dcc8b5adc28d38a13e7d039"},{url:"/fishes/14.png",revision:"368f54c9a0572a4756cabb59ca2a8c90"},{url:"/fishes/15.png",revision:"e8c96ec74977ffa2f385fa27c5019a3b"},{url:"/fishes/16.png",revision:"bdae67bd5755f011edc5d876e0e2ca54"},{url:"/fishes/17.png",revision:"b1bb108580939a4d3cb0a01a9c289896"},{url:"/fishes/18.png",revision:"acc0d7ef8151543e80ae401fe630ebde"},{url:"/fishes/19.png",revision:"5e0a5b2482e13d6a687f1fd269b03c7c"},{url:"/fishes/2.png",revision:"9f8aa3ef80c64a6ffebcb3fe5dca2e78"},{url:"/fishes/20.png",revision:"788c70d468d4a039b8bca24d9e2612ba"},{url:"/fishes/21.png",revision:"901df90696c6c34abc0a7ce01c7747b4"},{url:"/fishes/22.png",revision:"1ce91a214ca13181ee6b6fe378fb85e9"},{url:"/fishes/23.png",revision:"9c929a4c3f5bcc85c13fb5bd21557f65"},{url:"/fishes/24.png",revision:"c64daacfce4cb10c0ad06452921d5fae"},{url:"/fishes/25.png",revision:"b19c8be61aa063d25b007bf6893ffd21"},{url:"/fishes/26.png",revision:"8b15dd24c2cfb3e1d52c49d01e52a5bc"},{url:"/fishes/27.png",revision:"76917b77b702dd22bda53c35366d0570"},{url:"/fishes/28.png",revision:"b66bf76b2f0123c84b4d50501866fe8c"},{url:"/fishes/29.png",revision:"48a2b41a9dd6054c9f662d2ca8f5a26e"},{url:"/fishes/3.png",revision:"24f90c128bf93feb259da5f7673e1d30"},{url:"/fishes/30.png",revision:"d0091c6fdaaefd486b73b0cdab0959be"},{url:"/fishes/31.png",revision:"1535a5324e69659203984b8764cdd01a"},{url:"/fishes/32.png",revision:"d5067a92a0b3945db13412c93eb156f9"},{url:"/fishes/33.png",revision:"14fd75ad4a707cee0ecf353dab0f4992"},{url:"/fishes/34.png",revision:"b7f6ce33e0c2d1548ae99c6cf6560e54"},{url:"/fishes/35.png",revision:"d31ae42d9f2c2727267d34ce3af08be7"},{url:"/fishes/36.png",revision:"483f8e038f5a68f91e0c0c959ee87293"},{url:"/fishes/37.png",revision:"b74db630195b2d0edeff35dc13e84214"},{url:"/fishes/38.png",revision:"cffa4d13b4cad18659a12c9eb0871672"},{url:"/fishes/39.png",revision:"e5c0fe7fd445096c4e5ce2edea3a8647"},{url:"/fishes/4.png",revision:"2d2068b570247fd70cbbba2edd2dd5d7"},{url:"/fishes/40.png",revision:"92846d339873d27bbe7051ba65e6b8d9"},{url:"/fishes/41.png",revision:"ddf435668ab5ba19a5bfd7ec4b8fb3b1"},{url:"/fishes/42.png",revision:"6445d8fce2d1f3fbc89bc23c3714f639"},{url:"/fishes/43.png",revision:"2872e2b8baec7d3b61a90e8383cac38f"},{url:"/fishes/44.png",revision:"35733dd53ed36dce8f11d3e7f05a7d64"},{url:"/fishes/45.png",revision:"ad1d67e4b7cdc2b9b91ef77cc64ae9cc"},{url:"/fishes/46.png",revision:"1a2311ca2e7408ab24f5e11eb99fe1b8"},{url:"/fishes/47.png",revision:"ecee18bd13ab33048d1c2da467f4d0a6"},{url:"/fishes/48.png",revision:"9f5873475309e7220de6e7af8d21cfb9"},{url:"/fishes/49.png",revision:"16e089a7f273a61d9bfd326d5d86e185"},{url:"/fishes/5.png",revision:"cd19e3be563c47af61f7eab106bcadf3"},{url:"/fishes/50.png",revision:"df3eacee3b99332b8e2f1c8d4cc097e4"},{url:"/fishes/51.png",revision:"d3ee2e85b8d997f52076451f2f0976fe"},{url:"/fishes/52.png",revision:"eff9c9121703cd8e3d809fba96dce7e9"},{url:"/fishes/53.png",revision:"2695ec208b23e67c2d7b0f71a2dad717"},{url:"/fishes/54.png",revision:"c59e48ff455c5f80e935e3d3cab8811f"},{url:"/fishes/55.png",revision:"558eafad20b2a0a28aad17913f9cc05e"},{url:"/fishes/56.png",revision:"0f587910a467c268b964a5b213c208fa"},{url:"/fishes/57.png",revision:"a350b833a5060fb91be95b3e8e87c6c8"},{url:"/fishes/58.png",revision:"ff145005e429327bb035f75bc914c6ca"},{url:"/fishes/59.png",revision:"bf5aae080102218e877a27a81963fab3"},{url:"/fishes/6.png",revision:"558fb6401b49738b7662190314a31239"},{url:"/fishes/60.png",revision:"8a88a4253fe17fdb8a9029774d7d7f38"},{url:"/fishes/61.png",revision:"344d2c6ecd204d1e90b18e71c94fae95"},{url:"/fishes/62.png",revision:"a0ad7eb07efcaa27a9d9bb77e991fa51"},{url:"/fishes/63.png",revision:"b0e89d68b0dc5ec8c57bd91ee9f0bfdb"},{url:"/fishes/64.png",revision:"e6776b4a7e28eb271504a063aeaaf67e"},{url:"/fishes/65.png",revision:"6e3a904e67ca55481d1aba84d9bb46ff"},{url:"/fishes/66.png",revision:"bb05c5d229c3f047c05f62fc9f7059f6"},{url:"/fishes/67.png",revision:"0e93b4b1636ff99f35be81f3d5357f0b"},{url:"/fishes/68.png",revision:"6bd651d8e3d0e8b106d6028a40f5392b"},{url:"/fishes/69.png",revision:"9fa4b419a2a2756f70dafaf4fd51bb44"},{url:"/fishes/7.png",revision:"6f5746e3391b843a45caa00eafdc29ba"},{url:"/fishes/70.png",revision:"f2c2db99869422c80efd504f663d51b2"},{url:"/fishes/71.png",revision:"e4ff531dde54c7715ede5f1fd7a38062"},{url:"/fishes/72.png",revision:"f8d41effd5f4de16fce1c66cccf4aacb"},{url:"/fishes/73.png",revision:"d8293d08fff36a8ace888b56e1eeedb5"},{url:"/fishes/74.png",revision:"fe957b0c1b02678ff4deba4029f8eac5"},{url:"/fishes/75.png",revision:"c5e421bfe0c3a540a081c8843fac5c80"},{url:"/fishes/76.png",revision:"414c653bbc7d07e87eaca98030883a83"},{url:"/fishes/77.png",revision:"38f757e047a5182ce291b9205c6f89e5"},{url:"/fishes/78.png",revision:"f1853afe40b7d251e0d125c1b7a99e5d"},{url:"/fishes/79.png",revision:"442a8f6171f6b6cad5435c150d16cd4e"},{url:"/fishes/8.png",revision:"c751ac2e452da160d56d6fb6631bce55"},{url:"/fishes/80.png",revision:"a3df1131c42c881e227195aa5b9092d4"},{url:"/fishes/9.png",revision:"923255ae4cc5de300a5e588e78c6f60d"},{url:"/fonts/quicksand-v20-latin-600.eot",revision:"8bc1ab6c6d1bafadcab558499275cb5f"},{url:"/fonts/quicksand-v20-latin-600.svg",revision:"a7f612e8e9cee487da397cccdd03a288"},{url:"/fonts/quicksand-v20-latin-600.ttf",revision:"5ca5043d01799b35d8b17238e11ed777"},{url:"/fonts/quicksand-v20-latin-600.woff",revision:"9915d1efa5550521ecf8f8acca81bf22"},{url:"/fonts/quicksand-v20-latin-600.woff2",revision:"2b805d5c13909d5bfd081028f580946a"},{url:"/fonts/quicksand-v20-latin-700.eot",revision:"7ac9583503223fea43cdcf13722fd78c"},{url:"/fonts/quicksand-v20-latin-700.svg",revision:"20a36f00b1c57eb925d24f108331aea9"},{url:"/fonts/quicksand-v20-latin-700.ttf",revision:"5ccbb12c6cddde1a392c1b6251738fdc"},{url:"/fonts/quicksand-v20-latin-700.woff",revision:"8f1621e0fd16780adbc2eef187a95dff"},{url:"/fonts/quicksand-v20-latin-700.woff2",revision:"4601e4f8df2fe5b19f24a3d483857d74"},{url:"/icons/bugs.svg",revision:"d6c333e2ab6fcb488d6371b9c1246fdb"},{url:"/icons/case.svg",revision:"fddd0b9e5e7bc6b104390081b3e6d6e9"},{url:"/icons/creatures.svg",revision:"3f75a515f43023419c38b978b82627da"},{url:"/icons/daily.svg",revision:"0de52da357cd7139f8946c7ce11d8dff"},{url:"/icons/fishes.svg",revision:"cba9e09c3f19fc96c022c6bd9e452720"},{url:"/items/77.png",revision:"d3880fe12f4f5ee300a226d3cffb67db"},{url:"/languages/en.json",revision:"11d846e5bf303f1b6b753af028939c24"},{url:"/languages/en.png",revision:"ffd06d9d55ed864603795650f640b3b0"},{url:"/languages/pt.json",revision:"c64ae90bc91ffaae1c1675dc74c5e0d2"},{url:"/languages/pt.png",revision:"0a485a9c943985b4bf574ead8bb4e9c8"},{url:"/manifest.json",revision:"688128be216cc2f753fe641590f2fcd3"},{url:"/mstile-144x144.png",revision:"5e753b44457b11a35b5bee2bd174b92b"},{url:"/mstile-150x150.png",revision:"15482ee3f89b16155def523407fa5dea"},{url:"/mstile-310x150.png",revision:"ad3d06ea1e4d0b92372f382ecb7ed040"},{url:"/mstile-310x310.png",revision:"255133c67139051d6bdf13dd496b7970"},{url:"/mstile-70x70.png",revision:"611e14907ad1662704a25721703c259d"},{url:"/opengraph.png",revision:"f2b5ecbdf6e7006b9e6a47e192a019cf"},{url:"/safari-pinned-tab.svg",revision:"8d3b492754aa60e19fc9af67d250b55c"},{url:"/songs/1.png",revision:"bc82338585b8780dc04e84276230a7cc"},{url:"/songs/10.png",revision:"64f310c7b78b8eab6436dbf968fb0a9e"},{url:"/songs/11.png",revision:"fb083077573e4c1aea5ce466b46f063f"},{url:"/songs/12.png",revision:"18915e7bf98024da64ea3af37045bcfe"},{url:"/songs/13.png",revision:"afb1240366f3ce6e63af5a1a01d05799"},{url:"/songs/14.png",revision:"4af2254ba94208afbaa3ec72fadceb9c"},{url:"/songs/15.png",revision:"907ef61551b9cda889e8617012e970a0"},{url:"/songs/16.png",revision:"abff3eb8726d38326d6997dd4467f9e9"},{url:"/songs/17.png",revision:"c1f710e3e2d5c893c062d4996ca8d3bb"},{url:"/songs/18.png",revision:"09b0d2929940050b39658579ce1df257"},{url:"/songs/19.png",revision:"bf21c31853f514946ecdb5fd8d708cc2"},{url:"/songs/2.png",revision:"48ff8ec696545c4d894b89c9d8f38068"},{url:"/songs/20.png",revision:"88e7a26d434950d1c4529320123f6e8a"},{url:"/songs/21.png",revision:"db51d4e9cc46e86b05ac4c178e082563"},{url:"/songs/22.png",revision:"6916f7da9d3bb33b8692a88d7b51aac1"},{url:"/songs/23.png",revision:"9309858d0fb9f7dd6d3c123010b4e04a"},{url:"/songs/24.png",revision:"c9ff661c7c31c730b3f3865adf202bdd"},{url:"/songs/25.png",revision:"733173996226c0436b7af047ec212e35"},{url:"/songs/26.png",revision:"e3d8154cdb78fe8c64bd9bca9fd66dbf"},{url:"/songs/27.png",revision:"7c9054b1003418388e7861d41368559b"},{url:"/songs/28.png",revision:"5c83a0a2ccfe3a8562c02e97ef07a801"},{url:"/songs/29.png",revision:"4d3d703e1e66974808e6ebee15c822c3"},{url:"/songs/3.png",revision:"961afdbb32fdddee3285696c095c16c4"},{url:"/songs/30.png",revision:"5044bba7319d311a157c58441ad1bad1"},{url:"/songs/31.png",revision:"6f850f269ee903deaa55e1ae751a3065"},{url:"/songs/32.png",revision:"e4385106bfd428d24f71206bcc5cf860"},{url:"/songs/33.png",revision:"66ae568155359e047e2696c60fe3d57c"},{url:"/songs/34.png",revision:"7ada499847e1d03d19c21c20622dafda"},{url:"/songs/35.png",revision:"6550aaf5dc07f29ba393cb547638afd9"},{url:"/songs/36.png",revision:"36f1c1fbb91129f104e22fecb7c46973"},{url:"/songs/37.png",revision:"bfb2ff25826ec93eb912cf60370ab453"},{url:"/songs/38.png",revision:"2ebb04f85a28cc3fe4fa3a4f619fe63d"},{url:"/songs/39.png",revision:"611f91cd42d282143e2061cadaaa8c00"},{url:"/songs/4.png",revision:"fbb1e2ff90862f55b23118708ac71686"},{url:"/songs/40.png",revision:"6b1ad75ebf5d48c5e4d46855bb0eb2c4"},{url:"/songs/41.png",revision:"aee9f6bb3d8f639351fd6c435e327a6e"},{url:"/songs/42.png",revision:"cc66d4573f99dd9a6d49425746faaddc"},{url:"/songs/43.png",revision:"a5a8d05010dad56136d7d36c4b5de2e9"},{url:"/songs/44.png",revision:"0ef3af93066fe82dec2943f25b6e4116"},{url:"/songs/45.png",revision:"cc69232db878ddd2a7152ddf46eadb14"},{url:"/songs/46.png",revision:"2f60872b3d8a407ff33bd3234128c9b8"},{url:"/songs/47.png",revision:"b5cfcfe63afb83cf4d44dcf309f9f664"},{url:"/songs/48.png",revision:"b62643a5b5f9a712babf8be9c495f044"},{url:"/songs/49.png",revision:"314fa8ae9d5fe74fca225fad1f583c5a"},{url:"/songs/5.png",revision:"a6e29c1355eb1b38a9bd7927517d6a92"},{url:"/songs/50.png",revision:"d4c24827410864a3caa3801cb253d5df"},{url:"/songs/51.png",revision:"7f3b7745b98cecdca5596510718b16a2"},{url:"/songs/52.png",revision:"1064cea66fc314c8396f920c345e4cbf"},{url:"/songs/53.png",revision:"7c0b08235dc498fc19172c4fe470d7f6"},{url:"/songs/54.png",revision:"dbe195ac62bf64fc5c63f9fa3123c12f"},{url:"/songs/55.png",revision:"ce01697fa676c5601408007f8f2b9df2"},{url:"/songs/56.png",revision:"a46cee41313bfbadb194d23f0deee8ea"},{url:"/songs/57.png",revision:"f571eabc5e4856228f7a130c8d75859b"},{url:"/songs/58.png",revision:"10974f7fd076336b403412043895ad40"},{url:"/songs/59.png",revision:"94053083f1cce223003bb57c96e9f032"},{url:"/songs/6.png",revision:"99488d655600c040dcfbe309c666e72b"},{url:"/songs/60.png",revision:"05cf718c7e3686884cb06875b8d3caf8"},{url:"/songs/61.png",revision:"488dc0762a4ae0ff110442f5067a5043"},{url:"/songs/62.png",revision:"df756414664224589fc45a9f1e40e08f"},{url:"/songs/63.png",revision:"5e3530a3f5a27428c4ffce5af9486aa8"},{url:"/songs/64.png",revision:"ef2071d0d1eb4d6d7e52de0a4eb26f9f"},{url:"/songs/65.png",revision:"9242cfe3cf5ebc8bb14df8b8bab23cbb"},{url:"/songs/66.png",revision:"3f26b356a803226bf80f961f2e945027"},{url:"/songs/67.png",revision:"4ad84f38241a400c1c49f195f9b0049e"},{url:"/songs/68.png",revision:"c33168ed28951b36b28666fabfad1d6b"},{url:"/songs/69.png",revision:"27c781b9edcba7bd528170c0197db1e6"},{url:"/songs/7.png",revision:"727eb4b9dada2a647e31dd3e872b66bd"},{url:"/songs/70.png",revision:"69dd777766a62d3b8ad125af4195700e"},{url:"/songs/71.png",revision:"32c7b42495fa430f9fe2d972a43aff1e"},{url:"/songs/72.png",revision:"feae12fb4f2ab03a85ecdfc7d20542aa"},{url:"/songs/73.png",revision:"0494b7bc8728c7e5201c143d0931a3b3"},{url:"/songs/74.png",revision:"194b357a30a0bbf2099459ec73df770b"},{url:"/songs/75.png",revision:"192fecaa85297f2668edc6835071f78f"},{url:"/songs/76.png",revision:"362f49d054ad99c2fe69f4a09f1f897b"},{url:"/songs/77.png",revision:"09bb6baed35931b4270d8eabb2222f97"},{url:"/songs/78.png",revision:"afb49d2c50eabd7281fcdc1e2661d8c0"},{url:"/songs/79.png",revision:"36882896ee1fbfbc15a8567d3cc9a7b9"},{url:"/songs/8.png",revision:"736dbcf6b92640db4618e2b20bcf9dc3"},{url:"/songs/80.png",revision:"0a9e5762989a5e425591ff11ac25f670"},{url:"/songs/81.png",revision:"d3b89850da164f0d0c80fc54cd754983"},{url:"/songs/82.png",revision:"6147bc3612c25ed0faa1ae3044bbadc5"},{url:"/songs/83.png",revision:"175d9667f9487a509840297a3e9b2727"},{url:"/songs/84.png",revision:"fb79dd004c3c1be14933c5e0e9da9951"},{url:"/songs/85.png",revision:"9b22adceb64432ec88ba7ae674163aa0"},{url:"/songs/86.png",revision:"bd723fba254e4ed26ab334a188657405"},{url:"/songs/87.png",revision:"16ddc03ef91aa650a661a0e31966c6bd"},{url:"/songs/88.png",revision:"c5db3d6b3d440f1c8553d410eff0113c"},{url:"/songs/89.png",revision:"ea9b0fbdfa0e23ebf853dc77efafba66"},{url:"/songs/9.png",revision:"8053debbf60e2ea3bd6257716171991c"},{url:"/songs/90.png",revision:"5bd0b26cdbe2a127f593f982815324a0"},{url:"/songs/91.png",revision:"55b5452a58dbd0ff3d57baedb6554c11"},{url:"/songs/92.png",revision:"6a1b2bcfd7e29f2909a298504a9bfe1b"},{url:"/songs/93.png",revision:"107fe19b7e55bb640aa6ee44ed3a80f5"},{url:"/songs/94.png",revision:"9f38afdee160c759feaf23fef28e0de0"},{url:"/songs/95.png",revision:"4213f3616c6e3f524d4195e02901c5dd"},{url:"/splash/1125×2436-splash.png",revision:"dad166807137330a83aa29e6f5f2e1be"},{url:"/splash/1242×2688-splash.png",revision:"d663d4a761c154c1b0bef93707a818d7"},{url:"/splash/1536×2048-splash.png",revision:"ae85632e36d769e462e67aaf7069e6a0"},{url:"/splash/1668×2388-splash.png",revision:"5c4a709cf8fb2af988a34163cfc2fd30"},{url:"/splash/2048×2732-splash.png",revision:"d6312cf48708a7b83749ad906691e220"},{url:"/splash/640×1136-splash.png",revision:"4aa2e3bc2412d630359eaedf3931ae32"},{url:"/splash/750×1334-splash.png",revision:"c8b7b10add9d2f226396d432f19ce89c"},{url:"/twitter.png",revision:"e2788a84aa03566e479e58e12146f21e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
