import{k as i,j as c,X as _,Y as m,m as p}from"./D5VLPvEz.js";function u(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function k(e){c===null&&u(),m&&c.l!==null?d(c).m.push(e):i(()=>{const t=p(e);if(typeof t=="function")return t})}function v(e,t,{bubbles:o=!1,cancelable:s=!1}={}){return new CustomEvent(e,{detail:t,bubbles:o,cancelable:s})}function x(){const e=c;return e===null&&u(),(t,o,s)=>{var r;const n=(r=e.s.$$events)==null?void 0:r[t];if(n){const l=_(n)?n.slice():[n],a=v(t,o,s);for(const f of l)f.call(e.x,a);return!a.defaultPrevented}return!0}}function d(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}export{x as c,k as o};
