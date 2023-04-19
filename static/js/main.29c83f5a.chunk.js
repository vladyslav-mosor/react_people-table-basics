(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{38:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(27),a=c(10),r=(c(36),c(37),c(38),c(3)),s=c(14),j=c.n(s),i=c(2),o=function(e){var t=e.to,c=e.pageName;return Object(i.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},children:c})},b=function(){return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(o,{to:"/",pageName:"Home"}),Object(i.jsx)(o,{to:"people",pageName:"People"})]})})})},l=c(4),h=c(25),d=c(7),O=c(5),x=c(0),u=(c(40),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})});function p(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var m=function(e){var t=e.person,c=t.slug,n=t.name,r=t.sex;return Object(i.jsx)(a.b,{to:"/people/".concat(c),className:j()({"has-text-danger":"f"===r}),children:n})},f=function(e){var t=e.person,c=t.slug,n=t.sex,a=t.born,s=t.died,o=t.motherName,b=t.fatherName,l=t.mother,h=t.father,d=Object(r.p)().personSlug,O=void 0===d?"":d;return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":c===O}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(m,{person:t})}),Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:a}),Object(i.jsx)("td",{children:s}),Object(i.jsx)("td",{children:l?Object(i.jsx)(m,{person:l}):o||"-"}),Object(i.jsx)("td",{children:h?Object(i.jsx)(m,{person:h}):b||"-"})]},c)},v=function(e){var t=e.people;return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsx)(f,{person:e},e.slug)}))})]})},g=function(e,t){return e.find((function(e){return e.name===t}))},N=function(){var e=Object(x.useState)([]),t=Object(O.a)(e,2),c=t[0],n=t[1],a=Object(x.useState)(!0),r=Object(O.a)(a,2),s=r[0],j=r[1],o=Object(x.useState)(!1),b=Object(O.a)(o,2),m=b[0],f=b[1],N=Object(x.useCallback)(Object(d.a)(Object(l.a)().mark((function e(){var t,c;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p();case 3:t=e.sent,c=t.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{mother:g(t,e.motherName),father:g(t,e.fatherName)})})),n(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),f(!0);case 11:return e.prev=11,j(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])}))),[]);return Object(x.useEffect)((function(){N()}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[m&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!s&&0===c.length&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),s&&Object(i.jsx)(u,{}),!m&&!s&&Object(i.jsx)(v,{people:c})]})})]})},w=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},y=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},k=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(b,{}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(r.d,{children:[Object(i.jsx)(r.b,{path:"/",element:Object(i.jsx)(w,{})}),Object(i.jsx)(r.b,{path:"home",element:Object(i.jsx)(r.a,{to:"/",replace:!0})}),Object(i.jsxs)(r.b,{path:"people",children:[Object(i.jsx)(r.b,{index:!0,element:Object(i.jsx)(N,{})}),Object(i.jsx)(r.b,{path:":personSlug",element:Object(i.jsx)(N,{})})]}),Object(i.jsx)(r.b,{path:"*",element:Object(i.jsx)(y,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(a.a,{children:Object(i.jsx)(k,{})}))}},[[41,1,2]]]);
//# sourceMappingURL=main.29c83f5a.chunk.js.map