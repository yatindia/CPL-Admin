import{S as re,i as ne,s as oe,R as ie,e as i,k as I,t as E,O as de,c as d,d as l,m as N,a as p,h as y,b as s,F as Z,G as e,g as ee,J as V,j as te,n as se,T as ce,w as he,W as ue}from"../../chunks/index-836e8b2d.js";import{P as ae,A as le}from"../../chunks/config-1bbf0bd3.js";const{window:B}=ue;function pe(r){let h,m,n,t,_,v,U,k,g,a,c,j,w,x,G,T=r[1].name+"",S,A,z,b,O,D=r[1].email+"",P,$,q,C,H,F;return ie(r[5]),{c(){h=i("link"),m=I(),n=i("div"),t=i("div"),_=i("h2"),v=i("strong"),U=E("User details"),k=I(),g=i("div"),a=i("img"),j=I(),w=i("h5"),x=i("span"),G=E("Name    :"),S=E(T),A=I(),z=i("h5"),b=i("span"),O=E("E-mail  :"),P=E(D),$=I(),q=i("button"),C=E("Delete User"),this.h()},l(o){const f=de('[data-svelte="svelte-u6wwfs"]',document.head);h=d(f,"LINK",{rel:!0,href:!0}),f.forEach(l),m=N(o),n=d(o,"DIV",{class:!0});var W=p(n);t=d(W,"DIV",{class:!0});var u=p(t);_=d(u,"H2",{});var J=p(_);v=d(J,"STRONG",{class:!0});var K=p(v);U=y(K,"User details"),K.forEach(l),J.forEach(l),k=N(u),g=d(u,"DIV",{class:!0});var L=p(g);a=d(L,"IMG",{class:!0,src:!0,alt:!0}),L.forEach(l),j=N(u),w=d(u,"H5",{class:!0});var M=p(w);x=d(M,"SPAN",{class:!0});var Q=p(x);G=y(Q,"Name    :"),Q.forEach(l),S=y(M,T),M.forEach(l),A=N(u),z=d(u,"H5",{class:!0});var R=p(z);b=d(R,"SPAN",{class:!0});var X=p(b);O=y(X,"E-mail  :"),X.forEach(l),P=y(R,D),R.forEach(l),$=N(u),q=d(u,"BUTTON",{class:!0});var Y=p(q);C=y(Y,"Delete User"),Y.forEach(l),u.forEach(l),W.forEach(l),this.h()},h(){s(h,"rel","icon"),s(h,"href","/img/favicon.png"),document.title="Settings",s(v,"class","mb-0"),s(a,"class","img-fluid"),Z(a.src,c=`${ae}/${r[1].profile}`)||s(a,"src",c),s(a,"alt",""),s(g,"class","prof-div svelte-z3qh76"),s(x,"class","svelte-z3qh76"),s(w,"class","svelte-z3qh76"),s(b,"class","svelte-z3qh76"),s(z,"class","svelte-z3qh76"),s(q,"class","btndanger svelte-z3qh76"),s(t,"class","userdetails svelte-z3qh76"),s(n,"class","containerr bg-lite svelte-z3qh76")},m(o,f){e(document.head,h),ee(o,m,f),ee(o,n,f),e(n,t),e(t,_),e(_,v),e(v,U),e(t,k),e(t,g),e(g,a),e(t,j),e(t,w),e(w,x),e(x,G),e(w,S),e(t,A),e(t,z),e(z,b),e(b,O),e(z,P),e(t,$),e(t,q),e(q,C),H||(F=[V(B,"resize",r[4]),V(B,"resize",r[5]),V(q,"click",r[6])],H=!0)},p(o,[f]){f&2&&!Z(a.src,c=`${ae}/${o[1].profile}`)&&s(a,"src",c),f&2&&T!==(T=o[1].name+"")&&te(S,T),f&2&&D!==(D=o[1].email+"")&&te(P,D)},i:se,o:se,d(o){l(h),o&&l(m),o&&l(n),H=!1,ce(F)}}}function _e({params:r}){return{props:{owner:r.id}}}function ve(r,h,m){let{owner:n}=h,t=0,_={};he(async()=>{const c=await(await fetch(`${le}/admin/getuser/${n}`,{method:"GET",headers:{"Content-Type":"application/json"}})).json();console.log(c),c.status===!0&&m(1,_=c.data)});async function v(){const c=await(await fetch(`${le}/admin/deleteuser/${n}`,{method:"PUT",headers:{"Content-Type":"application/json"}})).json();console.log(c),c.status===!0&&(alert("User deleted Successfully"),window.location.href="/search")}const U=()=>console.log(t);function k(){m(0,t=B.innerWidth)}const g=()=>{v()};return r.$$set=a=>{"owner"in a&&m(3,n=a.owner)},[t,_,v,n,U,k,g]}class ge extends re{constructor(h){super(),ne(this,h,ve,pe,oe,{owner:3})}}export{ge as default,_e as load};