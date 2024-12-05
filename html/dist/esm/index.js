import { a, b } from './chunk-LTN3A6BQ.js';
import te, { css, ThemeProvider } from 'styled-components';
import { EngagespotProvider, useActions, useUnreadCount, usePreferences, _internals, useEvent, useHideBranding, useWebPush, createFilteredFeed } from '@engagespot/react-hooks';
export * from '@engagespot/react-hooks';
import * as M from 'react';
import M__default, { createContext, useState, useContext, useEffect, Fragment as Fragment$1, useLayoutEffect, useRef, useCallback, useMemo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Toaster, toast } from 'sonner';
import * as Zr from 'react-dom';
import Zr__default from 'react-dom';
import { useMedia, useLocalStorage } from 'react-use';
import _c from 'lodash.merge';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { InView } from 'react-intersection-observer';
import { TemplateBlocksRender } from '@engagespot/template-blocks';
import { initReactI18next, useTranslation } from 'react-i18next';
import sp from 'i18next';

/**
  * @engagespot/react-component v2.0.0
  *
  * @license MIT
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
 
var Na=a((M1,Fa)=>{var Qu=typeof Element<"u",Xu=typeof Map=="function",_u=typeof Set=="function",Gu=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Hr(e,t){if(e===t)return !0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return !1;var r,o,n;if(Array.isArray(e)){if(r=e.length,r!=t.length)return !1;for(o=r;o--!==0;)if(!Hr(e[o],t[o]))return !1;return !0}var i;if(Xu&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return !1;for(i=e.entries();!(o=i.next()).done;)if(!t.has(o.value[0]))return !1;for(i=e.entries();!(o=i.next()).done;)if(!Hr(o.value[1],t.get(o.value[0])))return !1;return !0}if(_u&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return !1;for(i=e.entries();!(o=i.next()).done;)if(!t.has(o.value[0]))return !1;return !0}if(Gu&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return !1;for(o=r;o--!==0;)if(e[o]!==t[o])return !1;return !0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(n=Object.keys(e),r=n.length,r!==Object.keys(t).length)return !1;for(o=r;o--!==0;)if(!Object.prototype.hasOwnProperty.call(t,n[o]))return !1;if(Qu&&e instanceof Element)return !1;for(o=r;o--!==0;)if(!((n[o]==="_owner"||n[o]==="__v"||n[o]==="__o")&&e.$$typeof)&&!Hr(e[n[o]],t[n[o]]))return !1;return !0}return e!==e&&t!==t}Fa.exports=function(t,r){try{return Hr(t,r)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}};});var wt=te.div`
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
`;var ze={colors:{brandingPrimary:"white",colorPrimary:"#282c34",colorSecondary:"#686868"},panel:{boxShadow:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",width:"26.25rem",height:"40rem",borderBottomLeftRadius:"11px",borderBottomRightRadius:"11px",borderTopLeftRadius:"11px",borderTopRightRadius:"11px",arrowSize:"10px",arrowInset:"-5px auto auto 0"},feed:{background:"white",placeholderTextColor:"#2c2c2c",height:"30rem",placeholderTextSize:"1rem",placeholderMargin:"1rem 0 0 0",placeholderFontWeight:"300"},feedItem:{border:"1px solid #edf4f2",background:"white",notificationDot:"green",hoverBackground:"#919eab14",headerColor:"#1c1c1c",descriptionColor:"#464646",dateColor:"#888888",placeHolderBackground:"rgb(230, 230, 230)",placeHolderGradient:"linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%)",height:"30rem",padding:"1.25rem",placeholderTextSize:"1rem",notificationDotSize:".5rem",imageSize:"2.5rem",imageRadius:"50%",hoverTransition:"all 0.2s",textContentPadding:"0 .5rem 0 0",textContentMargin:"0 auto 0 1.2rem",headerFontWeight:"400",headerSize:".875rem",headerPadding:"0 0 0.3rem 0",descriptionSize:"0.8rem",descriptionPadding:"0 0 0.3rem 0",dateSize:".75rem",menuMargin:"0 1rem 0 0"},notificationButton:{background:"transparent",hoverBackground:"rgb(176 176 176 / 20%)",iconFill:"#999999",floatingButtonShadow:"0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",iconSize:"1.5rem",outline:"none",margin:"0",padding:"5px",borderWidth:"0",normalButtonRadius:"5px",floatingButtonRadius:"50%",transition:"all .2s"},unreadBadgeCount:{background:"red",color:"white",borderRadius:"50%",fontSize:".6rem",inset:"-4px -4px auto auto",size:"1rem"},headerDropdown:{iconFill:"black",background:"transparent",hoverBackground:"",menuBackground:"white",menuShadow:"0 0 8px 0 rgba(0, 0, 0, 0.14)",menuItemTextColor:"#282c34",menuItemHoverBackground:"#edf4f2",iconWidth:".6rem",iconHeight:".7rem",margin:"0 .5rem 0 0",padding:".5rem",borderWidth:"0",outline:"none",transition:"all 0.2s",menuBorderRadius:"2px",menuItemPadding:"0.5rem 0.7rem"},dropdown:{iconFill:"#888888",background:"transparent",hoverBackground:"rgb(230, 230, 230)",menuBackground:"white",menuShadow:"0 0 8px 0 rgba(0, 0, 0, 0.14)",menuItemTextColor:"#282c34",menuItemHoverBackground:"#edf4f2",iconWidth:".5rem",iconHeight:".6rem",margin:"0 .5rem 0 0",padding:".5rem",borderWidth:"0",outline:"none",transition:"all 0.2s",menuBorderRadius:"2px",menuItemPadding:"0.5rem 0.7rem"},jumpToTop:{background:"white",iconFill:"#888888",shadow:"0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",iconSize:"1rem",inset:"1.5rem 7rem auto auto",borderRadius:"50%",padding:"0.7rem",margin:"0",transition:"all ease-in-out 0.5s"},header:{fontColor:"#212B36",closeButtonBackground:"transparent",fontSize:"1.175rem",fontWeight:"700",height:"3rem",closeButtonColor:"black",padding:"2rem 1rem",closeButtonOutline:"none",closeButtonPadding:"5px",closeButtonFontSize:"1.6rem",closeButtonMargin:"0",lineHeight:"1.75rem"},footer:{background:"white",fontColor:"#484848",preferenceButtonColor:"#484848",border:"1px solid rgb(230, 230, 230)",preferenceButtonHoverBackground:"rgb(230, 230, 230)",fontWeight:"400",height:"3rem",padding:"0.5rem 1rem",fontSize:"0.8rem",linkMargin:"0 0.5rem 0 auto",linkSize:"1.5rem",preferenceButtonMargin:"0 0 0 auto",preferenceButtonSize:"1.2rem",preferenceButtonPadding:".2rem",preferenceButtonHoverTransition:"all 0.2s",linkRadius:"3px"},toggle:{background:"rgba(196, 195, 195, 0.55)",activeColor:"#16a085",dotColor:"rgb(255, 255, 255);"},preference:{fontColor:"#1c1c1c",background:"white",height:"30rem",fontWeight:"400",padding:"1.2rem 1.5rem 1.2rem 1.5rem",fontSize:"1rem"},preferenceModal:{overlayBackground:"#2b2b2b",headingColor:"#1c1c1c",background:"rgba(255, 255, 255, 0.8)",closeButtonColor:"#bbb9b9",textPrimaryColor:"#1c1c1c",textSecondaryColor:"#525252",buttonPrimaryColor:"white",buttonPrimaryBackgroundColor:"#1abc9c",buttonPrimaryHoverBackgroundColor:"#1a9c82",buttonSecondaryColor:"#4e4e4e",buttonSecondaryBackgroundColor:"transparent",buttonSecondaryHoverBackgroundColor:"#cfcfcf",overlayOpacity:".6",height:"35%",backdropFilter:"blur(1px)",borderRadius:"1.5rem 1.5rem 0 0",padding:"1.2rem 2rem 1.2rem 2rem",textAlign:"center",headerMargin:"0 2rem",headerFontSize:"1rem",closeButtonSize:".6rem",textPrimaryMargin:"0.5rem 2rem",textPrimaryFontSize:".9rem",textSecondaryMargin:"1rem 0 0 0",textSecondaryFontSize:".8rem",primaryButtonFontWeight:"600",primaryButtonPadding:"0.6rem 4.5rem",primaryButtonBorderRadius:"10px",primaryButtonMargin:"0.6rem 0 0.2rem 0",primaryButtonTransition:"all 0.2s"},tab:{gap:"1.3rem",background:"#ffffff",borderBottom:"1px solid  #e0e0e0",buttonColor:"#5f6368",buttonBackground:"none",buttonBorder:"none",buttonHoverColor:"#202124",buttonPadding:"1rem 0.75rem",buttonActiveColor:"#202124",buttonFontSize:"0.875rem",buttonFontWeight:"400",buttonActiveFontWeight:"500",buttonActiveIndicatorHeight:"0.24rem",buttonActiveIndicatorBackground:"black",buttonActiveIndicatorTransition:"transform 0.2s ease-in-out",scrollButtonWidth:"1.75rem",scrollButtonHeight:"1.75rem",scrollButtonBackground:"#f1f3f4",scrollButtonFontSize:"1.125rem",scrollButtonColor:"#5f6368",scrollButtonDisabledColor:"#bdc1c6",scrollButtonBorder:"1px solid #dadada",scrollButtonHoverColor:"#3c4043",scrollButtonHoverBackground:"#e0e3e5"},actionableElement:{button:{primaryButtonBorderRadius:"8px",primaryButtonPadding:"0.575rem 0.9rem",primaryButtonFontWeight:"700",primaryButtonFontSize:"0.875rem",primaryButtonBackground:"black",primaryButtonHoverBackground:"rgba(0, 0, 0, 0.85)",primaryButtonColor:"white",primaryButtonMargin:"0",primaryButtonBorder:"1px solid #212b36",primaryButtonTransition:"all 0.2s",secondaryButtonBorderRadius:"8px",secondaryButtonPadding:"0.575rem 0.9rem",secondaryButtonFontWeight:"700",secondaryButtonFontSize:"0.875rem",secondaryButtonBackground:"white",secondaryButtonHoverBackground:"rgba(255, 255, 255, 0.85)",secondaryButtonColor:"black",secondaryButtonMargin:"0",secondaryButtonBorder:"1px solid #919eab52",secondaryButtonTransition:"all 0.2s"},image:{height:"136px",objectFit:"cover"},ratingStar:{size:"23px"},textArea:{fontSize:"0.75rem",padding:"0.675rem 0.75rem",borderRadius:"6px",border:"1px solid #d9d9dc",maxHeight:"150px",resize:"none",outline:"none",width:"100%",overflow:"auto",focusBorderColor:"#808080",background:"white",color:"black",lineHeight:"normal"}}};var oi=te.div`
  && {
    ${()=>css`
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
`,ni=te.p`
  && {
    ${()=>css`
      color: #34353b;
      font-size: 0.85rem;
      font-weight: bold;
    `}
  }
`,ii=te.p`
  && {
    ${()=>css`
      font-size: 0.75rem;
      border: 0.0625rem solid #f0cec3;
      border-radius: 0.25rem;
      padding: 0.3125rem;
      background: #fbefeb;
      color: #736d6b;
      width: 100%;
    `}
  }
`,ai=te.p`
  && {
    ${()=>css`
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
`;var mr=te.button.withConfig({shouldForwardProp:e=>!["buttonType","hasError"].includes(e)})`
  && {
    ${({theme:{notificationButton:e},buttonType:t,hasError:r})=>css`
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
`;var gr=te.div``,hr=te.div`
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
`,vr=te.div`
  && {
    ${({theme:{panel:e,colors:t,position:r}})=>css`
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
`;function Ye(e){return si(e)?(e.nodeName||"").toLowerCase():"#document"}function se(e){var t;return (e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Me(e){var t;return (t=(si(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function si(e){return e instanceof Node||e instanceof se(e).Node}function $(e){return e instanceof Element||e instanceof se(e).Element}function ie(e){return e instanceof HTMLElement||e instanceof se(e).HTMLElement}function xr(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof se(e).ShadowRoot}function Rt(e){let{overflow:t,overflowX:r,overflowY:o,display:n}=de(e);return /auto|scroll|overlay|hidden|clip/.test(t+o+r)&&!["inline","contents"].includes(n)}function li(e){return ["table","td","th"].includes(Ye(e))}function yr(e){let t=br(),r=de(e);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(r.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(r.contain||"").includes(o))}function ci(e){let t=Re(e);for(;ie(t)&&!ke(t);){if(yr(t))return t;t=Re(t);}return null}function br(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ke(e){return ["html","body","#document"].includes(Ye(e))}function de(e){return se(e).getComputedStyle(e)}function Ht(e){return $(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Re(e){if(Ye(e)==="html")return e;let t=e.assignedSlot||e.parentNode||xr(e)&&e.host||Me(e);return xr(t)?t.host:t}function ui(e){let t=Re(e);return ke(t)?e.ownerDocument?e.ownerDocument.body:e.body:ie(t)&&Rt(t)?t:ui(t)}function Te(e,t,r){var o;t===void 0&&(t=[]),r===void 0&&(r=!0);let n=ui(e),i=n===((o=e.ownerDocument)==null?void 0:o.body),a=se(n);return i?t.concat(a,a.visualViewport||[],Rt(n)?n:[],a.frameElement&&r?Te(a.frameElement):[]):t.concat(n,Te(n,[],r))}function so(e,t){if(!e||!t)return !1;let r=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return !0;if(r&&xr(r)){let o=t;for(;o;){if(e===o)return !0;o=o.parentNode||o.host;}}return !1}function lo(e,t){let r=["mouse","pen"];return r.includes(e)}function fi(e){return "nativeEvent"in e}function di(e){return e.matches("html,body")}function co(e){return e?.ownerDocument||document}function wr(e,t){if(t==null)return !1;if("composedPath"in e)return e.composedPath().includes(t);let r=e;return r.target!=null&&t.contains(r.target)}function Tt(e){return "composedPath"in e?e.composedPath()[0]:e.target}var rc="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function pi(e){return ie(e)&&e.matches(rc)}var Ke=Math.min,Ze=Math.max,zt=Math.round;var Fe=e=>({x:e,y:e}),oc={left:"right",right:"left",bottom:"top",top:"bottom"},nc={start:"end",end:"start"};function mi(e,t,r){return Ze(e,Ke(t,r))}function Yt(e,t){return typeof e=="function"?e(t):e}function et(e){return e.split("-")[0]}function St(e){return e.split("-")[1]}function gi(e){return e==="x"?"y":"x"}function Tr(e){return e==="y"?"height":"width"}function Sr(e){return ["top","bottom"].includes(et(e))?"y":"x"}function Er(e){return gi(Sr(e))}function hi(e,t,r){r===void 0&&(r=!1);let o=St(e),n=Er(e),i=Tr(n),a=n==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=$t(a)),[a,$t(a)]}function vi(e){let t=$t(e);return [Rr(e),t,Rr(t)]}function Rr(e){return e.replace(/start|end/g,t=>nc[t])}function ic(e,t,r){let o=["left","right"],n=["right","left"],i=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return r?t?n:o:t?o:n;case"left":case"right":return t?i:a;default:return []}}function xi(e,t,r,o){let n=St(e),i=ic(et(e),r==="start",o);return n&&(i=i.map(a=>a+"-"+n),t&&(i=i.concat(i.map(Rr)))),i}function $t(e){return e.replace(/left|right|bottom|top/g,t=>oc[t])}function ac(e){return {top:0,right:0,bottom:0,left:0,...e}}function uo(e){return typeof e!="number"?ac(e):{top:e,right:e,bottom:e,left:e}}function tt(e){let{x:t,y:r,width:o,height:n}=e;return {width:o,height:n,top:r,left:t,right:t+o,bottom:r+n,x:t,y:r}}function yi(e,t,r){let{reference:o,floating:n}=e,i=Sr(t),a=Er(t),s=Tr(a),l=et(t),u=i==="y",c=o.x+o.width/2-n.width/2,d=o.y+o.height/2-n.height/2,p=o[s]/2-n[s]/2,f;switch(l){case"top":f={x:c,y:o.y-n.height};break;case"bottom":f={x:c,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:d};break;case"left":f={x:o.x-n.width,y:d};break;default:f={x:o.x,y:o.y};}switch(St(t)){case"start":f[a]-=p*(r&&u?-1:1);break;case"end":f[a]+=p*(r&&u?-1:1);break}return f}var bi=async(e,t,r)=>{let{placement:o="bottom",strategy:n="absolute",middleware:i=[],platform:a}=r,s=i.filter(Boolean),l=await(a.isRTL==null?void 0:a.isRTL(t)),u=await a.getElementRects({reference:e,floating:t,strategy:n}),{x:c,y:d}=yi(u,o,l),p=o,f={},m=0;for(let h=0;h<s.length;h++){let{name:g,fn:y}=s[h],{x:b,y:v,data:x,reset:w}=await y({x:c,y:d,initialPlacement:o,placement:p,strategy:n,middlewareData:f,rects:u,platform:a,elements:{reference:e,floating:t}});c=b??c,d=v??d,f={...f,[g]:{...f[g],...x}},w&&m<=50&&(m++,typeof w=="object"&&(w.placement&&(p=w.placement),w.rects&&(u=w.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:n}):w.rects),{x:c,y:d}=yi(u,p,l)),h=-1);}return {x:c,y:d,placement:p,strategy:n,middlewareData:f}};async function wi(e,t){var r;t===void 0&&(t={});let{x:o,y:n,platform:i,rects:a,elements:s,strategy:l}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:d="floating",altBoundary:p=!1,padding:f=0}=Yt(t,e),m=uo(f),g=s[p?d==="floating"?"reference":"floating":d],y=tt(await i.getClippingRect({element:(r=await(i.isElement==null?void 0:i.isElement(g)))==null||r?g:g.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(s.floating)),boundary:u,rootBoundary:c,strategy:l})),b=d==="floating"?{x:o,y:n,width:a.floating.width,height:a.floating.height}:a.reference,v=await(i.getOffsetParent==null?void 0:i.getOffsetParent(s.floating)),x=await(i.isElement==null?void 0:i.isElement(v))?await(i.getScale==null?void 0:i.getScale(v))||{x:1,y:1}:{x:1,y:1},w=tt(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:b,offsetParent:v,strategy:l}):b);return {top:(y.top-w.top+m.top)/x.y,bottom:(w.bottom-y.bottom+m.bottom)/x.y,left:(y.left-w.left+m.left)/x.x,right:(w.right-y.right+m.right)/x.x}}var Ri=e=>({name:"arrow",options:e,async fn(t){let{x:r,y:o,placement:n,rects:i,platform:a,elements:s,middlewareData:l}=t,{element:u,padding:c=0}=Yt(e,t)||{};if(u==null)return {};let d=uo(c),p={x:r,y:o},f=Er(n),m=Tr(f),h=await a.getDimensions(u),g=f==="y",y=g?"top":"left",b=g?"bottom":"right",v=g?"clientHeight":"clientWidth",x=i.reference[m]+i.reference[f]-p[f]-i.floating[m],w=p[f]-i.reference[f],S=await(a.getOffsetParent==null?void 0:a.getOffsetParent(u)),k=S?S[v]:0;(!k||!await(a.isElement==null?void 0:a.isElement(S)))&&(k=s.floating[v]||i.floating[m]);let N=x/2-w/2,I=k/2-h[m]/2-1,F=Ke(d[y],I),B=Ke(d[b],I),D=F,V=k-h[m]-B,E=k/2-h[m]/2+N,T=mi(D,E,V),C=!l.arrow&&St(n)!=null&&E!==T&&i.reference[m]/2-(E<D?F:B)-h[m]/2<0,R=C?E<D?E-D:E-V:0;return {[f]:p[f]+R,data:{[f]:T,centerOffset:E-T-R,...C&&{alignmentOffset:R}},reset:C}}});var Ti=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,o;let{placement:n,middlewareData:i,rects:a,initialPlacement:s,platform:l,elements:u}=t,{mainAxis:c=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:h=!0,...g}=Yt(e,t);if((r=i.arrow)!=null&&r.alignmentOffset)return {};let y=et(n),b=et(s)===s,v=await(l.isRTL==null?void 0:l.isRTL(u.floating)),x=p||(b||!h?[$t(s)]:vi(s));!p&&m!=="none"&&x.push(...xi(s,h,m,v));let w=[s,...x],S=await wi(t,g),k=[],N=((o=i.flip)==null?void 0:o.overflows)||[];if(c&&k.push(S[y]),d){let D=hi(n,a,v);k.push(S[D[0]],S[D[1]]);}if(N=[...N,{placement:n,overflows:k}],!k.every(D=>D<=0)){var I,F;let D=(((I=i.flip)==null?void 0:I.index)||0)+1,V=w[D];if(V)return {data:{index:D,overflows:N},reset:{placement:V}};let E=(F=N.filter(T=>T.overflows[0]<=0).sort((T,C)=>T.overflows[1]-C.overflows[1])[0])==null?void 0:F.placement;if(!E)switch(f){case"bestFit":{var B;let T=(B=N.map(C=>[C.placement,C.overflows.filter(R=>R>0).reduce((R,W)=>R+W,0)]).sort((C,R)=>C[1]-R[1])[0])==null?void 0:B[0];T&&(E=T);break}case"initialPlacement":E=s;break}if(n!==E)return {reset:{placement:E}}}return {}}}};async function sc(e,t){let{placement:r,platform:o,elements:n}=e,i=await(o.isRTL==null?void 0:o.isRTL(n.floating)),a=et(r),s=St(r),l=Sr(r)==="y",u=["left","top"].includes(a)?-1:1,c=i&&l?-1:1,d=Yt(t,e),{mainAxis:p,crossAxis:f,alignmentAxis:m}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return s&&typeof m=="number"&&(f=s==="end"?m*-1:m),l?{x:f*c,y:p*u}:{x:p*u,y:f*c}}var Si=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,o;let{x:n,y:i,placement:a,middlewareData:s}=t,l=await sc(t,e);return a===((r=s.offset)==null?void 0:r.placement)&&(o=s.arrow)!=null&&o.alignmentOffset?{}:{x:n+l.x,y:i+l.y,data:{...l,placement:a}}}}};function Ci(e){let t=de(e),r=parseFloat(t.width)||0,o=parseFloat(t.height)||0,n=ie(e),i=n?e.offsetWidth:r,a=n?e.offsetHeight:o,s=zt(r)!==i||zt(o)!==a;return s&&(r=i,o=a),{width:r,height:o,$:s}}function ki(e){return $(e)?e:e.contextElement}function Et(e){let t=ki(e);if(!ie(t))return Fe(1);let r=t.getBoundingClientRect(),{width:o,height:n,$:i}=Ci(t),a=(i?zt(r.width):r.width)/o,s=(i?zt(r.height):r.height)/n;return (!a||!Number.isFinite(a))&&(a=1),(!s||!Number.isFinite(s))&&(s=1),{x:a,y:s}}var lc=Fe(0);function Oi(e){let t=se(e);return !br()||!t.visualViewport?lc:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function cc(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==se(e)?!1:t}function Zt(e,t,r,o){t===void 0&&(t=!1),r===void 0&&(r=!1);let n=e.getBoundingClientRect(),i=ki(e),a=Fe(1);t&&(o?$(o)&&(a=Et(o)):a=Et(e));let s=cc(i,r,o)?Oi(i):Fe(0),l=(n.left+s.x)/a.x,u=(n.top+s.y)/a.y,c=n.width/a.x,d=n.height/a.y;if(i){let p=se(i),f=o&&$(o)?se(o):o,m=p,h=m.frameElement;for(;h&&o&&f!==m;){let g=Et(h),y=h.getBoundingClientRect(),b=de(h),v=y.left+(h.clientLeft+parseFloat(b.paddingLeft))*g.x,x=y.top+(h.clientTop+parseFloat(b.paddingTop))*g.y;l*=g.x,u*=g.y,c*=g.x,d*=g.y,l+=v,u+=x,m=se(h),h=m.frameElement;}}return tt({width:c,height:d,x:l,y:u})}var uc=[":popover-open",":modal"];function po(e){return uc.some(t=>{try{return e.matches(t)}catch{return !1}})}function fc(e){let{elements:t,rect:r,offsetParent:o,strategy:n}=e,i=n==="fixed",a=Me(o),s=t?po(t.floating):!1;if(o===a||s&&i)return r;let l={scrollLeft:0,scrollTop:0},u=Fe(1),c=Fe(0),d=ie(o);if((d||!d&&!i)&&((Ye(o)!=="body"||Rt(a))&&(l=Ht(o)),ie(o))){let p=Zt(o);u=Et(o),c.x=p.x+o.clientLeft,c.y=p.y+o.clientTop;}return {width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-l.scrollLeft*u.x+c.x,y:r.y*u.y-l.scrollTop*u.y+c.y}}function dc(e){return Array.from(e.getClientRects())}function Mi(e){return Zt(Me(e)).left+Ht(e).scrollLeft}function pc(e){let t=Me(e),r=Ht(e),o=e.ownerDocument.body,n=Ze(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),i=Ze(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight),a=-r.scrollLeft+Mi(e),s=-r.scrollTop;return de(o).direction==="rtl"&&(a+=Ze(t.clientWidth,o.clientWidth)-n),{width:n,height:i,x:a,y:s}}function mc(e,t){let r=se(e),o=Me(e),n=r.visualViewport,i=o.clientWidth,a=o.clientHeight,s=0,l=0;if(n){i=n.width,a=n.height;let u=br();(!u||u&&t==="fixed")&&(s=n.offsetLeft,l=n.offsetTop);}return {width:i,height:a,x:s,y:l}}function gc(e,t){let r=Zt(e,!0,t==="fixed"),o=r.top+e.clientTop,n=r.left+e.clientLeft,i=ie(e)?Et(e):Fe(1),a=e.clientWidth*i.x,s=e.clientHeight*i.y,l=n*i.x,u=o*i.y;return {width:a,height:s,x:l,y:u}}function Ei(e,t,r){let o;if(t==="viewport")o=mc(e,r);else if(t==="document")o=pc(Me(e));else if($(t))o=gc(t,r);else {let n=Oi(e);o={...t,x:t.x-n.x,y:t.y-n.y};}return tt(o)}function Fi(e,t){let r=Re(e);return r===t||!$(r)||ke(r)?!1:de(r).position==="fixed"||Fi(r,t)}function hc(e,t){let r=t.get(e);if(r)return r;let o=Te(e,[],!1).filter(s=>$(s)&&Ye(s)!=="body"),n=null,i=de(e).position==="fixed",a=i?Re(e):e;for(;$(a)&&!ke(a);){let s=de(a),l=yr(a);!l&&s.position==="fixed"&&(n=null),(i?!l&&!n:!l&&s.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||Rt(a)&&!l&&Fi(e,a))?o=o.filter(c=>c!==a):n=s,a=Re(a);}return t.set(e,o),o}function vc(e){let{element:t,boundary:r,rootBoundary:o,strategy:n}=e,a=[...r==="clippingAncestors"?po(t)?[]:hc(t,this._c):[].concat(r),o],s=a[0],l=a.reduce((u,c)=>{let d=Ei(t,c,n);return u.top=Ze(d.top,u.top),u.right=Ke(d.right,u.right),u.bottom=Ke(d.bottom,u.bottom),u.left=Ze(d.left,u.left),u},Ei(t,s,n));return {width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function xc(e){let{width:t,height:r}=Ci(e);return {width:t,height:r}}function yc(e,t,r){let o=ie(t),n=Me(t),i=r==="fixed",a=Zt(e,!0,i,t),s={scrollLeft:0,scrollTop:0},l=Fe(0);if(o||!o&&!i)if((Ye(t)!=="body"||Rt(n))&&(s=Ht(t)),o){let d=Zt(t,!0,i,t);l.x=d.x+t.clientLeft,l.y=d.y+t.clientTop;}else n&&(l.x=Mi(n));let u=a.left+s.scrollLeft-l.x,c=a.top+s.scrollTop-l.y;return {x:u,y:c,width:a.width,height:a.height}}function fo(e){return de(e).position==="static"}function Pi(e,t){return !ie(e)||de(e).position==="fixed"?null:t?t(e):e.offsetParent}function Ni(e,t){let r=se(e);if(po(e))return r;if(!ie(e)){let n=Re(e);for(;n&&!ke(n);){if($(n)&&!fo(n))return n;n=Re(n);}return r}let o=Pi(e,t);for(;o&&li(o)&&fo(o);)o=Pi(o,t);return o&&ke(o)&&fo(o)&&!yr(o)?r:o||ci(e)||r}var bc=async function(e){let t=this.getOffsetParent||Ni,r=this.getDimensions,o=await r(e.floating);return {reference:yc(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function wc(e){return de(e).direction==="rtl"}var Pr={convertOffsetParentRelativeRectToViewportRelativeRect:fc,getDocumentElement:Me,getClippingRect:vc,getOffsetParent:Ni,getElementRects:bc,getClientRects:dc,getDimensions:xc,getScale:Et,isElement:$,isRTL:wc};var Di=Si;var Ii=Ti;var mo=Ri;var Cr=(e,t,r)=>{let o=new Map,n={platform:Pr,...r},i={...n.platform,_c:o};return bi(e,t,{...n,platform:i})};var kr=typeof document<"u"?useLayoutEffect:useEffect;function Or(e,t){if(e===t)return !0;if(typeof e!=typeof t)return !1;if(typeof e=="function"&&e.toString()===t.toString())return !0;let r,o,n;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==t.length)return !1;for(o=r;o--!==0;)if(!Or(e[o],t[o]))return !1;return !0}if(n=Object.keys(e),r=n.length,r!==Object.keys(t).length)return !1;for(o=r;o--!==0;)if(!{}.hasOwnProperty.call(t,n[o]))return !1;for(o=r;o--!==0;){let i=n[o];if(!(i==="_owner"&&e.$$typeof)&&!Or(e[i],t[i]))return !1}return !0}return e!==e&&t!==t}function Li(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Wi(e,t){let r=Li(e);return Math.round(t*r)/r}function Bi(e){let t=M.useRef(e);return kr(()=>{t.current=e;}),t}function Ai(e){e===void 0&&(e={});let{placement:t="bottom",strategy:r="absolute",middleware:o=[],platform:n,elements:{reference:i,floating:a}={},transform:s=!0,whileElementsMounted:l,open:u}=e,[c,d]=M.useState({x:0,y:0,strategy:r,placement:t,middlewareData:{},isPositioned:!1}),[p,f]=M.useState(o);Or(p,o)||f(o);let[m,h]=M.useState(null),[g,y]=M.useState(null),b=M.useCallback(R=>{R!==S.current&&(S.current=R,h(R));},[]),v=M.useCallback(R=>{R!==k.current&&(k.current=R,y(R));},[]),x=i||m,w=a||g,S=M.useRef(null),k=M.useRef(null),N=M.useRef(c),I=l!=null,F=Bi(l),B=Bi(n),D=M.useCallback(()=>{if(!S.current||!k.current)return;let R={placement:t,strategy:r,middleware:p};B.current&&(R.platform=B.current),Cr(S.current,k.current,R).then(W=>{let Y={...W,isPositioned:!0};V.current&&!Or(N.current,Y)&&(N.current=Y,Zr.flushSync(()=>{d(Y);}));});},[p,t,r,B]);kr(()=>{u===!1&&N.current.isPositioned&&(N.current.isPositioned=!1,d(R=>({...R,isPositioned:!1})));},[u]);let V=M.useRef(!1);kr(()=>(V.current=!0,()=>{V.current=!1;}),[]),kr(()=>{if(x&&(S.current=x),w&&(k.current=w),x&&w){if(F.current)return F.current(x,w,D);D();}},[x,w,D,F,I]);let E=M.useMemo(()=>({reference:S,floating:k,setReference:b,setFloating:v}),[b,v]),T=M.useMemo(()=>({reference:x,floating:w}),[x,w]),C=M.useMemo(()=>{let R={position:r,left:0,top:0};if(!T.floating)return R;let W=Wi(T.floating,c.x),Y=Wi(T.floating,c.y);return s?{...R,transform:"translate("+W+"px, "+Y+"px)",...Li(T.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:W,top:Y}},[r,s,T.floating,c.x,c.y]);return M.useMemo(()=>({...c,update:D,refs:E,elements:T,floatingStyles:C}),[c,D,E,T,C])}var Ec=e=>{function t(r){return {}.hasOwnProperty.call(r,"current")}return {name:"arrow",options:e,fn(r){let{element:o,padding:n}=typeof e=="function"?e(r):e;return o&&t(o)?o.current!=null?mo({element:o.current,padding:n}).fn(r):{}:o?mo({element:o,padding:n}).fn(r):{}}}},Mr=(e,t)=>({...Di(e),options:[e,t]});var go=(e,t)=>({...Ii(e),options:[e,t]});var ho=(e,t)=>({...Ec(e),options:[e,t]});var Xi={...M},kc=Xi.useInsertionEffect,Oc=kc||(e=>e());function Pt(e){let t=M.useRef(()=>{});return Oc(()=>{t.current=e;}),M.useCallback(function(){for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return t.current==null?void 0:t.current(...o)},[])}var yo=typeof document<"u"?useLayoutEffect:useEffect;var Hi=!1,Bc=0,$i=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Bc++;function Vc(){let[e,t]=M.useState(()=>Hi?$i():void 0);return yo(()=>{e==null&&t($i());},[]),M.useEffect(()=>{Hi=!0;},[]),e}var Uc=Xi.useId,Lc=Uc||Vc;function Ac(){let e=new Map;return {emit(t,r){var o;(o=e.get(t))==null||o.forEach(n=>n(r));},on(t,r){e.set(t,[...e.get(t)||[],r]);},off(t,r){var o;e.set(t,((o=e.get(t))==null?void 0:o.filter(n=>n!==r))||[]);}}}var Hc=M.createContext(null),$c=M.createContext(null),zc=()=>{var e;return ((e=M.useContext(Hc))==null?void 0:e.id)||null},_i=()=>M.useContext($c);function Yc(e){return "data-floating-ui-"+e}function vo(e,t){let r=e.filter(n=>{var i;return n.parentId===t&&((i=n.context)==null?void 0:i.open)}),o=r;for(;o.length;)o=e.filter(n=>{var i;return (i=o)==null?void 0:i.some(a=>{var s;return n.parentId===a.id&&((s=n.context)==null?void 0:s.open)})}),r=r.concat(o);return r}function zi(e){return ie(e.target)&&e.target.tagName==="BUTTON"}function Yi(e){return pi(e)}function Gi(e,t){t===void 0&&(t={});let{open:r,onOpenChange:o,dataRef:n,elements:{domReference:i}}=e,{enabled:a=!0,event:s="click",toggle:l=!0,ignoreMouse:u=!1,keyboardHandlers:c=!0}=t,d=M.useRef(),p=M.useRef(!1);return M.useMemo(()=>a?{reference:{onPointerDown(f){d.current=f.pointerType;},onMouseDown(f){f.button===0&&(lo(d.current)&&u||s!=="click"&&(r&&l&&(!n.current.openEvent||n.current.openEvent.type==="mousedown")?o(!1,f.nativeEvent,"click"):(f.preventDefault(),o(!0,f.nativeEvent,"click"))));},onClick(f){if(s==="mousedown"&&d.current){d.current=void 0;return}lo(d.current)&&u||(r&&l&&(!n.current.openEvent||n.current.openEvent.type==="click")?o(!1,f.nativeEvent,"click"):o(!0,f.nativeEvent,"click"));},onKeyDown(f){d.current=void 0,!(f.defaultPrevented||!c||zi(f))&&(f.key===" "&&!Yi(i)&&(f.preventDefault(),p.current=!0),f.key==="Enter"&&o(!(r&&l),f.nativeEvent,"click"));},onKeyUp(f){f.defaultPrevented||!c||zi(f)||Yi(i)||f.key===" "&&p.current&&(p.current=!1,o(!(r&&l),f.nativeEvent,"click"));}}}:{},[a,n,s,u,c,i,l,r,o])}var Zc={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},jc={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Zi=e=>{var t,r;return {escapeKey:typeof e=="boolean"?e:(t=e?.escapeKey)!=null?t:!1,outsidePress:typeof e=="boolean"?e:(r=e?.outsidePress)!=null?r:!0}};function Ji(e,t){t===void 0&&(t={});let{open:r,onOpenChange:o,elements:{reference:n,domReference:i,floating:a},dataRef:s}=e,{enabled:l=!0,escapeKey:u=!0,outsidePress:c=!0,outsidePressEvent:d="pointerdown",referencePress:p=!1,referencePressEvent:f="pointerdown",ancestorScroll:m=!1,bubbles:h,capture:g}=t,y=_i(),b=Pt(typeof c=="function"?c:()=>!1),v=typeof c=="function"?b:c,x=M.useRef(!1),w=M.useRef(!1),{escapeKey:S,outsidePress:k}=Zi(h),{escapeKey:N,outsidePress:I}=Zi(g),F=Pt(E=>{var T;if(!r||!l||!u||E.key!=="Escape")return;let C=(T=s.current.floatingContext)==null?void 0:T.nodeId,R=y?vo(y.nodesRef.current,C):[];if(!S&&(E.stopPropagation(),R.length>0)){let W=!0;if(R.forEach(Y=>{var me;if((me=Y.context)!=null&&me.open&&!Y.context.dataRef.current.__escapeKeyBubbles){W=!1;return}}),!W)return}o(!1,fi(E)?E.nativeEvent:E,"escape-key");}),B=Pt(E=>{var T;let C=()=>{var R;F(E),(R=Tt(E))==null||R.removeEventListener("keydown",C);};(T=Tt(E))==null||T.addEventListener("keydown",C);}),D=Pt(E=>{var T;let C=x.current;x.current=!1;let R=w.current;if(w.current=!1,d==="click"&&R||C||typeof v=="function"&&!v(E))return;let W=Tt(E),Y="["+Yc("inert")+"]",me=co(a).querySelectorAll(Y),ue=$(W)?W:null;for(;ue&&!ke(ue);){let Z=Re(ue);if(ke(Z)||!$(Z))break;ue=Z;}if(me.length&&$(W)&&!di(W)&&!so(W,a)&&Array.from(me).every(Z=>!so(ue,Z)))return;if(ie(W)&&a){let Z=W.clientWidth>0&&W.scrollWidth>W.clientWidth,fe=W.clientHeight>0&&W.scrollHeight>W.clientHeight,Ce=fe&&E.offsetX>W.clientWidth;if(fe&&de(W).direction==="rtl"&&(Ce=E.offsetX<=W.offsetWidth-W.clientWidth),Ce||Z&&E.offsetY>W.clientHeight)return}let He=(T=s.current.floatingContext)==null?void 0:T.nodeId,bt=y&&vo(y.nodesRef.current,He).some(Z=>{var fe;return wr(E,(fe=Z.context)==null?void 0:fe.elements.floating)});if(wr(E,a)||wr(E,i)||bt)return;let Oe=y?vo(y.nodesRef.current,He):[];if(Oe.length>0){let Z=!0;if(Oe.forEach(fe=>{var Ce;if((Ce=fe.context)!=null&&Ce.open&&!fe.context.dataRef.current.__outsidePressBubbles){Z=!1;return}}),!Z)return}o(!1,E,"outside-press");}),V=Pt(E=>{var T;let C=()=>{var R;D(E),(R=Tt(E))==null||R.removeEventListener(d,C);};(T=Tt(E))==null||T.addEventListener(d,C);});return M.useEffect(()=>{if(!r||!l)return;s.current.__escapeKeyBubbles=S,s.current.__outsidePressBubbles=k;function E(R){o(!1,R,"ancestor-scroll");}let T=co(a);u&&T.addEventListener("keydown",N?B:F,N),v&&T.addEventListener(d,I?V:D,I);let C=[];return m&&($(i)&&(C=Te(i)),$(a)&&(C=C.concat(Te(a))),!$(n)&&n&&n.contextElement&&(C=C.concat(Te(n.contextElement)))),C=C.filter(R=>{var W;return R!==((W=T.defaultView)==null?void 0:W.visualViewport)}),C.forEach(R=>{R.addEventListener("scroll",E,{passive:!0});}),()=>{u&&T.removeEventListener("keydown",N?B:F,N),v&&T.removeEventListener(d,I?V:D,I),C.forEach(R=>{R.removeEventListener("scroll",E);});}},[s,a,i,n,u,v,d,r,o,m,l,S,k,F,N,B,D,I,V]),M.useEffect(()=>{x.current=!1;},[v,d]),M.useMemo(()=>l?{reference:{onKeyDown:F,[Zc[f]]:E=>{p&&o(!1,E.nativeEvent,"reference-press");}},floating:{onKeyDown:F,onMouseDown(){w.current=!0;},onMouseUp(){w.current=!0;},[jc[d]]:()=>{x.current=!0;}}}:{},[l,p,d,f,o,F])}function Qc(e){let{open:t=!1,onOpenChange:r,elements:o}=e,n=Lc(),i=M.useRef({}),[a]=M.useState(()=>Ac()),s=zc()!=null,[l,u]=M.useState(o.reference),c=Pt((f,m,h)=>{i.current.openEvent=f?m:void 0,a.emit("openchange",{open:f,event:m,reason:h,nested:s}),r?.(f,m,h);}),d=M.useMemo(()=>({setPositionReference:u}),[]),p=M.useMemo(()=>({reference:l||o.reference||null,floating:o.floating||null,domReference:o.reference}),[l,o.reference,o.floating]);return M.useMemo(()=>({dataRef:i,open:t,onOpenChange:c,elements:p,events:a,floatingId:n,refs:d}),[t,c,p,a,n,d])}function qi(e){e===void 0&&(e={});let{nodeId:t}=e,r=Qc({...e,elements:{reference:null,floating:null,...e.elements}}),o=e.rootContext||r,n=o.elements,[i,a]=M.useState(null),[s,l]=M.useState(null),c=n?.reference||i,d=M.useRef(null),p=_i();yo(()=>{c&&(d.current=c);},[c]);let f=Ai({...e,elements:{...n,...s&&{reference:s}}}),m=M.useCallback(v=>{let x=$(v)?{getBoundingClientRect:()=>v.getBoundingClientRect(),contextElement:v}:v;l(x),f.refs.setReference(x);},[f.refs]),h=M.useCallback(v=>{($(v)||v===null)&&(d.current=v,a(v)),($(f.refs.reference.current)||f.refs.reference.current===null||v!==null&&!$(v))&&f.refs.setReference(v);},[f.refs]),g=M.useMemo(()=>({...f.refs,setReference:h,setPositionReference:m,domReference:d}),[f.refs,h,m]),y=M.useMemo(()=>({...f.elements,domReference:c}),[f.elements,c]),b=M.useMemo(()=>({...f,...o,refs:g,elements:y,nodeId:t}),[f,g,y,t,o]);return yo(()=>{o.dataRef.current.floatingContext=b;let v=p?.nodesRef.current.find(x=>x.id===t);v&&(v.context=b);}),M.useMemo(()=>({...f,context:b,refs:g,elements:y}),[f,g,y,b])}var ji="active",Qi="selected";function xo(e,t,r){let o=new Map,n=r==="item",i=e;if(n&&e){let{[ji]:a,[Qi]:s,...l}=e;i=l;}return {...r==="floating"&&{tabIndex:-1},...i,...t.map(a=>{let s=a?a[r]:null;return typeof s=="function"?e?s(e):null:s}).concat(e).reduce((a,s)=>(s&&Object.entries(s).forEach(l=>{let[u,c]=l;if(!(n&&[ji,Qi].includes(u)))if(u.indexOf("on")===0){if(o.has(u)||o.set(u,[]),typeof c=="function"){var d;(d=o.get(u))==null||d.push(c),a[u]=function(){for(var p,f=arguments.length,m=new Array(f),h=0;h<f;h++)m[h]=arguments[h];return (p=o.get(u))==null?void 0:p.map(g=>g(...m)).find(g=>g!==void 0)};}}else a[u]=c;}),a),{})}}function Ki(e){e===void 0&&(e=[]);let t=e,r=M.useCallback(i=>xo(i,e,"reference"),t),o=M.useCallback(i=>xo(i,e,"floating"),t),n=M.useCallback(i=>xo(i,e,"item"),e.map(i=>i?.item));return M.useMemo(()=>({getReferenceProps:r,getFloatingProps:o,getItemProps:n}),[r,o,n])}var Fr=()=>useMedia("(max-width: 768px)");function ea(e={}){return _c(ze,e)}var ra=createContext({}),A=()=>useContext(ra);function bo(e){let{children:t,theme:r,...o}=e;return jsx(ra.Provider,{value:o,children:jsx(ThemeProvider,{theme:ea(r),children:t})})}var Nr=({isOpen:e,setIsOpen:t,placement:r="bottom-end",markAsSeenOnOpen:o=!1})=>{let{panel:n}=A(),i=useActions(),a=useUnreadCount(),s=M__default.useRef(null),l=Fr(),u=99999999999999,c={poper:{position:"fixed",top:0,left:0,zIndex:u,width:"100%",height:"100%"},panel:{height:"100%",width:"100%",borderRadius:"0"},arrow:{display:"none"}},{refs:d,floatingStyles:p,context:f,middlewareData:m}=qi({placement:r,open:e,onOpenChange:v=>{v&&o&&a>0&&setTimeout(()=>{i.markAsSeen({pageNo:1});},1e3),t(v);},middleware:[Mr(l?0:10),go(),ho({element:s})]}),h=Gi(f),g=Ji(f,{enabled:!n?.disableDismiss}),{getReferenceProps:y,getFloatingProps:b}=Ki([g,h]);return {isOpen:e,setIsOpen:t,referenceProps:{setRef:d.setReference,getReferenceProps:()=>y()},floatingProps:{setRef:d.setFloating,getFloatingProps:()=>b(),styles:{...l?c.poper:p,zIndex:u}},panelProps:{styles:{...l&&{...c.panel}}},middlewareProps:{arrow:{setRef:s,middlewareData:m.arrow,styles:{...l&&{...c.arrow}}}}}};var oa=()=>jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"curentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[jsx("circle",{cx:"12",cy:"12",r:"10"}),jsx("path",{d:"m15 9-6 6"}),jsx("path",{d:"m9 9 6 6"})]});var na=()=>jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"red",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[jsx("path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5"}),jsx("path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7"}),jsx("path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}),jsx("path",{d:"m2 2 20 20"})]});var ia=()=>jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[jsx("circle",{cx:"12",cy:"12",r:"10"}),jsx("path",{d:"M12 16v-4"}),jsx("path",{d:"M12 8h.01"})]});var aa=({error:e})=>{let[t,r]=M__default.useState(!0),{floatingProps:o,middlewareProps:n,panelProps:i,referenceProps:a}=Nr({isOpen:t,setIsOpen:r,placement:"bottom"});return jsxs(wt,{children:[jsx(mr,{buttonType:"normal","aria-label":"Notifications",hasError:!0,ref:a.setRef,...a.getReferenceProps(),children:jsx(na,{})}),jsx(Fragment,{children:t&&jsxs(gr,{style:o.styles,ref:o.setRef,...o.getFloatingProps(),children:[jsx(vr,{ref:n.arrow.setRef,style:{left:n.arrow.middlewareData?.x,top:n.arrow.middlewareData?.y,...n.arrow.styles||{}}}),jsxs(hr,{style:{...i.styles,background:"white",height:"auto",width:"16rem",display:"flex",justifyContent:"flex-start",flexDirection:"column",alignItems:"flex-start",gap:".8rem",padding:"1rem 1rem"},children:[jsxs(oi,{children:[jsx(oa,{}),jsx(ni,{children:"Something went wrong"})]}),jsx(ii,{children:e?.message}),jsxs(ai,{children:[jsx(ia,{}),"Check devtools console for more info"]})]})]})})]})};var sa=te.span`
  && {
    ${({theme:{unreadBadgeCount:e}})=>css`
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
`;function To({count:e}){return jsx(sa,{children:e})}function la(){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",role:"presentation",children:jsxs("g",{transform:"translate(4.615 2.514)",children:[jsx("path",{d:"M7.382,0C2.947,0,1.021,4.015,1.021,6.67c0,1.984.288,1.4-.81,3.82-1.341,3.449,4.051,4.858,7.171,4.858s8.511-1.41,7.171-4.858c-1.1-2.42-.81-1.836-.81-3.82C13.743,4.015,11.815,0,7.382,0Z",transform:"translate(0 0)",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5px",fill:"transparent"}),jsx("path",{d:"M4.62,0A2.992,2.992,0,0,1,0,0",transform:"translate(5.071 17.998)",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5px",fill:"transparent"})]})})}function Ne(e,...t){if(!e)return null;let r=e(...t);return typeof r=="string"?jsx("div",{dangerouslySetInnerHTML:{__html:r}}):r}function Eo({type:e="normal",buttonProps:t,panelOpen:r,renderNotificationIcon:o}){let n=useUnreadCount(),{setRef:i,getReferenceProps:a}=t;return jsxs(mr,{buttonType:e,"aria-label":"Notifications",ref:i,...a(),children:[n&&!r?jsx(To,{count:n}):null,o?Ne(o):jsx(la,{})]})}var Po=function(t){return t.reduce(function(r,o){var n=o[0],i=o[1];return r[n]=i,r},{})},Co=typeof window<"u"&&window.document&&window.document.createElement?M.useLayoutEffect:M.useEffect;var z="top",G="bottom",X="right",j="left",Wr="auto",Qe=[z,G,X,j],De="start",rt="end",ua="clippingParents",Br="viewport",Ct="popper",fa="reference",ko=Qe.reduce(function(e,t){return e.concat([t+"-"+De,t+"-"+rt])},[]),Vr=[].concat(Qe,[Wr]).reduce(function(e,t){return e.concat([t,t+"-"+De,t+"-"+rt])},[]),mu="beforeRead",gu="read",hu="afterRead",vu="beforeMain",xu="main",yu="afterMain",bu="beforeWrite",wu="write",Ru="afterWrite",da=[mu,gu,hu,vu,xu,yu,bu,wu,Ru];function K(e){return e?(e.nodeName||"").toLowerCase():null}function H(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function ge(e){var t=H(e).Element;return e instanceof t||e instanceof Element}function J(e){var t=H(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function kt(e){if(typeof ShadowRoot>"u")return !1;var t=H(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Tu(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var o=t.styles[r]||{},n=t.attributes[r]||{},i=t.elements[r];!J(i)||!K(i)||(Object.assign(i.style,o),Object.keys(n).forEach(function(a){var s=n[a];s===!1?i.removeAttribute(a):i.setAttribute(a,s===!0?"":s);}));});}function Su(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(o){var n=t.elements[o],i=t.attributes[o]||{},a=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:r[o]),s=a.reduce(function(l,u){return l[u]="",l},{});!J(n)||!K(n)||(Object.assign(n.style,s),Object.keys(i).forEach(function(l){n.removeAttribute(l);}));});}}var pa={name:"applyStyles",enabled:!0,phase:"write",fn:Tu,effect:Su,requires:["computeStyles"]};function ee(e){return e.split("-")[0]}var Se=Math.max,ot=Math.min,Ie=Math.round;function Ot(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Qt(){return !/^((?!chrome|android).)*safari/i.test(Ot())}function he(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var o=e.getBoundingClientRect(),n=1,i=1;t&&J(e)&&(n=e.offsetWidth>0&&Ie(o.width)/e.offsetWidth||1,i=e.offsetHeight>0&&Ie(o.height)/e.offsetHeight||1);var a=ge(e)?H(e):window,s=a.visualViewport,l=!Qt()&&r,u=(o.left+(l&&s?s.offsetLeft:0))/n,c=(o.top+(l&&s?s.offsetTop:0))/i,d=o.width/n,p=o.height/i;return {width:d,height:p,top:c,right:u+d,bottom:c+p,left:u,x:u,y:c}}function nt(e){var t=he(e),r=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:o}}function Xt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return !0;if(r&&kt(r)){var o=t;do{if(o&&e.isSameNode(o))return !0;o=o.parentNode||o.host;}while(o)}return !1}function le(e){return H(e).getComputedStyle(e)}function Oo(e){return ["table","td","th"].indexOf(K(e))>=0}function oe(e){return ((ge(e)?e.ownerDocument:e.document)||window.document).documentElement}function We(e){return K(e)==="html"?e:e.assignedSlot||e.parentNode||(kt(e)?e.host:null)||oe(e)}function ma(e){return !J(e)||le(e).position==="fixed"?null:e.offsetParent}function Eu(e){var t=/firefox/i.test(Ot()),r=/Trident/i.test(Ot());if(r&&J(e)){var o=le(e);if(o.position==="fixed")return null}var n=We(e);for(kt(n)&&(n=n.host);J(n)&&["html","body"].indexOf(K(n))<0;){var i=le(n);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return n;n=n.parentNode;}return null}function Ee(e){for(var t=H(e),r=ma(e);r&&Oo(r)&&le(r).position==="static";)r=ma(r);return r&&(K(r)==="html"||K(r)==="body"&&le(r).position==="static")?t:r||Eu(e)||t}function it(e){return ["top","bottom"].indexOf(e)>=0?"x":"y"}function at(e,t,r){return Se(e,ot(t,r))}function ga(e,t,r){var o=at(e,t,r);return o>r?r:o}function _t(){return {top:0,right:0,bottom:0,left:0}}function Gt(e){return Object.assign({},_t(),e)}function Jt(e,t){return t.reduce(function(r,o){return r[o]=e,r},{})}var Pu=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,Gt(typeof t!="number"?t:Jt(t,Qe))};function Cu(e){var t,r=e.state,o=e.name,n=e.options,i=r.elements.arrow,a=r.modifiersData.popperOffsets,s=ee(r.placement),l=it(s),u=[j,X].indexOf(s)>=0,c=u?"height":"width";if(!(!i||!a)){var d=Pu(n.padding,r),p=nt(i),f=l==="y"?z:j,m=l==="y"?G:X,h=r.rects.reference[c]+r.rects.reference[l]-a[l]-r.rects.popper[c],g=a[l]-r.rects.reference[l],y=Ee(i),b=y?l==="y"?y.clientHeight||0:y.clientWidth||0:0,v=h/2-g/2,x=d[f],w=b-p[c]-d[m],S=b/2-p[c]/2+v,k=at(x,S,w),N=l;r.modifiersData[o]=(t={},t[N]=k,t.centerOffset=k-S,t);}}function ku(e){var t=e.state,r=e.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||Xt(t.elements.popper,n)&&(t.elements.arrow=n));}var ha={name:"arrow",enabled:!0,phase:"main",fn:Cu,effect:ku,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ve(e){return e.split("-")[1]}var Ou={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Mu(e,t){var r=e.x,o=e.y,n=t.devicePixelRatio||1;return {x:Ie(r*n)/n||0,y:Ie(o*n)/n||0}}function va(e){var t,r=e.popper,o=e.popperRect,n=e.placement,i=e.variation,a=e.offsets,s=e.position,l=e.gpuAcceleration,u=e.adaptive,c=e.roundOffsets,d=e.isFixed,p=a.x,f=p===void 0?0:p,m=a.y,h=m===void 0?0:m,g=typeof c=="function"?c({x:f,y:h}):{x:f,y:h};f=g.x,h=g.y;var y=a.hasOwnProperty("x"),b=a.hasOwnProperty("y"),v=j,x=z,w=window;if(u){var S=Ee(r),k="clientHeight",N="clientWidth";if(S===H(r)&&(S=oe(r),le(S).position!=="static"&&s==="absolute"&&(k="scrollHeight",N="scrollWidth")),S=S,n===z||(n===j||n===X)&&i===rt){x=G;var I=d&&S===w&&w.visualViewport?w.visualViewport.height:S[k];h-=I-o.height,h*=l?1:-1;}if(n===j||(n===z||n===G)&&i===rt){v=X;var F=d&&S===w&&w.visualViewport?w.visualViewport.width:S[N];f-=F-o.width,f*=l?1:-1;}}var B=Object.assign({position:s},u&&Ou),D=c===!0?Mu({x:f,y:h},H(r)):{x:f,y:h};if(f=D.x,h=D.y,l){var V;return Object.assign({},B,(V={},V[x]=b?"0":"",V[v]=y?"0":"",V.transform=(w.devicePixelRatio||1)<=1?"translate("+f+"px, "+h+"px)":"translate3d("+f+"px, "+h+"px, 0)",V))}return Object.assign({},B,(t={},t[x]=b?h+"px":"",t[v]=y?f+"px":"",t.transform="",t))}function Fu(e){var t=e.state,r=e.options,o=r.gpuAcceleration,n=o===void 0?!0:o,i=r.adaptive,a=i===void 0?!0:i,s=r.roundOffsets,l=s===void 0?!0:s,u={placement:ee(t.placement),variation:ve(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,va(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,va(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement});}var xa={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Fu,data:{}};var Ur={passive:!0};function Nu(e){var t=e.state,r=e.instance,o=e.options,n=o.scroll,i=n===void 0?!0:n,a=o.resize,s=a===void 0?!0:a,l=H(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach(function(c){c.addEventListener("scroll",r.update,Ur);}),s&&l.addEventListener("resize",r.update,Ur),function(){i&&u.forEach(function(c){c.removeEventListener("scroll",r.update,Ur);}),s&&l.removeEventListener("resize",r.update,Ur);}}var ya={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Nu,data:{}};var Du={left:"right",right:"left",bottom:"top",top:"bottom"};function Mt(e){return e.replace(/left|right|bottom|top/g,function(t){return Du[t]})}var Iu={start:"end",end:"start"};function Lr(e){return e.replace(/start|end/g,function(t){return Iu[t]})}function st(e){var t=H(e),r=t.pageXOffset,o=t.pageYOffset;return {scrollLeft:r,scrollTop:o}}function lt(e){return he(oe(e)).left+st(e).scrollLeft}function Mo(e,t){var r=H(e),o=oe(e),n=r.visualViewport,i=o.clientWidth,a=o.clientHeight,s=0,l=0;if(n){i=n.width,a=n.height;var u=Qt();(u||!u&&t==="fixed")&&(s=n.offsetLeft,l=n.offsetTop);}return {width:i,height:a,x:s+lt(e),y:l}}function Fo(e){var t,r=oe(e),o=st(e),n=(t=e.ownerDocument)==null?void 0:t.body,i=Se(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),a=Se(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-o.scrollLeft+lt(e),l=-o.scrollTop;return le(n||r).direction==="rtl"&&(s+=Se(r.clientWidth,n?n.clientWidth:0)-i),{width:i,height:a,x:s,y:l}}function ct(e){var t=le(e),r=t.overflow,o=t.overflowX,n=t.overflowY;return /auto|scroll|overlay|hidden/.test(r+n+o)}function Ar(e){return ["html","body","#document"].indexOf(K(e))>=0?e.ownerDocument.body:J(e)&&ct(e)?e:Ar(We(e))}function Xe(e,t){var r;t===void 0&&(t=[]);var o=Ar(e),n=o===((r=e.ownerDocument)==null?void 0:r.body),i=H(o),a=n?[i].concat(i.visualViewport||[],ct(o)?o:[]):o,s=t.concat(a);return n?s:s.concat(Xe(We(a)))}function Ft(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Wu(e,t){var r=he(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function ba(e,t,r){return t===Br?Ft(Mo(e,r)):ge(t)?Wu(t,r):Ft(Fo(oe(e)))}function Bu(e){var t=Xe(We(e)),r=["absolute","fixed"].indexOf(le(e).position)>=0,o=r&&J(e)?Ee(e):e;return ge(o)?t.filter(function(n){return ge(n)&&Xt(n,o)&&K(n)!=="body"}):[]}function No(e,t,r,o){var n=t==="clippingParents"?Bu(e):[].concat(t),i=[].concat(n,[r]),a=i[0],s=i.reduce(function(l,u){var c=ba(e,u,o);return l.top=Se(c.top,l.top),l.right=ot(c.right,l.right),l.bottom=ot(c.bottom,l.bottom),l.left=Se(c.left,l.left),l},ba(e,a,o));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function qt(e){var t=e.reference,r=e.element,o=e.placement,n=o?ee(o):null,i=o?ve(o):null,a=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,l;switch(n){case z:l={x:a,y:t.y-r.height};break;case G:l={x:a,y:t.y+t.height};break;case X:l={x:t.x+t.width,y:s};break;case j:l={x:t.x-r.width,y:s};break;default:l={x:t.x,y:t.y};}var u=n?it(n):null;if(u!=null){var c=u==="y"?"height":"width";switch(i){case De:l[u]=l[u]-(t[c]/2-r[c]/2);break;case rt:l[u]=l[u]+(t[c]/2-r[c]/2);break;}}return l}function Pe(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=o===void 0?e.placement:o,i=r.strategy,a=i===void 0?e.strategy:i,s=r.boundary,l=s===void 0?ua:s,u=r.rootBoundary,c=u===void 0?Br:u,d=r.elementContext,p=d===void 0?Ct:d,f=r.altBoundary,m=f===void 0?!1:f,h=r.padding,g=h===void 0?0:h,y=Gt(typeof g!="number"?g:Jt(g,Qe)),b=p===Ct?fa:Ct,v=e.rects.popper,x=e.elements[m?b:p],w=No(ge(x)?x:x.contextElement||oe(e.elements.popper),l,c,a),S=he(e.elements.reference),k=qt({reference:S,element:v,strategy:"absolute",placement:n}),N=Ft(Object.assign({},v,k)),I=p===Ct?N:S,F={top:w.top-I.top+y.top,bottom:I.bottom-w.bottom+y.bottom,left:w.left-I.left+y.left,right:I.right-w.right+y.right},B=e.modifiersData.offset;if(p===Ct&&B){var D=B[n];Object.keys(F).forEach(function(V){var E=[X,G].indexOf(V)>=0?1:-1,T=[z,G].indexOf(V)>=0?"y":"x";F[V]+=D[T]*E;});}return F}function Do(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=r.boundary,i=r.rootBoundary,a=r.padding,s=r.flipVariations,l=r.allowedAutoPlacements,u=l===void 0?Vr:l,c=ve(o),d=c?s?ko:ko.filter(function(m){return ve(m)===c}):Qe,p=d.filter(function(m){return u.indexOf(m)>=0});p.length===0&&(p=d);var f=p.reduce(function(m,h){return m[h]=Pe(e,{placement:h,boundary:n,rootBoundary:i,padding:a})[ee(h)],m},{});return Object.keys(f).sort(function(m,h){return f[m]-f[h]})}function Vu(e){if(ee(e)===Wr)return [];var t=Mt(e);return [Lr(e),t,Lr(t)]}function Uu(e){var t=e.state,r=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var n=r.mainAxis,i=n===void 0?!0:n,a=r.altAxis,s=a===void 0?!0:a,l=r.fallbackPlacements,u=r.padding,c=r.boundary,d=r.rootBoundary,p=r.altBoundary,f=r.flipVariations,m=f===void 0?!0:f,h=r.allowedAutoPlacements,g=t.options.placement,y=ee(g),b=y===g,v=l||(b||!m?[Mt(g)]:Vu(g)),x=[g].concat(v).reduce(function(Oe,Z){return Oe.concat(ee(Z)===Wr?Do(t,{placement:Z,boundary:c,rootBoundary:d,padding:u,flipVariations:m,allowedAutoPlacements:h}):Z)},[]),w=t.rects.reference,S=t.rects.popper,k=new Map,N=!0,I=x[0],F=0;F<x.length;F++){var B=x[F],D=ee(B),V=ve(B)===De,E=[z,G].indexOf(D)>=0,T=E?"width":"height",C=Pe(t,{placement:B,boundary:c,rootBoundary:d,altBoundary:p,padding:u}),R=E?V?X:j:V?G:z;w[T]>S[T]&&(R=Mt(R));var W=Mt(R),Y=[];if(i&&Y.push(C[D]<=0),s&&Y.push(C[R]<=0,C[W]<=0),Y.every(function(Oe){return Oe})){I=B,N=!1;break}k.set(B,Y);}if(N)for(var me=m?3:1,ue=function(Z){var fe=x.find(function(Ce){var $e=k.get(Ce);if($e)return $e.slice(0,Z).every(function(oo){return oo})});if(fe)return I=fe,"break"},He=me;He>0;He--){var bt=ue(He);if(bt==="break")break}t.placement!==I&&(t.modifiersData[o]._skip=!0,t.placement=I,t.reset=!0);}}var wa={name:"flip",enabled:!0,phase:"main",fn:Uu,requiresIfExists:["offset"],data:{_skip:!1}};function Ra(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Ta(e){return [z,X,G,j].some(function(t){return e[t]>=0})}function Lu(e){var t=e.state,r=e.name,o=t.rects.reference,n=t.rects.popper,i=t.modifiersData.preventOverflow,a=Pe(t,{elementContext:"reference"}),s=Pe(t,{altBoundary:!0}),l=Ra(a,o),u=Ra(s,n,i),c=Ta(l),d=Ta(u);t.modifiersData[r]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":d});}var Sa={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Lu};function Au(e,t,r){var o=ee(e),n=[j,z].indexOf(o)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,a=i[0],s=i[1];return a=a||0,s=(s||0)*n,[j,X].indexOf(o)>=0?{x:s,y:a}:{x:a,y:s}}function Hu(e){var t=e.state,r=e.options,o=e.name,n=r.offset,i=n===void 0?[0,0]:n,a=Vr.reduce(function(c,d){return c[d]=Au(d,t.rects,i),c},{}),s=a[t.placement],l=s.x,u=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=u),t.modifiersData[o]=a;}var Ea={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Hu};function $u(e){var t=e.state,r=e.name;t.modifiersData[r]=qt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement});}var Pa={name:"popperOffsets",enabled:!0,phase:"read",fn:$u,data:{}};function Io(e){return e==="x"?"y":"x"}function zu(e){var t=e.state,r=e.options,o=e.name,n=r.mainAxis,i=n===void 0?!0:n,a=r.altAxis,s=a===void 0?!1:a,l=r.boundary,u=r.rootBoundary,c=r.altBoundary,d=r.padding,p=r.tether,f=p===void 0?!0:p,m=r.tetherOffset,h=m===void 0?0:m,g=Pe(t,{boundary:l,rootBoundary:u,padding:d,altBoundary:c}),y=ee(t.placement),b=ve(t.placement),v=!b,x=it(y),w=Io(x),S=t.modifiersData.popperOffsets,k=t.rects.reference,N=t.rects.popper,I=typeof h=="function"?h(Object.assign({},t.rects,{placement:t.placement})):h,F=typeof I=="number"?{mainAxis:I,altAxis:I}:Object.assign({mainAxis:0,altAxis:0},I),B=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,D={x:0,y:0};if(S){if(i){var V,E=x==="y"?z:j,T=x==="y"?G:X,C=x==="y"?"height":"width",R=S[x],W=R+g[E],Y=R-g[T],me=f?-N[C]/2:0,ue=b===De?k[C]:N[C],He=b===De?-N[C]:-k[C],bt=t.elements.arrow,Oe=f&&bt?nt(bt):{width:0,height:0},Z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:_t(),fe=Z[E],Ce=Z[T],$e=at(0,k[C],Oe[C]),oo=v?k[C]/2-me-$e-fe-F.mainAxis:ue-$e-fe-F.mainAxis,zl=v?-k[C]/2+me+$e+Ce+F.mainAxis:He+$e+Ce+F.mainAxis,no=t.elements.arrow&&Ee(t.elements.arrow),Yl=no?x==="y"?no.clientTop||0:no.clientLeft||0:0,Xn=(V=B?.[x])!=null?V:0,Zl=R+oo-Xn-Yl,jl=R+zl-Xn,_n=at(f?ot(W,Zl):W,R,f?Se(Y,jl):Y);S[x]=_n,D[x]=_n-R;}if(s){var Gn,Ql=x==="x"?z:j,Xl=x==="x"?G:X,qe=S[w],fr=w==="y"?"height":"width",Jn=qe+g[Ql],qn=qe-g[Xl],io=[z,j].indexOf(y)!==-1,Kn=(Gn=B?.[w])!=null?Gn:0,ei=io?Jn:qe-k[fr]-N[fr]-Kn+F.altAxis,ti=io?qe+k[fr]+N[fr]-Kn-F.altAxis:qn,ri=f&&io?ga(ei,qe,ti):at(f?ei:Jn,qe,f?ti:qn);S[w]=ri,D[w]=ri-qe;}t.modifiersData[o]=D;}}var Ca={name:"preventOverflow",enabled:!0,phase:"main",fn:zu,requiresIfExists:["offset"]};function Wo(e){return {scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Bo(e){return e===H(e)||!J(e)?st(e):Wo(e)}function Yu(e){var t=e.getBoundingClientRect(),r=Ie(t.width)/e.offsetWidth||1,o=Ie(t.height)/e.offsetHeight||1;return r!==1||o!==1}function Vo(e,t,r){r===void 0&&(r=!1);var o=J(t),n=J(t)&&Yu(t),i=oe(t),a=he(e,n,r),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return (o||!o&&!r)&&((K(t)!=="body"||ct(i))&&(s=Bo(t)),J(t)?(l=he(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):i&&(l.x=lt(i))),{x:a.left+s.scrollLeft-l.x,y:a.top+s.scrollTop-l.y,width:a.width,height:a.height}}function Zu(e){var t=new Map,r=new Set,o=[];e.forEach(function(i){t.set(i.name,i);});function n(i){r.add(i.name);var a=[].concat(i.requires||[],i.requiresIfExists||[]);a.forEach(function(s){if(!r.has(s)){var l=t.get(s);l&&n(l);}}),o.push(i);}return e.forEach(function(i){r.has(i.name)||n(i);}),o}function Uo(e){var t=Zu(e);return da.reduce(function(r,o){return r.concat(t.filter(function(n){return n.phase===o}))},[])}function Lo(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e());});})),t}}function Ao(e){var t=e.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(t).map(function(r){return t[r]})}var ka={placement:"bottom",modifiers:[],strategy:"absolute"};function Oa(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return !t.some(function(o){return !(o&&typeof o.getBoundingClientRect=="function")})}function Ma(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,o=r===void 0?[]:r,n=t.defaultOptions,i=n===void 0?ka:n;return function(s,l,u){u===void 0&&(u=i);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},ka,i),modifiersData:{},elements:{reference:s,popper:l},attributes:{},styles:{}},d=[],p=!1,f={state:c,setOptions:function(y){var b=typeof y=="function"?y(c.options):y;h(),c.options=Object.assign({},i,c.options,b),c.scrollParents={reference:ge(s)?Xe(s):s.contextElement?Xe(s.contextElement):[],popper:Xe(l)};var v=Uo(Ao([].concat(o,c.options.modifiers)));return c.orderedModifiers=v.filter(function(x){return x.enabled}),m(),f.update()},forceUpdate:function(){if(!p){var y=c.elements,b=y.reference,v=y.popper;if(Oa(b,v)){c.rects={reference:Vo(b,Ee(v),c.options.strategy==="fixed"),popper:nt(v)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(F){return c.modifiersData[F.name]=Object.assign({},F.data)});for(var x=0;x<c.orderedModifiers.length;x++){if(c.reset===!0){c.reset=!1,x=-1;continue}var w=c.orderedModifiers[x],S=w.fn,k=w.options,N=k===void 0?{}:k,I=w.name;typeof S=="function"&&(c=S({state:c,options:N,name:I,instance:f})||c);}}}},update:Lo(function(){return new Promise(function(g){f.forceUpdate(),g(c);})}),destroy:function(){h(),p=!0;}};if(!Oa(s,l))return f;f.setOptions(u).then(function(g){!p&&u.onFirstUpdate&&u.onFirstUpdate(g);});function m(){c.orderedModifiers.forEach(function(g){var y=g.name,b=g.options,v=b===void 0?{}:b,x=g.effect;if(typeof x=="function"){var w=x({state:c,name:y,instance:f,options:v}),S=function(){};d.push(w||S);}});}function h(){d.forEach(function(g){return g()}),d=[];}return f}}var ju=[ya,Pa,xa,pa,Ea,wa,Ca,ha,Sa],Ho=Ma({defaultModifiers:ju});var Ia=b(Na());var Ju=[],$o=function(t,r,o){o===void 0&&(o={});var n=M.useRef(null),i={onFirstUpdate:o.onFirstUpdate,placement:o.placement||"bottom",strategy:o.strategy||"absolute",modifiers:o.modifiers||Ju},a=M.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),s=a[0],l=a[1],u=M.useMemo(function(){return {name:"updateState",enabled:!0,phase:"write",fn:function(f){var m=f.state,h=Object.keys(m.elements);Zr.flushSync(function(){l({styles:Po(h.map(function(g){return [g,m.styles[g]||{}]})),attributes:Po(h.map(function(g){return [g,m.attributes[g]]}))});});},requires:["computeStyles"]}},[]),c=M.useMemo(function(){var p={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[u,{name:"applyStyles",enabled:!1}])};return (0, Ia.default)(n.current,p)?n.current||p:(n.current=p,p)},[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,u]),d=M.useRef();return Co(function(){d.current&&d.current.setOptions(c);},[c]),Co(function(){if(!(t==null||r==null)){var p=o.createPopper||Ho,f=p(t,r,c);return d.current=f,function(){f.destroy(),d.current=null;}}},[t,r,o.createPopper]),{state:d.current?d.current.state:null,styles:s.styles,attributes:s.attributes,update:d.current?d.current.update:null,forceUpdate:d.current?d.current.forceUpdate:null}};var Wa=te.button.withConfig({shouldForwardProp:e=>!["dropdownTheme"].includes(e)})`
  && {
    ${({theme:{colors:e},dropdownTheme:t})=>css`
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
`,Ba=te.div`
  z-index: 1000000;
`,Va=te.div.withConfig({shouldForwardProp:e=>!["dropdownTheme","visible"].includes(e)})`
  && {
    ${({visible:e,dropdownTheme:t})=>css`
      display: ${e?"flex":"none"};
      flex-direction: column;
      background: ${t.menuBackground};
      border-radius: ${t.menuBorderRadius};
      font-family: sans-serif;
      box-shadow: ${t.menuShadow};
    `}
  }
`,Ua=te.div`
  && {
    ${({theme:{dropdown:e}})=>css`
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
`;function La(){return jsxs("svg",{id:"light",enableBackground:"new 0 0 24 24",height:"512",viewBox:"0 0 24 24",width:"512",xmlns:"http://www.w3.org/2000/svg",children:[jsx("g",{children:jsx("path",{d:"m12 6c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"})}),jsx("g",{children:jsx("path",{d:"m12 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"})}),jsx("g",{children:jsx("path",{d:"m12 24c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"})})]})}function er({items:e=[],isVisible:t,theme:r}){let[o,n]=useState(!1),i=useRef(null),a=useRef(null),{styles:s,attributes:l,update:u}=$o(i.current,a.current,{placement:"bottom",modifiers:[{name:"preventOverflow",enabled:!0},{name:"offset",enabled:!0,options:{offset:[-10,10]}}]});useEffect(()=>(document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c);}),[]);function c(f){let m=f.target;i.current?.contains(m)||a.current?.contains(m)||n(!1);}function d(){n(!o),u?.();}function p(f,m){f.stopPropagation(),m(),n(!1);}return jsxs(Fragment$1,{children:[jsx(Wa,{"aria-label":"More",ref:i,dropdownTheme:r,style:{visibility:t?"visible":"hidden"},onClick:d,children:jsx(La,{})}),jsx(Ba,{ref:a,style:s.popper,...l.popper,children:jsx(Va,{style:s.offset,visible:o,dropdownTheme:r,children:e.map(f=>jsx(Ua,{"data-name":f.name,onClick:m=>{p(m,f.action);},children:f.name},f.name))})})]})}function Ha(e,t){if(e==null)return {};var r={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.includes(o))continue;r[o]=e[o];}return r}function zr(e,t){return zr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},zr(e,t)}function $a(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,zr(e,t);}var Yo={disabled:!1};var Zo=M__default.createContext(null);var za=function(t){return t.scrollTop};var tr="unmounted",ut="exited",ft="entering",It="entered",jo="exiting",Be=function(e){$a(t,e);function t(o,n){var i;i=e.call(this,o,n)||this;var a=n,s=a&&!a.isMounting?o.enter:o.appear,l;return i.appearStatus=null,o.in?s?(l=ut,i.appearStatus=ft):l=It:o.unmountOnExit||o.mountOnEnter?l=tr:l=ut,i.state={status:l},i.nextCallback=null,i}t.getDerivedStateFromProps=function(n,i){var a=n.in;return a&&i.status===tr?{status:ut}:null};var r=t.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus);},r.componentDidUpdate=function(n){var i=null;if(n!==this.props){var a=this.state.status;this.props.in?a!==ft&&a!==It&&(i=ft):(a===ft||a===It)&&(i=jo);}this.updateStatus(!1,i);},r.componentWillUnmount=function(){this.cancelNextCallback();},r.getTimeouts=function(){var n=this.props.timeout,i,a,s;return i=a=s=n,n!=null&&typeof n!="number"&&(i=n.exit,a=n.enter,s=n.appear!==void 0?n.appear:a),{exit:i,enter:a,appear:s}},r.updateStatus=function(n,i){if(n===void 0&&(n=!1),i!==null)if(this.cancelNextCallback(),i===ft){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:Zr__default.findDOMNode(this);a&&za(a);}this.performEnter(n);}else this.performExit();else this.props.unmountOnExit&&this.state.status===ut&&this.setState({status:tr});},r.performEnter=function(n){var i=this,a=this.props.enter,s=this.context?this.context.isMounting:n,l=this.props.nodeRef?[s]:[Zr__default.findDOMNode(this),s],u=l[0],c=l[1],d=this.getTimeouts(),p=s?d.appear:d.enter;if(!n&&!a||Yo.disabled){this.safeSetState({status:It},function(){i.props.onEntered(u);});return}this.props.onEnter(u,c),this.safeSetState({status:ft},function(){i.props.onEntering(u,c),i.onTransitionEnd(p,function(){i.safeSetState({status:It},function(){i.props.onEntered(u,c);});});});},r.performExit=function(){var n=this,i=this.props.exit,a=this.getTimeouts(),s=this.props.nodeRef?void 0:Zr__default.findDOMNode(this);if(!i||Yo.disabled){this.safeSetState({status:ut},function(){n.props.onExited(s);});return}this.props.onExit(s),this.safeSetState({status:jo},function(){n.props.onExiting(s),n.onTransitionEnd(a.exit,function(){n.safeSetState({status:ut},function(){n.props.onExited(s);});});});},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null);},r.safeSetState=function(n,i){i=this.setNextCallback(i),this.setState(n,i);},r.setNextCallback=function(n){var i=this,a=!0;return this.nextCallback=function(s){a&&(a=!1,i.nextCallback=null,n(s));},this.nextCallback.cancel=function(){a=!1;},this.nextCallback},r.onTransitionEnd=function(n,i){this.setNextCallback(i);var a=this.props.nodeRef?this.props.nodeRef.current:Zr__default.findDOMNode(this),s=n==null&&!this.props.addEndListener;if(!a||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],u=l[0],c=l[1];this.props.addEndListener(u,c);}n!=null&&setTimeout(this.nextCallback,n);},r.render=function(){var n=this.state.status;if(n===tr)return null;var i=this.props,a=i.children;i.in;i.mountOnEnter;i.unmountOnExit;i.appear;i.enter;i.exit;i.timeout;i.addEndListener;i.onEnter;i.onEntering;i.onEntered;i.onExit;i.onExiting;i.onExited;i.nodeRef;var S=Ha(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return M__default.createElement(Zo.Provider,{value:null},typeof a=="function"?a(n,S):M__default.cloneElement(M__default.Children.only(a),S))},t}(M__default.Component);Be.contextType=Zo;Be.propTypes={};function Dt(){}Be.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Dt,onEntering:Dt,onEntered:Dt,onExit:Dt,onExiting:Dt,onExited:Dt};Be.UNMOUNTED=tr;Be.EXITED=ut;Be.ENTERING=ft;Be.ENTERED=It;Be.EXITING=jo;var Qo=Be;var Za=te.div.withConfig({shouldForwardProp:e=>!["isLoading","empty"].includes(e)})`
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
`,ja=te.p`
  && {
    ${({theme:e})=>css`
      font-size: ${e.feed.placeholderTextSize};
      margin: ${e.feed.placeholderMargin};
      font-weight: ${e.feed.placeholderFontWeight};
      color: ${e.feed.placeholderTextColor};
    `}
  }
`,Qa=te.div`
  && {
    ${({theme:e})=>css`
      position: absolute;
      inset: ${e.jumpToTop.inset};
    `}
  }
`;var Xa=te.button`
  && {
    ${({theme:{jumpToTop:e}})=>css`
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
`;function Ga(){return jsxs("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 330 330",children:[jsxs("g",{id:"XMLID_85_",children:[jsx("path",{id:"XMLID_86_",d:`M25.607,190.607L164.997,51.214l139.396,139.393C307.323,193.536,311.161,195,315,195
		c3.839,0,7.678-1.464,10.606-4.394c5.858-5.858,5.858-15.355,0-21.213l-150.003-150C172.79,16.58,168.976,15,164.997,15
		s-7.794,1.581-10.607,4.394l-149.997,150c-5.858,5.858-5.858,15.355,0,21.213C10.251,196.465,19.749,196.465,25.607,190.607z`}),jsx("path",{id:"XMLID_87_",d:`M175.603,139.393c-2.813-2.813-6.628-4.393-10.606-4.393c-3.979,0-7.794,1.581-10.607,4.394l-149.996,150
		c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213-0.001l139.39-139.393l139.397,139.394
		C307.323,313.536,311.161,315,315,315c3.839,0,7.678-1.464,10.606-4.394c5.858-5.858,5.858-15.355,0-21.213L175.603,139.393z`})]}),jsx("g",{}),jsx("g",{}),jsx("g",{}),jsx("g",{}),jsx("g",{}),jsx("g",{}),jsx("g",{}),jsx("g",{}),jsx("g",{}),jsx("g",{}),jsx("g",{}),jsx("g",{}),jsx("g",{}),jsx("g",{}),jsx("g",{})]})}function _o({onClick:e}){return jsx(Xa,{"aria-label":"Jump to Top",onClick:e,children:jsx(Ga,{})})}var qa=te.div.withConfig({shouldForwardProp:e=>!["clickable"].includes(e)})`
  && {
    ${({theme:{feedItem:e},clickable:t})=>css`
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
`,Ka=te.img`
  && {
    ${({theme:{feedItem:e}})=>css`
      height: ${e.imageSize};
      width: ${e.imageSize};
      flex-shrink: 0;
      border-radius: ${e.imageRadius};
    `}
  }
`,Go=te.div`
  && {
    ${({theme:{feedItem:e}})=>css`
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
`,Jo=te.h4`
  && {
    ${({theme:{feedItem:e}})=>css`
      font-weight: ${e.headerFontWeight};
      font-size: ${e.headerSize};
      padding: ${e.headerPadding};
      color: ${e.headerColor};
    `}
  }
`,qo=te.p`
  && {
    ${({theme:{feedItem:e}})=>css`
      font-size: ${e.descriptionSize};
      padding: ${e.descriptionPadding};
      color: ${e.descriptionColor};
    `}
  }
`,es=te.p`
  && {
    ${({theme:{feedItem:e}})=>css`
      font-size: ${e.dateSize};
      color: ${e.dateColor};
    `}
  }
`,ts=te.div`
  && {
    ${()=>css`
      margin-top: 0.75rem;
      width: 100%;
    `}
  }
`,rs=te.div`
  && {
    ${({theme:{feedItem:e}})=>css`
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
`,os=te.div`
  && {
    ${({theme:{feedItem:e}})=>css`
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
`,ns=te.div`
  && {
    ${({theme:{feedItem:e}})=>css`
      height: ${e.imageSize};
      width: ${e.imageSize};
      flex-shrink: 0;
      background: ${e.placeHolderBackground};
      border-radius: ${e.imageRadius};
    `}
  }
`,is=te(Go)`
  && {
    flex: 1;
    align-items: stretch;
  }
`,as=te(Jo)`
  && {
    ${({theme:{feedItem:e}})=>css`
      background: ${e.placeHolderBackground};
      color: ${e.placeHolderBackground};
      margin: 0 0 0.8rem 0 !important;
      padding: 0;
    `}
  }
`,ss=te(qo)`
  && {
    ${({theme:{feedItem:e}})=>css`
      background: ${e.placeHolderBackground};
      color: ${e.placeHolderBackground};
      margin: 0 12rem 0 0 !important;
      padding: 0;
    `}
  }
`,jr=te.span.withConfig({shouldForwardProp:e=>!["circle"].includes(e)})`
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
`;var ls="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0idXJsKCNwYXR0ZXJuMCkiLz4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJwYXR0ZXJuMCIgcGF0dGVybkNvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgo8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZTBfMjAyOV8yNjcwIiB0cmFuc2Zvcm09InNjYWxlKDAuMDA3ODEyNSkiLz4KPC9wYXR0ZXJuPgo8aW1hZ2UgaWQ9ImltYWdlMF8yMDI5XzI2NzAiIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0JEQUFRQ0F3TURBZ1FEQXdNRUJBUUVCUWtHQlFVRkJRc0lDQVlKRFFzTkRRMExEQXdPRUJRUkRnOFREd3dNRWhnU0V4VVdGeGNYRGhFWkd4a1dHaFFXRnhiLzJ3QkRBUVFFQkFVRkJRb0dCZ29XRHd3UEZoWVdGaFlXRmhZV0ZoWVdGaFlXRmhZV0ZoWVdGaFlXRmhZV0ZoWVdGaFlXRmhZV0ZoWVdGaFlXRmhZV0ZoWVdGaGIvd2dBUkNBQ0FBSUFEQVJFQUFoRUJBeEVCLzhRQUhBQUFBZ0lEQVFFQUFBQUFBQUFBQUFBQUFBVURCQUlHQndFSS84UUFIQUVBQVFVQkFRRUFBQUFBQUFBQUFBQUFBQUlEQkFVR0FRY0kvOW9BREFNQkFBSVFBeEFBQUFEN0VlYkFBQUFBQUFBQUFBQUFBQUFBQUFBOEE0ZVJYaFpsSVpBQUFBQUFBQUF4N3lGQ3FXTjBVZWZ0cGVxbDYzSkxpejZTbmswVlVkQUFBQUFNQW85U3I4OTJhN0xYMmJpWm5FVHVzMjVETnA5bXpwYUt4cWFRQUFBRHdLWFVyR1gxUGtQcEN5UEtvUm5xaTErV1RLWm1Ydmtpb2RQdzlvOVY4OU9nQUFFZlJUMUsrdm53ZWZiZXBPUnlhemlkaWVSY1cxd1NKTDM3Slg3eStydWk3cno3TjFrQUFDdjNpWlNkV3orNDZDNVdwMjNQbTVUUDBKRnRKUnI1WWxRdm9iRmFyZHRwbTA3Nk5zdGN5QUI0RlBxVWlrcHF2Uzcwd1VHbmw3RDFCdVJhVTFYYlhPMHRuYXdLOHlGc002bEFBQXFkNG5XbGFjMm1ydTY4T2ZTWmUwMUM1dWRkOTdNdHQ5YTA5eWJWWkFBQUJnY1g5NG1XaXkzSWFWZCtzalNWcVhGZkZRdURpWkUzQ2ZuSnVvQUFBQUFnNktWSVZkNXJsWDZJL1RGb3BZVXJMOCt2M3hkSGU0ajBBQUFBQU1RcGRTbFdsZkF0blR5ZVcxRi9JOHoweTd6TDlwdkk2QUFBQUFCNEZWU05VdUtIbmVweEhMTlhpTXNCN0dYV1AycTY4LzY1anZUZHl6MjFaMTF5SFFBQUl3cUxiNUI2TjRYb09peFNxUTFWVzlheXZvT3JTNE82M1BucnlITjJHQmU3em1kL3YrUTlTQUF4NlVPcDAyK3hYRXZVUG5pQWNpVXVQaThJbHNTNi9xMkw5V1lwamFGcWZOYytSZm9UeW42ZlpRcllDSG9uVWptVzU4YjV2dFBLcXZYNjYzY1ZLeEZWK3V4OGZadHdadVJyNll2Yy9OL2ZkNnpIb2dIL3hBQTVFQUFCQXdNQ0JBTUVDQVVGQUFBQUFBQUJBZ01FQUFVUkJpRUhFakZCSUZHQkV5SnhrUWdVTURKU1lhSEJFQlVqUWtRa1FMR3kwZi9hQUFnQkFRQUJQd0QvQUd1YTVoUWRSdmxZb0xRY2dLQit6S2dNMDQrRWdra0FBYms5cWR1QkpLVy9tZjJGSWY1c2xTcWJjVFRUZ3h2VGE4ZEZFR21uUnVGZllMWHlpbjVJR2F2RW9vSmFCTzI2L2o1ZWxKbGtFNVZ0VGMzSDkxTXpSNTB4TUhuVEVrSHZURDR4VUowSzVrSHFQRW80RlRIY0JWTnVjOHZ6Q2NxUHBrL3NLbXJLMXJVU1RrbW5uZ2dLSk80cDY0aEdjWk5HOFNNa05Oa250Z0VrK2d6UzV1cEN5dHhpSW9CSUpKV1FrQURPNUpPdzJxRHJiV0xTL2FJc1JueHdja3hIa09MeDNJUVNGRVk3QUUxb2JWRWZVRnJNcVBsSlRzNGc1Q2tFSEJCQndRUVJnZ2dFSElJcTJYK0YvTjBReStnTy9oeU1ueFBIQ1RWd1hzcW9qZzl1N2s0eXlvZkxmL2dHamJMZzhEL1RTd2tqUE00ZmV4OEJrL1BGWEd6UjJZcnI4dVM0VU5KSzFFWVNBQUNTZHNuWUFtdUNYRlBTSEVIV2QyMC9ick5QaFNyWXIvUEtTcHdkaUFDU01pb2NCaHRQdW9BSDVBQ2hFWWRZVzA2Z0Z0U1NDQ05pRHNRYW1hbjRXWFBqblA0ZDI2Vk90ZDNnS1EyWmlYZ2xoeDVSeHlOcEpKVVFWSkJyaDFFblFOWjNhQk9sSmxPdEZEU253a3BMdVFDQ29aT1ZZSUJQZkFyaWpwTVJWeGRSMkdLVXlZN3lFU2tzZzVjU1RnTElIVWc0QlBrYWpjLzFkSFBzdmxHUjVIdVBDK3JDVFZ4WDk2dFZYRjJQTlpnTUVBRmFQYUt4bm1KVU0vOEFnOHFrREsxR3I5RVRNdGN1R29sSWZaVzFudWtLQlRuMHI2TmZBVFV1aXVOOSsxM3FPYmJpSkxiakVGbUc4cGVVclVuSzFrcEhMc2hPQlQwaERHNmdTQVJuQnh0bmFnNEZCWVFjakFJUG1EMDlhZjhBbzVhcG5mUzBScjh6b2pGZ2J1alZ5ZldYU0gvNlJDdzJFWVBWYVIzQTVhMEJITW5VYzY2TEc4dVNYL2dnYkpIcUFLdnpxazZZdUpTY0VSVmtIOHdDUlhESzl5Ymd3dUxLVVZxYUdVcU81d08yVDJ3ZkIvYWFsS3dGVk5QM3F2TnVhdUtrUGUwRGI3ZUNTZGdyQjJPVHQyR1FjZWVha0RDaitZQitkU2U5TFJoUk5UNFFrYzRXb2hDaGdnYlpGUVdtbUdBMjJNSkFBSFVuYXI0MisvQWRqeGlBcDBjcFVjN0E3SDlLMHZCYXQwUDJTRkZTemdxVXJxY2RBQU9nSFlWYzJuWlduNTdESUtuSEdDaElTQmtrN2JaSUhmenJRbGhWYVdWcmV3SEZEQUJJSkFQVWtqYk93R0IwSGhrSXlraXByUjk0MDZuSE1LZ3UvV2JReStOeUVoQy9QSTJQekdEVC9lbnhzYTFUbzZ5WGk1TG15bkx1dytyQVVxRGVwVVFIR3d5bHB3SkpyU2xqdFduZzZtM0NXVk80QzNabHdmbHVFRE9Cek9xVVJRZkJ5YWpQMWFnVEVQWXJJSG9OelRXd0k4dkNVNUJxYXpzcXBiWkJOYWFucGh2cllmSkREMk1uOENoc0ZmRHNhbk1sQjV1cWNiRWJnanNRYWVJUE5Vb2dFMDg2RVpvU2xiZ1ZwdU83SmQ3Z0RjbnRpb3lBaHZsSFFEQThieU1wVlU1bnJUcU1GVmEyNGh5dEZ2d0dub0tabHVrQlpjU1ZoTG1RY0FORWtESUdTUWF0Vjh0bDlzak40dFRxbllraElLQ3RCUXBKNjRLVGdnNy9BQ0lJSkJxZExRbm1KcVRjR0J6Wk5hVGhMdXExdXQ3TW9JQ2w5Ums5aDVtclRFYmpNOGphUUFQbWZqU0FBUEdRQ0RVeG9FS3FhMkFWVktpeFpVUjlxYkZhbE1Cdm1jWmRTQ2xRQjZFSEkzemlydUxIZm0vYU15UFl1QklTRk1xS1NnZGtrRFlZOGlLNGx4Wk9uQzNJYXVxcE1kNXprVUhNWlFTQ1FjZ0FFSEI3Vm92VE5pdkZrWXZ0OXZqNFJJS2kwdzBzSkJTbFJHU2R5Y2tWb2U0YWJqTnJzMWhRZ2dvSlVPYkpJN2tra2tuSkZOcEErd3lNR3BTMDhpanRnZWd4Vit2OXFpQllYSkN5T3plRCt2U3RZY1JGTk1Pc1c1SWI1Z1FTRGxSSGxuc051d0ZTN3ZkVlhGeVpHbXlJOGhaR1hHWENsUngwQndSbjF6U3BPcGIrK2xGeHZVbVF4SFNwd29kSXh0OEFOOEU3bk5RM1pzbGh0ZzNXVVl6UUlianBkd2xzRTVJd044RWtuQk5hSnVLck5KTGpDaWhSSTk4Wnp0MHlhMHh4QWRVMkVUUWwwQUFaT3grWTJxMFgrMnpoaHQ4SVVleXYyUFR4TFdBRFQ4bEtFcVVTQUVna2s5QU81cmlEcjkrWExkaXdDUXdrbkI3S3FiY0pra3FManhPZTFQTmxYTWVwcjZ1bkpxQ29SNHN4UXdQOUk3LzFKL2F1SENMQ2IvZkpWclludHlsdm9STlhJNXcydFlIVnNFNEE3RWdacUtSdlZrbEVEbENqVnVudXRicFdSaXRBYXZ6S1JicHptVXVFSmJVZXhKd0JueUo4Q2pnR3BieFNGVnhPdXFvZWs1UEl2RGtnaGhKNzRKT1NQUUduU1N0WGMwczBUMW84dTVwYVVPdzNtRlpDWFVLUVNOamdnZyt1Q2FDME10SGxHd0d3L0lWd3piNFFYTFNWdWV1MDFhTGc1RWJYS0M1THlFSWRPNmdDTURBTmFxWTRSUXJGTkZwbHFYUEVaUmlscDk5eEljQUpUazdpcmJjMHFUaFd4cHljc1NVcWFjS2VVNUNoNTlqNlZvMjRpN2FZaDNEWXFlWlNWZDhLR3hIb1IvRjg0UWFudWJxcmpUS1BKRGk1L0c2b2V2S1AwelRwKzlUam8zb3U5YUs2OXAxcWE5aU92dWNHdEl5QzNZSTJGNElSanJqb1NLVE01MHFDbk9iM1QzejUxYlpPV1FUNUNtSHM1NzE5SDZhcVRvdDZPci9GbEtIb29CWDhmLy9FQURNUkFRQUJBd0lEQmdRR0FRVUFBQUFBQUFFQ0FBTVJCQ0VGTVVFR0VtRnhnWkVRRXlCUk1ES2hzY0hSRkJVaVFGTGgvOW9BQ0FFQ0FRRS9BUDhBalpBeXVEN3RPdTBzZHBYWWo1bjkxRFdhYWUwTGcrU2YzUnl6K0ZpcFhJMjRzNW9CdXJzQld0N1RTa3NOSVlQK3lidmtOVHYzYjdtN05WKzZ2NmNpb2tjVUExcDlYcU5PNXRUVHd6azluYXRCeDZNM3VhbkE5RTVQbWRLSHFmZ0JYYVBpVXI5NXNRZjlzWGZIVk9yVVpZMnFOM0hXaS80MUc5VUo1NjFFTU5kbjlmTExwcHVRM005UHVlWFUrc0sxZDM1R21uYyt3dnIwcWJLY21UeldtTlpjTldyVjY1K1NLK1F2NjhxdGNKMTBqS0FlTC9XYWhDNGZrbVB2ajBVTTFaMURoRXduTXJSNitOdlZSbU9NSnZVVVRKMStrcUpYRjdjcDZDNFI1aG4wT2RXdURhMjV6Q0o5MTM5aitVcTMyZXRHOTJUSjhNQittOWY2THA5TUNRTit1TW8rSzVxTUloZ0t3WXcxUGdPbXUyMlpIdXZNVEoxNTQzS3Y2V1ZuVy9KWlp5Qm5rN3VEMUs0eHdvYkpQVHgzamdRTjBkaDh4dzVyVFJZV1l4bnpBSHpENlFxTmEyOUs1ZVlMc09NZnkxOTJseHVkSzFPb0xzUU9XY3RSeGxycWhVTlNGaGdtNTdZeXVhMFFhM2kwcmh1RG4wTmozUVNwZmtrZmNyaDE2U3R1VGt4azhNZFBwS0sxV2hsS1RPM3ZuZFBId3BPNm8xS3NjeXZFZmhkZ3p0eWdPRkV6OXM5YTRkb2JPamd3dG03aks4My9BTU9nVVc1VEVpWmNWbzlKSzFtYytic0IwK2tvK0dwdHBKVHJTWkthRkRCajFCL2Vzcnp4NkFmdFJVQ3RIREdaUDFsRlhMWk9PT3RTdEl0TWZ1Vjh1aTFVTEM5S3M2VjYxRUl4d2ZXVWZEWDZtVm1ZRWNpSzQ1K25TbzNMYzQ1SDMyZldzeHFMQTVwVmtoakp2aXZJL0JLSzRsZCtYcFp6T1pqOTZ1YUw1c0NiRkJCTWlPSGx6SzFHbWxwenZDNFhHOWFUUXl2eDc3bHowS2hvSjJMTFB1b0huemZIOEtNVmNCbGVsYVRnMnF1N3BnOGVmdFdnN00yQnpkTzhtSGN5Wk9UamxrcDBsaWR2NWR5SWgwUWYzNVYyMzROcGJQRGkvWWlSU1JuQzRSRTVLOG5EWFp2ZzJsc2NNc3M0RE5pS3VWeTc4czRNRFdwMGtibHRoZ3dkTUdQYXRYMmZ0T1cza2ZEbDdWZjRYcWJHVk1uM1A2K3VNV1RnTXJzRmNJNEREVDJ5Vnd6SjV2OEFIZ1Zic1c0Y2lvdU5taEhyWGJPMlQ0SmU4QWZacmhOdlN4bmViVUVrZDBWRUZEQW1YR0E4RDRYcmZOeFU3TVpHNVhGdURrcmJldEc1dWgxT3ZyOUI4T3ptbCtmcmhUSkVYMTVGQmd3VUh3SzF1aXQ2elRUMDkzUGRrWWNjOFp6dDdVRFd2dWRvb1g3bnlZbmN5aGdGd096dmwzSzBGenRGY3ZSYjBjVzhtY2tSeG5mRlRzSnViMUcwZHhFem11SWFiL0cxVnkxMEZ4NU81K254S0s3STJjUnUzVTVvSGtDdndCZGlveHh6b0FveFVhbkV5NW9oamxTWVVyQlhhcXdRMXBNNmg3aW43WStQLzhRQU5CRUJBQUVEQXdFRkJnUUdBd0FBQUFBQUFRSUFBeEVFSVRFRkJoSVRRVkVnTUdGeGdaRUhFQlN4RlNJeW9kSGhNMEJDLzlvQUNBRURBUUUvQVA4QXJCNUc3VWROZVRhQy9ScHNYWW1XS2ZSOTNtb1JsTjdzUlYyQTVhMHZSQU85ZmN2b2NmVnFGaTNhUDVJZ2ZBeFRGcGpWelRXcmc5OEg0K2YzclVkTmxFWlduSjZlZnVjMTBYcHhhdGVKTS9tVDdIcFJiSzhLdkMyNHB0VTI2YmRkVDBnSGpSUG4vbjNHa3RlTGZqRHlVejhqZHEwRVRCVUNvMnMxNFVJbVpvSHhRcnhkRU9HV1g0QzA2VFJ5TU1tTDhUKzIyYTFlajhDWE9SNFRjYTFPZ2xPeEp4c2lWakNqNWUzMG1SSFd3ejU1RDV0ZnJkUGJ5WlpQb2NmZHIrTFNQNklnZXJ2L0FLcTExcTVxZTlFbW1OK0FFOVRIN05TdXlkMXpVWlN6a2R5clhhQzlidStGTjczbHVIUHBubmlyMStGM1J4dWhnM2NjNHhuT1BodFhSdXBNbVdudnl6R1FvcndtNmZKS3ZzWlhwc09GY2ZMTDdmUXRCYWpwdkZUS2k1OCtGeG55S2pzWXFKa1QxMnJSYVZzTWxjcVlNZW5yL1lxelo3K1ZhbkJpNGFkRm5VdDBUQ2pqZk9lTVk0eHNPYzFya3NhRXRlWVkrcmxmdGxyU3hIVVFIakorOWRlMEZ1MCtMQXhsdy9IT2ZiNlIxcU5pMTRWM1lEQStXUHB3bFFTUms0cURSVm01S0c1VTVNcEs4MXA1eHQzQ2FaQnpqMXhXcTFVOVJKWFk4ZzRQOXRXN3NiRjBuTndDTG11cTlUTlc5MkhBNXp4bjBEeng3T0t4K1dodWQ2M2g1TnFoNS9sM1IzYy9SVDltb3hJanUvVlg5NjdwV01OZFJudDNEemMvYjJzZm5wNzNoT1hoNS96Vm00U01qUlVXaXU4VmYxRVlRVmF1WEc1SmsrZnVNZmwyTTdNVyt0YU85SXVzYmtVQXhrRHpaQUxoWEdTdFYwL1U2RFVTMCtvaUVodzRSSDRpS0pXSDBydXk5SzFWOXNtSGw0S25jbGNjcjd2b003ME5mQnRTWXUrRVVUWnc3Snc0YXM5Um5Zbk9CSWNLTzRtUlIzeTcxMC9XeDFhd1lnaG5iejN4dzFyZXFmcHJrclVJbVRHVjMzVFBGYWpxUDZpNTNKeUZjNE5qWTV3VWU1V01ZcXVBNVY0clY5b3REcHhDWGVUMDQrOWRUN2NYc01iRDNWRTJVY1BxOGcxcHVxYXF4ZGxlaE5KS0tpbWNjWnc0ZnFOZmhwMm4xV3M2cFBUYWlXUmdvb1pFU3UyL2JEcUwxblZXckUwdGtrTUFjR0ZINWpXaTY1cUxXb2IwNUxKeHVxdTNHNjEwenR2ZHdGNEpIcncxb2V2NkhWYkVzTDVPMzJlS1Bhbk9NSXM1T0FGWDBEbGE3UmR0N3VzdlRocHYrTWNIby9GcWZVTlJkWHZTY1BwVVordEZ4OWEvRERVOXp0VHBvci9WM2o3bGRzYi9BRkdjYlJxYmtHMnR4Z0NLRE5YdllNNWFTdEhmVFpkeXJHcnVRd2pYWmp0V3h2R2sxTXNra0JmSmRqMnUzblVYUjlFbkdMaHVKRTljTzdqNkZSL2VvbEJVYzEwYnF1bzZWcjdldTArR2NISU9VZGtSd2poS0NWeWY4enk3dnplYTBHazdGbG1GclV6eGNBemxtR1V5NFJEbXVyYWZzVlowbDAwMHMzV0wzVWJpRDVaM1RHYXRhczNIYXIycWZGR0RqSENlVDVQMHJvR3ZPb2RMczZyemtDL0JOaytpZXorS09xVzdwdE1Pd0tueFhCVUtoR293b2pSR3JNTXlyWEQrcG1pOG5IeUtsQ1NtYzhuTlhiVzdUQ3Z3ejFMZDZQTzFML3hORDVJUDUvL1oiLz4KPC9kZWZzPgo8L3N2Zz4K";function Ko(e,t){return t.split(".").reduce((r,o)=>r&&r[o],e)}var cs={header:{headerText:"Notifications",preferenceText:"Preferences",dropdownItems:{preferences:"Preferences",enableDesktopNotifications:"Enable Desktop Notifications",markAllAsRead:"Mark All As Read",deleteAll:"Delete All"}},notification:{dropdownItems:{delete:"Delete",markAsRead:"Mark As Read"}},channels:{discord:"Discord",email:"Email",inApp:"In-App",mobilePush:"Mobile Push",slack:"Slack",sms:"SMS",webPush:"Web Push",webhook:"Webhook",whatsapp:"WhatsApp",chat:"Chat"},preferenceModal:{heading:"Enable web push notifications",text:"Would you like to enable web push notifications?",yesButtonText:"Yes",noButtonText:"Maybe later",secondaryText:"You can change your preferences in Settings later, if needed"},notificationFeed:{placeholderText:"Shh! It's quiet around here..."}};var Ve=()=>{let t=A()?.textOverrides,{t:r,ready:o}=useTranslation(void 0,{useSuspense:!1});return {t:i=>{let a=Ko(t,i),s=Ko(cs,i);return a||(o?r(i,s):s)}}};function fs({style:e={}}={}){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",style:{...e},children:jsx("circle",{cx:"50",cy:"50",r:"50"})})}function dt(e){"@babel/helpers - typeof";return dt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},dt(e)}function _(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function P(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function O(e){P(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||dt(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function en(e,t){P(2,arguments);var r=O(e),o=_(t);return isNaN(o)?new Date(NaN):(o&&r.setDate(r.getDate()+o),r)}function tn(e,t){P(2,arguments);var r=O(e).getTime(),o=_(t);return new Date(r+o)}var lf={};function ye(){return lf}function be(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function Qr(e){P(1,arguments);var t=O(e);return t.setHours(0,0,0,0),t}var cf=864e5;function rn(e,t){P(2,arguments);var r=Qr(e),o=Qr(t),n=r.getTime()-be(r),i=o.getTime()-be(o);return Math.round((n-i)/cf)}function pt(e,t){P(2,arguments);var r=O(e),o=O(t),n=r.getTime()-o.getTime();return n<0?-1:n>0?1:n}function on(e){return P(1,arguments),e instanceof Date||dt(e)==="object"&&Object.prototype.toString.call(e)==="[object Date]"}function nn(e){if(P(1,arguments),!on(e)&&typeof e!="number")return !1;var t=O(e);return !isNaN(Number(t))}function an(e,t){P(2,arguments);var r=O(e),o=O(t),n=r.getFullYear()-o.getFullYear(),i=r.getMonth()-o.getMonth();return n*12+i}function sn(e,t){return P(2,arguments),O(e).getTime()-O(t).getTime()}var ds={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}},uf="trunc";function ps(e){return e?ds[e]:ds[uf]}function ln(e){P(1,arguments);var t=O(e);return t.setHours(23,59,59,999),t}function cn(e){P(1,arguments);var t=O(e),r=t.getMonth();return t.setFullYear(t.getFullYear(),r+1,0),t.setHours(23,59,59,999),t}function un(e){P(1,arguments);var t=O(e);return ln(t).getTime()===cn(t).getTime()}function fn(e,t){P(2,arguments);var r=O(e),o=O(t),n=pt(r,o),i=Math.abs(an(r,o)),a;if(i<1)a=0;else {r.getMonth()===1&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-n*i);var s=pt(r,o)===-n;un(O(e))&&i===1&&pt(e,o)===1&&(s=!1),a=n*(i-Number(s));}return a===0?0:a}function dn(e,t,r){P(2,arguments);var o=sn(e,t)/1e3;return ps(r?.roundingMethod)(o)}function Wt(e,t){P(2,arguments);var r=_(t);return tn(e,-r)}var ff=864e5;function pn(e){P(1,arguments);var t=O(e),r=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var o=t.getTime(),n=r-o;return Math.floor(n/ff)+1}function Ge(e){P(1,arguments);var t=1,r=O(e),o=r.getUTCDay(),n=(o<t?7:0)+o-t;return r.setUTCDate(r.getUTCDate()-n),r.setUTCHours(0,0,0,0),r}function rr(e){P(1,arguments);var t=O(e),r=t.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(r+1,0,4),o.setUTCHours(0,0,0,0);var n=Ge(o),i=new Date(0);i.setUTCFullYear(r,0,4),i.setUTCHours(0,0,0,0);var a=Ge(i);return t.getTime()>=n.getTime()?r+1:t.getTime()>=a.getTime()?r:r-1}function mn(e){P(1,arguments);var t=rr(e),r=new Date(0);r.setUTCFullYear(t,0,4),r.setUTCHours(0,0,0,0);var o=Ge(r);return o}var df=6048e5;function gn(e){P(1,arguments);var t=O(e),r=Ge(t).getTime()-mn(t).getTime();return Math.round(r/df)+1}function Je(e,t){var r,o,n,i,a,s,l,u;P(1,arguments);var c=ye(),d=_((r=(o=(n=(i=t?.weekStartsOn)!==null&&i!==void 0?i:t==null||(a=t.locale)===null||a===void 0||(s=a.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&n!==void 0?n:c.weekStartsOn)!==null&&o!==void 0?o:(l=c.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&r!==void 0?r:0);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=O(e),f=p.getUTCDay(),m=(f<d?7:0)+f-d;return p.setUTCDate(p.getUTCDate()-m),p.setUTCHours(0,0,0,0),p}function or(e,t){var r,o,n,i,a,s,l,u;P(1,arguments);var c=O(e),d=c.getUTCFullYear(),p=ye(),f=_((r=(o=(n=(i=t?.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(a=t.locale)===null||a===void 0||(s=a.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&n!==void 0?n:p.firstWeekContainsDate)!==null&&o!==void 0?o:(l=p.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&r!==void 0?r:1);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=new Date(0);m.setUTCFullYear(d+1,0,f),m.setUTCHours(0,0,0,0);var h=Je(m,t),g=new Date(0);g.setUTCFullYear(d,0,f),g.setUTCHours(0,0,0,0);var y=Je(g,t);return c.getTime()>=h.getTime()?d+1:c.getTime()>=y.getTime()?d:d-1}function hn(e,t){var r,o,n,i,a,s,l,u;P(1,arguments);var c=ye(),d=_((r=(o=(n=(i=t?.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(a=t.locale)===null||a===void 0||(s=a.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&n!==void 0?n:c.firstWeekContainsDate)!==null&&o!==void 0?o:(l=c.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&r!==void 0?r:1),p=or(e,t),f=new Date(0);f.setUTCFullYear(p,0,d),f.setUTCHours(0,0,0,0);var m=Je(f,t);return m}var pf=6048e5;function vn(e,t){P(1,arguments);var r=O(e),o=Je(r,t).getTime()-hn(r,t).getTime();return Math.round(o/pf)+1}function L(e,t){for(var r=e<0?"-":"",o=Math.abs(e).toString();o.length<t;)o="0"+o;return r+o}var mf={y:function(t,r){var o=t.getUTCFullYear(),n=o>0?o:1-o;return L(r==="yy"?n%100:n,r.length)},M:function(t,r){var o=t.getUTCMonth();return r==="M"?String(o+1):L(o+1,2)},d:function(t,r){return L(t.getUTCDate(),r.length)},a:function(t,r){var o=t.getUTCHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return o.toUpperCase();case"aaa":return o;case"aaaaa":return o[0];case"aaaa":default:return o==="am"?"a.m.":"p.m."}},h:function(t,r){return L(t.getUTCHours()%12||12,r.length)},H:function(t,r){return L(t.getUTCHours(),r.length)},m:function(t,r){return L(t.getUTCMinutes(),r.length)},s:function(t,r){return L(t.getUTCSeconds(),r.length)},S:function(t,r){var o=r.length,n=t.getUTCMilliseconds(),i=Math.floor(n*Math.pow(10,o-3));return L(i,r.length)}},Ue=mf;var Bt={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},gf={G:function(t,r,o){var n=t.getUTCFullYear()>0?1:0;switch(r){case"G":case"GG":case"GGG":return o.era(n,{width:"abbreviated"});case"GGGGG":return o.era(n,{width:"narrow"});case"GGGG":default:return o.era(n,{width:"wide"})}},y:function(t,r,o){if(r==="yo"){var n=t.getUTCFullYear(),i=n>0?n:1-n;return o.ordinalNumber(i,{unit:"year"})}return Ue.y(t,r)},Y:function(t,r,o,n){var i=or(t,n),a=i>0?i:1-i;if(r==="YY"){var s=a%100;return L(s,2)}return r==="Yo"?o.ordinalNumber(a,{unit:"year"}):L(a,r.length)},R:function(t,r){var o=rr(t);return L(o,r.length)},u:function(t,r){var o=t.getUTCFullYear();return L(o,r.length)},Q:function(t,r,o){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(r){case"Q":return String(n);case"QQ":return L(n,2);case"Qo":return o.ordinalNumber(n,{unit:"quarter"});case"QQQ":return o.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return o.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return o.quarter(n,{width:"wide",context:"formatting"})}},q:function(t,r,o){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(r){case"q":return String(n);case"qq":return L(n,2);case"qo":return o.ordinalNumber(n,{unit:"quarter"});case"qqq":return o.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return o.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return o.quarter(n,{width:"wide",context:"standalone"})}},M:function(t,r,o){var n=t.getUTCMonth();switch(r){case"M":case"MM":return Ue.M(t,r);case"Mo":return o.ordinalNumber(n+1,{unit:"month"});case"MMM":return o.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return o.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return o.month(n,{width:"wide",context:"formatting"})}},L:function(t,r,o){var n=t.getUTCMonth();switch(r){case"L":return String(n+1);case"LL":return L(n+1,2);case"Lo":return o.ordinalNumber(n+1,{unit:"month"});case"LLL":return o.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return o.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return o.month(n,{width:"wide",context:"standalone"})}},w:function(t,r,o,n){var i=vn(t,n);return r==="wo"?o.ordinalNumber(i,{unit:"week"}):L(i,r.length)},I:function(t,r,o){var n=gn(t);return r==="Io"?o.ordinalNumber(n,{unit:"week"}):L(n,r.length)},d:function(t,r,o){return r==="do"?o.ordinalNumber(t.getUTCDate(),{unit:"date"}):Ue.d(t,r)},D:function(t,r,o){var n=pn(t);return r==="Do"?o.ordinalNumber(n,{unit:"dayOfYear"}):L(n,r.length)},E:function(t,r,o){var n=t.getUTCDay();switch(r){case"E":case"EE":case"EEE":return o.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return o.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return o.day(n,{width:"short",context:"formatting"});case"EEEE":default:return o.day(n,{width:"wide",context:"formatting"})}},e:function(t,r,o,n){var i=t.getUTCDay(),a=(i-n.weekStartsOn+8)%7||7;switch(r){case"e":return String(a);case"ee":return L(a,2);case"eo":return o.ordinalNumber(a,{unit:"day"});case"eee":return o.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return o.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return o.day(i,{width:"short",context:"formatting"});case"eeee":default:return o.day(i,{width:"wide",context:"formatting"})}},c:function(t,r,o,n){var i=t.getUTCDay(),a=(i-n.weekStartsOn+8)%7||7;switch(r){case"c":return String(a);case"cc":return L(a,r.length);case"co":return o.ordinalNumber(a,{unit:"day"});case"ccc":return o.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return o.day(i,{width:"narrow",context:"standalone"});case"cccccc":return o.day(i,{width:"short",context:"standalone"});case"cccc":default:return o.day(i,{width:"wide",context:"standalone"})}},i:function(t,r,o){var n=t.getUTCDay(),i=n===0?7:n;switch(r){case"i":return String(i);case"ii":return L(i,r.length);case"io":return o.ordinalNumber(i,{unit:"day"});case"iii":return o.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return o.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return o.day(n,{width:"short",context:"formatting"});case"iiii":default:return o.day(n,{width:"wide",context:"formatting"})}},a:function(t,r,o){var n=t.getUTCHours(),i=n/12>=1?"pm":"am";switch(r){case"a":case"aa":return o.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return o.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return o.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return o.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,r,o){var n=t.getUTCHours(),i;switch(n===12?i=Bt.noon:n===0?i=Bt.midnight:i=n/12>=1?"pm":"am",r){case"b":case"bb":return o.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return o.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return o.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return o.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,r,o){var n=t.getUTCHours(),i;switch(n>=17?i=Bt.evening:n>=12?i=Bt.afternoon:n>=4?i=Bt.morning:i=Bt.night,r){case"B":case"BB":case"BBB":return o.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return o.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return o.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,r,o){if(r==="ho"){var n=t.getUTCHours()%12;return n===0&&(n=12),o.ordinalNumber(n,{unit:"hour"})}return Ue.h(t,r)},H:function(t,r,o){return r==="Ho"?o.ordinalNumber(t.getUTCHours(),{unit:"hour"}):Ue.H(t,r)},K:function(t,r,o){var n=t.getUTCHours()%12;return r==="Ko"?o.ordinalNumber(n,{unit:"hour"}):L(n,r.length)},k:function(t,r,o){var n=t.getUTCHours();return n===0&&(n=24),r==="ko"?o.ordinalNumber(n,{unit:"hour"}):L(n,r.length)},m:function(t,r,o){return r==="mo"?o.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):Ue.m(t,r)},s:function(t,r,o){return r==="so"?o.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):Ue.s(t,r)},S:function(t,r){return Ue.S(t,r)},X:function(t,r,o,n){var i=n._originalDate||t,a=i.getTimezoneOffset();if(a===0)return "Z";switch(r){case"X":return gs(a);case"XXXX":case"XX":return mt(a);case"XXXXX":case"XXX":default:return mt(a,":")}},x:function(t,r,o,n){var i=n._originalDate||t,a=i.getTimezoneOffset();switch(r){case"x":return gs(a);case"xxxx":case"xx":return mt(a);case"xxxxx":case"xxx":default:return mt(a,":")}},O:function(t,r,o,n){var i=n._originalDate||t,a=i.getTimezoneOffset();switch(r){case"O":case"OO":case"OOO":return "GMT"+ms(a,":");case"OOOO":default:return "GMT"+mt(a,":")}},z:function(t,r,o,n){var i=n._originalDate||t,a=i.getTimezoneOffset();switch(r){case"z":case"zz":case"zzz":return "GMT"+ms(a,":");case"zzzz":default:return "GMT"+mt(a,":")}},t:function(t,r,o,n){var i=n._originalDate||t,a=Math.floor(i.getTime()/1e3);return L(a,r.length)},T:function(t,r,o,n){var i=n._originalDate||t,a=i.getTime();return L(a,r.length)}};function ms(e,t){var r=e>0?"-":"+",o=Math.abs(e),n=Math.floor(o/60),i=o%60;if(i===0)return r+String(n);var a=t;return r+String(n)+a+L(i,2)}function gs(e,t){if(e%60===0){var r=e>0?"-":"+";return r+L(Math.abs(e)/60,2)}return mt(e,t)}function mt(e,t){var r=t||"",o=e>0?"-":"+",n=Math.abs(e),i=L(Math.floor(n/60),2),a=L(n%60,2);return o+i+r+a}var hs=gf;var vs=function(t,r){switch(t){case"P":return r.date({width:"short"});case"PP":return r.date({width:"medium"});case"PPP":return r.date({width:"long"});case"PPPP":default:return r.date({width:"full"})}},xs=function(t,r){switch(t){case"p":return r.time({width:"short"});case"pp":return r.time({width:"medium"});case"ppp":return r.time({width:"long"});case"pppp":default:return r.time({width:"full"})}},hf=function(t,r){var o=t.match(/(P+)(p+)?/)||[],n=o[1],i=o[2];if(!i)return vs(t,r);var a;switch(n){case"P":a=r.dateTime({width:"short"});break;case"PP":a=r.dateTime({width:"medium"});break;case"PPP":a=r.dateTime({width:"long"});break;case"PPPP":default:a=r.dateTime({width:"full"});break}return a.replace("{{date}}",vs(n,r)).replace("{{time}}",xs(i,r))},vf={p:xs,P:hf},ys=vf;var xf=["D","DD"],yf=["YY","YYYY"];function bs(e){return xf.indexOf(e)!==-1}function ws(e){return yf.indexOf(e)!==-1}function xn(e,t,r){if(e==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(r,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(r,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(r,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(r,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var bf={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},wf=function(t,r,o){var n,i=bf[t];return typeof i=="string"?n=i:r===1?n=i.one:n=i.other.replace("{{count}}",r.toString()),o!=null&&o.addSuffix?o.comparison&&o.comparison>0?"in "+n:n+" ago":n},Rs=wf;function nr(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.width?String(t.width):e.defaultWidth,o=e.formats[r]||e.formats[e.defaultWidth];return o}}var Rf={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Tf={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Sf={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ef={date:nr({formats:Rf,defaultWidth:"full"}),time:nr({formats:Tf,defaultWidth:"full"}),dateTime:nr({formats:Sf,defaultWidth:"full"})},Ts=Ef;var Pf={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Cf=function(t,r,o,n){return Pf[t]},Ss=Cf;function gt(e){return function(t,r){var o=r!=null&&r.context?String(r.context):"standalone",n;if(o==="formatting"&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,a=r!=null&&r.width?String(r.width):i;n=e.formattingValues[a]||e.formattingValues[i];}else {var s=e.defaultWidth,l=r!=null&&r.width?String(r.width):e.defaultWidth;n=e.values[l]||e.values[s];}var u=e.argumentCallback?e.argumentCallback(t):t;return n[u]}}var kf={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Of={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Mf={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Ff={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Nf={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Df={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},If=function(t,r){var o=Number(t),n=o%100;if(n>20||n<10)switch(n%10){case 1:return o+"st";case 2:return o+"nd";case 3:return o+"rd"}return o+"th"},Wf={ordinalNumber:If,era:gt({values:kf,defaultWidth:"wide"}),quarter:gt({values:Of,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:gt({values:Mf,defaultWidth:"wide"}),day:gt({values:Ff,defaultWidth:"wide"}),dayPeriod:gt({values:Nf,defaultWidth:"wide",formattingValues:Df,defaultFormattingWidth:"wide"})},Es=Wf;function ht(e){return function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.width,n=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],i=t.match(n);if(!i)return null;var a=i[0],s=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(s)?Vf(s,function(d){return d.test(a)}):Bf(s,function(d){return d.test(a)}),u;u=e.valueCallback?e.valueCallback(l):l,u=r.valueCallback?r.valueCallback(u):u;var c=t.slice(a.length);return {value:u,rest:c}}}function Bf(e,t){for(var r in e)if(e.hasOwnProperty(r)&&t(e[r]))return r}function Vf(e,t){for(var r=0;r<e.length;r++)if(t(e[r]))return r}function yn(e){return function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=t.match(e.matchPattern);if(!o)return null;var n=o[0],i=t.match(e.parsePattern);if(!i)return null;var a=e.valueCallback?e.valueCallback(i[0]):i[0];a=r.valueCallback?r.valueCallback(a):a;var s=t.slice(n.length);return {value:a,rest:s}}}var Uf=/^(\d+)(th|st|nd|rd)?/i,Lf=/\d+/i,Af={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Hf={any:[/^b/i,/^(a|c)/i]},$f={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},zf={any:[/1/i,/2/i,/3/i,/4/i]},Yf={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Zf={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},jf={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Qf={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Xf={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},_f={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Gf={ordinalNumber:yn({matchPattern:Uf,parsePattern:Lf,valueCallback:function(t){return parseInt(t,10)}}),era:ht({matchPatterns:Af,defaultMatchWidth:"wide",parsePatterns:Hf,defaultParseWidth:"any"}),quarter:ht({matchPatterns:$f,defaultMatchWidth:"wide",parsePatterns:zf,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:ht({matchPatterns:Yf,defaultMatchWidth:"wide",parsePatterns:Zf,defaultParseWidth:"any"}),day:ht({matchPatterns:jf,defaultMatchWidth:"wide",parsePatterns:Qf,defaultParseWidth:"any"}),dayPeriod:ht({matchPatterns:Xf,defaultMatchWidth:"any",parsePatterns:_f,defaultParseWidth:"any"})},Ps=Gf;var Jf={code:"en-US",formatDistance:Rs,formatLong:Ts,formatRelative:Ss,localize:Es,match:Ps,options:{weekStartsOn:0,firstWeekContainsDate:1}},Cs=Jf;var Vt=Cs;var qf=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Kf=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ed=/^'([^]*?)'?$/,td=/''/g,rd=/[a-zA-Z]/;function Ut(e,t,r){var o,n,i,a,s,l,u,c,d,p,f,m,h,g,y,b,v,x;P(2,arguments);var w=String(t),S=ye(),k=(o=(n=r?.locale)!==null&&n!==void 0?n:S.locale)!==null&&o!==void 0?o:Vt,N=_((i=(a=(s=(l=r?.firstWeekContainsDate)!==null&&l!==void 0?l:r==null||(u=r.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&s!==void 0?s:S.firstWeekContainsDate)!==null&&a!==void 0?a:(d=S.locale)===null||d===void 0||(p=d.options)===null||p===void 0?void 0:p.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(N>=1&&N<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var I=_((f=(m=(h=(g=r?.weekStartsOn)!==null&&g!==void 0?g:r==null||(y=r.locale)===null||y===void 0||(b=y.options)===null||b===void 0?void 0:b.weekStartsOn)!==null&&h!==void 0?h:S.weekStartsOn)!==null&&m!==void 0?m:(v=S.locale)===null||v===void 0||(x=v.options)===null||x===void 0?void 0:x.weekStartsOn)!==null&&f!==void 0?f:0);if(!(I>=0&&I<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!k.localize)throw new RangeError("locale must contain localize property");if(!k.formatLong)throw new RangeError("locale must contain formatLong property");var F=O(e);if(!nn(F))throw new RangeError("Invalid time value");var B=be(F),D=Wt(F,B),V={firstWeekContainsDate:N,weekStartsOn:I,locale:k,_originalDate:F},E=w.match(Kf).map(function(T){var C=T[0];if(C==="p"||C==="P"){var R=ys[C];return R(T,k.formatLong)}return T}).join("").match(qf).map(function(T){if(T==="''")return "'";var C=T[0];if(C==="'")return od(T);var R=hs[C];if(R)return !(r!=null&&r.useAdditionalWeekYearTokens)&&ws(T)&&xn(T,t,String(e)),!(r!=null&&r.useAdditionalDayOfYearTokens)&&bs(T)&&xn(T,t,String(e)),R(D,T,k.localize,V);if(C.match(rd))throw new RangeError("Format string contains an unescaped latin alphabet character `"+C+"`");return T}).join("");return E}function od(e){var t=e.match(ed);return t?t[1].replace(td,"'"):e}function ir(e,t){if(e==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}function bn(e){return ir({},e)}var ks=1440,nd=2520,wn=43200,id=86400;function ar(e,t,r){var o,n;P(2,arguments);var i=ye(),a=(o=(n=r?.locale)!==null&&n!==void 0?n:i.locale)!==null&&o!==void 0?o:Vt;if(!a.formatDistance)throw new RangeError("locale must contain formatDistance property");var s=pt(e,t);if(isNaN(s))throw new RangeError("Invalid time value");var l=ir(bn(r),{addSuffix:!!r?.addSuffix,comparison:s}),u,c;s>0?(u=O(t),c=O(e)):(u=O(e),c=O(t));var d=dn(c,u),p=(be(c)-be(u))/1e3,f=Math.round((d-p)/60),m;if(f<2)return r!=null&&r.includeSeconds?d<5?a.formatDistance("lessThanXSeconds",5,l):d<10?a.formatDistance("lessThanXSeconds",10,l):d<20?a.formatDistance("lessThanXSeconds",20,l):d<40?a.formatDistance("halfAMinute",0,l):d<60?a.formatDistance("lessThanXMinutes",1,l):a.formatDistance("xMinutes",1,l):f===0?a.formatDistance("lessThanXMinutes",1,l):a.formatDistance("xMinutes",f,l);if(f<45)return a.formatDistance("xMinutes",f,l);if(f<90)return a.formatDistance("aboutXHours",1,l);if(f<ks){var h=Math.round(f/60);return a.formatDistance("aboutXHours",h,l)}else {if(f<nd)return a.formatDistance("xDays",1,l);if(f<wn){var g=Math.round(f/ks);return a.formatDistance("xDays",g,l)}else if(f<id)return m=Math.round(f/wn),a.formatDistance("aboutXMonths",m,l)}if(m=fn(c,u),m<12){var y=Math.round(f/wn);return a.formatDistance("xMonths",y,l)}else {var b=m%12,v=Math.floor(m/12);return b<3?a.formatDistance("aboutXYears",v,l):b<9?a.formatDistance("overXYears",v,l):a.formatDistance("almostXYears",v+1,l)}}function Xr(e,t,r){var o,n,i,a,s,l,u,c,d,p;P(2,arguments);var f=O(e),m=O(t),h=ye(),g=(o=(n=r?.locale)!==null&&n!==void 0?n:h.locale)!==null&&o!==void 0?o:Vt,y=_((i=(a=(s=(l=r?.weekStartsOn)!==null&&l!==void 0?l:r==null||(u=r.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.weekStartsOn)!==null&&s!==void 0?s:h.weekStartsOn)!==null&&a!==void 0?a:(d=h.locale)===null||d===void 0||(p=d.options)===null||p===void 0?void 0:p.weekStartsOn)!==null&&i!==void 0?i:0);if(!g.localize)throw new RangeError("locale must contain localize property");if(!g.formatLong)throw new RangeError("locale must contain formatLong property");if(!g.formatRelative)throw new RangeError("locale must contain formatRelative property");var b=rn(f,m);if(isNaN(b))throw new RangeError("Invalid time value");var v;b<-6?v="other":b<-1?v="lastWeek":b<0?v="yesterday":b<1?v="today":b<2?v="tomorrow":b<7?v="nextWeek":v="other";var x=Wt(f,be(f)),w=Wt(m,be(m)),S=g.formatRelative(v,x,w,{locale:g,weekStartsOn:y});return Ut(f,S,{locale:g,weekStartsOn:y})}function _r(e,t){P(2,arguments);var r=_(t);return en(e,-r)}var Os=e=>{try{return ar(new Date(e),new Date,{addSuffix:!0})}catch{return "date error"}},ad={format:Ut,formatDistance:ar,formatRelative:Xr,subDays:_r};function Ms(e){return t=>e(t??"",ad)}function Rn(e){if(!e)return "";let r=new DOMParser().parseFromString(e,"text/html"),o="[unsafe content removed]",n=s=>{let l=document.createTextNode(o);s.parentNode?.replaceChild(l,s);};["script","iframe","object","embed","link","style"].forEach(s=>{r.querySelectorAll(s).forEach(u=>n(u));});let a=r.body.getElementsByTagName("*");for(let s=0;s<a.length;s++){let l=Array.from(a[s].attributes),u=!1;l.forEach(c=>{(c.name.startsWith("on")||c.name==="srcdoc")&&(u=!0);}),u&&n(a[s]);}return r.body.innerHTML}function Tn(){return jsxs(os,{children:[jsx(ns,{children:jsx(jr,{circle:!0})}),jsxs(is,{children:[jsx(as,{children:jsx(jr,{children:"\xA0"})}),jsx(ss,{children:jsx(jr,{children:"\xA0"})})]})]})}var dd=({createdAt:e})=>{let{formatDate:t}=A(),o=Ms(t||Os)(e);return jsx(es,{children:o})};function Sn({notification:e}){let {t}=Ve(),r=A(),o=Fr(),{title:n,message:i,icon:a,url:s,clickedAt:l,createdAt:u,blocks:c}=e,d=Rn(i),p=Rn(n),{renderNotificationBody:f,onFeedItemClick:m,feedItemPlaceholderImage:h=ls,eventListenersToRun:g,actionableElements:y,hideNotificationAvatar:b}=r,x=useActions(),{markAsRead:w,changeState:S,deleteNotification:k}=x,N=ue=>S({id:e.id,...ue}),[I,F]=useState(!1),[B,D]=useState(!1),V=useRef(null),E=useCallback(()=>w(e.id),[w,e.id]),T=useCallback(()=>k(e.id),[k,e.id]),C=useMemo(()=>l?[{name:t("notification.dropdownItems.delete"),action:T}]:[{name:t("notification.dropdownItems.delete"),action:T},{name:t("notification.dropdownItems.markAsRead"),action:E}],[T,E,l,t]),R=()=>{F(!0);},W=()=>{F(!1);},Y=ue=>{if(!V.current?.contains(ue.target)){if(m){m(ue,{url:s,...e,markAsClicked:E});return}s&&(E(),window.open(s,"__blank"));}},me=()=>a||h;return jsxs(qa,{clickable:s!=null,onMouseEnter:R,onMouseLeave:W,onFocus:R,onBlur:W,onClick:Y,children:[!b&&jsx(Ka,{src:me(),onError:()=>{D(!0);}}),jsx(Go,{children:Ne(f,e)||jsxs(Fragment$1,{children:[jsx(Jo,{dangerouslySetInnerHTML:{__html:p}}),i&&jsx(qo,{dangerouslySetInnerHTML:{__html:d}}),jsx(dd,{createdAt:u}),c&&c.length>0&&jsx(ts,{children:jsx(TemplateBlocksRender,{blocks:c,changeNotificationState:N,eventListenersToRun:g,notification:e,actionableElementsProps:y})})]})}),jsxs(rs,{ref:V,children:[jsx(er,{items:C,isVisible:o||I,theme:ze.dropdown}),jsx(fs,{style:{visibility:l?"hidden":"visible"}})]})]})}var md=300;function Ds(e=md){let[t,r]=useState(!1);function o(i){i.currentTarget?.scrollTop>e?r(!0):r(!1);}function n(i){i?.scrollTo({top:0,left:0,behavior:"smooth"});}return {jumpToTop:n,onNotificationScroll:o,showJumpToTop:t}}function Is(){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1600 1100",width:"50%",children:jsxs("g",{transform:"translate(0 1)",fill:"none",fillRule:"evenodd",children:[jsx("path",{d:"M92.8 863.1S55.4 820 33.3 766.2c-22.1-53.8-10.8-102.6 6.2-113.4 17-10.8 57.3 45.4 59.5 95.8 2.3 50.5 0 114.5 0 114.5h-6.2Z",fill:"#52CB96",fillRule:"nonzero"}),jsx("path",{d:"M96.2 863.1s-34-203.5-17.6-297.6c16.4-94.1 54.4-91.3 74.8-78.2 20.4 13.1 43.7 79.4 13.6 195.6-30 116.2-59 180.3-59 180.3H96.2v-.1Z",fill:"#37B37F",fillRule:"nonzero"}),jsx("path",{stroke:"#FFF",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round",d:"m104.7 863.1 23.1-273.7M96.2 863.1 60.5 727.8"}),jsx("path",{d:"M643.6 307.8s39.1-96.6 174.1-60.9c135 35.7 144.5 221.8 208.9 277.3 64.4 55.4 205.9 56.8 196.8 189.3-9.1 132.5-216.3 18-320.8 23.7-317.8 17.3-387 177.4-599.5 87.1-142.2-60.4-100.1-229.2 35.6-279.5 135.7-50.3 240.3-88.8 304.9-237Z",fill:"#F1F2F7",fillRule:"nonzero"}),jsx("ellipse",{fill:"#283444",fillRule:"nonzero",cx:557.1,cy:933.1,rx:143.2,ry:61.8}),jsx("path",{d:"M568.4 921.7s-3.7 4.5-13.6 4.5c-9.9 0-13.6-4.5-13.6-4.5v-127h27.2v127ZM22.8 863.1C8.8 880.3.4 902.2.4 926.1c0 55 44.6 99.7 99.7 99.7s99.7-44.6 99.7-99.7c0-23.9-8.4-45.8-22.4-63H22.8Z",fill:"#CED5E5",fillRule:"nonzero"}),jsx("path",{d:"M908.3 827.6v206.6c0 25.5 63.6 46.1 142 46.1s142-20.6 142-46.1V827.6h-284Z",fill:"#FFB3DA",fillRule:"nonzero"}),jsx("ellipse",{fill:"#ED85C3",fillRule:"nonzero",cx:1050.3,cy:827.6,rx:142,ry:67.2}),jsx("path",{d:"M267.1 513.8s-2.6-50.2 39.1-66.3c41.7-16.2 155.6-26.4 222-6.8 66.3 19.6-14.6 58 105.4 171.8C743 716.2 802 683.9 866.6 715.4S802 838.7 674.4 836.2s-198.1-28.1-261.1-70.6C350.5 723 262.9 615.9 267.1 513.8Z",fill:"#283444",fillRule:"nonzero"}),jsx("path",{d:"M525.8 746.2s21.8 22.5 67 34.1c45.9 11.8 113.1 19.9 174.6 28.3 120.9 16.7 305.6 43.1 305.6 43.1l-2.8-32.3s-293-51.9-430.7-104.9L569 681.1s-26.3 7.2-43.2 65.1Z",fill:"#5900CC",fillRule:"nonzero"}),jsx("path",{d:"m665.2 658.5 401 175.9-12.1 33.6-410.3-151.8-66.4-21.6 7.2-19.2c.1 0 53.7-28.7 80.6-16.9Z",fill:"#5900CC",fillRule:"nonzero"}),jsx("path",{d:"m401.3 448.4-9.2 57s28.3 8.5 41.8 1.6c13.5-6.9 18.9-22.4 18.9-22.4s-10.3-1.4-23.2-31.3l-28.3-4.9Z",fill:"#FFDFD7",fillRule:"nonzero"}),jsx("path",{stroke:"#CED5E5",strokeWidth:3,opacity:.3,strokeLinecap:"round",strokeLinejoin:"round",d:"M1524.1 941.8 337.8 252.7v-72.8L1404.2 29.1"}),jsx("path",{d:"M387.3 441.5s30.3 19 55.6 11.3c25.2-7.7-8.6-109.1-8.6-109.1s-14-22.6-49.5-14.1c-35.6 8.5-40.3 74.4 2.5 111.9Z",fill:"#FFDFD7",fillRule:"nonzero"}),jsx("path",{d:"M394.7 489.7s-17.6 10.5-34.6 29.3c-8.7 9.6 29.3 74.4 73.5 130.7 42.1 53.7 90.3 99.1 90.3 99.1s31-44.6 69.5-63.9c38.6-19.3 74.5-27.2 74.5-27.2s-90.7-78.2-141-125.5l-33.6-53.3s-20.4-2.3-47.2 1.1c-.1.2-14.7 17.3-51.4 9.7Z",fill:"#FFC933",fillRule:"nonzero"}),jsx("path",{d:"M473.4 597.9s18.1-8.1 36.2-10.6c18.1-2.6 12.3 20.4 6.2 29.1-6.1 8.7-48.7 12.3-48.7 12.3s-8.9-5.3-6.3-13.3c2.6-8 5.7-13.9 12.6-17.5Z",fill:"#FFDFD7",fillRule:"nonzero"}),jsx("path",{d:"M493.2 479.1s35.5 2 89.1 30.7l16 10.5s33.6 21.4 39 34.2c5.4 12.8-.3 25.2-6.4 30.9l-33-28.8-69.9-22.5-34.8-55ZM360 519c-5.7 8.1-11.3 18.3-16.1 31.1-19.3 51-19.3 93-15.5 97.1 3.8 4.2 52.2 6 139.1-18.1 0 0-7.6-8.7 6.4-32.1 0 0-54.8 6.8-94.1 9.4l9.4-34s4.2-29.9-12.9-43.5L360 519Z",fill:"#FFC933",fillRule:"nonzero"}),jsx("path",{stroke:"#FEAC00",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round",d:"m547 550.9-31.2-28.5"}),jsx("path",{d:"m491.9 654.7 12.8-81.1c.5-3.3 2.7-6.1 5.8-7.4l103.6-43.5c1.8-.8 5.4-.2 8.1 2.1 1 .9-1.6 1.2-1.8 2.7l-11.2 72c-.5 3.1-2.4 5.7-5.2 7.1l-102.1 54.8c-3.5 1.8-10.9-1.7-10-6.7Z",fill:"#CED5E5",fillRule:"nonzero"}),jsx("path",{d:"m495.8 656.5 12.8-81.1c.5-3.3 2.7-6.1 5.8-7.4L618 524.5c3.3-1.4 6.8 1.4 6.2 4.9l-11.2 72c-.5 3.1-2.4 5.7-5.2 7.1l-105.5 52.7c-3.3 1.7-7-1.1-6.5-4.7Z",fill:"#F1F2F7",fillRule:"nonzero"}),jsx("ellipse",{fill:"#CED5E5",fillRule:"nonzero",transform:"rotate(-67.61 568.994 588.443)",cx:568.994,cy:588.443,rx:13.6,ry:9.5}),jsx("path",{d:"M624.3 558.8s-22.2 6-27.2 8.7c-4.9 2.6-12.5 4.9-12.5 12.5s6.8 17.8 12.9 18.5c6 .8 28.2-6.3 33.4-13.2 5.2-6.9 4.5-28-6.6-26.5Z",fill:"#FFDFD7",fillRule:"nonzero"}),jsx("path",{d:"M435.2 346.6s6.5-11.4-6.5-18.9c-13-7.5-54.2-16.6-72 24.8 0 0-16.7 3.7-11.3 34.9 5.4 31.2 42 54.1 42 54.1l-3.6-37 8.2-5.1-9.7-26.3c-.1.1 39.5-1.9 52.9-26.5Z",fill:"#8B34FF",fillRule:"nonzero"}),jsx("path",{d:"M385.3 409.5s-.9-8.5-8.9-11.6c-8-3.1-15 4-13.3 13.6 1.7 9.7 14.9 18.7 26.5 13.2l-4.3-15.2Z",fill:"#FFDFD7",fillRule:"nonzero"}),jsx("path",{stroke:"#FEAC00",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round",d:"m474 597-94.2 9.4 9.5-34M467.5 629.1l-40.6 9.6"}),jsx("path",{d:"M1070.2 819.4s1.9-22.9 11.7-40.3c9.8-17.4 23.6-20 23.6-20l-.8 92.6H1073l-2.8-32.3Z",fill:"#FFF",fillRule:"nonzero"}),jsx("path",{d:"M1065.5 836.4s12.2-21.2 29.4-33.6c17.2-12.4 31.4-8.8 31.4-8.8l-42.8 89-30-14.1 12-32.5Z",fill:"#FFF",fillRule:"nonzero"}),jsx("path",{stroke:"#8B34FF",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round",d:"m667.8 725.1 385.7 143.7 12.7-34.5-62.7-27.5"}),jsx("path",{d:"M1070.9 828.1s16.6-26 34.6-31.4",stroke:"#F1F2F7",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"}),jsx("path",{d:"M258.6 273.1H38.1c-15.3 0-27.6-12.4-27.6-27.6v-58.4c0-15.3 12.4-27.6 27.6-27.6h220.5c15.3 0 27.6 12.4 27.6 27.6v58.4c0 15.3-12.3 27.6-27.6 27.6ZM126.7.2h13.6v159.3h-13.6z",stroke:"#FEAC00",fill:"#FFB3DA",fillRule:"nonzero"}),jsx("path",{d:"M339 256.2h-6.3c-22.1 0-39.9-17.9-39.9-39.9 0-22.1 17.9-39.9 39.9-39.9h6.3v79.8Z",fill:"#ED85C3",fillRule:"nonzero"}),jsx("path",{d:"m1524.1 941.8-118.1-153c-3.2-4.1-4.9-9.2-4.9-14.4v-740c0-4 3.8-6.9 7.7-5.8l112.8 32.5c5.7 1.6 9.6 6.8 9.6 12.7v865.6c-.1 3.7-4.8 5.3-7.1 2.4Z",fill:"#F1F2F7",fillRule:"nonzero"}),jsx("path",{fill:"#ED85C3",fillRule:"nonzero",d:"M100.1.2h67.3v20h-67.3z"})]})})}var Vs=150,bd={transition:`opacity ${Vs}ms ease-in-out`,opacity:0},wd={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}},Rd=()=>{let{t:e}=Ve();return jsxs(M__default.Fragment,{children:[jsx(Is,{}),jsx(ja,{children:e("notificationFeed.placeholderText")})]})},Td=(e,t)=>Ne(t,e)||jsx(Sn,{notification:e});function En(){let e=A(),{renderNotificationContent:t,renderEmptyPlaceholderImage:r,category:o,tenantIdentifier:n,hideJumpToTop:i}=e,{onNotificationScroll:a,jumpToTop:s,showJumpToTop:l}=Ds(),u=v=>{let x=v.currentTarget.parentNode?.parentElement;s?.(x);},[c,d]=M__default.useState(1),p=createFilteredFeed({category:o,tenantIdentifier:n}),{notifications:f,loadMore:m,hasMore:h,loading:g}=p(),y=f?.length===0,b=useActions();return jsxs(Za,{isLoading:g,empty:y,onScroll:a,children:[!i&&jsx(Qo,{in:l,timeout:Vs,children:v=>jsx(Qa,{style:{...bd,...wd[v]},children:jsx(_o,{onClick:u})})}),y&&!g&&(Ne(r)||jsx(Rd,{})),!y&&jsx(Fragment,{children:f.map(v=>jsx(Fragment$1,{children:Td(v,t)},v.id))}),g&&jsx(Fragment,{children:[...Array(4).keys()].map((v,x)=>jsx(Tn,{},`loader_${x}`))}),h&&jsx(InView,{as:"span",onChange:v=>{v&&(d(c+1),b.markAsSeen({pageNo:c+1}),m());}})]})}var Ls=te.div`
  && {
    ${({theme:{footer:e}})=>css`
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
`,As=te.h3`
  && {
    ${({theme:{footer:e}})=>css`
      font-size: ${e.fontSize};
      font-weight: ${e.fontWeight};
      color: ${e.fontColor};
    `}
  }
`,Hs=te.a`
  && {
    ${({theme:{footer:e}})=>css`
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
`,$s=te.button`
  && {
    ${({theme:{footer:e}})=>css`
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
`;function Ys(){return jsxs("svg",{width:"39",height:"36",viewBox:"0 0 39 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[jsx("mask",{id:"mask0_2451_653",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"39",height:"36",children:jsx("path",{d:"M37.5843 6.51325L28.8318 0.626797C27.7085 -0.13626 26.2575 -0.13626 25.1342 0.626797L19.424 4.4421L19.3304 4.38758H19.2836L13.6202 0.572292C12.4969 -0.190764 11.0459 -0.190764 9.92263 0.572292L1.17012 6.45872C0.421244 6.94928 0 7.87584 0 8.85692V20.0303C0 21.9379 0.889291 23.682 2.29344 24.6086L19.3304 36L36.4143 24.6086C37.8183 23.682 38.7078 21.8834 38.7078 19.9757V8.85692C38.7545 7.87584 38.3333 7.00377 37.5843 6.51325Z",fill:"white"})}),jsxs("g",{mask:"url(#mask0_2451_653)",children:[jsx("path",{d:"M12.7496 35.989L-1.5259 27.1594L-1.94714 8.19197L11.8603 -1.9458L26.1358 6.88387L26.557 25.8513L12.7496 35.989Z",fill:"#BE185D"}),jsx("path",{d:"M27.9027 36.8138L13.674 28.0388L13.2059 9.07134L27.0602 -1.06641L41.3357 7.76324L41.7569 26.6762L27.9027 36.8138Z",fill:"#B22977"}),jsx("path",{d:"M20.1242 42.3769L5.89552 33.6019L5.42749 14.6343L19.2817 4.49658L30.0124 12.2952L30.0124 32.0957L20.1242 42.3769Z",fill:"#BE185D"}),jsx("path",{opacity:"0.36",d:"M41.2787 21.9691L18.4847 38.5383L18.0635 19.6254L41.7884 5.1333L41.2787 21.9691Z",fill:"#A6256E"}),jsx("path",{d:"M-3.97847 23.6365L19.4707 38.0255L19.0495 19.1127L-4.44653 4.72363L-3.97847 23.6365Z",fill:"#D74078"})]})]})}function js(){return jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",children:jsx("path",{d:"M 22.205078 2 A 1.0001 1.0001 0 0 0 21.21875 2.8378906 L 20.246094 8.7929688 C 19.076509 9.1331971 17.961243 9.5922728 16.910156 10.164062 L 11.996094 6.6542969 A 1.0001 1.0001 0 0 0 10.708984 6.7597656 L 6.8183594 10.646484 A 1.0001 1.0001 0 0 0 6.7070312 11.927734 L 10.164062 16.873047 C 9.583454 17.930271 9.1142098 19.051824 8.765625 20.232422 L 2.8359375 21.21875 A 1.0001 1.0001 0 0 0 2.0019531 22.205078 L 2.0019531 27.705078 A 1.0001 1.0001 0 0 0 2.8261719 28.691406 L 8.7597656 29.742188 C 9.1064607 30.920739 9.5727226 32.043065 10.154297 33.101562 L 6.6542969 37.998047 A 1.0001 1.0001 0 0 0 6.7597656 39.285156 L 10.648438 43.175781 A 1.0001 1.0001 0 0 0 11.927734 43.289062 L 16.882812 39.820312 C 17.936999 40.39548 19.054994 40.857928 20.228516 41.201172 L 21.21875 47.164062 A 1.0001 1.0001 0 0 0 22.205078 48 L 27.705078 48 A 1.0001 1.0001 0 0 0 28.691406 47.173828 L 29.751953 41.1875 C 30.920633 40.838997 32.033372 40.369697 33.082031 39.791016 L 38.070312 43.291016 A 1.0001 1.0001 0 0 0 39.351562 43.179688 L 43.240234 39.287109 A 1.0001 1.0001 0 0 0 43.34375 37.996094 L 39.787109 33.058594 C 40.355783 32.014958 40.813915 30.908875 41.154297 29.748047 L 47.171875 28.693359 A 1.0001 1.0001 0 0 0 47.998047 27.707031 L 47.998047 22.207031 A 1.0001 1.0001 0 0 0 47.160156 21.220703 L 41.152344 20.238281 C 40.80968 19.078827 40.350281 17.974723 39.78125 16.931641 L 43.289062 11.933594 A 1.0001 1.0001 0 0 0 43.177734 10.652344 L 39.287109 6.7636719 A 1.0001 1.0001 0 0 0 37.996094 6.6601562 L 33.072266 10.201172 C 32.023186 9.6248101 30.909713 9.1579916 29.738281 8.8125 L 28.691406 2.828125 A 1.0001 1.0001 0 0 0 27.705078 2 L 22.205078 2 z M 23.056641 4 L 26.865234 4 L 27.861328 9.6855469 A 1.0001 1.0001 0 0 0 28.603516 10.484375 C 30.066026 10.848832 31.439607 11.426549 32.693359 12.185547 A 1.0001 1.0001 0 0 0 33.794922 12.142578 L 38.474609 8.7792969 L 41.167969 11.472656 L 37.835938 16.220703 A 1.0001 1.0001 0 0 0 37.796875 17.310547 C 38.548366 18.561471 39.118333 19.926379 39.482422 21.380859 A 1.0001 1.0001 0 0 0 40.291016 22.125 L 45.998047 23.058594 L 45.998047 26.867188 L 40.279297 27.871094 A 1.0001 1.0001 0 0 0 39.482422 28.617188 C 39.122545 30.069817 38.552234 31.434687 37.800781 32.685547 A 1.0001 1.0001 0 0 0 37.845703 33.785156 L 41.224609 38.474609 L 38.53125 41.169922 L 33.791016 37.84375 A 1.0001 1.0001 0 0 0 32.697266 37.808594 C 31.44975 38.567585 30.074755 39.148028 28.617188 39.517578 A 1.0001 1.0001 0 0 0 27.876953 40.3125 L 26.867188 46 L 23.052734 46 L 22.111328 40.337891 A 1.0001 1.0001 0 0 0 21.365234 39.53125 C 19.90185 39.170557 18.522094 38.59371 17.259766 37.835938 A 1.0001 1.0001 0 0 0 16.171875 37.875 L 11.46875 41.169922 L 8.7734375 38.470703 L 12.097656 33.824219 A 1.0001 1.0001 0 0 0 12.138672 32.724609 C 11.372652 31.458855 10.793319 30.079213 10.427734 28.609375 A 1.0001 1.0001 0 0 0 9.6328125 27.867188 L 4.0019531 26.867188 L 4.0019531 23.052734 L 9.6289062 22.117188 A 1.0001 1.0001 0 0 0 10.435547 21.373047 C 10.804273 19.898143 11.383325 18.518729 12.146484 17.255859 A 1.0001 1.0001 0 0 0 12.111328 16.164062 L 8.8261719 11.46875 L 11.523438 8.7734375 L 16.185547 12.105469 A 1.0001 1.0001 0 0 0 17.28125 12.148438 C 18.536908 11.394293 19.919867 10.822081 21.384766 10.462891 A 1.0001 1.0001 0 0 0 22.132812 9.6523438 L 23.056641 4 z M 25 17 C 20.593567 17 17 20.593567 17 25 C 17 29.406433 20.593567 33 25 33 C 29.406433 33 33 29.406433 33 25 C 33 20.593567 29.406433 17 25 17 z M 25 19 C 28.325553 19 31 21.674447 31 25 C 31 28.325553 28.325553 31 25 31 C 21.674447 31 19 28.325553 19 25 C 19 21.674447 21.674447 19 25 19 z"})})}var Pd=()=>jsx(Fragment$1,{children:jsxs(Hs,{href:"https://engagespot.co",target:"__blank","aria-label":"Engagespot Logo",children:[jsx(Ys,{}),jsx(As,{children:"Powered by engagespot"})]})}),Cd=({hideBranding:e,renderFooterContent:t})=>e&&t?Ne(t):e&&!t?null:Pd();function Pn({showPreferences:e}){let{route:t,setRoute:r,renderFooterContent:o}=A(),n=useHideBranding(),i=()=>{r(t==="preference"?"home":"preference");};return jsxs(Ls,{children:[Cd?.({hideBranding:n,renderFooterContent:o}),e?jsx($s,{onClick:i,children:jsx(js,{})}):null]})}var On=te.div`
  && {
    ${({theme:{header:e,colors:t}})=>css`
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
`,Mn=te.h3.withConfig({shouldForwardProp:e=>!["isPreferenceView"].includes(e)})`
  && {
    ${({theme:{header:e},isPreferenceView:t})=>css`
      font-size: ${e.fontSize};
      font-weight: ${e.fontWeight};
      color: ${e.fontColor};
      padding-left: ${()=>t?"0rem":"0.5rem"};
      position: relative;
      right: ${()=>t?"0":"1.58rem"};
      margin-right: auto;
    `}
  }
`,Fn=te.button`
  && {
    ${({theme:{header:e}})=>css`
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
`;function Nn({children:e}){return jsx(On,{children:e})}var Xs=te.div`
  && {
    ${({theme:{preference:e}})=>css`
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
`,_s=te.h3`
  && {
    ${()=>css`
      font-size: 1rem;
      font-weight: 'bold';
      margin: 0.2rem 0rem;
    `}
  }
`,Gs=te.button`
  && {
    ${()=>css`
      display: flex;
      justify-content: space-between;
      color: black;
      width: 100%;
      padding: 0.75rem 1rem;
      align-items: center;
    `}
  }
`,Js=te.div`
  && {
    ${()=>css`
      border: 1px solid #d6d9db;
      border-radius: 13px;
      margin-bottom: 0.75rem;
      padding-top: 0rem;
    `}
  }
`;te.label`
  && {
    ${()=>css`
      font-size: 0.8rem;
      margin: 0.4rem 0rem 0 0;
    `}
  }
`;var qs=te.div.withConfig({shouldForwardProp:e=>!["open"].includes(e)})`
  && {
    ${({open:e})=>css`
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
`,Ks=te.div`
  && {
    ${({theme:{preference:e}})=>css`
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
`,Dn=te.button`
  && {
    ${()=>css`
      margin-top: 3px;
      margin-right: 6px;
    `}
  }
`,In=te.div`
  && {
    ${({theme:{preferenceModal:e,header:t}})=>css`
      background-color: ${e.overlayBackground};
      opacity: ${e.overlayOpacity};
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1000;
      margin: ${t.height} 0 0 0;
    `}
  }
`,el=te.div`
  && {
    ${({theme:{preferenceModal:e}})=>css`
      position: absolute;
      height: ${e.height};
      bottom: 0;
      left: 0;
      z-index: 1500;
      border-radius: ${e.borderRadius};
    `}
  }
`,tl=te.div`
  && {
    ${({theme:{preferenceModal:e}})=>css`
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
`,rl=te.div`
  && {
    ${({theme:{preferenceModal:e}})=>css`
      display: flex;
      margin: ${e.headerMargin};
    `}
  }
`,ol=te.h6`
  && {
    ${({theme:{preferenceModal:e}})=>css`
      font-size: ${e.headerFontSize};
      color: ${e.headingColor};
      margin-right: auto;
    `}
  }
`,nl=te.button`
  && {
    ${({theme:{preferenceModal:e}})=>css`
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
`,il=te.p`
  && {
    ${({theme:{preferenceModal:e}})=>css`
      color: ${e.textPrimaryColor};
      margin: ${e.textPrimaryMargin};
      font-size: ${e.textPrimaryFontSize};
      text-align: ${e.textAlign};
    `}
  }
`,al=te.p`
  && {
    ${({theme:{preferenceModal:e}})=>css`
      color: ${e.textSecondaryColor};
      margin: ${e.textSecondaryMargin};
      font-size: ${e.textSecondaryFontSize};
      text-align: ${e.textAlign};
    `}
  }
`,sl=te.button`
  && {
    ${({theme:{preferenceModal:e}})=>css`
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
`,ll=te.button`
  && {
    ${({theme:{preferenceModal:e}})=>css`
      transition: ${e.primaryButtonTransition};
      color: ${e.buttonSecondaryColor};
      background-color: ${e.buttonSecondaryBackgroundColor};

      &:hover {
        background-color: ${e.buttonSecondaryHoverBackgroundColor};
      }
    `}
  }
`;var cl=te.input`
  && {
    ${({theme:{toggle:e}})=>css`
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
`;function fl({style:e={}}={}){return jsx("svg",{style:e,width:"14",height:"9",viewBox:"0 0 14 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:jsx("path",{d:"M6.45372 0.22329L0.223657 6.45347C0.0794465 6.59757 0 6.78992 0 6.99503C0 7.20013 0.0794465 7.39249 0.223657 7.53658L0.682352 7.99539C0.981244 8.29394 1.46703 8.29394 1.76547 7.99539L6.9971 2.76376L12.2345 8.0012C12.3787 8.14529 12.571 8.22485 12.776 8.22485C12.9812 8.22485 13.1734 8.14529 13.3178 8.0012L13.7763 7.54239C13.9206 7.39818 14 7.20593 14 7.00083C14 6.79573 13.9206 6.60337 13.7763 6.45927L7.54059 0.22329C7.39592 0.0788524 7.20277 -0.000480059 6.99744 -2.47782e-05C6.79131 -0.000480059 6.59827 0.0788524 6.45372 0.22329Z",fill:"black"})})}function qr(){return jsxs("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg",children:[jsx("rect",{x:"0.925781",width:"12.8327",height:"1.30946",transform:"rotate(45 0.925781 0)"}),jsx("rect",{y:"9.07404",width:"12.8327",height:"1.30946",transform:"rotate(-45 0 9.07404)"})]})}var Id=({preference:e,webPushState:t,handleToggleChange:r})=>{let o=A(),{category:n,setCategory:i}=o,{t:a}=Ve(),[s,l]=M__default.useState(!1);return jsxs(Js,{children:[jsxs(Gs,{onClick:()=>{l(!s);},children:[jsx(_s,{children:e?.name}),jsx(fl,{style:{width:"16px",transform:s?"rotate(180deg)":"rotate(0deg)"}})]}),jsx(qs,{open:s,children:e?.channels?.map(c=>jsxs(Ks,{children:[jsx("label",{htmlFor:`${e.id}-${c.id}`,children:a(`channels.${c.id}`)}),jsx(cl,{title:c.id==="webPush"&&t==="denied"?"Web Push is currently disabled on the browser. Enable it manually by going into the browser settings":"",type:"checkbox",id:`${e.id}-${c.id}`,checked:c.enabled,disabled:c.id==="webPush"&&["denied"].includes(t),onChange:d=>{e.id&&(c.id==="inApp"&&c.enabled&&n===e.identifier&&i(""),r({categoryId:e?.id,channel:c.id},d));}})]},`${e.id}-${c.id}`))})]})};function Wn({enableWebPush:e,webPushState:t}){let{preferences:r,setPreferences:o}=usePreferences(),n=(a,s)=>{let l=s.target.checked;a.channel==="webPush"&&t!=="granted"&&e(),o?.([{categoryId:a.categoryId,channels:[{enabled:l,channel:a.channel}]}]);},i=r?.categories;return jsx(Xs,{children:i?.map(a=>jsx(Id,{preference:a,webPushState:t,handleToggleChange:n},a.id))})}function Bn({closeModal:e,allowNotifications:t}){let{t:r}=Ve();return jsx(el,{children:jsxs(tl,{children:[jsxs(rl,{children:[jsx(ol,{children:r("preferenceModal.heading")}),jsx(nl,{onClick:e,children:jsx(qr,{})})]}),jsx(il,{children:r("preferenceModal.text")}),jsx(sl,{onClick:t,children:r("preferenceModal.yesButtonText")}),jsx(ll,{onClick:e,children:r("preferenceModal.noButtonText")}),jsx(al,{children:r("preferenceModal.secondaryText")})]})})}var pl=te.div`
  && {
    ${({theme:{tab:e}})=>css`
      display: flex;
      align-items: center;
      width: 100%;
      background-color: ${e.background};
      border-bottom: ${e.borderBottom};
      padding: 0 1rem;
    `}
  }
`,ml=te.div`
  && {
    ${({theme:{tab:e}})=>css`
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
`,gl=te.button.withConfig({shouldForwardProp:e=>!["isActive"].includes(e)})`
  && {
    ${({theme:{tab:e},isActive:t})=>css`
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
`,Vn=te.button.withConfig({shouldForwardProp:e=>!["direction"].includes(e)})`
  && {
    ${({theme:{tab:e},disabled:t,direction:r})=>css`
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
`;var Un=()=>jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:jsx("path",{d:"m9 18 6-6-6-6"})});var Ln=({tabs:e,activeTab:t,setActiveTab:r})=>{let[o,n]=useState({hasOverflow:!1,canScrollLeft:!1,canScrollRight:!1}),i=useRef(null),a=u=>{r(u);},s=u=>{if(i.current){let c=i.current.offsetWidth/2;i.current.scrollBy({left:u==="left"?-c:c,behavior:"smooth"});}},l=()=>{if(i.current){let{scrollWidth:u,clientWidth:c,scrollLeft:d}=i.current;n({hasOverflow:u>c,canScrollLeft:d>0,canScrollRight:d<u-c-1});}};return useEffect(()=>{let u=new ResizeObserver(l);return i.current&&u.observe(i.current),()=>u.disconnect()},[]),jsxs(pl,{children:[o.hasOverflow&&jsx(Vn,{onClick:()=>s("left"),disabled:!o.canScrollLeft,"aria-label":"Scroll left",direction:"left",children:jsx(Un,{})}),jsx(ml,{ref:i,onScroll:l,children:e.map(u=>jsx(gl,{isActive:u.identifier===t,onClick:()=>a(u.identifier),children:u.label},u.identifier))}),o.hasOverflow&&jsx(Vn,{onClick:()=>s("right"),disabled:!o.canScrollRight,"aria-label":"Scroll right",direction:"right",children:jsx(Un,{})})]})};var An=()=>{let{preferences:e}=usePreferences();return e?.categories&&e?.categories?.length>0};function vl(){return jsxs("svg",{width:"20",height:"13",viewBox:"0 0 20 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[jsx("path",{d:"M0.6129 5.79701C0.951277 5.45864 1.49989 5.45864 1.83827 5.79701L7.02994 10.9887C7.36832 11.3271 7.36831 11.8757 7.02994 12.2141V12.2141C6.69156 12.5524 6.14294 12.5524 5.80457 12.2141L0.612899 7.02238C0.274522 6.68401 0.274523 6.13539 0.6129 5.79701V5.79701Z",fill:"black"}),jsx("path",{d:"M0.612686 7.0428C0.274309 6.70442 0.274309 6.15581 0.612686 5.81743L5.81742 0.612699C6.15579 0.274322 6.70441 0.274322 7.04279 0.612699V0.612699C7.38117 0.951076 7.38117 1.49969 7.04279 1.83807L1.83806 7.0428C1.49968 7.38118 0.951063 7.38118 0.612686 7.0428V7.0428Z",fill:"black"}),jsx("path",{d:"M20 6.15465C20 6.63319 19.6121 7.02112 19.1335 7.02112L1.97744 7.02112L1.97744 5.28818L19.1335 5.28818C19.6121 5.28818 20 5.67611 20 6.15465V6.15465Z",fill:"black"})]})}var jd=()=>{let{subscribe:e}=useWebPush(),[t,r]=useState(!0),[o,n]=useLocalStorage("showNotificationOverlay","true"),i=()=>e(),a=()=>{r(!1),n("false");},s=()=>{r(!1),i(),n("false");};return t&&o=="true"?jsxs(Fragment$1,{children:[jsx(In,{}),jsx(Bn,{allowNotifications:s,closeModal:a})]}):null},Qd=({route:e,setVisible:t,visible:r})=>{let{t:o}=Ve(),{headerText:n,setRoute:i,headerDropdownItems:a}=A(),{webPushState:s,subscribe:l}=useWebPush(),{deleteAllNotifications:u,markAllAsRead:c}=useActions(),d=An(),p=e==="home"?n||o("header.headerText"):o("header.preferenceText"),f=()=>{i("home");},m=()=>{i("preference");},h=()=>{t(!r);},b=[...d?[{name:o("header.dropdownItems.preferences"),action:m}]:s==="default"?[{name:o("header.dropdownItems.enableDesktopNotifications"),action:()=>l()}]:[],{name:o("header.dropdownItems.markAllAsRead"),action:()=>c()},{name:o("header.dropdownItems.deleteAll"),action:()=>u()}].concat(a??[]);return jsxs(Nn,{children:[jsx(Dn,{onClick:f,style:{visibility:e==="preference"?"visible":"hidden"},children:jsx(vl,{})}),jsx(Mn,{isPreferenceView:e==="preference",children:p}),b.length>0?jsx(er,{items:b,isVisible:!0,theme:ze.headerDropdown}):null,jsx(Fn,{onClick:()=>{h?.();},children:jsx(qr,{})})]})},Xd=({showTabs:e})=>{let t=A(),{category:r,setCategory:o}=t,{preferences:n}=usePreferences(),a=(n?.categories||[])?.reduce((l,u)=>u.channels?.find(d=>d.id==="inApp")?.enabled===!1?l:[...l,{identifier:u.identifier,label:u.name}],[{identifier:"",label:"All"}]),s=a?.length>1;return jsx(Fragment,{children:e&&s?jsx(Ln,{activeTab:r,setActiveTab:o,tabs:a}):null})},_d=({route:e})=>{let{webPushState:t,subscribe:r}=useWebPush(),o=()=>r();return e==="home"?jsx(En,{}):e==="preference"?jsx(Wn,{enableWebPush:o,webPushState:t}):null};function zn({floatingProps:e,visible:t=!1,middlewareProps:r,setVisible:o,panelProps:n}){let{route:i,hideCategoryTabs:a}=A(),s=An();return jsx(Fragment,{children:t&&jsxs(gr,{style:e.styles,ref:e.setRef,...e.getFloatingProps(),children:[jsx(vr,{ref:r.arrow.setRef,style:{left:r.arrow.middlewareData?.x,top:r.arrow.middlewareData?.y,...r.arrow.styles||{}}}),jsxs(hr,{style:n.styles,children:[jsx(jd,{}),jsx(Qd,{route:i,setVisible:o,visible:t}),jsx(Xd,{showTabs:s&&i==="home"&&!a}),jsx(_d,{route:i}),jsx(Pn,{showPreferences:s})]})]})})}function Yn(e){"@babel/helpers - typeof";return Yn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Yn(e)}function Zn(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":Yn(XMLHttpRequest))==="object"}function Gd(e){return !!e&&typeof e.then=="function"}function bl(e){return Gd(e)?e:Promise.resolve(e)}function wl(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,o);}return r}function Rl(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?wl(Object(r),!0).forEach(function(o){Jd(e,o,r[o]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):wl(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o));});}return e}function Jd(e,t,r){return (t=qd(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function qd(e){var t=Kd(e,"string");return xt(t)=="symbol"?t:t+""}function Kd(e,t){if(xt(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,t||"default");if(xt(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return (t==="string"?String:Number)(e)}function xt(e){"@babel/helpers - typeof";return xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xt(e)}var Le;typeof fetch=="function"&&(typeof global<"u"&&global.fetch?Le=global.fetch:typeof window<"u"&&window.fetch?Le=window.fetch:Le=fetch);var ur;Zn()&&(typeof global<"u"&&global.XMLHttpRequest?ur=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(ur=window.XMLHttpRequest));var ro;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?ro=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(ro=window.ActiveXObject));typeof Le!="function"&&(Le=void 0);if(!Le&&!ur&&!ro)try{(async()=>Le=(await import('./browser-ponyfill-QQ5XD3EQ.js')).default)();}catch{}var jn=function(t,r){if(r&&xt(r)==="object"){var o="";for(var n in r)o+="&"+encodeURIComponent(n)+"="+encodeURIComponent(r[n]);if(!o)return t;t=t+(t.indexOf("?")!==-1?"&":"?")+o.slice(1);}return t},Tl=function(t,r,o,n){var i=function(l){if(!l.ok)return o(l.statusText||"Error",{status:l.status});l.text().then(function(u){o(null,{status:l.status,data:u});}).catch(o);};if(n){var a=n(t,r);if(a instanceof Promise){a.then(i).catch(o);return}}typeof fetch=="function"?fetch(t,r).then(i).catch(o):Le(t,r).then(i).catch(o);},Sl=!1,ep=function(t,r,o,n){t.queryStringParams&&(r=jn(r,t.queryStringParams));var i=Rl({},typeof t.customHeaders=="function"?t.customHeaders():t.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(i["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),o&&(i["Content-Type"]="application/json");var a=typeof t.requestOptions=="function"?t.requestOptions(o):t.requestOptions,s=Rl({method:o?"POST":"GET",body:o?t.stringify(o):void 0,headers:i},Sl?{}:a),l=typeof t.alternateFetch=="function"&&t.alternateFetch.length>=1?t.alternateFetch:void 0;try{Tl(r,s,n,l);}catch(u){if(!a||Object.keys(a).length===0||!u.message||u.message.indexOf("not implemented")<0)return n(u);try{Object.keys(a).forEach(function(c){delete s[c];}),Tl(r,s,n,l),Sl=!0;}catch(c){n(c);}}},tp=function(t,r,o,n){o&&xt(o)==="object"&&(o=jn("",o).slice(1)),t.queryStringParams&&(r=jn(r,t.queryStringParams));try{var i=ur?new ur:new ro("MSXML2.XMLHTTP.3.0");i.open(o?"POST":"GET",r,1),t.crossDomain||i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.withCredentials=!!t.withCredentials,o&&i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.overrideMimeType&&i.overrideMimeType("application/json");var a=t.customHeaders;if(a=typeof a=="function"?a():a,a)for(var s in a)i.setRequestHeader(s,a[s]);i.onreadystatechange=function(){i.readyState>3&&n(i.status>=400?i.statusText:null,{status:i.status,data:i.responseText});},i.send(o);}catch(l){console&&console.log(l);}},rp=function(t,r,o,n){if(typeof o=="function"&&(n=o,o=void 0),n=n||function(){},Le&&r.indexOf("file:")!==0)return ep(t,r,o,n);if(Zn()||typeof ActiveXObject=="function")return tp(t,r,o,n);n(new Error("No fetch and no xhr implementation found!"));},El=rp;function At(e){"@babel/helpers - typeof";return At=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},At(e)}function Pl(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,o);}return r}function Qn(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Pl(Object(r),!0).forEach(function(o){kl(e,o,r[o]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pl(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o));});}return e}function op(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Cl(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,Ol(o.key),o);}}function np(e,t,r){return t&&Cl(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function kl(e,t,r){return (t=Ol(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ol(e){var t=ip(e,"string");return At(t)=="symbol"?t:t+""}function ip(e,t){if(At(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,t||"default");if(At(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return (t==="string"?String:Number)(e)}var ap=function(){return {loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(r){return JSON.parse(r)},stringify:JSON.stringify,parsePayload:function(r,o,n){return kl({},o,n||"")},parseLoadPayload:function(r,o){},request:El,reloadInterval:typeof window<"u"?!1:60*60*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},Ml=function(){function e(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};op(this,e),this.services=t,this.options=r,this.allOptions=o,this.type="backend",this.init(t,r,o);}return np(e,[{key:"init",value:function(r){var o=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.services=r,this.options=Qn(Qn(Qn({},ap()),this.options||{}),n),this.allOptions=i,this.services&&this.options.reloadInterval){var a=setInterval(function(){return o.reload()},this.options.reloadInterval);At(a)==="object"&&typeof a.unref=="function"&&a.unref();}}},{key:"readMulti",value:function(r,o,n){this._readAny(r,r,o,o,n);}},{key:"read",value:function(r,o,n){this._readAny([r],r,[o],o,n);}},{key:"_readAny",value:function(r,o,n,i,a){var s=this,l=this.options.loadPath;typeof this.options.loadPath=="function"&&(l=this.options.loadPath(r,n)),l=bl(l),l.then(function(u){if(!u)return a(null,{});var c=s.services.interpolator.interpolate(u,{lng:r.join("+"),ns:n.join("+")});s.loadUrl(c,a,o,i);});}},{key:"loadUrl",value:function(r,o,n,i){var a=this,s=typeof n=="string"?[n]:n,l=typeof i=="string"?[i]:i,u=this.options.parseLoadPayload(s,l);this.options.request(this.options,r,u,function(c,d){if(d&&(d.status>=500&&d.status<600||!d.status))return o("failed loading "+r+"; status code: "+d.status,!0);if(d&&d.status>=400&&d.status<500)return o("failed loading "+r+"; status code: "+d.status,!1);if(!d&&c&&c.message){var p=c.message.toLowerCase(),f=["failed","fetch","network","load"].find(function(g){return p.indexOf(g)>-1});if(f)return o("failed loading "+r+": "+c.message,!0)}if(c)return o(c,!1);var m,h;try{typeof d.data=="string"?m=a.options.parse(d.data,n,i):m=d.data;}catch{h="failed parsing "+r+" to json";}if(h)return o(h,!1);o(null,m);});}},{key:"create",value:function(r,o,n,i,a){var s=this;if(this.options.addPath){typeof r=="string"&&(r=[r]);var l=this.options.parsePayload(o,n,i),u=0,c=[],d=[];r.forEach(function(p){var f=s.options.addPath;typeof s.options.addPath=="function"&&(f=s.options.addPath(p,o));var m=s.services.interpolator.interpolate(f,{lng:p,ns:o});s.options.request(s.options,m,l,function(h,g){u+=1,c.push(h),d.push(g),u===r.length&&typeof a=="function"&&a(c,d);});});}}},{key:"reload",value:function(){var r=this,o=this.services,n=o.backendConnector,i=o.languageUtils,a=o.logger,s=n.language;if(!(s&&s.toLowerCase()==="cimode")){var l=[],u=function(d){var p=i.toResolveHierarchy(d);p.forEach(function(f){l.indexOf(f)<0&&l.push(f);});};u(s),this.allOptions.preload&&this.allOptions.preload.forEach(function(c){return u(c)}),l.forEach(function(c){r.allOptions.ns.forEach(function(d){n.read(c,d,"read",null,null,function(p,f){p&&a.warn("loading namespace ".concat(d," for language ").concat(c," failed"),p),!p&&f&&a.log("loaded namespace ".concat(d," for language ").concat(c),f),n.loaded("".concat(c,"|").concat(d),p,f);});});});}}}])}();Ml.type="backend";var Fl=Ml;var Nl=({apiKey:e,userId:t,baseUrl:r,debug:o})=>sp.use(initReactI18next).use(Fl).init({debug:o,react:{useSuspense:!1},backend:{loadPath:`${r}v3/translations/inapp`,customHeaders:{"x-engagespot-api-key":e,"x-engagespot-user-id":t}}});var Dl=({apiKey:e,userId:t,disableTextTranslation:r,baseUrl:o,debug:n})=>{M__default.useLayoutEffect(()=>{!r&&e&&t&&Nl({apiKey:e,userId:t,baseUrl:o,debug:n});},[e,t,r,o,n]);};var Il=({setVisible:e})=>{let{panelOpenByDefault:t}=A(),[r,o]=useState(!1);useEffect(()=>{t&&!r&&(e(!0),o(!0));},[r,t,e]);};var Wl=()=>{let{profile:e}=A(),{setProfileAttributes:t}=usePreferences(),[r,o]=useState(!1);useEffect(()=>{e&&!r&&(t(e),o(!0));},[e,t,r]);};var Bl="https://notificationsounds.com/storage/sounds/file-sounds-1150-pristine.mp3";async function Vl(e){new Audio(e).play().catch(()=>{});}var Hl=e=>{let{API_BASE_URLS:t}=_internals,[r,o]=useState("home"),[n,i]=useState(""),{children:a,disableTextTranslation:s,enableErrorBoundary:l,...u}=e,c={...e,route:r,setRoute:o,category:n,setCategory:i},d=u.baseUrl??(e.dataRegion&&t[e.dataRegion])??t.us;Dl({apiKey:u?.apiKey,userId:u?.userId,disableTextTranslation:s,debug:u.debug,baseUrl:d});let p=jsx(EngagespotProvider,{options:u,children:a});return jsx(bo,{...c,children:l?jsx(ErrorBoundary,{FallbackComponent:aa,children:p}):p})},wp=({popover:e})=>{let t=A(),r=useActions(),{disableNotificationChime:o=!0,notificationChimeSrc:n,toast:i,events:a}=t||{},s=i?.toastProps?.renderToast;return useEvent("notificationReceive",l=>{if(e.isOpen&&setTimeout(()=>{r.markAsSeen({pageNo:1});},0),i?.enableToast)if(s)s?.({notificationReceiveEvent:l,toast:toast});else {let u=i?.toastProps?.message?.(l)??"New Notification",c=i?.toastProps?.description?.(l)??l?.notification?.title;toast(u,{description:c,...i?.toastProps?.options?.(l)});}o||Vl(n??Bl),a?.notificationReceive?.(l);}),useEvent("notificationDelete",l=>{a?.notificationDelete?.(l);}),useEvent("notificationDeleteAll",l=>{a?.notificationDeleteAll?.(l);}),useEvent("notificationRead",l=>{a?.notificationRead?.(l);}),useEvent("notificationReadAll",l=>{a?.notificationReadAll?.(l);}),useEvent("notificationSeen",l=>{a?.notificationSeen?.(l);}),useEvent("notificationStateChange",l=>{a?.notificationStateChange?.(l);}),null};function $l(){let e=A(),{panelOnly:t,panel:r,toast:o}=e??{},[n,i]=M__default.useState(!1),a=Nr({isOpen:r?.isOpen??n,setIsOpen:r?.setIsOpen??i,markAsSeenOnOpen:!0}),s={visible:a.isOpen,setVisible:a.setIsOpen,floatingProps:a.floatingProps,middlewareProps:a.middlewareProps,panelProps:a.panelProps};return Wl(),Il({setVisible:a.setIsOpen}),jsxs(Fragment,{children:[jsx(wp,{popover:a}),jsxs(wt,{children:[!t&&jsx(Eo,{buttonProps:a.referenceProps,panelOpen:a.isOpen,renderNotificationIcon:e.renderNotificationIcon}),jsx(zn,{...s})]}),o?.enableToast&&jsx(Toaster,{toastOptions:{style:{textAlign:"left"}},...o.toasterProps})]})}function Rp(e){return jsx(Hl,{enableErrorBoundary:!0,...e,children:jsx($l,{})})}var lT={EngagespotStyled:wt,themeConfig:ze};

export { Rp as Engagespot, $l as EngagespotCore, Hl as EngagespotProvider, lT as _internals };
