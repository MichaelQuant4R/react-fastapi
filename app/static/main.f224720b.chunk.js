(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(n,t,e){"use strict";e.r(t);var o=e(1),c=e.n(o),i=e(3),s=e.n(i),l=(e(8),e(0));var r=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"This is FASTAPI"}),Object(l.jsx)("button",{onClick:function(n){console.log(n),fetch("https://holistic-fastapi.herokuapp.com/api/data",{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true"}}).then((function(n){if(n.ok)return n.json();throw new Error(n.status)})).then((function(n){console.log("JSON!"),console.log(n)})).catch((function(n){console.log(n)}))},children:"Call"})]})},a=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,11)).then((function(t){var e=t.getCLS,o=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;e(n),o(n),c(n),i(n),s(n)}))};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(r,{})}),document.getElementById("root")),a()},8:function(n,t,e){}},[[10,1,2]]]);
//# sourceMappingURL=main.f224720b.chunk.js.map