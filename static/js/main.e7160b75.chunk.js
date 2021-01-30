(this["webpackJsonpclothing-store"]=this["webpackJsonpclothing-store"]||[]).push([[0],{62:function(n,t,e){"use strict";e.r(t);var r=e(2),c=e(3),o=e(1),i=e.n(o),a=e(23),u=e.n(a),s=e(12),l=e(4),d=e(14),b=e(7),j=e(33),f=e(34),p={status:"loading",fetchResult:null},h=e(8),O={sortBy:"novelty",byTitle:"",byPrice:[-1/0,1/0],byGender:null,byCategory:null,bySubcategory:null},x=e(41),v=[],g=Object(b.combineReducers)({catalog:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;return"FETCH_CATALOG_FAILURE"===t.type?{status:"failure",fetchResult:t.payload}:"FETCH_CATALOG_SUCCESS"===t.type?{status:"success",fetchResult:t.payload}:n},filters:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;return"SORT"===t.type?Object(h.a)(Object(h.a)({},n),{},{sortBy:t.payload}):"FILTER_BY_TITLE"===t.type?Object(h.a)(Object(h.a)({},n),{},{byTitle:t.payload}):"FILTER_BY_PRICE"===t.type?Object(h.a)(Object(h.a)({},n),{},{byPrice:t.payload}):"FILTER_BY_GENDER"===t.type?Object(h.a)(Object(h.a)({},n),{},{byGender:t.payload}):"FILTER_BY_CATEGORY"===t.type?Object(h.a)(Object(h.a)({},n),{},{byCategory:t.payload}):"FILTER_BY_SUBCATEGORY"===t.type?Object(h.a)(Object(h.a)({},n),{},{bySubcategory:t.payload}):n},savedItems:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;if("ADD_TO_SAVED_ITEMS"===t.type)return Array.from(new Set([].concat(Object(x.a)(n),[t.payload])));if("REMOVE_FROM_SAVED_ITEMS"===t.type){var e=new Set(n);return e.delete(t.payload),Array.from(e)}return n}}),m=Object(b.createStore)(g,function(){try{var n=window.sessionStorage.getItem("app_state");return n?JSON.parse(n):void 0}catch(t){return}}(),Object(j.composeWithDevTools)(Object(b.applyMiddleware)(f.a)));m.subscribe((function(){return n=m.getState(),void window.sessionStorage.setItem("app_state",JSON.stringify(n));var n}));var y=e(6),w=e(0),S=function(n){return{type:"SORT",payload:n}},C=function(n){return{type:"FILTER_BY_TITLE",payload:n}},E=function(n){return{type:"FILTER_BY_GENDER",payload:n}},_=e(15),I=e(39),T=e(38);function k(){var n=Object(c.a)(["\n  position: relative;\n  width: 100%;\n  max-width: 760px;\n  color: var(--standard-color);\n"]);return k=function(){return n},n}function A(){var n=Object(c.a)(["\n  position: absolute;\n\n  /* Additional pixel for the correct alignment of the button in the center */\n  top: calc(50% + 1px);\n  right: 45px;\n  color: inherit;\n  transform: translateY(-50%);\n"]);return A=function(){return n},n}function R(){var n=Object(c.a)(["\n  position: absolute;\n  top: 0;\n  right: -1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 100%;\n  color: ",";\n  background-color: ",";\n  border-radius: 19px / 50%;\n"]);return R=function(){return n},n}function F(){var n=Object(c.a)(["\n  width: 100%;\n  height: 40px;\n  padding: 0 70px 0 15px;\n  color: inherit;\n  font-size: 1.5rem;\n  border: none;\n  border-radius: 19px / 50%;\n"]);return F=function(){return n},n}var N=l.c.input.attrs({type:"search",name:"search",placeholder:"Search"})(F()),L=l.c.button(R(),(function(n){return n.highlighting?"white":"inherit"}),(function(n){return n.highlighting&&"#0770cf"})),z=l.c.button.attrs({type:"button","aria-label":"Clear text"})(A()),B=Object(l.c)((function(n){var t=n.className,e=n.searchValue,c=n.setSearchValue,i=Object(o.useState)(e),a=Object(_.a)(i,2),u=a[0],s=a[1],l=Object(o.useCallback)((function(n){var t=n.target;return s(t.value)}),[]),d=Object(o.useCallback)((function(){s(""),c("")}),[c]);return Object(r.jsxs)("div",{className:t,children:[Object(r.jsx)(N,{value:u,onChange:l,onKeyPress:function(n){"Enter"===n.code&&c(u)}}),0!==u.length&&Object(r.jsx)(z,{onClick:d,children:Object(r.jsx)(T.a,{size:"24px"})}),Object(r.jsx)(L,{type:"button",highlighting:0!==u.length,onClick:function(){return c(u)},children:Object(r.jsx)(I.a,{})})]})}))(k()),M=Object(s.b)((function(n){return{searchValue:n.filters.byTitle}}),(function(n){return{setSearchValue:Object(b.bindActionCreators)(C,n)}}))(B),G=e(18);function P(){var n=Object(c.a)(["\n  color: white;\n  & + & {\n    margin-left: 20px;\n  }\n"]);return P=function(){return n},n}var Y=Object(l.c)(d.b)(P()),D=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(Y,{to:"/","aria-label":"Bag",children:Object(r.jsx)(G.d,{})}),Object(r.jsx)(Y,{to:"/saved-items","aria-label":"Saved items ",children:Object(r.jsx)(G.b,{})})]})};function V(){var n=Object(c.a)(["\n  display: flex;\n  height: 100%;\n"]);return V=function(){return n},n}function U(){var n=Object(c.a)(["\n  display: inline-block;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100px;\n  height: 100%;\n  color: white;\n  font-weight: 700;\n  font-size: 1.6rem;\n  text-transform: uppercase;\n  transition: 0.2s;\n  &.active,\n  &:hover,\n  &:focus {\n    background-color: #525050;\n  }\n"]);return U=function(){return n},n}var H=Object(l.c)(d.c)(U()),J=Object(l.c)((function(n){var t=n.className;return Object(r.jsxs)("nav",{className:t,children:[Object(r.jsx)(H,{to:"/men",children:"Men"}),Object(r.jsx)(H,{to:"/women",children:"Women"})]})}))(V());function W(){var n=Object(c.a)(["\n  background-color: var(--standard-color);\n"]);return W=function(){return n},n}function $(){var n=Object(c.a)(["\n  margin: 0;\n  color: white;\n  font-weight: 700;\n  font-size: 3.5rem;\n  text-transform: uppercase;\n"]);return $=function(){return n},n}function K(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 1350px;\n  height: 65px;\n  margin: 0 auto;\n"]);return K=function(){return n},n}var q=l.c.div(K()),Q=l.c.h1($()),X=Object(l.c)((function(n){var t=n.className;return Object(r.jsx)("header",{className:t,children:Object(r.jsxs)(q,{children:[Object(r.jsx)(Q,{children:Object(r.jsx)("a",{href:"/",children:"Store"})}),Object(r.jsx)(J,{}),Object(r.jsx)(M,{}),Object(r.jsx)(D,{})]})})}))(W()),Z=function(n){return function(t){fetch(n).then((function(n){return n.json()})).then((function(n){return t(function(n){return{type:"FETCH_CATALOG_SUCCESS",payload:n}}(n))})).catch((function(n){return t({type:"FETCH_CATALOG_FAILURE",payload:n})}))}},nn=e(40),tn=e.n(nn);function en(){var n=Object(c.a)(["\n  position: absolute;\n  z-index: 5;\n  width: 350px;\n  padding: 10px;\n  background-color: #eee;\n  box-shadow: 0 5px 13px -2px rgba(0, 0, 0, 0.8);\n"]);return en=function(){return n},n}function rn(){var n=Object(c.a)(["\n  width: 100%;\n  height: 45px;\n  padding: 0 14px;\n  color: #2d2d2d;\n  text-align-last: left;\n  background-color: white;\n  border-radius: 5px;\n  ","\n  &:hover,\n  &:focus {\n    box-shadow: -2px 2px 2px 0 rgba(0, 0, 0, 0.09);\n  }\n"]);return rn=function(){return n},n}function cn(){var n=Object(c.a)(["\n  color: #2d2d2d;\n  background-color: white;\n"]);return cn=function(){return n},n}function on(){var n=Object(c.a)(["\n  color: white;\n  font-weight: 700;\n  background-color: #0770cf;\n"]);return on=function(){return n},n}function an(){var n=Object(c.a)(["\n  font-size: 1.6em;\n  & + & {\n    margin-top: 10px;\n  }\n"]);return an=function(){return n},n}var un=l.c.li(an()),sn=Object(l.b)(on()),ln=Object(l.b)(cn()),dn=l.c.button(rn(),(function(n){return n.selected?sn:ln})),bn=Object(l.c)((function(n){var t=n.className,e=n.isOpen,c=n.menuOptions,i=Object(o.useMemo)((function(){return Array.from({length:c.length},(function(){return tn.a.generate()}))}),[c.length]);return e?Object(r.jsx)("ul",{className:t,role:"listbox",children:c.map((function(n,t){var e=Object(_.a)(n,2),c=e[0],o=e[1];return Object(r.jsx)(un,{role:"option","aria-selected":"false",children:Object(r.jsx)(dn,{type:"button",onClick:o,children:c})},i[t])}))}):null}))(en());function jn(){var n=Object(c.a)(["\n  position: relative;\n  flex-shrink: 0;\n  width: 100%;\n  min-width: 140px;\n  max-width: 200px;\n  color: #666;\n  &:hover,\n  &:focus {\n    color: #0770cf;\n  }\n"]);return jn=function(){return n},n}function fn(){var n=Object(c.a)(["\n  position: absolute;\n  top: 50%;\n  right: 5px;\n  width: 13px;\n  height: 13px;\n  color: ",";\n  transform: translateY(-50%) ",";\n  cursor: pointer;\n"]);return fn=function(){return n},n}function pn(){var n=Object(c.a)(["\n  width: 100%;\n  height: 42px;\n  padding: 0 5px;\n  font-size: 1.6rem;\n  text-align-last: left;\n  border-bottom: 1px solid #ddd;\n  ","\n"]);return pn=function(){return n},n}function hn(){var n=Object(c.a)(["\n  color: inherit;\n  border-top: 1px solid #ddd;\n"]);return hn=function(){return n},n}function On(){var n=Object(c.a)(["\n  color: #0770cf;\n  border-top: 2px solid currentColor;\n  box-shadow: 0 5px 13px -2px rgba(0, 0, 0, 0.8);\n"]);return On=function(){return n},n}var xn=Object(l.b)(On()),vn=Object(l.b)(hn()),gn=l.c.button(pn(),(function(n){return n.active?xn:vn})),mn=Object(l.c)(G.a)(fn(),(function(n){return n.active?"#0770cf":"inherit"}),(function(n){return n.active?"rotate(0.5turn)":""})),yn=Object(l.c)((function(n){var t=n.btnText,e=n.className,c=n.listItems,i=Object(o.useState)(!1),a=Object(_.a)(i,2),u=a[0],s=a[1],l=Object(o.useCallback)((function(){return s((function(n){return!n}))}),[]);return Object(r.jsxs)("div",{className:e,children:[Object(r.jsx)(gn,{type:"button",active:u,onClick:l,"aria-haspopup":"listbox","aria-expanded":u,children:t}),Object(r.jsx)(mn,{active:u}),Object(r.jsx)(bn,{isOpen:u,menuOptions:Object.entries(c)})]})}))(jn());function wn(){var n=Object(c.a)(["\n  padding: 10px 0;\n  background-color: #eee;\n"]);return wn=function(){return n},n}function Sn(){var n=Object(c.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 1350px;\n  margin: 0 auto;\n"]);return Sn=function(){return n},n}var Cn=l.c.div(Sn()),En=Object(l.c)((function(n){var t=n.className,e=(n.currentSort,n.sort);return Object(r.jsx)("div",{className:t,children:Object(r.jsx)(Cn,{children:Object(r.jsx)(yn,{btnText:"Sort",listItems:{"What's new":function(){return e("novelty")},"Price low to high":function(){return e("price_ascending")},"Price high to low":function(){return e("price_descending")}}})})})}))(wn()),_n=Object(s.b)((function(n){return{currentSort:n.filters.sortBy}}),(function(n){return{sort:Object(b.bindActionCreators)(S,n)}}))(En),In=function(n){return{type:"ADD_TO_SAVED_ITEMS",payload:n}},Tn=function(n){return{type:"REMOVE_FROM_SAVED_ITEMS",payload:n}},kn=e(21);function An(){var n=Object(c.a)(["\n  position: absolute;\n  top: 360px;\n  right: 10px;\n  width: 40px;\n  height: 40px;\n  background-color: white;\n  border-radius: 50%;\n  cursor: default;\n  &:hover,\n  &:focus {\n    box-shadow: 0 2px 4px 0 rgba(45, 45, 45, 0.14);\n  }\n  svg {\n    margin-top: 5px;\n  }\n"]);return An=function(){return n},n}var Rn=Object(l.c)((function(n){var t=n.handleClick,e=n.className,c=n.isAlreadyInSavedItemsList,i=Object(o.useState)(!1),a=Object(_.a)(i,2),u=a[0],s=a[1],l=Object(o.useCallback)((function(){return s(!0)}),[]),d=Object(o.useCallback)((function(){return s(!1)}),[]),b=Object(o.useMemo)((function(){return{onClick:t,onPointerEnter:l,onFocus:l,onPointerLeave:d,onBlur:d}}),[t,l,d]);return Object(r.jsx)("button",Object(h.a)(Object(h.a)({type:"button",className:e},b),{},{children:c||u?Object(r.jsx)(kn.b,{}):Object(r.jsx)(kn.a,{})}))}))(An()),Fn=Object(o.createContext)(null);function Nn(){var n=Object(c.a)(["\n  font-weight: 700;\n  font-size: 1.5rem;\n"]);return Nn=function(){return n},n}function Ln(){var n=Object(c.a)(["\n  height: 45px;\n  line-height: 20px;\n"]);return Ln=function(){return n},n}function zn(){var n=Object(c.a)(["\n  width: 100%;\n  height: 410px;\n  object-fit: cover;\n"]);return zn=function(){return n},n}function Bn(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  color: var(--standard-color);\n  font-size: 1.4rem;\n  row-gap: 10px;\n"]);return Bn=function(){return n},n}var Mn=l.c.a(Bn()),Gn=l.c.img(zn()),Pn=l.c.p(Ln()),Yn=l.c.p(Nn()),Dn=Object(s.b)(null,(function(n){return{addToSavedItems:Object(b.bindActionCreators)(In,n)}}))((function(n){var t=n.product,e=n.addToSavedItems,c=t.price,i=t.title,a=t.img,u=t.id,s="$".concat(c.toFixed(2)),l=Object(o.useContext)(Fn);return Object(r.jsxs)("article",{style:{position:"relative"},children:[Object(r.jsxs)(Mn,{href:"/","aria-label":"".concat(i,"; Price: ").concat(s),children:[Object(r.jsx)(Gn,{alt:"",src:a}),Object(r.jsx)(Pn,{children:i}),Object(r.jsx)(Yn,{children:s})]}),Object(r.jsx)(Rn,{isAlreadyInSavedItemsList:null===l||void 0===l?void 0:l.includes(u),handleClick:function(){return e(u)}})]})}));function Vn(){var n=Object(c.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 35px 20px;\n  max-width: 1350px;\n  margin: 30px auto;\n"]);return Vn=function(){return n},n}var Un=l.c.div(Vn()),Hn=function(n,t){if("success"===n.status){var e=n.fetchResult,r=t.sortBy,c=t.byTitle,o=t.byGender,i=t.byPrice;if(c&&(e=e.filter((function(n){return n.title.toLowerCase().includes(c.toLowerCase())}))),o&&(e=e.filter((function(n){return n.gender===o}))),i){var a,u,s=null!==(a=i[0])&&void 0!==a?a:-1/0,l=null!==(u=i[1])&&void 0!==u?u:1/0;e=e.filter((function(n){var t=n.price;return t>=s&&t<=l}))}return"price_ascending"===r?e.sort((function(n,t){return n.price-t.price})):"price_descending"===r&&e.sort((function(n,t){return t.price-n.price})),Object(h.a)(Object(h.a)({},n),{},{fetchResult:e})}return n},Jn=Object(s.b)((function(n){var t=n.catalog,e=n.filters,r=n.savedItems;return{catalog:Hn(t,e),savedItems:r}}),(function(n){return{fetchCatalog:Object(b.bindActionCreators)(Z,n),filterByGender:Object(b.bindActionCreators)(E,n)}}))((function(n){var t=n.catalog,e=n.fetchCatalog,c=n.filterByGender,i=n.savedItems,a=Object(y.g)().gender;return Object(o.useEffect)((function(){"loading"===t.status&&e("".concat("/clothing-store","/catalog.json")),c(a)}),[a,c,e,t.status]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(_n,{}),Object(r.jsx)(Fn.Provider,{value:i,children:Object(r.jsx)("section",{children:Object(r.jsx)(Un,{children:"success"===t.status&&t.fetchResult.map((function(n){return Object(r.jsx)(Dn,{product:n},n.id)}))})})})]})})),Wn=e(42);function $n(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  grid-column: 1 / -1;\n  align-items: center;\n  justify-content: center;\n  justify-self: center;\n  max-width: 300px;\n  height: 300px;\n  text-align: center;\n  row-gap: 20px;\n"]);return $n=function(){return n},n}function Kn(){var n=Object(c.a)(["\n  font-size: 1.6em;\n  line-height: 22px;\n  letter-spacing: 0.025em;\n"]);return Kn=function(){return n},n}function qn(){var n=Object(c.a)(["\n  font-weight: 700;\n  font-size: 1.8em;\n"]);return qn=function(){return n},n}var Qn=l.c.h3(qn()),Xn=l.c.p(Kn()),Zn=Object(l.c)((function(n){var t=n.className;return Object(r.jsxs)("div",{className:t,children:[Object(r.jsx)(G.c,{size:30}),Object(r.jsx)(Qn,{children:"You have no saved items"}),Object(r.jsx)(Xn,{children:"You haven't added anything to the list of saved items yet. Look through our catalog and choose something for yourself."})]})}))($n());function nt(){var n=Object(c.a)(["\n  position: relative;\n  font-size: 1.4rem;\n  letter-spacing: 0.05em;\n"]);return nt=function(){return n},n}function tt(){var n=Object(c.a)(["\n  width: 100%;\n  height: 35px;\n  margin-top: 15px;\n  color: #2d2d2d;\n  font-weight: 700;\n  text-transform: uppercase;\n  border: 2px solid #018849;\n"]);return tt=function(){return n},n}function et(){var n=Object(c.a)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 40px;\n  height: 40px;\n  background-color: rgba(255, 255, 255, 0.8);\n  border-radius: 50%;\n  cursor: default;\n  svg {\n    margin-top: 4px;\n  }\n"]);return et=function(){return n},n}function rt(){var n=Object(c.a)(["\n  margin-top: 10px;\n  color: #666;\n  font-weight: 700;\n"]);return rt=function(){return n},n}function ct(){var n=Object(c.a)(["\n  height: 45px;\n  margin-top: 10px;\n  line-height: 20px;\n"]);return ct=function(){return n},n}function ot(){var n=Object(c.a)(["\n  width: 100%;\n  height: 410px;\n  object-fit: cover;\n"]);return ot=function(){return n},n}var it=l.c.img(ot()),at=l.c.p(ct()),ut=l.c.div(rt()),st=l.c.button(et()),lt=l.c.button(tt()),dt=Object(l.c)((function(n){var t=n.className,e=n.product,c=n.removeFromSavedItems,o=e.price,i=e.title,a=e.img,u="$".concat(o.toFixed(2));return Object(r.jsxs)("article",{className:t,children:[Object(r.jsxs)("a",{href:"/","aria-label":"".concat(i,"; Price: ").concat(u),children:[Object(r.jsx)(it,{alt:"",src:a}),Object(r.jsx)(at,{children:i}),Object(r.jsx)(ut,{children:u})]}),Object(r.jsx)(lt,{type:"button",children:"Move to cart"}),Object(r.jsx)(st,{type:"button",onClick:c,children:Object(r.jsx)(kn.c,{})})]})}))(nt());function bt(){var n=Object(c.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 40px 15px;\n  max-width: 1350px;\n  margin: 50px auto;\n"]);return bt=function(){return n},n}function jt(){var n=Object(c.a)(["\n  padding: 25px 0;\n  color: #2d2d2d;\n  font-size: 2.4rem;\n  text-align: center;\n  background-color: #eee;\n"]);return jt=function(){return n},n}var ft=l.c.h2(jt()),pt=l.c.div(bt()),ht=Object(s.b)((function(n){return{catalog:n.catalog,savedItems:n.savedItems}}),(function(n){return{removeFromSavedItems:Object(b.bindActionCreators)(Tn,n)}}))((function(n){var t=n.catalog,e=n.savedItems,c=n.removeFromSavedItems;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ft,{children:"Saved Items"}),Object(r.jsxs)(pt,{children:[0===e.length&&Object(r.jsx)(Zn,{}),"success"===t.status&&t.fetchResult.filter((function(n){var t=n.id;return e.includes(t)})).map((function(n){var t=n.id,e=Object(Wn.a)(n,["id"]);return Object(r.jsx)(dt,{removeFromSavedItems:function(){return c(t)},product:e},t)}))]})]})})),Ot=function(){return Object(r.jsxs)(w.b.Provider,{value:{size:"20px"},children:[Object(r.jsx)(X,{}),Object(r.jsxs)(y.d,{children:[Object(r.jsx)(y.b,{path:"/saved-items",component:ht}),Object(r.jsx)(y.b,{path:"/:gender",component:Jn}),Object(r.jsx)(y.a,{from:"/",to:"/men"})]})]})};function xt(){var n=Object(c.a)(["\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n\n    @media screen and (prefers-reduced-motion: reduce) {\n      transition: none;\n    }\n  }\n  :root {\n    font-size: 10px;\n    font-family: 'Roboto', sans-serif;\n\n    --standard-color: #2d2d2d;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  button {\n    background: none;\n    border: none;\n    cursor: pointer;\n  }\n  ul {\n    list-style: none;\n  }\n"]);return xt=function(){return n},n}var vt=Object(l.a)(xt());u.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(s.a,{store:m,children:Object(r.jsxs)(d.a,{children:[Object(r.jsx)(vt,{}),Object(r.jsx)(Ot,{})]})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.e7160b75.chunk.js.map