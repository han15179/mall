(function(t){function e(e){for(var r,a,o=e[0],u=e[1],s=e[2],l=0,f=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},c={app:0},i=[];function o(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-39adcba9":"f1e90889","chunk-04d5cd4a":"739abf61","chunk-10e620ea":"716ef21a","chunk-197f4b38":"3716fa96","chunk-875704be":"cd6f2cd3","chunk-1f7df95d":"f771f46f","chunk-5472005f":"a97edf09"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-39adcba9":1,"chunk-10e620ea":1,"chunk-197f4b38":1,"chunk-875704be":1,"chunk-1f7df95d":1,"chunk-5472005f":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-39adcba9":"e440728d","chunk-04d5cd4a":"31d6cfe0","chunk-10e620ea":"f930c756","chunk-197f4b38":"a82c6811","chunk-875704be":"45ab1594","chunk-1f7df95d":"983c6003","chunk-5472005f":"3d76a0e5"}[t]+".css",c=u.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var s=i[o],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){s=f[o],l=s.getAttribute("data-href");if(l===r||l===c)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||c,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],d.parentNode.removeChild(d),n(i)},d.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[t]=0})));var r=c[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=c[t]=[e,n]}));e.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=o(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=c[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}c[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0ece":function(t,e,n){"use strict";n("fd3d")},"1f92":function(t,e,n){t.exports=n.p+"img/cart_active.ead27541.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"Detail"}},[n("router-view")],1),n("main-tab-bar")],1)},c=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("tab-bar",[r("tab-bar-item",{attrs:{path:"/home","active-color":"#6699ff"}},[r("img",{attrs:{slot:"item-icon",src:n("9443"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("b508"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("首页")])]),r("tab-bar-item",{attrs:{path:"/category","active-color":"#6699ff"}},[r("img",{attrs:{slot:"item-icon",src:n("57cd"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("a5ef"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("分类")])]),r("tab-bar-item",{attrs:{path:"/cart","active-color":"#6699ff"}},[r("img",{attrs:{slot:"item-icon",src:n("d1c9"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("1f92"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("购物车")])]),r("tab-bar-item",{attrs:{path:"/profile","active-color":"#6699ff"}},[r("img",{attrs:{slot:"item-icon",src:n("e55d"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("d151"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])])],1)],1)},o=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},s=[],l={name:"TabBar"},f=l,d=(n("0ece"),n("2877")),p=Object(d["a"])(f,u,s,!1,null,"d8420202",null),m=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item",on:{click:t.itemClick}},[t.isActive?n("div",[t._t("item-icon-active")],2):n("div",[t._t("item-icon")],2),n("div",{style:t.activeStyle},[t._t("item-text")],2)])},v=[],b=(n("ac1f"),n("5319"),{name:"TabBarItem",props:{path:String,activeColor:{type:String,default:"red"}},data:function(){return{}},computed:{isActive:function(){return-1!==this.$route.path.indexOf(this.path)},activeStyle:function(){return this.isActive?{color:this.activeColor}:{}}},methods:{itemClick:function(){this.$router.replace(this.path)}}}),g=b,k=(n("afc0"),Object(d["a"])(g,h,v,!1,null,"43c45d0c",null)),y=k.exports,x={name:"MainTabBar",components:{TabBar:m,TabBarItem:y}},_=x,w=Object(d["a"])(_,i,o,!1,null,"57f57143",null),O=w.exports,j={name:"App",components:{MainTabBar:O}},C=j,P=(n("034f"),Object(d["a"])(C,a,c,!1,null,null,null)),S=P.exports,T=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),E=function(){return Promise.all([n.e("chunk-39adcba9"),n.e("chunk-04d5cd4a"),n.e("chunk-197f4b38")]).then(n.bind(null,"b3d7"))},L=function(){return Promise.all([n.e("chunk-39adcba9"),n.e("chunk-04d5cd4a"),n.e("chunk-10e620ea")]).then(n.bind(null,"bb51"))},A=function(){return Promise.all([n.e("chunk-39adcba9"),n.e("chunk-1f7df95d")]).then(n.bind(null,"c228"))},B=function(){return n.e("chunk-5472005f").then(n.bind(null,"3b42"))},$=function(){return Promise.all([n.e("chunk-39adcba9"),n.e("chunk-04d5cd4a"),n.e("chunk-875704be")]).then(n.bind(null,"6ab7"))};r["a"].use(T["a"]);var M=[{path:"",redirect:"/home"},{path:"/home",component:E},{path:"/category",component:L},{path:"/cart",component:A},{path:"/profile",component:B},{path:"/detail/:iid",component:$}],N=new T["a"]({mode:"history",routes:M}),D=N,I=n("b85c"),q=n("2f62");r["a"].use(q["a"]);var J=new q["a"].Store({state:{cartList:[]},mutations:{addCart:function(t,e){var n,r=null,a=Object(I["a"])(t.cartList);try{for(a.s();!(n=a.n()).done;){var c=n.value;c.iid===e.iid&&(r=c)}}catch(i){a.e(i)}finally{a.f()}r?r.count+=1:(e.count=1,e.checked=!1,t.cartList.push(e)),console.log(t.cartList)}},getters:{cartList:function(t){return t.cartList},cartCount:function(t,e){return e.cartList.length}}}),F=J;r["a"].config.productionTip=!1,r["a"].prototype.$bus=new r["a"],new r["a"]({render:function(t){return t(S)},router:D,store:F}).$mount("#app")},"57cd":function(t,e,n){t.exports=n.p+"img/category.11368804.svg"},"85ec":function(t,e,n){},9443:function(t,e,n){t.exports=n.p+"img/home.43fd8010.svg"},a5ef:function(t,e,n){t.exports=n.p+"img/category_active.2e321aa8.svg"},ac7b:function(t,e,n){},afc0:function(t,e,n){"use strict";n("ac7b")},b508:function(t,e,n){t.exports=n.p+"img/home_active.4644115d.svg"},d151:function(t,e,n){t.exports=n.p+"img/profile_active.314c579b.svg"},d1c9:function(t,e,n){t.exports=n.p+"img/cart.fbc81098.svg"},e55d:function(t,e,n){t.exports=n.p+"img/profile.c2b75dfe.svg"},fd3d:function(t,e,n){}});
//# sourceMappingURL=app.7c23185e.js.map