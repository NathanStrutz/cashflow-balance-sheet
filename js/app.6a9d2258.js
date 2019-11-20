(function(e){function t(t){for(var r,i,c=t[0],o=t[1],u=t[2],p=0,h=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&h.push(a[i][0]),a[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);l&&l(t);while(h.length)h.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/cashflow-balance-sheet/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=o;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0786":function(e,t,n){"use strict";var r=n("316b"),a=n.n(r);a.a},"2d4b":function(e,t,n){"use strict";var r=n("4c08"),a=n.n(r);a.a},"316b":function(e,t,n){},"35fb":function(e,t,n){},"36c5":function(e,t,n){},3789:function(e,t,n){"use strict";var r=n("35fb"),a=n.n(r);a.a},"3af5":function(e,t,n){},4500:function(e,t,n){},"4c08":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("cashflow-header"),n("cashflow-statement"),n("monthly-cash-flow"),n("balance-sheet")],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("header",[n("title-input",{attrs:{id:"profession"}},[e._v("Profession")]),n("title-input",{attrs:{id:"player"}},[e._v("Player")])],1),n("p",[e._v(" Goal: To get out of the Rat Race and onto the Fast Track by building up your Passive Income to be greater than your Total Expenses ")])])},c=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title-input"},[n("label",[e._t("default")],2),n("input",{attrs:{type:"text",id:e.id}})])},u=[],l={props:{id:String}},p=l,h=(n("2d4b"),n("2877")),f=Object(h["a"])(p,o,u,!1,null,null,null),m=f.exports,b={components:{TitleInput:m}},d=b,v=(n("7d81"),Object(h["a"])(d,i,c,!1,null,null,null)),g=v.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Income Statement")]),n("section",{attrs:{id:"cashflow-statement-area"}},[n("cashflow-statement-income"),n("cashflow-statement-income-summary"),n("cashflow-statement-expenses"),n("cashflow-statement-expenses-summary")],1)])},O=[],j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"income"},[n("h3",{staticClass:"column-title-bar"},[e._v("Income")]),n("table",{staticClass:"line-inputs"},[e._m(0),n("tbody",[n("state-connected-input",{attrs:{category:"income",title:"Salary",item:"salary",change:"changeSalary"}}),n("state-connected-input",{attrs:{category:"income",title:"Interest",item:"interest",change:"changeInterest"}}),n("state-connected-input",{attrs:{category:"income",item:"interest2",change:"changeInterest2"}})],1),n("income-real-estate"),n("income-businesses")],1)])},x=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",{staticClass:"column-header"},[n("th",[e._v("Description")]),n("th",[e._v("Cash Flow")])])])}],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("line-input",{attrs:{title:e.title,text:e.data.note,value:e.data.value,hasText:e.hasText},on:{updateText:e.changeText,updateValue:e.changeValue}})},w=[],E=(n("a9e3"),n("2f62")),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",{class:e.title?"line-input":"blank-line-input"},[n("td",[e.title?n("label",[e._v(e._s(e.title)+":")]):e._e(),e.hasText?n("input",{attrs:{type:"text"},domProps:{value:e.text},on:{input:function(t){return e.$emit("updateText",t.target.value)}}}):e._e()]),n("td",{attrs:{colspan:e.hasText?1:2}},[n("input",{staticClass:"numeric",attrs:{type:"text",readonly:e.readonly},domProps:{value:e.value},on:{input:function(t){return e.$emit("updateValue",t.target.value)},keypress:e.numbersOnly}})])])},C=[],S=(n("8ba4"),{props:{title:String,text:String,value:Number,readonly:Boolean,hasText:{type:Boolean,default:!0}},methods:{numbersOnly:function(e){return!!Number.isInteger(Number(e.key))||e.preventDefault()}}}),k=S,D=(n("c69c"),Object(h["a"])(k,_,C,!1,null,null,null)),L=D.exports,N={components:{LineInput:L},props:{title:String,category:String,item:String,change:String},computed:{data:function(){return this.$store.state[this.category][this.item]},hasText:function(){return!(void 0===this.data.note)}},methods:{changeText:function(e){this.$store.commit(this.category+"/"+this.change,{note:e})},changeValue:function(e){this.$store.commit(this.category+"/"+this.change,{value:Number(e)})}}},$=N,I=Object(h["a"])($,P,w,!1,null,null,null),B=I.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tbody",e._l(e.realEstate,(function(t,r){return n("tr",{key:r,class:0===r?"line-input":"blank-line-input"},[n("td",[0===r?n("label",[e._v("Real Estate:")]):e._e(),n("input",{attrs:{type:"text"},domProps:{value:t.name},on:{input:function(t){return e.changeName(t,r)}}})]),n("td",[n("input",{staticClass:"numeric",attrs:{type:"text"},domProps:{value:t.income},on:{input:function(t){return e.changeIncome(t,r)}}})])])})),0)},T=[],M=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7"));function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(n,!0).forEach((function(t){Object(M["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F={computed:A({},Object(E["d"])("investments",["realEstate"])),methods:A({},Object(E["c"])("investments",["changeRealEstateName","changeRealEstateIncome"]),{changeName:function(e,t){this.changeRealEstateName({index:t,value:e.target.value})},changeIncome:function(e,t){this.changeRealEstateIncome({index:t,value:Number(e.target.value)})}})},H=F,J=Object(h["a"])(H,R,T,!1,null,null,null),G=J.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tbody",e._l(e.businesses,(function(t,r){return n("tr",{key:r,class:0===r?"line-input":"blank-line-input"},[n("td",[0===r?n("label",[e._v("Businesses:")]):e._e(),n("input",{attrs:{type:"text"},domProps:{value:t.name},on:{input:function(t){return e.changeName(t,r)}}})]),n("td",[n("input",{staticClass:"numeric",attrs:{type:"text"},domProps:{value:t.income},on:{input:function(t){return e.changeIncome(t,r)}}})])])})),0)},z=[];function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(n,!0).forEach((function(t){Object(M["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U={computed:Q({},Object(E["d"])("investments",["businesses"])),methods:Q({},Object(E["c"])("investments",["changeBusinessName","changeBusinessIncome"]),{changeName:function(e,t){this.changeBusinessName({index:t,value:e.target.value})},changeIncome:function(e,t){this.changeBusinessIncome({index:t,value:Number(e.target.value)})}})},W=U,X=Object(h["a"])(W,q,z,!1,null,null,null),Y=X.exports,Z={components:{StateConnectedInput:B,IncomeRealEstate:G,IncomeBusinesses:Y},computed:{},methods:{}},ee=Z,te=(n("c9fb"),Object(h["a"])(ee,j,x,!1,null,null,null)),ne=te.exports,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"income-summary"}},[n("div",{attrs:{id:"auditor-area"}},[n("title-input",{attrs:{id:"auditor"}},[e._v("Auditor")]),n("sub",[e._v("Person on your right")])],1),n("div",{attrs:{id:"passive-income-area"}},[n("div",{staticClass:"passive-income-area"},[n("label",[e._v("Passive Income =")]),n("input",{staticClass:"numeric",attrs:{type:"text",id:"passive-income",readonly:""},domProps:{value:e.passiveIncome}})]),n("sub",[e._v("(Cash flows from Interest + Dividends + Real Estate + Businesses")])]),n("div",{staticClass:"total-io"},[n("label",{attrs:{for:"total-income"}},[e._v("Total Income:")]),n("input",{staticClass:"numeric",attrs:{type:"text",id:"total-income",readonly:""},domProps:{value:e.totalIncome}})])])},ae=[];function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(n,!0).forEach((function(t){Object(M["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ce={components:{TitleInput:m},computed:ie({},Object(E["b"])(["auditor","passiveIncome","totalIncome"]))},oe=ce,ue=(n("0786"),Object(h["a"])(oe,re,ae,!1,null,null,null)),le=ue.exports,pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"expenses"},[n("h3",{staticClass:"column-title-bar"},[e._v("Expenses")]),n("table",{staticClass:"line-inputs"},[n("tbody",[n("state-connected-input",{attrs:{title:"Taxes",category:"expenses",item:"taxes",change:"changeTaxes"}}),n("state-connected-input",{attrs:{title:"Home Mortgage",category:"expenses",item:"mortgage",change:"changeMortgage"}}),n("state-connected-input",{attrs:{title:"School Loan Payment",category:"expenses",item:"schoolLoan",change:"changeSchoolLoan"}}),n("state-connected-input",{attrs:{title:"Car Payment",category:"expenses",item:"carLoan",change:"changeCarLoan"}}),n("state-connected-input",{attrs:{title:"Credit Card Payment",category:"expenses",item:"creditCard",change:"changeCreditCard"}}),n("state-connected-input",{attrs:{title:"Retail Payment",category:"expenses",item:"retail",change:"changeRetail"}}),n("state-connected-input",{attrs:{title:"Other Expenses",category:"expenses",item:"other",change:"changeOther"}}),n("line-input",{attrs:{title:"Child Expenses",text:e.children.note,value:e.childExpenses,readonly:""},on:{updateText:e.changeChildNote}}),n("state-connected-input",{attrs:{title:"Bank Loan Payment",category:"expenses",item:"bankLoan",change:"changeBankLoan"}}),n("state-connected-input",{attrs:{category:"expenses",item:"miscellaneousExpense",change:"changeMiscellaneousExpense"}})],1)])])},he=[];function fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fe(n,!0).forEach((function(t){Object(M["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var be={components:{StateConnectedInput:B,LineInput:L},computed:me({},Object(E["d"])("expenses",["children"]),{},Object(E["d"])(["childExpenses"])),methods:me({},Object(E["c"])("expenses",["changeChildNote"]))},de=be,ve=(n("9f84"),Object(h["a"])(de,pe,he,!1,null,null,null)),ge=ve.exports,ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"expense-summary"}},[n("children-box"),n("div",{staticClass:"total-io"},[n("label",{attrs:{for:"total-expenses"}},[e._v("Total Expenses:")]),n("input",{staticClass:"numeric",attrs:{type:"text",id:"total-expenses",readonly:""},domProps:{value:e.totalExpenses}})])],1)},Oe=[],je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"children-box"}},[n("div",{staticClass:"children-input"},[e._m(0),n("input",{staticClass:"numeric",attrs:{type:"text",id:"number-of-children"},domProps:{value:e.children.numberOfChildren},on:{input:function(t){return e.changeNumberOfChildren(t.target.value)}}})]),n("sub",[e._v("(Begin game with 0 children)")]),n("div",{staticClass:"children-input"},[e._m(1),n("input",{staticClass:"numeric",attrs:{type:"text",id:"per-child-expense"},domProps:{value:e.children.perChildExpense},on:{input:function(t){return e.changePerChildExpense(t.target.value)}}})])])},xe=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{attrs:{for:"number-of-children"}},[e._v(" Number of "),n("br"),e._v("Children: ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{attrs:{for:"per-child-expense"}},[e._v(" Per Child "),n("br"),e._v("Expense: ")])}];function Pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Pe(n,!0).forEach((function(t){Object(M["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ee={computed:we({},Object(E["d"])("expenses",["children"])),methods:we({},Object(E["c"])("expenses",["changeNumberOfChildren","changePerChildExpense"]))},_e=Ee,Ce=(n("86e6"),Object(h["a"])(_e,je,xe,!1,null,null,null)),Se=Ce.exports;function ke(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function De(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ke(n,!0).forEach((function(t){Object(M["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ke(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Le={components:{ChildrenBox:Se},computed:De({},Object(E["b"])(["totalExpenses"]))},Ne=Le,$e=(n("3789"),Object(h["a"])(Ne,ye,Oe,!1,null,null,null)),Ie=$e.exports,Be={components:{CashflowStatementIncome:ne,CashflowStatementIncomeSummary:le,CashflowStatementExpenses:ge,CashflowStatementExpensesSummary:Ie}},Re=Be,Te=(n("8ae8"),Object(h["a"])(Re,y,O,!1,null,null,null)),Me=Te.exports,Ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"monthly-cash-flow-area"}},[n("div",{staticClass:"total-io"},[e._m(0),n("input",{staticClass:"numeric",attrs:{type:"text",id:"monthly-cash-flow",readonly:""},domProps:{value:e.cashFlow}})])])},Ae=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{attrs:{for:"monthly-cash-flow"}},[e._v(" Monthly Cash Flow: "),n("sub",[e._v("(Pay Check)")])])}];function Fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function He(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Fe(n,!0).forEach((function(t){Object(M["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Je={computed:He({},Object(E["b"])(["cashFlow"]))},Ge=Je,qe=(n("7bc5"),Object(h["a"])(Ge,Ve,Ae,!1,null,null,null)),ze=qe.exports,Ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{attrs:{id:"balance-sheet-title"}},[e._v("Balance Sheet")]),n("section",{attrs:{id:"balance-sheet-area"}},[n("balance-sheet-assets"),n("balance-sheet-liabilities")],1)])},Qe=[],Ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"assets"}},[n("h3",{staticClass:"column-title-bar"},[e._v("Assets")]),n("div",{attrs:{id:"asset-list"}},[n("div",{staticClass:"line-input"},[n("label",{attrs:{for:"savings"}},[e._v("Savings:")]),n("input",{staticClass:"numeric",attrs:{type:"text",id:"savings"},domProps:{value:e.savings},on:{input:function(t){return e.changeSavings(t.target.value)}}})]),e._m(0),e._l(e.stocks,(function(e,t){return n("stock-mutual-cd-asset-row",{key:"st"+t,attrs:{index:t}})})),e._m(1),e._l(e.realEstate,(function(e,t){return n("real-estate-asset-row",{key:"re"+t,attrs:{index:t}})})),e._m(2),e._l(e.businesses,(function(e,t){return n("business-asset-row",{key:"bu"+t,attrs:{index:t}})}))],2)])},We=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"line-input all-text"},[n("div",[e._v("Stocks/Mutual's/CDs")]),n("div",[e._v("No. of Shares:")]),n("div",[e._v("Cost/Share:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"line-input all-text"},[n("div",[e._v("Real Estate:")]),n("div",[e._v("Down Pay:")]),n("div",[e._v("Cost:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"line-input all-text"},[n("div",[e._v("Business:")]),n("div",[e._v("Down Pay:")]),n("div",[e._v("Cost:")])])}],Xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"line-input"},[n("input",{attrs:{type:"text"},domProps:{value:e.stock.name},on:{input:e.changeStockName}}),n("input",{staticClass:"numeric",attrs:{type:"text"},domProps:{value:e.stock.shares},on:{input:e.changeStockShares}}),n("input",{staticClass:"numeric",attrs:{type:"text"},domProps:{value:e.stock.costPerShare},on:{input:e.changeStockCostPerShare}})])},Ye=[];function Ze(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function et(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ze(n,!0).forEach((function(t){Object(M["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ze(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var tt={props:{index:Number},computed:et({},Object(E["b"])("investments",["getStock"]),{stock:function(){return this.getStock(this.index)}}),methods:{changeStockName:function(e){this.$store.commit("investments/changeStockName",{index:this.index,value:e.target.value})},changeStockShares:function(e){this.$store.commit("investments/changeStockShares",{index:this.index,value:e.target.value})},changeStockCostPerShare:function(e){this.$store.commit("investments/changeStockCostPerShare",{index:this.index,value:e.target.value})}}},nt=tt,rt=Object(h["a"])(nt,Xe,Ye,!1,null,null,null),at=rt.exports,st=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"line-input"},[n("input",{attrs:{type:"text"},domProps:{value:e.property.name},on:{input:e.changeName}}),n("input",{staticClass:"numeric",attrs:{type:"text"},domProps:{value:e.property.downPayment},on:{input:e.changeDownPayment}}),n("input",{staticClass:"numeric",attrs:{type:"text"},domProps:{value:e.property.cost},on:{input:e.changeCost}})])},it=[];function ct(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ot(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ct(n,!0).forEach((function(t){Object(M["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ct(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ut={props:{index:Number},computed:ot({},Object(E["b"])("investments",["getRealEstate"]),{property:function(){return this.getRealEstate(this.index)}}),methods:{changeName:function(e){this.$store.commit("investments/changeRealEstateName",{index:this.index,value:e.target.value})},changeDownPayment:function(e){this.$store.commit("investments/changeRealEstateDownPayment",{index:this.index,value:e.target.value})},changeCost:function(e){this.$store.commit("investments/changeRealEstateCost",{index:this.index,value:e.target.value})}}},lt=ut,pt=Object(h["a"])(lt,st,it,!1,null,null,null),ht=pt.exports,ft=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"line-input"},[n("input",{attrs:{type:"text"},domProps:{value:e.business.name},on:{input:e.changeName}}),n("input",{staticClass:"numeric",attrs:{type:"text"},domProps:{value:e.business.downPayment},on:{input:e.changeDownPayment}}),n("input",{staticClass:"numeric",attrs:{type:"text"},domProps:{value:e.business.cost},on:{input:e.changeCost}})])},mt=[];function bt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function dt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?bt(n,!0).forEach((function(t){Object(M["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var vt={props:{index:Number},computed:dt({},Object(E["b"])("investments",["getBusiness"]),{business:function(){return this.getBusiness(this.index)}}),methods:{changeName:function(e){this.$store.commit("investments/changeBusinessName",{index:this.index,value:e.target.value})},changeDownPayment:function(e){this.$store.commit("investments/changeBusinessDownPayment",{index:this.index,value:e.target.value})},changeCost:function(e){this.$store.commit("investments/changeBusinessCost",{index:this.index,value:e.target.value})}}},gt=vt,yt=Object(h["a"])(gt,ft,mt,!1,null,null,null),Ot=yt.exports;function jt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function xt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?jt(n,!0).forEach((function(t){Object(M["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Pt={components:{StockMutualCdAssetRow:at,RealEstateAssetRow:ht,BusinessAssetRow:Ot},computed:xt({},Object(E["d"])("assets",["savings"]),{},Object(E["d"])("investments",["stocks","realEstate","businesses"])),methods:xt({},Object(E["c"])("assets",["changeSavings"]))},wt=Pt,Et=(n("9ec5"),Object(h["a"])(wt,Ue,We,!1,null,null,null)),_t=Et.exports,Ct=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"liabilities"}},[n("h3",{staticClass:"column-title-bar"},[e._v("Liabilities")]),n("table",{staticClass:"line-inputs",attrs:{id:"liability-list"}},[n("tbody",[n("state-connected-value-input",{attrs:{title:"Home Mortgage",category:"liabilities",item:"mortgage",change:"changeMortgage"}}),n("state-connected-value-input",{attrs:{title:"School Loans",category:"liabilities",item:"schoolLoan",change:"changeSchoolLoan"}}),n("state-connected-value-input",{attrs:{title:"Car Loans",category:"liabilities",item:"carLoan",change:"changeCarLoan"}}),n("state-connected-value-input",{attrs:{title:"Credit Cards",category:"liabilities",item:"creditCard",change:"changeCreditCard"}}),n("state-connected-value-input",{attrs:{title:"Retail Debt",category:"liabilities",item:"retail",change:"changeRetail"}})],1),n("liability-real-estate"),n("liability-businesses"),n("tbody",[n("state-connected-value-input",{attrs:{title:"Bank Loan",category:"liabilities",item:"bankLoan",change:"changeBankLoan"}})],1)],1)])},St=[],kt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("line-input",{attrs:{title:e.title,value:e.value,hasText:!1},on:{updateValue:e.changeValue}})},Dt=[],Lt={components:{LineInput:L},props:{title:String,category:String,item:String,change:String},computed:{value:function(){return this.$store.state[this.category][this.item]}},methods:{changeValue:function(e){this.$store.commit(this.category+"/"+this.change,{value:Number(e)})}}},Nt=Lt,$t=Object(h["a"])(Nt,kt,Dt,!1,null,null,null),It=$t.exports,Bt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tbody",e._l(e.realEstate,(function(t,r){return n("tr",{key:r,class:r?"blank-line-input":"line-input"},[r?e._e():n("td",[n("label",[e._v("RE Mortgage:")])]),n("td",{attrs:{colspan:r?2:1}},[n("input",{attrs:{type:"text"},domProps:{value:t.name},on:{input:function(t){return e.changeName(t,r)}}})]),n("td",[n("input",{staticClass:"numeric",attrs:{type:"text"},domProps:{value:t.mortgage},on:{input:function(t){return e.changeMortgage(t,r)}}})])])})),0)},Rt=[];function Tt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Mt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Tt(n,!0).forEach((function(t){Object(M["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Vt={computed:Mt({},Object(E["d"])("investments",["realEstate"])),methods:Mt({},Object(E["c"])("investments",["changeRealEstateName","changeRealEstateIncome"]),{changeName:function(e,t){this.changeRealEstateName({index:t,value:e.target.value})},changeMortgage:function(e,t){this.changeRealEstateMortgage({index:t,value:Number(e.target.value)})}})},At=Vt,Ft=Object(h["a"])(At,Bt,Rt,!1,null,null,null),Ht=Ft.exports,Jt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tbody",e._l(e.businesses,(function(t,r){return n("tr",{key:r,class:r?"blank-line-input":"line-input"},[r?e._e():n("td",[n("label",[e._v("Liability: (Business)")])]),n("td",{attrs:{colspan:r?2:1}},[n("input",{attrs:{type:"text"},domProps:{value:t.name},on:{input:function(t){return e.changeName(t,r)}}})]),n("td",[n("input",{staticClass:"numeric",attrs:{type:"text"},domProps:{value:t.liability},on:{input:function(t){return e.changeLiability(t,r)}}})])])})),0)},Gt=[];function qt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function zt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?qt(n,!0).forEach((function(t){Object(M["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Kt={computed:zt({},Object(E["d"])("investments",["businesses"])),methods:zt({},Object(E["c"])("investments",["changeBusinessName","changeBusinessLiability"]),{changeName:function(e,t){this.changeBusinessName({index:t,value:e.target.value})},changeLiability:function(e,t){this.changeBusinessLiability({index:t,value:Number(e.target.value)})}})},Qt=Kt,Ut=Object(h["a"])(Qt,Jt,Gt,!1,null,null,null),Wt=Ut.exports,Xt={components:{StateConnectedValueInput:It,LiabilityRealEstate:Ht,LiabilityBusinesses:Wt}},Yt=Xt,Zt=(n("9d33"),Object(h["a"])(Yt,Ct,St,!1,null,null,null)),en=Zt.exports,tn={components:{BalanceSheetAssets:_t,BalanceSheetLiabilities:en}},nn=tn,rn=(n("582c"),Object(h["a"])(nn,Ke,Qe,!1,null,null,null)),an=rn.exports,sn={name:"app",components:{CashflowHeader:g,CashflowStatement:Me,MonthlyCashFlow:ze,BalanceSheet:an}},cn=sn,on=(n("5c0b"),Object(h["a"])(cn,a,s,!1,null,null,null)),un=on.exports;n("13d5");function ln(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function pn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ln(n,!0).forEach((function(t){Object(M["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ln(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var hn={namespaced:!0,state:{salary:{note:"",value:0},interest:{note:"",value:0},interest2:{note:"",value:0}},mutations:{changeSalary:function(e,t){return e.salary=pn({},e.salary,{},t)},changeInterest:function(e,t){return e.interest=pn({},e.interest,{},t)},changeInterest2:function(e,t){return e.interest2=pn({},e.interest2,{},t)}}};function fn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function mn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fn(n,!0).forEach((function(t){Object(M["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fn(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var bn={namespaced:!0,state:{taxes:{note:"",value:0},mortgage:{note:"",value:0},schoolLoan:{note:"",value:0},carLoan:{note:"",value:0},creditCard:{note:"",value:0},retail:{note:"",value:0},other:{note:"",value:0},bankLoan:{note:"",value:0},miscellaneousExpense:{note:"",value:0},children:{note:"",numberOfChildren:0,perChildExpense:0}},mutations:{changeTaxes:function(e,t){return e.taxes=mn({},e.taxes,{},t)},changeMortgage:function(e,t){return e.mortgage=mn({},e.mortgage,{},t)},changeSchoolLoan:function(e,t){return e.schoolLoan=mn({},e.schoolLoan,{},t)},changeCarLoan:function(e,t){return e.carLoan=mn({},e.carLoan,{},t)},changeCreditCard:function(e,t){return e.creditCard=mn({},e.creditCard,{},t)},changeRetail:function(e,t){return e.retail=mn({},e.retail,{},t)},changeOther:function(e,t){return e.other=mn({},e.other,{},t)},changeBankLoan:function(e,t){return e.bankLoan=mn({},e.bankLoan,{},t)},changeMiscellaneousExpense:function(e,t){return e.miscellaneousExpense=mn({},e.miscellaneousExpense,{},t)},changeChildNote:function(e,t){return e.children.note=t},changeNumberOfChildren:function(e,t){return e.children.numberOfChildren=t},changePerChildExpense:function(e,t){return e.children.perChildExpense=t}}},dn={namespaced:!0,state:{mortgage:0,schoolLoan:0,carLoan:0,creditCard:0,retail:0,bankLoan:0},mutations:{changeMortgage:function(e,t){var n=t.value;return e.mortgage=n},changeSchoolLoan:function(e,t){var n=t.value;return e.schoolLoan=n},changeCarLoan:function(e,t){var n=t.value;return e.carLoan=n},changeCreditCard:function(e,t){var n=t.value;return e.creditCard=n},changeRetail:function(e,t){var n=t.value;return e.retail=n},changeBankLoan:function(e,t){var n=t.value;return e.bankLoan=n}}},vn={namespaced:!0,state:{profession:"",player:"",auditor:""},mutations:{changeProfession:function(e,t){return e.profession=t},changePlayer:function(e,t){return e.player=t},changeAuditor:function(e,t){return e.auditor=t}}},gn={namespaced:!0,state:{savings:0},mutations:{changeSavings:function(e,t){return e.savings=t}}},yn=(n("b0c0"),function(){return{name:"",shares:0,costPerShare:0}}),On=function(){return{name:"",downPayment:0,cost:0,mortgage:0,income:0}},jn=function(){return{name:"",downPayment:0,cost:0,liability:0,income:0}},xn={namespaced:!0,state:{realEstate:[On(),On(),On(),On()],businesses:[jn(),jn()],stocks:[yn(),yn()]},getters:{getStock:function(e){return function(t){return e.stocks[t]}},getRealEstate:function(e){return function(t){return e.realEstate[t]}},getBusiness:function(e){return function(t){return e.businesses[t]}}},mutations:{changeStockName:function(e,t){var n=t.index,r=t.value;return e.stocks[n].name=r},changeStockShares:function(e,t){var n=t.index,r=t.value;return e.stocks[n].shares=r},changeStockCostPerShare:function(e,t){var n=t.index,r=t.value;return e.stocks[n].costPerShare=r},changeRealEstateName:function(e,t){var n=t.index,r=t.value;return e.realEstate[n].name=r},changeRealEstateDownPayment:function(e,t){var n=t.index,r=t.value;return e.realEstate[n].downPayment=r},changeRealEstateCost:function(e,t){var n=t.index,r=t.value;return e.realEstate[n].cost=r},changeRealEstateMortgage:function(e,t){var n=t.index,r=t.value;return e.realEstate[n].mortgage=r},changeRealEstateIncome:function(e,t){var n=t.index,r=t.value;return e.realEstate[n].income=r},changeBusinessName:function(e,t){var n=t.index,r=t.value;return e.businesses[n].name=r},changeBusinessDownPayment:function(e,t){var n=t.index,r=t.value;return e.businesses[n].downPayment=r},changeBusinessCost:function(e,t){var n=t.index,r=t.value;return e.businesses[n].cost=r},changeBusinessLiability:function(e,t){var n=t.index,r=t.value;return e.businesses[n].liability=r},changeBusinessIncome:function(e,t){var n=t.index,r=t.value;return e.businesses[n].income=r}}};r["a"].use(E["a"]);var Pn=new E["a"].Store({getters:{passiveIncome:function(e,t,n,r){return n.income.interest.value+n.income.interest2.value+n.investments.realEstate.reduce((function(e,t){return e+t.income}),0)+n.investments.businesses.reduce((function(e,t){return e+t.income}),0)},totalIncome:function(e,t,n,r){return n.income.salary.value-0+t.passiveIncome},childExpenses:function(e,t,n,r){return n.expenses.children.numberOfChildren*n.expenses.children.perChildExpense},totalExpenses:function(e,t,n,r){return n.expenses.taxes.value+n.expenses.mortgage.value+n.expenses.schoolLoan.value+n.expenses.carLoan.value+n.expenses.creditCard.value+n.expenses.retail.value+n.expenses.other.value+n.expenses.bankLoan.value+t.childExpenses+n.expenses.miscellaneousExpense.value},cashFlow:function(e,t){return t.totalIncome-t.totalExpenses}},modules:{income:hn,expenses:bn,liabilities:dn,meta:vn,assets:gn,investments:xn}});r["a"].config.productionTip=!1,new r["a"]({store:Pn,render:function(e){return e(un)}}).$mount("#app")},"582c":function(e,t,n){"use strict";var r=n("5eb3"),a=n.n(r);a.a},"5b19":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var r=n("91c4"),a=n.n(r);a.a},"5eb3":function(e,t,n){},7278:function(e,t,n){},"7bc5":function(e,t,n){"use strict";var r=n("d66a"),a=n.n(r);a.a},"7d81":function(e,t,n){"use strict";var r=n("5b19"),a=n.n(r);a.a},"86e6":function(e,t,n){"use strict";var r=n("3af5"),a=n.n(r);a.a},"8ae8":function(e,t,n){"use strict";var r=n("4500"),a=n.n(r);a.a},"91c4":function(e,t,n){},"9c3d":function(e,t,n){},"9d33":function(e,t,n){"use strict";var r=n("7278"),a=n.n(r);a.a},"9ec5":function(e,t,n){"use strict";var r=n("9c3d"),a=n.n(r);a.a},"9f84":function(e,t,n){"use strict";var r=n("faca"),a=n.n(r);a.a},c69c:function(e,t,n){"use strict";var r=n("f3c1"),a=n.n(r);a.a},c9fb:function(e,t,n){"use strict";var r=n("36c5"),a=n.n(r);a.a},d66a:function(e,t,n){},f3c1:function(e,t,n){},faca:function(e,t,n){}});
//# sourceMappingURL=app.6a9d2258.js.map