(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ff56e02c"],{"02de":function(t,e,i){"use strict";function n(t){return"none"===window.getComputedStyle(t).display||null===t.offsetParent}i.d(e,"a",function(){return n})},1146:function(t,e,i){},3875:function(t,e,i){"use strict";i.d(e,"a",function(){return o});var n=i("2b0e"),s=10;function r(t,e){return t>e&&t>s?"horizontal":e>t&&e>s?"vertical":""}var o=n["a"].extend({data:function(){return{direction:""}},methods:{touchStart:function(t){this.resetTouchStatus(),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY},touchMove:function(t){var e=t.touches[0];this.deltaX=e.clientX-this.startX,this.deltaY=e.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||r(this.offsetX,this.offsetY)},resetTouchStatus:function(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0}}})},4598:function(t,e,i){"use strict";(function(t){i.d(e,"b",function(){return c}),i.d(e,"a",function(){return l});var n=i("a142"),s=Date.now();function r(t){var e=Date.now(),i=Math.max(0,16-(e-s)),n=setTimeout(t,i);return s=e+i,n}var o=n["d"]?t:window,a=o.requestAnimationFrame||r;o.cancelAnimationFrame||o.clearTimeout;function c(t){return a.call(o,t)}function l(t){c(function(){c(t)})}}).call(this,i("c8ba"))},"565f":function(t,e,i){"use strict";var n=i("2638"),s=i.n(n),r=i("c31d"),o=i("ad06"),a=i("7744"),c=i("dfaf"),l=i("1325"),h=i("a142");function u(){return!h["d"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}var d=i("a8c1"),f=u();function b(){f&&Object(d["e"])(Object(d["b"])())}var p=i("d282"),v=i("ea8e"),m=Object(p["a"])("field"),g=m[0],x=m[1];e["a"]=g({inheritAttrs:!1,props:Object(r["a"])({},c["a"],{error:Boolean,readonly:Boolean,autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,labelClass:null,labelWidth:[Number,String],labelAlign:String,inputAlign:String,errorMessage:String,errorMessageAlign:String,showWordLimit:Boolean,type:{type:String,default:"text"}}),data:function(){return{focused:!1}},watch:{value:function(){this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&Object(h["b"])(this.value)&&!this.readonly},listeners:function(){var t=Object(r["a"])({},this.$listeners,{input:this.onInput,keypress:this.onKeypress,focus:this.onFocus,blur:this.onBlur});return delete t.click,t},labelStyle:function(){var t=this.labelWidth;if(t)return{width:Object(v["a"])(t)}}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},format:function(t){if(void 0===t&&(t=this.$refs.input),t){var e=t,i=e.value,n=this.$attrs.maxlength;return"number"===this.type&&Object(h["b"])(n)&&i.length>n&&(i=i.slice(0,n),t.value=i),i}},onInput:function(t){t.target.composing||this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t),b()},onClick:function(t){this.$emit("click",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){Object(l["c"])(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){if("number"===this.type){var e=t.keyCode,i=-1===String(this.value).indexOf("."),n=e>=48&&e<=57||46===e&&i||45===e;n||Object(l["c"])(t)}"search"===this.type&&13===t.keyCode&&this.blur(),this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(h["c"])(this.autosize)){var i=this.autosize,n=i.maxHeight,s=i.minHeight;n&&(e=Math.min(e,n)),s&&(e=Math.max(e,s))}e&&(t.style.height=e+"px")}},renderInput:function(){var t=this.$createElement,e=this.slots("input");if(e)return t("div",{class:x("control",this.inputAlign)},[e]);var i={ref:"input",class:x("control",this.inputAlign),domProps:{value:this.value},attrs:Object(r["a"])({},this.$attrs,{readonly:this.readonly}),on:this.listeners,directives:[{name:"model",value:this.value}]};return"textarea"===this.type?t("textarea",s()([{},i])):t("input",s()([{attrs:{type:this.type}},i]))},renderLeftIcon:function(){var t=this.$createElement,e=this.slots("left-icon")||this.leftIcon;if(e)return t("div",{class:x("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(o["a"],{attrs:{name:this.leftIcon}})])},renderRightIcon:function(){var t=this.$createElement,e=this.slots,i=e("right-icon")||this.rightIcon;if(i)return t("div",{class:x("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(o["a"],{attrs:{name:this.rightIcon}})])},renderWordLimit:function(){var t=this.$createElement;if(this.showWordLimit&&this.$attrs.maxlength)return t("div",{class:x("word-limit")},[this.value.length,"/",this.$attrs.maxlength])}},render:function(){var t,e=arguments[0],i=this.slots,n=this.labelAlign,s={icon:this.renderLeftIcon};return i("label")&&(s.title=function(){return i("label")}),e(a["a"],{attrs:{icon:this.leftIcon,size:this.size,title:this.label,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,titleClass:[x("label",n),this.labelClass],arrowDirection:this.arrowDirection},class:x((t={error:this.error},t["label-"+n]=n,t["min-height"]="textarea"===this.type&&!this.autosize,t)),scopedSlots:s,on:{click:this.onClick}},[e("div",{class:x("body")},[this.renderInput(),this.showClear&&e(o["a"],{attrs:{name:"clear"},class:x("clear"),on:{touchstart:this.onClear}}),this.renderRightIcon(),i("button")&&e("div",{class:x("button")},[i("button")])]),this.renderWordLimit(),this.errorMessage&&e("div",{class:x("error-message",this.errorMessageAlign)},[this.errorMessage])])}})},5852:function(t,e,i){"use strict";i("68ef"),i("09fe"),i("1146"),i("f032")},9884:function(t,e,i){"use strict";i.d(e,"a",function(){return r}),i.d(e,"b",function(){return o});var n=i("2b0e");function s(t){var e=[];function i(t){t.forEach(function(t){e.push(t),t.children&&i(t.children)})}return i(t),e}function r(t,e){var i,r;void 0===e&&(e={});var o=e.indexKey||"index";return n["a"].extend({inject:(i={},i[t]={default:null},i),computed:(r={parent:function(){return this.disableBindRelation?null:this[t]}},r[o]=function(){return this.bindRelation(),this.parent.children.indexOf(this)},r),mounted:function(){this.bindRelation()},beforeDestroy:function(){var t=this;this.parent&&(this.parent.children=this.parent.children.filter(function(e){return e!==t}))},methods:{bindRelation:function(){if(this.parent&&-1===this.parent.children.indexOf(this)){var t=[].concat(this.parent.children,[this]),e=s(this.parent.slots());t.sort(function(t,i){return e.indexOf(t.$vnode)-e.indexOf(i.$vnode)}),this.parent.children=t}}}})}function o(t){return{provide:function(){var e;return e={},e[t]=this,e},data:function(){return{children:[]}}}}},"9d7e":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recommend"},[i("van-search",{attrs:{placeholder:"请输入搜索关键词","show-action":"",shape:"round"},on:{search:t.onSearch},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[i("div",{attrs:{slot:"action"},on:{click:t.onSearch},slot:"action"},[t._v("搜索")])]),i("van-tabs",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[i("van-tab",{attrs:{title:"推荐",to:{path:"/main/recom"}}}),i("van-tab",{attrs:{title:"游戏",to:{path:"/main/game"}}}),i("van-tab",{attrs:{title:"软件",to:{path:"/main/app"}}})],1),i("router-view")],1)},s=[],r=i("bd86"),o=(i("68ef"),i("f319"),i("c31d")),a=i("d282"),c=i("9884"),l=i("48f4"),h=Object(a["a"])("tab"),u=h[0],d=h[1],f=u({mixins:[Object(c["a"])("vanTabs")],props:Object(o["a"])({},l["c"],{name:[Number,String],title:String,disabled:Boolean}),data:function(){return{inited:!1}},computed:{computedName:function(){return this.name||this.index},isActive:function(){return this.computedName===this.parent.currentName}},watch:{"parent.currentIndex":function(){this.inited=this.inited||this.isActive},title:function(){this.parent.setLine()}},mounted:function(){this.slots("title")&&this.parent.renderTitle(this.$refs.title,this.index)},render:function(t){var e=this.slots,i=this.isActive,n=this.inited||!this.parent.lazyRender,s=[n?e():t()];return e("title")&&s.push(t("div",{ref:"title"},[e("title")])),this.parent.animated?t("div",{attrs:{role:"tabpanel","aria-hidden":!i},class:d("pane-wrapper",{inactive:!i})},[t("div",{class:d("pane")},[s])]):t("div",{directives:[{name:"show",value:i}],attrs:{role:"tabpanel"},class:d("pane")},[s])}}),b=(i("ae9e"),i("b807"),i("a142")),p=i("ea8e"),v=i("4598");function m(t,e,i){var n=0,s=t.scrollLeft,r=0===i?1:Math.round(1e3*i/16);function o(){t.scrollLeft+=(e-s)/r,++n<r&&Object(v["b"])(o)}o()}var g,x=i("02de"),y=i("5fbe"),I=i("b1d2"),k=i("a8c1"),S=Object(a["a"])("tab")[1],w={props:{type:String,color:String,title:String,isActive:Boolean,ellipsis:Boolean,disabled:Boolean,scrollable:Boolean,activeColor:String,inactiveColor:String,swipeThreshold:Number},computed:{style:function(){var t={},e=this.color,i=this.isActive,n="card"===this.type;e&&n&&(t.borderColor=e,this.disabled||(i?t.backgroundColor=e:t.color=e));var s=i?this.activeColor:this.inactiveColor;return s&&(t.color=s),this.scrollable&&this.ellipsis&&(t.flexBasis=88/this.swipeThreshold+"%"),t}},methods:{onClick:function(){this.$emit("click")},renderTitle:function(t){var e=this.$refs.title;e.innerHTML="",e.appendChild(t)}},render:function(){var t=arguments[0];return t("div",{attrs:{role:"tab","aria-selected":this.isActive},class:S({active:this.isActive,disabled:this.disabled,complete:!this.ellipsis}),style:this.style,on:{click:this.onClick}},[t("span",{ref:"title",class:{"van-ellipsis":this.ellipsis}},[this.title])])}},$=i("3875"),O=Object(a["a"])("tabs"),j=O[0],C=O[1],T=50,N=j({mixins:[$["a"]],props:{count:Number,duration:Number,animated:Boolean,swipeable:Boolean,currentIndex:Number},computed:{style:function(){if(this.animated)return{transform:"translate3d("+-1*this.currentIndex*100+"%, 0, 0)",transitionDuration:this.duration+"s"}},listeners:function(){if(this.swipeable)return{touchstart:this.touchStart,touchmove:this.touchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}}},methods:{onTouchEnd:function(){var t=this.direction,e=this.deltaX,i=this.currentIndex;"horizontal"===t&&this.offsetX>=T&&(e>0&&0!==i?this.$emit("change",i-1):e<0&&i!==this.count-1&&this.$emit("change",i+1))},renderChildren:function(){var t=this.$createElement;return this.animated?t("div",{class:C("track"),style:this.style},[this.slots()]):this.slots()}},render:function(){var t=arguments[0];return t("div",{class:C("content",{animated:this.animated}),on:Object(o["a"])({},this.listeners)},[this.renderChildren()])}}),B=Object(a["a"])("sticky"),A=B[0],L=B[1],z=A({mixins:[Object(y["a"])(function(t){this.scroller||(this.scroller=Object(k["c"])(this.$el)),t(this.scroller,"scroll",this.onScroll,!0),this.onScroll()})],props:{zIndex:Number,container:null,offsetTop:{type:Number,default:0}},data:function(){return{fixed:!1,height:0,transform:0}},computed:{style:function(){if(this.fixed){var t={};return Object(b["b"])(this.zIndex)&&(t.zIndex=this.zIndex),this.offsetTop&&this.fixed&&(t.top=this.offsetTop+"px"),this.transform&&(t.transform="translate3d(0, "+this.transform+"px, 0)"),t}}},methods:{onScroll:function(){var t=this;this.height=this.$el.offsetHeight;var e=this.container,i=this.offsetTop,n=Object(k["d"])(window),s=Object(k["a"])(this.$el),r=function(){t.$emit("scroll",{scrollTop:n,isFixed:t.fixed})};if(e){var o=s+e.offsetHeight;if(n+i+this.height>o){var a=this.height+n-o;return a<this.height?(this.fixed=!0,this.transform=-(a+i)):this.fixed=!1,void r()}}n+i>s?(this.fixed=!0,this.transform=0):this.fixed=!1,r()}},render:function(){var t=arguments[0],e=this.fixed,i={height:e?this.height+"px":null};return t("div",{style:i},[t("div",{class:L({fixed:e}),style:this.style},[this.slots()])])}}),M=Object(a["a"])("tabs"),X=M[0],W=M[1],R=X({mixins:[Object(c["b"])("vanTabs"),Object(y["a"])(function(t){t(window,"resize",this.setLine,!0)})],model:{prop:"active"},props:{color:String,sticky:Boolean,animated:Boolean,swipeable:Boolean,background:String,lineWidth:[Number,String],lineHeight:[Number,String],titleActiveColor:String,titleInactiveColor:String,type:{type:String,default:"line"},active:{type:[Number,String],default:0},border:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},duration:{type:Number,default:.3},offsetTop:{type:Number,default:0},lazyRender:{type:Boolean,default:!0},swipeThreshold:{type:Number,default:4}},data:function(){return{position:"",currentIndex:null,lineStyle:{backgroundColor:this.color}}},computed:{scrollable:function(){return this.children.length>this.swipeThreshold||!this.ellipsis},navStyle:function(){return{borderColor:this.color,background:this.background}},currentName:function(){var t=this.children[this.currentIndex];if(t)return t.computedName}},watch:{color:"setLine",active:function(t){t!==this.currentName&&this.setCurrentIndexByName(t)},children:function(){var t=this;this.setCurrentIndexByName(this.currentName||this.active),this.setLine(),this.$nextTick(function(){t.scrollIntoView(!0)})},currentIndex:function(){this.scrollIntoView(),this.setLine(),this.stickyFixed&&Object(k["e"])(Math.ceil(Object(k["a"])(this.$el)-this.offsetTop))}},mounted:function(){this.onShow()},activated:function(){this.onShow(),this.setLine()},methods:{onShow:function(){var t=this;this.$nextTick(function(){t.inited=!0,t.scrollIntoView(!0)})},setLine:function(){var t=this,e=this.inited;this.$nextTick(function(){var i=t.$refs.titles;if(i&&i[t.currentIndex]&&"line"===t.type&&!Object(x["a"])(t.$el)){var n=i[t.currentIndex].$el,s=t.lineWidth,r=t.lineHeight,o=Object(b["b"])(s)?s:n.offsetWidth/2,a=n.offsetLeft+n.offsetWidth/2,c={width:Object(p["a"])(o),backgroundColor:t.color,transform:"translateX("+a+"px) translateX(-50%)"};if(e&&(c.transitionDuration=t.duration+"s"),Object(b["b"])(r)){var l=Object(p["a"])(r);c.height=l,c.borderRadius=l}t.lineStyle=c}})},setCurrentIndexByName:function(t){var e=this.children.filter(function(e){return e.computedName===t}),i=(this.children[0]||{}).index||0;this.setCurrentIndex(e.length?e[0].index:i)},setCurrentIndex:function(t){if(t=this.findAvailableTab(t),Object(b["b"])(t)&&t!==this.currentIndex){var e=null!==this.currentIndex;this.currentIndex=t,this.$emit("input",this.currentName),e&&this.$emit("change",this.currentName,this.children[t].title)}},findAvailableTab:function(t){var e=t<this.currentIndex?-1:1;while(t>=0&&t<this.children.length){if(!this.children[t].disabled)return t;t+=e}},onClick:function(t){var e=this.children[t],i=e.title,n=e.disabled,s=e.computedName;n?this.$emit("disabled",s,i):(this.setCurrentIndex(t),this.$emit("click",s,i))},scrollIntoView:function(t){var e=this.$refs.titles;if(this.scrollable&&e&&e[this.currentIndex]){var i=this.$refs.nav,n=e[this.currentIndex].$el,s=n.offsetLeft-(i.offsetWidth-n.offsetWidth)/2;m(i,s,t?0:this.duration)}},renderTitle:function(t,e){var i=this;this.$nextTick(function(){i.$refs.titles[e].renderTitle(t)})},onScroll:function(t){this.stickyFixed=t.isFixed,this.$emit("scroll",t)}},render:function(){var t,e=this,i=arguments[0],n=this.type,s=this.ellipsis,r=this.animated,o=this.scrollable,a=this.children.map(function(t,r){return i(w,{ref:"titles",refInFor:!0,attrs:{type:n,title:t.title,color:e.color,isActive:r===e.currentIndex,ellipsis:s,disabled:t.disabled,scrollable:o,activeColor:e.titleActiveColor,inactiveColor:e.titleInactiveColor,swipeThreshold:e.swipeThreshold},on:{click:function(){e.onClick(r),Object(l["b"])(t.$router,t)}}})}),c=i("div",{ref:"wrap",class:[W("wrap",{scrollable:o}),(t={},t[I["e"]]="line"===n&&this.border,t)]},[i("div",{ref:"nav",attrs:{role:"tablist"},class:W("nav",[n]),style:this.navStyle},[this.slots("nav-left"),a,"line"===n&&i("div",{class:W("line"),style:this.lineStyle}),this.slots("nav-right")])]);return i("div",{class:W([n])},[this.sticky?i(z,{attrs:{container:this.$el,offsetTop:this.offsetTop},on:{scroll:this.onScroll}},[c]):c,i(N,{attrs:{count:this.children.length,animated:r,duration:this.duration,swipeable:this.swipeable,currentIndex:this.currentIndex},on:{change:this.setCurrentIndex}},[this.slots()])])}}),E=(i("5852"),i("d961")),Y=(i("bc3a"),{components:(g={},Object(r["a"])(g,E["a"].name,E["a"]),Object(r["a"])(g,R.name,R),Object(r["a"])(g,f.name,f),g),data:function(){return{active:0,value:""}},mounted:function(){},methods:{onSearch:function(){console.log("search")}}}),F=Y,H=i("2877"),D=Object(H["a"])(F,n,s,!1,null,null,null);e["default"]=D.exports},ae9e:function(t,e,i){},b1d2:function(t,e,i){"use strict";i.d(e,"f",function(){return n}),i.d(e,"a",function(){return s}),i.d(e,"d",function(){return r}),i.d(e,"b",function(){return o}),i.d(e,"c",function(){return a}),i.d(e,"e",function(){return c});var n="#fff",s="van-hairline",r=s+"--top",o=s+"--left",a=s+"--surround",c=s+"--top-bottom"},b807:function(t,e,i){},d961:function(t,e,i){"use strict";var n=i("2638"),s=i.n(n),r=i("c31d"),o=i("d282"),a=i("ba31"),c=i("1325"),l=i("565f"),h=Object(o["a"])("search"),u=h[0],d=h[1],f=h[2];function b(t,e,i,n){function o(){if(i.label||e.label)return t("div",{class:d("label")},[i.label?i.label():e.label])}function h(){if(e.showAction)return t("div",{class:d("action"),attrs:{role:"button",tabindex:"0"},on:{click:s}},[i.action?i.action():e.actionText||f("cancel")]);function s(){i.action||(Object(a["a"])(n,"input",""),Object(a["a"])(n,"cancel"))}}var u={attrs:n.data.attrs,on:Object(r["a"])({},n.listeners,{keypress:function(t){13===t.keyCode&&(Object(c["c"])(t),Object(a["a"])(n,"search",e.value)),Object(a["a"])(n,"keypress",t)}})},b=Object(a["b"])(n);return delete b.attrs,t("div",s()([{class:d({"show-action":e.showAction}),style:{background:e.background}},b]),[t("div",{class:d("content",e.shape)},[o(),t(l["a"],s()([{attrs:{type:"search",border:!1,value:e.value,leftIcon:e.leftIcon,rightIcon:e.rightIcon,clearable:e.clearable},scopedSlots:{"left-icon":i["left-icon"],"right-icon":i["right-icon"]}},u]))]),h()])}b.props={value:String,label:String,rightIcon:String,actionText:String,showAction:Boolean,shape:{type:String,default:"square"},clearable:{type:Boolean,default:!0},background:{type:String,default:"#fff"},leftIcon:{type:String,default:"search"}},e["a"]=u(b)},f032:function(t,e,i){},f319:function(t,e,i){}}]);
//# sourceMappingURL=chunk-ff56e02c.86a1e8d6.js.map