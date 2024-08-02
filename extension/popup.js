"use strict";(()=>{var bt=Object.defineProperty;var At=Object.getOwnPropertyDescriptor;var h=(r,t,e,s)=>{for(var i=s>1?void 0:s?At(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&bt(t,e,i),i};var j=globalThis,z=j.ShadowRoot&&(j.ShadyCSS===void 0||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),rt=new WeakMap,O=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(z&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=rt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&rt.set(e,t))}return t}toString(){return this.cssText}},nt=r=>new O(typeof r=="string"?r:r+"",void 0,J),R=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new O(e,r,J)},G=(r,t)=>{if(z)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=j.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},q=z?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return nt(e)})(r):r;var{is:xt,defineProperty:Et,getOwnPropertyDescriptor:St,getOwnPropertyNames:Ct,getOwnPropertySymbols:wt,getPrototypeOf:Pt}=Object,V=globalThis,ot=V.trustedTypes,Ut=ot?ot.emptyScript:"",Ht=V.reactiveElementPolyfillSupport,N=(r,t)=>r,T={toAttribute(r,t){switch(t){case Boolean:r=r?Ut:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},B=(r,t)=>!xt(r,t),at={attribute:!0,type:String,converter:T,reflect:!1,hasChanged:B};Symbol.metadata??=Symbol("metadata"),V.litPropertyMetadata??=new WeakMap;var y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=at){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Et(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:n}=St(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return i?.call(this)},set(o){let c=i?.call(this);n.call(this,o),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??at}static _$Ei(){if(this.hasOwnProperty(N("elementProperties")))return;let t=Pt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(N("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(N("properties"))){let e=this.properties,s=[...Ct(e),...wt(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(q(i))}else t!==void 0&&e.push(q(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return G(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let n=(s.converter?.toAttribute!==void 0?s.converter:T).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let n=s.getPropertyOptions(i),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:T;this._$Em=i,this[i]=o.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??B)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,n]of s)n.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],n)}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[N("elementProperties")]=new Map,y[N("finalized")]=new Map,Ht?.({ReactiveElement:y}),(V.reactiveElementVersions??=[]).push("2.0.4");var st=globalThis,W=st.trustedTypes,lt=W?W.createPolicy("lit-html",{createHTML:r=>r}):void 0,mt="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,gt="?"+_,Mt=`<${gt}>`,x=document,L=()=>x.createComment(""),D=r=>r===null||typeof r!="object"&&typeof r!="function",ft=Array.isArray,Ot=r=>ft(r)||typeof r?.[Symbol.iterator]=="function",Q=`[ 	
\f\r]`,I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ct=/-->/g,ht=/>/g,b=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pt=/'/g,dt=/"/g,$t=/^(?:script|style|textarea|title)$/i,yt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),U=yt(1),Vt=yt(2),E=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),ut=new WeakMap,A=x.createTreeWalker(x,129);function vt(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return lt!==void 0?lt.createHTML(t):t}var Rt=(r,t)=>{let e=r.length-1,s=[],i,n=t===2?"<svg>":"",o=I;for(let c=0;c<e;c++){let a=r[c],d,g,l=-1,$=0;for(;$<a.length&&(o.lastIndex=$,g=o.exec(a),g!==null);)$=o.lastIndex,o===I?g[1]==="!--"?o=ct:g[1]!==void 0?o=ht:g[2]!==void 0?($t.test(g[2])&&(i=RegExp("</"+g[2],"g")),o=b):g[3]!==void 0&&(o=b):o===b?g[0]===">"?(o=i??I,l=-1):g[1]===void 0?l=-2:(l=o.lastIndex-g[2].length,d=g[1],o=g[3]===void 0?b:g[3]==='"'?dt:pt):o===dt||o===pt?o=b:o===ct||o===ht?o=I:(o=b,i=void 0);let v=o===b&&r[c+1].startsWith("/>")?" ":"";n+=o===I?a+Mt:l>=0?(s.push(d),a.slice(0,l)+mt+a.slice(l)+_+v):a+_+(l===-2?c:v)}return[vt(r,n+(r[e]||"<?>")+(t===2?"</svg>":"")),s]},S=class{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0,c=t.length-1,a=this.parts,[d,g]=Rt(t,e);if(this.el=S.createElement(d,s),A.currentNode=this.el.content,e===2){let l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=A.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(let l of i.getAttributeNames())if(l.endsWith(mt)){let $=g[o++],v=i.getAttribute(l).split(_),k=/([.?@])?(.*)/.exec($);a.push({type:1,index:n,name:k[2],strings:v,ctor:k[1]==="."?Y:k[1]==="?"?F:k[1]==="@"?tt:P}),i.removeAttribute(l)}else l.startsWith(_)&&(a.push({type:6,index:n}),i.removeAttribute(l));if($t.test(i.tagName)){let l=i.textContent.split(_),$=l.length-1;if($>0){i.textContent=W?W.emptyScript:"";for(let v=0;v<$;v++)i.append(l[v],L()),A.nextNode(),a.push({type:2,index:++n});i.append(l[$],L())}}}else if(i.nodeType===8)if(i.data===gt)a.push({type:2,index:n});else{let l=-1;for(;(l=i.data.indexOf(_,l+1))!==-1;)a.push({type:7,index:n}),l+=_.length-1}n++}}static createElement(t,e){let s=x.createElement("template");return s.innerHTML=t,s}};function w(r,t,e=r,s){if(t===E)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl,n=D(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=w(r,i._$AS(r,t.values),i,s)),t}var X=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??x).importNode(e,!0);A.currentNode=i;let n=A.nextNode(),o=0,c=0,a=s[0];for(;a!==void 0;){if(o===a.index){let d;a.type===2?d=new C(n,n.nextSibling,this,t):a.type===1?d=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(d=new et(n,this,t)),this._$AV.push(d),a=s[++c]}o!==a?.index&&(n=A.nextNode(),o++)}return A.currentNode=x,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},C=class{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),D(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ot(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==u&&D(this._$AH)?this._$AA.nextSibling.data=t:this.T(x.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=S.createElement(vt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let n=new X(i,this),o=n.u(this.options);n.p(e),this.T(o),this._$AH=n}}_$AC(t){let e=ut.get(t.strings);return e===void 0&&ut.set(t.strings,e=new S(t)),e}k(t){ft(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let n of t)i===e.length?e.push(s=new C(this.S(L()),this.S(L()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},P=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}_$AI(t,e=this,s,i){let n=this.strings,o=!1;if(n===void 0)t=w(this,t,e,0),o=!D(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else{let c=t,a,d;for(t=n[0],a=0;a<n.length-1;a++)d=w(this,c[s+a],e,a),d===E&&(d=this._$AH[a]),o||=!D(d)||d!==this._$AH[a],d===u?t=u:t!==u&&(t+=(d??"")+n[a+1]),this._$AH[a]=d}o&&!i&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Y=class extends P{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}},F=class extends P{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}},tt=class extends P{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=w(this,t,e,0)??u)===E)return;let s=this._$AH,i=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==u&&(s===u||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},et=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}};var Nt=st.litHtmlPolyfillSupport;Nt?.(S,C),(st.litHtmlVersions??=[]).push("3.1.4");var _t=(r,t,e)=>{let s=e?.renderBefore??t,i=s._$litPart$;if(i===void 0){let n=e?.renderBefore??null;s._$litPart$=i=new C(t.insertBefore(L(),n),n,void 0,e??{})}return i._$AI(r),i};var f=class extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=_t(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E}};f._$litElement$=!0,f["finalized"]=!0,globalThis.litElementHydrateSupport?.({LitElement:f});var Tt=globalThis.litElementPolyfillSupport;Tt?.({LitElement:f});(globalThis.litElementVersions??=[]).push("4.0.6");var K=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};var It={attribute:!0,type:String,converter:T,reflect:!1,hasChanged:B},Lt=(r=It,t,e)=>{let{kind:s,metadata:i}=e,n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),n.set(e.name,r),s==="accessor"){let{name:o}=e;return{set(c){let a=t.get.call(this);t.set.call(this,c),this.requestUpdate(o,a,r)},init(c){return c!==void 0&&this.P(o,void 0,r),c}}}if(s==="setter"){let{name:o}=e;return function(c){let a=this[o];t.call(this,c),this.requestUpdate(o,a,r)}}throw Error("Unsupported decorator location: "+s)};function m(r){return(t,e)=>typeof e=="object"?Lt(r,t,e):((s,i,n)=>{let o=i.hasOwnProperty(n);return i.constructor.createProperty(n,o?{...s,wrapped:!0}:s),o?Object.getOwnPropertyDescriptor(i,n):void 0})(r,t,e)}var H=class extends f{removeTechnology(){chrome.storage.sync.get("technologies",e=>{let s=e.technologies||[],i=s.findIndex(n=>n.id===this.technology.id);s.splice(i,1),chrome.storage.sync.set({technologies:s})}),this.remove,it()}render(){return U`
      <h2>${this.technology.name}</h2>
      <p>${this.technology.description}</p>
      <ul>
        <li>
          <strong>Category:</strong> ${this.technology.category}
        </li>
        <li>
          <strong>Release Date:</strong> ${this.technology.releaseDate}
        </li>
        <li>
          <strong>Latest Version:</strong> ${this.technology.latestVersion}
        </li>
        <li>
          <strong>Developers:</strong> ${this.technology.developers.join(", ")}
        </li>
        <li>
          <strong>License:</strong> ${this.technology.license}
        </li>
        <li>
          <strong>Platforms:</strong> ${this.technology.platforms.join(", ")}
        </li>
        <li>
          <strong>Features:</strong> ${this.technology.features.join(", ")}
        </li>
        <li>
          <strong>Popularity:</strong> ${this.technology.popularity}
        </li>
        <li>
          <strong>Documentation:</strong>
          <a href=${this.technology.documentation} target="_blank"
            >${this.technology.documentation}</a
          >
        </li>
      </ul>
      <button @click=${this.removeTechnology}>Remove</button>
    `}};H.styles=R`
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
  `,h([m({type:Object})],H.prototype,"technology",2),H=h([K("technology-card")],H);var p=class extends f{constructor(){super(...arguments);this.name="";this.description="";this.url="";this.category="";this.releaseDate="";this.latestVersion="";this.developers="";this.license="";this.platforms="";this.features="";this.popularity=0;this.documentation="";this.isOpen=!1;this.cssHost=""}handleSubmit(e){console.log(e),e.preventDefault();let s={id:Math.random().toString(36).substr(2,9),name:this.name,description:this.description,url:this.url,category:this.category,releaseDate:this.releaseDate,latestVersion:this.latestVersion,developers:this.developers.split(","),license:this.license,platforms:this.platforms.split(","),features:this.features.split(","),popularity:this.popularity,documentation:this.documentation};chrome.storage.sync.get("technologies",i=>{let n=i.technologies||[];n.push(s),chrome.storage.sync.set({technologies:n})}),this.isOpen=!1,it()}render(){return this.isOpen?U`
      <div class="form-container">
      <h2>Add Technology</h2>
      <form @submit=${this.handleSubmit} >
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
          type="text"
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

        <button
            class="submit-button"
        type="submit">Add Technology</button>

        <button 
        type="button"
        class="cancel-button"
        @click=${()=>this.isOpen=!1}>Cancel</button>

      </div>

      </form>
    </div>
    `:U`
          <button @click=${()=>this.isOpen=!0}>Add Technology</button>
        `}};p.styles=R`
    :host {
      display: block;
      margin: 16px;
    }

    .form-container {
      background-color: white;
      padding: 24px;
      border-radius: 8px;
      box-shadow: -22px 22px 44px rgba(0, 0, 0, 0.1);
      border: 1px solid #ccc;
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
  `,h([m({type:String})],p.prototype,"name",2),h([m({type:String})],p.prototype,"description",2),h([m({type:String})],p.prototype,"url",2),h([m({type:String})],p.prototype,"category",2),h([m({type:String})],p.prototype,"releaseDate",2),h([m({type:String})],p.prototype,"latestVersion",2),h([m({type:String})],p.prototype,"developers",2),h([m({type:String})],p.prototype,"license",2),h([m({type:String})],p.prototype,"platforms",2),h([m({type:String})],p.prototype,"features",2),h([m({type:Number})],p.prototype,"popularity",2),h([m({type:String})],p.prototype,"documentation",2),h([m({type:Boolean})],p.prototype,"isOpen",2),h([m({type:String})],p.prototype,"cssHost",2),p=h([K("technology-form")],p);var M=class extends f{constructor(){super(...arguments);this.technologies=[]}render(){return U`
      ${this.technologies.map(e=>U`
          <technology-card .technology=${e}></technology-card>
        `)}
    `}};M.styles=R`
    :host {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 16px;
      padding: 16px;
    }
  `,h([m({type:Array})],M.prototype,"technologies",2),M=h([K("technology-list")],M);var it=()=>{document.body.innerHTML="";let r=document.createElement("technology-form");document.body.appendChild(r),chrome.storage.sync.get("technologies",t=>{let e=t.technologies||[],s=document.createElement("technology-list");s.technologies=e,document.body.appendChild(s)})};chrome.storage.sync.get("technologies",r=>{let t=r.technologies||[];it()});})();
/**
 * @license
 * Copyright 2017 Google LLC
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
