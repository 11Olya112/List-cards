(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{61:function(e,t,s){},62:function(e,t,s){},64:function(e,t,s){},71:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s.n(c),a=s(17),i=s.n(a),r=(s(61),s(62),s(63),s(80)),l=s(82),o=s(81),j=s(52),d=s(79),h=(s(64),s(1)),b=function(){return Object(h.jsxs)(r.a,{collapseOnSelect:!0,bg:"white",expand:"lg",className:"nav-navbar-underline",children:[Object(h.jsx)(r.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(h.jsx)(r.a.Collapse,{id:"responsive-navbar-nav",children:Object(h.jsxs)("div",{className:"d-flex justify-content-around w-100",children:[Object(h.jsxs)(l.a,{className:"mr-auto ml-4px",children:[Object(h.jsx)(l.a.Link,{href:"#photos",active:!0,className:"nav-link-underline","font-weight-bold":!0,children:"Photos"}),Object(h.jsx)(l.a.Link,{href:"#videos",children:"Videos"}),Object(h.jsx)(l.a.Link,{href:"#podcasts",children:"Podcasts"})]}),Object(h.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(h.jsx)(o.a,{className:"form",children:Object(h.jsx)(j.a,{type:"text",placeholder:"Search for anything...",className:"rounded-pill bg-light search",style:{borderColor:"transparent"}})}),Object(h.jsxs)(l.a,{children:[Object(h.jsxs)(d.a,{className:"d-flex justify-content-center",children:[Object(h.jsx)(d.a.Toggle,{variant:"outline-secondary",id:"dropdown-basic",children:"English"}),Object(h.jsxs)(d.a.Menu,{children:[Object(h.jsx)(d.a.Item,{href:"#action/3.2",children:"French"}),Object(h.jsx)(d.a.Item,{href:"#action/3.3",children:"Spanish"})]})]}),Object(h.jsx)(l.a.Link,{href:"#login",className:"d-flex justify-content-center",children:"Log In"})]})]})]})})]})},x=s(2),m=s(7),u=s(77),O=s(78),f=s(53),p=s(39),g=s(40),v=s(83),y=s(54),N=function(e){var t,s,n=e.item,a=Object(c.useState)(!1),i=Object(m.a)(a,2),r=i[0],l=i[1];return Object(h.jsxs)(v.a,{style:{width:"18rem"},children:[Object(h.jsx)(v.a.Img,{variant:"top",style:{width:"100%",height:"100%"},src:n.download_url}),Object(h.jsxs)(v.a.Body,{children:[Object(h.jsx)(v.a.Title,{children:n.author}),Object(h.jsxs)(v.a.Text,{children:[r?n.description:"".concat(null===(t=n.description)||void 0===t?void 0:t.slice(0,50),"..."),!r&&(null===(s=n.description)||void 0===s?void 0:s.length)>50&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("br",{}),Object(h.jsx)(y.a,{variant:"link",size:"sm",onClick:function(){return l(!0)},style:{textDecoration:"none",color:"black"},children:"Show more..."})]}),Object(h.jsx)("hr",{style:{margin:"10px 0px"}}),Object(h.jsxs)("div",{className:"d-flex justify-content-start",children:[Object(h.jsx)(y.a,{variant:"primary",size:"sm",style:{marginRight:"10px",backgroundColor:"orange",border:"orange",color:"white"},children:"Save to collection"}),Object(h.jsx)(y.a,{variant:"secondary",size:"sm",style:{backgroundColor:"white",color:"black",fontWeight:"bold"},children:"Share"})]})]})]})]})},k=function(){var e=Object(c.useState)(1),t=Object(m.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)([]),i=Object(m.a)(a,2),r=i[0],o=i[1];Object(c.useEffect)((function(){fetch("https://picsum.photos/v2/list?page=".concat(s,"&limit=9")).then((function(e){return e.json()})).then((function(e){return o(e.map((function(e){return Object(x.a)(Object(x.a)({},e),{},{description:"Mauris sit amet metus quis velit gravida sodales.Mauris sit amet metus quis velit gravida sodales."})})))}))}),[s,r]);var j=function(){window.innerHeight+document.documentElement.scrollTop!==document.documentElement.offsetHeight||r.length>=300||n((function(e){return e+1}))};return Object(c.useEffect)((function(){return window.addEventListener("scroll",j),function(){return window.removeEventListener("scroll",j)}}),[r]),Object(h.jsx)(u.a,{"mt-4":"true",children:Object(h.jsxs)(O.a,{children:[Object(h.jsx)(f.a,{className:"pr-3",xs:3,children:Object(h.jsxs)(l.a,{className:"flex-column justify-content-start",children:[Object(h.jsxs)(l.a.Link,{href:"#photos",active:!0,className:"bg-warning text-white rounded",style:{backgroundColor:"orange"},children:[Object(h.jsx)(g.a,{icon:p.b,className:"mr-2",style:{marginRight:"8px"}}),"All photos"]}),Object(h.jsxs)(l.a.Link,{href:"#selfies",className:"text-dark",children:[Object(h.jsx)(g.a,{icon:p.c,className:"mr-2 text-muted",style:{marginRight:"8px"}}),"Selfies"]}),Object(h.jsxs)(l.a.Link,{href:"#recent",className:"text-dark",children:[Object(h.jsx)(g.a,{icon:p.a,className:"mr-2",style:{marginRight:"8px"}}),"Recent"]}),Object(h.jsxs)(l.a.Link,{href:"#deleted",className:"text-dark",children:[Object(h.jsx)(g.a,{icon:p.d,className:"mr-2",style:{marginRight:"8px"}}),"Deleted"]})]})}),Object(h.jsxs)(f.a,{xs:12,md:{span:6,offset:1},children:[Object(h.jsxs)(O.a,{children:[Object(h.jsx)(f.a,{xs:12,sm:6,children:Object(h.jsxs)("div",{className:"text-left",children:[Object(h.jsx)("h3",{children:"All photos"}),Object(h.jsx)("p",{children:"150 items"})]})}),Object(h.jsx)(f.a,{xs:12,sm:6,md:{span:3,offset:2},className:"text-right",children:Object(h.jsxs)("div",{className:"d-flex justify-content-center justify-content-sm-end",children:[Object(h.jsx)("button",{type:"button",className:"btn btn-dark mr-1 mb-1 mb-sm-0",children:"Newest"}),Object(h.jsx)("button",{type:"button",className:"btn btn-light",children:"Latest"})]})})]}),Object(h.jsx)(O.a,{children:Object(h.jsx)("div",{className:"d-flex flex-wrap justify-content-center justify-content-sm-start",children:r.slice(0,9*s).map((function(e){return Object(h.jsx)("div",{className:"mx-2 mt-3",children:Object(h.jsx)(N,{item:e})},e.id)}))})})]}),Object(h.jsx)(f.a,{})]})})},w=function(){return Object(h.jsxs)("div",{className:"starter",children:[Object(h.jsx)(b,{}),Object(h.jsx)(k,{})]})};i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.70be6227.chunk.js.map