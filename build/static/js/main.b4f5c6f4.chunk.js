(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{34:function(e,t,c){e.exports={container:"Login_container__3-ekp",innerBox:"Login_innerBox__3V9ew",footer:"Login_footer__2Mj48",error:"Login_error__3JYcM"}},35:function(e,t,c){e.exports={container:"Signup_container__JzTSX",innerBox:"Signup_innerBox__10Q0p",footer:"Signup_footer__Q3Zjd",error:"Signup_error__3_8uK"}},49:function(e,t,c){},52:function(e,t,c){e.exports={container:"InputControl_container__303F3"}},58:function(e,t,c){},65:function(e,t,c){},68:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t){document.addEventListener("DOMContentLoaded",(function(e){!function(e,t,c,s){var n=document.getElementById(e),a=document.getElementById(t),r=document.getElementById(c),i=document.getElementById(s);n&&a&&r&&i&&n.addEventListener("click",(function(){a.classList.toggle("show"),n.classList.toggle("bx-x"),r.classList.toggle("body-pd"),i.classList.toggle("body-pd")}))}("header-toggle","nav-bar","body-pd","header");var t=document.querySelectorAll(".nav_link");function c(){t&&(t.forEach((function(e){return e.classList.remove("active")})),this.classList.add("active"))}t.forEach((function(e){return e.addEventListener("click",c)}))}))},84:function(e,t,c){},85:function(e,t,c){},87:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=(c(58),c(4)),r=c(5),i=c(8),o=c(11),l=c(15),d=c(26),j="USER_LOGIN",u="ADD_TO_CART",b="REMOVE_FROM_CART";function h(e){return{type:u,payload:e}}c(65);var O=c(0);var x=Object(l.b)(null,(function(e){return{actions:{addToCart:Object(d.b)(h,e)}}}))((function(e){var t,c,n,a;return Object(s.useEffect)((function(){console.log(e.post)}),[e.post]),Object(O.jsx)("div",{class:"container posts-content col-lg-6",style:{marginTop:"80px"},children:Object(O.jsxs)("div",{class:"card mb-4",children:[Object(O.jsxs)("div",{class:"card-body",children:[Object(O.jsxs)(r.b,{to:"/profile/".concat(null===(t=e.post.user)||void 0===t?void 0:t.userId),class:"media mb-3",children:[Object(O.jsx)("img",{src:null===(c=e.post)||void 0===c||null===(n=c.user)||void 0===n?void 0:n.photoURL,class:"d-block ui-w-40 rounded-circle",alt:""}),Object(O.jsxs)("div",{class:"media-body ml-3",children:[null===(a=e.post.user)||void 0===a?void 0:a.userName,Object(O.jsx)("div",{class:"text-muted small",children:function(){var t,c;return new Date(1e3*(null===(t=e.post)||void 0===t||null===(c=t.sentDate)||void 0===c?void 0:c.seconds)).toDateString()}()})]})]}),Object(O.jsx)("p",{children:e.post.text}),Object(O.jsx)("img",{className:"col-lg-12",src:e.post.imageUrl,alt:""})]}),Object(O.jsxs)("div",{className:"card-footer",children:[Object(O.jsxs)(r.b,{class:"d-inline-block text-muted",children:[Object(O.jsx)("strong",{children:"123"})," ",Object(O.jsx)("small",{children:"Likes"})]}),Object(O.jsxs)(r.b,{class:"d-inline-block text-muted ml-3",children:[Object(O.jsx)("strong",{children:"12"}),Object(O.jsx)("small",{children:" Comments"})]}),Object(O.jsx)(r.b,{to:"posts/category/".concat(e.post.areaOfInterest.name),class:"d-inline-block text-muted ml-3",children:Object(O.jsx)("small",{class:"align-middle",children:e.post.areaOfInterest.name})})]})]})})})),m=(c(68),c(29)),p=c.n(m),f=p.a.initializeApp({apiKey:"AIzaSyBG-gV_m7HantV9RfI_DU3od7nBUNjLdNU",authDomain:"unisomea.firebaseapp.com",projectId:"unisomea",storageBucket:"unisomea.appspot.com",messagingSenderId:"925848122390",appId:"1:925848122390:web:687cad08b083fb37ee3137",measurementId:"G-4BC5KYQZC3"}).firestore(),v=p.a.auth(),g=p.a.storage();var y=function(){var e=Object(s.useState)([]),t=Object(a.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){f.collection("posts").orderBy("sentDate","desc").onSnapshot((function(e){n(e.docs.map((function(e){return Object(o.a)({id:e.id},e.data())})))})),console.log(c)}),[]),Object(O.jsx)("div",{className:"home",children:Object(O.jsx)("div",{className:"home__container",children:Object(O.jsx)("div",{className:"posts",children:c.map((function(e){return Object(O.jsx)(x,{post:e},e.id)}))})})})},N=c(10),w=c.n(N),k=c(19),S=c(52),_=c.n(S);var I=function(e){return Object(O.jsxs)("div",{className:_.a.container,children:[e.label&&Object(O.jsx)("label",{children:e.label}),Object(O.jsx)("input",Object(o.a)({type:"text"},e))]})},C=c(34),E=c.n(C);var L=function(){var e=Object(i.f)(),t=Object(s.useState)(""),c=Object(a.a)(t,2),n=c[0],o=c[1],l=Object(s.useState)(""),d=Object(a.a)(l,2),j=d[0],u=d[1],b=Object(s.useState)(""),h=Object(a.a)(b,2),x=h[0],m=h[1],p=Object(s.useState)(!1),f=Object(a.a)(p,2),g=f[0],y=f[1];return Object(O.jsx)("div",{className:E.a.container,children:Object(O.jsxs)("div",{className:E.a.innerBox,children:[Object(O.jsx)("h1",{className:E.a.heading,children:"Login"}),Object(O.jsx)(I,{label:"Email",onChange:function(e){o(e.target.value)},placeholder:"Enter email address"}),Object(O.jsx)(I,{type:"password",label:"Password",onChange:function(e){u(e.target.value)},placeholder:"Enter Password"}),Object(O.jsxs)("div",{className:E.a.footer,children:[Object(O.jsx)("b",{className:E.a.error,children:x}),Object(O.jsx)("button",{disabled:g,onClick:function(){n&&j?(m(""),y(!0),v.signInWithEmailAndPassword(n,j).then(function(){var t=Object(k.a)(w.a.mark((function t(c){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:y(!1),e.push("/");case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){y(!1),m(e.message)}))):m("Fill all fields")},children:"Login"}),Object(O.jsxs)("p",{children:["Already have an account?"," ",Object(O.jsx)("span",{children:Object(O.jsx)(r.b,{to:"/signup",children:"Sign up"})})]})]})]})})},U=c(35),D=c.n(U);var R=function(){var e=Object(i.f)(),t=Object(s.useState)(""),c=Object(a.a)(t,2),n=c[0],o=c[1],l=Object(s.useState)(""),d=Object(a.a)(l,2),j=d[0],u=d[1],b=Object(s.useState)(""),h=Object(a.a)(b,2),x=h[0],m=h[1],p=Object(s.useState)(""),g=Object(a.a)(p,2),y=g[0],N=g[1],S=Object(s.useState)(""),_=Object(a.a)(S,2),C=_[0],E=_[1],L=Object(s.useState)(!1),U=Object(a.a)(L,2),R=U[0],A=U[1],B=function(){var t=Object(k.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n&&j&&x){t.next=3;break}return E("Fill all fields"),t.abrupt("return");case 3:return E(""),A(!0),t.next=7,v.createUserWithEmailAndPassword(j,x).then(function(){var t=Object(k.a)(w.a.mark((function t(c){var s;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:A(!1),s=c.user,f.collection("profiles").add({userId:s.uid,userName:n,photoURL:"https://avatars.dicebear.com/api/human/".concat(y,".svg")}).then((function(e){console.log("profil olu\u015fturuldu"),s.updateProfile({displayName:n,photoURL:"https://avatars.dicebear.com/api/human/".concat(y,".svg")}),s.sendEmailVerification(),console.log("Document written with ID: ",e.id)})).catch((function(e){console.error("Error adding document: ",e)})),e.push("/");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){A(!1),E(e.message)}));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(O.jsx)("div",{className:D.a.container,children:Object(O.jsxs)("div",{className:D.a.innerBox,children:[Object(O.jsx)("h1",{className:D.a.heading,children:"Signup"}),Object(O.jsx)(I,{label:"User Name",placeholder:"Enter your user name",onChange:function(e){o(e.target.value)}}),Object(O.jsx)(I,{label:"Email",placeholder:"Enter email address",onChange:function(e){u(e.target.value)}}),Object(O.jsx)(I,{type:"password",label:"Password",placeholder:"Enter password",onChange:function(e){m(e.target.value)}}),Object(O.jsx)(I,{label:"Your Lucky Number",placeholder:"Lucky number will determine your profile picture",onChange:function(e){N(e.target.value)}}),Object(O.jsxs)("div",{className:D.a.footer,children:[Object(O.jsx)("b",{className:D.a.error,children:C}),Object(O.jsx)("button",{onClick:B,disabled:R,children:"Signup"}),Object(O.jsxs)("p",{children:["Already have an account?"," ",Object(O.jsx)("span",{children:Object(O.jsx)(r.b,{to:"/login",children:"Login"})})]})]})]})})};function A(e){return{type:j,payload:e}}var B=c(101);c(80);var P=Object(l.b)((function(e){return{user:e.userReducer}}))((function(e){var t=Object(s.useState)(null),c=Object(a.a)(t,2),n=c[0],r=c[1],i=Object(s.useState)(0),o=Object(a.a)(i,2),l=o[0],d=o[1],j=function(){var t=Object(k.a)(w.a.mark((function t(c,s){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.user.uid;case 2:n=t.sent,f.collection("posts").add({user:{userId:n,userName:e.user.displayName,photoURL:e.user.photoURL},imageUrl:c,text:s,areaOfInterest:{id:"1",name:"T\xfcrk\xe7e"},sentDate:p.a.firestore.FieldValue.serverTimestamp()}).then((function(e){})).catch((function(e){return console.log(e)}));case 4:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"imageupload",children:[Object(O.jsx)("progress",{className:"imageupload__progress",value:l,max:"100"}),Object(O.jsx)("div",{className:"checkboxs"}),Object(O.jsx)("input",{type:"file",onChange:function(e){e.target.files[0]&&r(e.target.files[0])}}),Object(O.jsx)(B.a,{onClick:function(){g.ref("images/".concat(n.name)).put(n).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);d(t)}),(function(e){console.log(e),alert(e.message)}),(function(){g.ref("images").child(n.name).getDownloadURL().then((function(t){j(t,e.text)})),d(0),r(null)}))},children:"Upload"})]})}));var T=Object(l.b)((function(e){return{user:e.userReducer}}))((function(e){var t,c,n=Object(s.useState)(""),i=Object(a.a)(n,2),o=i[0],l=i[1];return Object(O.jsx)("div",{children:Object(O.jsx)("form",{children:Object(O.jsx)("div",{className:"container posts-content col-lg-6",style:{marginTop:"80px"},children:Object(O.jsxs)("div",{className:"card mb-4",children:[Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsxs)("div",{className:"media mb-3",children:[Object(O.jsx)("img",{src:null===(t=e.user)||void 0===t?void 0:t.photoURL,class:"d-block ui-w-40 rounded-circle",alt:""}),Object(O.jsxs)("div",{className:"media-body ml-3",children:[null===(c=e.user)||void 0===c?void 0:c.displayName,Object(O.jsx)("div",{className:"text-muted small",children:(new Date).toDateString()})]})]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("input",{value:o,onChange:function(e){return l(e.target.value)},type:"text",class:"form-control col-5",placeholder:"Description"})," "]}),Object(O.jsx)(P,{text:o})]}),Object(O.jsxs)("div",{className:"card-footer",children:[Object(O.jsxs)(r.b,{className:"d-inline-block text-muted",children:[Object(O.jsx)("strong",{children:"0"})," ",Object(O.jsx)("small",{children:"Likes"})]}),Object(O.jsxs)(r.b,{class:"d-inline-block text-muted ml-3",children:[Object(O.jsx)("strong",{children:"0"}),Object(O.jsx)("small",{children:" Comments"})]}),Object(O.jsx)(r.b,{className:"d-inline-block text-muted ml-3",children:Object(O.jsx)("small",{className:"align-middle",children:"Repost"})})]})]})})})})}));c(81),c(48);function M(e){var t=e.profileData;return Object(O.jsx)("div",{class:"col-lg-6",children:Object(O.jsx)("div",{class:"card",children:Object(O.jsxs)("div",{class:"card-body info-card social-about",children:[Object(O.jsx)("h2",{class:"text-blue",children:"About"}),Object(O.jsx)("h4",{class:"mb-3",children:Object(O.jsx)("strong",{children:"Personal Info"})}),Object(O.jsxs)("div",{class:"row",children:[Object(O.jsx)("div",{class:"col-6",children:void 0!==(null===t||void 0===t?void 0:t.birthDay)?Object(O.jsxs)("div",{class:"social-info",children:[Object(O.jsx)("i",{class:"bx bx-cake"}),Object(O.jsx)("span",{children:null===t||void 0===t?void 0:t.birthDay})]}):null}),Object(O.jsx)("div",{class:"col-6",children:void 0!==(null===t||void 0===t?void 0:t.city)?Object(O.jsxs)("div",{class:"social-info",children:[Object(O.jsx)("i",{class:"bx bxs-city"}),Object(O.jsx)("span",{children:null===t||void 0===t?void 0:t.city})]}):null})]}),Object(O.jsx)("div",{class:"row",children:void 0!==(null===t||void 0===t?void 0:t.gender)?Object(O.jsx)("div",{class:"col-6",children:Object(O.jsxs)("div",{class:"social-info",children:[Object(O.jsx)("i",{class:"bx bx-female-sign"}),Object(O.jsx)("span",{children:null===t||void 0===t?void 0:t.gender})]})}):null})]})})})}function G(e){var t=e.areasOfInterest;return Object(O.jsx)("div",{class:"col-lg-6",children:Object(O.jsx)("div",{class:"card info-card",children:Object(O.jsxs)("div",{class:"card-body",children:[Object(O.jsx)("h2",{class:"text-blue",children:"Interest Of Areas"}),Object(O.jsx)("div",{class:"row",children:t.map((function(e){return Object(O.jsx)("div",{class:"col-lg-6",children:Object(O.jsx)("h4",{children:null===e||void 0===e?void 0:e.aiName})},null===e||void 0===e?void 0:e.id)}))})]})})})}function q(){var e=Object(s.useState)({}),t=Object(a.a)(e,2),c=t[0],n=t[1],l=Object(s.useState)([]),d=Object(a.a)(l,2),j=d[0],u=d[1],b=Object(i.g)().userId,h=Object(i.f)();return Object(s.useEffect)((function(){b&&f.collection("profiles").where("userId","==",b).get().then((function(e){if(e.docs[0]){var t=e.docs[0].id;n(Object(o.a)({id:e.docs[0].id},e.docs[0].data())),f.collection("profiles").doc(t).collection("AreasOfInterest").get().then((function(e){u(e.docs.map((function(e){return Object(o.a)({id:e.id},e.data())})))})).catch((function(e){console.log(e)}))}else h.push("/profile/not-found")})).catch((function(){}))}),[b]),Object(O.jsx)("div",{style:{marginTop:"175px"},children:Object(O.jsxs)("div",{class:"container",children:[Object(O.jsx)("div",{className:"img",style:{background:"linear-gradient(150deg, rgba(63, 174, 255, .3)15%, rgba(63, 174, 255, .3)70%, rgba(63, 174, 255, .3)94%), url(https://bootdey.com/img/Content/flores-amarillas-wallpaper.jpeg);",height:"350px;",backgroundImage:"cover;"}}),Object(O.jsx)("div",{className:"card social-prof",children:Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsxs)("div",{className:"wrapper",children:[Object(O.jsx)("img",{src:null===c||void 0===c?void 0:c.photoURL,alt:"",class:"user-profile"}),Object(O.jsx)("h3",{children:null===c||void 0===c?void 0:c.userName}),Object(O.jsx)("p",{})]}),Object(O.jsx)("div",{className:"row ",children:Object(O.jsx)("div",{className:"col-lg-12",children:Object(O.jsxs)("ul",{className:" nav nav-tabs justify-content-center s-nav d-flex flex-row",children:[Object(O.jsx)("li",{children:Object(O.jsx)(r.b,{className:"p-2 text-decoration-none active",children:"About Me"})}),Object(O.jsx)("li",{children:Object(O.jsx)(r.b,{className:"p-2 text-decoration-none",children:"Posts"})}),Object(O.jsx)("li",{children:Object(O.jsx)(r.b,{className:"p-2 text-decoration-none",children:"Area of Interest"})})]})})})]})}),Object(O.jsxs)("div",{class:"row",children:[Object(O.jsx)(M,{profileData:c}),Object(O.jsx)(G,{areasOfInterest:j})]})]})})}c(82),c(83);var F=Object(l.b)((function(e){return{user:e.userReducer,cartLength:e.cartReducer.length}}))((function(e){var t,c;return console.log(null===(t=e.user)||void 0===t?void 0:t.photoURL),Object(O.jsxs)("div",{children:[Object(O.jsx)("body",{id:"body-pd",children:Object(O.jsxs)("header",{class:"header",id:"header",children:[Object(O.jsx)("div",{class:"header_toggle",children:Object(O.jsx)("i",{class:"bx bx-menu",id:"header-toggle"})}),Object(O.jsx)("h3",{children:"UNISOME"}),Object(O.jsx)("div",{className:"nav-right d-flex flex-row",children:null===e.user?Object(O.jsxs)("div",{className:"d-flex flex-row",children:[Object(O.jsx)(r.b,{to:"/login",children:Object(O.jsx)("span",{className:"btn btn-primary p-2",children:"Sing in"})}),Object(O.jsx)(r.b,{to:"/signUp",children:Object(O.jsx)("span",{className:"btn btn-light p-2",children:"Sing up"})})]}):Object(O.jsxs)("div",{className:"d-flex flex-row",children:[Object(O.jsx)("div",{className:"header_img p-2",children:Object(O.jsx)("img",{src:e.user.photoURL,alt:""})}),Object(O.jsx)("span",{className:"p-2",children:e.user.email})]})})]})}),Object(O.jsx)("div",{class:"l-navbar",id:"nav-bar",children:Object(O.jsxs)("nav",{class:"nav",children:[Object(O.jsxs)("div",{children:[Object(O.jsxs)(r.b,{to:"/",class:"nav_logo",children:[Object(O.jsx)("i",{class:"bx bx-layer nav_logo-icon"}),Object(O.jsx)("span",{class:"nav_logo-name",children:"UNISOME"})]}),Object(O.jsxs)("div",{class:"nav_list",children:[Object(O.jsxs)(r.b,{to:"/",class:"nav_link active",children:[Object(O.jsx)("i",{class:"bx bx-grid-alt nav_icon"}),Object(O.jsx)("span",{class:"nav_name",children:"Home"})]}),Object(O.jsxs)(r.b,{to:"/postadd",class:"nav_link",children:[Object(O.jsx)("i",{class:"bx bxs-add-to-queue nav_icon"}),Object(O.jsx)("span",{class:"nav_name",children:"Post Add"})]}),Object(O.jsxs)(r.b,{to:"/profile/".concat(null===e||void 0===e||null===(c=e.user)||void 0===c?void 0:c.uid),class:"nav_link",children:[Object(O.jsx)("i",{class:"bx bx-user nav_icon"}),Object(O.jsx)("span",{class:"nav_name",children:"Profile"})]}),Object(O.jsxs)(r.b,{to:"/chats",class:"nav_link",children:[Object(O.jsx)("i",{class:"bx bx-message-square-detail nav_icon"}),Object(O.jsx)("span",{class:"nav_name",children:"My Groups"})]}),Object(O.jsxs)(r.b,{to:"agenda",className:"nav_link",children:[Object(O.jsx)("i",{class:"bx bx-bar-chart-alt-2 nav_icon"}),Object(O.jsx)("span",{class:"nav_name",children:"Agenda"})]})]})]}),null!==e.user?Object(O.jsxs)("div",{children:[Object(O.jsxs)(r.b,{to:"/settings",class:"nav_link",children:[Object(O.jsx)("i",{class:"bx bx-cog nav_icon"}),Object(O.jsx)("span",{class:"nav_name",children:"Settings"})]}),Object(O.jsxs)(r.b,{to:"/",class:"nav_link",onClick:function(){console.log(e.user.getIdToken()),v.signOut().then((function(){e.actions.setUser(null)})).catch((function(e){}))},children:[Object(O.jsx)("i",{class:"bx bx-log-out nav_icon"}),Object(O.jsx)("span",{class:"nav_name",children:"SignOut"})]})]}):null]})})]})})),V=(c(49),c(102));var Y=function(e){var t=e.id,c=e.name,n=e.routeUrl,i=Object(s.useState)(""),o=Object(a.a)(i,2),l=o[0],d=o[1];return Object(s.useEffect)((function(){d(Math.floor(5e3*Math.random()))}),[]),Object(O.jsxs)(r.b,{to:n,class:"list-group-item list-group-item-action border-0",children:[Object(O.jsx)("div",{class:"badge bg-success float-right",children:"5"}),Object(O.jsxs)("div",{class:"d-flex align-items-start",children:[Object(O.jsx)(V.a,{src:"https://avatars.dicebear.com/api/human/".concat(l,".svg")}),Object(O.jsxs)("div",{class:"flex-grow-1 ml-3",children:[Object(O.jsx)("p",{children:c}),Object(O.jsx)("div",{class:"small",children:Object(O.jsx)("span",{class:"fas fa-circle chat-online"})})]})]})]},t)};var z=function(){var e=Object(s.useState)([]),t=Object(a.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)([]),i=Object(a.a)(r,2),l=i[0],d=i[1];return Object(s.useEffect)((function(){f.collectionGroup("matchGroups").get().then((function(e){n(e.docs.map((function(e){return Object(o.a)({id:e.id},e.data())})))})).catch((function(){})),f.collectionGroup("basicGroups").get().then((function(e){d(e.docs.map((function(e){return Object(o.a)({id:e.id},e.data())})))})).catch((function(){}))}),[]),Object(O.jsxs)("div",{class:"col-12 col-lg-5 col-xl-3 border-right",children:[Object(O.jsx)("div",{class:"px-4 d-none d-md-block",children:Object(O.jsx)("div",{class:"d-flex align-items-center",children:Object(O.jsx)("div",{class:"flex-grow-1",children:Object(O.jsx)("input",{type:"text",class:"form-control my-3",placeholder:"Search..."})})})}),"Matches Rooms",c.map((function(e){return Object(O.jsx)(Y,{id:e.id,name:e.name,routeUrl:"/chats/rooms/".concat(e.id)},e.id)})),"Basic Rooms",l.map((function(e){return Object(O.jsx)(Y,{id:e.id,name:e.name,routeUrl:"/chats/rooms/basicGroups/".concat(e.id)},e.id)}))]})};function J(e){var t,c,n=e.user,r=e.groupName,l=Object(s.useState)(""),d=Object(a.a)(l,2),j=d[0],u=d[1],b=Object(s.useState)(""),h=Object(a.a)(b,2),x=h[0],m=h[1],v=Object(i.g)().roomId,g=Object(s.useState)(""),y=Object(a.a)(g,2),N=y[0],w=y[1],k=Object(s.useState)([]),S=Object(a.a)(k,2),_=S[0],I=S[1],C=Object(s.useState)(!1),E=Object(a.a)(C,2),L=E[0],U=E[1];Object(s.useEffect)((function(){m(Math.floor(5e3*Math.random())),v&&(f.collection(r).doc(v).onSnapshot((function(e){var t;w(null===(t=e.data())||void 0===t?void 0:t.name)})),console.log(v),f.collection(r).doc(v).collection("chats").orderBy("sentDate").onSnapshot((function(e){I(e.docs.map((function(e){return Object(o.a)({id:e.id},e.data())})))})))}),[v,r]);return Object(O.jsxs)("div",{class:"col-12 col-lg-7 col-xl-9",children:[Object(O.jsx)("div",{class:"py-2 px-4 border-bottom d-none d-lg-block",children:Object(O.jsxs)("div",{class:"d-flex align-items-center py-1",children:[Object(O.jsx)("div",{class:"position-relative",children:Object(O.jsx)(V.a,{src:"https://avatars.dicebear.com/api/human/".concat(x,".svg")})}),Object(O.jsxs)("div",{class:"flex-grow-1 pl-3",children:[Object(O.jsx)("strong",{children:N}),Object(O.jsx)("div",{class:"text-muted small",children:Object(O.jsxs)("em",{children:["Last seen",new Date(null===(t=_[_.length-1])||void 0===t||null===(c=t.timestamp)||void 0===c?void 0:c.toDate()).toUTCString()]})})]})]})}),Object(O.jsx)("div",{style:{overflow:"auto",overflowX:"hidden",height:"500px"},children:_.map((function(e){var t;return Object(O.jsx)("div",{class:"position-relative",onClick:function(){U(!L)},children:Object(O.jsx)("div",{class:"p-4",children:Object(O.jsx)("div",{className:"pb-4 chat-message-".concat(e.userName===(null===n||void 0===n?void 0:n.displayName)?"right":"left"),children:L?Object(O.jsxs)("div",{class:"flex-shrink-1 bg-light rounded py-2 px-3 mr-3",children:[Object(O.jsx)("div",{class:"font-weight-bold mb-1",children:e.message}),Object(O.jsx)("div",{class:"text-muted small text-nowrap mt-2",children:new Date(null===(t=e.sentDate)||void 0===t?void 0:t.toDate()).toUTCString()})]}):Object(O.jsxs)("div",{class:"flex-shrink-1 bg-light rounded py-2 px-3 mr-3",children:[Object(O.jsx)("div",{class:"font-weight-bold mb-1",children:e.userName}),e.message]})})})},e.id)}))}),Object(O.jsx)("div",{class:"flex-grow-0 py-3 px-4 border-top",children:Object(O.jsxs)("div",{class:"input-group",children:[Object(O.jsx)("input",{value:j,onChange:function(e){return u(e.target.value)},type:"text",class:"form-control",placeholder:"Type your message"}),Object(O.jsx)("button",{class:"btn btn-primary",onClick:function(e){e.preventDefault(),""!==j&&void 0!==j&&null!==j&&f.collection(r).doc(v).collection("chats").add({message:j,userId:n.uid,userName:n.displayName,sentDate:p.a.firestore.FieldValue.serverTimestamp()}).then((function(e){return u("")})).catch((function(e){console.log("Messaj g\xf6nderilemedi"+e)})),u("")},children:"Send"})]})})]})}var W=Object(l.b)((function(e){return{user:e.userReducer}}))((function(e){return Object(O.jsx)("div",{children:Object(O.jsx)("main",{class:"content",children:Object(O.jsxs)("div",{class:"container p-0",children:[Object(O.jsx)("h1",{class:"h3 mb-3",children:"Messages"}),Object(O.jsx)("div",{class:"card",children:Object(O.jsx)("div",{class:"row g-0",children:Object(O.jsxs)(r.a,{children:[Object(O.jsx)(z,{user:e.user}),Object(O.jsx)(i.a,{path:"/chats/rooms/:roomId",exact:!0,children:Object(O.jsx)(J,{user:e.user,groupName:"matchGroups"})}),Object(O.jsx)(i.a,{path:"/chats/rooms/basicGroups/:roomId",children:Object(O.jsx)(J,{user:e.user,groupName:"basicGroups"})})]})})})]})})})}));function K(e){var t=e.user,c=Object(s.useState)(1),n=Object(a.a)(c,2),r=n[0],i=n[1],o=Object(s.useState)(""),l=Object(a.a)(o,2),d=l[0],j=l[1],u=Object(s.useState)(""),b=Object(a.a)(u,2),h=b[0],x=b[1],m=Object(s.useState)(new Date),p=Object(a.a)(m,2),v=p[0],g=p[1],y=Object(s.useState)("Erkek"),N=Object(a.a)(y,2),w=N[0],k=N[1];return Object(O.jsx)("div",{class:"col-lg-8 pb-5",children:Object(O.jsxs)("form",{class:"row",onSubmit:function(e){return function(e){e.preventDefault();var c={userId:t.uid,userName:d,city:h,birthDay:v,gender:w,photoURL:"https://avatars.dicebear.com/api/human/".concat(r,".svg")};f.collection("profiles").where("userId","==",t.uid).get().then((function(e){e.forEach((function(e){e.exists&&f.collection("profiles").doc(e.id).update(c).then((function(){t.updateProfile({displayName:d,photoURL:"https://avatars.dicebear.com/api/human/".concat(r,".svg")}).then((function(){})).catch((function(e){}))})).catch((function(e){return console.log(e)})),console.log(e.id," => ",e.data())}))})).catch((function(e){console.log("Error getting documents: ",e)}))}(e)},children:[Object(O.jsx)("div",{class:"col-md-6",children:Object(O.jsxs)("div",{class:"form-group",children:[Object(O.jsx)("label",{for:"account-fn",children:"UserName"}),Object(O.jsx)("input",{className:"form-control",type:"text",value:d,onChange:function(e){return j(e.target.value)},required:""})]})}),Object(O.jsx)("div",{className:"col-md-6",children:Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{for:"account-ln",children:"Gender"}),Object(O.jsx)("input",{placeholder:"alien if you want",class:"form-control",type:"text",id:"account-ln",value:w,onChange:function(e){return k(e.target.value)},required:""})]})}),Object(O.jsx)("div",{className:"col-md-6",children:Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{for:"account-email",children:"City"}),Object(O.jsx)("input",{class:"form-control",type:"text",id:"account-email",value:h,onChange:function(e){return x(e.target.value)}})]})}),Object(O.jsx)("div",{className:"col-md-6",children:Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{for:"account-phone",children:"BirthDay"}),Object(O.jsx)("input",{className:"form-control",type:"date",value:v,onChange:function(e){return g(e.target.value)},required:""})]})}),Object(O.jsx)("div",{class:"col-md-6",children:Object(O.jsxs)("div",{class:"form-group",children:[Object(O.jsx)("label",{for:"account-phone",children:"Your Lucky Number(Profile Photo)"}),Object(O.jsx)("input",{class:"form-control",type:"number",defaultValue:r,onChange:function(e){i(e.target.value)},required:""})]})}),Object(O.jsx)("div",{class:"col-md-6",children:Object(O.jsx)("img",{src:"https://avatars.dicebear.com/api/human/".concat(r,".svg"),alt:"Resim yok"})}),Object(O.jsxs)("div",{class:"col-12",children:[Object(O.jsx)("hr",{class:"mt-2 mb-3"}),Object(O.jsxs)("div",{class:"d-flex flex-wrap justify-content-between align-items-center",children:[Object(O.jsx)("div",{class:"custom-control custom-checkbox d-block"}),Object(O.jsx)("button",{class:"btn btn-style-1 btn-primary",type:"submit","data-toast":"","data-toast-position":"topRight","data-toast-type":"success","data-toast-icon":"fe-icon-check-circle","data-toast-title":"Success!","data-toast-message":"Your profile updated successfuly.",children:"Update Profile"})]})]})]})})}var Q=function(e){var t=e.user,c=Object(i.g)().param,s="personal-infos",n="change-password";return Object(O.jsxs)("div",{className:"col-lg-4 pb-5",children:[Object(O.jsxs)("div",{className:"author-card pb-3",children:[Object(O.jsx)("div",{className:"author-card-cover",children:Object(O.jsx)(r.b,{class:"btn btn-style-1 btn-white btn-sm","data-toggle":"tooltip",title:"","data-original-title":"You currently have 290 Reward points to spend"})}),Object(O.jsxs)("div",{className:"author-card-profile",children:[Object(O.jsx)("div",{className:"author-card-avatar",children:Object(O.jsx)("img",{src:null===t||void 0===t?void 0:t.photoURL,alt:"Daniel Adams"})}),Object(O.jsxs)("div",{className:"author-card-details",children:[Object(O.jsx)("h5",{className:"author-card-name text-lg",children:null===t||void 0===t?void 0:t.displayName}),Object(O.jsx)("span",{className:"author-card-position",children:"Joined February 06, 2017"})]})]})]}),Object(O.jsx)("div",{className:"wizard",children:Object(O.jsxs)("nav",{class:"list-group list-group-flush",children:[Object(O.jsxs)(r.b,{to:"/settings/".concat(s),className:"list-group-item ".concat(c===s||void 0===c?"active":""),children:[Object(O.jsx)("i",{class:"fe-icon-user text-muted"}),"Personal Infos"]}),Object(O.jsxs)(r.b,{to:"/settings/set-area-of-interest",className:"list-group-item ".concat("set-area-of-interest"===c?"active":""),children:[Object(O.jsx)("i",{class:"fe-icon-user text-muted"}),"Areas Of Interest"]}),Object(O.jsxs)(r.b,{to:"/settings/".concat(n),className:"list-group-item ".concat(c===n?"active":""),children:[Object(O.jsx)("i",{class:"fe-icon-user text-muted"}),"Change Password"]})]})})]})};c(84);function H(){var e=Object(s.useState)(""),t=Object(a.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(""),i=Object(a.a)(r,2),o=i[0],l=i[1];return Object(O.jsx)("div",{className:"col-md-8",children:Object(O.jsxs)("form",{onSubmit:function(e){return function(e){if(e.preventDefault(),c===o){console.log({password:c,confirmPassword:o});var t=v.currentUser;console.log(t),t.updatePassword(c).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)}))}else console.log("\u015eifreler Uyu\u015fmuyor")}(e)},children:[Object(O.jsx)("div",{class:"col-md-6",children:Object(O.jsxs)("div",{class:"form-group",children:[Object(O.jsx)("label",{for:"account-pass",children:"New Password"}),Object(O.jsx)("input",{class:"form-control",type:"password",id:"account-pass",value:c,onChange:function(e){return n(e.target.value)},required:!0})]})}),Object(O.jsx)("div",{class:"col-md-6",children:Object(O.jsxs)("div",{class:"form-group",children:[Object(O.jsx)("label",{for:"account-confirm-pass",children:"Confirm Password"}),Object(O.jsx)("input",{class:"form-control",type:"password",value:o,onChange:function(e){return l(e.target.value)},id:"account-confirm-pass",required:!0})]})}),Object(O.jsxs)("div",{class:"col-12",children:[Object(O.jsx)("hr",{class:"mt-2 mb-3"}),Object(O.jsxs)("div",{class:"d-flex flex-wrap justify-content-between align-items-center",children:[Object(O.jsx)("div",{class:"custom-control custom-checkbox d-block"}),Object(O.jsx)("button",{class:"btn btn-style-1 btn-primary",type:"submit","data-toast":"","data-toast-position":"topRight","data-toast-type":"success","data-toast-icon":"fe-icon-check-circle","data-toast-title":"Success!","data-toast-message":"Your profile updated successfuly.",children:"Update Password"})]})]})]})})}var X=c(23);function Z(e){var t=e.user,c=Object(s.useState)([{aiId:"1",aiName:"Resim",isChecked:!1},{aiId:"2",aiName:"M\xfczik",isChecked:!1},{aiId:"3",aiName:"Sanat",isChecked:!1},{aiId:"4",aiName:"Ingilizce",isChecked:!1}]),n=Object(a.a)(c,2),r=n[0],i=n[1],o=function(){var e=Object(k.a)(w.a.mark((function e(c){var s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),s=[],e.next=4,r.map((function(e){!0===e.isChecked&&s.push({aiId:e.aiId,aiName:e.aiName})}));case 4:f.collection("profiles").where("userId","==",t.uid).get().then(function(){var e=Object(k.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.forEach(function(){var e=Object(k.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.exists){e.next=3;break}return e.next=3,l(t.id);case 3:d(t.id,s);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log("Error getting documents: ",e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(k.a)(w.a.mark((function e(t){var c,s,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=f.collection("profiles").doc(t).collection("AreasOfInterest"),e.next=3,c.get();case 3:return s=e.sent,n=f.batch(),s.docs.forEach((function(e){n.delete(e.ref)})),e.next=8,n.commit();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e,t){t.forEach((function(t){f.collection("profiles").doc(e).collection("AreasOfInterest").add(t).then((function(e){})).catch((function(e){return console.log(e)}))}))};return Object(O.jsxs)("div",{className:"col-md-8",children:[Object(O.jsx)("div",{className:"row",children:r.map((function(e,t){return Object(O.jsxs)("div",{className:"col-md-5",children:[Object(O.jsx)("input",{type:"checkbox",className:"btn-check",name:"options",id:e.aiId,value:e.aiName,checked:e.isChecked,onChange:function(){return function(e){var t=r[e];t.isChecked=!r[e].isChecked,r[e]=t,i(Object(X.a)(r))}(t)}}),Object(O.jsx)("label",{className:"btn btn-".concat(!0===e.isChecked?"primary":"secondary"),for:e.aiId,children:e.aiName})]})}))}),Object(O.jsxs)("div",{class:"col-12",children:[Object(O.jsx)("hr",{class:"mt-2 mb-3"}),Object(O.jsxs)("div",{class:"d-flex flex-wrap justify-content-between align-items-center",children:[Object(O.jsx)("div",{class:"custom-control custom-checkbox d-block"}),Object(O.jsx)("button",{class:"btn btn-style-1 btn-primary",type:"submit","data-toast":"","data-toast-position":"topRight","data-toast-type":"success","data-toast-icon":"fe-icon-check-circle","data-toast-title":"Success!","data-toast-message":"Your profile updated successfuly.",onClick:function(e){return o(e)},children:"Save"})]})]})]})}var $=Object(l.b)((function(e){return{user:e.userReducer}}))((function(e){return Object(O.jsx)("div",{class:"container",style:{marginTop:"150px"},children:Object(O.jsx)("div",{class:"row",children:Object(O.jsxs)(r.a,{children:[Object(O.jsxs)(i.c,{children:[Object(O.jsx)(i.a,{path:"/settings/:param",children:Object(O.jsx)(Q,{user:e.user})}),Object(O.jsx)(i.a,{path:"/settings",children:Object(O.jsx)(Q,{user:e.user})})]}),Object(O.jsx)(i.a,{path:"/settings",exact:!0,children:Object(O.jsx)(K,{user:e.user})}),Object(O.jsx)(i.a,{path:"/settings/set-area-of-interest",children:Object(O.jsx)(Z,{user:e.user})}),Object(O.jsx)(i.a,{path:"/settings/personal-infos",children:Object(O.jsx)(K,{user:e.user})}),Object(O.jsx)(i.a,{path:"/settings/change-password",children:Object(O.jsx)(H,{user:e.user})})]})})})})),ee=c.p+"static/media/scream.22719dee.png";function te(){return Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"row justify-content-center",children:Object(O.jsxs)("div",{className:"col-md-6",children:[Object(O.jsx)("div",{className:"row justify-content-center",children:Object(O.jsx)("div",{className:"col-md-10",children:Object(O.jsx)("h3",{children:"Opsss.Profile Not Found"})})}),Object(O.jsx)("img",{src:ee,className:"col-md-8",alt:"Error"}),Object(O.jsx)("div",{className:"row justify-content-center mt-5",children:Object(O.jsx)("div",{className:"col-md-8",children:Object(O.jsx)(r.b,{to:"/settings/personal-infos",className:"btn btn-primary btn-lg",children:"AAA hemen Olu\u015ftur"})})})]})})})}c(85);var ce=function(){var e=Object(s.useState)([]),t=Object(a.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){f.collection("posts").orderBy("sentDate","desc").onSnapshot((function(e){n(e.docs.map((function(e){return Object(o.a)({id:e.id},e.data())})))}))}),[]),Object(O.jsx)("div",{className:"home",children:Object(O.jsx)("div",{className:"home__container",children:Object(O.jsx)("div",{className:"posts",children:c.map((function(e){return Object(O.jsx)(x,{post:e},e.id)}))})})})};var se=Object(l.b)(null,(function(e){return{actions:{setUser:Object(d.b)(A,e)}}}))((function(e){var t=Object(s.useState)(!1),c=Object(a.a)(t,2),n=c[0],o=c[1];return Object(s.useEffect)((function(){v.onAuthStateChanged((function(t){t?(!function(t){e.actions.setUser(t)}(t),o(!0)):(e.actions.setUser(null),o(!1))}))}),[e.actions]),Object(O.jsxs)(r.a,{children:[Object(O.jsx)(F,{}),Object(O.jsxs)(i.c,{children:[Object(O.jsx)(i.a,{path:"/postAdd",children:Object(O.jsx)("div",{style:{marginTop:"75px"},children:n?Object(O.jsx)(T,{}):Object(O.jsx)("p",{children:"L\xfctfen giri\u015f yap\u0131n\u0131z"})})}),Object(O.jsx)(i.a,{path:"/agenda",component:ce}),Object(O.jsx)(i.a,{path:"/settings",component:$}),Object(O.jsx)(i.a,{path:"/login",component:L}),Object(O.jsx)(i.a,{path:"/signup",component:R}),Object(O.jsx)(i.a,{path:"/profile/not-found",children:Object(O.jsx)("div",{style:{marginTop:"175px"},children:Object(O.jsx)(te,{})})}),Object(O.jsx)(i.a,{path:"/profile/:userId",children:Object(O.jsx)(q,{})}),Object(O.jsx)(i.a,{path:"/chats",children:Object(O.jsx)("div",{style:{marginTop:"75px"},children:Object(O.jsx)(W,{})})}),Object(O.jsx)(i.a,{exact:!0,path:"/",children:Object(O.jsx)(y,{})})]})]})}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne=c(54),ae={cart:[],user:null};var re=Object(d.c)({userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae.user,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return t.payload;default:return e}},cartReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae.cart,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var c=e.find((function(e){return e.product.id===t.payload.product.id}));if(c){var s=e.map((function(e){return e.product.id===t.payload.product.id?Object.assign({},c,{quantity:c.quantity+1}):e}));return s}return[].concat(Object(X.a)(e),[Object(o.a)({},t.payload)]);case b:var n=e.findIndex((function(e){return e.product.id===t.payload.id})),a=Object(X.a)(e);return n>=0?a.splice(n,1):console.warm("Cant remove prduct"),a;default:return e}}});var ie=c(28),oe=c.n(ie),le=(c(86),Object(d.d)(re,Object(d.a)(ne.a)));oe.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(l.a,{store:le,children:Object(O.jsx)(se,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[87,1,2]]]);
//# sourceMappingURL=main.b4f5c6f4.chunk.js.map