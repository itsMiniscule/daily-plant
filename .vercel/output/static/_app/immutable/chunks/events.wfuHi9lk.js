import{Q as s,R as f,S as y,O as g,T as L,V as O,W as T,X as W}from"./runtime.B2m3c4KW.js";function q(r){var a=y,i=g;s(null),f(null);try{return r()}finally{s(a),f(i)}}const M=new Set,N=new Set;function x(r,a,i,n){function e(t){if(n.capture||B.call(a,t),!t.cancelBubble)return q(()=>i.call(this,t))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?O(()=>{a.addEventListener(r,e,n)}):a.addEventListener(r,e,n),e}function P(r,a,i,n,e){var t={capture:n,passive:e},c=x(r,a,i,t);(a===document.body||a===window||a===document)&&L(()=>{a.removeEventListener(r,c,t)})}function B(r){var w;var a=this,i=a.ownerDocument,n=r.type,e=((w=r.composedPath)==null?void 0:w.call(r))||[],t=e[0]||r.target,c=0,p=r.__root;if(p){var _=e.indexOf(p);if(_!==-1&&(a===document||a===window)){r.__root=a;return}var v=e.indexOf(a);if(v===-1)return;_<=v&&(c=_)}if(t=e[c]||r.target,t!==a){T(r,"currentTarget",{configurable:!0,get(){return t||i}});var b=y,S=g;s(null),f(null);try{for(var u,d=[];t!==null;){var h=t.assignedSlot||t.parentNode||t.host||null;try{var o=t["__"+n];if(o!==void 0&&!t.disabled)if(W(o)){var[k,...E]=o;k.apply(t,[r,...E])}else o.call(t,r)}catch(l){u?d.push(l):u=l}if(r.cancelBubble||h===a||h===null)break;t=h}if(u){for(let l of d)queueMicrotask(()=>{throw l});throw u}}finally{r.__root=a,delete r.currentTarget,s(b),f(S)}}}export{M as a,P as e,B as h,N as r};
