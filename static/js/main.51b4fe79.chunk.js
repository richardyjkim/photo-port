(this["webpackJsonpphoto-port"]=this["webpackJsonpphoto-port"]||[]).push([[0],{11:function(e,t,i){},13:function(e,t,i){"use strict";i.r(t);var c=i(1),a=i.n(c),r=i(6),n=i.n(r),s=(i(11),i(2));function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}var l=i(0);var u=function(e){var t=e.categories,i=void 0===t?[]:t,c=e.setCurrentCategory,a=e.contactSelected,r=e.currentCategory,n=e.setContactSelected;return Object(l.jsxs)("header",{className:"flex-row px-1",children:[Object(l.jsx)("h2",{children:Object(l.jsxs)("a",{"data-testid":"link",href:"/",children:[Object(l.jsx)("span",{role:"img","aria-label":"camera",children:" \ud83d\udcf8"})," Oh Snap!"]})}),Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:"flex-row",children:[Object(l.jsx)("li",{className:"mx-2",children:Object(l.jsx)("a",{"data-testid":"about",href:"#about",onClick:function(){return n(!1)},children:"About me"})}),Object(l.jsx)("li",{className:"mx-2 ".concat(a&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){return n(!0)},children:"Contact"})}),i.map((function(e){return Object(l.jsx)("li",{className:"mx-1 ".concat(r.name===e.name&&!a&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){c(e),n(!1)},children:o(e.name)})},e.name)}))]})})]})},m=i.p+"static/media/cover-image.533ae8f6.jpg";var d=function(){return Object(l.jsxs)("section",{className:"my-5",children:[Object(l.jsx)("h1",{id:"about",children:"Who am I?"}),Object(l.jsx)("img",{src:m,className:"my-2",style:{width:"100%"},alt:"cover"}),Object(l.jsx)("div",{className:"my-2",children:Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum. Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst."})})]})},j=i(5),p=function(e){var t=e.currentPhoto,i=e.onClose,c=t.name,a=t.category,r=t.description,n=t.index;return Object(l.jsx)("div",{className:"modalBackdrop",children:Object(l.jsxs)("div",{className:"modalContainer",children:[Object(l.jsxs)("h3",{className:"modalTitle",children:[c," "]}),Object(l.jsx)("img",{src:"./img/large/".concat(a,"/").concat(n,".jpg"),alt:"current category"}),Object(l.jsx)("p",{children:r}),Object(l.jsx)("button",{onClick:i,type:"button",children:"Close this modal"})]})})},b=function(e){var t=e.category,i=Object(c.useState)(!1),a=Object(s.a)(i,2),r=a[0],n=a[1],o=Object(c.useState)(),u=Object(s.a)(o,2),m=u[0],d=u[1],b=Object(c.useState)([{name:"Grocery aisle",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Grocery booth",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Building exterior",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Restaurant table",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Cafe interior",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Cat green eyes",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Green parrot",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Yellow macaw",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Pug smile",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Pancakes",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Burrito",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Scallop pasta",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Burger",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Fruit bowl",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Green river",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Docks",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Panoramic village by sea",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Domestic landscape",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Park bench",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"}]),g=Object(s.a)(b,1)[0].filter((function(e){return e.category===t})),h=function(e,t){d(Object(j.a)(Object(j.a)({},e),{},{index:t})),n(!r)};return Object(l.jsxs)("div",{children:[r&&Object(l.jsx)(p,{currentPhoto:m,onClose:h}),Object(l.jsx)("div",{className:"flex-row",children:g.map((function(e,i){return Object(l.jsx)("img",{src:"./img/small/".concat(t,"/").concat(i,".jpg"),alt:e.name,className:"img-thumbnail mx-1",onClick:function(){return h(e,i)}},e.name)}))})]})};var g=function(e){var t=e.currentCategory;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{"data-testid":"h1tag",children:o(t.name)}),Object(l.jsx)("p",{children:t.description}),Object(l.jsx)(b,{category:t.name})]})},h=i(3);var O=function(){var e=Object(c.useState)({name:"",email:"",message:""}),t=Object(s.a)(e,2),i=t[0],a=t[1],r=Object(c.useState)(""),n=Object(s.a)(r,2),o=n[0],u=n[1],m=i.name,d=i.email,j=i.message,p=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);u(t?"":"Your email is invalid.")}else e.target.value.length?u(""):u("".concat(e.target.name," is required."))};return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{"data-testid":"h1tag",children:"Contact me"}),Object(l.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),o||(a(Object(h.a)({},e.target.name,e.target.value)),console.log("Form",i))},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",name:"name",defaultValue:m,onBlur:p})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(l.jsx)("input",{type:"email",name:"email",defaultValue:d,onBlur:p})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{name:"message",rows:"5",defaultValue:j,onBlur:p})]}),o&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:o})}),Object(l.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})};var x=function(){var e=Object(c.useState)([{name:"commercial",description:"Photos of grocery stores, food trucks, and other commercial projects"},{name:"portraits",description:"Portraits of people in my life"},{name:"food",description:"Delicious delicacies"},{name:"landscape",description:"Fields, farmhouses, waterfalls, and the beauty of nature"}]),t=Object(s.a)(e,1)[0],i=Object(c.useState)(t[0]),a=Object(s.a)(i,2),r=a[0],n=a[1],o=Object(c.useState)(!1),m=Object(s.a)(o,2),j=m[0],p=m[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{categories:t,setCurrentCategory:n,currentCategory:r,contactSelected:j,setContactSelected:p}),Object(l.jsx)("main",{children:j?Object(l.jsx)(O,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(g,{currentCategory:r}),Object(l.jsx)(d,{})]})})]})},f=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,14)).then((function(t){var i=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;i(e),c(e),a(e),r(e),n(e)}))};n.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),f()}},[[13,1,2]]]);
//# sourceMappingURL=main.51b4fe79.chunk.js.map