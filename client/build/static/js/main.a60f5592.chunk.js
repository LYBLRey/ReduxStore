(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{83:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n.n(c),a=n(46),i=n.n(a),s=(n(83),n(5)),o=n(12),l=n(14),d=n(11),u=n(72),j=n(104),b=n(106),p=n(103),h=n(71);function O(e,t){return 1===t?e:e+"s"}function m(e,t,n){return new Promise((function(c,r){var a,i,s,o=window.indexedDB.open("shop-shop",1);o.onupgradeneeded=function(e){var t=o.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},o.onerror=function(e){console.log("There was an error")},o.onsuccess=function(r){switch(a=o.result,i=a.transaction(e,"readwrite"),s=i.objectStore(e),a.onerror=function(e){console.log("error",e)},t){case"put":s.put(n),c(n);break;case"get":var l=s.getAll();l.onsuccess=function(){c(l.result)};break;case"delete":s.delete(n._id);break;default:console.log("No valid method")}i.oncomplete=function(){a.close()}}}))}var f="UPDATE_PRODUCTS",x="ADD_TO_CART",g="ADD_MULTIPLE_TO_CART",v="REMOVE_FROM_CART",y="UPDATE_CART_QUANTITY",w="TOGGLE_CART",_="UPDATE_CATEGORIES",k="UPDATE_CURRENT_CATEGORY",N=n(1);var C,S,T,E,A,$=function(e){var t=Object(o.c)((function(e){return e})),n=Object(o.b)(),c=e.image,r=e.name,a=e._id,i=e.price,d=e.quantity,u=t.cart;return Object(N.jsxs)("div",{className:"card px-1 py-1",children:[Object(N.jsxs)(l.b,{to:"/products/".concat(a),children:[Object(N.jsx)("img",{alt:r,src:"/images/".concat(c)}),Object(N.jsx)("p",{children:r})]}),Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{children:[d," ",O("item",d)," in stock"]}),Object(N.jsxs)("span",{children:["$",i]})]}),Object(N.jsx)("button",{onClick:function(){var t=u.find((function(e){return e._id===a}));t?(n({type:y,_id:a,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),m("cart","put",Object(s.a)(Object(s.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(n({type:x,product:Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:1})}),m("cart","put",Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:1})))},children:"Add to cart"})]})},I=n(98),D=n(30),Q=n(105),P=Object(Q.a)(C||(C=Object(D.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),R=Object(Q.a)(S||(S=Object(D.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),F=(Object(Q.a)(T||(T=Object(D.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(Q.a)(E||(E=Object(D.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),U=Object(Q.a)(A||(A=Object(D.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),L=n.p+"static/media/spinner.689d9a07.gif";var q=function(){var e=Object(o.c)((function(e){return e})),t=Object(o.b)(),n=e.currentCategory,r=Object(I.a)(P),a=r.loading,i=r.data;return Object(c.useEffect)((function(){i?(t({type:f,products:i.products}),i.products.forEach((function(e){m("products","put",e)}))):a||m("products","get").then((function(e){t({type:f,products:e})}))}),[i,a,t]),Object(N.jsxs)("div",{className:"my-2",children:[Object(N.jsx)("h2",{children:"Our Products:"}),e.products.length?Object(N.jsx)("div",{className:"flex-row",children:(n?e.products.filter((function(e){return e.category._id===n})):e.products).map((function(e){return Object(N.jsx)($,{_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity},e._id)}))}):Object(N.jsx)("h3",{children:"You haven't added any products yet!"}),a?Object(N.jsx)("img",{src:L,alt:"loading"}):null]})};var W=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e})).categories,n=Object(I.a)(F),r=n.loading,a=n.data;return Object(c.useEffect)((function(){a?(e({type:_,categories:a.categories}),a.categories.forEach((function(e){m("categories","put",e)}))):r||m("categories","get").then((function(t){e({type:_,categories:t})}))}),[a,r,e]),Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{children:"Choose a Category:"}),t.map((function(t){return Object(N.jsx)("button",{onClick:function(){var n;n=t._id,e({type:k,currentCategory:n})},children:t.name},t._id)}))]})},B=n(22),G=n.n(B),Y=n(35),M=n(34),H=n(21),J=n(67),z=n(99),V=function(e){var t=e.item,n=Object(o.b)();return Object(N.jsxs)("div",{className:"flex-row",children:[Object(N.jsx)("div",{children:Object(N.jsx)("img",{src:"/images/".concat(t.image),alt:""})}),Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{children:[t.name,", $",t.price]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("span",{children:"Qty:"}),Object(N.jsx)("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var c=e.target.value;"0"===c?(n({type:v,_id:t._id}),m("cart","delete",Object(s.a)({},t))):(n({type:y,_id:t._id,purchaseQuantity:parseInt(c)}),m("cart","put",Object(s.a)(Object(s.a)({},t),{},{purchaseQuantity:parseInt(c)})))}}),Object(N.jsx)("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){n({type:v,_id:e._id}),m("cart","delete",Object(s.a)({},e))}(t)},children:"\ud83d\uddd1\ufe0f"})]})]})]})},K=n(68),X=n(69),Z=n(58),ee=n.n(Z),te=new(function(){function e(){Object(K.a)(this,e)}return Object(X.a)(e,[{key:"getProfile",value:function(){return ee()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return ee()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),ne=(n(93),Object(J.a)("pk_test_TYooMQauvdEDq54NiTphI7jx")),ce=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e})),n=Object(z.a)(R),r=Object(H.a)(n,2),a=r[0],i=r[1].data;function s(){e({type:w})}return Object(c.useEffect)((function(){i&&ne.then((function(e){e.redirectToCheckout({sessionId:i.checkout.session})}))}),[i]),Object(c.useEffect)((function(){function n(){return(n=Object(M.a)(G.a.mark((function t(){var n;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m("cart","get");case 2:n=t.sent,e({type:g,products:Object(Y.a)(n)});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}t.cart.length||function(){n.apply(this,arguments)}()}),[t.cart.length,e]),t.cartOpen?Object(N.jsxs)("div",{className:"cart",children:[Object(N.jsx)("div",{className:"close",onClick:s,children:"[close]"}),Object(N.jsx)("h2",{children:"Shopping Cart"}),t.cart.length?Object(N.jsxs)("div",{children:[t.cart.map((function(e){return Object(N.jsx)(V,{item:e},e._id)})),Object(N.jsxs)("div",{className:"flex-row space-between",children:[Object(N.jsxs)("strong",{children:["Total: $",function(){var e=0;return t.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()]}),te.loggedIn()?Object(N.jsx)("button",{onClick:function(){var e=[];t.cart.forEach((function(t){for(var n=0;n<t.purchaseQuantity;n++)e.push(t._id)})),a({variables:{products:e}})},children:"Checkout"}):Object(N.jsx)("span",{children:"(log in to check out)"})]})]}):Object(N.jsxs)("h3",{children:[Object(N.jsx)("span",{role:"img","aria-label":"shocked",children:"\ud83d\ude31"}),"You haven't added anything to your cart yet!"]})]}):Object(N.jsx)("div",{className:"cart-closed",onClick:s,children:Object(N.jsx)("span",{role:"img","aria-label":"trash",children:"\ud83d\uded2"})})},re=function(){return Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)(W,{}),Object(N.jsx)(q,{}),Object(N.jsx)(ce,{})]})};var ae=function(){var e=Object(o.c)((function(e){return e})),t=Object(o.b)(),n=Object(d.f)().id,r=Object(c.useState)({}),a=Object(H.a)(r,2),i=a[0],u=a[1],j=Object(I.a)(P),b=j.loading,p=j.data,h=e.products,O=e.cart;return Object(c.useEffect)((function(){h.length?u(h.find((function(e){return e._id===n}))):p?(t({type:f,products:p.products}),p.products.forEach((function(e){m("products","put",e)}))):b||m("products","get").then((function(e){t({type:f,products:e})}))}),[h,p,b,t,n]),Object(N.jsxs)(N.Fragment,{children:[i&&O?Object(N.jsxs)("div",{className:"container my-1",children:[Object(N.jsx)(l.b,{to:"/",children:"\u2190 Back to Products"}),Object(N.jsx)("h2",{children:i.name}),Object(N.jsx)("p",{children:i.description}),Object(N.jsxs)("p",{children:[Object(N.jsx)("strong",{children:"Price:"}),"$",i.price," ",Object(N.jsx)("button",{onClick:function(){var e=O.find((function(e){return e._id===n}));e?(t({type:y,_id:n,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),m("cart","put",Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(t({type:x,product:Object(s.a)(Object(s.a)({},i),{},{purchaseQuantity:1})}),m("cart","put",Object(s.a)(Object(s.a)({},i),{},{purchaseQuantity:1})))},children:"Add to Cart"}),Object(N.jsx)("button",{disabled:!O.find((function(e){return e._id===i._id})),onClick:function(){t({type:v,_id:i._id}),m("cart","delete",Object(s.a)({},i))},children:"Remove from Cart"})]}),Object(N.jsx)("img",{src:"/images/".concat(i.image),alt:i.name})]}):null,b?Object(N.jsx)("img",{src:L,alt:"loading"}):null,Object(N.jsx)(ce,{})]})};var ie,se,oe,le=function(e){var t=e.children;return Object(N.jsx)("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"},children:t})},de=function(){return Object(N.jsx)("div",{children:Object(N.jsxs)(le,{children:[Object(N.jsx)("h1",{children:"404 Page Not Found"}),Object(N.jsx)("h1",{children:Object(N.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})},ue=n(39),je=n(108),be=Object(Q.a)(ie||(ie=Object(D.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),pe=Object(Q.a)(se||(se=Object(D.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),he=Object(Q.a)(oe||(oe=Object(D.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])));var Oe=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(H.a)(t,2),r=n[0],a=n[1],i=Object(je.a)(be),o=Object(H.a)(i,2),d=o[0],u=o[1].error,j=function(){var e=Object(M.a)(G.a.mark((function e(t){var n,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d({variables:{email:r.email,password:r.password}});case 4:n=e.sent,c=n.data.login.token,te.login(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.target,n=t.name,c=t.value;a(Object(s.a)(Object(s.a)({},r),{},Object(ue.a)({},n,c)))};return Object(N.jsxs)("div",{className:"container my-1",children:[Object(N.jsx)(l.b,{to:"/signup",children:"\u2190 Go to Signup"}),Object(N.jsx)("h2",{children:"Login"}),Object(N.jsxs)("form",{onSubmit:j,children:[Object(N.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(N.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(N.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:b})]}),Object(N.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(N.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(N.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:b})]}),u?Object(N.jsx)("div",{children:Object(N.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(N.jsx)("div",{className:"flex-row flex-end",children:Object(N.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var me=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(H.a)(t,2),r=n[0],a=n[1],i=Object(je.a)(he),o=Object(H.a)(i,1)[0],d=function(){var e=Object(M.a)(G.a.mark((function e(t){var n,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,o({variables:{email:r.email,password:r.password,firstName:r.firstName,lastName:r.lastName}});case 3:n=e.sent,c=n.data.addUser.token,te.login(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(e){var t=e.target,n=t.name,c=t.value;a(Object(s.a)(Object(s.a)({},r),{},Object(ue.a)({},n,c)))};return Object(N.jsxs)("div",{className:"container my-1",children:[Object(N.jsx)(l.b,{to:"/login",children:"\u2190 Go to Login"}),Object(N.jsx)("h2",{children:"Signup"}),Object(N.jsxs)("form",{onSubmit:d,children:[Object(N.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(N.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(N.jsx)("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:u})]}),Object(N.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(N.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(N.jsx)("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:u})]}),Object(N.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(N.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(N.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:u})]}),Object(N.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(N.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(N.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:u})]}),Object(N.jsx)("div",{className:"flex-row flex-end",children:Object(N.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var fe=function(){return Object(N.jsxs)("header",{className:"flex-row px-1",children:[Object(N.jsx)("h1",{children:Object(N.jsxs)(l.b,{to:"/",children:[Object(N.jsx)("span",{role:"img","aria-label":"shopping bag",children:"\ud83d\udecd\ufe0f"}),"-Shop-Shop"]})}),Object(N.jsx)("nav",{children:te.loggedIn()?Object(N.jsxs)("ul",{className:"flex-row",children:[Object(N.jsx)("li",{className:"mx-1",children:Object(N.jsx)(l.b,{to:"/orderHistory",children:"Order History"})}),Object(N.jsx)("li",{className:"mx-1",children:Object(N.jsx)("a",{href:"/",onClick:function(){return te.logout()},children:"Logout"})})]}):Object(N.jsxs)("ul",{className:"flex-row",children:[Object(N.jsx)("li",{className:"mx-1",children:Object(N.jsx)(l.b,{to:"/signup",children:"Signup"})}),Object(N.jsx)("li",{className:"mx-1",children:Object(N.jsx)(l.b,{to:"/login",children:"Login"})})]})})]})};var xe=function(){var e=Object(je.a)(pe),t=Object(H.a)(e,1)[0];return Object(c.useEffect)((function(){function e(){return(e=Object(M.a)(G.a.mark((function e(){var n,c,r,a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("cart","get");case 2:if(n=e.sent,!(c=n.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:c}});case 7:r=e.sent,a=r.data,a.addOrder.products.forEach((function(e){m("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(N.jsx)("div",{children:Object(N.jsxs)(le,{children:[Object(N.jsx)("h1",{children:"Success!"}),Object(N.jsx)("h2",{children:"Thank you for your purchase!"}),Object(N.jsx)("h2",{children:"You will now be redirected to the home page"})]})})};var ge=function(){var e,t=Object(I.a)(U).data;return t&&(e=t.user),Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"container my-1",children:[Object(N.jsx)(l.b,{to:"/",children:"\u2190 Back to Products"}),e?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("h2",{children:["Order History for ",e.firstName," ",e.lastName]}),e.orders.map((function(e){return Object(N.jsxs)("div",{className:"my-2",children:[Object(N.jsx)("h3",{children:new Date(parseInt(e.purchaseDate)).toLocaleDateString()}),Object(N.jsx)("div",{className:"flex-row",children:e.products.map((function(e,t){var n=e._id,c=e.image,r=e.name,a=e.price;return Object(N.jsxs)("div",{className:"card px-1 py-1",children:[Object(N.jsxs)(l.b,{to:"/products/".concat(n),children:[Object(N.jsx)("img",{alt:r,src:"/images/".concat(c)}),Object(N.jsx)("p",{children:r})]}),Object(N.jsx)("div",{children:Object(N.jsxs)("span",{children:["$",a]})})]},t)}))})]},e._id)}))]}):null]})})},ve=n(73),ye=function(e,t){switch(t.type){case f:return Object(s.a)(Object(s.a)({},e),{},{products:Object(Y.a)(t.products)});case x:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(Y.a)(e.cart),[t.product])});case g:return Object(s.a)(Object(s.a)({},e),{},{cart:[].concat(Object(Y.a)(e.cart),Object(Y.a)(t.products))});case y:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case v:var n=e.cart.filter((function(e){return e._id!==t._id}));return Object(s.a)(Object(s.a)({},e),{},{cartOpen:n.length>0,cart:n});case"CLEAR_CART":return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!1,cart:[]});case w:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!e.cartOpen});case _:return Object(s.a)(Object(s.a)({},e),{},{categories:Object(Y.a)(t.categories)});case k:return Object(s.a)(Object(s.a)({},e),{},{currentCategory:t.currentCategory});default:return e}},we=Object(ve.a)(ye,{products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""}),_e=Object(u.a)({uri:"/graphql"}),ke=Object(h.a)((function(e,t){var n=t.headers,c=localStorage.getItem("id_token");return{headers:Object(s.a)(Object(s.a)({},n),{},{authorization:c?"Bearer ".concat(c):""})}})),Ne=new j.a({link:ke.concat(_e),cache:new b.a});var Ce=function(){return Object(N.jsx)(p.a,{client:Ne,children:Object(N.jsx)(l.a,{children:Object(N.jsx)("div",{children:Object(N.jsxs)(o.a,{store:we,children:[Object(N.jsx)(fe,{}),Object(N.jsxs)(d.c,{children:[Object(N.jsx)(d.a,{exact:!0,path:"/",component:re}),Object(N.jsx)(d.a,{exact:!0,path:"/login",component:Oe}),Object(N.jsx)(d.a,{exact:!0,path:"/signup",component:me}),Object(N.jsx)(d.a,{exact:!0,path:"/success",component:xe}),Object(N.jsx)(d.a,{exact:!0,path:"/orderHistory",component:ge}),Object(N.jsx)(d.a,{exact:!0,path:"/products/:id",component:ae}),Object(N.jsx)(d.a,{component:de})]})]})})})})},Se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Te(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(N.jsxs)(o.a,{store:we,children:[Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(Ce,{})}),","]}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Se?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Te(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Te(t,e)}))}}()}},[[94,1,2]]]);
//# sourceMappingURL=main.a60f5592.chunk.js.map