webpackJsonp([25],{"+Vpl":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:"slide-up",mode:"out-in"}},[n("mt-header",{directives:[{name:"show",rawName:"v-show",value:t.hasHeader,expression:"hasHeader"}],staticStyle:{position:"absolute",top:"0",width:"100%"}})],1),t._v(" "),n("router-view"),t._v(" "),n("transition",{attrs:{name:"slide-y",mode:"out-in"}},[n("mt-tabbar",{directives:[{name:"show",rawName:"v-show",value:t.hasTabs,expression:"hasTabs"}],attrs:{fixed:""},model:{value:t.$store.state.common.ui.tab,callback:function(e){t.$set(t.$store.state.common.ui,"tab",e)},expression:"$store.state.common.ui.tab"}},t._l(t.tabs,function(e,o){return n("mt-tab-item",{key:o,attrs:{id:e.id}},[n("i",{staticClass:"fa",class:e.icon,staticStyle:{"font-size":"24px"},attrs:{slot:"icon"},slot:"icon"}),t._v("\n        "+t._s(e.text)+"\n      ")])}),1)],1),t._v(" "),n("mt-popup",{staticStyle:{width:"100%",height:"50px","line-height":"50px",color:"#fff","text-align":"center",background:"rgba(0,0,0,0.5)"},attrs:{closeOnClickModal:!1,position:"top",modal:!0},model:{value:t.$store.state.common.ui.popupTop,callback:function(e){t.$set(t.$store.state.common.ui,"popupTop",e)},expression:"$store.state.common.ui.popupTop"}},[t._v("\n    "+t._s(t.$store.state.common.ui.popupText)+"\n  ")]),t._v(" "),n("mt-popup",{staticStyle:{width:"100%",height:"100%"},attrs:{"popup-transition":"popup-fade"},model:{value:t.$store.state.common.version.popupVersion,callback:function(e){t.$set(t.$store.state.common.version,"popupVersion",e)},expression:"$store.state.common.version.popupVersion"}},[n("mt-header",{attrs:{title:"版本更新提示"}},[n("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.back},slot:"left"},[n("span",[t._v("返回")])])],1),t._v(" "),n("div",{staticStyle:{padding:"15px","line-height":"30px","overflow-y":"auto"},style:{height:t.screenHeight-140+"px"}},[n("span",{staticStyle:{color:"#4caf50"}},[t._v("本次更新内容（"+t._s(t.appVersion)+" -> "+t._s(t.$store.state.common.version.nextVersion)+"）：")]),t._v(" "),t._l(t.$store.state.common.version.description,function(e){return n("div",{staticStyle:{"font-size":"14px"}},[t._v(t._s(e))])}),t._v(" "),n("div",{staticStyle:{position:"fixed",left:"5%",padding:"15px 0",bottom:"0",width:"90%"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.common.version.updating,expression:"$store.state.common.version.updating"}]},[n("mt-progress",{attrs:{value:t.$store.state.common.version.progress,"bar-height":5}}),t._v(" "),""==t.$store.state.common.version.updatingText?n("div",{staticClass:"center"},[t._v("更新进度："),n("span",{staticStyle:{display:"inline-block",width:"46px","text-align":"right"}},[t._v(t._s(t.$store.state.common.version.progress+"%"))])]):t._e(),t._v(" "),""!=t.$store.state.common.version.updatingText?n("div",{staticClass:"center"},[t._v(t._s(t.$store.state.common.version.updatingText))]):t._e()],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.common.version.updating,expression:"!$store.state.common.version.updating"}]},[n("mt-button",{attrs:{type:"primary",size:"large"},on:{click:t.toggleUpdating}},[t._v("立即更新")])],1)])],2)],1)],1)},a=[],i={render:o,staticRenderFns:a};e.a=i},"+hXE":function(t,e){},"+tBs":function(t,e,n){"use strict";e.a=[{name:"form",path:"form",meta:{login:!1,hasFooter:!1},component:function(t){n.e(3).then(function(){return t(n("BeRe"))}.bind(null,n)).catch(n.oe)}}]},0:function(t,e,n){t.exports=n("NHnr")},"0dS3":function(t,e,n){"use strict";e.a=[{name:"map",path:"map",meta:{login:!1,hasFooter:!1},component:function(t){n.e(19).then(function(){return t(n("t1kT"))}.bind(null,n)).catch(n.oe)}}]},"0xDb":function(t,e,n){"use strict";var o=n("TuU3"),a=n("4/BI"),i=n("3pLw"),r=n("jg9f"),u=n("Thh0"),c=(n("uiUg"),{cache:o.a,format:a.a,http:i.a,ui:r.a,version:u.a});e.a=c},"1sIE":function(t,e,n){"use strict";e.a=[{name:"zoom",path:"zoom",meta:{login:!1,hasFooter:!1},component:function(t){n.e(11).then(function(){return t(n("LsPf"))}.bind(null,n)).catch(n.oe)}}]},"2qc7":function(t,e,n){"use strict";e.a=[{name:"upload",path:"upload",meta:{login:!1},component:function(t){n.e(13).then(function(){return t(n("WiDM"))}.bind(null,n)).catch(n.oe)}}]},"3pLw":function(t,e,n){"use strict";var o=n("mtWM"),a=n.n(o),i=n("TuU3"),r=n("YtJ0"),u=n("MIpE");n("Av7u");window.axios=a.a;var c=a.a.create({method:"post",timeout:6e4,withCredentials:!0,headers:{post:{"Content-Type":"application/x-www-form-urlencoded"}},transformRequest:[function(t){var e="";for(var n in t)e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n])+"&";return e}]});c.interceptors.request.use(function(t){var e=i.a.get("user"),o={head:{url:t.url,debug:!0,userId:e?e.userId:null,token:i.a.get("token"),timestamp:(new Date).getTime()},body:{data:t.data}};return console.log("\n【request:"+t.url+"】",o,"\n\n"),t.url=window.Config.server+t.url,t.data={request:n.i(u.a)(JSON.stringify(o),n.i(u.b)(Config.key))},t},function(t){return console.log(t),Promise.reject(t)}),c.interceptors.response.use(function(t){var e=n.i(u.c)(t.data.response,n.i(u.b)(Config.key));t.data=JSON.parse(e),console.log("\n【response:"+t.config.url+"】",t,"\n\n"),200!=t.data.head.status&&r.a.commit("TOGGLE_POPUP",{visible:!0,text:t.data.head.msg,duration:3e3});var o=t.data.head.token;return i.a.set("token",o||i.a.get("token")),t},function(t){return console.log(t),Promise.reject(t)}),e.a=c},"4/BI":function(t,e,n){"use strict";Date.prototype.format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t};var o={toDate:function(t,e){return e||(e="yyyy-MM-dd HH:mm:ss"),t.format(e)},parseDate:function(t){return new Date(t.replace("-","/"))}};e.a=o},"48zQ":function(t,e,n){"use strict";function o(t){n("7PFa")}var a=n("o99s"),i=n("+Vpl"),r=n("VU/8"),u=o,c=r(a.a,i.a,!1,u,null,null);e.a=c.exports},"5L7Y":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:t.transitionName,mode:"out-in"}},[n("keep-alive",{attrs:{include:t.keepAlive}},[n("router-view")],1)],1)],1)},a=[],i={render:o,staticRenderFns:a};e.a=i},"5dKJ":function(t,e,n){"use strict";e.a=[{name:"list",path:"list",meta:{login:!1,hasFooter:!1},component:function(t){n.e(14).then(function(){return t(n("X5+7"))}.bind(null,n)).catch(n.oe)}}]},"6aeu":function(t,e){},"7PFa":function(t,e){},"8RzN":function(t,e,n){"use strict";e.a=[{name:"chat",path:"chat",meta:{login:!1,hasFooter:!1},component:function(t){n.e(5).then(function(){return t(n("T5Y6"))}.bind(null,n)).catch(n.oe)}}]},B17L:function(t,e,n){"use strict";e.a=[{name:"contact",path:"contact",meta:{login:!1,hasFooter:!1},component:function(t){n.e(16).then(function(){return t(n("+/HG"))}.bind(null,n)).catch(n.oe)}}]},C9LJ:function(t,e,n){"use strict";function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a,i=n("TuU3"),r=["LOGIN","LOGOUT","TOGGLE_HEADER","TOGGLE_FOOTER","TOGGLE_TABS","TOGGLE_LOADING","TOGGLE_POPUP","TOGGLE_NEXT_VERSION","TOGGLE_PROGRESS","TOGGLE_UPDATING","TOGGLE_POPUP_VERSION","TOGGLE_UPDATING_TEXT","TOGGLE_DESCRIPTION"],u={},c=!0,s=!1,l=void 0;try{for(var m,p=r[Symbol.iterator]();!(c=(m=p.next()).done);c=!0){var f=m.value;u[f]=f}}catch(t){s=!0,l=t}finally{try{!c&&p.return&&p.return()}finally{if(s)throw l}}var d={app:{},ui:{hasHeader:!1,hasFooter:!0,fixFooter:!0,hasTabs:!1,tab:"home",loading:!1,popupTop:!1,popupText:"",popupDuration:null},version:{nextVersion:"",popupVersion:!1,updating:!1,progress:0,updatingText:"",description:[]},user:i.a.get("user"),userSetting:i.a.get("userSetting")},h={hasHeader:function(){return d.ui.hasHeader},hasFooter:function(){return d.ui.hasFooter},fixFooter:function(){return d.ui.fixFooter},hasTabs:function(){return d.ui.hasTabs},isLoading:function(){return d.ui.loading},getVersion:function(){return d.app.version}},g={},v=(a={},o(a,u.LOGIN,function(t,e){i.a.set("user",e.user),i.a.set("userSetting",e.userSetting),t.user=e.user,t.userSetting=e.userSetting}),o(a,u.LOGOUT,function(t){i.a.clear(),t.user=null,t.userSetting=null}),o(a,u.TOGGLE_HEADER,function(t,e){t.ui.hasHeader=e}),o(a,u.TOGGLE_FOOTER,function(t,e){t.ui.hasFooter=e}),o(a,u.TOGGLE_TABS,function(t,e){t.ui.hasTabs=e.flag,t.ui.tab=e.tab}),o(a,u.TOGGLE_LOADING,function(t,e){t.ui.loading=e}),o(a,u.TOGGLE_POPUP,function(t,e){t.ui.popupTop=e.visible,t.ui.popupText=e.text,e.duration&&setTimeout(function(){t.ui.popupTop=!1,t.ui.popupText="",t.ui.popupDuration=null},e.duration)}),o(a,u.TOGGLE_NEXT_VERSION,function(t,e){t.version.nextVersion=e}),o(a,u.TOGGLE_PROGRESS,function(t,e){t.version.progress=e}),o(a,u.TOGGLE_UPDATING,function(t,e){t.version.updating=e}),o(a,u.TOGGLE_POPUP_VERSION,function(t,e){t.version.popupVersion=e}),o(a,u.TOGGLE_UPDATING_TEXT,function(t,e){t.version.updatingText=e}),o(a,u.TOGGLE_DESCRIPTION,function(t,e){t.version.description=e}),a);e.a={state:d,getters:h,actions:g,mutations:v}},Cz6C:function(t,e){},Hrkw:function(t,e,n){"use strict";e.a=[{name:"workflow",path:"workflow",meta:{login:!1,hasFooter:!1},component:function(t){n.e(20).then(function(){return t(n("QcW+"))}.bind(null,n)).catch(n.oe)}}]},IqcW:function(t,e,n){"use strict";e.a=[{name:"dialog",path:"dialog",meta:{login:!1,hasFooter:!1},component:function(t){n.e(12).then(function(){return t(n("A6/F"))}.bind(null,n)).catch(n.oe)}}]},MIpE:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"c",function(){return i}),n.d(e,"b",function(){return r});var o=n("Av7u"),a=function(t,e){var n=o.enc.Utf8.parse(e);return o.AES.encrypt(t,n,{mode:o.mode.ECB,padding:o.pad.Pkcs7}).ciphertext.toString(o.enc.Base64).replace(/[\r\n]/g,"")},i=function(t,e){var n=o.enc.Utf8.parse(e);return o.AES.decrypt({ciphertext:o.enc.Base64.parse(t.replace(/[\r\n]/g,""))},n,{mode:o.mode.ECB,padding:o.pad.Pkcs7}).toString(o.enc.Utf8)},r=function(t){t=o.enc.Base64.parse(t).toString(o.enc.Utf8).split("").reverse().join("");for(var e="",n=0,a=0;n<t.length;n++)e+=t[n],n+=a++%2+1;return e}},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("QmSG"),a=(n.n(o),n("7+uW")),i=n("0xDb"),r=n("48zQ"),u=n("YaEn"),c=n("YtJ0"),s=n("d8/S"),l=(n.n(s),n("WEav")),m=(n.n(l),n("NYxO")),p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};a.default.config.productionTip=!1,window.utils=i.a,window.Vue=a.default,a.default.mixin({data:function(){return{screenWidth:document.documentElement.clientWidth,screenHeight:document.documentElement.clientHeight}},methods:p({go:function(t){this.$router.push(t)},back:function(){u.a.goBack()}},n.i(m.a)({toggleHeader:"TOGGLE_HEADER",toggleFooter:"TOGGLE_FOOTER",toggleLoading:"TOGGLE_LOADING"}))}),window.vm=new a.default({el:"#app",router:u.a,store:c.a,template:"<App/>",components:{App:r.a}})},OgVB:function(t,e){},P25B:function(t,e,n){"use strict";e.a=[{name:"video",path:"video",meta:{login:!1,hasFooter:!1},component:function(t){n.e(21).then(function(){return t(n("AmbE"))}.bind(null,n)).catch(n.oe)}},{name:"publisher",path:"publisher",meta:{login:!1,hasFooter:!1},component:function(t){n.e(22).then(function(){return t(n("mQRn"))}.bind(null,n)).catch(n.oe)}},{name:"observer",path:"observer",meta:{login:!1,hasFooter:!1},component:function(t){n.e(18).then(function(){return t(n("L8Lp"))}.bind(null,n)).catch(n.oe)}}]},QNKx:function(t,e,n){"use strict";e.a=[{name:"login",path:"login",meta:{login:!1,hasFooter:!0,keepAlive:!0},component:function(t){n.e(9).then(function(){return t(n("NaOX"))}.bind(null,n)).catch(n.oe),setTimeout(function(){n.e(0).then(function(){n("h6qm")}).catch(n.oe)},Config.preload)}}]},QmSG:function(t,e){window.Config={appVersion:"1.0.4",nativeVersion:"1.0",server:"https://47.100.119.102/api",appDownloadUrl:"https://47.100.119.102/vue-app",chcpUrl:"https://47.100.119.102/vue-app/chcp.json",key:"dzg5czJyejd5NjFkN3g3MjNjc2QwamN3OXUxODFjb280YWE4djhvYmV1NW9lemUxMzFjdGFiYTZ0OXo5dXhkMWNrYzRvZHZ3NjcyMzZkdWU=",random:(new Date).getTime(),preload:1e3}},RN31:function(t,e,n){"use strict";e.a=[{name:"chart",path:"chart",meta:{login:!1,hasFooter:!1},component:function(t){n.e(2).then(function(){return t(n("M+8D"))}.bind(null,n)).catch(n.oe)}}]},RTGF:function(t,e,n){"use strict";e.a=[{name:"lock",path:"lock",meta:{login:!1,hasFooter:!1},component:function(t){n.e(6).then(function(){return t(n("PMpZ"))}.bind(null,n)).catch(n.oe)}}]},Thh0:function(t,e,n){"use strict";var o=n("OgVB"),a=(n.n(o),n("/Lyv")),i=n.n(a),r=n("YtJ0"),u={checkForUpdate:function(){u.getServerVersion().then(function(t){Config.nativeVersion!=t.data.nativeVersion?i.a.alert("当前版本过低，请安装最新版本！","版本更新").then(function(){window.open(Config.appDownloadUrl)}):Config.appVersion!=t.data.appVersion&&(r.a.commit("TOGGLE_POPUP_VERSION",!0),r.a.commit("TOGGLE_NEXT_VERSION",t.data.appVersion),r.a.commit("TOGGLE_DESCRIPTION",t.data.description))})},getServerVersion:function(){return axios.get(Config.chcpUrl+"?r="+Config.random)},fetchUpdate:function(){if(!window.chcp)return alert("未找到热更新插件！"),!1;chcp.fetchUpdate(function(t,e){if(console.log(e,e.config),t)return void console.log(t);if(e.totalNum){var n=parseInt(100*e.progress);console.log(n),r.a.commit("TOGGLE_PROGRESS",n),100==n&&(r.a.commit("TOGGLE_UPDATING_TEXT","正在安装新版本"),setTimeout(function(){u.installUpdate()},200))}},{"config-file":Config.chcpUrl})},installUpdate:function(){chcp.installUpdate(function(t){t?(r.a.commit("TOGGLE_UPDATING_TEXT","更新包安装失败"),alert(JSON.stringify(t))):r.a.commit("TOGGLE_POPUP",{visible:!0,text:"已经更新为最新版本",duration:3e3})})}};e.a=u},TuU3:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__security__=__webpack_require__("MIpE"),cache={set:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:86400;"string"!=typeof e&&(e=JSON.stringify(e)),e=JSON.stringify({value:e,expired:(new Date).getTime()+1e3*n}),localStorage.setItem(t,__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__security__.a)(e,__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__security__.b)(window.Config.key)))},get:function get(key){var value=localStorage.getItem(key);if(value)if(value=JSON.parse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__security__.c)(value,__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__security__.b)(window.Config.key))),value.expired>(new Date).getTime()){if(value=value.value,"{"==value.substr(0,1)||"["==value.substr(0,1))try{value=eval("("+value+")")}catch(t){console.log("error in get cache key:"+key+", value:"+value)}}else localStorage.removeItem(key),value=null;return value},removeItem:function(t){localStorage.removeItem(t)},clear:function(){localStorage.clear()}};__webpack_exports__.a=cache},"Vr/b":function(t,e,n){"use strict";e.a=[{name:"about",path:"about",meta:{login:!1,hasFooter:!0},component:function(t){n.e(1).then(function(){t(n("cEc9"))}.bind(null,n)).catch(n.oe)}},{name:"setting",path:"setting",meta:{login:!1,hasFooter:!0},component:function(t){n.e(17).then(function(){t(n("1Gtm"))}.bind(null,n)).catch(n.oe),n.e(1).then(function(){n("cEc9")}).catch(n.oe)}}]},WEav:function(t,e){},XDqQ:function(t,e){},Xk10:function(t,e,n){"use strict";function o(t){n("tmBS")}var a=n("gydA"),i=n("5L7Y"),r=n("VU/8"),u=o,c=r(a.a,i.a,!1,u,null,null);e.a=c.exports},YaEn:function(t,e,n){"use strict";function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var a=n("7+uW"),i=n("/ocq"),r=n("YtJ0"),u=n("Xk10"),c=n("QNKx"),s=n("roEk"),l=n("5dKJ"),m=n("RN31"),p=n("B17L"),f=n("+tBs"),d=n("lteJ"),h=n("RTGF"),g=n("u9Kv"),v=n("oz5U"),_=n("0dS3"),b=n("IqcW"),O=n("8RzN"),T=n("P25B"),E=n("Vr/b"),G=n("2qc7"),y=n("m2qh"),w=n("1sIE"),x=n("Hrkw"),L=n("m3lF");a.default.use(i.a),i.a.prototype.goBack=function(){this.isBack=!0,window.history.go(-1)};var k=new i.a({routes:[{path:"/",redirect:"/page/login"},{path:"/page",component:u.a,children:[].concat(o(c.a),o(s.a),o(l.a),o(m.a),o(p.a),o(f.a),o(d.a),o(h.a),o(g.a),o(v.a),o(_.a),o(b.a),o(O.a),o(T.a),o(E.a),o(G.a),o(y.a),o(w.a),o(x.a),o(L.a))}]}),P={},N=!1,S=document.querySelector(".loader-box"),U=void 0,A=void 0;k.beforeEach(function(t,e,n){P[t.name]||-1!==S.className.indexOf("fadeOut")&&(U=setTimeout(function(){S.style.display="block",A=setTimeout(function(){S.className=S.className.replace(" fadeOut","")})},100)),0==t.meta.login||r.a.state.common.user?(console.log("next"),n()):(console.log("to login"),r.a.commit("TOGGLE_POPUP",{visible:!0,text:"请先登录！",duration:3e3}),n("/page/login"),S.className+=" fadeOut",setTimeout(function(){S.style.display="none"},500))}),k.afterEach(function(t,e){clearTimeout(A),clearTimeout(U),P[t.name]=!0,r.a.commit("TOGGLE_HEADER",0!=t.meta.hasHeader),r.a.commit("TOGGLE_FOOTER",0!=t.meta.hasFooter),r.a.commit("TOGGLE_TABS",{flag:1==t.meta.hasTabs,tab:t.name}),N?(-1===S.className.indexOf("fadeOut")&&setTimeout(function(){S.className+=" fadeOut"},500),setTimeout(function(){S.style.display="none"},1e3)):(N=!0,-1===S.className.indexOf("fadeOut")&&(S.className+=" fadeOut",setTimeout(function(){S.style.display="none"},500)))}),e.a=k},YtJ0:function(t,e,n){"use strict";var o=n("7+uW"),a=n("NYxO"),i=n("C9LJ");o.default.use(a.c),e.a=new a.c.Store({modules:{common:i.a}})},"d8/S":function(t,e){},f1Vh:function(t,e){},gMcV:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW");n.e(4).then(function(){n("v5o6").attach(document.body);var t=n("fKbY").default,e=n("96WI").default,a=n("3JdW").default,i=n("7YS2").default,r=n("S9KX").default,u=n("B7Ql").default,c=n("W/os").default,s=n("ZQVe").default,l=n("Axha").default,m=n("dpOZ").default,p=n("236b").default,f=n("w3jz").default,d=n("NVmV").default,h=n("aMxQ").default,g=n("4VPn").default,v=n("PJK7").default,_=n("IBPZ").default,b=n("60Ef").default,O=n("qCpv").default,T=n("oobK").default,E=n("gAYL").default,G=n("IqSH").default,y=n("Ttp7").default,w=n("fUV+").default,x=n("QKkm").default,L=n("uOA4").default,k=n("dU8H").default;o.default.use(f),o.default.component(t.name,t),o.default.component(e.name,e),o.default.component(a.name,a),o.default.component(i.name,i),o.default.component(r.name,r),o.default.component(u.name,u),o.default.component(c.name,c),o.default.component(s.name,s),o.default.component(l.name,l),o.default.component(m.name,m),o.default.component(p.name,p),o.default.component(d.name,d),o.default.component(h.name,h),o.default.component(g.name,g),o.default.component(v.name,v),o.default.component(_.name,_),o.default.component(b.name,b),o.default.component(O.name,O),o.default.component(T.name,T),o.default.component(E.name,E),o.default.component(G.name,G),o.default.component(y.name,y),o.default.component(w.name,w),o.default.component(x.name,x),o.default.component(L.name,L),o.default.component(k.name,k),window.lazyLibsLoaded=!0;var P=window.vm.$root.$children[0].$children.length;window.vm.$root.$children[0].$children[P-1].$children[0].$forceUpdate()}.bind(null,n)).catch(n.oe)},gydA:function(t,e,n){"use strict";var o=n("YaEn"),a=n("NYxO"),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};e.a={name:"page",data:function(){var t=location.href.substr(location.href.indexOf("#")+1),e=[];return"/page/login"===t?e.push("/page/login"):"/page/home"===t?e.push("/page/login","/page/home"):e.push("/page/login","/page/home",t),{keepAlive:["login","home"],urlArray:e,transitionName:"animate-in"}},computed:i({},n.i(a.b)(["hasHeader","hasTabs","hasFooter","fixFooter","isLoading"])),beforeRouteUpdate:function(t,e,n){(this.urlArray.length>1&&this.urlArray[this.urlArray.length-2]==t.path&&(this.$router.isBack=!0),this.$router.isBack?(this.transitionName="animate-out",this.$router.isBack=!1):this.transitionName="animate-in",t.meta.keepAlive&&-1==this.keepAlive.indexOf(t.meta.name)&&this.keepAlive.push(t.name),window.lazyLibsLoaded||-1!=["login"].indexOf(t.name))?n():function t(){setTimeout(function(){window.lazyLibsLoaded?n():t()},200)}()},created:function(){var t=this;o.a.afterEach(function(e,n){t.urlArray.length>1&&t.urlArray[t.urlArray.length-2]==e.path?t.urlArray.pop():t.urlArray.push(e.path)})}}},jg9f:function(t,e,n){"use strict";var o={modal:function(t){var e;return{afterOpen:function(){e=document.scrollingElement.scrollTop,document.body.classList.add("modal-open"),document.body.style.top=-e+"px"},beforeClose:function(){document.body.classList.remove("modal-open"),document.scrollingElement.scrollTop=e}}}()};e.a=o},joTY:function(t,e){},lrMw:function(t,e){},lteJ:function(t,e,n){"use strict";e.a=[{name:"tab",path:"tab",meta:{login:!1,hasFooter:!1},component:function(t){n.e(15).then(function(){return t(n("sVk2"))}.bind(null,n)).catch(n.oe)}}]},m2qh:function(t,e,n){"use strict";e.a=[{name:"browser",path:"browser",meta:{login:!1,hasFooter:!1},component:function(t){n.e(23).then(function(){return t(n("/1G5"))}.bind(null,n)).catch(n.oe)}}]},m3lF:function(t,e,n){"use strict";e.a=[{name:"signature",path:"signature",meta:{login:!1,hasFooter:!1},component:function(t){n.e(8).then(function(){return t(n("ro03"))}.bind(null,n)).catch(n.oe)}}]},o99s:function(t,e,n){"use strict";var o=n("Cz6C"),a=(n.n(o),n("dU8H")),i=n.n(a),r=n("+hXE"),u=(n.n(r),n("fUV+")),c=n.n(u),s=n("q/am"),l=(n.n(s),n("4VPn")),m=n.n(l),p=n("6aeu"),f=(n.n(p),n("PJK7")),d=n.n(f),h=n("XDqQ"),g=(n.n(h),n("Axha")),v=n.n(g),_=n("f1Vh"),b=(n.n(_),n("ZQVe")),O=n.n(b),T=n("y+mr"),E=(n.n(T),n("3JdW")),G=n.n(E),y=n("7+uW"),w=n("NYxO"),x=n("YtJ0"),L=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};y.default.component(G.a.name,G.a),y.default.component(O.a.name,O.a),y.default.component(v.a.name,v.a),y.default.component(d.a.name,d.a),y.default.component(m.a.name,m.a),y.default.component(c.a.name,c.a),y.default.component(i.a.name,i.a),e.a={name:"app",data:function(){return{appVersion:Config.appVersion,transitionName:"animate-in",tab:x.a.state.common.ui.tab||"home",tabs:[{id:"home",icon:"fa-home",text:"首页",url:"home"},{id:"contact",icon:"fa-address-book-o",text:"通讯录",url:"contact"},{id:"calendar",icon:"fa-calendar",text:"日历",url:"list"},{id:"setting",icon:"fa-cog",text:"设置",url:"setting"}]}},computed:L({},n.i(w.b)(["hasHeader","hasTabs","hasFooter","fixFooter","isLoading"])),methods:{toggleUpdating:function(){x.a.commit("TOGGLE_UPDATING",!0),utils.version.fetchUpdate()},back:function(){x.a.commit("TOGGLE_POPUP_VERSION",!1)}},watch:{"$store.state.common.ui.tab":function(t){this.go({name:t})}},created:function(){n("gMcV")},mounted:function(){document.addEventListener("deviceready",function(){utils.version.checkForUpdate()},!1)}}},oz5U:function(t,e,n){"use strict";e.a=[{name:"loading",path:"loading",meta:{login:!1,hasFooter:!1},component:function(t){n.e(10).then(function(){return t(n("hGVa"))}.bind(null,n)).catch(n.oe)}}]},"q/am":function(t,e){},roEk:function(t,e,n){"use strict";e.a=[{name:"home",path:"home",meta:{login:!1,hasFooter:!1,hasTabs:!0,keepAlive:!0},component:function(t){n.e(0).then(function(){return t(n("h6qm"))}.bind(null,n)).catch(n.oe)}}]},tmBS:function(t,e){},u9Kv:function(t,e,n){"use strict";e.a=[{name:"calendar",path:"calendar",meta:{login:!1,hasFooter:!1},component:function(t){n.e(7).then(function(){return t(n("F3mG"))}.bind(null,n)).catch(n.oe)}}]},uiUg:function(t,e,n){"use strict";var o=n("7+uW"),a=n("4/BI"),i=[],r=function(){return a.a.toDate(new Date)};o.default.config.errorHandler=function(t){i.push({time:r(),content:t.stack})},window.onerror=function(t,e,n,o,a){i.push({time:r(),content:a.stack})},window.addEventListener("error",function(t){i.push({time:r(),content:t.error.stack})}),setInterval(function(){if(i.length>0){i.length}},3e3)},"y+mr":function(t,e){}},[0]);