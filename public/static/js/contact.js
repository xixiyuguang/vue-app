webpackJsonp([20],{"+/HG":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("ZztL"),n=a("aUpr"),s=a("C7Lr"),i=s(r.a,n.a,!1,null,null,null);t.default=i.exports},ZztL:function(e,t,a){"use strict";t.a={name:"contact",data:function(){return{ready:!1,searchKey:"",items:[{displayName:"张三",phoneNumbers:[{value:"13333333331"}]},{displayName:"张三2",phoneNumbers:[{value:"13333333331"}]},{displayName:"张三3",phoneNumbers:[{value:"13333333331"}]},{displayName:"阿毛",phoneNumbers:[{value:"13333333331"}]},{displayName:"adai",phoneNumbers:[{value:"13333333331"}]},{displayName:"aa",phoneNumbers:[{value:"13333333331"}]},{displayName:"查",phoneNumbers:[{value:"13333333331"}]}]}},computed:{contacts:function(){var e={},t=this.pySegSort(this.items);if(this.searchKey)for(var a in t){var r=!0,n=!1,s=void 0;try{for(var i,o=t[a][Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var l=i.value,c=l.displayName||l.name.formatted;-1!=c.toLowerCase().indexOf(this.searchKey.toLowerCase())&&(e[a]||(e[a]=[]),e[a].push(l))}}catch(e){n=!0,s=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw s}}}else e=t;return e}},methods:{pySegSort:function(e){if(!String.prototype.localeCompare)return null;var t="*ABCDEFGHJKLMNOPQRSTWXYZ".split(""),a="阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀".split(""),r={};return t.forEach(function(t,n){for(var s=[],i=e.length-1;i>=0;i--){var o=e[i],l=o.displayName||o.name.formatted;l.substr(0,1).toUpperCase()!==t?(!a[n-1]||a[n-1].localeCompare(l)<=0)&&-1==l.localeCompare(a[n])&&(s.push(o),e.splice(i,1)):(s.push(o),e.splice(i,1))}s.length&&(s.sort(function(e,t){var a=e.displayName||e.name.formatted,r=t.displayName||t.name.formatted;return a.substr(0,1).charCodeAt()<150||r.substr(0,1).charCodeAt()<150?a.substr(0,1).charCodeAt()>r.substr(0,1).charCodeAt():a.localeCompare(r)}),r[t]=s)}),r}},mounted:function(){var e=this;setTimeout(function(){e.ready=!0},100),setTimeout(function(){e.items.C&&e.items.C.push({name:"chenjia",phoneNumbers:["18702189255"]})},200);var t=this;document.addEventListener("deviceready",function(){function e(e){t.items=e,console.log("Found "+e.length+" contacts.");for(var a=0;a<e.length;a++)console.log("Contact["+a+"]: "+JSON.stringify(e[a]))}function a(e){alert("onError!")}var r=["displayName","name","phoneNumbers","emails","address"];console.log(navigator.contacts.fieldType);var n={filter:"",multiple:!0};navigator.contacts.find(r,e,a,n)},!1)}}},aUpr:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("mt-header",{attrs:{title:"联系人"}},[a("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:e.back},slot:"left"},[a("span",[e._v("返回")])])],1),e._v(" "),a("div",{staticClass:"mint-searchbar"},[a("div",{staticClass:"mint-searchbar-inner"},[a("i",{staticClass:"mintui mintui-search"}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchKey,expression:"searchKey"}],staticClass:"mint-searchbar-core",staticStyle:{padding:"0 5px"},attrs:{type:"search",placeholder:"输入姓名搜索"},domProps:{value:e.searchKey},on:{input:function(t){t.target.composing||(e.searchKey=t.target.value)}}})]),e._v(" "),a("a",{staticClass:"mint-searchbar-cancel",staticStyle:{display:"none"}},[e._v("取消")])]),e._v(" "),e.ready?a("mt-index-list",{ref:"indexList"},e._l(e.contacts,function(t,r){return a("mt-index-section",{key:r,attrs:{index:r}},e._l(t,function(t,r){return a("mt-cell",{key:r,attrs:{href:"tel:"+t.phoneNumbers[0].value,title:t.displayName}},[e._v("\n        "+e._s(t.phoneNumbers[0].value)+"\n      ")])}))})):e._e()],1)},n=[],s={render:r,staticRenderFns:n};t.a=s}});