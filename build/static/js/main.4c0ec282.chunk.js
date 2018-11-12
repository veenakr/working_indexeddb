(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,a){e.exports=a(373)},371:function(e,t,a){},373:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(9),l=a.n(o),i=a(23),s=a(24),c=a(27),u=a(25),m=a(26),d=a(383),h=a(382),p=a(15),f=a(40),g={apiUrl:"http://localhost:4000"};var E={login:function(e,t){var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})};return fetch("".concat(g.apiUrl,"/users/authenticate"),a).then(v).then(function(e){return e.token&&localStorage.setItem("user",JSON.stringify(e)),e})},logout:b,getAll:function(){var e={method:"GET",headers:function(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.token?{Authorization:"Bearer "+e.token}:{}}()};return fetch("".concat(g.apiUrl,"/users"),e).then(v)}};function b(){localStorage.removeItem("user")}function v(e){return e.text().then(function(t){var a=t&&JSON.parse(t);if(!e.ok){401===e.status&&b();var n=a&&a.message||e.statusText;return Promise.reject(n)}return a})}var O=a(75),w=Object(O.a)(),N={login:function(e,t){return function(a){a({type:"LOGIN_REQUEST",user:{email:e}}),E.login(e,t).then(function(e){a(function(e){return{type:"LOGIN_SUCCESS",user:e}}(e)),w.push("/")},function(e){a(function(e){return{type:"LOGIN_FAILURE",error:e}}(e)),console.log(e),w.push({pathname:"/error",state:e})})}},logout:function(){return E.logout(),{type:"LOGOUT"}},getAll:function(){return function(e){e({type:"GETALL_REQUEST"}),E.getAll().then(function(t){return e(function(e){return{type:"GETALL_SUCCESS",users:e}}(t))},function(t){return e(function(e){return{type:"GETALL_FAILURE",error:e}}(t))})}}};var y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).props.dispatch(N.logout()),a.state={email:"",password:"",submitted:!1,err:""},a.handleCancel=a.handleCancel.bind(Object(p.a)(Object(p.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(Object(p.a)(a))),a.onSignUp=a.onSignUp.bind(Object(p.a)(Object(p.a)(a))),a.onEmailChange=a.onEmailChange.bind(Object(p.a)(Object(p.a)(a))),a.onPasswordChange=a.onPasswordChange.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({submitted:!0});var t=this.state,a=t.email,n=t.password,r=this.props.dispatch;""===a&&""===n?this.setState(function(){return{err:"Please enter email / password"}}):""===a?this.setState(function(){return{err:"Please enter email"}}):""===n?this.setState(function(){return{err:"Please enter password"}}):a&&n&&r(N.login(a,n))}},{key:"handleCancel",value:function(e){this.setState(function(){return{email:"",password:""}}),document.getElementById("login-page").reset()}},{key:"onEmailChange",value:function(e){var t=e.target.value;this.setState(function(){return{email:t}})}},{key:"onPasswordChange",value:function(e){var t=e.target.value;this.setState(function(){return{password:t}})}},{key:"onSignUp",value:function(){this.props.history.push("/signup")}},{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.err;return r.a.createElement("div",{className:"main"},r.a.createElement("form",{id:"login-page",name:"form",action:"action_page.php",onSubmit:this.handleSubmit},r.a.createElement("label",null,r.a.createElement("b",null,"Email Id")),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"Enter email",name:"uname",value:t,onChange:this.onEmailChange}),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("b",null,"Password")),r.a.createElement("br",null),r.a.createElement("input",{type:"password",placeholder:"Enter Password",name:"psw",value:a,onChange:this.onPasswordChange}),r.a.createElement("br",null),n&&r.a.createElement("p",{className:"error"},n),r.a.createElement("button",{className:"loginButton",type:"submit"},"Login")),r.a.createElement("button",{className:"cancelbtn",onClick:this.handleCancel},"clear"),r.a.createElement("button",{className:"loginButton",type:"submit",onClick:this.onSignUp},"SignUp"))}}]),t}(r.a.Component),S=Object(f.b)(function(e){return{loggedIn:e.authentication.loggedIn}})(y),j=a(376),C=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(N.getAll())}},{key:"handleLogout",value:function(){this.props.dispatch(N.logout())}},{key:"handleUserInfo",value:function(){console.log(this.props.user)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"header"},"Successfully Logged in!!!"),r.a.createElement("h3",null,"Welcome ",this.props.user.firstName),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(j.a,{to:"/userInfo"},"Click here to know Your Information"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(j.a,{to:"/other"},"Click here to view Other Users"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(j.a,{onClick:this.handleLogout.bind(this),className:"cancelbtn",to:"/"},"Logout"))}}]),t}(r.a.Component),k=Object(f.b)(function(e){var t=e.users;return{user:e.authentication.user,users:t}})(C),x=a(140),U=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={},e.handleChange=e.handleChange.bind(Object(p.a)(Object(p.a)(e))),e.handleSignUp=e.handleSignUp.bind(Object(p.a)(Object(p.a)(e))),e.handleCancel=e.handleCancel.bind(Object(p.a)(Object(p.a)(e))),e.handleGoHome=e.handleGoHome.bind(Object(p.a)(Object(p.a)(e))),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(x.a)({},e.target.name,e.target.value))}},{key:"handleSignUp",value:function(e){var t=this.state;e.preventDefault(),window.indexedDB||console.log("Not supported");var a,n,r,o=window.indexedDB.open("LoginPage4",1);o.onupgradeneeded=function(e){a=o.result,r=a.createObjectStore("UserDataStore",{keyPath:"id",autoIncrement:!0}),r.createIndex("firstName","firstName",{unique:!1})},o.onerror=function(e){console.log("There was an error: "+e.target.errorCode)},o.onsuccess=function(e){var a=o.result;n=a.transaction("UserDataStore","readwrite"),r=n.objectStore("UserDataStore"),r.index("firstName"),a.onerror=function(e){console.log("Error: "+e.target.errorCode)},r.put(t),r.getAll().onsuccess=function(e){},n.oncomplete=function(){a.close()}},this.props.history.push("/"),window.location.reload()}},{key:"handleGoHome",value:function(e){this.props.history.push("/")}},{key:"handleCancel",value:function(e){e.preventDefault(),this.setState({email:"",password:"",confirmPassword:"",firstname:"",lastname:""}),document.getElementById("login-page").reset()}},{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement("h2",null,"Sign Up"),r.a.createElement("br",null),r.a.createElement("button",{className:"home",onClick:this.handleGoHome},"Home"),r.a.createElement("form",{id:"login-page",onSubmit:this.handleSignUp},r.a.createElement("label",null,r.a.createElement("b",null,"First Name")),r.a.createElement("br",null),r.a.createElement("input",{className:"form-item",type:"text",placeholder:"Enter Firstname",name:"firstName",onChange:this.handleChange,required:!0}),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("b",null,"Last Name")),r.a.createElement("br",null),r.a.createElement("input",{className:"form-item",type:"text",placeholder:"Enter Lastname",name:"lastName",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("b",null,"Email Id")),r.a.createElement("br",null),r.a.createElement("input",{className:"form-item",type:"text",placeholder:"Enter Email",name:"email",onChange:this.handleChange,required:!0}),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("b",null,"Password")),r.a.createElement("br",null),r.a.createElement("input",{className:"form-item",type:"password",placeholder:"Enter Password",name:"password",onChange:this.handleChange,required:!0}),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("b",null,"Confirm Password")),r.a.createElement("br",null),r.a.createElement("input",{className:"form-item",type:"password",placeholder:"Enter Password",name:"confirmPassword",onChange:this.handleChange,required:!0}),r.a.createElement("br",null),r.a.createElement("p",{className:"err"},this.state.error),r.a.createElement("button",{className:"loginButton",type:"submit",name:"submit"},"SignUp"),r.a.createElement("button",{className:"cancelbtn",onClick:this.handleCancel},"clear")))}}]),t}(r.a.Component),L=a(380),I=a(374),A=a(375),P=a(377),T=a(378),G=a(11),D=a(381),B=(a(171),a(178),a(180),a(181),a(184),a(187),a(190),a(31)),F=a(141),_=JSON.parse(localStorage.getItem("user")),J=_?{loggedIn:!0,user:_}:{};var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_REQUEST":return{loggingIn:!0,user:t.user};case"LOGIN_SUCCESS":return{loggedIn:!0,user:t.user};case"LOGIN_FAILURE":case"LOGOUT":return{};default:return e}},W=Object(B.c)({authentication:R,users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GETALL_REQUEST":return{loading:!0};case"GETALL_SUCCESS":return{items:t.users};case"GETALL_FAILURE":return{error:t.error};default:return e}}}),q=a(103),H=a(142),z={key:"root",storage:a.n(H).a},M=Object(q.a)(z,W),Q=Object(B.d)(M,Object(B.a)(F.a)),X=Object(q.b)(Q),Y=L.a.Meta,V=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0},a.onChange=function(e){a.setState({loading:!e})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.loading,t=Q.getState();return r.a.createElement("div",null,r.a.createElement("h3",{className:"display"},"Displaying User information in different card patterns"),r.a.createElement("div",{style:{background:"#ECECEC",padding:"30px"}},r.a.createElement(L.a,{title:"User information (No Border)",bordered:!1,style:{width:300}},r.a.createElement("p",null,"Email Address : ",t.authentication.user.email),r.a.createElement("p",null,"First Name : ",t.authentication.user.firstName),r.a.createElement("p",null,"Last Name : ",t.authentication.user.lastName)),r.a.createElement(L.a,{title:"User information (Basic card)",style:{width:400,marginTop:"20px"}},r.a.createElement("p",null,"Email Address : ",t.authentication.user.email),r.a.createElement("p",null,"First Name : ",t.authentication.user.firstName),r.a.createElement("p",null,"Last Name : ",t.authentication.user.lastName)),r.a.createElement(L.a,{style:{width:300,marginTop:"20px"}},r.a.createElement("p",null,"Email Address : ",t.authentication.user.email),r.a.createElement("p",null,"First Name : ",t.authentication.user.firstName),r.a.createElement("p",null,"Last Name : ",t.authentication.user.lastName)),r.a.createElement(L.a,{title:"Customized Card",hoverable:!0,style:{width:240,marginTop:"20px"},cover:r.a.createElement("img",{alt:"Profile pic",src:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"})},r.a.createElement(Y,{title:"Login Page Example",description:"www.something.com"}))),r.a.createElement("div",{style:{background:"#ECECEC",padding:"30px"}},r.a.createElement(I.a,{gutter:16},r.a.createElement(A.a,{span:8},r.a.createElement(L.a,{title:"Email Address",bordered:!1},t.authentication.user.email)),r.a.createElement(A.a,{span:8},r.a.createElement(L.a,{title:"FirstName",bordered:!1},t.authentication.user.firstName)),r.a.createElement(A.a,{span:8},r.a.createElement(L.a,{title:"LastName",bordered:!1},t.authentication.user.lastName)))),r.a.createElement("div",{style:{background:"#ECECEC"}},r.a.createElement(P.a,{checked:!e,onChange:this.onChange}),r.a.createElement(L.a,{style:{width:300,marginTop:16},loading:e},r.a.createElement(Y,{avatar:r.a.createElement(T.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:"User info",description:"Logged in User"})),r.a.createElement(L.a,{style:{width:300,marginTop:20},actions:[r.a.createElement(G.a,{type:"setting"}),r.a.createElement(G.a,{type:"edit"}),r.a.createElement(G.a,{type:"ellipsis"})]},r.a.createElement(D.a,{loading:e,avatar:!0,active:!0},r.a.createElement(Y,{avatar:r.a.createElement(T.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:"User info",description:"Logged in User"})))))}}]),t}(r.a.Component),K=a(379),$=(a(259),function(e){function t(e){var a;Object(i.a)(this,t),a=Object(c.a)(this,Object(u.a)(t).call(this,e));var n=[],r=[],o=[],l=[],s=Q.getState(),m={firstName:s.authentication.user.firstName,lastName:s.authentication.user.lastName,email:s.authentication.user.email,id:s.authentication.user.id};m.key=m.id,delete m.token;var d=s.users.items.filter(function(e){return delete e.password,delete e.confirmPassword,e.key=e.id,JSON.stringify(e)!==JSON.stringify(m)});return d.map(function(e){return n.push({text:e.id,value:e.id}),r.push({text:e.email,value:e.email}),o.push({text:e.firstName,value:e.firstName}),l.push({text:e.lastName,value:e.lastName}),{filtersID:n,filtersEmail:r,filtersFirstName:o,filtersLastName:l}}),a.columns=[{title:"id",dataIndex:"id",key:"id",sorter:function(e,t){return e.id-t.id}},{title:"email",dataIndex:"email",key:"email",filters:r,filterMultiple:!1,onFilter:function(e,t){return 0===t.email.indexOf(e)},sorter:function(e,t){return e.email.length-t.email.length}},{title:"firstName",dataIndex:"firstName",key:"firstName",filters:o,filterMultiple:!1,onFilter:function(e,t){return 0===t.firstName.indexOf(e)},sorter:function(e,t){return e.firstName.length-t.firstName.length}},{title:"lastName",dataIndex:"lastName",key:"lastName",filters:l,filterMultiple:!1,onFilter:function(e,t){return 0===t.lastName.indexOf(e)},sorter:function(e,t){return e.lastName.length-t.lastName.length}}],a.dataSource=d,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(K.a,{dataSource:this.dataSource,columns:this.columns})}}]),t}(r.a.Component)),Z=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("h3",{className:"err"},this.props.location.state),r.a.createElement("br",null),r.a.createElement(j.a,{className:"cancelbtn",to:"/"},"Go Home"))}}]),t}(r.a.Component),ee=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=localStorage.getItem("user");return r.a.createElement(d.a,{history:w},r.a.createElement("div",null,r.a.createElement(h.a,{path:"/index.html",exact:!0,component:S}),e?r.a.createElement(h.a,{path:"/",component:k,exact:!0,user:e}):r.a.createElement(h.a,{path:"/",component:S,exact:!0}),r.a.createElement(h.a,{path:"/signup",component:U,exact:!0}),r.a.createElement(h.a,{path:"/userInfo",component:V,exact:!0}),r.a.createElement(h.a,{path:"/other",component:$,exact:!0}),r.a.createElement(h.a,{path:"/error",component:Z,exact:!0})))}}]),t}(r.a.Component),te=Object(f.b)(function(e){var t=e.users;return{user:e.authentication.user,users:t}})(ee),ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ne(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(371);var re=[];var oe=a(158);!function(){window.indexedDB||console.log("not supported");var e,t,a,n=window.indexedDB.open("LoginPage4",1);n.onupgradeneeded=function(t){e=n.result,(a=e.createObjectStore("UserDataStore",{keyPath:"id",autoIncrement:!0})).createIndex("firstName","firstName",{unique:!1})},n.onerror=function(e){console.log("There was an error: "+e.target.errorCode)},n.onsuccess=function(r){e=n.result,t=e.transaction("UserDataStore","readwrite"),(a=t.objectStore("UserDataStore")).index("firstName"),e.onerror=function(e){console.log("Error: "+e.target.errorCode)};var o=a.getAll();t.onerror=function(e){console.log(e.target)},o.onsuccess=function(){o.result.map(function(e){return re.push(e)})},t.oncomplete=function(){e.close()}},console.log(re);var r=window.fetch;window.fetch=function(e,t){return new Promise(function(a,n){setTimeout(function(){if(e.endsWith("/users/authenticate")&&"POST"===t.method){var o=JSON.parse(t.body),l=re.filter(function(e){return e.email===o.email&&e.password===o.password});if(l.length){var i=l[0],s={id:i.id,email:i.email,firstName:i.firstName,lastName:i.lastName,token:"fake-jwt-token"};a({ok:!0,text:function(){return Promise.resolve(JSON.stringify(s))}})}else n("Email or password is incorrect")}else e.endsWith("/users")&&"GET"===t.method?t.headers&&"Bearer fake-jwt-token"===t.headers.Authorization?a({ok:!0,text:function(){return Promise.resolve(JSON.stringify(re))}}):n("Unauthorised"):r(e,t).then(function(e){a(e)})},500)})}}(),l.a.render(r.a.createElement(f.a,{store:Q},r.a.createElement(oe.a,{loading:null,persistor:X},r.a.createElement(te,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");ae?(function(e,t){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ne(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):ne(t,e)})}}()}},[[162,2,1]]]);
//# sourceMappingURL=main.4c0ec282.chunk.js.map