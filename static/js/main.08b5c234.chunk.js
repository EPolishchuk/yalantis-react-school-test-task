(this["webpackJsonpyalantis-test-task"]=this["webpackJsonpyalantis-test-task"]||[]).push([[0],{42:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c,r,a,i,o,s,l,u=n(1),d=n.n(u),j=n(18),b=n.n(j),p=(n(42),n(10)),m=n(8),h=n(11),f=n(3),O=function(e){var t=function(e){var t=new Date(e);return"".concat(t.getDate()," ").concat(t.toLocaleString("en-us",{month:"long"}),", ").concat(t.getFullYear())};return Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:e.month}),e.employees.length?e.employees.sort((function(e,t){return e.lastName.localeCompare(t.lastName)})).map((function(e){return Object(f.jsx)("p",{children:"".concat(e.lastName," ").concat(e.firstName," \u2014 ").concat(t(e.dob))})})):Object(f.jsx)("p",{children:"No Employees"})]},"".concat(e.month,"-employee-dob-list"))},v=function(){var e=Object(m.c)((function(e){return e.employees.activeList})),t=h.a.section(c||(c=Object(p.a)(["\n    height: 100vh;\n    overflow: auto;\n  "]))),n=h.a.h1(r||(r=Object(p.a)(["\n    border-bottom: 1px solid #000;\n    text-align: center;\n    padding-bottom: 1.5rem;\n  "]))),i=h.a.section(a||(a=Object(p.a)(["\n    border-left: 1px solid #000;\n    min-height: 40vh;\n    padding-left: 1.5rem;\n    overflow: hidden;\n  "])));return Object(f.jsxs)(t,{children:[Object(f.jsx)(n,{children:"Employees birthday"}),Object(f.jsx)(i,{children:(null===e||void 0===e?void 0:e.length)?["November","December","January","February","March","April","May","June","July","August","September","October"].map((function(t){return Object(f.jsx)(O,{month:t,employees:e.filter((function(e){return t===(n=e.dob,new Date(n).toLocaleString("en-us",{month:"long"}));var n}))},t)})):Object(f.jsx)("p",{children:"Employees List is empty"})})]})},y=n(20),x=Object(y.b)({name:"employee",initialState:{activeList:[],employeeList:[],loading:!0},reducers:{loadEmployees:function(){},setEmployee:function(e,t){e.employeeList=t.payload,e.loading=!1},addActiveStatus:function(e,t){e.activeList.find((function(e){return e.id===t.payload.id}))||e.activeList.push(t.payload)},removeActiveStatus:function(e,t){e.activeList=e.activeList.filter((function(e){return e.id!==t.payload.id}))}}}),g=x.actions,w=g.setEmployee,L=g.loadEmployees,N=g.addActiveStatus,E=g.removeActiveStatus,S=x.reducer,k=function(e){var t=Object(m.b)(),n=Object(m.c)((function(e){return e.employees.employeeList})),c=Object(m.c)((function(e){return e.employees.loading})),r=n.filter((function(t){return t.firstName[0]===e.letter}));return Object(f.jsx)("div",{children:!c&&(null===r||void 0===r?void 0:r.length)?r.sort((function(e,t){return e.firstName.localeCompare(t.firstName)})).map((function(e){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h5",{children:"".concat(e.firstName," ").concat(e.lastName)}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("p",{children:[Object(f.jsx)("input",{type:"radio",name:e.id,id:e.id+1,value:1,onClick:function(){return t(N(e))}}),Object(f.jsx)("label",{htmlFor:e.id+1,children:"Active"})]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("input",{type:"radio",name:e.id,id:e.id+0,value:0,onClick:function(){return t(E(e))}}),Object(f.jsx)("label",{htmlFor:e.id+0,children:"Not active"})]})]})]})})):Object(f.jsx)("p",{children:"No Employees"})},"".concat(e.letter,"-employee-list"))},A=function(){var e=Array.from(Array(26)).map((function(e,t){return t+65})).map((function(e){return String.fromCharCode(e)})),t=h.a.h1(i||(i=Object(p.a)(["\n    text-align: center;\n  "]))),n=h.a.section(o||(o=Object(p.a)(["\n    height: 100vh;\n    overflow: auto;\n  "]))),c=h.a.div(s||(s=Object(p.a)(["\n    display: flex;\n    flex-wrap: wrap;\n  "]))),r=h.a.div(l||(l=Object(p.a)(["\n    padding: 1rem;\n  "])));return Object(f.jsxs)(n,{children:[Object(f.jsx)(t,{children:"Employees"}),Object(f.jsx)(c,{children:e.map((function(e){return Object(f.jsxs)(r,{children:[Object(f.jsx)("h3",{children:e},"".concat(e,"-letters")),Object(f.jsx)(k,{letter:e},"".concat(e,"-employees"))]})}))})]})},C=function(){var e=Object(m.b)();return Object(u.useEffect)((function(){e(L())}),[e]),Object(f.jsxs)("div",{className:"employee",children:[Object(f.jsx)(A,{}),Object(f.jsx)(v,{})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},D=n(37),J=n(13),M=n.n(J),B=n(15),I=n(36),P=n(35),T=n.n(P),Y=function(){return T.a.get("https://yalantis-react-school-api.yalantis.com/api/task0/users")},q=M.a.mark(z);function z(){var e,t;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(B.a)(Y);case 3:return e=n.sent,t=e.data,n.next=7,Object(B.b)(w(Object(I.a)(t)));case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),q,null,[[0,9]])}var G=M.a.mark(H);function H(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.c)(L.type,z);case 2:case"end":return e.stop()}}),G)}var K=Object(D.a)(),Q=Object(y.a)({reducer:{employees:S},middleware:function(e){return e().concat(K)}});K.run(H),b.a.render(Object(f.jsx)(d.a.StrictMode,{children:Object(f.jsx)(m.a,{store:Q,children:Object(f.jsx)(C,{})})}),document.getElementById("root")),F()}},[[68,1,2]]]);
//# sourceMappingURL=main.08b5c234.chunk.js.map