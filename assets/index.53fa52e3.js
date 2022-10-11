(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function g(){}function H(e){return e()}function z(){return Object.create(null)}function A(e){e.forEach(H)}function I(e){return typeof e=="function"}function K(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let k;function X(e,t){return k||(k=document.createElement("a")),k.href=t,e===k.href}function Y(e){return Object.keys(e).length===0}function c(e,t){e.appendChild(t)}function F(e,t,n){e.insertBefore(t,n||null)}function T(e){e.parentNode.removeChild(e)}function f(e){return document.createElement(e)}function j(e){return document.createTextNode(e)}function v(){return j(" ")}function Z(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function d(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ee(e){return Array.from(e.childNodes)}function te(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let V;function b(e){V=e}const x=[],P=[],S=[],B=[],ne=Promise.resolve();let N=!1;function re(){N||(N=!0,ne.then(D))}function M(e){S.push(e)}const O=new Set;let E=0;function D(){const e=V;do{for(;E<x.length;){const t=x[E];E++,b(t),oe(t.$$)}for(b(null),x.length=0,E=0;P.length;)P.pop()();for(let t=0;t<S.length;t+=1){const n=S[t];O.has(n)||(O.add(n),n())}S.length=0}while(x.length);for(;B.length;)B.pop()();N=!1,O.clear(),b(e)}function oe(e){if(e.fragment!==null){e.update(),A(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(M)}}const C=new Set;let ie;function G(e,t){e&&e.i&&(C.delete(e),e.i(t))}function se(e,t,n,r){if(e&&e.o){if(C.has(e))return;C.add(e),ie.c.push(()=>{C.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function le(e){e&&e.c()}function J(e,t,n,r){const{fragment:o,after_update:i}=e.$$;o&&o.m(t,n),r||M(()=>{const s=e.$$.on_mount.map(H).filter(I);e.$$.on_destroy?e.$$.on_destroy.push(...s):A(s),e.$$.on_mount=[]}),i.forEach(M)}function Q(e,t){const n=e.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ce(e,t){e.$$.dirty[0]===-1&&(x.push(e),re(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function R(e,t,n,r,o,i,s,h=[-1]){const m=V;b(e);const l=e.$$={fragment:null,ctx:[],props:i,update:g,not_equal:o,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(m?m.$$.context:[])),callbacks:z(),dirty:h,skip_bound:!1,root:t.target||m.$$.root};s&&s(l.root);let $=!1;if(l.ctx=n?n(e,t.props||{},(u,a,...y)=>{const _=y.length?y[0]:a;return l.ctx&&o(l.ctx[u],l.ctx[u]=_)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](_),$&&ce(e,u)),a}):[],l.update(),$=!0,A(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const u=ee(t.target);l.fragment&&l.fragment.l(u),u.forEach(T)}else l.fragment&&l.fragment.c();t.intro&&G(e.$$.fragment),J(e,t.target,t.anchor,t.customElement),D()}b(m)}class U{$destroy(){Q(this,1),this.$destroy=g}$on(t,n){if(!I(n))return g;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!Y(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ue="/ine-fitm-kmutnb-ac-th/assets/svelte.a39f39b7.svg";function fe(e){let t,n,r,o,i;return{c(){t=f("button"),n=j("count is "),r=j(e[0])},m(s,h){F(s,t,h),c(t,n),c(t,r),o||(i=Z(t,"click",e[1]),o=!0)},p(s,[h]){h&1&&te(r,s[0])},i:g,o:g,d(s){s&&T(t),o=!1,i()}}}function ae(e,t,n){let r=0;return[r,()=>{n(0,r+=1)}]}class de extends U{constructor(t){super(),R(this,t,ae,fe,K,{})}}function he(e){let t,n,r,o,i,s,h,m,l,$,u,a,y,_,q,w,L;return a=new de({}),{c(){t=f("main"),n=f("div"),r=f("a"),r.innerHTML='<img src="/vite.svg" class="logo svelte-xyl2iz" alt="Vite Logo"/>',o=v(),i=f("a"),s=f("img"),m=v(),l=f("h1"),l.textContent="Vite + Svelte",$=v(),u=f("div"),le(a.$$.fragment),y=v(),_=f("p"),_.innerHTML='Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank">SvelteKit</a>, the official Svelte app framework powered by Vite!',q=v(),w=f("p"),w.textContent="Click on the Vite and Svelte logos to learn more",d(r,"href","https://vitejs.dev"),d(r,"target","_blank"),X(s.src,h=ue)||d(s,"src",h),d(s,"class","logo svelte svelte-xyl2iz"),d(s,"alt","Svelte Logo"),d(i,"href","https://svelte.dev"),d(i,"target","_blank"),d(u,"class","card"),d(w,"class","read-the-docs svelte-xyl2iz")},m(p,W){F(p,t,W),c(t,n),c(n,r),c(n,o),c(n,i),c(i,s),c(t,m),c(t,l),c(t,$),c(t,u),J(a,u,null),c(t,y),c(t,_),c(t,q),c(t,w),L=!0},p:g,i(p){L||(G(a.$$.fragment,p),L=!0)},o(p){se(a.$$.fragment,p),L=!1},d(p){p&&T(t),Q(a)}}}class me extends U{constructor(t){super(),R(this,t,null,he,K,{})}}new me({target:document.getElementById("app")});
