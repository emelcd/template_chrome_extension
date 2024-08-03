"use strict";(()=>{var dt=Object.defineProperty;var Lt=Object.getOwnPropertyDescriptor;var ht=Object.getOwnPropertySymbols;var Nt=Object.prototype.hasOwnProperty,kt=Object.prototype.propertyIsEnumerable;var pt=(i,t,e)=>t in i?dt(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,ut=(i,t)=>{for(var e in t||(t={}))Nt.call(t,e)&&pt(i,e,t[e]);if(ht)for(var e of ht(t))kt.call(t,e)&&pt(i,e,t[e]);return i};var c=(i,t,e,s)=>{for(var o=s>1?void 0:s?Lt(t,e):t,r=i.length-1,n;r>=0;r--)(n=i[r])&&(o=(s?n(t,e,o):n(o))||o);return s&&o&&dt(t,e,o),o};var S=i=>{document.body.innerHTML="";let t=document.createElement("technology-form");document.body.appendChild(t);let e=document.createElement("technology-list");e.technologies=i.sort((s,o)=>o.updatedAt-s.updatedAt),document.body.appendChild(e)};var B=globalThis,z=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol(),mt=new WeakMap,D=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(z&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=mt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&mt.set(e,t))}return t}toString(){return this.cssText}},gt=i=>new D(typeof i=="string"?i:i+"",void 0,Q),T=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((s,o,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[r+1],i[0]);return new D(e,i,Q)},F=(i,t)=>{if(z)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),o=B.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=e.cssText,i.appendChild(s)}},q=z?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return gt(e)})(i):i;var{is:jt,defineProperty:Vt,getOwnPropertyDescriptor:Bt,getOwnPropertyNames:zt,getOwnPropertySymbols:qt,getPrototypeOf:Wt}=Object,W=globalThis,ft=W.trustedTypes,Kt=ft?ft.emptyScript:"",Zt=W.reactiveElementPolyfillSupport,I=(i,t)=>i,L={toAttribute(i,t){switch(t){case Boolean:i=i?Kt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},K=(i,t)=>!jt(i,t),yt={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:K};Symbol.metadata??=Symbol("metadata"),W.litPropertyMetadata??=new WeakMap;var _=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=yt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),o=this.getPropertyDescriptor(t,s,e);o!==void 0&&Vt(this.prototype,t,o)}}static getPropertyDescriptor(t,e,s){let{get:o,set:r}=Bt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return o?.call(this)},set(n){let p=o?.call(this);r.call(this,n),this.requestUpdate(t,p,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??yt}static _$Ei(){if(this.hasOwnProperty(I("elementProperties")))return;let t=Wt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(I("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(I("properties"))){let e=this.properties,s=[...zt(e),...qt(e)];for(let o of s)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,o]of e)this.elementProperties.set(s,o)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let o=this._$Eu(e,s);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let o of s)e.unshift(q(o))}else t!==void 0&&e.push(q(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return F(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){let s=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,s);if(o!==void 0&&s.reflect===!0){let r=(s.converter?.toAttribute!==void 0?s.converter:L).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,e){let s=this.constructor,o=s._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let r=s.getPropertyOptions(o),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:L;this._$Em=o,this[o]=n.fromAttribute(e,r.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??K)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[o,r]of s)r.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],r)}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[I("elementProperties")]=new Map,_[I("finalized")]=new Map,Zt?.({ReactiveElement:_}),(W.reactiveElementVersions??=[]).push("2.0.4");var nt=globalThis,Z=nt.trustedTypes,$t=Z?Z.createPolicy("lit-html",{createHTML:i=>i}):void 0,Et="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,St="?"+E,Jt=`<${St}>`,O=document,k=()=>O.createComment(""),j=i=>i===null||typeof i!="object"&&typeof i!="function",Tt=Array.isArray,Xt=i=>Tt(i)||typeof i?.[Symbol.iterator]=="function",tt=`[ 	
\f\r]`,N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vt=/-->/g,_t=/>/g,w=RegExp(`>|${tt}(?:([^\\s"'>=/]+)(${tt}*=${tt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bt=/'/g,At=/"/g,wt=/^(?:script|style|textarea|title)$/i,Ct=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),y=Ct(1),de=Ct(2),b=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),xt=new WeakMap,C=O.createTreeWalker(O,129);function Ot(i,t){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return $t!==void 0?$t.createHTML(t):t}var Yt=(i,t)=>{let e=i.length-1,s=[],o,r=t===2?"<svg>":"",n=N;for(let p=0;p<e;p++){let a=i[p],u,f,h=-1,v=0;for(;v<a.length&&(n.lastIndex=v,f=n.exec(a),f!==null);)v=n.lastIndex,n===N?f[1]==="!--"?n=vt:f[1]!==void 0?n=_t:f[2]!==void 0?(wt.test(f[2])&&(o=RegExp("</"+f[2],"g")),n=w):f[3]!==void 0&&(n=w):n===w?f[0]===">"?(n=o??N,h=-1):f[1]===void 0?h=-2:(h=n.lastIndex-f[2].length,u=f[1],n=f[3]===void 0?w:f[3]==='"'?At:bt):n===At||n===bt?n=w:n===vt||n===_t?n=N:(n=w,o=void 0);let x=n===w&&i[p+1].startsWith("/>")?" ":"";r+=n===N?a+Jt:h>=0?(s.push(u),a.slice(0,h)+Et+a.slice(h)+E+x):a+E+(h===-2?p:x)}return[Ot(i,r+(i[e]||"<?>")+(t===2?"</svg>":"")),s]},P=class{constructor({strings:t,_$litType$:e},s){let o;this.parts=[];let r=0,n=0,p=t.length-1,a=this.parts,[u,f]=Yt(t,e);if(this.el=P.createElement(u,s),C.currentNode=this.el.content,e===2){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=C.nextNode())!==null&&a.length<p;){if(o.nodeType===1){if(o.hasAttributes())for(let h of o.getAttributeNames())if(h.endsWith(Et)){let v=f[n++],x=o.getAttribute(h).split(E),V=/([.?@])?(.*)/.exec(v);a.push({type:1,index:r,name:V[2],strings:x,ctor:V[1]==="."?st:V[1]==="?"?it:V[1]==="@"?ot:H}),o.removeAttribute(h)}else h.startsWith(E)&&(a.push({type:6,index:r}),o.removeAttribute(h));if(wt.test(o.tagName)){let h=o.textContent.split(E),v=h.length-1;if(v>0){o.textContent=Z?Z.emptyScript:"";for(let x=0;x<v;x++)o.append(h[x],k()),C.nextNode(),a.push({type:2,index:++r});o.append(h[v],k())}}}else if(o.nodeType===8)if(o.data===St)a.push({type:2,index:r});else{let h=-1;for(;(h=o.data.indexOf(E,h+1))!==-1;)a.push({type:7,index:r}),h+=E.length-1}r++}}static createElement(t,e){let s=O.createElement("template");return s.innerHTML=t,s}};function R(i,t,e=i,s){if(t===b)return t;let o=s!==void 0?e._$Co?.[s]:e._$Cl,r=j(t)?void 0:t._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),r===void 0?o=void 0:(o=new r(i),o._$AT(i,e,s)),s!==void 0?(e._$Co??=[])[s]=o:e._$Cl=o),o!==void 0&&(t=R(i,o._$AS(i,t.values),o,s)),t}var et=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,o=(t?.creationScope??O).importNode(e,!0);C.currentNode=o;let r=C.nextNode(),n=0,p=0,a=s[0];for(;a!==void 0;){if(n===a.index){let u;a.type===2?u=new U(r,r.nextSibling,this,t):a.type===1?u=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(u=new rt(r,this,t)),this._$AV.push(u),a=s[++p]}n!==a?.index&&(r=C.nextNode(),n++)}return C.currentNode=O,o}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},U=class{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,o){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=R(this,t,e),j(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==b&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Xt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==m&&j(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=P.createElement(Ot(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===o)this._$AH.p(e);else{let r=new et(o,this),n=r.u(this.options);r.p(e),this.T(n),this._$AH=r}}_$AC(t){let e=xt.get(t.strings);return e===void 0&&xt.set(t.strings,e=new P(t)),e}k(t){Tt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,o=0;for(let r of t)o===e.length?e.push(s=new U(this.S(k()),this.S(k()),this,this.options)):s=e[o],s._$AI(r),o++;o<e.length&&(this._$AR(s&&s._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},H=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,o,r){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=m}_$AI(t,e=this,s,o){let r=this.strings,n=!1;if(r===void 0)t=R(this,t,e,0),n=!j(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else{let p=t,a,u;for(t=r[0],a=0;a<r.length-1;a++)u=R(this,p[s+a],e,a),u===b&&(u=this._$AH[a]),n||=!j(u)||u!==this._$AH[a],u===m?t=m:t!==m&&(t+=(u??"")+r[a+1]),this._$AH[a]=u}n&&!o&&this.j(t)}j(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},st=class extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===m?void 0:t}},it=class extends H{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==m)}},ot=class extends H{constructor(t,e,s,o,r){super(t,e,s,o,r),this.type=5}_$AI(t,e=this){if((t=R(this,t,e,0)??m)===b)return;let s=this._$AH,o=t===m&&s!==m||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==m&&(s===m||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},rt=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){R(this,t)}};var Gt=nt.litHtmlPolyfillSupport;Gt?.(P,U),(nt.litHtmlVersions??=[]).push("3.1.4");var Pt=(i,t,e)=>{let s=e?.renderBefore??t,o=s._$litPart$;if(o===void 0){let r=e?.renderBefore??null;s._$litPart$=o=new U(t.insertBefore(k(),r),r,void 0,e??{})}return o._$AI(i),o};var $=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Pt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return b}};$._$litElement$=!0,$["finalized"]=!0,globalThis.litElementHydrateSupport?.({LitElement:$});var Qt=globalThis.litElementPolyfillSupport;Qt?.({LitElement:$});(globalThis.litElementVersions??=[]).push("4.0.6");var Ft={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:K},te=(i=Ft,t,e)=>{let{kind:s,metadata:o}=e,r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(e.name,i),s==="accessor"){let{name:n}=e;return{set(p){let a=t.get.call(this);t.set.call(this,p),this.requestUpdate(n,a,i)},init(p){return p!==void 0&&this.P(n,void 0,i),p}}}if(s==="setter"){let{name:n}=e;return function(p){let a=this[n];t.call(this,p),this.requestUpdate(n,a,i)}}throw Error("Unsupported decorator location: "+s)};function l(i){return(t,e)=>typeof e=="object"?te(i,t,e):((s,o,r)=>{let n=o.hasOwnProperty(r);return o.constructor.createProperty(r,n?{...s,wrapped:!0}:s),n?Object.getOwnPropertyDescriptor(o,r):void 0})(i,t,e)}var Ut={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Mt=i=>(...t)=>({_$litDirective$:i,values:t}),X=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var Rt="important",ee=" !"+Rt,Ht=Mt(class extends X{constructor(i){if(super(i),i.type!==Ut.ATTRIBUTE||i.name!=="style"||i.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((t,e)=>{let s=i[e];return s==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(i,[t]){let{style:e}=i.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let s of this.ft)t[s]==null&&(this.ft.delete(s),s.includes("-")?e.removeProperty(s):e[s]=null);for(let s in t){let o=t[s];if(o!=null){this.ft.add(s);let r=typeof o=="string"&&o.endsWith(ee);s.includes("-")||r?e.setProperty(s,r?o.slice(0,-11):o,r?Rt:""):e[s]=o}}return b}});var se={bubbles:!0,composed:!0},M=class extends ${constructor(e){super();this.isOpen=!1;this.styles={height:this.isOpen?"100px":"fit-content",overflow:this.isOpen?"hidden":"visible"};this.technology=e,this.addEventListener("click",this.__dispatchToggleEvent)}__dispatchToggleEvent(){this.isOpen=!this.isOpen,this.dispatchEvent(new CustomEvent("toggle",ut({detail:{technology:this.technology,isOpen:this.isOpen}},se)))}removeTechnology(){chrome.storage.sync.get("technologies",e=>{let o=(e.technologies||[]).filter(r=>r.id!==this.technology.id);chrome.storage.sync.set({technologies:o}),S(o),chrome.storage.sync.get("technologies",r=>{let n=r.technologies||[];S(n)})})}render(){return this.isOpen?y`<div style=${Ht(this.styles)}>
          <h2>${this.technology.name}</h2>
          <p>${this.technology.description}</p>
          <ul>
            <li><strong>Category:</strong> ${this.technology.category}</li>
            <li>
              <strong>Release Date:</strong> ${this.technology.releaseDate}
            </li>
            <li>
              <strong>Latest Version:</strong> ${this.technology.latestVersion}
            </li>
            <li>
              <strong>Developers:</strong>
              <ul>
                ${this.technology.developers.map(e=>y`<li>${e}</li>`)}
              </ul>
            </li>
            <li><strong>License:</strong> ${this.technology.license}</li>
            <li>
              <strong>Platforms:</strong>
              <ul>
                ${this.technology.platforms.map(e=>y`<li>${e}</li>`)}
              </ul>
            </li>
            <li>
              <strong>Features:</strong>
              <ul>
                ${this.technology.features.map(e=>y`<li>${e}</li>`)}
              </ul>
            </li>
            <li><strong>Popularity:</strong> ${this.technology.popularity}</li>
            <li>
              <strong>Documentation:</strong>
              <a href=${this.technology.documentation} target="_blank"
                >${this.technology.documentation}</a
              >
            </li>
          </ul>
          <button @click=${this.removeTechnology}>Remove</button>
        </div>`:y`<div>
          <h2>${this.technology.name}</h2>
        </div> `}};M.styles=T`
    :host {
      display: block;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin: 16px;
      padding: 16px;
      max-width: 400px;
      box-shadow: 0 22px 22px rgba(0, 0, 0, 0.1);
    }

    h2 {
      margin-top: 0;
    }

    a {
      color: #0077cc;
    }

    ul {
      padding-left: 20px;
    }

    li {
      margin-bottom: 4px;
    }
  `,c([l({type:Object})],M.prototype,"technology",2),c([l({type:Boolean})],M.prototype,"isOpen",2),c([l({type:Object})],M.prototype,"styles",2);var Dt=M;var g=[];for(Y=0;Y<256;++Y)g.push((Y+256).toString(16).slice(1));var Y;function It(i,t=0){return(g[i[t+0]]+g[i[t+1]]+g[i[t+2]]+g[i[t+3]]+"-"+g[i[t+4]]+g[i[t+5]]+"-"+g[i[t+6]]+g[i[t+7]]+"-"+g[i[t+8]]+g[i[t+9]]+"-"+g[i[t+10]]+g[i[t+11]]+g[i[t+12]]+g[i[t+13]]+g[i[t+14]]+g[i[t+15]]).toLowerCase()}var G,ie=new Uint8Array(16);function at(){if(!G&&(G=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!G))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return G(ie)}var oe=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),lt={randomUUID:oe};function re(i,t,e){if(lt.randomUUID&&!t&&!i)return lt.randomUUID();i=i||{};var s=i.random||(i.rng||at)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,t){e=e||0;for(var o=0;o<16;++o)t[e+o]=s[o];return t}return It(s)}var ct=re;var d=class extends ${constructor(){super(...arguments);this.name="";this.description="";this.url="";this.category="";this.releaseDate="";this.latestVersion="";this.developers="";this.license="";this.platforms="";this.features="";this.popularity=0;this.documentation="";this.isOpen=!1;this.cssHost="";this.isValid=!0}__validateForm(){return this.isValid=Boolean(this.name&&this.description&&this.url&&this.category&&this.releaseDate&&this.latestVersion&&this.developers&&this.license&&this.platforms&&this.features&&this.popularity&&this.documentation),this.isValid}handleSubmit(e){if(e.preventDefault(),!this.__validateForm())return;console.log(e);let s={id:ct(),name:this.name,description:this.description,url:this.url,category:this.category,releaseDate:this.releaseDate,latestVersion:this.latestVersion,developers:this.developers.split(","),license:this.license,platforms:this.platforms.split(","),features:this.features.split(","),popularity:this.popularity,documentation:this.documentation,updatedAt:new Date().getTime()};chrome.storage.sync.get("technologies",o=>{let r=o.technologies||[];r.push(s),chrome.storage.sync.set({technologies:r}),S(r)})}render(){return this.isOpen?y`
          <div class="form-container">
            <h2>Add Technology</h2>
            ${this.isValid?"":y`<p style="color: red;">Please fill in all the fields</p>`}
            <form @submit=${this.handleSubmit}>
              <div class="input-container">
                <div class="input-item">
                  <label for="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    .value=${this.name}
                    @input=${e=>this.name=e.target.value}
                  />
                </div>
                <div class="input-item">
                  <label for="description">Description</label>
                  <textarea
                    id="description"
                    .value=${this.description}
                    @input=${e=>this.description=e.target.value}
                  ></textarea>
                </div>
                <div class="input-item">
                  <label for="url">URL</label>
                  <input
                    id="url"
                    type="text"
                    .value=${this.url}
                    @input=${e=>this.url=e.target.value}
                  />
                </div>
                <div class="input-item">
                  <label for="category">Category</label>
                  <input
                    id="category"
                    type="text"
                    .value=${this.category}
                    @input=${e=>this.category=e.target.value}
                  />
                </div>

                <div class="input-item">
                  <label for="releaseDate">Release Date</label>
                  <input
                    id="releaseDate"
                    type="date"
                    .value=${this.releaseDate}
                    @input=${e=>this.releaseDate=e.target.value}
                  />
                </div>
                <div class="input-item">
                  <label for="latestVersion">Latest Version</label>
                  <input
                    id="latestVersion"
                    type="text"
                    .value=${this.latestVersion}
                    @input=${e=>this.latestVersion=e.target.value}
                  />
                </div>
                <div class="input-item">
                  <label for="developers">Developers</label>
                  <input
                    id="developers"
                    type="text"
                    .value=${this.developers}
                    @input=${e=>this.developers=e.target.value}
                  />
                </div>
                <div class="input-item">
                  <label for="license">License</label>
                  <input
                    id="license"
                    type="text"
                    .value=${this.license}
                    @input=${e=>this.license=e.target.value}
                  />
                </div>

                <div class="input-item">
                  <label for="platforms">Platforms</label>
                  <input
                    id="platforms"
                    type="text"
                    .value=${this.platforms}
                    @input=${e=>this.platforms=e.target.value}
                  />
                </div>

                <div class="input-item">
                  <label for="features">Features</label>

                  <input
                    id="features"
                    type="text"
                    .value=${this.features}
                    @input=${e=>this.features=e.target.value}
                  />
                </div>
                <div class="input-item">
                  <label for="popularity">Popularity</label>
                  <input
                    id="popularity"
                    type="number"
                    .value=${this.popularity}
                    @input=${e=>this.popularity=Number(e.target.value)}
                  />
                </div>

                <div class="input-item">
                  <label for="documentation">Documentation</label>

                  <input
                    id="documentation"
                    type="text"
                    .value=${this.documentation}
                    @input=${e=>this.documentation=e.target.value}
                  />
                </div>
              </div>
              <div class="actions">
                <button class="submit-button" @click=${this.handleSubmit}>
                  Add Technology
                </button>

                <button
                  type="button"
                  class="cancel-button"
                  @click=${()=>this.isOpen=!1}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        `:y`
          <button
            @click=${()=>this.isOpen=!0}
            style="position: relative; top: 0%; left: 0%; transform: translate(0%, 0%);"
          >
            Add Technology
          </button>
        `}};d.styles=T`
    :host {
      display: block;
      margin: 16px;
      font-family: Arial, sans-serif;
      width: 100%;
    }

    .form-container {
      /* center it at the middle of the screen */
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 16px;
      background-color: white;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-shadow: 0 22px 22px rgba(0, 0, 0, 0.1);
    }

    .input-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .input-item {
      display: flex;
      flex-direction: column;
    }

    .actions {
      display: flex;
      justify-content: right;
      gap: 8px;
    }

    label {
      display: block;
      margin-top: 8px;
    }

    input,
    select,
    textarea {
      width: 100%;
      padding: 8px;
      margin-top: 4px;
      margin-bottom: 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }

    button {
      padding: 8px 16px;
      background-color: #0077cc;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .cancel-button {
      background-color: #e0e0e0;
      color: #333;
    }

    button:hover {
      background-color: #005fa3;
    }
  `,c([l({type:String})],d.prototype,"name",2),c([l({type:String})],d.prototype,"description",2),c([l({type:String})],d.prototype,"url",2),c([l({type:String})],d.prototype,"category",2),c([l({type:String})],d.prototype,"releaseDate",2),c([l({type:String})],d.prototype,"latestVersion",2),c([l({type:String})],d.prototype,"developers",2),c([l({type:String})],d.prototype,"license",2),c([l({type:String})],d.prototype,"platforms",2),c([l({type:String})],d.prototype,"features",2),c([l({type:Number})],d.prototype,"popularity",2),c([l({type:String})],d.prototype,"documentation",2),c([l({type:Boolean})],d.prototype,"isOpen",2),c([l({type:String})],d.prototype,"cssHost",2),c([l({type:Boolean})],d.prototype,"isValid",2);var A=class extends ${constructor(e){super();this.technologies=[];this.isOpen=!1;this.selectedTechnology={};this.restTechnologies=[];this.technologies=e,this.addEventListener("toggle",this.__handleToggle)}__handleToggle(e){this.isOpen=e.detail.isOpen,this.selectedTechnology=e.detail.technology,this.restTechnologies=this.technologies.filter(s=>s.id!==this.selectedTechnology.id),this.style.gridTemplateColumns=this.isOpen?"1fr 1fr":"repeat(auto-fill, minmax(300px, 1fr)",this.style.justifyContent=this.isOpen?"center":"start",this.style.alignItems=this.isOpen?"center":"start"}render(){return this.isOpen?y`
          <div class="container">
            <div class="selected">
              <technology-card
                id=${this.selectedTechnology.id}
                .technology=${this.selectedTechnology}
                .isOpen=${!0}
                style="column-span: all;"
              ></technology-card>
            </div>
            <div id="rest" class="rest">
              ${this.restTechnologies.map(e=>y`
                  <technology-card
                    id=${e.id}
                    .technology=${e}
                    .isOpen=${!1}
                  ></technology-card>
                `)}
            </div>
            </div>
        `:y`
          ${this.technologies.map(e=>y`
              <technology-card
                id=${e.id}
                .technology=${e}
              ></technology-card>
            `)}
        `}};A.styles=T`
    :host {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 16px;
      padding: 16px;
    }

    .container {
        justify-content: center;
        align-items: center;
    }

    .selected {
            justify-content: center;
        align-items: center;
    }



    .rest {
        display:flex;
    }

 
  `,c([l({type:Array})],A.prototype,"technologies",2),c([l({type:Boolean})],A.prototype,"isOpen",2),c([l({type:Object})],A.prototype,"selectedTechnology",2),c([l({type:Array})],A.prototype,"restTechnologies",2);chrome.storage.sync.get("technologies",i=>{customElements.define("technology-card",Dt),customElements.define("technology-form",d),customElements.define("technology-list",A);let t=i.technologies||[];S(t)});setTimeout(()=>location.reload(),15e3);})();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
