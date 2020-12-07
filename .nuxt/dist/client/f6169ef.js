(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{181:function(t,e,n){"use strict";n.d(e,"f",(function(){return l})),n.d(e,"e",(function(){return d})),n.d(e,"b",(function(){return f})),n.d(e,"i",(function(){return m})),n.d(e,"h",(function(){return v})),n.d(e,"d",(function(){return h})),n.d(e,"j",(function(){return _})),n.d(e,"g",(function(){return j})),n.d(e,"a",(function(){return C})),n.d(e,"c",(function(){return O}));var r=n(58),c="/api/articles",o="/api/articles/feed",l=function(data){return Object(r.b)({method:"get",url:c,params:data})},d=function(t){return Object(r.b)({method:"get",url:"".concat(c,"/").concat(t)})},f=function(data){return Object(r.b)({method:"post",url:c,data:data})},m=function(t,data){return Object(r.b)({method:"put",url:"".concat(c,"/").concat(t),data:data})},v=function(data){return Object(r.b)({method:"get",url:o,params:data})},h=function(t){return Object(r.b)({method:"post",url:"".concat(c,"/").concat(t,"/favorite")})},_=function(t){return Object(r.b)({method:"delete",url:"".concat(c,"/").concat(t,"/favorite")})},j=function(t){return Object(r.b)({method:"get",url:"".concat(c,"/").concat(t,"/comments")})},C=function(t,data){return Object(r.b)({method:"post",url:"".concat(c,"/").concat(t,"/comments"),data:data})},O=function(t,e){return Object(r.b)({method:"delete",url:"".concat(c,"/").concat(t,"/comments/").concat(e)})}},182:function(t,e,n){"use strict";n.d(e,"d",(function(){return f})),n.d(e,"e",(function(){return m})),n.d(e,"c",(function(){return v})),n.d(e,"g",(function(){return h})),n.d(e,"b",(function(){return _})),n.d(e,"a",(function(){return j})),n.d(e,"f",(function(){return C}));var r=n(58),c="/api/users/login",o="/api/users",l="/api/user",d="api/profiles",f=function(data){return Object(r.b)({method:"post",url:c,data:data})},m=function(data){return Object(r.b)({method:"post",url:o,data:data})},v=function(){return Object(r.b)({method:"get",url:l})},h=function(data){return Object(r.b)({method:"put",url:l,data:data})},_=function(t){return Object(r.b)({method:"get",url:"".concat(d,"/").concat(t)})},j=function(t){return Object(r.b)({method:"post",url:"".concat(d,"/").concat(t,"/follow")})},C=function(t){return Object(r.b)({method:"delete",url:"".concat(d,"/").concat(t,"/follow")})}},257:function(t,e,n){"use strict";n.r(e);n(30),n(13),n(43);var r=n(41),c=(n(29),n(3)),o=n(182),l=n(181),d={name:"Article",props:{article:{type:Object,default:function(){return[]}}},methods:{handleFavoriteChange:function(article){return Object(c.a)(regeneratorRuntime.mark((function t(){var e,n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!article.disabled){t.next=3;break}return t.abrupt("return");case 3:return article.disabled=!0,e=article.slug,n=article.favorited?l.j:l.d,t.next=8,n(e);case 8:r=t.sent,Object.assign(article,r.data.article),article.disabled=!1,t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))()}}},f=n(20),m={name:"Articles",components:{Article:Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"article-preview"},[n("div",{staticClass:"article-meta"},[n("nuxt-link",{attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[n("img",{attrs:{src:t.article.author.image}})]),t._v(" "),n("div",{staticClass:"info"},[n("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[t._v("\n          "+t._s(t.article.author.username)+"\n        ")]),t._v(" "),n("span",{staticClass:"date"},[t._v(t._s(t._f("date")(t.article.createdAt,"MMMM DD, YYYY")))])],1),t._v(" "),n("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:t.article.favorited},attrs:{disabled:t.article.disabled},on:{click:function(e){return t.handleFavoriteChange(t.article)}}},[n("i",{staticClass:"ion-heart"}),t._v(" "+t._s(t.article.favoritesCount)+"\n      ")])],1),t._v(" "),n("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"article",params:{slug:t.article.slug}}}},[n("h1",[t._v(t._s(t.article.title))]),t._v(" "),n("p",[t._v(t._s(t.article.body))]),t._v(" "),n("span",[t._v("Read more...")])])],1)])}),[],!1,null,null,null).exports},props:{articles:{type:Array,default:function(){return[]}}}},v={name:"Profile",watchParams:["articleType","username"],components:{Articles:Object(f.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",this._l(this.articles,(function(article){return e("Article",{key:article.slug,attrs:{article:article}})})),1)}),[],!1,null,null,null).exports},data:function(){return{followLoading:!1}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,d,option,f,m,v,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,c=n.username,d=n.articleType,e.prev=2,20,0,option={limit:20,offset:0},"favorited"===d?option.favorited=c:option.author=c,e.next=9,Promise.all([Object(o.b)(c),Object(l.f)(option)]);case 9:return f=e.sent,m=Object(r.a)(f,2),v=m[0],(h=m[1]).data&&h.data.articles&&h.data.articles.forEach((function(t){t.disabled=!1})),e.abrupt("return",{profile:v.data.profile,articles:h.data.articles,articleType:d});case 17:return e.prev=17,e.t0=e.catch(2),console.log(e.t0),e.abrupt("return",{profile:{},articles:[],articleType:d});case 21:case"end":return e.stop()}}),e,null,[[2,17]])})))()},methods:{handleFollowChange:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r,c,l,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.profile,r=n.following,c=n.username,t.followLoading=!0,e.prev=2,!r){e.next=9;break}return e.next=6,Object(o.f)(c);case 6:e.t0=e.sent,e.next=12;break;case 9:return e.next=11,Object(o.a)(c);case 11:e.t0=e.sent;case 12:l=e.t0,data=l.data,console.log(data),t.profile=data.profile,e.next=21;break;case 18:e.prev=18,e.t1=e.catch(2),console.log(e.t1);case 21:t.followLoading=!1;case 22:case"end":return e.stop()}}),e,null,[[2,18]])})))()}}},h=Object(f.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile-page"},[n("div",{staticClass:"user-info"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[n("img",{staticClass:"user-img",attrs:{src:t.profile.image}}),t._v(" "),n("h4",[t._v(t._s(t.profile.name))]),t._v(" "),n("p",[t._v("\n              "+t._s(t.profile.bio)+"\n            ")]),t._v(" "),n("button",{staticClass:"btn btn-sm btn-outline-secondary action-btn",attrs:{disabled:t.followLoading},on:{click:t.handleFollowChange}},[n("i",{staticClass:"ion-plus-round"}),t._v("\n                "+t._s(t.profile.following?"Unfollow":"Follow")+"\n              "+t._s(t.profile.username)+"\n            ")])])])])]),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[n("div",{staticClass:"articles-toggle"},[n("ul",{staticClass:"nav nav-pills outline-active"},[n("li",{staticClass:"nav-item"},[n("nuxt-link",{staticClass:"nav-link",class:{active:"favorited"!==t.articleType},attrs:{to:{name:"profile"}}},[t._v("\n                  My Articles\n                ")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("nuxt-link",{staticClass:"nav-link",class:{active:"favorited"===t.articleType},attrs:{to:{name:"profile",params:{articleType:"favorited"}}}},[t._v("\n                  Favorited Articles\n                ")])],1)])]),t._v(" "),n("Articles",{attrs:{articles:t.articles}})],1)])])])}),[],!1,null,null,null);e.default=h.exports}}]);