import{S as ie,i as ce,s as de,e as u,a as l,b as D,l as T,n as W,d as O,o as me,g as fe,c as b,f as ne,h as te,t as le,j as ye,k as o,m as re,p as se,q as Q,r as Le,u as $,v as De,w as ae,x as ee,y as He,z as je,A as we,B as ze,C as Be,D as pe,H as Ne,E as q,F as ve,G as he}from"./vendor.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();function Re(s){let t,e,r;return{c(){t=u("button"),t.textContent="Google Sync",l(t,"class","w-full text-left text-lg")},m(i,a){D(i,t,a),e||(r=T(t,"click",s[0]),e=!0)},p:W,i:W,o:W,d(i){i&&O(t),e=!1,r()}}}function Ze(s){let t=!1;function e(){if(!t){r().then(()=>{e()});return}const i=fe.auth2.getAuthInstance().currentUser.get();if(!i.isSignedIn()){fe.auth2.getAuthInstance().signIn().then(e);return}i.getAuthResponse(),console.log("User signed in:",i);const a=JSON.parse(localStorage.getItem("otps"))||[],d={name:"OTPs.json",mimeType:"application/json"},g={mimeType:"application/json",body:JSON.stringify(a)};fe.client.drive.files.create({resource:d,media:g,fields:"id"}).then(n=>{console.log("File created:",n.result)})}async function r(){const i="50771926637-24s7b5md9vlk6kaiavd787nrt17d68v8.apps.googleusercontent.com",a="AIzaSyA6vFvIeIfUR75v0AjAT9ap82_RljcZ0LA",d=["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],f="https://www.googleapis.com/auth/drive.file";await fe.load("client:auth2"),await fe.client.init({apiKey:a,clientId:i,discoveryDocs:d,scope:f}),t=!0}return me(()=>{const i=document.createElement("script");i.src="https://apis.google.com/js/platform.js",i.async=!0,i.defer=!0,i.onload=r,document.head.appendChild(i)}),[e]}class Oe extends ie{constructor(t){super(),ce(this,t,Ze,Re,de,{})}}function ke(s){let t,e,r,i,a,d,f,g,n,p,c,h,y,m,k,_,w,x,M,I,E,v,S,L,j,G=s[0]?"Light Mode":"Dark Mode",Y,V,R,z,K;return f=new Oe({}),{c(){t=u("div"),e=u("div"),r=u("button"),r.textContent="\xD7",i=b(),a=u("ul"),d=u("li"),ne(f.$$.fragment),g=b(),n=te("svg"),p=te("path"),c=te("path"),h=b(),y=u("li"),m=u("button"),m.textContent="Import",k=b(),_=u("li"),w=u("button"),w.textContent="Export",x=b(),M=u("li"),I=u("label"),E=u("input"),v=b(),S=u("div"),S.innerHTML='<div class="dot peer-checked:translate-x-4"></div>',L=b(),j=u("span"),Y=le(G),l(r,"class","text-gray-500 dark:text-gray-400 self-end text-2xl"),l(p,"fill","none"),l(p,"d","M0 0h24v24H0V0z"),l(c,"d","M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zM8 13h2.55v3h2.9v-3H16l-4-4z"),l(c,"fill","#34a853"),l(c,"class","color000000 svgShape"),l(n,"xmlns","http://www.w3.org/2000/svg"),l(n,"viewBox","0 0 24 24"),l(n,"id","Backup"),l(n,"width","30"),l(n,"height","30"),l(d,"class","flex items-center space-x-2 p-2 rounded-md border-b dark:border-black cursor-pointer"),l(m,"class","w-full text-left"),l(y,"class","flex items-center space-x-2 p-2 rounded-md border-b dark:border-[#121212]"),l(w,"class","w-full text-left"),l(_,"class","flex items-center space-x-2 p-2 rounded-md border-b dark:border-[#121212]"),l(E,"type","checkbox"),E.checked=s[0],l(E,"class","sr-only peer"),l(S,"class","toggle-bg peer-checked:bg-tertiary"),l(j,"class","ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"),l(I,"class","relative inline-flex items-center cursor-pointer"),l(M,"class","flex items-center space-x-2 rounded-md border-b dark:border-[#121212]"),l(a,"class","space-y-4 mt-4"),l(e,"class",V=(s[0]?"bg-gray-900 text-white":"bg-primary text-gray-800")+" w-3/4 p-4 rounded-lg shadow-lg"),l(t,"class","fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center lg:hidden")},m(Z,C){D(Z,t,C),o(t,e),o(e,r),o(e,i),o(e,a),o(a,d),re(f,d,null),o(d,g),o(d,n),o(n,p),o(n,c),o(a,h),o(a,y),o(y,m),o(a,k),o(a,_),o(_,w),o(a,x),o(a,M),o(M,I),o(I,E),o(I,v),o(I,S),o(I,L),o(I,j),o(j,Y),R=!0,z||(K=[T(r,"click",s[5]),T(m,"click",s[3]),T(w,"click",s[4]),T(E,"change",s[2])],z=!0)},p(Z,C){(!R||C&1)&&(E.checked=Z[0]),(!R||C&1)&&G!==(G=Z[0]?"Light Mode":"Dark Mode")&&se(Y,G),(!R||C&1&&V!==(V=(Z[0]?"bg-gray-900 text-white":"bg-primary text-gray-800")+" w-3/4 p-4 rounded-lg shadow-lg"))&&l(e,"class",V)},i(Z){R||(Q(f.$$.fragment,Z),R=!0)},o(Z){$(f.$$.fragment,Z),R=!1},d(Z){Z&&O(t),ae(f),z=!1,ee(K)}}}function Fe(s){let t,e,r,i,a,d,f,g,n,p,c,h,y,m,k,_,w,x,M,I,E,v,S,L,j,G=s[0]?"Light Mode":"Dark Mode",Y,V,R,z,K,Z,C,A,H,N,J,X,U,ue,oe;f=new Oe({});let B=s[1]&&ke(s);return{c(){t=u("aside"),e=u("div"),r=u("div"),r.textContent="AUTHENTICATOR",i=b(),a=u("ul"),d=u("li"),ne(f.$$.fragment),g=b(),n=te("svg"),p=te("path"),c=te("path"),h=b(),y=u("li"),m=u("button"),m.textContent="Import",k=b(),_=u("li"),w=u("button"),w.textContent="Export",x=b(),M=u("div"),I=u("label"),E=u("input"),v=b(),S=u("div"),S.innerHTML='<div class="dot"></div>',L=b(),j=u("span"),Y=le(G),R=b(),z=u("header"),K=u("h1"),K.textContent="Authenticator",Z=b(),C=u("button"),A=le("\u2630"),J=b(),B&&B.c(),X=ye(),l(r,"class","text-[#008000] space-x-2 dark:text-primary text-lg font-bold mb-8"),l(p,"fill","none"),l(p,"d","M0 0h24v24H0V0z"),l(c,"d","M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zM8 13h2.55v3h2.9v-3H16l-4-4z"),l(c,"fill","#34a853"),l(c,"class","color000000 svgShape"),l(n,"xmlns","http://www.w3.org/2000/svg"),l(n,"viewBox","0 0 24 24"),l(n,"id","Backup"),l(n,"width","40"),l(n,"height","40"),l(d,"class","flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-yellow-100 border-b cursor-pointer dark:border-[#121212]"),l(m,"class","w-full text-left text-lg"),l(y,"class","flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 border-b dark:border-[#121212]"),l(w,"class","w-full text-left text-lg"),l(_,"class","flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 border-b dark:border-[#121212]"),l(a,"class","space-y-4 mt-4"),l(E,"type","checkbox"),E.checked=s[0],l(E,"class","sr-only"),l(S,"class","toggle-bg"),l(j,"class","ml-3 text-sm font-medium text-lg text-gray-900 dark:text-gray-300"),l(I,"class","relative inline-flex items-center cursor-pointer"),l(M,"class","flex justify-start items-center pt-4 pl-6 border-t border-gray-300 dark:border-[#121212]"),l(t,"class",V=(s[0]?"dark:bg-[#15202b] text-secondary":"bg-primary text-gray-800")+" hidden lg:flex flex-col justify-between w-1/5 min-h-screen shadow-lg p-4"),l(K,"class","text-xl font-semibold uppercase text-tertiary dark:text-primary"),l(C,"class",H="text-2xl "+(s[0]?"text-white":"text-[#0d0c22]")),l(z,"class",N=(s[0]?"bg-primaryDark text-white":"bg-primary text-[#0d0c22]")+" lg:hidden w-full flex items-center justify-between p-4 shadow")},m(P,F){D(P,t,F),o(t,e),o(e,r),o(e,i),o(e,a),o(a,d),re(f,d,null),o(d,g),o(d,n),o(n,p),o(n,c),o(a,h),o(a,y),o(y,m),o(a,k),o(a,_),o(_,w),o(t,x),o(t,M),o(M,I),o(I,E),o(I,v),o(I,S),o(I,L),o(I,j),o(j,Y),D(P,R,F),D(P,z,F),o(z,K),o(z,Z),o(z,C),o(C,A),D(P,J,F),B&&B.m(P,F),D(P,X,F),U=!0,ue||(oe=[T(m,"click",s[3]),T(w,"click",s[4]),T(E,"change",s[2]),T(C,"click",s[5])],ue=!0)},p(P,[F]){(!U||F&1)&&(E.checked=P[0]),(!U||F&1)&&G!==(G=P[0]?"Light Mode":"Dark Mode")&&se(Y,G),(!U||F&1&&V!==(V=(P[0]?"dark:bg-[#15202b] text-secondary":"bg-primary text-gray-800")+" hidden lg:flex flex-col justify-between w-1/5 min-h-screen shadow-lg p-4"))&&l(t,"class",V),(!U||F&1&&H!==(H="text-2xl "+(P[0]?"text-white":"text-[#0d0c22]")))&&l(C,"class",H),(!U||F&1&&N!==(N=(P[0]?"bg-primaryDark text-white":"bg-primary text-[#0d0c22]")+" lg:hidden w-full flex items-center justify-between p-4 shadow"))&&l(z,"class",N),P[1]?B?(B.p(P,F),F&2&&Q(B,1)):(B=ke(P),B.c(),Q(B,1),B.m(X.parentNode,X)):B&&(Le(),$(B,1,1,()=>{B=null}),De())},i(P){U||(Q(f.$$.fragment,P),Q(B),U=!0)},o(P){$(f.$$.fragment,P),$(B),U=!1},d(P){P&&O(t),ae(f),P&&O(R),P&&O(z),P&&O(J),B&&B.d(P),P&&O(X),ue=!1,ee(oe)}}}function Ue(s,t,e){let{onToggleExportPopup:r}=t,{onToggleImportPopup:i}=t,{darkMode:a=!1}=t,d=!1;const f=()=>{e(0,a=!a),document.documentElement.classList.toggle("dark",a),e(1,d=!1)};function g(){i&&i(),e(1,d=!1)}function n(){r&&r(),e(1,d=!1)}const p=()=>{e(1,d=!d)};return s.$$set=c=>{"onToggleExportPopup"in c&&e(6,r=c.onToggleExportPopup),"onToggleImportPopup"in c&&e(7,i=c.onToggleImportPopup),"darkMode"in c&&e(0,a=c.darkMode)},[a,d,f,g,n,p,r,i]}class Ge extends ie{constructor(t){super(),ce(this,t,Ue,Fe,de,{onToggleExportPopup:6,onToggleImportPopup:7,darkMode:0})}}function xe(s,t,e){const r=s.slice();return r[19]=t[e],r[21]=e,r}function _e(s){let t,e,r,i,a,d,f;return{c(){t=u("div"),e=u("input"),i=b(),a=u("label"),a.textContent="Select All",l(e,"type","checkbox"),e.checked=r=s[4].size===s[0].length,l(e,"class","mr-2"),l(a,"for","select-all"),l(t,"class","flex items-center mb-4")},m(g,n){D(g,t,n),o(t,e),o(t,i),o(t,a),d||(f=T(e,"change",s[6]),d=!0)},p(g,n){n&1&&r!==(r=g[4].size===g[0].length)&&(e.checked=r)},d(g){g&&O(t),d=!1,f()}}}function Ve(s){let t,e,r;return{c(){t=te("svg"),e=te("path"),r=te("path"),l(e,"fill-rule","evenodd"),l(e,"d","M11.986 3H12a2 2 0 0 1 2 2v6a2 2 0 0 1-1.5 1.937V7A2.5 2.5 0 0 0 10 4.5H4.063A2 2 0 0 1 6 3h.014A2.25 2.25 0 0 1 8.25 1h1.5a2.25 2.25 0 0 1 2.236 2ZM10.5 4v-.75a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75V4h3Z"),l(e,"clip-rule","evenodd"),l(r,"fill-rule","evenodd"),l(r,"d","M3 6a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H3Zm1.75 2.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5ZM4 11.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Z"),l(r,"clip-rule","evenodd"),l(t,"xmlns","http://www.w3.org/2000/svg"),l(t,"viewBox","0 0 16 16"),l(t,"fill","currentColor"),l(t,"class","size-4")},m(i,a){D(i,t,a),o(t,e),o(t,r)},d(i){i&&O(t)}}}function qe(s){let t;return{c(){t=u("span"),t.textContent="Copied!",l(t,"class","text-xs text-gray-500")},m(e,r){D(e,t,r)},d(e){e&&O(t)}}}function Ce(s,t){let e,r,i=t[19].remainingTime+"",a,d,f,g,n,p,c,h,y,m=t[19].issuer+"",k,_,w,x,M=t[19].code+"",I,E,v,S,L,j,G;function Y(){return t[12](t[19])}function V(A,H){return A[1]===A[19].id?qe:Ve}let R=V(t),z=R(t);function K(){return t[13](t[19])}function Z(){return t[14](t[19])}function C(){return t[15](t[19])}return{key:s,first:null,c(){e=u("div"),r=u("div"),a=le(i),d=le("s"),f=b(),g=u("div"),n=u("div"),p=u("input"),h=b(),y=u("p"),k=le(m),_=b(),w=u("div"),x=u("p"),I=le(M),E=b(),v=u("button"),z.c(),S=b(),l(r,"class","absolute top-2 right-2 text-sm text-gray-500 font-medium"),l(p,"type","checkbox"),p.checked=c=t[4].has(t[19].id),l(p,"class","h-3 w-3 rounded-full border-2 border-tertiary checked:bg-tertiary checked:border-tertiary mr-2"),l(y,"class","font-semibold text-xl truncate dark:text-primary"),l(n,"class","flex items-center"),l(x,"class","text-tertiary text-2xl pl-5 font-bold"),l(v,"class","ml-2"),l(w,"class","flex items-center justify-between"),l(g,"class","flex flex-col space-y-1"),l(e,"class",L=`relative p-4 rounded-xl  flex flex-col justify-between space-y-2
                    ${t[4].has(t[19].id)?"bg-blue-100 dark:bg-gray-800":"bg-gray-100 dark:bg-[#2A3B47]  dark:shadow-md dark:text-primary"}`),this.first=e},m(A,H){D(A,e,H),o(e,r),o(r,a),o(r,d),o(e,f),o(e,g),o(g,n),o(n,p),o(n,h),o(n,y),o(y,k),o(g,_),o(g,w),o(w,x),o(x,I),o(w,E),o(w,v),z.m(v,null),o(e,S),j||(G=[T(p,"change",Y),T(v,"click",K),T(e,"mousedown",Z),T(e,"mouseup",t[8]),T(e,"touchstart",C,{passive:!0}),T(e,"touchend",t[8],{passive:!0})],j=!0)},p(A,H){t=A,H&8&&i!==(i=t[19].remainingTime+"")&&se(a,i),H&8&&c!==(c=t[4].has(t[19].id))&&(p.checked=c),H&8&&m!==(m=t[19].issuer+"")&&se(k,m),H&8&&M!==(M=t[19].code+"")&&se(I,M),R!==(R=V(t))&&(z.d(1),z=R(t),z&&(z.c(),z.m(v,null))),H&8&&L!==(L=`relative p-4 rounded-xl  flex flex-col justify-between space-y-2
                    ${t[4].has(t[19].id)?"bg-blue-100 dark:bg-gray-800":"bg-gray-100 dark:bg-[#2A3B47]  dark:shadow-md dark:text-primary"}`)&&l(e,"class",L)},d(A){A&&O(e),z.d(),j=!1,ee(G)}}}function Je(s){let t,e,r,i=[],a=new Map,d=s[2]&&_e(s),f=s[3];const g=n=>n[19].id||`code-${n[21]}`;for(let n=0;n<f.length;n+=1){let p=xe(s,f,n),c=g(p);a.set(c,i[n]=Ce(c,p))}return{c(){t=u("div"),d&&d.c(),e=b(),r=u("div");for(let n=0;n<i.length;n+=1)i[n].c();l(r,"class","md:container grid grid-cols-1 md:grid-cols-3 gap-8"),l(t,"class","md:p-4")},m(n,p){D(n,t,p),d&&d.m(t,null),o(t,e),o(t,r);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(r,null)},p(n,[p]){n[2]?d?d.p(n,p):(d=_e(n),d.c(),d.m(t,e)):d&&(d.d(1),d=null),p&954&&(f=n[3],i=He(i,p,g,1,n,f,a,r,ze,Ce,null,xe))},i:W,o:W,d(n){n&&O(t),d&&d.d();for(let p=0;p<i.length;p+=1)i[p].d()}}}function Qe(s,t,e){let r;const i=je();let{codes:a=[]}=t,{onToggleSelection:d}=t,{onCopy:f}=t,g=null,n=null,p,c=!1,h=new Set;const y=v=>{h.has(v)?h.delete(v):h.add(v),e(2,c=h.size>0),d(v),i("selectionChanged",{selectedCodes:Array.from(h)})},m=()=>{h.size===a.length?h.clear():a.forEach(v=>h.add(v.id)),e(2,c=h.size>0),i("selectionChanged",{selectedCodes:Array.from(h)})},k=v=>{g=setTimeout(()=>{h.add(v),e(2,c=!0)},800)},_=()=>{clearTimeout(g)},w=(v,S)=>{e(1,n=v),f(S),setTimeout(()=>e(1,n=null),1500)};me(()=>{p=setInterval(()=>{e(0,a=a.map(v=>({...v,remainingTime:Math.max(v.remainingTime-1,0)})))},1e3)}),we(()=>{clearInterval(p)});const x=v=>y(v.id),M=v=>w(v.id,v.code),I=v=>k(v.id),E=v=>k(v.id);return s.$$set=v=>{"codes"in v&&e(0,a=v.codes),"onToggleSelection"in v&&e(10,d=v.onToggleSelection),"onCopy"in v&&e(11,f=v.onCopy)},s.$$.update=()=>{s.$$.dirty&1&&e(3,r=[...a].sort((v,S)=>v.issuer.localeCompare(S.issuer))),s.$$.dirty&1&&e(2,c=h.size>0&&h.size<a.length)},i("selectionChanged",{selectedCodes:Array.from(h)}),[a,n,c,r,h,y,m,k,_,w,d,f,x,M,I,E]}class Ye extends ie{constructor(t){super(),ce(this,t,Qe,Je,de,{codes:0,onToggleSelection:10,onCopy:11})}}const Ke=s=>s.toString(16),be=s=>parseInt(s,16),Xe="ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",We=s=>s.split("").map(e=>{let r=Xe.indexOf(e.toUpperCase());if(r<0)throw new Error("Illegal Base32 character: "+e);return r}).map(e=>e.toString(2).padStart(5,"0")).join("").match(/.{4}/g).map(e=>parseInt(e,2).toString(16)).join("");function ge(s,t){this.secretBase32=s,this.stepSeconds=Number.isInteger(Number(t))&&Number(t)>0?Number(t):30,this.tokenLength=6,this.getToken=()=>{if(s.length<16)throw new Error("Secret minimum length is 16, but was only"+s.length);let e=We(this.secretBase32);e.length%2!==0&&(e+="0");let r=Math.floor(Date.now()/1e3/this.stepSeconds),i=Ke(r),a=new Be("SHA-1","HEX",{hmacKey:{value:e,format:"HEX"}});a.update(i.padStart(16,"0"));let d=a.getHMAC("HEX"),f=be(d.slice(-1));return String(be(d.substr(f*2,8))&be("7fffffff")).slice(-this.tokenLength)},this.getRemainingSeconds=()=>this.stepSeconds-Date.now()/1e3%this.stepSeconds,this.getStepSeconds=()=>this.stepSeconds}function Se(s){let t,e,r,i,a,d,f,g,n,p,c,h,y,m,k,_,w,x,M,I,E,v,S;return{c(){t=u("div"),e=u("div"),r=u("button"),r.textContent="\xD7",i=b(),a=u("h2"),a.textContent="Add New Code",d=b(),f=u("p"),f.textContent="Enter the issuer and secret to create a new OTP code.",g=b(),n=u("input"),p=b(),c=u("input"),h=b(),y=u("p"),y.textContent="or Scan QR Code",m=b(),k=u("div"),_=b(),w=u("button"),w.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" class="w-6 h-6"><path fill-rule="evenodd" d="M3 4.875C3 3.839 3.84 3 4.875 3h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 0 1 3 9.375v-4.5ZM4.875 4.5a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375h-4.5Zm7.875.375c0-1.036.84-1.875 1.875-1.875h4.5C20.16 3 21 3.84 21 4.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5a1.875 1.875 0 0 1-1.875-1.875v-4.5Zm1.875-.375a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375h-4.5ZM3 14.625c0-1.036.84-1.875 1.875-1.875h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5C3.84 21 3 20.16 3 19.125v-4.5Zm1.875-.375a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375h-4.5ZM18.75 15.375c0-1.036.84-1.875 1.875-1.875h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5a1.875 1.875 0 0 1-1.875-1.875v-4.5Zm1.875-.375a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375h-4.5Z"></path></svg>
                Scan QR Code`,x=b(),M=u("button"),M.textContent="View Once",I=b(),E=u("button"),E.textContent="Save",l(r,"class","absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-transform transform hover:scale-110"),l(a,"class","text-xl font-semibold mb-3 text-gray-800 dark:text-primary text-center"),l(f,"class","text-gray-600 dark:text-primary text-sm text-center mb-6"),l(n,"type","text"),l(n,"placeholder","Issuer"),n.required=!0,l(n,"class","w-full p-3 bg-gray-100 dark:bg-[#2A3B47] border text-gray-800 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-200 transition dark:border-[#121212] dark:text-primary"),l(c,"type","text"),l(c,"placeholder","Secret"),c.required=!0,l(c,"class","w-full p-3 bg-gray-100 dark:bg-[#2A3B47] text-gray-800 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-200 transition dark:border-[#121212]"),l(y,"class","text-gray-600 text-sm text-center mb-6"),l(k,"id","reader"),l(w,"class","mt-4 text-white px-4 py-2"),l(M,"class","bg-primary text-gary-800 font-medium py-3 px-6 rounded-lg transition-transform transform hover:bg-secondary"),l(E,"class","mt-4 text-white bg-green-500 px-4 py-2 rounded-lg"),l(e,"class","bg-white dark:bg-[#15202b] text-gray-800 w-80 p-6 rounded-lg shadow-2xl relative"),l(t,"class","fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50")},m(L,j){D(L,t,j),o(t,e),o(e,r),o(e,i),o(e,a),o(e,d),o(e,f),o(e,g),o(e,n),q(n,s[1]),o(e,p),o(e,c),q(c,s[2]),o(e,h),o(e,y),o(e,m),o(e,k),o(e,_),o(e,w),o(e,x),o(e,M),o(e,I),o(e,E),v||(S=[T(r,"click",s[7]),T(n,"input",s[12]),T(c,"input",s[13]),T(w,"click",s[10]),T(M,"click",s[8]),T(E,"click",s[6])],v=!0)},p(L,j){j&2&&n.value!==L[1]&&q(n,L[1]),j&4&&c.value!==L[2]&&q(c,L[2])},d(L){L&&O(t),v=!1,ee(S)}}}function Te(s){let t,e,r,i,a,d,f,g,n,p,c,h;return{c(){t=u("div"),e=u("div"),r=u("button"),r.textContent="x",i=b(),a=u("h3"),a.textContent="One-Time OTP Code",d=b(),f=u("div"),g=le(s[4]),n=b(),p=u("button"),p.textContent="\xD7",l(r,"class","absolute text-white px-4 py-2 rounded-lg transition"),l(a,"class","text-xl font-semibold mb-3 text-center"),l(f,"class","text-center text-lg"),l(p,"class","absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-transform transform hover:scale-110"),l(e,"class","bg-white dark:bg-[#15202b] text-gray-800 w-80 p-6 rounded-lg shadow-2xl"),l(t,"class","fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50")},m(y,m){D(y,t,m),o(t,e),o(e,r),o(e,i),o(e,a),o(e,d),o(e,f),o(f,g),o(e,n),o(e,p),c||(h=[T(r,"click",s[9]),T(p,"click",s[9])],c=!0)},p(y,m){m&16&&se(g,y[4])},d(y){y&&O(t),c=!1,ee(h)}}}function $e(s){let t,e,r,i,a,d,f=s[3]&&Se(s),g=s[5]&&Te(s);return{c(){t=u("button"),t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" class="w-16 h-16"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd"></path></svg>',e=b(),f&&f.c(),r=b(),g&&g.c(),i=ye(),l(t,"class","fixed right-6 rounded-full text-white p-2 z-[50]"),l(t,"aria-label","Toggle Button"),pe(t,"bottom-6",!s[0]),pe(t,"bottom-20",s[0])},m(n,p){D(n,t,p),D(n,e,p),f&&f.m(n,p),D(n,r,p),g&&g.m(n,p),D(n,i,p),a||(d=T(t,"click",s[7]),a=!0)},p(n,[p]){p&1&&pe(t,"bottom-6",!n[0]),p&1&&pe(t,"bottom-20",n[0]),n[3]?f?f.p(n,p):(f=Se(n),f.c(),f.m(r.parentNode,r)):f&&(f.d(1),f=null),n[5]?g?g.p(n,p):(g=Te(n),g.c(),g.m(i.parentNode,i)):g&&(g.d(1),g=null)},i:W,o:W,d(n){n&&O(t),n&&O(e),f&&f.d(n),n&&O(r),g&&g.d(n),n&&O(i),a=!1,d()}}}function et(s,t,e){let{showFooter:r=!1}=t,{onGenerate:i}=t,a="",d="",f=!1,g=[],n,p=null,c=!1;me(()=>{h(),M()}),we(()=>{n==null||n.clear()});const h=()=>{const S=JSON.parse(localStorage.getItem("codes"));S&&(g=S)},y=S=>{localStorage.setItem("codes",JSON.stringify(S))};function m(){try{const L=new ge(d,30).getToken(),j={issuer:a,secret:d,otp:L,viewed:!1,id:g.length+1};g=[...g,j],y(g),i(j),k()}catch(S){alert("Error generating OTP: "+S.message)}}const k=()=>{e(1,a=""),e(2,d=""),e(3,f=!1)},_=()=>{e(3,f=!f)};function w(){try{const L=new ge(d,30).getToken();e(4,p=L),e(5,c=!0),k()}catch(S){alert("Error generating OTP: "+S.message)}}function x(){e(5,c=!1),e(4,p=null)}function M(){console.log("Initializing QR code scanner..."),n=new Ne("reader",{fps:10,qrbox:{width:250,height:250}},!1)}function I(){n||M(),console.log("Starting QR code scanner..."),n.render(S=>{console.log("Scanned text:",S);const L=new URLSearchParams(S.split("?")[1]);L.get("issuer"),L.get("secret"),n.clear()},S=>{console.error("Scan error:",S),alert("Failed to scan QR code. Please try again.")})}function E(){a=this.value,e(1,a)}function v(){d=this.value,e(2,d)}return s.$$set=S=>{"showFooter"in S&&e(0,r=S.showFooter),"onGenerate"in S&&e(11,i=S.onGenerate)},[r,a,d,f,p,c,m,_,w,x,I,i,E,v]}class tt extends ie{constructor(t){super(),ce(this,t,et,$e,de,{showFooter:0,onGenerate:11})}}function Me(s){let t,e,r,i,a,d,f,g,n,p,c,h,y,m,k,_;return{c(){t=u("div"),e=u("div"),r=u("button"),r.textContent="\xD7",i=b(),a=u("h2"),a.textContent="Enter Password to Export",d=b(),f=u("p"),f.textContent="Please enter the password for encryption.",g=b(),n=u("input"),p=b(),c=u("input"),h=b(),y=u("div"),m=u("button"),m.textContent="Export",l(r,"class","absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-transform transform hover:scale-110"),l(a,"class","text-xl font-semibold mb-3 text-gray-800 text-center"),l(f,"class","text-gray-600 text-sm text-center mb-6"),l(n,"type","name"),l(n,"placeholder","File Name"),l(n,"class","w-full p-3 bg-gray-100 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-green-200 transition"),n.required=!0,l(c,"type","password"),l(c,"placeholder","Password"),l(c,"class","w-full p-3 bg-gray-100 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-green-200 transition"),c.required=!0,l(m,"class","bg-tertiary text-white font-medium py-2 rounded-lg w-full hover:bg-gradient-to-l transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-200"),l(y,"class","flex justify-between"),l(e,"class","bg-white w-80 p-6 rounded-lg shadow-2xl relative"),l(t,"class","fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50")},m(w,x){D(w,t,x),o(t,e),o(e,r),o(e,i),o(e,a),o(e,d),o(e,f),o(e,g),o(e,n),q(n,s[3]),o(e,p),o(e,c),q(c,s[4]),o(e,h),o(e,y),o(y,m),k||(_=[T(r,"click",s[7]),T(n,"input",s[9]),T(c,"input",s[10]),T(m,"click",s[6])],k=!0)},p(w,x){x&8&&q(n,w[3]),x&16&&c.value!==w[4]&&q(c,w[4])},d(w){w&&O(t),k=!1,ee(_)}}}function lt(s){let t,e,r,i,a,d,f,g,n,p,c=s[2]&&Me(s);return{c(){t=u("div"),e=u("button"),e.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path d="M7.25 10.25a.75.75 0 0 0 1.5 0V4.56l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06l2.22-2.22v5.69Z"></path><path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z"></path></svg> 

        <span>Export</span>`,r=b(),i=u("button"),i.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z" clip-rule="evenodd"></path></svg> 

        <span>Delete</span>`,a=b(),d=u("button"),d.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 0L8 9.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd"></path></svg> 

        <span>Cancel</span>`,f=b(),c&&c.c(),g=ye(),l(e,"class","flex flex-col items-center"),l(i,"class","flex flex-col items-center text-red-600"),l(d,"class","flex flex-col items-center text-fade dark:text-primary"),l(t,"class","dark:bg-[#263240] dark:text-primary fixed bottom-0 left-0 right-0 bg-white shadow-md py-4 flex justify-around items-center rounded")},m(h,y){D(h,t,y),o(t,e),o(t,r),o(t,i),o(t,a),o(t,d),D(h,f,y),c&&c.m(h,y),D(h,g,y),n||(p=[T(e,"click",s[5]),T(i,"click",function(){ve(s[0])&&s[0].apply(this,arguments)}),T(d,"click",function(){ve(s[1])&&s[1].apply(this,arguments)})],n=!0)},p(h,[y]){s=h,s[2]?c?c.p(s,y):(c=Me(s),c.c(),c.m(g.parentNode,g)):c&&(c.d(1),c=null)},i:W,o:W,d(h){h&&O(t),h&&O(f),c&&c.d(h),h&&O(g),n=!1,ee(p)}}}function ot(s,t,e){let{onExport:r}=t,{onDelete:i}=t,{onCancel:a}=t,d=!1,f="",g="";function n(){e(2,d=!0)}function p(){r(g),e(2,d=!1),e(4,g="")}function c(){e(2,d=!1),e(4,g="")}function h(){f=this.value,e(3,f)}function y(){g=this.value,e(4,g)}return s.$$set=m=>{"onExport"in m&&e(8,r=m.onExport),"onDelete"in m&&e(0,i=m.onDelete),"onCancel"in m&&e(1,a=m.onCancel)},[i,a,d,f,g,n,p,c,r,h,y]}class nt extends ie{constructor(t){super(),ce(this,t,ot,lt,de,{onExport:8,onDelete:0,onCancel:1})}}function Ae(s){let t,e;return t=new nt({props:{onDelete:s[14],onCancel:s[18],onExport:s[11]}}),{c(){ne(t.$$.fragment)},m(r,i){re(t,r,i),e=!0},p:W,i(r){e||(Q(t.$$.fragment,r),e=!0)},o(r){$(t.$$.fragment,r),e=!1},d(r){ae(t,r)}}}function Ie(s){let t,e,r,i,a,d,f,g,n,p,c,h,y,m,k;return{c(){t=u("div"),e=u("div"),r=u("button"),r.textContent="\xD7",i=b(),a=u("h2"),a.textContent="Export Your Codes",d=b(),f=u("p"),f.textContent="Secure your codes before exporting by adding a password.",g=b(),n=u("input"),p=b(),c=u("input"),h=b(),y=u("button"),y.textContent="Export Selected",l(r,"class","absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-transform transform hover:scale-110"),l(r,"aria-label","Close Export Popup"),l(a,"class","text-xl font-semibold mb-3 text-gray-800 dark:text-primary text-center"),l(f,"class","text-gray-600 text-sm text-center mb-6"),l(n,"type","text"),l(n,"placeholder","Name your file"),l(n,"autocomplete","off"),l(n,"class","w-full p-3 bg-gray-100 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-green-200 transition dark:bg-[#2A3B47]"),n.required=!0,l(c,"type","password"),l(c,"placeholder","Password"),l(c,"autocomplete","off"),l(c,"class","w-full p-3 bg-gray-100 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-green-200 transition dark:bg-[#2A3B47]"),c.required=!0,l(y,"class","bg-tertiary text-white font-medium py-2 rounded-lg w-full hover:bg-gradient-to-l transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-200"),l(e,"class","bg-white w-80 p-6 rounded-lg shadow-2xl relative transition-transform transform hover:scale-105 dark:bg-[#2A3B47] "),l(t,"class","fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50")},m(_,w){D(_,t,w),o(t,e),o(e,r),o(e,i),o(e,a),o(e,d),o(e,f),o(e,g),o(e,n),q(n,s[6]),o(e,p),o(e,c),q(c,s[4]),o(e,h),o(e,y),m||(k=[T(r,"click",s[16]),T(n,"input",s[20]),T(c,"input",s[21]),T(y,"click",s[22])],m=!0)},p(_,w){w[0]&64&&n.value!==_[6]&&q(n,_[6]),w[0]&16&&c.value!==_[4]&&q(c,_[4])},d(_){_&&O(t),m=!1,ee(k)}}}function Ee(s){let t,e,r,i,a,d,f,g,n,p,c,h,y;return{c(){t=u("div"),e=u("div"),r=u("button"),r.textContent="\xD7",i=b(),a=u("h2"),a.textContent="Import Your File",d=b(),f=u("p"),f.textContent="Enter the password you set during export to access the file.",g=b(),n=u("input"),p=b(),c=u("input"),l(r,"class","absolute top-3 right-3 text-gray-500 dark:text-primary hover:text-gray-700 transition-transform transform hover:scale-110"),l(r,"aria-label","Close Import Popup"),l(a,"class","text-xl font-semibold mb-3 text-gray-800 dark:text-primary text-center"),l(f,"class","text-gray-600 text-sm text-center mb-6"),l(n,"type","password"),l(n,"placeholder","Password"),l(n,"autocomplete","off"),l(n,"class","w-full p-3 bg-gray-100 dark:bg-[#2A3B47] dark:text-primary rounded-lg border mb-4 focus:outline-none focus:ring-2 focus:ring-green-200 transition"),l(c,"type","file"),l(c,"class","bg-tertiary text-white font-medium py-2 rounded-lg w-full bg-gray-100 dark:bg-[#2A3B47] transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-200"),l(e,"class","bg-white w-80 p-6 rounded-lg shadow-2xl relative transition-transform transform hover:scale-105 dark:bg-[#2A3B47] "),l(t,"class","fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50")},m(m,k){D(m,t,k),o(t,e),o(e,r),o(e,i),o(e,a),o(e,d),o(e,f),o(e,g),o(e,n),q(n,s[5]),o(e,p),o(e,c),h||(y=[T(r,"click",s[17]),T(n,"input",s[23]),T(c,"change",s[24])],h=!0)},p(m,k){k[0]&32&&n.value!==m[5]&&q(n,m[5])},d(m){m&&O(t),h=!1,ee(y)}}}function Pe(s){let t,e,r,i,a,d,f,g,n,p,c,h,y,m;return{c(){t=u("div"),e=u("div"),r=u("button"),r.textContent="\xD7",i=b(),a=u("h2"),a.textContent="Confirm Deletion",d=b(),f=u("p"),f.textContent="Are you sure you want to delete this code? This action cannot be undone.",g=b(),n=u("div"),p=u("button"),p.textContent="Yes, Delete",c=b(),h=u("button"),h.textContent="Cancel",l(r,"class","absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-transform transform hover:scale-110"),l(r,"aria-label","Close Delete Popup"),l(a,"class","text-xl font-semibold mb-3 text-gray-800 text-center"),l(f,"class","text-gray-600 text-sm text-center mb-6"),l(p,"class","bg-red-600 text-white font-medium py-2 rounded-lg w-full mr-2 hover:bg-red-500 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-200"),l(h,"class","bg-gray-300 text-gray-800 font-medium py-2 rounded-lg w-full hover:bg-gray-200 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-200"),l(n,"class","flex justify-between"),l(e,"class","bg-white w-80 p-6 rounded-lg shadow-2xl relative transition-transform transform hover:scale-105"),l(t,"class","dark:bg-[#2A3B47] fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50")},m(k,_){D(k,t,_),o(t,e),o(e,r),o(e,i),o(e,a),o(e,d),o(e,f),o(e,g),o(e,n),o(n,p),o(n,c),o(n,h),y||(m=[T(r,"click",s[25]),T(p,"click",s[15]),T(h,"click",s[26])],y=!0)},p:W,d(k){k&&O(t),y=!1,ee(m)}}}function rt(s){let t,e,r,i,a,d,f,g,n,p,c,h,y;r=new Ge({props:{codes:s[0],onExport:s[11],onGoogleSync:s[12],onImport:s[13],onToggleExportPopup:s[16],onToggleImportPopup:s[17]}}),d=new tt({props:{onGenerate:s[9],showFooter:s[1]}}),g=new Ye({props:{codes:s[0],onToggleSelection:s[10],onCopy:s[8]}}),g.$on("selectionChanged",s[19]);let m=s[1]&&Ae(s),k=s[2]&&Ie(s),_=s[3]&&Ee(s),w=s[7]&&Pe(s);return{c(){t=u("main"),e=u("div"),ne(r.$$.fragment),i=b(),a=u("div"),ne(d.$$.fragment),f=b(),ne(g.$$.fragment),n=b(),m&&m.c(),p=b(),k&&k.c(),c=b(),_&&_.c(),h=b(),w&&w.c(),l(a,"class","flex-1 p-4 order-1 md:order-none"),l(e,"class","flex flex-col md:flex-row"),l(t,"class","min-h-screen dark:bg-[#192734] bg-[#f5f8fa]")},m(x,M){D(x,t,M),o(t,e),re(r,e,null),o(e,i),o(e,a),re(d,a,null),o(a,f),re(g,a,null),o(a,n),m&&m.m(a,null),o(t,p),k&&k.m(t,null),o(t,c),_&&_.m(t,null),o(t,h),w&&w.m(t,null),y=!0},p(x,M){const I={};M[0]&1&&(I.codes=x[0]),r.$set(I);const E={};M[0]&2&&(E.showFooter=x[1]),d.$set(E);const v={};M[0]&1&&(v.codes=x[0]),g.$set(v),x[1]?m?(m.p(x,M),M[0]&2&&Q(m,1)):(m=Ae(x),m.c(),Q(m,1),m.m(a,null)):m&&(Le(),$(m,1,1,()=>{m=null}),De()),x[2]?k?k.p(x,M):(k=Ie(x),k.c(),k.m(t,c)):k&&(k.d(1),k=null),x[3]?_?_.p(x,M):(_=Ee(x),_.c(),_.m(t,h)):_&&(_.d(1),_=null),x[7]?w?w.p(x,M):(w=Pe(x),w.c(),w.m(t,null)):w&&(w.d(1),w=null)},i(x){y||(Q(r.$$.fragment,x),Q(d.$$.fragment,x),Q(g.$$.fragment,x),Q(m),y=!0)},o(x){$(r.$$.fragment,x),$(d.$$.fragment,x),$(g.$$.fragment,x),$(m),y=!1},d(x){x&&O(t),ae(r),ae(d),ae(g),m&&m.d(),k&&k.d(),_&&_.d(),w&&w.d()}}}function st(s,t,e){let r=JSON.parse(localStorage.getItem("codes"))||[],i=!1,a=!1,d=!1,f="",g="",n="",p=!1,c=null,h=[];const y=async C=>{try{await navigator.clipboard.writeText(C),alert("OTP copied to clipboard")}catch(A){alert("Failed to copy OTP: "+A.message)}},m=C=>{const A=new ge(C.secret);e(0,r=[...r,{id:Date.now(),...C,selected:!1,code:A.getToken(),remainingTime:Math.floor(A.getRemainingSeconds())}]),k(r.length-1)},k=C=>{const A=setInterval(()=>{e(0,r=r.map((H,N)=>{if(N===C){const J=new ge(H.secret);return{...H,code:J.getToken(),remainingTime:Math.floor(J.getRemainingSeconds())}}return H}))},1e3);h.push(A)},_=C=>{e(0,r=r.map(A=>A.id===C?{...A,selected:!A.selected}:A))},w=C=>{const A=r.filter(N=>N.selected);if(A.length===0){alert("No codes selected for backup!");return}const H=A.map(N=>`otpauth://totp/${encodeURIComponent(N.issuer)}?secret=${encodeURIComponent(N.secret)}&issuer=${encodeURIComponent(N.issuer)}`).join(`
`);try{const N=he.AES.encrypt(H,C).toString(),J=new Blob([N],{type:"text/plain"}),X=URL.createObjectURL(J),U=document.createElement("a");U.href=X,U.download=`${n||"backup"}.txt`,document.body.appendChild(U),U.click(),URL.revokeObjectURL(X),document.body.removeChild(U),alert("Backup successful!")}catch(N){console.error("Backup error:",N),alert("An error occurred during the backup process.")}},x=()=>{const C=r.filter(A=>A.selected);C.length?(console.log("Syncing with Google:",C),alert("Google Sync initiated for selected codes.")):alert("No codes selected for syncing.")},M=C=>{const A=document.createElement("input");A.type="file",A.accept="text/plain",A.onchange=()=>{const H=A.files[0],N=new FileReader;N.onload=()=>{try{const J=N.result,X=he.AES.decrypt(J,C).toString(he.enc.Utf8);if(!X)throw new Error("Decryption failed. Check your password or file.");const ue=X.split(`
`).map(oe=>{const B=new URL(oe),P=B.searchParams.get("issuer"),F=B.searchParams.get("secret");return P&&F?{issuer:P,secret:F}:null}).filter(oe=>oe!==null);e(0,r=[...r,...ue]),localStorage.setItem("codes",JSON.stringify(r)),alert("Restore successful!")}catch(J){console.error("Restore error:",J),alert("Invalid password or corrupted file!")}},N.readAsText(H)},A.click()},I=()=>{confirm("Are you sure you want to delete all selected codes?")&&(e(0,r=r.filter(C=>!C.selected)),alert("Selected codes deleted"))},E=()=>{c&&(e(0,r=r.filter(C=>C.id!==c)),alert("Code deleted")),e(7,p=!1),c=null},v=()=>{e(2,a=!a)},S=()=>{e(3,d=!d)},L=()=>{e(0,r=r.map(C=>({...C,selected:!1})))};me(()=>{const C=JSON.parse(localStorage.getItem("codes"));C&&e(0,r=C.map(A=>{const H=new ge(A.secret);return{...A,selected:!1,code:H.getToken(),remainingTime:Math.floor(H.getRemainingSeconds())}}))}),we(()=>{h.forEach(clearInterval)});const j=C=>{e(1,i=C.detail.selectedCodes.length>0)};function G(){n=this.value,e(6,n)}function Y(){f=this.value,e(4,f)}const V=()=>w(f);function R(){g=this.value,e(5,g)}const z=()=>M(g),K=()=>e(7,p=!1),Z=()=>e(7,p=!1);return s.$$.update=()=>{s.$$.dirty[0]&1&&(localStorage.setItem("codes",JSON.stringify(r)),e(1,i=r.some(C=>C.selected)))},[r,i,a,d,f,g,n,p,y,m,_,w,x,M,I,E,v,S,L,j,G,Y,V,R,z,K,Z]}class at extends ie{constructor(t){super(),ce(this,t,st,rt,de,{},null,[-1,-1])}}new at({target:document.getElementById("app")});
