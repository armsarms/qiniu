(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4399c5da"],{"1fd2":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"recommend"},[n("sticky",{attrs:{choice:1}}),n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},[n("crunchies",{attrs:{content:t.list}})],1)],1)},o=[],i=(n("ac6a"),n("bd86")),s=(n("2994"),n("2bdd")),c=n("bc3a"),l=n.n(c),d=n("cc43"),r=n("7241"),u=n("294e"),h={components:Object(i["a"])({crunchies:d["a"],sticky:r["a"]},s["a"].name,s["a"]),computed:{},data:function(){return{list:[],loading:!1,finished:!1,active:0,page:1,total:null}},mounted:function(){Object(u["a"])("GameList")},methods:{onLoad:function(){var t=this;this.loading=!0,l()({method:"post",url:this.VUE_APP_API+"getCard.do",data:{requestid:"mmap_game_rank_v1",currentPage:this.page++,totalRows:this.total},headers:{"Content-Type":"application/json",appname:"MM7.3.2.001.01_CTAndroid_JT",ua:"android-24-1080x2040-RNE-AL00"}}).then(function(a){var n=a.data.data.list;t.total=a.data.data.pageInfo.totalRows,console.log("resList",n),0==t.list.length?t.list=a.data.data.list:a.data.data.list.forEach(function(a,n,e){t.list.push(a)}),console.log("List",t.list),t.loading=!1,t.list.length>=a.data.data.pageInfo.totalRows&&(t.finished=!0)}).catch(function(t){console.log(t)})}}},f=h,p=(n("eaaa"),n("2877")),g=Object(p["a"])(f,e,o,!1,null,null,null);a["default"]=g.exports},"32e6":function(t,a,n){},eaaa:function(t,a,n){"use strict";var e=n("32e6"),o=n.n(e);o.a}}]);
//# sourceMappingURL=chunk-4399c5da.8aabc424.js.map