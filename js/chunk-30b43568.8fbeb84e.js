(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30b43568"],{"204a":function(t,e,n){},"24e2":function(t,e,n){"use strict";var o=n("399d"),a=n.n(o);a.a},"2fcb":function(t,e,n){},"399d":function(t,e,n){},"4d75":function(t,e,n){},6605:function(t,e,n){"use strict";var o={zIndex:2e3,lockCount:0,stack:[],get top(){return this.stack[this.stack.length-1]}},a=n("2b0e"),i=10;function s(t,e){return t>e&&t>i?"horizontal":e>t&&e>i?"vertical":""}var c=a["a"].extend({data:function(){return{direction:""}},methods:{touchStart:function(t){this.resetTouchStatus(),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY},touchMove:function(t){var e=t.touches[0];this.deltaX=e.clientX-this.startX,this.deltaY=e.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||s(this.offsetX,this.offsetY)},resetTouchStatus:function(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0}}});function l(t){return"string"===typeof t?document.querySelector(t):t()}function r(t){var e=t.afterPortal;return a["a"].extend({props:{getContainer:[String,Function]},watch:{getContainer:"portal"},mounted:function(){this.getContainer&&this.portal()},methods:{portal:function(){var t,n=this.getContainer;n?t=l(n):this.$parent&&(t=this.$parent.$el),t&&t!==this.$el.parentNode&&t.appendChild(this.$el),e&&e.call(this)}}})}var u=n("1325"),d=n("c31d"),f=n("2638"),h=n.n(f),p=n("d282"),v=n("a142"),m=n("ba31"),b=Object(p["a"])("overlay"),g=b[0],y=b[1];function O(t){Object(u["c"])(t,!0)}function C(t,e,n,o){var a=Object(d["a"])({zIndex:e.zIndex},e.customStyle);return Object(v["b"])(e.duration)&&(a.animationDuration=e.duration+"s"),t("transition",{attrs:{name:"van-fade"}},[t("div",h()([{directives:[{name:"show",value:e.show}],style:a,class:[y(),e.className],on:{touchmove:O}},Object(m["b"])(o,!0)]))])}C.props={show:Boolean,duration:[Number,String],className:null,customStyle:null,zIndex:{type:[Number,String],default:1}};var k,x=g(C),w={className:"",customStyle:{}};function S(){if(o.top){var t=o.top.vm;t.$emit("click-overlay"),t.closeOnClickOverlay&&(t.onClickOverlay?t.onClickOverlay():t.close())}}function j(){if(k||(k=Object(m["c"])(x,{on:{click:S}})),o.top){var t=o.top,e=t.vm,n=t.config,a=e.$el;a&&a.parentNode?a.parentNode.insertBefore(k.$el,a):document.body.appendChild(k.$el),Object(d["a"])(k,w,n,{show:!0})}else k.show=!1}function B(t,e){o.stack.some(function(e){return e.vm===t})||(o.stack.push({vm:t,config:e}),j())}function $(t){var e=o.stack;e.length&&(o.top.vm===t?(e.pop(),j()):o.stack=e.filter(function(e){return e.vm!==t}))}var T=n("a8c1");n.d(e,"a",function(){return L});var L={mixins:[c,r({afterPortal:function(){this.overlay&&j()}})],props:{value:Boolean,overlay:Boolean,overlayStyle:Object,overlayClass:String,closeOnClickOverlay:Boolean,zIndex:[Number,String],lockScroll:{type:Boolean,default:!0},lazyRender:{type:Boolean,default:!0}},data:function(){return{inited:this.value}},computed:{shouldRender:function(){return this.inited||!this.lazyRender}},watch:{value:function(t){var e=t?"open":"close";this.inited=this.inited||this.value,this[e](),this.$emit(e)},overlay:"renderOverlay"},mounted:function(){this.value&&this.open()},activated:function(){this.value&&this.open()},beforeDestroy:function(){this.close(),this.getContainer&&this.$parent&&this.$parent.$el&&this.$parent.$el.appendChild(this.$el)},deactivated:function(){this.close()},methods:{open:function(){this.$isServer||this.opened||(void 0!==this.zIndex&&(o.zIndex=this.zIndex),this.opened=!0,this.renderOverlay(),this.lockScroll&&(Object(u["b"])(document,"touchstart",this.touchStart),Object(u["b"])(document,"touchmove",this.onTouchMove),o.lockCount||document.body.classList.add("van-overflow-hidden"),o.lockCount++))},close:function(){this.opened&&(this.lockScroll&&(o.lockCount--,Object(u["a"])(document,"touchstart",this.touchStart),Object(u["a"])(document,"touchmove",this.onTouchMove),o.lockCount||document.body.classList.remove("van-overflow-hidden")),this.opened=!1,$(this),this.$emit("input",!1))},onTouchMove:function(t){this.touchMove(t);var e=this.deltaY>0?"10":"01",n=Object(T["b"])(t.target,this.$el),o=n.scrollHeight,a=n.offsetHeight,i=n.scrollTop,s="11";0===i?s=a>=o?"00":"01":i+a>=o&&(s="10"),"11"===s||"vertical"!==this.direction||parseInt(s,2)&parseInt(e,2)||Object(u["c"])(t,!0)},renderOverlay:function(){var t=this;!this.$isServer&&this.value&&this.$nextTick(function(){t.updateZIndex(t.overlay?1:0),t.overlay?B(t,{zIndex:o.zIndex++,duration:t.duration,className:t.overlayClass,customStyle:t.overlayStyle}):$(t)})},updateZIndex:function(t){void 0===t&&(t=0),this.$el.style.zIndex=++o.zIndex+t}}}},"66b9":function(t,e,n){"use strict";n("68ef"),n("09fe")},"94e5":function(t,e,n){"use strict";n.d(e,"a",function(){return a});var o=n("704d");function a(){if(void 0!=Object(o["a"])("phone")&&""!=Object(o["a"])("phone")){var t=Object(o["a"])("phone");return t}console.log("window.location.href",window.location.href)}},"985e":function(t,e,n){"use strict";n.r(e);var o,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game-detail"},[n("div",{staticClass:"main-box"},[n("img",{attrs:{src:t.wardList.icon,alt:""}}),n("div",[n("p",[t._v(t._s(t.wardList.pagName))]),n("p",[n("span",{staticClass:"size"},[t._v(t._s(t.wardList.pagRemark))])])])]),n("h3",[t._v("礼包类型")]),n("van-list",{staticClass:"van-clearfix",attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.wardList.awardList,function(e){return n("van-cell",{key:e.awardId},[n("div",{staticClass:"left-box"},[n("h4",[t._v(t._s(e.awardName))]),n("p",{staticClass:"fold",on:{click:function(e){return t.foldText(e)}}},[t._v(t._s(e.remark))])]),n("van-button",{attrs:{round:"",color:"#f1f0f6"},on:{click:function(n){return t.getGift(e.awardId)}}},[t._v("领取")])],1)}),1)],1)},i=[],s=(n("e7e5"),n("d399")),c=(n("68ef"),n("4d75"),n("09fe"),n("2fcb"),n("c31d")),l=n("2b0e"),r=n("d282"),u=n("b1d2"),d=n("6605"),f=n("1325"),h=n("5fbe"),p=l["a"].extend({mixins:[Object(h["a"])(function(t,e){this.handlePopstate(e&&this.closeOnPopstate)})],props:{closeOnPopstate:Boolean},data:function(){return{bindStatus:!1}},watch:{closeOnPopstate:function(t){this.handlePopstate(t)}},methods:{handlePopstate:function(t){if(!this.$isServer&&this.bindStatus!==t){this.bindStatus=t;var e=t?f["b"]:f["a"];e(window,"popstate",this.close)}}}}),v=n("b650"),m=Object(r["a"])("dialog"),b=m[0],g=m[1],y=m[2],O=b({mixins:[d["a"],p],props:{title:String,message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(t){var e=this;this.$emit(t),this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,function(n){!1!==n&&e.onClose(t),e.loading[t]=!1})):this.onClose(t)},onClose:function(t){this.close(),this.callback&&this.callback(t)}},render:function(){var t,e,n=this,o=arguments[0];if(this.shouldRender){var a=this.message,i=this.messageAlign,s=this.slots(),c=this.slots("title")||this.title,l=c&&o("div",{class:g("header",{isolated:!a&&!s})},[c]),r=(s||a)&&o("div",{class:g("content")},[s||o("div",{domProps:{innerHTML:a},class:g("message",(t={"has-title":c},t[i]=i,t))})]),d=this.showCancelButton&&this.showConfirmButton,f=o("div",{class:[u["d"],g("footer",{buttons:d})]},[this.showCancelButton&&o(v["a"],{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||y("cancel")},class:g("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){n.handleAction("cancel")}}}),this.showConfirmButton&&o(v["a"],{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||y("confirm")},class:[g("confirm"),(e={},e[u["b"]]=d,e)],style:{color:this.confirmButtonColor},on:{click:function(){n.handleAction("confirm")}}})]);return o("transition",{attrs:{name:"van-dialog-bounce"}},[o("div",{directives:[{name:"show",value:this.value}],attrs:{role:"dialog","aria-labelledby":this.title||a},class:[g(),this.className]},[l,r,f])])}}}),C=n("a142");function k(t){return document.body.contains(t)}function x(){o&&o.$destroy(),o=new(l["a"].extend(O))({el:document.createElement("div"),propsData:{lazyRender:!1}}),o.$on("input",function(t){o.value=t})}function w(t){return C["d"]?Promise.resolve():new Promise(function(e,n){o&&k(o.$el)||x(),Object(c["a"])(o,w.currentOptions,t,{resolve:e,reject:n})})}w.defaultOptions={value:!0,title:"",message:"",overlay:!0,className:"",lockScroll:!0,beforeClose:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!1,closeOnClickOverlay:!1,callback:function(t){o["confirm"===t?"resolve":"reject"](t)}},w.alert=w,w.confirm=function(t){return w(Object(c["a"])({showCancelButton:!0},t))},w.close=function(){o&&(o.value=!1)},w.setDefaultOptions=function(t){Object(c["a"])(w.currentOptions,t)},w.resetDefaultOptions=function(){w.currentOptions=Object(c["a"])({},w.defaultOptions)},w.resetDefaultOptions(),w.install=function(){l["a"].use(O)},w.Component=O,l["a"].prototype.$dialog=w;var S,j=w,B=(n("ac6a"),n("bd86")),$=(n("c194"),n("7744")),T=(n("66b9"),n("2994"),n("2bdd")),L=(n("204a"),n("add7"),n("bc3a")),z=n.n(L),I=n("94e5"),N={components:(S={},Object(B["a"])(S,T["a"].name,T["a"]),Object(B["a"])(S,v["a"].name,v["a"]),Object(B["a"])(S,$["a"].name,$["a"]),S),data:function(){return{list:[],loading:!1,finished:!1,fold:!0,wardList:{icon:"",pagRemark:"",pagName:""}}},mounted:function(){Object(I["a"])()},methods:{onLoad:function(){var t=this;this.loading=!0,z.a.post("http://47.107.125.18/mssp_pps/maap/packageAwardList.do",{activityId:190822080,pagAwardId:this.$route.query.id}).then(function(e){console.log("response",t.list),t.wardList=e.data.data,console.log("wardList",t.wardList),0==t.list.length?t.list=e.data.data:e.data.data.forEach(function(e,n,o){t.list.push(e)}),t.loading=!1,t.finished=!0}).catch(function(t){console.log(t)})},foldText:function(t){var e=t.currentTarget;e.classList.contains("fold")?(e.classList.remove("fold"),e.classList.toggle("unfold")):(e.classList.toggle("fold"),e.classList.remove("unfold"))},getGift:function(t){var e=this;z.a.post("http://47.107.125.18/mssp_pps/maap//getAward.do",{phone:this.encrypt(13798163108),activityId:190822080,awardId:t}).then(function(t){0==t.data.resultCode?j.confirm({title:"领取成功",message:'<P>你已经成功领取"'.concat(t.data.data.awardName,'"</P>\n                      <div class="code-box"><span>激活码</span><span class="code">').concat(t.data.data.awardCode,"</span></div>\n            "),cancelButtonText:"关闭",confirmButtonText:"复制"}).then(function(){e.copy(t.data.data)}).catch(function(){}):Object(s["a"])({message:t.data.msg,position:"center",duration:1e3})}).catch(function(t){console.log(t)})},copy:function(t){var e=new this.Clipboard(".van-dialog__confirm",{text:function(){return t.awardCode}});e.on("success",function(t){Object(s["a"])({message:"激活码已复制",position:"center",duration:1e3}),e.destroy()}),e.on("error",function(t){Object(s["a"])({message:"复制失败,请手动复制",position:"center",duration:1e3}),e.destroy()})}}},P=N,_=(n("24e2"),n("2877")),A=Object(_["a"])(P,a,i,!1,null,null,null);e["default"]=A.exports},add7:function(t,e,n){},b258:function(t,e,n){},b650:function(t,e,n){"use strict";var o=n("c31d"),a=n("2638"),i=n.n(a),s=n("d282"),c=n("ba31"),l=n("b1d2"),r=n("48f4"),u=n("ad06"),d=n("543e"),f=Object(s["a"])("button"),h=f[0],p=f[1];function v(t,e,n,o){var a,s=e.tag,f=e.icon,h=e.type,v=e.disabled,m=e.loading,b=e.hairline,g=e.loadingText;function y(t){m||v||(Object(c["a"])(o,"click",t),Object(r["a"])(o))}function O(t){Object(c["a"])(o,"touchstart",t)}var C=[p([h,e.size,{disabled:v,hairline:b,block:e.block,plain:e.plain,round:e.round,square:e.square}]),(a={},a[l["c"]]=b,a)];function k(){var o,a=[];return m?a.push(t(d["a"],{class:p("loading"),attrs:{size:e.loadingSize,type:e.loadingType,color:"default"===h?void 0:""}})):f&&a.push(t(u["a"],{attrs:{name:f},class:p("icon")})),o=m?g:n.default?n.default():e.text,o&&a.push(t("span",{class:p("text")},[o])),a}return t(s,i()([{class:C,attrs:{type:e.nativeType,disabled:v},on:{click:y,touchstart:O}},Object(c["b"])(o)]),[k()])}v.props=Object(o["a"])({},r["b"],{text:String,icon:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"}}),e["a"]=h(v)},d399:function(t,e,n){"use strict";var o=n("c31d"),a=n("2b0e"),i=n("d282"),s=n("a142"),c=n("6605"),l=n("ad06"),r=n("543e"),u=Object(i["a"])("toast"),d=u[0],f=u[1],h=d({mixins:[c["a"]],props:{icon:String,className:null,iconPrefix:String,loadingType:String,forbidClick:Boolean,message:[Number,String],type:{type:String,default:"text"},position:{type:String,default:"middle"},lockScroll:{type:Boolean,default:!1}},data:function(){return{clickable:!1}},mounted:function(){this.toggleClickable()},destroyed:function(){this.toggleClickable()},watch:{value:"toggleClickable",forbidClick:"toggleClickable"},methods:{toggleClickable:function(){var t=this.value&&this.forbidClick;if(this.clickable!==t){this.clickable=t;var e=t?"add":"remove";document.body.classList[e]("van-toast--unclickable")}},onAfterEnter:function(){this.$emit("opened"),this.onOpened&&this.onOpened()},onAfterLeave:function(){this.$emit("closed")}},render:function(){var t=arguments[0],e=this.type,n=this.icon,o=this.message,a=this.iconPrefix,i=this.loadingType,c=n||"success"===e||"fail"===e;function u(){return c?t(l["a"],{class:f("icon"),attrs:{classPrefix:a,name:n||e}}):"loading"===e?t(r["a"],{class:f("loading"),attrs:{color:"white",type:i}}):void 0}function d(){if(Object(s["b"])(o)&&""!==o)return"html"===e?t("div",{class:f("text"),domProps:{innerHTML:o}}):t("div",{class:f("text")},[o])}return t("transition",{attrs:{name:"van-fade"},on:{afterEnter:this.onAfterEnter,afterLeave:this.onAfterLeave}},[t("div",{directives:[{name:"show",value:this.value}],class:[f([this.position,{text:!c&&"loading"!==e}]),this.className]},[u(),d()])])}}),p={icon:"",type:"text",mask:!1,value:!0,message:"",className:"",onClose:null,onOpened:null,duration:3e3,iconPrefix:void 0,position:"middle",forbidClick:!1,loadingType:void 0,getContainer:"body",overlayStyle:null},v=[],m=!1,b=Object(o["a"])({},p);function g(t){return Object(s["c"])(t)?t:{message:t}}function y(){if(s["d"])return{};if(!v.length||m){var t=new(a["a"].extend(h))({el:document.createElement("div")});v.push(t)}return v[v.length-1]}function O(t){return t=Object(o["a"])({},t),t.overlay=t.mask,delete t.mask,delete t.duration,t}function C(t){void 0===t&&(t={});var e=y();return e.value&&e.updateZIndex(),t=Object(o["a"])({},b,{},g(t),{clear:function(){e.value=!1,t.onClose&&t.onClose(),m&&!s["d"]&&e.$on("closed",function(){clearTimeout(e.timer),v=v.filter(function(t){return t!==e});var t=e.$el.parentNode;t&&t.removeChild(e.$el),e.$destroy()})}}),Object(o["a"])(e,O(t)),clearTimeout(e.timer),t.duration>0&&(e.timer=setTimeout(function(){e.clear()},t.duration)),e}var k=function(t){return function(e){return C(Object(o["a"])({type:t},g(e)))}};["loading","success","fail"].forEach(function(t){C[t]=k(t)}),C.clear=function(t){v.length&&(t?(v.forEach(function(t){t.clear()}),v=[]):m?v.shift().clear():v[0].clear())},C.setDefaultOptions=function(t){Object(o["a"])(b,t)},C.resetDefaultOptions=function(){b=Object(o["a"])({},p)},C.allowMultiple=function(t){void 0===t&&(t=!0),m=t},C.install=function(){a["a"].use(h)},a["a"].prototype.$toast=C;e["a"]=C},e7e5:function(t,e,n){"use strict";n("68ef"),n("4d75"),n("09fe"),n("b258")}}]);
//# sourceMappingURL=chunk-30b43568.8fbeb84e.js.map