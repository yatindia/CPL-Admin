import{S as Z,i as ee,s as te,e as n,k as E,t as k,O as se,c as i,d as c,m as I,a as _,h as N,b as a,G as t,g as Y,P as O,J as V,Q as oe,R as re,U as le,n as ae,T as ne,w as ie,x as ce,y as de,z as ue,r as pe,p as me,C as fe}from"../chunks/index-836e8b2d.js";import{s as he,S as M}from"../chunks/sweetalert2.all-b9a31bff.js";import{A as _e}from"../chunks/config-1bbf0bd3.js";import{c as be}from"../chunks/functions-07375a64.js";import"../chunks/_commonjsHelpers-850449cf.js";function ve(m){let s,d,e,l,o,b,P,v,f,B,g,$,A,C,u,D,y,L,R,U,p,j,x,q,H,J,z;return{c(){s=n("link"),d=E(),e=n("section"),l=n("form"),o=n("div"),b=n("h1"),P=k("Log In"),v=E(),f=n("br"),B=E(),g=n("div"),$=n("label"),A=k("Email address"),C=E(),u=n("input"),D=E(),y=n("div"),L=n("label"),R=k("Password"),U=E(),p=n("input"),j=E(),x=n("button"),q=k("Login"),this.h()},l(r){const w=se('[data-svelte="svelte-1ysstw2"]',document.head);s=i(w,"LINK",{rel:!0,href:!0}),w.forEach(c),d=I(r),e=i(r,"SECTION",{class:!0});var F=_(e);l=i(F,"FORM",{class:!0});var G=_(l);o=i(G,"DIV",{class:!0});var h=_(o);b=i(h,"H1",{class:!0});var K=_(b);P=N(K,"Log In"),K.forEach(c),v=I(h),f=i(h,"BR",{}),B=I(h),g=i(h,"DIV",{class:!0});var S=_(g);$=i(S,"LABEL",{for:!0});var Q=_($);A=N(Q,"Email address"),Q.forEach(c),C=I(S),u=i(S,"INPUT",{type:!0,class:!0,id:!0,"aria-describedby":!0,placeholder:!0}),S.forEach(c),D=I(h),y=i(h,"DIV",{class:!0});var T=_(y);L=i(T,"LABEL",{for:!0});var W=_(L);R=N(W,"Password"),W.forEach(c),U=I(T),p=i(T,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0}),T.forEach(c),j=I(h),x=i(h,"BUTTON",{type:!0,class:!0});var X=_(x);q=N(X,"Login"),X.forEach(c),h.forEach(c),G.forEach(c),F.forEach(c),this.h()},h(){a(s,"rel","icon"),a(s,"href","/img/favicon.png"),document.title="Login",a(b,"class","text-center svelte-1c9oeba"),a($,"for","exampleInputEmail1"),a(u,"type","text"),a(u,"class","form-control my-2"),a(u,"id","exampleInputEmail1"),a(u,"aria-describedby","emailHelp"),a(u,"placeholder","Enter email"),a(g,"class","form-group my-2"),a(L,"for","exampleInputPassword1"),a(p,"type","password"),a(p,"class","form-control my-2"),a(p,"id","exampleInputPassword1"),a(p,"placeholder","Password"),a(y,"class","form-group my-2"),a(x,"type","submit"),a(x,"class","btn btn-danger w-100 mt-2 svelte-1c9oeba"),a(o,"class","cover"),a(l,"class","svelte-1c9oeba"),a(e,"class","signup svelte-1c9oeba")},m(r,w){t(document.head,s),Y(r,d,w),Y(r,e,w),t(e,l),t(l,o),t(o,b),t(b,P),t(o,v),t(o,f),t(o,B),t(o,g),t(g,$),t($,A),t(g,C),t(g,u),O(u,m[0].email),t(o,D),t(o,y),t(y,L),t(L,R),t(y,U),t(y,p),O(p,m[0].password),t(o,j),t(o,x),t(x,q),J||(z=[V(u,"input",m[2]),V(p,"input",m[3]),V(l,"submit",oe(m[4]))],J=!0)},p(r,[w]){w&1&&u.value!==r[0].email&&O(u,r[0].email),w&1&&p.value!==r[0].password&&O(p,r[0].password)},i(r){H||re(()=>{H=le(l,he,{}),H.start()})},o:ae,d(r){c(s),r&&c(d),r&&c(e),J=!1,ne(z)}}}function ge(m,s,d){ie(()=>be());let e={email:"",password:""};async function l(){let v="";if(e.email==""?v="Email cannot be empty":e.password==""&&(v="Password cannot be empty"),v!="")return M.fire({icon:"error",titleText:v}),!1;await fetch(`${_e}/admin/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(f=>f.json()).then(f=>{console.log(f),f.status?(localStorage.setItem("login",JSON.stringify(f.data.token)),M.fire({icon:"success",titleText:"Welcome Admin"}).then(()=>{window.location.href="/search"})):M.fire({icon:"question",titleText:"Somthing Happened",title:f.message})})}function o(){e.email=this.value,d(0,e)}function b(){e.password=this.value,d(0,e)}return[e,l,o,b,()=>l()]}class ye extends Z{constructor(s){super(),ee(this,s,ge,ve,te,{})}}function we(m){let s,d;return s=new ye({}),{c(){ce(s.$$.fragment)},l(e){de(s.$$.fragment,e)},m(e,l){ue(s,e,l),d=!0},p:ae,i(e){d||(pe(s.$$.fragment,e),d=!0)},o(e){me(s.$$.fragment,e),d=!1},d(e){fe(s,e)}}}function xe(m){return[]}class Se extends Z{constructor(s){super(),ee(this,s,xe,we,te,{})}}export{Se as default};
