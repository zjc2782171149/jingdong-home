(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chooseAddressList"],{"19e9":function(e,t,s){"use strict";var c=s("1da1"),d=(s("96cf"),s("5502")),n=s("b775"),a=function(){var e=Object(d["b"])(),t=function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(s){var c,d,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(c=e.state.addressList,!s&&c.length){t.next=6;break}return t.next=4,Object(n["a"])("/api/user/address");case 4:a=t.sent,null!==a&&void 0!==a&&null!==(d=a.data)&&void 0!==d&&d.length&&e.commit("changeAddressList",a.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{getAddressList:t}};t["a"]=a},"36e7":function(e,t,s){"use strict";s("bc9f")},4064:function(e,t,s){"use strict";s("b0c0");var c=s("7a23");Object(c["w"])("data-v-d9b134d2");var d={class:"address"},n={class:"address__info"},a={class:"address__info__user"},r={class:"address__info__phone"},i={class:"address__detail"},o=Object(c["g"])("div",{class:"iconfont address__icon"},"",-1);function u(e,t,s,u,b,l){return Object(c["t"])(),Object(c["f"])("div",d,[Object(c["g"])("div",n,[Object(c["g"])("div",a,Object(c["C"])(s.address.name),1),Object(c["g"])("div",r,Object(c["C"])(s.address.phone),1)]),Object(c["g"])("div",i,Object(c["C"])(s.address.city)+Object(c["C"])(s.address.department)+Object(c["C"])(s.address.houseNumber),1),o])}Object(c["u"])();var b={name:"Address",props:["address"]};s("82c3");b.render=u,b.__scopeId="data-v-d9b134d2";t["a"]=b},"82c3":function(e,t,s){"use strict";s("d279")},bc9f:function(e,t,s){},c147:function(e,t,s){"use strict";s.r(t);var c=s("7a23");Object(c["w"])("data-v-1b1e83d1");var d={class:"wrapper"},n={class:"title"},a=Object(c["i"])(" 收货地址 ");function r(e,t,s,r,i,o){var u=Object(c["A"])("Address");return Object(c["t"])(),Object(c["f"])("div",d,[Object(c["g"])("div",n,[Object(c["g"])("div",{class:"iconfont title__icon",onClick:t[0]||(t[0]=function(){return r.handleBackClick&&r.handleBackClick.apply(r,arguments)})},""),a]),(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(r.addressList,(function(e){return Object(c["t"])(),Object(c["d"])(u,{key:e._id,address:e,onClick:function(){return r.handleAddressClick(e._id)}},null,8,["address","onClick"])})),128))])}Object(c["u"])();s("99af");var i=s("4064"),o=s("19e9"),u=s("5502"),b=s("6c02"),l={name:"ChooseAddressList",components:{Address:i["a"]},setup:function(){var e=Object(u["b"])(),t=Object(b["d"])(),s=Object(b["c"])(),d=s.params.shopId,n=Object(c["D"])(e.state),a=n.addressList,r=Object(o["a"])(),i=r.getAddressList;i();var l=function(){t.back()},f=function(e){t.push("/orderConfirmation/".concat(d,"/").concat(e))};return{addressList:a,handleBackClick:l,handleAddressClick:f}}};s("36e7");l.render=r,l.__scopeId="data-v-1b1e83d1";t["default"]=l},d279:function(e,t,s){}}]);
//# sourceMappingURL=chooseAddressList.90c5325d.js.map