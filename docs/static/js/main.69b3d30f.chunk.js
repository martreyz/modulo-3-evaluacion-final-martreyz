(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),i=n(16),s=n.n(i),o=(n(23),n(14)),j=(n(24),n(7)),l=function(e){return Object(c.jsx)(j.b,{to:"/character/"+e.id,children:Object(c.jsxs)("article",{children:[Object(c.jsx)("img",{src:e.image,alt:"Fotograf\xeda de "+e.name,title:"Fotograf\xeda de "+e.name}),Object(c.jsx)("h2",{children:e.name}),Object(c.jsxs)("h3",{children:["Especie: ","Human"===e.species?"Humana":"Alien"]})]})})};l.defaultProps={name:"Personaje an\xf3nimo",species:"Especie desconocida",image:"https://raw.githubusercontent.com/Adalab/rick-y-morty/master/assets/img/19.jpeg"};var u=l,h=function(e){var t=e.characters.filter((function(t){return t.name.toUpperCase().includes(e.searchValue.toUpperCase())})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u,{name:e.name,image:e.image,species:e.species,id:e.id})},e.id)}));return 0!==t.length?Object(c.jsx)("ul",{children:t}):Object(c.jsxs)("p",{children:['No hay ning\xfan personaje que coincida con la palabra "',e.searchValue,'"']})},d=function(e){return Object(c.jsxs)("form",{children:[Object(c.jsx)("label",{htmlFor:"userSearch",children:"Introduce el nombre del personaje a buscar:"}),Object(c.jsx)("input",{placeholder:"Ej. Rick Sanchez",onChange:function(t){var n=t.currentTarget.value;e.handleInputChange(n)},onKeyPress:function(e){"13"===e.keyCode&&e.preventDefault()},id:"userSearch",name:"userSearch",type:"text",value:e.searchValue})]})},b=function(e){return e.characters.filter((function(t){return t.id===parseInt(e.match.params.id)})).map((function(e){return Object(c.jsxs)("article",{children:[Object(c.jsx)(j.b,{to:"/",children:"Volver"}),Object(c.jsx)("img",{src:e.image,alt:"Foto de "+e.name,title:"Nombre"}),Object(c.jsx)("h2",{children:e.name}),Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:["Especie: ","Human"===e.species?"Humana":"Alien"]}),Object(c.jsxs)("li",{children:["Planeta de origen:"," ","Earth (Replacement Dimension)"===e.origin.name?"Tierra (Dimensi\xf3n de reemplazo)":"Earth (C-137)"===e.origin.name?"Tierra (Dimensi\xf3n C-137)":"Abadango"===e.origin.name?"Abadango":"Origen desconocido"]}),Object(c.jsxs)("li",{children:["N\xfamero de episodios: ",e.episode.length]}),Object(c.jsxs)("li",{children:["Estado del personaje:"," ","Alive"===e.status?"Vivo":"Dead"===e.status?"Muerto":"Desconocido"]})]})]},e.id)}))},m=function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()}))},p=n(2);var O=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(""),s=Object(o.a)(i,2),j=s[0],l=s[1];return Object(a.useEffect)((function(){m().then((function(e){r(e.results)}))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("header",{children:Object(c.jsx)("h1",{children:"Rick y Morty"})}),Object(c.jsx)("main",{children:Object(c.jsxs)(p.c,{children:[Object(c.jsxs)(p.a,{exact:!0,path:"/",children:[Object(c.jsx)(d,{searchValue:j,handleInputChange:function(e){l(e)}}),Object(c.jsx)(h,{searchValue:j,characters:n})]}),Object(c.jsx)(p.a,{path:"/character/:id",render:function(e){return Object(c.jsx)(b,{match:e.match,characters:n})}})]})})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(j.a,{children:Object(c.jsx)(O,{})})}),document.getElementById("root")),x()}},[[30,1,2]]]);
//# sourceMappingURL=main.69b3d30f.chunk.js.map