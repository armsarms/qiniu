(function(e){function n(n){for(var c,a,u=n[0],i=n[1],d=n[2],f=0,h=[];f<u.length;f++)a=u[f],r[a]&&h.push(r[a][0]),r[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);l&&l(n);while(h.length)h.shift()();return o.push.apply(o,d||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],c=!0,a=1;a<t.length;a++){var u=t[a];0!==r[u]&&(c=!1)}c&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},a={app:0},r={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-52b83e4c":"d36abdd5","chunk-0f75a9d8":"cd36bdf5","chunk-19353b78":"de94dd6a","chunk-023202af":"f4963e6c","chunk-4399c5da":"bd4769a7","chunk-53998690":"97668f83","chunk-298a0af3":"1f5dc0ef","chunk-2d0b63a8":"5aaf9fc0","chunk-2d225056":"7535a831","chunk-2d22d081":"318d7fa6","chunk-571769f6":"513e78df","chunk-6fe4f69e":"9959959c","chunk-19ff930c":"fac04e49","chunk-3cc7f90e":"e0f29348","chunk-7db55833":"a4d4ee5e","chunk-e76e1052":"3002645f","chunk-e9a5d0b4":"31d25df0"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-52b83e4c":1,"chunk-0f75a9d8":1,"chunk-19353b78":1,"chunk-023202af":1,"chunk-4399c5da":1,"chunk-53998690":1,"chunk-298a0af3":1,"chunk-571769f6":1,"chunk-6fe4f69e":1,"chunk-19ff930c":1,"chunk-3cc7f90e":1,"chunk-7db55833":1,"chunk-e76e1052":1,"chunk-e9a5d0b4":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise(function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-52b83e4c":"f8e39ebb","chunk-0f75a9d8":"04e388a6","chunk-19353b78":"441b74cd","chunk-023202af":"35672dbf","chunk-4399c5da":"b0911ced","chunk-53998690":"b0911ced","chunk-298a0af3":"3decd38a","chunk-2d0b63a8":"31d6cfe0","chunk-2d225056":"31d6cfe0","chunk-2d22d081":"31d6cfe0","chunk-571769f6":"a56f916b","chunk-6fe4f69e":"81e0d63c","chunk-19ff930c":"001a19ea","chunk-3cc7f90e":"966ae760","chunk-7db55833":"81db9841","chunk-e76e1052":"7d54191a","chunk-e9a5d0b4":"83075098"}[e]+".css",r=i.p+c,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var d=o[u],f=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(f===c||f===r))return n()}var h=document.getElementsByTagName("style");for(u=0;u<h.length;u++){d=h[u],f=d.getAttribute("data-href");if(f===c||f===r)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var c=n&&n.target&&n.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete a[e],l.parentNode.removeChild(l),t(o)},l.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(l)}).then(function(){a[e]=0}));var c=r[e];if(0!==c)if(c)n.push(c[2]);else{var o=new Promise(function(n,t){c=r[e]=[n,t]});n.push(c[2]=o);var d,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e),d=function(n){f.onerror=f.onload=null,clearTimeout(h);var t=r[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,o=new Error("Loading chunk "+e+" failed.\n("+c+": "+a+")");o.type=c,o.request=a,t[1](o)}r[e]=void 0}};var h=setTimeout(function(){d({type:"timeout",target:f})},12e4);f.onerror=f.onload=d,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],f=d.push.bind(d);d.push=n,d=d.slice();for(var h=0;h<d.length;h++)n(d[h]);var l=f;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var c=t("64a9"),a=t.n(c);a.a},1:function(e,n){},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var c=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],o=(t("034f"),t("2877")),u={},i=Object(o["a"])(u,a,r,!1,null,null,null),d=i.exports,f=(t("4917"),t("ac6a"),t("8c4f")),h=t("704d");c["a"].use(f["a"]);var l=[{path:"*",redirect:"/main/recom"},{name:"recommend",component:function(){return Promise.all([t.e("chunk-52b83e4c"),t.e("chunk-571769f6")]).then(t.bind(null,"1f99"))},meta:{title:"热门推荐"}},{name:"storage",component:function(){return Promise.all([t.e("chunk-52b83e4c"),t.e("chunk-6fe4f69e"),t.e("chunk-19ff930c")]).then(t.bind(null,"e564"))},meta:{title:"存号箱"}},{name:"activity",component:function(){return Promise.all([t.e("chunk-52b83e4c"),t.e("chunk-7db55833")]).then(t.bind(null,"bf91"))},meta:{title:"热门活动"}},{name:"gameDetail",component:function(){return Promise.all([t.e("chunk-52b83e4c"),t.e("chunk-6fe4f69e"),t.e("chunk-3cc7f90e")]).then(t.bind(null,"985e"))},meta:{title:"礼包"}},{name:"appDetails",component:function(){return Promise.all([t.e("chunk-52b83e4c"),t.e("chunk-e76e1052")]).then(t.bind(null,"a406"))},meta:{title:"应用详情"}},{name:"search",component:function(){return Promise.all([t.e("chunk-52b83e4c"),t.e("chunk-e9a5d0b4")]).then(t.bind(null,"6cd2"))},meta:{title:"搜索"}},{name:"main",component:function(){return Promise.all([t.e("chunk-52b83e4c"),t.e("chunk-0f75a9d8")]).then(t.bind(null,"9d7e"))},meta:{title:"首页"},children:[{path:"recom",component:function(){return Promise.all([t.e("chunk-52b83e4c"),t.e("chunk-19353b78"),t.e("chunk-298a0af3"),t.e("chunk-2d225056")]).then(t.bind(null,"e32d"))},meta:{title:"推荐",activity:0}},{path:"GameList",component:function(){return Promise.all([t.e("chunk-52b83e4c"),t.e("chunk-19353b78"),t.e("chunk-023202af"),t.e("chunk-4399c5da")]).then(t.bind(null,"1fd2"))},meta:{title:"游戏榜单",activity:3}},{path:"GameRecom",component:function(){return Promise.all([t.e("chunk-52b83e4c"),t.e("chunk-19353b78"),t.e("chunk-298a0af3"),t.e("chunk-2d22d081")]).then(t.bind(null,"f683"))},meta:{title:"游戏推荐",activity:2}},{path:"appList",component:function(){return Promise.all([t.e("chunk-52b83e4c"),t.e("chunk-19353b78"),t.e("chunk-023202af"),t.e("chunk-53998690")]).then(t.bind(null,"6a50"))},meta:{title:"软件榜单",activity:3}},{path:"app",component:function(){return Promise.all([t.e("chunk-52b83e4c"),t.e("chunk-19353b78"),t.e("chunk-298a0af3"),t.e("chunk-2d0b63a8")]).then(t.bind(null,"1bef"))},meta:{title:"软件",activity:1}}]}];l.forEach(function(e){e.path=e.path||"/"+(e.name||"")});var m=new f["a"]({routes:l});m.afterEach(function(e){console.log("66666666"),document.title=e.meta.title;var n=document.createElement("iframe");n.style.display="none",n.src="http://47.107.125.18/maap/favicon.ico",n.onload=function(){setTimeout(function(){n.remove()},0)},document.body.appendChild(n)}),m.beforeEach(function(e,n,t){window.sessionStorage.getItem("userType");var c=e.meta&&e.meta.title;navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)?console.log("111"):window.location.href="http://mm.10086.mmarket.com/pcweb/",c&&(document.title=c),(void 0==Object(h["a"])("phone")||""==Object(h["a"])("phone"))&&("/gameDetail"===e.path||"/storage"===e.path)?(window.location.href="http://h5.mmarket.com/pps_webh5/getphone1/dist/index.html?pid=1001",t()):t()});t("6b54");var p=t("3452"),s=t.n(p);function k(e,n){n=n||"825429b7a55bb1a9";var t=s.a.enc.Utf8.parse(n),c=s.a.enc.Utf8.parse(e),a=s.a.AES.encrypt(c,t,{iv:t,mode:s.a.mode.CBC,padding:s.a.pad.ZeroPadding});return a.toString()}var b=t("b311"),v=t.n(b),g=t("d6d3"),y=t.n(g),w=t("d1d4"),P=t.n(w);t("394c");t("fda2"),t("451f"),c["a"].use(y.a),c["a"].prototype.encrypt=k,c["a"].prototype.Clipboard=v.a,c["a"].prototype.VUE_APP_API=/mm.10086.mmarket.com/.test(window.location.href)?"http://mm.10086.mmarket.com/mm_maap/maap/":/120.232.169.208/.test(window.location.href)?"http://120.232.169.208/mm_maap/maap/":"http://47.107.125.18/mm_maap/maap/";var E={fullscreenEl:!1};c["a"].use(P.a,E),new c["a"]({router:m,el:"#app",render:function(e){return e(d)}})},"64a9":function(e,n,t){},"704d":function(e,n,t){"use strict";t.d(n,"b",function(){return c}),t.d(n,"a",function(){return a});t("a481");function c(e,n){var t=new Date;t.setTime(t.getTime()+18e5),window.document.cookie=e+"="+n+";expires="+t.toGMTString()+";path=/"}function a(e){if(document.cookie.length>0){var n=document.cookie.indexOf(e+"=");if(-1!=n){n=n+e.length+1;var t=document.cookie.indexOf(";",n);return-1==t&&(t=document.cookie.length),unescape(document.cookie.substring(n,t)).replace(/\"/g,"")}}}}});
//# sourceMappingURL=app.314b3d7d.js.map