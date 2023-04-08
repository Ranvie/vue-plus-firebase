(function(){"use strict";var t={3095:function(t,e,n){var o=n(9242),r=n(3396);function a(t,e,n,o,a,u){const l=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(l)}var u={name:"App"},l=n(89);const i=(0,l.Z)(u,[["render",a]]);var c=i,d=n(2483),s=n(7139);const p=t=>((0,r.dD)("data-v-0c79b8c0"),t=t(),(0,r.Cn)(),t),m={class:"container"},v={key:0,id:"createEntry"},f=(0,r.uE)('<table data-v-0c79b8c0><tr data-v-0c79b8c0><td data-v-0c79b8c0><input type="text" placeholder="Name" data-v-0c79b8c0></td><td data-v-0c79b8c0><input type="text" placeholder="Description" data-v-0c79b8c0></td><td data-v-0c79b8c0><input type="number" placeholder="Price" data-v-0c79b8c0></td><td data-v-0c79b8c0><input type="number" placeholder="Stock" data-v-0c79b8c0></td></tr></table><button type="submit" data-v-0c79b8c0>Save</button>',2),h=[f],b={id:"showProducts"},g=p((()=>(0,r._)("tr",null,[(0,r._)("th",null,"Name"),(0,r._)("th",null,"Description"),(0,r._)("th",null,"Price"),(0,r._)("th",null,"Stock")],-1))),_=p((()=>(0,r._)("footer",null,null,-1)));function y(t,e,n,o,a,u){const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("header",null,[(0,r.Wm)(l,{to:"/login"},{default:(0,r.w5)((()=>[(0,r.Uk)("Login")])),_:1})]),(0,r._)("main",null,[(0,r._)("div",m,[a.isAdmin?((0,r.wg)(),(0,r.iD)("form",v,h)):(0,r.kq)("",!0),(0,r._)("table",b,[g,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.products,((t,e)=>((0,r.wg)(),(0,r.iD)("tr",{key:e},[(0,r._)("td",null,(0,s.zw)(t.name),1),(0,r._)("td",null,(0,s.zw)(t.description),1),(0,r._)("td",null,(0,s.zw)(t.price),1),(0,r._)("td",null,(0,s.zw)(t.stock),1)])))),128))])])]),_],64)}var w=n(7795),k=n(3854);const S={apiKey:"AIzaSyDoiLi4udd54j5D667BinmxdlG3Ed9-hJ0",authDomain:"portfolio-a9d90.firebaseapp.com",projectId:"portfolio-a9d90",storageBucket:"portfolio-a9d90.appspot.com",messagingSenderId:"2268230381",appId:"1:2268230381:web:3cf52911ac68e35a1a12e4"},D=(0,w.ZF)(S),O=(0,k.v0)(D);var j={data(){return{products:[{name:"Apple",description:"Apple",price:"$0.23",stock:"6"},{name:"Pineapple",description:"Pineapple",price:"$0.72",stock:"3"}],isAdmin:!1}},mounted(){this.isUserAdmin()},methods:{async isUserAdmin(){O.onAuthStateChanged((t=>{if(void 0===O.currentUser)return!1;t.getIdTokenResult(!0).then((t=>{this.isAdmin=!0===t.claims.admin}))}))}}};const A=(0,l.Z)(j,[["render",y],["__scopeId","data-v-0c79b8c0"]]);var I=A;const P=t=>((0,r.dD)("data-v-6e9ed3c0"),t=t(),(0,r.Cn)(),t),V=P((()=>(0,r._)("header",null,null,-1))),x=P((()=>(0,r._)("h1",{class:"centralize"},"Login",-1))),z=P((()=>(0,r._)("hr",null,null,-1))),C={class:"grid"},E=P((()=>(0,r._)("button",{type:"submit"},"Enviar",-1))),H=P((()=>(0,r._)("footer",null,null,-1)));function U(t,e,n,a,u,l){const i=(0,r.up)("CustomInput");return(0,r.wg)(),(0,r.iD)(r.HY,null,[V,(0,r._)("main",null,[(0,r._)("form",{onSubmit:e[0]||(e[0]=(0,o.iM)(((...t)=>l.handleSubmit&&l.handleSubmit(...t)),["prevent"]))},[x,z,(0,r._)("div",C,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(u.inputs,((t,e)=>((0,r.wg)(),(0,r.j4)(i,{key:e,label:t.label,modelValue:t.value,"onUpdate:modelValue":e=>t.value=e,type:t.type},null,8,["label","modelValue","onUpdate:modelValue","type"])))),128))]),E],32)]),H],64)}n(7658);const L=["for"],T=["id","type"];function Y(t,e,n,a,u,l){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("label",{for:n.label},(0,s.zw)(n.label),9,L),(0,r.wy)((0,r._)("input",{id:n.label,"onUpdate:modelValue":e[0]||(e[0]=t=>l.content=t),type:n.type},null,8,T),[[o.YZ,l.content]])],64)}var Z={props:{label:String,modelValue:String,type:String,placeholder:String},computed:{content:{get(){return this.modelValue},set(t){this.$emit("update:modelValue",t)}}}};const K=(0,l.Z)(Z,[["render",Y],["__scopeId","data-v-bf2297e6"]]);var $=K,B={data(){return{inputs:{email:{label:"Email",value:"",type:"email"},password:{label:"Password",value:"",type:"password"}}}},components:{CustomInput:$},methods:{handleSubmit(){this.tryToLogin(this.inputs.email.value,this.inputs.password.value)},tryToLogin(t,e){(0,k.e5)(O,t,e).then((()=>{G.push({name:"Home"})})).catch((t=>{"auth/user-not-found"==t.code||"auth/wrong-password"==t.code?alert("O Email ou a Senha estão incorretos."):alert("Ocorreu um erro. Tente novamente mais tarde.")}))}}};const F=(0,l.Z)(B,[["render",U],["__scopeId","data-v-6e9ed3c0"]]);var M=F;const N=[{path:"/",name:"Home",component:I},{path:"/login",name:"Login",component:M}],q=(0,d.p7)({history:(0,d.PO)(),routes:N});var G=q;(0,o.ri)(c).use(G).mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,a){if(!o){var u=1/0;for(d=0;d<t.length;d++){o=t[d][0],r=t[d][1],a=t[d][2];for(var l=!0,i=0;i<o.length;i++)(!1&a||u>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[i])}))?o.splice(i--,1):(l=!1,a<u&&(u=a));if(l){t.splice(d--,1);var c=r();void 0!==c&&(e=c)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[o,r,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,a,u=o[0],l=o[1],i=o[2],c=0;if(u.some((function(e){return 0!==t[e]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(i)var d=i(n)}for(e&&e(o);c<u.length;c++)a=u[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(d)},o=self["webpackChunkvue_auth"]=self["webpackChunkvue_auth"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3095)}));o=n.O(o)})();
//# sourceMappingURL=app.7d0cdadd.js.map