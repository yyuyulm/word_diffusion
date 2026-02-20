var Gm=Object.defineProperty;var jm=(e,t,r)=>t in e?Gm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var qe=(e,t,r)=>jm(e,typeof t!="symbol"?t+"":t,r);import{f as zt,a as ut,c as Hm,t as Fm}from"../chunks/DrPLquxO.js";import{i as Km}from"../chunks/Cwh-X1sG.js";import{o as Zm}from"../chunks/CnMDFpVv.js";import{c as Sr,h as Ve,L as Nd,i as ii,a as Ym,b as Dd,y as we,ar as Xm,r as Qm,H as Jm,s as Xs,d as Ir,k as vr,X as Pd,ak as eg,a2 as Qs,e as Jt,j as Va,l as tg,ai as ln,aG as rg,S as Js,aC as it,aH as ig,aI as ag,aJ as ng,aK as It,f as Ud,p as qd,aL as qi,ae as Ga,ah as sg,g as og,aM as ug,W as lg,aN as dg,aO as pg,aP as cg,aQ as fg,aE as hg,t as mg,U as gg,aR as _g,D as yg,F as lr,G as bg,K as We,at as Ae,am as wg,I as Pe,J as Be,a3 as eo,aS as vg,C as Wi}from"../chunks/CJZDw758.js";import{e as $g,s as Lr}from"../chunks/CeoDvyhI.js";import{i as Vr}from"../chunks/_e8V-jp4.js";function xg(e,t){return t}function Tg(e,t,r){for(var a=[],n=t.length,i,o=t.length,u=0;u<n;u++){let h=t[u];qd(h,()=>{if(i){if(i.pending.delete(h),i.done.add(h),i.pending.size===0){var g=e.outrogroups;ja(ln(i.done)),g.delete(i),g.size===0&&(e.outrogroups=null)}}else o-=1},!1)}if(o===0){var p=a.length===0&&r!==null;if(p){var d=r,f=d.parentNode;sg(f),f.append(d),e.items.clear()}ja(t,!p)}else i={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(i)}function ja(e,t=!0){for(var r=0;r<e.length;r++)og(e[r],t)}var to;function Cg(e,t,r,a,n,i=null){var o=e,u=new Map;{var p=e;o=Ve?Sr(Nd(p)):p.appendChild(ii())}Ve&&Ym();var d=null,f=Xm(()=>{var x=r();return rg(x)?x:x==null?[]:ln(x)}),h,g=!0;function y(){w.fallback=d,kg(w,h,o,t,a),d!==null&&(h.length===0?d.f&It?(d.f^=It,$r(d,null,o)):Ud(d):qd(d,()=>{d=null}))}var _=Dd(()=>{h=we(f);var x=h.length;let $=!1;if(Ve){var v=Qm(o)===Jm;v!==(x===0)&&(o=Xs(),Sr(o),Ir(!1),$=!0)}for(var C=new Set,k=Jt,S=tg(),I=0;I<x;I+=1){Ve&&vr.nodeType===Pd&&vr.data===eg&&(o=vr,$=!0,Ir(!1));var E=h[I],A=a(E,I),R=g?null:u.get(A);R?(R.v&&Qs(R.v,E),R.i&&Qs(R.i,I),S&&k.skipped_effects.delete(R.e)):(R=Sg(u,g?o:to??(to=ii()),E,A,I,n,t,r),g||(R.e.f|=It),u.set(A,R)),C.add(A)}if(x===0&&i&&!d&&(g?d=Va(()=>i(o)):(d=Va(()=>i(to??(to=ii()))),d.f|=It)),Ve&&x>0&&Sr(Xs()),!g)if(S){for(const[W,F]of u)C.has(W)||k.skipped_effects.add(F.e);k.oncommit(y),k.ondiscard(()=>{})}else y();$&&Ir(!0),we(f)}),w={effect:_,items:u,outrogroups:null,fallback:d};g=!1,Ve&&(o=vr)}function kg(e,t,r,a,n){var A;var i=t.length,o=e.items,u=e.effect.first,p,d=null,f=[],h=[],g,y,_,w;for(w=0;w<i;w+=1){if(g=t[w],y=n(g,w),_=o.get(y).e,e.outrogroups!==null)for(const R of e.outrogroups)R.pending.delete(_),R.done.delete(_);if(_.f&It)if(_.f^=It,_===u)$r(_,null,r);else{var x=d?d.next:u;_===e.effect.last&&(e.effect.last=_.prev),_.prev&&(_.prev.next=_.next),_.next&&(_.next.prev=_.prev),Tt(e,d,_),Tt(e,_,x),$r(_,x,r),d=_,f=[],h=[],u=d.next;continue}if(_.f&qi&&Ud(_),_!==u){if(p!==void 0&&p.has(_)){if(f.length<h.length){var $=h[0],v;d=$.prev;var C=f[0],k=f[f.length-1];for(v=0;v<f.length;v+=1)$r(f[v],$,r);for(v=0;v<h.length;v+=1)p.delete(h[v]);Tt(e,C.prev,k.next),Tt(e,d,C),Tt(e,k,$),u=$,d=k,w-=1,f=[],h=[]}else p.delete(_),$r(_,u,r),Tt(e,_.prev,_.next),Tt(e,_,d===null?e.effect.first:d.next),Tt(e,d,_),d=_;continue}for(f=[],h=[];u!==null&&u!==_;)(p??(p=new Set)).add(u),h.push(u),u=u.next;if(u===null)continue}_.f&It||f.push(_),d=_,u=_.next}if(e.outrogroups!==null){for(const R of e.outrogroups)R.pending.size===0&&(ja(ln(R.done)),(A=e.outrogroups)==null||A.delete(R));e.outrogroups.size===0&&(e.outrogroups=null)}if(u!==null||p!==void 0){var S=[];if(p!==void 0)for(_ of p)_.f&qi||S.push(_);for(;u!==null;)!(u.f&qi)&&u!==e.fallback&&S.push(u),u=u.next;var I=S.length;if(I>0){var E=i===0?r:null;Tg(e,S,E)}}}function Sg(e,t,r,a,n,i,o,u){var p=o&ag?o&ng?Js(r):it(r,!1,!1):null,d=o&ig?Js(n):null;return{v:p,i:d,e:Va(()=>(i(t,p??r,d??n,u),()=>{e.delete(a)}))}}function $r(e,t,r){if(e.nodes)for(var a=e.nodes.start,n=e.nodes.end,i=t&&!(t.f&It)?t.nodes.start:r;a!==null;){var o=Ga(a);if(i.before(a),a===n)return;a=o}}function Tt(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function Ig(e,t){let r=null,a=Ve;var n;if(Ve){r=vr;for(var i=Nd(document.head);i!==null&&(i.nodeType!==Pd||i.data!==e);)i=Ga(i);if(i===null)Ir(!1);else{var o=Ga(i);i.remove(),Sr(o)}}Ve||(n=document.head.appendChild(ii()));try{Dd(()=>t(n),ug)}finally{a&&(Ir(!0),Sr(r))}}function Eg(e,t){return e==null?null:String(e)}function zg(e,t,r,a){var n=e.__style;if(Ve||n!==t){var i=Eg(t);(!Ve||i!==e.getAttribute("style"))&&(i==null?e.removeAttribute("style"):e.style.cssText=i),e.__style=t}return a}const Ag=Symbol("is custom element"),Og=Symbol("is html");function Li(e){if(Ve){var t=!1,r=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var a=e.value;ro(e,"value",null),e.value=a}if(e.hasAttribute("checked")){var n=e.checked;ro(e,"checked",null),e.checked=n}}};e.__on_r=r,lg(r),dg()}}function ro(e,t,r,a){var n=Rg(e);Ve&&(n[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||n[t]!==(n[t]=r)&&(t==="loading"&&(e[pg]=r),e.removeAttribute(t))}function Rg(e){return e.__attributes??(e.__attributes={[Ag]:e.nodeName.includes("-"),[Og]:e.namespaceURI===cg})}function Vi(e,t,r=t){var a=new WeakSet;fg(e,"input",async n=>{var i=n?e.defaultValue:e.value;if(i=Gi(e)?ji(i):i,r(i),Jt!==null&&a.add(Jt),await hg(),i!==(i=t())){var o=e.selectionStart,u=e.selectionEnd,p=e.value.length;if(e.value=i??"",u!==null){var d=e.value.length;o===u&&u===p&&d>p?(e.selectionStart=d,e.selectionEnd=d):(e.selectionStart=o,e.selectionEnd=Math.min(u,d))}}}),(Ve&&e.defaultValue!==e.value||mg(t)==null&&e.value)&&(r(Gi(e)?ji(e.value):e.value),Jt!==null&&a.add(Jt)),gg(()=>{var n=t();if(e===document.activeElement){var i=_g??Jt;if(a.has(i))return}Gi(e)&&n===ji(e.value)||e.type==="date"&&!n&&!e.value||n!==e.value&&(e.value=n??"")})}function Gi(e){var t=e.type;return t==="number"||t==="range"}function ji(e){return e===""?null:+e}const Bg=!0,yy=Object.freeze(Object.defineProperty({__proto__:null,prerender:Bg},Symbol.toStringTag,{value:"Module"}));/*!
 * ONNX Runtime Web v1.23.2
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var dn=Object.defineProperty,Mg=Object.getOwnPropertyDescriptor,Ng=Object.getOwnPropertyNames,Dg=Object.prototype.hasOwnProperty,Pg=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),L=(e,t)=>()=>(e&&(t=e(e=0)),t),ar=(e,t)=>{for(var r in t)dn(e,r,{get:t[r],enumerable:!0})},Ug=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Ng(t))!Dg.call(e,n)&&n!==r&&dn(e,n,{get:()=>t[n],enumerable:!(a=Mg(t,n))||a.enumerable});return e},zr=e=>Ug(dn({},"__esModule",{value:!0}),e),dr,Ct,er,io,Wd,Ld=L(()=>{dr=new Map,Ct=[],er=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let a=dr.get(e);if(a===void 0)dr.set(e,{backend:t,priority:r});else{if(a.priority>r)return;if(a.priority===r&&a.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let n=Ct.indexOf(e);n!==-1&&Ct.splice(n,1);for(let i=0;i<Ct.length;i++)if(dr.get(Ct[i]).priority<=r){Ct.splice(i,0,e);return}Ct.push(e)}return}throw new TypeError("not a valid backend")},io=async e=>{let t=dr.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(a){return r||(t.error=`${a}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Wd=async e=>{let t=e.executionProviders||[],r=t.map(p=>typeof p=="string"?p:p.name),a=r.length===0?Ct:r,n,i=[],o=new Set;for(let p of a){let d=await io(p);typeof d=="string"?i.push({name:p,err:d}):(n||(n=d),n===d&&o.add(p))}if(!n)throw new Error(`no available backend found. ERR: ${i.map(p=>`[${p.name}] ${p.err}`).join(", ")}`);for(let{name:p,err:d}of i)r.includes(p)&&console.warn(`removing requested execution provider "${p}" from session options because it is not available: ${d}`);let u=t.filter(p=>o.has(typeof p=="string"?p:p.name));return[n,new Proxy(e,{get:(p,d)=>d==="executionProviders"?u:Reflect.get(p,d)})]}}),qg=L(()=>{Ld()}),Vd,Wg=L(()=>{Vd="1.23.2"}),Hi,Oe,Gd=L(()=>{Wg(),Hi="warning",Oe={wasm:{},webgl:{},webgpu:{},versions:{common:Vd},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Hi=e}},get logLevel(){return Hi}},Object.defineProperty(Oe,"logLevel",{enumerable:!0})}),ve,Lg=L(()=>{Gd(),ve=Oe}),jd,Hd,Vg=L(()=>{jd=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let a=r.getContext("2d");if(a!=null){let n,i;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],i=e.dims[3]):(n=e.dims[3],i=e.dims[2]);let o=(t==null?void 0:t.format)!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,p,d;u===void 0||u.mean===void 0?p=[255,255,255,255]:typeof u.mean=="number"?p=[u.mean,u.mean,u.mean,u.mean]:(p=[u.mean[0],u.mean[1],u.mean[2],0],u.mean[3]!==void 0&&(p[3]=u.mean[3])),u===void 0||u.bias===void 0?d=[0,0,0,0]:typeof u.bias=="number"?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(d[3]=u.bias[3]));let f=i*n,h=0,g=f,y=f*2,_=-1;o==="RGBA"?(h=0,g=f,y=f*2,_=f*3):o==="RGB"?(h=0,g=f,y=f*2):o==="RBG"&&(h=0,y=f,g=f*2);for(let w=0;w<i;w++)for(let x=0;x<n;x++){let $=(e.data[h++]-d[0])*p[0],v=(e.data[g++]-d[1])*p[1],C=(e.data[y++]-d[2])*p[2],k=_===-1?255:(e.data[_++]-d[3])*p[3];a.fillStyle="rgba("+$+","+v+","+C+","+k+")",a.fillRect(x,w,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Hd=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),a;if(r!=null){let n,i,o;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],i=e.dims[1],o=e.dims[3]):(n=e.dims[3],i=e.dims[2],o=e.dims[1]);let u=t!==void 0&&t.format!==void 0?t.format:"RGB",p=t==null?void 0:t.norm,d,f;p===void 0||p.mean===void 0?d=[255,255,255,255]:typeof p.mean=="number"?d=[p.mean,p.mean,p.mean,p.mean]:(d=[p.mean[0],p.mean[1],p.mean[2],255],p.mean[3]!==void 0&&(d[3]=p.mean[3])),p===void 0||p.bias===void 0?f=[0,0,0,0]:typeof p.bias=="number"?f=[p.bias,p.bias,p.bias,p.bias]:(f=[p.bias[0],p.bias[1],p.bias[2],0],p.bias[3]!==void 0&&(f[3]=p.bias[3]));let h=i*n;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!=="RGBA"||o===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let g=4,y=0,_=1,w=2,x=3,$=0,v=h,C=h*2,k=-1;u==="RGBA"?($=0,v=h,C=h*2,k=h*3):u==="RGB"?($=0,v=h,C=h*2):u==="RBG"&&($=0,C=h,v=h*2),a=r.createImageData(n,i);for(let S=0;S<i*n;y+=g,_+=g,w+=g,x+=g,S++)a.data[y]=(e.data[$++]-f[0])*d[0],a.data[_]=(e.data[v++]-f[1])*d[1],a.data[w]=(e.data[C++]-f[2])*d[2],a.data[x]=k===-1?255:(e.data[k++]-f[3])*d[3]}else throw new Error("Can not access image data");return a}}),Gr,Fd,Kd,Zd,Yd,Xd,Gg=L(()=>{pn(),Gr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:a}=t,n=t.norm??{mean:255,bias:0},i,o;typeof n.mean=="number"?i=[n.mean,n.mean,n.mean,n.mean]:i=[n.mean[0],n.mean[1],n.mean[2],n.mean[3]??255],typeof n.bias=="number"?o=[n.bias,n.bias,n.bias,n.bias]:o=[n.bias[0],n.bias[1],n.bias[2],n.bias[3]??0];let u=t.format!==void 0?t.format:"RGBA",p=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*a,f=p==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),h=4,g=0,y=1,_=2,w=3,x=0,$=d,v=d*2,C=-1;u==="RGB"&&(h=3,g=0,y=1,_=2,w=-1),p==="RGBA"?C=d*3:p==="RBG"?(x=0,v=d,$=d*2):p==="BGR"&&(v=0,$=d,x=d*2);for(let k=0;k<d;k++,g+=h,_+=h,y+=h,w+=h)f[x++]=(e[g]+o[0])/i[0],f[$++]=(e[y]+o[1])/i[1],f[v++]=(e[_]+o[2])/i[2],C!==-1&&w!==-1&&(f[C++]=(e[w]+o[3])/i[3]);return p==="RGBA"?new Fe("float32",f,[1,4,r,a]):new Fe("float32",f,[1,3,r,a])},Fd=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,a=typeof ImageData<"u"&&e instanceof ImageData,n=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,i=typeof e=="string",o,u=t??{},p=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=f=>typeof HTMLCanvasElement<"u"&&f instanceof HTMLCanvasElement||f instanceof OffscreenCanvas?f.getContext("2d"):null;if(r){let f=p();f.width=e.width,f.height=e.height;let h=d(f);if(h!=null){let g=e.height,y=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(g=t.resizedHeight,y=t.resizedWidth),t!==void 0){if(u=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=g,u.width=y}else u.tensorFormat="RGBA",u.height=g,u.width=y;h.drawImage(e,0,0),o=h.getImageData(0,0,y,g).data}else throw new Error("Can not access image data")}else if(a){let f,h;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(f=t.resizedHeight,h=t.resizedWidth):(f=e.height,h=e.width),t!==void 0&&(u=t),u.format="RGBA",u.height=f,u.width=h,t!==void 0){let g=p();g.width=h,g.height=f;let y=d(g);if(y!=null)y.putImageData(e,0,0),o=y.getImageData(0,0,h,f).data;else throw new Error("Can not access image data")}else o=e.data}else if(n){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let f=p();f.width=e.width,f.height=e.height;let h=d(f);if(h!=null){let g=e.height,y=e.width;return h.drawImage(e,0,0,y,g),o=h.getImageData(0,0,y,g).data,u.height=g,u.width=y,Gr(o,u)}else throw new Error("Can not access image data")}else{if(i)return new Promise((f,h)=>{let g=p(),y=d(g);if(!e||!y)return h();let _=new Image;_.crossOrigin="Anonymous",_.src=e,_.onload=()=>{g.width=_.width,g.height=_.height,y.drawImage(_,0,0,g.width,g.height);let w=y.getImageData(0,0,g.width,g.height);u.height=g.height,u.width=g.width,f(Gr(w.data,u))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(o!==void 0)return Gr(o,u);throw new Error("Input data provided is not supported - aborted tensor creation")},Kd=(e,t)=>{let{width:r,height:a,download:n,dispose:i}=t,o=[1,a,r,4];return new Fe({location:"texture",type:"float32",texture:e,dims:o,download:n,dispose:i})},Zd=(e,t)=>{let{dataType:r,dims:a,download:n,dispose:i}=t;return new Fe({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:a,download:n,dispose:i})},Yd=(e,t)=>{let{dataType:r,dims:a,download:n,dispose:i}=t;return new Fe({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:a,download:n,dispose:i})},Xd=(e,t,r)=>new Fe({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Wt,xr,Fi,Qd,jg=L(()=>{Wt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),xr=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Fi=!1,Qd=()=>{if(!Fi){Fi=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,a=typeof r<"u"&&r.from;e&&(Wt.set("int64",BigInt64Array),xr.set(BigInt64Array,"int64")),t&&(Wt.set("uint64",BigUint64Array),xr.set(BigUint64Array,"uint64")),a?(Wt.set("float16",r),xr.set(r,"float16")):Wt.set("float16",Uint16Array)}}}),Jd,ep,Hg=L(()=>{pn(),Jd=e=>{let t=1;for(let r=0;r<e.length;r++){let a=e[r];if(typeof a!="number"||!Number.isSafeInteger(a))throw new TypeError(`dims[${r}] must be an integer, got: ${a}`);if(a<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${a}`);t*=a}return t},ep=(e,t)=>{switch(e.location){case"cpu":return new Fe(e.type,e.data,t);case"cpu-pinned":return new Fe({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Fe({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Fe({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Fe({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Fe,pn=L(()=>{Vg(),Gg(),jg(),Hg(),Fe=class{constructor(e,t,r){Qd();let a,n;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,a=e.type,n=e.dims,e.location){case"cpu-pinned":{let o=Wt.get(a);if(!o)throw new TypeError(`unsupported type "${a}" to create tensor from pinned buffer`);if(!(e.data instanceof o))throw new TypeError(`buffer should be of type ${o.name}`);this.cpuData=e.data;break}case"texture":{if(a!=="float32")throw new TypeError(`unsupported type "${a}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint64"&&a!=="int8"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let o,u;if(typeof e=="string")if(a=e,u=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");o=t}else{let p=Wt.get(e);if(p===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&p===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${p.name} as data.`);e==="uint64"||e==="int64"?o=p.from(t,BigInt):o=p.from(t)}else if(t instanceof p)o=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")o=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&p!==Uint16Array)o=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${a} tensor's data must be type of ${p}`)}else if(u=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let p=typeof e[0];if(p==="string")a="string",o=e;else if(p==="boolean")a="bool",o=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${p}.`)}else if(e instanceof Uint8ClampedArray)a="uint8",o=Uint8Array.from(e);else{let p=xr.get(e.constructor);if(p===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);a=p,o=e}if(u===void 0)u=[o.length];else if(!Array.isArray(u))throw new TypeError("A tensor's dims must be a number array");n=u,this.cpuData=o,this.dataLocation="cpu"}let i=Jd(n);if(this.cpuData&&i!==this.cpuData.length&&!((a==="uint4"||a==="int4")&&Math.ceil(i/2)===this.cpuData.length))throw new Error(`Tensor's size(${i}) does not match data length(${this.cpuData.length}).`);this.type=a,this.dims=n,this.size=i}static async fromImage(e,t){return Fd(e,t)}static fromTexture(e,t){return Kd(e,t)}static fromGpuBuffer(e,t){return Zd(e,t)}static fromMLTensor(e,t){return Yd(e,t)}static fromPinnedBuffer(e,t,r){return Xd(e,t,r)}toDataURL(e){return jd(this,e)}toImageData(e){return Hd(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return ep(this,e)}}}),Ke,tp=L(()=>{pn(),Ke=Fe}),si,Ki,dt,nt,Gt,jt,rp=L(()=>{Gd(),si=(e,t)=>{(typeof Oe.trace>"u"?!Oe.wasm.trace:!Oe.trace)||console.timeStamp(`${e}::ORT::${t}`)},Ki=(e,t)=>{var n;let r=((n=new Error().stack)==null?void 0:n.split(/\r\n|\r|\n/g))||[],a=!1;for(let i=0;i<r.length;i++){if(a&&!r[i].includes("TRACE_FUNC")){let o=`FUNC_${e}::${r[i].trim().split(" ")[1]}`;t&&(o+=`::${t}`),si("CPU",o);return}r[i].includes("TRACE_FUNC")&&(a=!0)}},dt=e=>{(typeof Oe.trace>"u"?!Oe.wasm.trace:!Oe.trace)||Ki("BEGIN",e)},nt=e=>{(typeof Oe.trace>"u"?!Oe.wasm.trace:!Oe.trace)||Ki("END",e)},Gt=e=>{(typeof Oe.trace>"u"?!Oe.wasm.trace:!Oe.trace)||console.time(`ORT::${e}`)},jt=e=>{(typeof Oe.trace>"u"?!Oe.wasm.trace:!Oe.trace)||console.timeEnd(`ORT::${e}`)}}),ip,Fg=L(()=>{Ld(),tp(),rp(),ip=class ap{constructor(t){this.handler=t}async run(t,r,a){dt(),Gt("InferenceSession.run");let n={},i={};if(typeof t!="object"||t===null||t instanceof Ke||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let o=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Ke)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");o=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);n[d]=null}if(typeof a=="object"&&a!==null)i=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,f=Object.getOwnPropertyNames(r);for(let h of this.outputNames)if(f.indexOf(h)!==-1){let g=r[h];(g===null||g instanceof Ke)&&(d=!0,o=!1,n[h]=g)}if(d){if(typeof a=="object"&&a!==null)i=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else i=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(o)for(let d of this.outputNames)n[d]=null;let u=await this.handler.run(t,n,i),p={};for(let d in u)if(Object.hasOwnProperty.call(u,d)){let f=u[d];f instanceof Ke?p[d]=f:p[d]=new Ke(f.type,f.data,f.dims)}return jt("InferenceSession.run"),nt(),p}async release(){return this.handler.dispose()}static async create(t,r,a,n){dt(),Gt("InferenceSession.create");let i,o={};if(typeof t=="string"){if(i=t,typeof r=="object"&&r!==null)o=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(i=t,typeof r=="object"&&r!==null)o=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let f=t,h=0,g=t.byteLength;if(typeof r=="object"&&r!==null)o=r;else if(typeof r=="number"){if(h=r,!Number.isSafeInteger(h))throw new RangeError("'byteOffset' must be an integer.");if(h<0||h>=f.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${f.byteLength}).`);if(g=t.byteLength-h,typeof a=="number"){if(g=a,!Number.isSafeInteger(g))throw new RangeError("'byteLength' must be an integer.");if(g<=0||h+g>f.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${f.byteLength-h}].`);if(typeof n=="object"&&n!==null)o=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(typeof a<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");i=new Uint8Array(f,h,g)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[u,p]=await Wd(o),d=await u.createInferenceSessionHandler(i,p);return jt("InferenceSession.create"),nt(),new ap(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),cn,Kg=L(()=>{Fg(),cn=ip}),Zg=L(()=>{}),Yg=L(()=>{}),Xg=L(()=>{}),Qg=L(()=>{}),Jg={};ar(Jg,{InferenceSession:()=>cn,TRACE:()=>si,TRACE_EVENT_BEGIN:()=>Gt,TRACE_EVENT_END:()=>jt,TRACE_FUNC_BEGIN:()=>dt,TRACE_FUNC_END:()=>nt,Tensor:()=>Ke,env:()=>ve,registerBackend:()=>er});var Xe=L(()=>{qg(),Lg(),Kg(),tp(),Zg(),Yg(),rp(),Xg(),Qg()}),fn=L(()=>{}),np={};ar(np,{default:()=>sp});var Zi,Yi,sp,e_=L(()=>{var e;ch(),Zt(),hn(),Zi="ort-wasm-proxy-worker",Yi=((e=globalThis.self)==null?void 0:e.name)===Zi,Yi&&(self.onmessage=t=>{let{type:r,in:a}=t.data;try{switch(r){case"init-wasm":mn(a.wasm).then(()=>{On(a).then(()=>{postMessage({type:r})},n=>{postMessage({type:r,err:n})})},n=>{postMessage({type:r,err:n})});break;case"init-ep":{let{epName:n,env:i}=a;Rn(i,n).then(()=>{postMessage({type:r})},o=>{postMessage({type:r,err:o})});break}case"copy-from":{let{buffer:n}=a,i=fi(n);postMessage({type:r,out:i});break}case"create":{let{model:n,options:i}=a;Bn(n,i).then(o=>{postMessage({type:r,out:o})},o=>{postMessage({type:r,err:o})});break}case"release":Mn(a),postMessage({type:r});break;case"run":{let{sessionId:n,inputIndices:i,inputs:o,outputIndices:u,options:p}=a;Nn(n,i,o,u,new Array(u.length).fill(null),p).then(d=>{d.some(f=>f[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:d},Pn([...o,...d]))},d=>{postMessage({type:r,err:d})});break}case"end-profiling":Dn(a),postMessage({type:r});break;default:}}catch(n){postMessage({type:r,err:n})}}),sp=Yi?null:t=>new Worker(t??He,{type:"module",name:Zi})}),op={};ar(op,{default:()=>up});var Xi,up,ao,t_=L(()=>{var e,t;Xi=async function(r={}){var Ys;var a,n,i=r,o=new Promise((s,l)=>{a=s,n=l}),u=typeof window=="object",p=typeof WorkerGlobalScope<"u",d=p&&((Ys=self.name)==null?void 0:Ys.startsWith("em-pthread"));i.mountExternalData=(s,l)=>{s.startsWith("./")&&(s=s.substring(2)),(i.Fb||(i.Fb=new Map)).set(s,l)},i.unmountExternalData=()=>{delete i.Fb};var f=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,qc:!0}).buffer.constructor;let h=s=>async(...l)=>{var c;try{if(i.Gb)throw Error("Session already started");let m=i.Gb={ec:l[0],errors:[]},b=await s(...l);if(i.Gb!==m)throw Error("Session mismatch");(c=i.Kb)==null||c.flush();let T=m.errors;if(0<T.length){let z=await Promise.all(T);if(z=z.filter(B=>B),0<z.length)throw Error(z.join(`
`))}return b}finally{i.Gb=null}};i.jsepInit=(s,l)=>{if(s==="webgpu"){[i.Kb,i.Vb,i.Zb,i.Lb,i.Yb,i.Ab,i.$b,i.bc,i.Wb,i.Xb,i.ac]=l;let c=i.Kb;i.jsepRegisterBuffer=(m,b,T,z)=>c.registerBuffer(m,b,T,z),i.jsepGetBuffer=m=>c.getBuffer(m),i.jsepCreateDownloader=(m,b,T)=>c.createDownloader(m,b,T),i.jsepOnCreateSession=m=>{c.onCreateSession(m)},i.jsepOnReleaseSession=m=>{c.onReleaseSession(m)},i.jsepOnRunStart=m=>c.onRunStart(m),i.cc=(m,b)=>{c.upload(m,b)}}else if(s==="webnn"){let c=l[0];[i.oc,i.Ob,i.webnnEnsureTensor,i.Pb,i.webnnDownloadTensor,i.nc,i.webnnEnableTraceEvent]=l.slice(1),i.webnnReleaseTensorId=i.Ob,i.webnnUploadTensor=i.Pb,i.webnnRegisterMLContext=i.nc,i.webnnOnRunStart=m=>c.onRunStart(m),i.webnnOnRunEnd=c.onRunEnd.bind(c),i.webnnOnReleaseSession=m=>{c.onReleaseSession(m)},i.webnnCreateMLTensorDownloader=(m,b)=>c.createMLTensorDownloader(m,b),i.webnnRegisterMLTensor=(m,b,T,z)=>c.registerMLTensor(m,b,T,z),i.webnnCreateMLContext=m=>c.createMLContext(m),i.webnnRegisterMLConstant=(m,b,T,z,B,U)=>c.registerMLConstant(m,b,T,z,B,i.Fb,U),i.webnnRegisterGraphInput=c.registerGraphInput.bind(c),i.webnnIsGraphInput=c.isGraphInput.bind(c),i.webnnRegisterGraphOutput=c.registerGraphOutput.bind(c),i.webnnIsGraphOutput=c.isGraphOutput.bind(c),i.webnnCreateTemporaryTensor=c.createTemporaryTensor.bind(c),i.webnnIsGraphInputOutputTypeSupported=c.isGraphInputOutputTypeSupported.bind(c)}};let g=()=>{let s=(l,c,m)=>(...b)=>{let T=ot,z=c==null?void 0:c();b=l(...b);let B=c==null?void 0:c();return z!==B&&(l=B,m(z),c=m=null),ot!=T?new Promise((U,V)=>{Ei={resolve:U,reject:V}}):b};(()=>{for(let l of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])i[l]=s(i[l],()=>i[l],c=>i[l]=c)})(),h!==void 0&&(i._OrtRun=h(i._OrtRun),i._OrtRunWithBinding=h(i._OrtRunWithBinding)),g=void 0};i.asyncInit=()=>{g==null||g()};var y,_,w=(s,l)=>{throw l},x=import.meta.url,$="";if(u||p){try{$=new URL(".",x).href}catch{}p&&(_=s=>{var l=new XMLHttpRequest;return l.open("GET",s,!1),l.responseType="arraybuffer",l.send(null),new Uint8Array(l.response)}),y=async s=>{if(q(s))return new Promise((c,m)=>{var b=new XMLHttpRequest;b.open("GET",s,!0),b.responseType="arraybuffer",b.onload=()=>{b.status==200||b.status==0&&b.response?c(b.response):m(b.status)},b.onerror=m,b.send(null)});var l=await fetch(s,{credentials:"same-origin"});if(l.ok)return l.arrayBuffer();throw Error(l.status+" : "+l.url)}}var v,C,k,S,I,E,A,R,W,F,H,G,ue,ae,K,ne=console.log.bind(console),Z=console.error.bind(console),te=ne,me=Z,O=!1,q=s=>s.startsWith("file://");function j(){return C.buffer!=I.buffer&&ge(),I}function Q(){return C.buffer!=I.buffer&&ge(),E}function ye(){return C.buffer!=I.buffer&&ge(),A}function ke(){return C.buffer!=I.buffer&&ge(),R}function P(){return C.buffer!=I.buffer&&ge(),W}function de(){return C.buffer!=I.buffer&&ge(),F}function Ee(){return C.buffer!=I.buffer&&ge(),H}function Ne(){return C.buffer!=I.buffer&&ge(),ae}if(d){let s=function(l){try{var c=l.data,m=c.Db;if(m==="load"){let b=[];self.onmessage=T=>b.push(T),self.startWorker=()=>{postMessage({Db:"loaded"});for(let T of b)s(T);self.onmessage=s};for(let T of c.Sb)i[T]&&!i[T].proxy||(i[T]=(...z)=>{postMessage({Db:"callHandler",Rb:T,args:z})},T=="print"&&(te=i[T]),T=="printErr"&&(me=i[T]));C=c.kc,ge(),K(c.lc)}else if(m==="run"){Th(c.Bb),Mi(c.Bb,0,0,1,0,0),Hn(),Si(c.Bb),pt||(Ps(),pt=!0);try{Ch(c.hc,c.Jb)}catch(b){if(b!="unwind")throw b}}else c.target!=="setimmediate"&&(m==="checkMailbox"?pt&&Or():m&&(me(`worker: received unknown command ${m}`),me(c)))}catch(b){throw Us(),b}};var pt=!1;self.onunhandledrejection=l=>{throw l.reason||l},self.onmessage=s}function ge(){var s=C.buffer;i.HEAP8=I=new Int8Array(s),A=new Int16Array(s),i.HEAPU8=E=new Uint8Array(s),R=new Uint16Array(s),i.HEAP32=W=new Int32Array(s),i.HEAPU32=F=new Uint32Array(s),H=new Float32Array(s),ae=new Float64Array(s),G=new BigInt64Array(s),ue=new BigUint64Array(s)}function xe(){d?startWorker(i):N.Da()}var Ge,Ot=0,Rt=null;function Un(){if(--Ot==0&&Rt){var s=Rt;Rt=null,s()}}function bt(s){throw me(s="Aborted("+s+")"),O=!0,s=new WebAssembly.RuntimeError(s+". Build with -sASSERTIONS for more info."),n(s),s}function qn(){return{a:{L:Lm,Aa:Wm,b:Sh,$:Yn,A:Jn,pa:es,X:ts,Z:rs,qa:is,na:as,ga:ns,ma:ss,J:os,Y:us,V:ls,oa:ds,W:ps,va:Ih,E:Eh,Q:zh,O:Oh,D:Bh,v:Mh,s:Nh,P:Dh,z:Gh,R:jh,ja:Hh,T:Fh,aa:Kh,M:Zh,F:Yh,ia:Si,sa:Xh,r:Qh,Ca:Jh,w:rm,o:im,m:nm,c:xi,Ba:sm,n:om,j:dm,u:pm,p:cm,f:fm,t:hm,l:mm,e:gm,k:_m,h:ym,g:bm,d:wm,da:vm,ea:$m,fa:xm,ba:Ts,ca:Cs,N:ks,xa:Cm,ua:Sm,i:Im,C:Em,G:zm,ta:km,x:Am,ra:Om,U:Rm,q:Tm,y:Bm,K:Mm,S:Nm,za:Dm,ya:Pm,ka:zs,la:As,_:bi,B:Os,I:Rs,ha:Bs,H:Ms,a:C,wa:yi}}}class gi{constructor(l){qe(this,"name","ExitStatus");this.message=`Program terminated with exit(${l})`,this.status=l}}var Wn=s=>{s.terminate(),s.onmessage=()=>{}},_i=[],Ln=s=>{vt.length==0&&(Kn(),Fn(vt[0]));var l=vt.pop();if(!l)return 6;nr.push(l),Bt[s.Bb]=l,l.Bb=s.Bb;var c={Db:"run",hc:s.fc,Jb:s.Jb,Bb:s.Bb};return l.postMessage(c,s.Nb),0},wt=0,$e=(s,l,...c)=>{for(var m=2*c.length,b=Pi(),T=Di(8*m),z=T>>>3,B=0;B<c.length;B++){var U=c[B];typeof U=="bigint"?(G[z+2*B]=1n,G[z+2*B+1]=U):(G[z+2*B]=0n,Ne()[z+2*B+1>>>0]=U)}return s=qs(s,0,m,T,l),Wr(b),s};function yi(s){if(d)return $e(0,1,s);if(S=s,!(0<wt)){for(var l of nr)Wn(l);for(l of vt)Wn(l);vt=[],nr=[],Bt={},O=!0}w(0,new gi(s))}function Vn(s){if(d)return $e(1,0,s);bi(s)}var bi=s=>{if(S=s,d)throw Vn(s),"unwind";yi(s)},vt=[],nr=[],Gn=[],Bt={},jn=s=>{var l=s.Bb;delete Bt[l],vt.push(s),nr.splice(nr.indexOf(s),1),s.Bb=0,Ws(l)};function Hn(){Gn.forEach(s=>s())}var Fn=s=>new Promise(l=>{s.onmessage=b=>{var T=(b=b.data).Db;if(b.Hb&&b.Hb!=Bi()){var z=Bt[b.Hb];z?z.postMessage(b,b.Nb):me(`Internal error! Worker sent a message "${T}" to target pthread ${b.Hb}, but that thread no longer exists!`)}else T==="checkMailbox"?Or():T==="spawnThread"?Ln(b):T==="cleanupThread"?jn(Bt[b.ic]):T==="loaded"?(s.loaded=!0,l(s)):b.target==="setimmediate"?s.postMessage(b):T==="callHandler"?i[b.Rb](...b.args):T&&me(`worker sent an unknown command ${T}`)},s.onerror=b=>{throw me(`worker sent an error! ${b.filename}:${b.lineno}: ${b.message}`),b};var c,m=[];for(c of[])i.propertyIsEnumerable(c)&&m.push(c);s.postMessage({Db:"load",Sb:m,kc:C,lc:k})});function Kn(){var s=new Worker((()=>{let l=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new l("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});vt.push(s)}var Th=s=>{ge();var l=de()[s+52>>>2>>>0];s=de()[s+56>>>2>>>0],Gs(l,l-s),Wr(l)},Ch=(s,l)=>{wt=0,s=js(s,l),0<wt?S=s:Ni(s)};class kh{constructor(l){this.Ib=l-24}}function Sh(s,l,c){var m=new kh(s>>>=0);throw l>>>=0,c>>>=0,de()[m.Ib+16>>>2>>>0]=0,de()[m.Ib+4>>>2>>>0]=l,de()[m.Ib+8>>>2>>>0]=c,s}function Zn(s,l,c,m){return d?$e(2,1,s,l,c,m):Yn(s,l,c,m)}function Yn(s,l,c,m){if(s>>>=0,c>>>=0,m>>>=0,f===void 0)return 6;var b=[];return d&&b.length===0?Zn(s,l>>>=0,c,m):(s={fc:c,Bb:s,Jb:m,Nb:b},d?(s.Db="spawnThread",postMessage(s,b),0):Ln(s))}var Xn=typeof TextDecoder<"u"?new TextDecoder:void 0,Qn=(s,l=0,c=NaN)=>{var m=(l>>>=0)+c;for(c=l;s[c]&&!(c>=m);)++c;if(16<c-l&&s.buffer&&Xn)return Xn.decode(s.buffer instanceof ArrayBuffer?s.subarray(l,c):s.slice(l,c));for(m="";l<c;){var b=s[l++];if(128&b){var T=63&s[l++];if((224&b)==192)m+=String.fromCharCode((31&b)<<6|T);else{var z=63&s[l++];65536>(b=(240&b)==224?(15&b)<<12|T<<6|z:(7&b)<<18|T<<12|z<<6|63&s[l++])?m+=String.fromCharCode(b):(b-=65536,m+=String.fromCharCode(55296|b>>10,56320|1023&b))}}else m+=String.fromCharCode(b)}return m},Se=(s,l)=>(s>>>=0)?Qn(Q(),s,l):"";function Jn(s,l,c){return d?$e(3,1,s,l,c):0}function es(s,l){if(d)return $e(4,1,s,l)}function ts(s,l){if(d)return $e(5,1,s,l)}function rs(s,l,c){if(d)return $e(6,1,s,l,c)}function is(s,l,c){return d?$e(7,1,s,l,c):0}function as(s,l){if(d)return $e(8,1,s,l)}function ns(s,l,c){if(d)return $e(9,1,s,l,c)}function ss(s,l,c,m){if(d)return $e(10,1,s,l,c,m)}function os(s,l,c,m){if(d)return $e(11,1,s,l,c,m)}function us(s,l,c,m){if(d)return $e(12,1,s,l,c,m)}function ls(s){if(d)return $e(13,1,s)}function ds(s,l){if(d)return $e(14,1,s,l)}function ps(s,l,c){if(d)return $e(15,1,s,l,c)}var cs,Ih=()=>bt(""),st=s=>{for(var l="";Q()[s>>>0];)l+=cs[Q()[s++>>>0]];return l},wi={},vi={},Xt=i.BindingError=class extends Error{constructor(s){super(s),this.name="BindingError"}};function ct(s,l,c={}){return function(m,b,T={}){var z=b.name;if(!m)throw new Xt(`type "${z}" must have a positive integer typeid pointer`);if(vi.hasOwnProperty(m)){if(T.Tb)return;throw new Xt(`Cannot register type '${z}' twice`)}vi[m]=b,wi.hasOwnProperty(m)&&(b=wi[m],delete wi[m],b.forEach(B=>B()))}(s,l,c)}var fs=(s,l,c)=>{switch(l){case 1:return c?m=>j()[m>>>0]:m=>Q()[m>>>0];case 2:return c?m=>ye()[m>>>1>>>0]:m=>ke()[m>>>1>>>0];case 4:return c?m=>P()[m>>>2>>>0]:m=>de()[m>>>2>>>0];case 8:return c?m=>G[m>>>3]:m=>ue[m>>>3];default:throw new TypeError(`invalid integer width (${l}): ${s}`)}};function Eh(s,l,c){c>>>=0,ct(s>>>=0,{name:l=st(l>>>0),fromWireType:m=>m,toWireType:function(m,b){if(typeof b!="bigint"&&typeof b!="number")throw b=b===null?"null":(m=typeof b)=="object"||m==="array"||m==="function"?b.toString():""+b,new TypeError(`Cannot convert "${b}" to ${this.name}`);return typeof b=="number"&&(b=BigInt(b)),b},Cb:$t,readValueFromPointer:fs(l,c,l.indexOf("u")==-1),Eb:null})}var $t=8;function zh(s,l,c,m){ct(s>>>=0,{name:l=st(l>>>0),fromWireType:function(b){return!!b},toWireType:function(b,T){return T?c:m},Cb:$t,readValueFromPointer:function(b){return this.fromWireType(Q()[b>>>0])},Eb:null})}var $i=[],ft=[];function xi(s){9<(s>>>=0)&&--ft[s+1]==0&&(ft[s]=void 0,$i.push(s))}var De=s=>{if(!s)throw new Xt(`Cannot use deleted val. handle = ${s}`);return ft[s]},Ye=s=>{switch(s){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let l=$i.pop()||ft.length;return ft[l]=s,ft[l+1]=1,l}};function Ti(s){return this.fromWireType(de()[s>>>2>>>0])}var Ah={name:"emscripten::val",fromWireType:s=>{var l=De(s);return xi(s),l},toWireType:(s,l)=>Ye(l),Cb:$t,readValueFromPointer:Ti,Eb:null};function Oh(s){return ct(s>>>0,Ah)}var Rh=(s,l)=>{switch(l){case 4:return function(c){return this.fromWireType(Ee()[c>>>2>>>0])};case 8:return function(c){return this.fromWireType(Ne()[c>>>3>>>0])};default:throw new TypeError(`invalid float width (${l}): ${s}`)}};function Bh(s,l,c){c>>>=0,ct(s>>>=0,{name:l=st(l>>>0),fromWireType:m=>m,toWireType:(m,b)=>b,Cb:$t,readValueFromPointer:Rh(l,c),Eb:null})}function Mh(s,l,c,m,b){if(s>>>=0,c>>>=0,l=st(l>>>0),b===-1&&(b=4294967295),b=B=>B,m===0){var T=32-8*c;b=B=>B<<T>>>T}var z=l.includes("unsigned")?function(B,U){return U>>>0}:function(B,U){return U};ct(s,{name:l,fromWireType:b,toWireType:z,Cb:$t,readValueFromPointer:fs(l,c,m!==0),Eb:null})}function Nh(s,l,c){function m(T){var z=de()[T>>>2>>>0];return T=de()[T+4>>>2>>>0],new b(j().buffer,T,z)}var b=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][l];ct(s>>>=0,{name:c=st(c>>>0),fromWireType:m,Cb:$t,readValueFromPointer:m},{Tb:!0})}var Mt=(s,l,c)=>{var m=Q();if(l>>>=0,0<c){var b=l;c=l+c-1;for(var T=0;T<s.length;++T){var z=s.charCodeAt(T);if(55296<=z&&57343>=z&&(z=65536+((1023&z)<<10)|1023&s.charCodeAt(++T)),127>=z){if(l>=c)break;m[l++>>>0]=z}else{if(2047>=z){if(l+1>=c)break;m[l++>>>0]=192|z>>6}else{if(65535>=z){if(l+2>=c)break;m[l++>>>0]=224|z>>12}else{if(l+3>=c)break;m[l++>>>0]=240|z>>18,m[l++>>>0]=128|z>>12&63}m[l++>>>0]=128|z>>6&63}m[l++>>>0]=128|63&z}}m[l>>>0]=0,s=l-b}else s=0;return s},Ci=s=>{for(var l=0,c=0;c<s.length;++c){var m=s.charCodeAt(c);127>=m?l++:2047>=m?l+=2:55296<=m&&57343>=m?(l+=4,++c):l+=3}return l};function Dh(s,l){ct(s>>>=0,{name:l=st(l>>>0),fromWireType:function(c){for(var m,b=de()[c>>>2>>>0],T=c+4,z=T,B=0;B<=b;++B){var U=T+B;B!=b&&Q()[U>>>0]!=0||(z=Se(z,U-z),m===void 0?m=z:(m+="\0",m+=z),z=U+1)}return ht(c),m},toWireType:function(c,m){m instanceof ArrayBuffer&&(m=new Uint8Array(m));var b=typeof m=="string";if(!(b||ArrayBuffer.isView(m)&&m.BYTES_PER_ELEMENT==1))throw new Xt("Cannot pass non-string to std::string");var T=b?Ci(m):m.length,z=qr(4+T+1),B=z+4;return de()[z>>>2>>>0]=T,b?Mt(m,B,T+1):Q().set(m,B>>>0),c!==null&&c.push(ht,z),z},Cb:$t,readValueFromPointer:Ti,Eb(c){ht(c)}})}var hs=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Ph=(s,l)=>{for(var c=s>>1,m=c+l/2;!(c>=m)&&ke()[c>>>0];)++c;if(32<(c<<=1)-s&&hs)return hs.decode(Q().slice(s,c));for(c="",m=0;!(m>=l/2);++m){var b=ye()[s+2*m>>>1>>>0];if(b==0)break;c+=String.fromCharCode(b)}return c},Uh=(s,l,c)=>{if(c??(c=2147483647),2>c)return 0;var m=l;c=(c-=2)<2*s.length?c/2:s.length;for(var b=0;b<c;++b){var T=s.charCodeAt(b);ye()[l>>>1>>>0]=T,l+=2}return ye()[l>>>1>>>0]=0,l-m},qh=s=>2*s.length,Wh=(s,l)=>{for(var c=0,m="";!(c>=l/4);){var b=P()[s+4*c>>>2>>>0];if(b==0)break;++c,65536<=b?(b-=65536,m+=String.fromCharCode(55296|b>>10,56320|1023&b)):m+=String.fromCharCode(b)}return m},Lh=(s,l,c)=>{if(l>>>=0,c??(c=2147483647),4>c)return 0;var m=l;c=m+c-4;for(var b=0;b<s.length;++b){var T=s.charCodeAt(b);if(55296<=T&&57343>=T&&(T=65536+((1023&T)<<10)|1023&s.charCodeAt(++b)),P()[l>>>2>>>0]=T,(l+=4)+4>c)break}return P()[l>>>2>>>0]=0,l-m},Vh=s=>{for(var l=0,c=0;c<s.length;++c){var m=s.charCodeAt(c);55296<=m&&57343>=m&&++c,l+=4}return l};function Gh(s,l,c){if(s>>>=0,l>>>=0,c=st(c>>>=0),l===2)var m=Ph,b=Uh,T=qh,z=B=>ke()[B>>>1>>>0];else l===4&&(m=Wh,b=Lh,T=Vh,z=B=>de()[B>>>2>>>0]);ct(s,{name:c,fromWireType:B=>{for(var U,V=de()[B>>>2>>>0],Y=B+4,re=0;re<=V;++re){var le=B+4+re*l;re!=V&&z(le)!=0||(Y=m(Y,le-Y),U===void 0?U=Y:(U+="\0",U+=Y),Y=le+l)}return ht(B),U},toWireType:(B,U)=>{if(typeof U!="string")throw new Xt(`Cannot pass non-string to C++ string type ${c}`);var V=T(U),Y=qr(4+V+l);return de()[Y>>>2>>>0]=V/l,b(U,Y+4,V+l),B!==null&&B.push(ht,Y),Y},Cb:$t,readValueFromPointer:Ti,Eb(B){ht(B)}})}function jh(s,l){ct(s>>>=0,{Ub:!0,name:l=st(l>>>0),Cb:0,fromWireType:()=>{},toWireType:()=>{}})}function Hh(s){Mi(s>>>0,!p,1,!u,131072,!1),Hn()}var ki=s=>{if(!O)try{if(s(),!(0<wt))try{d?Ni(S):bi(S)}catch(l){l instanceof gi||l=="unwind"||w(0,l)}}catch(l){l instanceof gi||l=="unwind"||w(0,l)}};function Si(s){s>>>=0,typeof Atomics.jc=="function"&&(Atomics.jc(P(),s>>>2,s).value.then(Or),s+=128,Atomics.store(P(),s>>>2,1))}var Or=()=>{var s=Bi();s&&(Si(s),ki(Vs))};function Fh(s,l){(s>>>=0)==l>>>0?setTimeout(Or):d?postMessage({Hb:s,Db:"checkMailbox"}):(s=Bt[s])&&s.postMessage({Db:"checkMailbox"})}var Ii=[];function Kh(s,l,c,m,b){for(l>>>=0,m/=2,Ii.length=m,c=b>>>0>>>3,b=0;b<m;b++)Ii[b]=G[c+2*b]?G[c+2*b+1]:Ne()[c+2*b+1>>>0];return(l?Ri[l]:qm[s])(...Ii)}var Zh=()=>{wt=0};function Yh(s){s>>>=0,d?postMessage({Db:"cleanupThread",ic:s}):jn(Bt[s])}function Xh(s){}var Rr=(s,l)=>{var c=vi[s];if(c===void 0)throw s=Ds(s),c=st(s),ht(s),new Xt(`${l} has unknown type ${c}`);return c},ms=(s,l,c)=>{var m=[];return s=s.toWireType(m,c),m.length&&(de()[l>>>2>>>0]=Ye(m)),s};function Qh(s,l,c){return l>>>=0,c>>>=0,s=De(s>>>0),l=Rr(l,"emval::as"),ms(l,c,s)}function Jh(s,l){return l>>>=0,s=De(s>>>0),(l=Rr(l,"emval::as")).toWireType(null,s)}var Br=s=>{try{s()}catch(l){bt(l)}},xt=0,ot=null,gs=0,Mr=[],_s={},ys={},em=0,Ei=null,tm=[];function bs(s){return function(l){if(!O){if(xt===0){var c=!1,m=!1;l((b=0)=>{if(!O&&(gs=b,c=!0,m)){xt=2,Br(()=>Ks(ot)),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.resume(),b=!1;try{var T=function(){var U=P()[ot+8>>>2>>>0];return U=N[ys[U]],--wt,U()}()}catch(U){T=U,b=!0}var z=!1;if(!ot){var B=Ei;B&&(Ei=null,(b?B.reject:B.resolve)(T),z=!0)}if(b&&!z)throw T}}),m=!0,c||(xt=1,ot=function(){var b=qr(65548),T=b+12;de()[b>>>2>>>0]=T,de()[b+4>>>2>>>0]=T+65536,T=Mr[0];var z=_s[T];return z===void 0&&(z=em++,_s[T]=z,ys[z]=T),T=z,P()[b+8>>>2>>>0]=T,b}(),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.pause(),Br(()=>Hs(ot)))}else xt===2?(xt=0,Br(Zs),ht(ot),ot=null,tm.forEach(ki)):bt(`invalid state: ${xt}`);return gs}}(l=>{s().then(l)})}function rm(s){return s>>>=0,bs(async()=>{var l=await De(s);return Ye(l)})}var Nr=[];function im(s,l,c,m){return c>>>=0,m>>>=0,(s=Nr[s>>>0])(null,l=De(l>>>0),c,m)}var am={},Dr=s=>{var l=am[s];return l===void 0?st(s):l};function nm(s,l,c,m,b){return c>>>=0,m>>>=0,b>>>=0,(s=Nr[s>>>0])(l=De(l>>>0),l[c=Dr(c)],m,b)}function sm(s,l){return l>>>=0,(s=De(s>>>0))==De(l)}var ws=()=>typeof globalThis=="object"?globalThis:Function("return this")();function om(s){return(s>>>=0)==0?Ye(ws()):(s=Dr(s),Ye(ws()[s]))}var um=s=>{var l=Nr.length;return Nr.push(s),l},lm=(s,l)=>{for(var c=Array(s),m=0;m<s;++m)c[m]=Rr(de()[l+4*m>>>2>>>0],`parameter ${m}`);return c};function dm(s,l,c){var m=(l=lm(s,l>>>0)).shift();s--;var b=`return function (obj, func, destructorsRef, args) {
`,T=0,z=[];c===0&&z.push("obj");for(var B=["retType"],U=[m],V=0;V<s;++V)z.push(`arg${V}`),B.push(`argType${V}`),U.push(l[V]),b+=`  var arg${V} = argType${V}.readValueFromPointer(args${T?"+"+T:""});
`,T+=l[V].Cb;return b+=`  var rv = ${c===1?"new func":"func.call"}(${z.join(", ")});
`,m.Ub||(B.push("emval_returnValue"),U.push(ms),b+=`  return emval_returnValue(retType, destructorsRef, rv);
`),s=new Function(...B,b+`};
`)(...U),c=`methodCaller<(${l.map(Y=>Y.name).join(", ")}) => ${m.name}>`,um(Object.defineProperty(s,"name",{value:c}))}function pm(s){return s=Dr(s>>>0),Ye(i[s])}function cm(s,l){return l>>>=0,s=De(s>>>0),l=De(l),Ye(s[l])}function fm(s){9<(s>>>=0)&&(ft[s+1]+=1)}function hm(){return Ye([])}function mm(s){s=De(s>>>0);for(var l=Array(s.length),c=0;c<s.length;c++)l[c]=s[c];return Ye(l)}function gm(s){return Ye(Dr(s>>>0))}function _m(){return Ye({})}function ym(s){for(var l=De(s>>>=0);l.length;){var c=l.pop();l.pop()(c)}xi(s)}function bm(s,l,c){l>>>=0,c>>>=0,s=De(s>>>0),l=De(l),c=De(c),s[l]=c}function wm(s,l){return l>>>=0,s=(s=Rr(s>>>0,"_emval_take_value")).readValueFromPointer(l),Ye(s)}function vm(s,l){s=-9007199254740992>s||9007199254740992<s?NaN:Number(s),l>>>=0,s=new Date(1e3*s),P()[l>>>2>>>0]=s.getUTCSeconds(),P()[l+4>>>2>>>0]=s.getUTCMinutes(),P()[l+8>>>2>>>0]=s.getUTCHours(),P()[l+12>>>2>>>0]=s.getUTCDate(),P()[l+16>>>2>>>0]=s.getUTCMonth(),P()[l+20>>>2>>>0]=s.getUTCFullYear()-1900,P()[l+24>>>2>>>0]=s.getUTCDay(),s=(s.getTime()-Date.UTC(s.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,P()[l+28>>>2>>>0]=s}var vs=s=>s%4==0&&(s%100!=0||s%400==0),$s=[0,31,60,91,121,152,182,213,244,274,305,335],xs=[0,31,59,90,120,151,181,212,243,273,304,334];function $m(s,l){s=-9007199254740992>s||9007199254740992<s?NaN:Number(s),l>>>=0,s=new Date(1e3*s),P()[l>>>2>>>0]=s.getSeconds(),P()[l+4>>>2>>>0]=s.getMinutes(),P()[l+8>>>2>>>0]=s.getHours(),P()[l+12>>>2>>>0]=s.getDate(),P()[l+16>>>2>>>0]=s.getMonth(),P()[l+20>>>2>>>0]=s.getFullYear()-1900,P()[l+24>>>2>>>0]=s.getDay();var c=(vs(s.getFullYear())?$s:xs)[s.getMonth()]+s.getDate()-1|0;P()[l+28>>>2>>>0]=c,P()[l+36>>>2>>>0]=-60*s.getTimezoneOffset(),c=new Date(s.getFullYear(),6,1).getTimezoneOffset();var m=new Date(s.getFullYear(),0,1).getTimezoneOffset();s=0|(c!=m&&s.getTimezoneOffset()==Math.min(m,c)),P()[l+32>>>2>>>0]=s}function xm(s){s>>>=0;var l=new Date(P()[s+20>>>2>>>0]+1900,P()[s+16>>>2>>>0],P()[s+12>>>2>>>0],P()[s+8>>>2>>>0],P()[s+4>>>2>>>0],P()[s>>>2>>>0],0),c=P()[s+32>>>2>>>0],m=l.getTimezoneOffset(),b=new Date(l.getFullYear(),6,1).getTimezoneOffset(),T=new Date(l.getFullYear(),0,1).getTimezoneOffset(),z=Math.min(T,b);return 0>c?P()[s+32>>>2>>>0]=+(b!=T&&z==m):0<c!=(z==m)&&(b=Math.max(T,b),l.setTime(l.getTime()+6e4*((0<c?z:b)-m))),P()[s+24>>>2>>>0]=l.getDay(),c=(vs(l.getFullYear())?$s:xs)[l.getMonth()]+l.getDate()-1|0,P()[s+28>>>2>>>0]=c,P()[s>>>2>>>0]=l.getSeconds(),P()[s+4>>>2>>>0]=l.getMinutes(),P()[s+8>>>2>>>0]=l.getHours(),P()[s+12>>>2>>>0]=l.getDate(),P()[s+16>>>2>>>0]=l.getMonth(),P()[s+20>>>2>>>0]=l.getYear(),s=l.getTime(),BigInt(isNaN(s)?-1:s/1e3)}function Ts(s,l,c,m,b,T,z){return d?$e(16,1,s,l,c,m,b,T,z):-52}function Cs(s,l,c,m,b,T){if(d)return $e(17,1,s,l,c,m,b,T)}var sr={},Tm=()=>performance.timeOrigin+performance.now();function ks(s,l){if(d)return $e(18,1,s,l);if(sr[s]&&(clearTimeout(sr[s].id),delete sr[s]),!l)return 0;var c=setTimeout(()=>{delete sr[s],ki(()=>Ls(s,performance.timeOrigin+performance.now()))},l);return sr[s]={id:c,rc:l},0}function Cm(s,l,c,m){s>>>=0,l>>>=0,c>>>=0,m>>>=0;var b=new Date().getFullYear(),T=new Date(b,0,1).getTimezoneOffset();b=new Date(b,6,1).getTimezoneOffset();var z=Math.max(T,b);de()[s>>>2>>>0]=60*z,P()[l>>>2>>>0]=+(T!=b),s=(l=B=>{var U=Math.abs(B);return`UTC${0<=B?"-":"+"}${String(Math.floor(U/60)).padStart(2,"0")}${String(U%60).padStart(2,"0")}`})(T),l=l(b),b<T?(Mt(s,c,17),Mt(l,m,17)):(Mt(s,m,17),Mt(l,c,17))}var km=()=>Date.now();function Sm(s,l,c){return 0<=s&&3>=s?(s===0?s=Date.now():s=performance.timeOrigin+performance.now(),G[c>>>0>>>3]=BigInt(Math.round(1e6*s)),0):28}var zi=[],Ss=(s,l)=>{zi.length=0;for(var c;c=Q()[s++>>>0];){var m=c!=105;l+=(m&=c!=112)&&l%8?4:0,zi.push(c==112?de()[l>>>2>>>0]:c==106?G[l>>>3]:c==105?P()[l>>>2>>>0]:Ne()[l>>>3>>>0]),l+=m?8:4}return zi};function Im(s,l,c){return s>>>=0,l=Ss(l>>>0,c>>>0),Ri[s](...l)}function Em(s,l,c){return s>>>=0,l=Ss(l>>>0,c>>>0),Ri[s](...l)}var zm=()=>{};function Am(s,l){return me(Se(s>>>0,l>>>0))}var Om=()=>{throw wt+=1,"unwind"};function Rm(){return 4294901760}var Bm=()=>navigator.hardwareConcurrency;function Mm(){return bt("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function Nm(s){s>>>=0;var l=Q().length;if(s<=l||4294901760<s)return!1;for(var c=1;4>=c;c*=2){var m=l*(1+.2/c);m=Math.min(m,s+100663296);e:{m=(Math.min(4294901760,65536*Math.ceil(Math.max(s,m)/65536))-C.buffer.byteLength+65535)/65536|0;try{C.grow(m),ge();var b=1;break e}catch{}b=void 0}if(b)return!0}return!1}var Pr=()=>(bt("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),or={},Is=s=>{s.forEach(l=>{Pr()})};function Dm(){var s=Error().stack.toString().split(`
`);return s[0]=="Error"&&s.shift(),Is(s),or.Mb=Pr(),or.dc=s,or.Mb}function Pm(s,l,c){if(s>>>=0,l>>>=0,or.Mb==s)var m=or.dc;else(m=Error().stack.toString().split(`
`))[0]=="Error"&&m.shift(),Is(m);for(var b=3;m[b]&&Pr()!=s;)++b;for(s=0;s<c&&m[s+b];++s)P()[l+4*s>>>2>>>0]=Pr();return s}var Ai,Oi={},Es=()=>{if(!Ai){var s,l={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(s in Oi)Oi[s]===void 0?delete l[s]:l[s]=Oi[s];var c=[];for(s in l)c.push(`${s}=${l[s]}`);Ai=c}return Ai};function zs(s,l){if(d)return $e(19,1,s,l);s>>>=0,l>>>=0;var c,m=0,b=0;for(c of Es()){var T=l+m;de()[s+b>>>2>>>0]=T,m+=Mt(c,T,1/0)+1,b+=4}return 0}function As(s,l){if(d)return $e(20,1,s,l);s>>>=0,l>>>=0;var c=Es();for(var m of(de()[s>>>2>>>0]=c.length,s=0,c))s+=Ci(m)+1;return de()[l>>>2>>>0]=s,0}function Os(s){return d?$e(21,1,s):52}function Rs(s,l,c,m){return d?$e(22,1,s,l,c,m):52}function Bs(s,l,c,m){return d?$e(23,1,s,l,c,m):70}var Um=[null,[],[]];function Ms(s,l,c,m){if(d)return $e(24,1,s,l,c,m);l>>>=0,c>>>=0,m>>>=0;for(var b=0,T=0;T<c;T++){var z=de()[l>>>2>>>0],B=de()[l+4>>>2>>>0];l+=8;for(var U=0;U<B;U++){var V=s,Y=Q()[z+U>>>0],re=Um[V];Y===0||Y===10?((V===1?te:me)(Qn(re)),re.length=0):re.push(Y)}b+=B}return de()[m>>>2>>>0]=b,0}d||function(){for(var s=i.numThreads-1;s--;)Kn();_i.push(()=>{Ot++,function(l){d?l():Promise.all(vt.map(Fn)).then(l)}(()=>Un())})}();for(var Ns=Array(256),Ur=0;256>Ur;++Ur)Ns[Ur]=String.fromCharCode(Ur);cs=Ns,ft.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=()=>ft.length/2-5-$i.length,d||(C=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),ge()),i.wasmBinary&&(v=i.wasmBinary),i.stackSave=()=>Pi(),i.stackRestore=s=>Wr(s),i.stackAlloc=s=>Di(s),i.setValue=function(s,l,c="i8"){switch(c.endsWith("*")&&(c="*"),c){case"i1":case"i8":j()[s>>>0]=l;break;case"i16":ye()[s>>>1>>>0]=l;break;case"i32":P()[s>>>2>>>0]=l;break;case"i64":G[s>>>3]=BigInt(l);break;case"float":Ee()[s>>>2>>>0]=l;break;case"double":Ne()[s>>>3>>>0]=l;break;case"*":de()[s>>>2>>>0]=l;break;default:bt(`invalid type for setValue: ${c}`)}},i.getValue=function(s,l="i8"){switch(l.endsWith("*")&&(l="*"),l){case"i1":case"i8":return j()[s>>>0];case"i16":return ye()[s>>>1>>>0];case"i32":return P()[s>>>2>>>0];case"i64":return G[s>>>3];case"float":return Ee()[s>>>2>>>0];case"double":return Ne()[s>>>3>>>0];case"*":return de()[s>>>2>>>0];default:bt(`invalid type for getValue: ${l}`)}},i.UTF8ToString=Se,i.stringToUTF8=Mt,i.lengthBytesUTF8=Ci;var qm=[yi,Vn,Zn,Jn,es,ts,rs,is,as,ns,ss,os,us,ls,ds,ps,Ts,Cs,ks,zs,As,Os,Rs,Bs,Ms],Ri={893836:(s,l,c,m,b)=>{if(i===void 0||!i.Fb)return 1;if((s=Se(Number(s>>>0))).startsWith("./")&&(s=s.substring(2)),!(s=i.Fb.get(s)))return 2;if(l=Number(l>>>0),c=Number(c>>>0),m=Number(m>>>0),l+c>s.byteLength)return 3;try{let T=s.subarray(l,l+c);switch(b){case 0:Q().set(T,m>>>0);break;case 1:i.mc?i.mc(m,T):i.cc(m,T);break;default:return 4}return 0}catch{return 4}},894660:(s,l,c)=>{i.Pb(s,Q().subarray(l>>>0,l+c>>>0))},894724:()=>i.oc(),894766:s=>{i.Ob(s)},894803:()=>{i.Wb()},894834:()=>{i.Xb()},894863:()=>{i.ac()},894888:s=>i.Vb(s),894921:s=>i.Zb(s),894953:(s,l,c)=>{i.Lb(Number(s),Number(l),Number(c),!0)},895016:(s,l,c)=>{i.Lb(Number(s),Number(l),Number(c))},895073:()=>typeof wasmOffsetConverter<"u",895130:s=>{i.Ab("Abs",s,void 0)},895181:s=>{i.Ab("Neg",s,void 0)},895232:s=>{i.Ab("Floor",s,void 0)},895285:s=>{i.Ab("Ceil",s,void 0)},895337:s=>{i.Ab("Reciprocal",s,void 0)},895395:s=>{i.Ab("Sqrt",s,void 0)},895447:s=>{i.Ab("Exp",s,void 0)},895498:s=>{i.Ab("Erf",s,void 0)},895549:s=>{i.Ab("Sigmoid",s,void 0)},895604:(s,l,c)=>{i.Ab("HardSigmoid",s,{alpha:l,beta:c})},895683:s=>{i.Ab("Log",s,void 0)},895734:s=>{i.Ab("Sin",s,void 0)},895785:s=>{i.Ab("Cos",s,void 0)},895836:s=>{i.Ab("Tan",s,void 0)},895887:s=>{i.Ab("Asin",s,void 0)},895939:s=>{i.Ab("Acos",s,void 0)},895991:s=>{i.Ab("Atan",s,void 0)},896043:s=>{i.Ab("Sinh",s,void 0)},896095:s=>{i.Ab("Cosh",s,void 0)},896147:s=>{i.Ab("Asinh",s,void 0)},896200:s=>{i.Ab("Acosh",s,void 0)},896253:s=>{i.Ab("Atanh",s,void 0)},896306:s=>{i.Ab("Tanh",s,void 0)},896358:s=>{i.Ab("Not",s,void 0)},896409:(s,l,c)=>{i.Ab("Clip",s,{min:l,max:c})},896478:s=>{i.Ab("Clip",s,void 0)},896530:(s,l)=>{i.Ab("Elu",s,{alpha:l})},896588:s=>{i.Ab("Gelu",s,void 0)},896640:s=>{i.Ab("Relu",s,void 0)},896692:(s,l)=>{i.Ab("LeakyRelu",s,{alpha:l})},896756:(s,l)=>{i.Ab("ThresholdedRelu",s,{alpha:l})},896826:(s,l)=>{i.Ab("Cast",s,{to:l})},896884:s=>{i.Ab("Add",s,void 0)},896935:s=>{i.Ab("Sub",s,void 0)},896986:s=>{i.Ab("Mul",s,void 0)},897037:s=>{i.Ab("Div",s,void 0)},897088:s=>{i.Ab("Pow",s,void 0)},897139:s=>{i.Ab("Equal",s,void 0)},897192:s=>{i.Ab("Greater",s,void 0)},897247:s=>{i.Ab("GreaterOrEqual",s,void 0)},897309:s=>{i.Ab("Less",s,void 0)},897361:s=>{i.Ab("LessOrEqual",s,void 0)},897420:(s,l,c,m,b)=>{i.Ab("ReduceMean",s,{keepDims:!!l,noopWithEmptyAxes:!!c,axes:m?Array.from(P().subarray(Number(m)>>>0,Number(b)>>>0)):[]})},897595:(s,l,c,m,b)=>{i.Ab("ReduceMax",s,{keepDims:!!l,noopWithEmptyAxes:!!c,axes:m?Array.from(P().subarray(Number(m)>>>0,Number(b)>>>0)):[]})},897769:(s,l,c,m,b)=>{i.Ab("ReduceMin",s,{keepDims:!!l,noopWithEmptyAxes:!!c,axes:m?Array.from(P().subarray(Number(m)>>>0,Number(b)>>>0)):[]})},897943:(s,l,c,m,b)=>{i.Ab("ReduceProd",s,{keepDims:!!l,noopWithEmptyAxes:!!c,axes:m?Array.from(P().subarray(Number(m)>>>0,Number(b)>>>0)):[]})},898118:(s,l,c,m,b)=>{i.Ab("ReduceSum",s,{keepDims:!!l,noopWithEmptyAxes:!!c,axes:m?Array.from(P().subarray(Number(m)>>>0,Number(b)>>>0)):[]})},898292:(s,l,c,m,b)=>{i.Ab("ReduceL1",s,{keepDims:!!l,noopWithEmptyAxes:!!c,axes:m?Array.from(P().subarray(Number(m)>>>0,Number(b)>>>0)):[]})},898465:(s,l,c,m,b)=>{i.Ab("ReduceL2",s,{keepDims:!!l,noopWithEmptyAxes:!!c,axes:m?Array.from(P().subarray(Number(m)>>>0,Number(b)>>>0)):[]})},898638:(s,l,c,m,b)=>{i.Ab("ReduceLogSum",s,{keepDims:!!l,noopWithEmptyAxes:!!c,axes:m?Array.from(P().subarray(Number(m)>>>0,Number(b)>>>0)):[]})},898815:(s,l,c,m,b)=>{i.Ab("ReduceSumSquare",s,{keepDims:!!l,noopWithEmptyAxes:!!c,axes:m?Array.from(P().subarray(Number(m)>>>0,Number(b)>>>0)):[]})},898995:(s,l,c,m,b)=>{i.Ab("ReduceLogSumExp",s,{keepDims:!!l,noopWithEmptyAxes:!!c,axes:m?Array.from(P().subarray(Number(m)>>>0,Number(b)>>>0)):[]})},899175:s=>{i.Ab("Where",s,void 0)},899228:(s,l,c)=>{i.Ab("Transpose",s,{perm:l?Array.from(P().subarray(Number(l)>>>0,Number(c)>>>0)):[]})},899352:(s,l,c,m)=>{i.Ab("DepthToSpace",s,{blocksize:l,mode:Se(c),format:m?"NHWC":"NCHW"})},899485:(s,l,c,m)=>{i.Ab("DepthToSpace",s,{blocksize:l,mode:Se(c),format:m?"NHWC":"NCHW"})},899618:(s,l,c,m,b,T,z,B,U,V,Y,re,le,fe,Ie)=>{i.Ab("ConvTranspose",s,{format:U?"NHWC":"NCHW",autoPad:l,dilations:[c],group:m,kernelShape:[b],pads:[T,z],strides:[B],wIsConst:()=>!!j()[V>>>0],outputPadding:Y?Array.from(P().subarray(Number(Y)>>>0,Number(re)>>>0)):[],outputShape:le?Array.from(P().subarray(Number(le)>>>0,Number(fe)>>>0)):[],activation:Se(Ie)})},900051:(s,l,c,m,b,T,z,B,U,V,Y,re,le,fe)=>{i.Ab("ConvTranspose",s,{format:B?"NHWC":"NCHW",autoPad:l,dilations:Array.from(P().subarray(Number(c)>>>0,2+(Number(c)>>>0)>>>0)),group:m,kernelShape:Array.from(P().subarray(Number(b)>>>0,2+(Number(b)>>>0)>>>0)),pads:Array.from(P().subarray(Number(T)>>>0,4+(Number(T)>>>0)>>>0)),strides:Array.from(P().subarray(Number(z)>>>0,2+(Number(z)>>>0)>>>0)),wIsConst:()=>!!j()[U>>>0],outputPadding:V?Array.from(P().subarray(Number(V)>>>0,Number(Y)>>>0)):[],outputShape:re?Array.from(P().subarray(Number(re)>>>0,Number(le)>>>0)):[],activation:Se(fe)})},900712:(s,l,c,m,b,T,z,B,U,V,Y,re,le,fe,Ie)=>{i.Ab("ConvTranspose",s,{format:U?"NHWC":"NCHW",autoPad:l,dilations:[c],group:m,kernelShape:[b],pads:[T,z],strides:[B],wIsConst:()=>!!j()[V>>>0],outputPadding:Y?Array.from(P().subarray(Number(Y)>>>0,Number(re)>>>0)):[],outputShape:le?Array.from(P().subarray(Number(le)>>>0,Number(fe)>>>0)):[],activation:Se(Ie)})},901145:(s,l,c,m,b,T,z,B,U,V,Y,re,le,fe)=>{i.Ab("ConvTranspose",s,{format:B?"NHWC":"NCHW",autoPad:l,dilations:Array.from(P().subarray(Number(c)>>>0,2+(Number(c)>>>0)>>>0)),group:m,kernelShape:Array.from(P().subarray(Number(b)>>>0,2+(Number(b)>>>0)>>>0)),pads:Array.from(P().subarray(Number(T)>>>0,4+(Number(T)>>>0)>>>0)),strides:Array.from(P().subarray(Number(z)>>>0,2+(Number(z)>>>0)>>>0)),wIsConst:()=>!!j()[U>>>0],outputPadding:V?Array.from(P().subarray(Number(V)>>>0,Number(Y)>>>0)):[],outputShape:re?Array.from(P().subarray(Number(re)>>>0,Number(le)>>>0)):[],activation:Se(fe)})},901806:(s,l)=>{i.Ab("GlobalAveragePool",s,{format:l?"NHWC":"NCHW"})},901897:(s,l,c,m,b,T,z,B,U,V,Y,re,le,fe)=>{i.Ab("AveragePool",s,{format:fe?"NHWC":"NCHW",auto_pad:l,ceil_mode:c,count_include_pad:m,storage_order:b,dilations:T?Array.from(P().subarray(Number(T)>>>0,Number(z)>>>0)):[],kernel_shape:B?Array.from(P().subarray(Number(B)>>>0,Number(U)>>>0)):[],pads:V?Array.from(P().subarray(Number(V)>>>0,Number(Y)>>>0)):[],strides:re?Array.from(P().subarray(Number(re)>>>0,Number(le)>>>0)):[]})},902376:(s,l)=>{i.Ab("GlobalAveragePool",s,{format:l?"NHWC":"NCHW"})},902467:(s,l,c,m,b,T,z,B,U,V,Y,re,le,fe)=>{i.Ab("AveragePool",s,{format:fe?"NHWC":"NCHW",auto_pad:l,ceil_mode:c,count_include_pad:m,storage_order:b,dilations:T?Array.from(P().subarray(Number(T)>>>0,Number(z)>>>0)):[],kernel_shape:B?Array.from(P().subarray(Number(B)>>>0,Number(U)>>>0)):[],pads:V?Array.from(P().subarray(Number(V)>>>0,Number(Y)>>>0)):[],strides:re?Array.from(P().subarray(Number(re)>>>0,Number(le)>>>0)):[]})},902946:(s,l)=>{i.Ab("GlobalMaxPool",s,{format:l?"NHWC":"NCHW"})},903033:(s,l,c,m,b,T,z,B,U,V,Y,re,le,fe)=>{i.Ab("MaxPool",s,{format:fe?"NHWC":"NCHW",auto_pad:l,ceil_mode:c,count_include_pad:m,storage_order:b,dilations:T?Array.from(P().subarray(Number(T)>>>0,Number(z)>>>0)):[],kernel_shape:B?Array.from(P().subarray(Number(B)>>>0,Number(U)>>>0)):[],pads:V?Array.from(P().subarray(Number(V)>>>0,Number(Y)>>>0)):[],strides:re?Array.from(P().subarray(Number(re)>>>0,Number(le)>>>0)):[]})},903508:(s,l)=>{i.Ab("GlobalMaxPool",s,{format:l?"NHWC":"NCHW"})},903595:(s,l,c,m,b,T,z,B,U,V,Y,re,le,fe)=>{i.Ab("MaxPool",s,{format:fe?"NHWC":"NCHW",auto_pad:l,ceil_mode:c,count_include_pad:m,storage_order:b,dilations:T?Array.from(P().subarray(Number(T)>>>0,Number(z)>>>0)):[],kernel_shape:B?Array.from(P().subarray(Number(B)>>>0,Number(U)>>>0)):[],pads:V?Array.from(P().subarray(Number(V)>>>0,Number(Y)>>>0)):[],strides:re?Array.from(P().subarray(Number(re)>>>0,Number(le)>>>0)):[]})},904070:(s,l,c,m,b)=>{i.Ab("Gemm",s,{alpha:l,beta:c,transA:m,transB:b})},904174:s=>{i.Ab("MatMul",s,void 0)},904228:(s,l,c,m)=>{i.Ab("ArgMax",s,{keepDims:!!l,selectLastIndex:!!c,axis:m})},904336:(s,l,c,m)=>{i.Ab("ArgMin",s,{keepDims:!!l,selectLastIndex:!!c,axis:m})},904444:(s,l)=>{i.Ab("Softmax",s,{axis:l})},904507:(s,l)=>{i.Ab("Concat",s,{axis:l})},904567:(s,l,c,m,b)=>{i.Ab("Split",s,{axis:l,numOutputs:c,splitSizes:m?Array.from(P().subarray(Number(m)>>>0,Number(b)>>>0)):[]})},904723:s=>{i.Ab("Expand",s,void 0)},904777:(s,l)=>{i.Ab("Gather",s,{axis:Number(l)})},904848:(s,l)=>{i.Ab("GatherElements",s,{axis:Number(l)})},904927:(s,l)=>{i.Ab("GatherND",s,{batch_dims:Number(l)})},905006:(s,l,c,m,b,T,z,B,U,V,Y)=>{i.Ab("Resize",s,{antialias:l,axes:c?Array.from(P().subarray(Number(c)>>>0,Number(m)>>>0)):[],coordinateTransformMode:Se(b),cubicCoeffA:T,excludeOutside:z,extrapolationValue:B,keepAspectRatioPolicy:Se(U),mode:Se(V),nearestMode:Se(Y)})},905368:(s,l,c,m,b,T,z)=>{i.Ab("Slice",s,{starts:l?Array.from(P().subarray(Number(l)>>>0,Number(c)>>>0)):[],ends:m?Array.from(P().subarray(Number(m)>>>0,Number(b)>>>0)):[],axes:T?Array.from(P().subarray(Number(T)>>>0,Number(z)>>>0)):[]})},905632:s=>{i.Ab("Tile",s,void 0)},905684:(s,l,c)=>{i.Ab("InstanceNormalization",s,{epsilon:l,format:c?"NHWC":"NCHW"})},905798:(s,l,c)=>{i.Ab("InstanceNormalization",s,{epsilon:l,format:c?"NHWC":"NCHW"})},905912:s=>{i.Ab("Range",s,void 0)},905965:(s,l)=>{i.Ab("Einsum",s,{equation:Se(l)})},906046:(s,l,c,m,b)=>{i.Ab("Pad",s,{mode:l,value:c,pads:m?Array.from(P().subarray(Number(m)>>>0,Number(b)>>>0)):[]})},906189:(s,l,c,m,b,T)=>{i.Ab("BatchNormalization",s,{epsilon:l,momentum:c,spatial:!!b,trainingMode:!!m,format:T?"NHWC":"NCHW"})},906358:(s,l,c,m,b,T)=>{i.Ab("BatchNormalization",s,{epsilon:l,momentum:c,spatial:!!b,trainingMode:!!m,format:T?"NHWC":"NCHW"})},906527:(s,l,c)=>{i.Ab("CumSum",s,{exclusive:Number(l),reverse:Number(c)})},906624:(s,l,c)=>{i.Ab("DequantizeLinear",s,{axis:l,blockSize:c})},906714:(s,l,c,m,b)=>{i.Ab("GridSample",s,{align_corners:l,mode:Se(c),padding_mode:Se(m),format:b?"NHWC":"NCHW"})},906884:(s,l,c,m,b)=>{i.Ab("GridSample",s,{align_corners:l,mode:Se(c),padding_mode:Se(m),format:b?"NHWC":"NCHW"})},907054:(s,l)=>{i.Ab("ScatterND",s,{reduction:Se(l)})},907139:(s,l,c,m,b,T,z,B,U)=>{i.Ab("Attention",s,{numHeads:l,isUnidirectional:c,maskFilterValue:m,scale:b,doRotary:T,qkvHiddenSizes:z?Array.from(P().subarray(Number(B)>>>0,Number(B)+z>>>0)):[],pastPresentShareBuffer:!!U})},907411:s=>{i.Ab("BiasAdd",s,void 0)},907466:s=>{i.Ab("BiasSplitGelu",s,void 0)},907527:s=>{i.Ab("FastGelu",s,void 0)},907583:(s,l,c,m,b,T,z,B,U,V,Y,re,le,fe,Ie,je)=>{i.Ab("Conv",s,{format:re?"NHWC":"NCHW",auto_pad:l,dilations:c?Array.from(P().subarray(Number(c)>>>0,Number(m)>>>0)):[],group:b,kernel_shape:T?Array.from(P().subarray(Number(T)>>>0,Number(z)>>>0)):[],pads:B?Array.from(P().subarray(Number(B)>>>0,Number(U)>>>0)):[],strides:V?Array.from(P().subarray(Number(V)>>>0,Number(Y)>>>0)):[],w_is_const:()=>!!j()[Number(le)>>>0],activation:Se(fe),activation_params:Ie?Array.from(Ee().subarray(Number(Ie)>>>0,Number(je)>>>0)):[]})},908167:s=>{i.Ab("Gelu",s,void 0)},908219:(s,l,c,m,b,T,z,B,U)=>{i.Ab("GroupQueryAttention",s,{numHeads:l,kvNumHeads:c,scale:m,softcap:b,doRotary:T,rotaryInterleaved:z,smoothSoftmax:B,localWindowSize:U})},908436:(s,l,c,m)=>{i.Ab("LayerNormalization",s,{axis:l,epsilon:c,simplified:!!m})},908547:(s,l,c,m)=>{i.Ab("LayerNormalization",s,{axis:l,epsilon:c,simplified:!!m})},908658:(s,l,c,m,b,T)=>{i.Ab("MatMulNBits",s,{k:l,n:c,accuracyLevel:m,bits:b,blockSize:T})},908785:(s,l,c,m,b,T)=>{i.Ab("MultiHeadAttention",s,{numHeads:l,isUnidirectional:c,maskFilterValue:m,scale:b,doRotary:T})},908944:(s,l)=>{i.Ab("QuickGelu",s,{alpha:l})},909008:(s,l,c,m,b)=>{i.Ab("RotaryEmbedding",s,{interleaved:!!l,numHeads:c,rotaryEmbeddingDim:m,scale:b})},909147:(s,l,c)=>{i.Ab("SkipLayerNormalization",s,{epsilon:l,simplified:!!c})},909249:(s,l,c)=>{i.Ab("SkipLayerNormalization",s,{epsilon:l,simplified:!!c})},909351:(s,l,c,m)=>{i.Ab("GatherBlockQuantized",s,{gatherAxis:l,quantizeAxis:c,blockSize:m})},909472:s=>{i.$b(s)},909506:(s,l)=>i.bc(Number(s),Number(l),i.Gb.ec,i.Gb.errors)};function Wm(s,l,c){return bs(async()=>{await i.Yb(Number(s),Number(l),Number(c))})}function Lm(){return typeof wasmOffsetConverter<"u"}var N=await async function(){function s(m,b){return N=m.exports,N=function(){var T=N,z={};for(let[B,U]of Object.entries(T))z[B]=typeof U=="function"?(...V)=>{Mr.push(B);try{return U(...V)}finally{O||(Mr.pop(),ot&&xt===1&&Mr.length===0&&(xt=0,wt+=1,Br(Fs),typeof Fibers<"u"&&Fibers.sc()))}}:U;return z}(),N=function(){var T=N,z=U=>V=>U(V)>>>0,B=U=>()=>U()>>>0;return(T=Object.assign({},T)).Ea=z(T.Ea),T.gb=B(T.gb),T.ib=z(T.ib),T.tb=z(T.tb),T.ub=B(T.ub),T.__cxa_get_exception_ptr=z(T.__cxa_get_exception_ptr),T}(),Gn.push(N.jb),k=b,Un(),N}Ot++;var l=qn();if(i.instantiateWasm)return new Promise(m=>{i.instantiateWasm(l,(b,T)=>{m(s(b,T))})});if(d)return new Promise(m=>{K=b=>{var T=new WebAssembly.Instance(b,qn());m(s(T,b))}});Ge??(Ge=i.locateFile?i.locateFile?i.locateFile("ort-wasm-simd-threaded.jsep.wasm",$):$+"ort-wasm-simd-threaded.jsep.wasm":new URL(""+new URL("../assets/ort-wasm-simd-threaded.jsep.BGTZ4Y7F.wasm",import.meta.url).href,import.meta.url).href);try{var c=await async function(m){var b=Ge;if(!v&&typeof WebAssembly.instantiateStreaming=="function"&&!q(b))try{var T=fetch(b,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(T,m)}catch(z){me(`wasm streaming compile failed: ${z}`),me("falling back to ArrayBuffer instantiation")}return async function(z,B){try{var U=await async function(V){if(!v)try{var Y=await y(V);return new Uint8Array(Y)}catch{}if(V==Ge&&v)V=new Uint8Array(v);else{if(!_)throw"both async and sync fetching of the wasm failed";V=_(V)}return V}(z);return await WebAssembly.instantiate(U,B)}catch(V){me(`failed to asynchronously prepare wasm: ${V}`),bt(V)}}(b,m)}(l);return s(c.instance,c.module)}catch(m){return n(m),Promise.reject(m)}}(),Ds=s=>(Ds=N.Ea)(s),Ps=()=>(Ps=N.Fa)();i._OrtInit=(s,l)=>(i._OrtInit=N.Ga)(s,l),i._OrtGetLastError=(s,l)=>(i._OrtGetLastError=N.Ha)(s,l),i._OrtCreateSessionOptions=(s,l,c,m,b,T,z,B,U,V)=>(i._OrtCreateSessionOptions=N.Ia)(s,l,c,m,b,T,z,B,U,V),i._OrtAppendExecutionProvider=(s,l,c,m,b)=>(i._OrtAppendExecutionProvider=N.Ja)(s,l,c,m,b),i._OrtAddFreeDimensionOverride=(s,l,c)=>(i._OrtAddFreeDimensionOverride=N.Ka)(s,l,c),i._OrtAddSessionConfigEntry=(s,l,c)=>(i._OrtAddSessionConfigEntry=N.La)(s,l,c),i._OrtReleaseSessionOptions=s=>(i._OrtReleaseSessionOptions=N.Ma)(s),i._OrtCreateSession=(s,l,c)=>(i._OrtCreateSession=N.Na)(s,l,c),i._OrtReleaseSession=s=>(i._OrtReleaseSession=N.Oa)(s),i._OrtGetInputOutputCount=(s,l,c)=>(i._OrtGetInputOutputCount=N.Pa)(s,l,c),i._OrtGetInputOutputMetadata=(s,l,c,m)=>(i._OrtGetInputOutputMetadata=N.Qa)(s,l,c,m),i._OrtFree=s=>(i._OrtFree=N.Ra)(s),i._OrtCreateTensor=(s,l,c,m,b,T)=>(i._OrtCreateTensor=N.Sa)(s,l,c,m,b,T),i._OrtGetTensorData=(s,l,c,m,b)=>(i._OrtGetTensorData=N.Ta)(s,l,c,m,b),i._OrtReleaseTensor=s=>(i._OrtReleaseTensor=N.Ua)(s),i._OrtCreateRunOptions=(s,l,c,m)=>(i._OrtCreateRunOptions=N.Va)(s,l,c,m),i._OrtAddRunConfigEntry=(s,l,c)=>(i._OrtAddRunConfigEntry=N.Wa)(s,l,c),i._OrtReleaseRunOptions=s=>(i._OrtReleaseRunOptions=N.Xa)(s),i._OrtCreateBinding=s=>(i._OrtCreateBinding=N.Ya)(s),i._OrtBindInput=(s,l,c)=>(i._OrtBindInput=N.Za)(s,l,c),i._OrtBindOutput=(s,l,c,m)=>(i._OrtBindOutput=N._a)(s,l,c,m),i._OrtClearBoundOutputs=s=>(i._OrtClearBoundOutputs=N.$a)(s),i._OrtReleaseBinding=s=>(i._OrtReleaseBinding=N.ab)(s),i._OrtRunWithBinding=(s,l,c,m,b)=>(i._OrtRunWithBinding=N.bb)(s,l,c,m,b),i._OrtRun=(s,l,c,m,b,T,z,B)=>(i._OrtRun=N.cb)(s,l,c,m,b,T,z,B),i._OrtEndProfiling=s=>(i._OrtEndProfiling=N.db)(s),i._JsepOutput=(s,l,c)=>(i._JsepOutput=N.eb)(s,l,c),i._JsepGetNodeName=s=>(i._JsepGetNodeName=N.fb)(s);var Bi=()=>(Bi=N.gb)(),ht=i._free=s=>(ht=i._free=N.hb)(s),qr=i._malloc=s=>(qr=i._malloc=N.ib)(s),Mi=(s,l,c,m,b,T)=>(Mi=N.kb)(s,l,c,m,b,T),Us=()=>(Us=N.lb)(),qs=(s,l,c,m,b)=>(qs=N.mb)(s,l,c,m,b),Ws=s=>(Ws=N.nb)(s),Ni=s=>(Ni=N.ob)(s),Ls=(s,l)=>(Ls=N.pb)(s,l),Vs=()=>(Vs=N.qb)(),Gs=(s,l)=>(Gs=N.rb)(s,l),Wr=s=>(Wr=N.sb)(s),Di=s=>(Di=N.tb)(s),Pi=()=>(Pi=N.ub)(),js=i.dynCall_ii=(s,l)=>(js=i.dynCall_ii=N.vb)(s,l);i.dynCall_vii=(s,l,c)=>(i.dynCall_vii=N.dynCall_vii)(s,l,c),i.dynCall_iiiii=(s,l,c,m,b)=>(i.dynCall_iiiii=N.dynCall_iiiii)(s,l,c,m,b),i.dynCall_iii=(s,l,c)=>(i.dynCall_iii=N.dynCall_iii)(s,l,c),i.dynCall_iiiiii=(s,l,c,m,b,T)=>(i.dynCall_iiiiii=N.dynCall_iiiiii)(s,l,c,m,b,T),i.dynCall_iiiiiiii=(s,l,c,m,b,T,z,B)=>(i.dynCall_iiiiiiii=N.dynCall_iiiiiiii)(s,l,c,m,b,T,z,B),i.dynCall_iiiiiii=(s,l,c,m,b,T,z)=>(i.dynCall_iiiiiii=N.dynCall_iiiiiii)(s,l,c,m,b,T,z),i.dynCall_vi=(s,l)=>(i.dynCall_vi=N.dynCall_vi)(s,l),i.dynCall_iiii=(s,l,c,m)=>(i.dynCall_iiii=N.dynCall_iiii)(s,l,c,m),i.dynCall_i=s=>(i.dynCall_i=N.dynCall_i)(s),i.dynCall_viiiiiiii=(s,l,c,m,b,T,z,B,U)=>(i.dynCall_viiiiiiii=N.dynCall_viiiiiiii)(s,l,c,m,b,T,z,B,U),i.dynCall_viii=(s,l,c,m)=>(i.dynCall_viii=N.dynCall_viii)(s,l,c,m),i.dynCall_viijj=(s,l,c,m,b)=>(i.dynCall_viijj=N.dynCall_viijj)(s,l,c,m,b),i.dynCall_viiiiii=(s,l,c,m,b,T,z)=>(i.dynCall_viiiiii=N.dynCall_viiiiii)(s,l,c,m,b,T,z),i.dynCall_viiii=(s,l,c,m,b)=>(i.dynCall_viiii=N.dynCall_viiii)(s,l,c,m,b),i.dynCall_viiiii=(s,l,c,m,b,T)=>(i.dynCall_viiiii=N.dynCall_viiiii)(s,l,c,m,b,T),i.dynCall_vfiii=(s,l,c,m,b)=>(i.dynCall_vfiii=N.dynCall_vfiii)(s,l,c,m,b),i.dynCall_viiiiff=(s,l,c,m,b,T,z)=>(i.dynCall_viiiiff=N.dynCall_viiiiff)(s,l,c,m,b,T,z),i.dynCall_viiiiiff=(s,l,c,m,b,T,z,B)=>(i.dynCall_viiiiiff=N.dynCall_viiiiiff)(s,l,c,m,b,T,z,B),i.dynCall_ffff=(s,l,c,m)=>(i.dynCall_ffff=N.dynCall_ffff)(s,l,c,m),i.dynCall_viiff=(s,l,c,m,b)=>(i.dynCall_viiff=N.dynCall_viiff)(s,l,c,m,b),i.dynCall_fffffff=(s,l,c,m,b,T,z)=>(i.dynCall_fffffff=N.dynCall_fffffff)(s,l,c,m,b,T,z),i.dynCall_jjjjjjj=(s,l,c,m,b,T,z)=>(i.dynCall_jjjjjjj=N.dynCall_jjjjjjj)(s,l,c,m,b,T,z),i.dynCall_jjjjjj=(s,l,c,m,b,T)=>(i.dynCall_jjjjjj=N.dynCall_jjjjjj)(s,l,c,m,b,T),i.dynCall_iijjii=(s,l,c,m,b,T)=>(i.dynCall_iijjii=N.dynCall_iijjii)(s,l,c,m,b,T),i.dynCall_viiiiiiiiiiiii=(s,l,c,m,b,T,z,B,U,V,Y,re,le,fe)=>(i.dynCall_viiiiiiiiiiiii=N.dynCall_viiiiiiiiiiiii)(s,l,c,m,b,T,z,B,U,V,Y,re,le,fe),i.dynCall_viiiiiiiiii=(s,l,c,m,b,T,z,B,U,V,Y)=>(i.dynCall_viiiiiiiiii=N.dynCall_viiiiiiiiii)(s,l,c,m,b,T,z,B,U,V,Y),i.dynCall_viiiiiiiiiii=(s,l,c,m,b,T,z,B,U,V,Y,re)=>(i.dynCall_viiiiiiiiiii=N.dynCall_viiiiiiiiiii)(s,l,c,m,b,T,z,B,U,V,Y,re),i.dynCall_viiiiiiiiiiii=(s,l,c,m,b,T,z,B,U,V,Y,re,le)=>(i.dynCall_viiiiiiiiiiii=N.dynCall_viiiiiiiiiiii)(s,l,c,m,b,T,z,B,U,V,Y,re,le),i.dynCall_viiiiiiiiiiiiiiiiii=(s,l,c,m,b,T,z,B,U,V,Y,re,le,fe,Ie,je,mt,Nt,ur)=>(i.dynCall_viiiiiiiiiiiiiiiiii=N.dynCall_viiiiiiiiiiiiiiiiii)(s,l,c,m,b,T,z,B,U,V,Y,re,le,fe,Ie,je,mt,Nt,ur),i.dynCall_viiiiiiiii=(s,l,c,m,b,T,z,B,U,V)=>(i.dynCall_viiiiiiiii=N.dynCall_viiiiiiiii)(s,l,c,m,b,T,z,B,U,V),i.dynCall_viiiiiiiiiiiiiiiiiii=(s,l,c,m,b,T,z,B,U,V,Y,re,le,fe,Ie,je,mt,Nt,ur,Ui)=>(i.dynCall_viiiiiiiiiiiiiiiiiii=N.dynCall_viiiiiiiiiiiiiiiiiii)(s,l,c,m,b,T,z,B,U,V,Y,re,le,fe,Ie,je,mt,Nt,ur,Ui),i.dynCall_viiiiiii=(s,l,c,m,b,T,z,B)=>(i.dynCall_viiiiiii=N.dynCall_viiiiiii)(s,l,c,m,b,T,z,B),i.dynCall_viiiiiiiiiiiiiii=(s,l,c,m,b,T,z,B,U,V,Y,re,le,fe,Ie,je)=>(i.dynCall_viiiiiiiiiiiiiii=N.dynCall_viiiiiiiiiiiiiii)(s,l,c,m,b,T,z,B,U,V,Y,re,le,fe,Ie,je),i.dynCall_jiji=(s,l,c,m)=>(i.dynCall_jiji=N.dynCall_jiji)(s,l,c,m),i.dynCall_v=s=>(i.dynCall_v=N.dynCall_v)(s),i.dynCall_iidiiii=(s,l,c,m,b,T,z)=>(i.dynCall_iidiiii=N.dynCall_iidiiii)(s,l,c,m,b,T,z),i.dynCall_iiiiiiiii=(s,l,c,m,b,T,z,B,U)=>(i.dynCall_iiiiiiiii=N.dynCall_iiiiiiiii)(s,l,c,m,b,T,z,B,U),i.dynCall_iiij=(s,l,c,m)=>(i.dynCall_iiij=N.dynCall_iiij)(s,l,c,m),i.dynCall_iiiiiiiiii=(s,l,c,m,b,T,z,B,U,V)=>(i.dynCall_iiiiiiiiii=N.dynCall_iiiiiiiiii)(s,l,c,m,b,T,z,B,U,V),i.dynCall_iiiiiiiiiiiii=(s,l,c,m,b,T,z,B,U,V,Y,re,le)=>(i.dynCall_iiiiiiiiiiiii=N.dynCall_iiiiiiiiiiiii)(s,l,c,m,b,T,z,B,U,V,Y,re,le),i.dynCall_iiiiiiiiiii=(s,l,c,m,b,T,z,B,U,V,Y)=>(i.dynCall_iiiiiiiiiii=N.dynCall_iiiiiiiiiii)(s,l,c,m,b,T,z,B,U,V,Y),i.dynCall_ji=(s,l)=>(i.dynCall_ji=N.dynCall_ji)(s,l),i.dynCall_iijii=(s,l,c,m,b)=>(i.dynCall_iijii=N.dynCall_iijii)(s,l,c,m,b),i.dynCall_vij=(s,l,c)=>(i.dynCall_vij=N.dynCall_vij)(s,l,c),i.dynCall_viiijii=(s,l,c,m,b,T,z)=>(i.dynCall_viiijii=N.dynCall_viiijii)(s,l,c,m,b,T,z),i.dynCall_viijiiiiiiiiiiiiii=(s,l,c,m,b,T,z,B,U,V,Y,re,le,fe,Ie,je,mt,Nt)=>(i.dynCall_viijiiiiiiiiiiiiii=N.dynCall_viijiiiiiiiiiiiiii)(s,l,c,m,b,T,z,B,U,V,Y,re,le,fe,Ie,je,mt,Nt),i.dynCall_viiiji=(s,l,c,m,b,T)=>(i.dynCall_viiiji=N.dynCall_viiiji)(s,l,c,m,b,T),i.dynCall_fiii=(s,l,c,m)=>(i.dynCall_fiii=N.dynCall_fiii)(s,l,c,m),i.dynCall_viijii=(s,l,c,m,b,T)=>(i.dynCall_viijii=N.dynCall_viijii)(s,l,c,m,b,T),i.dynCall_viij=(s,l,c,m)=>(i.dynCall_viij=N.dynCall_viij)(s,l,c,m),i.dynCall_jiij=(s,l,c,m)=>(i.dynCall_jiij=N.dynCall_jiij)(s,l,c,m),i.dynCall_fi=(s,l)=>(i.dynCall_fi=N.dynCall_fi)(s,l),i.dynCall_fii=(s,l,c)=>(i.dynCall_fii=N.dynCall_fii)(s,l,c),i.dynCall_jii=(s,l,c)=>(i.dynCall_jii=N.dynCall_jii)(s,l,c),i.dynCall_dii=(s,l,c)=>(i.dynCall_dii=N.dynCall_dii)(s,l,c),i.dynCall_fiiii=(s,l,c,m,b)=>(i.dynCall_fiiii=N.dynCall_fiiii)(s,l,c,m,b),i.dynCall_fif=(s,l,c)=>(i.dynCall_fif=N.dynCall_fif)(s,l,c),i.dynCall_jfi=(s,l,c)=>(i.dynCall_jfi=N.dynCall_jfi)(s,l,c),i.dynCall_viiiiiiiiiiiiii=(s,l,c,m,b,T,z,B,U,V,Y,re,le,fe,Ie)=>(i.dynCall_viiiiiiiiiiiiii=N.dynCall_viiiiiiiiiiiiii)(s,l,c,m,b,T,z,B,U,V,Y,re,le,fe,Ie),i.dynCall_viiiiiiiiiiiiiiiiiiii=(s,l,c,m,b,T,z,B,U,V,Y,re,le,fe,Ie,je,mt,Nt,ur,Ui,Vm)=>(i.dynCall_viiiiiiiiiiiiiiiiiiii=N.dynCall_viiiiiiiiiiiiiiiiiiii)(s,l,c,m,b,T,z,B,U,V,Y,re,le,fe,Ie,je,mt,Nt,ur,Ui,Vm),i.dynCall_viiiiiiiiiiiiiiii=(s,l,c,m,b,T,z,B,U,V,Y,re,le,fe,Ie,je,mt)=>(i.dynCall_viiiiiiiiiiiiiiii=N.dynCall_viiiiiiiiiiiiiiii)(s,l,c,m,b,T,z,B,U,V,Y,re,le,fe,Ie,je,mt),i.dynCall_iif=(s,l,c)=>(i.dynCall_iif=N.dynCall_iif)(s,l,c),i.dynCall_jiiii=(s,l,c,m,b)=>(i.dynCall_jiiii=N.dynCall_jiiii)(s,l,c,m,b),i.dynCall_jiii=(s,l,c,m)=>(i.dynCall_jiii=N.dynCall_jiii)(s,l,c,m),i.dynCall_viif=(s,l,c,m)=>(i.dynCall_viif=N.dynCall_viif)(s,l,c,m),i.dynCall_viiij=(s,l,c,m,b)=>(i.dynCall_viiij=N.dynCall_viiij)(s,l,c,m,b),i.dynCall_viiiijii=(s,l,c,m,b,T,z,B)=>(i.dynCall_viiiijii=N.dynCall_viiiijii)(s,l,c,m,b,T,z,B),i.dynCall_iiiiij=(s,l,c,m,b,T)=>(i.dynCall_iiiiij=N.dynCall_iiiiij)(s,l,c,m,b,T),i.dynCall_iiiiid=(s,l,c,m,b,T)=>(i.dynCall_iiiiid=N.dynCall_iiiiid)(s,l,c,m,b,T),i.dynCall_iiiiijj=(s,l,c,m,b,T,z)=>(i.dynCall_iiiiijj=N.dynCall_iiiiijj)(s,l,c,m,b,T,z),i.dynCall_iiiiiijj=(s,l,c,m,b,T,z,B)=>(i.dynCall_iiiiiijj=N.dynCall_iiiiiijj)(s,l,c,m,b,T,z,B);var Hs=s=>(Hs=N.wb)(s),Fs=()=>(Fs=N.xb)(),Ks=s=>(Ks=N.yb)(s),Zs=()=>(Zs=N.zb)();return function s(){if(0<Ot)Rt=s;else if(d)a(i),xe();else{for(;0<_i.length;)_i.shift()(i);0<Ot?Rt=s:(i.calledRun=!0,O||(xe(),a(i)))}}(),i.PTR_SIZE=4,o},up=Xi,ao=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),ao&&Xi()}),Qi,Ha,no,He,lp,jr,so,oo,Ji,uo,ea,dp,ta,pp,hn=L(()=>{fn(),Qi=typeof location>"u"?void 0:location.origin,Ha=import.meta.url>"file:"&&import.meta.url<"file;",no=()=>{{if(Ha){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,Qi).href}return import.meta.url}},He=no(),lp=()=>{if(He&&!He.startsWith("blob:"))return He.substring(0,He.lastIndexOf("/")+1)},jr=(e,t)=>{try{let r=t??He;return(r?new URL(e,r):new URL(e)).origin===Qi}catch{return!1}},so=(e,t)=>{let r=t??He;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},oo=(e,t)=>`${t??"./"}${e}`,Ji=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},uo=async e=>(await import(e)).default,ea=(e_(),zr(np)).default,dp=async()=>{if(!He)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(jr(He))return[void 0,ea()];let e=await Ji(He);return[e,ea(e)]},ta=(t_(),zr(op)).default,pp=async(e,t,r,a)=>{let n=ta&&!(e||t);if(n)if(He)n=jr(He);else if(a&&!r)n=!0;else throw new Error("cannot determine the script source URL.");if(n)return[void 0,ta];{let i="ort-wasm-simd-threaded.jsep.mjs",o=e??so(i,t),u=r&&o&&!jr(o,t),p=u?await Ji(o):o??oo(i,t);return[u?p:void 0,await uo(p)]}}}),ra,Hr,pr,ia,lo,po,co,mn,be,Zt=L(()=>{hn(),Hr=!1,pr=!1,ia=!1,lo=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},po=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},co=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},mn=async e=>{if(Hr)return Promise.resolve();if(pr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(ia)throw new Error("previous call to 'initializeWebAssembly()' failed.");pr=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!co())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!po())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let a=lo();r>1&&!a&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let n=e.wasmPaths,i=typeof n=="string"?n:void 0,o=n==null?void 0:n.mjs,u=(o==null?void 0:o.href)??o,p=n==null?void 0:n.wasm,d=(p==null?void 0:p.href)??p,f=e.wasmBinary,[h,g]=await pp(u,i,r>1,!!f||!!d),y=!1,_=[];if(t>0&&_.push(new Promise(w=>{setTimeout(()=>{y=!0,w()},t)})),_.push(new Promise((w,x)=>{let $={numThreads:r};if(f)$.wasmBinary=f;else if(d||i)$.locateFile=v=>d??i+v;else if(u&&u.indexOf("blob:")!==0)$.locateFile=v=>new URL(v,u).href;else if(h){let v=lp();v&&($.locateFile=C=>v+C)}g($).then(v=>{pr=!1,Hr=!0,ra=v,w(),h&&URL.revokeObjectURL(h)},v=>{pr=!1,ia=!0,x(v)})})),await Promise.race(_),y)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},be=()=>{if(Hr&&ra)return ra;throw new Error("WebAssembly is not initialized yet.")}}),at,oi,_e,gn=L(()=>{Zt(),at=(e,t)=>{let r=be(),a=r.lengthBytesUTF8(e)+1,n=r._malloc(a);return r.stringToUTF8(e,n,a),t.push(n),n},oi=(e,t,r,a)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([n,i])=>{let o=t?t+n:n;if(typeof i=="object")oi(i,o+".",r,a);else if(typeof i=="string"||typeof i=="number")a(o,i.toString());else if(typeof i=="boolean")a(o,i?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof i}`)})},_e=e=>{let t=be(),r=t.stackSave();try{let a=t.PTR_SIZE,n=t.stackAlloc(2*a);t._OrtGetLastError(n,n+a);let i=Number(t.getValue(n,a===4?"i32":"i64")),o=t.getValue(n+a,"*"),u=o?t.UTF8ToString(o):"";throw new Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${u}`)}finally{t.stackRestore(r)}}}),cp,r_=L(()=>{Zt(),gn(),cp=e=>{let t=be(),r=0,a=[],n=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)n.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)n.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(n.terminate=!1);let i=0;return(e==null?void 0:e.tag)!==void 0&&(i=at(e.tag,a)),r=t._OrtCreateRunOptions(n.logSeverityLevel,n.logVerbosityLevel,!!n.terminate,i),r===0&&_e("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&oi(e.extra,"",new WeakSet,(o,u)=>{let p=at(o,a),d=at(u,a);t._OrtAddRunConfigEntry(r,p,d)!==0&&_e(`Can't set a run config entry: ${o} - ${u}.`)}),[r,a]}catch(i){throw r!==0&&t._OrtReleaseRunOptions(r),a.forEach(o=>t._free(o)),i}}}),fo,ho,mo,cr,go,fp,i_=L(()=>{Zt(),gn(),fo=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},ho=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},mo=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},cr=(e,t,r,a)=>{let n=at(t,a),i=at(r,a);be()._OrtAddSessionConfigEntry(e,n,i)!==0&&_e(`Can't set a session config entry: ${t} - ${r}.`)},go=async(e,t,r)=>{for(let a of t){let n=typeof a=="string"?a:a.name,i=[];switch(n){case"webnn":if(n="WEBNN",typeof a!="string"){let f=a==null?void 0:a.deviceType;f&&cr(e,"deviceType",f,r)}break;case"webgpu":if(n="JS",typeof a!="string"){let f=a;if(f!=null&&f.preferredLayout){if(f.preferredLayout!=="NCHW"&&f.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${f.preferredLayout}`);cr(e,"preferredLayout",f.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${n}`)}let o=at(n,r),u=i.length,p=0,d=0;if(u>0){p=be()._malloc(u*be().PTR_SIZE),r.push(p),d=be()._malloc(u*be().PTR_SIZE),r.push(d);for(let f=0;f<u;f++)be().setValue(p+f*be().PTR_SIZE,i[f][0],"*"),be().setValue(d+f*be().PTR_SIZE,i[f][1],"*")}await be()._OrtAppendExecutionProvider(e,o,p,d,u)!==0&&_e(`Can't append execution provider: ${n}.`)}},fp=async e=>{let t=be(),r=0,a=[],n=e||{};mo(n);try{let i=fo(n.graphOptimizationLevel??"all"),o=ho(n.executionMode??"sequential"),u=typeof n.logId=="string"?at(n.logId,a):0,p=n.logSeverityLevel??2;if(!Number.isInteger(p)||p<0||p>4)throw new Error(`log severity level is not valid: ${p}`);let d=n.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let f=typeof n.optimizedModelFilePath=="string"?at(n.optimizedModelFilePath,a):0;if(r=t._OrtCreateSessionOptions(i,!!n.enableCpuMemArena,!!n.enableMemPattern,o,!!n.enableProfiling,0,u,p,d,f),r===0&&_e("Can't create session options."),n.executionProviders&&await go(r,n.executionProviders,a),n.enableGraphCapture!==void 0){if(typeof n.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${n.enableGraphCapture}`);cr(r,"enableGraphCapture",n.enableGraphCapture.toString(),a)}if(n.freeDimensionOverrides)for(let[h,g]of Object.entries(n.freeDimensionOverrides)){if(typeof h!="string")throw new Error(`free dimension override name must be a string: ${h}`);if(typeof g!="number"||!Number.isInteger(g)||g<0)throw new Error(`free dimension override value must be a non-negative integer: ${g}`);let y=at(h,a);t._OrtAddFreeDimensionOverride(r,y,g)!==0&&_e(`Can't set a free dimension override: ${h} - ${g}.`)}return n.extra!==void 0&&oi(n.extra,"",new WeakSet,(h,g)=>{cr(r,h,g,a)}),[r,a]}catch(i){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&_e("Can't release session options."),a.forEach(o=>t._free(o)),i}}}),Lt,_t,Vt,mi,ui,_n,yn,Fa,ie=L(()=>{Lt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},_t=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Vt=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],a=typeof t=="number"?t:t.reduce((n,i)=>n*i,1);return r>0?Math.ceil(a*r):void 0},mi=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},ui=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},_n=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",yn=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Fa=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),bn,hp=L(()=>{fn(),bn=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),a=r?parseInt(r,10):0;if(a<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),i;try{i=new ArrayBuffer(a)}catch(u){if(u instanceof RangeError){let p=Math.ceil(a/65536);i=new WebAssembly.Memory({initial:p,maximum:p}).buffer}else throw u}let o=0;for(;;){let{done:u,value:p}=await n.read();if(u)break;let d=p.byteLength;new Uint8Array(i,o,d).set(p),o+=d}return new Uint8Array(i,0,a)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),_o,yo,bo,wo,wn,vo,pe,yt=L(()=>{ie(),_o=["V","I","W","E","F"],yo=(e,t)=>{console.log(`[${_o[e]},${new Date().toISOString()}]${t}`)},wn=(e,t)=>{bo=e,wo=t},vo=(e,t)=>{let r=ui(e),a=ui(bo);r>=a&&yo(r,typeof t=="function"?t():t)},pe=(...e)=>{wo&&vo(...e)}}),$o,rr,M,li,mp,gp,_p,se=L(()=>{$o=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},rr=class{static calcShape(e,t,r=!1){let a=e.length,n=t.length;if(a===0)return t;if(n===0)return e;let i=Math.max(e.length,t.length),o=new Array(i);if(r){if(a<2||n<2)return;let u=$o.calcMatMulShape([e[a-2],e[a-1]],[t[n-2],t[n-1]]);if(u===void 0)return;[o[i-2],o[i-1]]=u}for(let u=r?3:1;u<=i;u++){let p=a-u<0?1:e[a-u],d=n-u<0?1:t[n-u];if(p!==d&&p>1&&d>1)return;let f=Math.max(p,d);if(p&&d)o[i-u]=Math.max(p,d);else{if(f>1)return;o[i-u]=0}}return o}static isValidBroadcast(e,t){let r=e.length,a=t.length;if(r>a)return!1;for(let n=1;n<=r;n++)if(e[r-n]!==1&&e[r-n]!==t[a-n])return!1;return!0}},M=class ai{static size(t){return ai.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let a=t.length;if(a===0)return[];let n=new Array(a),i=a-1;for(;i>=0;){if(t[i]%r===0){n[i]=t[i]/r;break}if(r%t[i]!==0)throw new Error("cannot convert shape");n[i]=1,r/=t[i],i--}for(i--;i>=0;i--)n[i]=t[i];return n}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return ai.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return ai.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,a){let n=1;for(let i=r;i<a;i++){if(t[i]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");n*=Number(t[i])}return n}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let a=new Array(r);a[r-1]=1,a[r-2]=t[r-1];for(let n=r-3;n>=0;--n)a[n]=a[n+1]*t[n+1];return a}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(a=>this.normalizeAxis(a,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(a=>t[a]):t.slice().reverse()}static padShape(t,r){let a=t.length;return t.map((n,i)=>n+r[i]+r[i+a])}static areEqual(t,r){return t.length!==r.length?!1:t.every((a,n)=>a===r[n])}},li=class Tr{static adjustPoolAttributes(t,r,a,n,i,o){if(!t&&a.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let u=0;u<r.length-2;u++)u>=a.length?a.push(r[u+2]):a[u]=r[u+2];for(let u=0;u<a.length;u++)if(u<n.length){if(n[u]<0)throw new Error("strides should be greater than or equal to 1")}else n.push(1);for(let u=0;u<a.length;u++)if(u<i.length){if(i[u]<0)throw new Error("dilations should be greater than or equal to 1")}else i.push(1);for(let u=0;u<a.length*2;u++)if(u<o.length){if(o[u]<0)throw new Error("pad should be greater than or equal to 1")}else o.push(0);for(let u=0;u<a.length;u++){if(a[u]<=0)throw new Error("kernel shapes need to be greater than 0");if(o[u]>=a[u]||o[u+a.length]>=a[u])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,a,n,i,o,u){if(u){if(i.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let p=0;p<t.length-2;p++)Tr.adjustPadAndReturnShape(t[p+(o?1:2)],r[p],a[p],n[p],i,p,p+t.length-2,u)}}static computePoolOutputShape(t,r,a,n,i,o,u){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let p=[r[0],r[1]];return Tr.computeShapeHelper(t,r,p,a,n,i,o,u),p}static computeConvOutputShape(t,r,a,n,i,o,u){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let p=[t[0],r[0]];return Tr.computeShapeHelper(!1,t,p,a,n,i,o,u),p}static computeShapeHelper(t,r,a,n,i,o,u,p){if(t)for(let d=0;d<r.length-2;d++)a.push(1);else for(let d=0;d<r.length-2;d++)a.push(Tr.adjustPadAndReturnShape(r[d+2],n[d],i[d],o[d],u,d,d+r.length-2,p))}static adjustPadAndReturnShape(t,r,a,n,i,o,u,p){let d=a*(n-1)+1;if(p&&p!=="NOTSET")switch(p){case"VALID":return i[o]=0,i[u]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(a!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let f=((t+r-1)/r-1)*r+n-t;return i[o]=Math.floor(p==="SAME_LOWER"?(f+1)/2:f/2),i[u]=f-i[o],Math.floor((t+f-n)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+i[o]+i[u]-d)/r+1)}},mp=class{static getShapeOfGemmResult(e,t,r,a,n){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let i,o,u;t?(i=e[1],o=e[0]):(i=e[0],o=e[1]);let p=-1;if(a?(u=r[0],p=1):(u=r[1],p=0),r[p]!==o)throw new Error("dimension mismatch");if(i<=0||u<=0||o<=0)throw new Error("invalid shape specified");if(n&&!rr.isValidBroadcast(n,[i,u]))throw new Error("gemm: invalid bias shape for broadcast");return[i,u,o]}},gp=-34028234663852886e22,_p=34028234663852886e22}),vn,yp=L(()=>{ie(),vn=(e,t)=>new(mi(t))(e)}),aa,Ka,na,xo,sa,To,oa,ua,la,Co,bp,a_=L(()=>{ie(),yt(),aa=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Ka=(e,t)=>{if(t==="int32")return e;let r=aa.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let a=r/8;if(e.byteLength%a!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${a}.`);let n=e.byteLength/a,i=new(mi(t))(e.buffer,e.byteOffset,n);switch(t){case"int64":case"uint64":{let o=new Int32Array(n);for(let u=0;u<n;u++){let p=i[u];if(p>2147483647n||p<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");o[u]=Number(p)}return new Uint8Array(o.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&i.some(u=>u>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let o=Int32Array.from(i,Number);return new Uint8Array(o.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},na=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,a=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let n=BigInt64Array.from(a,BigInt);return new Uint8Array(n.buffer)}case"uint64":{if(a.some(i=>i<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let n=BigUint64Array.from(a,BigInt);return new Uint8Array(n.buffer)}case"int8":{if(a.some(i=>i<-128||i>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let n=Int8Array.from(a,Number);return new Uint8Array(n.buffer)}case"uint8":{if(a.some(n=>n<0||n>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(a,Number)}case"uint32":{if(a.some(i=>i<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let n=Uint32Array.from(a,Number);return new Uint8Array(n.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},xo=1,sa=()=>xo++,To=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),oa=(e,t)=>{let r=aa.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((a,n)=>a*n)*r/8):0},ua=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:a,dataType:n,shape:i,fallbackDataType:o}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=a,this.dataType=n,this.tensorShape=i,this.fallbackDataType=o}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return oa(this.dataType,this.tensorShape)}destroy(){pe("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=na(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return r.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((a,n)=>a===r[n])}setIsDataConverted(e){this.isDataConverted=e}},la=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,a){let n=this.tensorManager.getMLContext(e),i;if(!n.opSupportLimits().input.dataTypes.includes(t)){if(i=To.get(t),!i||!n.opSupportLimits().input.dataTypes.includes(i))throw new Error(`WebNN backend does not support data type: ${t}`);pe("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${i}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(n,t,r))return this.wrapper.tensor;if(a){if(this.wrapper.byteLength!==oa(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,o,!0,!0,i),a&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Ka(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else pe("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,r;if(this.activeUpload){let a=(t=this.wrapper)!=null&&t.isDataConverted?na(this.activeUpload,(r=this.wrapper)==null?void 0:r.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(a):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(a);return}else return a.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Co=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=sa();return this.tensorTrackersById.set(e,new la(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,a,n){pe("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${a}, copyOld: ${n}}`);let i=this.tensorTrackersById.get(t);if(!i)throw new Error("Tensor not found.");return i.ensureTensor(e,r,a,n)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){pe("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,a){let n=this.getMLContext(e),i=sa(),o=new ua({sessionId:e,context:n,tensor:t,dataType:r,shape:a});return this.tensorTrackersById.set(i,new la(this,o)),this.externalTensors.add(o),i}async getCachedTensor(e,t,r,a,n,i,o){let u=this.getMLContext(e);for(let[d,f]of this.freeTensors.entries())if(f.canReuseTensor(u,t,r)){pe("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:""} shape: ${r}`);let h=this.freeTensors.splice(d,1)[0];return h.sessionId=e,h}pe("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:""} shape: ${r}}`);let p=await u.createTensor({dataType:o??t,shape:r,dimensions:r,usage:a,writable:n,readable:i});return new ua({sessionId:e,context:u,tensor:p,dataType:t,shape:r,fallbackDataType:o})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},bp=(...e)=>new Co(...e)}),fr,ko,wp,n_=L(()=>{ie(),Zt(),yp(),a_(),yt(),fr=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),ko=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),a=Object.keys(t).sort();return r.length===a.length&&r.every((n,i)=>n===a[i]&&e[n]===t[n])},wp=class{constructor(e){this.tensorManager=bp(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,wn(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){pe("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){pe("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)pe("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(a=>a.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:a}),a}}else if(e===void 0){let r=this.mlContextCache.findIndex(a=>a.options===void 0&&a.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:a}),a}}let t=this.mlContextCache.findIndex(r=>ko(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let a=this.mlContextCache.findIndex(n=>n.mlContext===t);a!==-1&&this.mlContextCache.splice(a,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){pe("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,a,n){let i=fr.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,i,a,n)}async createTemporaryTensor(e,t,r){pe("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let a=fr.get(t);if(!a)throw new Error(`Unsupported ONNX data type: ${t}`);let n=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,n,a,r,!1);let i=this.temporarySessionTensorIds.get(e);return i?i.push(n):this.temporarySessionTensorIds.set(e,[n]),n}uploadTensor(e,t){if(!be().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");pe("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return vn(r,t)}}registerMLTensor(e,t,r,a){let n=fr.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);let i=this.tensorManager.registerTensor(e,t,n,a);return pe("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${n}, dimensions: ${a}} -> {tensorId: ${i}}`),i}registerMLConstant(e,t,r,a,n,i,o=!1){if(!i)throw new Error("External mounted files are not available.");let u=e;e.startsWith("./")&&(u=e.substring(2));let p=i.get(u);if(!p)throw new Error(`File with name ${u} not found in preloaded files.`);if(t+r>p.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=p.slice(t,t+r).buffer,f;switch(n.dataType){case"float32":f=new Float32Array(d);break;case"float16":f=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(d):new Uint16Array(d);break;case"int32":f=new Int32Array(d);break;case"uint32":f=new Uint32Array(d);break;case"int64":if(o){let h=Ka(new Uint8Array(d),"int64");f=new Int32Array(h.buffer),n.dataType="int32"}else f=new BigInt64Array(d);break;case"uint64":f=new BigUint64Array(d);break;case"int8":f=new Int8Array(d);break;case"int4":case"uint4":case"uint8":f=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${n.dataType} in creating WebNN Constant from external data.`)}return pe("verbose",()=>`[WebNN] registerMLConstant {dataType: ${n.dataType}, shape: ${n.shape}}} ${o?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),a.constant(n,f)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let a=this.mlContextBySessionId.get(e),n=fr.get(Lt(t));return typeof n>"u"?!1:r?!!(a!=null&&a.opSupportLimits().input.dataTypes.includes(n)):!!(a!=null&&a.opSupportLimits().output.dataTypes.includes(n))}flush(){}}}),$n=L(()=>{}),da,Fr,Kr,So,Io,pa,Za,Eo,vp,s_=L(()=>{yt(),$n(),da=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Fr=[],Kr=e=>Math.ceil(Number(e)/16)*16,So=e=>{for(let t=0;t<Fr.length;t++){let r=Fr[t];if(e<=r)return r}return Math.ceil(e/16)*16},Io=1,pa=()=>Io++,Za=async(e,t,r,a)=>{let n=Kr(r),i=e.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,i,0,n),e.flush(),await i.mapAsync(GPUMapMode.READ);let u=i.getMappedRange();if(a){let p=a();return p.set(new Uint8Array(u,0,r)),p}else return new Uint8Array(u.slice(0,r))}finally{i.destroy()}},Eo=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of da)Fr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,a=t.byteOffset,n=t.byteLength,i=Kr(n),o=this.storageCache.get(e);if(!o)throw new Error("gpu data for uploading does not exist");if(Number(o.originalSize)!==n)throw new Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${n}`);let u=this.backend.device.createBuffer({mappedAtCreation:!0,size:i,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),p=u.getMappedRange();new Uint8Array(p).set(new Uint8Array(r,a,n)),u.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(u,0,o.gpuData.buffer,0,i),this.backend.device.queue.submit([d.finish()]),u.destroy(),pe("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let a=this.storageCache.get(t);if(!a)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==a.originalSize)throw new Error("inconsistent source and destination gpu data size");let n=Kr(r.originalSize),i=this.backend.getCommandEncoder();this.backend.endComputePass(),i.copyBufferToBuffer(r.gpuData.buffer,0,a.gpuData.buffer,0,n)}registerExternalBuffer(e,t,r){let a;if(r){if(a=r[0],e===r[1])return pe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, buffer is the same, skip.`),a;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else a=pa();return this.storageCache.set(a,{gpuData:{id:a,type:0,buffer:e},originalSize:t}),pe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, registered.`),a}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),pe("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=So(e),a,n=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,i=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||i){let u=(n?this.freeBuffers:this.freeUniformBuffers).get(r);u?u.length>0?a=u.pop():a=this.backend.device.createBuffer({size:r,usage:t}):a=this.backend.device.createBuffer({size:r,usage:t})}else a=this.backend.device.createBuffer({size:r,usage:t});let o={id:pa(),type:0,buffer:a};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(e)}),pe("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return pe("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await Za(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=da.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(pe("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},vp=(...e)=>new Eo(...e)}),zo,he,Ce=L(()=>{zo=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},he=e=>new zo(e)}),ir,Zr,ze,Me,ee,Te,Ya,tr,Et,J,hr,D,X,$p,xn,Ao,xp,oe=L(()=>{ie(),se(),ir=64,Zr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},ze=(e,t=1)=>{let r=Zr(e,t);return typeof r=="string"?r:r[0]},Me=(e,t=1)=>{let r=Zr(e,t);return typeof r=="string"?r:r[1]},ee=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:M.computeStrides(r)})}),t},Te=e=>e%4===0?4:e%2===0?2:1,Ya=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,tr=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,Et=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,J=(e,t,r,a)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?a==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:a==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,hr=(e,t,r,a,n)=>{let i=typeof r=="number",o=i?r:r.length,u=[...new Array(o).keys()],p=o<2?"u32":o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,d=Zr(t,n),f=typeof d=="string"?d:d[1],h=typeof d=="string"?d:d[0],g={indices:p,value:f,storage:h,tensor:t},y=O=>typeof O=="string"?O:`${O}u`,_={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},w=i?"uniforms.":"",x=`${w}${e}_shape`,$=`${w}${e}_strides`,v="";for(let O=0;O<o-1;O++)v+=`
    let dim${O} = current / ${J($,O,o)};
    let rest${O} = current % ${J($,O,o)};
    indices[${O}] = dim${O};
    current = rest${O};
    `;v+=`indices[${o-1}] = current;`;let C=o<2?"":`
  fn o2i_${e}(offset: u32) -> ${g.indices} {
    var indices: ${g.indices};
    var current = offset;
    ${v}
    return indices;
  }`,k=O=>(_.offsetToIndices=!0,o<2?O:`o2i_${e}(${O})`),S=[];if(o>=2)for(let O=o-1;O>=0;O--)S.push(`${J($,O,o)} * (indices[${O}])`);let I=o<2?"":`
  fn i2o_${e}(indices: ${g.indices}) -> u32 {
    return ${S.join("+")};
  }`,E=O=>(_.indicesToOffset=!0,o<2?O:`i2o_${e}(${O})`),A=(...O)=>o===0?"0u":`${g.indices}(${O.map(y).join(",")})`,R=(O,q)=>o<2?`${O}`:`${J(O,q,o)}`,W=(O,q,j)=>o<2?`${O}=${j};`:`${J(O,q,o)}=${j};`,F={},H=(O,q)=>{_.broadcastedIndicesToOffset=!0;let j=`${q.name}broadcastedIndicesTo${e}Offset`;if(j in F)return`${j}(${O})`;let Q=[];for(let ye=o-1;ye>=0;ye--){let ke=q.indicesGet("outputIndices",ye+q.rank-o);Q.push(`${R($,ye)} * (${ke} % ${R(x,ye)})`)}return F[j]=`fn ${j}(outputIndices: ${q.type.indices}) -> u32 {
             return ${Q.length>0?Q.join("+"):"0u"};
           }`,`${j}(${O})`},G=(O,q)=>(()=>{if(g.storage===g.value)return`${e}[${O}]=${q};`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`${e}[${O}]=vec2<u32>(u32(${q}), select(0u, 0xFFFFFFFFu, ${q} < 0));`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`${e}[${O}]=vec2<u32>(u32(${q}), 0u);`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`${e}[${O}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${q}));`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),ue=O=>(()=>{if(g.storage===g.value)return`${e}[${O}]`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`i32(${e}[${O}].x)`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`u32(${e}[${O}].x)`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${O}] & 0xFFu), bool(${e}[${O}] & 0xFF00u), bool(${e}[${O}] & 0xFF0000u), bool(${e}[${O}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),ae=o<2?"":`
  fn get_${e}ByIndices(indices: ${g.indices}) -> ${f} {
    return ${ue(`i2o_${e}(indices)`)};
  }`,K=o<2?"":(()=>{let O=u.map(j=>`d${j}: u32`).join(", "),q=u.map(j=>`d${j}`).join(", ");return`
  fn get_${e}(${O}) -> ${f} {
    return get_${e}ByIndices(${A(q)});
  }`})(),ne=(...O)=>{if(O.length!==o)throw new Error(`indices length must be ${o}`);let q=O.map(y).join(",");return o===0?ue("0u"):o===1?ue(q[0]):(_.get=!0,_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}(${q})`)},Z=O=>o<2?ue(O):(_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}ByIndices(${O})`),te=o<2?"":`
  fn set_${e}ByIndices(indices: ${g.indices}, value: ${f}) {
    ${G(`i2o_${e}(indices)`,"value")}
  }`,me=o<2?"":(()=>{let O=u.map(j=>`d${j}: u32`).join(", "),q=u.map(j=>`d${j}`).join(", ");return`
  fn set_${e}(${O}, value: ${f}) {
    set_${e}ByIndices(${A(q)}, value);
  }`})();return{impl:()=>{let O=[],q=!1;return _.offsetToIndices&&(O.push(C),q=!0),_.indicesToOffset&&(O.push(I),q=!0),_.broadcastedIndicesToOffset&&(Object.values(F).forEach(j=>O.push(j)),q=!0),_.set&&(O.push(me),q=!0),_.setByIndices&&(O.push(te),q=!0),_.get&&(O.push(K),q=!0),_.getByIndices&&(O.push(ae),q=!0),!i&&q&&O.unshift(`const ${x} = ${g.indices}(${r.join(",")});`,`const ${$} = ${g.indices}(${M.computeStrides(r).join(",")});`),O.join(`
`)},type:g,offsetToIndices:k,indicesToOffset:E,broadcastedIndicesToOffset:H,indices:A,indicesGet:R,indicesSet:W,set:(...O)=>{if(O.length!==o+1)throw new Error(`indices length must be ${o}`);let q=O[o];if(typeof q!="string")throw new Error("value must be string");let j=O.slice(0,o).map(y).join(",");return o===0?G("0u",q):o===1?G(j[0],q):(_.set=!0,_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}(${j}, ${q})`)},setByOffset:G,setByIndices:(O,q)=>o<2?G(O,q):(_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}ByIndices(${O}, ${q});`),get:ne,getByOffset:ue,getByIndices:Z,usage:a,name:e,strides:$,shape:x,rank:o}},D=(e,t,r,a=1)=>hr(e,t,r,"input",a),X=(e,t,r,a=1)=>hr(e,t,r,"output",a),$p=(e,t,r)=>hr(e,t,r,"atomicOutput",1),xn=(e,t,r,a=1)=>hr(e,t,r,"internal",a),Ao=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=ir){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],a=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||a>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*a>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,i=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,o=n?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*a}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${a})
  fn main(${i}) {
    ${o}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",a=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${a}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:a}of this.uniforms)if(a&&a>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(a/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(a/4)}>`);else{let n=a==null||a===1?r:`vec${a}<${r}>`;e.push(`${t}:${n}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},xp=(e,t)=>new Ao(e,t)}),Oo,ca,Ro,Bo,Mo,No,Ze,Tp,Cp,At=L(()=>{ie(),se(),Ce(),oe(),Oo=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},ca=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Ro=(e,t)=>M.sortBasedOnPerm(e,ca(e.length,t)),Bo=(e,t,r,a)=>{let n=`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let i=0;i<t;++i)n+=`a[${e[i]}]=i[${i}];`;return n+="return a;}"},Mo=(e,t)=>{let r=[],a=[];for(let n=0;n<e.length;++n)e[n]!==1&&r.push(e[n]),e[t[n]]!==1&&a.push(t[n]);return{newShape:r,newPerm:a}},No=(e,t)=>{let r=0;for(let a=0;a<e.length;++a)if(t[e[a]]!==1){if(e[a]<r)return!1;r=e[a]}return!0},Ze=(e,t)=>{let r=e.dataType,a=e.dims.length,n=ca(a,t),i=Ro(e.dims,n),o=e.dims,u=i,p=a<2||No(n,e.dims),d;if(p)return d=_=>{let w=D("input",r,o,4),x=X("output",r,u,4);return`
  ${_.registerUniform("output_size","u32").declareVariables(w,x)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=M.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64/4)},programUniforms:[{type:12,data:Math.ceil(_/4)}]}},getShaderSource:d};let{newShape:f,newPerm:h}=Mo(e.dims,n),g=M.areEqual(h,[2,3,1]),y=M.areEqual(h,[3,1,2]);if(f.length===2||g||y){o=g?[f[0],f[1]*f[2]]:y?[f[0]*f[1],f[2]]:f,u=[o[1],o[0]];let _=16;return d=w=>{let x=D("a",r,o.length),$=X("output",r,u.length);return`
  ${w.registerUniform("output_size","u32").declareVariables(x,$)}
  var<workgroup> tile : array<array<${$.type.value}, ${_+1}>, ${_}>;
  ${w.mainStart([_,_,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${_} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${_}u + local_id.x;
    let input_row = workgroup_id_x * ${_}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${x.getByIndices(`${x.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${_}u + local_id.x;
    let output_row = workgroup_id_y * ${_}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${$.setByIndices(`${$.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=M.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(u[1]/_),y:Math.ceil(u[0]/_)},programUniforms:[{type:12,data:w},...ee(o,u)]}},getShaderSource:d}}return d=_=>{let w=D("a",r,o.length),x=X("output",r,u.length);return`
  ${_.registerUniform("output_size","u32").declareVariables(w,x)}

  ${Bo(n,a,w,x)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${x.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${x.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let _=M.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...ee(o,u)]}},getShaderSource:d}},Tp=(e,t)=>{Oo(e.inputs,t.perm),e.compute(Ze(e.inputs[0],t.perm))},Cp=e=>he({perm:e.perm})}),Do,Po,Uo,qo,Wo,Lo,Vo,Go,jo,Ho,Qe,kp,Sp,Ip,Ep,zp,Ap,Op,Rp,Bp,Mp,o_=L(()=>{ie(),se(),oe(),Tn(),At(),Do={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Po={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Uo={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},qo={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Wo=(e,t)=>{let r=[];for(let a=t-e;a<t;++a)r.push(a);return r},Lo=(e,t)=>{let r=[],a=e.length;for(let i=0;i<a;i++)t.indexOf(i)===-1&&r.push(e[i]);let n=t.map(i=>e[i]);return[r,n]},Vo=(e,t)=>{let r=e.length+t.length,a=[],n=0;for(let i=0;i<r;i++)t.indexOf(i)===-1?a.push(e[n++]):a.push(1);return a},Go=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},jo=(e,t)=>{let r=[];if(!Go(e,t)){for(let a=0;a<t;++a)e.indexOf(a)===-1&&r.push(a);e.forEach(a=>r.push(a))}return r},Ho=(e,t,r,a,n,i,o)=>{let u=r[0].dims,p=M.size(i),d=M.size(o),f=D("_A",r[0].dataType,u),h=X("output",n,i),g=64;p===1&&(g=256);let y=`
          var<workgroup> aBestValues : array<f32, ${g}>;
       `,_=w=>`
        ${w.registerUniform("reduceSize","u32").declareVariables(f,h)}
        ${y}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${w.mainStart(g)}

          let outputIndex = global_idx / ${g};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Uo[a]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${g}) {
           let candidate = f32(${f.getByOffset("offset + k")});
           bestValue = ${Do[a]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${g}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Po[a]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${h.setByOffset("outputIndex",`${a==="mean"?`${h.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${h.type.storage}(${qo[a]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${g}`,inputDependencies:["type"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:i,dataType:n}],dispatchGroup:{x:p},programUniforms:[{type:12,data:d}]})}},Qe=(e,t,r,a)=>{let n=e.inputs.length===1?r:Xa(e.inputs,r),i=n.axes;i.length===0&&!n.noopWithEmptyAxes&&(i=e.inputs[0].dims.map((y,_)=>_));let o=M.normalizeAxes(i,e.inputs[0].dims.length),u=o,p=e.inputs[0],d=jo(u,e.inputs[0].dims.length);d.length>0&&(p=e.compute(Ze(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],u=Wo(u.length,p.dims.length));let[f,h]=Lo(p.dims,u),g=f;n.keepDims&&(g=Vo(f,o)),e.compute(Ho(t,n.cacheKey,[p],a,e.inputs[0].dataType,g,h),{inputs:[p]})},kp=(e,t)=>{Qe(e,"ReduceMeanShared",t,"mean")},Sp=(e,t)=>{Qe(e,"ReduceL1Shared",t,"l1")},Ip=(e,t)=>{Qe(e,"ReduceL2Shared",t,"l2")},Ep=(e,t)=>{Qe(e,"ReduceLogSumExpShared",t,"logSumExp")},zp=(e,t)=>{Qe(e,"ReduceMaxShared",t,"max")},Ap=(e,t)=>{Qe(e,"ReduceMinShared",t,"min")},Op=(e,t)=>{Qe(e,"ReduceProdShared",t,"prod")},Rp=(e,t)=>{Qe(e,"ReduceSumShared",t,"sum")},Bp=(e,t)=>{Qe(e,"ReduceSumSquareShared",t,"sumSquare")},Mp=(e,t)=>{Qe(e,"ReduceLogSumShared",t,"logSum")}}),Je,Fo,di,Xa,et,Ko,Zo,Yo,Xo,Qo,Jo,eu,tu,ru,iu,tt,Np,Dp,Pp,Up,qp,Wp,Lp,Vp,Gp,jp,Tn=L(()=>{ie(),se(),Ce(),oe(),o_(),Je=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Fo=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],di=(e,t,r,a,n,i,o=!1,u=!1)=>{let p=[],d=r[0].dims,f=d.length,h=M.normalizeAxes(n,f),g=!u&&h.length===0;d.forEach((w,x)=>{g||h.indexOf(x)>=0?o&&p.push(1):p.push(w)});let y=p.length,_=M.size(p);return{name:e,shaderCache:t,getShaderSource:w=>{let x=[],$=D("_A",r[0].dataType,f),v=X("output",i,y),C=a($,v,h),k=C[2];for(let S=0,I=0;S<f;S++)g||h.indexOf(S)>=0?(o&&I++,k=`for(var j${S}: u32 = 0; j${S} < ${d[S]}; j${S}++) {
                  ${C[2].includes("last_index")?`let last_index = j${S};`:""}
                  ${$.indicesSet("input_indices",S,`j${S}`)}
                  ${k}
                }`):(x.push(`${$.indicesSet("input_indices",S,v.indicesGet("output_indices",I))};`),I++);return`

        ${w.registerUniform("output_size","u32").declareVariables($,v)}

        ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${$.type.indices};
          let output_indices = ${v.offsetToIndices("global_idx")};

          ${x.join(`
`)}
          ${C[0]}       // init ops for reduce max/min
          ${C[1]}
          ${k}
          ${C[3]}
          ${C.length===4?v.setByOffset("global_idx","value"):C.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:p,dataType:i}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...ee(d,p)]})}},Xa=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),he({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},et=(e,t,r,a)=>{let n=e.inputs,i=n.length===1?r:Xa(n,r);e.compute(di(t,{hint:i.cacheKey,inputDependencies:["rank"]},[n[0]],i.noopWithEmptyAxes&&i.axes.length===0?Fo:a,i.axes,n[0].dataType,i.keepDims,i.noopWithEmptyAxes),{inputs:[0]})},Ko=(e,t)=>{Je(e.inputs),et(e,"ReduceLogSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Zo=(e,t)=>{Je(e.inputs),et(e,"ReduceL1",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Yo=(e,t)=>{Je(e.inputs),et(e,"ReduceL2",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Xo=(e,t)=>{Je(e.inputs),et(e,"ReduceLogSumExp",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Qo=(e,t)=>{Je(e.inputs),et(e,"ReduceMax",t,(r,a,n)=>{let i=[];for(let o=0;o<r.rank;o++)(n.indexOf(o)>=0||n.length===0)&&i.push(r.indicesSet("input_indices",o,0));return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},Jo=(e,t)=>{Je(e.inputs),et(e,"ReduceMean",t,(r,a,n)=>{let i=1;for(let o=0;o<r.rank;o++)(n.indexOf(o)>=0||n.length===0)&&(i*=e.inputs[0].dims[o]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${a.type.value}(sum / ${i});`]})},eu=(e,t)=>{Je(e.inputs),et(e,"ReduceMin",t,(r,a,n)=>{let i=[];for(let o=0;o<r.rank;o++)(n.indexOf(o)>=0||n.length===0)&&i.push(`input_indices[${o}] = 0;`);return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},tu=(e,t)=>{Je(e.inputs),et(e,"ReduceProd",t,(r,a)=>[`var value = ${a.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},ru=(e,t)=>{Je(e.inputs),et(e,"ReduceSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},iu=(e,t)=>{Je(e.inputs),et(e,"ReduceSumSquare",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},tt=(e,t,r)=>{if(t.length===0)return r;let a=1,n=1;for(let i=0;i<t.length;i++)t.indexOf(i)===-1?a*=e[i]:n*=e[i];return n<32&&a>1024},Np=(e,t)=>{tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Jo(e,t):kp(e,t)},Dp=(e,t)=>{tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Zo(e,t):Sp(e,t)},Pp=(e,t)=>{tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Yo(e,t):Ip(e,t)},Up=(e,t)=>{tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Xo(e,t):Ep(e,t)},qp=(e,t)=>{tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Qo(e,t):zp(e,t)},Wp=(e,t)=>{tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?eu(e,t):Ap(e,t)},Lp=(e,t)=>{tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?tu(e,t):Op(e,t)},Vp=(e,t)=>{tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ru(e,t):Rp(e,t)},Gp=(e,t)=>{tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?iu(e,t):Bp(e,t)},jp=(e,t)=>{tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ko(e,t):Mp(e,t)}}),fa,Hp,Fp,Qa,u_=L(()=>{ie(),Ce(),Tn(),fa=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Hp=(e,t)=>{fa(e.inputs);let r=(a,n,i)=>{let o=[];for(let u=0;u<a.rank;u++)(i.indexOf(u)>=0||i.length===0)&&o.push(`input_indices[${u}] = 0;`);return[`${o.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(di("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Fp=(e,t)=>{fa(e.inputs);let r=(a,n,i)=>{let o=[];for(let u=0;u<a.rank;u++)(i.indexOf(u)>=0||i.length===0)&&o.push(`input_indices[${u}] = 0;`);return[`${o.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(di("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Qa=e=>he(e)}),au,Yr,nu,su,ou,Ar,uu,Kp,Cn=L(()=>{ie(),se(),$n(),oe(),au=(e,t)=>{let r=e[0],a=e[1],n=e[2],i=e[3],o=e[4],u=e[5];if(o&&u)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let p=r.dims[0],d=r.dims[1],f=r.dims[2];if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(a.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(a.dims[0]!==f)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==a.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let h=n.dims[0]/3,g=h,y=g;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let C of t.qkvHiddenSizes)if(C%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");h=t.qkvHiddenSizes[0],g=t.qkvHiddenSizes[1],y=t.qkvHiddenSizes[2]}let _=d;if(h!==g)throw new Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==h+g+y)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let w=0;if(o){if(g!==y)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(o.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(o.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(o.dims[1]!==p)throw new Error('Input "past" second dimension must be batch_size');if(o.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(o.dims[4]!==g/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(w=o.dims[3])}let x=_+w,$=-1,v=0;if(i)throw new Error("Mask not supported");if(o)throw new Error("past is not supported");if(u){if(u.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==p||u.dims[1]!==t.numHeads||u.dims[2]!==d||u.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:p,sequenceLength:d,pastSequenceLength:w,kvSequenceLength:_,totalSequenceLength:x,maxSequenceLength:$,inputHiddenSize:f,hiddenSize:h,vHiddenSize:y,headSize:Math.floor(h/t.numHeads),vHeadSize:Math.floor(y/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:v,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Yr=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,nu=(e,t,r,a,n,i,o,u)=>{let p=Te(o?1:i),d=64,f=i/p;f<d&&(d=32);let h=Math.ceil(i/p/d),g=[{type:12,data:t},{type:12,data:r},{type:12,data:a},{type:12,data:n},{type:12,data:f},{type:12,data:h}],y=ze(e.dataType,p),_=Me(1,p),w=["type"];o&&w.push("type"),u&&w.push("type");let x=$=>{let v=X("x",e.dataType,e.dims,p),C=[v],k=o?D("seq_lens",o.dataType,o.dims):void 0;k&&C.push(k);let S=u?D("total_sequence_length_input",u.dataType,u.dims):void 0;S&&C.push(S);let I=Me(e.dataType),E=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${$.registerUniforms(E).declareVariables(...C)}
  ${$.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Yr(k,S,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${o?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${_}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${_}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(p){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${p}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${_}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${_}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(p){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${p}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${v.type.value}(${I}(1.0) / ${I}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${_}(x[offset + i]);
        x[offset + i] = ${v.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${o?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${v.type.value}(${I}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${y};${p}`,inputDependencies:w},getShaderSource:x,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:n,z:t*r},programUniforms:g})}},su=(e,t,r,a,n,i,o,u,p)=>{let d=o+i.kvSequenceLength,f=[i.batchSize,i.numHeads,i.sequenceLength,d],h=e>1&&a,g=i.kvNumHeads?i.kvNumHeads:i.numHeads,y=h?[i.batchSize,g,d,i.headSize]:void 0,_=i.nReps?i.nReps:1,w=i.scale===0?1/Math.sqrt(i.headSize):i.scale,x=Te(i.headSize),$=i.headSize/x,v=12,C={x:Math.ceil(d/v),y:Math.ceil(i.sequenceLength/v),z:i.batchSize*i.numHeads},k=[{type:12,data:i.sequenceLength},{type:12,data:$},{type:12,data:d},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:1,data:w},{type:12,data:o},{type:12,data:i.kvSequenceLength},{type:12,data:_}],S=h&&a&&M.size(a.dims)>0,I=["type","type"];S&&I.push("type"),n&&I.push("type"),u&&I.push("type"),p&&I.push("type");let E=[{dims:f,dataType:t.dataType,gpuDataType:0}];h&&E.push({dims:y,dataType:t.dataType,gpuDataType:0});let A=R=>{let W=D("q",t.dataType,t.dims,x),F=D("key",r.dataType,r.dims,x),H=[W,F];if(S){let te=D("past_key",a.dataType,a.dims,x);H.push(te)}n&&H.push(D("attention_bias",n.dataType,n.dims));let G=u?D("seq_lens",u.dataType,u.dims):void 0;G&&H.push(G);let ue=p?D("total_sequence_length_input",p.dataType,p.dims):void 0;ue&&H.push(ue);let ae=X("output",t.dataType,f),K=[ae];h&&K.push(X("present_key",t.dataType,y,x));let ne=Me(1,x),Z=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${v}u;

  var<workgroup> tileQ: array<${W.type.storage}, ${v*v}>;
  var<workgroup> tileK: array<${W.type.storage}, ${v*v}>;
  ${R.registerUniforms(Z).declareVariables(...H,...K)}
  ${R.mainStart([v,v,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${_===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${_===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Yr(G,ue,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${S&&h?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${h?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${ne}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${S&&h?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${h?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${ne}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(x){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${x}`)}})()};
        output[outputIdx] = ${ae.type.value} (sum * uniforms.alpha) + ${n?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${x};${n!==void 0};${a!==void 0};${e}`,inputDependencies:I},getRunData:()=>({outputs:E,dispatchGroup:C,programUniforms:k}),getShaderSource:A}},ou=(e,t,r,a,n,i,o=void 0,u=void 0)=>{let p=i+n.kvSequenceLength,d=n.nReps?n.nReps:1,f=n.vHiddenSize*d,h=e>1&&a,g=n.kvNumHeads?n.kvNumHeads:n.numHeads,y=h?[n.batchSize,g,p,n.headSize]:void 0,_=[n.batchSize,n.sequenceLength,f],w=12,x={x:Math.ceil(n.vHeadSize/w),y:Math.ceil(n.sequenceLength/w),z:n.batchSize*n.numHeads},$=[{type:12,data:n.sequenceLength},{type:12,data:p},{type:12,data:n.vHeadSize},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:f},{type:12,data:i},{type:12,data:n.kvSequenceLength},{type:12,data:d}],v=h&&a&&M.size(a.dims)>0,C=["type","type"];v&&C.push("type"),o&&C.push("type"),u&&C.push("type");let k=[{dims:_,dataType:t.dataType,gpuDataType:0}];h&&k.push({dims:y,dataType:t.dataType,gpuDataType:0});let S=I=>{let E=D("probs",t.dataType,t.dims),A=D("v",r.dataType,r.dims),R=[E,A];v&&R.push(D("past_value",a.dataType,a.dims));let W=o?D("seq_lens",o.dataType,o.dims):void 0;o&&R.push(W);let F=u?D("total_sequence_length_input",u.dataType,u.dims):void 0;u&&R.push(F);let H=[X("output",t.dataType,_)];h&&H.push(X("present_value",t.dataType,y));let G=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;
  var<workgroup> tileQ: array<${E.type.value}, ${w*w}>;
  var<workgroup> tileV: array<${E.type.value}, ${w*w}>;
  ${I.registerUniforms(G).declareVariables(...R,...H)}
  ${I.mainStart([w,w,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Yr(W,F,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${v&&h?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${h?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${E.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${v&&h?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${h?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${a!==void 0};${e}`,inputDependencies:C},getRunData:()=>({outputs:k,dispatchGroup:x,programUniforms:$}),getShaderSource:S}},Ar=(e,t,r,a,n,i,o,u,p,d,f=void 0,h=void 0)=>{let g=Math.min(e.outputCount,1+(o?1:0)+(u?1:0)),y=g>1?d.pastSequenceLength:0,_=y+d.kvSequenceLength,w=p&&M.size(p.dims)>0?p:void 0,x=[t,r];g>1&&o&&M.size(o.dims)>0&&x.push(o),w&&x.push(w),f&&x.push(f),h&&x.push(h);let $=e.compute(su(g,t,r,o,w,d,y,f,h),{inputs:x,outputs:g>1?[-1,1]:[-1]})[0];e.compute(nu($,d.batchSize,d.numHeads,y,d.sequenceLength,_,f,h),{inputs:f&&h?[$,f,h]:[$],outputs:[]});let v=[$,a];g>1&&u&&M.size(u.dims)>0&&v.push(u),f&&v.push(f),h&&v.push(h),e.compute(ou(g,$,a,u,d,y,f,h),{inputs:v,outputs:g>1?[0,2]:[0]})},uu=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],a=t.sequenceLength,n=t.inputHiddenSize,i=t.headSize,o=12,u={x:Math.ceil(t.headSize/o),y:Math.ceil(t.sequenceLength/o),z:t.batchSize*t.numHeads},p=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:a},{type:12,data:n},{type:12,data:i},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],f=h=>{let g=X("output_q",p[0].dataType,r),y=X("output_k",p[0].dataType,r),_=X("output_v",p[0].dataType,r),w=D("input",p[0].dataType,p[0].dims),x=D("weight",p[1].dataType,p[1].dims),$=D("bias",p[2].dataType,p[2].dims),v=w.type.storage,C=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${o}u;
  var<workgroup> tileInput: array<${v}, ${o*o}>;
  var<workgroup> tileWeightQ: array<${v}, ${o*o}>;
  var<workgroup> tileWeightK: array<${v}, ${o*o}>;
  var<workgroup> tileWeightV: array<${v}, ${o*o}>;
  ${h.registerUniforms(C).declareVariables(w,x,$,g,y,_)}
  ${h.mainStart([o,o,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${v}(0);
    var valueK = ${v}(0);
    var valueV = ${v}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:u,programUniforms:d}),getShaderSource:f},{inputs:p,outputs:[-1,-1,-1]})},Kp=(e,t)=>{let r=au(e.inputs,t),[a,n,i]=uu(e,r);return Ar(e,a,n,i,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),lu,du,pu,Zp,l_=L(()=>{Xe(),ie(),se(),Ce(),oe(),lu=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(a,n,i)=>{let o=n.length;if(o!==a.length)throw new Error(`${i}: num dimensions != ${o}`);n.forEach((u,p)=>{if(u!==a[p])throw new Error(`${i}: dim[${p}] do not match`)})};if(e[0].dims.length>1){let a=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,a,"Invalid input scale"),r(e[2].dims,a,"Invalid input B"),r(e[3].dims,a,"Invalid input mean"),r(e[4].dims,a,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},du=(e,t)=>{let{epsilon:r,spatial:a,format:n}=t,i=e[0].dims,o=a?Te(i[i.length-1]):1,u=n==="NHWC"&&i.length>1?o:1,p=M.size(i)/o,d=a,f=d?i.length:i,h=D("x",e[0].dataType,e[0].dims,o),g=D("scale",e[1].dataType,e[1].dims,u),y=D("bias",e[2].dataType,e[2].dims,u),_=D("inputMean",e[3].dataType,e[3].dims,u),w=D("inputVar",e[4].dataType,e[4].dims,u),x=X("y",e[0].dataType,f,o),$=()=>{let C="";if(a)C=`let cOffset = ${i.length===1?"0u":n==="NHWC"?`outputIndices[${i.length-1}] / ${o}`:"outputIndices[1]"};`;else if(n==="NCHW")C=`
            ${x.indicesSet("outputIndices","0","0")}
            let cOffset = ${x.indicesToOffset("outputIndices")};`;else{C=`var cIndices = ${g.type.indices}(0);
                       cIndices[0] = outputIndices[${i.length-1}];`;for(let k=1;k<g.rank;k++)C+=`cIndices[${k}] = outputIndices[${k}];`;C+=`let cOffset = ${g.indicesToOffset("cIndices")};`}return C},v=C=>`
  const epsilon = ${r};
  ${C.registerUniform("outputSize","u32").declareVariables(h,g,y,_,w,x)}
  ${C.mainStart()}
  ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${x.offsetToIndices(`global_idx * ${o}`)};
    ${$()}
    let scale = ${g.getByOffset("cOffset")};
    let bias = ${y.getByOffset("cOffset")};
    let inputMean = ${_.getByOffset("cOffset")};
    let inputVar = ${w.getByOffset("cOffset")};
    let x = ${h.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${x.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${a}_${o}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:v,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:d?[{type:12,data:p},...ee(i)]:[{type:12,data:p}]})}},pu=e=>he(e),Zp=(e,t)=>{let{inputs:r,outputCount:a}=e,n=pu({...t,outputCount:a});if(ve.webgpu.validateInputContent&&lu(r,n),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(du(r,n))}}),cu,fu,Yp,d_=L(()=>{se(),oe(),cu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},fu=e=>{let t=e[0].dims,r=e[0].dims[2],a=M.size(t)/4,n=e[0].dataType,i=D("input",n,t,4),o=D("bias",n,[r],4),u=D("residual",n,t,4),p=X("output",n,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(i,o,u,p)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let value = ${i.getByOffset("global_idx")}
      + ${o.getByOffset("global_idx % channels")} + ${u.getByOffset("global_idx")};
    ${p.setByOffset("global_idx","value")}
  }`}},Yp=e=>{cu(e.inputs),e.compute(fu(e.inputs))}}),hu,ce,Xp,Qp,Jp,ec,tc,rc,ic,ac,nc,mu,sc,oc,uc,lc,Cr,dc,ni,pc,cc,fc,hc,mc,gc,_c,yc,bc,wc,vc,$c,xc,Tc,Cc,kc,ha,Sc,Ja,en,Ic,Ec,zc,gu,_u,Ac,kn=L(()=>{ie(),se(),Ce(),oe(),hu=(e,t,r,a,n,i,o)=>{let u=Math.ceil(t/4),p="";typeof n=="string"?p=`${n}(a)`:p=n("a");let d=D("inputData",r,[u],4),f=X("outputData",a,[u],4),h=[{name:"vec_size",type:"u32"}];return o&&h.push(...o),`
      ${e.registerUniforms(h).declareVariables(d,f)}

  ${i??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${f.setByOffset("global_idx",p)}
  }`},ce=(e,t,r,a,n,i=e.dataType,o,u)=>{let p=[{type:12,data:Math.ceil(M.size(e.dims)/4)}];return o&&p.push(...o),{name:t,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:d=>hu(d,M.size(e.dims),e.dataType,i,r,a,u),getRunData:d=>({outputs:[{dims:e.dims,dataType:i}],dispatchGroup:{x:Math.ceil(M.size(d[0].dims)/64/4)},programUniforms:p})}},Xp=e=>{e.compute(ce(e.inputs[0],"Abs","abs"))},Qp=e=>{e.compute(ce(e.inputs[0],"Acos","acos"))},Jp=e=>{e.compute(ce(e.inputs[0],"Acosh","acosh"))},ec=e=>{e.compute(ce(e.inputs[0],"Asin","asin"))},tc=e=>{e.compute(ce(e.inputs[0],"Asinh","asinh"))},rc=e=>{e.compute(ce(e.inputs[0],"Atan","atan"))},ic=e=>{e.compute(ce(e.inputs[0],"Atanh","atanh"))},ac=e=>he(e),nc=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ce(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},mu=e=>{let t,r,a=e.length>=2&&e[1].data!==0,n=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=a?e[1].getFloat32Array()[0]:-34028234663852886e22,r=n?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=a?e[1].getUint16Array()[0]:64511,r=n?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return he({min:t,max:r})},sc=(e,t)=>{let r=t||mu(e.inputs),a=Me(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Clip",n=>`clamp(${n}, vec4<${a}>(uniforms.min), vec4<${a}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:a},{name:"max",type:a}]),{inputs:[0]})},oc=e=>{e.compute(ce(e.inputs[0],"Ceil","ceil"))},uc=e=>{e.compute(ce(e.inputs[0],"Cos","cos"))},lc=e=>{e.compute(ce(e.inputs[0],"Cosh","cosh"))},Cr=e=>he(e),dc=(e,t)=>{let r=Me(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Elu",a=>`elu_vf32(${a})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},ni=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,pc=e=>{let t=Me(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,ni(t)))},cc=e=>{e.compute(ce(e.inputs[0],"Exp","exp"))},fc=e=>{e.compute(ce(e.inputs[0],"Floor","floor"))},hc=e=>{let t=Me(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,ni(t)))},mc=(e,t)=>{let r=Me(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"LeakyRelu",a=>`select(leaky_relu_alpha_ * ${a}, ${a}, ${a} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},gc=e=>{e.compute(ce(e.inputs[0],"Not",t=>`!${t}`))},_c=e=>{e.compute(ce(e.inputs[0],"Neg",t=>`-${t}`))},yc=e=>{e.compute(ce(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},bc=e=>{let t=Me(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},wc=e=>{e.compute(ce(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},vc=e=>he(e),$c=(e,t)=>{let r=Me(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"HardSigmoid",a=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${a} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},xc=e=>{e.compute(ce(e.inputs[0],"Sin","sin"))},Tc=e=>{e.compute(ce(e.inputs[0],"Sinh","sinh"))},Cc=e=>{e.compute(ce(e.inputs[0],"Sqrt","sqrt"))},kc=e=>{e.compute(ce(e.inputs[0],"Tan","tan"))},ha=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Sc=e=>{e.compute(ce(e.inputs[0],"Tanh",ha))},Ja=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${ha("v")};
}
`,en=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Ic=e=>{let t=Me(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"FastGelu",en,Ja(t),void 0,e.inputs[0].dataType))},Ec=(e,t)=>{let r=Me(e.inputs[0].dataType);return e.compute(ce(e.inputs[0],"ThresholdedRelu",a=>`select(vec4<${r}>(0.0), ${a}, ${a} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},zc=e=>{e.compute(ce(e.inputs[0],"Log","log"))},gu=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,_u=e=>`quick_gelu_impl(${e})`,Ac=(e,t)=>{let r=Me(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"QuickGelu",_u,gu(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),yu,bu,Oc,p_=L(()=>{se(),oe(),kn(),yu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},bu=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=D("input",e[0].dataType,e[0].dims,4),a=D("bias",e[0].dataType,[e[0].dims[2]],4),n=X("output",e[0].dataType,t,4),i=M.size(t)/4,o=ze(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:u=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${u.declareVariables(r,a,n)}

  ${ni(o)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${n.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Oc=e=>{yu(e.inputs),e.compute(bu(e.inputs))}}),wu,vu,rt,Rc,Bc,Mc,Nc,Dc,Pc,Uc,qc,Wc,Lc,c_=L(()=>{ie(),se(),oe(),wu=(e,t,r,a,n,i,o,u,p,d,f,h)=>{let g,y;typeof u=="string"?g=y=(v,C)=>`${u}((${v}),(${C}))`:typeof u=="function"?g=y=u:(g=u.scalar,y=u.vector);let _=X("outputData",f,a.length,4),w=D("aData",p,t.length,4),x=D("bData",d,r.length,4),$;if(n)if(i){let v=M.size(t)===1,C=M.size(r)===1,k=t.length>0&&t[t.length-1]%4===0,S=r.length>0&&r[r.length-1]%4===0;v||C?$=_.setByOffset("global_idx",y(v?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"),C?`${x.type.value}(${x.getByOffset("0")}.x)`:x.getByOffset("global_idx"))):$=`
            let outputIndices = ${_.offsetToIndices("global_idx * 4u")};
            let offsetA = ${w.broadcastedIndicesToOffset("outputIndices",_)};
            let offsetB = ${x.broadcastedIndicesToOffset("outputIndices",_)};
            ${_.setByOffset("global_idx",y(o||k?w.getByOffset("offsetA / 4u"):`${w.type.value}(${w.getByOffset("offsetA / 4u")}[offsetA % 4u])`,o||S?x.getByOffset("offsetB / 4u"):`${x.type.value}(${x.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else $=_.setByOffset("global_idx",y(w.getByOffset("global_idx"),x.getByOffset("global_idx")));else{if(!i)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let v=(C,k,S="")=>{let I=`aData[indexA${k}][componentA${k}]`,E=`bData[indexB${k}][componentB${k}]`;return`
            let outputIndices${k} = ${_.offsetToIndices(`global_idx * 4u + ${k}u`)};
            let offsetA${k} = ${w.broadcastedIndicesToOffset(`outputIndices${k}`,_)};
            let offsetB${k} = ${x.broadcastedIndicesToOffset(`outputIndices${k}`,_)};
            let indexA${k} = offsetA${k} / 4u;
            let indexB${k} = offsetB${k} / 4u;
            let componentA${k} = offsetA${k} % 4u;
            let componentB${k} = offsetB${k} % 4u;
            ${C}[${k}] = ${S}(${g(I,E)});
          `};f===9?$=`
            var data = vec4<u32>(0);
            ${v("data",0,"u32")}
            ${v("data",1,"u32")}
            ${v("data",2,"u32")}
            ${v("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:$=`
            ${v("outputData[global_idx]",0)}
            ${v("outputData[global_idx]",1)}
            ${v("outputData[global_idx]",2)}
            ${v("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(w,x,_)}

        ${h??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${$}
      }`},vu=(e,t,r,a,n,i,o=r.dataType)=>{let u=r.dims.map(w=>Number(w)??1),p=a.dims.map(w=>Number(w)??1),d=!M.areEqual(u,p),f=u,h=M.size(u),g=!1,y=!1,_=[d];if(d){let w=rr.calcShape(u,p,!1);if(!w)throw new Error("Can't perform binary op on the given tensors");f=w.slice(),h=M.size(f);let x=M.size(u)===1,$=M.size(p)===1,v=u.length>0&&u[u.length-1]%4===0,C=p.length>0&&p[p.length-1]%4===0;_.push(x),_.push($),_.push(v),_.push(C);let k=1;for(let S=1;S<f.length;S++){let I=u[u.length-S],E=p[p.length-S];if(I===E)k*=I;else break}k%4===0?(y=!0,g=!0):(x||$||v||C)&&(g=!0)}else g=!0;return _.push(g),{name:e,shaderCache:{hint:t+_.map(w=>w.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:w=>wu(w,u,p,f,g,d,y,n,r.dataType,a.dataType,o,i),getRunData:()=>({outputs:[{dims:f,dataType:o}],dispatchGroup:{x:Math.ceil(h/64/4)},programUniforms:[{type:12,data:Math.ceil(M.size(f)/4)},...ee(u,p,f)]})}},rt=(e,t,r,a,n,i)=>{e.compute(vu(t,n??"",e.inputs[0],e.inputs[1],r,a,i))},Rc=e=>{rt(e,"Add",(t,r)=>`${t}+${r}`)},Bc=e=>{rt(e,"Div",(t,r)=>`${t}/${r}`)},Mc=e=>{rt(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Nc=e=>{rt(e,"Mul",(t,r)=>`${t}*${r}`)},Dc=e=>{let t=D("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;rt(e,"Pow",{scalar:(r,a)=>`pow_custom(${r},${a})`,vector:(r,a)=>`pow_vector_custom(${r},${a})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Pc=e=>{rt(e,"Sub",(t,r)=>`${t}-${r}`)},Uc=e=>{rt(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},qc=e=>{rt(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Wc=e=>{rt(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},Lc=e=>{rt(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),$u,xu,Tu,Cu,Vc,Gc,f_=L(()=>{ie(),se(),Ce(),oe(),$u=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,a=e[r],n=a.dataType,i=a.dims.length;e.forEach((o,u)=>{if(u!==r){if(o.dataType!==n)throw new Error("input tensors should be one type");if(o.dims.length!==i)throw new Error("input tensors should have the same shape");o.dims.forEach((p,d)=>{if(d!==t&&p!==a.dims[d])throw new Error("non concat dimensions must match")})}})},xu=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Tu=(e,t)=>{let r=e.length,a=[];for(let n=0;n<r;++n){let i=t.setByOffset("global_idx",e[n].getByIndices("indices"));r===1?a.push(i):n===0?a.push(`if (inputIndex == ${n}u) { ${i} }`):n===r-1?a.push(`else { ${i} }`):a.push(`else if (inputIndex == ${n}) { ${i} }`)}return a.join(`
`)},Cu=(e,t,r,a)=>{let n=M.size(r),i=new Array(e.length),o=new Array(e.length),u=0,p=[],d=[],f=[{type:12,data:n}];for(let w=0;w<e.length;++w)u+=e[w].dims[t],i[w]=u,d.push(e[w].dims.length),o[w]=D(`input${w}`,a,d[w]),p.push("rank"),f.push({type:12,data:i[w]});for(let w=0;w<e.length;++w)f.push(...ee(e[w].dims));f.push(...ee(r));let h=X("output",a,r.length),g=h.indicesGet("indices",t),y=Array.from(Array(i.length).keys()).map(w=>`uniforms.sizeInConcatAxis${w}`).join(","),_=w=>`

  ${(()=>{w.registerUniform("outputSize","u32");for(let x=0;x<e.length;x++)w.registerUniform(`sizeInConcatAxis${x}`,"u32");return w.declareVariables(...o,h)})()}

  ${xu(i.length,y)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${h.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${g});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${i.length}u>(${y});
      ${g} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Tu(o,h)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:r,dataType:a}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:f}),getShaderSource:_}},Vc=(e,t)=>{let r=e.inputs,a=r[0].dims,n=M.normalizeAxis(t.axis,a.length);$u(r,n);let i=a.slice();i[n]=r.reduce((u,p)=>u+(p.dims.length>n?p.dims[n]:0),0);let o=r.filter(u=>M.size(u.dims)>0);e.compute(Cu(o,n,i,r[0].dataType),{inputs:o})},Gc=e=>he({axis:e.axis})}),Ht,Ft,Kt,Sn,Yt=L(()=>{ie(),se(),Ht=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Ft=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Kt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Sn=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,a]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:a}}else if(t==="Clip"){let[r,a]=(e==null?void 0:e.activation_params)||[gp,_p];return{activation:t,clipMax:a,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Re,jc,In=L(()=>{Re=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},jc=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Hc,h_=L(()=>{Hc=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Er,En,zn=L(()=>{ie(),se(),oe(),Yt(),Er=(e,t,r,a,n)=>{let i=a-r;return`
      ${Array.from({length:r}).map((o,u)=>`
      if (${J(t.shape,u,t.rank)} != 1) {
        ${t.indicesSet(e,u,J(n,u+i,a))}
      } else {
        ${t.indicesSet(e,u,0)}
      }`).join("")}
`},En=(e,t,r,a,n=!1,i)=>{let o=e[0].dims,u=e[1].dims,p=o[o.length-2],d=u[u.length-1],f=o[o.length-1],h=Te(d),g=Te(f),y=Te(p),_=M.size(r)/h/y,w=e.length>2,x=a?a.slice(0,-2):r.slice(0,-2),$=[M.size(x),p,d],v=[{type:12,data:_},{type:12,data:p},{type:12,data:d},{type:12,data:f}];Ft(t,v),v.push(...ee(x,o,u)),w&&v.push(...ee(e[2].dims)),v.push(...ee($));let C=k=>{let S=xn("batch_dims",e[0].dataType,x.length),I=D("a",e[0].dataType,o.length,g),E=D("b",e[1].dataType,u.length,h),A=X("output",e[0].dataType,$.length,h),R=ze(A.type.tensor),W=Ht(t,A.type.value,R),F=[I,E],H="";if(w){let ae=n?h:1;F.push(D("bias",e[2].dataType,e[2].dims.length,ae)),H=`${n?`value += bias[col / ${ae}];`:`value += ${A.type.value}(bias[row + i]);`}`}let G=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Kt(t,G);let ue=()=>{let ae=`var a_data: ${I.type.value};`;for(let K=0;K<g;K++)ae+=`
              let b_data${K} = b[(b_offset + (k + ${K}) * uniforms.N + col) / ${h}];`;for(let K=0;K<y;K++){ae+=`a_data = a[(a_offset + (row + ${K}) * uniforms.K + k) / ${g}];`;for(let ne=0;ne<g;ne++)ae+=`
            values[${K}] = fma(${E.type.value}(a_data${g===1?"":`[${ne}]`}), b_data${ne}, values[${K}]);
`}return ae};return`
  ${k.registerUniforms(G).registerInternalVariables(S).declareVariables(...F,A)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${h})) * ${h};
    var index1 = global_idx / (uniforms.N / ${h});
    let stride1 = uniforms.M / ${y};
    let row = (index1 % stride1) * ${y};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${S.offsetToIndices("batch")};`}

    var a_indices: ${I.type.indices};
    ${Er("a_indices",I,I.rank-2,S.rank,"batch_indices")}
    ${I.indicesSet("a_indices",I.rank-2,0)}
    ${I.indicesSet("a_indices",I.rank-1,0)}
    let a_offset = ${I.indicesToOffset("a_indices")};

    var b_indices: ${E.type.indices};
    ${Er("b_indices",E,E.rank-2,S.rank,"batch_indices")}
    ${E.indicesSet("b_indices",E.rank-2,0)}
    ${E.indicesSet("b_indices",E.rank-1,0)}
    let b_offset = ${E.indicesToOffset("b_indices")};
    var values: array<${A.type.value}, ${y}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${g}) {
      ${ue()}
    }
    for (var i = 0u; i < ${y}u; i++) {
      var value = values[i];
      ${H}
      ${W}
      let cur_indices = ${A.type.indices}(batch, row + i, col);
      let offset = ${A.indicesToOffset("cur_indices")};
      ${A.setByOffset(`offset / ${h}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${h};${g};${y};${n}`,inputDependencies:w?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:v}),getShaderSource:C}}}),ku,Su,tn,ma,Iu,rn,Eu,pi,An=L(()=>{ie(),se(),oe(),Yt(),zn(),In(),ku=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Su=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,tn=(e,t,r="f32",a,n=!1,i=32,o=!1,u=32)=>{let p=t[1]*e[1],d=t[0]*e[0],f=n?p:i,h=n?i:p,g=f/t[0],y=i/t[1];if(!((n&&g===4&&e[1]===4||!n&&(g===3||g===4))&&f%t[0]===0&&i%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${n} is true, innerElementSize ${g} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${g} must be 3 or 4.
  tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}. tileInner ${i} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${g}<${r}>, ${f/g}>, ${h}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${i}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${g};
const tileInner = ${i};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${o?"0":"i32(globalId.z)"};
  ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${p};

  let num_tiles = ${o?`${Math.ceil(u/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${o?`i32(globalId.z) * ${u}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${y};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${ku(n,a)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${a?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${g===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Su(n,g)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},ma=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Iu=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",rn=(e,t,r="f32",a,n=!1,i=32,o=!1,u=32,p=!1)=>{let d=e[1]*t[1],f=e[0]*t[0],h=n?d:i,g=n?i:d;if(!(g%t[1]===0&&h%t[0]===0&&i%t[1]===0))throw new Error(`tileAHight ${g} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}, tileInner ${i} must be divisible by workgroupSize[1]${t[1]}`);let y=g/t[1],_=h/t[0],w=i/t[1],x=p?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${f};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${g}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
          ${ma(n,a)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${i}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${a?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${y};
let tileColA = i32(localId.x) * ${_};
let tileRowB = i32(localId.y) * ${w};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${_}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${ma(n,a)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${w}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${a?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Iu(n)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${h}>, ${g}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${f}>, ${i}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${i};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${o?"0":"i32(globalId.z)"};
    ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${o?`${Math.ceil(u/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${o?`i32(globalId.z) * ${u}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${x}
  }
`},Eu=(e,t,r,a,n=!1)=>{let[i,o,u,p]=a,d=ze(a[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${Re(e,d)} {
      var value = ${Re(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${Er("aIndices",o,o.rank-2,i.rank,"batchIndices")}
        ${o.indicesSet("aIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("aIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${Re(e,d)} {
      var value = ${Re(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${u.type.indices};
        ${Er("bIndices",u,u.rank-2,i.rank,"batchIndices")}
        ${u.indicesSet("bIndices",u.rank-2,"u32(row)")}
        ${u.indicesSet("bIndices",u.rank-1,"u32(colIn)")}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Re(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${n?"bias[colIn]":`${Re(e,d)}(bias[row])`};`:""}
        ${r}
        ${p.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},pi=(e,t,r,a,n=!1,i)=>{let o=e[0].dims,u=e[1].dims,p=o.slice(0,-2),d=u.slice(0,-2),f=a?a.slice(0,-2):r.slice(0,-2),h=M.size(f),g=o[o.length-2],y=o[o.length-1],_=u[u.length-1],w=y%4===0&&_%4===0,x=g<=8?[4,1,1]:[4,4,1],$=[8,8,1],v=[Math.ceil(_/$[0]/x[0]),Math.ceil(g/$[1]/x[1]),Math.ceil(h/$[2]/x[2])],C=w?4:1,k=[...p,g,y/C],S=k.length,I=[...d,y,_/C],E=I.length,A=[h,g,_/C],R=[{type:6,data:g},{type:6,data:_},{type:6,data:y}];Ft(t,R),R.push(...ee(f,k,I));let W=["rank","rank"],F=e.length>2;F&&(R.push(...ee(e[2].dims)),W.push("rank")),R.push(...ee(A));let H=G=>{let ue=f.length,ae=xn("batchDims",e[0].dataType,ue,1),K=ze(e[0].dataType),ne=D("a",e[0].dataType,S,C),Z=D("b",e[1].dataType,E,C),te=X("result",e[0].dataType,A.length,C),me=[ne,Z];if(F){let ye=n?C:1;me.push(D("bias",e[2].dataType,e[2].dims.length,ye))}let O=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Kt(t,O);let q=ze(te.type.tensor),j=Ht(t,te.type.value,q),Q=Eu(C,F,j,[ae,ne,Z,te],n);return`
  ${G.registerUniforms(O).registerInternalVariables(ae).declareVariables(...me,te)}
  ${Q}
  ${w?tn(x,$,K,ae):rn(x,$,K,ae)}
                   `};return{name:"MatMul",shaderCache:{hint:`${x};${t.activation};${w};${n}`,inputDependencies:W},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:R}),getShaderSource:H}}}),zu,Fc,m_=L(()=>{ie(),yt(),oe(),Yt(),In(),h_(),An(),zu=(e,t,r,a,n=!1,i,o=4,u=4,p=4,d="f32")=>{let f=R=>{switch(R){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},h=R=>{switch(R){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},g=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,y=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,_=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",w=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",x=e?"row":"col",$=e?"col":"row",v=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${x} / outWidth;
    let outCol = ${x} % outWidth;

    let WRow = ${$} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${$} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${$} % inChannels;
    var resData = ${Re(o,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${_} && xCol >= 0 && xCol < ${w}) {
      ${g}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${f(o)}
    }
    return resData;`,C=e?t&&a?`
    let col = colIn * ${o};
    ${v}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${v}
    }
    return ${Re(o,d)}(0.0);`:a&&r?`
    let col = colIn * ${o};
    ${v}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${v}
    }
    return ${Re(o,d)}(0.0);`,k=e?a&&r?h(u):`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${h(u)}
    }
    return ${Re(u,d)}(0.0);`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${h(u)}
    }
    return ${Re(u,d)}(0.0);`,S=Re(p,d),I=Re(e?o:u,d),E=Re(e?u:o,d),A=Ht(i,S,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${I} {
      ${e?C:k}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${E} {
      ${e?k:C}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${S}) {
      let col = colIn * ${p};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${y}
      ${jc(n)}
      ${A}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Fc=(e,t,r,a,n,i,o,u,p)=>{let d=t.format==="NHWC",f=d?e[0].dims[3]:e[0].dims[1],h=r[0],g=d?r[2]:r[3],y=d?r[1]:r[2],_=d?r[3]:r[1],w=d&&(f%4===0||f%3===0)&&_%4===0,x=d?_:g*y,$=d?g*y:_,v=[8,8,1],C=a<=8?[4,1,1]:[4,4,1],k=[Math.ceil(x/v[0]/C[0]),Math.ceil($/v[1]/C[1]),Math.ceil(h/v[2]/C[2])];pe("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${k}`);let S=w?d&&f%4!==0?3:4:1,I=v[1]*C[1],E=v[0]*C[0],A=Math.max(v[0]*S,v[1]),R=a%I===0,W=n%E===0,F=i%A===0,H=w?[S,4,4]:[1,1,1],G=[{type:6,data:a},{type:6,data:n},{type:6,data:i},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Ft(t,G),G.push(...ee(e[0].dims,e[1].dims));let ue=["rank","rank"];o&&(G.push(...ee(e[2].dims)),ue.push("rank")),G.push(...ee(r));let ae=K=>{let ne=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Kt(t,ne);let Z=w?4:1,te=ze(e[0].dataType),me=`
      fn setOutputAtIndex(flatIndex : i32, value : ${w?`vec4<${te}>`:te}) {
        result[flatIndex] = ${w?`vec4<${te}>`:te}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${w?`vec4<${te}>`:te}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${w?"/ 4":""}, value);
      }`,O=D("x",e[0].dataType,e[0].dims.length,S===3?1:S),q=D("w",e[1].dataType,e[1].dims.length,Z),j=[O,q],Q=X("result",e[0].dataType,r.length,Z);if(o){let ye=D("bias",e[2].dataType,e[2].dims.length,Z);j.push(ye),me+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${w?`vec4<${te}>`:te} {
          return bias[coords.${d?"w":"y"}${w?"/ 4":""}];
        }`}return`
        ${Hc("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${K.registerUniforms(ne).declareVariables(...j,Q)}
        ${me}
        ${zu(d,R,W,F,o,t,H[0],H[1],H[2],te)}
        ${w?tn(C,v,te,void 0,!d,A):rn(C,v,te,void 0,!d,A,!1,void 0,u)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${S};${w};${R};${W};${F};${I};${E};${A}`,inputDependencies:ue},getRunData:()=>({outputs:[{dims:p?p(r):r,dataType:e[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:G}),getShaderSource:ae}}}),Au,ga,mr,Ou,_a,Ru,Kc,Zc,g_=L(()=>{ie(),yt(),se(),oe(),Yt(),In(),Au=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},ga=e=>typeof e=="number"?[e,e,e]:e,mr=(e,t)=>t<=1?e:e+(e-1)*(t-1),Ou=(e,t,r,a=1)=>{let n=mr(t,a);return Math.floor((e[0]*(r-1)-r+n)/2)},_a=(e,t,r,a,n)=>{n==null&&(n=Ou(e,t[0],a[0]));let i=[0,0,0,r];for(let o=0;o<3;o++)e[o]+2*n>=t[o]&&(i[o]=Math.trunc((e[o]-t[o]+2*n)/a[o]+1));return i},Ru=(e,t,r,a,n,i,o,u,p,d)=>{let f,h,g,y;if(e==="VALID"&&(e=0),typeof e=="number"){f={top:e,bottom:e,left:e,right:e,front:e,back:e};let _=_a([t,r,a,1],[u,p,d],1,[n,i,o],e);h=_[0],g=_[1],y=_[2]}else if(Array.isArray(e)){if(!e.every((w,x,$)=>w===$[0]))throw Error(`Unsupported padding parameter: ${e}`);f={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let _=_a([t,r,a,1],[u,p,d],1,[n,i,o],e[0]);h=_[0],g=_[1],y=_[2]}else if(e==="SAME_UPPER"){h=Math.ceil(t/n),g=Math.ceil(r/i),y=Math.ceil(a/o);let _=(h-1)*n+u-t,w=(g-1)*i+p-r,x=(y-1)*o+d-a,$=Math.floor(_/2),v=_-$,C=Math.floor(w/2),k=w-C,S=Math.floor(x/2),I=x-S;f={top:C,bottom:k,left:S,right:I,front:$,back:v}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:f,outDepth:h,outHeight:g,outWidth:y}},Kc=(e,t,r,a,n,i=!1,o="channelsLast")=>{let u,p,d,f,h;if(o==="channelsLast")[u,p,d,f,h]=e;else if(o==="channelsFirst")[u,h,p,d,f]=e;else throw new Error(`Unknown dataFormat ${o}`);let[g,,y,_,w]=t,[x,$,v]=ga(r),[C,k,S]=ga(a),I=mr(y,C),E=mr(_,k),A=mr(w,S),{padInfo:R,outDepth:W,outHeight:F,outWidth:H}=Ru(n,p,d,f,x,$,v,I,E,A),G=i?g*h:g,ue=[0,0,0,0,0];return o==="channelsFirst"?ue=[u,G,W,F,H]:o==="channelsLast"&&(ue=[u,W,F,H,G]),{batchSize:u,dataFormat:o,inDepth:p,inHeight:d,inWidth:f,inChannels:h,outDepth:W,outHeight:F,outWidth:H,outChannels:G,padInfo:R,strideDepth:x,strideHeight:$,strideWidth:v,filterDepth:y,filterHeight:_,filterWidth:w,effectiveFilterDepth:I,effectiveFilterHeight:E,effectiveFilterWidth:A,dilationDepth:C,dilationHeight:k,dilationWidth:S,inShape:e,outShape:ue,filterShape:t}},Zc=(e,t,r,a,n,i)=>{let o=i==="channelsLast";o?e[0].dims[3]:e[0].dims[1];let u=[64,1,1],p={x:r.map((x,$)=>$)},d=[Math.ceil(Au(p.x.map(x=>r[x]))/u[0]),1,1];pe("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let f=1,h=M.size(r),g=[{type:12,data:h},{type:12,data:a},{type:12,data:n},{type:12,data:t.strides},{type:12,data:t.dilations}];Ft(t,g),g.push(...ee(e[0].dims,e[1].dims));let y=["rank","rank"],_=e.length===3;_&&(g.push(...ee(e[2].dims)),y.push("rank")),g.push(...ee(r));let w=x=>{let $=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:a.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Kt(t,$);let v=1,C=ze(e[0].dataType),k=D("x",e[0].dataType,e[0].dims.length,f),S=D("W",e[1].dataType,e[1].dims.length,v),I=[k,S],E=X("result",e[0].dataType,r.length,v),A="";if(_){let F=D("bias",e[2].dataType,e[2].dims.length,v);I.push(F),A+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${C} {
          return bias[${o?J("coords",4,5):J("coords",1,5)}];
        }`}let R=Re(f,C),W=Ht(t,R,C);return`
            ${A}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${k.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${S.getByIndices("aIndices")};
            }
          ${x.registerUniforms($).declareVariables(...I,E)}
          ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${E.offsetToIndices("global_idx")};
              let batch = ${J("coords",0,k.rank)};
              let d2 = ${o?J("coords",k.rank-1,k.rank):J("coords",1,k.rank)};
              let xFRCCorner = vec3<u32>(${o?J("coords",1,k.rank):J("coords",2,k.rank)},
              ${o?J("coords",2,k.rank):J("coords",3,k.rank)},
              ${o?J("coords",3,k.rank):J("coords",4,k.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?J("uniforms.x_shape",1,k.rank):J("uniforms.x_shape",2,k.rank)};
              let xShapeZ = ${o?J("uniforms.x_shape",2,k.rank):J("uniforms.x_shape",3,k.rank)};
              let xShapeW = ${o?J("uniforms.x_shape",3,k.rank):J("uniforms.x_shape",4,k.rank)};
              let xShapeU = ${o?J("uniforms.x_shape",4,k.rank):J("uniforms.x_shape",1,k.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${o?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${o?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${o?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${o?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${_?"value = value + getBiasByOutputCoords(coords)":""};
              ${W}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${o};${f};${_}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:g}),getShaderSource:w}}}),Yc,Xc,__=L(()=>{ie(),se(),oe(),Yt(),Yc=(e,t,r,a)=>{let n=e.length>2,i=n?"value += b[output_channel];":"",o=e[0].dims,u=e[1].dims,p=t.format==="NHWC",d=p?r[3]:r[1],f=d/t.group,h=p&&f>=4?Te(d):1,g=M.size(r)/h,y=[{type:12,data:g},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:f}];Ft(t,y),y.push(...ee(o,[u[0],u[1],u[2],u[3]/h]));let _=n?["rank","rank","rank"]:["rank","rank"];y.push(...ee([r[0],r[1],r[2],r[3]/h]));let w=x=>{let $=X("output",e[0].dataType,r.length,h),v=ze($.type.tensor),C=Ht(t,$.type.value,v),k=D("x",e[0].dataType,o.length),S=D("w",e[1].dataType,u.length,h),I=[k,S];n&&I.push(D("b",e[2].dataType,e[2].dims,h));let E=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Kt(t,E);let A=p?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${k.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${S.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${k.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${S.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${x.registerUniforms(E).declareVariables(...I,$)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${$.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${p?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${p?1:2}], outputIndices[${p?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${h} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${p?2:1}];

    var value: ${$.type.value} = ${$.type.value}(0);
    ${A}
    ${i}
    ${C}
    ${$.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${h}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:y}),getShaderSource:w}},Xc=(e,t,r,a)=>{let n=e.length>2,i=Te(r[3]),o=Te(r[2]),u=M.size(r)/i/o,p=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/i],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/i],f=[r[0],r[1],r[2],r[3]/i],h=[{type:12,data:u},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Ft(t,h),h.push(...ee(p,d,f));let g=(o-1)*t.strides[1]+d[1],y=_=>{let w=X("output",e[0].dataType,f.length,i),x=ze(w.type.tensor),$=Ht(t,w.type.value,x),v=D("x",e[0].dataType,p.length,i),C=D("w",e[1].dataType,d.length,i),k=[v,C];n&&k.push(D("b",e[2].dataType,e[2].dims,i));let S=n?"value += b[output_channel];":"",I=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Kt(t,I),`
  ${_.registerUniforms(I).declareVariables(...k,w)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${o}u;
    let col = (index1 % width1) * ${o}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${v.type.value}, ${g}>;
    var values: array<${w.type.value}, ${o}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${g}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${v.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${v.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${C.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${o}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${o}u; i++) {
      var value = values[i];
      ${S}
      ${$}
      ${w.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${i};${o};${g};${d[0]};${d[1]}`,inputDependencies:n?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h}),getShaderSource:y}}}),Bu,Xr,Mu,Qr,an,ya,Nu,Du,nn,y_=L(()=>{se(),m_(),g_(),An(),__(),Yt(),zn(),At(),Bu=(e,t,r,a,n,i)=>{let o=e[0],u=e.slice(i?1:2,i?3:4),p=u.length,d=t[0],f=t.slice(2).map((g,y)=>g+(g-1)*(r[y]-1)),h=u.map((g,y)=>g+a[y]+a[y+p]).map((g,y)=>Math.floor((g-f[y]+n[y])/n[y]));return h.splice(0,0,o),h.splice(i?3:1,0,d),h},Xr=[2,3,1,0],Mu=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[1]*t.group;if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Qr=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let i=2;i<t[1].dims.length;++i)r[i-2]===0&&(r[i-2]=t[1].dims[i]);let a=e.pads.slice();li.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,a,e.format==="NHWC",e.autoPad);let n=Object.assign({},e);return Object.assign(n,{kernelShape:r,pads:a}),n},an=e=>{let t=Sn(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],n=e.dilations,i=e.group,o=e.kernel_shape,u=e.pads,p=e.strides,d=e.w_is_const();return{autoPad:a,format:r,dilations:n,group:i,kernelShape:o,pads:u,strides:p,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},ya=(e,t,r,a)=>{let n=r.format==="NHWC",i=Bu(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,n);if(r.group!==1){let I=[t[0]];if(n){let E=e.kernelCustomData.wT??e.compute(Ze(t[1],Xr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=E),I.push(E)}else I.push(t[1]);t.length===3&&I.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&n&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(Xc(I,r,i,a),{inputs:I}):e.compute(Yc(I,r,i,a),{inputs:I});return}let o=t.length===3,u=t[0].dims[n?1:2],p=t[0].dims[n?2:3],d=t[0].dims[n?3:1],f=t[1].dims[2],h=t[1].dims[3],g=i[n?1:2],y=i[n?2:3],_=i[n?3:1],w=n&&f===u&&h===p&&r.pads[0]===0&&r.pads[1]===0;if(w||f===1&&h===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let I=i[0],E,A,R,W=[];if(n){let G=e.kernelCustomData.wT??e.compute(Ze(t[1],Xr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=G),w){let ue=u*p*d;E=t[0].reshape([1,I,ue]),A=G.reshape([1,ue,_]),R=[1,I,_]}else E=t[0].reshape([I,u*p,d]),A=G.reshape([1,d,_]),R=[I,g*y,_];W.push(E),W.push(A)}else E=t[0].reshape([I,d,u*p]),A=t[1].reshape([1,_,d]),R=[I,_,g*y],W.push(A),W.push(E);o&&W.push(t[2]);let F=R[2],H=W[0].dims[W[0].dims.length-1];F<8&&H<8?e.compute(En(W,r,i,R,n,a),{inputs:W}):e.compute(pi(W,r,i,R,n,a),{inputs:W});return}let x=!0,$=e.kernelCustomData.wT??e.compute(Ze(t[1],Xr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=$);let v=[t[0],$];o&&v.push(t[2]);let C=n?g*y:_,k=n?_:g*y,S=f*h*d;e.compute(Fc(v,r,i,C,k,S,o,x,a),{inputs:v})},Nu=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let n=[0,t.pads[0],0,t.pads[1]],i=[1].concat(t.strides),o=[1].concat(t.dilations),u=[1].concat(t.kernelShape),p=Qr({...t,pads:n,strides:i,dilations:o,kernelShape:u},a);ya(e,a,p,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},Du=(e,t,r)=>{let a=r.format==="NHWC"?"channelsLast":"channelsFirst",n=Qr(r,t),i=r.autoPad==="NOTSET"?r.pads:r.autoPad,o=Kc(t[0].dims,t[1].dims,r.strides,r.dilations,i,!1,a);e.compute(Zc(t,n,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],a))},nn=(e,t)=>{if(Mu(e.inputs,t),e.inputs[0].dims.length===3)Nu(e,t);else if(e.inputs[0].dims.length===5)Du(e,e.inputs,t);else{let r=Qr(t,e.inputs);ya(e,e.inputs,r)}}}),Qc,b_=L(()=>{ie(),yt(),se(),oe(),Qc=(e,t,r)=>{let a=e.length>2,n=t.outputShape,i=t.format==="NHWC",o=t.group,u=e[1].dims,p=u[2]/o,d=u[3],f=i?Te(p):1,h=i&&d===1&&p>=4,g=h?Math.floor(p/4)*4:Math.floor(p/f)*f,y=p-g,_=i?Te(d):1,w=i?d===1?f:_:1,x=M.size(n)/_,$=[Math.ceil(x/64),1,1];pe("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${$}`);let v=["rank","rank"],C=[t.strides[0],t.strides[1]],k=[t.kernelShape[i?1:2],t.kernelShape[i?2:3]],S=[t.dilations[0],t.dilations[1]],I=[k[0]+(t.dilations[0]<=1?0:(t.kernelShape[i?1:2]-1)*(t.dilations[0]-1)),k[1]+(t.dilations[1]<=1?0:(t.kernelShape[i?2:3]-1)*(t.dilations[1]-1))],E=[I[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),I[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],A=[{type:12,data:x},{type:12,data:C},{type:12,data:k},{type:12,data:S},{type:12,data:I},{type:6,data:E},{type:12,data:g},{type:12,data:p},{type:12,data:d},...ee(e[0].dims,e[1].dims)];a&&(A.push(...ee(e[2].dims)),v.push("rank")),A.push(...ee(n));let R=W=>{let F=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:C.length},{name:"filter_dims",type:"u32",length:k.length},{name:"dilations",type:"u32",length:k.length},{name:"effective_filter_dims",type:"u32",length:I.length},{name:"pads",type:"i32",length:E.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],H=ze(e[0].dataType),G=i?1:2,ue=i?2:3,ae=i?3:1,K=D("W",e[1].dataType,e[1].dims.length,w),ne=D("Dy",e[0].dataType,e[0].dims.length,f),Z=[ne,K];a&&Z.push(D("bias",e[2].dataType,[n[ae]].length,_));let te=X("result",e[0].dataType,n.length,_),me=()=>{let j="";if(h)f===4?j+=`
        let xValue = ${ne.getByOffset("x_offset")};
        let wValue = ${K.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:f===2?j+=`
          dotProd = dotProd + dot(vec4<${H}>(${ne.getByOffset("x_offset")}, ${ne.getByOffset("x_offset + 1u")}), vec4<${H}>(${K.getByOffset("w_offset")}, ${K.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:f===1&&(j+=`
          dotProd = dotProd + dot(vec4<${H}>(${ne.getByOffset("x_offset")}, ${ne.getByOffset("x_offset + 1u")}, ${ne.getByOffset("x_offset + 2u")}, ${ne.getByOffset("x_offset + 3u")}), vec4<${H}>(${K.getByOffset("w_offset")}, ${K.getByOffset("w_offset + 1u")}, ${K.getByOffset("w_offset + 2u")}, ${K.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(j+=`
                  let xValue = ${i?ne.getByOffset(`${ne.indicesToOffset(`${ne.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${f}`):ne.get("batch","inputChannel","idyR","idyC")};
        `,f===1)j+=`
          let w_offset = ${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${K.getByOffset(`w_offset / ${w}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let Q=0;Q<f;Q++)j+=`
            let wValue${Q} = ${K.getByOffset(`${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${Q}, wOutChannel)`)} / ${w}`)};
            dotProd = dotProd + xValue[${Q}] * wValue${Q};`;return j},O=()=>{if(y===0)return"";if(!h)throw new Error(`packInputAs4 ${h} is not true.`);let j="";if(f===1){j+="dotProd = dotProd";for(let Q=0;Q<y;Q++)j+=`
            + ${ne.getByOffset(`x_offset + ${Q}`)} * ${K.getByOffset(`w_offset + ${Q}`)}`;j+=";"}else if(f===2){if(y!==2)throw new Error(`Invalid inputChannelsRemainder ${y}.`);j+=`
          let xValue = ${ne.getByOffset("x_offset")};
          let wValue = ${K.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return j},q=`
            let outputIndices = ${te.offsetToIndices(`global_idx * ${_}`)};
            let batch = ${te.indicesGet("outputIndices",0)};
            let d1 = ${te.indicesGet("outputIndices",ae)};
            let r = ${te.indicesGet("outputIndices",G)};
            let c = ${te.indicesGet("outputIndices",ue)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${te.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${H}(dyRCorner) + ${H}(wR)) / ${H}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${H}(uniforms.Dy_shape[${G}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${H}(dyCCorner) + ${H}(wC)) / ${H}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${H}(uniforms.Dy_shape[${ue}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${h?`
                var x_offset = ${ne.indicesToOffset(`${ne.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${f};
                var w_offset = ${K.indicesToOffset(`${K.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${w};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${h?4:f}) {
                  ${me()}
                  inputChannel = inputChannel + ${h?4:f};
                }
                ${O()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${a?` + bias[d1 / ${_}]`:""};
            ${te.setByOffset("global_idx","value")};
          `;return`
    ${W.registerUniforms(F).declareVariables(...Z,te)}
      ${W.mainStart()}
      ${W.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${q}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${f}${w}${_}${h}${y}`,inputDependencies:v},getRunData:()=>({dispatchGroup:{x:$[0],y:$[1],z:$[2]},outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],programUniforms:A}),getShaderSource:R}}}),Pu,Uu,qu,ba,Jc,Wu,wa,Lu,ef,w_=L(()=>{b_(),Yt(),At(),Pu=(e,t,r,a,n,i)=>(e-1)*t+r+(a-1)*n+1-i,Uu=(e,t,r,a,n)=>{let i=Math.floor(e/2);t==="SAME_UPPER"?(r[a]=i,r[n]=e-i):t==="SAME_LOWER"&&(r[a]=e-i,r[n]=i)},qu=(e,t,r,a,n,i,o,u,p,d)=>{let f=e.length-2,h=d.length===0;p.length<f&&p.push(...Array(f-p.length).fill(0));let g=e[0],y=t[u?3:1]*n;for(let _=0,w=e.length-f-(u?1:0);_<f;++_,++w){let x=e[w],$=h?x*o[_]:d[_],v=Pu(x,o[_],i[_],t[w],r[_],$);Uu(v,a,i,_,_+f),h&&d.push(o[_]*(x-1)+p[_]+(t[w]-1)*r[_]+1-i[_]-i[_+f])}d.splice(0,0,g),d.splice(u?3:1,0,y)},ba=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((h,g)=>h*g,1)===0){r.length=0;for(let h=2;h<t[1].dims.length;++h)r.push(t[1].dims[h])}let a=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(a?3:1,0,t[1].dims[1]);let n=e.pads.slice(),i=e.outputShape.slice(),o=e.outputPadding.slice(),u=t[0].dims,p=e.dilations.slice();if(p.reduce((h,g)=>h+g,0)===0){let h=t[0].dims.length-2;p=new Array(h).fill(1)}let d=e.strides.slice();if(d.reduce((h,g)=>h+g,0)===0){let h=t[0].dims.length-2;d=new Array(h).fill(1)}qu(u,r,p,e.autoPad,e.group,n,d,a,o,i);let f=Object.assign({},e);return Object.assign(f,{kernelShape:r,pads:n,outputPadding:o,outputShape:i,dilations:p,strides:d}),f},Jc=e=>{let t=Sn(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],n=e.dilations,i=e.group,o=e.kernelShape,u=e.pads,p=e.strides,d=e.wIsConst(),f=e.outputPadding,h=e.outputShape;return{autoPad:a,format:r,dilations:n,group:i,kernelShape:o,outputPadding:f,outputShape:h,pads:u,strides:p,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Wu=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[0];if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.reduce((o,u)=>o+u,0)>0&&t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.reduce((o,u)=>o+u,0)>0&&t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.reduce((o,u)=>o+u,0)>0&&t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.outputPadding.length!==i&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${i}D`);if(t.kernelShape.reduce((o,u)=>o+u,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},wa=(e,t,r,a)=>{let n=e.kernelCustomData.wT??e.compute(Ze(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=n);let i=[t[0],n];t.length===3&&i.push(t[2]),e.compute(Qc(i,r,a),{inputs:i})},Lu=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let n=t.kernelShape;(n.length===0||n[0]===0)&&(n=[e.inputs[1].dims[2]]);let i=t.dilations;(i.length===0||i[0]===0)&&(i=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let u=t.pads;u.length===0&&(u=[0,0]),u=[0,u[0],0,u[1]],o=[1].concat(o),i=[1].concat(i),n=[1].concat(n);let p=t.outputPadding;p=[0].concat(p);let d=ba({...t,pads:u,strides:o,dilations:i,kernelShape:n,outputPadding:p},a);wa(e,a,d,f=>r?[f[0],f[2],f[3]]:[f[0],f[1],f[3]])},ef=(e,t)=>{if(Wu(e.inputs,t),e.inputs[0].dims.length===3)Lu(e,t);else{let r=ba(t,e.inputs);wa(e,e.inputs,r)}}}),Vu,tf,rf,v_=L(()=>{ie(),se(),Ce(),oe(),Vu=(e,t,r,a)=>{let n=M.size(t),i=t.length,o=D("input",e,i),u=X("output",e,i),p=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=M.normalizeAxis(p,i),f=h=>{let g=` i32(${o.indicesGet("inputIndices","uniforms.axis")}) `,y=J("uniforms.input_shape","uniforms.axis",i),_=a.reverse?g+(a.exclusive?" + 1":""):"0",w=a.reverse?y:g+(a.exclusive?"":" + 1");return`
                ${h.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(o,u)}
                ${h.mainStart()}
                  ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${u.offsetToIndices("global_idx")};
                  var sum = ${u.type.value}(0);
                  let first : i32 = ${_};
                  let last : i32 = ${w};
                  for (var i : i32 = first; i < last; i++) {
                    ${o.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${o.getByIndices("inputIndices")};
                  }
                  ${u.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:a.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},{type:12,data:d},...ee(t,t)]}),getShaderSource:f}},tf=(e,t)=>{let r=e.inputs[0].dims,a=e.inputs[0].dataType,n=e.inputs[1];e.compute(Vu(a,r,n,t),{inputs:[0]})},rf=e=>{let t=e.exclusive===1,r=e.reverse===1;return he({exclusive:t,reverse:r})}}),Gu,ju,Hu,af,nf,$_=L(()=>{ie(),se(),Ce(),oe(),Gu=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},ju=(e,t,r,a)=>{let n=[];n.push(`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let i=0;i<t;++i)n.push(r.indicesSet("a",e[i],`i[${i}]`));return n.push("return a;}"),n.join(`
`)},Hu=(e,t)=>{let r,a,n,i,o,u,p=t.format==="NHWC",d=t.blocksize,f=t.mode==="DCR";p?([r,a,n,i]=e.dims,o=f?[r,a,n,d,d,i/d**2]:[r,a,n,i/d**2,d,d],u=f?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,a,n,i]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=f?[r,d,d,i/d**2,a,n]:[r,i/d**2,d,d,a,n],u=f?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let h=e.reshape(o),g=h.dims.length,y=e.dataType,_=D("a",y,g),w=X("output",y,g),x=$=>`
  ${$.registerUniform("output_size","u32").declareVariables(_,w)}

  ${ju(u,g,_,w)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:$=>{let v=p?[r,a*d,n*d,i/d**2]:[r,i/d**2,a*d,n*d],C=M.size(v),k=h.dims,S=M.sortBasedOnPerm(k,u);return{outputs:[{dims:v,dataType:$[0].dataType}],dispatchGroup:{x:Math.ceil(C/64)},programUniforms:[{type:12,data:C},...ee(k,S)]}},getShaderSource:x}},af=(e,t)=>{Gu(e.inputs),e.compute(Hu(e.inputs[0],t))},nf=e=>he({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Jr,gr,va,Fu,Ku,Zu,Yu,$a,Xu,sf,of,x_=L(()=>{ie(),se(),Ce(),oe(),Jr="[a-zA-Z]|\\.\\.\\.",gr="("+Jr+")+",va="^"+gr+"$",Fu="("+gr+",)*"+gr,Ku="^"+Fu+"$",Zu=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Yu=class{constructor(e,t){var n;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,a]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(Ku)))throw new Error("Invalid LHS term");if(r.split(",").forEach((i,o)=>{let u=e[o].dims.slice();if(!i.match(RegExp(va)))throw new Error("Invalid LHS term");let p=this.processTerm(i,!0,u,o);this.lhs.push(p)}),a==="")a+=[...this.symbolToInfo.entries()].filter(([i,o])=>o.count===1||i==="...").map(([i])=>i).join("");else if(!a.match(RegExp(gr)))throw new Error("Invalid RHS");(n=a.match(RegExp(Jr,"g")))==null||n.forEach(i=>{if(i==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let o=this.symbolToInfo.get(i);if(o===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(o.dimValue)}}),this.rhs=this.processTerm(a,!1,this.outputDims)}addSymbol(e,t,r){let a=this.symbolToInfo.get(e);if(a!==void 0){if(a.dimValue!==t&&a.count!==1)throw new Error("Dimension mismatch");a.count++,a.inputIndices.push(r)}else a={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,a)}processTerm(e,t,r,a=-1){let n=r.length,i=!1,o=[],u=0;if(!e.match(RegExp(va))&&!t&&e!=="")throw new Error("Invalid LHS term");let p=e.match(RegExp(Jr,"g")),d=new Zu(a);return p==null||p.forEach((f,h)=>{if(f==="..."){if(i)throw new Error("Only one ellipsis is allowed per input term");i=!0;let g=n-p.length+1;if(g<0)throw new Error("Ellipsis out of bounds");if(o=r.slice(u,u+g),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw new Error("Ellipsis must be specified in the LHS");for(let y=0;y<o.length;y++){let _=String.fromCharCode(48+y);d.addSymbol(_,h+y),this.addSymbol(_,r[u++],a)}}else d.addSymbol(f,h+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(f,r[u++],a)}),d}},$a=e=>e+"_max",Xu=(e,t,r,a)=>{let n=e.map(d=>d.length).map((d,f)=>D(`input${f}`,t,d)),i=M.size(a),o=X("output",t,a.length),u=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),p=d=>{let f=[],h="var prod = 1.0;",g="var sum = 0.0;",y="sum += prod;",_=[],w=[],x=[],$=[],v=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((k,S)=>{var I;if(r.rhs.symbolToIndices.has(S)){let E=(I=r.rhs.symbolToIndices.get(S))==null?void 0:I[0];E!==void 0&&r.lhs.forEach((A,R)=>{if(k.inputIndices.includes(R)){let W=A.symbolToIndices.get(S);if(W===void 0)throw new Error("Invalid symbol error");W.forEach(F=>{f.push(`${n[R].indicesSet(`input${R}Indices`,F,o.indicesGet("outputIndices",E))}`)})}})}else r.lhs.forEach((E,A)=>{if(k.inputIndices.includes(A)){let R=E.symbolToIndices.get(S);if(R===void 0)throw new Error("Invalid symbol error");R.forEach(W=>{_.push(`${n[A].indicesSet(`input${A}Indices`,W,`${S}`)}`)}),$.push(`prod *= ${n[A].getByIndices(`input${A}Indices`)};`)}}),w.push(`for(var ${S}: u32 = 0; ${S} < uniforms.${$a(S)}; ${S}++) {`),x.push("}")});let C=v?[...f,`let sum = ${n.map((k,S)=>k.getByIndices(`input${S}Indices`)).join(" * ")};`]:[...f,g,...w,..._,h,...$,y,...x];return`
            ${d.registerUniforms(u.map(k=>({name:`${$a(k)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...n,o)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${o.offsetToIndices("global_idx")};
            ${n.map((k,S)=>`var input${S}Indices: ${n[S].type.indices};`).join(`
`)}
            ${C.join(`
`)};
            ${o.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=u.filter(h=>r.symbolToInfo.has(h)).map(h=>{var g;return{type:12,data:((g=r.symbolToInfo.get(h))==null?void 0:g.dimValue)||0}});d.push({type:12,data:i});let f=e.map((h,g)=>[...ee(h)]).reduce((h,g)=>h.concat(g),d);return f.push(...ee(a)),{outputs:[{dims:a,dataType:t}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:f}},getShaderSource:p}},sf=(e,t)=>{let r=new Yu(e.inputs,t.equation),a=r.outputDims,n=e.inputs.map((i,o)=>i.dims);e.compute(Xu(n,e.inputs[0].dataType,r,a))},of=e=>{let t=e.equation.replace(/\s+/g,"");return he({equation:t})}}),Qu,xa,Ju,el,uf,T_=L(()=>{ie(),se(),oe(),Qu=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=r.length<t.length?0:r.length-t.length,n=t.length<r.length?0:t.length-r.length;for(;a<r.length&&n<t.length;++a,++n)if(r[a]!==t[n]&&r[a]!==1&&t[n]!==1)throw new Error("Expand requires shape to be broadcastable to input")},xa=(e,t)=>{let r=e.length-t.length,a=[];for(let n=0;n<r;++n)a.push(e[n]);for(let n=0;n<t.length;++n)a.push(t[n]===1?e[n+r]:t[n]);return a},Ju=(e,t)=>e.length>t.length?xa(e,t):xa(t,e),el=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=Ju(t,r),n=e[0].dataType,i=n===9||M.size(t)===1,o=n===9||t.length>0&&t[t.length-1]%4===0?4:1,u=i||a.length>0&&a[a.length-1]%4===0?4:1,p=Math.ceil(M.size(a)/u),d=h=>{let g=D("input",n,t.length,o),y=X("output",n,a.length,u),_;if(n===9){let w=(x,$,v="")=>`
          let outputIndices${$} = ${y.offsetToIndices(`outputOffset + ${$}u`)};
          let offset${$} = ${g.broadcastedIndicesToOffset(`outputIndices${$}`,y)};
          let index${$} = offset${$} / 4u;
          let component${$} = offset${$} % 4u;
          ${x}[${$}] = ${v}(${g.getByOffset(`index${$}`)}[component${$}]);
        `;_=`
        let outputOffset = global_idx * ${u};
        var data = vec4<u32>(0);
        ${w("data",0,"u32")}
        ${w("data",1,"u32")}
        ${w("data",2,"u32")}
        ${w("data",3,"u32")}
        ${y.setByOffset("global_idx","data")}
      }`}else _=`
        let outputIndices = ${y.offsetToIndices(`global_idx * ${u}`)};
        let inputOffset = ${g.broadcastedIndicesToOffset("outputIndices",y)};
        let data = ${y.type.value}(${g.getByOffset(`inputOffset / ${o}`)});
        ${y.setByOffset("global_idx","data")}
      }`;return`
    ${h.registerUniform("vec_size","u32").declareVariables(g,y)}
    ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${_}`},f=[{type:12,data:p},...ee(t,a)];return{name:"Expand",shaderCache:{hint:`${a.length};${o}${u}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f})}},uf=e=>{Qu(e.inputs),e.compute(el(e.inputs),{inputs:[0]})}}),tl,lf,C_=L(()=>{ie(),se(),oe(),kn(),tl=e=>{let t=e[0].dataType,r=M.size(e[0].dims),a=M.size(e[1].dims),n=a%4===0,i=o=>{let u=D("x",t,[1],4),p=D("bias",t,[1],4),d=X("y",t,[1],4),f=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],h=y=>`
      let bias${y}_offset: u32 = (global_idx * 4 + ${y}) % uniforms.bias_size;
      let bias${y} = ${p.getByOffset(`bias${y}_offset / 4`)}[bias${y}_offset % 4];`,g=n?`
      let bias = ${p.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${h(0)}${h(1)}${h(2)}${h(3)}
      let bias = ${u.type.value}(bias0, bias1, bias2, bias3);`;return`${o.registerUniforms(f).declareVariables(u,p,d)}

    ${Ja(Me(t))}

    ${o.mainStart(ir)}
      ${o.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${u.getByOffset("global_idx")};
      ${g}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",en("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${n}`,inputDependencies:["type","type"]},getShaderSource:i,getRunData:o=>({outputs:[{dims:o[0].dims,dataType:o[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:a}],dispatchGroup:{x:Math.ceil(r/ir/4)}})}},lf=e=>{e.inputs.length<2||M.size(e.inputs[1].dims)===0?Ic(e):e.compute(tl(e.inputs))}}),rl,il,df,pf,k_=L(()=>{ie(),se(),Ce(),oe(),rl=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},il=(e,t)=>{let r=e[0].dims,a=e[1].dims,n=r.length,i=M.normalizeAxis(t.axis,n),o=r.slice(0);o.splice(i,1,...a);let u=r[i],p=e[0].dataType===9?4:1,d=Math.ceil(M.size(o)/p),f=[{type:12,data:d},{type:6,data:u},{type:12,data:i},...ee(e[0].dims,e[1].dims,o)],h=g=>{let y=D("data",e[0].dataType,e[0].dims.length,p),_=D("inputIndices",e[1].dataType,e[1].dims.length),w=X("output",e[0].dataType,o.length,p),x=v=>{let C=a.length,k=`var indicesIndices${v}  = ${_.type.indices}(0);`;for(let S=0;S<C;S++)k+=`${C>1?`indicesIndices${v}[${S}]`:`indicesIndices${v}`} = ${o.length>1?`outputIndices${v}[uniforms.axis + ${S}]`:`outputIndices${v}`};`;k+=`
          var idx${v} = ${_.getByIndices(`indicesIndices${v}`)};
          if (idx${v} < 0) {
            idx${v} = idx${v} + uniforms.axisDimLimit;
          }
          var dataIndices${v} : ${y.type.indices};
        `;for(let S=0,I=0;S<n;S++)S===i?(k+=`${n>1?`dataIndices${v}[${S}]`:`dataIndices${v}`} = u32(idx${v});`,I+=C):(k+=`${n>1?`dataIndices${v}[${S}]`:`dataIndices${v}`} = ${o.length>1?`outputIndices${v}[${I}]`:`outputIndices${v}`};`,I++);return k},$;if(e[0].dataType===9){let v=(C,k,S="")=>`
          let outputIndices${k} = ${w.offsetToIndices(`outputOffset + ${k}u`)};
          ${x(k)};
          let offset${k} = ${y.indicesToOffset(`dataIndices${k}`)};
          let index${k} = offset${k} / 4u;
          let component${k} = offset${k} % 4u;
          ${C}[${k}] = ${S}(${y.getByOffset(`index${k}`)}[component${k}]);
        `;$=`
        let outputOffset = global_idx * ${p};
        var value = vec4<u32>(0);
        ${v("value",0,"u32")}
        ${v("value",1,"u32")}
        ${v("value",2,"u32")}
        ${v("value",3,"u32")}
        ${w.setByOffset("global_idx","value")}
      `}else $=`
      let outputIndices = ${w.offsetToIndices("global_idx")};
      ${x("")};
      let value = ${y.getByIndices("dataIndices")};
      ${w.setByOffset("global_idx","value")};
      `;return`
      ${g.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(y,_,w)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${$}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:f}),getShaderSource:h}},df=e=>he({axis:e.axis}),pf=(e,t)=>{let r=e.inputs;rl(r),e.compute(il(e.inputs,t))}}),al,cf,ff,S_=L(()=>{ie(),se(),oe(),al=(e,t,r,a,n,i,o,u,p)=>{let d=[{type:12,data:i},{type:12,data:a},{type:12,data:n},{type:12,data:r},{type:12,data:o},{type:12,data:u},{type:12,data:p}],f=[i];d.push(...ee(t.dims,f));let h=g=>{let y=D("indices_data",t.dataType,t.dims.length),_=X("input_slice_offsets_data",12,1,1),w=[y,_],x=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:n.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${g.registerUniforms(x).declareVariables(...w)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${n.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${n.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:f,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:d}),getShaderSource:h},{inputs:[t],outputs:[-1]})[0]},cf=(e,t)=>{let r=e.inputs,a=r[0].dims,n=r[0].dataType,i=r[1].dims,o=i[i.length-1],u=M.sizeToDimension(i,i.length-1),p=M.sizeFromDimension(a,t.batchDims+o),d=M.sizeToDimension(a,t.batchDims),f=M.sizeFromDimension(a,t.batchDims),h=u/d,g=new Array(o),y=p;for(let k=0;k<o;++k)g[o-1-k]=y,y*=a[t.batchDims+o-1-k];let _=al(e,r[1],g,t.batchDims,a,u,h,f,o),w=t.batchDims+o;if(w>a.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let x=i.slice(0,-1).concat(a.slice(w)),$=M.size(x),v=[{type:12,data:$},{type:12,data:p},...ee(r[0].dims,_.dims,x)],C=k=>{let S=D("data",r[0].dataType,r[0].dims.length),I=D("slice_offsets",12,_.dims.length),E=X("output",r[0].dataType,x.length);return`
          ${k.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(S,I,E)}
            ${k.mainStart()}
            ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:x,dataType:n}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:v}),getShaderSource:C},{inputs:[r[0],_]})},ff=e=>({batchDims:e.batch_dims,cacheKey:""})}),nl,sl,hf,mf,I_=L(()=>{ie(),se(),Ce(),oe(),nl=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=M.normalizeAxis(t.quantizeAxis,e[0].dims.length),a=t.blockSize,n=e[0],i=e[2],o=e.length===4?e[3]:void 0;if(i.dims.length!==n.dims.length||!n.dims.map((u,p)=>p===r?Math.ceil(u/a)===i.dims[p]:u===i.dims[p]).reduce((u,p)=>u&&p,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(o){if(o.dataType!==n.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(o.dims.length!==i.dims.length||!o.dims.map((u,p)=>u===i.dims[p]).reduce((u,p)=>u&&p,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},sl=(e,t)=>{let r=e[0].dims,a=e[1].dims,n=r.length,i=M.normalizeAxis(t.gatherAxis,n),o=M.normalizeAxis(t.quantizeAxis,n),u=r.slice(0);u.splice(i,1,...a);let p=M.size(u),d=e[2].dataType,f=e[0].dataType===22,h=[{type:12,data:p},{type:12,data:o},{type:12,data:i},{type:12,data:t.blockSize},...ee(...e.map((y,_)=>y.dims),u)],g=y=>{let _=D("data",e[0].dataType,e[0].dims.length),w=D("inputIndices",e[1].dataType,e[1].dims.length),x=D("scales",e[2].dataType,e[2].dims.length),$=e.length>3?D("zeroPoint",e[3].dataType,e[3].dims.length):void 0,v=X("output",d,u.length),C=[_,w,x];$&&C.push($);let k=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${y.registerUniforms(k).declareVariables(...C,v)}
        ${y.mainStart()}
        let output_indices = ${v.offsetToIndices("global_idx")};
        var indices_indices = ${w.type.indices}(0);
        ${a.length>1?`
          for (var i: u32 = 0; i < ${a.length}; i++) {
            let index = ${v.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${w.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${v.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${_.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${v.indicesGet("output_indices","i")};
          ${_.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${w.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[i]};
        }
        ${_.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${u.length}; i++) {
          let index = ${v.indicesGet("output_indices",`i + ${a.length} - 1`)};
          ${_.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${_.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${_.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${x.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${x.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${x.getByIndices("scale_indices")};
        ${$?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${$.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${$.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Me(d)}(quantized_data - zero_point) * scale;
        ${v.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((y,_)=>_!==1).map(y=>y.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(y,_)=>"rank")},getRunData:()=>({outputs:[{dims:u,dataType:d}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:h}),getShaderSource:g}},hf=(e,t)=>{let r=e.inputs;nl(r,t),e.compute(sl(e.inputs,t))},mf=e=>he({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),ol,ul,gf,_f,E_=L(()=>{ie(),se(),Ce(),oe(),ol=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},ul=(e,t)=>{let r=e[0].dims,a=e[0].dataType,n=r.length,i=e[1].dims,o=e[1].dataType,u=M.normalizeAxis(t.axis,n),p=r[u],d=i.slice(0),f=M.size(d),h=D("input",a,n),g=D("indicesInput",o,i.length),y=X("output",a,d.length),_=[{type:12,data:f},{type:6,data:p},{type:12,data:u}];return _.push(...ee(r,i,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:_}),getShaderSource:w=>`
      ${w.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(h,g,y)}
      ${w.mainStart()}
      ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${y.offsetToIndices("global_idx")};

      var idx = ${g.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${h.type.indices}(outputIndices);
      ${h.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${h.getByIndices("inputIndices")};

      ${y.setByOffset("global_idx","value")};
  }`}},gf=e=>he({axis:e.axis}),_f=(e,t)=>{let r=e.inputs;ol(r),e.compute(ul(e.inputs,t))}}),ll,dl,yf,bf,z_=L(()=>{ie(),se(),oe(),ll=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},dl=(e,t)=>{let r=e[0].dims.slice(),a=e[1].dims.slice(),[n,i,o]=mp.getShapeOfGemmResult(r,t.transA,a,t.transB,e.length===3?e[2].dims:void 0),u=[n,i];if(!u)throw new Error("Can't use gemm on the given tensors");let p=16,d=Math.ceil(i/p),f=Math.ceil(n/p),h=!0,g=M.size(u),y=[{type:12,data:h?d:g},{type:12,data:n},{type:12,data:i},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],_=["type","type"];e.length===3&&(y.push(...ee(e[2].dims)),_.push("rank")),y.push(...ee(u));let w=$=>{let v="";t.transA&&t.transB?v="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?v="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?v="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(v="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let C=t.alpha===1?"":"value *= uniforms.alpha;",k=D("a",e[0].dataType,e[0].dims),S=D("b",e[1].dataType,e[1].dims),I=k.type.value,E=null,A=[k,S];e.length===3&&(E=D("c",e[2].dataType,e[2].dims.length),A.push(E));let R=X("output",e[0].dataType,u.length);A.push(R);let W=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${$.registerUniforms(W).declareVariables(...A)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${I}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${v}
    }

    ${C}
    ${E!=null?`let cOffset = ${E.broadcastedIndicesToOffset("vec2(m, n)",R)}; value += ${I}(uniforms.beta) * ${E.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},x=$=>{let v=D("a",e[0].dataType,e[0].dims),C=D("b",e[1].dataType,e[1].dims),k=null,S=[v,C];e.length===3&&(k=D("c",e[2].dataType,e[2].dims.length),S.push(k));let I=X("output",e[0].dataType,u.length);S.push(I);let E=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],A="",R="";t.transA&&t.transB?(R=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${v.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${C.type.value}(0);
      }
      `,A="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(R=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${v.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${C.type.value}(0);
      }
      `,A="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(R=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${v.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${C.type.value}(0);
      }
      `,A="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(R=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${v.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${C.type.value}(0);
      }
      `,A="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let W=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${$.registerUniforms(E).declareVariables(...S)}
  var<workgroup> tile_a: array<array<${v.type.storage}, ${p}>, ${p}>;
  var<workgroup> tile_b: array<array<${C.type.storage}, ${p}>, ${p}>;
  ${$.mainStart([p,p,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${p};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${p};
    let num_tiles = (uniforms.K - 1) / ${p} + 1;
    var k_start = 0u;
    var value = ${I.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${R}
      k_start = k_start + ${p};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${p}; k++) {
        ${A}
      }
      workgroupBarrier();
    }

    ${W}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",I)}; value += ${I.type.value}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return h?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:d*f},programUniforms:y}),getShaderSource:x}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:y}),getShaderSource:w}},yf=e=>{let t=e.transA,r=e.transB,a=e.alpha,n=e.beta;return{transA:t,transB:r,alpha:a,beta:n,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},bf=(e,t)=>{ll(e.inputs),e.compute(dl(e.inputs,t))}}),lt,gt,Dt,Pt,pl,cl,fl,hl,ml,gl,_l,yl,wf,vf,A_=L(()=>{ie(),se(),Ce(),oe(),[lt,gt,Dt,Pt]=[0,1,2,3],pl=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},cl=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,fl=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,hl=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,ml=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,gl=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${lt}] = batch;
     indices[${gt}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Dt}] = u32(r);
            indices[${Pt}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Dt}] = u32(clamp(r, 0, H - 1));
          indices[${Pt}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Dt}] = gs_reflect(r, border[1], border[3]);
          indices[${Pt}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,_l=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${lt}], indices[${gt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${lt}], indices[${gt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${lt}], indices[${gt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${lt}], indices[${gt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${lt}], indices[${gt}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${lt}], indices[${gt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,yl=(e,t)=>{let r=D("x",e[0].dataType,e[0].dims.length),a=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],n=D("grid",e[1].dataType,a.length,2),i=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(i=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[lt,gt,Dt,Pt]=[0,3,1,2]);let o=X("output",e[0].dataType,i.length),u=r.type.value,p=M.size(i),d=[{type:12,data:p},...ee(e[0].dims,a,i)],f=h=>`
  ${h.registerUniform("output_size","u32").declareVariables(r,n,o)}
  ${cl}
  ${fl(u)}
  ${hl(t)}
  ${ml(t)}
  ${gl(r,u,t)}

  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Dt}]);
      let W_in = i32(uniforms.x_shape[${Pt}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${o.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${lt}], indices[${Dt}], indices[${Pt}]);
      let nxy = ${n.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${_l(o,u,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:h=>{let g=M.size(i);return{outputs:[{dims:i,dataType:h[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:d}},getShaderSource:f}},wf=(e,t)=>{pl(e.inputs),e.compute(yl(e.inputs,t))},vf=e=>he({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Ue,bl,$f,Ta,wl,kr,xf,Tf=L(()=>{ie(),se(),Ce(),$n(),Cn(),oe(),At(),Ue=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,bl=(e,t)=>{let r=e[0],a=Ue(e,1),n=Ue(e,2),i=Ue(e,3),o=Ue(e,4),u=Ue(e,5),p=Ue(e,6),d=Ue(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let f=r.dims[0],h=r.dims[1],g=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],y=h,_=0,w=0,x=Math.floor(g/t.numHeads);if(p&&d&&M.size(p.dims)&&M.size(d.dims)){if(p.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(p.dims[0]!==f||p.dims[1]!==t.numHeads||p.dims[3]!==x)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==f||d.dims[1]!==t.numHeads||d.dims[3]!==x)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(p.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=p.dims[2],w=p.dims[2]}else if(p&&M.size(p.dims)||d&&M.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $;if(a&&M.size(a.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(a.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');$=2,y=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==x)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');$=5,y=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==x)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');$=0,y=a.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}if(i&&M.size(i.dims)>0){if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(a&&a.dims.length===5&&a.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let v=_+y,C=0;if(o&&M.size(o.dims)>0){C=8;let E=o.dims;throw E.length===1?E[0]===f?C=1:E[0]===3*f+2&&(C=3):E.length===2&&E[0]===f&&E[1]===v&&(C=5),C===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let k=!1,S=g;if(n&&M.size(n.dims)>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(y!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=n.dims[2]}else{if(y!==n.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');S=n.dims[1]*n.dims[3],k=!0}}let I=!1;if(o&&M.size(o.dims)>0)throw new Error("Key padding mask is not supported");if(u&&M.size(u.dims)>0){if(u.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(u.dims[0]!==f||u.dims[1]!==t.numHeads||u.dims[2]!==h||u.dims[3]!==v)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:f,sequenceLength:h,pastSequenceLength:_,kvSequenceLength:y,totalSequenceLength:v,maxSequenceLength:w,inputHiddenSize:0,hiddenSize:g,vHiddenSize:S,headSize:x,vHeadSize:Math.floor(S/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:C,scale:t.scale,broadcastResPosBias:I,passPastInKv:k,qkvFormat:$}},$f=e=>he({...e}),Ta=he({perm:[0,2,1,3]}),wl=(e,t,r,a,n,i,o)=>{let u=[a,n,i],p=M.size(u),d=[{type:12,data:p},{type:12,data:o},{type:12,data:i}],f=h=>{let g=X("qkv_with_bias",t.dataType,u),y=D("qkv",t.dataType,u),_=D("bias",r.dataType,u),w=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${h.registerUniforms(w).declareVariables(y,_,g)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:u,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:d}),getShaderSource:f},{inputs:[t,r],outputs:[-1]})[0]},kr=(e,t,r,a,n,i,o,u)=>{let p=i;if(o&&M.size(o.dims)>0){if(a===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return p=wl(e,i,o,t,a,r*n,u),p=p.reshape([t,a,r,n]),r===1||a===1?p:e.compute(Ze(p,Ta.perm),{inputs:[p],outputs:[-1]})[0]}else return i.dims.length===3&&(p=i.reshape([t,a,r,n])),r===1||a===1?p:e.compute(Ze(p,Ta.perm),{inputs:[p],outputs:[-1]})[0]},xf=(e,t)=>{let r=bl(e.inputs,t),a=e.inputs[0],n=Ue(e.inputs,1),i=Ue(e.inputs,2),o=Ue(e.inputs,3),u=Ue(e.inputs,4),p=Ue(e.inputs,5),d=Ue(e.inputs,6),f=Ue(e.inputs,7);if(a.dims.length===5)throw new Error("Packed QKV is not implemented");if((n==null?void 0:n.dims.length)===5)throw new Error("Packed KV is not implemented");let h=n&&i&&n.dims.length===4&&i.dims.length===4,g=kr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,a,o,0);if(h)return Ar(e,g,n,i,u,void 0,d,f,p,r);if(!n||!i)throw new Error("key and value must be provided");let y=kr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,n,o,r.hiddenSize),_=kr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,i,o,2*r.hiddenSize);Ar(e,g,y,_,u,void 0,d,f,p,r)}}),vl,$l,xl,Tl,sn,Cf,kf,Sf=L(()=>{ie(),se(),Ce(),oe(),vl=e=>{if(!e||e.length<1)throw new Error("too few inputs")},$l=(e,t)=>{let r=[],a=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),a=r.length),he({numOutputs:a,axis:t.axis,splitSizes:r})},xl=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${J("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Tl=e=>{let t=e.length,r=[];for(let a=0;a<t;++a){let n=e[a].setByIndices("indices","input[global_idx]");t===1?r.push(n):a===0?r.push(`if (output_number == ${a}u) { ${n} }`):a===t-1?r.push(`else { ${n} }`):r.push(`else if (output_number == ${a}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},sn=(e,t)=>{let r=e[0].dims,a=M.size(r),n=e[0].dataType,i=M.normalizeAxis(t.axis,r.length),o=new Array(t.numOutputs),u=D("input",n,r.length),p=new Array(t.numOutputs),d=[],f=[],h=0,g=[{type:12,data:a}];for(let _=0;_<t.numOutputs;_++){h+=t.splitSizes[_],p[_]=h;let w=r.slice();w[i]=t.splitSizes[_],f.push(w),o[_]=X(`output${_}`,n,w.length),d.push({dims:f[_],dataType:e[0].dataType})}g.push({type:12,data:p},...ee(r,...f));let y=_=>`
  ${_.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",p.length).declareVariables(u,...o)}
  ${xl(p.length)}
  ${Tl(o)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",i)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${J("uniforms.size_in_split_axis","output_number - 1u",p.length)};
      ${u.indicesSet("indices",i,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(a/64)},programUniforms:g})}},Cf=(e,t)=>{vl(e.inputs);let r=e.inputs.length===1?t:$l(e.inputs,t);e.compute(sn(e.inputs,r),{inputs:[0]})},kf=e=>{let t=e.axis,r=e.splitSizes,a=e.numOutputs<0?r.length:e.numOutputs;if(a!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return he({axis:t,numOutputs:a,splitSizes:r})}}),Cl,ci,If,Ef=L(()=>{ie(),se(),Ce(),oe(),Cl=(e,t)=>{let[r,a,n,i]=e,{numHeads:o,rotaryEmbeddingDim:u}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!M.areEqual(a.dims,[])&&!M.areEqual(a.dims,[1])&&a.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${a.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(!M.areEqual(n.dims,i.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&o===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let p=r.dims[0],d=r.dims[r.dims.length-2],f=n.dims[0],h=M.sizeFromDimension(r.dims,1)/d,g=u===0?n.dims[1]*2:h/o;if(u>g)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(a.dims.length===2){if(p!==a.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${a.dims[0]}`);if(d!==a.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${a.dims[1]}`)}if(g/2!==n.dims[1]&&u/2!==n.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`);if(d>f)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},ci=(e,t)=>{let{interleaved:r,numHeads:a,rotaryEmbeddingDim:n,scale:i}=t,o=e[0].dims[0],u=M.sizeFromDimension(e[0].dims,1),p=e[0].dims[e[0].dims.length-2],d=u/p,f=e[2].dims[1],h=n===0?f*2:d/a,g=new Array(o,p,d/h,h-f),y=M.computeStrides(g),_=[{type:1,data:i},{type:12,data:g},{type:12,data:y},...e[0].dims.length===3?new Array({type:12,data:[u,d,h,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[u,h,p*h,1]}):[],...ee(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],w=x=>{let $=D("input",e[0].dataType,e[0].dims.length),v=D("position_ids",e[1].dataType,e[1].dims.length),C=D("cos_cache",e[2].dataType,e[2].dims.length),k=D("sin_cache",e[3].dataType,e[3].dims.length),S=X("output",e[0].dataType,e[0].dims.length);return x.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:g.length},{name:"global_strides",type:"u32",length:y.length},{name:"input_output_strides",type:"u32",length:y.length}]),`
        ${x.declareVariables($,v,C,k,S)}

        ${x.mainStart(ir)}
          let half_rotary_emb_dim = uniforms.${C.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${v.broadcastedIndicesToOffset("bsnh.xy",X("",v.type.tensor,2))};
            let position_id =
                u32(${v.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${$.getByOffset("i")} * ${C.get("position_id","bsnh[3]")} -
                ${$.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${S.setByOffset("i","re")}
            let im = ${$.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} +
                ${$.getByOffset("j")} * ${C.get("position_id","bsnh[3]")};
            ${S.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${S.setByOffset("k",$.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:he({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(M.size(g)/ir)},programUniforms:_})}},If=(e,t)=>{Cl(e.inputs,t),e.compute(ci(e.inputs,t))}}),kl,Sl,Ca,Il,zf,O_=L(()=>{Ce(),ie(),Cn(),Tf(),Sf(),At(),Ef(),oe(),kl=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],a=e[1],n=e[2],i=e[3],o=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let u=!1,p=r.dims[0],d=r.dims[1],f=r.dims.length===3?u?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],h=d,g=0,y=!a||a.dims.length===0,_=Math.floor(y?f/(t.numHeads+2*t.kvNumHeads):f/t.numHeads);y&&(f=_*t.numHeads);let w=i&&i.dims.length!==0,x=o&&o.dims.length!==0;if(w&&i.dims.length===4&&i.dims[0]===p&&i.dims[1]!==t.kvNumHeads&&i.dims[2]===t.kvNumHeads&&i.dims[3]===_)throw new Error("BSNH pastKey/pastValue is not supported");if(w&&x){if(i.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(o.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=i.dims[2]}else if(w||x)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $=1;if(a&&a.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(r.dims[2]%a.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');h=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');h=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');h=a.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}let v=0,C=!1,k=t.kvNumHeads?_*t.kvNumHeads:f;if(n&&n.dims.length>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(h!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=n.dims[2]}else{if(h!==n.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');k=n.dims[1]*n.dims[3],C=!0}}let S=e.length>4?e[5]:void 0;if(S&&S.dims.length!==1&&S.dims[0]!==p)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:p,sequenceLength:d,pastSequenceLength:g,kvSequenceLength:h,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:f,vHiddenSize:k,headSize:_,vHeadSize:Math.floor(k/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:v,scale:t.scale,broadcastResPosBias:!1,passPastInKv:C,qkvFormat:$}},Sl=he({perm:[0,2,1,3]}),Ca=(e,t,r)=>{let a=t,n=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(a=t.reshape([r.batchSize,r.kvSequenceLength,n,r.headSize]),a=e.compute(Ze(a,Sl.perm),{inputs:[a],outputs:[-1]})[0]),a},Il=(e,t,r,a)=>{let n=7,i=["type","type"],o=[e*t],u=e*t,p=[{type:12,data:u},{type:12,data:t},{type:12,data:e}],d=f=>{let h=D("seq_lens",r.dataType,r.dims),g=D("total_seq_lens",a.dataType,a.dims),y=X("pos_ids",n,o),_=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${f.registerUniforms(_).declareVariables(h,g,y)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${g.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${h.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${y.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${y.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${y.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:i},getRunData:()=>({outputs:[{dims:o,dataType:n}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p}),getShaderSource:d}},zf=(e,t)=>{var k;let r=kl(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((k=e.inputs[1])==null?void 0:k.dims.length)===5)throw new Error("Packed KV is not implemented");let a=e.inputs[0],n=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,i=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,u=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,p=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,f=r.kvNumHeads?r.kvNumHeads:r.numHeads,h=he({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,f*r.headSize,f*r.headSize]}),[g,y,_]=!n&&!i?e.compute(sn([a],h),{inputs:[a],outputs:[-1,-1,-1]}):[a,n,i],w,x;if(t.doRotary){let S=e.compute(Il(r.batchSize,r.sequenceLength,p,d),{inputs:[p,d],outputs:[-1]})[0],I=e.inputs[7],E=e.inputs[8],A=he({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),R=[g,S,I,E],W=[-1];w=e.compute(ci(R,A),{inputs:R,outputs:W})[0],R.splice(0,1,y);let F=he({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});x=e.compute(ci(R,F),{inputs:R,outputs:W})[0]}let $=kr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?w:g,void 0,0),v=Ca(e,t.doRotary?x:y,r),C=Ca(e,_,r);Ar(e,$,v,C,void 0,void 0,o,u,void 0,r,p,d)}}),ka,El,zl,Af,R_=L(()=>{ie(),se(),At(),oe(),ka=(e,t,r,a,n,i,o,u)=>{let p=Te(i),d=p===1?"f32":`vec${p}f`,f=p===1?"vec2f":`mat2x${p}f`,h=n*o,g=64;h===1&&(g=256);let y=[n,o,i/p],_=[n,o,2],w=["rank","type","type"],x=[];x.push(...ee(y,_));let $=v=>{let C=D("x",t.dataType,3,p),k=D("scale",r.dataType,r.dims),S=D("bias",a.dataType,a.dims),I=X("output",1,3,2),E=[C,k,S,I];return`
  var<workgroup> workgroup_shared : array<${f}, ${g}>;
  const workgroup_size = ${g}u;
  ${v.declareVariables(...E)}
  ${v.mainStart(g)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${C.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${f}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Et("workgroup_shared[0][0]",p)} / f32(hight * ${p});
      let squared_sum_final = ${Et("workgroup_shared[0][1]",p)} / f32(hight * ${p});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${u}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${p};${u};${g}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:_,dataType:1}],dispatchGroup:{x:h},programUniforms:x}),getShaderSource:$},{inputs:[t,r,a],outputs:[-1]})[0]},El=(e,t,r)=>{let a=t[0].dims,n=a,i=2,o=a[0],u=a[1],p=M.sizeFromDimension(a,i),d=Te(p),f=M.size(n)/d,h=ka(e,t[0],t[1],t[2],o,p,u,r.epsilon),g=[o,u,p/d],y=[o,u],_=["type","none"],w=x=>{let $=D("x",t[0].dataType,g.length,d),v=D("scale_shift",1,y.length,2),C=X("output",t[0].dataType,g.length,d),k=[$,v,C];return`
  ${x.registerUniform("output_size","u32").declareVariables(...k)}
  ${x.mainStart()}
  ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${C.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${v.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${$.getByOffset("global_idx")} * ${C.type.value}(scale_shift.x) + ${C.type.value}(scale_shift.y);
      ${C.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},...ee(g,y,g)]}),getShaderSource:w},{inputs:[t[0],h]})},zl=(e,t,r)=>{let a=t[0].dims,n=a,i=a[0],o=a[a.length-1],u=M.sizeFromDimension(a,1)/o,p=Te(o),d=M.size(n)/p,f=[{type:12,data:u},{type:12,data:Math.floor(o/p)}],h=["type","type"],g=!1,y=[0,a.length-1];for(let $=0;$<a.length-2;$++)g=g||a[$+1]!==1,y.push($+1);g=g&&a[a.length-1]!==1;let _=g?e.compute(Ze(e.inputs[0],y),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:a.length},($,v)=>a[y[v]])),w=ka(e,_,t[1],t[2],i,u,o,r.epsilon),x=$=>{let v=ze(t[0].dataType),C=p===1?"vec2f":`mat${p}x2f`,k=E=>{let A=E===0?"x":"y",R=p===1?"f32":`vec${p}f`;switch(p){case 1:return`${v}(${R}(scale.${A}))`;case 2:return`vec2<${v}>(${R}(scale[0].${A}, scale[1].${A}))`;case 4:return`vec4<${v}>(${R}(scale[0].${A}, scale[1].${A}, scale[2].${A}, scale[3].${A}))`;default:throw new Error(`Not supported compoents ${p}`)}},S=D("input",t[0].dataType,t[0].dims,p),I=X("output",t[0].dataType,n,p);return`
  @group(0) @binding(0) var<storage, read> input : array<${S.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${C}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${I.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${$.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${k(0)}, ${k(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${p}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:f}),getShaderSource:x},{inputs:[t[0],w]})},Af=(e,t)=>{t.format==="NHWC"?zl(e,e.inputs,t):El(e,e.inputs,t)}}),Al,Ol,Of,B_=L(()=>{ie(),se(),oe(),Al=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Ol=(e,t,r)=>{let a=t.simplified,n=e[0].dims,i=e[1],o=!a&&e[2],u=n,p=M.normalizeAxis(t.axis,n.length),d=M.sizeToDimension(n,p),f=M.sizeFromDimension(n,p),h=M.size(i.dims),g=o?M.size(o.dims):0;if(h!==f||o&&g!==f)throw new Error(`Size of X.shape()[axis:] == ${f}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${h} and bias size of ${g}`);let y=[];for(let S=0;S<n.length;++S)S<p?y.push(n[S]):y.push(1);let _=Te(f),w=["type","type"],x=[{type:12,data:d},{type:1,data:f},{type:12,data:Math.floor(f/_)},{type:1,data:t.epsilon}];o&&w.push("type");let $=r>1,v=r>2,C=S=>{let I=ze(e[0].dataType),E=[D("x",e[0].dataType,e[0].dims,_),D("scale",i.dataType,i.dims,_)];o&&E.push(D("bias",o.dataType,o.dims,_)),E.push(X("output",e[0].dataType,u,_)),$&&E.push(X("mean_data_output",1,y)),v&&E.push(X("inv_std_output",1,y));let A=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${S.registerUniforms(A).declareVariables(...E)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Ya("f32",_)};
    var mean_square_vector = ${Ya("f32",_)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${tr(I,_,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Et("mean_vector",_)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Et("mean_square_vector",_)} / uniforms.norm_size ${a?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${tr(I,_,"x[j + offset]")};
      let f32scale = ${tr(I,_,"scale[j]")};
      output[j + offset] = ${E[0].type.value}((f32input ${a?"":"- mean"}) * inv_std_dev * f32scale
        ${o?`+ ${tr(I,_,"bias[j]")}`:""}
      );
    }

    ${$?"mean_data_output[global_idx] = mean":""};
    ${v?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},k=[{dims:u,dataType:e[0].dataType}];return $&&k.push({dims:y,dataType:1}),v&&k.push({dims:y,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${_};${r};${a}`,inputDependencies:w},getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:x}),getShaderSource:C}},Of=(e,t)=>{Al(e.inputs),e.compute(Ol(e.inputs,t,e.outputCount))}}),Rl,Rf,M_=L(()=>{se(),zn(),An(),Rl=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Rf=e=>{Rl(e.inputs);let t=rr.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],a=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&a<8)e.compute(En(e.inputs,{activation:""},t));else{let n=t[t.length-2],i=M.size(e.inputs[0].dims.slice(0,-2)),o=M.size(e.inputs[1].dims.slice(0,-2));if(i!==1&&n===1&&o===1){let u=e.inputs[0].reshape([1,i,a]),p=e.inputs[1].reshape([1,a,r]),d=[1,i,r],f=[u,p];e.compute(pi(f,{activation:""},t,d),{inputs:f})}else e.compute(pi(e.inputs,{activation:""},t))}}}),Bl,Ml,Nl,Bf,Mf,N_=L(()=>{ie(),se(),Ce(),oe(),Bl=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],a=r.dims.length;if(r.dims[a-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let n=Math.floor((t.k+t.blockSize-1)/t.blockSize),i=t.blockSize/8*t.bits,o=e[1];if(!M.areEqual(o.dims,[t.n,n,i]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let u=e[2].dims;if(M.size(u)!==t.n*n)throw new Error("scales input size error.");if(e.length===4){let p=e[3].dims,d=t.n*(t.bits===8?n:Math.floor((n*t.bits+7)/8));if(M.size(p)!==d)throw new Error("zeroPoints input size error.")}},Ml=(e,t)=>{let r=e[0].dims,a=r.length,n=r[a-2],i=t.k,o=t.n,u=r.slice(0,a-2),p=M.size(u),d=e[1].dims[2]/4,f=e[0].dataType,h=Te(t.k),g=Te(d),y=Te(o),_=u.concat([n,o]),w=n>1&&o/y%2===0?2:1,x=M.size(_)/y/w,$=64,v=[],C=[p,n,i/h],k=M.convertShape(e[1].dims).slice();k.splice(-1,1,d/g),v.push(...ee(C)),v.push(...ee(k)),v.push(...ee(e[2].dims)),e.length===4&&v.push(...ee(M.convertShape(e[3].dims)));let S=[p,n,o/y];v.push(...ee(S));let I=E=>{let A=C.length,R=D("a",e[0].dataType,A,h),W=D("b",12,k.length,g),F=D("scales",e[2].dataType,e[2].dims.length),H=[R,W,F],G=e.length===4?D("zero_points",12,e[3].dims.length):void 0;G&&H.push(G);let ue=S.length,ae=X("output",e[0].dataType,ue,y),K=ze(e[0].dataType),ne=(()=>{switch(h){case 1:return`array<${K}, 8>`;case 2:return`mat4x2<${K}>`;case 4:return`mat2x4<${K}>`;default:throw new Error(`${h}-component is not supported.`)}})(),Z=()=>{let O=`
          // reuse a data
            var input_offset = ${R.indicesToOffset(`${R.type.indices}(batch, row, word_offset)`)};
            var a_data: ${ne};
            for (var j: u32 = 0; j < ${8/h}; j++) {
              a_data[j] = ${R.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let q=0;q<y*w;q++)O+=`
            b_value = ${g===1?`b${q}_data`:`b${q}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${ne}(${Array.from({length:4},(j,Q)=>`${K}(b_value_lower[${Q}]), ${K}(b_value_upper[${Q}])`).join(", ")});
            b_dequantized_values = ${h===1?`${ne}(${Array.from({length:8},(j,Q)=>`(b_quantized_values[${Q}] - ${G?`zero_point${q}`:"zero_point"}) * scale${q}`).join(", ")});`:`(b_quantized_values - ${ne}(${Array(8).fill(`${G?`zero_point${q}`:"zero_point"}`).join(",")})) * scale${q};`};
            workgroup_shared[local_id.x * ${w} + ${Math.floor(q/y)}]${y>1?`[${q%y}]`:""} += ${Array.from({length:8/h},(j,Q)=>`${h===1?`a_data[${Q}] * b_dequantized_values[${Q}]`:`dot(a_data[${Q}], b_dequantized_values[${Q}])`}`).join(" + ")};
          `;return O},te=()=>{let O=`
            var col_index = col * ${y};
            ${G?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${K}(8);`}
            `;for(let q=0;q<y*w;q++)O+=`
            let scale${q} = ${F.getByOffset("col_index * nBlocksPerCol + block")};
            ${G?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${G.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${q} = ${K}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return O},me=()=>{let O=`col_index = col * ${y};`;for(let q=0;q<y*w;q++)O+=`
            let b${q}_data = ${W.getByIndices(`${W.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return O+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${ne};
            var b_dequantized_values: ${ne};`,O};return`
        var<workgroup> workgroup_shared: array<${ae.type.value}, ${w*$}>;
        ${E.declareVariables(...H,ae)}
        ${E.mainStart([$,1,1])}
          let output_indices = ${ae.offsetToIndices(`(global_idx / ${$}) * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${$}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/h};
            ${te()}
            for (var word: u32 = 0; word < ${d}; word += ${g}) {
              ${me()}
              for (var i: u32 = 0; i < ${g}; i++) {
                ${Z()}
                word_offset += ${8/h};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${w}) {
            var output_value: ${ae.type.value} = ${ae.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${$}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${w};
            }
            ${ae.setByIndices(`${ae.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${h};${g};${y};${w};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:f}],dispatchGroup:{x},programUniforms:v}),getShaderSource:I}},Nl=(e,t)=>{let r=e[0].dims,a=r.length,n=r[a-2],i=t.k,o=t.n,u=r.slice(0,a-2),p=M.size(u),d=e[1].dims[2]/4,f=e[0].dataType,h=Te(t.k),g=Te(d),y=u.concat([n,o]),_=128,w=o%8===0?8:o%4===0?4:1,x=_/w,$=x*g*8,v=$/h,C=$/t.blockSize,k=M.size(y)/w,S=[],I=[p,n,i/h],E=M.convertShape(e[1].dims).slice();E.splice(-1,1,d/g),S.push(...ee(I)),S.push(...ee(E)),S.push(...ee(e[2].dims)),e.length===4&&S.push(...ee(M.convertShape(e[3].dims)));let A=[p,n,o];S.push(...ee(A));let R=W=>{let F=I.length,H=D("a",e[0].dataType,F,h),G=D("b",12,E.length,g),ue=D("scales",e[2].dataType,e[2].dims.length),ae=[H,G,ue],K=e.length===4?D("zero_points",12,e[3].dims.length):void 0;K&&ae.push(K);let ne=A.length,Z=X("output",e[0].dataType,ne),te=ze(e[0].dataType),me=()=>{switch(h){case 1:return`
          let a_data0 = vec4<${te}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${te}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${te}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${te}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${h}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${H.type.value}, ${v}>;
        var<workgroup> inter_results: array<array<${Z.type.value}, ${x}>, ${w}>;
        ${W.declareVariables(...ae,Z)}
        ${W.mainStart([x,w,1])}
          let output_indices = ${Z.offsetToIndices(`workgroup_index * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${C} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${v};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${v}; a_offset += ${_})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${H.getByIndices(`${H.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${H.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${C} + local_id.x;
            ${K?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${K.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${te}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${te}(8);`}
            let scale = ${ue.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${G.getByIndices(`${G.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/h};
            for (var i: u32 = 0; i < ${g}; i++) {
              ${me()}
              let b_value = ${g===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${te}>(${Array.from({length:4},(O,q)=>`${te}(b_value_lower[${q}]), ${te}(b_value_upper[${q}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${te}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(O,q)=>`${`dot(a_data${q}, b_dequantized_values[${q}])`}`).join(" + ")};
              word_offset += ${8/h};
            }
            workgroupBarrier();
          }

          if (local_idx < ${w}) {
            var output_value: ${Z.type.value} = ${Z.type.value}(0);
            for (var b = 0u; b < ${x}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${Z.setByIndices(`${Z.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${h};${g};${x};${w}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:f}],dispatchGroup:{x:k},programUniforms:S}),getShaderSource:R}},Bf=(e,t)=>{Bl(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Nl(e.inputs,t)):e.compute(Ml(e.inputs,t))},Mf=e=>he(e)}),Dl,Pl,Ul,ql,Wl,Ll,Vl,Gl,Nf,D_=L(()=>{ie(),se(),oe(),Dl=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Pl=(e,t,r)=>{let a="";for(let n=t-1;n>=0;--n)a+=`
            k = i32(${e.indicesGet("indices",n)}) - ${J("uniforms.pads",n,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${J("uniforms.x_shape",n,t)})) {
              break;
            }
            offset += k * i32(${J("uniforms.x_strides",n,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${a}
            value = x[offset];
          }
      `},Ul=(e,t,r)=>{let a="";for(let n=t-1;n>=0;--n)a+=`
                k = i32(${e.indicesGet("indices",n)}) - ${J("uniforms.pads",n,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${J("uniforms.x_shape",n,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${J("uniforms.x_shape",n,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${J("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},ql=(e,t,r)=>{let a="";for(let n=t-1;n>=0;--n)a+=`
                k = i32(${e.indicesGet("indices",n)}) - ${J("uniforms.pads",n,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${J("uniforms.x_shape",n,t)})) {
                  k = i32(${J("uniforms.x_shape",n,t)}) - 1;
                }
                offset += k * i32(${J("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Wl=(e,t,r)=>{let a="";for(let n=t-1;n>=0;--n)a+=`
                k = i32(${e.indicesGet("indices",n)}) - ${J("uniforms.pads",n,r)};
                if (k < 0)  {
                  k += i32(${J("uniforms.x_shape",n,t)}]);
                }
                if (k >= i32(${J("uniforms.x_shape",n,t)})) {
                  k -= i32(${J("uniforms.x_shape",n,t)});
                }
                offset += k * i32(${J("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Ll=(e,t,r)=>{switch(r.mode){case 0:return Pl(e,t,r.pads.length);case 1:return Ul(e,t,r.pads.length);case 2:return ql(e,t,r.pads.length);case 3:return Wl(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Vl=(e,t)=>{let r=M.padShape(e[0].dims.slice(),t.pads),a=e[0].dims,n=M.size(r),i=[{type:12,data:n},{type:6,data:t.pads}],o=e.length>=3&&e[2].data;t.mode===0&&i.push({type:o?e[2].dataType:1,data:t.value}),i.push(...ee(e[0].dims,r));let u=["rank"],p=d=>{let f=X("output",e[0].dataType,r.length),h=D("x",e[0].dataType,a.length),g=h.type.value,y=Ll(f,a.length,t),_=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&_.push({name:"constant_value",type:o?g:"f32"}),`
            ${d.registerUniforms(_).declareVariables(h,f)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${f.offsetToIndices("global_idx")};

            var value = ${g}(0);
            ${y}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${o}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(M.size(r)/64)},programUniforms:i}),getShaderSource:p}},Gl=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),a=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,n=e[0].dims.length,i=new Int32Array(2*n).fill(0);if(e.length>=4){let u=e[3].getBigInt64Array();for(let p=0;p<u.length;p++)i[Number(u[p])]=Number(r[p]),i[Number(u[p])+n]=Number(r[p+u.length])}else r.forEach((u,p)=>i[Number(p)]=Number(u));let o=[];return i.forEach(u=>o.push(u)),{mode:t.mode,value:a,pads:o}}else return t},Nf=(e,t)=>{Dl(e.inputs);let r=Gl(e.inputs,t);e.compute(Vl(e.inputs,r),{inputs:[0]})}}),_r,Sa,Ia,Ea,za,jl,Hl,Aa,Oa,Df,Pf,Ra,Uf,qf,Ba,Wf,Lf,Vf,Gf,P_=L(()=>{Xe(),ie(),se(),oe(),_r=e=>{if(ve.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Sa=(e,t,r)=>{let a=t.format==="NHWC",n=e.dims.slice();a&&n.splice(1,0,n.pop());let i=Object.hasOwnProperty.call(t,"dilations"),o=t.kernelShape.slice(),u=t.strides.slice(),p=i?t.dilations.slice():[],d=t.pads.slice();li.adjustPoolAttributes(r,n,o,u,p,d);let f=li.computePoolOutputShape(r,n,u,p,o,d,t.autoPad),h=Object.assign({},t);i?Object.assign(h,{kernelShape:o,strides:u,pads:d,dilations:p,cacheKey:t.cacheKey}):Object.assign(h,{kernelShape:o,strides:u,pads:d,cacheKey:t.cacheKey});let g=f.slice();return g.push(g.splice(1,1)[0]),[h,a?g:f]},Ia=(e,t)=>{let r=t.format==="NHWC",a=M.size(e),n=M.size(t.kernelShape),i=[{type:12,data:a},{type:12,data:n}],o=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let u=t.kernelShape[t.kernelShape.length-1],p=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],f=t.pads[t.pads.length-1],h=!!(d+f);i.push({type:12,data:u},{type:12,data:p},{type:12,data:d},{type:12,data:f}),o.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let g=!1;if(t.kernelShape.length===2){let y=t.kernelShape[t.kernelShape.length-2],_=t.strides[t.strides.length-2],w=t.pads[t.pads.length/2-2],x=t.pads[t.pads.length-2];g=!!(w+x),i.push({type:12,data:y},{type:12,data:_},{type:12,data:w},{type:12,data:x}),o.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[i,o,!0,h,g]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let u=M.computeStrides(t.kernelShape);i.push({type:12,data:u},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:"kernelStrides",type:"u32",length:u.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let p=t.pads.reduce((d,f)=>d+f);return[i,o,!!p,!1,!1]}},Ea=(e,t,r,a,n,i,o,u,p,d,f,h)=>{let g=n.format==="NHWC",y=t.type.value,_=X("output",t.type.tensor,a);if(n.kernelShape.length<=2){let w="",x="",$="",v=r-(g?2:1);if(f?w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${v}] = indices[${v}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${v}] < 0 || xIndices[${v}]
                      >= uniforms.x_shape[${v}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${i}
                }`:w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${v}] = indices[${v}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${i}
                }`,n.kernelShape.length===2){let C=r-(g?3:2);h?x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${C}] = indices[${C}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${C}] < 0 || xIndices[${C}] >= uniforms.x_shape[${C}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${C}] = indices[${C}] * uniforms.sh - uniforms.phStart + j;
                `,$=`
              }
            `}return`
            ${e.registerUniforms(p).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var value = ${y}(${u});
              var pad = 0;
              ${x}
              ${w}
              ${$}
              ${o}

              output[global_idx] = value;
            }`}else{if(g)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let w=n.kernelShape.length,x=n.pads.length,$="";return d?$=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${i}
              }`:$=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${i}
            `,`
            ${e.registerUniforms(p).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var offsets: array<u32, ${w}>;

              var value = ${y}(${u});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${w-1}u; j++) {
                  offsets[j] = offset / ${J("uniforms.kernelStrides","j",w)};
                  offset -= offsets[j] * ${J("uniforms.kernelStrides","j",w)};
                }
                offsets[${w-1}] = offset;

                isPad = false;
                for (var j = ${r-w}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${J("uniforms.strides",`j - ${r-w}u`,w)}
                    + offsets[j - ${r-w}u] - ${J("uniforms.pads","j - 2u",x)};
                  ${$}
              }
              ${o}

              output[global_idx] = value;
            }`}},za=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,jl=e=>`${za(e)};${e.countIncludePad}`,Hl=e=>`${za(e)};${e.storageOrder};${e.dilations}`,Aa=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Oa=(e,t,r,a)=>{let[n,i]=Sa(t,a,r),o=D("x",t.dataType,t.dims.length),u=o.type.value,p="value += x_val;",d="";n.countIncludePad?d+=`value /= ${u}(uniforms.kernelSize);`:d+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[f,h,g,y,_]=Ia(i,n);f.push(...ee(t.dims,i));let w=["rank"];return{name:e,shaderCache:{hint:`${a.cacheKey};${g};${y};${_}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(M.size(i)/64)},programUniforms:f}),getShaderSource:x=>Ea(x,o,t.dims.length,i.length,n,p,d,0,h,g,y,_)}},Df=e=>{let t=e.count_include_pad!==0,r=Aa(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let a={countIncludePad:t,...r,cacheKey:""};return{...a,cacheKey:jl(a)}},Pf=(e,t)=>{_r(e.inputs),e.compute(Oa("AveragePool",e.inputs[0],!1,t))},Ra={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Uf=e=>{let t=e.format;return{format:t,...Ra,cacheKey:t}},qf=(e,t)=>{_r(e.inputs),e.compute(Oa("GlobalAveragePool",e.inputs[0],!0,t))},Ba=(e,t,r,a)=>{let[n,i]=Sa(t,a,r),o=`
      value = max(x_val, value);
    `,u="",p=D("x",t.dataType,t.dims.length),d=["rank"],[f,h,g,y,_]=Ia(i,n);return f.push(...ee(t.dims,i)),{name:e,shaderCache:{hint:`${a.cacheKey};${g};${y};${_}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(M.size(i)/64)},programUniforms:f}),getShaderSource:w=>Ea(w,p,t.dims.length,i.length,n,o,u,t.dataType===10?-65504:-1e5,h,g,y,_)}},Wf=(e,t)=>{_r(e.inputs),e.compute(Ba("MaxPool",e.inputs[0],!1,t))},Lf=e=>{let t=e.storage_order,r=e.dilations,a=Aa(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(a.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let n={storageOrder:t,dilations:r,...a,cacheKey:""};return{...n,cacheKey:Hl(n)}},Vf=e=>{let t=e.format;return{format:t,...Ra,cacheKey:t}},Gf=(e,t)=>{_r(e.inputs),e.compute(Ba("GlobalMaxPool",e.inputs[0],!0,t))}}),Fl,Kl,jf,Hf,U_=L(()=>{ie(),se(),Ce(),oe(),Fl=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,a)=>r===e[2].dims[a]).reduce((r,a)=>r&&a,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((n,i)=>i===t.axis||n===e[0].dims[i]).reduce((n,i)=>n&&i,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],a=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/a)||t.blockSize>Math.ceil(r/(a-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Kl=(e,t)=>{let r=M.normalizeAxis(t.axis,e[0].dims.length),a=e[0].dataType,n=a===3,i=e[0].dims,o=e[1].dataType,u=M.size(i),p=a===3||a===2,d=p?[Math.ceil(M.size(e[0].dims)/4)]:e[0].dims,f=e[1].dims,h=e.length>2?e[2]:void 0,g=h?p?[Math.ceil(M.size(h.dims)/4)]:h.dims:void 0,y=f.length===0||f.length===1&&f[0]===1,_=y===!1&&f.length===1,w=Te(u),x=y&&(!p||w===4),$=x?w:1,v=x&&!p?w:1,C=D("input",p?12:a,d.length,v),k=D("scale",o,f.length),S=h?D("zero_point",p?12:a,g.length):void 0,I=X("output",o,i.length,$),E=[C,k];S&&E.push(S);let A=[d,f];h&&A.push(g);let R=[{type:12,data:u/$},{type:12,data:r},{type:12,data:t.blockSize},...ee(...A,i)],W=F=>{let H=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${F.registerUniforms(H).declareVariables(...E,I)}
      ${F.mainStart()}
          ${F.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${I.offsetToIndices("global_idx")};

          // Set input x
          ${p?`
            let input = ${C.getByOffset("global_idx / 4")};
            let x_vec = ${n?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${$===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${C.getByOffset("global_idx")};`};

          // Set scale input
          ${y?`let scale_value= ${k.getByOffset("0")}`:_?`
            let scale_index = ${I.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${k.getByOffset("scale_index")};`:`
            var scale_indices: ${k.type.indices} = output_indices;
            let index = ${k.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${k.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${k.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${S?y?p?`
                let zero_point_input = ${S.getByOffset("0")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${S.getByOffset("0")}`:_?p?`
                let zero_point_index = ${I.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${S.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${I.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${S.getByOffset("zero_point_index")};`:p?`
                let zero_point_offset = ${k.indicesToOffset("scale_indices")};
                let zero_point_input = ${S.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${S.getByIndices("scale_indices")};`:`let zero_point_value = ${p?n?"i32":"u32":C.type.value}(0);`};
      // Compute and write output
      ${I.setByOffset("global_idx",`${I.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:S?["rank","rank","rank"]:["rank","rank"]},getShaderSource:W,getRunData:()=>({outputs:[{dims:i,dataType:o}],dispatchGroup:{x:Math.ceil(u/$/64),y:1,z:1},programUniforms:R})}},jf=(e,t)=>{Fl(e.inputs,t),e.compute(Kl(e.inputs,t))},Hf=e=>he({axis:e.axis,blockSize:e.blockSize})}),Zl,Yl,Ff,q_=L(()=>{Xe(),ie(),oe(),Zl=(e,t,r)=>{let a=e===t,n=e<t&&r<0,i=e>t&&r>0;if(a||n||i)throw new Error("Range these inputs' contents are invalid.")},Yl=(e,t,r,a)=>{let n=Math.abs(Math.ceil((t-e)/r)),i=[n],o=n,u=[{type:12,data:o},{type:a,data:e},{type:a,data:r},...ee(i)],p=d=>{let f=X("output",a,i.length),h=f.type.value,g=[{name:"outputSize",type:"u32"},{name:"start",type:h},{name:"delta",type:h}];return`
        ${d.registerUniforms(g).declareVariables(f)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${h}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${a}`},getShaderSource:p,getRunData:()=>({outputs:[{dims:i,dataType:a}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u})}},Ff=e=>{let t=0,r=0,a=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],a=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],a=e.inputs[2].getFloat32Array()[0]),ve.webgpu.validateInputContent&&Zl(t,r,a),e.compute(Yl(t,r,a,e.inputs[0].dataType),{inputs:[]})}}),Xl,Ql,Kf,Zf,W_=L(()=>{ie(),se(),Ce(),oe(),Xl=(e,t,r,a)=>{if(e!=="none"&&a!=="i32"&&a!=="u32"&&a!=="f32")throw new Error(`Input ${a} is not supported with reduction ${e}.`);let n=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,i=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return a==="i32"||a==="u32"?`atomicAdd(&${t}, bitcast<${a}>(${r}));`:`
              ${n}bitcast<${a}>(oldValue) + (${r})${i}`;case"max":return a==="i32"||a==="u32"?`atomicMax(&${t}, bitcast<${a}>(${r}));`:`
                ${n}max(bitcast<f32>(oldValue), (${r}))${i}`;case"min":return a==="i32"||a==="u32"?`atomicMin(&${t}, bitcast<${a}>(${r}));`:`${n}min(bitcast<${a}>(oldValue), (${r}))${i}`;case"mul":return`${n}(bitcast<${a}>(oldValue) * (${r}))${i}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Ql=(e,t)=>{let r=e[0].dims,a=e[1].dims,n=r,i=1,o=Math.ceil(M.sizeToDimension(a,a.length-1)/i),u=a[a.length-1],p=M.sizeFromDimension(r,u),d=[{type:12,data:o},{type:12,data:u},{type:12,data:p},...ee(e[1].dims,e[2].dims,n)],f=h=>{let g=D("indices",e[1].dataType,e[1].dims.length),y=D("updates",e[2].dataType,e[2].dims.length,i),_=t.reduction!=="none"&&t.reduction!==""?$p("output",e[0].dataType,n.length):X("output",e[0].dataType,n.length,i);return`
      ${h.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(g,y,_)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${Xl(t.reduction,"output[data_offset + i]","value",_.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:d}),getShaderSource:f}},Kf=e=>he({reduction:e.reduction}),Zf=(e,t)=>{e.compute(Ql(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Jl,ed,td,Ma,rd,id,ad,nd,sd,od,ud,ld,Na,dd,pd,cd,fd,hd,Yf,Xf,L_=L(()=>{ie(),se(),Ce(),oe(),Jl=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},ed=(e,t,r)=>{t.every(n=>n>=0&&n<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let a=new Array(r).fill(1);return t.forEach((n,i)=>a[n]=e[i]),a},td=(e,t,r,a,n,i)=>{let[o,u,p]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(f=>i.push(f));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0){if(e[u].getFloat32Array().forEach(f=>a.push(f)),a.length!==0&&a.length!==d&&r>=18&&a.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Jl(a,t),t.axes.length>0&&ed(a,t.axes,d).forEach((f,h)=>a[h]=f)}if(p>0&&e.length>p&&e[p].dims.length===1&&e[p].dims[0]>0&&(e[p].getBigInt64Array().forEach(f=>n.push(Number(f))),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof a<"u"&&typeof n<"u"&&a.length>0&&n.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},Ma=(e,t,r,a)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${a}(big / (${r}));
  let fract = ${a}(big % (${r})) / ${a}(${r});
  return whole + fract;
`,rd=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Ma("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Ma("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",id=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",ad=(e,t,r)=>{let a=new Array(r).fill(0).concat(new Array(r).fill(1)),n=e.length===0?a:e.slice();return t.length>0?(t.forEach((i,o)=>{a[i]=n[o],a[o+r]=n[t.length+o]}),a):n},nd=(e,t,r,a)=>{let n=[];if(r.length>0)if(a.length>0){if(e.forEach(i=>n.push(i)),Math.max(...a)>e.length)throw new Error("axes is out of bound");a.forEach((i,o)=>n[i]=r[o])}else r.forEach(i=>n.push(i));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");n=e.map((i,o)=>Math.round(i*t[o]))}return n},sd=(e,t,r)=>{let a=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(i=>t[i]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(i=>t[i]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let n=e.slice();return r.axes.length>0?(r.axes.forEach(i=>t[i]=a),r.axes.forEach(i=>n[i]=Math.round(e[i]*t[i]))):(t.fill(a,0,t.length),n.forEach((i,o)=>n[o]=Math.round(i*t[o]))),n},od=(e,t,r,a,n)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${J("uniforms.scales","i",a)};
        var roi_low = ${J("uniforms.roi","i",n)};
        var roi_hi = ${J("uniforms.roi",`i + ${t.length}`,n)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${J("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${J("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,ud=(e,t,r,a,n,i,o)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${a.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${J("uniforms.scales","i",n)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${J("uniforms.roi","i",i)};
          var roi_hi = ${J("uniforms.roi",`i + ${r.length}`,i)};
          var input_shape_i = ${J("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${J("uniforms.output_shape","i",a.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${o} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,ld=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${J("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Na=(e,t,r,a)=>e.rank>a?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",dd=(e,t,r,a,n)=>{let[i,o,u,p]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(row, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(col, ${r[u]} - 1))`)};
      ${Na(e,p,i,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${o}];
      var col:${d} = originalIndices[${u}];
      ${a?`if (row < 0 || row > (${r[o]} - 1) || col < 0 || col > (${r[u]} - 1)) {
        return ${n};
      }`:""};
      row = max(0, min(row, ${r[o]} - 1));
      col = max(0, min(col, ${r[u]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${p}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${i}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},pd=(e,t,r,a,n,i,o,u,p,d)=>{let f=r.length===2,[h,g]=f?[0,1]:[2,3],y=e.type.value,_=w=>{let x=w===h?"row":"col";return`
      fn ${x}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${y} {
        var output_index = ${t.indicesGet("output_indices",w)};
        var originalIdx: ${y} = getOriginalCoordinateFromResizedCoordinate(output_index, ${n[w]},
        ${a[w]}, ${r[w]}, ${i[w]}, ${i[w]} + ${r.length});
        var fractOriginalIdx: ${y} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${u} && (originalIdx < 0 || originalIdx > (${r[w]} - 1))) {
          return ${p};
        }
        var data: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${x}: ${y} = originalIdx + ${y}(i);
          if (${x} < 0 || ${x} >= ${r[w]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:u?`return ${p};`:`${x} = max(0, min(${x}, ${r[w]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",w,`u32(${x})`)};
          data[i + 1] = ${w===h?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${_(h)};
    ${_(g)};
  fn getCubicInterpolationCoefs(s: ${y}) -> array<${y}, 4> {
    var absS = abs(s);
    var coeffs: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${y} = 1.0 - absS;
    var twoMinusAbsS: ${y} = 2.0 - absS;
    var onePlusAbsS: ${y} = 1.0 + absS;
    coeffs[0] = ((${o} * onePlusAbsS - 5 * ${o}) * onePlusAbsS + 8 * ${o}) * onePlusAbsS - 4 * ${o};
    coeffs[1] = ((${o} + 2) * absS - (${o} + 3)) * absS * absS + 1;
    coeffs[2] = ((${o} + 2) * oneMinusAbsS - (${o} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${o} * twoMinusAbsS - 5 * ${o}) * twoMinusAbsS + 8 * ${o}) * twoMinusAbsS - 4 * ${o};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${y}, 4>, coefs: array<${y}, 4>) -> ${y} {
    var coefsSum: ${y} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${y} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},cd=(e,t,r,a,n)=>{let[i,o,u,p,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],f=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${f} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(depth, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(height, ${r[u]} - 1))`)};
      ${e.indicesSet("input_indices",p,`max(0, min(width, ${r[p]} - 1))`)};
      ${Na(e,d,i,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${f} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${f} = originalIndices[${o}];
      var height:${f} = originalIndices[${u}];
      var width:${f} = originalIndices[${p}];
      ${a?`if (depth < 0 || depth > (${r[o]} - 1) || height < 0 || height > (${r[u]} - 1) || width < 0 || (width > ${r[p]} - 1)) {
      return ${n};
        }`:""};

    depth = max(0, min(depth, ${r[o]} - 1));
      height = max(0, min(height, ${r[u]} - 1));
      width = max(0, min(width, ${r[p]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${i}])`:"0"};

      var x111: ${f} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${f} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${f} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${f} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${f} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${f} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${f} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${f} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${f} = abs(depth - ${f}(depth1));
      var dx2: ${f} = abs(${f}(depth2) - depth);
      var dy1: ${f} = abs(height - ${f}(height1));
      var dy2: ${f} = abs(${f}(height2) - height);
      var dz1: ${f} = abs(width - ${f}(width1));
      var dz2: ${f} = abs(${f}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},fd=(e,t,r,a,n,i)=>{let o=e.dims,u=ad(i,t.axes,o.length),p=nd(o,a,n,t.axes),d=a.slice();a.length===0&&(d=o.map((v,C)=>v===0?1:p[C]/v),t.keepAspectRatioPolicy!=="stretch"&&(p=sd(o,d,t)));let f=X("output",e.dataType,p.length),h=D("input",e.dataType,o.length),g=M.size(p),y=o.length===p.length&&o.every((v,C)=>v===p[C]),_=t.coordinateTransformMode==="tf_crop_and_resize",w=t.extrapolationValue,x=h.type.value,$=v=>`
      ${y?"":`
      ${rd(t.coordinateTransformMode,x)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${ld(h,o)};
              ${id(t.nearestMode,r,x)};
              ${ud(h,f,o,p,d.length,u.length,_)};
              `;case"linear":return`
              ${od(f,o,p,d.length,u.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${dd(h,f,o,_,w)}`;if(o.length===3||o.length===5)return`${cd(h,f,o,_,w)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(o.length===2||o.length===4)return`${pd(h,f,o,p,d,u,t.cubicCoeffA,_,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${v.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",u.length).declareVariables(h,f)}
      ${v.mainStart()}
        ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${y?"output[global_idx] = input[global_idx];":`
        let output_indices = ${f.offsetToIndices("global_idx")};
        var input_indices: ${h.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${h.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${o.length===2||o.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${n.length>0?n:""}|${u.length>0?u:""}|${y}|${t.mode==="nearest"?o.length:o}`,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:p,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},{type:1,data:d},{type:1,data:u},...ee(o,p)]})}},hd=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},Yf=(e,t)=>{let r=[],a=[],n=[],i=hd(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");td(e.inputs,t,i,r,a,n),e.compute(fd(e.inputs[0],t,i,r,a,n),{inputs:[0]})},Xf=e=>{let t=e.antialias,r=e.axes,a=e.coordinateTransformMode,n=e.cubicCoeffA,i=e.excludeOutside!==0,o=e.extrapolationValue,u=e.keepAspectRatioPolicy,p=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return he({antialias:t,axes:r,coordinateTransformMode:a,cubicCoeffA:n,excludeOutside:i,extrapolationValue:o,keepAspectRatioPolicy:u,mode:p,nearestMode:d})}}),md,gd,Qf,V_=L(()=>{ie(),se(),oe(),md=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],a=e[2];if(t.dataType!==r.dataType||t.dataType!==a.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let n=t.dims[t.dims.length-1],i=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==n)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==i)throw new Error("Skip must have the same sequence length as input");if(a.dims.length!==1)throw new Error("Gamma must be 1D");if(a.dims[a.dims.length-1]!==n)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let o=e[3];if(o.dims.length!==1)throw new Error("Beta must be 1D");if(o.dims[o.dims.length-1]!==n)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let o=e[4];if(o.dims.length!==1)throw new Error("Bias must be 1D");if(o.dims[o.dims.length-1]!==n)throw new Error("Bias must have the same hidden size as input")}},gd=(e,t,r,a)=>{let n=t.simplified,i=e[0].dims,o=M.size(i),u=i,p=o,d=i.slice(-1)[0],f=a?i.slice(0,-1).concat(1):[],h=!n&&e.length>3,g=e.length>4,y=a&&r>1,_=a&&r>2,w=r>3,x=64,$=Te(d),v=[{type:12,data:p},{type:12,data:$},{type:12,data:d},{type:1,data:t.epsilon}],C=S=>{let I=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],E=[D("x",e[0].dataType,e[0].dims,$),D("skip",e[1].dataType,e[1].dims,$),D("gamma",e[2].dataType,e[2].dims,$)];h&&E.push(D("beta",e[3].dataType,e[3].dims,$)),g&&E.push(D("bias",e[4].dataType,e[4].dims,$)),E.push(X("output",e[0].dataType,u,$)),y&&E.push(X("mean_output",1,f)),_&&E.push(X("inv_std_output",1,f)),w&&E.push(X("input_skip_bias_sum",e[0].dataType,u,$));let A=ze(e[0].dataType),R=ze(1,$);return`

      ${S.registerUniforms(I).declareVariables(...E)}
      var<workgroup> sum_shared : array<${R}, ${x}>;
      var<workgroup> sum_squared_shared : array<${R}, ${x}>;

      ${S.mainStart([x,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${x};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${x};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${x-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${g?"bias[offset1d + i]":A+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${w?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${tr(A,$,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${x};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Et("sum",$)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Et("square_sum",$)} / f32(uniforms.hidden_size) ${n?"":"- mean * mean"} + uniforms.epsilon);
        ${y?"mean_output[global_idx] = mean;":""}
        ${_?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${n?"":`- ${A}(mean)`}) *
            ${A}(inv_std_dev) * gamma[offset1d + i]
            ${h?"+ beta[offset1d + i]":""};
        }
      }`},k=[{dims:u,dataType:e[0].dataType}];return r>1&&k.push({dims:f,dataType:1}),r>2&&k.push({dims:f,dataType:1}),r>3&&k.push({dims:i,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${$};${y};${_};${w}`,inputDependencies:e.map((S,I)=>"type")},getShaderSource:C,getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(p/d)},programUniforms:v})}},Qf=(e,t)=>{md(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(gd(e.inputs,t,e.outputCount,!1),{outputs:r})}}),_d,yr,yd,Da,bd,wd,Jf,eh,G_=L(()=>{ie(),se(),Ce(),oe(),_d=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,a)=>{if(e[a+1].dataType!==6&&e[a+1].dataType!==7)throw new Error(`Input ${a} must be an array of int32 or int64`)})},yr=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(a=>r.push(Number(a)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(a=>r.push(Number(a)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},yd=(e,t)=>{if(e.length>1){let r=yr(e,1),a=yr(e,2),n=yr(e,3);return n.length===0&&(n=[...Array(e[0].dims.length).keys()]),he({starts:r,ends:a,axes:n})}else return t},Da=(e,t,r,a,n)=>{let i=e;return e<0&&(i+=r[a[t]]),n[t]<0?Math.max(0,Math.min(i,r[a[t]]-1)):Math.max(0,Math.min(i,r[a[t]]))},bd=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${J("uniforms.input_shape","i",r.length)};
            let steps_i = ${J("uniforms.steps","i",r.length)};
            let signs_i = ${J("uniforms.signs","i",r.length)};
            let starts_i = ${J("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,wd=(e,t)=>{let r=e[0].dims,a=M.size(r),n=t.axes.length>0?M.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],i=yr(e,4);i.forEach($=>$!==0||(()=>{throw new Error("step cannot be 0")})),i.length===0&&(i=Array(n.length).fill(1));let o=t.starts.map(($,v)=>Da($,v,r,n,i)),u=t.ends.map(($,v)=>Da($,v,r,n,i));if(n.length!==o.length||n.length!==u.length)throw new Error("start, ends and axes should have the same number of elements");if(n.length!==r.length)for(let $=0;$<r.length;++$)n.includes($)||(o.splice($,0,0),u.splice($,0,r[$]),i.splice($,0,1));let p=i.map($=>Math.sign($));i.forEach(($,v,C)=>{if($<0){let k=(u[v]-o[v])/$,S=o[v],I=S+k*i[v];o[v]=I,u[v]=S,C[v]=-$}});let d=r.slice(0);n.forEach(($,v)=>{d[$]=Math.ceil((u[$]-o[$])/i[$])});let f={dims:d,dataType:e[0].dataType},h=X("output",e[0].dataType,d.length),g=D("input",e[0].dataType,e[0].dims.length),y=M.size(d),_=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:o.length},{name:"signs",type:"i32",length:p.length},{name:"steps",type:"u32",length:i.length}],w=[{type:12,data:y},{type:12,data:o},{type:6,data:p},{type:12,data:i},...ee(e[0].dims,d)],x=$=>`
      ${$.registerUniforms(_).declareVariables(g,h)}
        ${bd(g,h,r)}
        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${h.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${h.setByOffset("global_idx",g.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${p.length}_${o.length}_${i.length}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[f],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:w})}},Jf=(e,t)=>{_d(e.inputs,t);let r=yd(e.inputs,t);e.compute(wd(e.inputs,r),{inputs:[0]})},eh=e=>{let t=e.starts,r=e.ends,a=e.axes;return he({starts:t,ends:r,axes:a})}}),vd,$d,th,rh,j_=L(()=>{ie(),se(),Ce(),At(),oe(),vd=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},$d=(e,t)=>{let r=e.inputs[0],a=r.dims,n=M.size(a),i=a.length,o=M.normalizeAxis(t.axis,i),u=o<a.length-1,p,d=[];u?(d=Array.from({length:i},(E,A)=>A),d[o]=i-1,d[i-1]=o,p=e.compute(Ze(r,d),{inputs:[r],outputs:[-1]})[0]):p=r;let f=p.dims,h=f[i-1],g=n/h,y=Te(h),_=h/y,w=64;g===1&&(w=256);let x=(E,A)=>A===4?`max(max(${E}.x, ${E}.y), max(${E}.z, ${E}.w))`:A===2?`max(${E}.x, ${E}.y)`:A===3?`max(max(${E}.x, ${E}.y), ${E}.z)`:E,$=D("x",p.dataType,p.dims,y),v=X("result",p.dataType,p.dims,y),C=$.type.value,k=ze(p.dataType)==="f32"?`var threadMax = ${C}(-3.402823e+38f);`:`var threadMax = ${C}(-65504.0h);`,S=E=>`
      var<workgroup> rowMaxShared : ${C};
      var<workgroup> rowSumShared : ${C};
      var<workgroup> threadShared : array<${C}, ${w}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${C} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${C}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${E.registerUniform("packedCols","i32").declareVariables($,v)}
      ${E.mainStart(w)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${w};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${k}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${C}(${x("threadShared[0]",y)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${C}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${C}(${Et("threadShared[0]",y)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${C}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,I=e.compute({name:"Softmax",shaderCache:{hint:`${y};${w}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:f,dataType:p.dataType}],dispatchGroup:{x:g},programUniforms:[{type:6,data:_}]}),getShaderSource:S},{inputs:[p],outputs:[u?-1:0]})[0];u&&e.compute(Ze(I,d),{inputs:[I]})},th=(e,t)=>{vd(e.inputs),$d(e,t)},rh=e=>he({axis:e.axis})}),Pa,xd,Td,Cd,ih,H_=L(()=>{ie(),se(),oe(),Pa=e=>Array.from(e.getBigInt64Array(),Number),xd=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Pa(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Td=(e,t)=>{let r=[];for(let a=0;a<e.length;++a)r.push(e[a]*t[a]);return r},Cd=(e,t)=>{let r=e[0].dims,a=t??Pa(e[1]),n=Td(r,a),i=M.size(n),o=e[0].dataType,u=D("input",o,r.length),p=X("output",o,n.length),d=f=>`
      const inputShape = ${u.indices(...r)};
      ${f.registerUniform("output_size","u32").declareVariables(u,p)}
      ${f.mainStart()}
      ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${p.offsetToIndices("global_idx")};
      var input_indices: ${u.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${u.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${p.indicesGet("output_indices","i")}  % input_dim_i;

        ${u.indicesSet("input_indices","i","input_dim_value")}
      }
      ${p.setByOffset("global_idx",u.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${a}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},...ee(e[0].dims,n)]}),getShaderSource:d}},ih=e=>{xd(e.inputs),e.compute(Cd(e.inputs),{inputs:[0]})}}),kd,Sd,ah,F_=L(()=>{ie(),se(),oe(),kd=(e,t,r,a,n)=>{let i=X("output_data",n,r.length,4),o=D("a_data",t[1].dataType,t[1].dims.length,4),u=D("b_data",t[2].dataType,t[2].dims.length,4),p=D("c_data",t[0].dataType,t[0].dims.length,4),d,f=(h,g,y)=>`select(${g}, ${h}, ${y})`;if(!a)d=i.setByOffset("global_idx",f(o.getByOffset("global_idx"),u.getByOffset("global_idx"),p.getByOffset("global_idx")));else{let h=(g,y,_="")=>{let w=`a_data[index_a${y}][component_a${y}]`,x=`b_data[index_b${y}][component_b${y}]`,$=`bool(c_data[index_c${y}] & (0xffu << (component_c${y} * 8)))`;return`
            let output_indices${y} = ${i.offsetToIndices(`global_idx * 4u + ${y}u`)};
            let offset_a${y} = ${o.broadcastedIndicesToOffset(`output_indices${y}`,i)};
            let offset_b${y} = ${u.broadcastedIndicesToOffset(`output_indices${y}`,i)};
            let offset_c${y} = ${p.broadcastedIndicesToOffset(`output_indices${y}`,i)};
            let index_a${y} = offset_a${y} / 4u;
            let index_b${y} = offset_b${y} / 4u;
            let index_c${y} = offset_c${y} / 4u;
            let component_a${y} = offset_a${y} % 4u;
            let component_b${y} = offset_b${y} % 4u;
            let component_c${y} = offset_c${y} % 4u;
            ${g}[${y}] = ${_}(${f(w,x,$)});
          `};n===9?d=`
            var data = vec4<u32>(0);
            ${h("data",0,"u32")}
            ${h("data",1,"u32")}
            ${h("data",2,"u32")}
            ${h("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${h("output_data[global_idx]",0)}
            ${h("output_data[global_idx]",1)}
            ${h("output_data[global_idx]",2)}
            ${h("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(p,o,u,i)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},Sd=e=>{let t=e[1].dims,r=e[2].dims,a=e[0].dims,n=e[1].dataType,i=!(M.areEqual(t,r)&&M.areEqual(r,a)),o=t,u=M.size(t);if(i){let d=rr.calcShape(rr.calcShape(t,r,!1),a,!1);if(!d)throw new Error("Can't perform where op on the given tensors");o=d,u=M.size(o)}let p=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>kd(d,e,o,i,n),getRunData:()=>({outputs:[{dims:o,dataType:n}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:p},...ee(a,t,r,o)]})}},ah=e=>{e.compute(Sd(e.inputs))}}),nh,K_=L(()=>{u_(),Cn(),l_(),d_(),p_(),c_(),f_(),y_(),w_(),v_(),$_(),x_(),T_(),C_(),k_(),S_(),I_(),E_(),z_(),A_(),O_(),R_(),B_(),M_(),N_(),Tf(),D_(),P_(),U_(),q_(),W_(),Tn(),L_(),Ef(),V_(),G_(),j_(),Sf(),H_(),At(),kn(),F_(),nh=new Map([["Abs",[Xp]],["Acos",[Qp]],["Acosh",[Jp]],["Add",[Rc]],["ArgMax",[Fp,Qa]],["ArgMin",[Hp,Qa]],["Asin",[ec]],["Asinh",[tc]],["Atan",[rc]],["Atanh",[ic]],["Attention",[Kp]],["AveragePool",[Pf,Df]],["BatchNormalization",[Zp]],["BiasAdd",[Yp]],["BiasSplitGelu",[Oc]],["Cast",[nc,ac]],["Ceil",[oc]],["Clip",[sc]],["Concat",[Vc,Gc]],["Conv",[nn,an]],["ConvTranspose",[ef,Jc]],["Cos",[uc]],["Cosh",[lc]],["CumSum",[tf,rf]],["DepthToSpace",[af,nf]],["DequantizeLinear",[jf,Hf]],["Div",[Bc]],["Einsum",[sf,of]],["Elu",[dc,Cr]],["Equal",[Mc]],["Erf",[pc]],["Exp",[cc]],["Expand",[uf]],["FastGelu",[lf]],["Floor",[fc]],["FusedConv",[nn,an]],["Gather",[pf,df]],["GatherElements",[_f,gf]],["GatherBlockQuantized",[hf,mf]],["GatherND",[cf,ff]],["Gelu",[hc]],["Gemm",[bf,yf]],["GlobalAveragePool",[qf,Uf]],["GlobalMaxPool",[Gf,Vf]],["Greater",[Uc]],["GreaterOrEqual",[Wc]],["GridSample",[wf,vf]],["GroupQueryAttention",[zf]],["HardSigmoid",[$c,vc]],["InstanceNormalization",[Af]],["LayerNormalization",[Of]],["LeakyRelu",[mc,Cr]],["Less",[qc]],["LessOrEqual",[Lc]],["Log",[zc]],["MatMul",[Rf]],["MatMulNBits",[Bf,Mf]],["MaxPool",[Wf,Lf]],["Mul",[Nc]],["MultiHeadAttention",[xf,$f]],["Neg",[_c]],["Not",[gc]],["Pad",[Nf]],["Pow",[Dc]],["QuickGelu",[Ac,Cr]],["Range",[Ff]],["Reciprocal",[yc]],["ReduceMin",[Wp]],["ReduceMean",[Np]],["ReduceMax",[qp]],["ReduceSum",[Vp]],["ReduceProd",[Lp]],["ReduceL1",[Dp]],["ReduceL2",[Pp]],["ReduceLogSum",[jp]],["ReduceLogSumExp",[Up]],["ReduceSumSquare",[Gp]],["Relu",[bc]],["Resize",[Yf,Xf]],["RotaryEmbedding",[If]],["ScatterND",[Zf,Kf]],["Sigmoid",[wc]],["Sin",[xc]],["Sinh",[Tc]],["Slice",[Jf,eh]],["SkipLayerNormalization",[Qf]],["Split",[Cf,kf]],["Sqrt",[Cc]],["Softmax",[th,rh]],["Sub",[Pc]],["Tan",[kc]],["Tanh",[Sc]],["ThresholdedRelu",[Ec,Cr]],["Tile",[ih]],["Transpose",[Tp,Cp]],["Where",[ah]]])}),sh,Z_=L(()=>{Xe(),yt(),oe(),sh=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,a,n){dt(e.programInfo.name);let i=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let u=[];for(let d of t)u.push({binding:u.length,resource:{buffer:d.buffer}});for(let d of r)u.push({binding:u.length,resource:{buffer:d.buffer}});n&&u.push({binding:u.length,resource:n});let p=i.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:u,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:p,dispatchGroup:a};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}o.setPipeline(e.computePipeline),o.setBindGroup(0,p),o.dispatchWorkgroups(...a),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),nt(e.programInfo.name)}dispose(){}build(e,t){dt(e.name);let r=this.backend.device,a=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&a.push(`enable ${d.extension};`)});let n=xp(t,this.backend.device.limits),i=e.getShaderSource(n),o=`${a.join(`
`)}
${n.additionalImplementations}
${i}`,u=r.createShaderModule({code:o,label:e.name});pe("verbose",()=>`[WebGPU] ${e.name} shader code: ${o}`);let p=r.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:e.name});return nt(e.name),{programInfo:e,computePipeline:p,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,a=typeof e=="number"?1:e.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=n&&r<=n&&a<=n)return[t,r,a];let i=t*r*a,o=Math.ceil(Math.sqrt(i));if(o>n){if(o=Math.ceil(Math.cbrt(i)),o>n)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[o,o,o]}else return[o,o,1]}}}),oh={};ar(oh,{WebGpuBackend:()=>uh});var Id,Ed,zd,uh,Y_=L(()=>{Xe(),ie(),yt(),yp(),s_(),K_(),Z_(),Id=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let a=0;a<e.length;++a){let n=e[a].dataType;switch(t[a]){case"none":{r.push("");break}case"type":{r.push(`${n}`);break}case"rank":{let i=e[a].dims.length;r.push(`${n};${i}`);break}case"dims":{let i=e[a].dims.join(",");r.push(`${n};${i}`);break}default:throw new Error(`unsupported input dependency: ${t[a]}`)}}return r.join("|")},Ed=(e,t,r)=>{var n,i;let a=e.name;return(n=e.shaderCache)!=null&&n.hint&&(a+="["+e.shaderCache.hint+"]"),a+=":"+r+`:${Id(t,((i=e.shaderCache)==null?void 0:i.inputDependencies)??new Array(t.length).fill("dims"))}`,a},zd=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},uh=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],a={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},n=i=>t.features.has(i)&&r.push(i)&&!0;n("chromium-experimental-timestamp-query-inside-passes")||n("timestamp-query"),n("shader-f16"),n("subgroups"),this.device=await t.requestDevice(a),this.adapterInfo=new zd(t.info||await t.requestAdapterInfo()),this.gpuDataManager=vp(this),this.programManager=new sh(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,wn(e.logLevel,!!e.debug),this.device.onuncapturederror=i=>{i.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${i.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;dt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var a;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let n=0;n<t.length/2;n++){let i=r[n],o=i.kernelId,u=this.kernels.get(o),p=u.kernelType,d=u.kernelName,f=i.programName,h=i.inputTensorViews,g=i.outputTensorViews,y=t[n*2],_=t[n*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=y);let w=Number(y-this.queryTimeBase),x=Number(_-this.queryTimeBase);if(!Number.isSafeInteger(w)||!Number.isSafeInteger(x))throw new RangeError("incorrect timestamp range");if((a=this.env.webgpu.profiling)!=null&&a.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:h.map($=>({dims:$.dims,dataType:_t($.dataType)})),outputsMetadata:g.map($=>({dims:$.dims,dataType:_t($.dataType)})),kernelId:o,kernelType:p,kernelName:d,programName:f,startTime:w,endTime:x});else{let $="";h.forEach((C,k)=>{$+=`input[${k}]: [${C.dims}] | ${_t(C.dataType)}, `});let v="";g.forEach((C,k)=>{v+=`output[${k}]: [${C.dims}] | ${_t(C.dataType)}, `}),console.log(`[profiling] kernel "${o}|${p}|${d}|${f}" ${$}${v}start time: ${w} ns, execution time: ${x-w} ns`)}si("GPU",`${f}::${y}::${_}`)}e.unmap(),this.pendingQueries.delete(e)}),nt()}run(e,t,r,a,n,i){dt(e.name);let o=[];for(let v=0;v<t.length;++v){let C=t[v].data;if(C===0)continue;let k=this.gpuDataManager.get(C);if(!k)throw new Error(`no GPU data for input: ${C}`);o.push(k)}let{outputs:u,dispatchGroup:p,programUniforms:d}=e.getRunData(t),f=r.length===0?u.map((v,C)=>C):r;if(f.length!==u.length)throw new Error(`Output size ${f.length} must be equal to ${u.length}.`);let h=[],g=[];for(let v=0;v<u.length;++v){if(!Number.isInteger(f[v])||f[v]<-3||f[v]>=i)throw new Error(`Invalid output index: ${f[v]}`);if(f[v]===-3)continue;let C=f[v]===-1,k=f[v]===-2,S=C||k?n(u[v].dataType,u[v].dims):a(f[v],u[v].dataType,u[v].dims);if(h.push(S),S.data===0)continue;let I=this.gpuDataManager.get(S.data);if(!I)throw new Error(`no GPU data for output: ${S.data}`);if(C&&this.temporaryData.push(I),k){let E=this.kernelPersistentData.get(this.currentKernelId);E||(E=[],this.kernelPersistentData.set(this.currentKernelId,E)),E.push(I)}g.push(I)}if(o.length!==t.length||g.length!==h.length){if(g.length===0)return nt(e.name),h;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let y;if(d){let v=0,C=[];d.forEach(E=>{let A=typeof E.data=="number"?[E.data]:E.data;if(A.length===0)return;let R=E.type===10?2:4,W,F;E.type===10?(F=A.length>4?16:A.length>2?8:A.length*R,W=A.length>4?16:R*A.length):(F=A.length<=2?A.length*R:16,W=16),v=Math.ceil(v/F)*F,C.push(v);let H=E.type===10?8:4;v+=A.length>4?Math.ceil(A.length/H)*W:A.length*R});let k=16;v=Math.ceil(v/k)*k;let S=new ArrayBuffer(v);d.forEach((E,A)=>{let R=C[A],W=typeof E.data=="number"?[E.data]:E.data;if(E.type===6)new Int32Array(S,R,W.length).set(W);else if(E.type===12)new Uint32Array(S,R,W.length).set(W);else if(E.type===10)new Uint16Array(S,R,W.length).set(W);else if(E.type===1)new Float32Array(S,R,W.length).set(W);else throw new Error(`Unsupported uniform type: ${_t(E.type)}`)});let I=this.gpuDataManager.create(v,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(I.buffer,0,S,0,v),this.gpuDataManager.release(I.id),y={offset:0,size:v,buffer:I.buffer}}let _=this.programManager.normalizeDispatchGroupSize(p),w=_[1]===1&&_[2]===1,x=Ed(e,t,w),$=this.programManager.getArtifact(x);if($||($=this.programManager.build(e,_),this.programManager.setArtifact(x,$),pe("info",()=>`[artifact] key: ${x}, programName: ${e.name}`)),d&&$.uniformVariablesInfo){if(d.length!==$.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${$.uniformVariablesInfo.length}, got ${d.length} in program "${$.programInfo.name}".`);for(let v=0;v<d.length;v++){let C=d[v],k=C.type,S=typeof C.data=="number"?1:C.data.length,[I,E]=$.uniformVariablesInfo[v];if(k!==I||S!==E)throw new Error(`Uniform variable ${v} mismatch: expect type ${I} with size ${E}, got type ${k} with size ${S} in program "${$.programInfo.name}".`)}}if(pe("info",()=>`[ProgramManager] run "${e.name}" (key=${x}) with ${_[0]}x${_[1]}x${_[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let v={kernelId:this.currentKernelId,programName:$.programInfo.name,inputTensorViews:t,outputTensorViews:h};this.pendingKernels.push(v),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(v)}return this.programManager.run($,o,g,_,y),nt(e.name),h}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,a){let n=nh.get(e);if(!n)throw new Error(`kernel not implemented: ${e}`);let i={kernelType:e,kernelName:a,kernelEntry:n[0],attributes:[n[1],r]};this.kernels.set(t,i)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let a=this.kernels.get(e);if(!a)throw new Error(`kernel not created: ${e}`);let n=a.kernelType,i=a.kernelName,o=a.kernelEntry,u=a.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${n}] ${i}" is not allowed to be called recursively`);this.currentKernelId=e,u[0]&&(u[1]=u[0](u[1]),u[0]=void 0),pe("info",()=>`[WebGPU] Start to run kernel "[${n}] ${i}"...`);let p=this.env.debug;this.temporaryData=[];try{return p&&this.device.pushErrorScope("validation"),o(t,u[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${i}" failed. ${d}`)),1}finally{p&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${n}] ${i}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,a){let n=this.sessionExternalDataMapping.get(e);n||(n=new Map,this.sessionExternalDataMapping.set(e,n));let i=n.get(t),o=this.gpuDataManager.registerExternalBuffer(r,a,i);return n.set(t,[o,r]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let a=await Za(this,e,t);return vn(a.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){pe("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){pe("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){pe("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let a=0;a<r;a++){let n=this.getComputePassEncoder(),i=e[a];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(i.computePipeline),n.setBindGroup(0,i.bindGroup),n.dispatchWorkgroups(...i.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[a]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),lh={};ar(lh,{init:()=>dh});var ei,Ad,dh,X_=L(()=>{ie(),yt(),se(),n_(),ei=class ph{constructor(t,r,a,n){this.module=t,this.dataType=r,this.data=a,this.dims=n}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=M.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=M.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=M.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=M.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(M.size(t)!==M.size(this.dims))throw new Error("Invalid new shape");return new ph(this.module,this.dataType,this.data,t)}},Ad=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let a=e.PTR_SIZE,n=r/e.PTR_SIZE,i=a===4?"i32":"i64";this.opKernelContext=Number(e.getValue(a*n++,i));let o=Number(e.getValue(a*n++,i));this.outputCount=Number(e.getValue(a*n++,i)),this.customDataOffset=Number(e.getValue(a*n++,"*")),this.customDataSize=Number(e.getValue(a*n++,i));let u=[];for(let p=0;p<o;p++){let d=Number(e.getValue(a*n++,i)),f=Number(e.getValue(a*n++,"*")),h=Number(e.getValue(a*n++,i)),g=[];for(let y=0;y<h;y++)g.push(Number(e.getValue(a*n++,i)));u.push(new ei(e,d,f,g))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var o;let r=((o=t==null?void 0:t.inputs)==null?void 0:o.map(u=>typeof u=="number"?this.inputs[u]:u))??this.inputs,a=(t==null?void 0:t.outputs)??[],n=(u,p,d)=>new ei(this.module,p,this.output(u,d),d),i=(u,p)=>{let d=Vt(u,p);if(!d)throw new Error(`Unsupported data type: ${u}`);let f=d>0?this.backend.gpuDataManager.create(d).id:0;return new ei(this.module,u,f,p)};return this.backend.run(e,r,a,n,i,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let a=this.module.PTR_SIZE,n=a===4?"i32":"i64",i=this.module.stackAlloc((1+t.length)*a);this.module.setValue(i,t.length,n);for(let o=0;o<t.length;o++)this.module.setValue(i+a*(o+1),t[o],n);return this.module._JsepOutput(this.opKernelContext,e,i)}catch(a){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${a}`)}finally{this.module.stackRestore(r)}}},dh=async(e,t,r,a)=>{let n=t.jsepInit;if(!n)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let i=(Y_(),zr(oh)).WebGpuBackend,o=new i;await o.initialize(r,a),n("webgpu",[o,u=>o.alloc(Number(u)),u=>o.free(u),(u,p,d,f=!1)=>{if(f)pe("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(u)}, dst=${Number(p)}, size=${Number(d)}`),o.memcpy(Number(u),Number(p));else{pe("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(u)}, gpuDataId=${Number(p)}, size=${Number(d)}`);let h=t.HEAPU8.subarray(Number(u>>>0),Number(u>>>0)+Number(d));o.upload(Number(p),h)}},async(u,p,d)=>{pe("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${u}, dataOffset=${p}, size=${d}`),await o.download(Number(u),()=>t.HEAPU8.subarray(Number(p)>>>0,Number(p+d)>>>0))},(u,p,d)=>o.createKernel(u,Number(p),d,t.UTF8ToString(t._JsepGetNodeName(Number(p)))),u=>o.releaseKernel(u),(u,p,d,f)=>{pe("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${u}, contextDataOffset=${p}`);let h=new Ad(t,o,Number(p));return o.computeKernel(Number(u),h,f)},()=>o.captureBegin(),()=>o.captureEnd(),()=>o.replay()])}else{let i=new wp(r);n("webnn",[i,()=>i.reserveTensorId(),o=>i.releaseTensorId(o),async(o,u,p,d,f)=>i.ensureTensor(o,u,p,d,f),(o,u)=>{i.uploadTensor(o,u)},async(o,u)=>i.downloadTensor(o,u),(o,u)=>i.registerMLContext(o,u),!!r.trace])}}}),Od,On,Rn,kt,Rd,Ua,fi,Bn,Mn,qa,Nn,Dn,Pn,ch=L(()=>{Xe(),r_(),i_(),ie(),Zt(),gn(),hp(),Od=(e,t)=>{be()._OrtInit(e,t)!==0&&_e("Can't initialize onnxruntime.")},On=async e=>{Od(e.wasm.numThreads,ui(e.logLevel))},Rn=async(e,t)=>{var a,n;(n=(a=be()).asyncInit)==null||n.call(a);let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let o=e.webgpu.forceFallbackAdapter;if(o!==void 0&&typeof o!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${o}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:o}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let i=(X_(),zr(lh)).init;t==="webgpu"&&await i("webgpu",be(),e,r),t==="webnn"&&await i("webnn",be(),e)}},kt=new Map,Rd=e=>{let t=be(),r=t.stackSave();try{let a=t.PTR_SIZE,n=t.stackAlloc(2*a);t._OrtGetInputOutputCount(e,n,n+a)!==0&&_e("Can't get session input/output count.");let i=a===4?"i32":"i64";return[Number(t.getValue(n,i)),Number(t.getValue(n+a,i))]}finally{t.stackRestore(r)}},Ua=(e,t)=>{let r=be(),a=r.stackSave(),n=0;try{let i=r.PTR_SIZE,o=r.stackAlloc(2*i);r._OrtGetInputOutputMetadata(e,t,o,o+i)!==0&&_e("Can't get session input/output metadata.");let u=Number(r.getValue(o,"*"));n=Number(r.getValue(o+i,"*"));let p=r.HEAP32[n/4];if(p===0)return[u,0];let d=r.HEAPU32[n/4+1],f=[];for(let h=0;h<d;h++){let g=Number(r.getValue(n+8+h*i,"*"));f.push(g!==0?r.UTF8ToString(g):Number(r.getValue(n+8+(h+d)*i,"*")))}return[u,p,f]}finally{r.stackRestore(a),n!==0&&r._OrtFree(n)}},fi=e=>{let t=be(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Bn=async(e,t)=>{var h,g,y,_;let r,a,n=be();Array.isArray(e)?[r,a]=e:e.buffer===n.HEAPU8.buffer?[r,a]=[e.byteOffset,e.byteLength]:[r,a]=fi(e);let i=0,o=0,u=0,p=[],d=[],f=[];try{if([o,p]=await fp(t),(t==null?void 0:t.externalData)&&n.mountExternalData){let A=[];for(let R of t.externalData){let W=typeof R=="string"?R:R.path;A.push(bn(typeof R=="string"?R:R.data).then(F=>{n.mountExternalData(W,F)}))}await Promise.all(A)}for(let A of(t==null?void 0:t.executionProviders)??[])if((typeof A=="string"?A:A.name)==="webnn"){if(n.shouldTransferToMLTensor=!1,typeof A!="string"){let R=A,W=R==null?void 0:R.context,F=R==null?void 0:R.gpuDevice,H=R==null?void 0:R.deviceType,G=R==null?void 0:R.powerPreference;W?n.currentContext=W:F?n.currentContext=await n.webnnCreateMLContext(F):n.currentContext=await n.webnnCreateMLContext({deviceType:H,powerPreference:G})}else n.currentContext=await n.webnnCreateMLContext();break}i=await n._OrtCreateSession(r,a,o),(h=n.webgpuOnCreateSession)==null||h.call(n,i),i===0&&_e("Can't create a session."),(g=n.jsepOnCreateSession)==null||g.call(n),n.currentContext&&(n.webnnRegisterMLContext(i,n.currentContext),n.currentContext=void 0,n.shouldTransferToMLTensor=!0);let[w,x]=Rd(i),$=!!(t!=null&&t.enableGraphCapture),v=[],C=[],k=[],S=[],I=[];for(let A=0;A<w;A++){let[R,W,F]=Ua(i,A);R===0&&_e("Can't get an input name."),d.push(R);let H=n.UTF8ToString(R);v.push(H),k.push(W===0?{name:H,isTensor:!1}:{name:H,isTensor:!0,type:_t(W),shape:F})}for(let A=0;A<x;A++){let[R,W,F]=Ua(i,A+w);R===0&&_e("Can't get an output name."),f.push(R);let H=n.UTF8ToString(R);C.push(H),S.push(W===0?{name:H,isTensor:!1}:{name:H,isTensor:!0,type:_t(W),shape:F});{if($&&(t==null?void 0:t.preferredOutputLocation)===void 0){I.push("gpu-buffer");continue}let G=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((y=t==null?void 0:t.preferredOutputLocation)==null?void 0:y[H])??"cpu",ue=n.webnnIsGraphOutput;if(G==="cpu"&&ue&&ue(i,H)){I.push("ml-tensor-cpu-output");continue}if(G!=="cpu"&&G!=="cpu-pinned"&&G!=="gpu-buffer"&&G!=="ml-tensor")throw new Error(`Not supported preferred output location: ${G}.`);if($&&G!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${G}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);I.push(G)}}let E=null;return I.some(A=>A==="gpu-buffer"||A==="ml-tensor"||A==="ml-tensor-cpu-output")&&(u=n._OrtCreateBinding(i),u===0&&_e("Can't create IO binding."),E={handle:u,outputPreferredLocations:I,outputPreferredLocationsEncoded:I.map(A=>A==="ml-tensor-cpu-output"?"ml-tensor":A).map(A=>Fa(A))}),kt.set(i,[i,d,f,E,$,!1]),[i,v,C,k,S]}catch(w){throw d.forEach(x=>n._OrtFree(x)),f.forEach(x=>n._OrtFree(x)),u!==0&&n._OrtReleaseBinding(u)!==0&&_e("Can't release IO binding."),i!==0&&n._OrtReleaseSession(i)!==0&&_e("Can't release session."),w}finally{n._free(r),o!==0&&n._OrtReleaseSessionOptions(o)!==0&&_e("Can't release session options."),p.forEach(w=>n._free(w)),(_=n.unmountExternalData)==null||_.call(n)}},Mn=e=>{var p,d,f;let t=be(),r=kt.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[a,n,i,o,u]=r;o&&(u&&t._OrtClearBoundOutputs(o.handle)!==0&&_e("Can't clear bound outputs."),t._OrtReleaseBinding(o.handle)!==0&&_e("Can't release IO binding.")),(p=t.jsepOnReleaseSession)==null||p.call(t,e),(d=t.webnnOnReleaseSession)==null||d.call(t,e),(f=t.webgpuOnReleaseSession)==null||f.call(t,e),n.forEach(h=>t._OrtFree(h)),i.forEach(h=>t._OrtFree(h)),t._OrtReleaseSession(a)!==0&&_e("Can't release session."),kt.delete(e)},qa=async(e,t,r,a,n,i,o=!1)=>{if(!e){t.push(0);return}let u=be(),p=u.PTR_SIZE,d=e[0],f=e[1],h=e[3],g=h,y,_;if(d==="string"&&(h==="gpu-buffer"||h==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(o&&h!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${i} when enableGraphCapture is true.`);if(h==="gpu-buffer"){let $=e[2].gpuBuffer;_=Vt(Lt(d),f);{let v=u.jsepRegisterBuffer;if(!v)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');y=v(a,i,$,_)}}else if(h==="ml-tensor"){let $=e[2].mlTensor;_=Vt(Lt(d),f);let v=u.webnnRegisterMLTensor;if(!v)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');y=v(a,$,Lt(d),f)}else{let $=e[2];if(Array.isArray($)){_=p*$.length,y=u._malloc(_),r.push(y);for(let v=0;v<$.length;v++){if(typeof $[v]!="string")throw new TypeError(`tensor data at index ${v} is not a string`);u.setValue(y+v*p,at($[v],r),"*")}}else{let v=u.webnnIsGraphInput,C=u.webnnIsGraphOutput;if(d!=="string"&&v&&C){let k=u.UTF8ToString(n);if(v(a,k)||C(a,k)){let S=Lt(d);_=Vt(S,f),g="ml-tensor";let I=u.webnnCreateTemporaryTensor,E=u.webnnUploadTensor;if(!I||!E)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let A=await I(a,S,f);E(A,new Uint8Array($.buffer,$.byteOffset,$.byteLength)),y=A}else _=$.byteLength,y=u._malloc(_),r.push(y),u.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,_),y)}else _=$.byteLength,y=u._malloc(_),r.push(y),u.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,_),y)}}let w=u.stackSave(),x=u.stackAlloc(4*f.length);try{f.forEach((v,C)=>u.setValue(x+C*p,v,p===4?"i32":"i64"));let $=u._OrtCreateTensor(Lt(d),y,_,x,f.length,Fa(g));$===0&&_e(`Can't create tensor for input/output. session=${a}, index=${i}.`),t.push($)}finally{u.stackRestore(w)}},Nn=async(e,t,r,a,n,i)=>{var F,H,G,ue;let o=be(),u=o.PTR_SIZE,p=kt.get(e);if(!p)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=p[0],f=p[1],h=p[2],g=p[3],y=p[4],_=p[5],w=t.length,x=a.length,$=0,v=[],C=[],k=[],S=[],I=o.stackSave(),E=o.stackAlloc(w*u),A=o.stackAlloc(w*u),R=o.stackAlloc(x*u),W=o.stackAlloc(x*u);try{[$,v]=cp(i),Gt("wasm prepareInputOutputTensor");for(let Z=0;Z<w;Z++)await qa(r[Z],C,S,e,f[t[Z]],t[Z],y);for(let Z=0;Z<x;Z++)await qa(n[Z],k,S,e,h[a[Z]],w+a[Z],y);jt("wasm prepareInputOutputTensor");for(let Z=0;Z<w;Z++)o.setValue(E+Z*u,C[Z],"*"),o.setValue(A+Z*u,f[t[Z]],"*");for(let Z=0;Z<x;Z++)o.setValue(R+Z*u,k[Z],"*"),o.setValue(W+Z*u,h[a[Z]],"*");if(g&&!_){let{handle:Z,outputPreferredLocations:te,outputPreferredLocationsEncoded:me}=g;if(f.length!==w)throw new Error(`input count from feeds (${w}) is expected to be always equal to model's input count (${f.length}).`);Gt("wasm bindInputsOutputs");for(let O=0;O<w;O++){let q=t[O];await o._OrtBindInput(Z,f[q],C[O])!==0&&_e(`Can't bind input[${O}] for session=${e}.`)}for(let O=0;O<x;O++){let q=a[O];(F=n[O])!=null&&F[3]?o._OrtBindOutput(Z,h[q],k[O],0)!==0&&_e(`Can't bind pre-allocated output[${O}] for session=${e}.`):o._OrtBindOutput(Z,h[q],0,me[q])!==0&&_e(`Can't bind output[${O}] to ${te[O]} for session=${e}.`)}jt("wasm bindInputsOutputs"),kt.set(e,[d,f,h,g,y,!0])}(H=o.jsepOnRunStart)==null||H.call(o,d),(G=o.webnnOnRunStart)==null||G.call(o,d);let ae;g?ae=await o._OrtRunWithBinding(d,g.handle,x,R,$):ae=await o._OrtRun(d,A,E,w,W,x,R,$),ae!==0&&_e("failed to call OrtRun().");let K=[],ne=[];Gt("wasm ProcessOutputTensor");for(let Z=0;Z<x;Z++){let te=Number(o.getValue(R+Z*u,"*"));if(te===k[Z]){K.push(n[Z]);continue}let me=o.stackSave(),O=o.stackAlloc(4*u),q=!1,j,Q=0;try{o._OrtGetTensorData(te,O,O+u,O+2*u,O+3*u)!==0&&_e(`Can't access output tensor data on index ${Z}.`);let ye=u===4?"i32":"i64",ke=Number(o.getValue(O,ye));Q=o.getValue(O+u,"*");let P=o.getValue(O+u*2,"*"),de=Number(o.getValue(O+u*3,ye)),Ee=[];for(let ge=0;ge<de;ge++)Ee.push(Number(o.getValue(P+ge*u,ye)));o._OrtFree(P)!==0&&_e("Can't free memory for tensor dims.");let Ne=Ee.reduce((ge,xe)=>ge*xe,1);j=_t(ke);let pt=g==null?void 0:g.outputPreferredLocations[a[Z]];if(j==="string"){if(pt==="gpu-buffer"||pt==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ge=[];for(let xe=0;xe<Ne;xe++){let Ge=o.getValue(Q+xe*u,"*"),Ot=o.getValue(Q+(xe+1)*u,"*"),Rt=xe===Ne-1?void 0:Ot-Ge;ge.push(o.UTF8ToString(Ge,Rt))}K.push([j,Ee,ge,"cpu"])}else if(pt==="gpu-buffer"&&Ne>0){let ge=o.jsepGetBuffer;if(!ge)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let xe=ge(Q),Ge=Vt(ke,Ne);if(Ge===void 0||!_n(j))throw new Error(`Unsupported data type: ${j}`);q=!0,K.push([j,Ee,{gpuBuffer:xe,download:o.jsepCreateDownloader(xe,Ge,j),dispose:()=>{o._OrtReleaseTensor(te)!==0&&_e("Can't release tensor.")}},"gpu-buffer"])}else if(pt==="ml-tensor"&&Ne>0){let ge=o.webnnEnsureTensor,xe=o.webnnIsGraphInputOutputTypeSupported;if(!ge||!xe)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Vt(ke,Ne)===void 0||!yn(j))throw new Error(`Unsupported data type: ${j}`);if(!xe(e,j,!1))throw new Error(`preferredLocation "ml-tensor" for ${j} output is not supported by current WebNN Context.`);let Ge=await ge(e,Q,ke,Ee,!1);q=!0,K.push([j,Ee,{mlTensor:Ge,download:o.webnnCreateMLTensorDownloader(Q,j),dispose:()=>{o.webnnReleaseTensorId(Q),o._OrtReleaseTensor(te)}},"ml-tensor"])}else if(pt==="ml-tensor-cpu-output"&&Ne>0){let ge=o.webnnCreateMLTensorDownloader(Q,j)(),xe=K.length;q=!0,ne.push((async()=>{let Ge=[xe,await ge];return o.webnnReleaseTensorId(Q),o._OrtReleaseTensor(te),Ge})()),K.push([j,Ee,[],"cpu"])}else{let ge=mi(j),xe=new ge(Ne);new Uint8Array(xe.buffer,xe.byteOffset,xe.byteLength).set(o.HEAPU8.subarray(Q,Q+xe.byteLength)),K.push([j,Ee,xe,"cpu"])}}finally{o.stackRestore(me),j==="string"&&Q&&o._free(Q),q||o._OrtReleaseTensor(te)}}g&&!y&&(o._OrtClearBoundOutputs(g.handle)!==0&&_e("Can't clear bound outputs."),kt.set(e,[d,f,h,g,y,!1]));for(let[Z,te]of await Promise.all(ne))K[Z][2]=te;return jt("wasm ProcessOutputTensor"),K}finally{(ue=o.webnnOnRunEnd)==null||ue.call(o,d),o.stackRestore(I),C.forEach(ae=>o._OrtReleaseTensor(ae)),k.forEach(ae=>o._OrtReleaseTensor(ae)),S.forEach(ae=>o._free(ae)),$!==0&&o._OrtReleaseRunOptions($),v.forEach(ae=>o._free(ae))}},Dn=e=>{let t=be(),r=kt.get(e);if(!r)throw new Error("invalid session id");let a=r[0],n=t._OrtEndProfiling(a);n===0&&_e("Can't get an profile file name."),t._OrtFree(n)},Pn=e=>{let t=[];for(let r of e){let a=r[2];!Array.isArray(a)&&"buffer"in a&&t.push(a.buffer)}return t}}),St,Le,Qt,br,wr,ti,Wa,ri,Ut,qt,Bd,fh,hh,mh,gh,_h,yh,bh,wh=L(()=>{Xe(),ch(),Zt(),hn(),St=()=>!!ve.wasm.proxy&&typeof document<"u",Qt=!1,br=!1,wr=!1,ri=new Map,Ut=(e,t)=>{let r=ri.get(e);r?r.push(t):ri.set(e,[t])},qt=()=>{if(Qt||!br||wr||!Le)throw new Error("worker not ready")},Bd=e=>{switch(e.data.type){case"init-wasm":Qt=!1,e.data.err?(wr=!0,Wa[1](e.data.err)):(br=!0,Wa[0]()),ti&&(URL.revokeObjectURL(ti),ti=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=ri.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},fh=async()=>{if(!br){if(Qt)throw new Error("multiple calls to 'initWasm()' detected.");if(wr)throw new Error("previous call to 'initWasm()' failed.");if(Qt=!0,St())return new Promise((e,t)=>{Le==null||Le.terminate(),dp().then(([r,a])=>{try{Le=a,Le.onerror=i=>t(i),Le.onmessage=Bd,Wa=[e,t];let n={type:"init-wasm",in:ve};!n.in.wasm.wasmPaths&&(r||Ha)&&(n.in.wasm.wasmPaths={wasm:new URL(""+new URL("../assets/ort-wasm-simd-threaded.jsep.BGTZ4Y7F.wasm",import.meta.url).href,import.meta.url).href}),Le.postMessage(n),ti=r}catch(n){t(n)}},t)});try{await mn(ve.wasm),await On(ve),br=!0}catch(e){throw wr=!0,e}finally{Qt=!1}}},hh=async e=>{if(St())return qt(),new Promise((t,r)=>{Ut("init-ep",[t,r]);let a={type:"init-ep",in:{epName:e,env:ve}};Le.postMessage(a)});await Rn(ve,e)},mh=async e=>St()?(qt(),new Promise((t,r)=>{Ut("copy-from",[t,r]);let a={type:"copy-from",in:{buffer:e}};Le.postMessage(a,[e.buffer])})):fi(e),gh=async(e,t)=>{if(St()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return qt(),new Promise((r,a)=>{Ut("create",[r,a]);let n={type:"create",in:{model:e,options:{...t}}},i=[];e instanceof Uint8Array&&i.push(e.buffer),Le.postMessage(n,i)})}else return Bn(e,t)},_h=async e=>{if(St())return qt(),new Promise((t,r)=>{Ut("release",[t,r]);let a={type:"release",in:e};Le.postMessage(a)});Mn(e)},yh=async(e,t,r,a,n,i)=>{if(St()){if(r.some(o=>o[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(n.some(o=>o))throw new Error("pre-allocated output tensor is not supported for proxy.");return qt(),new Promise((o,u)=>{Ut("run",[o,u]);let p=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:p,outputIndices:a,options:i}};Le.postMessage(d,Pn(p))})}else return Nn(e,t,r,a,n,i)},bh=async e=>{if(St())return qt(),new Promise((t,r)=>{Ut("end-profiling",[t,r]);let a={type:"end-profiling",in:e};Le.postMessage(a)});Dn(e)}}),La,Md,vh,Q_=L(()=>{Xe(),wh(),ie(),fn(),hp(),La=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Md=e=>{switch(e[3]){case"cpu":return new Ke(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!_n(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:a,dispose:n}=e[2];return Ke.fromGpuBuffer(r,{dataType:t,dims:e[1],download:a,dispose:n})}case"ml-tensor":{let t=e[0];if(!yn(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:a,dispose:n}=e[2];return Ke.fromMLTensor(r,{dataType:t,dims:e[1],download:a,dispose:n})}default:throw new Error(`invalid data location: ${e[3]}`)}},vh=class{async fetchModelAndCopyToWasmMemory(e){return mh(await bn(e))}async loadModel(e,t){dt();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await gh(r,t),nt()}async dispose(){return _h(this.sessionId)}async run(e,t,r){dt();let a=[],n=[];Object.entries(e).forEach(h=>{let g=h[0],y=h[1],_=this.inputNames.indexOf(g);if(_===-1)throw new Error(`invalid input '${g}'`);a.push(y),n.push(_)});let i=[],o=[];Object.entries(t).forEach(h=>{let g=h[0],y=h[1],_=this.outputNames.indexOf(g);if(_===-1)throw new Error(`invalid output '${g}'`);i.push(y),o.push(_)});let u=a.map((h,g)=>La(h,()=>`input "${this.inputNames[n[g]]}"`)),p=i.map((h,g)=>h?La(h,()=>`output "${this.outputNames[o[g]]}"`):null),d=await yh(this.sessionId,n,u,o,p,r),f={};for(let h=0;h<d.length;h++)f[this.outputNames[o[h]]]=i[h]??Md(d[h]);return nt(),f}startProfiling(){}endProfiling(){bh(this.sessionId)}}}),$h={};ar($h,{OnnxruntimeWebAssemblyBackend:()=>un,initializeFlags:()=>on,wasmBackend:()=>xh});var on,un,xh,J_=L(()=>{Xe(),wh(),Q_(),on=()=>{(typeof ve.wasm.initTimeout!="number"||ve.wasm.initTimeout<0)&&(ve.wasm.initTimeout=0);let e=ve.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),ve.wasm.simd=!1),typeof ve.wasm.proxy!="boolean"&&(ve.wasm.proxy=!1),typeof ve.wasm.trace!="boolean"&&(ve.wasm.trace=!1),typeof ve.wasm.numThreads!="number"||!Number.isInteger(ve.wasm.numThreads)||ve.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ve.wasm.numThreads=1;else{let t=typeof navigator>"u"?Pg("node:os").cpus().length:navigator.hardwareConcurrency;ve.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},un=class{async init(e){on(),await fh(),await hh(e)}async createInferenceSessionHandler(e,t){let r=new vh;return await r.loadModel(e,t),r}},xh=new un});Xe();Xe();Xe();var ey="1.23.2";{let e=(J_(),zr($h)).wasmBackend;er("webgpu",e,5),er("webnn",e,5),er("cpu",e,10),er("wasm",e,10)}Object.defineProperty(ve.versions,"web",{value:ey,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class hi{constructor(t,r=32){qe(this,"vocab");qe(this,"charToIdx");qe(this,"idxToChar");qe(this,"vocabSize");qe(this,"maxLength");qe(this,"padTokenId");qe(this,"eowTokenId");qe(this,"maskTokenId");this.vocab=t,this.vocabSize=t.length,this.maxLength=r,this.charToIdx=new Map,this.idxToChar=new Map,t.forEach((a,n)=>{this.charToIdx.set(a,n),this.idxToChar.set(n,a)}),this.padTokenId=this.charToIdx.get("<PAD>"),this.eowTokenId=this.charToIdx.get("<EOW>"),this.maskTokenId=this.vocabSize}encode(t){const r=[];for(const a of t.toLowerCase()){const n=this.charToIdx.get(a);n!==void 0?r.push(n):console.log(`Unknown character: ${a} at position ${r.length}`)}for(r.push(this.eowTokenId);r.length<this.maxLength;)r.push(this.padTokenId);return r.slice(0,this.maxLength)}decode(t,r=!0){let a="";for(const n of t)if(n===this.eowTokenId){r||(a+="<EOW>");break}else if(n===this.padTokenId)r||(a+="<PAD>");else if(n===this.maskTokenId)r||(a+="<MASK>");else{const i=this.idxToChar.get(n);i!==void 0?a+=i:a+="<UNK>"}return a}static fromConfig(t){return new hi(t.vocab,t.maxLength)}static async fromJSON(t){const a=await(await fetch(t)).json();return new hi(a)}}function ty(e,t,r){let a=(t-e)/t,n=a-1/t;return r==="cosine"&&(a=Math.cos(Math.PI/2*(1-a)),n=Math.cos(Math.PI/2*(1-n))),{s:n,t:a}}class ry{constructor(){qe(this,"session",null);qe(this,"tokenizer",null);qe(this,"config",null);qe(this,"backend","unknown")}async initialize(t,r,a,n="webgl"){try{const o=await(await fetch(a)).json();this.config={vocabSize:o.vocab_size,maxSeqLen:o.max_seq_len,timesteps:o.timesteps,modelType:o.model_type,samplingGrid:o.sampling_grid},this.tokenizer=await hi.fromJSON(r);const u=[];return n==="webgl"&&u.push("webgl"),u.push("wasm"),this.session=await cn.create(t,{executionProviders:u}),this.backend=this.session.inputNames.length>0?u[0]:"cpu",console.log("Model loaded successfully"),console.log("Backend:",this.backend),console.log("Config:",this.config),{success:!0,backend:this.backend}}catch(i){return console.error("Failed to initialize model:",i),{success:!1,backend:"none",error:i instanceof Error?i.message:String(i)}}}async predictLogitsAndAlpha(t,r,a,n){if(!this.session||!this.config)throw new Error("Model not initialized");const i=Math.floor(t.length/n);if(!Number.isFinite(i)||i<=0)throw new Error(`Invalid batchSize calculated: ${i} (zT.length=${t.length}, seqLen=${n})`);const o=new Ke("int64",BigInt64Array.from(t,w=>BigInt(w)),[i,n]),u=new Float32Array(i).fill(r),p=new Ke("float32",u,[i]),d=new Float32Array(i).fill(a),f=new Ke("float32",d,[i]),h=await this.session.run({z_t:o,t:p,s:f}),g=h.logits.data,y=h.alpha_t.data,_=h.alpha_s.data;return{logits:g,alphaT:y,alphaS:_}}softmax(t,r,a){const n=new Float32Array(a);let i=-1/0;for(let u=0;u<a;u++)i=Math.max(i,t[r+u]);let o=0;for(let u=0;u<a;u++){const p=Math.exp(t[r+u]-i);n[u]=p,o+=p}for(let u=0;u<a;u++)n[u]/=o;return n}sampleCategorical(t){const r=Math.random();let a=0;for(let n=0;n<t.length;n++)if(a+=t[n],r<a)return n;return t.length-1}async sample(t={}){if(!this.session||!this.config||!this.tokenizer)throw new Error("Model not initialized");const r=t.numSteps||50,a=t.batchSize||10,n=this.config.maxSeqLen,i=this.config.vocabSize,o=this.tokenizer.maskTokenId,u=new Int32Array(a*n);if(t.conditioning)for(let f=0;f<a;f++)u.set(t.conditioning,f*n);else u.fill(o);for(let f=0;f<r;f++){t.onProgress&&t.onProgress(f+1,r);const{s:h,t:g}=ty(f,r,this.config.samplingGrid),{logits:y,alphaT:_,alphaS:w}=await this.predictLogitsAndAlpha(u,g,h,n),x=new Float32Array(a*n*i);for(let I=0;I<a;I++)for(let E=0;E<n;E++){const A=(I*n+E)*i,R=this.softmax(y,A,i);x.set(R,A)}let $,v;if(_.length>a){$=new Float32Array(i);for(let E=0;E<i;E++){const A=_[E],W=(w[E]-A)/(1-A+1e-10);$[E]=Math.max(0,Math.min(1,W))}let I=0;for(let E=0;E<i;E++)I+=$[E];v=I/i}else{const I=(w[0]-_[0])/(1-_[0]+1e-10);v=Math.max(0,Math.min(1,I)),$=new Float32Array(i).fill(v)}const k=new Float32Array(a*n*i);for(let I=0;I<a;I++)for(let E=0;E<n;E++){const A=(I*n+E)*i;for(let R=0;R<i;R++)k[A+R]=$[R]*x[A+R]}const S=1-v;for(let I=0;I<a;I++)for(let E=0;E<n;E++){const A=I*n+E;if(t.conditioning&&t.conditioning[E]!==o||u[A]!==o)continue;const R=new Float32Array(i+1),W=(I*n+E)*i;for(let G=0;G<i;G++)R[G]=k[W+G];R[i]=S;let F=0;for(let G=0;G<=i;G++)F+=R[G];for(let G=0;G<=i;G++)R[G]/=F+1e-10;const H=this.sampleCategorical(R);u[A]=H}if(t.conditioning){for(let I=0;I<a;I++)for(let E=0;E<n;E++)if(t.conditioning[E]!==o){const A=I*n+E;u[A]=t.conditioning[E]}}f%10===0&&await new Promise(I=>setTimeout(I,0))}const{logits:p}=await this.predictLogitsAndAlpha(u,0,0,n);for(let f=0;f<a;f++)for(let h=0;h<n;h++){const g=f*n+h;if(!(t.conditioning&&t.conditioning[h]!==o)&&u[g]===o){const y=(f*n+h)*i,_=this.softmax(p,y,i);let w=0,x=_[0];for(let $=1;$<i;$++)_[$]>x&&(x=_[$],w=$);u[g]=w}}if(t.conditioning){for(let f=0;f<a;f++)for(let h=0;h<n;h++)if(t.conditioning[h]!==o){const g=f*n+h;u[g]=t.conditioning[h]}}console.log("=== Raw Token Output ==="),console.log("Special tokens:",{PAD:this.tokenizer.padTokenId,EOW:this.tokenizer.eowTokenId,MASK:this.tokenizer.maskTokenId}),t.conditioning&&console.log("Conditioning array:",t.conditioning);const d=[];for(let f=0;f<a;f++){const h=Array.from(u.slice(f*n,(f+1)*n));console.log(`Sample ${f} tokens:`,h);const g=this.tokenizer.decode(h);console.log(`Sample ${f} decoded:`,g),d.push(g)}return d}getBackend(){return this.backend}isInitialized(){return this.session!==null}}var iy=zt('<meta name="description" content="Generate words using a diffusion transformer model running in your browser"/>'),ay=zt('<span class="badge"><div class="spinner" style="width: 14px; height: 14px; border-width: 2px;"></div> Loading model...</span>'),ny=zt('<span class="badge badge-success"><svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path></svg> Model Ready</span> <span class="badge"> </span>',1),sy=zt('<span class="badge badge-warning"><svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"></path></svg> </span>'),oy=zt('<div class="spinner"></div> ',1),uy=zt('<div class="word-item animate-fade-in"> </div>'),ly=zt('<div class="card animate-fade-in" style="animation-delay: 0.2s;"><h2 style="margin-bottom: var(--spacing-lg);">Generated Words</h2> <div class="word-grid"></div></div>'),dy=zt(`<main class="container"><div style="padding: var(--spacing-2xl) 0;"><header style="text-align: center; margin-bottom: var(--spacing-2xl);"><h1 class="animate-fade-in">Word Diffusion</h1> <p style="margin-top: var(--spacing-md); font-size: 1.125rem; color: var(--color-text-secondary);">Generate words using a diffusion transformer model running
				locally in your browser</p> <div style="margin-top: var(--spacing-lg); display: flex; gap: var(--spacing-sm); justify-content: center; flex-wrap: wrap;"><!></div></header> <div class="card animate-fade-in" style="animation-delay: 0.1s; margin-bottom: var(--spacing-xl);"><h2 style="margin-bottom: var(--spacing-lg);">Generation Settings</h2> <div style="display: grid; gap: var(--spacing-lg); grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));"><div><label for="num-words" style="display: block; margin-bottom: var(--spacing-sm); font-weight: 500; color: var(--color-text-secondary);">Number of Words</label> <input id="num-words" type="number" min="1" max="50" style="
							width: 100%;
							padding: var(--spacing-md);
							background: var(--color-bg-secondary);
							border: 1px solid rgba(255, 255, 255, 0.1);
							border-radius: var(--radius-md);
							color: var(--color-text);
							font-size: 1rem;
						" class="svelte-1uha8ag"/></div> <div><label for="num-steps" style="display: block; margin-bottom: var(--spacing-sm); font-weight: 500; color: var(--color-text-secondary);">Sampling Steps</label> <input id="num-steps" type="number" min="10" max="200" step="10" style="
							width: 100%;
							padding: var(--spacing-md);
							background: var(--color-bg-secondary);
							border: 1px solid rgba(255, 255, 255, 0.1);
							border-radius: var(--radius-md);
							color: var(--color-text);
							font-size: 1rem;
						" class="svelte-1uha8ag"/></div> <div><label for="word-pattern" style="display: block; margin-bottom: var(--spacing-sm); font-weight: 500; color: var(--color-text-secondary);">Pattern</label> <input id="word-pattern" type="text" placeholder="e.g., 5 or _a___ or ca_" style="
							width: 100%;
							padding: var(--spacing-md);
							background: var(--color-bg-secondary);
							border: 1px solid rgba(255, 255, 255, 0.1);
							border-radius: var(--radius-md);
							color: var(--color-text);
							font-size: 1rem;
						" class="svelte-1uha8ag"/> <p style="margin-top: var(--spacing-xs); font-size: 0.875rem; color: var(--color-text-muted);">Optional. Examples: "5" (5-letter words), "_a___" (2nd
						letter is 'a'), "ca_" (starts with 'ca')</p></div></div> <div style="margin-top: var(--spacing-xl);"><button class="btn btn-primary" style="width: 100%; padding: var(--spacing-lg);"><!></button></div></div> <!> <footer style="margin-top: var(--spacing-2xl); text-align: center; color: var(--color-text-muted); font-size: 0.875rem;"><p>Powered by ONNX Runtime Web • Model: MD4 Word Diffusion
				Transformer</p></footer></div></main>`);function by(e,t){yg(t,!1);let r=it("loading"),a=it(""),n=it("unknown"),i=it(!1),o=it([]),u=it(0),p=it(0),d=it(10),f=it(50),h=it("");const g=new ry;function y(O,q,j,Q){if(!O)return null;const ye=new Array(q).fill(j),ke=O.match(/^(\d+)$/);if(ke){const P=parseInt(ke[1]);return P>=q?null:(ye[P]=Q,ye)}for(let P=0;P<O.length&&P<q;P++){const de=O[P];if(de!=="_"){const Ee=de.toLowerCase().charCodeAt(0)-97;Ee>=0&&Ee<26&&(ye[P]=Ee+2)}}return ye}Zm(async()=>{const O=await g.initialize("/model/model.ort","/model/tokenizer.json","/model/config.json","webgl");O.success?(Ae(r,"ready"),Ae(n,O.backend)):(Ae(r,"error"),Ae(a,O.error||"Unknown error"))});async function _(){if(!(!g.isInitialized()||we(i))){Ae(i,!0),Ae(u,0),Ae(p,we(f)),Ae(o,[]);try{const O=y(we(h),32,28,1),q=await g.sample({batchSize:we(d),numSteps:we(f),conditioning:O||void 0,onProgress:(j,Q)=>{Ae(u,j),Ae(p,Q)}});Ae(o,q)}catch(O){console.error("Generation failed:",O),Ae(a,O instanceof Error?O.message:String(O)),Ae(r,"error")}finally{Ae(i,!1),Ae(u,0)}}}Km();var w=dy();Ig("1uha8ag",O=>{var q=iy();wg(()=>{vg.title="Word Diffusion Transformer"}),ut(O,q)});var x=Pe(w),$=Pe(x),v=We(Pe($),4),C=Pe(v);{var k=O=>{var q=ay();ut(O,q)},S=O=>{var q=Hm(),j=Wi(q);{var Q=ke=>{var P=ny(),de=We(Wi(P),2),Ee=Pe(de);Be(de),lr(()=>Lr(Ee,`Backend: ${(we(n)==="webgl"?"WebGL (GPU)":we(n)==="wasm"?"WASM (CPU)":we(n))??""}`)),ut(ke,P)},ye=ke=>{var P=sy(),de=We(Pe(P));Be(P),lr(()=>Lr(de,` Error: ${we(a)??""}`)),ut(ke,P)};Vr(j,ke=>{we(r)==="ready"?ke(Q):ke(ye,!1)},!0)}ut(O,q)};Vr(C,O=>{we(r)==="loading"?O(k):O(S,!1)})}Be(v),Be($);var I=We($,2),E=We(Pe(I),2),A=Pe(E),R=We(Pe(A),2);Li(R),Be(A);var W=We(A,2),F=We(Pe(W),2);Li(F),Be(W);var H=We(W,2),G=We(Pe(H),2);Li(G),eo(2),Be(H),Be(E);var ue=We(E,2),ae=Pe(ue),K=Pe(ae);{var ne=O=>{var q=oy(),j=We(Wi(q));lr(()=>Lr(j,` Generating... (${we(u)??""}/${we(p)??""})`)),ut(O,q)},Z=O=>{var q=Fm("Generate Words");ut(O,q)};Vr(K,O=>{we(i)?O(ne):O(Z,!1)})}Be(ae),Be(ue),Be(I);var te=We(I,2);{var me=O=>{var q=ly(),j=We(Pe(q),2);Cg(j,5,()=>we(o),xg,(Q,ye,ke)=>{var P=uy();zg(P,`animation-delay: ${ke*.05}s;`);var de=Pe(P,!0);Be(P),lr(()=>Lr(de,we(ye))),ut(Q,P)}),Be(j),Be(q),ut(O,q)};Vr(te,O=>{we(o).length>0&&O(me)})}eo(2),Be(x),Be(w),lr(()=>{R.disabled=we(i),F.disabled=we(i),G.disabled=we(i),ae.disabled=we(r)!=="ready"||we(i)}),Vi(R,()=>we(d),O=>Ae(d,O)),Vi(F,()=>we(f),O=>Ae(f,O)),Vi(G,()=>we(h),O=>Ae(h,O)),$g("click",ae,_),ut(e,w),bg()}export{by as component,yy as universal};
