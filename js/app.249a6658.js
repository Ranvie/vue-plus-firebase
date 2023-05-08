(function(){"use strict";var t={758:function(t,e,r){var a=r(9242),o=r(3396);function n(t,e,r,a,n,s){const i=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(i)}var s={name:"App"},i=r(89);const u=(0,i.Z)(s,[["render",n]]);var l=u,d=r(2483),c=r(7139),p=r.p+"img/Reload.6948dd5d.svg";const h=t=>((0,o.dD)("data-v-2bf548a2"),t=t(),(0,o.Cn)(),t),m={class:"container"},f=(0,o.uE)('<table data-v-2bf548a2><tr data-v-2bf548a2><td data-v-2bf548a2><input type="text" placeholder="Name" name="name" tabindex="2" data-v-2bf548a2></td><td data-v-2bf548a2><input type="text" placeholder="Description" name="description" tabindex="2" data-v-2bf548a2></td><td data-v-2bf548a2><input type="number" placeholder="Price" name="price" min="0" step=".01" tabindex="2" data-v-2bf548a2></td><td data-v-2bf548a2><input type="number" placeholder="Stock" name="stock" min="0" tabindex="2" data-v-2bf548a2></td></tr></table><button class="saveButton" type="submit" tabindex="2" data-v-2bf548a2>Save</button>',2),g=[f],b=h((()=>(0,o._)("div",{class:"marginTop30"},null,-1))),v={class:"reloadButton"},S={id:"showProducts"},w=h((()=>(0,o._)("footer",null,null,-1)));function y(t,e,r,n,s,i){const u=(0,o.up)("router-link"),l=(0,o.up)("VuePageify");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("header",null,[(0,o.Wm)(u,{to:"/login",tabindex:"1"},{default:(0,o.w5)((()=>[(0,o.Uk)("Login")])),_:1})]),(0,o._)("main",null,[(0,o._)("div",m,[t.isAdmin?((0,o.wg)(),(0,o.iD)("form",{key:0,id:"createEntry",onSubmit:e[0]||(e[0]=(0,a.iM)(((...e)=>t.handleSubmit&&t.handleSubmit(...e)),["prevent"]))},g,32)):(0,o.kq)("",!0),b,(0,o._)("button",v,[(0,o._)("img",{src:p,title:"Reload products",alt:"Reload all products from table",onClick:e[1]||(e[1]=e=>t.getProducts(!0)),tabindex:"2"})]),(0,o._)("table",S,[(0,o._)("tr",null,[(0,o._)("th",{onClick:e[2]||(e[2]=e=>t.getProducts(!1,"name")),onKeyup:e[3]||(e[3]=(0,a.D2)((e=>t.getProducts(!1,"name")),["enter"])),tabindex:"2"},"Name",32),(0,o._)("th",{onClick:e[4]||(e[4]=e=>t.getProducts(!1,"description")),onKeyup:e[5]||(e[5]=(0,a.D2)((e=>t.getProducts(!1,"description")),["enter"])),tabindex:"2"},"Description",32),(0,o._)("th",{onClick:e[6]||(e[6]=e=>t.getProducts(!1,"price")),onKeyup:e[7]||(e[7]=(0,a.D2)((e=>t.getProducts(!1,"price")),["enter"])),tabindex:"2"},"Price",32),(0,o._)("th",{onClick:e[8]||(e[8]=e=>t.getProducts(!1,"stock")),onKeyup:e[9]||(e[9]=(0,a.D2)((e=>t.getProducts(!1,"stock")),["enter"])),tabindex:"2"},"Stock",32)]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.products,((t,e)=>((0,o.wg)(),(0,o.iD)("tr",{key:e},[(0,o._)("td",null,(0,c.zw)(t.name),1),(0,o._)("td",null,(0,c.zw)(t.description),1),(0,o._)("td",null,"$"+(0,c.zw)(Number.parseFloat(t.price).toFixed(2).toString()),1),(0,o._)("td",null,(0,c.zw)(t.stock),1)])))),128))]),(0,o.Wm)(l,{pageSize:"10",listSize:this.productCount,onUpdateOffset:t.handleUpdateOffset},null,8,["listSize","onUpdateOffset"])])]),w],64)}r(7658);const _={id:"container"},D=["onClick"];function k(t,e,r,a,n,s){return(0,o.wg)(),(0,o.iD)("div",_,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.buttonCount,((e,r)=>((0,o.wg)(),(0,o.iD)("button",{key:r,onClick:e=>t.handleClick(r.toString())},(0,c.zw)(r+1),9,D)))),128))])}var L={data(){return{buttonCount:this.createEmptyList()}},props:{pageSize:{default:0},listSize:{default:0}},watch:{listSize(){this.buttonCount=this.createEmptyList()}},methods:{handleClick(t){this.$emit("updateOffset",t*this.pageSize)},createEmptyList(){if(this.pageSize<=0||this.listSize<=0)return new Array(1);let t=Math.ceil(this.listSize/this.pageSize);return new Array(t)}}};const P=(0,i.Z)(L,[["render",k],["__scopeId","data-v-45e82b7d"]]);var O=P,I=r(7795),x=r(3854),C=r(36);const T={apiKey:"AIzaSyDoiLi4udd54j5D667BinmxdlG3Ed9-hJ0",authDomain:"portfolio-a9d90.firebaseapp.com",projectId:"portfolio-a9d90",storageBucket:"portfolio-a9d90.appspot.com",messagingSenderId:"2268230381",appId:"1:2268230381:web:3cf52911ac68e35a1a12e4"},N=(0,I.ZF)(T),F=(0,x.v0)(N),A=(0,C.ad)(N);class E{getKeyValue(t,e=""){if(""===e)return t;let r=e.split(/\[([\d]+)\]|\./).filter((t=>void 0!=t&&""!=t)),a=t[r[0]],o=!0;for(let n of r)if(o)o=!1;else{if(void 0===a)break;a=a[n]}return a}}var z=new E;class K{constructor(){}getItem(t){return localStorage.getItem(t)}getKey(t,e){let r=JSON.parse(localStorage.getItem(t));return z.getKeyValue(r,e)}removeItem(t){localStorage.removeItem(t)}isExpired(t){let e=new Date(this.getKey(t,"expire")).toLocaleString("sv"),r=(new Date).toLocaleString("sv");return r>e}setItem(t,e,r=""){localStorage.setItem(t,JSON.stringify({value:e,expire:this.expireDate(r)}))}expireDate(t){return t=t.split(/(\D+|\d+)/g).filter((t=>""!=t)),this.parseToDateFromNow(t[0],t[1]).toLocaleString("sv")}parseToDateFromNow(t,e){let r=new Date;switch(t=Number.parseInt(t),e){case"s":r.setSeconds(r.getSeconds()+t);break;case"m":r.setMinutes(r.getMinutes()+t);break;case"h":r.setHours(r.getHours()+t);break;case"D":r.setHours(r.getHours()+24*t);break;case"M":r.setMonth(r.getMonth()+t);break;case"Y":r.setFullYear(r.getFullYear()+t);break}return r}}var V=new K;class H{possibleTypes(t=""){const e=/^[0-9]+$/,r=/^-?\d+(?:[.,]\d+)?$/,a=/^(?:true|false|0|1)$/,o=/^(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2}):(\d{2})$/;let n=["STRING"];return e.test(t)&&n.push("INT"),r.test(t)&&n.push("FLOAT"),a.test(t.toLowerCase())&&n.push("BOOLEAN"),o.test(t)&&n.push("DATE"),n}}var U=new H;class j{sort(t,e=""){if(""===e)return t;let r=t;return r.sort(((t,r)=>this.isNumber(t[e])?this.evaluateHigher(Number.parseFloat(t[e]),Number.parseFloat(r[e])):t[e].localeCompare(r[e],"sv"))),r}isNumber(t){return U.possibleTypes(t).includes("INT")||U.possibleTypes(t).includes("FLOAT")}evaluateHigher(t,e){return t>e?1:t<e?-1:0}}var J=new j;class Y{isDataExistsAndNotExpiredLocal(t){return V.getItem(t)&&!V.isExpired(t)}saveToDatabase(t,e,r,a){return new Promise(((o,n)=>{(0,C.pl)((0,C.JU)(t,e,r),{...a}).then((()=>{o(a)})).catch((t=>{n(t)}))}))}saveToLocalStorage(t,e,r){V.setItem(t,e,r)}deleteFromDatabase(t,e,r){return new Promise(((a,o)=>{(0,C.oe)((0,C.JU)(t,e,r)).then((()=>{a()})).catch((t=>{o(t)}))}))}deleteFromLocalStorage(t){localStorage.removeItem(t)}readFromDatabase(t,e,r="",a=10,o="",n=""){return new Promise(((s,i)=>{let u=[];const l=this.createQueryString(t,e,r,a,o,n);(0,C.PL)(l).then((t=>{t.forEach((t=>{u.push(t.data())})),s(u)})).catch((t=>{i(t)}))}))}createQueryString(t,e,r="",a=10,o="",n){const s=(0,C.hJ)(t,e);return""!=r&&""!=o&&"AFTER"==n?(0,C.IO)(s,(0,C.Xo)(r),(0,C.TQ)(o),(0,C.b9)(a)):""!=r&&""!=o&&"AT"==n?(0,C.IO)(s,(0,C.Xo)(r),(0,C.e0)(o),(0,C.b9)(a)):""!=r&&""==o?(0,C.IO)(s,(0,C.Xo)(r),(0,C.b9)(a)):(0,C.IO)(s,(0,C.b9)(a))}readFromDatabaseCaching(t,e,r="",a=10,o="",n="",s,i=""){return new Promise(((u,l)=>{this.readFromDatabase(t,e,r,a,o,n).then((t=>{V.setItem(s,t,i),u(t)})).catch((t=>{l(t)}))}))}readFromLocalStorage(t,e="",r="value"){return""!=e?this.orderLocalStorage(t,e,r):JSON.parse(V.getKey(t,r))}orderLocalStorage(t,e,r="value"){let a=V.getKey(t,r);"string"===typeof a&&(a=JSON.parse(a));let o=J.sort(a,e);return o}}var M=new Y;class R{getProductList(t,e){let r=[],a=[];return t.forEach((t=>{r="string"==typeof t.products?JSON.parse(t.products):t.products,a=r})),J.sort(a,e)}}var Z=new R;class ${createSublist(t,e,r){let a=[],o=0;for(let n=e;n<t.length&&o<r;n++)a.push(t[n]),o++;return a}}var B=new $,Q={data(){return{products:[],productCount:0,offset:0,limit:10,isAdmin:!1,lastVisible:{}}},components:{VuePageify:O},mounted(){this.isUserAdmin(),this.getProducts()},methods:{isUserAdmin(){F.onAuthStateChanged((t=>{null!==F.currentUser?t.getIdTokenResult(!0).then((t=>{this.isAdmin=!0===t.claims.admin})):this.isAdmin=!1}))},handleSubmit(t){let e,r,a,o;this.isAdmin?(e=this.convertSubmitToProduct(t),this.getProducts(!0,"").then((()=>{o=M.readFromLocalStorage("products","","value[0].products"),r=this.newProductList(o,e,"name","name"),a={id:"products_0",count:r.length.toString(),products:JSON.stringify(r)},this.products=B.createSublist(r,this.offset,this.limit),this.productCount=r.length,M.saveToDatabase(A,"products","products",a),M.saveToLocalStorage("products",[a],"1h")}))):bt.push({name:"Login"})},newProductList(t=[],e={},r="",a=""){let o,n=this.isKeyValueRepeated(t,a,e[a]);return-1!=n?(o=t,o[n]=e):o=[...t,e],o=J.sort(o,r),o},isKeyValueRepeated(t=[],e="",r=""){return t.findIndex((t=>t[e].toLowerCase()===r.toLowerCase()))},convertSubmitToProduct(t){let e={};for(let r of t.target)"input"===r.localName&&(e[r.name]=r.value);return e},handleUpdateOffset(t){this.offset=t,this.getProducts(!1,"name",this.offset,this.limit)},getProducts(t=!1,e="name"){let r;return new Promise((a=>{if(!t&&M.isDataExistsAndNotExpiredLocal("products")){let t=M.readFromLocalStorage("products","","value[0].products");this.products=J.sort(B.createSublist(t,this.offset,this.limit),e),this.productCount=t.length,a()}else M.readFromDatabaseCaching(A,"products","id",1,"products_0","AT","products","1h").then((t=>{r=Z.getProductList(t,""),this.products=J.sort(B.createSublist(r,this.offset,this.limit),e),this.productCount=r.length,a()}))}))}}};const X=(0,i.Z)(Q,[["render",y],["__scopeId","data-v-2bf548a2"]]);var G=X;const W=t=>((0,o.dD)("data-v-7fe0f50e"),t=t(),(0,o.Cn)(),t),q=W((()=>(0,o._)("header",null,null,-1))),tt=W((()=>(0,o._)("h1",{class:"centralize"},"Login",-1))),et=W((()=>(0,o._)("hr",null,null,-1))),rt={class:"grid"},at=W((()=>(0,o._)("button",{type:"submit"},"Enviar",-1))),ot=W((()=>(0,o._)("footer",null,null,-1)));function nt(t,e,r,n,s,i){const u=(0,o.up)("CustomInput");return(0,o.wg)(),(0,o.iD)(o.HY,null,[q,(0,o._)("main",null,[(0,o._)("form",{onSubmit:e[0]||(e[0]=(0,a.iM)(((...e)=>t.handleSubmit&&t.handleSubmit(...e)),["prevent"]))},[tt,et,(0,o._)("div",rt,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.inputs,((t,e)=>((0,o.wg)(),(0,o.j4)(u,{key:e,label:t.label,modelValue:t.value,"onUpdate:modelValue":e=>t.value=e,type:t.type},null,8,["label","modelValue","onUpdate:modelValue","type"])))),128))]),at],32)]),ot],64)}const st=["for"],it=["id","type"];function ut(t,e,r,n,s,i){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("label",{for:t.label},(0,c.zw)(t.label),9,st),(0,o.wy)((0,o._)("input",{id:t.label,"onUpdate:modelValue":e[0]||(e[0]=e=>t.content=e),type:t.type},null,8,it),[[a.YZ,t.content]])],64)}var lt={props:{label:String,modelValue:String,type:String,placeholder:String},computed:{content:{get(){return this.modelValue},set(t){this.$emit("update:modelValue",t)}}}};const dt=(0,i.Z)(lt,[["render",ut],["__scopeId","data-v-a7f8322e"]]);var ct=dt,pt={data(){return{inputs:{email:{label:"Email",value:"",type:"email"},password:{label:"Password",value:"",type:"password"}}}},components:{CustomInput:ct},methods:{handleSubmit(){this.tryToLogin(this.inputs.email.value,this.inputs.password.value)},tryToLogin(t,e){(0,x.e5)(F,t,e).then((()=>{bt.push({name:"Home"})})).catch((t=>{"auth/user-not-found"==t.code||"auth/wrong-password"==t.code?alert("O Email ou a Senha estão incorretos."):alert("Ocorreu um erro. Tente novamente mais tarde.")}))}}};const ht=(0,i.Z)(pt,[["render",nt],["__scopeId","data-v-7fe0f50e"]]);var mt=ht;const ft=[{path:"/",name:"Home",component:G},{path:"/login",name:"Login",component:mt}],gt=(0,d.p7)({history:(0,d.PO)("/vue-plus-firebase/"),routes:ft});var bt=gt;(0,a.ri)(l).use(bt).mount("#app")}},e={};function r(a){var o=e[a];if(void 0!==o)return o.exports;var n=e[a]={exports:{}};return t[a](n,n.exports,r),n.exports}r.m=t,function(){var t=[];r.O=function(e,a,o,n){if(!a){var s=1/0;for(d=0;d<t.length;d++){a=t[d][0],o=t[d][1],n=t[d][2];for(var i=!0,u=0;u<a.length;u++)(!1&n||s>=n)&&Object.keys(r.O).every((function(t){return r.O[t](a[u])}))?a.splice(u--,1):(i=!1,n<s&&(s=n));if(i){t.splice(d--,1);var l=o();void 0!==l&&(e=l)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[a,o,n]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.p="/vue-plus-firebase/"}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,n,s=a[0],i=a[1],u=a[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(u)var d=u(r)}for(e&&e(a);l<s.length;l++)n=s[l],r.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return r.O(d)},a=self["webpackChunkvue_auth"]=self["webpackChunkvue_auth"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(758)}));a=r.O(a)})();
//# sourceMappingURL=app.249a6658.js.map