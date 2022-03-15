var N=Object.defineProperty;var w=(n,e,t)=>e in n?N(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var p=(n,e,t)=>(w(n,typeof e!="symbol"?e+"":e,t),t),g=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)};var c=(n,e,t)=>(g(n,e,"read from private field"),t?t.call(n):e.get(n)),v=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)},k=(n,e,t,i)=>(g(n,e,"write to private field"),i?i.call(n,t):e.set(n,t),t);import{j as _,r as $,u as j,a as u,R as E,b as y,c as R,B as S}from"./vendor-57a1685c.js";const q=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}};q();const C="_container_1pkqy_1",D="_title_1pkqy_10",L="_button_1pkqy_16";const s=_.exports.jsx,d=_.exports.jsxs,O=_.exports.Fragment;function P(){return d("div",{className:C,children:[s("h1",{className:D,children:"Black Jack"}),s("button",{className:L,type:"button",children:"New Game"})]})}const V="_container_1mh0a_1";var B={container:V};function x({id:n}){return s("div",{className:B.container,children:n||"A default card"})}var b={suits:[{id:"s",name:"spades"},{id:"d",name:"diamonds"},{id:"c",name:"clubs"},{id:"h",name:"hearts"}],values:[{id:"a",name:"ace",value:11,secondaryValue:1},{id:"2",name:"2",value:2},{id:"3",name:"3",value:3},{id:"4",name:"4",value:4},{id:"5",name:"5",value:5},{id:"6",name:"6",value:6},{id:"7",name:"7",value:7},{id:"8",name:"8",value:8},{id:"9",name:"9",value:9},{id:"0",name:"10",value:10},{id:"j",name:"jack",value:10},{id:"q",name:"queen",value:10},{id:"k",name:"king",value:10}]},o,h;class M{constructor(e=1,t=void 0){v(this,o,[]);v(this,h,void 0);p(this,"draw",()=>c(this,o).shift());p(this,"shuffle",()=>{for(let e=c(this,o).length-1;e>0;e--){const t=c(this,h).int(0,e);[c(this,o)[e],c(this,o)[t]]=[c(this,o)[t],c(this,o)[e]]}});const i=b.suits.flatMap(r=>b.values.map(a=>({id:a.id+r.id,name:`${a.name}-${r.name}`,value:a.value,secondaryValue:a.secondaryValue})));for(let r=0;r<e;r++)c(this,o).push(...i);k(this,h,$.clone(void 0,t)),this.shuffle()}get size(){return c(this,o).length}get top(){return c(this,o)[0]}get cards(){return[...c(this,o)]}}o=new WeakMap,h=new WeakMap;function f(n){let e=n.reduce((t,i)=>t+i.value,0);return e>21&&n.filter(t=>t.secondaryValue!==void 0).forEach(t=>{e>21&&(e-=t.value-t.secondaryValue)}),e}const A="_dealer_18a8v_1";var F={dealer:A};function G({cards:n}){return d("div",{className:F.dealer,children:[d("h2",{children:["Dealer ",f(n)]}),n.map((e,t)=>s(x,{id:t===0?e.id:"**"}))]})}const z="_container_sbvkw_1";var I={container:z};function H({cards:n}){return d("div",{className:I.container,children:[d("h2",{children:["Player ",f(n)]}),n.map(e=>s(x,{id:e.id}))]})}const J="_title_1ek5k_1";var K={title:J};function Q(){const n=j(),e=u.exports.useRef(new M(6)),[t,i]=u.exports.useState([]),[r,a]=u.exports.useState([]);u.exports.useEffect(()=>{i(l=>[...l,e.current.draw()]),a(l=>[...l,e.current.draw()]),i(l=>[...l,e.current.draw()]),a(l=>[...l,e.current.draw()])},[]),u.exports.useEffect(()=>{(f(t)>=21||f(r)>=21)&&n("/end")},[n,t,r]);const m=()=>{a(l=>[...l,e.current.draw()]),f(t)<16&&i(l=>[...l,e.current.draw()])};return d(O,{children:[s("h1",{className:K.title,children:"Game"}),s("button",{onClick:m,type:"button",children:"Piocher"}),s(G,{cards:t}),s(H,{cards:r})]})}const T="_title_1ek5k_1";var U={title:T};function W(){return s("h1",{className:U.title,children:"End"})}function X(){return d(E,{children:[s(y,{path:"/",element:s(P,{})}),s(y,{path:"/game",element:s(Q,{})}),s(y,{path:"/end",element:s(W,{})})]})}R.render(s(u.exports.StrictMode,{children:s(S,{basename:"/",children:s(X,{})})}),document.getElementById("root"));