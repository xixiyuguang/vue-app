webpackJsonp([17],{"+hAH":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:t.transitionName,mode:"out-in"}},[n("keep-alive",{attrs:{include:t.keepAlive}},[n("router-view")],1)],1)],1)},a=[],i={render:o,staticRenderFns:a};e.a=i},"+tBs":function(t,e,n){"use strict";e.a=[{name:"form",path:"form",meta:{login:!1,hasFooter:!1},component:function(t){n.e(1).then(function(){return t(n("BeRe"))}.bind(null,n)).catch(n.oe)}}]},"0dS3":function(t,e,n){"use strict";e.a=[{name:"map",path:"map",meta:{login:!1,hasFooter:!1},component:function(t){n.e(10).then(function(){return t(n("t1kT"))}.bind(null,n)).catch(n.oe)}}]},"0xDb":function(t,e,n){"use strict";var o=n("TuU3"),a=n("4/BI"),i=n("3pLw"),c=n("jg9f"),r=n("Thh0"),s={cache:o.a,format:a.a,http:i.a,ui:c.a,version:r.a};e.a=s},"3pLw":function(t,e,n){"use strict";var o=n("//Fk"),a=n.n(o),i=n("mvHQ"),c=n.n(i),r=n("mtWM"),s=n.n(r),u=n("TuU3"),l=s.a.create({method:"post",timeout:6e4,withCredentials:!0,headers:{post:{"Content-Type":"application/x-www-form-urlencoded"}},transformRequest:[function(t){var e="";for(var n in t)e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n])+"&";return e}]});l.interceptors.request.use(function(t){var e=u.a.get("user"),n={head:{url:t.url,debug:!0,userId:e?e.userId:null,token:u.a.get("token")},body:{data:t.data}};return t.url=window.Config.server+t.url,t.data={request:c()(n)},t},function(t){return console.log(t),a.a.reject(t)}),l.interceptors.response.use(function(t){var e=t.data.head.token;return u.a.set("token",e||u.a.get("token")),t},function(t){return console.log(t),a.a.reject(t)}),e.a=l},"4/BI":function(t,e,n){"use strict";Date.prototype.format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t};var o={toDate:function(t,e){return e||(e="yyyy-MM-dd HH:mm:ss"),t.format(e)},parseDate:function(t){return new Date(t.replace("-","/"))}};e.a=o},"48zQ":function(t,e,n){"use strict";function o(t){n("X8UB")}var a=n("o99s"),i=n("smDr"),c=n("VU/8"),r=o,s=c(a.a,i.a,!1,r,null,null);e.a=s.exports},"5dKJ":function(t,e,n){"use strict";e.a=[{name:"list",path:"list",meta:{login:!1,hasFooter:!1},component:function(t){n.e(12).then(function(){return t(n("X5+7"))}.bind(null,n)).catch(n.oe)}}]},"8RzN":function(t,e,n){"use strict";e.a=[{name:"chat",path:"chat",meta:{login:!1,hasFooter:!1},component:function(t){n.e(4).then(function(){return t(n("T5Y6"))}.bind(null,n)).catch(n.oe)}}]},B17L:function(t,e,n){"use strict";e.a=[{name:"contact",path:"contact",meta:{login:!1,hasFooter:!1},component:function(t){n.e(13).then(function(){return t(n("+/HG"))}.bind(null,n)).catch(n.oe)}}]},C9LJ:function(t,e,n){"use strict";var o,a=n("BO1k"),i=n.n(a),c=n("bOdI"),r=n.n(c),s=n("0xDb"),u=["LOGIN","LOGOUT","TOGGLE_HEADER","TOGGLE_FOOTER","TOGGLE_TABS","TOGGLE_LOADING","TOGGLE_POPUP","UPDATE_VERSION"],l={},m=!0,p=!1,h=void 0;try{for(var f,d=i()(u);!(m=(f=d.next()).done);m=!0){var g=f.value;l[g]=g}}catch(t){p=!0,h=t}finally{try{!m&&d.return&&d.return()}finally{if(p)throw h}}var v={app:{version:""},ui:{hasHeader:!1,hasFooter:!0,fixFooter:!0,hasTabs:!1,tab:"home",loading:!1,popupTop:!1,popupText:"",popupDuration:null},user:s.a.cache.get("user"),userSetting:s.a.cache.get("userSetting")},_={hasHeader:function(){return v.ui.hasHeader},hasFooter:function(){return v.ui.hasFooter},fixFooter:function(){return v.ui.fixFooter},hasTabs:function(){return v.ui.hasTabs},isLoading:function(){return v.ui.loading},getVersion:function(){return v.app.version}},b={},T=(o={},r()(o,l.UPDATE_VERSION,function(t,e){s.a.cache.set("version",e),t.app.version=e}),r()(o,l.LOGIN,function(t,e){s.a.cache.set("user",e.user),s.a.cache.set("userSetting",e.userSetting),t.user=e.user,t.userSetting=e.userSetting}),r()(o,l.LOGOUT,function(t){s.a.cache.clear(),t.user=null,t.userSetting=null}),r()(o,l.TOGGLE_HEADER,function(t,e){t.ui.hasHeader=e}),r()(o,l.TOGGLE_FOOTER,function(t,e){t.ui.hasFooter=e}),r()(o,l.TOGGLE_TABS,function(t,e){t.ui.hasTabs=e.flag,t.ui.tab=e.tab}),r()(o,l.TOGGLE_LOADING,function(t,e){t.ui.loading=e}),r()(o,l.TOGGLE_POPUP,function(t,e){t.ui.popupTop=e.visible,t.ui.popupText=e.text,e.duration&&setTimeout(function(){t.ui.popupTop=!1,t.ui.popupText="",t.ui.popupDuration=null},e.duration)}),o);e.a={state:v,getters:_,actions:b,mutations:T}},CBhg:function(t,e){},IqcW:function(t,e,n){"use strict";e.a=[{name:"dialog",path:"dialog",meta:{login:!1,hasFooter:!1},component:function(t){n.e(5).then(function(){return t(n("A6/F"))}.bind(null,n)).catch(n.oe)}}]},"MjR/":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lxt-page",style:{height:t.screenHeight+"px"}},[n("mt-header",{attrs:{title:"登录"}},[n("mt-button",{staticClass:"fa fa-fw fa-home",attrs:{slot:"left"},on:{click:function(e){t.go("home")}},slot:"left"}),t._v(" "),n("mt-button",{staticClass:"fa fa-fw fa-refresh",attrs:{slot:"right"},on:{click:function(e){t.check()}},slot:"right"})],1),t._v(" "),n("div",[n("mt-field",{attrs:{label:"账　号",placeholder:"请输入用户名"},model:{value:t.model.username,callback:function(e){t.$set(t.model,"username",e)},expression:"model.username"}}),t._v(" "),n("mt-field",{attrs:{label:"密　码",placeholder:"请输入密码",type:"password"},model:{value:t.model.password,callback:function(e){t.$set(t.model,"password",e)},expression:"model.password"}}),t._v(" "),n("mt-field",{attrs:{label:"验证码",placeholder:"请输入验证码"},model:{value:t.model.captcha,callback:function(e){t.$set(t.model,"captcha",e)},expression:"model.captcha"}},[n("img",{attrs:{src:t.captchaBase64,height:"36px",width:"100px"},on:{click:t.getCaptcha}})]),t._v(" "),n("div",{staticClass:"pd-md"},[n("mt-button",{attrs:{type:"primary",size:"large"},on:{click:t.login}},[t._v("登　录")])],1),t._v(" "),n("mt-field",{attrs:{label:"服务器地址"},model:{value:t.server,callback:function(e){t.server=e},expression:"server"}}),t._v(" "),n("mt-field",{attrs:{label:"热更新地址"},model:{value:t.chcpUrl,callback:function(e){t.chcpUrl=e},expression:"chcpUrl"}}),t._v(" "),n("div",{staticStyle:{position:"absolute",width:"100%",bottom:"0",color:"gray","font-size":"12px","text-align":"center"}},[t._v("版本号："+t._s(t.$store.state.common.app.version))])],1),t._v(" "),n("mt-popup",{staticStyle:{width:"100%",height:"50px","line-height":"50px",color:"#fff","text-align":"center",background:"rgba(0,0,0,0.5)"},attrs:{position:"top",modal:!1},model:{value:t.popupTop,callback:function(e){t.popupTop=e},expression:"popupTop"}},[t._v("\n    "+t._s(t.msg)+"\n  ")])],1)},a=[],i={render:o,staticRenderFns:a};e.a=i},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("Dd8w"),a=n.n(o),i=n("v5o6"),c=n.n(i),r=n("7+uW"),s=n("48zQ"),u=n("YaEn"),l=n("YtJ0"),m=n("d8/S"),p=(n.n(m),n("WEav")),h=(n.n(p),n("0xDb")),f=n("NYxO"),d=n("Au9i");n.n(d);window.Config={native_version:"1.0",server:"http://localhost:8080/lxt-server",appUrl:"https://chenjia.github.io/vue-app/demo/index.html",chcpUrl:"https://chenjia.github.io/vue-app/demo/chcp.json"},r.default.component(d.Actionsheet.name,d.Actionsheet),r.default.component(d.Badge.name,d.Badge),r.default.component(d.Button.name,d.Button),r.default.component(d.Cell.name,d.Cell),r.default.component(d.CellSwipe.name,d.CellSwipe),r.default.component(d.Checklist.name,d.Checklist),r.default.component(d.DatetimePicker.name,d.DatetimePicker),r.default.component(d.Field.name,d.Field),r.default.component(d.Header.name,d.Header),r.default.component(d.IndexList.name,d.IndexList),r.default.component(d.IndexSection.name,d.IndexSection),r.default.component(d.Loadmore.name,d.Loadmore),r.default.component(d.Popup.name,d.Popup),r.default.component(d.Progress.name,d.Progress),r.default.component(d.Radio.name,d.Radio),r.default.component(d.Range.name,d.Range),r.default.component(d.Search.name,d.Search),r.default.component(d.Spinner.name,d.Spinner),r.default.component(d.Swipe.name,d.Swipe),r.default.component(d.SwipeItem.name,d.SwipeItem),r.default.component(d.Switch.name,d.Switch),r.default.component(d.Tabbar.name,d.Tabbar),r.default.component(d.TabContainer.name,d.TabContainer),r.default.component(d.TabContainerItem.name,d.TabContainerItem),r.default.component(d.TabItem.name,d.TabItem),r.default.config.productionTip=!1,window.utils=h.a,r.default.mixin({data:function(){return{screenWidth:document.documentElement.clientWidth,screenHeight:document.documentElement.clientHeight}},methods:a()({go:function(t){this.$router.push(t)},back:function(){u.a.goBack()}},n.i(f.a)({toggleHeader:"TOGGLE_HEADER",toggleFooter:"TOGGLE_FOOTER",toggleLoading:"TOGGLE_LOADING"}))}),new r.default({el:"#app",router:u.a,store:l.a,template:"<App/>",components:{App:s.a}}),c.a.attach(document.body)},NaOX:function(t,e,n){"use strict";var o=n("sonc"),a=n("MjR/"),i=n("VU/8"),c=i(o.a,a.a,!1,null,null,null);e.a=c.exports},P25B:function(t,e,n){"use strict";e.a=[{name:"video",path:"video",meta:{login:!1,hasFooter:!1},component:function(t){n.e(15).then(function(){return t(n("AmbE"))}.bind(null,n)).catch(n.oe)}}]},QNKx:function(t,e,n){"use strict";var o=n("NaOX");e.a=[{name:"login",path:"login",meta:{login:!1,hasFooter:!0,keepAlive:!0},component:o.a,beforeEnter:function(t,e,o){new Promise(function(t){t()}).then(function(){n.e(3).then(function(){n("h6qm")}).catch(n.oe)}.bind(null,n)).catch(n.oe),o()}}]},RN31:function(t,e,n){"use strict";e.a=[{name:"chart",path:"chart",meta:{login:!1,hasFooter:!1},component:function(t){n.e(0).then(function(){return t(n("M+8D"))}.bind(null,n)).catch(n.oe)}}]},RTGF:function(t,e,n){"use strict";e.a=[{name:"lock",path:"lock",meta:{login:!1,hasFooter:!1},component:function(t){n.e(2).then(function(){return t(n("PMpZ"))}.bind(null,n)).catch(n.oe)}}]},Thh0:function(t,e,n){"use strict";var o=n("mvHQ"),a=n.n(o),i=n("YtJ0"),c=(n("TuU3"),n("Au9i")),r=(n.n(c),{getVersionInfo:function(t){window.chcp&&chcp.getVersionInfo(t)},fetchUpdate:function(){var t=this;window.chcp&&(i.a.commit("TOGGLE_POPUP",{visible:!0,text:"正在检测新版本"}),chcp.getVersionInfo(function(e,o){chcp.fetchUpdate(function(e,r){i.a.commit("TOGGLE_POPUP",{visible:!0,text:"正在下载新版本..."});var s=JSON.parse(r.config);s.native_version!=window.Config.native_version?(i.a.commit("TOGGLE_POPUP",{visible:!0,text:"当前版本过低，请安装最新版本"}),alert("当前版本过低，请安装最新版本！"),window.open(Config.appUrl)):e?2==e.code?i.a.commit("TOGGLE_POPUP",{visible:!0,text:"已经是最新版本",duration:1e3}):(i.a.commit("TOGGLE_POPUP",{visible:!0,text:"更新包获取失败",duration:3e3}),alert(a()(e))):s.release!=o.currentWebVersion&&(n.i(c.MessageBox)("版本提示（"+s.release+"）",s.description).then(function(e){t.installUpdate(s)}),setTimeout(function(){document.querySelector(".mint-msgbox-message").style.textAlign="left"}))},{"config-file":Config.chcpUrl})}))},installUpdate:function(t){i.a.commit("TOGGLE_POPUP",{visible:!0,text:"正在安装新版本"}),chcp.installUpdate(function(t){t?(i.a.commit("TOGGLE_POPUP",{visible:!0,text:"更新包安装失败",duration:3e3}),alert(a()(t))):i.a.commit("TOGGLE_POPUP",{visible:!0,text:"已经更新为最新版本",duration:1e3})})}});document.addEventListener("deviceready",function(){r.getVersionInfo(function(t,e){i.a.commit("UPDATE_VERSION",e.currentWebVersion)})},!1),e.a=r},TuU3:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__=__webpack_require__("mvHQ"),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__),cache={set:function(t,e){"string"==typeof e?localStorage.setItem(t,e):localStorage.setItem(t,__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(e))},get:function get(key){var value=localStorage.getItem(key);if(value&&("{"==value.substr(0,1)||"["==value.substr(0,1)))try{value=eval("("+value+")")}catch(t){console.log("error in get cache key:"+key+", value:"+value)}return value},removeItem:function(t){localStorage.removeItem(t)},clear:function(){localStorage.clear()}};__webpack_exports__.a=cache},"Vr/b":function(t,e,n){"use strict";e.a=[{name:"about",path:"about",meta:{login:!1,hasFooter:!0},component:function(t){n.e(11).then(function(){t(n("cEc9"))}.bind(null,n)).catch(n.oe)}},{name:"setting",path:"setting",meta:{login:!1,hasFooter:!0},component:function(t){n.e(9).then(function(){t(n("1Gtm"))}.bind(null,n)).catch(n.oe),n.e(11).then(function(){n("cEc9")}).catch(n.oe)}}]},WEav:function(t,e){},X8UB:function(t,e){},Xk10:function(t,e,n){"use strict";function o(t){n("CBhg")}var a=n("gydA"),i=n("+hAH"),c=n("VU/8"),r=o,s=c(a.a,i.a,!1,r,null,null);e.a=s.exports},YaEn:function(t,e,n){"use strict";var o=n("Gu7T"),a=n.n(o),i=n("7+uW"),c=n("/ocq"),r=n("YtJ0"),s=n("Xk10"),u=n("QNKx"),l=n("roEk"),m=n("5dKJ"),p=n("RN31"),h=n("B17L"),f=n("+tBs"),d=n("lteJ"),g=n("RTGF"),v=n("u9Kv"),_=n("oz5U"),b=n("0dS3"),T=n("IqcW"),x=n("8RzN"),O=n("P25B"),E=n("Vr/b"),G=n("e0oC");i.default.use(c.a),c.a.prototype.goBack=function(){this.isBack=!0,window.history.go(-1)};var w=new c.a({routes:[{path:"/",redirect:"/page/login"},{path:"/page",component:s.a,children:[].concat(a()(u.a),a()(l.a),a()(m.a),a()(p.a),a()(h.a),a()(f.a),a()(d.a),a()(g.a),a()(v.a),a()(_.a),a()(b.a),a()(T.a),a()(x.a),a()(O.a),a()(E.a),a()(G.a))}]});w.beforeEach(function(t,e,n){r.a.commit("TOGGLE_HEADER",0!=t.meta.hasHeader),r.a.commit("TOGGLE_FOOTER",0!=t.meta.hasFooter),r.a.commit("TOGGLE_TABS",{flag:1==t.meta.hasTabs,tab:t.name}),0==t.meta.login||r.a.state.common.user?n():(r.a.commit("TOGGLE_POPUP",{visible:!0,text:"请先登录！",duration:3e3}),n("/page/login"))}),w.afterEach(function(t,e){var n=document.querySelector(".loader-box");-1===n.className.indexOf("fadeOut")&&(n.className+=" fadeOut",setTimeout(function(){n.style.display="none"},500))}),e.a=w},YtJ0:function(t,e,n){"use strict";var o=n("7+uW"),a=n("NYxO"),i=n("C9LJ");o.default.use(a.c),e.a=new a.c.Store({modules:{common:i.a}})},"d8/S":function(t,e){},e0oC:function(t,e,n){"use strict";e.a=[{name:"demo",path:"demo",meta:{login:!1,hasFooter:!1},component:function(t){n.e(14).then(function(){return t(n("lZ02"))}.bind(null,n)).catch(n.oe)}}]},gydA:function(t,e,n){"use strict";var o=n("Dd8w"),a=n.n(o),i=n("YaEn"),c=n("NYxO");e.a={name:"page",data:function(){var t=location.href.substr(location.href.indexOf("#")+1),e=[];return"/page/login"===t?e.push("/page/login"):"/page/home"===t?e.push("/page/login","/page/home"):e.push("/page/login","/page/home",t),{keepAlive:["login","home"],urlArray:e,transitionName:"animate-in"}},computed:a()({},n.i(c.b)(["hasHeader","hasTabs","hasFooter","fixFooter","isLoading"])),beforeRouteUpdate:function(t,e,n){console.log(123),this.urlArray.length>1&&this.urlArray[this.urlArray.length-2]==t.path&&(this.$router.isBack=!0),this.$router.isBack?(this.transitionName="animate-out",this.$router.isBack=!1):this.transitionName="animate-in",t.meta.keepAlive&&-1==this.keepAlive.indexOf(t.meta.name)&&this.keepAlive.push(t.name),n()},created:function(){var t=this;i.a.afterEach(function(e,n){t.urlArray.length>1&&t.urlArray[t.urlArray.length-2]==e.path?t.urlArray.pop():t.urlArray.push(e.path)})}}},jg9f:function(t,e,n){"use strict";var o={modal:function(t){var e;return{afterOpen:function(){e=document.scrollingElement.scrollTop,document.body.classList.add("modal-open"),document.body.style.top=-e+"px"},beforeClose:function(){document.body.classList.remove("modal-open"),document.scrollingElement.scrollTop=e}}}()};e.a=o},lteJ:function(t,e,n){"use strict";e.a=[{name:"tab",path:"tab",meta:{login:!1,hasFooter:!1},component:function(t){n.e(8).then(function(){return t(n("sVk2"))}.bind(null,n)).catch(n.oe)}}]},o99s:function(t,e,n){"use strict";var o=n("Dd8w"),a=n.n(o),i=n("NYxO"),c=n("YtJ0");e.a={name:"app",data:function(){return{transitionName:"animate-in",tab:c.a.state.common.ui.tab||"home",tabs:[{id:"home",icon:"fa-home",text:"首页",url:"home"},{id:"contact",icon:"fa-address-book-o",text:"通讯录",url:"contact"},{id:"calendar",icon:"fa-calendar",text:"日历",url:"list"},{id:"setting",icon:"fa-cog",text:"设置",url:"setting"}]}},computed:a()({},n.i(i.b)(["hasHeader","hasTabs","hasFooter","fixFooter","isLoading"])),watch:{"$store.state.common.ui.tab":function(t){this.go({name:t})}},mounted:function(){}}},oz5U:function(t,e,n){"use strict";e.a=[{name:"loading",path:"loading",meta:{login:!1,hasFooter:!1},component:function(t){n.e(7).then(function(){return t(n("hGVa"))}.bind(null,n)).catch(n.oe)}}]},roEk:function(t,e,n){"use strict";e.a=[{name:"home",path:"home",meta:{login:!1,hasFooter:!1,hasTabs:!0,keepAlive:!0},component:function(t){n.e(3).then(function(){return t(n("h6qm"))}.bind(null,n)).catch(n.oe),setTimeout(function(){n.e(6).then(function(){n("F3mG")}).catch(n.oe),n.e(0).then(function(){n("M+8D")}).catch(n.oe),n.e(4).then(function(){n("T5Y6")}).catch(n.oe),n.e(13).then(function(){n("+/HG")}).catch(n.oe),n.e(5).then(function(){n("A6/F")}).catch(n.oe),n.e(1).then(function(){n("BeRe")}).catch(n.oe),n.e(12).then(function(){n("X5+7")}).catch(n.oe),n.e(7).then(function(){n("hGVa")}).catch(n.oe),n.e(2).then(function(){n("PMpZ")}).catch(n.oe),n.e(10).then(function(){n("t1kT")}).catch(n.oe),n.e(8).then(function(){n("sVk2")}).catch(n.oe),n.e(9).then(function(){n("1Gtm")}).catch(n.oe)},1e3)}}]},smDr:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:"slide-up",mode:"out-in"}},[n("mt-header",{directives:[{name:"show",rawName:"v-show",value:t.hasHeader,expression:"hasHeader"}],staticStyle:{position:"absolute",top:"0",width:"100%"}})],1),t._v(" "),n("router-view"),t._v(" "),n("transition",{attrs:{name:"slide-y",mode:"out-in"}},[n("mt-tabbar",{directives:[{name:"show",rawName:"v-show",value:t.hasTabs,expression:"hasTabs"}],attrs:{fixed:""},model:{value:t.$store.state.common.ui.tab,callback:function(e){t.$set(t.$store.state.common.ui,"tab",e)},expression:"$store.state.common.ui.tab"}},t._l(t.tabs,function(e,o){return n("mt-tab-item",{key:o,attrs:{id:e.id}},[n("i",{staticClass:"fa",class:e.icon,staticStyle:{"font-size":"24px"},attrs:{slot:"icon"},slot:"icon"}),t._v("\n        "+t._s(e.text)+"\n      ")])}))],1),t._v(" "),n("mt-popup",{staticStyle:{width:"100%",height:"50px","line-height":"50px",color:"#fff","text-align":"center",background:"rgba(0,0,0,0.5)"},attrs:{closeOnClickModal:!1,position:"top",modal:!0},model:{value:t.$store.state.common.ui.popupTop,callback:function(e){t.$set(t.$store.state.common.ui,"popupTop",e)},expression:"$store.state.common.ui.popupTop"}},[t._v("\n    "+t._s(t.$store.state.common.ui.popupText)+"\n  ")])],1)},a=[],i={render:o,staticRenderFns:a};e.a=i},sonc:function(t,e,n){"use strict";var o=n("Dd8w"),a=n.n(o),i=n("Au9i"),c=(n.n(i),n("YtJ0")),r=n("NYxO");e.a={name:"login",data:function(){return{model:{username:"admin",password:"admin",captcha:""},server:Config.server,chcpUrl:Config.chcpUrl,popupTop:!1,msg:"",captchaBase64:""}},methods:a()({},n.i(r.a)({doLogin:"LOGIN",doLogout:"LOGOUT"}),{getCaptcha:function(){var t=this;utils.http.post("/captcha").then(function(e){t.captchaBase64="data:image/png;base64, "+e.data.body.data})},login:function(){var t=this;i.Indicator.open({text:"登录中...",spinnerType:"fading-circle"}),setTimeout(function(){c.a.commit("LOGIN",{user:t.model}),i.Indicator.close(),t.go("/page/home")},3e3*Math.random())},check:function(){utils.version.fetchUpdate()}}),watch:{server:function(t){Config.server=t},chcpUrl:function(t){Config.chcpUrl=t}},mounted:function(){this.doLogout()}}},u9Kv:function(t,e,n){"use strict";e.a=[{name:"calendar",path:"calendar",meta:{login:!1,hasFooter:!1},component:function(t){n.e(6).then(function(){return t(n("F3mG"))}.bind(null,n)).catch(n.oe)}}]}},["NHnr"]);