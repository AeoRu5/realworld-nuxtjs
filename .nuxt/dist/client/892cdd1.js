/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{213:function(e,t,n){var r,o;!function(c){if(void 0===(o="function"==typeof(r=c)?r.call(t,n,t,e):r)||(e.exports=o),!0,e.exports=c(),!!0){var l=window.Cookies,d=window.Cookies=c();d.noConflict=function(){return window.Cookies=l,d}}}((function(){function e(){for(var i=0,e={};i<arguments.length;i++){var t=arguments[i];for(var n in t)e[n]=t[n]}return e}function t(s){return s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function c(t,n,c){if("undefined"!=typeof document){"number"==typeof(c=e({path:"/"},o.defaults,c)).expires&&(c.expires=new Date(1*new Date+864e5*c.expires)),c.expires=c.expires?c.expires.toUTCString():"";try{var l=JSON.stringify(n);/^[\{\[]/.test(l)&&(n=l)}catch(e){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var d="";for(var m in c)c[m]&&(d+="; "+m,!0!==c[m]&&(d+="="+c[m].split(";")[0]));return document.cookie=t+"="+n+d}}function l(e,n){if("undefined"!=typeof document){for(var o={},c=document.cookie?document.cookie.split("; "):[],i=0;i<c.length;i++){var l=c[i].split("="),d=l.slice(1).join("=");n||'"'!==d.charAt(0)||(d=d.slice(1,-1));try{var m=t(l[0]);if(d=(r.read||r)(d,m)||t(d),n)try{d=JSON.parse(d)}catch(e){}if(o[m]=d,e===m)break}catch(e){}}return e?o[e]:o}}return o.set=c,o.get=function(e){return l(e,!1)},o.getJSON=function(e){return l(e,!0)},o.remove=function(t,n){c(t,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))}))},289:function(e,t,n){"use strict";n.r(t);var r=n(3),o=(n(33),n(90)),c=n(32),l=n(213),d={name:"Login-register",middleware:"notAuthenticated",data:function(){return{username:"",email:"",password:"",errors:{}}},computed:{sign_in:function(){return"true"===this.$route.query.sign_in}},methods:{onSubmit:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,d,m,data,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.username,r=e.email,d=e.password,t.prev=1,!e.sign_in){t.next=8;break}return t.next=5,Object(o.a)({email:r,password:d});case 5:t.t0=t.sent,t.next=11;break;case 8:return t.next=10,Object(o.e)({username:n,email:r,password:d});case 10:t.t0=t.sent;case 11:m=t.t0,data=m.data,f=data.user,e.$store.commit(c.COMMIT_SETUSER,f),l.set("USER",f),e.$router.push("/"),t.next=23;break;case 19:t.prev=19,t.t1=t.catch(1),console.dir(t.t1),e.errors=t.t1.response.data.errors;case 23:case"end":return t.stop()}}),t,null,[[1,19]])})))()}}},m=n(34),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"auth-page"},[n("div",{staticClass:"container page"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[n("h1",{staticClass:"text-xs-center"},[e._v(e._s(e.sign_in?"Sign in":"Sign up"))]),e._v(" "),n("p",{staticClass:"text-xs-center"},[n("nuxt-link",{attrs:{to:{path:"/login",query:{sign_in:!e.sign_in}}}},[e._v(e._s(e.sign_in?"Need":"Have")+" an account?")])],1),e._v(" "),n("ul",{staticClass:"error-messages"},[e._l(e.errors,(function(t,r){return e._l(t,(function(t,o){return n("li",{key:o},[e._v("\n              "+e._s(r)+" "+e._s(t)+"\n            ")])}))}))],2),e._v(" "),n("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[e.sign_in?e._e():n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Your Name",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),n("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[e._v("\n            "+e._s(e.sign_in?"Sign in":"Sign up")+"\n          ")])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);