'use strict';

var te = require('styled-components');
var reactHooks = require('@engagespot/react-hooks');
var B = require('react');
var reactErrorBoundary = require('react-error-boundary');
var sonner = require('sonner');
var _r = require('react-dom');
var reactUse = require('react-use');
var lu = require('lodash.merge');
var jsxRuntime = require('react/jsx-runtime');
var reactIntersectionObserver = require('react-intersection-observer');
var templateBlocks = require('@engagespot/template-blocks');
var reactI18next = require('react-i18next');
var bp = require('i18next');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var te__default = /*#__PURE__*/_interopDefault(te);
var B__namespace = /*#__PURE__*/_interopNamespace(B);
var _r__namespace = /*#__PURE__*/_interopNamespace(_r);
var lu__default = /*#__PURE__*/_interopDefault(lu);
var bp__default = /*#__PURE__*/_interopDefault(bp);

/**
  * @engagespot/react-component v2.0.0
  *
  * @license MIT
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
 
var nc=Object.create;var si=Object.defineProperty;var ic=Object.getOwnPropertyDescriptor;var ac=Object.getOwnPropertyNames;var sc=Object.getPrototypeOf,lc=Object.prototype.hasOwnProperty;var li=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var cc=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of ac(t))!lc.call(e,n)&&n!==r&&si(e,n,{get:()=>t[n],enumerable:!(o=ic(t,n))||o.enumerable});return e};var ci=(e,t,r)=>(r=e!=null?nc(sc(e)):{},cc(t||!e||!e.__esModule?si(r,"default",{value:e,enumerable:!0}):r,e));var Va=li((Yy,Aa)=>{var sf=typeof Element<"u",lf=typeof Map=="function",cf=typeof Set=="function",uf=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function zr(e,t){if(e===t)return !0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return !1;var r,o,n;if(Array.isArray(e)){if(r=e.length,r!=t.length)return !1;for(o=r;o--!==0;)if(!zr(e[o],t[o]))return !1;return !0}var i;if(lf&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return !1;for(i=e.entries();!(o=i.next()).done;)if(!t.has(o.value[0]))return !1;for(i=e.entries();!(o=i.next()).done;)if(!zr(o.value[1],t.get(o.value[0])))return !1;return !0}if(cf&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return !1;for(i=e.entries();!(o=i.next()).done;)if(!t.has(o.value[0]))return !1;return !0}if(uf&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return !1;for(o=r;o--!==0;)if(e[o]!==t[o])return !1;return !0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(n=Object.keys(e),r=n.length,r!==Object.keys(t).length)return !1;for(o=r;o--!==0;)if(!Object.prototype.hasOwnProperty.call(t,n[o]))return !1;if(sf&&e instanceof Element)return !1;for(o=r;o--!==0;)if(!((n[o]==="_owner"||n[o]==="__v"||n[o]==="__o")&&e.$$typeof)&&!zr(e[n[o]],t[n[o]]))return !1;return !0}return e!==e&&t!==t}Aa.exports=function(t,r){try{return zr(t,r)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}};});var kl=li((qe,Cl)=>{var no=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof global<"u"&&global,io=function(){function e(){this.fetch=!1,this.DOMException=no.DOMException;}return e.prototype=no,new e}();(function(e){(function(r){var o=typeof e<"u"&&e||typeof self<"u"&&self||typeof o<"u"&&o,n={searchParams:"URLSearchParams"in o,iterable:"Symbol"in o&&"iterator"in Symbol,blob:"FileReader"in o&&"Blob"in o&&function(){try{return new Blob,!0}catch{return !1}}(),formData:"FormData"in o,arrayBuffer:"ArrayBuffer"in o};function i(p){return p&&DataView.prototype.isPrototypeOf(p)}if(n.arrayBuffer)var a=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],s=ArrayBuffer.isView||function(p){return p&&a.indexOf(Object.prototype.toString.call(p))>-1};function l(p){if(typeof p!="string"&&(p=String(p)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(p)||p==="")throw new TypeError('Invalid character in header field name: "'+p+'"');return p.toLowerCase()}function u(p){return typeof p!="string"&&(p=String(p)),p}function c(p){var h={next:function(){var P=p.shift();return {done:P===void 0,value:P}}};return n.iterable&&(h[Symbol.iterator]=function(){return h}),h}function f(p){this.map={},p instanceof f?p.forEach(function(h,P){this.append(P,h);},this):Array.isArray(p)?p.forEach(function(h){this.append(h[0],h[1]);},this):p&&Object.getOwnPropertyNames(p).forEach(function(h){this.append(h,p[h]);},this);}f.prototype.append=function(p,h){p=l(p),h=u(h);var P=this.map[p];this.map[p]=P?P+", "+h:h;},f.prototype.delete=function(p){delete this.map[l(p)];},f.prototype.get=function(p){return p=l(p),this.has(p)?this.map[p]:null},f.prototype.has=function(p){return this.map.hasOwnProperty(l(p))},f.prototype.set=function(p,h){this.map[l(p)]=u(h);},f.prototype.forEach=function(p,h){for(var P in this.map)this.map.hasOwnProperty(P)&&p.call(h,this.map[P],P,this);},f.prototype.keys=function(){var p=[];return this.forEach(function(h,P){p.push(P);}),c(p)},f.prototype.values=function(){var p=[];return this.forEach(function(h){p.push(h);}),c(p)},f.prototype.entries=function(){var p=[];return this.forEach(function(h,P){p.push([P,h]);}),c(p)},n.iterable&&(f.prototype[Symbol.iterator]=f.prototype.entries);function m(p){if(p.bodyUsed)return Promise.reject(new TypeError("Already read"));p.bodyUsed=!0;}function d(p){return new Promise(function(h,P){p.onload=function(){h(p.result);},p.onerror=function(){P(p.error);};})}function g(p){var h=new FileReader,P=d(h);return h.readAsArrayBuffer(p),P}function y(p){var h=new FileReader,P=d(h);return h.readAsText(p),P}function v(p){for(var h=new Uint8Array(p),P=new Array(h.length),w=0;w<h.length;w++)P[w]=String.fromCharCode(h[w]);return P.join("")}function E(p){if(p.slice)return p.slice(0);var h=new Uint8Array(p.byteLength);return h.set(new Uint8Array(p)),h.buffer}function O(){return this.bodyUsed=!1,this._initBody=function(p){this.bodyUsed=this.bodyUsed,this._bodyInit=p,p?typeof p=="string"?this._bodyText=p:n.blob&&Blob.prototype.isPrototypeOf(p)?this._bodyBlob=p:n.formData&&FormData.prototype.isPrototypeOf(p)?this._bodyFormData=p:n.searchParams&&URLSearchParams.prototype.isPrototypeOf(p)?this._bodyText=p.toString():n.arrayBuffer&&n.blob&&i(p)?(this._bodyArrayBuffer=E(p.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):n.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(p)||s(p))?this._bodyArrayBuffer=E(p):this._bodyText=p=Object.prototype.toString.call(p):this._bodyText="",this.headers.get("content-type")||(typeof p=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n.searchParams&&URLSearchParams.prototype.isPrototypeOf(p)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"));},n.blob&&(this.blob=function(){var p=m(this);if(p)return p;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var p=m(this);return p||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else return this.blob().then(g)}),this.text=function(){var p=m(this);if(p)return p;if(this._bodyBlob)return y(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(v(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},n.formData&&(this.formData=function(){return this.text().then(k)}),this.json=function(){return this.text().then(JSON.parse)},this}var x=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function T(p){var h=p.toUpperCase();return x.indexOf(h)>-1?h:p}function S(p,h){if(!(this instanceof S))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');h=h||{};var P=h.body;if(p instanceof S){if(p.bodyUsed)throw new TypeError("Already read");this.url=p.url,this.credentials=p.credentials,h.headers||(this.headers=new f(p.headers)),this.method=p.method,this.mode=p.mode,this.signal=p.signal,!P&&p._bodyInit!=null&&(P=p._bodyInit,p.bodyUsed=!0);}else this.url=String(p);if(this.credentials=h.credentials||this.credentials||"same-origin",(h.headers||!this.headers)&&(this.headers=new f(h.headers)),this.method=T(h.method||this.method||"GET"),this.mode=h.mode||this.mode||null,this.signal=h.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&P)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(P),(this.method==="GET"||this.method==="HEAD")&&(h.cache==="no-store"||h.cache==="no-cache")){var w=/([?&])_=[^&]*/;if(w.test(this.url))this.url=this.url.replace(w,"$1_="+new Date().getTime());else {var R=/\?/;this.url+=(R.test(this.url)?"&":"?")+"_="+new Date().getTime();}}}S.prototype.clone=function(){return new S(this,{body:this._bodyInit})};function k(p){var h=new FormData;return p.trim().split("&").forEach(function(P){if(P){var w=P.split("="),R=w.shift().replace(/\+/g," "),b=w.join("=").replace(/\+/g," ");h.append(decodeURIComponent(R),decodeURIComponent(b));}}),h}function F(p){var h=new f,P=p.replace(/\r?\n[\t ]+/g," ");return P.split("\r").map(function(w){return w.indexOf(`
`)===0?w.substr(1,w.length):w}).forEach(function(w){var R=w.split(":"),b=R.shift().trim();if(b){var C=R.join(":").trim();h.append(b,C);}}),h}O.call(S.prototype);function N(p,h){if(!(this instanceof N))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');h||(h={}),this.type="default",this.status=h.status===void 0?200:h.status,this.ok=this.status>=200&&this.status<300,this.statusText=h.statusText===void 0?"":""+h.statusText,this.headers=new f(h.headers),this.url=h.url||"",this._initBody(p);}O.call(N.prototype),N.prototype.clone=function(){return new N(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},N.error=function(){var p=new N(null,{status:0,statusText:""});return p.type="error",p};var W=[301,302,303,307,308];N.redirect=function(p,h){if(W.indexOf(h)===-1)throw new RangeError("Invalid status code");return new N(null,{status:h,headers:{location:p}})},r.DOMException=o.DOMException;try{new r.DOMException;}catch{r.DOMException=function(h,P){this.message=h,this.name=P;var w=Error(h);this.stack=w.stack;},r.DOMException.prototype=Object.create(Error.prototype),r.DOMException.prototype.constructor=r.DOMException;}function I(p,h){return new Promise(function(P,w){var R=new S(p,h);if(R.signal&&R.signal.aborted)return w(new r.DOMException("Aborted","AbortError"));var b=new XMLHttpRequest;function C(){b.abort();}b.onload=function(){var A={status:b.status,statusText:b.statusText,headers:F(b.getAllResponseHeaders()||"")};A.url="responseURL"in b?b.responseURL:A.headers.get("X-Request-URL");var oe="response"in b?b.response:b.responseText;setTimeout(function(){P(new N(oe,A));},0);},b.onerror=function(){setTimeout(function(){w(new TypeError("Network request failed"));},0);},b.ontimeout=function(){setTimeout(function(){w(new TypeError("Network request failed"));},0);},b.onabort=function(){setTimeout(function(){w(new r.DOMException("Aborted","AbortError"));},0);};function U(A){try{return A===""&&o.location.href?o.location.href:A}catch{return A}}b.open(R.method,U(R.url),!0),R.credentials==="include"?b.withCredentials=!0:R.credentials==="omit"&&(b.withCredentials=!1),"responseType"in b&&(n.blob?b.responseType="blob":n.arrayBuffer&&R.headers.get("Content-Type")&&R.headers.get("Content-Type").indexOf("application/octet-stream")!==-1&&(b.responseType="arraybuffer")),h&&typeof h.headers=="object"&&!(h.headers instanceof f)?Object.getOwnPropertyNames(h.headers).forEach(function(A){b.setRequestHeader(A,u(h.headers[A]));}):R.headers.forEach(function(A,oe){b.setRequestHeader(oe,A);}),R.signal&&(R.signal.addEventListener("abort",C),b.onreadystatechange=function(){b.readyState===4&&R.signal.removeEventListener("abort",C);}),b.send(typeof R._bodyInit>"u"?null:R._bodyInit);})}return I.polyfill=!0,o.fetch||(o.fetch=I,o.Headers=f,o.Request=S,o.Response=N),r.Headers=f,r.Request=S,r.Response=N,r.fetch=I,r})({});})(io);io.fetch.ponyfill=!0;delete io.fetch.polyfill;var Ht=no.fetch?no:io;qe=Ht.fetch;qe.default=Ht.fetch;qe.fetch=Ht.fetch;qe.Headers=Ht.Headers;qe.Request=Ht.Request;qe.Response=Ht.Response;Cl.exports=qe;});var Rt=te__default.default.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  div,
  span,
  p,
  a,
  ol,
  ul,
  li,
  label,
  article,
  aside,
  footer,
  header,
  nav,
  section {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family:
      'Public Sans',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      sans-serif;
    vertical-align: baseline;
    line-height: normal;
    text-align: left;
    box-sizing: border-box;
  }

  a {
    cursor: pointer;
  }

  button {
    background: transparent;
    border: none;
    padding: 5px;
    cursor: pointer;
  }
`;var ze={colors:{brandingPrimary:"white",colorPrimary:"#282c34",colorSecondary:"#686868"},panel:{boxShadow:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",width:"26.25rem",height:"40rem",borderBottomLeftRadius:"11px",borderBottomRightRadius:"11px",borderTopLeftRadius:"11px",borderTopRightRadius:"11px",arrowSize:"10px",arrowInset:"-5px auto auto 0"},feed:{background:"white",placeholderTextColor:"#2c2c2c",height:"30rem",placeholderTextSize:"1rem",placeholderMargin:"1rem 0 0 0",placeholderFontWeight:"300"},feedItem:{border:"1px solid #edf4f2",background:"white",notificationDot:"green",hoverBackground:"#919eab14",headerColor:"#1c1c1c",descriptionColor:"#464646",dateColor:"#888888",placeHolderBackground:"rgb(230, 230, 230)",placeHolderGradient:"linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%)",height:"30rem",padding:"1.25rem",placeholderTextSize:"1rem",notificationDotSize:".5rem",imageSize:"2.5rem",imageRadius:"50%",hoverTransition:"all 0.2s",textContentPadding:"0 .5rem 0 0",textContentMargin:"0 auto 0 1.2rem",headerFontWeight:"400",headerSize:".875rem",headerPadding:"0 0 0.3rem 0",descriptionSize:"0.8rem",descriptionPadding:"0 0 0.3rem 0",dateSize:".75rem",menuMargin:"0 1rem 0 0"},notificationButton:{background:"transparent",hoverBackground:"rgb(176 176 176 / 20%)",iconFill:"#999999",floatingButtonShadow:"0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",iconSize:"1.5rem",outline:"none",margin:"0",padding:"5px",borderWidth:"0",normalButtonRadius:"5px",floatingButtonRadius:"50%",transition:"all .2s"},unreadBadgeCount:{background:"red",color:"white",borderRadius:"50%",fontSize:".6rem",inset:"-4px -4px auto auto",size:"1rem"},headerDropdown:{iconFill:"black",background:"transparent",hoverBackground:"",menuBackground:"white",menuShadow:"0 0 8px 0 rgba(0, 0, 0, 0.14)",menuItemTextColor:"#282c34",menuItemHoverBackground:"#edf4f2",iconWidth:".6rem",iconHeight:".7rem",margin:"0 .5rem 0 0",padding:".5rem",borderWidth:"0",outline:"none",transition:"all 0.2s",menuBorderRadius:"2px",menuItemPadding:"0.5rem 0.7rem"},dropdown:{iconFill:"#888888",background:"transparent",hoverBackground:"rgb(230, 230, 230)",menuBackground:"white",menuShadow:"0 0 8px 0 rgba(0, 0, 0, 0.14)",menuItemTextColor:"#282c34",menuItemHoverBackground:"#edf4f2",iconWidth:".5rem",iconHeight:".6rem",margin:"0 .5rem 0 0",padding:".5rem",borderWidth:"0",outline:"none",transition:"all 0.2s",menuBorderRadius:"2px",menuItemPadding:"0.5rem 0.7rem"},jumpToTop:{background:"white",iconFill:"#888888",shadow:"0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",iconSize:"1rem",inset:"1.5rem 7rem auto auto",borderRadius:"50%",padding:"0.7rem",margin:"0",transition:"all ease-in-out 0.5s"},header:{fontColor:"#212B36",closeButtonBackground:"transparent",fontSize:"1.175rem",fontWeight:"700",height:"3rem",closeButtonColor:"black",padding:"2rem 1rem",closeButtonOutline:"none",closeButtonPadding:"5px",closeButtonFontSize:"1.6rem",closeButtonMargin:"0",lineHeight:"1.75rem"},footer:{background:"white",fontColor:"#484848",preferenceButtonColor:"#484848",border:"1px solid rgb(230, 230, 230)",preferenceButtonHoverBackground:"rgb(230, 230, 230)",fontWeight:"400",height:"3rem",padding:"0.5rem 1rem",fontSize:"0.8rem",linkMargin:"0 0.5rem 0 auto",linkSize:"1.5rem",preferenceButtonMargin:"0 0 0 auto",preferenceButtonSize:"1.2rem",preferenceButtonPadding:".2rem",preferenceButtonHoverTransition:"all 0.2s",linkRadius:"3px"},toggle:{background:"rgba(196, 195, 195, 0.55)",activeColor:"#16a085",dotColor:"rgb(255, 255, 255);"},preference:{fontColor:"#1c1c1c",background:"white",height:"30rem",fontWeight:"400",padding:"1.2rem 1.5rem 1.2rem 1.5rem",fontSize:"1rem"},preferenceModal:{overlayBackground:"#2b2b2b",headingColor:"#1c1c1c",background:"rgba(255, 255, 255, 0.8)",closeButtonColor:"#bbb9b9",textPrimaryColor:"#1c1c1c",textSecondaryColor:"#525252",buttonPrimaryColor:"white",buttonPrimaryBackgroundColor:"#1abc9c",buttonPrimaryHoverBackgroundColor:"#1a9c82",buttonSecondaryColor:"#4e4e4e",buttonSecondaryBackgroundColor:"transparent",buttonSecondaryHoverBackgroundColor:"#cfcfcf",overlayOpacity:".6",height:"35%",backdropFilter:"blur(1px)",borderRadius:"1.5rem 1.5rem 0 0",padding:"1.2rem 2rem 1.2rem 2rem",textAlign:"center",headerMargin:"0 2rem",headerFontSize:"1rem",closeButtonSize:".6rem",textPrimaryMargin:"0.5rem 2rem",textPrimaryFontSize:".9rem",textSecondaryMargin:"1rem 0 0 0",textSecondaryFontSize:".8rem",primaryButtonFontWeight:"600",primaryButtonPadding:"0.6rem 4.5rem",primaryButtonBorderRadius:"10px",primaryButtonMargin:"0.6rem 0 0.2rem 0",primaryButtonTransition:"all 0.2s"},tab:{gap:"1.3rem",background:"#ffffff",borderBottom:"1px solid  #e0e0e0",buttonColor:"#5f6368",buttonBackground:"none",buttonBorder:"none",buttonHoverColor:"#202124",buttonPadding:"1rem 0.75rem",buttonActiveColor:"#202124",buttonFontSize:"0.875rem",buttonFontWeight:"400",buttonActiveFontWeight:"500",buttonActiveIndicatorHeight:"0.24rem",buttonActiveIndicatorBackground:"black",buttonActiveIndicatorTransition:"transform 0.2s ease-in-out",scrollButtonWidth:"1.75rem",scrollButtonHeight:"1.75rem",scrollButtonBackground:"#f1f3f4",scrollButtonFontSize:"1.125rem",scrollButtonColor:"#5f6368",scrollButtonDisabledColor:"#bdc1c6",scrollButtonBorder:"1px solid #dadada",scrollButtonHoverColor:"#3c4043",scrollButtonHoverBackground:"#e0e3e5"},actionableElement:{button:{primaryButtonBorderRadius:"8px",primaryButtonPadding:"0.575rem 0.9rem",primaryButtonFontWeight:"700",primaryButtonFontSize:"0.875rem",primaryButtonBackground:"black",primaryButtonHoverBackground:"rgba(0, 0, 0, 0.85)",primaryButtonColor:"white",primaryButtonMargin:"0",primaryButtonBorder:"1px solid #212b36",primaryButtonTransition:"all 0.2s",secondaryButtonBorderRadius:"8px",secondaryButtonPadding:"0.575rem 0.9rem",secondaryButtonFontWeight:"700",secondaryButtonFontSize:"0.875rem",secondaryButtonBackground:"white",secondaryButtonHoverBackground:"rgba(255, 255, 255, 0.85)",secondaryButtonColor:"black",secondaryButtonMargin:"0",secondaryButtonBorder:"1px solid #919eab52",secondaryButtonTransition:"all 0.2s"},image:{height:"136px",objectFit:"cover"},ratingStar:{size:"23px"},textArea:{fontSize:"0.75rem",padding:"0.675rem 0.75rem",borderRadius:"6px",border:"1px solid #d9d9dc",maxHeight:"150px",resize:"none",outline:"none",width:"100%",overflow:"auto",focusBorderColor:"#808080",background:"white",color:"black",lineHeight:"normal"}}};var ui=te__default.default.div`
  && {
    ${()=>te.css`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.5rem;
    `}

    svg {
      height: 20px;
      width: 20px;
      stroke: red;
    }
  }
`,fi=te__default.default.p`
  && {
    ${()=>te.css`
      color: #34353b;
      font-size: 0.85rem;
      font-weight: bold;
    `}
  }
`,di=te__default.default.p`
  && {
    ${()=>te.css`
      font-size: 0.75rem;
      border: 0.0625rem solid #f0cec3;
      border-radius: 0.25rem;
      padding: 0.3125rem;
      background: #fbefeb;
      color: #736d6b;
      width: 100%;
    `}
  }
`,pi=te__default.default.p`
  && {
    ${()=>te.css`
      font-size: 0.625rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.2rem;
    `}

    svg {
      height: 12px;
      width: 12px;
    }
  }
`;var gr=te__default.default.button.withConfig({shouldForwardProp:e=>!["buttonType","hasError"].includes(e)})`
  && {
    ${({theme:{notificationButton:e},buttonType:t,hasError:r})=>te.css`
      display: flex;
      justify-items: center;
      align-content: center;
      box-shadow: ${t==="floating"&&e.floatingButtonShadow};
      border-width: ${e.borderWidth};
      border-radius: ${t==="floating"?e.floatingButtonRadius:e.normalButtonRadius};
      margin: ${e.margin};
      padding: ${e.padding};
      box-sizing: border-box;
      outline: ${e.outline};
      user-select: none;
      cursor: pointer;
      position: relative;
      background-color: ${e.background};
      transition: ${e.transition};

      &:hover {
        background-color: ${e.hoverBackground};
      }

      svg {
        height: ${e.iconSize};
        width: ${e.iconSize};
        stroke: ${r?"red":e.iconFill};
      }
    `}
`;var vr=te__default.default.div``,yr=te__default.default.div`
  && {
    display: flex;
    box-sizing: border-box;
    font-family: sans-serif;
    color: ${({theme:e})=>e.colors.colorPrimary};
    border-bottom-left-radius: ${({theme:e})=>e.panel.borderBottomLeftRadius};
    border-bottom-right-radius: ${({theme:e})=>e.panel.borderBottomRightRadius};
    border-top-left-radius: ${({theme:e})=>e.panel.borderTopLeftRadius};
    border-top-right-radius: ${({theme:e})=>e.panel.borderTopRightRadius};
    flex-direction: column;
    overflow: hidden;
    height: ${({theme:e})=>e.panel.height};
    box-shadow: ${({theme:e})=>e.panel.boxShadow};
    width: ${({theme:e})=>e.panel.width};
    align-items: stretch;
    justify-content: flex-start;
    position: relative;
    background-color: ${({theme:e})=>e.panel.background};
  }
`,xr=te__default.default.div`
  && {
    ${({theme:{panel:e,colors:t,position:r}})=>te.css`
      position: absolute;
      width: ${e.arrowSize};
      height: ${e.arrowSize};
      left: ${r?.left}px;
      top: ${r?.top}px;

      &:after {
        content: ' ';
        transform: rotate(45deg);
        width: ${e.arrowSize};
        height: ${e.arrowSize};
        position: absolute;
        inset: ${e.arrowInset};
        background-color: ${t.brandingPrimary};
      }
    `}
  }
`;function Ye(e){return mi(e)?(e.nodeName||"").toLowerCase():"#document"}function le(e){var t;return (e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Me(e){var t;return (t=(mi(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function mi(e){return e instanceof Node||e instanceof le(e).Node}function z(e){return e instanceof Element||e instanceof le(e).Element}function ae(e){return e instanceof HTMLElement||e instanceof le(e).HTMLElement}function br(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof le(e).ShadowRoot}function Tt(e){let{overflow:t,overflowX:r,overflowY:o,display:n}=pe(e);return /auto|scroll|overlay|hidden|clip/.test(t+o+r)&&!["inline","contents"].includes(n)}function hi(e){return ["table","td","th"].includes(Ye(e))}function wr(e){let t=Rr(),r=pe(e);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(r.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(r.contain||"").includes(o))}function gi(e){let t=Re(e);for(;ae(t)&&!Ce(t);){if(wr(t))return t;t=Re(t);}return null}function Rr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ce(e){return ["html","body","#document"].includes(Ye(e))}function pe(e){return le(e).getComputedStyle(e)}function zt(e){return z(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Re(e){if(Ye(e)==="html")return e;let t=e.assignedSlot||e.parentNode||br(e)&&e.host||Me(e);return br(t)?t.host:t}function vi(e){let t=Re(e);return Ce(t)?e.ownerDocument?e.ownerDocument.body:e.body:ae(t)&&Tt(t)?t:vi(t)}function Te(e,t,r){var o;t===void 0&&(t=[]),r===void 0&&(r=!0);let n=vi(e),i=n===((o=e.ownerDocument)==null?void 0:o.body),a=le(n);return i?t.concat(a,a.visualViewport||[],Tt(n)?n:[],a.frameElement&&r?Te(a.frameElement):[]):t.concat(n,Te(n,[],r))}function fo(e,t){if(!e||!t)return !1;let r=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return !0;if(r&&br(r)){let o=t;for(;o;){if(e===o)return !0;o=o.parentNode||o.host;}}return !1}function po(e,t){let r=["mouse","pen"];return r.includes(e)}function yi(e){return "nativeEvent"in e}function xi(e){return e.matches("html,body")}function mo(e){return e?.ownerDocument||document}function Tr(e,t){if(t==null)return !1;if("composedPath"in e)return e.composedPath().includes(t);let r=e;return r.target!=null&&t.contains(r.target)}function Et(e){return "composedPath"in e?e.composedPath()[0]:e.target}var hc="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function bi(e){return ae(e)&&e.matches(hc)}var et=Math.min,Ze=Math.max,Zt=Math.round;var Fe=e=>({x:e,y:e}),gc={left:"right",right:"left",bottom:"top",top:"bottom"},vc={start:"end",end:"start"};function wi(e,t,r){return Ze(e,et(t,r))}function jt(e,t){return typeof e=="function"?e(t):e}function tt(e){return e.split("-")[0]}function St(e){return e.split("-")[1]}function Ri(e){return e==="x"?"y":"x"}function Sr(e){return e==="y"?"height":"width"}function Pr(e){return ["top","bottom"].includes(tt(e))?"y":"x"}function Or(e){return Ri(Pr(e))}function Ti(e,t,r){r===void 0&&(r=!1);let o=St(e),n=Or(e),i=Sr(n),a=n==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=Yt(a)),[a,Yt(a)]}function Ei(e){let t=Yt(e);return [Er(e),t,Er(t)]}function Er(e){return e.replace(/start|end/g,t=>vc[t])}function yc(e,t,r){let o=["left","right"],n=["right","left"],i=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return r?t?n:o:t?o:n;case"left":case"right":return t?i:a;default:return []}}function Si(e,t,r,o){let n=St(e),i=yc(tt(e),r==="start",o);return n&&(i=i.map(a=>a+"-"+n),t&&(i=i.concat(i.map(Er)))),i}function Yt(e){return e.replace(/left|right|bottom|top/g,t=>gc[t])}function xc(e){return {top:0,right:0,bottom:0,left:0,...e}}function ho(e){return typeof e!="number"?xc(e):{top:e,right:e,bottom:e,left:e}}function rt(e){let{x:t,y:r,width:o,height:n}=e;return {width:o,height:n,top:r,left:t,right:t+o,bottom:r+n,x:t,y:r}}function Pi(e,t,r){let{reference:o,floating:n}=e,i=Pr(t),a=Or(t),s=Sr(a),l=tt(t),u=i==="y",c=o.x+o.width/2-n.width/2,f=o.y+o.height/2-n.height/2,m=o[s]/2-n[s]/2,d;switch(l){case"top":d={x:c,y:o.y-n.height};break;case"bottom":d={x:c,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:f};break;case"left":d={x:o.x-n.width,y:f};break;default:d={x:o.x,y:o.y};}switch(St(t)){case"start":d[a]-=m*(r&&u?-1:1);break;case"end":d[a]+=m*(r&&u?-1:1);break}return d}var Oi=async(e,t,r)=>{let{placement:o="bottom",strategy:n="absolute",middleware:i=[],platform:a}=r,s=i.filter(Boolean),l=await(a.isRTL==null?void 0:a.isRTL(t)),u=await a.getElementRects({reference:e,floating:t,strategy:n}),{x:c,y:f}=Pi(u,o,l),m=o,d={},g=0;for(let y=0;y<s.length;y++){let{name:v,fn:E}=s[y],{x:O,y:x,data:T,reset:S}=await E({x:c,y:f,initialPlacement:o,placement:m,strategy:n,middlewareData:d,rects:u,platform:a,elements:{reference:e,floating:t}});c=O??c,f=x??f,d={...d,[v]:{...d[v],...T}},S&&g<=50&&(g++,typeof S=="object"&&(S.placement&&(m=S.placement),S.rects&&(u=S.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:n}):S.rects),{x:c,y:f}=Pi(u,m,l)),y=-1);}return {x:c,y:f,placement:m,strategy:n,middlewareData:d}};async function Ci(e,t){var r;t===void 0&&(t={});let{x:o,y:n,platform:i,rects:a,elements:s,strategy:l}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:f="floating",altBoundary:m=!1,padding:d=0}=jt(t,e),g=ho(d),v=s[m?f==="floating"?"reference":"floating":f],E=rt(await i.getClippingRect({element:(r=await(i.isElement==null?void 0:i.isElement(v)))==null||r?v:v.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(s.floating)),boundary:u,rootBoundary:c,strategy:l})),O=f==="floating"?{x:o,y:n,width:a.floating.width,height:a.floating.height}:a.reference,x=await(i.getOffsetParent==null?void 0:i.getOffsetParent(s.floating)),T=await(i.isElement==null?void 0:i.isElement(x))?await(i.getScale==null?void 0:i.getScale(x))||{x:1,y:1}:{x:1,y:1},S=rt(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:O,offsetParent:x,strategy:l}):O);return {top:(E.top-S.top+g.top)/T.y,bottom:(S.bottom-E.bottom+g.bottom)/T.y,left:(E.left-S.left+g.left)/T.x,right:(S.right-E.right+g.right)/T.x}}var ki=e=>({name:"arrow",options:e,async fn(t){let{x:r,y:o,placement:n,rects:i,platform:a,elements:s,middlewareData:l}=t,{element:u,padding:c=0}=jt(e,t)||{};if(u==null)return {};let f=ho(c),m={x:r,y:o},d=Or(n),g=Sr(d),y=await a.getDimensions(u),v=d==="y",E=v?"top":"left",O=v?"bottom":"right",x=v?"clientHeight":"clientWidth",T=i.reference[g]+i.reference[d]-m[d]-i.floating[g],S=m[d]-i.reference[d],k=await(a.getOffsetParent==null?void 0:a.getOffsetParent(u)),F=k?k[x]:0;(!F||!await(a.isElement==null?void 0:a.isElement(k)))&&(F=s.floating[x]||i.floating[g]);let N=T/2-S/2,W=F/2-y[g]/2-1,I=et(f[E],W),p=et(f[O],W),h=I,P=F-y[g]-p,w=F/2-y[g]/2+N,R=wi(h,w,P),b=!l.arrow&&St(n)!=null&&w!==R&&i.reference[g]/2-(w<h?I:p)-y[g]/2<0,C=b?w<h?w-h:w-P:0;return {[d]:m[d]+C,data:{[d]:R,centerOffset:w-R-C,...b&&{alignmentOffset:C}},reset:b}}});var Mi=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,o;let{placement:n,middlewareData:i,rects:a,initialPlacement:s,platform:l,elements:u}=t,{mainAxis:c=!0,crossAxis:f=!0,fallbackPlacements:m,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:y=!0,...v}=jt(e,t);if((r=i.arrow)!=null&&r.alignmentOffset)return {};let E=tt(n),O=tt(s)===s,x=await(l.isRTL==null?void 0:l.isRTL(u.floating)),T=m||(O||!y?[Yt(s)]:Ei(s));!m&&g!=="none"&&T.push(...Si(s,y,g,x));let S=[s,...T],k=await Ci(t,v),F=[],N=((o=i.flip)==null?void 0:o.overflows)||[];if(c&&F.push(k[E]),f){let h=Ti(n,a,x);F.push(k[h[0]],k[h[1]]);}if(N=[...N,{placement:n,overflows:F}],!F.every(h=>h<=0)){var W,I;let h=(((W=i.flip)==null?void 0:W.index)||0)+1,P=S[h];if(P)return {data:{index:h,overflows:N},reset:{placement:P}};let w=(I=N.filter(R=>R.overflows[0]<=0).sort((R,b)=>R.overflows[1]-b.overflows[1])[0])==null?void 0:I.placement;if(!w)switch(d){case"bestFit":{var p;let R=(p=N.map(b=>[b.placement,b.overflows.filter(C=>C>0).reduce((C,U)=>C+U,0)]).sort((b,C)=>b[1]-C[1])[0])==null?void 0:p[0];R&&(w=R);break}case"initialPlacement":w=s;break}if(n!==w)return {reset:{placement:w}}}return {}}}};async function bc(e,t){let{placement:r,platform:o,elements:n}=e,i=await(o.isRTL==null?void 0:o.isRTL(n.floating)),a=tt(r),s=St(r),l=Pr(r)==="y",u=["left","top"].includes(a)?-1:1,c=i&&l?-1:1,f=jt(t,e),{mainAxis:m,crossAxis:d,alignmentAxis:g}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return s&&typeof g=="number"&&(d=s==="end"?g*-1:g),l?{x:d*c,y:m*u}:{x:m*u,y:d*c}}var Fi=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,o;let{x:n,y:i,placement:a,middlewareData:s}=t,l=await bc(t,e);return a===((r=s.offset)==null?void 0:r.placement)&&(o=s.arrow)!=null&&o.alignmentOffset?{}:{x:n+l.x,y:i+l.y,data:{...l,placement:a}}}}};function Ii(e){let t=pe(e),r=parseFloat(t.width)||0,o=parseFloat(t.height)||0,n=ae(e),i=n?e.offsetWidth:r,a=n?e.offsetHeight:o,s=Zt(r)!==i||Zt(o)!==a;return s&&(r=i,o=a),{width:r,height:o,$:s}}function Bi(e){return z(e)?e:e.contextElement}function Pt(e){let t=Bi(e);if(!ae(t))return Fe(1);let r=t.getBoundingClientRect(),{width:o,height:n,$:i}=Ii(t),a=(i?Zt(r.width):r.width)/o,s=(i?Zt(r.height):r.height)/n;return (!a||!Number.isFinite(a))&&(a=1),(!s||!Number.isFinite(s))&&(s=1),{x:a,y:s}}var wc=Fe(0);function Wi(e){let t=le(e);return !Rr()||!t.visualViewport?wc:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Rc(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==le(e)?!1:t}function _t(e,t,r,o){t===void 0&&(t=!1),r===void 0&&(r=!1);let n=e.getBoundingClientRect(),i=Bi(e),a=Fe(1);t&&(o?z(o)&&(a=Pt(o)):a=Pt(e));let s=Rc(i,r,o)?Wi(i):Fe(0),l=(n.left+s.x)/a.x,u=(n.top+s.y)/a.y,c=n.width/a.x,f=n.height/a.y;if(i){let m=le(i),d=o&&z(o)?le(o):o,g=m,y=g.frameElement;for(;y&&o&&d!==g;){let v=Pt(y),E=y.getBoundingClientRect(),O=pe(y),x=E.left+(y.clientLeft+parseFloat(O.paddingLeft))*v.x,T=E.top+(y.clientTop+parseFloat(O.paddingTop))*v.y;l*=v.x,u*=v.y,c*=v.x,f*=v.y,l+=x,u+=T,g=le(y),y=g.frameElement;}}return rt({width:c,height:f,x:l,y:u})}var Tc=[":popover-open",":modal"];function vo(e){return Tc.some(t=>{try{return e.matches(t)}catch{return !1}})}function Ec(e){let{elements:t,rect:r,offsetParent:o,strategy:n}=e,i=n==="fixed",a=Me(o),s=t?vo(t.floating):!1;if(o===a||s&&i)return r;let l={scrollLeft:0,scrollTop:0},u=Fe(1),c=Fe(0),f=ae(o);if((f||!f&&!i)&&((Ye(o)!=="body"||Tt(a))&&(l=zt(o)),ae(o))){let m=_t(o);u=Pt(o),c.x=m.x+o.clientLeft,c.y=m.y+o.clientTop;}return {width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-l.scrollLeft*u.x+c.x,y:r.y*u.y-l.scrollTop*u.y+c.y}}function Sc(e){return Array.from(e.getClientRects())}function Ui(e){return _t(Me(e)).left+zt(e).scrollLeft}function Pc(e){let t=Me(e),r=zt(e),o=e.ownerDocument.body,n=Ze(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),i=Ze(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight),a=-r.scrollLeft+Ui(e),s=-r.scrollTop;return pe(o).direction==="rtl"&&(a+=Ze(t.clientWidth,o.clientWidth)-n),{width:n,height:i,x:a,y:s}}function Oc(e,t){let r=le(e),o=Me(e),n=r.visualViewport,i=o.clientWidth,a=o.clientHeight,s=0,l=0;if(n){i=n.width,a=n.height;let u=Rr();(!u||u&&t==="fixed")&&(s=n.offsetLeft,l=n.offsetTop);}return {width:i,height:a,x:s,y:l}}function Cc(e,t){let r=_t(e,!0,t==="fixed"),o=r.top+e.clientTop,n=r.left+e.clientLeft,i=ae(e)?Pt(e):Fe(1),a=e.clientWidth*i.x,s=e.clientHeight*i.y,l=n*i.x,u=o*i.y;return {width:a,height:s,x:l,y:u}}function Ni(e,t,r){let o;if(t==="viewport")o=Oc(e,r);else if(t==="document")o=Pc(Me(e));else if(z(t))o=Cc(t,r);else {let n=Wi(e);o={...t,x:t.x-n.x,y:t.y-n.y};}return rt(o)}function Ai(e,t){let r=Re(e);return r===t||!z(r)||Ce(r)?!1:pe(r).position==="fixed"||Ai(r,t)}function kc(e,t){let r=t.get(e);if(r)return r;let o=Te(e,[],!1).filter(s=>z(s)&&Ye(s)!=="body"),n=null,i=pe(e).position==="fixed",a=i?Re(e):e;for(;z(a)&&!Ce(a);){let s=pe(a),l=wr(a);!l&&s.position==="fixed"&&(n=null),(i?!l&&!n:!l&&s.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||Tt(a)&&!l&&Ai(e,a))?o=o.filter(c=>c!==a):n=s,a=Re(a);}return t.set(e,o),o}function Mc(e){let{element:t,boundary:r,rootBoundary:o,strategy:n}=e,a=[...r==="clippingAncestors"?vo(t)?[]:kc(t,this._c):[].concat(r),o],s=a[0],l=a.reduce((u,c)=>{let f=Ni(t,c,n);return u.top=Ze(f.top,u.top),u.right=et(f.right,u.right),u.bottom=et(f.bottom,u.bottom),u.left=Ze(f.left,u.left),u},Ni(t,s,n));return {width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Fc(e){let{width:t,height:r}=Ii(e);return {width:t,height:r}}function Nc(e,t,r){let o=ae(t),n=Me(t),i=r==="fixed",a=_t(e,!0,i,t),s={scrollLeft:0,scrollTop:0},l=Fe(0);if(o||!o&&!i)if((Ye(t)!=="body"||Tt(n))&&(s=zt(t)),o){let f=_t(t,!0,i,t);l.x=f.x+t.clientLeft,l.y=f.y+t.clientTop;}else n&&(l.x=Ui(n));let u=a.left+s.scrollLeft-l.x,c=a.top+s.scrollTop-l.y;return {x:u,y:c,width:a.width,height:a.height}}function go(e){return pe(e).position==="static"}function Di(e,t){return !ae(e)||pe(e).position==="fixed"?null:t?t(e):e.offsetParent}function Vi(e,t){let r=le(e);if(vo(e))return r;if(!ae(e)){let n=Re(e);for(;n&&!Ce(n);){if(z(n)&&!go(n))return n;n=Re(n);}return r}let o=Di(e,t);for(;o&&hi(o)&&go(o);)o=Di(o,t);return o&&Ce(o)&&go(o)&&!wr(o)?r:o||gi(e)||r}var Dc=async function(e){let t=this.getOffsetParent||Vi,r=this.getDimensions,o=await r(e.floating);return {reference:Nc(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Ic(e){return pe(e).direction==="rtl"}var Cr={convertOffsetParentRelativeRectToViewportRelativeRect:Ec,getDocumentElement:Me,getClippingRect:Mc,getOffsetParent:Vi,getElementRects:Dc,getClientRects:Sc,getDimensions:Fc,getScale:Pt,isElement:z,isRTL:Ic};var Li=Fi;var Hi=Mi;var yo=ki;var kr=(e,t,r)=>{let o=new Map,n={platform:Cr,...r},i={...n.platform,_c:o};return Oi(e,t,{...n,platform:i})};var Mr=typeof document<"u"?B.useLayoutEffect:B.useEffect;function Fr(e,t){if(e===t)return !0;if(typeof e!=typeof t)return !1;if(typeof e=="function"&&e.toString()===t.toString())return !0;let r,o,n;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==t.length)return !1;for(o=r;o--!==0;)if(!Fr(e[o],t[o]))return !1;return !0}if(n=Object.keys(e),r=n.length,r!==Object.keys(t).length)return !1;for(o=r;o--!==0;)if(!{}.hasOwnProperty.call(t,n[o]))return !1;for(o=r;o--!==0;){let i=n[o];if(!(i==="_owner"&&e.$$typeof)&&!Fr(e[i],t[i]))return !1}return !0}return e!==e&&t!==t}function ji(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function $i(e,t){let r=ji(e);return Math.round(t*r)/r}function zi(e){let t=B__namespace.useRef(e);return Mr(()=>{t.current=e;}),t}function _i(e){e===void 0&&(e={});let{placement:t="bottom",strategy:r="absolute",middleware:o=[],platform:n,elements:{reference:i,floating:a}={},transform:s=!0,whileElementsMounted:l,open:u}=e,[c,f]=B__namespace.useState({x:0,y:0,strategy:r,placement:t,middlewareData:{},isPositioned:!1}),[m,d]=B__namespace.useState(o);Fr(m,o)||d(o);let[g,y]=B__namespace.useState(null),[v,E]=B__namespace.useState(null),O=B__namespace.useCallback(C=>{C!==k.current&&(k.current=C,y(C));},[]),x=B__namespace.useCallback(C=>{C!==F.current&&(F.current=C,E(C));},[]),T=i||g,S=a||v,k=B__namespace.useRef(null),F=B__namespace.useRef(null),N=B__namespace.useRef(c),W=l!=null,I=zi(l),p=zi(n),h=B__namespace.useCallback(()=>{if(!k.current||!F.current)return;let C={placement:t,strategy:r,middleware:m};p.current&&(C.platform=p.current),kr(k.current,F.current,C).then(U=>{let A={...U,isPositioned:!0};P.current&&!Fr(N.current,A)&&(N.current=A,_r__namespace.flushSync(()=>{f(A);}));});},[m,t,r,p]);Mr(()=>{u===!1&&N.current.isPositioned&&(N.current.isPositioned=!1,f(C=>({...C,isPositioned:!1})));},[u]);let P=B__namespace.useRef(!1);Mr(()=>(P.current=!0,()=>{P.current=!1;}),[]),Mr(()=>{if(T&&(k.current=T),S&&(F.current=S),T&&S){if(I.current)return I.current(T,S,h);h();}},[T,S,h,I,W]);let w=B__namespace.useMemo(()=>({reference:k,floating:F,setReference:O,setFloating:x}),[O,x]),R=B__namespace.useMemo(()=>({reference:T,floating:S}),[T,S]),b=B__namespace.useMemo(()=>{let C={position:r,left:0,top:0};if(!R.floating)return C;let U=$i(R.floating,c.x),A=$i(R.floating,c.y);return s?{...C,transform:"translate("+U+"px, "+A+"px)",...ji(R.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:U,top:A}},[r,s,R.floating,c.x,c.y]);return B__namespace.useMemo(()=>({...c,update:h,refs:w,elements:R,floatingStyles:b}),[c,h,w,R,b])}var Ac=e=>{function t(r){return {}.hasOwnProperty.call(r,"current")}return {name:"arrow",options:e,fn(r){let{element:o,padding:n}=typeof e=="function"?e(r):e;return o&&t(o)?o.current!=null?yo({element:o.current,padding:n}).fn(r):{}:o?yo({element:o,padding:n}).fn(r):{}}}},Nr=(e,t)=>({...Li(e),options:[e,t]});var xo=(e,t)=>({...Hi(e),options:[e,t]});var bo=(e,t)=>({...Ac(e),options:[e,t]});var ta={...B__namespace},Hc=ta.useInsertionEffect,$c=Hc||(e=>e());function Ot(e){let t=B__namespace.useRef(()=>{});return $c(()=>{t.current=e;}),B__namespace.useCallback(function(){for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return t.current==null?void 0:t.current(...o)},[])}var To=typeof document<"u"?B.useLayoutEffect:B.useEffect;var Qi=!1,Xc=0,Xi=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Xc++;function Gc(){let[e,t]=B__namespace.useState(()=>Qi?Xi():void 0);return To(()=>{e==null&&t(Xi());},[]),B__namespace.useEffect(()=>{Qi=!0;},[]),e}var Jc=ta.useId,qc=Jc||Gc;function Kc(){let e=new Map;return {emit(t,r){var o;(o=e.get(t))==null||o.forEach(n=>n(r));},on(t,r){e.set(t,[...e.get(t)||[],r]);},off(t,r){var o;e.set(t,((o=e.get(t))==null?void 0:o.filter(n=>n!==r))||[]);}}}var eu=B__namespace.createContext(null),tu=B__namespace.createContext(null),ru=()=>{var e;return ((e=B__namespace.useContext(eu))==null?void 0:e.id)||null},ra=()=>B__namespace.useContext(tu);function ou(e){return "data-floating-ui-"+e}function wo(e,t){let r=e.filter(n=>{var i;return n.parentId===t&&((i=n.context)==null?void 0:i.open)}),o=r;for(;o.length;)o=e.filter(n=>{var i;return (i=o)==null?void 0:i.some(a=>{var s;return n.parentId===a.id&&((s=n.context)==null?void 0:s.open)})}),r=r.concat(o);return r}function Gi(e){return ae(e.target)&&e.target.tagName==="BUTTON"}function Ji(e){return bi(e)}function oa(e,t){t===void 0&&(t={});let{open:r,onOpenChange:o,dataRef:n,elements:{domReference:i}}=e,{enabled:a=!0,event:s="click",toggle:l=!0,ignoreMouse:u=!1,keyboardHandlers:c=!0}=t,f=B__namespace.useRef(),m=B__namespace.useRef(!1);return B__namespace.useMemo(()=>a?{reference:{onPointerDown(d){f.current=d.pointerType;},onMouseDown(d){d.button===0&&(po(f.current)&&u||s!=="click"&&(r&&l&&(!n.current.openEvent||n.current.openEvent.type==="mousedown")?o(!1,d.nativeEvent,"click"):(d.preventDefault(),o(!0,d.nativeEvent,"click"))));},onClick(d){if(s==="mousedown"&&f.current){f.current=void 0;return}po(f.current)&&u||(r&&l&&(!n.current.openEvent||n.current.openEvent.type==="click")?o(!1,d.nativeEvent,"click"):o(!0,d.nativeEvent,"click"));},onKeyDown(d){f.current=void 0,!(d.defaultPrevented||!c||Gi(d))&&(d.key===" "&&!Ji(i)&&(d.preventDefault(),m.current=!0),d.key==="Enter"&&o(!(r&&l),d.nativeEvent,"click"));},onKeyUp(d){d.defaultPrevented||!c||Gi(d)||Ji(i)||d.key===" "&&m.current&&(m.current=!1,o(!(r&&l),d.nativeEvent,"click"));}}}:{},[a,n,s,u,c,i,l,r,o])}var nu={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},iu={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},qi=e=>{var t,r;return {escapeKey:typeof e=="boolean"?e:(t=e?.escapeKey)!=null?t:!1,outsidePress:typeof e=="boolean"?e:(r=e?.outsidePress)!=null?r:!0}};function na(e,t){t===void 0&&(t={});let{open:r,onOpenChange:o,elements:{reference:n,domReference:i,floating:a},dataRef:s}=e,{enabled:l=!0,escapeKey:u=!0,outsidePress:c=!0,outsidePressEvent:f="pointerdown",referencePress:m=!1,referencePressEvent:d="pointerdown",ancestorScroll:g=!1,bubbles:y,capture:v}=t,E=ra(),O=Ot(typeof c=="function"?c:()=>!1),x=typeof c=="function"?O:c,T=B__namespace.useRef(!1),S=B__namespace.useRef(!1),{escapeKey:k,outsidePress:F}=qi(y),{escapeKey:N,outsidePress:W}=qi(v),I=Ot(w=>{var R;if(!r||!l||!u||w.key!=="Escape")return;let b=(R=s.current.floatingContext)==null?void 0:R.nodeId,C=E?wo(E.nodesRef.current,b):[];if(!k&&(w.stopPropagation(),C.length>0)){let U=!0;if(C.forEach(A=>{var oe;if((oe=A.context)!=null&&oe.open&&!A.context.dataRef.current.__escapeKeyBubbles){U=!1;return}}),!U)return}o(!1,yi(w)?w.nativeEvent:w,"escape-key");}),p=Ot(w=>{var R;let b=()=>{var C;I(w),(C=Et(w))==null||C.removeEventListener("keydown",b);};(R=Et(w))==null||R.addEventListener("keydown",b);}),h=Ot(w=>{var R;let b=T.current;T.current=!1;let C=S.current;if(S.current=!1,f==="click"&&C||b||typeof x=="function"&&!x(w))return;let U=Et(w),A="["+ou("inert")+"]",oe=mo(a).querySelectorAll(A),fe=z(U)?U:null;for(;fe&&!Ce(fe);){let Z=Re(fe);if(Ce(Z)||!z(Z))break;fe=Z;}if(oe.length&&z(U)&&!xi(U)&&!fo(U,a)&&Array.from(oe).every(Z=>!fo(fe,Z)))return;if(ae(U)&&a){let Z=U.clientWidth>0&&U.scrollWidth>U.clientWidth,de=U.clientHeight>0&&U.scrollHeight>U.clientHeight,Oe=de&&w.offsetX>U.clientWidth;if(de&&pe(U).direction==="rtl"&&(Oe=w.offsetX<=U.offsetWidth-U.clientWidth),Oe||Z&&w.offsetY>U.clientHeight)return}let He=(R=s.current.floatingContext)==null?void 0:R.nodeId,wt=E&&wo(E.nodesRef.current,He).some(Z=>{var de;return Tr(w,(de=Z.context)==null?void 0:de.elements.floating)});if(Tr(w,a)||Tr(w,i)||wt)return;let ke=E?wo(E.nodesRef.current,He):[];if(ke.length>0){let Z=!0;if(ke.forEach(de=>{var Oe;if((Oe=de.context)!=null&&Oe.open&&!de.context.dataRef.current.__outsidePressBubbles){Z=!1;return}}),!Z)return}o(!1,w,"outside-press");}),P=Ot(w=>{var R;let b=()=>{var C;h(w),(C=Et(w))==null||C.removeEventListener(f,b);};(R=Et(w))==null||R.addEventListener(f,b);});return B__namespace.useEffect(()=>{if(!r||!l)return;s.current.__escapeKeyBubbles=k,s.current.__outsidePressBubbles=F;function w(C){o(!1,C,"ancestor-scroll");}let R=mo(a);u&&R.addEventListener("keydown",N?p:I,N),x&&R.addEventListener(f,W?P:h,W);let b=[];return g&&(z(i)&&(b=Te(i)),z(a)&&(b=b.concat(Te(a))),!z(n)&&n&&n.contextElement&&(b=b.concat(Te(n.contextElement)))),b=b.filter(C=>{var U;return C!==((U=R.defaultView)==null?void 0:U.visualViewport)}),b.forEach(C=>{C.addEventListener("scroll",w,{passive:!0});}),()=>{u&&R.removeEventListener("keydown",N?p:I,N),x&&R.removeEventListener(f,W?P:h,W),b.forEach(C=>{C.removeEventListener("scroll",w);});}},[s,a,i,n,u,x,f,r,o,g,l,k,F,I,N,p,h,W,P]),B__namespace.useEffect(()=>{T.current=!1;},[x,f]),B__namespace.useMemo(()=>l?{reference:{onKeyDown:I,[nu[d]]:w=>{m&&o(!1,w.nativeEvent,"reference-press");}},floating:{onKeyDown:I,onMouseDown(){S.current=!0;},onMouseUp(){S.current=!0;},[iu[f]]:()=>{T.current=!0;}}}:{},[l,m,f,d,o,I])}function au(e){let{open:t=!1,onOpenChange:r,elements:o}=e,n=qc(),i=B__namespace.useRef({}),[a]=B__namespace.useState(()=>Kc()),s=ru()!=null,[l,u]=B__namespace.useState(o.reference),c=Ot((d,g,y)=>{i.current.openEvent=d?g:void 0,a.emit("openchange",{open:d,event:g,reason:y,nested:s}),r?.(d,g,y);}),f=B__namespace.useMemo(()=>({setPositionReference:u}),[]),m=B__namespace.useMemo(()=>({reference:l||o.reference||null,floating:o.floating||null,domReference:o.reference}),[l,o.reference,o.floating]);return B__namespace.useMemo(()=>({dataRef:i,open:t,onOpenChange:c,elements:m,events:a,floatingId:n,refs:f}),[t,c,m,a,n,f])}function ia(e){e===void 0&&(e={});let{nodeId:t}=e,r=au({...e,elements:{reference:null,floating:null,...e.elements}}),o=e.rootContext||r,n=o.elements,[i,a]=B__namespace.useState(null),[s,l]=B__namespace.useState(null),c=n?.reference||i,f=B__namespace.useRef(null),m=ra();To(()=>{c&&(f.current=c);},[c]);let d=_i({...e,elements:{...n,...s&&{reference:s}}}),g=B__namespace.useCallback(x=>{let T=z(x)?{getBoundingClientRect:()=>x.getBoundingClientRect(),contextElement:x}:x;l(T),d.refs.setReference(T);},[d.refs]),y=B__namespace.useCallback(x=>{(z(x)||x===null)&&(f.current=x,a(x)),(z(d.refs.reference.current)||d.refs.reference.current===null||x!==null&&!z(x))&&d.refs.setReference(x);},[d.refs]),v=B__namespace.useMemo(()=>({...d.refs,setReference:y,setPositionReference:g,domReference:f}),[d.refs,y,g]),E=B__namespace.useMemo(()=>({...d.elements,domReference:c}),[d.elements,c]),O=B__namespace.useMemo(()=>({...d,...o,refs:v,elements:E,nodeId:t}),[d,v,E,t,o]);return To(()=>{o.dataRef.current.floatingContext=O;let x=m?.nodesRef.current.find(T=>T.id===t);x&&(x.context=O);}),B__namespace.useMemo(()=>({...d,context:O,refs:v,elements:E}),[d,v,E,O])}var Ki="active",ea="selected";function Ro(e,t,r){let o=new Map,n=r==="item",i=e;if(n&&e){let{[Ki]:a,[ea]:s,...l}=e;i=l;}return {...r==="floating"&&{tabIndex:-1},...i,...t.map(a=>{let s=a?a[r]:null;return typeof s=="function"?e?s(e):null:s}).concat(e).reduce((a,s)=>(s&&Object.entries(s).forEach(l=>{let[u,c]=l;if(!(n&&[Ki,ea].includes(u)))if(u.indexOf("on")===0){if(o.has(u)||o.set(u,[]),typeof c=="function"){var f;(f=o.get(u))==null||f.push(c),a[u]=function(){for(var m,d=arguments.length,g=new Array(d),y=0;y<d;y++)g[y]=arguments[y];return (m=o.get(u))==null?void 0:m.map(v=>v(...g)).find(v=>v!==void 0)};}}else a[u]=c;}),a),{})}}function aa(e){e===void 0&&(e=[]);let t=e,r=B__namespace.useCallback(i=>Ro(i,e,"reference"),t),o=B__namespace.useCallback(i=>Ro(i,e,"floating"),t),n=B__namespace.useCallback(i=>Ro(i,e,"item"),e.map(i=>i?.item));return B__namespace.useMemo(()=>({getReferenceProps:r,getFloatingProps:o,getItemProps:n}),[r,o,n])}var Dr=()=>reactUse.useMedia("(max-width: 768px)");function sa(e={}){return lu__default.default(ze,e)}var ca=B.createContext({}),H=()=>B.useContext(ca);function Eo(e){let{children:t,theme:r,...o}=e;return jsxRuntime.jsx(ca.Provider,{value:o,children:jsxRuntime.jsx(te.ThemeProvider,{theme:sa(r),children:t})})}var Ir=({isOpen:e,setIsOpen:t,placement:r="bottom-end",markAsSeenOnOpen:o=!1})=>{let{panel:n}=H(),i=reactHooks.useActions(),a=reactHooks.useUnreadCount(),s=B__namespace.default.useRef(null),l=Dr(),u=99999999999999,c={poper:{position:"fixed",top:0,left:0,zIndex:u,width:"100%",height:"100%"},panel:{height:"100%",width:"100%",borderRadius:"0"},arrow:{display:"none"}},{refs:f,floatingStyles:m,context:d,middlewareData:g}=ia({placement:r,open:e,onOpenChange:x=>{x&&o&&a>0&&setTimeout(()=>{i.markAsSeen({pageNo:1});},1e3),t(x);},middleware:[Nr(l?0:10),xo(),bo({element:s})]}),y=oa(d),v=na(d,{enabled:!n?.disableDismiss}),{getReferenceProps:E,getFloatingProps:O}=aa([v,y]);return {isOpen:e,setIsOpen:t,referenceProps:{setRef:f.setReference,getReferenceProps:()=>E()},floatingProps:{setRef:f.setFloating,getFloatingProps:()=>O(),styles:{...l?c.poper:m,zIndex:u}},panelProps:{styles:{...l&&{...c.panel}}},middlewareProps:{arrow:{setRef:s,middlewareData:g.arrow,styles:{...l&&{...c.arrow}}}}}};var ua=()=>jsxRuntime.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"curentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[jsxRuntime.jsx("circle",{cx:"12",cy:"12",r:"10"}),jsxRuntime.jsx("path",{d:"m15 9-6 6"}),jsxRuntime.jsx("path",{d:"m9 9 6 6"})]});var fa=()=>jsxRuntime.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"red",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[jsxRuntime.jsx("path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5"}),jsxRuntime.jsx("path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7"}),jsxRuntime.jsx("path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}),jsxRuntime.jsx("path",{d:"m2 2 20 20"})]});var da=()=>jsxRuntime.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[jsxRuntime.jsx("circle",{cx:"12",cy:"12",r:"10"}),jsxRuntime.jsx("path",{d:"M12 16v-4"}),jsxRuntime.jsx("path",{d:"M12 8h.01"})]});var pa=({error:e})=>{let[t,r]=B__namespace.default.useState(!0),{floatingProps:o,middlewareProps:n,panelProps:i,referenceProps:a}=Ir({isOpen:t,setIsOpen:r,placement:"bottom"});return jsxRuntime.jsxs(Rt,{children:[jsxRuntime.jsx(gr,{buttonType:"normal","aria-label":"Notifications",hasError:!0,ref:a.setRef,...a.getReferenceProps(),children:jsxRuntime.jsx(fa,{})}),jsxRuntime.jsx(jsxRuntime.Fragment,{children:t&&jsxRuntime.jsxs(vr,{style:o.styles,ref:o.setRef,...o.getFloatingProps(),children:[jsxRuntime.jsx(xr,{ref:n.arrow.setRef,style:{left:n.arrow.middlewareData?.x,top:n.arrow.middlewareData?.y,...n.arrow.styles||{}}}),jsxRuntime.jsxs(yr,{style:{...i.styles,background:"white",height:"auto",width:"16rem",display:"flex",justifyContent:"flex-start",flexDirection:"column",alignItems:"flex-start",gap:".8rem",padding:"1rem 1rem"},children:[jsxRuntime.jsxs(ui,{children:[jsxRuntime.jsx(ua,{}),jsxRuntime.jsx(fi,{children:"Something went wrong"})]}),jsxRuntime.jsx(di,{children:e?.message}),jsxRuntime.jsxs(pi,{children:[jsxRuntime.jsx(da,{}),"Check devtools console for more info"]})]})]})})]})};var ma=te__default.default.span`
  && {
    ${({theme:{unreadBadgeCount:e}})=>te.css`
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${e.background};
      color: ${e.color};
      position: absolute;
      font-size: ${e.fontSize};
      border-radius: ${e.borderRadius};
      inset: ${e.inset};
      height: ${e.size};
      width: ${e.size};
    `}
  }
`;function Oo({count:e}){return jsxRuntime.jsx(ma,{children:e})}function ha(){return jsxRuntime.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",role:"presentation",children:jsxRuntime.jsxs("g",{transform:"translate(4.615 2.514)",children:[jsxRuntime.jsx("path",{d:"M7.382,0C2.947,0,1.021,4.015,1.021,6.67c0,1.984.288,1.4-.81,3.82-1.341,3.449,4.051,4.858,7.171,4.858s8.511-1.41,7.171-4.858c-1.1-2.42-.81-1.836-.81-3.82C13.743,4.015,11.815,0,7.382,0Z",transform:"translate(0 0)",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5px",fill:"transparent"}),jsxRuntime.jsx("path",{d:"M4.62,0A2.992,2.992,0,0,1,0,0",transform:"translate(5.071 17.998)",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5px",fill:"transparent"})]})})}function Ne(e,...t){if(!e)return null;let r=e(...t);return typeof r=="string"?jsxRuntime.jsx("div",{dangerouslySetInnerHTML:{__html:r}}):r}function ko({type:e="normal",buttonProps:t,panelOpen:r,renderNotificationIcon:o}){let n=reactHooks.useUnreadCount(),{setRef:i,getReferenceProps:a}=t;return jsxRuntime.jsxs(gr,{buttonType:e,"aria-label":"Notifications",ref:i,...a(),children:[n&&!r?jsxRuntime.jsx(Oo,{count:n}):null,o?Ne(o):jsxRuntime.jsx(ha,{})]})}var Mo=function(t){return t.reduce(function(r,o){var n=o[0],i=o[1];return r[n]=i,r},{})},Fo=typeof window<"u"&&window.document&&window.document.createElement?B__namespace.useLayoutEffect:B__namespace.useEffect;var Y="top",G="bottom",Q="right",j="left",Ur="auto",_e=[Y,G,Q,j],De="start",ot="end",va="clippingParents",Ar="viewport",Ct="popper",ya="reference",No=_e.reduce(function(e,t){return e.concat([t+"-"+De,t+"-"+ot])},[]),Vr=[].concat(_e,[Ur]).reduce(function(e,t){return e.concat([t,t+"-"+De,t+"-"+ot])},[]),Ou="beforeRead",Cu="read",ku="afterRead",Mu="beforeMain",Fu="main",Nu="afterMain",Du="beforeWrite",Iu="write",Bu="afterWrite",xa=[Ou,Cu,ku,Mu,Fu,Nu,Du,Iu,Bu];function K(e){return e?(e.nodeName||"").toLowerCase():null}function $(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function he(e){var t=$(e).Element;return e instanceof t||e instanceof Element}function J(e){var t=$(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function kt(e){if(typeof ShadowRoot>"u")return !1;var t=$(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Wu(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var o=t.styles[r]||{},n=t.attributes[r]||{},i=t.elements[r];!J(i)||!K(i)||(Object.assign(i.style,o),Object.keys(n).forEach(function(a){var s=n[a];s===!1?i.removeAttribute(a):i.setAttribute(a,s===!0?"":s);}));});}function Uu(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(o){var n=t.elements[o],i=t.attributes[o]||{},a=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:r[o]),s=a.reduce(function(l,u){return l[u]="",l},{});!J(n)||!K(n)||(Object.assign(n.style,s),Object.keys(i).forEach(function(l){n.removeAttribute(l);}));});}}var ba={name:"applyStyles",enabled:!0,phase:"write",fn:Wu,effect:Uu,requires:["computeStyles"]};function ee(e){return e.split("-")[0]}var Ee=Math.max,nt=Math.min,Ie=Math.round;function Mt(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Xt(){return !/^((?!chrome|android).)*safari/i.test(Mt())}function ge(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var o=e.getBoundingClientRect(),n=1,i=1;t&&J(e)&&(n=e.offsetWidth>0&&Ie(o.width)/e.offsetWidth||1,i=e.offsetHeight>0&&Ie(o.height)/e.offsetHeight||1);var a=he(e)?$(e):window,s=a.visualViewport,l=!Xt()&&r,u=(o.left+(l&&s?s.offsetLeft:0))/n,c=(o.top+(l&&s?s.offsetTop:0))/i,f=o.width/n,m=o.height/i;return {width:f,height:m,top:c,right:u+f,bottom:c+m,left:u,x:u,y:c}}function it(e){var t=ge(e),r=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:o}}function Gt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return !0;if(r&&kt(r)){var o=t;do{if(o&&e.isSameNode(o))return !0;o=o.parentNode||o.host;}while(o)}return !1}function ce(e){return $(e).getComputedStyle(e)}function Do(e){return ["table","td","th"].indexOf(K(e))>=0}function ne(e){return ((he(e)?e.ownerDocument:e.document)||window.document).documentElement}function Be(e){return K(e)==="html"?e:e.assignedSlot||e.parentNode||(kt(e)?e.host:null)||ne(e)}function wa(e){return !J(e)||ce(e).position==="fixed"?null:e.offsetParent}function Au(e){var t=/firefox/i.test(Mt()),r=/Trident/i.test(Mt());if(r&&J(e)){var o=ce(e);if(o.position==="fixed")return null}var n=Be(e);for(kt(n)&&(n=n.host);J(n)&&["html","body"].indexOf(K(n))<0;){var i=ce(n);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return n;n=n.parentNode;}return null}function Se(e){for(var t=$(e),r=wa(e);r&&Do(r)&&ce(r).position==="static";)r=wa(r);return r&&(K(r)==="html"||K(r)==="body"&&ce(r).position==="static")?t:r||Au(e)||t}function at(e){return ["top","bottom"].indexOf(e)>=0?"x":"y"}function st(e,t,r){return Ee(e,nt(t,r))}function Ra(e,t,r){var o=st(e,t,r);return o>r?r:o}function Jt(){return {top:0,right:0,bottom:0,left:0}}function qt(e){return Object.assign({},Jt(),e)}function Kt(e,t){return t.reduce(function(r,o){return r[o]=e,r},{})}var Vu=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,qt(typeof t!="number"?t:Kt(t,_e))};function Lu(e){var t,r=e.state,o=e.name,n=e.options,i=r.elements.arrow,a=r.modifiersData.popperOffsets,s=ee(r.placement),l=at(s),u=[j,Q].indexOf(s)>=0,c=u?"height":"width";if(!(!i||!a)){var f=Vu(n.padding,r),m=it(i),d=l==="y"?Y:j,g=l==="y"?G:Q,y=r.rects.reference[c]+r.rects.reference[l]-a[l]-r.rects.popper[c],v=a[l]-r.rects.reference[l],E=Se(i),O=E?l==="y"?E.clientHeight||0:E.clientWidth||0:0,x=y/2-v/2,T=f[d],S=O-m[c]-f[g],k=O/2-m[c]/2+x,F=st(T,k,S),N=l;r.modifiersData[o]=(t={},t[N]=F,t.centerOffset=F-k,t);}}function Hu(e){var t=e.state,r=e.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||Gt(t.elements.popper,n)&&(t.elements.arrow=n));}var Ta={name:"arrow",enabled:!0,phase:"main",fn:Lu,effect:Hu,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ve(e){return e.split("-")[1]}var $u={top:"auto",right:"auto",bottom:"auto",left:"auto"};function zu(e,t){var r=e.x,o=e.y,n=t.devicePixelRatio||1;return {x:Ie(r*n)/n||0,y:Ie(o*n)/n||0}}function Ea(e){var t,r=e.popper,o=e.popperRect,n=e.placement,i=e.variation,a=e.offsets,s=e.position,l=e.gpuAcceleration,u=e.adaptive,c=e.roundOffsets,f=e.isFixed,m=a.x,d=m===void 0?0:m,g=a.y,y=g===void 0?0:g,v=typeof c=="function"?c({x:d,y}):{x:d,y};d=v.x,y=v.y;var E=a.hasOwnProperty("x"),O=a.hasOwnProperty("y"),x=j,T=Y,S=window;if(u){var k=Se(r),F="clientHeight",N="clientWidth";if(k===$(r)&&(k=ne(r),ce(k).position!=="static"&&s==="absolute"&&(F="scrollHeight",N="scrollWidth")),k=k,n===Y||(n===j||n===Q)&&i===ot){T=G;var W=f&&k===S&&S.visualViewport?S.visualViewport.height:k[F];y-=W-o.height,y*=l?1:-1;}if(n===j||(n===Y||n===G)&&i===ot){x=Q;var I=f&&k===S&&S.visualViewport?S.visualViewport.width:k[N];d-=I-o.width,d*=l?1:-1;}}var p=Object.assign({position:s},u&&$u),h=c===!0?zu({x:d,y},$(r)):{x:d,y};if(d=h.x,y=h.y,l){var P;return Object.assign({},p,(P={},P[T]=O?"0":"",P[x]=E?"0":"",P.transform=(S.devicePixelRatio||1)<=1?"translate("+d+"px, "+y+"px)":"translate3d("+d+"px, "+y+"px, 0)",P))}return Object.assign({},p,(t={},t[T]=O?y+"px":"",t[x]=E?d+"px":"",t.transform="",t))}function Yu(e){var t=e.state,r=e.options,o=r.gpuAcceleration,n=o===void 0?!0:o,i=r.adaptive,a=i===void 0?!0:i,s=r.roundOffsets,l=s===void 0?!0:s,u={placement:ee(t.placement),variation:ve(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Ea(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ea(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement});}var Sa={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Yu,data:{}};var Lr={passive:!0};function Zu(e){var t=e.state,r=e.instance,o=e.options,n=o.scroll,i=n===void 0?!0:n,a=o.resize,s=a===void 0?!0:a,l=$(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach(function(c){c.addEventListener("scroll",r.update,Lr);}),s&&l.addEventListener("resize",r.update,Lr),function(){i&&u.forEach(function(c){c.removeEventListener("scroll",r.update,Lr);}),s&&l.removeEventListener("resize",r.update,Lr);}}var Pa={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Zu,data:{}};var ju={left:"right",right:"left",bottom:"top",top:"bottom"};function Ft(e){return e.replace(/left|right|bottom|top/g,function(t){return ju[t]})}var _u={start:"end",end:"start"};function Hr(e){return e.replace(/start|end/g,function(t){return _u[t]})}function lt(e){var t=$(e),r=t.pageXOffset,o=t.pageYOffset;return {scrollLeft:r,scrollTop:o}}function ct(e){return ge(ne(e)).left+lt(e).scrollLeft}function Io(e,t){var r=$(e),o=ne(e),n=r.visualViewport,i=o.clientWidth,a=o.clientHeight,s=0,l=0;if(n){i=n.width,a=n.height;var u=Xt();(u||!u&&t==="fixed")&&(s=n.offsetLeft,l=n.offsetTop);}return {width:i,height:a,x:s+ct(e),y:l}}function Bo(e){var t,r=ne(e),o=lt(e),n=(t=e.ownerDocument)==null?void 0:t.body,i=Ee(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),a=Ee(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-o.scrollLeft+ct(e),l=-o.scrollTop;return ce(n||r).direction==="rtl"&&(s+=Ee(r.clientWidth,n?n.clientWidth:0)-i),{width:i,height:a,x:s,y:l}}function ut(e){var t=ce(e),r=t.overflow,o=t.overflowX,n=t.overflowY;return /auto|scroll|overlay|hidden/.test(r+n+o)}function $r(e){return ["html","body","#document"].indexOf(K(e))>=0?e.ownerDocument.body:J(e)&&ut(e)?e:$r(Be(e))}function Qe(e,t){var r;t===void 0&&(t=[]);var o=$r(e),n=o===((r=e.ownerDocument)==null?void 0:r.body),i=$(o),a=n?[i].concat(i.visualViewport||[],ut(o)?o:[]):o,s=t.concat(a);return n?s:s.concat(Qe(Be(a)))}function Nt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Qu(e,t){var r=ge(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Oa(e,t,r){return t===Ar?Nt(Io(e,r)):he(t)?Qu(t,r):Nt(Bo(ne(e)))}function Xu(e){var t=Qe(Be(e)),r=["absolute","fixed"].indexOf(ce(e).position)>=0,o=r&&J(e)?Se(e):e;return he(o)?t.filter(function(n){return he(n)&&Gt(n,o)&&K(n)!=="body"}):[]}function Wo(e,t,r,o){var n=t==="clippingParents"?Xu(e):[].concat(t),i=[].concat(n,[r]),a=i[0],s=i.reduce(function(l,u){var c=Oa(e,u,o);return l.top=Ee(c.top,l.top),l.right=nt(c.right,l.right),l.bottom=nt(c.bottom,l.bottom),l.left=Ee(c.left,l.left),l},Oa(e,a,o));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function er(e){var t=e.reference,r=e.element,o=e.placement,n=o?ee(o):null,i=o?ve(o):null,a=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,l;switch(n){case Y:l={x:a,y:t.y-r.height};break;case G:l={x:a,y:t.y+t.height};break;case Q:l={x:t.x+t.width,y:s};break;case j:l={x:t.x-r.width,y:s};break;default:l={x:t.x,y:t.y};}var u=n?at(n):null;if(u!=null){var c=u==="y"?"height":"width";switch(i){case De:l[u]=l[u]-(t[c]/2-r[c]/2);break;case ot:l[u]=l[u]+(t[c]/2-r[c]/2);break;}}return l}function Pe(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=o===void 0?e.placement:o,i=r.strategy,a=i===void 0?e.strategy:i,s=r.boundary,l=s===void 0?va:s,u=r.rootBoundary,c=u===void 0?Ar:u,f=r.elementContext,m=f===void 0?Ct:f,d=r.altBoundary,g=d===void 0?!1:d,y=r.padding,v=y===void 0?0:y,E=qt(typeof v!="number"?v:Kt(v,_e)),O=m===Ct?ya:Ct,x=e.rects.popper,T=e.elements[g?O:m],S=Wo(he(T)?T:T.contextElement||ne(e.elements.popper),l,c,a),k=ge(e.elements.reference),F=er({reference:k,element:x,strategy:"absolute",placement:n}),N=Nt(Object.assign({},x,F)),W=m===Ct?N:k,I={top:S.top-W.top+E.top,bottom:W.bottom-S.bottom+E.bottom,left:S.left-W.left+E.left,right:W.right-S.right+E.right},p=e.modifiersData.offset;if(m===Ct&&p){var h=p[n];Object.keys(I).forEach(function(P){var w=[Q,G].indexOf(P)>=0?1:-1,R=[Y,G].indexOf(P)>=0?"y":"x";I[P]+=h[R]*w;});}return I}function Uo(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=r.boundary,i=r.rootBoundary,a=r.padding,s=r.flipVariations,l=r.allowedAutoPlacements,u=l===void 0?Vr:l,c=ve(o),f=c?s?No:No.filter(function(g){return ve(g)===c}):_e,m=f.filter(function(g){return u.indexOf(g)>=0});m.length===0&&(m=f);var d=m.reduce(function(g,y){return g[y]=Pe(e,{placement:y,boundary:n,rootBoundary:i,padding:a})[ee(y)],g},{});return Object.keys(d).sort(function(g,y){return d[g]-d[y]})}function Gu(e){if(ee(e)===Ur)return [];var t=Ft(e);return [Hr(e),t,Hr(t)]}function Ju(e){var t=e.state,r=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var n=r.mainAxis,i=n===void 0?!0:n,a=r.altAxis,s=a===void 0?!0:a,l=r.fallbackPlacements,u=r.padding,c=r.boundary,f=r.rootBoundary,m=r.altBoundary,d=r.flipVariations,g=d===void 0?!0:d,y=r.allowedAutoPlacements,v=t.options.placement,E=ee(v),O=E===v,x=l||(O||!g?[Ft(v)]:Gu(v)),T=[v].concat(x).reduce(function(ke,Z){return ke.concat(ee(Z)===Ur?Uo(t,{placement:Z,boundary:c,rootBoundary:f,padding:u,flipVariations:g,allowedAutoPlacements:y}):Z)},[]),S=t.rects.reference,k=t.rects.popper,F=new Map,N=!0,W=T[0],I=0;I<T.length;I++){var p=T[I],h=ee(p),P=ve(p)===De,w=[Y,G].indexOf(h)>=0,R=w?"width":"height",b=Pe(t,{placement:p,boundary:c,rootBoundary:f,altBoundary:m,padding:u}),C=w?P?Q:j:P?G:Y;S[R]>k[R]&&(C=Ft(C));var U=Ft(C),A=[];if(i&&A.push(b[h]<=0),s&&A.push(b[C]<=0,b[U]<=0),A.every(function(ke){return ke})){W=p,N=!1;break}F.set(p,A);}if(N)for(var oe=g?3:1,fe=function(Z){var de=T.find(function(Oe){var $e=F.get(Oe);if($e)return $e.slice(0,Z).every(function(so){return so})});if(de)return W=de,"break"},He=oe;He>0;He--){var wt=fe(He);if(wt==="break")break}t.placement!==W&&(t.modifiersData[o]._skip=!0,t.placement=W,t.reset=!0);}}var Ca={name:"flip",enabled:!0,phase:"main",fn:Ju,requiresIfExists:["offset"],data:{_skip:!1}};function ka(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Ma(e){return [Y,Q,G,j].some(function(t){return e[t]>=0})}function qu(e){var t=e.state,r=e.name,o=t.rects.reference,n=t.rects.popper,i=t.modifiersData.preventOverflow,a=Pe(t,{elementContext:"reference"}),s=Pe(t,{altBoundary:!0}),l=ka(a,o),u=ka(s,n,i),c=Ma(l),f=Ma(u);t.modifiersData[r]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":f});}var Fa={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:qu};function Ku(e,t,r){var o=ee(e),n=[j,Y].indexOf(o)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,a=i[0],s=i[1];return a=a||0,s=(s||0)*n,[j,Q].indexOf(o)>=0?{x:s,y:a}:{x:a,y:s}}function ef(e){var t=e.state,r=e.options,o=e.name,n=r.offset,i=n===void 0?[0,0]:n,a=Vr.reduce(function(c,f){return c[f]=Ku(f,t.rects,i),c},{}),s=a[t.placement],l=s.x,u=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=u),t.modifiersData[o]=a;}var Na={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ef};function tf(e){var t=e.state,r=e.name;t.modifiersData[r]=er({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement});}var Da={name:"popperOffsets",enabled:!0,phase:"read",fn:tf,data:{}};function Ao(e){return e==="x"?"y":"x"}function rf(e){var t=e.state,r=e.options,o=e.name,n=r.mainAxis,i=n===void 0?!0:n,a=r.altAxis,s=a===void 0?!1:a,l=r.boundary,u=r.rootBoundary,c=r.altBoundary,f=r.padding,m=r.tether,d=m===void 0?!0:m,g=r.tetherOffset,y=g===void 0?0:g,v=Pe(t,{boundary:l,rootBoundary:u,padding:f,altBoundary:c}),E=ee(t.placement),O=ve(t.placement),x=!O,T=at(E),S=Ao(T),k=t.modifiersData.popperOffsets,F=t.rects.reference,N=t.rects.popper,W=typeof y=="function"?y(Object.assign({},t.rects,{placement:t.placement})):y,I=typeof W=="number"?{mainAxis:W,altAxis:W}:Object.assign({mainAxis:0,altAxis:0},W),p=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,h={x:0,y:0};if(k){if(i){var P,w=T==="y"?Y:j,R=T==="y"?G:Q,b=T==="y"?"height":"width",C=k[T],U=C+v[w],A=C-v[R],oe=d?-N[b]/2:0,fe=O===De?F[b]:N[b],He=O===De?-N[b]:-F[b],wt=t.elements.arrow,ke=d&&wt?it(wt):{width:0,height:0},Z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Jt(),de=Z[w],Oe=Z[R],$e=st(0,F[b],ke[b]),so=x?F[b]/2-oe-$e-de-I.mainAxis:fe-$e-de-I.mainAxis,ql=x?-F[b]/2+oe+$e+Oe+I.mainAxis:He+$e+Oe+I.mainAxis,lo=t.elements.arrow&&Se(t.elements.arrow),Kl=lo?T==="y"?lo.clientTop||0:lo.clientLeft||0:0,qn=(P=p?.[T])!=null?P:0,ec=C+so-qn-Kl,tc=C+ql-qn,Kn=st(d?nt(U,ec):U,C,d?Ee(A,tc):A);k[T]=Kn,h[T]=Kn-C;}if(s){var ei,rc=T==="x"?Y:j,oc=T==="x"?G:Q,Ke=k[S],pr=S==="y"?"height":"width",ti=Ke+v[rc],ri=Ke-v[oc],co=[Y,j].indexOf(E)!==-1,oi=(ei=p?.[S])!=null?ei:0,ni=co?ti:Ke-F[pr]-N[pr]-oi+I.altAxis,ii=co?Ke+F[pr]+N[pr]-oi-I.altAxis:ri,ai=d&&co?Ra(ni,Ke,ii):st(d?ni:ti,Ke,d?ii:ri);k[S]=ai,h[S]=ai-Ke;}t.modifiersData[o]=h;}}var Ia={name:"preventOverflow",enabled:!0,phase:"main",fn:rf,requiresIfExists:["offset"]};function Vo(e){return {scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Lo(e){return e===$(e)||!J(e)?lt(e):Vo(e)}function of(e){var t=e.getBoundingClientRect(),r=Ie(t.width)/e.offsetWidth||1,o=Ie(t.height)/e.offsetHeight||1;return r!==1||o!==1}function Ho(e,t,r){r===void 0&&(r=!1);var o=J(t),n=J(t)&&of(t),i=ne(t),a=ge(e,n,r),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return (o||!o&&!r)&&((K(t)!=="body"||ut(i))&&(s=Lo(t)),J(t)?(l=ge(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):i&&(l.x=ct(i))),{x:a.left+s.scrollLeft-l.x,y:a.top+s.scrollTop-l.y,width:a.width,height:a.height}}function nf(e){var t=new Map,r=new Set,o=[];e.forEach(function(i){t.set(i.name,i);});function n(i){r.add(i.name);var a=[].concat(i.requires||[],i.requiresIfExists||[]);a.forEach(function(s){if(!r.has(s)){var l=t.get(s);l&&n(l);}}),o.push(i);}return e.forEach(function(i){r.has(i.name)||n(i);}),o}function $o(e){var t=nf(e);return xa.reduce(function(r,o){return r.concat(t.filter(function(n){return n.phase===o}))},[])}function zo(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e());});})),t}}function Yo(e){var t=e.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(t).map(function(r){return t[r]})}var Ba={placement:"bottom",modifiers:[],strategy:"absolute"};function Wa(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return !t.some(function(o){return !(o&&typeof o.getBoundingClientRect=="function")})}function Ua(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,o=r===void 0?[]:r,n=t.defaultOptions,i=n===void 0?Ba:n;return function(s,l,u){u===void 0&&(u=i);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ba,i),modifiersData:{},elements:{reference:s,popper:l},attributes:{},styles:{}},f=[],m=!1,d={state:c,setOptions:function(E){var O=typeof E=="function"?E(c.options):E;y(),c.options=Object.assign({},i,c.options,O),c.scrollParents={reference:he(s)?Qe(s):s.contextElement?Qe(s.contextElement):[],popper:Qe(l)};var x=$o(Yo([].concat(o,c.options.modifiers)));return c.orderedModifiers=x.filter(function(T){return T.enabled}),g(),d.update()},forceUpdate:function(){if(!m){var E=c.elements,O=E.reference,x=E.popper;if(Wa(O,x)){c.rects={reference:Ho(O,Se(x),c.options.strategy==="fixed"),popper:it(x)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(I){return c.modifiersData[I.name]=Object.assign({},I.data)});for(var T=0;T<c.orderedModifiers.length;T++){if(c.reset===!0){c.reset=!1,T=-1;continue}var S=c.orderedModifiers[T],k=S.fn,F=S.options,N=F===void 0?{}:F,W=S.name;typeof k=="function"&&(c=k({state:c,options:N,name:W,instance:d})||c);}}}},update:zo(function(){return new Promise(function(v){d.forceUpdate(),v(c);})}),destroy:function(){y(),m=!0;}};if(!Wa(s,l))return d;d.setOptions(u).then(function(v){!m&&u.onFirstUpdate&&u.onFirstUpdate(v);});function g(){c.orderedModifiers.forEach(function(v){var E=v.name,O=v.options,x=O===void 0?{}:O,T=v.effect;if(typeof T=="function"){var S=T({state:c,name:E,instance:d,options:x}),k=function(){};f.push(S||k);}});}function y(){f.forEach(function(v){return v()}),f=[];}return d}}var af=[Pa,Da,Sa,ba,Na,Ca,Ia,Ta,Fa],Zo=Ua({defaultModifiers:af});var Ha=ci(Va());var ff=[],jo=function(t,r,o){o===void 0&&(o={});var n=B__namespace.useRef(null),i={onFirstUpdate:o.onFirstUpdate,placement:o.placement||"bottom",strategy:o.strategy||"absolute",modifiers:o.modifiers||ff},a=B__namespace.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),s=a[0],l=a[1],u=B__namespace.useMemo(function(){return {name:"updateState",enabled:!0,phase:"write",fn:function(d){var g=d.state,y=Object.keys(g.elements);_r__namespace.flushSync(function(){l({styles:Mo(y.map(function(v){return [v,g.styles[v]||{}]})),attributes:Mo(y.map(function(v){return [v,g.attributes[v]]}))});});},requires:["computeStyles"]}},[]),c=B__namespace.useMemo(function(){var m={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[u,{name:"applyStyles",enabled:!1}])};return (0, Ha.default)(n.current,m)?n.current||m:(n.current=m,m)},[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,u]),f=B__namespace.useRef();return Fo(function(){f.current&&f.current.setOptions(c);},[c]),Fo(function(){if(!(t==null||r==null)){var m=o.createPopper||Zo,d=m(t,r,c);return f.current=d,function(){d.destroy(),f.current=null;}}},[t,r,o.createPopper]),{state:f.current?f.current.state:null,styles:s.styles,attributes:s.attributes,update:f.current?f.current.update:null,forceUpdate:f.current?f.current.forceUpdate:null}};var $a=te__default.default.button.withConfig({shouldForwardProp:e=>!["dropdownTheme"].includes(e)})`
  && {
    ${({theme:{colors:e},dropdownTheme:t})=>te.css`
      display: flex;
      border-width: ${t.borderWidth};
      margin: ${t.margin};
      padding: ${t.padding};
      box-sizing: border-box;
      outline: ${t.outline};
      user-select: none;
      cursor: pointer;
      background-color: ${t.background};

      svg {
        fill: ${t.iconFill};
        stroke: ${t.iconFill};
        height: ${t.iconHeight};
        width: ${t.iconWidth};
      }

      &:hover {
        transition: ${t.transition};
        fill: ${e.brandingPrimary};
        stroke: ${e.brandingPrimary};
        background: ${t.hoverBackground};
      }
    `}
  }
`,za=te__default.default.div`
  z-index: 1000000;
`,Ya=te__default.default.div.withConfig({shouldForwardProp:e=>!["dropdownTheme","visible"].includes(e)})`
  && {
    ${({visible:e,dropdownTheme:t})=>te.css`
      display: ${e?"flex":"none"};
      flex-direction: column;
      background: ${t.menuBackground};
      border-radius: ${t.menuBorderRadius};
      font-family: sans-serif;
      box-shadow: ${t.menuShadow};
    `}
  }
`,Za=te__default.default.div`
  && {
    ${({theme:{dropdown:e}})=>te.css`
      justify-content: flex-start;
      color: ${e.menuItemTextColor};
      display: flex;
      cursor: pointer;
      padding: ${e.menuItemPadding};
      align-items: center;
      font-size: 0.9rem;

      &:hover {
        background-color: ${e.menuItemHoverBackground};
      }
    `}
  }
`;function ja(){return jsxRuntime.jsxs("svg",{id:"light",enableBackground:"new 0 0 24 24",height:"512",viewBox:"0 0 24 24",width:"512",xmlns:"http://www.w3.org/2000/svg",children:[jsxRuntime.jsx("g",{children:jsxRuntime.jsx("path",{d:"m12 6c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"})}),jsxRuntime.jsx("g",{children:jsxRuntime.jsx("path",{d:"m12 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"})}),jsxRuntime.jsx("g",{children:jsxRuntime.jsx("path",{d:"m12 24c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"})})]})}function rr({items:e=[],isVisible:t,theme:r}){let[o,n]=B.useState(!1),i=B.useRef(null),a=B.useRef(null),{styles:s,attributes:l,update:u}=jo(i.current,a.current,{placement:"bottom",modifiers:[{name:"preventOverflow",enabled:!0},{name:"offset",enabled:!0,options:{offset:[-10,10]}}]});B.useEffect(()=>(document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c);}),[]);function c(d){let g=d.target;i.current?.contains(g)||a.current?.contains(g)||n(!1);}function f(){n(!o),u?.();}function m(d,g){d.stopPropagation(),g(),n(!1);}return jsxRuntime.jsxs(B.Fragment,{children:[jsxRuntime.jsx($a,{"aria-label":"More",ref:i,dropdownTheme:r,style:{visibility:t?"visible":"hidden"},onClick:f,children:jsxRuntime.jsx(ja,{})}),jsxRuntime.jsx(za,{ref:a,style:s.popper,...l.popper,children:jsxRuntime.jsx(Ya,{style:s.offset,visible:o,dropdownTheme:r,children:e.map(d=>jsxRuntime.jsx(Za,{"data-name":d.name,onClick:g=>{m(g,d.action);},children:d.name},d.name))})})]})}function Qa(e,t){if(e==null)return {};var r={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.includes(o))continue;r[o]=e[o];}return r}function Zr(e,t){return Zr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Zr(e,t)}function Xa(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Zr(e,t);}var Qo={disabled:!1};var Xo=B__namespace.default.createContext(null);var Ga=function(t){return t.scrollTop};var or="unmounted",ft="exited",dt="entering",Bt="entered",Go="exiting",We=function(e){Xa(t,e);function t(o,n){var i;i=e.call(this,o,n)||this;var a=n,s=a&&!a.isMounting?o.enter:o.appear,l;return i.appearStatus=null,o.in?s?(l=ft,i.appearStatus=dt):l=Bt:o.unmountOnExit||o.mountOnEnter?l=or:l=ft,i.state={status:l},i.nextCallback=null,i}t.getDerivedStateFromProps=function(n,i){var a=n.in;return a&&i.status===or?{status:ft}:null};var r=t.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus);},r.componentDidUpdate=function(n){var i=null;if(n!==this.props){var a=this.state.status;this.props.in?a!==dt&&a!==Bt&&(i=dt):(a===dt||a===Bt)&&(i=Go);}this.updateStatus(!1,i);},r.componentWillUnmount=function(){this.cancelNextCallback();},r.getTimeouts=function(){var n=this.props.timeout,i,a,s;return i=a=s=n,n!=null&&typeof n!="number"&&(i=n.exit,a=n.enter,s=n.appear!==void 0?n.appear:a),{exit:i,enter:a,appear:s}},r.updateStatus=function(n,i){if(n===void 0&&(n=!1),i!==null)if(this.cancelNextCallback(),i===dt){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:_r__namespace.default.findDOMNode(this);a&&Ga(a);}this.performEnter(n);}else this.performExit();else this.props.unmountOnExit&&this.state.status===ft&&this.setState({status:or});},r.performEnter=function(n){var i=this,a=this.props.enter,s=this.context?this.context.isMounting:n,l=this.props.nodeRef?[s]:[_r__namespace.default.findDOMNode(this),s],u=l[0],c=l[1],f=this.getTimeouts(),m=s?f.appear:f.enter;if(!n&&!a||Qo.disabled){this.safeSetState({status:Bt},function(){i.props.onEntered(u);});return}this.props.onEnter(u,c),this.safeSetState({status:dt},function(){i.props.onEntering(u,c),i.onTransitionEnd(m,function(){i.safeSetState({status:Bt},function(){i.props.onEntered(u,c);});});});},r.performExit=function(){var n=this,i=this.props.exit,a=this.getTimeouts(),s=this.props.nodeRef?void 0:_r__namespace.default.findDOMNode(this);if(!i||Qo.disabled){this.safeSetState({status:ft},function(){n.props.onExited(s);});return}this.props.onExit(s),this.safeSetState({status:Go},function(){n.props.onExiting(s),n.onTransitionEnd(a.exit,function(){n.safeSetState({status:ft},function(){n.props.onExited(s);});});});},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null);},r.safeSetState=function(n,i){i=this.setNextCallback(i),this.setState(n,i);},r.setNextCallback=function(n){var i=this,a=!0;return this.nextCallback=function(s){a&&(a=!1,i.nextCallback=null,n(s));},this.nextCallback.cancel=function(){a=!1;},this.nextCallback},r.onTransitionEnd=function(n,i){this.setNextCallback(i);var a=this.props.nodeRef?this.props.nodeRef.current:_r__namespace.default.findDOMNode(this),s=n==null&&!this.props.addEndListener;if(!a||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],u=l[0],c=l[1];this.props.addEndListener(u,c);}n!=null&&setTimeout(this.nextCallback,n);},r.render=function(){var n=this.state.status;if(n===or)return null;var i=this.props,a=i.children;i.in;i.mountOnEnter;i.unmountOnExit;i.appear;i.enter;i.exit;i.timeout;i.addEndListener;i.onEnter;i.onEntering;i.onEntered;i.onExit;i.onExiting;i.onExited;i.nodeRef;var k=Qa(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return B__namespace.default.createElement(Xo.Provider,{value:null},typeof a=="function"?a(n,k):B__namespace.default.cloneElement(B__namespace.default.Children.only(a),k))},t}(B__namespace.default.Component);We.contextType=Xo;We.propTypes={};function It(){}We.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:It,onEntering:It,onEntered:It,onExit:It,onExiting:It,onExited:It};We.UNMOUNTED=or;We.EXITED=ft;We.ENTERING=dt;We.ENTERED=Bt;We.EXITING=Go;var Jo=We;var qa=te__default.default.div.withConfig({shouldForwardProp:e=>!["isLoading","empty"].includes(e)})`
  && {
    display: flex;
    position: relative;
    flex: 1;
    flex-direction: column;
    overflow-y: auto;
    height: ${({theme:e})=>e.feed.height};
    align-items: ${({empty:e})=>e?"center":"stretch"};
    justify-content: ${({empty:e,isLoading:t})=>e&&!t?"center":"flex-start"};
    background: ${({theme:e})=>e.feed.background};

    path[data-name='Path 154'] {
      fill: ${({theme:e})=>e.colors.brandingPrimary};
    }
  }
`,Ka=te__default.default.p`
  && {
    ${({theme:e})=>te.css`
      font-size: ${e.feed.placeholderTextSize};
      margin: ${e.feed.placeholderMargin};
      font-weight: ${e.feed.placeholderFontWeight};
      color: ${e.feed.placeholderTextColor};
    `}
  }
`,es=te__default.default.div`
  && {
    ${({theme:e})=>te.css`
      position: absolute;
      inset: ${e.jumpToTop.inset};
    `}
  }
`;var ts=te__default.default.button`
  && {
    ${({theme:{jumpToTop:e}})=>te.css`
      display: flex;
      position: fixed;
      justify-items: center;
      align-content: center;
      box-shadow: ${e.shadow};
      border-width: 0;
      border-radius: ${e.borderRadius};
      margin: ${e.margin};
      padding: ${e.padding};
      box-sizing: border-box;
      outline: none;
      user-select: none;
      cursor: pointer;
      background-color: ${e.background};
      transition: ${e.transition};
      &:hover {
      }

      svg {
        height: ${e.iconSize};
        width: ${e.iconSize};
        fill: ${e.iconFill};
      }
    `}
  }
`;function os(){return jsxRuntime.jsxs("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 330 330",children:[jsxRuntime.jsxs("g",{id:"XMLID_85_",children:[jsxRuntime.jsx("path",{id:"XMLID_86_",d:`M25.607,190.607L164.997,51.214l139.396,139.393C307.323,193.536,311.161,195,315,195
		c3.839,0,7.678-1.464,10.606-4.394c5.858-5.858,5.858-15.355,0-21.213l-150.003-150C172.79,16.58,168.976,15,164.997,15
		s-7.794,1.581-10.607,4.394l-149.997,150c-5.858,5.858-5.858,15.355,0,21.213C10.251,196.465,19.749,196.465,25.607,190.607z`}),jsxRuntime.jsx("path",{id:"XMLID_87_",d:`M175.603,139.393c-2.813-2.813-6.628-4.393-10.606-4.393c-3.979,0-7.794,1.581-10.607,4.394l-149.996,150
		c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213-0.001l139.39-139.393l139.397,139.394
		C307.323,313.536,311.161,315,315,315c3.839,0,7.678-1.464,10.606-4.394c5.858-5.858,5.858-15.355,0-21.213L175.603,139.393z`})]}),jsxRuntime.jsx("g",{}),jsxRuntime.jsx("g",{}),jsxRuntime.jsx("g",{}),jsxRuntime.jsx("g",{}),jsxRuntime.jsx("g",{}),jsxRuntime.jsx("g",{}),jsxRuntime.jsx("g",{}),jsxRuntime.jsx("g",{}),jsxRuntime.jsx("g",{}),jsxRuntime.jsx("g",{}),jsxRuntime.jsx("g",{}),jsxRuntime.jsx("g",{}),jsxRuntime.jsx("g",{}),jsxRuntime.jsx("g",{}),jsxRuntime.jsx("g",{})]})}function Ko({onClick:e}){return jsxRuntime.jsx(ts,{"aria-label":"Jump to Top",onClick:e,children:jsxRuntime.jsx(os,{})})}var is=te__default.default.div.withConfig({shouldForwardProp:e=>!["clickable"].includes(e)})`
  && {
    ${({theme:{feedItem:e},clickable:t})=>te.css`
      display: flex;
      flex-flow: row nowrap;
      align-items: flex-start;
      cursor: ${t?"pointer":"unset"};
      justify-content: flex-start;
      padding: ${e.padding};
      border-bottom: ${e.border};
      background: ${e.background};
      font-family: sans-serif;
      line-height: normal;
      &:hover {
        transition: ${e.hoverTransition};
        background: ${e.hoverBackground};
      }
    `}
  }
`,as=te__default.default.img`
  && {
    ${({theme:{feedItem:e}})=>te.css`
      height: ${e.imageSize};
      width: ${e.imageSize};
      flex-shrink: 0;
      border-radius: ${e.imageRadius};
    `}
  }
`,en=te__default.default.div`
  && {
    ${({theme:{feedItem:e}})=>te.css`
      display: flex;
      align-self: flex-start;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      padding: ${e.textContentPadding};
      margin: ${e.textContentMargin};
      line-height: normal;
      width: 100%;
      p,
      h4 {
        margin: 0;
      }
    `}
  }
`,tn=te__default.default.h4`
  && {
    ${({theme:{feedItem:e}})=>te.css`
      font-weight: ${e.headerFontWeight};
      font-size: ${e.headerSize};
      padding: ${e.headerPadding};
      color: ${e.headerColor};
    `}
  }
`,rn=te__default.default.p`
  && {
    ${({theme:{feedItem:e}})=>te.css`
      font-size: ${e.descriptionSize};
      padding: ${e.descriptionPadding};
      color: ${e.descriptionColor};
    `}
  }
`,ss=te__default.default.p`
  && {
    ${({theme:{feedItem:e}})=>te.css`
      font-size: ${e.dateSize};
      color: ${e.dateColor};
    `}
  }
`,ls=te__default.default.div`
  && {
    ${()=>te.css`
      margin-top: 0.75rem;
      width: 100%;
    `}
  }
`,cs=te__default.default.div`
  && {
    ${({theme:{feedItem:e}})=>te.css`
      display: flex;
      justify-content: space-between;
      margin: ${e.menuMargin};
      align-items: center;
      svg {
        fill: ${e.notificationDot};
        height: ${e.notificationDotSize};
        width: ${e.notificationDotSize};
      }
    `}
  }
`,us=te__default.default.div`
  && {
    ${({theme:{feedItem:e}})=>te.css`
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-start;
      padding: ${e.padding};
      border: ${e.border};
      background: ${e.background};
      width: 100%;
    `}
  }
`,fs=te__default.default.div`
  && {
    ${({theme:{feedItem:e}})=>te.css`
      height: ${e.imageSize};
      width: ${e.imageSize};
      flex-shrink: 0;
      background: ${e.placeHolderBackground};
      border-radius: ${e.imageRadius};
    `}
  }
`,ds=te__default.default(en)`
  && {
    flex: 1;
    align-items: stretch;
  }
`,ps=te__default.default(tn)`
  && {
    ${({theme:{feedItem:e}})=>te.css`
      background: ${e.placeHolderBackground};
      color: ${e.placeHolderBackground};
      margin: 0 0 0.8rem 0 !important;
      padding: 0;
    `}
  }
`,ms=te__default.default(rn)`
  && {
    ${({theme:{feedItem:e}})=>te.css`
      background: ${e.placeHolderBackground};
      color: ${e.placeHolderBackground};
      margin: 0 12rem 0 0 !important;
      padding: 0;
    `}
  }
`,Qr=te__default.default.span.withConfig({shouldForwardProp:e=>!["circle"].includes(e)})`
  && {
    display: block;
    @keyframes placeHolderShimmer {
      0% {
        background-position: -468px 0;
      }
      100% {
        background-position: 468px 0;
      }
    }

    animation-duration: 1.25s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: ${({theme:{feedItem:e}})=>e.placeHolderGradient};
    background-size: 800px 104px;
    height: 100%;
    width: 100%;
    border-radius: ${({circle:e})=>e?"50%":"unset"};
    position: relative;
  }
`;var hs="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0idXJsKCNwYXR0ZXJuMCkiLz4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJwYXR0ZXJuMCIgcGF0dGVybkNvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgo8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZTBfMjAyOV8yNjcwIiB0cmFuc2Zvcm09InNjYWxlKDAuMDA3ODEyNSkiLz4KPC9wYXR0ZXJuPgo8aW1hZ2UgaWQ9ImltYWdlMF8yMDI5XzI2NzAiIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0JEQUFRQ0F3TURBZ1FEQXdNRUJBUUVCUWtHQlFVRkJRc0lDQVlKRFFzTkRRMExEQXdPRUJRUkRnOFREd3dNRWhnU0V4VVdGeGNYRGhFWkd4a1dHaFFXRnhiLzJ3QkRBUVFFQkFVRkJRb0dCZ29XRHd3UEZoWVdGaFlXRmhZV0ZoWVdGaFlXRmhZV0ZoWVdGaFlXRmhZV0ZoWVdGaFlXRmhZV0ZoWVdGaFlXRmhZV0ZoWVdGaGIvd2dBUkNBQ0FBSUFEQVJFQUFoRUJBeEVCLzhRQUhBQUFBZ0lEQVFFQUFBQUFBQUFBQUFBQUFBVURCQUlHQndFSS84UUFIQUVBQVFVQkFRRUFBQUFBQUFBQUFBQUFBQUlEQkFVR0FRY0kvOW9BREFNQkFBSVFBeEFBQUFEN0VlYkFBQUFBQUFBQUFBQUFBQUFBQUFBOEE0ZVJYaFpsSVpBQUFBQUFBQUF4N3lGQ3FXTjBVZWZ0cGVxbDYzSkxpejZTbmswVlVkQUFBQUFNQW85U3I4OTJhN0xYMmJpWm5FVHVzMjVETnA5bXpwYUt4cWFRQUFBRHdLWFVyR1gxUGtQcEN5UEtvUm5xaTErV1RLWm1Ydmtpb2RQdzlvOVY4OU9nQUFFZlJUMUsrdm53ZWZiZXBPUnlhemlkaWVSY1cxd1NKTDM3Slg3eStydWk3cno3TjFrQUFDdjNpWlNkV3orNDZDNVdwMjNQbTVUUDBKRnRKUnI1WWxRdm9iRmFyZHRwbTA3Nk5zdGN5QUI0RlBxVWlrcHF2Uzcwd1VHbmw3RDFCdVJhVTFYYlhPMHRuYXdLOHlGc002bEFBQXFkNG5XbGFjMm1ydTY4T2ZTWmUwMUM1dWRkOTdNdHQ5YTA5eWJWWkFBQUJnY1g5NG1XaXkzSWFWZCtzalNWcVhGZkZRdURpWkUzQ2ZuSnVvQUFBQUFnNktWSVZkNXJsWDZJL1RGb3BZVXJMOCt2M3hkSGU0ajBBQUFBQU1RcGRTbFdsZkF0blR5ZVcxRi9JOHoweTd6TDlwdkk2QUFBQUFCNEZWU05VdUtIbmVweEhMTlhpTXNCN0dYV1AycTY4LzY1anZUZHl6MjFaMTF5SFFBQUl3cUxiNUI2TjRYb09peFNxUTFWVzlheXZvT3JTNE82M1BucnlITjJHQmU3em1kL3YrUTlTQUF4NlVPcDAyK3hYRXZVUG5pQWNpVXVQaThJbHNTNi9xMkw5V1lwamFGcWZOYytSZm9UeW42ZlpRcllDSG9uVWptVzU4YjV2dFBLcXZYNjYzY1ZLeEZWK3V4OGZadHdadVJyNll2Yy9OL2ZkNnpIb2dIL3hBQTVFQUFCQXdNQ0JBTUVDQVVGQUFBQUFBQUJBZ01FQUFVUkJpRUhFakZCSUZHQkV5SnhrUWdVTURKU1lhSEJFQlVqUWtRa1FMR3kwZi9hQUFnQkFRQUJQd0QvQUd1YTVoUWRSdmxZb0xRY2dLQit6S2dNMDQrRWdra0FBYms5cWR1QkpLVy9tZjJGSWY1c2xTcWJjVFRUZ3h2VGE4ZEZFR21uUnVGZllMWHlpbjVJR2F2RW9vSmFCTzI2L2o1ZWxKbGtFNVZ0VGMzSDkxTXpSNTB4TUhuVEVrSHZURDR4VUowSzVrSHFQRW80RlRIY0JWTnVjOHZ6Q2NxUHBrL3NLbXJLMXJVU1RrbW5uZ2dLSk80cDY0aEdjWk5HOFNNa05Oa250Z0VrK2d6UzV1cEN5dHhpSW9CSUpKV1FrQURPNUpPdzJxRHJiV0xTL2FJc1JueHdja3hIa09MeDNJUVNGRVk3QUUxb2JWRWZVRnJNcVBsSlRzNGc1Q2tFSEJCQndRUVJnZ2dFSElJcTJYK0YvTjBReStnTy9oeU1ueFBIQ1RWd1hzcW9qZzl1N2s0eXlvZkxmL2dHamJMZzhEL1RTd2tqUE00ZmV4OEJrL1BGWEd6UjJZcnI4dVM0VU5KSzFFWVNBQUNTZHNuWUFtdUNYRlBTSEVIV2QyMC9ick5QaFNyWXIvUEtTcHdkaUFDU01pb2NCaHRQdW9BSDVBQ2hFWWRZVzA2Z0Z0U1NDQ05pRHNRYW1hbjRXWFBqblA0ZDI2Vk90ZDNnS1EyWmlYZ2xoeDVSeHlOcEpKVVFWSkJyaDFFblFOWjNhQk9sSmxPdEZEU253a3BMdVFDQ29aT1ZZSUJQZkFyaWpwTVJWeGRSMkdLVXlZN3lFU2tzZzVjU1RnTElIVWc0QlBrYWpjLzFkSFBzdmxHUjVIdVBDK3JDVFZ4WDk2dFZYRjJQTlpnTUVBRmFQYUt4bm1KVU0vOEFnOHFrREsxR3I5RVRNdGN1R29sSWZaVzFudWtLQlRuMHI2TmZBVFV1aXVOOSsxM3FPYmJpSkxiakVGbUc4cGVVclVuSzFrcEhMc2hPQlQwaERHNmdTQVJuQnh0bmFnNEZCWVFjakFJUG1EMDlhZjhBbzVhcG5mUzBScjh6b2pGZ2J1alZ5ZldYU0gvNlJDdzJFWVBWYVIzQTVhMEJITW5VYzY2TEc4dVNYL2dnYkpIcUFLdnpxazZZdUpTY0VSVmtIOHdDUlhESzl5Ymd3dUxLVVZxYUdVcU81d08yVDJ3ZkIvYWFsS3dGVk5QM3F2TnVhdUtrUGUwRGI3ZUNTZGdyQjJPVHQyR1FjZWVha0RDaitZQitkU2U5TFJoUk5UNFFrYzRXb2hDaGdnYlpGUVdtbUdBMjJNSkFBSFVuYXI0MisvQWRqeGlBcDBjcFVjN0E3SDlLMHZCYXQwUDJTRkZTemdxVXJxY2RBQU9nSFlWYzJuWlduNTdESUtuSEdDaElTQmtrN2JaSUhmenJRbGhWYVdWcmV3SEZEQUJJSkFQVWtqYk93R0IwSGhrSXlraXByUjk0MDZuSE1LZ3UvV2JReStOeUVoQy9QSTJQekdEVC9lbnhzYTFUbzZ5WGk1TG15bkx1dytyQVVxRGVwVVFIR3d5bHB3SkpyU2xqdFduZzZtM0NXVk80QzNabHdmbHVFRE9Cek9xVVJRZkJ5YWpQMWFnVEVQWXJJSG9OelRXd0k4dkNVNUJxYXpzcXBiWkJOYWFucGh2cllmSkREMk1uOENoc0ZmRHNhbk1sQjV1cWNiRWJnanNRYWVJUE5Vb2dFMDg2RVpvU2xiZ1ZwdU83SmQ3Z0RjbnRpb3lBaHZsSFFEQThieU1wVlU1bnJUcU1GVmEyNGh5dEZ2d0dub0tabHVrQlpjU1ZoTG1RY0FORWtESUdTUWF0Vjh0bDlzak40dFRxbllraElLQ3RCUXBKNjRLVGdnNy9BQ0lJSkJxZExRbm1KcVRjR0J6Wk5hVGhMdXExdXQ3TW9JQ2w5Ums5aDVtclRFYmpNOGphUUFQbWZqU0FBUEdRQ0RVeG9FS3FhMkFWVktpeFpVUjlxYkZhbE1Cdm1jWmRTQ2xRQjZFSEkzemlydUxIZm0vYU15UFl1QklTRk1xS1NnZGtrRFlZOGlLNGx4Wk9uQzNJYXVxcE1kNXprVUhNWlFTQ1FjZ0FFSEI3Vm92VE5pdkZrWXZ0OXZqNFJJS2kwdzBzSkJTbFJHU2R5Y2tWb2U0YWJqTnJzMWhRZ2dvSlVPYkpJN2tra2tuSkZOcEErd3lNR3BTMDhpanRnZWd4Vit2OXFpQllYSkN5T3plRCt2U3RZY1JGTk1Pc1c1SWI1Z1FTRGxSSGxuc051d0ZTN3ZkVlhGeVpHbXlJOGhaR1hHWENsUngwQndSbjF6U3BPcGIrK2xGeHZVbVF4SFNwd29kSXh0OEFOOEU3bk5RM1pzbGh0ZzNXVVl6UUlianBkd2xzRTVJd044RWtuQk5hSnVLck5KTGpDaWhSSTk4Wnp0MHlhMHh4QWRVMkVUUWwwQUFaT3grWTJxMFgrMnpoaHQ4SVVleXYyUFR4TFdBRFQ4bEtFcVVTQUVna2s5QU81cmlEcjkrWExkaXdDUXdrbkI3S3FiY0pra3FManhPZTFQTmxYTWVwcjZ1bkpxQ29SNHN4UXdQOUk3LzFKL2F1SENMQ2IvZkpWclludHlsdm9STlhJNXcydFlIVnNFNEE3RWdacUtSdlZrbEVEbENqVnVudXRicFdSaXRBYXZ6S1JicHptVXVFSmJVZXhKd0JueUo4Q2pnR3BieFNGVnhPdXFvZWs1UEl2RGtnaGhKNzRKT1NQUUduU1N0WGMwczBUMW84dTVwYVVPdzNtRlpDWFVLUVNOamdnZyt1Q2FDME10SGxHd0d3L0lWd3piNFFYTFNWdWV1MDFhTGc1RWJYS0M1THlFSWRPNmdDTURBTmFxWTRSUXJGTkZwbHFYUEVaUmlscDk5eEljQUpUazdpcmJjMHFUaFd4cHljc1NVcWFjS2VVNUNoNTlqNlZvMjRpN2FZaDNEWXFlWlNWZDhLR3hIb1IvRjg0UWFudWJxcmpUS1BKRGk1L0c2b2V2S1AwelRwKzlUam8zb3U5YUs2OXAxcWE5aU92dWNHdEl5QzNZSTJGNElSanJqb1NLVE01MHFDbk9iM1QzejUxYlpPV1FUNUNtSHM1NzE5SDZhcVRvdDZPci9GbEtIb29CWDhmLy9FQURNUkFRQUJBd0lEQmdRR0FRVUFBQUFBQUFFQ0FBTVJCQ0VGTVVFR0VtRnhnWkVRRXlCUk1ES2hzY0hSRkJVaVFGTGgvOW9BQ0FFQ0FRRS9BUDhBalpBeXVEN3RPdTBzZHBYWWo1bjkxRFdhYWUwTGcrU2YzUnl6K0ZpcFhJMjRzNW9CdXJzQld0N1RTa3NOSVlQK3lidmtOVHYzYjdtN05WKzZ2NmNpb2tjVUExcDlYcU5PNXRUVHd6azluYXRCeDZNM3VhbkE5RTVQbWRLSHFmZ0JYYVBpVXI5NXNRZjlzWGZIVk9yVVpZMnFOM0hXaS80MUc5VUo1NjFFTU5kbjlmTExwcHVRM005UHVlWFUrc0sxZDM1R21uYyt3dnIwcWJLY21UeldtTlpjTldyVjY1K1NLK1F2NjhxdGNKMTBqS0FlTC9XYWhDNGZrbVB2ajBVTTFaMURoRXduTXJSNitOdlZSbU9NSnZVVVRKMStrcUpYRjdjcDZDNFI1aG4wT2RXdURhMjV6Q0o5MTM5aitVcTMyZXRHOTJUSjhNQittOWY2THA5TUNRTit1TW8rSzVxTUloZ0t3WXcxUGdPbXUyMlpIdXZNVEoxNTQzS3Y2V1ZuVy9KWlp5Qm5rN3VEMUs0eHdvYkpQVHgzamdRTjBkaDh4dzVyVFJZV1l4bnpBSHpENlFxTmEyOUs1ZVlMc09NZnkxOTJseHVkSzFPb0xzUU9XY3RSeGxycWhVTlNGaGdtNTdZeXVhMFFhM2kwcmh1RG4wTmozUVNwZmtrZmNyaDE2U3R1VGt4azhNZFBwS0sxV2hsS1RPM3ZuZFBId3BPNm8xS3NjeXZFZmhkZ3p0eWdPRkV6OXM5YTRkb2JPamd3dG03aks4My9BTU9nVVc1VEVpWmNWbzlKSzFtYytic0IwK2tvK0dwdHBKVHJTWkthRkRCajFCL2Vzcnp4NkFmdFJVQ3RIREdaUDFsRlhMWk9PT3RTdEl0TWZ1Vjh1aTFVTEM5S3M2VjYxRUl4d2ZXVWZEWDZtVm1ZRWNpSzQ1K25TbzNMYzQ1SDMyZldzeHFMQTVwVmtoakp2aXZJL0JLSzRsZCtYcFp6T1pqOTZ1YUw1c0NiRkJCTWlPSGx6SzFHbWxwenZDNFhHOWFUUXl2eDc3bHowS2hvSjJMTFB1b0huemZIOEtNVmNCbGVsYVRnMnF1N3BnOGVmdFdnN00yQnpkTzhtSGN5Wk9UamxrcDBsaWR2NWR5SWgwUWYzNVYyMzROcGJQRGkvWWlSU1JuQzRSRTVLOG5EWFp2ZzJsc2NNc3M0RE5pS3VWeTc4czRNRFdwMGtibHRoZ3dkTUdQYXRYMmZ0T1cza2ZEbDdWZjRYcWJHVk1uM1A2K3VNV1RnTXJzRmNJNEREVDJ5Vnd6SjV2OEFIZ1Zic1c0Y2lvdU5taEhyWGJPMlQ0SmU4QWZacmhOdlN4bmViVUVrZDBWRUZEQW1YR0E4RDRYcmZOeFU3TVpHNVhGdURrcmJldEc1dWgxT3ZyOUI4T3ptbCtmcmhUSkVYMTVGQmd3VUh3SzF1aXQ2elRUMDkzUGRrWWNjOFp6dDdVRFd2dWRvb1g3bnlZbmN5aGdGd096dmwzSzBGenRGY3ZSYjBjVzhtY2tSeG5mRlRzSnViMUcwZHhFem11SWFiL0cxVnkxMEZ4NU81K254S0s3STJjUnUzVTVvSGtDdndCZGlveHh6b0FveFVhbkV5NW9oamxTWVVyQlhhcXdRMXBNNmg3aW43WStQLzhRQU5CRUJBQUVEQXdFRkJnUUdBd0FBQUFBQUFRSUFBeEVFSVRFRkJoSVRRVkVnTUdGeGdaRUhFQlN4RlNJeW9kSGhNMEJDLzlvQUNBRURBUUUvQVA4QXJCNUc3VWROZVRhQy9ScHNYWW1XS2ZSOTNtb1JsTjdzUlYyQTVhMHZSQU85ZmN2b2NmVnFGaTNhUDVJZ2ZBeFRGcGpWelRXcmc5OEg0K2YzclVkTmxFWlduSjZlZnVjMTBYcHhhdGVKTS9tVDdIcFJiSzhLdkMyNHB0VTI2YmRkVDBnSGpSUG4vbjNHa3RlTGZqRHlVejhqZHEwRVRCVUNvMnMxNFVJbVpvSHhRcnhkRU9HV1g0QzA2VFJ5TU1tTDhUKzIyYTFlajhDWE9SNFRjYTFPZ2xPeEp4c2lWakNqNWUzMG1SSFd3ejU1RDV0ZnJkUGJ5WlpQb2NmZHIrTFNQNklnZXJ2L0FLcTExcTVxZTlFbW1OK0FFOVRIN05TdXlkMXpVWlN6a2R5clhhQzlidStGTjczbHVIUHBubmlyMStGM1J4dWhnM2NjNHhuT1BodFhSdXBNbVdudnl6R1FvcndtNmZKS3ZzWlhwc09GY2ZMTDdmUXRCYWpwdkZUS2k1OCtGeG55S2pzWXFKa1QxMnJSYVZzTWxjcVlNZW5yL1lxelo3K1ZhbkJpNGFkRm5VdDBUQ2pqZk9lTVk0eHNPYzFya3NhRXRlWVkrcmxmdGxyU3hIVVFIakorOWRlMEZ1MCtMQXhsdy9IT2ZiNlIxcU5pMTRWM1lEQStXUHB3bFFTUms0cURSVm01S0c1VTVNcEs4MXA1eHQzQ2FaQnpqMXhXcTFVOVJKWFk4ZzRQOXRXN3NiRjBuTndDTG11cTlUTlc5MkhBNXp4bjBEeng3T0t4K1dodWQ2M2g1TnFoNS9sM1IzYy9SVDltb3hJanUvVlg5NjdwV01OZFJudDNEemMvYjJzZm5wNzNoT1hoNS96Vm00U01qUlVXaXU4VmYxRVlRVmF1WEc1SmsrZnVNZmwyTTdNVyt0YU85SXVzYmtVQXhrRHpaQUxoWEdTdFYwL1U2RFVTMCtvaUVodzRSSDRpS0pXSDBydXk5SzFWOXNtSGw0S25jbGNjcjd2b003ME5mQnRTWXUrRVVUWnc3Snc0YXM5Um5Zbk9CSWNLTzRtUlIzeTcxMC9XeDFhd1lnaG5iejN4dzFyZXFmcHJrclVJbVRHVjMzVFBGYWpxUDZpNTNKeUZjNE5qWTV3VWU1V01ZcXVBNVY0clY5b3REcHhDWGVUMDQrOWRUN2NYc01iRDNWRTJVY1BxOGcxcHVxYXF4ZGxlaE5KS0tpbWNjWnc0ZnFOZmhwMm4xV3M2cFBUYWlXUmdvb1pFU3UyL2JEcUwxblZXckUwdGtrTUFjR0ZINWpXaTY1cUxXb2IwNUxKeHVxdTNHNjEwenR2ZHdGNEpIcncxb2V2NkhWYkVzTDVPMzJlS1Bhbk9NSXM1T0FGWDBEbGE3UmR0N3VzdlRocHYrTWNIby9GcWZVTlJkWHZTY1BwVVordEZ4OWEvRERVOXp0VHBvci9WM2o3bGRzYi9BRkdjYlJxYmtHMnR4Z0NLRE5YdllNNWFTdEhmVFpkeXJHcnVRd2pYWmp0V3h2R2sxTXNra0JmSmRqMnUzblVYUjlFbkdMaHVKRTljTzdqNkZSL2VvbEJVYzEwYnF1bzZWcjdldTArR2NISU9VZGtSd2poS0NWeWY4enk3dnplYTBHazdGbG1GclV6eGNBemxtR1V5NFJEbXVyYWZzVlowbDAwMHMzV0wzVWJpRDVaM1RHYXRhczNIYXIycWZGR0RqSENlVDVQMHJvR3ZPb2RMczZyemtDL0JOaytpZXorS09xVzdwdE1Pd0tueFhCVUtoR293b2pSR3JNTXlyWEQrcG1pOG5IeUtsQ1NtYzhuTlhiVzdUQ3Z3ejFMZDZQTzFML3hORDVJUDUvL1oiLz4KPC9kZWZzPgo8L3N2Zz4K";function on(e,t){return t.split(".").reduce((r,o)=>r&&r[o],e)}var gs={header:{headerText:"Notifications",preferenceText:"Preferences",dropdownItems:{preferences:"Preferences",enableDesktopNotifications:"Enable Desktop Notifications",markAllAsRead:"Mark All As Read",deleteAll:"Delete All"}},notification:{dropdownItems:{delete:"Delete",markAsRead:"Mark As Read"}},channels:{discord:"Discord",email:"Email",inApp:"In-App",mobilePush:"Mobile Push",slack:"Slack",sms:"SMS",webPush:"Web Push",webhook:"Webhook",whatsapp:"WhatsApp",chat:"Chat"},preferenceModal:{heading:"Enable web push notifications",text:"Would you like to enable web push notifications?",yesButtonText:"Yes",noButtonText:"Maybe later",secondaryText:"You can change your preferences in Settings later, if needed"},notificationFeed:{placeholderText:"Shh! It's quiet around here..."}};var Ue=()=>{let t=H()?.textOverrides,{t:r,ready:o}=reactI18next.useTranslation(void 0,{useSuspense:!1});return {t:i=>{let a=on(t,i),s=on(gs,i);return a||(o?r(i,s):s)}}};function ys({style:e={}}={}){return jsxRuntime.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",style:{...e},children:jsxRuntime.jsx("circle",{cx:"50",cy:"50",r:"50"})})}function pt(e){"@babel/helpers - typeof";return pt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pt(e)}function X(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function M(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function D(e){M(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||pt(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function nn(e,t){M(2,arguments);var r=D(e),o=X(t);return isNaN(o)?new Date(NaN):(o&&r.setDate(r.getDate()+o),r)}function an(e,t){M(2,arguments);var r=D(e).getTime(),o=X(t);return new Date(r+o)}var wf={};function xe(){return wf}function be(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function Xr(e){M(1,arguments);var t=D(e);return t.setHours(0,0,0,0),t}var Rf=864e5;function sn(e,t){M(2,arguments);var r=Xr(e),o=Xr(t),n=r.getTime()-be(r),i=o.getTime()-be(o);return Math.round((n-i)/Rf)}function mt(e,t){M(2,arguments);var r=D(e),o=D(t),n=r.getTime()-o.getTime();return n<0?-1:n>0?1:n}function ln(e){return M(1,arguments),e instanceof Date||pt(e)==="object"&&Object.prototype.toString.call(e)==="[object Date]"}function cn(e){if(M(1,arguments),!ln(e)&&typeof e!="number")return !1;var t=D(e);return !isNaN(Number(t))}function un(e,t){M(2,arguments);var r=D(e),o=D(t),n=r.getFullYear()-o.getFullYear(),i=r.getMonth()-o.getMonth();return n*12+i}function fn(e,t){return M(2,arguments),D(e).getTime()-D(t).getTime()}var xs={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}},Tf="trunc";function bs(e){return e?xs[e]:xs[Tf]}function dn(e){M(1,arguments);var t=D(e);return t.setHours(23,59,59,999),t}function pn(e){M(1,arguments);var t=D(e),r=t.getMonth();return t.setFullYear(t.getFullYear(),r+1,0),t.setHours(23,59,59,999),t}function mn(e){M(1,arguments);var t=D(e);return dn(t).getTime()===pn(t).getTime()}function hn(e,t){M(2,arguments);var r=D(e),o=D(t),n=mt(r,o),i=Math.abs(un(r,o)),a;if(i<1)a=0;else {r.getMonth()===1&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-n*i);var s=mt(r,o)===-n;mn(D(e))&&i===1&&mt(e,o)===1&&(s=!1),a=n*(i-Number(s));}return a===0?0:a}function gn(e,t,r){M(2,arguments);var o=fn(e,t)/1e3;return bs(r?.roundingMethod)(o)}function Wt(e,t){M(2,arguments);var r=X(t);return an(e,-r)}var Ef=864e5;function vn(e){M(1,arguments);var t=D(e),r=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var o=t.getTime(),n=r-o;return Math.floor(n/Ef)+1}function Ge(e){M(1,arguments);var t=1,r=D(e),o=r.getUTCDay(),n=(o<t?7:0)+o-t;return r.setUTCDate(r.getUTCDate()-n),r.setUTCHours(0,0,0,0),r}function nr(e){M(1,arguments);var t=D(e),r=t.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(r+1,0,4),o.setUTCHours(0,0,0,0);var n=Ge(o),i=new Date(0);i.setUTCFullYear(r,0,4),i.setUTCHours(0,0,0,0);var a=Ge(i);return t.getTime()>=n.getTime()?r+1:t.getTime()>=a.getTime()?r:r-1}function yn(e){M(1,arguments);var t=nr(e),r=new Date(0);r.setUTCFullYear(t,0,4),r.setUTCHours(0,0,0,0);var o=Ge(r);return o}var Sf=6048e5;function xn(e){M(1,arguments);var t=D(e),r=Ge(t).getTime()-yn(t).getTime();return Math.round(r/Sf)+1}function Je(e,t){var r,o,n,i,a,s,l,u;M(1,arguments);var c=xe(),f=X((r=(o=(n=(i=t?.weekStartsOn)!==null&&i!==void 0?i:t==null||(a=t.locale)===null||a===void 0||(s=a.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&n!==void 0?n:c.weekStartsOn)!==null&&o!==void 0?o:(l=c.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&r!==void 0?r:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=D(e),d=m.getUTCDay(),g=(d<f?7:0)+d-f;return m.setUTCDate(m.getUTCDate()-g),m.setUTCHours(0,0,0,0),m}function ir(e,t){var r,o,n,i,a,s,l,u;M(1,arguments);var c=D(e),f=c.getUTCFullYear(),m=xe(),d=X((r=(o=(n=(i=t?.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(a=t.locale)===null||a===void 0||(s=a.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&n!==void 0?n:m.firstWeekContainsDate)!==null&&o!==void 0?o:(l=m.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&r!==void 0?r:1);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=new Date(0);g.setUTCFullYear(f+1,0,d),g.setUTCHours(0,0,0,0);var y=Je(g,t),v=new Date(0);v.setUTCFullYear(f,0,d),v.setUTCHours(0,0,0,0);var E=Je(v,t);return c.getTime()>=y.getTime()?f+1:c.getTime()>=E.getTime()?f:f-1}function bn(e,t){var r,o,n,i,a,s,l,u;M(1,arguments);var c=xe(),f=X((r=(o=(n=(i=t?.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(a=t.locale)===null||a===void 0||(s=a.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&n!==void 0?n:c.firstWeekContainsDate)!==null&&o!==void 0?o:(l=c.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&r!==void 0?r:1),m=ir(e,t),d=new Date(0);d.setUTCFullYear(m,0,f),d.setUTCHours(0,0,0,0);var g=Je(d,t);return g}var Pf=6048e5;function wn(e,t){M(1,arguments);var r=D(e),o=Je(r,t).getTime()-bn(r,t).getTime();return Math.round(o/Pf)+1}function L(e,t){for(var r=e<0?"-":"",o=Math.abs(e).toString();o.length<t;)o="0"+o;return r+o}var Of={y:function(t,r){var o=t.getUTCFullYear(),n=o>0?o:1-o;return L(r==="yy"?n%100:n,r.length)},M:function(t,r){var o=t.getUTCMonth();return r==="M"?String(o+1):L(o+1,2)},d:function(t,r){return L(t.getUTCDate(),r.length)},a:function(t,r){var o=t.getUTCHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return o.toUpperCase();case"aaa":return o;case"aaaaa":return o[0];case"aaaa":default:return o==="am"?"a.m.":"p.m."}},h:function(t,r){return L(t.getUTCHours()%12||12,r.length)},H:function(t,r){return L(t.getUTCHours(),r.length)},m:function(t,r){return L(t.getUTCMinutes(),r.length)},s:function(t,r){return L(t.getUTCSeconds(),r.length)},S:function(t,r){var o=r.length,n=t.getUTCMilliseconds(),i=Math.floor(n*Math.pow(10,o-3));return L(i,r.length)}},Ae=Of;var Ut={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Cf={G:function(t,r,o){var n=t.getUTCFullYear()>0?1:0;switch(r){case"G":case"GG":case"GGG":return o.era(n,{width:"abbreviated"});case"GGGGG":return o.era(n,{width:"narrow"});case"GGGG":default:return o.era(n,{width:"wide"})}},y:function(t,r,o){if(r==="yo"){var n=t.getUTCFullYear(),i=n>0?n:1-n;return o.ordinalNumber(i,{unit:"year"})}return Ae.y(t,r)},Y:function(t,r,o,n){var i=ir(t,n),a=i>0?i:1-i;if(r==="YY"){var s=a%100;return L(s,2)}return r==="Yo"?o.ordinalNumber(a,{unit:"year"}):L(a,r.length)},R:function(t,r){var o=nr(t);return L(o,r.length)},u:function(t,r){var o=t.getUTCFullYear();return L(o,r.length)},Q:function(t,r,o){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(r){case"Q":return String(n);case"QQ":return L(n,2);case"Qo":return o.ordinalNumber(n,{unit:"quarter"});case"QQQ":return o.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return o.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return o.quarter(n,{width:"wide",context:"formatting"})}},q:function(t,r,o){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(r){case"q":return String(n);case"qq":return L(n,2);case"qo":return o.ordinalNumber(n,{unit:"quarter"});case"qqq":return o.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return o.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return o.quarter(n,{width:"wide",context:"standalone"})}},M:function(t,r,o){var n=t.getUTCMonth();switch(r){case"M":case"MM":return Ae.M(t,r);case"Mo":return o.ordinalNumber(n+1,{unit:"month"});case"MMM":return o.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return o.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return o.month(n,{width:"wide",context:"formatting"})}},L:function(t,r,o){var n=t.getUTCMonth();switch(r){case"L":return String(n+1);case"LL":return L(n+1,2);case"Lo":return o.ordinalNumber(n+1,{unit:"month"});case"LLL":return o.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return o.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return o.month(n,{width:"wide",context:"standalone"})}},w:function(t,r,o,n){var i=wn(t,n);return r==="wo"?o.ordinalNumber(i,{unit:"week"}):L(i,r.length)},I:function(t,r,o){var n=xn(t);return r==="Io"?o.ordinalNumber(n,{unit:"week"}):L(n,r.length)},d:function(t,r,o){return r==="do"?o.ordinalNumber(t.getUTCDate(),{unit:"date"}):Ae.d(t,r)},D:function(t,r,o){var n=vn(t);return r==="Do"?o.ordinalNumber(n,{unit:"dayOfYear"}):L(n,r.length)},E:function(t,r,o){var n=t.getUTCDay();switch(r){case"E":case"EE":case"EEE":return o.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return o.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return o.day(n,{width:"short",context:"formatting"});case"EEEE":default:return o.day(n,{width:"wide",context:"formatting"})}},e:function(t,r,o,n){var i=t.getUTCDay(),a=(i-n.weekStartsOn+8)%7||7;switch(r){case"e":return String(a);case"ee":return L(a,2);case"eo":return o.ordinalNumber(a,{unit:"day"});case"eee":return o.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return o.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return o.day(i,{width:"short",context:"formatting"});case"eeee":default:return o.day(i,{width:"wide",context:"formatting"})}},c:function(t,r,o,n){var i=t.getUTCDay(),a=(i-n.weekStartsOn+8)%7||7;switch(r){case"c":return String(a);case"cc":return L(a,r.length);case"co":return o.ordinalNumber(a,{unit:"day"});case"ccc":return o.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return o.day(i,{width:"narrow",context:"standalone"});case"cccccc":return o.day(i,{width:"short",context:"standalone"});case"cccc":default:return o.day(i,{width:"wide",context:"standalone"})}},i:function(t,r,o){var n=t.getUTCDay(),i=n===0?7:n;switch(r){case"i":return String(i);case"ii":return L(i,r.length);case"io":return o.ordinalNumber(i,{unit:"day"});case"iii":return o.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return o.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return o.day(n,{width:"short",context:"formatting"});case"iiii":default:return o.day(n,{width:"wide",context:"formatting"})}},a:function(t,r,o){var n=t.getUTCHours(),i=n/12>=1?"pm":"am";switch(r){case"a":case"aa":return o.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return o.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return o.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return o.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,r,o){var n=t.getUTCHours(),i;switch(n===12?i=Ut.noon:n===0?i=Ut.midnight:i=n/12>=1?"pm":"am",r){case"b":case"bb":return o.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return o.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return o.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return o.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,r,o){var n=t.getUTCHours(),i;switch(n>=17?i=Ut.evening:n>=12?i=Ut.afternoon:n>=4?i=Ut.morning:i=Ut.night,r){case"B":case"BB":case"BBB":return o.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return o.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return o.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,r,o){if(r==="ho"){var n=t.getUTCHours()%12;return n===0&&(n=12),o.ordinalNumber(n,{unit:"hour"})}return Ae.h(t,r)},H:function(t,r,o){return r==="Ho"?o.ordinalNumber(t.getUTCHours(),{unit:"hour"}):Ae.H(t,r)},K:function(t,r,o){var n=t.getUTCHours()%12;return r==="Ko"?o.ordinalNumber(n,{unit:"hour"}):L(n,r.length)},k:function(t,r,o){var n=t.getUTCHours();return n===0&&(n=24),r==="ko"?o.ordinalNumber(n,{unit:"hour"}):L(n,r.length)},m:function(t,r,o){return r==="mo"?o.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):Ae.m(t,r)},s:function(t,r,o){return r==="so"?o.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):Ae.s(t,r)},S:function(t,r){return Ae.S(t,r)},X:function(t,r,o,n){var i=n._originalDate||t,a=i.getTimezoneOffset();if(a===0)return "Z";switch(r){case"X":return Rs(a);case"XXXX":case"XX":return ht(a);case"XXXXX":case"XXX":default:return ht(a,":")}},x:function(t,r,o,n){var i=n._originalDate||t,a=i.getTimezoneOffset();switch(r){case"x":return Rs(a);case"xxxx":case"xx":return ht(a);case"xxxxx":case"xxx":default:return ht(a,":")}},O:function(t,r,o,n){var i=n._originalDate||t,a=i.getTimezoneOffset();switch(r){case"O":case"OO":case"OOO":return "GMT"+ws(a,":");case"OOOO":default:return "GMT"+ht(a,":")}},z:function(t,r,o,n){var i=n._originalDate||t,a=i.getTimezoneOffset();switch(r){case"z":case"zz":case"zzz":return "GMT"+ws(a,":");case"zzzz":default:return "GMT"+ht(a,":")}},t:function(t,r,o,n){var i=n._originalDate||t,a=Math.floor(i.getTime()/1e3);return L(a,r.length)},T:function(t,r,o,n){var i=n._originalDate||t,a=i.getTime();return L(a,r.length)}};function ws(e,t){var r=e>0?"-":"+",o=Math.abs(e),n=Math.floor(o/60),i=o%60;if(i===0)return r+String(n);var a=t;return r+String(n)+a+L(i,2)}function Rs(e,t){if(e%60===0){var r=e>0?"-":"+";return r+L(Math.abs(e)/60,2)}return ht(e,t)}function ht(e,t){var r=t||"",o=e>0?"-":"+",n=Math.abs(e),i=L(Math.floor(n/60),2),a=L(n%60,2);return o+i+r+a}var Ts=Cf;var Es=function(t,r){switch(t){case"P":return r.date({width:"short"});case"PP":return r.date({width:"medium"});case"PPP":return r.date({width:"long"});case"PPPP":default:return r.date({width:"full"})}},Ss=function(t,r){switch(t){case"p":return r.time({width:"short"});case"pp":return r.time({width:"medium"});case"ppp":return r.time({width:"long"});case"pppp":default:return r.time({width:"full"})}},kf=function(t,r){var o=t.match(/(P+)(p+)?/)||[],n=o[1],i=o[2];if(!i)return Es(t,r);var a;switch(n){case"P":a=r.dateTime({width:"short"});break;case"PP":a=r.dateTime({width:"medium"});break;case"PPP":a=r.dateTime({width:"long"});break;case"PPPP":default:a=r.dateTime({width:"full"});break}return a.replace("{{date}}",Es(n,r)).replace("{{time}}",Ss(i,r))},Mf={p:Ss,P:kf},Ps=Mf;var Ff=["D","DD"],Nf=["YY","YYYY"];function Os(e){return Ff.indexOf(e)!==-1}function Cs(e){return Nf.indexOf(e)!==-1}function Rn(e,t,r){if(e==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(r,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(r,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(r,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(r,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Df={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},If=function(t,r,o){var n,i=Df[t];return typeof i=="string"?n=i:r===1?n=i.one:n=i.other.replace("{{count}}",r.toString()),o!=null&&o.addSuffix?o.comparison&&o.comparison>0?"in "+n:n+" ago":n},ks=If;function ar(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.width?String(t.width):e.defaultWidth,o=e.formats[r]||e.formats[e.defaultWidth];return o}}var Bf={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Wf={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Uf={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Af={date:ar({formats:Bf,defaultWidth:"full"}),time:ar({formats:Wf,defaultWidth:"full"}),dateTime:ar({formats:Uf,defaultWidth:"full"})},Ms=Af;var Vf={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Lf=function(t,r,o,n){return Vf[t]},Fs=Lf;function gt(e){return function(t,r){var o=r!=null&&r.context?String(r.context):"standalone",n;if(o==="formatting"&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,a=r!=null&&r.width?String(r.width):i;n=e.formattingValues[a]||e.formattingValues[i];}else {var s=e.defaultWidth,l=r!=null&&r.width?String(r.width):e.defaultWidth;n=e.values[l]||e.values[s];}var u=e.argumentCallback?e.argumentCallback(t):t;return n[u]}}var Hf={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},$f={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},zf={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Yf={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Zf={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},jf={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},_f=function(t,r){var o=Number(t),n=o%100;if(n>20||n<10)switch(n%10){case 1:return o+"st";case 2:return o+"nd";case 3:return o+"rd"}return o+"th"},Qf={ordinalNumber:_f,era:gt({values:Hf,defaultWidth:"wide"}),quarter:gt({values:$f,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:gt({values:zf,defaultWidth:"wide"}),day:gt({values:Yf,defaultWidth:"wide"}),dayPeriod:gt({values:Zf,defaultWidth:"wide",formattingValues:jf,defaultFormattingWidth:"wide"})},Ns=Qf;function vt(e){return function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.width,n=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],i=t.match(n);if(!i)return null;var a=i[0],s=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(s)?Gf(s,function(f){return f.test(a)}):Xf(s,function(f){return f.test(a)}),u;u=e.valueCallback?e.valueCallback(l):l,u=r.valueCallback?r.valueCallback(u):u;var c=t.slice(a.length);return {value:u,rest:c}}}function Xf(e,t){for(var r in e)if(e.hasOwnProperty(r)&&t(e[r]))return r}function Gf(e,t){for(var r=0;r<e.length;r++)if(t(e[r]))return r}function Tn(e){return function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=t.match(e.matchPattern);if(!o)return null;var n=o[0],i=t.match(e.parsePattern);if(!i)return null;var a=e.valueCallback?e.valueCallback(i[0]):i[0];a=r.valueCallback?r.valueCallback(a):a;var s=t.slice(n.length);return {value:a,rest:s}}}var Jf=/^(\d+)(th|st|nd|rd)?/i,qf=/\d+/i,Kf={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ed={any:[/^b/i,/^(a|c)/i]},td={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},rd={any:[/1/i,/2/i,/3/i,/4/i]},od={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},nd={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},id={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ad={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},sd={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ld={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},cd={ordinalNumber:Tn({matchPattern:Jf,parsePattern:qf,valueCallback:function(t){return parseInt(t,10)}}),era:vt({matchPatterns:Kf,defaultMatchWidth:"wide",parsePatterns:ed,defaultParseWidth:"any"}),quarter:vt({matchPatterns:td,defaultMatchWidth:"wide",parsePatterns:rd,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:vt({matchPatterns:od,defaultMatchWidth:"wide",parsePatterns:nd,defaultParseWidth:"any"}),day:vt({matchPatterns:id,defaultMatchWidth:"wide",parsePatterns:ad,defaultParseWidth:"any"}),dayPeriod:vt({matchPatterns:sd,defaultMatchWidth:"any",parsePatterns:ld,defaultParseWidth:"any"})},Ds=cd;var ud={code:"en-US",formatDistance:ks,formatLong:Ms,formatRelative:Fs,localize:Ns,match:Ds,options:{weekStartsOn:0,firstWeekContainsDate:1}},Is=ud;var At=Is;var fd=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,dd=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,pd=/^'([^]*?)'?$/,md=/''/g,hd=/[a-zA-Z]/;function Vt(e,t,r){var o,n,i,a,s,l,u,c,f,m,d,g,y,v,E,O,x,T;M(2,arguments);var S=String(t),k=xe(),F=(o=(n=r?.locale)!==null&&n!==void 0?n:k.locale)!==null&&o!==void 0?o:At,N=X((i=(a=(s=(l=r?.firstWeekContainsDate)!==null&&l!==void 0?l:r==null||(u=r.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&s!==void 0?s:k.firstWeekContainsDate)!==null&&a!==void 0?a:(f=k.locale)===null||f===void 0||(m=f.options)===null||m===void 0?void 0:m.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(N>=1&&N<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var W=X((d=(g=(y=(v=r?.weekStartsOn)!==null&&v!==void 0?v:r==null||(E=r.locale)===null||E===void 0||(O=E.options)===null||O===void 0?void 0:O.weekStartsOn)!==null&&y!==void 0?y:k.weekStartsOn)!==null&&g!==void 0?g:(x=k.locale)===null||x===void 0||(T=x.options)===null||T===void 0?void 0:T.weekStartsOn)!==null&&d!==void 0?d:0);if(!(W>=0&&W<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!F.localize)throw new RangeError("locale must contain localize property");if(!F.formatLong)throw new RangeError("locale must contain formatLong property");var I=D(e);if(!cn(I))throw new RangeError("Invalid time value");var p=be(I),h=Wt(I,p),P={firstWeekContainsDate:N,weekStartsOn:W,locale:F,_originalDate:I},w=S.match(dd).map(function(R){var b=R[0];if(b==="p"||b==="P"){var C=Ps[b];return C(R,F.formatLong)}return R}).join("").match(fd).map(function(R){if(R==="''")return "'";var b=R[0];if(b==="'")return gd(R);var C=Ts[b];if(C)return !(r!=null&&r.useAdditionalWeekYearTokens)&&Cs(R)&&Rn(R,t,String(e)),!(r!=null&&r.useAdditionalDayOfYearTokens)&&Os(R)&&Rn(R,t,String(e)),C(h,R,F.localize,P);if(b.match(hd))throw new RangeError("Format string contains an unescaped latin alphabet character `"+b+"`");return R}).join("");return w}function gd(e){var t=e.match(pd);return t?t[1].replace(md,"'"):e}function sr(e,t){if(e==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}function En(e){return sr({},e)}var Bs=1440,vd=2520,Sn=43200,yd=86400;function lr(e,t,r){var o,n;M(2,arguments);var i=xe(),a=(o=(n=r?.locale)!==null&&n!==void 0?n:i.locale)!==null&&o!==void 0?o:At;if(!a.formatDistance)throw new RangeError("locale must contain formatDistance property");var s=mt(e,t);if(isNaN(s))throw new RangeError("Invalid time value");var l=sr(En(r),{addSuffix:!!r?.addSuffix,comparison:s}),u,c;s>0?(u=D(t),c=D(e)):(u=D(e),c=D(t));var f=gn(c,u),m=(be(c)-be(u))/1e3,d=Math.round((f-m)/60),g;if(d<2)return r!=null&&r.includeSeconds?f<5?a.formatDistance("lessThanXSeconds",5,l):f<10?a.formatDistance("lessThanXSeconds",10,l):f<20?a.formatDistance("lessThanXSeconds",20,l):f<40?a.formatDistance("halfAMinute",0,l):f<60?a.formatDistance("lessThanXMinutes",1,l):a.formatDistance("xMinutes",1,l):d===0?a.formatDistance("lessThanXMinutes",1,l):a.formatDistance("xMinutes",d,l);if(d<45)return a.formatDistance("xMinutes",d,l);if(d<90)return a.formatDistance("aboutXHours",1,l);if(d<Bs){var y=Math.round(d/60);return a.formatDistance("aboutXHours",y,l)}else {if(d<vd)return a.formatDistance("xDays",1,l);if(d<Sn){var v=Math.round(d/Bs);return a.formatDistance("xDays",v,l)}else if(d<yd)return g=Math.round(d/Sn),a.formatDistance("aboutXMonths",g,l)}if(g=hn(c,u),g<12){var E=Math.round(d/Sn);return a.formatDistance("xMonths",E,l)}else {var O=g%12,x=Math.floor(g/12);return O<3?a.formatDistance("aboutXYears",x,l):O<9?a.formatDistance("overXYears",x,l):a.formatDistance("almostXYears",x+1,l)}}function Gr(e,t,r){var o,n,i,a,s,l,u,c,f,m;M(2,arguments);var d=D(e),g=D(t),y=xe(),v=(o=(n=r?.locale)!==null&&n!==void 0?n:y.locale)!==null&&o!==void 0?o:At,E=X((i=(a=(s=(l=r?.weekStartsOn)!==null&&l!==void 0?l:r==null||(u=r.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.weekStartsOn)!==null&&s!==void 0?s:y.weekStartsOn)!==null&&a!==void 0?a:(f=y.locale)===null||f===void 0||(m=f.options)===null||m===void 0?void 0:m.weekStartsOn)!==null&&i!==void 0?i:0);if(!v.localize)throw new RangeError("locale must contain localize property");if(!v.formatLong)throw new RangeError("locale must contain formatLong property");if(!v.formatRelative)throw new RangeError("locale must contain formatRelative property");var O=sn(d,g);if(isNaN(O))throw new RangeError("Invalid time value");var x;O<-6?x="other":O<-1?x="lastWeek":O<0?x="yesterday":O<1?x="today":O<2?x="tomorrow":O<7?x="nextWeek":x="other";var T=Wt(d,be(d)),S=Wt(g,be(g)),k=v.formatRelative(x,T,S,{locale:v,weekStartsOn:E});return Vt(d,k,{locale:v,weekStartsOn:E})}function Jr(e,t){M(2,arguments);var r=X(t);return nn(e,-r)}var Ws=e=>{try{return lr(new Date(e),new Date,{addSuffix:!0})}catch{return "date error"}},xd={format:Vt,formatDistance:lr,formatRelative:Gr,subDays:Jr};function Us(e){return t=>e(t??"",xd)}function Pn(e){if(!e)return "";let r=new DOMParser().parseFromString(e,"text/html"),o="[unsafe content removed]",n=s=>{let l=document.createTextNode(o);s.parentNode?.replaceChild(l,s);};["script","iframe","object","embed","link","style"].forEach(s=>{r.querySelectorAll(s).forEach(u=>n(u));});let a=r.body.getElementsByTagName("*");for(let s=0;s<a.length;s++){let l=Array.from(a[s].attributes),u=!1;l.forEach(c=>{(c.name.startsWith("on")||c.name==="srcdoc")&&(u=!0);}),u&&n(a[s]);}return r.body.innerHTML}function On(){return jsxRuntime.jsxs(us,{children:[jsxRuntime.jsx(fs,{children:jsxRuntime.jsx(Qr,{circle:!0})}),jsxRuntime.jsxs(ds,{children:[jsxRuntime.jsx(ps,{children:jsxRuntime.jsx(Qr,{children:"\xA0"})}),jsxRuntime.jsx(ms,{children:jsxRuntime.jsx(Qr,{children:"\xA0"})})]})]})}var Sd=({createdAt:e})=>{let{formatDate:t}=H(),o=Us(t||Ws)(e);return jsxRuntime.jsx(ss,{children:o})};function Cn({notification:e}){let {t}=Ue(),r=H(),o=Dr(),{title:n,message:i,icon:a,url:s,clickedAt:l,createdAt:u,blocks:c}=e,f=Pn(i),m=Pn(n),{renderNotificationBody:d,onFeedItemClick:g,feedItemPlaceholderImage:y=hs,eventListenersToRun:v,actionableElements:E,hideNotificationAvatar:O}=r,T=reactHooks.useActions(),{markAsRead:S,changeState:k,deleteNotification:F}=T,N=fe=>k({id:e.id,...fe}),[W,I]=B.useState(!1),[p,h]=B.useState(!1),P=B.useRef(null),w=B.useCallback(()=>S(e.id),[S,e.id]),R=B.useCallback(()=>F(e.id),[F,e.id]),b=B.useMemo(()=>l?[{name:t("notification.dropdownItems.delete"),action:R}]:[{name:t("notification.dropdownItems.delete"),action:R},{name:t("notification.dropdownItems.markAsRead"),action:w}],[R,w,l,t]),C=()=>{I(!0);},U=()=>{I(!1);},A=fe=>{if(!P.current?.contains(fe.target)){if(g){g(fe,{url:s,...e,markAsClicked:w});return}s&&(w(),window.open(s,"__blank"));}},oe=()=>a||y;return jsxRuntime.jsxs(is,{clickable:s!=null,onMouseEnter:C,onMouseLeave:U,onFocus:C,onBlur:U,onClick:A,children:[!O&&jsxRuntime.jsx(as,{src:oe(),onError:()=>{h(!0);}}),jsxRuntime.jsx(en,{children:Ne(d,e)||jsxRuntime.jsxs(B.Fragment,{children:[jsxRuntime.jsx(tn,{dangerouslySetInnerHTML:{__html:m}}),i&&jsxRuntime.jsx(rn,{dangerouslySetInnerHTML:{__html:f}}),jsxRuntime.jsx(Sd,{createdAt:u}),c&&c.length>0&&jsxRuntime.jsx(ls,{children:jsxRuntime.jsx(templateBlocks.TemplateBlocksRender,{blocks:c,changeNotificationState:N,eventListenersToRun:v,notification:e,actionableElementsProps:E})})]})}),jsxRuntime.jsxs(cs,{ref:P,children:[jsxRuntime.jsx(rr,{items:b,isVisible:o||W,theme:ze.dropdown}),jsxRuntime.jsx(ys,{style:{visibility:l?"hidden":"visible"}})]})]})}var Od=300;function Ls(e=Od){let[t,r]=B.useState(!1);function o(i){i.currentTarget?.scrollTop>e?r(!0):r(!1);}function n(i){i?.scrollTo({top:0,left:0,behavior:"smooth"});}return {jumpToTop:n,onNotificationScroll:o,showJumpToTop:t}}function Hs(){return jsxRuntime.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1600 1100",width:"50%",children:jsxRuntime.jsxs("g",{transform:"translate(0 1)",fill:"none",fillRule:"evenodd",children:[jsxRuntime.jsx("path",{d:"M92.8 863.1S55.4 820 33.3 766.2c-22.1-53.8-10.8-102.6 6.2-113.4 17-10.8 57.3 45.4 59.5 95.8 2.3 50.5 0 114.5 0 114.5h-6.2Z",fill:"#52CB96",fillRule:"nonzero"}),jsxRuntime.jsx("path",{d:"M96.2 863.1s-34-203.5-17.6-297.6c16.4-94.1 54.4-91.3 74.8-78.2 20.4 13.1 43.7 79.4 13.6 195.6-30 116.2-59 180.3-59 180.3H96.2v-.1Z",fill:"#37B37F",fillRule:"nonzero"}),jsxRuntime.jsx("path",{stroke:"#FFF",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round",d:"m104.7 863.1 23.1-273.7M96.2 863.1 60.5 727.8"}),jsxRuntime.jsx("path",{d:"M643.6 307.8s39.1-96.6 174.1-60.9c135 35.7 144.5 221.8 208.9 277.3 64.4 55.4 205.9 56.8 196.8 189.3-9.1 132.5-216.3 18-320.8 23.7-317.8 17.3-387 177.4-599.5 87.1-142.2-60.4-100.1-229.2 35.6-279.5 135.7-50.3 240.3-88.8 304.9-237Z",fill:"#F1F2F7",fillRule:"nonzero"}),jsxRuntime.jsx("ellipse",{fill:"#283444",fillRule:"nonzero",cx:557.1,cy:933.1,rx:143.2,ry:61.8}),jsxRuntime.jsx("path",{d:"M568.4 921.7s-3.7 4.5-13.6 4.5c-9.9 0-13.6-4.5-13.6-4.5v-127h27.2v127ZM22.8 863.1C8.8 880.3.4 902.2.4 926.1c0 55 44.6 99.7 99.7 99.7s99.7-44.6 99.7-99.7c0-23.9-8.4-45.8-22.4-63H22.8Z",fill:"#CED5E5",fillRule:"nonzero"}),jsxRuntime.jsx("path",{d:"M908.3 827.6v206.6c0 25.5 63.6 46.1 142 46.1s142-20.6 142-46.1V827.6h-284Z",fill:"#FFB3DA",fillRule:"nonzero"}),jsxRuntime.jsx("ellipse",{fill:"#ED85C3",fillRule:"nonzero",cx:1050.3,cy:827.6,rx:142,ry:67.2}),jsxRuntime.jsx("path",{d:"M267.1 513.8s-2.6-50.2 39.1-66.3c41.7-16.2 155.6-26.4 222-6.8 66.3 19.6-14.6 58 105.4 171.8C743 716.2 802 683.9 866.6 715.4S802 838.7 674.4 836.2s-198.1-28.1-261.1-70.6C350.5 723 262.9 615.9 267.1 513.8Z",fill:"#283444",fillRule:"nonzero"}),jsxRuntime.jsx("path",{d:"M525.8 746.2s21.8 22.5 67 34.1c45.9 11.8 113.1 19.9 174.6 28.3 120.9 16.7 305.6 43.1 305.6 43.1l-2.8-32.3s-293-51.9-430.7-104.9L569 681.1s-26.3 7.2-43.2 65.1Z",fill:"#5900CC",fillRule:"nonzero"}),jsxRuntime.jsx("path",{d:"m665.2 658.5 401 175.9-12.1 33.6-410.3-151.8-66.4-21.6 7.2-19.2c.1 0 53.7-28.7 80.6-16.9Z",fill:"#5900CC",fillRule:"nonzero"}),jsxRuntime.jsx("path",{d:"m401.3 448.4-9.2 57s28.3 8.5 41.8 1.6c13.5-6.9 18.9-22.4 18.9-22.4s-10.3-1.4-23.2-31.3l-28.3-4.9Z",fill:"#FFDFD7",fillRule:"nonzero"}),jsxRuntime.jsx("path",{stroke:"#CED5E5",strokeWidth:3,opacity:.3,strokeLinecap:"round",strokeLinejoin:"round",d:"M1524.1 941.8 337.8 252.7v-72.8L1404.2 29.1"}),jsxRuntime.jsx("path",{d:"M387.3 441.5s30.3 19 55.6 11.3c25.2-7.7-8.6-109.1-8.6-109.1s-14-22.6-49.5-14.1c-35.6 8.5-40.3 74.4 2.5 111.9Z",fill:"#FFDFD7",fillRule:"nonzero"}),jsxRuntime.jsx("path",{d:"M394.7 489.7s-17.6 10.5-34.6 29.3c-8.7 9.6 29.3 74.4 73.5 130.7 42.1 53.7 90.3 99.1 90.3 99.1s31-44.6 69.5-63.9c38.6-19.3 74.5-27.2 74.5-27.2s-90.7-78.2-141-125.5l-33.6-53.3s-20.4-2.3-47.2 1.1c-.1.2-14.7 17.3-51.4 9.7Z",fill:"#FFC933",fillRule:"nonzero"}),jsxRuntime.jsx("path",{d:"M473.4 597.9s18.1-8.1 36.2-10.6c18.1-2.6 12.3 20.4 6.2 29.1-6.1 8.7-48.7 12.3-48.7 12.3s-8.9-5.3-6.3-13.3c2.6-8 5.7-13.9 12.6-17.5Z",fill:"#FFDFD7",fillRule:"nonzero"}),jsxRuntime.jsx("path",{d:"M493.2 479.1s35.5 2 89.1 30.7l16 10.5s33.6 21.4 39 34.2c5.4 12.8-.3 25.2-6.4 30.9l-33-28.8-69.9-22.5-34.8-55ZM360 519c-5.7 8.1-11.3 18.3-16.1 31.1-19.3 51-19.3 93-15.5 97.1 3.8 4.2 52.2 6 139.1-18.1 0 0-7.6-8.7 6.4-32.1 0 0-54.8 6.8-94.1 9.4l9.4-34s4.2-29.9-12.9-43.5L360 519Z",fill:"#FFC933",fillRule:"nonzero"}),jsxRuntime.jsx("path",{stroke:"#FEAC00",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round",d:"m547 550.9-31.2-28.5"}),jsxRuntime.jsx("path",{d:"m491.9 654.7 12.8-81.1c.5-3.3 2.7-6.1 5.8-7.4l103.6-43.5c1.8-.8 5.4-.2 8.1 2.1 1 .9-1.6 1.2-1.8 2.7l-11.2 72c-.5 3.1-2.4 5.7-5.2 7.1l-102.1 54.8c-3.5 1.8-10.9-1.7-10-6.7Z",fill:"#CED5E5",fillRule:"nonzero"}),jsxRuntime.jsx("path",{d:"m495.8 656.5 12.8-81.1c.5-3.3 2.7-6.1 5.8-7.4L618 524.5c3.3-1.4 6.8 1.4 6.2 4.9l-11.2 72c-.5 3.1-2.4 5.7-5.2 7.1l-105.5 52.7c-3.3 1.7-7-1.1-6.5-4.7Z",fill:"#F1F2F7",fillRule:"nonzero"}),jsxRuntime.jsx("ellipse",{fill:"#CED5E5",fillRule:"nonzero",transform:"rotate(-67.61 568.994 588.443)",cx:568.994,cy:588.443,rx:13.6,ry:9.5}),jsxRuntime.jsx("path",{d:"M624.3 558.8s-22.2 6-27.2 8.7c-4.9 2.6-12.5 4.9-12.5 12.5s6.8 17.8 12.9 18.5c6 .8 28.2-6.3 33.4-13.2 5.2-6.9 4.5-28-6.6-26.5Z",fill:"#FFDFD7",fillRule:"nonzero"}),jsxRuntime.jsx("path",{d:"M435.2 346.6s6.5-11.4-6.5-18.9c-13-7.5-54.2-16.6-72 24.8 0 0-16.7 3.7-11.3 34.9 5.4 31.2 42 54.1 42 54.1l-3.6-37 8.2-5.1-9.7-26.3c-.1.1 39.5-1.9 52.9-26.5Z",fill:"#8B34FF",fillRule:"nonzero"}),jsxRuntime.jsx("path",{d:"M385.3 409.5s-.9-8.5-8.9-11.6c-8-3.1-15 4-13.3 13.6 1.7 9.7 14.9 18.7 26.5 13.2l-4.3-15.2Z",fill:"#FFDFD7",fillRule:"nonzero"}),jsxRuntime.jsx("path",{stroke:"#FEAC00",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round",d:"m474 597-94.2 9.4 9.5-34M467.5 629.1l-40.6 9.6"}),jsxRuntime.jsx("path",{d:"M1070.2 819.4s1.9-22.9 11.7-40.3c9.8-17.4 23.6-20 23.6-20l-.8 92.6H1073l-2.8-32.3Z",fill:"#FFF",fillRule:"nonzero"}),jsxRuntime.jsx("path",{d:"M1065.5 836.4s12.2-21.2 29.4-33.6c17.2-12.4 31.4-8.8 31.4-8.8l-42.8 89-30-14.1 12-32.5Z",fill:"#FFF",fillRule:"nonzero"}),jsxRuntime.jsx("path",{stroke:"#8B34FF",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round",d:"m667.8 725.1 385.7 143.7 12.7-34.5-62.7-27.5"}),jsxRuntime.jsx("path",{d:"M1070.9 828.1s16.6-26 34.6-31.4",stroke:"#F1F2F7",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"}),jsxRuntime.jsx("path",{d:"M258.6 273.1H38.1c-15.3 0-27.6-12.4-27.6-27.6v-58.4c0-15.3 12.4-27.6 27.6-27.6h220.5c15.3 0 27.6 12.4 27.6 27.6v58.4c0 15.3-12.3 27.6-27.6 27.6ZM126.7.2h13.6v159.3h-13.6z",stroke:"#FEAC00",fill:"#FFB3DA",fillRule:"nonzero"}),jsxRuntime.jsx("path",{d:"M339 256.2h-6.3c-22.1 0-39.9-17.9-39.9-39.9 0-22.1 17.9-39.9 39.9-39.9h6.3v79.8Z",fill:"#ED85C3",fillRule:"nonzero"}),jsxRuntime.jsx("path",{d:"m1524.1 941.8-118.1-153c-3.2-4.1-4.9-9.2-4.9-14.4v-740c0-4 3.8-6.9 7.7-5.8l112.8 32.5c5.7 1.6 9.6 6.8 9.6 12.7v865.6c-.1 3.7-4.8 5.3-7.1 2.4Z",fill:"#F1F2F7",fillRule:"nonzero"}),jsxRuntime.jsx("path",{fill:"#ED85C3",fillRule:"nonzero",d:"M100.1.2h67.3v20h-67.3z"})]})})}var Ys=150,Dd={transition:`opacity ${Ys}ms ease-in-out`,opacity:0},Id={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}},Bd=()=>{let{t:e}=Ue();return jsxRuntime.jsxs(B__namespace.default.Fragment,{children:[jsxRuntime.jsx(Hs,{}),jsxRuntime.jsx(Ka,{children:e("notificationFeed.placeholderText")})]})},Wd=(e,t)=>Ne(t,e)||jsxRuntime.jsx(Cn,{notification:e});function kn(){let e=H(),{renderNotificationContent:t,renderEmptyPlaceholderImage:r,category:o,tenantIdentifier:n,hideJumpToTop:i}=e,{onNotificationScroll:a,jumpToTop:s,showJumpToTop:l}=Ls(),u=x=>{let T=x.currentTarget.parentNode?.parentElement;s?.(T);},[c,f]=B__namespace.default.useState(1),m=reactHooks.createFilteredFeed({category:o,tenantIdentifier:n}),{notifications:d,loadMore:g,hasMore:y,loading:v}=m(),E=d?.length===0,O=reactHooks.useActions();return jsxRuntime.jsxs(qa,{isLoading:v,empty:E,onScroll:a,children:[!i&&jsxRuntime.jsx(Jo,{in:l,timeout:Ys,children:x=>jsxRuntime.jsx(es,{style:{...Dd,...Id[x]},children:jsxRuntime.jsx(Ko,{onClick:u})})}),E&&!v&&(Ne(r)||jsxRuntime.jsx(Bd,{})),!E&&jsxRuntime.jsx(jsxRuntime.Fragment,{children:d.map(x=>jsxRuntime.jsx(B.Fragment,{children:Wd(x,t)},x.id))}),v&&jsxRuntime.jsx(jsxRuntime.Fragment,{children:[...Array(4).keys()].map((x,T)=>jsxRuntime.jsx(On,{},`loader_${T}`))}),y&&jsxRuntime.jsx(reactIntersectionObserver.InView,{as:"span",onChange:x=>{x&&(f(c+1),O.markAsSeen({pageNo:c+1}),g());}})]})}var js=te__default.default.div`
  && {
    ${({theme:{footer:e}})=>te.css`
      display: flex;
      height: ${e.height};
      border-top: ${e.border};
      align-items: center;
      justify-content: center;
      padding: ${e.padding};
      font-size: ${e.fontSize};
      color: ${e.fontColor};
      background: ${e.background};
      box-sizing: border-box;
    `}
  }
`,_s=te__default.default.h3`
  && {
    ${({theme:{footer:e}})=>te.css`
      font-size: ${e.fontSize};
      font-weight: ${e.fontWeight};
      color: ${e.fontColor};
    `}
  }
`,Qs=te__default.default.a`
  && {
    ${({theme:{footer:e}})=>te.css`
      font-size: ${e.fontSize};
      color: ${e.fontColor};
      margin: ${e.linkMargin};
      cursor: pointer;
      display: flex;
      gap: 0.75rem;
      align-items: center;

      svg {
        height: ${e.linkSize};
        width: ${e.linkSize};
        border-radius: ${e.linkRadius};
      }
    `}
  }
`,Xs=te__default.default.button`
  && {
    ${({theme:{footer:e}})=>te.css`
      cursor: pointer;
      margin: ${e.preferenceButtonMargin};
      padding: ${e.preferenceButtonPadding};
      &:hover {
        transition: ${e.preferenceButtonHoverTransition};
        background: ${e.preferenceButtonHoverBackground};
      }

      svg {
        height: ${e.preferenceButtonSize};
        width: ${e.preferenceButtonSize};
        fill: ${e.preferenceButtonColor};
      }
    `}
  }
`;function Js(){return jsxRuntime.jsxs("svg",{width:"39",height:"36",viewBox:"0 0 39 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[jsxRuntime.jsx("mask",{id:"mask0_2451_653",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"39",height:"36",children:jsxRuntime.jsx("path",{d:"M37.5843 6.51325L28.8318 0.626797C27.7085 -0.13626 26.2575 -0.13626 25.1342 0.626797L19.424 4.4421L19.3304 4.38758H19.2836L13.6202 0.572292C12.4969 -0.190764 11.0459 -0.190764 9.92263 0.572292L1.17012 6.45872C0.421244 6.94928 0 7.87584 0 8.85692V20.0303C0 21.9379 0.889291 23.682 2.29344 24.6086L19.3304 36L36.4143 24.6086C37.8183 23.682 38.7078 21.8834 38.7078 19.9757V8.85692C38.7545 7.87584 38.3333 7.00377 37.5843 6.51325Z",fill:"white"})}),jsxRuntime.jsxs("g",{mask:"url(#mask0_2451_653)",children:[jsxRuntime.jsx("path",{d:"M12.7496 35.989L-1.5259 27.1594L-1.94714 8.19197L11.8603 -1.9458L26.1358 6.88387L26.557 25.8513L12.7496 35.989Z",fill:"#BE185D"}),jsxRuntime.jsx("path",{d:"M27.9027 36.8138L13.674 28.0388L13.2059 9.07134L27.0602 -1.06641L41.3357 7.76324L41.7569 26.6762L27.9027 36.8138Z",fill:"#B22977"}),jsxRuntime.jsx("path",{d:"M20.1242 42.3769L5.89552 33.6019L5.42749 14.6343L19.2817 4.49658L30.0124 12.2952L30.0124 32.0957L20.1242 42.3769Z",fill:"#BE185D"}),jsxRuntime.jsx("path",{opacity:"0.36",d:"M41.2787 21.9691L18.4847 38.5383L18.0635 19.6254L41.7884 5.1333L41.2787 21.9691Z",fill:"#A6256E"}),jsxRuntime.jsx("path",{d:"M-3.97847 23.6365L19.4707 38.0255L19.0495 19.1127L-4.44653 4.72363L-3.97847 23.6365Z",fill:"#D74078"})]})]})}function Ks(){return jsxRuntime.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",children:jsxRuntime.jsx("path",{d:"M 22.205078 2 A 1.0001 1.0001 0 0 0 21.21875 2.8378906 L 20.246094 8.7929688 C 19.076509 9.1331971 17.961243 9.5922728 16.910156 10.164062 L 11.996094 6.6542969 A 1.0001 1.0001 0 0 0 10.708984 6.7597656 L 6.8183594 10.646484 A 1.0001 1.0001 0 0 0 6.7070312 11.927734 L 10.164062 16.873047 C 9.583454 17.930271 9.1142098 19.051824 8.765625 20.232422 L 2.8359375 21.21875 A 1.0001 1.0001 0 0 0 2.0019531 22.205078 L 2.0019531 27.705078 A 1.0001 1.0001 0 0 0 2.8261719 28.691406 L 8.7597656 29.742188 C 9.1064607 30.920739 9.5727226 32.043065 10.154297 33.101562 L 6.6542969 37.998047 A 1.0001 1.0001 0 0 0 6.7597656 39.285156 L 10.648438 43.175781 A 1.0001 1.0001 0 0 0 11.927734 43.289062 L 16.882812 39.820312 C 17.936999 40.39548 19.054994 40.857928 20.228516 41.201172 L 21.21875 47.164062 A 1.0001 1.0001 0 0 0 22.205078 48 L 27.705078 48 A 1.0001 1.0001 0 0 0 28.691406 47.173828 L 29.751953 41.1875 C 30.920633 40.838997 32.033372 40.369697 33.082031 39.791016 L 38.070312 43.291016 A 1.0001 1.0001 0 0 0 39.351562 43.179688 L 43.240234 39.287109 A 1.0001 1.0001 0 0 0 43.34375 37.996094 L 39.787109 33.058594 C 40.355783 32.014958 40.813915 30.908875 41.154297 29.748047 L 47.171875 28.693359 A 1.0001 1.0001 0 0 0 47.998047 27.707031 L 47.998047 22.207031 A 1.0001 1.0001 0 0 0 47.160156 21.220703 L 41.152344 20.238281 C 40.80968 19.078827 40.350281 17.974723 39.78125 16.931641 L 43.289062 11.933594 A 1.0001 1.0001 0 0 0 43.177734 10.652344 L 39.287109 6.7636719 A 1.0001 1.0001 0 0 0 37.996094 6.6601562 L 33.072266 10.201172 C 32.023186 9.6248101 30.909713 9.1579916 29.738281 8.8125 L 28.691406 2.828125 A 1.0001 1.0001 0 0 0 27.705078 2 L 22.205078 2 z M 23.056641 4 L 26.865234 4 L 27.861328 9.6855469 A 1.0001 1.0001 0 0 0 28.603516 10.484375 C 30.066026 10.848832 31.439607 11.426549 32.693359 12.185547 A 1.0001 1.0001 0 0 0 33.794922 12.142578 L 38.474609 8.7792969 L 41.167969 11.472656 L 37.835938 16.220703 A 1.0001 1.0001 0 0 0 37.796875 17.310547 C 38.548366 18.561471 39.118333 19.926379 39.482422 21.380859 A 1.0001 1.0001 0 0 0 40.291016 22.125 L 45.998047 23.058594 L 45.998047 26.867188 L 40.279297 27.871094 A 1.0001 1.0001 0 0 0 39.482422 28.617188 C 39.122545 30.069817 38.552234 31.434687 37.800781 32.685547 A 1.0001 1.0001 0 0 0 37.845703 33.785156 L 41.224609 38.474609 L 38.53125 41.169922 L 33.791016 37.84375 A 1.0001 1.0001 0 0 0 32.697266 37.808594 C 31.44975 38.567585 30.074755 39.148028 28.617188 39.517578 A 1.0001 1.0001 0 0 0 27.876953 40.3125 L 26.867188 46 L 23.052734 46 L 22.111328 40.337891 A 1.0001 1.0001 0 0 0 21.365234 39.53125 C 19.90185 39.170557 18.522094 38.59371 17.259766 37.835938 A 1.0001 1.0001 0 0 0 16.171875 37.875 L 11.46875 41.169922 L 8.7734375 38.470703 L 12.097656 33.824219 A 1.0001 1.0001 0 0 0 12.138672 32.724609 C 11.372652 31.458855 10.793319 30.079213 10.427734 28.609375 A 1.0001 1.0001 0 0 0 9.6328125 27.867188 L 4.0019531 26.867188 L 4.0019531 23.052734 L 9.6289062 22.117188 A 1.0001 1.0001 0 0 0 10.435547 21.373047 C 10.804273 19.898143 11.383325 18.518729 12.146484 17.255859 A 1.0001 1.0001 0 0 0 12.111328 16.164062 L 8.8261719 11.46875 L 11.523438 8.7734375 L 16.185547 12.105469 A 1.0001 1.0001 0 0 0 17.28125 12.148438 C 18.536908 11.394293 19.919867 10.822081 21.384766 10.462891 A 1.0001 1.0001 0 0 0 22.132812 9.6523438 L 23.056641 4 z M 25 17 C 20.593567 17 17 20.593567 17 25 C 17 29.406433 20.593567 33 25 33 C 29.406433 33 33 29.406433 33 25 C 33 20.593567 29.406433 17 25 17 z M 25 19 C 28.325553 19 31 21.674447 31 25 C 31 28.325553 28.325553 31 25 31 C 21.674447 31 19 28.325553 19 25 C 19 21.674447 21.674447 19 25 19 z"})})}var Vd=()=>jsxRuntime.jsx(B.Fragment,{children:jsxRuntime.jsxs(Qs,{href:"https://engagespot.co",target:"__blank","aria-label":"Engagespot Logo",children:[jsxRuntime.jsx(Js,{}),jsxRuntime.jsx(_s,{children:"Powered by engagespot"})]})}),Ld=({hideBranding:e,renderFooterContent:t})=>e&&t?Ne(t):e&&!t?null:Vd();function Mn({showPreferences:e}){let{route:t,setRoute:r,renderFooterContent:o}=H(),n=reactHooks.useHideBranding(),i=()=>{r(t==="preference"?"home":"preference");};return jsxRuntime.jsxs(js,{children:[Ld?.({hideBranding:n,renderFooterContent:o}),e?jsxRuntime.jsx(Xs,{onClick:i,children:jsxRuntime.jsx(Ks,{})}):null]})}var Dn=te__default.default.div`
  && {
    ${({theme:{header:e,colors:t}})=>te.css`
      display: flex;
      height: ${e.height};
      align-items: center;
      justify-content: flex-start;
      padding: ${e.padding};
      font-size: ${e.fontSize};
      color: ${e.fontColor};
      background: ${t.brandingPrimary};
      box-sizing: border-box;
      border-bottom: 1px solid #e9ecee;
    `}
  }
`,In=te__default.default.h3.withConfig({shouldForwardProp:e=>!["isPreferenceView"].includes(e)})`
  && {
    ${({theme:{header:e},isPreferenceView:t})=>te.css`
      font-size: ${e.fontSize};
      font-weight: ${e.fontWeight};
      color: ${e.fontColor};
      padding-left: ${()=>t?"0rem":"0.5rem"};
      position: relative;
      right: ${()=>t?"0":"1.58rem"};
      margin-right: auto;
    `}
  }
`,Bn=te__default.default.button`
  && {
    ${({theme:{header:e}})=>te.css`
      border-width: 0;
      margin: ${e.closeButtonMargin};
      position: relative;
      padding: ${e.closeButtonPadding};
      color: ${e.fontColor};
      box-sizing: border-box;
      outline: none;
      user-select: none;
      cursor: pointer;
      background-color: ${e.closeButtonBackground};
      bottom: 1px;

      &:hover {
      }

      svg {
        fill: ${e.closeButtonColor};
        stroke: none;
        height: 12px;
        width: 12px;
      }
    `}
  }
`;function Wn({children:e}){return jsxRuntime.jsx(Dn,{children:e})}var tl=te__default.default.div`
  && {
    ${({theme:{preference:e}})=>te.css`
      display: flex;
      position: relative;
      flex: 1;
      flex-direction: column;
      overflow-y: auto;
      height: ${e.height};
      align-items: stretch;
      justify-content: flex-start;
      padding: ${e.padding};
      color: ${e.fontColor};
      background: ${e.background};
    `}
  }
`,rl=te__default.default.h3`
  && {
    ${()=>te.css`
      font-size: 1rem;
      font-weight: 'bold';
      margin: 0.2rem 0rem;
    `}
  }
`,ol=te__default.default.button`
  && {
    ${()=>te.css`
      display: flex;
      justify-content: space-between;
      color: black;
      width: 100%;
      padding: 0.75rem 1rem;
      align-items: center;
    `}
  }
`,nl=te__default.default.div`
  && {
    ${()=>te.css`
      border: 1px solid #d6d9db;
      border-radius: 13px;
      margin-bottom: 0.75rem;
      padding-top: 0rem;
    `}
  }
`;te__default.default.label`
  && {
    ${()=>te.css`
      font-size: 0.8rem;
      margin: 0.4rem 0rem 0 0;
    `}
  }
`;var il=te__default.default.div.withConfig({shouldForwardProp:e=>!["open"].includes(e)})`
  && {
    ${({open:e})=>te.css`
      display: grid;
      grid-template-columns: repeat(1, minmax(min-content, 1fr));
      gap: 0rem;
      align-items: flex-start;
      padding: 0.5rem 0.7rem;

      /* collapsible */
      opacity: ${()=>e?"1":"0"};
      max-height: ${()=>e?"100%":"0"};
      padding: ${()=>e?"0px 15px 15px 15px":"0 15px"};
      transition: all 0.2s;
      transition-timing-function: linear;
      overflow: ${()=>e?"":"hidden"};
      margin: ${()=>e?"0.2rem 0rem":"0rem"};
    `}
  }
`,al=te__default.default.div`
  && {
    ${({theme:{preference:e}})=>te.css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      overflow-wrap: anywhere;
      font-size: ${e.fontSize};

      label {
        margin: 0 0.2rem 0 0;
      }
    `}
  }
`,Un=te__default.default.button`
  && {
    ${()=>te.css`
      margin-top: 3px;
      margin-right: 6px;
    `}
  }
`,An=te__default.default.div`
  && {
    ${({theme:{preferenceModal:e,header:t}})=>te.css`
      background-color: ${e.overlayBackground};
      opacity: ${e.overlayOpacity};
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1000;
      margin: ${t.height} 0 0 0;
    `}
  }
`,sl=te__default.default.div`
  && {
    ${({theme:{preferenceModal:e}})=>te.css`
      position: absolute;
      height: ${e.height};
      bottom: 0;
      left: 0;
      z-index: 1500;
      border-radius: ${e.borderRadius};
    `}
  }
`,ll=te__default.default.div`
  && {
    ${({theme:{preferenceModal:e}})=>te.css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      height: 100%;
      border-radius: ${e.borderRadius};
      background-color: ${e.background};
      backdrop-filter: ${e.backdropFilter};
      padding: ${e.padding};
      position: relative;
    `}
  }
`,cl=te__default.default.div`
  && {
    ${({theme:{preferenceModal:e}})=>te.css`
      display: flex;
      margin: ${e.headerMargin};
    `}
  }
`,ul=te__default.default.h6`
  && {
    ${({theme:{preferenceModal:e}})=>te.css`
      font-size: ${e.headerFontSize};
      color: ${e.headingColor};
      margin-right: auto;
    `}
  }
`,fl=te__default.default.button`
  && {
    ${({theme:{preferenceModal:e}})=>te.css`
      position: absolute;
      right: 1rem;
      top: 0.5rem;

      svg {
        height: ${e.closeButtonSize};
        width: ${e.closeButtonSize};
        fill: ${e.closeButtonColor};
      }
    `}
  }
`,dl=te__default.default.p`
  && {
    ${({theme:{preferenceModal:e}})=>te.css`
      color: ${e.textPrimaryColor};
      margin: ${e.textPrimaryMargin};
      font-size: ${e.textPrimaryFontSize};
      text-align: ${e.textAlign};
    `}
  }
`,pl=te__default.default.p`
  && {
    ${({theme:{preferenceModal:e}})=>te.css`
      color: ${e.textSecondaryColor};
      margin: ${e.textSecondaryMargin};
      font-size: ${e.textSecondaryFontSize};
      text-align: ${e.textAlign};
    `}
  }
`,ml=te__default.default.button`
  && {
    ${({theme:{preferenceModal:e}})=>te.css`
      color: ${e.buttonPrimaryColor};
      font-weight: ${e.primaryButtonFontWeight};
      background-color: ${e.buttonPrimaryBackgroundColor};
      padding: ${e.primaryButtonPadding};
      border-radius: ${e.primaryButtonBorderRadius};
      margin: ${e.primaryButtonMargin};
      transition: ${e.primaryButtonTransition};

      &:hover {
        background-color: ${e.buttonPrimaryHoverBackgroundColor};
      }
    `}
  }
`,hl=te__default.default.button`
  && {
    ${({theme:{preferenceModal:e}})=>te.css`
      transition: ${e.primaryButtonTransition};
      color: ${e.buttonSecondaryColor};
      background-color: ${e.buttonSecondaryBackgroundColor};

      &:hover {
        background-color: ${e.buttonSecondaryHoverBackgroundColor};
      }
    `}
  }
`;var gl=te__default.default.input`
  && {
    ${({theme:{toggle:e}})=>te.css`
      /* Toggle Button */
      & {
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
        position: relative;
        border: 0;
        outline: 0;
        cursor: pointer;
        margin: 10px;
        transform: scale(0.7);
      }

      /* To create surface of toggle button */
      &:after {
        content: '';
        width: 60px;
        height: 28px;
        display: inline-block;
        background: ${e.background};
        border-radius: 18px;
        clear: both;
      }

      /* Contents before checkbox to create toggle handle */
      &:before {
        content: '';
        width: 32px;
        height: 32px;
        display: block;
        position: absolute;
        left: -1px;
        top: -2px;
        transform: scale(0.7);
        border-radius: 50%;
        background: ${e.dotColor};
      }

      /* Shift the handle to left on check event */
      &:checked:before {
        left: 29px;
      }
      /* Background color when toggle button will be active */
      &:checked:after {
        background: ${e.activeColor};
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      &,
      &:before,
      &:after,
      &:checked:before,
      &:checked:after {
        transition: ease 0.3s;
        -webkit-transition: ease 0.3s;
        -moz-transition: ease 0.3s;
        -o-transition: ease 0.3s;
      }
    `}
  }
`;function yl({style:e={}}={}){return jsxRuntime.jsx("svg",{style:e,width:"14",height:"9",viewBox:"0 0 14 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:jsxRuntime.jsx("path",{d:"M6.45372 0.22329L0.223657 6.45347C0.0794465 6.59757 0 6.78992 0 6.99503C0 7.20013 0.0794465 7.39249 0.223657 7.53658L0.682352 7.99539C0.981244 8.29394 1.46703 8.29394 1.76547 7.99539L6.9971 2.76376L12.2345 8.0012C12.3787 8.14529 12.571 8.22485 12.776 8.22485C12.9812 8.22485 13.1734 8.14529 13.3178 8.0012L13.7763 7.54239C13.9206 7.39818 14 7.20593 14 7.00083C14 6.79573 13.9206 6.60337 13.7763 6.45927L7.54059 0.22329C7.39592 0.0788524 7.20277 -0.000480059 6.99744 -2.47782e-05C6.79131 -0.000480059 6.59827 0.0788524 6.45372 0.22329Z",fill:"black"})})}function eo(){return jsxRuntime.jsxs("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg",children:[jsxRuntime.jsx("rect",{x:"0.925781",width:"12.8327",height:"1.30946",transform:"rotate(45 0.925781 0)"}),jsxRuntime.jsx("rect",{y:"9.07404",width:"12.8327",height:"1.30946",transform:"rotate(-45 0 9.07404)"})]})}var _d=({preference:e,webPushState:t,handleToggleChange:r})=>{let o=H(),{category:n,setCategory:i}=o,{t:a}=Ue(),[s,l]=B__namespace.default.useState(!1);return jsxRuntime.jsxs(nl,{children:[jsxRuntime.jsxs(ol,{onClick:()=>{l(!s);},children:[jsxRuntime.jsx(rl,{children:e?.name}),jsxRuntime.jsx(yl,{style:{width:"16px",transform:s?"rotate(180deg)":"rotate(0deg)"}})]}),jsxRuntime.jsx(il,{open:s,children:e?.channels?.map(c=>jsxRuntime.jsxs(al,{children:[jsxRuntime.jsx("label",{htmlFor:`${e.id}-${c.id}`,children:a(`channels.${c.id}`)}),jsxRuntime.jsx(gl,{title:c.id==="webPush"&&t==="denied"?"Web Push is currently disabled on the browser. Enable it manually by going into the browser settings":"",type:"checkbox",id:`${e.id}-${c.id}`,checked:c.enabled,disabled:c.id==="webPush"&&["denied"].includes(t),onChange:f=>{e.id&&(c.id==="inApp"&&c.enabled&&n===e.identifier&&i(""),r({categoryId:e?.id,channel:c.id},f));}})]},`${e.id}-${c.id}`))})]})};function Vn({enableWebPush:e,webPushState:t}){let{preferences:r,setPreferences:o}=reactHooks.usePreferences(),n=(a,s)=>{let l=s.target.checked;a.channel==="webPush"&&t!=="granted"&&e(),o?.([{categoryId:a.categoryId,channels:[{enabled:l,channel:a.channel}]}]);},i=r?.categories;return jsxRuntime.jsx(tl,{children:i?.map(a=>jsxRuntime.jsx(_d,{preference:a,webPushState:t,handleToggleChange:n},a.id))})}function Ln({closeModal:e,allowNotifications:t}){let{t:r}=Ue();return jsxRuntime.jsx(sl,{children:jsxRuntime.jsxs(ll,{children:[jsxRuntime.jsxs(cl,{children:[jsxRuntime.jsx(ul,{children:r("preferenceModal.heading")}),jsxRuntime.jsx(fl,{onClick:e,children:jsxRuntime.jsx(eo,{})})]}),jsxRuntime.jsx(dl,{children:r("preferenceModal.text")}),jsxRuntime.jsx(ml,{onClick:t,children:r("preferenceModal.yesButtonText")}),jsxRuntime.jsx(hl,{onClick:e,children:r("preferenceModal.noButtonText")}),jsxRuntime.jsx(pl,{children:r("preferenceModal.secondaryText")})]})})}var bl=te__default.default.div`
  && {
    ${({theme:{tab:e}})=>te.css`
      display: flex;
      align-items: center;
      width: 100%;
      background-color: ${e.background};
      border-bottom: ${e.borderBottom};
      padding: 0 1rem;
    `}
  }
`,wl=te__default.default.div`
  && {
    ${({theme:{tab:e}})=>te.css`
      display: flex;
      overflow-x: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;
      flex-grow: 1;
      gap: ${e.gap};

      &::-webkit-scrollbar {
        display: none;
      }
    `}
  }
`,Rl=te__default.default.button.withConfig({shouldForwardProp:e=>!["isActive"].includes(e)})`
  && {
    ${({theme:{tab:e},isActive:t})=>te.css`
      padding: ${e.buttonPadding};
      background: ${e.buttonBackground};
      border: ${e.buttonBorder};
      color: ${t?e.buttonActiveColor:e.buttonColor};
      font-size: ${e.buttonFontSize};
      font-weight: ${t?e.buttonActiveFontWeight:e.buttonFontWeight};
      cursor: pointer;
      transition: color 0.2s ease-in-out;
      position: relative;
      flex-shrink: 0;

      &::after {
        content: '';
        position: absolute;
        bottom: -0.0625rem;
        left: 0;
        width: 100%;
        height: ${e.buttonActiveIndicatorHeight};
        background-color: ${e.buttonActiveIndicatorBackground};
        transform: scaleX(${t?1:0});
        transition: ${e.buttonActiveIndicatorTransition};
      }

      &:hover {
        color: ${e.buttonHoverColor};
      }

      &:focus {
        outline: none;
      }
    `}
  }
`,Hn=te__default.default.button.withConfig({shouldForwardProp:e=>!["direction"].includes(e)})`
  && {
    ${({theme:{tab:e},disabled:t,direction:r})=>te.css`
      width: ${e.scrollButtonWidth};
      height: ${e.scrollButtonHeight};
      background-color: ${e.scrollButtonBackground};
      cursor: ${t?"default":"pointer"};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${e.scrollButtonFontSize};
      color: ${t?e.scrollButtonDisabledColor:e.scrollButtonColor};
      transition: color 0.2s;
      flex-shrink: 0;
      opacity: ${t?.5:1};
      border: ${e.scrollButtonBorder};
      transform: ${r==="left"?"rotate(180deg)":""};

      &:focus {
        outline: none;
      }

      &:hover {
        color: ${t?e.scrollButtonDisabledColor:e.scrollButtonHoverColor};
        background-color: ${t?e.scrollButtonBackground:e.scrollButtonHoverBackground};
      }
    `}
  }
`;var $n=()=>jsxRuntime.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:jsxRuntime.jsx("path",{d:"m9 18 6-6-6-6"})});var zn=({tabs:e,activeTab:t,setActiveTab:r})=>{let[o,n]=B.useState({hasOverflow:!1,canScrollLeft:!1,canScrollRight:!1}),i=B.useRef(null),a=u=>{r(u);},s=u=>{if(i.current){let c=i.current.offsetWidth/2;i.current.scrollBy({left:u==="left"?-c:c,behavior:"smooth"});}},l=()=>{if(i.current){let{scrollWidth:u,clientWidth:c,scrollLeft:f}=i.current;n({hasOverflow:u>c,canScrollLeft:f>0,canScrollRight:f<u-c-1});}};return B.useEffect(()=>{let u=new ResizeObserver(l);return i.current&&u.observe(i.current),()=>u.disconnect()},[]),jsxRuntime.jsxs(bl,{children:[o.hasOverflow&&jsxRuntime.jsx(Hn,{onClick:()=>s("left"),disabled:!o.canScrollLeft,"aria-label":"Scroll left",direction:"left",children:jsxRuntime.jsx($n,{})}),jsxRuntime.jsx(wl,{ref:i,onScroll:l,children:e.map(u=>jsxRuntime.jsx(Rl,{isActive:u.identifier===t,onClick:()=>a(u.identifier),children:u.label},u.identifier))}),o.hasOverflow&&jsxRuntime.jsx(Hn,{onClick:()=>s("right"),disabled:!o.canScrollRight,"aria-label":"Scroll right",direction:"right",children:jsxRuntime.jsx($n,{})})]})};var Yn=()=>{let{preferences:e}=reactHooks.usePreferences();return e?.categories&&e?.categories?.length>0};function El(){return jsxRuntime.jsxs("svg",{width:"20",height:"13",viewBox:"0 0 20 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[jsxRuntime.jsx("path",{d:"M0.6129 5.79701C0.951277 5.45864 1.49989 5.45864 1.83827 5.79701L7.02994 10.9887C7.36832 11.3271 7.36831 11.8757 7.02994 12.2141V12.2141C6.69156 12.5524 6.14294 12.5524 5.80457 12.2141L0.612899 7.02238C0.274522 6.68401 0.274523 6.13539 0.6129 5.79701V5.79701Z",fill:"black"}),jsxRuntime.jsx("path",{d:"M0.612686 7.0428C0.274309 6.70442 0.274309 6.15581 0.612686 5.81743L5.81742 0.612699C6.15579 0.274322 6.70441 0.274322 7.04279 0.612699V0.612699C7.38117 0.951076 7.38117 1.49969 7.04279 1.83807L1.83806 7.0428C1.49968 7.38118 0.951063 7.38118 0.612686 7.0428V7.0428Z",fill:"black"}),jsxRuntime.jsx("path",{d:"M20 6.15465C20 6.63319 19.6121 7.02112 19.1335 7.02112L1.97744 7.02112L1.97744 5.28818L19.1335 5.28818C19.6121 5.28818 20 5.67611 20 6.15465V6.15465Z",fill:"black"})]})}var ip=()=>{let{subscribe:e}=reactHooks.useWebPush(),[t,r]=B.useState(!0),[o,n]=reactUse.useLocalStorage("showNotificationOverlay","true"),i=()=>e(),a=()=>{r(!1),n("false");},s=()=>{r(!1),i(),n("false");};return t&&o=="true"?jsxRuntime.jsxs(B.Fragment,{children:[jsxRuntime.jsx(An,{}),jsxRuntime.jsx(Ln,{allowNotifications:s,closeModal:a})]}):null},ap=({route:e,setVisible:t,visible:r})=>{let{t:o}=Ue(),{headerText:n,setRoute:i,headerDropdownItems:a}=H(),{webPushState:s,subscribe:l}=reactHooks.useWebPush(),{deleteAllNotifications:u,markAllAsRead:c}=reactHooks.useActions(),f=Yn(),m=e==="home"?n||o("header.headerText"):o("header.preferenceText"),d=()=>{i("home");},g=()=>{i("preference");},y=()=>{t(!r);},O=[...f?[{name:o("header.dropdownItems.preferences"),action:g}]:s==="default"?[{name:o("header.dropdownItems.enableDesktopNotifications"),action:()=>l()}]:[],{name:o("header.dropdownItems.markAllAsRead"),action:()=>c()},{name:o("header.dropdownItems.deleteAll"),action:()=>u()}].concat(a??[]);return jsxRuntime.jsxs(Wn,{children:[jsxRuntime.jsx(Un,{onClick:d,style:{visibility:e==="preference"?"visible":"hidden"},children:jsxRuntime.jsx(El,{})}),jsxRuntime.jsx(In,{isPreferenceView:e==="preference",children:m}),O.length>0?jsxRuntime.jsx(rr,{items:O,isVisible:!0,theme:ze.headerDropdown}):null,jsxRuntime.jsx(Bn,{onClick:()=>{y?.();},children:jsxRuntime.jsx(eo,{})})]})},sp=({showTabs:e})=>{let t=H(),{category:r,setCategory:o}=t,{preferences:n}=reactHooks.usePreferences(),a=(n?.categories||[])?.reduce((l,u)=>u.channels?.find(f=>f.id==="inApp")?.enabled===!1?l:[...l,{identifier:u.identifier,label:u.name}],[{identifier:"",label:"All"}]),s=a?.length>1;return jsxRuntime.jsx(jsxRuntime.Fragment,{children:e&&s?jsxRuntime.jsx(zn,{activeTab:r,setActiveTab:o,tabs:a}):null})},lp=({route:e})=>{let{webPushState:t,subscribe:r}=reactHooks.useWebPush(),o=()=>r();return e==="home"?jsxRuntime.jsx(kn,{}):e==="preference"?jsxRuntime.jsx(Vn,{enableWebPush:o,webPushState:t}):null};function _n({floatingProps:e,visible:t=!1,middlewareProps:r,setVisible:o,panelProps:n}){let{route:i,hideCategoryTabs:a}=H(),s=Yn();return jsxRuntime.jsx(jsxRuntime.Fragment,{children:t&&jsxRuntime.jsxs(vr,{style:e.styles,ref:e.setRef,...e.getFloatingProps(),children:[jsxRuntime.jsx(xr,{ref:r.arrow.setRef,style:{left:r.arrow.middlewareData?.x,top:r.arrow.middlewareData?.y,...r.arrow.styles||{}}}),jsxRuntime.jsxs(yr,{style:n.styles,children:[jsxRuntime.jsx(ip,{}),jsxRuntime.jsx(ap,{route:i,setVisible:o,visible:t}),jsxRuntime.jsx(sp,{showTabs:s&&i==="home"&&!a}),jsxRuntime.jsx(lp,{route:i}),jsxRuntime.jsx(Mn,{showPreferences:s})]})]})})}function Qn(e){"@babel/helpers - typeof";return Qn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Qn(e)}function Xn(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":Qn(XMLHttpRequest))==="object"}function cp(e){return !!e&&typeof e.then=="function"}function Ol(e){return cp(e)?e:Promise.resolve(e)}function Ml(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,o);}return r}function Fl(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ml(Object(r),!0).forEach(function(o){up(e,o,r[o]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ml(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o));});}return e}function up(e,t,r){return (t=fp(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function fp(e){var t=dp(e,"string");return xt(t)=="symbol"?t:t+""}function dp(e,t){if(xt(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,t||"default");if(xt(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return (t==="string"?String:Number)(e)}function xt(e){"@babel/helpers - typeof";return xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xt(e)}var Ve;typeof fetch=="function"&&(typeof global<"u"&&global.fetch?Ve=global.fetch:typeof window<"u"&&window.fetch?Ve=window.fetch:Ve=fetch);var dr;Xn()&&(typeof global<"u"&&global.XMLHttpRequest?dr=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(dr=window.XMLHttpRequest));var ao;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?ao=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(ao=window.ActiveXObject));typeof Ve!="function"&&(Ve=void 0);if(!Ve&&!dr&&!ao)try{(async()=>Ve=(await Promise.resolve().then(()=>ci(kl(),1))).default)();}catch{}var Gn=function(t,r){if(r&&xt(r)==="object"){var o="";for(var n in r)o+="&"+encodeURIComponent(n)+"="+encodeURIComponent(r[n]);if(!o)return t;t=t+(t.indexOf("?")!==-1?"&":"?")+o.slice(1);}return t},Nl=function(t,r,o,n){var i=function(l){if(!l.ok)return o(l.statusText||"Error",{status:l.status});l.text().then(function(u){o(null,{status:l.status,data:u});}).catch(o);};if(n){var a=n(t,r);if(a instanceof Promise){a.then(i).catch(o);return}}typeof fetch=="function"?fetch(t,r).then(i).catch(o):Ve(t,r).then(i).catch(o);},Dl=!1,pp=function(t,r,o,n){t.queryStringParams&&(r=Gn(r,t.queryStringParams));var i=Fl({},typeof t.customHeaders=="function"?t.customHeaders():t.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(i["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),o&&(i["Content-Type"]="application/json");var a=typeof t.requestOptions=="function"?t.requestOptions(o):t.requestOptions,s=Fl({method:o?"POST":"GET",body:o?t.stringify(o):void 0,headers:i},Dl?{}:a),l=typeof t.alternateFetch=="function"&&t.alternateFetch.length>=1?t.alternateFetch:void 0;try{Nl(r,s,n,l);}catch(u){if(!a||Object.keys(a).length===0||!u.message||u.message.indexOf("not implemented")<0)return n(u);try{Object.keys(a).forEach(function(c){delete s[c];}),Nl(r,s,n,l),Dl=!0;}catch(c){n(c);}}},mp=function(t,r,o,n){o&&xt(o)==="object"&&(o=Gn("",o).slice(1)),t.queryStringParams&&(r=Gn(r,t.queryStringParams));try{var i=dr?new dr:new ao("MSXML2.XMLHTTP.3.0");i.open(o?"POST":"GET",r,1),t.crossDomain||i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.withCredentials=!!t.withCredentials,o&&i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.overrideMimeType&&i.overrideMimeType("application/json");var a=t.customHeaders;if(a=typeof a=="function"?a():a,a)for(var s in a)i.setRequestHeader(s,a[s]);i.onreadystatechange=function(){i.readyState>3&&n(i.status>=400?i.statusText:null,{status:i.status,data:i.responseText});},i.send(o);}catch(l){console&&console.log(l);}},hp=function(t,r,o,n){if(typeof o=="function"&&(n=o,o=void 0),n=n||function(){},Ve&&r.indexOf("file:")!==0)return pp(t,r,o,n);if(Xn()||typeof ActiveXObject=="function")return mp(t,r,o,n);n(new Error("No fetch and no xhr implementation found!"));},Il=hp;function $t(e){"@babel/helpers - typeof";return $t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$t(e)}function Bl(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,o);}return r}function Jn(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Bl(Object(r),!0).forEach(function(o){Ul(e,o,r[o]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Bl(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o));});}return e}function gp(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Wl(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,Al(o.key),o);}}function vp(e,t,r){return t&&Wl(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ul(e,t,r){return (t=Al(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Al(e){var t=yp(e,"string");return $t(t)=="symbol"?t:t+""}function yp(e,t){if($t(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,t||"default");if($t(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return (t==="string"?String:Number)(e)}var xp=function(){return {loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(r){return JSON.parse(r)},stringify:JSON.stringify,parsePayload:function(r,o,n){return Ul({},o,n||"")},parseLoadPayload:function(r,o){},request:Il,reloadInterval:typeof window<"u"?!1:60*60*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},Vl=function(){function e(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};gp(this,e),this.services=t,this.options=r,this.allOptions=o,this.type="backend",this.init(t,r,o);}return vp(e,[{key:"init",value:function(r){var o=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.services=r,this.options=Jn(Jn(Jn({},xp()),this.options||{}),n),this.allOptions=i,this.services&&this.options.reloadInterval){var a=setInterval(function(){return o.reload()},this.options.reloadInterval);$t(a)==="object"&&typeof a.unref=="function"&&a.unref();}}},{key:"readMulti",value:function(r,o,n){this._readAny(r,r,o,o,n);}},{key:"read",value:function(r,o,n){this._readAny([r],r,[o],o,n);}},{key:"_readAny",value:function(r,o,n,i,a){var s=this,l=this.options.loadPath;typeof this.options.loadPath=="function"&&(l=this.options.loadPath(r,n)),l=Ol(l),l.then(function(u){if(!u)return a(null,{});var c=s.services.interpolator.interpolate(u,{lng:r.join("+"),ns:n.join("+")});s.loadUrl(c,a,o,i);});}},{key:"loadUrl",value:function(r,o,n,i){var a=this,s=typeof n=="string"?[n]:n,l=typeof i=="string"?[i]:i,u=this.options.parseLoadPayload(s,l);this.options.request(this.options,r,u,function(c,f){if(f&&(f.status>=500&&f.status<600||!f.status))return o("failed loading "+r+"; status code: "+f.status,!0);if(f&&f.status>=400&&f.status<500)return o("failed loading "+r+"; status code: "+f.status,!1);if(!f&&c&&c.message){var m=c.message.toLowerCase(),d=["failed","fetch","network","load"].find(function(v){return m.indexOf(v)>-1});if(d)return o("failed loading "+r+": "+c.message,!0)}if(c)return o(c,!1);var g,y;try{typeof f.data=="string"?g=a.options.parse(f.data,n,i):g=f.data;}catch{y="failed parsing "+r+" to json";}if(y)return o(y,!1);o(null,g);});}},{key:"create",value:function(r,o,n,i,a){var s=this;if(this.options.addPath){typeof r=="string"&&(r=[r]);var l=this.options.parsePayload(o,n,i),u=0,c=[],f=[];r.forEach(function(m){var d=s.options.addPath;typeof s.options.addPath=="function"&&(d=s.options.addPath(m,o));var g=s.services.interpolator.interpolate(d,{lng:m,ns:o});s.options.request(s.options,g,l,function(y,v){u+=1,c.push(y),f.push(v),u===r.length&&typeof a=="function"&&a(c,f);});});}}},{key:"reload",value:function(){var r=this,o=this.services,n=o.backendConnector,i=o.languageUtils,a=o.logger,s=n.language;if(!(s&&s.toLowerCase()==="cimode")){var l=[],u=function(f){var m=i.toResolveHierarchy(f);m.forEach(function(d){l.indexOf(d)<0&&l.push(d);});};u(s),this.allOptions.preload&&this.allOptions.preload.forEach(function(c){return u(c)}),l.forEach(function(c){r.allOptions.ns.forEach(function(f){n.read(c,f,"read",null,null,function(m,d){m&&a.warn("loading namespace ".concat(f," for language ").concat(c," failed"),m),!m&&d&&a.log("loaded namespace ".concat(f," for language ").concat(c),d),n.loaded("".concat(c,"|").concat(f),m,d);});});});}}}])}();Vl.type="backend";var Ll=Vl;var Hl=({apiKey:e,userId:t,baseUrl:r,debug:o})=>bp__default.default.use(reactI18next.initReactI18next).use(Ll).init({debug:o,react:{useSuspense:!1},backend:{loadPath:`${r}v3/translations/inapp`,customHeaders:{"x-engagespot-api-key":e,"x-engagespot-user-id":t}}});var $l=({apiKey:e,userId:t,disableTextTranslation:r,baseUrl:o,debug:n})=>{B__namespace.default.useLayoutEffect(()=>{!r&&e&&t&&Hl({apiKey:e,userId:t,baseUrl:o,debug:n});},[e,t,r,o,n]);};var zl=({setVisible:e})=>{let{panelOpenByDefault:t}=H(),[r,o]=B.useState(!1);B.useEffect(()=>{t&&!r&&(e(!0),o(!0));},[r,t,e]);};var Yl=()=>{let{profile:e}=H(),{setProfileAttributes:t}=reactHooks.usePreferences(),[r,o]=B.useState(!1);B.useEffect(()=>{e&&!r&&(t(e),o(!0));},[e,t,r]);};var Zl="https://notificationsounds.com/storage/sounds/file-sounds-1150-pristine.mp3";async function jl(e){new Audio(e).play().catch(()=>{});}var Gl=e=>{let{API_BASE_URLS:t}=reactHooks._internals,[r,o]=B.useState("home"),[n,i]=B.useState(""),{children:a,disableTextTranslation:s,enableErrorBoundary:l,...u}=e,c={...e,route:r,setRoute:o,category:n,setCategory:i},f=u.baseUrl??(e.dataRegion&&t[e.dataRegion])??t.us;$l({apiKey:u?.apiKey,userId:u?.userId,disableTextTranslation:s,debug:u.debug,baseUrl:f});let m=jsxRuntime.jsx(reactHooks.EngagespotProvider,{options:u,children:a});return jsxRuntime.jsx(Eo,{...c,children:l?jsxRuntime.jsx(reactErrorBoundary.ErrorBoundary,{FallbackComponent:pa,children:m}):m})},Ip=({popover:e})=>{let t=H(),r=reactHooks.useActions(),{disableNotificationChime:o=!0,notificationChimeSrc:n,toast:i,events:a}=t||{},s=i?.toastProps?.renderToast;return reactHooks.useEvent("notificationReceive",l=>{if(e.isOpen&&setTimeout(()=>{r.markAsSeen({pageNo:1});},0),i?.enableToast)if(s)s?.({notificationReceiveEvent:l,toast:sonner.toast});else {let u=i?.toastProps?.message?.(l)??"New Notification",c=i?.toastProps?.description?.(l)??l?.notification?.title;sonner.toast(u,{description:c,...i?.toastProps?.options?.(l)});}o||jl(n??Zl),a?.notificationReceive?.(l);}),reactHooks.useEvent("notificationDelete",l=>{a?.notificationDelete?.(l);}),reactHooks.useEvent("notificationDeleteAll",l=>{a?.notificationDeleteAll?.(l);}),reactHooks.useEvent("notificationRead",l=>{a?.notificationRead?.(l);}),reactHooks.useEvent("notificationReadAll",l=>{a?.notificationReadAll?.(l);}),reactHooks.useEvent("notificationSeen",l=>{a?.notificationSeen?.(l);}),reactHooks.useEvent("notificationStateChange",l=>{a?.notificationStateChange?.(l);}),null};function Jl(){let e=H(),{panelOnly:t,panel:r,toast:o}=e??{},[n,i]=B__namespace.default.useState(!1),a=Ir({isOpen:r?.isOpen??n,setIsOpen:r?.setIsOpen??i,markAsSeenOnOpen:!0}),s={visible:a.isOpen,setVisible:a.setIsOpen,floatingProps:a.floatingProps,middlewareProps:a.middlewareProps,panelProps:a.panelProps};return Yl(),zl({setVisible:a.setIsOpen}),jsxRuntime.jsxs(jsxRuntime.Fragment,{children:[jsxRuntime.jsx(Ip,{popover:a}),jsxRuntime.jsxs(Rt,{children:[!t&&jsxRuntime.jsx(ko,{buttonProps:a.referenceProps,panelOpen:a.isOpen,renderNotificationIcon:e.renderNotificationIcon}),jsxRuntime.jsx(_n,{...s})]}),o?.enableToast&&jsxRuntime.jsx(sonner.Toaster,{toastOptions:{style:{textAlign:"left"}},...o.toasterProps})]})}function Bp(e){return jsxRuntime.jsx(Gl,{enableErrorBoundary:!0,...e,children:jsxRuntime.jsx(Jl,{})})}var R3={EngagespotStyled:Rt,themeConfig:ze};

exports.Engagespot = Bp;
exports.EngagespotCore = Jl;
exports.EngagespotProvider = Gl;
exports._internals = R3;
Object.keys(reactHooks).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return reactHooks[k]; }
  });
});
