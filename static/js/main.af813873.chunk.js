(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var d=n(1),i=n.n(d),c=n(6),o=n.n(c),s=n(4),a=n(7),l=n(0);var u=function(e){var t=e.itemName,n=e.index;return Object(l.jsxs)("div",{className:"todo__item",id:t,children:[Object(l.jsx)("div",{className:"todo__itemName",id:"itemName"+t+n,children:t}),Object(l.jsxs)("div",{className:"todo__editBar",id:"editBar"+t+n,style:{display:"none"},children:[Object(l.jsx)("input",{className:"todo__editInput",id:"editInput"+t+n,type:"text",defaultValue:t,onKeyDown:function(d){"Enter"===d.code&&e.editItem(t,document.getElementById("editInput"+t+n).value)}}),Object(l.jsx)("button",{className:"todo__editButton",onClick:function(){return e.editItem(t,n,document.getElementById("editInput"+t+n).value)},children:"SAVE"})]}),Object(l.jsxs)("div",{className:"todo__buttonsBar",children:[Object(l.jsx)("button",{className:"todo__itemEditing",onClick:function(){document.getElementById("itemName"+t+n).style.display="none",document.getElementById("editBar"+t+n).style.display="flex",document.getElementById("editInput"+t+n).focus()},children:"EDIT"}),Object(l.jsx)("button",{className:"todo__itemDeleting",onClick:function(){return e.deleteItem(t)},children:"X"})]})]},t+n)};var m=function(e){var t=e.list,n=e.deleteItem,d=e.editItem,i=[],c=0;return t.forEach((function(e){i.push(Object(l.jsx)(u,{itemName:e,deleteItem:n,editItem:d,index:c})),c+=1})),Object(l.jsx)("div",{className:"todo__itemList",children:i})};var r=function(e){return Object(l.jsxs)("div",{className:"todo__itemAdding",children:[Object(l.jsx)("input",{type:"text",className:"todo__input",id:"todo__input",onKeyDown:function(t){"Enter"===t.code&&e.addNewItem()}}),Object(l.jsx)("button",{className:"todo__addButton",onClick:e.addNewItem,children:"ADD"})]})};var j=function(){return Object(l.jsx)("div",{className:"todo__header",children:"TO-DO LIST"})};n(13);var b=function(){var e=Object(d.useState)(["Get up"]),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(l.jsxs)("div",{className:"todo",children:[Object(l.jsx)(j,{}),Object(l.jsx)(m,{list:n,setList:i,deleteItem:function(e){var t=n.indexOf(e);n.splice(t,1),i(Object(s.a)(n))},editItem:function(e,t,d){document.getElementById("itemName"+e+t).style.display="flex",document.getElementById("editBar"+e+t).style.display="none",n[t]=d,i(Object(s.a)(n))}}),Object(l.jsx)(r,{addNewItem:function(){var e=document.getElementById("todo__input");""!==e.value&&i([].concat(Object(s.a)(n),[e.value])),e.value=""}})]})};o.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.af813873.chunk.js.map