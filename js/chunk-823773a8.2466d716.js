(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-823773a8"],{"1f99":function(t,a,n){"use strict";n.r(a);var s,o=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"goods"},[n("div",[n("ul",{staticClass:"cl"},[n("li",[n("router-link",{staticClass:"exact",attrs:{to:"/recommend"}},[n("span",[t._v("热门推荐")])])],1),n("li",[n("router-link",{attrs:{to:"/storage"}},[n("span",[t._v("存号箱")])])],1)])]),n("van-list",{staticClass:"van-clearfix",attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.list,function(a){return n("van-cell",{key:a.pagAwardId},[n("router-link",{attrs:{to:"/gameDetail?id="+a.pagAwardId}},[n("img",{staticClass:"img-left",attrs:{src:a.icon}}),n("p",[n("span",[t._v(t._s(a.name))]),n("span",{staticClass:"gift"},[n("span",{staticClass:"count"},[t._v(t._s(a.amount))]),t._v(" 礼包\n          ")])])])],1)}),1)],1)},i=[],e=(n("ac6a"),n("bd86")),l=(n("c194"),n("7744")),c=(n("2994"),n("2bdd")),d=(n("204a"),n("bc3a")),r=n.n(d),u=n("704d"),p={components:(s={},Object(e["a"])(s,c["a"].name,c["a"]),Object(e["a"])(s,l["a"].name,l["a"]),s),data:function(){return{list:[],loading:!1,finished:!1,page:1}},mounted:function(){this.$route.query.phone&&Object(u["b"])("phone",decodeURIComponent(this.$route.query.phone))},methods:{onLoad:function(){var t=this;this.loading=!0,r.a.post("http://47.107.125.18/mssp_pps/maap/queryHotRecommendList.do",{activityId:190822080,page:this.page++,rows:5}).then(function(a){console.log("response",t.list),0==t.list.length?t.list=a.data.data.list:a.data.data.list.forEach(function(a,n,s){t.list.push(a)}),t.loading=!1,console.log("12",a.data.data.counts),t.list.length>=a.data.data.counts&&(t.finished=!0)}).catch(function(t){console.log(t)})}}},h=p,f=n("2877"),g=Object(f["a"])(h,o,i,!1,null,null,null);a["default"]=g.exports},"204a":function(t,a,n){}}]);
//# sourceMappingURL=chunk-823773a8.2466d716.js.map