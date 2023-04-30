(function(){"use strict";var e={1022:function(e,t,n){var a=n(9242),r=n(3396);function o(e,t,n,a,o,i){const u=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(u)}var i={name:"App"},u=n(89);const l=(0,u.Z)(i,[["render",o]]);var s=l,d=n(2483),c=n(7139),p=n.p+"img/Reload.6948dd5d.svg";const m=e=>((0,r.dD)("data-v-3346fa40"),e=e(),(0,r.Cn)(),e),h={class:"container"},f=(0,r.uE)('<table data-v-3346fa40><tr data-v-3346fa40><td data-v-3346fa40><input type="text" placeholder="Name" name="name" data-v-3346fa40></td><td data-v-3346fa40><input type="text" placeholder="Description" name="description" data-v-3346fa40></td><td data-v-3346fa40><input type="number" placeholder="Price" name="price" min="0" step=".01" data-v-3346fa40></td><td data-v-3346fa40><input type="number" placeholder="Stock" name="stock" min="0" data-v-3346fa40></td></tr></table><button type="submit" data-v-3346fa40>Save</button>',2),v=[f],g=m((()=>(0,r._)("div",{class:"marginTop30"},null,-1))),b={class:"reloadButton"},w={id:"showProducts"},y=m((()=>(0,r._)("tr",null,[(0,r._)("th",null,"Name"),(0,r._)("th",null,"Description"),(0,r._)("th",null,"Price"),(0,r._)("th",null,"Stock")],-1))),_=m((()=>(0,r._)("footer",null,null,-1)));function S(e,t,n,o,i,u){const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("header",null,[(0,r.Wm)(l,{to:"/login"},{default:(0,r.w5)((()=>[(0,r.Uk)("Login")])),_:1})]),(0,r._)("main",null,[(0,r._)("div",h,[i.isAdmin?((0,r.wg)(),(0,r.iD)("form",{key:0,id:"createEntry",onSubmit:t[0]||(t[0]=(0,a.iM)(((...e)=>u.handleSubmit&&u.handleSubmit(...e)),["prevent"]))},v,32)):(0,r.kq)("",!0),g,(0,r._)("button",b,[(0,r._)("img",{src:p,title:"Reload products",alt:"Reload all products from table",onClick:t[1]||(t[1]=e=>u.getProducts(!0))})]),(0,r._)("table",w,[y,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.products,((e,t)=>((0,r.wg)(),(0,r.iD)("tr",{key:t},[(0,r._)("td",null,(0,c.zw)(e.name),1),(0,r._)("td",null,(0,c.zw)(e.description),1),(0,r._)("td",null,"$"+(0,c.zw)(Number.parseFloat(e.price).toFixed(2).toString()),1),(0,r._)("td",null,(0,c.zw)(e.stock),1)])))),128))])])]),_],64)}n(7658);var k=n(7795),D=n(3854),I=n(36);const O={apiKey:"AIzaSyDoiLi4udd54j5D667BinmxdlG3Ed9-hJ0",authDomain:"portfolio-a9d90.firebaseapp.com",projectId:"portfolio-a9d90",storageBucket:"portfolio-a9d90.appspot.com",messagingSenderId:"2268230381",appId:"1:2268230381:web:3cf52911ac68e35a1a12e4"},P=(0,k.ZF)(O),x=(0,D.v0)(P),L=(0,I.ad)(P);class F{constructor(){}getItem(e){return localStorage.getItem(e)}getKey(e,t){return JSON.parse(localStorage.getItem(e))[t]}removeItem(e){localStorage.removeItem(e)}isExpired(e){let t=new Date(this.getKey(e,"expire")).toLocaleString("sv"),n=(new Date).toLocaleString("sv");return n>t}setItem(e,t,n){localStorage.setItem(e,JSON.stringify({value:t,expire:this.expireDate(n)}))}expireDate(e){return e=e.split(/(\D+|\d+)/g).filter((e=>""!=e)),this.parseToDateFromNow(e[0],e[1]).toLocaleString("sv")}parseToDateFromNow(e,t){let n=new Date;switch(e=Number.parseInt(e),t){case"s":n.setSeconds(n.getSeconds()+e);break;case"m":n.setMinutes(n.getMinutes()+e);break;case"h":n.setHours(n.setHours()+e);break;case"D":n.setHours(n.getHours()+24*e);break;case"M":n.setMonth(n.getMonth()+e);break;case"Y":n.getFullYear(n.setFullYear()+e);break}return n}}var A=new F,H={data(){return{products:[],isAdmin:!1}},mounted(){this.isUserAdmin(),this.getProducts()},methods:{async isUserAdmin(){x.onAuthStateChanged((e=>{null!==x.currentUser?e.getIdTokenResult(!0).then((e=>{this.isAdmin=!0===e.claims.admin})):this.isAdmin=!1}))},handleSubmit(e){if(this.isAdmin){let t=this.convertSubmitToProduct(e);this.saveProduct(t)}else ee.push({name:"Login"})},getProducts(e=!1){e||!A.getItem("products")||A.isExpired("products")?(this.readFromDatabase(),console.log("A")):this.readFromLocalStorage()},readFromLocalStorage(){this.products=JSON.parse(A.getKey("products","value"))},readFromDatabase(){let e=[];(0,I.PL)((0,I.hJ)(L,"products")).then((t=>{t.forEach((t=>{e.push(t.data())})),this.products=e,A.setItem("products",JSON.stringify(this.products),"1h")}))},convertSubmitToProduct(e){let t={};for(let n of e.target)"input"===n.localName&&(t[n.name]=n.value);return t},saveProduct(e){(0,I.pl)((0,I.JU)(L,"products",e.name),{name:e.name,description:e.description,price:e.price,stock:e.stock}).then((()=>{this.getProducts()}))}}};const N=(0,u.Z)(H,[["render",S],["__scopeId","data-v-3346fa40"]]);var T=N;const j=e=>((0,r.dD)("data-v-6e9ed3c0"),e=e(),(0,r.Cn)(),e),E=j((()=>(0,r._)("header",null,null,-1))),Y=j((()=>(0,r._)("h1",{class:"centralize"},"Login",-1))),C=j((()=>(0,r._)("hr",null,null,-1))),M={class:"grid"},U=j((()=>(0,r._)("button",{type:"submit"},"Enviar",-1))),V=j((()=>(0,r._)("footer",null,null,-1)));function z(e,t,n,o,i,u){const l=(0,r.up)("CustomInput");return(0,r.wg)(),(0,r.iD)(r.HY,null,[E,(0,r._)("main",null,[(0,r._)("form",{onSubmit:t[0]||(t[0]=(0,a.iM)(((...e)=>u.handleSubmit&&u.handleSubmit(...e)),["prevent"]))},[Y,C,(0,r._)("div",M,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.inputs,((e,t)=>((0,r.wg)(),(0,r.j4)(l,{key:t,label:e.label,modelValue:e.value,"onUpdate:modelValue":t=>e.value=t,type:e.type},null,8,["label","modelValue","onUpdate:modelValue","type"])))),128))]),U],32)]),V],64)}const J=["for"],K=["id","type"];function Z(e,t,n,o,i,u){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("label",{for:n.label},(0,c.zw)(n.label),9,J),(0,r.wy)((0,r._)("input",{id:n.label,"onUpdate:modelValue":t[0]||(t[0]=e=>u.content=e),type:n.type},null,8,K),[[a.YZ,u.content]])],64)}var R={props:{label:String,modelValue:String,type:String,placeholder:String},computed:{content:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}}}};const B=(0,u.Z)(R,[["render",Z],["__scopeId","data-v-bf2297e6"]]);var $=B,q={data(){return{inputs:{email:{label:"Email",value:"",type:"email"},password:{label:"Password",value:"",type:"password"}}}},components:{CustomInput:$},methods:{handleSubmit(){this.tryToLogin(this.inputs.email.value,this.inputs.password.value)},tryToLogin(e,t){(0,D.e5)(x,e,t).then((()=>{ee.push({name:"Home"})})).catch((e=>{"auth/user-not-found"==e.code||"auth/wrong-password"==e.code?alert("O Email ou a Senha estão incorretos."):alert("Ocorreu um erro. Tente novamente mais tarde.")}))}}};const G=(0,u.Z)(q,[["render",z],["__scopeId","data-v-6e9ed3c0"]]);var W=G;const Q=[{path:"/",name:"Home",component:T},{path:"/login",name:"Login",component:W}],X=(0,d.p7)({history:(0,d.PO)("/vue-plus-firebase/"),routes:Q});var ee=X;(0,a.ri)(s).use(ee).mount("#app")}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,o){if(!a){var i=1/0;for(d=0;d<e.length;d++){a=e[d][0],r=e[d][1],o=e[d][2];for(var u=!0,l=0;l<a.length;l++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(u=!1,o<i&&(i=o));if(u){e.splice(d--,1);var s=r();void 0!==s&&(t=s)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[a,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/vue-plus-firebase/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,i=a[0],u=a[1],l=a[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(l)var d=l(n)}for(t&&t(a);s<i.length;s++)o=i[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},a=self["webpackChunkvue_auth"]=self["webpackChunkvue_auth"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(1022)}));a=n.O(a)})();
//# sourceMappingURL=app.cca60746.js.map