(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fbc80f90"],{"294e":function(t,e,r){"use strict";var a=r("bc3a"),o=r.n(a),n=r("2b0e"),i=function(t,e){var r=e||window.location.href,a=setInterval(function(){window.sessionStorage.getItem("tel")&&(clearInterval(a),o.a.get(n["a"].prototype.VUE_ANALYSIS_API,{params:{requestid:"h5_log",uid:window.sessionStorage.getItem("tel"),action:t,count:1,url:r}}).then(function(t){console.log(t)}).catch(function(t){console.log(t)}))},500)};e["a"]=i},3875:function(t,e,r){"use strict";r.d(e,"a",function(){return i});var a=r("2b0e"),o=10;function n(t,e){return t>e&&t>o?"horizontal":e>t&&e>o?"vertical":""}var i=a["a"].extend({data:function(){return{direction:""}},methods:{touchStart:function(t){this.resetTouchStatus(),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY},touchMove:function(t){var e=t.touches[0];this.deltaX=e.clientX-this.startX,this.deltaY=e.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||n(this.offsetX,this.offsetY)},resetTouchStatus:function(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0}}})},4127:function(t,e,r){"use strict";var a=r("d233"),o=r("b313"),n={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},i=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:a.encode,encodeValuesOnly:!1,serializeDate:function(t){return i.call(t)},skipNulls:!1,strictNullHandling:!1},c=function t(e,r,o,n,i,c,l,u,d,f,p,h){var v=e;if("function"===typeof l)v=l(r,v);else if(v instanceof Date)v=f(v);else if(null===v){if(n)return c&&!h?c(r,s.encoder):r;v=""}if("string"===typeof v||"number"===typeof v||"boolean"===typeof v||a.isBuffer(v)){if(c){var y=h?r:c(r,s.encoder);return[p(y)+"="+p(c(v,s.encoder))]}return[p(r)+"="+p(String(v))]}var b,m=[];if("undefined"===typeof v)return m;if(Array.isArray(l))b=l;else{var g=Object.keys(v);b=u?g.sort(u):g}for(var w=0;w<b.length;++w){var j=b[w];i&&null===v[j]||(m=Array.isArray(v)?m.concat(t(v[j],o(r,j),o,n,i,c,l,u,d,f,p,h)):m.concat(t(v[j],r+(d?"."+j:"["+j+"]"),o,n,i,c,l,u,d,f,p,h)))}return m};t.exports=function(t,e){var r=t,i=e?a.assign({},e):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!==typeof i.encoder)throw new TypeError("Encoder has to be a function.");var l="undefined"===typeof i.delimiter?s.delimiter:i.delimiter,u="boolean"===typeof i.strictNullHandling?i.strictNullHandling:s.strictNullHandling,d="boolean"===typeof i.skipNulls?i.skipNulls:s.skipNulls,f="boolean"===typeof i.encode?i.encode:s.encode,p="function"===typeof i.encoder?i.encoder:s.encoder,h="function"===typeof i.sort?i.sort:null,v="undefined"!==typeof i.allowDots&&i.allowDots,y="function"===typeof i.serializeDate?i.serializeDate:s.serializeDate,b="boolean"===typeof i.encodeValuesOnly?i.encodeValuesOnly:s.encodeValuesOnly;if("undefined"===typeof i.format)i.format=o["default"];else if(!Object.prototype.hasOwnProperty.call(o.formatters,i.format))throw new TypeError("Unknown format option provided.");var m,g,w=o.formatters[i.format];"function"===typeof i.filter?(g=i.filter,r=g("",r)):Array.isArray(i.filter)&&(g=i.filter,m=g);var j,O=[];if("object"!==typeof r||null===r)return"";j=i.arrayFormat in n?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var _=n[j];m||(m=Object.keys(r)),h&&m.sort(h);for(var A=0;A<m.length;++A){var C=m[A];d&&null===r[C]||(O=O.concat(c(r[C],C,_,u,d,f?p:null,g,h,v,y,w,b)))}var S=O.join(l),L=!0===i.addQueryPrefix?"?":"";return S.length>0?L+S:""}},4328:function(t,e,r){"use strict";var a=r("4127"),o=r("9e6a"),n=r("b313");t.exports={formats:n,parse:o,stringify:a}},"5f1a":function(t,e,r){"use strict";r("68ef"),r("09fe"),r("9b7e")},8199:function(t,e,r){},"92d0":function(t,e,r){"use strict";var a=r("cc4b"),o=r.n(a);o.a},"9b7e":function(t,e,r){},"9e6a":function(t,e,r){"use strict";var a=r("d233"),o=Object.prototype.hasOwnProperty,n={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:a.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(t,e){for(var r={},a=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,i=e.parameterLimit===1/0?void 0:e.parameterLimit,s=a.split(e.delimiter,i),c=0;c<s.length;++c){var l,u,d=s[c],f=d.indexOf("]="),p=-1===f?d.indexOf("="):f+1;-1===p?(l=e.decoder(d,n.decoder),u=e.strictNullHandling?null:""):(l=e.decoder(d.slice(0,p),n.decoder),u=e.decoder(d.slice(p+1),n.decoder)),o.call(r,l)?r[l]=[].concat(r[l]).concat(u):r[l]=u}return r},s=function(t,e,r){for(var a=e,o=t.length-1;o>=0;--o){var n,i=t[o];if("[]"===i)n=[],n=n.concat(a);else{n=r.plainObjects?Object.create(null):{};var s="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,c=parseInt(s,10);!isNaN(c)&&i!==s&&String(c)===s&&c>=0&&r.parseArrays&&c<=r.arrayLimit?(n=[],n[c]=a):n[s]=a}a=n}return a},c=function(t,e,r){if(t){var a=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,n=/(\[[^[\]]*])/,i=/(\[[^[\]]*])/g,c=n.exec(a),l=c?a.slice(0,c.index):a,u=[];if(l){if(!r.plainObjects&&o.call(Object.prototype,l)&&!r.allowPrototypes)return;u.push(l)}var d=0;while(null!==(c=i.exec(a))&&d<r.depth){if(d+=1,!r.plainObjects&&o.call(Object.prototype,c[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(c[1])}return c&&u.push("["+a.slice(c.index)+"]"),s(u,e,r)}};t.exports=function(t,e){var r=e?a.assign({},e):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!==typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"===typeof r.delimiter||a.isRegExp(r.delimiter)?r.delimiter:n.delimiter,r.depth="number"===typeof r.depth?r.depth:n.depth,r.arrayLimit="number"===typeof r.arrayLimit?r.arrayLimit:n.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"===typeof r.decoder?r.decoder:n.decoder,r.allowDots="boolean"===typeof r.allowDots?r.allowDots:n.allowDots,r.plainObjects="boolean"===typeof r.plainObjects?r.plainObjects:n.plainObjects,r.allowPrototypes="boolean"===typeof r.allowPrototypes?r.allowPrototypes:n.allowPrototypes,r.parameterLimit="number"===typeof r.parameterLimit?r.parameterLimit:n.parameterLimit,r.strictNullHandling="boolean"===typeof r.strictNullHandling?r.strictNullHandling:n.strictNullHandling,""===t||null===t||"undefined"===typeof t)return r.plainObjects?Object.create(null):{};for(var o="string"===typeof t?i(t,r):t,s=r.plainObjects?Object.create(null):{},l=Object.keys(o),u=0;u<l.length;++u){var d=l[u],f=c(d,o[d],r);s=a.merge(s,f,r)}return a.compact(s)}},a3e2:function(t,e,r){"use strict";var a=r("2638"),o=r.n(a),n=r("d282"),i=r("ba31"),s=r("b1d2"),c=r("ad06"),l=Object(n["a"])("tag"),u=l[0],d=l[1];function f(t,e,r,a){var n,l,u=e.type,f=e.mark,p=e.plain,h=e.color,v=e.round,y=e.size,b=p?"color":"backgroundColor",m=(n={},n[b]=h,n);e.textColor&&(m.color=e.textColor);var g={mark:f,plain:p,round:v};y&&(g[y]=y);var w=t("span",o()([{style:m,class:[d([g,u]),(l={},l[s["c"]]=p,l)]},Object(i["b"])(a,!0)]),[r.default&&r.default(),e.closeable&&t(c["a"],{attrs:{name:"cross"},class:d("close"),on:{click:function(){Object(i["a"])(a,"close")}}})]);return e.closeable?t("transition",{attrs:{name:"van-fade"}},[w]):w}f.props={size:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean,type:{type:String,default:"default"}},e["a"]=u(f)},a406:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-details"},[r("div",{staticClass:"title"},[r("div",{staticClass:"img-left"},[r("img",{attrs:{src:t.dataList.iconUrl,alt:""}})]),r("div",{staticClass:"name-right"},[r("div",{staticClass:"name"},[t._v(t._s(t.dataList.appName))]),r("div",{staticClass:"middle"},[r("span",[t._v(t._s(t.dataList.category))]),t._v(" | "),r("span",[t._v(t._s(t.dataList.appSize)+"M")]),t._v(" | "),r("span",[t._v(t._s(t.dataList.interested))])]),r("div",{staticClass:"grade"},[r("van-rate",{attrs:{size:11.81,color:"#fb9a27",readonly:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),r("span",{staticClass:"score"},[t._v(t._s(t.dataList.score)+" 分")])],1)])]),r("div",{staticClass:"pic",attrs:{images:t.dataList.previews}},t._l(t.dataList.previews,function(t){return r("div",{key:t},[r("img",{attrs:{src:t,preview:1}})])}),0),r("div",{staticClass:"desc"},[r("div",{staticClass:"text"},[t._v("应用描述 :")]),r("div",{staticClass:"descDetails",class:{ellpes:!t.showAll},on:{click:t.fun_showAll}},[t._v("\n           "+t._s(t.dataList.description)+"\n        ")])]),r("div",{staticClass:"about"},[r("div",{staticClass:"update"},[r("span",[t._v(" 更   新")]),r("span",[t._v(" "+t._s(t._f("formatDate")(t.dataList.updateTime)))])]),r("div",{staticClass:"version"},[r("span",[t._v("版   本")]),r("span",[t._v(t._s(t.dataList.version))])]),r("div",{staticClass:"provider"},[r("span",[t._v("提供者")]),r("span",[t._v(t._s(t.dataList.provider))])])]),r("div",{staticClass:"tag"},t._l(t.dataList.plabels,function(e){return r("van-tag",{key:e,attrs:{round:"",plain:""}},[t._v(t._s(e))])}),1),r("div",{staticClass:"up"},[r("span",{on:{click:t.fun_showAll}},[t._v(t._s(t.arrowMap[t.arrow])+" "),r("van-icon",{attrs:{name:"arrow-"+t.arrow}})],1)]),r("div",{staticClass:"row_download"},[r("a",{staticClass:"download",attrs:{href:t.dataList.orderUrl}},[t._v("立即下载("+t._s(t.dataList.appSize)+"MB)")])])])},o=[],n=r("bd86"),i=(r("68ef"),r("09fe"),r("ad06")),s=(r("5f1a"),r("a3e2")),c=(r("8199"),r("d282")),l=r("ea8e"),u=r("1325"),d=r("3875"),f=Object(c["a"])("rate"),p=f[0],h=f[1];function v(t,e,r){return t>=e?"full":t+.5>=e&&r?"half":"void"}var y=p({mixins:[d["a"]],props:{size:[Number,String],gutter:[Number,String],readonly:Boolean,disabled:Boolean,allowHalf:Boolean,value:{type:Number,default:0},icon:{type:String,default:"star"},voidIcon:{type:String,default:"star-o"},color:{type:String,default:"#ffd21e"},voidColor:{type:String,default:"#c7c7c7"},disabledColor:{type:String,default:"#bdbdbd"},count:{type:Number,default:5},touchable:{type:Boolean,default:!0}},computed:{list:function(){for(var t=[],e=1;e<=this.count;e++)t.push(v(this.value,e,this.allowHalf));return t},sizeWithUnit:function(){return Object(l["a"])(this.size)},gutterWithUnit:function(){return Object(l["a"])(this.gutter)}},methods:{select:function(t){this.disabled||this.readonly||t===this.value||(this.$emit("input",t),this.$emit("change",t))},onTouchStart:function(t){var e=this;if(!this.readonly&&!this.disabled&&this.touchable){this.touchStart(t);var r=this.$refs.items.map(function(t){return t.getBoundingClientRect()}),a=[];r.forEach(function(t,r){e.allowHalf?a.push({score:r+.5,left:t.left},{score:r+1,left:t.left+t.width/2}):a.push({score:r+1,left:t.left})}),this.ranges=a}},onTouchMove:function(t){if(!this.readonly&&!this.disabled&&this.touchable&&(this.touchMove(t),"horizontal"===this.direction)){Object(u["c"])(t);var e=t.touches[0].clientX;this.select(this.getScoreByPosition(e))}},getScoreByPosition:function(t){for(var e=this.ranges.length-1;e>0;e--)if(t>this.ranges[e].left)return this.ranges[e].score;return this.allowHalf?.5:1},renderStar:function(t,e){var r,a=this,o=this.$createElement,n=this.icon,s=this.color,c=this.count,l=this.voidIcon,u=this.disabled,d=this.voidColor,f=this.disabledColor,p=e+1,v="full"===t,y="void"===t;return this.gutterWithUnit&&p!==c&&(r={paddingRight:this.gutterWithUnit}),o("div",{ref:"items",refInFor:!0,key:e,attrs:{role:"radio",tabindex:"0","aria-setsize":c,"aria-posinset":p,"aria-checked":String(!y)},style:r,class:h("item")},[o(i["a"],{attrs:{size:this.sizeWithUnit,name:v?n:l,"data-score":p,color:u?f:v?s:d},class:h("icon"),on:{click:function(){a.select(p)}}}),this.allowHalf&&o(i["a"],{attrs:{size:this.sizeWithUnit,name:y?l:n,"data-score":p-.5,color:u?f:y?d:s},class:h("icon","half"),on:{click:function(){a.select(p-.5)}}})])}},render:function(){var t=this,e=arguments[0];return e("div",{class:h(),attrs:{tabindex:"0",role:"radiogroup"},on:{touchstart:this.onTouchStart,touchmove:this.onTouchMove}},[this.list.map(function(e,r){return t.renderStar(e,r)})])}}),b=r("bc3a"),m=r.n(b);r("4328");console.log(Object({NODE_ENV:"production",VUE_APP_API:"http://120.232.169.208/mm_maap/maap/",BASE_URL:""}));var g=m.a.create({baseURL:"http://120.232.169.208/mm_maap/maap/",timeout:1e4});g.interceptors.request.use(function(t){return t.headers["Content-Type"]="application/json",t.headers["appname"]="MM7.3.1.001.01_CTAndroid_MAAP",t.headers["ua"]="android-24-1080x2040-RNE-AL00",t},function(t){console.log(t),Promise.reject(t)}),g.interceptors.response.use(function(t){return t},function(t){return console.error("request err: %o",t),Promise.reject(error)});var w,j=r("294e"),O={components:(w={},Object(n["a"])(w,y.name,y),Object(n["a"])(w,s["a"].name,s["a"]),Object(n["a"])(w,i["a"].name,i["a"]),w),data:function(){return{value:4,showAll:!1,arrow:"down",arrowMap:{down:"展开",up:"收起"},dataList:{}}},mounted:function(){Object(j["a"])("appDetails")},created:function(){var t=this;m()({method:"post",url:this.VUE_APP_API+"getAppDetail.do",data:{goodsid:this.$route.query.contentid},headers:{"Content-Type":"application/json",appname:"MM7.3.2.001.01_CTAndroid_JT",ua:"android-24-1080x2040-RNE-AL00"}}).then(function(e){var r=e.data;console.log("result",e),200==e.status&&(t.dataList=r.data,t.dataList.appSize=(r.data.appSize/1024).toFixed(2),t.value=r.data.grade,console.log(t.dataList),t.$previewRefresh())})},filters:{formatDate:function(t){var e=new Date(t),r=e.getFullYear(),a=e.getMonth()+1;a=a<10?"0"+a:a;var o=e.getDate();return o=o<10?"0"+o:o,r+"."+a+"."+o}},methods:{fun_showAll:function(){this.showAll=!this.showAll,this.arrow=this.showAll?"up":"down"}}},_=O,A=(r("92d0"),r("2877")),C=Object(A["a"])(_,a,o,!1,null,"43107e82",null);e["default"]=C.exports},b1d2:function(t,e,r){"use strict";r.d(e,"f",function(){return a}),r.d(e,"a",function(){return o}),r.d(e,"d",function(){return n}),r.d(e,"b",function(){return i}),r.d(e,"c",function(){return s}),r.d(e,"e",function(){return c});var a="#fff",o="van-hairline",n=o+"--top",i=o+"--left",s=o+"--surround",c=o+"--top-bottom"},b313:function(t,e,r){"use strict";var a=String.prototype.replace,o=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return a.call(t,o,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},cc4b:function(t,e,r){},d233:function(t,e,r){"use strict";var a=Object.prototype.hasOwnProperty,o=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),n=function(t){var e;while(t.length){var r=t.pop();if(e=r.obj[r.prop],Array.isArray(e)){for(var a=[],o=0;o<e.length;++o)"undefined"!==typeof e[o]&&a.push(e[o]);r.obj[r.prop]=a}}return e},i=function(t,e){for(var r=e&&e.plainObjects?Object.create(null):{},a=0;a<t.length;++a)"undefined"!==typeof t[a]&&(r[a]=t[a]);return r},s=function t(e,r,o){if(!r)return e;if("object"!==typeof r){if(Array.isArray(e))e.push(r);else{if("object"!==typeof e)return[e,r];(o.plainObjects||o.allowPrototypes||!a.call(Object.prototype,r))&&(e[r]=!0)}return e}if("object"!==typeof e)return[e].concat(r);var n=e;return Array.isArray(e)&&!Array.isArray(r)&&(n=i(e,o)),Array.isArray(e)&&Array.isArray(r)?(r.forEach(function(r,n){a.call(e,n)?e[n]&&"object"===typeof e[n]?e[n]=t(e[n],r,o):e.push(r):e[n]=r}),e):Object.keys(r).reduce(function(e,n){var i=r[n];return a.call(e,n)?e[n]=t(e[n],i,o):e[n]=i,e},n)},c=function(t,e){return Object.keys(e).reduce(function(t,r){return t[r]=e[r],t},t)},l=function(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(e){return t}},u=function(t){if(0===t.length)return t;for(var e="string"===typeof t?t:String(t),r="",a=0;a<e.length;++a){var n=e.charCodeAt(a);45===n||46===n||95===n||126===n||n>=48&&n<=57||n>=65&&n<=90||n>=97&&n<=122?r+=e.charAt(a):n<128?r+=o[n]:n<2048?r+=o[192|n>>6]+o[128|63&n]:n<55296||n>=57344?r+=o[224|n>>12]+o[128|n>>6&63]+o[128|63&n]:(a+=1,n=65536+((1023&n)<<10|1023&e.charCodeAt(a)),r+=o[240|n>>18]+o[128|n>>12&63]+o[128|n>>6&63]+o[128|63&n])}return r},d=function(t){for(var e=[{obj:{o:t},prop:"o"}],r=[],a=0;a<e.length;++a)for(var o=e[a],i=o.obj[o.prop],s=Object.keys(i),c=0;c<s.length;++c){var l=s[c],u=i[l];"object"===typeof u&&null!==u&&-1===r.indexOf(u)&&(e.push({obj:i,prop:l}),r.push(u))}return n(e)},f=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},p=function(t){return null!==t&&"undefined"!==typeof t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))};t.exports={arrayToObject:i,assign:c,compact:d,decode:l,encode:u,isBuffer:p,isRegExp:f,merge:s}}}]);
//# sourceMappingURL=chunk-fbc80f90.43a3e90f.js.map