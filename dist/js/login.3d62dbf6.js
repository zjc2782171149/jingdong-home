(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"04f1":function(e,t,n){"use strict";n("2738")},"0eb4":function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var s=n("7a23");Object(s["w"])("data-v-f37fdc6a");var a={class:"toast"};function r(e,t,n,r,c,o){return Object(s["t"])(),Object(s["f"])("div",a,Object(s["C"])(n.message),1)}Object(s["u"])();var c={props:["message"]},o=function(){var e=Object(s["x"])({show:!1,toastMessage:""}),t=function(t){e.show=!0,e.toastMessage=t,setTimeout((function(){e.show=!1,e.toastMessage=""}),2e3)},n=Object(s["D"])(e),a=n.show,r=n.toastMessage;return{show:a,toastMessage:r,showToast:t}};n("04f1");c.render=r,c.__scopeId="data-v-f37fdc6a";t["a"]=c},2738:function(e,t,n){},"4e36":function(e,t,n){},b46e:function(e,t,n){"use strict";n("4e36")},ede4:function(e,t,n){"use strict";n.r(t);var s=n("7a23");Object(s["w"])("data-v-54de0bb0");var a={class:"wrapper"},r=Object(s["g"])("img",{class:"wrapper__img",src:"https://gitee.com/zjc13544361063/zjc-markdown-picture/raw/master/微信图片_20210825183319.png"},null,-1),c={class:"wrapper__input"},o={class:"wrapper__input"};function i(e,t,n,i,u,p){var l=Object(s["A"])("Toast");return Object(s["t"])(),Object(s["f"])("div",a,[r,Object(s["g"])("div",c,[Object(s["K"])(Object(s["g"])("input",{class:"wrapper__input__content",placeholder:"用户名","onUpdate:modelValue":t[0]||(t[0]=function(e){return i.username=e})},null,512),[[s["F"],i.username]])]),Object(s["g"])("div",o,[Object(s["K"])(Object(s["g"])("input",{type:"password",class:"wrapper__input__content",placeholder:"请输入密码","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.password=e}),autocomplete:"new-password"},null,512),[[s["F"],i.password]])]),Object(s["g"])("div",{class:"wrapper__login-button",onClick:t[2]||(t[2]=function(){return i.handleLogin&&i.handleLogin.apply(i,arguments)})},"登陆"),Object(s["g"])("div",{class:"wrapper__login-link",onClick:t[3]||(t[3]=function(){return i.handleRegisterClick&&i.handleRegisterClick.apply(i,arguments)})},"立即注册"),i.show?(Object(s["t"])(),Object(s["d"])(l,{key:0,message:i.toastMessage},null,8,["message"])):Object(s["e"])("",!0)])}Object(s["u"])();var u=n("1da1"),p=(n("96cf"),n("6c02")),l=n("b775"),d=n("0eb4"),b=function(e){var t=Object(p["d"])(),n=Object(s["x"])({username:"",password:""}),a=function(){var s=Object(u["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,Object(l["c"])("/api/user/login",{username:n.username,password:n.password});case 3:a=s.sent,0===(null===a||void 0===a?void 0:a.errno)?(localStorage.isLogin=!0,t.push({name:"Home"})):e("登陆失败"),s.next=10;break;case 7:s.prev=7,s.t0=s["catch"](0),e("请求失败");case 10:case"end":return s.stop()}}),s,null,[[0,7]])})));return function(){return s.apply(this,arguments)}}(),r=Object(s["D"])(n),c=r.username,o=r.password;return{username:c,password:o,handleLogin:a}},g=function(){var e=Object(p["d"])(),t=function(){e.push({name:"Register"})};return{handleRegisterClick:t}},w={name:"Login",components:{Toast:d["a"]},setup:function(){var e=Object(d["b"])(),t=e.show,n=e.toastMessage,s=e.showToast,a=b(s),r=a.username,c=a.password,o=a.handleLogin,i=g(),u=i.handleRegisterClick;return{username:r,password:c,show:t,toastMessage:n,handleLogin:o,handleRegisterClick:u}}};n("b46e");w.render=i,w.__scopeId="data-v-54de0bb0";t["default"]=w}}]);
//# sourceMappingURL=login.3d62dbf6.js.map