(function(t){function e(e){for(var n,i,c=e[0],o=e[1],u=e[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,c=1;c<r.length;c++){var o=r[c];0!==s[o]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},s={app:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/Users-CRM-App/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"02f1":function(t,e,r){},4098:function(t,e,r){"use strict";var n=r("02f1"),s=r.n(n);s.a},"51ef":function(t,e,r){"use strict";var n=r("d6f3"),s=r.n(n);s.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("header",[r("div",{staticClass:"navbar"},[r("div",{staticClass:"container"},[r("div",{staticClass:"navbar-content"},[r("div",{staticClass:"logo"},[t._v("USER CRM")]),r("ul",{staticClass:"navbar-list"},t._l(t.links,(function(e){return r("li",{key:e.title,staticClass:"navbar-item"},[r("router-link",{staticClass:"navbar-link",attrs:{tittle:e.title,to:e.url}},[t._v(t._s(e.title))])],1)})),0)])])])]),r("router-view")],1)},a=[],i={data:function(){return{links:[{title:"Home",url:"/"},{title:"Users",url:"/users"}]}}},c=i,o=r("2877"),u=Object(o["a"])(c,s,a,!1,null,null,null),l=u.exports,f=r("8c4f"),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper-content wrapper-content--fixed"},[r("section",[r("div",{staticClass:"container"},[r("div",{staticClass:"home"},[r("h2",{staticClass:"home-title"},[t._v("В этом приложении:")]),r("p",{staticClass:"home-text"},[t._v("- Работа со сторонним API")]),r("p",{staticClass:"home-text"},[t._v("- Сбор данных через REST API")]),r("p",{staticClass:"home-text"},[t._v("- Сортировка данных")]),r("p",{staticClass:"home-text"},[t._v("- Пагинация данных")])])])])])}],v=(r("51ef"),{}),h=Object(o["a"])(v,p,d,!1,null,"6d00deff",null),g=h.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper-content wrapper-content--fixed"},[r("section",[r("div",{staticClass:"container"},[r("table",[r("thead",[r("tr",[r("th",{on:{click:function(e){return t.sort("name")}}},[t._v("Name ↓")]),r("th",{on:{click:function(e){return t.sort("age")}}},[t._v("Age ↓")]),r("th",{on:{click:function(e){return t.sort("gender")}}},[t._v("Gender ↓")])])]),r("tbody",t._l(t.usersSort,(function(e){return r("tr",{key:e.id},[r("td",[t._v(t._s(e.name.first))]),r("td",[t._v(t._s(e.dob.age))]),r("td",[t._v(t._s(e.gender))])])})),0)]),r("p",[t._v("debug: sort: "+t._s(t.currentSort)+", dir: "+t._s(t.currentSortDir))]),r("p",[t._v("page: "+t._s(t.page.current)+", length: "+t._s(t.page.length+1))])])]),r("section",[r("div",{staticClass:"container"},[r("div",{staticClass:"button-list"},[r("div",{staticClass:"btn btnPrimary",on:{click:t.prevPage}},[t._v(" ← ")]),r("div",{staticClass:"btn btnPrimary",on:{click:t.nextPage}},[t._v(" → ")])])])])])},b=[],m=(r("4de4"),r("bc3a")),C=r.n(m),S={data:function(){return{users:[],currentSort:"name",currentSortDir:"asc",page:{current:1,length:3}}},created:function(){var t=this;C.a.get("https://randomuser.me/api/?results=10&&nat=us,es&inc=name,dob,gender&noinfo").then((function(e){t.users=e.data.results})).catch((function(t){console.log(t)}))},computed:{usersSort:function(){var t=this;return this.users.sort((function(e,r){var n=1;switch("desc"===t.currentSortDir&&(n=-1),t.currentSort){case"name":e=e[t.currentSort].first,r=r[t.currentSort].first;break;case"age":e=e.dob[t.currentSort],r=r.dob[t.currentSort];break;case"gender":e=e[t.currentSort],r=r[t.currentSort];break}return e<r?-1*n:e>r?1*n:0})).filter((function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(t.page.current-1)*t.page.length,s=t.page.current*t.page.length;if(r>=n&&r<s)return!0}))}},methods:{sort:function(t){t===this.currentSort&&(this.currentSortDir="asc"===this.currentSortDir?"desc":"asc"),this.currentSort=t},prevPage:function(){this.page.current>1&&(this.page.current-=1)},nextPage:function(){this.page.current*this.page.length<this.users.length&&(this.page.current+=1)}}},y=S,w=(r("eace"),Object(o["a"])(y,_,b,!1,null,"ff55464e",null)),k=w.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper-content wrapper-content--fixed"},[r("section",[r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[t._v("PAGE NOT FOUND!")]),r("p",[t._v("Go to "),r("router-link",{staticClass:"link",attrs:{to:"/"}},[t._v("main page?")])],1)])])])},O=[],P=(r("4098"),{}),j=Object(o["a"])(P,x,O,!1,null,"5e2799be",null),E=j.exports;n["a"].use(f["a"]);var D=new f["a"]({routes:[{path:"/",name:"home",component:g},{path:"/users",name:"users",component:k},{path:"*",name:"notFound",component:E}]});r("c1c3");n["a"].config.productionTip=!1,new n["a"]({router:D,render:function(t){return t(l)}}).$mount("#app")},"6fe0":function(t,e,r){},c1c3:function(t,e,r){},d6f3:function(t,e,r){},eace:function(t,e,r){"use strict";var n=r("6fe0"),s=r.n(n);s.a}});