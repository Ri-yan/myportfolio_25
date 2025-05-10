(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var kl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},bS={exports:{}},Yu={},AS={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hl=Symbol.for("react.element"),bb=Symbol.for("react.portal"),Ab=Symbol.for("react.fragment"),Cb=Symbol.for("react.strict_mode"),Rb=Symbol.for("react.profiler"),Pb=Symbol.for("react.provider"),Lb=Symbol.for("react.context"),Db=Symbol.for("react.forward_ref"),Nb=Symbol.for("react.suspense"),Ib=Symbol.for("react.memo"),Ob=Symbol.for("react.lazy"),T0=Symbol.iterator;function Ub(t){return t===null||typeof t!="object"?null:(t=T0&&t[T0]||t["@@iterator"],typeof t=="function"?t:null)}var CS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},RS=Object.assign,PS={};function jo(t,e,n){this.props=t,this.context=e,this.refs=PS,this.updater=n||CS}jo.prototype.isReactComponent={};jo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};jo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function LS(){}LS.prototype=jo.prototype;function mm(t,e,n){this.props=t,this.context=e,this.refs=PS,this.updater=n||CS}var gm=mm.prototype=new LS;gm.constructor=mm;RS(gm,jo.prototype);gm.isPureReactComponent=!0;var b0=Array.isArray,DS=Object.prototype.hasOwnProperty,vm={current:null},NS={key:!0,ref:!0,__self:!0,__source:!0};function IS(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)DS.call(e,i)&&!NS.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:hl,type:t,key:s,ref:o,props:r,_owner:vm.current}}function kb(t,e){return{$$typeof:hl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ym(t){return typeof t=="object"&&t!==null&&t.$$typeof===hl}function Fb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var A0=/\/+/g;function jd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Fb(""+t.key):e.toString(36)}function Uc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case hl:case bb:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+jd(o,0):i,b0(r)?(n="",t!=null&&(n=t.replace(A0,"$&/")+"/"),Uc(r,e,n,"",function(c){return c})):r!=null&&(ym(r)&&(r=kb(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(A0,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",b0(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+jd(s,a);o+=Uc(s,e,n,l,r)}else if(l=Ub(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+jd(s,a++),o+=Uc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fl(t,e,n){if(t==null)return t;var i=[],r=0;return Uc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Bb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dn={current:null},kc={transition:null},zb={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:kc,ReactCurrentOwner:vm};function OS(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:Fl,forEach:function(t,e,n){Fl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fl(t,function(){e++}),e},toArray:function(t){return Fl(t,function(e){return e})||[]},only:function(t){if(!ym(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=jo;Ge.Fragment=Ab;Ge.Profiler=Rb;Ge.PureComponent=mm;Ge.StrictMode=Cb;Ge.Suspense=Nb;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zb;Ge.act=OS;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=RS({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vm.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)DS.call(e,l)&&!NS.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:hl,type:t.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(t){return t={$$typeof:Lb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Pb,_context:t},t.Consumer=t};Ge.createElement=IS;Ge.createFactory=function(t){var e=IS.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:Db,render:t}};Ge.isValidElement=ym;Ge.lazy=function(t){return{$$typeof:Ob,_payload:{_status:-1,_result:t},_init:Bb}};Ge.memo=function(t,e){return{$$typeof:Ib,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=kc.transition;kc.transition={};try{t()}finally{kc.transition=e}};Ge.unstable_act=OS;Ge.useCallback=function(t,e){return dn.current.useCallback(t,e)};Ge.useContext=function(t){return dn.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return dn.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return dn.current.useEffect(t,e)};Ge.useId=function(){return dn.current.useId()};Ge.useImperativeHandle=function(t,e,n){return dn.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return dn.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return dn.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return dn.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return dn.current.useReducer(t,e,n)};Ge.useRef=function(t){return dn.current.useRef(t)};Ge.useState=function(t){return dn.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return dn.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return dn.current.useTransition()};Ge.version="18.3.1";AS.exports=Ge;var H=AS.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vb=H,Hb=Symbol.for("react.element"),Gb=Symbol.for("react.fragment"),jb=Object.prototype.hasOwnProperty,Wb=Vb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$b={key:!0,ref:!0,__self:!0,__source:!0};function US(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)jb.call(e,i)&&!$b.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Hb,type:t,key:s,ref:o,props:r,_owner:Wb.current}}Yu.Fragment=Gb;Yu.jsx=US;Yu.jsxs=US;bS.exports=Yu;var E=bS.exports,kS={exports:{}},In={},FS={exports:{}},BS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,U){var B=D.length;D.push(U);e:for(;0<B;){var K=B-1>>>1,ne=D[K];if(0<r(ne,U))D[K]=U,D[B]=ne,B=K;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var U=D[0],B=D.pop();if(B!==U){D[0]=B;e:for(var K=0,ne=D.length,Te=ne>>>1;K<Te;){var G=2*(K+1)-1,Q=D[G],ce=G+1,_e=D[ce];if(0>r(Q,B))ce<ne&&0>r(_e,Q)?(D[K]=_e,D[ce]=B,K=ce):(D[K]=Q,D[G]=B,K=G);else if(ce<ne&&0>r(_e,B))D[K]=_e,D[ce]=B,K=ce;else break e}}return U}function r(D,U){var B=D.sortIndex-U.sortIndex;return B!==0?B:D.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(D){for(var U=n(c);U!==null;){if(U.callback===null)i(c);else if(U.startTime<=D)i(c),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(c)}}function x(D){if(_=!1,y(D),!g)if(n(l)!==null)g=!0,W(T);else{var U=n(c);U!==null&&Y(x,U.startTime-D)}}function T(D,U){g=!1,_&&(_=!1,h(L),L=-1),p=!0;var B=f;try{for(y(U),d=n(l);d!==null&&(!(d.expirationTime>U)||D&&!R());){var K=d.callback;if(typeof K=="function"){d.callback=null,f=d.priorityLevel;var ne=K(d.expirationTime<=U);U=t.unstable_now(),typeof ne=="function"?d.callback=ne:d===n(l)&&i(l),y(U)}else i(l);d=n(l)}if(d!==null)var Te=!0;else{var G=n(c);G!==null&&Y(x,G.startTime-U),Te=!1}return Te}finally{d=null,f=B,p=!1}}var w=!1,b=null,L=-1,$=5,S=-1;function R(){return!(t.unstable_now()-S<$)}function q(){if(b!==null){var D=t.unstable_now();S=D;var U=!0;try{U=b(!0,D)}finally{U?Z():(w=!1,b=null)}}else w=!1}var Z;if(typeof v=="function")Z=function(){v(q)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,X=N.port2;N.port1.onmessage=q,Z=function(){X.postMessage(null)}}else Z=function(){m(q,0)};function W(D){b=D,w||(w=!0,Z())}function Y(D,U){L=m(function(){D(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,W(T))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var U=3;break;default:U=f}var B=f;f=U;try{return D()}finally{f=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,U){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var B=f;f=D;try{return U()}finally{f=B}},t.unstable_scheduleCallback=function(D,U,B){var K=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?K+B:K):B=K,D){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=B+ne,D={id:u++,callback:U,priorityLevel:D,startTime:B,expirationTime:ne,sortIndex:-1},B>K?(D.sortIndex=B,e(c,D),n(l)===null&&D===n(c)&&(_?(h(L),L=-1):_=!0,Y(x,B-K))):(D.sortIndex=ne,e(l,D),g||p||(g=!0,W(T))),D},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(D){var U=f;return function(){var B=f;f=U;try{return D.apply(this,arguments)}finally{f=B}}}})(BS);FS.exports=BS;var Xb=FS.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qb=H,Pn=Xb;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zS=new Set,za={};function Ns(t,e){Ro(t,e),Ro(t+"Capture",e)}function Ro(t,e){for(za[t]=e,t=0;t<e.length;t++)zS.add(e[t])}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ph=Object.prototype.hasOwnProperty,Yb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,C0={},R0={};function Kb(t){return Ph.call(R0,t)?!0:Ph.call(C0,t)?!1:Yb.test(t)?R0[t]=!0:(C0[t]=!0,!1)}function Zb(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Qb(t,e,n,i){if(e===null||typeof e>"u"||Zb(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new fn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new fn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new fn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new fn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new fn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new fn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new fn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new fn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new fn(t,5,!1,t.toLowerCase(),null,!1,!1)});var _m=/[\-:]([a-z])/g;function xm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_m,xm);Xt[e]=new fn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_m,xm);Xt[e]=new fn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_m,xm);Xt[e]=new fn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new fn(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new fn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sm(t,e,n,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Qb(e,n,r,i)&&(n=null),i||r===null?Kb(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var er=qb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bl=Symbol.for("react.element"),Js=Symbol.for("react.portal"),eo=Symbol.for("react.fragment"),Em=Symbol.for("react.strict_mode"),Lh=Symbol.for("react.profiler"),VS=Symbol.for("react.provider"),HS=Symbol.for("react.context"),Mm=Symbol.for("react.forward_ref"),Dh=Symbol.for("react.suspense"),Nh=Symbol.for("react.suspense_list"),wm=Symbol.for("react.memo"),hr=Symbol.for("react.lazy"),GS=Symbol.for("react.offscreen"),P0=Symbol.iterator;function ta(t){return t===null||typeof t!="object"?null:(t=P0&&t[P0]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Object.assign,Wd;function va(t){if(Wd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wd=e&&e[1]||""}return`
`+Wd+t}var $d=!1;function Xd(t,e){if(!t||$d)return"";$d=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{$d=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?va(t):""}function Jb(t){switch(t.tag){case 5:return va(t.type);case 16:return va("Lazy");case 13:return va("Suspense");case 19:return va("SuspenseList");case 0:case 2:case 15:return t=Xd(t.type,!1),t;case 11:return t=Xd(t.type.render,!1),t;case 1:return t=Xd(t.type,!0),t;default:return""}}function Ih(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case eo:return"Fragment";case Js:return"Portal";case Lh:return"Profiler";case Em:return"StrictMode";case Dh:return"Suspense";case Nh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case HS:return(t.displayName||"Context")+".Consumer";case VS:return(t._context.displayName||"Context")+".Provider";case Mm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wm:return e=t.displayName||null,e!==null?e:Ih(t.type)||"Memo";case hr:e=t._payload,t=t._init;try{return Ih(t(e))}catch{}}return null}function eA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ih(e);case 8:return e===Em?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jS(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tA(t){var e=jS(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function zl(t){t._valueTracker||(t._valueTracker=tA(t))}function WS(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=jS(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function tu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Oh(t,e){var n=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function L0(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function $S(t,e){e=e.checked,e!=null&&Sm(t,"checked",e,!1)}function Uh(t,e){$S(t,e);var n=Nr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?kh(t,e.type,n):e.hasOwnProperty("defaultValue")&&kh(t,e.type,Nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function D0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function kh(t,e,n){(e!=="number"||tu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ya=Array.isArray;function _o(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Nr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Fh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function N0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(ya(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Nr(n)}}function XS(t,e){var n=Nr(e.value),i=Nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function I0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function qS(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?qS(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vl,YS=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Vl=Vl||document.createElement("div"),Vl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Va(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ta={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nA=["Webkit","ms","Moz","O"];Object.keys(Ta).forEach(function(t){nA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ta[e]=Ta[t]})});function KS(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ta.hasOwnProperty(t)&&Ta[t]?(""+e).trim():e+"px"}function ZS(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=KS(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var iA=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zh(t,e){if(e){if(iA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Vh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hh=null;function Tm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gh=null,xo=null,So=null;function O0(t){if(t=gl(t)){if(typeof Gh!="function")throw Error(te(280));var e=t.stateNode;e&&(e=ed(e),Gh(t.stateNode,t.type,e))}}function QS(t){xo?So?So.push(t):So=[t]:xo=t}function JS(){if(xo){var t=xo,e=So;if(So=xo=null,O0(t),e)for(t=0;t<e.length;t++)O0(e[t])}}function eE(t,e){return t(e)}function tE(){}var qd=!1;function nE(t,e,n){if(qd)return t(e,n);qd=!0;try{return eE(t,e,n)}finally{qd=!1,(xo!==null||So!==null)&&(tE(),JS())}}function Ha(t,e){var n=t.stateNode;if(n===null)return null;var i=ed(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var jh=!1;if(Xi)try{var na={};Object.defineProperty(na,"passive",{get:function(){jh=!0}}),window.addEventListener("test",na,na),window.removeEventListener("test",na,na)}catch{jh=!1}function rA(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var ba=!1,nu=null,iu=!1,Wh=null,sA={onError:function(t){ba=!0,nu=t}};function oA(t,e,n,i,r,s,o,a,l){ba=!1,nu=null,rA.apply(sA,arguments)}function aA(t,e,n,i,r,s,o,a,l){if(oA.apply(this,arguments),ba){if(ba){var c=nu;ba=!1,nu=null}else throw Error(te(198));iu||(iu=!0,Wh=c)}}function Is(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function iE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function U0(t){if(Is(t)!==t)throw Error(te(188))}function lA(t){var e=t.alternate;if(!e){if(e=Is(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return U0(r),t;if(s===i)return U0(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function rE(t){return t=lA(t),t!==null?sE(t):null}function sE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=sE(t);if(e!==null)return e;t=t.sibling}return null}var oE=Pn.unstable_scheduleCallback,k0=Pn.unstable_cancelCallback,cA=Pn.unstable_shouldYield,uA=Pn.unstable_requestPaint,At=Pn.unstable_now,dA=Pn.unstable_getCurrentPriorityLevel,bm=Pn.unstable_ImmediatePriority,aE=Pn.unstable_UserBlockingPriority,ru=Pn.unstable_NormalPriority,fA=Pn.unstable_LowPriority,lE=Pn.unstable_IdlePriority,Ku=null,_i=null;function hA(t){if(_i&&typeof _i.onCommitFiberRoot=="function")try{_i.onCommitFiberRoot(Ku,t,void 0,(t.current.flags&128)===128)}catch{}}var oi=Math.clz32?Math.clz32:gA,pA=Math.log,mA=Math.LN2;function gA(t){return t>>>=0,t===0?32:31-(pA(t)/mA|0)|0}var Hl=64,Gl=4194304;function _a(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function su(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=_a(a):(s&=o,s!==0&&(i=_a(s)))}else o=n&~r,o!==0?i=_a(o):s!==0&&(i=_a(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-oi(e),r=1<<n,i|=t[n],e&=~r;return i}function vA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yA(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-oi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=vA(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function $h(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cE(){var t=Hl;return Hl<<=1,!(Hl&4194240)&&(Hl=64),t}function Yd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function pl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-oi(e),t[e]=n}function _A(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-oi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Am(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-oi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Qe=0;function uE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var dE,Cm,fE,hE,pE,Xh=!1,jl=[],xr=null,Sr=null,Er=null,Ga=new Map,ja=new Map,mr=[],xA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function F0(t,e){switch(t){case"focusin":case"focusout":xr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":Ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ja.delete(e.pointerId)}}function ia(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=gl(e),e!==null&&Cm(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function SA(t,e,n,i,r){switch(e){case"focusin":return xr=ia(xr,t,e,n,i,r),!0;case"dragenter":return Sr=ia(Sr,t,e,n,i,r),!0;case"mouseover":return Er=ia(Er,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ga.set(s,ia(Ga.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ja.set(s,ia(ja.get(s)||null,t,e,n,i,r)),!0}return!1}function mE(t){var e=ls(t.target);if(e!==null){var n=Is(e);if(n!==null){if(e=n.tag,e===13){if(e=iE(n),e!==null){t.blockedOn=e,pE(t.priority,function(){fE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Hh=i,n.target.dispatchEvent(i),Hh=null}else return e=gl(n),e!==null&&Cm(e),t.blockedOn=n,!1;e.shift()}return!0}function B0(t,e,n){Fc(t)&&n.delete(e)}function EA(){Xh=!1,xr!==null&&Fc(xr)&&(xr=null),Sr!==null&&Fc(Sr)&&(Sr=null),Er!==null&&Fc(Er)&&(Er=null),Ga.forEach(B0),ja.forEach(B0)}function ra(t,e){t.blockedOn===e&&(t.blockedOn=null,Xh||(Xh=!0,Pn.unstable_scheduleCallback(Pn.unstable_NormalPriority,EA)))}function Wa(t){function e(r){return ra(r,t)}if(0<jl.length){ra(jl[0],t);for(var n=1;n<jl.length;n++){var i=jl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(xr!==null&&ra(xr,t),Sr!==null&&ra(Sr,t),Er!==null&&ra(Er,t),Ga.forEach(e),ja.forEach(e),n=0;n<mr.length;n++)i=mr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<mr.length&&(n=mr[0],n.blockedOn===null);)mE(n),n.blockedOn===null&&mr.shift()}var Eo=er.ReactCurrentBatchConfig,ou=!0;function MA(t,e,n,i){var r=Qe,s=Eo.transition;Eo.transition=null;try{Qe=1,Rm(t,e,n,i)}finally{Qe=r,Eo.transition=s}}function wA(t,e,n,i){var r=Qe,s=Eo.transition;Eo.transition=null;try{Qe=4,Rm(t,e,n,i)}finally{Qe=r,Eo.transition=s}}function Rm(t,e,n,i){if(ou){var r=qh(t,e,n,i);if(r===null)of(t,e,i,au,n),F0(t,i);else if(SA(r,t,e,n,i))i.stopPropagation();else if(F0(t,i),e&4&&-1<xA.indexOf(t)){for(;r!==null;){var s=gl(r);if(s!==null&&dE(s),s=qh(t,e,n,i),s===null&&of(t,e,i,au,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else of(t,e,i,null,n)}}var au=null;function qh(t,e,n,i){if(au=null,t=Tm(i),t=ls(t),t!==null)if(e=Is(t),e===null)t=null;else if(n=e.tag,n===13){if(t=iE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return au=t,null}function gE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dA()){case bm:return 1;case aE:return 4;case ru:case fA:return 16;case lE:return 536870912;default:return 16}default:return 16}}var vr=null,Pm=null,Bc=null;function vE(){if(Bc)return Bc;var t,e=Pm,n=e.length,i,r="value"in vr?vr.value:vr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Bc=r.slice(t,1<i?1-i:void 0)}function zc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wl(){return!0}function z0(){return!1}function On(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wl:z0,this.isPropagationStopped=z0,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wl)},persist:function(){},isPersistent:Wl}),e}var Wo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lm=On(Wo),ml=xt({},Wo,{view:0,detail:0}),TA=On(ml),Kd,Zd,sa,Zu=xt({},ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==sa&&(sa&&t.type==="mousemove"?(Kd=t.screenX-sa.screenX,Zd=t.screenY-sa.screenY):Zd=Kd=0,sa=t),Kd)},movementY:function(t){return"movementY"in t?t.movementY:Zd}}),V0=On(Zu),bA=xt({},Zu,{dataTransfer:0}),AA=On(bA),CA=xt({},ml,{relatedTarget:0}),Qd=On(CA),RA=xt({},Wo,{animationName:0,elapsedTime:0,pseudoElement:0}),PA=On(RA),LA=xt({},Wo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),DA=On(LA),NA=xt({},Wo,{data:0}),H0=On(NA),IA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},OA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},UA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=UA[t])?!!e[t]:!1}function Dm(){return kA}var FA=xt({},ml,{key:function(t){if(t.key){var e=IA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=zc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?OA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dm,charCode:function(t){return t.type==="keypress"?zc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),BA=On(FA),zA=xt({},Zu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),G0=On(zA),VA=xt({},ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dm}),HA=On(VA),GA=xt({},Wo,{propertyName:0,elapsedTime:0,pseudoElement:0}),jA=On(GA),WA=xt({},Zu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$A=On(WA),XA=[9,13,27,32],Nm=Xi&&"CompositionEvent"in window,Aa=null;Xi&&"documentMode"in document&&(Aa=document.documentMode);var qA=Xi&&"TextEvent"in window&&!Aa,yE=Xi&&(!Nm||Aa&&8<Aa&&11>=Aa),j0=" ",W0=!1;function _E(t,e){switch(t){case"keyup":return XA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var to=!1;function YA(t,e){switch(t){case"compositionend":return xE(e);case"keypress":return e.which!==32?null:(W0=!0,j0);case"textInput":return t=e.data,t===j0&&W0?null:t;default:return null}}function KA(t,e){if(to)return t==="compositionend"||!Nm&&_E(t,e)?(t=vE(),Bc=Pm=vr=null,to=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return yE&&e.locale!=="ko"?null:e.data;default:return null}}var ZA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ZA[t.type]:e==="textarea"}function SE(t,e,n,i){QS(i),e=lu(e,"onChange"),0<e.length&&(n=new Lm("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ca=null,$a=null;function QA(t){DE(t,0)}function Qu(t){var e=ro(t);if(WS(e))return t}function JA(t,e){if(t==="change")return e}var EE=!1;if(Xi){var Jd;if(Xi){var ef="oninput"in document;if(!ef){var X0=document.createElement("div");X0.setAttribute("oninput","return;"),ef=typeof X0.oninput=="function"}Jd=ef}else Jd=!1;EE=Jd&&(!document.documentMode||9<document.documentMode)}function q0(){Ca&&(Ca.detachEvent("onpropertychange",ME),$a=Ca=null)}function ME(t){if(t.propertyName==="value"&&Qu($a)){var e=[];SE(e,$a,t,Tm(t)),nE(QA,e)}}function eC(t,e,n){t==="focusin"?(q0(),Ca=e,$a=n,Ca.attachEvent("onpropertychange",ME)):t==="focusout"&&q0()}function tC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qu($a)}function nC(t,e){if(t==="click")return Qu(e)}function iC(t,e){if(t==="input"||t==="change")return Qu(e)}function rC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ci=typeof Object.is=="function"?Object.is:rC;function Xa(t,e){if(ci(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ph.call(e,r)||!ci(t[r],e[r]))return!1}return!0}function Y0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function K0(t,e){var n=Y0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Y0(n)}}function wE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?wE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function TE(){for(var t=window,e=tu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=tu(t.document)}return e}function Im(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sC(t){var e=TE(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&wE(n.ownerDocument.documentElement,n)){if(i!==null&&Im(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=K0(n,s);var o=K0(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var oC=Xi&&"documentMode"in document&&11>=document.documentMode,no=null,Yh=null,Ra=null,Kh=!1;function Z0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kh||no==null||no!==tu(i)||(i=no,"selectionStart"in i&&Im(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ra&&Xa(Ra,i)||(Ra=i,i=lu(Yh,"onSelect"),0<i.length&&(e=new Lm("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=no)))}function $l(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var io={animationend:$l("Animation","AnimationEnd"),animationiteration:$l("Animation","AnimationIteration"),animationstart:$l("Animation","AnimationStart"),transitionend:$l("Transition","TransitionEnd")},tf={},bE={};Xi&&(bE=document.createElement("div").style,"AnimationEvent"in window||(delete io.animationend.animation,delete io.animationiteration.animation,delete io.animationstart.animation),"TransitionEvent"in window||delete io.transitionend.transition);function Ju(t){if(tf[t])return tf[t];if(!io[t])return t;var e=io[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in bE)return tf[t]=e[n];return t}var AE=Ju("animationend"),CE=Ju("animationiteration"),RE=Ju("animationstart"),PE=Ju("transitionend"),LE=new Map,Q0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Br(t,e){LE.set(t,e),Ns(e,[t])}for(var nf=0;nf<Q0.length;nf++){var rf=Q0[nf],aC=rf.toLowerCase(),lC=rf[0].toUpperCase()+rf.slice(1);Br(aC,"on"+lC)}Br(AE,"onAnimationEnd");Br(CE,"onAnimationIteration");Br(RE,"onAnimationStart");Br("dblclick","onDoubleClick");Br("focusin","onFocus");Br("focusout","onBlur");Br(PE,"onTransitionEnd");Ro("onMouseEnter",["mouseout","mouseover"]);Ro("onMouseLeave",["mouseout","mouseover"]);Ro("onPointerEnter",["pointerout","pointerover"]);Ro("onPointerLeave",["pointerout","pointerover"]);Ns("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ns("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ns("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ns("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ns("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ns("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cC=new Set("cancel close invalid load scroll toggle".split(" ").concat(xa));function J0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,aA(i,e,void 0,t),t.currentTarget=null}function DE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;J0(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;J0(r,a,c),s=l}}}if(iu)throw t=Wh,iu=!1,Wh=null,t}function at(t,e){var n=e[tp];n===void 0&&(n=e[tp]=new Set);var i=t+"__bubble";n.has(i)||(NE(e,t,2,!1),n.add(i))}function sf(t,e,n){var i=0;e&&(i|=4),NE(n,t,i,e)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function qa(t){if(!t[Xl]){t[Xl]=!0,zS.forEach(function(n){n!=="selectionchange"&&(cC.has(n)||sf(n,!1,t),sf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xl]||(e[Xl]=!0,sf("selectionchange",!1,e))}}function NE(t,e,n,i){switch(gE(e)){case 1:var r=MA;break;case 4:r=wA;break;default:r=Rm}n=r.bind(null,e,n,t),r=void 0,!jh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function of(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ls(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}nE(function(){var c=s,u=Tm(n),d=[];e:{var f=LE.get(t);if(f!==void 0){var p=Lm,g=t;switch(t){case"keypress":if(zc(n)===0)break e;case"keydown":case"keyup":p=BA;break;case"focusin":g="focus",p=Qd;break;case"focusout":g="blur",p=Qd;break;case"beforeblur":case"afterblur":p=Qd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=V0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=AA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=HA;break;case AE:case CE:case RE:p=PA;break;case PE:p=jA;break;case"scroll":p=TA;break;case"wheel":p=$A;break;case"copy":case"cut":case"paste":p=DA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=G0}var _=(e&4)!==0,m=!_&&t==="scroll",h=_?f!==null?f+"Capture":null:f;_=[];for(var v=c,y;v!==null;){y=v;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,h!==null&&(x=Ha(v,h),x!=null&&_.push(Ya(v,x,y)))),m)break;v=v.return}0<_.length&&(f=new p(f,g,null,n,u),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Hh&&(g=n.relatedTarget||n.fromElement)&&(ls(g)||g[qi]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?ls(g):null,g!==null&&(m=Is(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(_=V0,x="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=G0,x="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?f:ro(p),y=g==null?f:ro(g),f=new _(x,v+"leave",p,n,u),f.target=m,f.relatedTarget=y,x=null,ls(u)===c&&(_=new _(h,v+"enter",g,n,u),_.target=y,_.relatedTarget=m,x=_),m=x,p&&g)t:{for(_=p,h=g,v=0,y=_;y;y=Us(y))v++;for(y=0,x=h;x;x=Us(x))y++;for(;0<v-y;)_=Us(_),v--;for(;0<y-v;)h=Us(h),y--;for(;v--;){if(_===h||h!==null&&_===h.alternate)break t;_=Us(_),h=Us(h)}_=null}else _=null;p!==null&&ev(d,f,p,_,!1),g!==null&&m!==null&&ev(d,m,g,_,!0)}}e:{if(f=c?ro(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=JA;else if($0(f))if(EE)T=iC;else{T=tC;var w=eC}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=nC);if(T&&(T=T(t,c))){SE(d,T,n,u);break e}w&&w(t,f,c),t==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&kh(f,"number",f.value)}switch(w=c?ro(c):window,t){case"focusin":($0(w)||w.contentEditable==="true")&&(no=w,Yh=c,Ra=null);break;case"focusout":Ra=Yh=no=null;break;case"mousedown":Kh=!0;break;case"contextmenu":case"mouseup":case"dragend":Kh=!1,Z0(d,n,u);break;case"selectionchange":if(oC)break;case"keydown":case"keyup":Z0(d,n,u)}var b;if(Nm)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else to?_E(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(yE&&n.locale!=="ko"&&(to||L!=="onCompositionStart"?L==="onCompositionEnd"&&to&&(b=vE()):(vr=u,Pm="value"in vr?vr.value:vr.textContent,to=!0)),w=lu(c,L),0<w.length&&(L=new H0(L,t,null,n,u),d.push({event:L,listeners:w}),b?L.data=b:(b=xE(n),b!==null&&(L.data=b)))),(b=qA?YA(t,n):KA(t,n))&&(c=lu(c,"onBeforeInput"),0<c.length&&(u=new H0("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=b))}DE(d,e)})}function Ya(t,e,n){return{instance:t,listener:e,currentTarget:n}}function lu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ha(t,n),s!=null&&i.unshift(Ya(t,s,r)),s=Ha(t,e),s!=null&&i.push(Ya(t,s,r))),t=t.return}return i}function Us(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ev(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ha(n,s),l!=null&&o.unshift(Ya(n,l,a))):r||(l=Ha(n,s),l!=null&&o.push(Ya(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var uC=/\r\n?/g,dC=/\u0000|\uFFFD/g;function tv(t){return(typeof t=="string"?t:""+t).replace(uC,`
`).replace(dC,"")}function ql(t,e,n){if(e=tv(e),tv(t)!==e&&n)throw Error(te(425))}function cu(){}var Zh=null,Qh=null;function Jh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ep=typeof setTimeout=="function"?setTimeout:void 0,fC=typeof clearTimeout=="function"?clearTimeout:void 0,nv=typeof Promise=="function"?Promise:void 0,hC=typeof queueMicrotask=="function"?queueMicrotask:typeof nv<"u"?function(t){return nv.resolve(null).then(t).catch(pC)}:ep;function pC(t){setTimeout(function(){throw t})}function af(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Wa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Wa(e)}function Mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function iv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $o=Math.random().toString(36).slice(2),gi="__reactFiber$"+$o,Ka="__reactProps$"+$o,qi="__reactContainer$"+$o,tp="__reactEvents$"+$o,mC="__reactListeners$"+$o,gC="__reactHandles$"+$o;function ls(t){var e=t[gi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qi]||n[gi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=iv(t);t!==null;){if(n=t[gi])return n;t=iv(t)}return e}t=n,n=t.parentNode}return null}function gl(t){return t=t[gi]||t[qi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ro(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function ed(t){return t[Ka]||null}var np=[],so=-1;function zr(t){return{current:t}}function ut(t){0>so||(t.current=np[so],np[so]=null,so--)}function st(t,e){so++,np[so]=t.current,t.current=e}var Ir={},rn=zr(Ir),yn=zr(!1),Ss=Ir;function Po(t,e){var n=t.type.contextTypes;if(!n)return Ir;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function _n(t){return t=t.childContextTypes,t!=null}function uu(){ut(yn),ut(rn)}function rv(t,e,n){if(rn.current!==Ir)throw Error(te(168));st(rn,e),st(yn,n)}function IE(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,eA(t)||"Unknown",r));return xt({},n,i)}function du(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ir,Ss=rn.current,st(rn,t),st(yn,yn.current),!0}function sv(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=IE(t,e,Ss),i.__reactInternalMemoizedMergedChildContext=t,ut(yn),ut(rn),st(rn,t)):ut(yn),st(yn,n)}var Oi=null,td=!1,lf=!1;function OE(t){Oi===null?Oi=[t]:Oi.push(t)}function vC(t){td=!0,OE(t)}function Vr(){if(!lf&&Oi!==null){lf=!0;var t=0,e=Qe;try{var n=Oi;for(Qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Oi=null,td=!1}catch(r){throw Oi!==null&&(Oi=Oi.slice(t+1)),oE(bm,Vr),r}finally{Qe=e,lf=!1}}return null}var oo=[],ao=0,fu=null,hu=0,Vn=[],Hn=0,Es=null,Fi=1,Bi="";function Qr(t,e){oo[ao++]=hu,oo[ao++]=fu,fu=t,hu=e}function UE(t,e,n){Vn[Hn++]=Fi,Vn[Hn++]=Bi,Vn[Hn++]=Es,Es=t;var i=Fi;t=Bi;var r=32-oi(i)-1;i&=~(1<<r),n+=1;var s=32-oi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Fi=1<<32-oi(e)+r|n<<r|i,Bi=s+t}else Fi=1<<s|n<<r|i,Bi=t}function Om(t){t.return!==null&&(Qr(t,1),UE(t,1,0))}function Um(t){for(;t===fu;)fu=oo[--ao],oo[ao]=null,hu=oo[--ao],oo[ao]=null;for(;t===Es;)Es=Vn[--Hn],Vn[Hn]=null,Bi=Vn[--Hn],Vn[Hn]=null,Fi=Vn[--Hn],Vn[Hn]=null}var Rn=null,Cn=null,ft=!1,ni=null;function kE(t,e){var n=Wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ov(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rn=t,Cn=Mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rn=t,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Es!==null?{id:Fi,overflow:Bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rn=t,Cn=null,!0):!1;default:return!1}}function ip(t){return(t.mode&1)!==0&&(t.flags&128)===0}function rp(t){if(ft){var e=Cn;if(e){var n=e;if(!ov(t,e)){if(ip(t))throw Error(te(418));e=Mr(n.nextSibling);var i=Rn;e&&ov(t,e)?kE(i,n):(t.flags=t.flags&-4097|2,ft=!1,Rn=t)}}else{if(ip(t))throw Error(te(418));t.flags=t.flags&-4097|2,ft=!1,Rn=t}}}function av(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rn=t}function Yl(t){if(t!==Rn)return!1;if(!ft)return av(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Jh(t.type,t.memoizedProps)),e&&(e=Cn)){if(ip(t))throw FE(),Error(te(418));for(;e;)kE(t,e),e=Mr(e.nextSibling)}if(av(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Cn=Mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Cn=null}}else Cn=Rn?Mr(t.stateNode.nextSibling):null;return!0}function FE(){for(var t=Cn;t;)t=Mr(t.nextSibling)}function Lo(){Cn=Rn=null,ft=!1}function km(t){ni===null?ni=[t]:ni.push(t)}var yC=er.ReactCurrentBatchConfig;function oa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function Kl(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function lv(t){var e=t._init;return e(t._payload)}function BE(t){function e(h,v){if(t){var y=h.deletions;y===null?(h.deletions=[v],h.flags|=16):y.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Ar(h,v),h.index=0,h.sibling=null,h}function s(h,v,y){return h.index=y,t?(y=h.alternate,y!==null?(y=y.index,y<v?(h.flags|=2,v):y):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,v,y,x){return v===null||v.tag!==6?(v=mf(y,h.mode,x),v.return=h,v):(v=r(v,y),v.return=h,v)}function l(h,v,y,x){var T=y.type;return T===eo?u(h,v,y.props.children,x,y.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===hr&&lv(T)===v.type)?(x=r(v,y.props),x.ref=oa(h,v,y),x.return=h,x):(x=Xc(y.type,y.key,y.props,null,h.mode,x),x.ref=oa(h,v,y),x.return=h,x)}function c(h,v,y,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=gf(y,h.mode,x),v.return=h,v):(v=r(v,y.children||[]),v.return=h,v)}function u(h,v,y,x,T){return v===null||v.tag!==7?(v=ms(y,h.mode,x,T),v.return=h,v):(v=r(v,y),v.return=h,v)}function d(h,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=mf(""+v,h.mode,y),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Bl:return y=Xc(v.type,v.key,v.props,null,h.mode,y),y.ref=oa(h,null,v),y.return=h,y;case Js:return v=gf(v,h.mode,y),v.return=h,v;case hr:var x=v._init;return d(h,x(v._payload),y)}if(ya(v)||ta(v))return v=ms(v,h.mode,y,null),v.return=h,v;Kl(h,v)}return null}function f(h,v,y,x){var T=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(h,v,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Bl:return y.key===T?l(h,v,y,x):null;case Js:return y.key===T?c(h,v,y,x):null;case hr:return T=y._init,f(h,v,T(y._payload),x)}if(ya(y)||ta(y))return T!==null?null:u(h,v,y,x,null);Kl(h,y)}return null}function p(h,v,y,x,T){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(y)||null,a(v,h,""+x,T);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Bl:return h=h.get(x.key===null?y:x.key)||null,l(v,h,x,T);case Js:return h=h.get(x.key===null?y:x.key)||null,c(v,h,x,T);case hr:var w=x._init;return p(h,v,y,w(x._payload),T)}if(ya(x)||ta(x))return h=h.get(y)||null,u(v,h,x,T,null);Kl(v,x)}return null}function g(h,v,y,x){for(var T=null,w=null,b=v,L=v=0,$=null;b!==null&&L<y.length;L++){b.index>L?($=b,b=null):$=b.sibling;var S=f(h,b,y[L],x);if(S===null){b===null&&(b=$);break}t&&b&&S.alternate===null&&e(h,b),v=s(S,v,L),w===null?T=S:w.sibling=S,w=S,b=$}if(L===y.length)return n(h,b),ft&&Qr(h,L),T;if(b===null){for(;L<y.length;L++)b=d(h,y[L],x),b!==null&&(v=s(b,v,L),w===null?T=b:w.sibling=b,w=b);return ft&&Qr(h,L),T}for(b=i(h,b);L<y.length;L++)$=p(b,h,L,y[L],x),$!==null&&(t&&$.alternate!==null&&b.delete($.key===null?L:$.key),v=s($,v,L),w===null?T=$:w.sibling=$,w=$);return t&&b.forEach(function(R){return e(h,R)}),ft&&Qr(h,L),T}function _(h,v,y,x){var T=ta(y);if(typeof T!="function")throw Error(te(150));if(y=T.call(y),y==null)throw Error(te(151));for(var w=T=null,b=v,L=v=0,$=null,S=y.next();b!==null&&!S.done;L++,S=y.next()){b.index>L?($=b,b=null):$=b.sibling;var R=f(h,b,S.value,x);if(R===null){b===null&&(b=$);break}t&&b&&R.alternate===null&&e(h,b),v=s(R,v,L),w===null?T=R:w.sibling=R,w=R,b=$}if(S.done)return n(h,b),ft&&Qr(h,L),T;if(b===null){for(;!S.done;L++,S=y.next())S=d(h,S.value,x),S!==null&&(v=s(S,v,L),w===null?T=S:w.sibling=S,w=S);return ft&&Qr(h,L),T}for(b=i(h,b);!S.done;L++,S=y.next())S=p(b,h,L,S.value,x),S!==null&&(t&&S.alternate!==null&&b.delete(S.key===null?L:S.key),v=s(S,v,L),w===null?T=S:w.sibling=S,w=S);return t&&b.forEach(function(q){return e(h,q)}),ft&&Qr(h,L),T}function m(h,v,y,x){if(typeof y=="object"&&y!==null&&y.type===eo&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Bl:e:{for(var T=y.key,w=v;w!==null;){if(w.key===T){if(T=y.type,T===eo){if(w.tag===7){n(h,w.sibling),v=r(w,y.props.children),v.return=h,h=v;break e}}else if(w.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===hr&&lv(T)===w.type){n(h,w.sibling),v=r(w,y.props),v.ref=oa(h,w,y),v.return=h,h=v;break e}n(h,w);break}else e(h,w);w=w.sibling}y.type===eo?(v=ms(y.props.children,h.mode,x,y.key),v.return=h,h=v):(x=Xc(y.type,y.key,y.props,null,h.mode,x),x.ref=oa(h,v,y),x.return=h,h=x)}return o(h);case Js:e:{for(w=y.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(h,v.sibling),v=r(v,y.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=gf(y,h.mode,x),v.return=h,h=v}return o(h);case hr:return w=y._init,m(h,v,w(y._payload),x)}if(ya(y))return g(h,v,y,x);if(ta(y))return _(h,v,y,x);Kl(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,y),v.return=h,h=v):(n(h,v),v=mf(y,h.mode,x),v.return=h,h=v),o(h)):n(h,v)}return m}var Do=BE(!0),zE=BE(!1),pu=zr(null),mu=null,lo=null,Fm=null;function Bm(){Fm=lo=mu=null}function zm(t){var e=pu.current;ut(pu),t._currentValue=e}function sp(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Mo(t,e){mu=t,Fm=lo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vn=!0),t.firstContext=null)}function Xn(t){var e=t._currentValue;if(Fm!==t)if(t={context:t,memoizedValue:e,next:null},lo===null){if(mu===null)throw Error(te(308));lo=t,mu.dependencies={lanes:0,firstContext:t}}else lo=lo.next=t;return e}var cs=null;function Vm(t){cs===null?cs=[t]:cs.push(t)}function VE(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Vm(e)):(n.next=r.next,r.next=n),e.interleaved=n,Yi(t,i)}function Yi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var pr=!1;function Hm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function HE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function wr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Yi(t,n)}return r=i.interleaved,r===null?(e.next=e,Vm(i)):(e.next=r.next,r.next=e),i.interleaved=e,Yi(t,n)}function Vc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Am(t,n)}}function cv(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function gu(t,e,n,i){var r=t.updateQueue;pr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,_=a;switch(f=e,p=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){d=g.call(p,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,f=typeof g=="function"?g.call(p,d,f):g,f==null)break e;d=xt({},d,f);break e;case 2:pr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ws|=o,t.lanes=o,t.memoizedState=d}}function uv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var vl={},xi=zr(vl),Za=zr(vl),Qa=zr(vl);function us(t){if(t===vl)throw Error(te(174));return t}function Gm(t,e){switch(st(Qa,e),st(Za,t),st(xi,vl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bh(e,t)}ut(xi),st(xi,e)}function No(){ut(xi),ut(Za),ut(Qa)}function GE(t){us(Qa.current);var e=us(xi.current),n=Bh(e,t.type);e!==n&&(st(Za,t),st(xi,n))}function jm(t){Za.current===t&&(ut(xi),ut(Za))}var vt=zr(0);function vu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cf=[];function Wm(){for(var t=0;t<cf.length;t++)cf[t]._workInProgressVersionPrimary=null;cf.length=0}var Hc=er.ReactCurrentDispatcher,uf=er.ReactCurrentBatchConfig,Ms=0,_t=null,Pt=null,kt=null,yu=!1,Pa=!1,Ja=0,_C=0;function Yt(){throw Error(te(321))}function $m(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ci(t[n],e[n]))return!1;return!0}function Xm(t,e,n,i,r,s){if(Ms=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Hc.current=t===null||t.memoizedState===null?MC:wC,t=n(i,r),Pa){s=0;do{if(Pa=!1,Ja=0,25<=s)throw Error(te(301));s+=1,kt=Pt=null,e.updateQueue=null,Hc.current=TC,t=n(i,r)}while(Pa)}if(Hc.current=_u,e=Pt!==null&&Pt.next!==null,Ms=0,kt=Pt=_t=null,yu=!1,e)throw Error(te(300));return t}function qm(){var t=Ja!==0;return Ja=0,t}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?_t.memoizedState=kt=t:kt=kt.next=t,kt}function qn(){if(Pt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var e=kt===null?_t.memoizedState:kt.next;if(e!==null)kt=e,Pt=t;else{if(t===null)throw Error(te(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},kt===null?_t.memoizedState=kt=t:kt=kt.next=t}return kt}function el(t,e){return typeof e=="function"?e(t):e}function df(t){var e=qn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=Pt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Ms&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,_t.lanes|=u,ws|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ci(i,e.memoizedState)||(vn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,_t.lanes|=s,ws|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ff(t){var e=qn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ci(s,e.memoizedState)||(vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function jE(){}function WE(t,e){var n=_t,i=qn(),r=e(),s=!ci(i.memoizedState,r);if(s&&(i.memoizedState=r,vn=!0),i=i.queue,Ym(qE.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||kt!==null&&kt.memoizedState.tag&1){if(n.flags|=2048,tl(9,XE.bind(null,n,i,r,e),void 0,null),Ft===null)throw Error(te(349));Ms&30||$E(n,e,r)}return r}function $E(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function XE(t,e,n,i){e.value=n,e.getSnapshot=i,YE(e)&&KE(t)}function qE(t,e,n){return n(function(){YE(e)&&KE(t)})}function YE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ci(t,n)}catch{return!0}}function KE(t){var e=Yi(t,1);e!==null&&ai(e,t,1,-1)}function dv(t){var e=hi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:el,lastRenderedState:t},e.queue=t,t=t.dispatch=EC.bind(null,_t,t),[e.memoizedState,t]}function tl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function ZE(){return qn().memoizedState}function Gc(t,e,n,i){var r=hi();_t.flags|=t,r.memoizedState=tl(1|e,n,void 0,i===void 0?null:i)}function nd(t,e,n,i){var r=qn();i=i===void 0?null:i;var s=void 0;if(Pt!==null){var o=Pt.memoizedState;if(s=o.destroy,i!==null&&$m(i,o.deps)){r.memoizedState=tl(e,n,s,i);return}}_t.flags|=t,r.memoizedState=tl(1|e,n,s,i)}function fv(t,e){return Gc(8390656,8,t,e)}function Ym(t,e){return nd(2048,8,t,e)}function QE(t,e){return nd(4,2,t,e)}function JE(t,e){return nd(4,4,t,e)}function eM(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function tM(t,e,n){return n=n!=null?n.concat([t]):null,nd(4,4,eM.bind(null,e,t),n)}function Km(){}function nM(t,e){var n=qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&$m(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function iM(t,e){var n=qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&$m(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function rM(t,e,n){return Ms&21?(ci(n,e)||(n=cE(),_t.lanes|=n,ws|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vn=!0),t.memoizedState=n)}function xC(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var i=uf.transition;uf.transition={};try{t(!1),e()}finally{Qe=n,uf.transition=i}}function sM(){return qn().memoizedState}function SC(t,e,n){var i=br(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},oM(t))aM(e,n);else if(n=VE(t,e,n,i),n!==null){var r=cn();ai(n,t,i,r),lM(n,e,i)}}function EC(t,e,n){var i=br(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(oM(t))aM(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ci(a,o)){var l=e.interleaved;l===null?(r.next=r,Vm(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=VE(t,e,r,i),n!==null&&(r=cn(),ai(n,t,i,r),lM(n,e,i))}}function oM(t){var e=t.alternate;return t===_t||e!==null&&e===_t}function aM(t,e){Pa=yu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function lM(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Am(t,n)}}var _u={readContext:Xn,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},MC={readContext:Xn,useCallback:function(t,e){return hi().memoizedState=[t,e===void 0?null:e],t},useContext:Xn,useEffect:fv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Gc(4194308,4,eM.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Gc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Gc(4,2,t,e)},useMemo:function(t,e){var n=hi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=hi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=SC.bind(null,_t,t),[i.memoizedState,t]},useRef:function(t){var e=hi();return t={current:t},e.memoizedState=t},useState:dv,useDebugValue:Km,useDeferredValue:function(t){return hi().memoizedState=t},useTransition:function(){var t=dv(!1),e=t[0];return t=xC.bind(null,t[1]),hi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=_t,r=hi();if(ft){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Ft===null)throw Error(te(349));Ms&30||$E(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,fv(qE.bind(null,i,s,t),[t]),i.flags|=2048,tl(9,XE.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=hi(),e=Ft.identifierPrefix;if(ft){var n=Bi,i=Fi;n=(i&~(1<<32-oi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ja++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_C++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},wC={readContext:Xn,useCallback:nM,useContext:Xn,useEffect:Ym,useImperativeHandle:tM,useInsertionEffect:QE,useLayoutEffect:JE,useMemo:iM,useReducer:df,useRef:ZE,useState:function(){return df(el)},useDebugValue:Km,useDeferredValue:function(t){var e=qn();return rM(e,Pt.memoizedState,t)},useTransition:function(){var t=df(el)[0],e=qn().memoizedState;return[t,e]},useMutableSource:jE,useSyncExternalStore:WE,useId:sM,unstable_isNewReconciler:!1},TC={readContext:Xn,useCallback:nM,useContext:Xn,useEffect:Ym,useImperativeHandle:tM,useInsertionEffect:QE,useLayoutEffect:JE,useMemo:iM,useReducer:ff,useRef:ZE,useState:function(){return ff(el)},useDebugValue:Km,useDeferredValue:function(t){var e=qn();return Pt===null?e.memoizedState=t:rM(e,Pt.memoizedState,t)},useTransition:function(){var t=ff(el)[0],e=qn().memoizedState;return[t,e]},useMutableSource:jE,useSyncExternalStore:WE,useId:sM,unstable_isNewReconciler:!1};function ei(t,e){if(t&&t.defaultProps){e=xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function op(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var id={isMounted:function(t){return(t=t._reactInternals)?Is(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=cn(),r=br(t),s=Hi(i,r);s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,r),e!==null&&(ai(e,t,r,i),Vc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=cn(),r=br(t),s=Hi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,r),e!==null&&(ai(e,t,r,i),Vc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=cn(),i=br(t),r=Hi(n,i);r.tag=2,e!=null&&(r.callback=e),e=wr(t,r,i),e!==null&&(ai(e,t,i,n),Vc(e,t,i))}};function hv(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xa(n,i)||!Xa(r,s):!0}function cM(t,e,n){var i=!1,r=Ir,s=e.contextType;return typeof s=="object"&&s!==null?s=Xn(s):(r=_n(e)?Ss:rn.current,i=e.contextTypes,s=(i=i!=null)?Po(t,r):Ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=id,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function pv(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&id.enqueueReplaceState(e,e.state,null)}function ap(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Hm(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Xn(s):(s=_n(e)?Ss:rn.current,r.context=Po(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(op(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&id.enqueueReplaceState(r,r.state,null),gu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Io(t,e){try{var n="",i=e;do n+=Jb(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function hf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function lp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var bC=typeof WeakMap=="function"?WeakMap:Map;function uM(t,e,n){n=Hi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Su||(Su=!0,yp=i),lp(t,e)},n}function dM(t,e,n){n=Hi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){lp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){lp(t,e),typeof i!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function mv(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new bC;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=zC.bind(null,t,e,n),e.then(t,t))}function gv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vv(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Hi(-1,1),e.tag=2,wr(n,e,1))),n.lanes|=1),t)}var AC=er.ReactCurrentOwner,vn=!1;function an(t,e,n,i){e.child=t===null?zE(e,null,n,i):Do(e,t.child,n,i)}function yv(t,e,n,i,r){n=n.render;var s=e.ref;return Mo(e,r),i=Xm(t,e,n,i,s,r),n=qm(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ki(t,e,r)):(ft&&n&&Om(e),e.flags|=1,an(t,e,i,r),e.child)}function _v(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!rg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,fM(t,e,s,i,r)):(t=Xc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xa,n(o,i)&&t.ref===e.ref)return Ki(t,e,r)}return e.flags|=1,t=Ar(s,i),t.ref=e.ref,t.return=e,e.child=t}function fM(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Xa(s,i)&&t.ref===e.ref)if(vn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(vn=!0);else return e.lanes=t.lanes,Ki(t,e,r)}return cp(t,e,n,i,r)}function hM(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(uo,An),An|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(uo,An),An|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(uo,An),An|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(uo,An),An|=i;return an(t,e,r,n),e.child}function pM(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function cp(t,e,n,i,r){var s=_n(n)?Ss:rn.current;return s=Po(e,s),Mo(e,r),n=Xm(t,e,n,i,s,r),i=qm(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ki(t,e,r)):(ft&&i&&Om(e),e.flags|=1,an(t,e,n,r),e.child)}function xv(t,e,n,i,r){if(_n(n)){var s=!0;du(e)}else s=!1;if(Mo(e,r),e.stateNode===null)jc(t,e),cM(e,n,i),ap(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Xn(c):(c=_n(n)?Ss:rn.current,c=Po(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&pv(e,o,i,c),pr=!1;var f=e.memoizedState;o.state=f,gu(e,i,o,r),l=e.memoizedState,a!==i||f!==l||yn.current||pr?(typeof u=="function"&&(op(e,n,u,i),l=e.memoizedState),(a=pr||hv(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,HE(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ei(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Xn(l):(l=_n(n)?Ss:rn.current,l=Po(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&pv(e,o,i,l),pr=!1,f=e.memoizedState,o.state=f,gu(e,i,o,r);var g=e.memoizedState;a!==d||f!==g||yn.current||pr?(typeof p=="function"&&(op(e,n,p,i),g=e.memoizedState),(c=pr||hv(e,n,c,i,f,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return up(t,e,n,i,s,r)}function up(t,e,n,i,r,s){pM(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&sv(e,n,!1),Ki(t,e,s);i=e.stateNode,AC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Do(e,t.child,null,s),e.child=Do(e,null,a,s)):an(t,e,a,s),e.memoizedState=i.state,r&&sv(e,n,!0),e.child}function mM(t){var e=t.stateNode;e.pendingContext?rv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&rv(t,e.context,!1),Gm(t,e.containerInfo)}function Sv(t,e,n,i,r){return Lo(),km(r),e.flags|=256,an(t,e,n,i),e.child}var dp={dehydrated:null,treeContext:null,retryLane:0};function fp(t){return{baseLanes:t,cachePool:null,transitions:null}}function gM(t,e,n){var i=e.pendingProps,r=vt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(vt,r&1),t===null)return rp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=od(o,i,0,null),t=ms(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=fp(n),e.memoizedState=dp,t):Zm(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return CC(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ar(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ar(a,s):(s=ms(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?fp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=dp,i}return s=t.child,t=s.sibling,i=Ar(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Zm(t,e){return e=od({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Zl(t,e,n,i){return i!==null&&km(i),Do(e,t.child,null,n),t=Zm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function CC(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=hf(Error(te(422))),Zl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=od({mode:"visible",children:i.children},r,0,null),s=ms(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Do(e,t.child,null,o),e.child.memoizedState=fp(o),e.memoizedState=dp,s);if(!(e.mode&1))return Zl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=hf(s,i,void 0),Zl(t,e,o,i)}if(a=(o&t.childLanes)!==0,vn||a){if(i=Ft,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Yi(t,r),ai(i,t,r,-1))}return ig(),i=hf(Error(te(421))),Zl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=VC.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Cn=Mr(r.nextSibling),Rn=e,ft=!0,ni=null,t!==null&&(Vn[Hn++]=Fi,Vn[Hn++]=Bi,Vn[Hn++]=Es,Fi=t.id,Bi=t.overflow,Es=e),e=Zm(e,i.children),e.flags|=4096,e)}function Ev(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),sp(t.return,e,n)}function pf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function vM(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(an(t,e,i.children,n),i=vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ev(t,n,e);else if(t.tag===19)Ev(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&vu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),pf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&vu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}pf(e,!0,n,null,s);break;case"together":pf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function jc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ki(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ws|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=Ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function RC(t,e,n){switch(e.tag){case 3:mM(e),Lo();break;case 5:GE(e);break;case 1:_n(e.type)&&du(e);break;case 4:Gm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(pu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(vt,vt.current&1),e.flags|=128,null):n&e.child.childLanes?gM(t,e,n):(st(vt,vt.current&1),t=Ki(t,e,n),t!==null?t.sibling:null);st(vt,vt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return vM(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(vt,vt.current),i)break;return null;case 22:case 23:return e.lanes=0,hM(t,e,n)}return Ki(t,e,n)}var yM,hp,_M,xM;yM=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hp=function(){};_M=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,us(xi.current);var s=null;switch(n){case"input":r=Oh(t,r),i=Oh(t,i),s=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),s=[];break;case"textarea":r=Fh(t,r),i=Fh(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=cu)}zh(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(za.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(za.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&at("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};xM=function(t,e,n,i){n!==i&&(e.flags|=4)};function aa(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function PC(t,e,n){var i=e.pendingProps;switch(Um(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(e),null;case 1:return _n(e.type)&&uu(),Kt(e),null;case 3:return i=e.stateNode,No(),ut(yn),ut(rn),Wm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Yl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ni!==null&&(Sp(ni),ni=null))),hp(t,e),Kt(e),null;case 5:jm(e);var r=us(Qa.current);if(n=e.type,t!==null&&e.stateNode!=null)_M(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Kt(e),null}if(t=us(xi.current),Yl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[gi]=e,i[Ka]=s,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<xa.length;r++)at(xa[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":L0(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":N0(i,s),at("invalid",i)}zh(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ql(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ql(i.textContent,a,t),r=["children",""+a]):za.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&at("scroll",i)}switch(n){case"input":zl(i),D0(i,s,!0);break;case"textarea":zl(i),I0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=cu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=qS(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[gi]=e,t[Ka]=i,yM(t,e,!1,!1),e.stateNode=t;e:{switch(o=Vh(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<xa.length;r++)at(xa[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":L0(t,i),r=Oh(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),at("invalid",t);break;case"textarea":N0(t,i),r=Fh(t,i),at("invalid",t);break;default:r=i}zh(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ZS(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&YS(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Va(t,l):typeof l=="number"&&Va(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(za.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",t):l!=null&&Sm(t,s,l,o))}switch(n){case"input":zl(t),D0(t,i,!1);break;case"textarea":zl(t),I0(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Nr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?_o(t,!!i.multiple,s,!1):i.defaultValue!=null&&_o(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=cu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Kt(e),null;case 6:if(t&&e.stateNode!=null)xM(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=us(Qa.current),us(xi.current),Yl(e)){if(i=e.stateNode,n=e.memoizedProps,i[gi]=e,(s=i.nodeValue!==n)&&(t=Rn,t!==null))switch(t.tag){case 3:ql(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ql(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[gi]=e,e.stateNode=i}return Kt(e),null;case 13:if(ut(vt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&Cn!==null&&e.mode&1&&!(e.flags&128))FE(),Lo(),e.flags|=98560,s=!1;else if(s=Yl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[gi]=e}else Lo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Kt(e),s=!1}else ni!==null&&(Sp(ni),ni=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||vt.current&1?Lt===0&&(Lt=3):ig())),e.updateQueue!==null&&(e.flags|=4),Kt(e),null);case 4:return No(),hp(t,e),t===null&&qa(e.stateNode.containerInfo),Kt(e),null;case 10:return zm(e.type._context),Kt(e),null;case 17:return _n(e.type)&&uu(),Kt(e),null;case 19:if(ut(vt),s=e.memoizedState,s===null)return Kt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)aa(s,!1);else{if(Lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=vu(t),o!==null){for(e.flags|=128,aa(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(vt,vt.current&1|2),e.child}t=t.sibling}s.tail!==null&&At()>Oo&&(e.flags|=128,i=!0,aa(s,!1),e.lanes=4194304)}else{if(!i)if(t=vu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),aa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return Kt(e),null}else 2*At()-s.renderingStartTime>Oo&&n!==1073741824&&(e.flags|=128,i=!0,aa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,n=vt.current,st(vt,i?n&1|2:n&1),e):(Kt(e),null);case 22:case 23:return ng(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?An&1073741824&&(Kt(e),e.subtreeFlags&6&&(e.flags|=8192)):Kt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function LC(t,e){switch(Um(e),e.tag){case 1:return _n(e.type)&&uu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return No(),ut(yn),ut(rn),Wm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return jm(e),null;case 13:if(ut(vt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Lo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(vt),null;case 4:return No(),null;case 10:return zm(e.type._context),null;case 22:case 23:return ng(),null;case 24:return null;default:return null}}var Ql=!1,en=!1,DC=typeof WeakSet=="function"?WeakSet:Set,de=null;function co(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){wt(t,e,i)}else n.current=null}function pp(t,e,n){try{n()}catch(i){wt(t,e,i)}}var Mv=!1;function NC(t,e){if(Zh=ou,t=TE(),Im(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qh={focusedElem:t,selectionRange:n},ou=!1,de=e;de!==null;)if(e=de,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,de=t;else for(;de!==null;){e=de;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:ei(e.type,_),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(x){wt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}return g=Mv,Mv=!1,g}function La(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&pp(e,n,s)}r=r.next}while(r!==i)}}function rd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function mp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function SM(t){var e=t.alternate;e!==null&&(t.alternate=null,SM(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gi],delete e[Ka],delete e[tp],delete e[mC],delete e[gC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function EM(t){return t.tag===5||t.tag===3||t.tag===4}function wv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||EM(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=cu));else if(i!==4&&(t=t.child,t!==null))for(gp(t,e,n),t=t.sibling;t!==null;)gp(t,e,n),t=t.sibling}function vp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(vp(t,e,n),t=t.sibling;t!==null;)vp(t,e,n),t=t.sibling}var Gt=null,ti=!1;function nr(t,e,n){for(n=n.child;n!==null;)MM(t,e,n),n=n.sibling}function MM(t,e,n){if(_i&&typeof _i.onCommitFiberUnmount=="function")try{_i.onCommitFiberUnmount(Ku,n)}catch{}switch(n.tag){case 5:en||co(n,e);case 6:var i=Gt,r=ti;Gt=null,nr(t,e,n),Gt=i,ti=r,Gt!==null&&(ti?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(ti?(t=Gt,n=n.stateNode,t.nodeType===8?af(t.parentNode,n):t.nodeType===1&&af(t,n),Wa(t)):af(Gt,n.stateNode));break;case 4:i=Gt,r=ti,Gt=n.stateNode.containerInfo,ti=!0,nr(t,e,n),Gt=i,ti=r;break;case 0:case 11:case 14:case 15:if(!en&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&pp(n,e,o),r=r.next}while(r!==i)}nr(t,e,n);break;case 1:if(!en&&(co(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){wt(n,e,a)}nr(t,e,n);break;case 21:nr(t,e,n);break;case 22:n.mode&1?(en=(i=en)||n.memoizedState!==null,nr(t,e,n),en=i):nr(t,e,n);break;default:nr(t,e,n)}}function Tv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new DC),e.forEach(function(i){var r=HC.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Yn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Gt=a.stateNode,ti=!1;break e;case 3:Gt=a.stateNode.containerInfo,ti=!0;break e;case 4:Gt=a.stateNode.containerInfo,ti=!0;break e}a=a.return}if(Gt===null)throw Error(te(160));MM(s,o,r),Gt=null,ti=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){wt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)wM(e,t),e=e.sibling}function wM(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yn(e,t),fi(t),i&4){try{La(3,t,t.return),rd(3,t)}catch(_){wt(t,t.return,_)}try{La(5,t,t.return)}catch(_){wt(t,t.return,_)}}break;case 1:Yn(e,t),fi(t),i&512&&n!==null&&co(n,n.return);break;case 5:if(Yn(e,t),fi(t),i&512&&n!==null&&co(n,n.return),t.flags&32){var r=t.stateNode;try{Va(r,"")}catch(_){wt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&$S(r,s),Vh(a,o);var c=Vh(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?ZS(r,d):u==="dangerouslySetInnerHTML"?YS(r,d):u==="children"?Va(r,d):Sm(r,u,d,c)}switch(a){case"input":Uh(r,s);break;case"textarea":XS(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?_o(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?_o(r,!!s.multiple,s.defaultValue,!0):_o(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ka]=s}catch(_){wt(t,t.return,_)}}break;case 6:if(Yn(e,t),fi(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){wt(t,t.return,_)}}break;case 3:if(Yn(e,t),fi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Wa(e.containerInfo)}catch(_){wt(t,t.return,_)}break;case 4:Yn(e,t),fi(t);break;case 13:Yn(e,t),fi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(eg=At())),i&4&&Tv(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(en=(c=en)||u,Yn(e,t),en=c):Yn(e,t),fi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(de=t,u=t.child;u!==null;){for(d=de=u;de!==null;){switch(f=de,p=f.child,f.tag){case 0:case 11:case 14:case 15:La(4,f,f.return);break;case 1:co(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){wt(i,n,_)}}break;case 5:co(f,f.return);break;case 22:if(f.memoizedState!==null){Av(d);continue}}p!==null?(p.return=f,de=p):Av(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=KS("display",o))}catch(_){wt(t,t.return,_)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(_){wt(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Yn(e,t),fi(t),i&4&&Tv(t);break;case 21:break;default:Yn(e,t),fi(t)}}function fi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(EM(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Va(r,""),i.flags&=-33);var s=wv(t);vp(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=wv(t);gp(t,a,o);break;default:throw Error(te(161))}}catch(l){wt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function IC(t,e,n){de=t,TM(t)}function TM(t,e,n){for(var i=(t.mode&1)!==0;de!==null;){var r=de,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ql;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||en;a=Ql;var c=en;if(Ql=o,(en=l)&&!c)for(de=r;de!==null;)o=de,l=o.child,o.tag===22&&o.memoizedState!==null?Cv(r):l!==null?(l.return=o,de=l):Cv(r);for(;s!==null;)de=s,TM(s),s=s.sibling;de=r,Ql=a,en=c}bv(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,de=s):bv(t)}}function bv(t){for(;de!==null;){var e=de;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:en||rd(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!en)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ei(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&uv(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}uv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Wa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}en||e.flags&512&&mp(e)}catch(f){wt(e,e.return,f)}}if(e===t){de=null;break}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}}function Av(t){for(;de!==null;){var e=de;if(e===t){de=null;break}var n=e.sibling;if(n!==null){n.return=e.return,de=n;break}de=e.return}}function Cv(t){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{rd(4,e)}catch(l){wt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){wt(e,r,l)}}var s=e.return;try{mp(e)}catch(l){wt(e,s,l)}break;case 5:var o=e.return;try{mp(e)}catch(l){wt(e,o,l)}}}catch(l){wt(e,e.return,l)}if(e===t){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var OC=Math.ceil,xu=er.ReactCurrentDispatcher,Qm=er.ReactCurrentOwner,$n=er.ReactCurrentBatchConfig,We=0,Ft=null,Rt=null,$t=0,An=0,uo=zr(0),Lt=0,nl=null,ws=0,sd=0,Jm=0,Da=null,mn=null,eg=0,Oo=1/0,Ni=null,Su=!1,yp=null,Tr=null,Jl=!1,yr=null,Eu=0,Na=0,_p=null,Wc=-1,$c=0;function cn(){return We&6?At():Wc!==-1?Wc:Wc=At()}function br(t){return t.mode&1?We&2&&$t!==0?$t&-$t:yC.transition!==null?($c===0&&($c=cE()),$c):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:gE(t.type)),t):1}function ai(t,e,n,i){if(50<Na)throw Na=0,_p=null,Error(te(185));pl(t,n,i),(!(We&2)||t!==Ft)&&(t===Ft&&(!(We&2)&&(sd|=n),Lt===4&&gr(t,$t)),xn(t,i),n===1&&We===0&&!(e.mode&1)&&(Oo=At()+500,td&&Vr()))}function xn(t,e){var n=t.callbackNode;yA(t,e);var i=su(t,t===Ft?$t:0);if(i===0)n!==null&&k0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&k0(n),e===1)t.tag===0?vC(Rv.bind(null,t)):OE(Rv.bind(null,t)),hC(function(){!(We&6)&&Vr()}),n=null;else{switch(uE(i)){case 1:n=bm;break;case 4:n=aE;break;case 16:n=ru;break;case 536870912:n=lE;break;default:n=ru}n=NM(n,bM.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function bM(t,e){if(Wc=-1,$c=0,We&6)throw Error(te(327));var n=t.callbackNode;if(wo()&&t.callbackNode!==n)return null;var i=su(t,t===Ft?$t:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Mu(t,i);else{e=i;var r=We;We|=2;var s=CM();(Ft!==t||$t!==e)&&(Ni=null,Oo=At()+500,ps(t,e));do try{FC();break}catch(a){AM(t,a)}while(!0);Bm(),xu.current=s,We=r,Rt!==null?e=0:(Ft=null,$t=0,e=Lt)}if(e!==0){if(e===2&&(r=$h(t),r!==0&&(i=r,e=xp(t,r))),e===1)throw n=nl,ps(t,0),gr(t,i),xn(t,At()),n;if(e===6)gr(t,i);else{if(r=t.current.alternate,!(i&30)&&!UC(r)&&(e=Mu(t,i),e===2&&(s=$h(t),s!==0&&(i=s,e=xp(t,s))),e===1))throw n=nl,ps(t,0),gr(t,i),xn(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:Jr(t,mn,Ni);break;case 3:if(gr(t,i),(i&130023424)===i&&(e=eg+500-At(),10<e)){if(su(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){cn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ep(Jr.bind(null,t,mn,Ni),e);break}Jr(t,mn,Ni);break;case 4:if(gr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-oi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*OC(i/1960))-i,10<i){t.timeoutHandle=ep(Jr.bind(null,t,mn,Ni),i);break}Jr(t,mn,Ni);break;case 5:Jr(t,mn,Ni);break;default:throw Error(te(329))}}}return xn(t,At()),t.callbackNode===n?bM.bind(null,t):null}function xp(t,e){var n=Da;return t.current.memoizedState.isDehydrated&&(ps(t,e).flags|=256),t=Mu(t,e),t!==2&&(e=mn,mn=n,e!==null&&Sp(e)),t}function Sp(t){mn===null?mn=t:mn.push.apply(mn,t)}function UC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ci(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gr(t,e){for(e&=~Jm,e&=~sd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-oi(e),i=1<<n;t[n]=-1,e&=~i}}function Rv(t){if(We&6)throw Error(te(327));wo();var e=su(t,0);if(!(e&1))return xn(t,At()),null;var n=Mu(t,e);if(t.tag!==0&&n===2){var i=$h(t);i!==0&&(e=i,n=xp(t,i))}if(n===1)throw n=nl,ps(t,0),gr(t,e),xn(t,At()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Jr(t,mn,Ni),xn(t,At()),null}function tg(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(Oo=At()+500,td&&Vr())}}function Ts(t){yr!==null&&yr.tag===0&&!(We&6)&&wo();var e=We;We|=1;var n=$n.transition,i=Qe;try{if($n.transition=null,Qe=1,t)return t()}finally{Qe=i,$n.transition=n,We=e,!(We&6)&&Vr()}}function ng(){An=uo.current,ut(uo)}function ps(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,fC(n)),Rt!==null)for(n=Rt.return;n!==null;){var i=n;switch(Um(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&uu();break;case 3:No(),ut(yn),ut(rn),Wm();break;case 5:jm(i);break;case 4:No();break;case 13:ut(vt);break;case 19:ut(vt);break;case 10:zm(i.type._context);break;case 22:case 23:ng()}n=n.return}if(Ft=t,Rt=t=Ar(t.current,null),$t=An=e,Lt=0,nl=null,Jm=sd=ws=0,mn=Da=null,cs!==null){for(e=0;e<cs.length;e++)if(n=cs[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}cs=null}return t}function AM(t,e){do{var n=Rt;try{if(Bm(),Hc.current=_u,yu){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}yu=!1}if(Ms=0,kt=Pt=_t=null,Pa=!1,Ja=0,Qm.current=null,n===null||n.return===null){Lt=1,nl=e,Rt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=$t,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=gv(o);if(p!==null){p.flags&=-257,vv(p,o,a,s,e),p.mode&1&&mv(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){mv(s,c,e),ig();break e}l=Error(te(426))}}else if(ft&&a.mode&1){var m=gv(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),vv(m,o,a,s,e),km(Io(l,a));break e}}s=l=Io(l,a),Lt!==4&&(Lt=2),Da===null?Da=[s]:Da.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=uM(s,l,e);cv(s,h);break e;case 1:a=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Tr===null||!Tr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=dM(s,a,e);cv(s,x);break e}}s=s.return}while(s!==null)}PM(n)}catch(T){e=T,Rt===n&&n!==null&&(Rt=n=n.return);continue}break}while(!0)}function CM(){var t=xu.current;return xu.current=_u,t===null?_u:t}function ig(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),Ft===null||!(ws&268435455)&&!(sd&268435455)||gr(Ft,$t)}function Mu(t,e){var n=We;We|=2;var i=CM();(Ft!==t||$t!==e)&&(Ni=null,ps(t,e));do try{kC();break}catch(r){AM(t,r)}while(!0);if(Bm(),We=n,xu.current=i,Rt!==null)throw Error(te(261));return Ft=null,$t=0,Lt}function kC(){for(;Rt!==null;)RM(Rt)}function FC(){for(;Rt!==null&&!cA();)RM(Rt)}function RM(t){var e=DM(t.alternate,t,An);t.memoizedProps=t.pendingProps,e===null?PM(t):Rt=e,Qm.current=null}function PM(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=LC(n,e),n!==null){n.flags&=32767,Rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,Rt=null;return}}else if(n=PC(n,e,An),n!==null){Rt=n;return}if(e=e.sibling,e!==null){Rt=e;return}Rt=e=t}while(e!==null);Lt===0&&(Lt=5)}function Jr(t,e,n){var i=Qe,r=$n.transition;try{$n.transition=null,Qe=1,BC(t,e,n,i)}finally{$n.transition=r,Qe=i}return null}function BC(t,e,n,i){do wo();while(yr!==null);if(We&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_A(t,s),t===Ft&&(Rt=Ft=null,$t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Jl||(Jl=!0,NM(ru,function(){return wo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$n.transition,$n.transition=null;var o=Qe;Qe=1;var a=We;We|=4,Qm.current=null,NC(t,n),wM(n,t),sC(Qh),ou=!!Zh,Qh=Zh=null,t.current=n,IC(n),uA(),We=a,Qe=o,$n.transition=s}else t.current=n;if(Jl&&(Jl=!1,yr=t,Eu=r),s=t.pendingLanes,s===0&&(Tr=null),hA(n.stateNode),xn(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Su)throw Su=!1,t=yp,yp=null,t;return Eu&1&&t.tag!==0&&wo(),s=t.pendingLanes,s&1?t===_p?Na++:(Na=0,_p=t):Na=0,Vr(),null}function wo(){if(yr!==null){var t=uE(Eu),e=$n.transition,n=Qe;try{if($n.transition=null,Qe=16>t?16:t,yr===null)var i=!1;else{if(t=yr,yr=null,Eu=0,We&6)throw Error(te(331));var r=We;for(We|=4,de=t.current;de!==null;){var s=de,o=s.child;if(de.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(de=c;de!==null;){var u=de;switch(u.tag){case 0:case 11:case 15:La(8,u,s)}var d=u.child;if(d!==null)d.return=u,de=d;else for(;de!==null;){u=de;var f=u.sibling,p=u.return;if(SM(u),u===c){de=null;break}if(f!==null){f.return=p,de=f;break}de=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}de=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,de=o;else e:for(;de!==null;){if(s=de,s.flags&2048)switch(s.tag){case 0:case 11:case 15:La(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,de=h;break e}de=s.return}}var v=t.current;for(de=v;de!==null;){o=de;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,de=y;else e:for(o=v;de!==null;){if(a=de,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:rd(9,a)}}catch(T){wt(a,a.return,T)}if(a===o){de=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,de=x;break e}de=a.return}}if(We=r,Vr(),_i&&typeof _i.onPostCommitFiberRoot=="function")try{_i.onPostCommitFiberRoot(Ku,t)}catch{}i=!0}return i}finally{Qe=n,$n.transition=e}}return!1}function Pv(t,e,n){e=Io(n,e),e=uM(t,e,1),t=wr(t,e,1),e=cn(),t!==null&&(pl(t,1,e),xn(t,e))}function wt(t,e,n){if(t.tag===3)Pv(t,t,n);else for(;e!==null;){if(e.tag===3){Pv(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Tr===null||!Tr.has(i))){t=Io(n,t),t=dM(e,t,1),e=wr(e,t,1),t=cn(),e!==null&&(pl(e,1,t),xn(e,t));break}}e=e.return}}function zC(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=cn(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&($t&n)===n&&(Lt===4||Lt===3&&($t&130023424)===$t&&500>At()-eg?ps(t,0):Jm|=n),xn(t,e)}function LM(t,e){e===0&&(t.mode&1?(e=Gl,Gl<<=1,!(Gl&130023424)&&(Gl=4194304)):e=1);var n=cn();t=Yi(t,e),t!==null&&(pl(t,e,n),xn(t,n))}function VC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),LM(t,n)}function HC(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),LM(t,n)}var DM;DM=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yn.current)vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vn=!1,RC(t,e,n);vn=!!(t.flags&131072)}else vn=!1,ft&&e.flags&1048576&&UE(e,hu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;jc(t,e),t=e.pendingProps;var r=Po(e,rn.current);Mo(e,n),r=Xm(null,e,i,t,r,n);var s=qm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(i)?(s=!0,du(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Hm(e),r.updater=id,e.stateNode=r,r._reactInternals=e,ap(e,i,t,n),e=up(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&Om(e),an(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(jc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=jC(i),t=ei(i,t),r){case 0:e=cp(null,e,i,t,n);break e;case 1:e=xv(null,e,i,t,n);break e;case 11:e=yv(null,e,i,t,n);break e;case 14:e=_v(null,e,i,ei(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),cp(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),xv(t,e,i,r,n);case 3:e:{if(mM(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,HE(t,e),gu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Io(Error(te(423)),e),e=Sv(t,e,i,n,r);break e}else if(i!==r){r=Io(Error(te(424)),e),e=Sv(t,e,i,n,r);break e}else for(Cn=Mr(e.stateNode.containerInfo.firstChild),Rn=e,ft=!0,ni=null,n=zE(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Lo(),i===r){e=Ki(t,e,n);break e}an(t,e,i,n)}e=e.child}return e;case 5:return GE(e),t===null&&rp(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Jh(i,r)?o=null:s!==null&&Jh(i,s)&&(e.flags|=32),pM(t,e),an(t,e,o,n),e.child;case 6:return t===null&&rp(e),null;case 13:return gM(t,e,n);case 4:return Gm(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Do(e,null,i,n):an(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),yv(t,e,i,r,n);case 7:return an(t,e,e.pendingProps,n),e.child;case 8:return an(t,e,e.pendingProps.children,n),e.child;case 12:return an(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(pu,i._currentValue),i._currentValue=o,s!==null)if(ci(s.value,o)){if(s.children===r.children&&!yn.current){e=Ki(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Hi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),sp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),sp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}an(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Mo(e,n),r=Xn(r),i=i(r),e.flags|=1,an(t,e,i,n),e.child;case 14:return i=e.type,r=ei(i,e.pendingProps),r=ei(i.type,r),_v(t,e,i,r,n);case 15:return fM(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),jc(t,e),e.tag=1,_n(i)?(t=!0,du(e)):t=!1,Mo(e,n),cM(e,i,r),ap(e,i,r,n),up(null,e,i,!0,t,n);case 19:return vM(t,e,n);case 22:return hM(t,e,n)}throw Error(te(156,e.tag))};function NM(t,e){return oE(t,e)}function GC(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,e,n,i){return new GC(t,e,n,i)}function rg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jC(t){if(typeof t=="function")return rg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Mm)return 11;if(t===wm)return 14}return 2}function Ar(t,e){var n=t.alternate;return n===null?(n=Wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Xc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")rg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case eo:return ms(n.children,r,s,e);case Em:o=8,r|=8;break;case Lh:return t=Wn(12,n,e,r|2),t.elementType=Lh,t.lanes=s,t;case Dh:return t=Wn(13,n,e,r),t.elementType=Dh,t.lanes=s,t;case Nh:return t=Wn(19,n,e,r),t.elementType=Nh,t.lanes=s,t;case GS:return od(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case VS:o=10;break e;case HS:o=9;break e;case Mm:o=11;break e;case wm:o=14;break e;case hr:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=Wn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ms(t,e,n,i){return t=Wn(7,t,i,e),t.lanes=n,t}function od(t,e,n,i){return t=Wn(22,t,i,e),t.elementType=GS,t.lanes=n,t.stateNode={isHidden:!1},t}function mf(t,e,n){return t=Wn(6,t,null,e),t.lanes=n,t}function gf(t,e,n){return e=Wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function WC(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yd(0),this.expirationTimes=Yd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function sg(t,e,n,i,r,s,o,a,l){return t=new WC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hm(s),t}function $C(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Js,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function IM(t){if(!t)return Ir;t=t._reactInternals;e:{if(Is(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(_n(n))return IE(t,n,e)}return e}function OM(t,e,n,i,r,s,o,a,l){return t=sg(n,i,!0,t,r,s,o,a,l),t.context=IM(null),n=t.current,i=cn(),r=br(n),s=Hi(i,r),s.callback=e??null,wr(n,s,r),t.current.lanes=r,pl(t,r,i),xn(t,i),t}function ad(t,e,n,i){var r=e.current,s=cn(),o=br(r);return n=IM(n),e.context===null?e.context=n:e.pendingContext=n,e=Hi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=wr(r,e,o),t!==null&&(ai(t,r,o,s),Vc(t,r,o)),o}function wu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function og(t,e){Lv(t,e),(t=t.alternate)&&Lv(t,e)}function XC(){return null}var UM=typeof reportError=="function"?reportError:function(t){console.error(t)};function ag(t){this._internalRoot=t}ld.prototype.render=ag.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));ad(t,e,null,null)};ld.prototype.unmount=ag.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ts(function(){ad(null,t,null,null)}),e[qi]=null}};function ld(t){this._internalRoot=t}ld.prototype.unstable_scheduleHydration=function(t){if(t){var e=hE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<mr.length&&e!==0&&e<mr[n].priority;n++);mr.splice(n,0,t),n===0&&mE(t)}};function lg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dv(){}function qC(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=wu(o);s.call(c)}}var o=OM(e,i,t,0,null,!1,!1,"",Dv);return t._reactRootContainer=o,t[qi]=o.current,qa(t.nodeType===8?t.parentNode:t),Ts(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=wu(l);a.call(c)}}var l=sg(t,0,!1,null,null,!1,!1,"",Dv);return t._reactRootContainer=l,t[qi]=l.current,qa(t.nodeType===8?t.parentNode:t),Ts(function(){ad(e,l,n,i)}),l}function ud(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=wu(o);a.call(l)}}ad(e,o,t,r)}else o=qC(n,e,t,r,i);return wu(o)}dE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_a(e.pendingLanes);n!==0&&(Am(e,n|1),xn(e,At()),!(We&6)&&(Oo=At()+500,Vr()))}break;case 13:Ts(function(){var i=Yi(t,1);if(i!==null){var r=cn();ai(i,t,1,r)}}),og(t,1)}};Cm=function(t){if(t.tag===13){var e=Yi(t,134217728);if(e!==null){var n=cn();ai(e,t,134217728,n)}og(t,134217728)}};fE=function(t){if(t.tag===13){var e=br(t),n=Yi(t,e);if(n!==null){var i=cn();ai(n,t,e,i)}og(t,e)}};hE=function(){return Qe};pE=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};Gh=function(t,e,n){switch(e){case"input":if(Uh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ed(i);if(!r)throw Error(te(90));WS(i),Uh(i,r)}}}break;case"textarea":XS(t,n);break;case"select":e=n.value,e!=null&&_o(t,!!n.multiple,e,!1)}};eE=tg;tE=Ts;var YC={usingClientEntryPoint:!1,Events:[gl,ro,ed,QS,JS,tg]},la={findFiberByHostInstance:ls,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},KC={bundleType:la.bundleType,version:la.version,rendererPackageName:la.rendererPackageName,rendererConfig:la.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=rE(t),t===null?null:t.stateNode},findFiberByHostInstance:la.findFiberByHostInstance||XC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ec.isDisabled&&ec.supportsFiber)try{Ku=ec.inject(KC),_i=ec}catch{}}In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YC;In.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lg(e))throw Error(te(200));return $C(t,e,null,n)};In.createRoot=function(t,e){if(!lg(t))throw Error(te(299));var n=!1,i="",r=UM;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=sg(t,1,!1,null,null,n,!1,i,r),t[qi]=e.current,qa(t.nodeType===8?t.parentNode:t),new ag(e)};In.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=rE(e),t=t===null?null:t.stateNode,t};In.flushSync=function(t){return Ts(t)};In.hydrate=function(t,e,n){if(!cd(e))throw Error(te(200));return ud(null,t,e,!0,n)};In.hydrateRoot=function(t,e,n){if(!lg(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=UM;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=OM(e,null,t,1,n??null,r,!1,s,o),t[qi]=e.current,qa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ld(e)};In.render=function(t,e,n){if(!cd(e))throw Error(te(200));return ud(null,t,e,!1,n)};In.unmountComponentAtNode=function(t){if(!cd(t))throw Error(te(40));return t._reactRootContainer?(Ts(function(){ud(null,null,t,!1,function(){t._reactRootContainer=null,t[qi]=null})}),!0):!1};In.unstable_batchedUpdates=tg;In.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!cd(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return ud(t,e,n,!1,i)};In.version="18.3.1-next-f1338f8080-20240426";function kM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kM)}catch(t){console.error(t)}}kM(),kS.exports=In;var FM=kS.exports,BM,Nv=FM;BM=Nv.createRoot,Nv.hydrateRoot;var zM={exports:{}},VM={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yl=H;function ZC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var QC=typeof Object.is=="function"?Object.is:ZC,JC=yl.useSyncExternalStore,eR=yl.useRef,tR=yl.useEffect,nR=yl.useMemo,iR=yl.useDebugValue;VM.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=eR(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=nR(function(){function l(p){if(!c){if(c=!0,u=p,p=i(p),r!==void 0&&o.hasValue){var g=o.value;if(r(g,p))return d=g}return d=p}if(g=d,QC(u,p))return g;var _=i(p);return r!==void 0&&r(g,_)?(u=p,g):(u=p,d=_)}var c=!1,u,d,f=n===void 0?null:n;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,n,i,r]);var a=JC(t,s[0],s[1]);return tR(function(){o.hasValue=!0,o.value=a},[a]),iR(a),a};zM.exports=VM;var rR=zM.exports;function sR(t){t()}function oR(){let t=null,e=null;return{clear(){t=null,e=null},notify(){sR(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let i=t;for(;i;)n.push(i),i=i.next;return n},subscribe(n){let i=!0;const r=e={callback:n,next:null,prev:e};return r.prev?r.prev.next=r:t=r,function(){!i||t===null||(i=!1,r.next?r.next.prev=r.prev:e=r.prev,r.prev?r.prev.next=r.next:t=r.next)}}}}var Iv={notify(){},get:()=>[]};function aR(t,e){let n,i=Iv,r=0,s=!1;function o(_){u();const m=i.subscribe(_);let h=!1;return()=>{h||(h=!0,m(),d())}}function a(){i.notify()}function l(){g.onStateChange&&g.onStateChange()}function c(){return s}function u(){r++,n||(n=t.subscribe(l),i=oR())}function d(){r--,n&&r===0&&(n(),n=void 0,i.clear(),i=Iv)}function f(){s||(s=!0,u())}function p(){s&&(s=!1,d())}const g={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:c,trySubscribe:f,tryUnsubscribe:p,getListeners:()=>i};return g}var lR=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",cR=lR(),uR=()=>typeof navigator<"u"&&navigator.product==="ReactNative",dR=uR(),fR=()=>cR||dR?H.useLayoutEffect:H.useEffect,hR=fR(),vf=Symbol.for("react-redux-context"),yf=typeof globalThis<"u"?globalThis:{};function pR(){if(!H.createContext)return{};const t=yf[vf]??(yf[vf]=new Map);let e=t.get(H.createContext);return e||(e=H.createContext(null),t.set(H.createContext,e)),e}var Tu=pR();function mR(t){const{children:e,context:n,serverState:i,store:r}=t,s=H.useMemo(()=>{const l=aR(r);return{store:r,subscription:l,getServerState:i?()=>i:void 0}},[r,i]),o=H.useMemo(()=>r.getState(),[r]);hR(()=>{const{subscription:l}=s;return l.onStateChange=l.notifyNestedSubs,l.trySubscribe(),o!==r.getState()&&l.notifyNestedSubs(),()=>{l.tryUnsubscribe(),l.onStateChange=void 0}},[s,o]);const a=n||Tu;return H.createElement(a.Provider,{value:s},e)}var gR=mR;function HM(t=Tu){return function(){return H.useContext(t)}}var vR=HM(),yR=(t,e)=>t===e;function _R(t=Tu){const e=t===Tu?vR:HM(t),n=(i,r={})=>{const{equalityFn:s=yR}=typeof r=="function"?{equalityFn:r}:r,o=e(),{store:a,subscription:l,getServerState:c}=o;H.useRef(!0);const u=H.useCallback({[i.name](f){return i(f)}}[i.name],[i]),d=rR.useSyncExternalStoreWithSelector(l.addNestedSub,a.getState,c||a.getState,u,s);return H.useDebugValue(d),d};return Object.assign(n,{withTypes:()=>n}),n}var wi=_R();function Ht(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var xR=typeof Symbol=="function"&&Symbol.observable||"@@observable",Ov=xR,_f=()=>Math.random().toString(36).substring(7).split("").join("."),SR={INIT:`@@redux/INIT${_f()}`,REPLACE:`@@redux/REPLACE${_f()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${_f()}`},bu=SR;function cg(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function GM(t,e,n){if(typeof t!="function")throw new Error(Ht(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ht(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ht(1));return n(GM)(t,e)}let i=t,r=e,s=new Map,o=s,a=0,l=!1;function c(){o===s&&(o=new Map,s.forEach((m,h)=>{o.set(h,m)}))}function u(){if(l)throw new Error(Ht(3));return r}function d(m){if(typeof m!="function")throw new Error(Ht(4));if(l)throw new Error(Ht(5));let h=!0;c();const v=a++;return o.set(v,m),function(){if(h){if(l)throw new Error(Ht(6));h=!1,c(),o.delete(v),s=null}}}function f(m){if(!cg(m))throw new Error(Ht(7));if(typeof m.type>"u")throw new Error(Ht(8));if(typeof m.type!="string")throw new Error(Ht(17));if(l)throw new Error(Ht(9));try{l=!0,r=i(r,m)}finally{l=!1}return(s=o).forEach(v=>{v()}),m}function p(m){if(typeof m!="function")throw new Error(Ht(10));i=m,f({type:bu.REPLACE})}function g(){const m=d;return{subscribe(h){if(typeof h!="object"||h===null)throw new Error(Ht(11));function v(){const x=h;x.next&&x.next(u())}return v(),{unsubscribe:m(v)}},[Ov](){return this}}}return f({type:bu.INIT}),{dispatch:f,subscribe:d,getState:u,replaceReducer:p,[Ov]:g}}function ER(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:bu.INIT})>"u")throw new Error(Ht(12));if(typeof n(void 0,{type:bu.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ht(13))})}function MR(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const i=Object.keys(n);let r;try{ER(n)}catch(s){r=s}return function(o={},a){if(r)throw r;let l=!1;const c={};for(let u=0;u<i.length;u++){const d=i[u],f=n[d],p=o[d],g=f(p,a);if(typeof g>"u")throw a&&a.type,new Error(Ht(14));c[d]=g,l=l||g!==p}return l=l||i.length!==Object.keys(o).length,l?c:o}}function Au(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...i)=>e(n(...i)))}function wR(...t){return e=>(n,i)=>{const r=e(n,i);let s=()=>{throw new Error(Ht(15))};const o={getState:r.getState,dispatch:(l,...c)=>s(l,...c)},a=t.map(l=>l(o));return s=Au(...a)(r.dispatch),{...r,dispatch:s}}}function TR(t){return cg(t)&&"type"in t&&typeof t.type=="string"}var jM=Symbol.for("immer-nothing"),Uv=Symbol.for("immer-draftable"),Ln=Symbol.for("immer-state");function ii(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var Uo=Object.getPrototypeOf;function bs(t){return!!t&&!!t[Ln]}function Zi(t){var e;return t?WM(t)||Array.isArray(t)||!!t[Uv]||!!((e=t.constructor)!=null&&e[Uv])||fd(t)||hd(t):!1}var bR=Object.prototype.constructor.toString();function WM(t){if(!t||typeof t!="object")return!1;const e=Uo(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===bR}function Cu(t,e){dd(t)===0?Reflect.ownKeys(t).forEach(n=>{e(n,t[n],t)}):t.forEach((n,i)=>e(i,n,t))}function dd(t){const e=t[Ln];return e?e.type_:Array.isArray(t)?1:fd(t)?2:hd(t)?3:0}function Ep(t,e){return dd(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function $M(t,e,n){const i=dd(t);i===2?t.set(e,n):i===3?t.add(n):t[e]=n}function AR(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function fd(t){return t instanceof Map}function hd(t){return t instanceof Set}function es(t){return t.copy_||t.base_}function Mp(t,e){if(fd(t))return new Map(t);if(hd(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);const n=WM(t);if(e===!0||e==="class_only"&&!n){const i=Object.getOwnPropertyDescriptors(t);delete i[Ln];let r=Reflect.ownKeys(i);for(let s=0;s<r.length;s++){const o=r[s],a=i[o];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(i[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:t[o]})}return Object.create(Uo(t),i)}else{const i=Uo(t);if(i!==null&&n)return{...t};const r=Object.create(i);return Object.assign(r,t)}}function ug(t,e=!1){return pd(t)||bs(t)||!Zi(t)||(dd(t)>1&&(t.set=t.add=t.clear=t.delete=CR),Object.freeze(t),e&&Object.entries(t).forEach(([n,i])=>ug(i,!0))),t}function CR(){ii(2)}function pd(t){return Object.isFrozen(t)}var RR={};function As(t){const e=RR[t];return e||ii(0,t),e}var il;function XM(){return il}function PR(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function kv(t,e){e&&(As("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function wp(t){Tp(t),t.drafts_.forEach(LR),t.drafts_=null}function Tp(t){t===il&&(il=t.parent_)}function Fv(t){return il=PR(il,t)}function LR(t){const e=t[Ln];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function Bv(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[Ln].modified_&&(wp(e),ii(4)),Zi(t)&&(t=Ru(e,t),e.parent_||Pu(e,t)),e.patches_&&As("Patches").generateReplacementPatches_(n[Ln].base_,t,e.patches_,e.inversePatches_)):t=Ru(e,n,[]),wp(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==jM?t:void 0}function Ru(t,e,n){if(pd(e))return e;const i=e[Ln];if(!i)return Cu(e,(r,s)=>zv(t,i,e,r,s,n)),e;if(i.scope_!==t)return e;if(!i.modified_)return Pu(t,i.base_,!0),i.base_;if(!i.finalized_){i.finalized_=!0,i.scope_.unfinalizedDrafts_--;const r=i.copy_;let s=r,o=!1;i.type_===3&&(s=new Set(r),r.clear(),o=!0),Cu(s,(a,l)=>zv(t,i,r,a,l,n,o)),Pu(t,r,!1),n&&t.patches_&&As("Patches").generatePatches_(i,n,t.patches_,t.inversePatches_)}return i.copy_}function zv(t,e,n,i,r,s,o){if(bs(r)){const a=s&&e&&e.type_!==3&&!Ep(e.assigned_,i)?s.concat(i):void 0,l=Ru(t,r,a);if($M(n,i,l),bs(l))t.canAutoFreeze_=!1;else return}else o&&n.add(r);if(Zi(r)&&!pd(r)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;Ru(t,r),(!e||!e.scope_.parent_)&&typeof i!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,i)&&Pu(t,r)}}function Pu(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&ug(e,n)}function DR(t,e){const n=Array.isArray(t),i={type_:n?1:0,scope_:e?e.scope_:XM(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let r=i,s=dg;n&&(r=[i],s=rl);const{revoke:o,proxy:a}=Proxy.revocable(r,s);return i.draft_=a,i.revoke_=o,a}var dg={get(t,e){if(e===Ln)return t;const n=es(t);if(!Ep(n,e))return NR(t,n,e);const i=n[e];return t.finalized_||!Zi(i)?i:i===xf(t.base_,e)?(Sf(t),t.copy_[e]=Ap(i,t)):i},has(t,e){return e in es(t)},ownKeys(t){return Reflect.ownKeys(es(t))},set(t,e,n){const i=qM(es(t),e);if(i!=null&&i.set)return i.set.call(t.draft_,n),!0;if(!t.modified_){const r=xf(es(t),e),s=r==null?void 0:r[Ln];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(AR(n,r)&&(n!==void 0||Ep(t.base_,e)))return!0;Sf(t),bp(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return xf(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,Sf(t),bp(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=es(t),i=Reflect.getOwnPropertyDescriptor(n,e);return i&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:i.enumerable,value:n[e]}},defineProperty(){ii(11)},getPrototypeOf(t){return Uo(t.base_)},setPrototypeOf(){ii(12)}},rl={};Cu(dg,(t,e)=>{rl[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});rl.deleteProperty=function(t,e){return rl.set.call(this,t,e,void 0)};rl.set=function(t,e,n){return dg.set.call(this,t[0],e,n,t[0])};function xf(t,e){const n=t[Ln];return(n?es(n):t)[e]}function NR(t,e,n){var r;const i=qM(e,n);return i?"value"in i?i.value:(r=i.get)==null?void 0:r.call(t.draft_):void 0}function qM(t,e){if(!(e in t))return;let n=Uo(t);for(;n;){const i=Object.getOwnPropertyDescriptor(n,e);if(i)return i;n=Uo(n)}}function bp(t){t.modified_||(t.modified_=!0,t.parent_&&bp(t.parent_))}function Sf(t){t.copy_||(t.copy_=Mp(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var IR=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,i)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(l=s,...c){return o.produce(l,u=>n.call(this,u,...c))}}typeof n!="function"&&ii(6),i!==void 0&&typeof i!="function"&&ii(7);let r;if(Zi(e)){const s=Fv(this),o=Ap(e,void 0);let a=!0;try{r=n(o),a=!1}finally{a?wp(s):Tp(s)}return kv(s,i),Bv(r,s)}else if(!e||typeof e!="object"){if(r=n(e),r===void 0&&(r=e),r===jM&&(r=void 0),this.autoFreeze_&&ug(r,!0),i){const s=[],o=[];As("Patches").generateReplacementPatches_(e,r,s,o),i(s,o)}return r}else ii(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,l=>e(l,...a));let i,r;return[this.produce(e,n,(o,a)=>{i=o,r=a}),i,r]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){Zi(t)||ii(8),bs(t)&&(t=OR(t));const e=Fv(this),n=Ap(t,void 0);return n[Ln].isManual_=!0,Tp(e),n}finishDraft(t,e){const n=t&&t[Ln];(!n||!n.isManual_)&&ii(9);const{scope_:i}=n;return kv(i,e),Bv(void 0,i)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const r=e[n];if(r.path.length===0&&r.op==="replace"){t=r.value;break}}n>-1&&(e=e.slice(n+1));const i=As("Patches").applyPatches_;return bs(t)?i(t,e):this.produce(t,r=>i(r,e))}};function Ap(t,e){const n=fd(t)?As("MapSet").proxyMap_(t,e):hd(t)?As("MapSet").proxySet_(t,e):DR(t,e);return(e?e.scope_:XM()).drafts_.push(n),n}function OR(t){return bs(t)||ii(10,t),YM(t)}function YM(t){if(!Zi(t)||pd(t))return t;const e=t[Ln];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=Mp(t,e.scope_.immer_.useStrictShallowCopy_)}else n=Mp(t,!0);return Cu(n,(i,r)=>{$M(n,i,YM(r))}),e&&(e.finalized_=!1),n}var Dn=new IR,KM=Dn.produce;Dn.produceWithPatches.bind(Dn);Dn.setAutoFreeze.bind(Dn);Dn.setUseStrictShallowCopy.bind(Dn);Dn.applyPatches.bind(Dn);Dn.createDraft.bind(Dn);Dn.finishDraft.bind(Dn);function ZM(t){return({dispatch:n,getState:i})=>r=>s=>typeof s=="function"?s(n,i,t):r(s)}var UR=ZM(),kR=ZM,FR=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Au:Au.apply(null,arguments)};function Vv(t,e){function n(...i){if(e){let r=e(...i);if(!r)throw new Error(Gi(0));return{type:t,payload:r.payload,..."meta"in r&&{meta:r.meta},..."error"in r&&{error:r.error}}}return{type:t,payload:i[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=i=>TR(i)&&i.type===t,n}var QM=class Sa extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,Sa.prototype)}static get[Symbol.species](){return Sa}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new Sa(...e[0].concat(this)):new Sa(...e.concat(this))}};function Hv(t){return Zi(t)?KM(t,()=>{}):t}function tc(t,e,n){return t.has(e)?t.get(e):t.set(e,n(e)).get(e)}function BR(t){return typeof t=="boolean"}var zR=()=>function(e){const{thunk:n=!0,immutableCheck:i=!0,serializableCheck:r=!0,actionCreatorCheck:s=!0}=e??{};let o=new QM;return n&&(BR(n)?o.push(UR):o.push(kR(n.extraArgument))),o},VR="RTK_autoBatch",Gv=t=>e=>{setTimeout(e,t)},HR=(t={type:"raf"})=>e=>(...n)=>{const i=e(...n);let r=!0,s=!1,o=!1;const a=new Set,l=t.type==="tick"?queueMicrotask:t.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Gv(10):t.type==="callback"?t.queueNotification:Gv(t.timeout),c=()=>{o=!1,s&&(s=!1,a.forEach(u=>u()))};return Object.assign({},i,{subscribe(u){const d=()=>r&&u(),f=i.subscribe(d);return a.add(u),()=>{f(),a.delete(u)}},dispatch(u){var d;try{return r=!((d=u==null?void 0:u.meta)!=null&&d[VR]),s=!r,s&&(o||(o=!0,l(c))),i.dispatch(u)}finally{r=!0}}})},GR=t=>function(n){const{autoBatch:i=!0}=n??{};let r=new QM(t);return i&&r.push(HR(typeof i=="object"?i:void 0)),r};function jR(t){const e=zR(),{reducer:n=void 0,middleware:i,devTools:r=!0,duplicateMiddlewareCheck:s=!0,preloadedState:o=void 0,enhancers:a=void 0}=t||{};let l;if(typeof n=="function")l=n;else if(cg(n))l=MR(n);else throw new Error(Gi(1));let c;typeof i=="function"?c=i(e):c=e();let u=Au;r&&(u=FR({trace:!1,...typeof r=="object"&&r}));const d=wR(...c),f=GR(d);let p=typeof a=="function"?a(f):f();const g=u(...p);return GM(l,o,g)}function JM(t){const e={},n=[];let i;const r={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(Gi(28));if(a in e)throw new Error(Gi(29));return e[a]=o,r},addMatcher(s,o){return n.push({matcher:s,reducer:o}),r},addDefaultCase(s){return i=s,r}};return t(r),[e,n,i]}function WR(t){return typeof t=="function"}function $R(t,e){let[n,i,r]=JM(e),s;if(WR(t))s=()=>Hv(t());else{const a=Hv(t);s=()=>a}function o(a=s(),l){let c=[n[l.type],...i.filter(({matcher:u})=>u(l)).map(({reducer:u})=>u)];return c.filter(u=>!!u).length===0&&(c=[r]),c.reduce((u,d)=>{if(d)if(bs(u)){const p=d(u,l);return p===void 0?u:p}else{if(Zi(u))return KM(u,f=>d(f,l));{const f=d(u,l);if(f===void 0){if(u===null)return u;throw Error("A case reducer on a non-draftable value must not return undefined")}return f}}return u},a)}return o.getInitialState=s,o}var XR=Symbol.for("rtk-slice-createasyncthunk");function qR(t,e){return`${t}/${e}`}function YR({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[XR];return function(r){const{name:s,reducerPath:o=s}=r;if(!s)throw new Error(Gi(11));typeof process<"u";const a=(typeof r.reducers=="function"?r.reducers(QR()):r.reducers)||{},l=Object.keys(a),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},u={addCase(x,T){const w=typeof x=="string"?x:x.type;if(!w)throw new Error(Gi(12));if(w in c.sliceCaseReducersByType)throw new Error(Gi(13));return c.sliceCaseReducersByType[w]=T,u},addMatcher(x,T){return c.sliceMatchers.push({matcher:x,reducer:T}),u},exposeAction(x,T){return c.actionCreators[x]=T,u},exposeCaseReducer(x,T){return c.sliceCaseReducersByName[x]=T,u}};l.forEach(x=>{const T=a[x],w={reducerName:x,type:qR(s,x),createNotation:typeof r.reducers=="function"};e2(T)?n2(w,T,u,e):JR(w,T,u)});function d(){const[x={},T=[],w=void 0]=typeof r.extraReducers=="function"?JM(r.extraReducers):[r.extraReducers],b={...x,...c.sliceCaseReducersByType};return $R(r.initialState,L=>{for(let $ in b)L.addCase($,b[$]);for(let $ of c.sliceMatchers)L.addMatcher($.matcher,$.reducer);for(let $ of T)L.addMatcher($.matcher,$.reducer);w&&L.addDefaultCase(w)})}const f=x=>x,p=new Map,g=new WeakMap;let _;function m(x,T){return _||(_=d()),_(x,T)}function h(){return _||(_=d()),_.getInitialState()}function v(x,T=!1){function w(L){let $=L[x];return typeof $>"u"&&T&&($=tc(g,w,h)),$}function b(L=f){const $=tc(p,T,()=>new WeakMap);return tc($,L,()=>{const S={};for(const[R,q]of Object.entries(r.selectors??{}))S[R]=KR(q,L,()=>tc(g,L,h),T);return S})}return{reducerPath:x,getSelectors:b,get selectors(){return b(w)},selectSlice:w}}const y={name:s,reducer:m,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:h,...v(o),injectInto(x,{reducerPath:T,...w}={}){const b=T??o;return x.inject({reducerPath:b,reducer:m},w),{...y,...v(b,!0)}}};return y}}function KR(t,e,n,i){function r(s,...o){let a=e(s);return typeof a>"u"&&i&&(a=n()),t(a,...o)}return r.unwrapped=t,r}var ZR=YR();function QR(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function JR({type:t,reducerName:e,createNotation:n},i,r){let s,o;if("reducer"in i){if(n&&!t2(i))throw new Error(Gi(17));s=i.reducer,o=i.prepare}else s=i;r.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?Vv(t,o):Vv(t))}function e2(t){return t._reducerDefinitionType==="asyncThunk"}function t2(t){return t._reducerDefinitionType==="reducerWithPrepare"}function n2({type:t,reducerName:e},n,i,r){if(!r)throw new Error(Gi(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:l,settled:c,options:u}=n,d=r(t,s,u);i.exposeAction(e,d),o&&i.addCase(d.fulfilled,o),a&&i.addCase(d.pending,a),l&&i.addCase(d.rejected,l),c&&i.addMatcher(d.settled,c),i.exposeCaseReducer(e,{fulfilled:o||nc,pending:a||nc,rejected:l||nc,settled:c||nc})}function nc(){}function Gi(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}const i2={resume:"https://drive.google.com/file/d/1ZEnXY-lU7S37OgnR0_p7G-3ocg81TM74/view?usp=drive_link"},r2={title:{main:"Developer Planner",sub:"& Leader"},previewImages:["/assets/1.png","/assets/2.png","/assets/3.png","/assets/4.png","/assets/5.png","/assets/6.png","/assets/7.png","/assets/8.png","/assets/9.png"],description:"I create exceptional digital experiences that make a difference. Specializing in modern web/mobile applications and innovative solutions.",buttons:{primary:{text:"View My Work",target:"projects"},secondary:{text:"Get In Touch",target:"contact"}},socialLinks:[{platform:"GitHub",url:"https://github.com/ri-yan",icon:"GitHub"},{platform:"LinkedIn",url:"https://linkedin.com/in/riyan08",icon:"Linkedin"},{platform:"Twitter",url:"https://twitter.com/yourusername",icon:"Twitter"},{platform:"Email",url:"mailto:mriyan0801@gmail.com",icon:"Mail"}],quotes:["Design is intelligence made visible.","Code is like humor. When you have to explain it, it's bad.","Simplicity is the soul of efficiency.","Make it work, make it right, make it fast.","Creativity is nothing but a mind set free.","Every great design begins with an even better story.","Any product that needs a manual is broken.","Good design is good business.","The best way to predict the future is to invent it."]},s2={title:"About Me",subtitle:"Here you'll find more information about me, what I do, and my current skills mostly in terms of programming and technology.",introTitle:"Get to know me!",intro:["I'm a <span class='text-teal-500 dark:text-teal-default font-medium'>Full Stack Developer</span> building robust and user-friendly web applications that solve real-world problems. I enjoy creating software that is both functional and visually appealing.","I specialize in developing full-stack applications using modern technologies. My passion lies in designing efficient and scalable backend systems, as well as crafting engaging and intuitive user interfaces.","In addition to my development work, I'm also available for <span class='text-teal-500 dark:text-teal-default font-medium'>freelance projects</span> and open to collaboration opportunities. If you have a project in mind, feel free to reach out!"],servicesTitle:"My Services",services:[{icon:"Code2",title:"Web Development",description:"Creating responsive, user-friendly websites and applications with modern frameworks"},{icon:"Cpu",title:"API Development",description:"Designing and implementing RESTful APIs and backend services"},{icon:"Globe",title:"DevOps & Deployment",description:"Setting up CI/CD pipelines, cloud infrastructure, and containerization"},{icon:"Codepen",title:"Custom Solutions",description:"Building tailored software solutions for specific business needs"}]},o2={title:"Services I Provide",subtitle:"Delivering exceptional digital solutions tailored to your needs",items:[{icon:"Palette",title:"Graphic Design",description:"Creating stunning visual assets and brand identities that capture attention and communicate your message effectively.",gradient:"from-[#FF0080] to-[#7928CA]"},{icon:"Globe2",title:"Web Design",description:"Crafting beautiful, responsive websites that provide exceptional user experiences across all devices.",gradient:"from-[#7928CA] to-[#FF0080]"},{icon:"Layers",title:"UI/UX Design",description:"Designing intuitive interfaces and seamless user experiences that delight and engage your audience.",gradient:"from-[#00F5A0] to-[#00D9F5]"},{icon:"Code2",title:"Frontend Development",description:"Building modern, performant web applications using the latest technologies and best practices.",gradient:"from-[#00D9F5] to-[#00F5A0]"},{icon:"LineChart",title:"Business Analysis",description:"Providing strategic insights and data-driven solutions to help your business grow and succeed.",gradient:"from-[#7928CA] to-[#FF0080]"},{icon:"Megaphone",title:"Digital Marketing",description:"Implementing effective digital marketing strategies to increase your online presence and reach.",gradient:"from-[#00F5A0] to-[#00D9F5]"}]},a2={title:'My <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] ml-2">Expertise</span>',subtitle:"Proficient in modern technologies and frameworks",categories:[{category:"Frontend",items:[{name:"React",level:90},{name:"Next.js",level:85},{name:"TypeScript",level:90},{name:"Vue.js",level:80},{name:"TailwindCSS",level:85}]},{category:"Backend",items:[{name:"Node.js",level:90},{name:"Express",level:85},{name:"Python",level:80},{name:"Django",level:75},{name:"GraphQL",level:70}]},{category:"Database",items:[{name:"MongoDB",level:85},{name:"PostgreSQL",level:80},{name:"Redis",level:75},{name:"MySQL",level:80},{name:"Firebase",level:85}]}]},l2={title:"Featured Projects",subtitle:"Explore my latest works and creative endeavors",categories:[{id:"all",label:"All Projects"},{id:"web",label:"Web Apps"},{id:"mobile",label:"Mobile"},{id:"ux",label:"UX/UI"},{id:"api",label:"API"}],items:[{id:1,title:"E-Commerce Platform",description:"A full-featured e-commerce platform with product management, user authentication, and payment processing.",image:"https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",technologies:["React","Node.js","MongoDB","Stripe"],github:"https://github.com/yourusername/project-1",demo:"https://project-1.example.com",category:"web",featured:!0}]},c2={title:"What My Clients Say",subtitle:"Testimonials from satisfied clients",items:[{name:"Sarah Johnson",role:"CEO at TechStart",image:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",content:"Working with this team has been an absolute pleasure. Their attention to detail and creative approach to problem-solving has significantly improved our digital presence.",rating:5},{name:"Michael Chen",role:"Product Manager",image:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",content:"The level of professionalism and technical expertise is outstanding. They delivered our project ahead of schedule and exceeded all expectations.",rating:5},{name:"Emily Rodriguez",role:"Marketing Director",image:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",content:"Their innovative solutions and strategic thinking have helped us achieve remarkable growth. A truly reliable and talented partner for any digital project.",rating:5}]},u2={title:"Get In Touch",leftHeader:"Contact Information",rightHeader:"Send Me a Message",subtitle:"Feel free to contact me for any project or collaboration",info:{description:"I'm interested in freelance opportunities – especially ambitious or large projects. However, if you have other requests or questions, don't hesitate to contact me.",location:"Lucknow, Uttar Pradesh, India",email:"mriyan0801@gmail.com",phone:"+91 9044271286"}},d2={description:"A passionate Software Engineer and Freelancer building digital products with a focus on user experience.",socialLinks:[{platform:"GitHub",url:"https://github.com/ri-yan"},{platform:"LinkedIn",url:"https://linkedin.com/in/riyan08"},{platform:"Twitter",url:"https://twitter.com/yourusername"},{platform:"Email",url:"mailto:mriyan0801@gmail.com"}],quickLinks:[{name:"Home",href:"#hero"},{name:"About",href:"#about"},{name:"Skills",href:"#skills"},{name:"Projects",href:"#projects"},{name:"Contact",href:"#contact"}],contactme:{email:"mriyan0801@gmail.com",phone:"+91 9044271286",github:"github.com/ri-yan",linkedin:"linkedin.com/in/riyan08",twitter:"twitter.com/yourusername"}},f2={links:i2,hero:r2,about:s2,services:o2,skills:a2,projects:l2,testimonials:c2,contact:u2,footer:d2},h2=f2,p2=ZR({name:"staticData",initialState:h2,reducers:{}}),m2=t=>t.staticData.links,g2=t=>t.staticData.hero,v2=t=>t.staticData.about,y2=t=>t.staticData.services,_2=t=>t.staticData.skills,ew=t=>t.staticData.projects,x2=t=>t.staticData.testimonials,S2=t=>t.staticData.contact,E2=t=>t.staticData.footer,M2=p2.reducer,w2=jR({reducer:{staticData:M2}});var Et={},fg={},_l={},xl={},tw="Expected a function",jv=NaN,T2="[object Symbol]",b2=/^\s+|\s+$/g,A2=/^[-+]0x[0-9a-f]+$/i,C2=/^0b[01]+$/i,R2=/^0o[0-7]+$/i,P2=parseInt,L2=typeof kl=="object"&&kl&&kl.Object===Object&&kl,D2=typeof self=="object"&&self&&self.Object===Object&&self,N2=L2||D2||Function("return this")(),I2=Object.prototype,O2=I2.toString,U2=Math.max,k2=Math.min,Ef=function(){return N2.Date.now()};function F2(t,e,n){var i,r,s,o,a,l,c=0,u=!1,d=!1,f=!0;if(typeof t!="function")throw new TypeError(tw);e=Wv(e)||0,Lu(n)&&(u=!!n.leading,d="maxWait"in n,s=d?U2(Wv(n.maxWait)||0,e):s,f="trailing"in n?!!n.trailing:f);function p(w){var b=i,L=r;return i=r=void 0,c=w,o=t.apply(L,b),o}function g(w){return c=w,a=setTimeout(h,e),u?p(w):o}function _(w){var b=w-l,L=w-c,$=e-b;return d?k2($,s-L):$}function m(w){var b=w-l,L=w-c;return l===void 0||b>=e||b<0||d&&L>=s}function h(){var w=Ef();if(m(w))return v(w);a=setTimeout(h,_(w))}function v(w){return a=void 0,f&&i?p(w):(i=r=void 0,o)}function y(){a!==void 0&&clearTimeout(a),c=0,i=l=r=a=void 0}function x(){return a===void 0?o:v(Ef())}function T(){var w=Ef(),b=m(w);if(i=arguments,r=this,l=w,b){if(a===void 0)return g(l);if(d)return a=setTimeout(h,e),p(l)}return a===void 0&&(a=setTimeout(h,e)),o}return T.cancel=y,T.flush=x,T}function B2(t,e,n){var i=!0,r=!0;if(typeof t!="function")throw new TypeError(tw);return Lu(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),F2(t,e,{leading:i,maxWait:e,trailing:r})}function Lu(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function z2(t){return!!t&&typeof t=="object"}function V2(t){return typeof t=="symbol"||z2(t)&&O2.call(t)==T2}function Wv(t){if(typeof t=="number")return t;if(V2(t))return jv;if(Lu(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Lu(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(b2,"");var n=C2.test(t);return n||R2.test(t)?P2(t.slice(2),n?2:8):A2.test(t)?jv:+t}var H2=B2,Sl={};Object.defineProperty(Sl,"__esModule",{value:!0});Sl.addPassiveEventListener=function(e,n,i){var r=i.name;r||(r=n,console.warn("Listener must be a named function.")),qc.has(n)||qc.set(n,new Set);var s=qc.get(n);if(!s.has(r)){var o=function(){var a=!1;try{var l=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,l)}catch{}return a}();e.addEventListener(n,i,o?{passive:!0}:!1),s.add(r)}};Sl.removePassiveEventListener=function(e,n,i){e.removeEventListener(n,i),qc.get(n).delete(i.name||n)};var qc=new Map;Object.defineProperty(xl,"__esModule",{value:!0});var G2=H2,j2=W2(G2),$v=Sl;function W2(t){return t&&t.__esModule?t:{default:t}}var $2=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,j2.default)(e,n)},mt={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,n){if(e){var i=$2(function(r){mt.scrollHandler(e)},n);return mt.scrollSpyContainers.push(e),(0,$v.addPassiveEventListener)(e,"scroll",i),function(){(0,$v.removePassiveEventListener)(e,"scroll",i),mt.scrollSpyContainers.splice(mt.scrollSpyContainers.indexOf(e),1)}}return function(){}},isMounted:function(e){return mt.scrollSpyContainers.indexOf(e)!==-1},currentPositionX:function(e){if(e===document){var n=window.scrollY!==void 0,i=(document.compatMode||"")==="CSS1Compat";return n?window.scrollX:i?document.documentElement.scrollLeft:document.body.scrollLeft}else return e.scrollLeft},currentPositionY:function(e){if(e===document){var n=window.scrollX!==void 0,i=(document.compatMode||"")==="CSS1Compat";return n?window.scrollY:i?document.documentElement.scrollTop:document.body.scrollTop}else return e.scrollTop},scrollHandler:function(e){var n=mt.scrollSpyContainers[mt.scrollSpyContainers.indexOf(e)].spyCallbacks||[];n.forEach(function(i){return i(mt.currentPositionX(e),mt.currentPositionY(e))})},addStateHandler:function(e){mt.spySetState.push(e)},addSpyHandler:function(e,n){var i=mt.scrollSpyContainers[mt.scrollSpyContainers.indexOf(n)];i.spyCallbacks||(i.spyCallbacks=[]),i.spyCallbacks.push(e)},updateStates:function(){mt.spySetState.forEach(function(e){return e()})},unmount:function(e,n){mt.scrollSpyContainers.forEach(function(i){return i.spyCallbacks&&i.spyCallbacks.length&&i.spyCallbacks.indexOf(n)>-1&&i.spyCallbacks.splice(i.spyCallbacks.indexOf(n),1)}),mt.spySetState&&mt.spySetState.length&&mt.spySetState.indexOf(e)>-1&&mt.spySetState.splice(mt.spySetState.indexOf(e),1),document.removeEventListener("scroll",mt.scrollHandler)},update:function(){return mt.scrollSpyContainers.forEach(function(e){return mt.scrollHandler(e)})}};xl.default=mt;var Xo={},El={};Object.defineProperty(El,"__esModule",{value:!0});var X2=function(e,n){var i=e.indexOf("#")===0?e.substring(1):e,r=i?"#"+i:"",s=window&&window.location,o=r?s.pathname+s.search+r:s.pathname+s.search;n?history.pushState(history.state,"",o):history.replaceState(history.state,"",o)},q2=function(){return window.location.hash.replace(/^#/,"")},Y2=function(e){return function(n){return e.contains?e!=n&&e.contains(n):!!(e.compareDocumentPosition(n)&16)}},K2=function(e){return getComputedStyle(e).position!=="static"},Mf=function(e,n){for(var i=e.offsetTop,r=e.offsetParent;r&&!n(r);)i+=r.offsetTop,r=r.offsetParent;return{offsetTop:i,offsetParent:r}},Z2=function(e,n,i){if(i)return e===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(e).position!=="static"?n.offsetLeft:n.offsetLeft-e.offsetLeft;if(e===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(K2(e)){if(n.offsetParent!==e){var r=function(u){return u===e||u===document},s=Mf(n,r),o=s.offsetTop,a=s.offsetParent;if(a!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return o}return n.offsetTop}if(n.offsetParent===e.offsetParent)return n.offsetTop-e.offsetTop;var l=function(u){return u===document};return Mf(n,l).offsetTop-Mf(e,l).offsetTop};El.default={updateHash:X2,getHash:q2,filterElementInContainer:Y2,scrollOffset:Z2};var md={},hg={};Object.defineProperty(hg,"__esModule",{value:!0});hg.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}};var pg={};Object.defineProperty(pg,"__esModule",{value:!0});var Q2=Sl,J2=["mousedown","wheel","touchmove","keydown"];pg.default={subscribe:function(e){return typeof document<"u"&&J2.forEach(function(n){return(0,Q2.addPassiveEventListener)(document,n,e)})}};var Ml={};Object.defineProperty(Ml,"__esModule",{value:!0});var Cp={registered:{},scrollEvent:{register:function(e,n){Cp.registered[e]=n},remove:function(e){Cp.registered[e]=null}}};Ml.default=Cp;Object.defineProperty(md,"__esModule",{value:!0});var eP=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},tP=El;gd(tP);var nP=hg,Xv=gd(nP),iP=pg,rP=gd(iP),sP=Ml,pi=gd(sP);function gd(t){return t&&t.__esModule?t:{default:t}}var nw=function(e){return Xv.default[e.smooth]||Xv.default.defaultEasing},oP=function(e){return typeof e=="function"?e:function(){return e}},aP=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},Rp=function(){return aP()||function(t,e,n){window.setTimeout(t,n||1e3/60,new Date().getTime())}}(),iw=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},rw=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var i=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return i?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft},sw=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var i=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return i?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop},lP=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var i=document.body,r=document.documentElement;return Math.max(i.scrollWidth,i.offsetWidth,r.clientWidth,r.scrollWidth,r.offsetWidth)},cP=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var i=document.body,r=document.documentElement;return Math.max(i.scrollHeight,i.offsetHeight,r.clientHeight,r.scrollHeight,r.offsetHeight)},uP=function t(e,n,i){var r=n.data;if(!n.ignoreCancelEvents&&r.cancel){pi.default.registered.end&&pi.default.registered.end(r.to,r.target,r.currentPositionY);return}if(r.delta=Math.round(r.targetPosition-r.startPosition),r.start===null&&(r.start=i),r.progress=i-r.start,r.percent=r.progress>=r.duration?1:e(r.progress/r.duration),r.currentPosition=r.startPosition+Math.ceil(r.delta*r.percent),r.containerElement&&r.containerElement!==document&&r.containerElement!==document.body?n.horizontal?r.containerElement.scrollLeft=r.currentPosition:r.containerElement.scrollTop=r.currentPosition:n.horizontal?window.scrollTo(r.currentPosition,0):window.scrollTo(0,r.currentPosition),r.percent<1){var s=t.bind(null,e,n);Rp.call(window,s);return}pi.default.registered.end&&pi.default.registered.end(r.to,r.target,r.currentPosition)},mg=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},wl=function(e,n,i,r){n.data=n.data||iw(),window.clearTimeout(n.data.delayTimeout);var s=function(){n.data.cancel=!0};if(rP.default.subscribe(s),mg(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?rw(n):sw(n),n.data.targetPosition=n.absolute?e:e+n.data.startPosition,n.data.startPosition===n.data.targetPosition){pi.default.registered.end&&pi.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=oP(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=i,n.data.target=r;var o=nw(n),a=uP.bind(null,o,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){pi.default.registered.begin&&pi.default.registered.begin(n.data.to,n.data.target),Rp.call(window,a)},n.delay);return}pi.default.registered.begin&&pi.default.registered.begin(n.data.to,n.data.target),Rp.call(window,a)},vd=function(e){return e=eP({},e),e.data=e.data||iw(),e.absolute=!0,e},dP=function(e){wl(0,vd(e))},fP=function(e,n){wl(e,vd(n))},hP=function(e){e=vd(e),mg(e),wl(e.horizontal?lP(e):cP(e),e)},pP=function(e,n){n=vd(n),mg(n);var i=n.horizontal?rw(n):sw(n);wl(e+i,n)};md.default={animateTopScroll:wl,getAnimationType:nw,scrollToTop:dP,scrollToBottom:hP,scrollTo:fP,scrollMore:pP};Object.defineProperty(Xo,"__esModule",{value:!0});var mP=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},gP=El,vP=gg(gP),yP=md,_P=gg(yP),xP=Ml,ic=gg(xP);function gg(t){return t&&t.__esModule?t:{default:t}}var rc={},qv=void 0;Xo.default={unmount:function(){rc={}},register:function(e,n){rc[e]=n},unregister:function(e){delete rc[e]},get:function(e){return rc[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return qv=e},getActiveLink:function(){return qv},scrollTo:function(e,n){var i=this.get(e);if(!i){console.warn("target Element not found");return}n=mP({},n,{absolute:!1});var r=n.containerId,s=n.container,o=void 0;r?o=document.getElementById(r):s&&s.nodeType?o=s:o=document,n.absolute=!0;var a=n.horizontal,l=vP.default.scrollOffset(o,i,a)+(n.offset||0);if(!n.smooth){ic.default.registered.begin&&ic.default.registered.begin(e,i),o===document?n.horizontal?window.scrollTo(l,0):window.scrollTo(0,l):o.scrollTop=l,ic.default.registered.end&&ic.default.registered.end(e,i);return}_P.default.animateTopScroll(l,n,e,i)}};var ow={exports:{}},SP="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",EP=SP,MP=EP;function aw(){}function lw(){}lw.resetWarningCache=aw;var wP=function(){function t(i,r,s,o,a,l){if(l!==MP){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:lw,resetWarningCache:aw};return n.PropTypes=n,n};ow.exports=wP();var yd=ow.exports,_d={};Object.defineProperty(_d,"__esModule",{value:!0});var TP=El,wf=bP(TP);function bP(t){return t&&t.__esModule?t:{default:t}}var AP={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,n){this.containers[e]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,n=this.getHash();n?window.setTimeout(function(){e.scrollTo(n,!0),e.initialized=!0},10):this.initialized=!0},scrollTo:function(e,n){var i=this.scroller,r=i.get(e);if(r&&(n||e!==i.getActiveLink())){var s=this.containers[e]||document;i.scrollTo(e,{container:s})}},getHash:function(){return wf.default.getHash()},changeHash:function(e,n){this.isInitialized()&&wf.default.getHash()!==e&&wf.default.updateHash(e,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};_d.default=AP;Object.defineProperty(_l,"__esModule",{value:!0});var sc=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},CP=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),RP=H,Yv=Tl(RP),PP=xl,oc=Tl(PP),LP=Xo,DP=Tl(LP),NP=yd,dt=Tl(NP),IP=_d,ir=Tl(IP);function Tl(t){return t&&t.__esModule?t:{default:t}}function OP(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function UP(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function kP(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Kv={to:dt.default.string.isRequired,containerId:dt.default.string,container:dt.default.object,activeClass:dt.default.string,activeStyle:dt.default.object,spy:dt.default.bool,horizontal:dt.default.bool,smooth:dt.default.oneOfType([dt.default.bool,dt.default.string]),offset:dt.default.number,delay:dt.default.number,isDynamic:dt.default.bool,onClick:dt.default.func,duration:dt.default.oneOfType([dt.default.number,dt.default.func]),absolute:dt.default.bool,onSetActive:dt.default.func,onSetInactive:dt.default.func,ignoreCancelEvents:dt.default.bool,hashSpy:dt.default.bool,saveHashHistory:dt.default.bool,spyThrottle:dt.default.number};_l.default=function(t,e){var n=e||DP.default,i=function(s){kP(o,s);function o(a){OP(this,o);var l=UP(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,a));return r.call(l),l.state={active:!1},l.beforeUnmountCallbacks=[],l}return CP(o,[{key:"getScrollSpyContainer",value:function(){var l=this.props.containerId,c=this.props.container;return l&&!c?document.getElementById(l):c&&c.nodeType?c:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var l=this.getScrollSpyContainer();if(!oc.default.isMounted(l)){var c=oc.default.mount(l,this.props.spyThrottle);this.beforeUnmountCallbacks.push(c)}this.props.hashSpy&&(ir.default.isMounted()||ir.default.mount(n),ir.default.mapContainer(this.props.to,l)),oc.default.addSpyHandler(this.spyHandler,l),this.setState({container:l})}}},{key:"componentWillUnmount",value:function(){oc.default.unmount(this.stateHandler,this.spyHandler),this.beforeUnmountCallbacks.forEach(function(l){return l()})}},{key:"render",value:function(){var l="";this.state&&this.state.active?l=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():l=this.props.className;var c={};this.state&&this.state.active?c=sc({},this.props.style,this.props.activeStyle):c=sc({},this.props.style);var u=sc({},this.props);for(var d in Kv)u.hasOwnProperty(d)&&delete u[d];return u.className=l,u.style=c,u.onClick=this.handleClick,Yv.default.createElement(t,u)}}]),o}(Yv.default.PureComponent),r=function(){var o=this;this.scrollTo=function(a,l){n.scrollTo(a,sc({},o.state,l))},this.handleClick=function(a){o.props.onClick&&o.props.onClick(a),a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),o.scrollTo(o.props.to,o.props)},this.spyHandler=function(a,l){var c=o.getScrollSpyContainer();if(!(ir.default.isMounted()&&!ir.default.isInitialized())){var u=o.props.horizontal,d=o.props.to,f=null,p=void 0,g=void 0;if(u){var _=0,m=0,h=0;if(c.getBoundingClientRect){var v=c.getBoundingClientRect();h=v.left}if(!f||o.props.isDynamic){if(f=n.get(d),!f)return;var y=f.getBoundingClientRect();_=y.left-h+a,m=_+y.width}var x=a-o.props.offset;p=x>=Math.floor(_)&&x<Math.floor(m),g=x<Math.floor(_)||x>=Math.floor(m)}else{var T=0,w=0,b=0;if(c.getBoundingClientRect){var L=c.getBoundingClientRect();b=L.top}if(!f||o.props.isDynamic){if(f=n.get(d),!f)return;var $=f.getBoundingClientRect();T=$.top-b+l,w=T+$.height}var S=l-o.props.offset;p=S>=Math.floor(T)&&S<Math.floor(w),g=S<Math.floor(T)||S>=Math.floor(w)}var R=n.getActiveLink();if(g){if(d===R&&n.setActiveLink(void 0),o.props.hashSpy&&ir.default.getHash()===d){var q=o.props.saveHashHistory,Z=q===void 0?!1:q;ir.default.changeHash("",Z)}o.props.spy&&o.state.active&&(o.setState({active:!1}),o.props.onSetInactive&&o.props.onSetInactive(d,f))}if(p&&(R!==d||o.state.active===!1)){n.setActiveLink(d);var N=o.props.saveHashHistory,X=N===void 0?!1:N;o.props.hashSpy&&ir.default.changeHash(d,X),o.props.spy&&(o.setState({active:!0}),o.props.onSetActive&&o.props.onSetActive(d,f))}}}};return i.propTypes=Kv,i.defaultProps={offset:0},i};Object.defineProperty(fg,"__esModule",{value:!0});var FP=H,Zv=cw(FP),BP=_l,zP=cw(BP);function cw(t){return t&&t.__esModule?t:{default:t}}function VP(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Qv(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function HP(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var GP=function(t){HP(e,t);function e(){var n,i,r,s;VP(this,e);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return s=(i=(r=Qv(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(a))),r),r.render=function(){return Zv.default.createElement("a",r.props,r.props.children)},i),Qv(r,s)}return e}(Zv.default.Component);fg.default=(0,zP.default)(GP);var vg={};Object.defineProperty(vg,"__esModule",{value:!0});var jP=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),WP=H,Jv=uw(WP),$P=_l,XP=uw($P);function uw(t){return t&&t.__esModule?t:{default:t}}function qP(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function YP(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function KP(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var ZP=function(t){KP(e,t);function e(){return qP(this,e),YP(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return jP(e,[{key:"render",value:function(){return Jv.default.createElement("button",this.props,this.props.children)}}]),e}(Jv.default.Component);vg.default=(0,XP.default)(ZP);var yg={},xd={};Object.defineProperty(xd,"__esModule",{value:!0});var QP=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},JP=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),eL=H,ey=Sd(eL),tL=FM;Sd(tL);var nL=Xo,ty=Sd(nL),iL=yd,ny=Sd(iL);function Sd(t){return t&&t.__esModule?t:{default:t}}function rL(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function sL(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function oL(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}xd.default=function(t){var e=function(n){oL(i,n);function i(r){rL(this,i);var s=sL(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,r));return s.childBindings={domNode:null},s}return JP(i,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(s){this.props.name!==s.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;ty.default.unregister(this.props.name)}},{key:"registerElems",value:function(s){ty.default.register(s,this.childBindings.domNode)}},{key:"render",value:function(){return ey.default.createElement(t,QP({},this.props,{parentBindings:this.childBindings}))}}]),i}(ey.default.Component);return e.propTypes={name:ny.default.string,id:ny.default.string},e};Object.defineProperty(yg,"__esModule",{value:!0});var iy=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},aL=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),lL=H,ry=_g(lL),cL=xd,uL=_g(cL),dL=yd,sy=_g(dL);function _g(t){return t&&t.__esModule?t:{default:t}}function fL(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function hL(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function pL(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var dw=function(t){pL(e,t);function e(){return fL(this,e),hL(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return aL(e,[{key:"render",value:function(){var i=this,r=iy({},this.props);return delete r.name,r.parentBindings&&delete r.parentBindings,ry.default.createElement("div",iy({},r,{ref:function(o){i.props.parentBindings.domNode=o}}),this.props.children)}}]),e}(ry.default.Component);dw.propTypes={name:sy.default.string,id:sy.default.string};yg.default=(0,uL.default)(dw);var Tf=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},oy=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function ay(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ly(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function cy(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var ac=H,$r=xl,bf=Xo,gt=yd,rr=_d,uy={to:gt.string.isRequired,containerId:gt.string,container:gt.object,activeClass:gt.string,spy:gt.bool,smooth:gt.oneOfType([gt.bool,gt.string]),offset:gt.number,delay:gt.number,isDynamic:gt.bool,onClick:gt.func,duration:gt.oneOfType([gt.number,gt.func]),absolute:gt.bool,onSetActive:gt.func,onSetInactive:gt.func,ignoreCancelEvents:gt.bool,hashSpy:gt.bool,spyThrottle:gt.number},mL={Scroll:function(e,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var i=n||bf,r=function(o){cy(a,o);function a(l){ay(this,a);var c=ly(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,l));return s.call(c),c.state={active:!1},c}return oy(a,[{key:"getScrollSpyContainer",value:function(){var c=this.props.containerId,u=this.props.container;return c?document.getElementById(c):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var c=this.getScrollSpyContainer();$r.isMounted(c)||$r.mount(c,this.props.spyThrottle),this.props.hashSpy&&(rr.isMounted()||rr.mount(i),rr.mapContainer(this.props.to,c)),this.props.spy&&$r.addStateHandler(this.stateHandler),$r.addSpyHandler(this.spyHandler,c),this.setState({container:c})}}},{key:"componentWillUnmount",value:function(){$r.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var c="";this.state&&this.state.active?c=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():c=this.props.className;var u=Tf({},this.props);for(var d in uy)u.hasOwnProperty(d)&&delete u[d];return u.className=c,u.onClick=this.handleClick,ac.createElement(e,u)}}]),a}(ac.Component),s=function(){var a=this;this.scrollTo=function(l,c){i.scrollTo(l,Tf({},a.state,c))},this.handleClick=function(l){a.props.onClick&&a.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),a.scrollTo(a.props.to,a.props)},this.stateHandler=function(){i.getActiveLink()!==a.props.to&&(a.state!==null&&a.state.active&&a.props.onSetInactive&&a.props.onSetInactive(),a.setState({active:!1}))},this.spyHandler=function(l){var c=a.getScrollSpyContainer();if(!(rr.isMounted()&&!rr.isInitialized())){var u=a.props.to,d=null,f=0,p=0,g=0;if(c.getBoundingClientRect){var _=c.getBoundingClientRect();g=_.top}if(!d||a.props.isDynamic){if(d=i.get(u),!d)return;var m=d.getBoundingClientRect();f=m.top-g+l,p=f+m.height}var h=l-a.props.offset,v=h>=Math.floor(f)&&h<Math.floor(p),y=h<Math.floor(f)||h>=Math.floor(p),x=i.getActiveLink();if(y)return u===x&&i.setActiveLink(void 0),a.props.hashSpy&&rr.getHash()===u&&rr.changeHash(),a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive()),$r.updateStates();if(v&&x!==u)return i.setActiveLink(u),a.props.hashSpy&&rr.changeHash(u),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(u)),$r.updateStates()}}};return r.propTypes=uy,r.defaultProps={offset:0},r},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(i){cy(r,i);function r(s){ay(this,r);var o=ly(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,s));return o.childBindings={domNode:null},o}return oy(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(o){this.props.name!==o.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;bf.unregister(this.props.name)}},{key:"registerElems",value:function(o){bf.register(o,this.childBindings.domNode)}},{key:"render",value:function(){return ac.createElement(e,Tf({},this.props,{parentBindings:this.childBindings}))}}]),r}(ac.Component);return n.propTypes={name:gt.string,id:gt.string},n}},gL=mL;Object.defineProperty(Et,"__esModule",{value:!0});Et.Helpers=Et.ScrollElement=Et.ScrollLink=Et.animateScroll=Et.scrollSpy=Et.Events=Et.scroller=Et.Element=Et.Button=To=Et.Link=void 0;var vL=fg,fw=Ti(vL),yL=vg,hw=Ti(yL),_L=yg,pw=Ti(_L),xL=Xo,mw=Ti(xL),SL=Ml,gw=Ti(SL),EL=xl,vw=Ti(EL),ML=md,yw=Ti(ML),wL=_l,_w=Ti(wL),TL=xd,xw=Ti(TL),bL=gL,Sw=Ti(bL);function Ti(t){return t&&t.__esModule?t:{default:t}}var To=Et.Link=fw.default;Et.Button=hw.default;Et.Element=pw.default;Et.scroller=mw.default;Et.Events=gw.default;Et.scrollSpy=vw.default;Et.animateScroll=yw.default;Et.ScrollLink=_w.default;Et.ScrollElement=xw.default;Et.Helpers=Sw.default;Et.default={Link:fw.default,Button:hw.default,Element:pw.default,scroller:mw.default,Events:gw.default,scrollSpy:vw.default,animateScroll:yw.default,ScrollLink:_w.default,ScrollElement:xw.default,Helpers:Sw.default};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var AL={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CL=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),nt=(t,e)=>{const n=H.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},u)=>H.createElement("svg",{ref:u,...AL,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${CL(t)}`,a].join(" "),...c},[...e.map(([d,f])=>H.createElement(d,f)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RL=nt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PL=nt("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LL=nt("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=nt("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DL=nt("Codepen",[["polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2",key:"srzb37"}],["line",{x1:"12",x2:"12",y1:"22",y2:"15.5",key:"1t73f2"}],["polyline",{points:"22 8.5 12 15.5 2 8.5",key:"ajlxae"}],["polyline",{points:"2 15.5 12 8.5 22 15.5",key:"susrui"}],["line",{x1:"12",x2:"12",y1:"2",y2:"8.5",key:"2cldga"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NL=nt("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=nt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IL=nt("Earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17",key:"1fi5u6"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"xsiumc"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=nt("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OL=nt("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=nt("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UL=nt("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kL=nt("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FL=nt("LineChart",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=nt("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=nt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BL=nt("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zL=nt("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VL=nt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=nt("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HL=nt("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GL=nt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jL=nt("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WL=nt("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=nt("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=nt("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $L=nt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Mw=H.createContext(null),ww=()=>{const t=H.useContext(Mw);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t},XL=({children:t})=>{const[e,n]=H.useState(()=>{const r=localStorage.getItem("theme");return r?r==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches});H.useEffect(()=>{e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.setItem("theme",e?"dark":"light")},[e]);const i=()=>{n(r=>!r)};return E.jsx(Mw.Provider,{value:{darkMode:e,toggleTheme:i},children:t})},Sg=H.createContext({});function qo(t){const e=H.useRef(null);return e.current===null&&(e.current=t()),e.current}const Ed=H.createContext(null),Md=H.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class qL extends H.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function YL({children:t,isPresent:e}){const n=H.useId(),i=H.useRef(null),r=H.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=H.useContext(Md);return H.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:c}=r.current;if(e||!i.current||!o||!a)return;i.current.dataset.motionPopId=n;const u=document.createElement("style");return s&&(u.nonce=s),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[e]),E.jsx(qL,{isPresent:e,childRef:i,sizeRef:r,children:H.cloneElement(t,{ref:i})})}const KL=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o})=>{const a=qo(ZL),l=H.useId(),c=H.useCallback(d=>{a.set(d,!0);for(const f of a.values())if(!f)return;i&&i()},[a,i]),u=H.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:c,register:d=>(a.set(d,!1),()=>a.delete(d))}),s?[Math.random(),c]:[n,c]);return H.useMemo(()=>{a.forEach((d,f)=>a.set(f,!1))},[n]),H.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(t=E.jsx(YL,{isPresent:n,children:t})),E.jsx(Ed.Provider,{value:u,children:t})};function ZL(){return new Map}function Tw(t=!0){const e=H.useContext(Ed);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=H.useId();H.useEffect(()=>{t&&r(s)},[t]);const o=H.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const lc=t=>t.key||"";function py(t){const e=[];return H.Children.forEach(t,n=>{H.isValidElement(n)&&e.push(n)}),e}const Eg=typeof window<"u",wd=Eg?H.useLayoutEffect:H.useEffect,Mg=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1})=>{const[a,l]=Tw(o),c=H.useMemo(()=>py(t),[t]),u=o&&!a?[]:c.map(lc),d=H.useRef(!0),f=H.useRef(c),p=qo(()=>new Map),[g,_]=H.useState(c),[m,h]=H.useState(c);wd(()=>{d.current=!1,f.current=c;for(let x=0;x<m.length;x++){const T=lc(m[x]);u.includes(T)?p.delete(T):p.get(T)!==!0&&p.set(T,!1)}},[m,u.length,u.join("-")]);const v=[];if(c!==g){let x=[...c];for(let T=0;T<m.length;T++){const w=m[T],b=lc(w);u.includes(b)||(x.splice(T,0,w),v.push(w))}s==="wait"&&v.length&&(x=v),h(py(x)),_(c);return}const{forceRender:y}=H.useContext(Sg);return E.jsx(E.Fragment,{children:m.map(x=>{const T=lc(x),w=o&&!a?!1:c===m||u.includes(T),b=()=>{if(p.has(T))p.set(T,!0);else return;let L=!0;p.forEach($=>{$||(L=!1)}),L&&(y==null||y(),h(f.current),o&&(l==null||l()),i&&i())};return E.jsx(KL,{isPresent:w,initial:!d.current||n?void 0:!1,custom:w?void 0:e,presenceAffectsLayout:r,mode:s,onExitComplete:w?void 0:b,children:x},T)})})},un=t=>t;let QL=un,Dp=un;function wg(t){let e;return()=>(e===void 0&&(e=t()),e)}const Cs=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},ji=t=>t*1e3,Wi=t=>t/1e3,JL={skipAnimations:!1,useManualTiming:!1};function eD(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),t()),c(o)}const l={schedule:(c,u=!1,d=!1)=>{const p=d&&i?e:n;return u&&s.add(c),p.has(c)||p.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,i){r=!0;return}i=!0,[e,n]=[n,e],e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(c))}};return l}const cc=["read","resolveKeyframes","update","preRender","render","postRender"],tD=40;function bw(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=cc.reduce((h,v)=>(h[v]=eD(s),h),{}),{read:a,resolveKeyframes:l,update:c,preRender:u,render:d,postRender:f}=o,p=()=>{const h=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(h-r.timestamp,tD),1),r.timestamp=h,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),d.process(r),f.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(p))},g=()=>{n=!0,i=!0,r.isProcessing||t(p)};return{schedule:cc.reduce((h,v)=>{const y=o[v];return h[v]=(x,T=!1,w=!1)=>(n||g(),y.schedule(x,T,w)),h},{}),cancel:h=>{for(let v=0;v<cc.length;v++)o[cc[v]].cancel(h)},state:r,steps:o}}const{schedule:Xe,cancel:ui,state:Ut,steps:Af}=bw(typeof requestAnimationFrame<"u"?requestAnimationFrame:un,!0),Aw=H.createContext({strict:!1}),my={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Fo={};for(const t in my)Fo[t]={isEnabled:e=>my[t].some(n=>!!e[n])};function nD(t){for(const e in t)Fo[e]={...Fo[e],...t[e]}}const iD=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Nu(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||iD.has(t)}let Cw=t=>!Nu(t);function rD(t){t&&(Cw=e=>e.startsWith("on")?!Nu(e):t(e))}try{rD(require("@emotion/is-prop-valid").default)}catch{}function sD(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(Cw(r)||n===!0&&Nu(r)||!e&&!Nu(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function oD(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}const Td=H.createContext({});function sl(t){return typeof t=="string"||Array.isArray(t)}function bd(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Tg=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],bg=["initial",...Tg];function Ad(t){return bd(t.animate)||bg.some(e=>sl(t[e]))}function Rw(t){return!!(Ad(t)||t.variants)}function aD(t,e){if(Ad(t)){const{initial:n,animate:i}=t;return{initial:n===!1||sl(n)?n:void 0,animate:sl(i)?i:void 0}}return t.inherit!==!1?e:{}}function lD(t){const{initial:e,animate:n}=aD(t,H.useContext(Td));return H.useMemo(()=>({initial:e,animate:n}),[gy(e),gy(n)])}function gy(t){return Array.isArray(t)?t.join(" "):t}const cD=Symbol.for("motionComponentSymbol");function fo(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function uD(t,e,n){return H.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):fo(n)&&(n.current=i))},[e])}const Ag=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),dD="framerAppearId",Pw="data-"+Ag(dD),{schedule:Cg,cancel:FG}=bw(queueMicrotask,!1),Lw=H.createContext({});function fD(t,e,n,i,r){var s,o;const{visualElement:a}=H.useContext(Td),l=H.useContext(Aw),c=H.useContext(Ed),u=H.useContext(Md).reducedMotion,d=H.useRef(null);i=i||l.renderer,!d.current&&i&&(d.current=i(t,{visualState:e,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const f=d.current,p=H.useContext(Lw);f&&!f.projection&&r&&(f.type==="html"||f.type==="svg")&&hD(d.current,n,r,p);const g=H.useRef(!1);H.useInsertionEffect(()=>{f&&g.current&&f.update(n,c)});const _=n[Pw],m=H.useRef(!!_&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,_))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,_)));return wd(()=>{f&&(g.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),Cg.render(f.render),m.current&&f.animationState&&f.animationState.animateChanges())}),H.useEffect(()=>{f&&(!m.current&&f.animationState&&f.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var h;(h=window.MotionHandoffMarkAsComplete)===null||h===void 0||h.call(window,_)}),m.current=!1))}),f}function hD(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:Dw(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&fo(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}function Dw(t){if(t)return t.options.allowProjection!==!1?t.projection:Dw(t.parent)}function pD({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){var s,o;t&&nD(t);function a(c,u){let d;const f={...H.useContext(Md),...c,layoutId:mD(c)},{isStatic:p}=f,g=lD(c),_=i(c,p);if(!p&&Eg){gD();const m=vD(f);d=m.MeasureLayout,g.visualElement=fD(r,_,f,e,m.ProjectionNode)}return E.jsxs(Td.Provider,{value:g,children:[d&&g.visualElement?E.jsx(d,{visualElement:g.visualElement,...f}):null,n(r,c,uD(_,g.visualElement,u),_,p,g.visualElement)]})}a.displayName=`motion.${typeof r=="string"?r:`create(${(o=(s=r.displayName)!==null&&s!==void 0?s:r.name)!==null&&o!==void 0?o:""})`}`;const l=H.forwardRef(a);return l[cD]=r,l}function mD({layoutId:t}){const e=H.useContext(Sg).id;return e&&t!==void 0?e+"-"+t:t}function gD(t,e){H.useContext(Aw).strict}function vD(t){const{drag:e,layout:n}=Fo;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const yD=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Rg(t){return typeof t!="string"||t.includes("-")?!1:!!(yD.indexOf(t)>-1||/[A-Z]/u.test(t))}function vy(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function Pg(t,e,n,i){if(typeof e=="function"){const[r,s]=vy(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=vy(i);e=e(n!==void 0?n:t.custom,r,s)}return e}const Np=t=>Array.isArray(t),_D=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),xD=t=>Np(t)?t[t.length-1]||0:t,tn=t=>!!(t&&t.getVelocity);function Yc(t){const e=tn(t)?t.get():t;return _D(e)?e.toValue():e}function SD({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},i,r,s){const o={latestValues:ED(i,r,s,t),renderState:e()};return n&&(o.onMount=a=>n({props:i,current:a,...o}),o.onUpdate=a=>n(a)),o}const Nw=t=>(e,n)=>{const i=H.useContext(Td),r=H.useContext(Ed),s=()=>SD(t,e,i,r);return n?s():qo(s)};function ED(t,e,n,i){const r={},s=i(t,{});for(const f in s)r[f]=Yc(s[f]);let{initial:o,animate:a}=t;const l=Ad(t),c=Rw(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const d=u?a:o;if(d&&typeof d!="boolean"&&!bd(d)){const f=Array.isArray(d)?d:[d];for(let p=0;p<f.length;p++){const g=Pg(t,f[p]);if(g){const{transitionEnd:_,transition:m,...h}=g;for(const v in h){let y=h[v];if(Array.isArray(y)){const x=u?y.length-1:0;y=y[x]}y!==null&&(r[v]=y)}for(const v in _)r[v]=_[v]}}}return r}const Yo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Os=new Set(Yo),Iw=t=>e=>typeof e=="string"&&e.startsWith(t),Ow=Iw("--"),MD=Iw("var(--"),Lg=t=>MD(t)?wD.test(t.split("/*")[0].trim()):!1,wD=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Uw=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Mi=(t,e,n)=>n>e?e:n<t?t:n,Ko={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},ol={...Ko,transform:t=>Mi(0,1,t)},uc={...Ko,default:1},bl=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),dr=bl("deg"),Si=bl("%"),we=bl("px"),TD=bl("vh"),bD=bl("vw"),yy={...Si,parse:t=>Si.parse(t)/100,transform:t=>Si.transform(t*100)},AD={borderWidth:we,borderTopWidth:we,borderRightWidth:we,borderBottomWidth:we,borderLeftWidth:we,borderRadius:we,radius:we,borderTopLeftRadius:we,borderTopRightRadius:we,borderBottomRightRadius:we,borderBottomLeftRadius:we,width:we,maxWidth:we,height:we,maxHeight:we,top:we,right:we,bottom:we,left:we,padding:we,paddingTop:we,paddingRight:we,paddingBottom:we,paddingLeft:we,margin:we,marginTop:we,marginRight:we,marginBottom:we,marginLeft:we,backgroundPositionX:we,backgroundPositionY:we},CD={rotate:dr,rotateX:dr,rotateY:dr,rotateZ:dr,scale:uc,scaleX:uc,scaleY:uc,scaleZ:uc,skew:dr,skewX:dr,skewY:dr,distance:we,translateX:we,translateY:we,translateZ:we,x:we,y:we,z:we,perspective:we,transformPerspective:we,opacity:ol,originX:yy,originY:yy,originZ:we},_y={...Ko,transform:Math.round},Dg={...AD,...CD,zIndex:_y,size:we,fillOpacity:ol,strokeOpacity:ol,numOctaves:_y},RD={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},PD=Yo.length;function LD(t,e,n){let i="",r=!0;for(let s=0;s<PD;s++){const o=Yo[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=Uw(a,Dg[o]);if(!l){r=!1;const u=RD[o]||o;i+=`${u}(${c}) `}n&&(e[o]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function Ng(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(Os.has(l)){o=!0;continue}else if(Ow(l)){r[l]=c;continue}else{const u=Uw(c,Dg[l]);l.startsWith("origin")?(a=!0,s[l]=u):i[l]=u}}if(e.transform||(o||n?i.transform=LD(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}const DD={offset:"stroke-dashoffset",array:"stroke-dasharray"},ND={offset:"strokeDashoffset",array:"strokeDasharray"};function ID(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?DD:ND;t[s.offset]=we.transform(-i);const o=we.transform(e),a=we.transform(n);t[s.array]=`${o} ${a}`}function xy(t,e,n){return typeof t=="string"?t:we.transform(e+n*t)}function OD(t,e,n){const i=xy(e,t.x,t.width),r=xy(n,t.y,t.height);return`${i} ${r}`}function Ig(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,d){if(Ng(t,c,d),u){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:f,style:p,dimensions:g}=t;f.transform&&(g&&(p.transform=f.transform),delete f.transform),g&&(r!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=OD(g,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(f.x=e),n!==void 0&&(f.y=n),i!==void 0&&(f.scale=i),o!==void 0&&ID(f,o,a,l,!1)}const Og=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),kw=()=>({...Og(),attrs:{}}),Ug=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Fw(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const Bw=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function zw(t,e,n,i){Fw(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(Bw.has(r)?r:Ag(r),e.attrs[r])}const Iu={};function UD(t){Object.assign(Iu,t)}function Vw(t,{layout:e,layoutId:n}){return Os.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Iu[t]||t==="opacity")}function kg(t,e,n){var i;const{style:r}=t,s={};for(const o in r)(tn(r[o])||e.style&&tn(e.style[o])||Vw(o,t)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[o]=r[o]);return s}function Hw(t,e,n){const i=kg(t,e,n);for(const r in t)if(tn(t[r])||tn(e[r])){const s=Yo.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}function kD(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const Sy=["x","y","width","height","cx","cy","r"],FD={useVisualState:Nw({scrapeMotionValuesFromProps:Hw,createRenderState:kw,onUpdate:({props:t,prevProps:e,current:n,renderState:i,latestValues:r})=>{if(!n)return;let s=!!t.drag;if(!s){for(const a in r)if(Os.has(a)){s=!0;break}}if(!s)return;let o=!e;if(e)for(let a=0;a<Sy.length;a++){const l=Sy[a];t[l]!==e[l]&&(o=!0)}o&&Xe.read(()=>{kD(n,i),Xe.render(()=>{Ig(i,r,Ug(n.tagName),t.transformTemplate),zw(n,i)})})}})},BD={useVisualState:Nw({scrapeMotionValuesFromProps:kg,createRenderState:Og})};function Gw(t,e,n){for(const i in e)!tn(e[i])&&!Vw(i,n)&&(t[i]=e[i])}function zD({transformTemplate:t},e){return H.useMemo(()=>{const n=Og();return Ng(n,e,t),Object.assign({},n.vars,n.style)},[e])}function VD(t,e){const n=t.style||{},i={};return Gw(i,n,t),Object.assign(i,zD(t,e)),i}function HD(t,e){const n={},i=VD(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}function GD(t,e,n,i){const r=H.useMemo(()=>{const s=kw();return Ig(s,e,Ug(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};Gw(s,t.style,t),r.style={...s,...r.style}}return r}function jD(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(Rg(n)?GD:HD)(i,s,o,n),c=sD(i,typeof n=="string",t),u=n!==H.Fragment?{...c,...l,ref:r}:{},{children:d}=i,f=H.useMemo(()=>tn(d)?d.get():d,[d]);return H.createElement(n,{...u,children:f})}}function WD(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...Rg(i)?FD:BD,preloadedFeatures:t,useRender:jD(r),createVisualElement:e,Component:i};return pD(o)}}function jw(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function Cd(t,e,n){const i=t.getProps();return Pg(i,e,n!==void 0?n:i.custom,t)}const Ww=wg(()=>window.ScrollTimeline!==void 0);class $D{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(r=>{if(Ww()&&r.attachTimeline)return r.attachTimeline(e);if(typeof n=="function")return n(r)});return()=>{i.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class XD extends $D{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function Fg(t,e){return t?t[e]||t.default||t:void 0}const Ip=2e4;function $w(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Ip;)e+=n,i=t.next(e);return e>=Ip?1/0:e}function Bg(t){return typeof t=="function"}function Ey(t,e){t.timeline=e,t.onfinish=null}const zg=t=>Array.isArray(t)&&typeof t[0]=="number",qD={linearEasing:void 0};function YD(t,e){const n=wg(t);return()=>{var i;return(i=qD[e])!==null&&i!==void 0?i:n()}}const Ou=YD(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Xw=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=t(Cs(0,r-1,s))+", ";return`linear(${i.substring(0,i.length-2)})`};function qw(t){return!!(typeof t=="function"&&Ou()||!t||typeof t=="string"&&(t in Op||Ou())||zg(t)||Array.isArray(t)&&t.every(qw))}const Ea=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Op={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ea([0,.65,.55,1]),circOut:Ea([.55,0,1,.45]),backIn:Ea([.31,.01,.66,-.59]),backOut:Ea([.33,1.53,.69,.99])};function Yw(t,e){if(t)return typeof t=="function"&&Ou()?Xw(t,e):zg(t)?Ea(t):Array.isArray(t)?t.map(n=>Yw(n,e)||Op.easeOut):Op[t]}const Jn={x:!1,y:!1};function Kw(){return Jn.x||Jn.y}function Vg(t,e,n){var i;if(t instanceof Element)return[t];if(typeof t=="string"){let r=document;const s=(i=void 0)!==null&&i!==void 0?i:r.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function Zw(t,e){const n=Vg(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function My(t){return e=>{e.pointerType==="touch"||Kw()||t(e)}}function KD(t,e,n={}){const[i,r,s]=Zw(t,n),o=My(a=>{const{target:l}=a,c=e(a);if(typeof c!="function"||!l)return;const u=My(d=>{c(d),l.removeEventListener("pointerleave",u)});l.addEventListener("pointerleave",u,r)});return i.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}const Qw=(t,e)=>e?t===e?!0:Qw(t,e.parentElement):!1,Hg=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,ZD=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function QD(t){return ZD.has(t.tagName)||t.tabIndex!==-1}const Ma=new WeakSet;function wy(t){return e=>{e.key==="Enter"&&t(e)}}function Cf(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const JD=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=wy(()=>{if(Ma.has(n))return;Cf(n,"down");const r=wy(()=>{Cf(n,"up")}),s=()=>Cf(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function Ty(t){return Hg(t)&&!Kw()}function eN(t,e,n={}){const[i,r,s]=Zw(t,n),o=a=>{const l=a.currentTarget;if(!Ty(a)||Ma.has(l))return;Ma.add(l);const c=e(a),u=(p,g)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",f),!(!Ty(p)||!Ma.has(l))&&(Ma.delete(l),typeof c=="function"&&c(p,{success:g}))},d=p=>{u(p,n.useGlobalTarget||Qw(l,p.target))},f=p=>{u(p,!1)};window.addEventListener("pointerup",d,r),window.addEventListener("pointercancel",f,r)};return i.forEach(a=>{!QD(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),a.addEventListener("focus",c=>JD(c,r),r)}),s}function tN(t){return t==="x"||t==="y"?Jn[t]?null:(Jn[t]=!0,()=>{Jn[t]=!1}):Jn.x||Jn.y?null:(Jn.x=Jn.y=!0,()=>{Jn.x=Jn.y=!1})}const Jw=new Set(["width","height","top","left","right","bottom",...Yo]);let Kc;function nN(){Kc=void 0}const Ei={now:()=>(Kc===void 0&&Ei.set(Ut.isProcessing||JL.useManualTiming?Ut.timestamp:performance.now()),Kc),set:t=>{Kc=t,queueMicrotask(nN)}};function Gg(t,e){t.indexOf(e)===-1&&t.push(e)}function jg(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class Wg{constructor(){this.subscriptions=[]}add(e){return Gg(this.subscriptions,e),()=>jg(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function $g(t,e){return e?t*(1e3/e):0}const by=30,iN=t=>!isNaN(parseFloat(t)),Ia={current:void 0};class rN{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=Ei.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=Ei.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=iN(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Wg);const i=this.events[e].add(n);return e==="change"?()=>{i(),Xe.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Ia.current&&Ia.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=Ei.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>by)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,by);return $g(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function yi(t,e){return new rN(t,e)}function sN(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,yi(n))}function oN(t,e){const n=Cd(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=xD(s[o]);sN(t,o,a)}}function aN(t){return!!(tn(t)&&t.add)}function Up(t,e){const n=t.getValue("willChange");if(aN(n))return n.add(e)}function e1(t){return t.props[Pw]}const t1=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,lN=1e-7,cN=12;function uN(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=t1(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>lN&&++a<cN);return o}function Al(t,e,n,i){if(t===e&&n===i)return un;const r=s=>uN(s,0,1,t,n);return s=>s===0||s===1?s:t1(r(s),e,i)}const n1=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,i1=t=>e=>1-t(1-e),r1=Al(.33,1.53,.69,.99),Xg=i1(r1),s1=n1(Xg),o1=t=>(t*=2)<1?.5*Xg(t):.5*(2-Math.pow(2,-10*(t-1))),qg=t=>1-Math.sin(Math.acos(t)),a1=i1(qg),l1=n1(qg),c1=t=>/^0[^.\s]+$/u.test(t);function dN(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||c1(t):!0}const Oa=t=>Math.round(t*1e5)/1e5,Yg=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function fN(t){return t==null}const hN=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Kg=(t,e)=>n=>!!(typeof n=="string"&&hN.test(n)&&n.startsWith(t)||e&&!fN(n)&&Object.prototype.hasOwnProperty.call(n,e)),u1=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(Yg);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},pN=t=>Mi(0,255,t),Rf={...Ko,transform:t=>Math.round(pN(t))},ds={test:Kg("rgb","red"),parse:u1("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Rf.transform(t)+", "+Rf.transform(e)+", "+Rf.transform(n)+", "+Oa(ol.transform(i))+")"};function mN(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const kp={test:Kg("#"),parse:mN,transform:ds.transform},ho={test:Kg("hsl","hue"),parse:u1("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+Si.transform(Oa(e))+", "+Si.transform(Oa(n))+", "+Oa(ol.transform(i))+")"},Jt={test:t=>ds.test(t)||kp.test(t)||ho.test(t),parse:t=>ds.test(t)?ds.parse(t):ho.test(t)?ho.parse(t):kp.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?ds.transform(t):ho.transform(t)},gN=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function vN(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Yg))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(gN))===null||n===void 0?void 0:n.length)||0)>0}const d1="number",f1="color",yN="var",_N="var(",Ay="${}",xN=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function al(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(xN,l=>(Jt.test(l)?(i.color.push(s),r.push(f1),n.push(Jt.parse(l))):l.startsWith(_N)?(i.var.push(s),r.push(yN),n.push(l)):(i.number.push(s),r.push(d1),n.push(parseFloat(l))),++s,Ay)).split(Ay);return{values:n,split:a,indexes:i,types:r}}function h1(t){return al(t).values}function p1(t){const{split:e,types:n}=al(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===d1?s+=Oa(r[o]):a===f1?s+=Jt.transform(r[o]):s+=r[o]}return s}}const SN=t=>typeof t=="number"?0:t;function EN(t){const e=h1(t);return p1(t)(e.map(SN))}const Or={test:vN,parse:h1,createTransformer:p1,getAnimatableNone:EN},MN=new Set(["brightness","contrast","saturate","opacity"]);function wN(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Yg)||[];if(!i)return t;const r=n.replace(i,"");let s=MN.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const TN=/\b([a-z-]*)\(.*?\)/gu,Fp={...Or,getAnimatableNone:t=>{const e=t.match(TN);return e?e.map(wN).join(" "):t}},bN={...Dg,color:Jt,backgroundColor:Jt,outlineColor:Jt,fill:Jt,stroke:Jt,borderColor:Jt,borderTopColor:Jt,borderRightColor:Jt,borderBottomColor:Jt,borderLeftColor:Jt,filter:Fp,WebkitFilter:Fp},Zg=t=>bN[t];function m1(t,e){let n=Zg(t);return n!==Fp&&(n=Or),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const AN=new Set(["auto","none","0"]);function CN(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!AN.has(s)&&al(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=m1(n,r)}const Cy=t=>t===Ko||t===we,Ry=(t,e)=>parseFloat(t.split(", ")[e]),Py=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return Ry(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?Ry(s[1],t):0}},RN=new Set(["x","y","z"]),PN=Yo.filter(t=>!RN.has(t));function LN(t){const e=[];return PN.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const Bo={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:Py(4,13),y:Py(5,14)};Bo.translateX=Bo.x;Bo.translateY=Bo.y;const gs=new Set;let Bp=!1,zp=!1;function g1(){if(zp){const t=Array.from(gs).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=LN(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}zp=!1,Bp=!1,gs.forEach(t=>t.complete()),gs.clear()}function v1(){gs.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(zp=!0)})}function DN(){v1(),g1()}class Qg{constructor(e,n,i,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(gs.add(this),Bp||(Bp=!0,Xe.read(v1),Xe.resolveKeyframes(g1))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),r&&o===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),gs.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,gs.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const y1=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),NN=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function IN(t){const e=NN.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function _1(t,e,n=1){const[i,r]=IN(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return y1(o)?parseFloat(o):o}return Lg(r)?_1(r,e,n+1):r}const x1=t=>e=>e.test(t),ON={test:t=>t==="auto",parse:t=>t},S1=[Ko,we,Si,dr,bD,TD,ON],Ly=t=>S1.find(x1(t));class E1 extends Qg{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),Lg(c))){const u=_1(c,n.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!Jw.has(i)||e.length!==2)return;const[r,s]=e,o=Ly(r),a=Ly(s);if(o!==a)if(Cy(o)&&Cy(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)dN(e[r])&&i.push(r);i.length&&CN(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Bo[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=Bo[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const Dy=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Or.test(t)||t==="0")&&!t.startsWith("url("));function UN(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function kN(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=Dy(r,e),a=Dy(s,e);return!o||!a?!1:UN(t)||(n==="spring"||Bg(n))&&i}const FN=t=>t!==null;function Rd(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(FN),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const BN=40;class M1{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Ei.now(),this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>BN?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&DN(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=Ei.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!kN(e,i,r,s))if(o)this.options.duration=0;else{l&&l(Rd(e,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const u=this.initPlayback(e,n);u!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const yt=(t,e,n)=>t+(e-t)*n;function Pf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function zN({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=Pf(l,a,t+1/3),s=Pf(l,a,t),o=Pf(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function Uu(t,e){return n=>n>0?e:t}const Lf=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},VN=[kp,ds,ho],HN=t=>VN.find(e=>e.test(t));function Ny(t){const e=HN(t);if(!e)return!1;let n=e.parse(t);return e===ho&&(n=zN(n)),n}const Iy=(t,e)=>{const n=Ny(t),i=Ny(e);if(!n||!i)return Uu(t,e);const r={...n};return s=>(r.red=Lf(n.red,i.red,s),r.green=Lf(n.green,i.green,s),r.blue=Lf(n.blue,i.blue,s),r.alpha=yt(n.alpha,i.alpha,s),ds.transform(r))},GN=(t,e)=>n=>e(t(n)),Cl=(...t)=>t.reduce(GN),Vp=new Set(["none","hidden"]);function jN(t,e){return Vp.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function WN(t,e){return n=>yt(t,e,n)}function Jg(t){return typeof t=="number"?WN:typeof t=="string"?Lg(t)?Uu:Jt.test(t)?Iy:qN:Array.isArray(t)?w1:typeof t=="object"?Jt.test(t)?Iy:$N:Uu}function w1(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>Jg(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function $N(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Jg(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function XN(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][r[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[s]=l,r[o]++}return i}const qN=(t,e)=>{const n=Or.createTransformer(e),i=al(t),r=al(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Vp.has(t)&&!r.values.length||Vp.has(e)&&!i.values.length?jN(t,e):Cl(w1(XN(i,r),r.values),n):Uu(t,e)};function T1(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?yt(t,e,n):Jg(t)(t,e)}const YN=5;function b1(t,e,n){const i=Math.max(e-YN,0);return $g(n-t(i),e-i)}const Mt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Df=.001;function KN({duration:t=Mt.duration,bounce:e=Mt.bounce,velocity:n=Mt.velocity,mass:i=Mt.mass}){let r,s,o=1-e;o=Mi(Mt.minDamping,Mt.maxDamping,o),t=Mi(Mt.minDuration,Mt.maxDuration,Wi(t)),o<1?(r=c=>{const u=c*o,d=u*t,f=u-n,p=Hp(c,o),g=Math.exp(-d);return Df-f/p*g},s=c=>{const d=c*o*t,f=d*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,g=Math.exp(-d),_=Hp(Math.pow(c,2),o);return(-r(c)+Df>0?-1:1)*((f-p)*g)/_}):(r=c=>{const u=Math.exp(-c*t),d=(c-n)*t+1;return-Df+u*d},s=c=>{const u=Math.exp(-c*t),d=(n-c)*(t*t);return u*d});const a=5/t,l=QN(r,s,a);if(t=ji(t),isNaN(l))return{stiffness:Mt.stiffness,damping:Mt.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const ZN=12;function QN(t,e,n){let i=n;for(let r=1;r<ZN;r++)i=i-t(i)/e(i);return i}function Hp(t,e){return t*Math.sqrt(1-e*e)}const JN=["duration","bounce"],eI=["stiffness","damping","mass"];function Oy(t,e){return e.some(n=>t[n]!==void 0)}function tI(t){let e={velocity:Mt.velocity,stiffness:Mt.stiffness,damping:Mt.damping,mass:Mt.mass,isResolvedFromDuration:!1,...t};if(!Oy(t,eI)&&Oy(t,JN))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Mi(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:Mt.mass,stiffness:r,damping:s}}else{const n=KN(t);e={...e,...n,mass:Mt.mass},e.isResolvedFromDuration=!0}return e}function A1(t=Mt.visualDuration,e=Mt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=tI({...n,velocity:-Wi(n.velocity||0)}),g=f||0,_=c/(2*Math.sqrt(l*u)),m=o-s,h=Wi(Math.sqrt(l/u)),v=Math.abs(m)<5;i||(i=v?Mt.restSpeed.granular:Mt.restSpeed.default),r||(r=v?Mt.restDelta.granular:Mt.restDelta.default);let y;if(_<1){const T=Hp(h,_);y=w=>{const b=Math.exp(-_*h*w);return o-b*((g+_*h*m)/T*Math.sin(T*w)+m*Math.cos(T*w))}}else if(_===1)y=T=>o-Math.exp(-h*T)*(m+(g+h*m)*T);else{const T=h*Math.sqrt(_*_-1);y=w=>{const b=Math.exp(-_*h*w),L=Math.min(T*w,300);return o-b*((g+_*h*m)*Math.sinh(L)+T*m*Math.cosh(L))/T}}const x={calculatedDuration:p&&d||null,next:T=>{const w=y(T);if(p)a.done=T>=d;else{let b=0;_<1&&(b=T===0?ji(g):b1(y,T,w));const L=Math.abs(b)<=i,$=Math.abs(o-w)<=r;a.done=L&&$}return a.value=a.done?o:w,a},toString:()=>{const T=Math.min($w(x),Ip),w=Xw(b=>x.next(T*b).value,T,30);return T+"ms "+w}};return x}function Uy({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=t[0],f={done:!1,value:d},p=L=>a!==void 0&&L<a||l!==void 0&&L>l,g=L=>a===void 0?l:l===void 0||Math.abs(a-L)<Math.abs(l-L)?a:l;let _=n*e;const m=d+_,h=o===void 0?m:o(m);h!==m&&(_=h-d);const v=L=>-_*Math.exp(-L/i),y=L=>h+v(L),x=L=>{const $=v(L),S=y(L);f.done=Math.abs($)<=c,f.value=f.done?h:S};let T,w;const b=L=>{p(f.value)&&(T=L,w=A1({keyframes:[f.value,g(f.value)],velocity:b1(y,L,f.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return b(0),{calculatedDuration:null,next:L=>{let $=!1;return!w&&T===void 0&&($=!0,x(L),b(L)),T!==void 0&&L>=T?w.next(L-T):(!$&&x(L),f)}}}const nI=Al(.42,0,1,1),iI=Al(0,0,.58,1),C1=Al(.42,0,.58,1),rI=t=>Array.isArray(t)&&typeof t[0]!="number",ky={linear:un,easeIn:nI,easeInOut:C1,easeOut:iI,circIn:qg,circInOut:l1,circOut:a1,backIn:Xg,backInOut:s1,backOut:r1,anticipate:o1},Fy=t=>{if(zg(t)){Dp(t.length===4);const[e,n,i,r]=t;return Al(e,n,i,r)}else if(typeof t=="string")return Dp(ky[t]!==void 0),ky[t];return t};function sI(t,e,n){const i=[],r=n||T1,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||un:e;a=Cl(l,a)}i.push(a)}return i}function e0(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(Dp(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=sI(e,i,r),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(u<t[d+1]);d++);const f=Cs(t[d],t[d+1],u);return a[d](f)};return n?u=>c(Mi(t[0],t[s-1],u)):c}function oI(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=Cs(0,e,i);t.push(yt(n,1,r))}}function R1(t){const e=[0];return oI(e,t.length-1),e}function aI(t,e){return t.map(n=>n*e)}function lI(t,e){return t.map(()=>e||C1).splice(0,t.length-1)}function ku({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=rI(i)?i.map(Fy):Fy(i),s={done:!1,value:e[0]},o=aI(n&&n.length===e.length?n:R1(e),t),a=e0(o,e,{ease:Array.isArray(r)?r:lI(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const cI=t=>{const e=({timestamp:n})=>t(n);return{start:()=>Xe.update(e,!0),stop:()=>ui(e),now:()=>Ut.isProcessing?Ut.timestamp:Ei.now()}},uI={decay:Uy,inertia:Uy,tween:ku,keyframes:ku,spring:A1},dI=t=>t/100;class t0 extends M1{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:s}=this.options,o=(r==null?void 0:r.KeyframeResolver)||Qg,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(s,a,n,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=Bg(n)?n:uI[n]||ku;let l,c;a!==ku&&typeof e[0]!="number"&&(l=Cl(dI,T1(e[0],e[1])),e=[0,100]);const u=a({...this.options,keyframes:e});s==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=$w(u));const{calculatedDuration:d}=u,f=d+r,p=f*(i+1)-r;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:f,totalDuration:p}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:L}=this.options;return{done:!0,value:L[L.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:d}=i;if(this.startTime===null)return s.next(0);const{delay:f,repeat:p,repeatType:g,repeatDelay:_,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const h=this.currentTime-f*(this.speed>=0?1:-1),v=this.speed>=0?h<0:h>u;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let y=this.currentTime,x=s;if(p){const L=Math.min(this.currentTime,u)/d;let $=Math.floor(L),S=L%1;!S&&L>=1&&(S=1),S===1&&$--,$=Math.min($,p+1),!!($%2)&&(g==="reverse"?(S=1-S,_&&(S-=_/d)):g==="mirror"&&(x=o)),y=Mi(0,1,S)*d}const T=v?{done:!1,value:l[0]}:x.next(y);a&&(T.value=a(T.value));let{done:w}=T;!v&&c!==null&&(w=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const b=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&w);return b&&r!==void 0&&(T.value=Rd(l,this.options,r)),m&&m(T.value),b&&this.finish(),T}get duration(){const{resolved:e}=this;return e?Wi(e.calculatedDuration):0}get time(){return Wi(this.currentTime)}set time(e){e=ji(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=Wi(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=cI,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const fI=new Set(["opacity","clipPath","filter","transform"]);function hI(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[e]:n};l&&(c.offset=l);const u=Yw(a,r);return Array.isArray(u)&&(c.easing=u),t.animate(c,{delay:i,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const pI=wg(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Fu=10,mI=2e4;function gI(t){return Bg(t.type)||t.type==="spring"||!qw(t.ease)}function vI(t,e){const n=new t0({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<mI;)i=n.sample(s),r.push(i.value),s+=Fu;return{times:void 0,keyframes:r,duration:s-Fu,ease:"linear"}}const P1={anticipate:o1,backInOut:s1,circInOut:l1};function yI(t){return t in P1}class By extends M1{constructor(e){super(e);const{name:n,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new E1(s,(o,a)=>this.onKeyframesResolved(o,a),n,i,r),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:i=300,times:r,ease:s,type:o,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&Ou()&&yI(s)&&(s=P1[s]),gI(this.options)){const{onComplete:d,onUpdate:f,motionValue:p,element:g,..._}=this.options,m=vI(e,_);e=m.keyframes,e.length===1&&(e[1]=e[0]),i=m.duration,r=m.times,s=m.ease,o="keyframes"}const u=hI(a.owner.current,l,e,{...this.options,duration:i,times:r,ease:s});return u.startTime=c??this.calcStartTime(),this.pendingTimeline?(Ey(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:d}=this.options;a.set(Rd(e,this.options,n)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:i,times:r,type:o,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return Wi(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return Wi(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=ji(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return un;const{animation:i}=n;Ey(i,e)}return un}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:d,element:f,...p}=this.options,g=new t0({...p,keyframes:i,duration:r,type:s,ease:o,times:a,isGenerator:!0}),_=ji(this.time);c.setWithVelocity(g.sample(_-Fu).value,g.sample(_).value,Fu)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:o,type:a}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=n.owner.getProps();return pI()&&i&&fI.has(i)&&!l&&!c&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}const _I={type:"spring",stiffness:500,damping:25,restSpeed:10},xI=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),SI={type:"keyframes",duration:.8},EI={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},MI=(t,{keyframes:e})=>e.length>2?SI:Os.has(t)?t.startsWith("scale")?xI(e[1]):_I:EI;function wI({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const n0=(t,e,n,i={},r,s)=>o=>{const a=Fg(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-ji(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:f=>{e.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};wI(a)||(u={...u,...MI(t,u)}),u.duration&&(u.duration=ji(u.duration)),u.repeatDelay&&(u.repeatDelay=ji(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(d=!0)),d&&!s&&e.get()!==void 0){const f=Rd(u.keyframes,a);if(f!==void 0)return Xe.update(()=>{u.onUpdate(f),u.onComplete()}),new XD([])}return!s&&By.supports(u)?new By(u):new t0(u)};function TI({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function L1(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);const c=[],u=r&&t.animationState&&t.animationState.getState()[r];for(const d in l){const f=t.getValue(d,(s=t.latestValues[d])!==null&&s!==void 0?s:null),p=l[d];if(p===void 0||u&&TI(u,d))continue;const g={delay:n,...Fg(o||{},d)};let _=!1;if(window.MotionHandoffAnimation){const h=e1(t);if(h){const v=window.MotionHandoffAnimation(h,d,Xe);v!==null&&(g.startTime=v,_=!0)}}Up(t,d),f.start(n0(d,f,p,t.shouldReduceMotion&&Jw.has(d)?{type:!1}:g,t,_));const m=f.animation;m&&c.push(m)}return a&&Promise.all(c).then(()=>{Xe.update(()=>{a&&oN(t,a)})}),c}function Gp(t,e,n={}){var i;const r=Cd(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const o=r?()=>Promise.all(L1(t,r,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:f}=s;return bI(t,e,u+c,d,f,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,u]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>u())}else return Promise.all([o(),a(n.delay)])}function bI(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort(AI).forEach((c,u)=>{c.notify("AnimationStart",e),o.push(Gp(c,e,{...s,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function AI(t,e){return t.sortNodePosition(e)}function CI(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Gp(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Gp(t,e,n);else{const r=typeof e=="function"?Cd(t,e,n.custom):e;i=Promise.all(L1(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const RI=bg.length;function D1(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?D1(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<RI;n++){const i=bg[n],r=t.props[i];(sl(r)||r===!1)&&(e[i]=r)}return e}const PI=[...Tg].reverse(),LI=Tg.length;function DI(t){return e=>Promise.all(e.map(({animation:n,options:i})=>CI(t,n,i)))}function NI(t){let e=DI(t),n=zy(),i=!0;const r=l=>(c,u)=>{var d;const f=Cd(t,u,l==="exit"?(d=t.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(f){const{transition:p,transitionEnd:g,..._}=f;c={...c,..._,...g}}return c};function s(l){e=l(t)}function o(l){const{props:c}=t,u=D1(t.parent)||{},d=[],f=new Set;let p={},g=1/0;for(let m=0;m<LI;m++){const h=PI[m],v=n[h],y=c[h]!==void 0?c[h]:u[h],x=sl(y),T=h===l?v.isActive:null;T===!1&&(g=m);let w=y===u[h]&&y!==c[h]&&x;if(w&&i&&t.manuallyAnimateOnMount&&(w=!1),v.protectedKeys={...p},!v.isActive&&T===null||!y&&!v.prevProp||bd(y)||typeof y=="boolean")continue;const b=II(v.prevProp,y);let L=b||h===l&&v.isActive&&!w&&x||m>g&&x,$=!1;const S=Array.isArray(y)?y:[y];let R=S.reduce(r(h),{});T===!1&&(R={});const{prevResolvedValues:q={}}=v,Z={...q,...R},N=Y=>{L=!0,f.has(Y)&&($=!0,f.delete(Y)),v.needsAnimating[Y]=!0;const D=t.getValue(Y);D&&(D.liveStyle=!1)};for(const Y in Z){const D=R[Y],U=q[Y];if(p.hasOwnProperty(Y))continue;let B=!1;Np(D)&&Np(U)?B=!jw(D,U):B=D!==U,B?D!=null?N(Y):f.add(Y):D!==void 0&&f.has(Y)?N(Y):v.protectedKeys[Y]=!0}v.prevProp=y,v.prevResolvedValues=R,v.isActive&&(p={...p,...R}),i&&t.blockInitialAnimation&&(L=!1),L&&(!(w&&b)||$)&&d.push(...S.map(Y=>({animation:Y,options:{type:h}})))}if(f.size){const m={};f.forEach(h=>{const v=t.getBaseTarget(h),y=t.getValue(h);y&&(y.liveStyle=!0),m[h]=v??null}),d.push({animation:m})}let _=!!d.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(_=!1),i=!1,_?e(d):Promise.resolve()}function a(l,c){var u;if(n[l].isActive===c)return Promise.resolve();(u=t.variantChildren)===null||u===void 0||u.forEach(f=>{var p;return(p=f.animationState)===null||p===void 0?void 0:p.setActive(l,c)}),n[l].isActive=c;const d=o(l);for(const f in n)n[f].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=zy(),i=!0}}}function II(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!jw(e,t):!1}function Xr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function zy(){return{animate:Xr(!0),whileInView:Xr(),whileHover:Xr(),whileTap:Xr(),whileDrag:Xr(),whileFocus:Xr(),exit:Xr()}}class Hr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class OI extends Hr{constructor(e){super(e),e.animationState||(e.animationState=NI(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();bd(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let UI=0;class kI extends Hr{constructor(){super(...arguments),this.id=UI++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const FI={animation:{Feature:OI},exit:{Feature:kI}};function ll(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function Rl(t){return{point:{x:t.pageX,y:t.pageY}}}const BI=t=>e=>Hg(e)&&t(e,Rl(e));function Ua(t,e,n,i){return ll(t,e,BI(n),i)}const Vy=(t,e)=>Math.abs(t-e);function zI(t,e){const n=Vy(t.x,e.x),i=Vy(t.y,e.y);return Math.sqrt(n**2+i**2)}class N1{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=If(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,p=zI(d.offset,{x:0,y:0})>=3;if(!f&&!p)return;const{point:g}=d,{timestamp:_}=Ut;this.history.push({...g,timestamp:_});const{onStart:m,onMove:h}=this.handlers;f||(m&&m(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,d)},this.handlePointerMove=(d,f)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Nf(f,this.transformPagePoint),Xe.update(this.updatePoint,!0)},this.handlePointerUp=(d,f)=>{this.end();const{onEnd:p,onSessionEnd:g,resumeAnimation:_}=this.handlers;if(this.dragSnapToOrigin&&_&&_(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=If(d.type==="pointercancel"?this.lastMoveEventInfo:Nf(f,this.transformPagePoint),this.history);this.startEvent&&p&&p(d,m),g&&g(d,m)},!Hg(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=Rl(e),a=Nf(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=Ut;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,If(a,this.history)),this.removeListeners=Cl(Ua(this.contextWindow,"pointermove",this.handlePointerMove),Ua(this.contextWindow,"pointerup",this.handlePointerUp),Ua(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),ui(this.updatePoint)}}function Nf(t,e){return e?{point:e(t.point)}:t}function Hy(t,e){return{x:t.x-e.x,y:t.y-e.y}}function If({point:t},e){return{point:t,delta:Hy(t,I1(e)),offset:Hy(t,VI(e)),velocity:HI(e,.1)}}function VI(t){return t[0]}function I1(t){return t[t.length-1]}function HI(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=I1(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>ji(e)));)n--;if(!i)return{x:0,y:0};const s=Wi(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const O1=1e-4,GI=1-O1,jI=1+O1,U1=.01,WI=0-U1,$I=0+U1;function Nn(t){return t.max-t.min}function XI(t,e,n){return Math.abs(t-e)<=n}function Gy(t,e,n,i=.5){t.origin=i,t.originPoint=yt(e.min,e.max,t.origin),t.scale=Nn(n)/Nn(e),t.translate=yt(n.min,n.max,t.origin)-t.originPoint,(t.scale>=GI&&t.scale<=jI||isNaN(t.scale))&&(t.scale=1),(t.translate>=WI&&t.translate<=$I||isNaN(t.translate))&&(t.translate=0)}function ka(t,e,n,i){Gy(t.x,e.x,n.x,i?i.originX:void 0),Gy(t.y,e.y,n.y,i?i.originY:void 0)}function jy(t,e,n){t.min=n.min+e.min,t.max=t.min+Nn(e)}function qI(t,e,n){jy(t.x,e.x,n.x),jy(t.y,e.y,n.y)}function Wy(t,e,n){t.min=e.min-n.min,t.max=t.min+Nn(e)}function Fa(t,e,n){Wy(t.x,e.x,n.x),Wy(t.y,e.y,n.y)}function YI(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?yt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?yt(n,t,i.max):Math.min(t,n)),t}function $y(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function KI(t,{top:e,left:n,bottom:i,right:r}){return{x:$y(t.x,n,r),y:$y(t.y,e,i)}}function Xy(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function ZI(t,e){return{x:Xy(t.x,e.x),y:Xy(t.y,e.y)}}function QI(t,e){let n=.5;const i=Nn(t),r=Nn(e);return r>i?n=Cs(e.min,e.max-i,t.min):i>r&&(n=Cs(t.min,t.max-r,e.min)),Mi(0,1,n)}function JI(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const jp=.35;function e3(t=jp){return t===!1?t=0:t===!0&&(t=jp),{x:qy(t,"left","right"),y:qy(t,"top","bottom")}}function qy(t,e,n){return{min:Yy(t,e),max:Yy(t,n)}}function Yy(t,e){return typeof t=="number"?t:t[e]||0}const Ky=()=>({translate:0,scale:1,origin:0,originPoint:0}),po=()=>({x:Ky(),y:Ky()}),Zy=()=>({min:0,max:0}),bt=()=>({x:Zy(),y:Zy()});function zn(t){return[t("x"),t("y")]}function k1({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function t3({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function n3(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Of(t){return t===void 0||t===1}function Wp({scale:t,scaleX:e,scaleY:n}){return!Of(t)||!Of(e)||!Of(n)}function ts(t){return Wp(t)||F1(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function F1(t){return Qy(t.x)||Qy(t.y)}function Qy(t){return t&&t!=="0%"}function Bu(t,e,n){const i=t-n,r=e*i;return n+r}function Jy(t,e,n,i,r){return r!==void 0&&(t=Bu(t,r,i)),Bu(t,n,i)+e}function $p(t,e=0,n=1,i,r){t.min=Jy(t.min,e,n,i,r),t.max=Jy(t.max,e,n,i,r)}function B1(t,{x:e,y:n}){$p(t.x,e.translate,e.scale,e.originPoint),$p(t.y,n.translate,n.scale,n.originPoint)}const e_=.999999999999,t_=1.0000000000001;function i3(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&go(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,B1(t,o)),i&&ts(s.latestValues)&&go(t,s.latestValues))}e.x<t_&&e.x>e_&&(e.x=1),e.y<t_&&e.y>e_&&(e.y=1)}function mo(t,e){t.min=t.min+e,t.max=t.max+e}function n_(t,e,n,i,r=.5){const s=yt(t.min,t.max,r);$p(t,e,n,s,i)}function go(t,e){n_(t.x,e.x,e.scaleX,e.scale,e.originX),n_(t.y,e.y,e.scaleY,e.scale,e.originY)}function z1(t,e){return k1(n3(t.getBoundingClientRect(),e))}function r3(t,e,n){const i=z1(t,n),{scroll:r}=e;return r&&(mo(i.x,r.offset.x),mo(i.y,r.offset.y)),i}const V1=({current:t})=>t?t.ownerDocument.defaultView:null,s3=new WeakMap;class o3{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=bt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Rl(u).point)},s=(u,d)=>{const{drag:f,dragPropagation:p,onDragStart:g}=this.getProps();if(f&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=tN(f),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),zn(m=>{let h=this.getAxisMotionValue(m).get()||0;if(Si.test(h)){const{projection:v}=this.visualElement;if(v&&v.layout){const y=v.layout.layoutBox[m];y&&(h=Nn(y)*(parseFloat(h)/100))}}this.originPoint[m]=h}),g&&Xe.postRender(()=>g(u,d)),Up(this.visualElement,"transform");const{animationState:_}=this.visualElement;_&&_.setActive("whileDrag",!0)},o=(u,d)=>{const{dragPropagation:f,dragDirectionLock:p,onDirectionLock:g,onDrag:_}=this.getProps();if(!f&&!this.openDragLock)return;const{offset:m}=d;if(p&&this.currentDirection===null){this.currentDirection=a3(m),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",d.point,m),this.updateAxis("y",d.point,m),this.visualElement.render(),_&&_(u,d)},a=(u,d)=>this.stop(u,d),l=()=>zn(u=>{var d;return this.getAnimationState(u)==="paused"&&((d=this.getAxisMotionValue(u).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new N1(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:V1(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&Xe.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!dc(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=YI(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&fo(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=KI(r.layoutBox,n):this.constraints=!1,this.elastic=e3(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&zn(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=JI(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!fo(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=r3(i,r.root,this.visualElement.getTransformPagePoint());let o=ZI(r.layout.layoutBox,s);if(n){const a=n(t3(o));this.hasMutatedConstraints=!!a,a&&(o=k1(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=zn(u=>{if(!dc(u,n,this.currentDirection))return;let d=l&&l[u]||{};o&&(d={min:0,max:0});const f=r?200:1e6,p=r?40:1e7,g={type:"inertia",velocity:i?e[u]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(u,g)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Up(this.visualElement,e),i.start(n0(e,i,0,n,this.visualElement,!1))}stopAnimation(){zn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){zn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){zn(n=>{const{drag:i}=this.getProps();if(!dc(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-yt(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!fo(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};zn(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=QI({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),zn(o=>{if(!dc(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(yt(l,c,r[o]))})}addListeners(){if(!this.visualElement.current)return;s3.set(this.visualElement,this);const e=this.visualElement.current,n=Ua(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();fo(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),Xe.read(i);const o=ll(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(zn(u=>{const d=this.getAxisMotionValue(u);d&&(this.originPoint[u]+=l[u].translate,d.set(d.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=jp,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function dc(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function a3(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class l3 extends Hr{constructor(e){super(e),this.removeGroupControls=un,this.removeListeners=un,this.controls=new o3(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||un}unmount(){this.removeGroupControls(),this.removeListeners()}}const i_=t=>(e,n)=>{t&&Xe.postRender(()=>t(e,n))};class c3 extends Hr{constructor(){super(...arguments),this.removePointerDownListener=un}onPointerDown(e){this.session=new N1(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:V1(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:i_(e),onStart:i_(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&Xe.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=Ua(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Zc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function r_(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const ca={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(we.test(t))t=parseFloat(t);else return t;const n=r_(t,e.target.x),i=r_(t,e.target.y);return`${n}% ${i}%`}},u3={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=Or.parse(t);if(r.length>5)return i;const s=Or.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=yt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};class d3 extends H.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;UD(f3),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Zc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||Xe.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Cg.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function H1(t){const[e,n]=Tw(),i=H.useContext(Sg);return E.jsx(d3,{...t,layoutGroup:i,switchLayoutGroup:H.useContext(Lw),isPresent:e,safeToRemove:n})}const f3={borderRadius:{...ca,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ca,borderTopRightRadius:ca,borderBottomLeftRadius:ca,borderBottomRightRadius:ca,boxShadow:u3};function h3(t,e,n){const i=tn(t)?t:yi(t);return i.start(n0("",i,e,n)),i.animation}function p3(t){return t instanceof SVGElement&&t.tagName!=="svg"}const m3=(t,e)=>t.depth-e.depth;class g3{constructor(){this.children=[],this.isDirty=!1}add(e){Gg(this.children,e),this.isDirty=!0}remove(e){jg(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(m3),this.isDirty=!1,this.children.forEach(e)}}function v3(t,e){const n=Ei.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(ui(i),t(s-e))};return Xe.read(i,!0),()=>ui(i)}const G1=["TopLeft","TopRight","BottomLeft","BottomRight"],y3=G1.length,s_=t=>typeof t=="string"?parseFloat(t):t,o_=t=>typeof t=="number"||we.test(t);function _3(t,e,n,i,r,s){r?(t.opacity=yt(0,n.opacity!==void 0?n.opacity:1,x3(i)),t.opacityExit=yt(e.opacity!==void 0?e.opacity:1,0,S3(i))):s&&(t.opacity=yt(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<y3;o++){const a=`border${G1[o]}Radius`;let l=a_(e,a),c=a_(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||o_(l)===o_(c)?(t[a]=Math.max(yt(s_(l),s_(c),i),0),(Si.test(c)||Si.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=yt(e.rotate||0,n.rotate||0,i))}function a_(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const x3=j1(0,.5,a1),S3=j1(.5,.95,un);function j1(t,e,n){return i=>i<t?0:i>e?1:n(Cs(t,e,i))}function l_(t,e){t.min=e.min,t.max=e.max}function Fn(t,e){l_(t.x,e.x),l_(t.y,e.y)}function c_(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function u_(t,e,n,i,r){return t-=e,t=Bu(t,1/n,i),r!==void 0&&(t=Bu(t,1/r,i)),t}function E3(t,e=0,n=1,i=.5,r,s=t,o=t){if(Si.test(e)&&(e=parseFloat(e),e=yt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=yt(s.min,s.max,i);t===s&&(a-=e),t.min=u_(t.min,e,n,a,r),t.max=u_(t.max,e,n,a,r)}function d_(t,e,[n,i,r],s,o){E3(t,e[n],e[i],e[r],e.scale,s,o)}const M3=["x","scaleX","originX"],w3=["y","scaleY","originY"];function f_(t,e,n,i){d_(t.x,e,M3,n?n.x:void 0,i?i.x:void 0),d_(t.y,e,w3,n?n.y:void 0,i?i.y:void 0)}function h_(t){return t.translate===0&&t.scale===1}function W1(t){return h_(t.x)&&h_(t.y)}function p_(t,e){return t.min===e.min&&t.max===e.max}function T3(t,e){return p_(t.x,e.x)&&p_(t.y,e.y)}function m_(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function $1(t,e){return m_(t.x,e.x)&&m_(t.y,e.y)}function g_(t){return Nn(t.x)/Nn(t.y)}function v_(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class b3{constructor(){this.members=[]}add(e){Gg(this.members,e),e.scheduleRender()}remove(e){if(jg(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function A3(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:d,rotateY:f,skewX:p,skewY:g}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),d&&(i+=`rotateX(${d}deg) `),f&&(i+=`rotateY(${f}deg) `),p&&(i+=`skewX(${p}deg) `),g&&(i+=`skewY(${g}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const ns={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},wa=typeof window<"u"&&window.MotionDebug!==void 0,Uf=["","X","Y","Z"],C3={visibility:"hidden"},y_=1e3;let R3=0;function kf(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function X1(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=e1(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",Xe,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&X1(i)}function q1({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=R3++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,wa&&(ns.totalNodes=ns.resolvedTargetDeltas=ns.recalculatedProjection=0),this.nodes.forEach(D3),this.nodes.forEach(k3),this.nodes.forEach(F3),this.nodes.forEach(N3),wa&&window.MotionDebug.record(ns)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new g3)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Wg),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=p3(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let d;const f=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=v3(f,250),Zc.hasAnimatedSinceResize&&(Zc.hasAnimatedSinceResize=!1,this.nodes.forEach(x_))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeTargetChanged:p,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const _=this.options.transition||u.getDefaultTransition()||G3,{onLayoutAnimationStart:m,onLayoutAnimationComplete:h}=u.getProps(),v=!this.targetLayout||!$1(this.targetLayout,g)||p,y=!f&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||f&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,y);const x={...Fg(_,"layout"),onPlay:m,onComplete:h};(u.shouldReduceMotion||this.options.layoutRoot)&&(x.delay=0,x.type=!1),this.startAnimation(x)}else f||x_(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,ui(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(B3),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&X1(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(__);return}this.isUpdating||this.nodes.forEach(O3),this.isUpdating=!1,this.nodes.forEach(U3),this.nodes.forEach(P3),this.nodes.forEach(L3),this.clearAllSnapshots();const a=Ei.now();Ut.delta=Mi(0,1e3/60,a-Ut.timestamp),Ut.timestamp=a,Ut.isProcessing=!0,Af.update.process(Ut),Af.preRender.process(Ut),Af.render.process(Ut),Ut.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Cg.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(I3),this.sharedNodes.forEach(z3)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Xe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Xe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=bt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!W1(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||ts(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),j3(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return bt();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(W3))){const{scroll:u}=this.root;u&&(mo(l.x,u.offset.x),mo(l.y,u.offset.y))}return l}removeElementScroll(o){var a;const l=bt();if(Fn(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:d,options:f}=u;u!==this.root&&d&&f.layoutScroll&&(d.wasRoot&&Fn(l,o),mo(l.x,d.offset.x),mo(l.y,d.offset.y))}return l}applyTransform(o,a=!1){const l=bt();Fn(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&go(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),ts(u.latestValues)&&go(l,u.latestValues)}return ts(this.latestValues)&&go(l,this.latestValues),l}removeTransform(o){const a=bt();Fn(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!ts(c.latestValues))continue;Wp(c.latestValues)&&c.updateSnapshot();const u=bt(),d=c.measurePageBox();Fn(u,d),f_(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return ts(this.latestValues)&&f_(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ut.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:f}=this.options;if(!(!this.layout||!(d||f))){if(this.resolvedRelativeTargetAt=Ut.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=bt(),this.relativeTargetOrigin=bt(),Fa(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),Fn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=bt(),this.targetWithTransforms=bt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),qI(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Fn(this.target,this.layout.layoutBox),B1(this.target,this.targetDelta)):Fn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=bt(),this.relativeTargetOrigin=bt(),Fa(this.relativeTargetOrigin,this.target,p.target),Fn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}wa&&ns.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Wp(this.parent.latestValues)||F1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Ut.timestamp&&(c=!1),c)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;Fn(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,p=this.treeScale.y;i3(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=bt());const{target:g}=a;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(c_(this.prevProjectionDelta.x,this.projectionDelta.x),c_(this.prevProjectionDelta.y,this.projectionDelta.y)),ka(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==p||!v_(this.projectionDelta.x,this.prevProjectionDelta.x)||!v_(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g)),wa&&ns.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=po(),this.projectionDelta=po(),this.projectionDeltaWithTransform=po()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},d=po();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=bt(),p=l?l.source:void 0,g=this.layout?this.layout.source:void 0,_=p!==g,m=this.getStack(),h=!m||m.members.length<=1,v=!!(_&&!h&&this.options.crossfade===!0&&!this.path.some(H3));this.animationProgress=0;let y;this.mixTargetDelta=x=>{const T=x/1e3;S_(d.x,o.x,T),S_(d.y,o.y,T),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Fa(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),V3(this.relativeTarget,this.relativeTargetOrigin,f,T),y&&T3(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=bt()),Fn(y,this.relativeTarget)),_&&(this.animationValues=u,_3(u,c,this.latestValues,T,v,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=T},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(ui(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Xe.update(()=>{Zc.hasAnimatedSinceResize=!0,this.currentAnimation=h3(0,y_,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(y_),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&Y1(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||bt();const d=Nn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const f=Nn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+f}Fn(a,l),go(a,u),ka(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new b3),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&kf("z",o,c,this.animationValues);for(let u=0;u<Uf.length;u++)kf(`rotate${Uf[u]}`,o,c,this.animationValues),kf(`skew${Uf[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return C3;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Yc(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const _={};return this.options.layoutId&&(_.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,_.pointerEvents=Yc(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!ts(this.latestValues)&&(_.transform=u?u({},""):"none",this.hasProjected=!1),_}const f=d.animationValues||d.latestValues;this.applyTransformsToTarget(),c.transform=A3(this.projectionDeltaWithTransform,this.treeScale,f),u&&(c.transform=u(f,c.transform));const{x:p,y:g}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${g.origin*100}% 0`,d.animationValues?c.opacity=d===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:c.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const _ in Iu){if(f[_]===void 0)continue;const{correct:m,applyTo:h}=Iu[_],v=c.transform==="none"?f[_]:m(f[_],d);if(h){const y=h.length;for(let x=0;x<y;x++)c[h[x]]=v}else c[_]=v}return this.options.layoutId&&(c.pointerEvents=d===this?Yc(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(__),this.root.sharedNodes.clear()}}}function P3(t){t.updateLayout()}function L3(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?zn(d=>{const f=o?n.measuredBox[d]:n.layoutBox[d],p=Nn(f);f.min=i[d].min,f.max=f.min+p}):Y1(s,n.layoutBox,i)&&zn(d=>{const f=o?n.measuredBox[d]:n.layoutBox[d],p=Nn(i[d]);f.max=f.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=po();ka(a,i,n.layoutBox);const l=po();o?ka(l,t.applyTransform(r,!0),n.measuredBox):ka(l,i,n.layoutBox);const c=!W1(a);let u=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:p}=d;if(f&&p){const g=bt();Fa(g,n.layoutBox,f.layoutBox);const _=bt();Fa(_,i,p.layoutBox),$1(g,_)||(u=!0),d.options.layoutRoot&&(t.relativeTarget=_,t.relativeTargetOrigin=g,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function D3(t){wa&&ns.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function N3(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function I3(t){t.clearSnapshot()}function __(t){t.clearMeasurements()}function O3(t){t.isLayoutDirty=!1}function U3(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function x_(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function k3(t){t.resolveTargetDelta()}function F3(t){t.calcProjection()}function B3(t){t.resetSkewAndRotation()}function z3(t){t.removeLeadSnapshot()}function S_(t,e,n){t.translate=yt(e.translate,0,n),t.scale=yt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function E_(t,e,n,i){t.min=yt(e.min,n.min,i),t.max=yt(e.max,n.max,i)}function V3(t,e,n,i){E_(t.x,e.x,n.x,i),E_(t.y,e.y,n.y,i)}function H3(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const G3={duration:.45,ease:[.4,0,.1,1]},M_=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),w_=M_("applewebkit/")&&!M_("chrome/")?Math.round:un;function T_(t){t.min=w_(t.min),t.max=w_(t.max)}function j3(t){T_(t.x),T_(t.y)}function Y1(t,e,n){return t==="position"||t==="preserve-aspect"&&!XI(g_(e),g_(n),.2)}function W3(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const $3=q1({attachResizeListener:(t,e)=>ll(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ff={current:void 0},K1=q1({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Ff.current){const t=new $3({});t.mount(window),t.setOptions({layoutScroll:!0}),Ff.current=t}return Ff.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),X3={pan:{Feature:c3},drag:{Feature:l3,ProjectionNode:K1,MeasureLayout:H1}};function b_(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&Xe.postRender(()=>s(e,Rl(e)))}class q3 extends Hr{mount(){const{current:e}=this.node;e&&(this.unmount=KD(e,n=>(b_(this.node,n,"Start"),i=>b_(this.node,i,"End"))))}unmount(){}}class Y3 extends Hr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Cl(ll(this.node.current,"focus",()=>this.onFocus()),ll(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function A_(t,e,n){const{props:i}=t;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&Xe.postRender(()=>s(e,Rl(e)))}class K3 extends Hr{mount(){const{current:e}=this.node;e&&(this.unmount=eN(e,n=>(A_(this.node,n,"Start"),(i,{success:r})=>A_(this.node,i,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Xp=new WeakMap,Bf=new WeakMap,Z3=t=>{const e=Xp.get(t.target);e&&e(t)},Q3=t=>{t.forEach(Z3)};function J3({root:t,...e}){const n=t||document;Bf.has(n)||Bf.set(n,{});const i=Bf.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(Q3,{root:t,...e})),i[r]}function eO(t,e,n){const i=J3(e);return Xp.set(t,n),i.observe(t),()=>{Xp.delete(t),i.unobserve(t)}}const tO={some:0,all:1};class nO extends Hr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:tO[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:d}=this.node.getProps(),f=c?u:d;f&&f(l)};return eO(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(iO(e,n))&&this.startObserver()}unmount(){}}function iO({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const rO={inView:{Feature:nO},tap:{Feature:K3},focus:{Feature:Y3},hover:{Feature:q3}},sO={layout:{ProjectionNode:K1,MeasureLayout:H1}},qp={current:null},Z1={current:!1};function oO(){if(Z1.current=!0,!!Eg)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>qp.current=t.matches;t.addListener(e),e()}else qp.current=!1}const aO=[...S1,Jt,Or],lO=t=>aO.find(x1(t)),C_=new WeakMap;function cO(t,e,n){for(const i in e){const r=e[i],s=n[i];if(tn(r))t.addValue(i,r);else if(tn(s))t.addValue(i,yi(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,yi(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const R_=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class uO{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Qg,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=Ei.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,Xe.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=o;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=Ad(n),this.isVariantNode=Rw(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in f){const g=f[p];l[p]!==void 0&&tn(g)&&g.set(l[p],!1)}}mount(e){this.current=e,C_.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),Z1.current||oO(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:qp.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){C_.delete(this.current),this.projection&&this.projection.unmount(),ui(this.notifyUpdate),ui(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=Os.has(e),r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&Xe.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Fo){const n=Fo[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):bt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<R_.length;i++){const r=R_[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=cO(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=yi(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(y1(r)||c1(r))?r=parseFloat(r):!lO(r)&&Or.test(n)&&(r=m1(e,n)),this.setBaseTarget(e,tn(r)?r.get():r)),tn(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=Pg(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(r=o[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!tn(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Wg),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class Q1 extends uO{constructor(){super(...arguments),this.KeyframeResolver=E1}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;tn(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function dO(t){return window.getComputedStyle(t)}class fO extends Q1{constructor(){super(...arguments),this.type="html",this.renderInstance=Fw}readValueFromInstance(e,n){if(Os.has(n)){const i=Zg(n);return i&&i.default||0}else{const i=dO(e),r=(Ow(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return z1(e,n)}build(e,n,i){Ng(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return kg(e,n,i)}}class hO extends Q1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=bt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Os.has(n)){const i=Zg(n);return i&&i.default||0}return n=Bw.has(n)?n:Ag(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return Hw(e,n,i)}build(e,n,i){Ig(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,r){zw(e,n,i,r)}mount(e){this.isSVGTag=Ug(e.tagName),super.mount(e)}}const pO=(t,e)=>Rg(t)?new hO(e):new fO(e,{allowProjection:t!==H.Fragment}),mO=WD({...FI,...rO,...X3,...sO},pO),ve=oD(mO);function J1(t,e){let n;const i=()=>{const{currentTime:r}=e,o=(r===null?0:r.value)/100;n!==o&&t(o),n=o};return Xe.update(i,!0),()=>ui(i)}const Qc=new WeakMap;let fr;function gO(t,e){if(e){const{inlineSize:n,blockSize:i}=e[0];return{width:n,height:i}}else return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}function vO({target:t,contentRect:e,borderBoxSize:n}){var i;(i=Qc.get(t))===null||i===void 0||i.forEach(r=>{r({target:t,contentSize:e,get size(){return gO(t,n)}})})}function yO(t){t.forEach(vO)}function _O(){typeof ResizeObserver>"u"||(fr=new ResizeObserver(yO))}function xO(t,e){fr||_O();const n=Vg(t);return n.forEach(i=>{let r=Qc.get(i);r||(r=new Set,Qc.set(i,r)),r.add(e),fr==null||fr.observe(i)}),()=>{n.forEach(i=>{const r=Qc.get(i);r==null||r.delete(e),r!=null&&r.size||fr==null||fr.unobserve(i)})}}const Jc=new Set;let Ba;function SO(){Ba=()=>{const t={width:window.innerWidth,height:window.innerHeight},e={target:window,size:t,contentSize:t};Jc.forEach(n=>n(e))},window.addEventListener("resize",Ba)}function EO(t){return Jc.add(t),Ba||SO(),()=>{Jc.delete(t),!Jc.size&&Ba&&(Ba=void 0)}}function MO(t,e){return typeof t=="function"?EO(t):xO(t,e)}const wO=50,P_=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),TO=()=>({time:0,x:P_(),y:P_()}),bO={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function L_(t,e,n,i){const r=n[e],{length:s,position:o}=bO[e],a=r.current,l=n.time;r.current=t[`scroll${o}`],r.scrollLength=t[`scroll${s}`]-t[`client${s}`],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=Cs(0,r.scrollLength,r.current);const c=i-l;r.velocity=c>wO?0:$g(r.current-a,c)}function AO(t,e,n){L_(t,"x",e,n),L_(t,"y",e,n),e.time=n}function CO(t,e){const n={x:0,y:0};let i=t;for(;i&&i!==e;)if(i instanceof HTMLElement)n.x+=i.offsetLeft,n.y+=i.offsetTop,i=i.offsetParent;else if(i.tagName==="svg"){const r=i.getBoundingClientRect();i=i.parentElement;const s=i.getBoundingClientRect();n.x+=r.left-s.left,n.y+=r.top-s.top}else if(i instanceof SVGGraphicsElement){const{x:r,y:s}=i.getBBox();n.x+=r,n.y+=s;let o=null,a=i.parentNode;for(;!o;)a.tagName==="svg"&&(o=a),a=i.parentNode;i=o}else break;return n}const Yp={start:0,center:.5,end:1};function D_(t,e,n=0){let i=0;if(t in Yp&&(t=Yp[t]),typeof t=="string"){const r=parseFloat(t);t.endsWith("px")?i=r:t.endsWith("%")?t=r/100:t.endsWith("vw")?i=r/100*document.documentElement.clientWidth:t.endsWith("vh")?i=r/100*document.documentElement.clientHeight:t=r}return typeof t=="number"&&(i=e*t),n+i}const RO=[0,0];function PO(t,e,n,i){let r=Array.isArray(t)?t:RO,s=0,o=0;return typeof t=="number"?r=[t,t]:typeof t=="string"&&(t=t.trim(),t.includes(" ")?r=t.split(" "):r=[t,Yp[t]?t:"0"]),s=D_(r[0],n,i),o=D_(r[1],e),s-o}const LO={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},DO={x:0,y:0};function NO(t){return"getBBox"in t&&t.tagName!=="svg"?t.getBBox():{width:t.clientWidth,height:t.clientHeight}}function IO(t,e,n){const{offset:i=LO.All}=n,{target:r=t,axis:s="y"}=n,o=s==="y"?"height":"width",a=r!==t?CO(r,t):DO,l=r===t?{width:t.scrollWidth,height:t.scrollHeight}:NO(r),c={width:t.clientWidth,height:t.clientHeight};e[s].offset.length=0;let u=!e[s].interpolate;const d=i.length;for(let f=0;f<d;f++){const p=PO(i[f],c[o],l[o],a[s]);!u&&p!==e[s].interpolatorOffsets[f]&&(u=!0),e[s].offset[f]=p}u&&(e[s].interpolate=e0(e[s].offset,R1(i),{clamp:!1}),e[s].interpolatorOffsets=[...e[s].offset]),e[s].progress=Mi(0,1,e[s].interpolate(e[s].current))}function OO(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let i=e;for(;i&&i!==t;)n.x.targetOffset+=i.offsetLeft,n.y.targetOffset+=i.offsetTop,i=i.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight}function UO(t,e,n,i={}){return{measure:()=>OO(t,i.target,n),update:r=>{AO(t,n,r),(i.offset||i.target)&&IO(t,n,i)},notify:()=>e(n)}}const ua=new WeakMap,N_=new WeakMap,zf=new WeakMap,I_=t=>t===document.documentElement?window:t;function i0(t,{container:e=document.documentElement,...n}={}){let i=zf.get(e);i||(i=new Set,zf.set(e,i));const r=TO(),s=UO(e,t,r,n);if(i.add(s),!ua.has(e)){const a=()=>{for(const f of i)f.measure()},l=()=>{for(const f of i)f.update(Ut.timestamp)},c=()=>{for(const f of i)f.notify()},u=()=>{Xe.read(a,!1,!0),Xe.read(l,!1,!0),Xe.update(c,!1,!0)};ua.set(e,u);const d=I_(e);window.addEventListener("resize",u,{passive:!0}),e!==document.documentElement&&N_.set(e,MO(e,u)),d.addEventListener("scroll",u,{passive:!0})}const o=ua.get(e);return Xe.read(o,!1,!0),()=>{var a;ui(o);const l=zf.get(e);if(!l||(l.delete(s),l.size))return;const c=ua.get(e);ua.delete(e),c&&(I_(e).removeEventListener("scroll",c),(a=N_.get(e))===null||a===void 0||a(),window.removeEventListener("resize",c))}}function kO({source:t,container:e,axis:n="y"}){t&&(e=t);const i={value:0},r=i0(s=>{i.value=s[n].progress*100},{container:e,axis:n});return{currentTime:i,cancel:r}}const Vf=new Map;function eT({source:t,container:e=document.documentElement,axis:n="y"}={}){t&&(e=t),Vf.has(e)||Vf.set(e,{});const i=Vf.get(e);return i[n]||(i[n]=Ww()?new ScrollTimeline({source:e,axis:n}):kO({source:e,axis:n})),i[n]}function FO(t){return t.length===2}function tT(t){return t&&(t.target||t.offset)}function BO(t,e){return FO(t)||tT(e)?i0(n=>{t(n[e.axis].progress,n)},e):J1(t,eT(e))}function zO(t,e){if(t.flatten(),tT(e))return t.pause(),i0(n=>{t.time=t.duration*n[e.axis].progress},e);{const n=eT(e);return t.attachTimeline?t.attachTimeline(n,i=>(i.pause(),J1(r=>{i.time=i.duration*r},n))):un}}function VO(t,{axis:e="y",...n}={}){const i={axis:e,...n};return typeof t=="function"?BO(t,i):zO(t,i)}function O_(t,e){QL(!!(!e||e.current))}const HO=()=>({scrollX:yi(0),scrollY:yi(0),scrollXProgress:yi(0),scrollYProgress:yi(0)});function nT({container:t,target:e,layoutEffect:n=!0,...i}={}){const r=qo(HO);return(n?wd:H.useEffect)(()=>(O_("target",e),O_("container",t),VO((o,{x:a,y:l})=>{r.scrollX.set(a.current),r.scrollXProgress.set(a.progress),r.scrollY.set(l.current),r.scrollYProgress.set(l.progress)},{...i,container:(t==null?void 0:t.current)||void 0,target:(e==null?void 0:e.current)||void 0})),[t,e,JSON.stringify(i.offset)]),r}function GO(t){const e=qo(()=>yi(t)),{isStatic:n}=H.useContext(Md);if(n){const[,i]=H.useState(t);H.useEffect(()=>e.on("change",i),[])}return e}function iT(t,e){const n=GO(e()),i=()=>n.set(e());return i(),wd(()=>{const r=()=>Xe.preRender(i,!1,!0),s=t.map(o=>o.on("change",r));return()=>{s.forEach(o=>o()),ui(i)}}),n}const jO=t=>t&&typeof t=="object"&&t.mix,WO=t=>jO(t)?t.mix:void 0;function $O(...t){const e=!Array.isArray(t[0]),n=e?0:-1,i=t[0+n],r=t[1+n],s=t[2+n],o=t[3+n],a=e0(r,s,{mixer:WO(s[0]),...o});return e?a(i):a}function XO(t){Ia.current=[],t();const e=iT(Ia.current,t);return Ia.current=void 0,e}function zu(t,e,n,i){if(typeof t=="function")return XO(t);const r=typeof e=="function"?e:$O(e,n,i);return Array.isArray(t)?U_(t,r):U_([t],([s])=>r(s))}function U_(t,e){const n=qo(()=>[]);return iT(t,()=>{n.length=0;const i=t.length;for(let r=0;r<i;r++)n[r]=t[r].get();return e(n)})}const qO={some:0,all:1};function YO(t,e,{root:n,margin:i,amount:r="some"}={}){const s=Vg(t),o=new WeakMap,a=c=>{c.forEach(u=>{const d=o.get(u.target);if(u.isIntersecting!==!!d)if(u.isIntersecting){const f=e(u);typeof f=="function"?o.set(u.target,f):l.unobserve(u.target)}else typeof d=="function"&&(d(u),o.delete(u.target))})},l=new IntersectionObserver(a,{root:n,rootMargin:i,threshold:typeof r=="number"?r:qO[r]});return s.forEach(c=>l.observe(c)),()=>l.disconnect()}function Gr(t,{root:e,margin:n,amount:i,once:r=!1}={}){const[s,o]=H.useState(!1);return H.useEffect(()=>{if(!t.current||r&&s)return;const a=()=>(o(!0),r?void 0:()=>o(!1)),l={root:e&&e.current||void 0,margin:n,amount:i};return YO(t.current,a,l)},[e,t,n,r,i]),s}const k_=[{name:"Home",to:"hero",offset:0},{name:"About",to:"about",offset:-80},{name:"Skills",to:"skills",offset:-80},{name:"Services",to:"services",offset:-80},{name:"Projects",to:"projects",offset:-80},{name:"Contact",to:"contact",offset:-80}],KO=()=>{const[t,e]=H.useState(!1),[n,i]=H.useState(!1),{darkMode:r,toggleTheme:s}=ww(),o=wi(m2);return H.useEffect(()=>{const a=()=>{const l=window.scrollY>20;l!==n&&i(l)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[n]),E.jsx("header",{className:`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${n||t?"py-4 bg-white/80 dark:bg-[#0A192F]/80 backdrop-blur-lg shadow-lg":"py-6 bg-transparent"}`,children:E.jsxs("nav",{className:"w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8",children:[E.jsxs("div",{className:"flex flex-wrap items-center justify-between w-full",children:[E.jsx(ve.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5},children:E.jsxs(To,{to:"hero",spy:!0,smooth:!0,duration:500,className:"relative group cursor-pointer",children:[E.jsx("span",{className:"text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]",children:"< Riyan />"}),E.jsx("span",{className:"absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] transition-all duration-300 group-hover:w-full"})]})}),E.jsxs("div",{className:"hidden lg:flex items-center space-x-8",children:[E.jsx("div",{className:"flex items-center space-x-8",children:k_.map((a,l)=>E.jsx(ve.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5,delay:l*.1},children:E.jsxs(To,{to:a.to,spy:!0,smooth:!0,offset:a.offset,duration:500,className:"relative group cursor-pointer",children:[E.jsx("span",{className:"text-gray-600 dark:text-gray-300 transition-colors group-hover:text-[#00F5A0]",children:a.name}),E.jsx("span",{className:"absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00F5A0] transition-all duration-300 group-hover:w-full"})]})},a.name))}),E.jsxs(ve.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.5},className:"flex items-center space-x-4",children:[E.jsx("button",{onClick:s,className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors","aria-label":"Toggle theme",children:E.jsx(ve.div,{initial:!1,animate:{rotate:r?180:0},transition:{duration:.3},children:r?E.jsx(hy,{className:"w-5 h-5 text-[#00F5A0]"}):E.jsx(fy,{className:"w-5 h-5 text-gray-600"})})}),E.jsxs("a",{href:o.resume,className:"group relative px-6 py-2.5 overflow-hidden rounded-full bg-transparent border-2 border-[#00F5A0] text-[#00F5A0] font-medium transition-colors hover:text-white",target:"_blank",rel:"noopener noreferrer",children:[E.jsx("span",{className:"absolute inset-0 w-full h-full bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"}),E.jsxs("span",{className:"relative flex items-center",children:["Resume ",E.jsx(dy,{className:"ml-2 w-4 h-4"})]})]})]})]}),E.jsxs("div",{className:"lg:hidden flex items-center space-x-4",children:[E.jsx("button",{onClick:s,className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors","aria-label":"Toggle theme",children:E.jsx(ve.div,{initial:!1,animate:{rotate:r?180:0},transition:{duration:.3},children:r?E.jsx(hy,{className:"w-5 h-5 text-[#00F5A0]"}):E.jsx(fy,{className:"w-5 h-5 text-gray-600"})})}),E.jsx("button",{onClick:()=>e(!t),className:"p-2 focus:outline-none","aria-label":"Toggle menu",children:t?E.jsx($L,{className:"w-6 h-6 text-gray-600 dark:text-gray-300"}):E.jsx(VL,{className:"w-6 h-6 text-gray-600 dark:text-gray-300"})})]})]}),E.jsx(Mg,{children:t&&E.jsx(ve.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},className:"lg:hidden overflow-hidden",children:E.jsxs("div",{className:"py-6 space-y-4",children:[k_.map((a,l)=>E.jsx(ve.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3,delay:l*.1},children:E.jsx(To,{to:a.to,spy:!0,smooth:!0,offset:a.offset,duration:500,onClick:()=>e(!1),className:"block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-[#00F5A0] transition-colors",children:a.name})},a.name)),E.jsx(ve.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3,delay:.5},className:"px-4 pt-4",children:E.jsxs("a",{href:o.resume,className:"group relative inline-flex items-center px-6 py-2.5 overflow-hidden rounded-full bg-transparent border-2 border-[#00F5A0] text-[#00F5A0] font-medium transition-colors hover:text-white",target:"_blank",rel:"noopener noreferrer",children:[E.jsx("span",{className:"absolute inset-0 w-full h-full bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"}),E.jsxs("span",{className:"relative flex items-center",children:["Resume ",E.jsx(dy,{className:"ml-2 w-4 h-4"})]})]})})]})})})]})})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const r0="161",ZO=0,F_=1,QO=2,rT=1,JO=2,Di=3,Ur=0,Sn=1,Ui=2,Cr=0,bo=1,Kp=2,B_=3,z_=4,eU=5,os=100,tU=101,nU=102,V_=103,H_=104,iU=200,rU=201,sU=202,oU=203,Zp=204,Qp=205,aU=206,lU=207,cU=208,uU=209,dU=210,fU=211,hU=212,pU=213,mU=214,gU=0,vU=1,yU=2,Vu=3,_U=4,xU=5,SU=6,EU=7,sT=0,MU=1,wU=2,Rr=0,TU=1,bU=2,AU=3,CU=4,RU=5,PU=6,oT=300,zo=301,Vo=302,Jp=303,em=304,Pd=306,tm=1e3,ri=1001,nm=1002,ln=1003,G_=1004,da=1005,pn=1006,Hf=1007,fs=1008,Pr=1009,LU=1010,DU=1011,s0=1012,aT=1013,_r=1014,ki=1015,cl=1016,lT=1017,cT=1018,vs=1020,NU=1021,si=1023,IU=1024,OU=1025,ys=1026,Ho=1027,UU=1028,uT=1029,kU=1030,dT=1031,fT=1033,Gf=33776,jf=33777,Wf=33778,$f=33779,j_=35840,W_=35841,$_=35842,X_=35843,hT=36196,q_=37492,Y_=37496,K_=37808,Z_=37809,Q_=37810,J_=37811,ex=37812,tx=37813,nx=37814,ix=37815,rx=37816,sx=37817,ox=37818,ax=37819,lx=37820,cx=37821,Xf=36492,ux=36494,dx=36495,FU=36283,fx=36284,hx=36285,px=36286,pT=3e3,_s=3001,BU=3200,zU=3201,VU=0,HU=1,jn="",jt="srgb",Qi="srgb-linear",o0="display-p3",Ld="display-p3-linear",Hu="linear",lt="srgb",Gu="rec709",ju="p3",ks=7680,mx=519,GU=512,jU=513,WU=514,mT=515,$U=516,XU=517,qU=518,YU=519,gx=35044,vx="300 es",im=1035,zi=2e3,Wu=2001;class Zo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qf=Math.PI/180,rm=180/Math.PI;function Pl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function gn(t,e,n){return Math.max(e,Math.min(n,t))}function KU(t,e){return(t%e+e)%e}function Yf(t,e,n){return(1-n)*t+n*e}function yx(t){return(t&t-1)===0&&t!==0}function sm(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function fa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function hn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,n=0){qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,n,i,r,s,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],h=r[6],v=r[1],y=r[4],x=r[7],T=r[2],w=r[5],b=r[8];return s[0]=o*_+a*v+l*T,s[3]=o*m+a*y+l*w,s[6]=o*h+a*x+l*b,s[1]=c*_+u*v+d*T,s[4]=c*m+u*y+d*w,s[7]=c*h+u*x+d*b,s[2]=f*_+p*v+g*T,s[5]=f*m+p*y+g*w,s[8]=f*h+p*x+g*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=n*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Kf.makeScale(e,n)),this}rotate(e){return this.premultiply(Kf.makeRotation(-e)),this}translate(e,n){return this.premultiply(Kf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kf=new Ve;function gT(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function $u(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ZU(){const t=$u("canvas");return t.style.display="block",t}const _x={};function Ao(t){t in _x||(_x[t]=!0,console.warn(t))}const xx=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sx=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fc={[Qi]:{transfer:Hu,primaries:Gu,toReference:t=>t,fromReference:t=>t},[jt]:{transfer:lt,primaries:Gu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ld]:{transfer:Hu,primaries:ju,toReference:t=>t.applyMatrix3(Sx),fromReference:t=>t.applyMatrix3(xx)},[o0]:{transfer:lt,primaries:ju,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Sx),fromReference:t=>t.applyMatrix3(xx).convertLinearToSRGB()}},QU=new Set([Qi,Ld]),et={enabled:!0,_workingColorSpace:Qi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!QU.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=fc[e].toReference,r=fc[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return fc[t].primaries},getTransfer:function(t){return t===jn?Hu:fc[t].transfer}};function Co(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Zf(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Fs;class vT{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fs===void 0&&(Fs=$u("canvas")),Fs.width=e.width,Fs.height=e.height;const i=Fs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Fs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=$u("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Co(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Co(n[i]/255)*255):n[i]=Co(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let JU=0;class yT{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JU++}),this.uuid=Pl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Qf(r[o].image)):s.push(Qf(r[o]))}else s=Qf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Qf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?vT.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ek=0;class En extends Zo{constructor(e=En.DEFAULT_IMAGE,n=En.DEFAULT_MAPPING,i=ri,r=ri,s=pn,o=fs,a=si,l=Pr,c=En.DEFAULT_ANISOTROPY,u=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ek++}),this.uuid=Pl(),this.name="",this.source=new yT(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ao("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===_s?jt:jn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oT)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tm:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case nm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tm:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case nm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ao("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===jt?_s:pT}set encoding(e){Ao("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===_s?jt:jn}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=oT;En.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,n=0,i=0,r=1){Wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,x=(p+1)/2,T=(h+1)/2,w=(u+f)/4,b=(d+_)/4,L=(g+m)/4;return y>x&&y>T?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=w/i,s=b/i):x>T?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=w/r,s=L/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=b/s,r=L/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(f-u)/v,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tk extends Zo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Wt(0,0,e,n),this.scissorTest=!1,this.viewport=new Wt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ao("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===_s?jt:jn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new En(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new yT(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rs extends tk{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class _T extends En{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nk extends En{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ll{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(d!==_||l!==f||c!==p||u!==g){let m=1-a;const h=l*f+c*p+u*g+d*_,v=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const T=Math.sqrt(y),w=Math.atan2(T,h*v);m=Math.sin(m*w)/T,a=Math.sin(a*w)/T}const x=a*v;if(l=l*m+f*x,c=c*m+p*x,u=u*m+g*x,d=d*m+_*x,m===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=T,c*=T,u*=T,d*=T}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*d+l*p-c*f,e[n+1]=l*g+u*f+c*d-a*p,e[n+2]=c*g+u*p+a*f-l*d,e[n+3]=u*g-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"YZX":this._x=f*u*d+c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d-f*p*g;break;case"XZY":this._x=f*u*d-c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ex.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ex.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Jf.copy(this).projectOnVector(e),this.sub(Jf)}reflect(e){return this.sub(Jf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jf=new z,Ex=new Ll;class Dl{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kn):Kn.fromBufferAttribute(s,o),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hc.copy(i.boundingBox)),hc.applyMatrix4(e.matrixWorld),this.union(hc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ha),pc.subVectors(this.max,ha),Bs.subVectors(e.a,ha),zs.subVectors(e.b,ha),Vs.subVectors(e.c,ha),sr.subVectors(zs,Bs),or.subVectors(Vs,zs),qr.subVectors(Bs,Vs);let n=[0,-sr.z,sr.y,0,-or.z,or.y,0,-qr.z,qr.y,sr.z,0,-sr.x,or.z,0,-or.x,qr.z,0,-qr.x,-sr.y,sr.x,0,-or.y,or.x,0,-qr.y,qr.x,0];return!eh(n,Bs,zs,Vs,pc)||(n=[1,0,0,0,1,0,0,0,1],!eh(n,Bs,zs,Vs,pc))?!1:(mc.crossVectors(sr,or),n=[mc.x,mc.y,mc.z],eh(n,Bs,zs,Vs,pc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ai=[new z,new z,new z,new z,new z,new z,new z,new z],Kn=new z,hc=new Dl,Bs=new z,zs=new z,Vs=new z,sr=new z,or=new z,qr=new z,ha=new z,pc=new z,mc=new z,Yr=new z;function eh(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Yr.fromArray(t,s);const a=r.x*Math.abs(Yr.x)+r.y*Math.abs(Yr.y)+r.z*Math.abs(Yr.z),l=e.dot(Yr),c=n.dot(Yr),u=i.dot(Yr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const ik=new Dl,pa=new z,th=new z;class Dd{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ik.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pa.subVectors(e,this.center);const n=pa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(pa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pa.copy(e.center).add(th)),this.expandByPoint(pa.copy(e.center).sub(th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new z,nh=new z,gc=new z,ar=new z,ih=new z,vc=new z,rh=new z;class xT{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){nh.copy(e).add(n).multiplyScalar(.5),gc.copy(n).sub(e).normalize(),ar.copy(this.origin).sub(nh);const s=e.distanceTo(n)*.5,o=-this.direction.dot(gc),a=ar.dot(this.direction),l=-ar.dot(gc),c=ar.lengthSq(),u=Math.abs(1-o*o);let d,f,p,g;if(u>0)if(d=o*l-a,f=o*a-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(nh).addScaledVector(gc,f),p}intersectSphere(e,n){Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,n,i,r,s){ih.subVectors(n,e),vc.subVectors(i,e),rh.crossVectors(ih,vc);let o=this.direction.dot(rh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ar.subVectors(this.origin,e);const l=a*this.direction.dot(vc.crossVectors(ar,vc));if(l<0)return null;const c=a*this.direction.dot(ih.cross(ar));if(c<0||l+c>o)return null;const u=-a*ar.dot(rh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,n,i,r,s,o,a,l,c,u,d,f,p,g,_,m){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,p,g,_,m)}set(e,n,i,r,s,o,a,l,c,u,d,f,p,g,_,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Hs.setFromMatrixColumn(e,0).length(),s=1/Hs.setFromMatrixColumn(e,1).length(),o=1/Hs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,g=a*u,_=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=f-_*c,n[9]=-a*l,n[2]=_-f*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,g=c*u,_=c*d;n[0]=f+_*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=_+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,g=c*u,_=c*d;n[0]=f-_*a,n[4]=-o*d,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=_-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,g=a*u,_=a*d;n[0]=l*u,n[4]=g*c-p,n[8]=f*c+_,n[1]=l*d,n[5]=_*c+f,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=_-f*d,n[8]=g*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+g,n[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+_,n[5]=o*u,n[9]=p*d-g,n[2]=g*d-p,n[6]=a*u,n[10]=_*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rk,e,sk)}lookAt(e,n,i){const r=this.elements;return Tn.subVectors(e,n),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),lr.crossVectors(i,Tn),lr.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),lr.crossVectors(i,Tn)),lr.normalize(),yc.crossVectors(Tn,lr),r[0]=lr.x,r[4]=yc.x,r[8]=Tn.x,r[1]=lr.y,r[5]=yc.y,r[9]=Tn.y,r[2]=lr.z,r[6]=yc.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],h=i[14],v=i[3],y=i[7],x=i[11],T=i[15],w=r[0],b=r[4],L=r[8],$=r[12],S=r[1],R=r[5],q=r[9],Z=r[13],N=r[2],X=r[6],W=r[10],Y=r[14],D=r[3],U=r[7],B=r[11],K=r[15];return s[0]=o*w+a*S+l*N+c*D,s[4]=o*b+a*R+l*X+c*U,s[8]=o*L+a*q+l*W+c*B,s[12]=o*$+a*Z+l*Y+c*K,s[1]=u*w+d*S+f*N+p*D,s[5]=u*b+d*R+f*X+p*U,s[9]=u*L+d*q+f*W+p*B,s[13]=u*$+d*Z+f*Y+p*K,s[2]=g*w+_*S+m*N+h*D,s[6]=g*b+_*R+m*X+h*U,s[10]=g*L+_*q+m*W+h*B,s[14]=g*$+_*Z+m*Y+h*K,s[3]=v*w+y*S+x*N+T*D,s[7]=v*b+y*R+x*X+T*U,s[11]=v*L+y*q+x*W+T*B,s[15]=v*$+y*Z+x*Y+T*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+_*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*d+n*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],v=d*m*c-_*f*c+_*l*p-a*m*p-d*l*h+a*f*h,y=g*f*c-u*m*c-g*l*p+o*m*p+u*l*h-o*f*h,x=u*_*c-g*d*c+g*a*p-o*_*p-u*a*h+o*d*h,T=g*d*l-u*_*l-g*a*f+o*_*f+u*a*m-o*d*m,w=n*v+i*y+r*x+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=v*b,e[1]=(_*f*s-d*m*s-_*r*p+i*m*p+d*r*h-i*f*h)*b,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*h+i*l*h)*b,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*b,e[4]=y*b,e[5]=(u*m*s-g*f*s+g*r*p-n*m*p-u*r*h+n*f*h)*b,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*h-n*l*h)*b,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*p+n*l*p)*b,e[8]=x*b,e[9]=(g*d*s-u*_*s-g*i*p+n*_*p+u*i*h-n*d*h)*b,e[10]=(o*_*s-g*a*s+g*i*c-n*_*c-o*i*h+n*a*h)*b,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*b,e[12]=T*b,e[13]=(u*_*r-g*d*r+g*i*f-n*_*f-u*i*m+n*d*m)*b,e[14]=(g*a*r-o*_*r-g*i*l+n*_*l+o*i*m-n*a*m)*b,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*f+n*a*f)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,g=s*d,_=o*u,m=o*d,h=a*d,v=l*c,y=l*u,x=l*d,T=i.x,w=i.y,b=i.z;return r[0]=(1-(_+h))*T,r[1]=(p+x)*T,r[2]=(g-y)*T,r[3]=0,r[4]=(p-x)*w,r[5]=(1-(f+h))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(g+y)*b,r[9]=(m-v)*b,r[10]=(1-(f+_))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Hs.set(r[0],r[1],r[2]).length();const o=Hs.set(r[4],r[5],r[6]).length(),a=Hs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zn.copy(this);const c=1/s,u=1/o,d=1/a;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=u,Zn.elements[5]*=u,Zn.elements[6]*=u,Zn.elements[8]*=d,Zn.elements[9]*=d,Zn.elements[10]*=d,n.setFromRotationMatrix(Zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=zi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,g;if(a===zi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Wu)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=zi){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),f=(n+e)*c,p=(i+r)*u;let g,_;if(a===zi)g=(o+s)*d,_=-2*d;else if(a===Wu)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Hs=new z,Zn=new Bt,rk=new z(0,0,0),sk=new z(1,1,1),lr=new z,yc=new z,Tn=new z,Mx=new Bt,wx=new Ll;class Nd{constructor(e=0,n=0,i=0,r=Nd.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(gn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Mx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mx,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return wx.setFromEuler(this),this.setFromQuaternion(wx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nd.DEFAULT_ORDER="XYZ";class ST{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ok=0;const Tx=new z,Gs=new Ll,Ri=new Bt,_c=new z,ma=new z,ak=new z,lk=new Ll,bx=new z(1,0,0),Ax=new z(0,1,0),Cx=new z(0,0,1),ck={type:"added"},uk={type:"removed"};class Mn extends Zo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ok++}),this.uuid=Pl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const e=new z,n=new Nd,i=new Ll,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Bt},normalMatrix:{value:new Ve}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ST,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Gs.setFromAxisAngle(e,n),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,n){return Gs.setFromAxisAngle(e,n),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(bx,e)}rotateY(e){return this.rotateOnAxis(Ax,e)}rotateZ(e){return this.rotateOnAxis(Cx,e)}translateOnAxis(e,n){return Tx.copy(e).applyQuaternion(this.quaternion),this.position.add(Tx.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(bx,e)}translateY(e){return this.translateOnAxis(Ax,e)}translateZ(e){return this.translateOnAxis(Cx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?_c.copy(e):_c.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(ma,_c,this.up):Ri.lookAt(_c,ma,this.up),this.quaternion.setFromRotationMatrix(Ri),r&&(Ri.extractRotation(r.matrixWorld),Gs.setFromRotationMatrix(Ri),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ck)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(uk)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,e,ak),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,lk,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Mn.DEFAULT_UP=new z(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new z,Pi=new z,sh=new z,Li=new z,js=new z,Ws=new z,Rx=new z,oh=new z,ah=new z,lh=new z;class vi{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Qn.subVectors(e,n),r.cross(Qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Qn.subVectors(r,n),Pi.subVectors(i,n),sh.subVectors(e,n);const o=Qn.dot(Qn),a=Qn.dot(Pi),l=Qn.dot(sh),c=Pi.dot(Pi),u=Pi.dot(sh),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Li.x),l.addScaledVector(o,Li.y),l.addScaledVector(a,Li.z),l)}static isFrontFacing(e,n,i,r){return Qn.subVectors(i,n),Pi.subVectors(e,n),Qn.cross(Pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),Qn.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return vi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return vi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;js.subVectors(r,i),Ws.subVectors(s,i),oh.subVectors(e,i);const l=js.dot(oh),c=Ws.dot(oh);if(l<=0&&c<=0)return n.copy(i);ah.subVectors(e,r);const u=js.dot(ah),d=Ws.dot(ah);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(js,o);lh.subVectors(e,s);const p=js.dot(lh),g=Ws.dot(lh);if(g>=0&&p<=g)return n.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Ws,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Rx.subVectors(s,r),a=(d-u)/(d-u+(p-g)),n.copy(r).addScaledVector(Rx,a);const h=1/(m+_+f);return o=_*h,a=f*h,n.copy(i).addScaledVector(js,o).addScaledVector(Ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ET={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},xc={h:0,s:0,l:0};function ch(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=KU(e,1),n=gn(n,0,1),i=gn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ch(o,s,e+1/3),this.g=ch(o,s,e),this.b=ch(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=jt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=jt){const i=ET[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Co(e.r),this.g=Co(e.g),this.b=Co(e.b),this}copyLinearToSRGB(e){return this.r=Zf(e.r),this.g=Zf(e.g),this.b=Zf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return et.fromWorkingColorSpace(Qt.copy(this),e),Math.round(gn(Qt.r*255,0,255))*65536+Math.round(gn(Qt.g*255,0,255))*256+Math.round(gn(Qt.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(Qt.copy(this),n);const i=Qt.r,r=Qt.g,s=Qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(Qt.copy(this),n),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=jt){et.fromWorkingColorSpace(Qt.copy(this),e);const n=Qt.r,i=Qt.g,r=Qt.b;return e!==jt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+n,cr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(cr),e.getHSL(xc);const i=Yf(cr.h,xc.h,n),r=Yf(cr.s,xc.s,n),s=Yf(cr.l,xc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new Ze;Ze.NAMES=ET;let dk=0;class Nl extends Zo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dk++}),this.uuid=Pl(),this.name="",this.type="Material",this.blending=bo,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zp,this.blendDst=Qp,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Vu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bo&&(i.blending=this.blending),this.side!==Ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zp&&(i.blendSrc=this.blendSrc),this.blendDst!==Qp&&(i.blendDst=this.blendDst),this.blendEquation!==os&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mx&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class MT extends Nl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sT,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new z,Sc=new qe;class li{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=gx,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ao("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Sc.fromBufferAttribute(this,n),Sc.applyMatrix3(e),this.setXY(n,Sc.x,Sc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=fa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=hn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=fa(n,this.array)),n}setX(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=fa(n,this.array)),n}setY(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=fa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=fa(n,this.array)),n}setW(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array),r=hn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array),r=hn(r,this.array),s=hn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gx&&(e.usage=this.usage),e}}class wT extends li{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class TT extends li{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class xs extends li{constructor(e,n,i){super(new Float32Array(e),n,i)}}let fk=0;const Bn=new Bt,uh=new Mn,$s=new z,bn=new Dl,ga=new Dl,Ot=new z;class tr extends Zo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fk++}),this.uuid=Pl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gT(e)?TT:wT)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,n,i){return Bn.makeTranslation(e,n,i),this.applyMatrix4(Bn),this}scale(e,n,i){return Bn.makeScale(e,n,i),this.applyMatrix4(Bn),this}lookAt(e){return uh.lookAt(e),uh.updateMatrix(),this.applyMatrix4(uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xs(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ga.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(bn.min,ga.min),bn.expandByPoint(Ot),Ot.addVectors(bn.max,ga.max),bn.expandByPoint(Ot)):(bn.expandByPoint(ga.min),bn.expandByPoint(ga.max))}bn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ot.fromBufferAttribute(a,c),l&&($s.fromBufferAttribute(e,c),Ot.add($s)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let S=0;S<a;S++)c[S]=new z,u[S]=new z;const d=new z,f=new z,p=new z,g=new qe,_=new qe,m=new qe,h=new z,v=new z;function y(S,R,q){d.fromArray(r,S*3),f.fromArray(r,R*3),p.fromArray(r,q*3),g.fromArray(o,S*2),_.fromArray(o,R*2),m.fromArray(o,q*2),f.sub(d),p.sub(d),_.sub(g),m.sub(g);const Z=1/(_.x*m.y-m.x*_.y);isFinite(Z)&&(h.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(Z),v.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(Z),c[S].add(h),c[R].add(h),c[q].add(h),u[S].add(v),u[R].add(v),u[q].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let S=0,R=x.length;S<R;++S){const q=x[S],Z=q.start,N=q.count;for(let X=Z,W=Z+N;X<W;X+=3)y(i[X+0],i[X+1],i[X+2])}const T=new z,w=new z,b=new z,L=new z;function $(S){b.fromArray(s,S*3),L.copy(b);const R=c[S];T.copy(R),T.sub(b.multiplyScalar(b.dot(R))).normalize(),w.crossVectors(L,R);const Z=w.dot(u[S])<0?-1:1;l[S*4]=T.x,l[S*4+1]=T.y,l[S*4+2]=T.z,l[S*4+3]=Z}for(let S=0,R=x.length;S<R;++S){const q=x[S],Z=q.start,N=q.count;for(let X=Z,W=Z+N;X<W;X+=3)$(i[X+0]),$(i[X+1]),$(i[X+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new li(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,d=new z;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let h=0;h<u;h++)f[g++]=c[p++]}return new li(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new tr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Px=new Bt,Kr=new xT,Ec=new Dd,Lx=new z,Xs=new z,qs=new z,Ys=new z,dh=new z,Mc=new z,wc=new qe,Tc=new qe,bc=new qe,Dx=new z,Nx=new z,Ix=new z,Ac=new z,Cc=new z;class Vi extends Mn{constructor(e=new tr,n=new MT){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Mc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(dh.fromBufferAttribute(d,e),o?Mc.addScaledVector(dh,u):Mc.addScaledVector(dh.sub(n),u))}n.add(Mc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ec.copy(i.boundingSphere),Ec.applyMatrix4(s),Kr.copy(e.ray).recast(e.near),!(Ec.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(Ec,Lx)===null||Kr.origin.distanceToSquared(Lx)>(e.far-e.near)**2))&&(Px.copy(s).invert(),Kr.copy(e.ray).applyMatrix4(Px),!(i.boundingBox!==null&&Kr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Kr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,T=y;x<T;x+=3){const w=a.getX(x),b=a.getX(x+1),L=a.getX(x+2);r=Rc(this,h,e,i,c,u,d,w,b,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);r=Rc(this,o,e,i,c,u,d,v,y,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,T=y;x<T;x+=3){const w=x,b=x+1,L=x+2;r=Rc(this,h,e,i,c,u,d,w,b,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const v=m,y=m+1,x=m+2;r=Rc(this,o,e,i,c,u,d,v,y,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function hk(t,e,n,i,r,s,o,a){let l;if(e.side===Sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ur,a),l===null)return null;Cc.copy(a),Cc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Cc);return c<n.near||c>n.far?null:{distance:c,point:Cc.clone(),object:t}}function Rc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Xs),t.getVertexPosition(l,qs),t.getVertexPosition(c,Ys);const u=hk(t,e,n,i,Xs,qs,Ys,Ac);if(u){r&&(wc.fromBufferAttribute(r,a),Tc.fromBufferAttribute(r,l),bc.fromBufferAttribute(r,c),u.uv=vi.getInterpolation(Ac,Xs,qs,Ys,wc,Tc,bc,new qe)),s&&(wc.fromBufferAttribute(s,a),Tc.fromBufferAttribute(s,l),bc.fromBufferAttribute(s,c),u.uv1=vi.getInterpolation(Ac,Xs,qs,Ys,wc,Tc,bc,new qe),u.uv2=u.uv1),o&&(Dx.fromBufferAttribute(o,a),Nx.fromBufferAttribute(o,l),Ix.fromBufferAttribute(o,c),u.normal=vi.getInterpolation(Ac,Xs,qs,Ys,Dx,Nx,Ix,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new z,materialIndex:0};vi.getNormal(Xs,qs,Ys,d.normal),u.face=d}return u}class Il extends tr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xs(c,3)),this.setAttribute("normal",new xs(u,3)),this.setAttribute("uv",new xs(d,2));function g(_,m,h,v,y,x,T,w,b,L,$){const S=x/b,R=T/L,q=x/2,Z=T/2,N=w/2,X=b+1,W=L+1;let Y=0,D=0;const U=new z;for(let B=0;B<W;B++){const K=B*R-Z;for(let ne=0;ne<X;ne++){const Te=ne*S-q;U[_]=Te*v,U[m]=K*y,U[h]=N,c.push(U.x,U.y,U.z),U[_]=0,U[m]=0,U[h]=w>0?1:-1,u.push(U.x,U.y,U.z),d.push(ne/b),d.push(1-B/L),Y+=1}}for(let B=0;B<L;B++)for(let K=0;K<b;K++){const ne=f+K+X*B,Te=f+K+X*(B+1),G=f+(K+1)+X*(B+1),Q=f+(K+1)+X*B;l.push(ne,Te,Q),l.push(Te,G,Q),D+=6}a.addGroup(p,D,$),p+=D,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Il(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Go(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=Go(t[n]);for(const r in i)e[r]=i[r]}return e}function pk(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function bT(t){return t.getRenderTarget()===null?t.outputColorSpace:et.workingColorSpace}const mk={clone:Go,merge:on};var gk=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vk=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kr extends Nl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gk,this.fragmentShader=vk,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Go(e.uniforms),this.uniformsGroups=pk(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class AT extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=zi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ur=new z,Ox=new qe,Ux=new qe;class Gn extends AT{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=rm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rm*2*Math.atan(Math.tan(qf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,n){return this.getViewBounds(e,Ox,Ux),n.subVectors(Ux,Ox)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(qf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ks=-90,Zs=1;class yk extends Mn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gn(Ks,Zs,e,n);r.layers=this.layers,this.add(r);const s=new Gn(Ks,Zs,e,n);s.layers=this.layers,this.add(s);const o=new Gn(Ks,Zs,e,n);o.layers=this.layers,this.add(o);const a=new Gn(Ks,Zs,e,n);a.layers=this.layers,this.add(a);const l=new Gn(Ks,Zs,e,n);l.layers=this.layers,this.add(l);const c=new Gn(Ks,Zs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===zi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class CT extends En{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:zo,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _k extends Rs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ao("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===_s?jt:jn),this.texture=new CT(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:pn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Il(5,5,5),s=new kr({name:"CubemapFromEquirect",uniforms:Go(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:Cr});s.uniforms.tEquirect.value=n;const o=new Vi(r,s),a=n.minFilter;return n.minFilter===fs&&(n.minFilter=pn),new yk(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const fh=new z,xk=new z,Sk=new Ve;class is{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=fh.subVectors(i,n).cross(xk.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(fh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Sk.getNormalMatrix(e),r=this.coplanarPoint(fh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zr=new Dd,Pc=new z;class RT{constructor(e=new is,n=new is,i=new is,r=new is,s=new is,o=new is){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=zi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],g=r[9],_=r[10],m=r[11],h=r[12],v=r[13],y=r[14],x=r[15];if(i[0].setComponents(l-s,f-c,m-p,x-h).normalize(),i[1].setComponents(l+s,f+c,m+p,x+h).normalize(),i[2].setComponents(l+o,f+u,m+g,x+v).normalize(),i[3].setComponents(l-o,f-u,m-g,x-v).normalize(),i[4].setComponents(l-a,f-d,m-_,x-y).normalize(),n===zi)i[5].setComponents(l+a,f+d,m+_,x+y).normalize();else if(n===Wu)i[5].setComponents(a,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){return Zr.center.set(0,0,0),Zr.radius=.7071067811865476,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Pc.x=r.normal.x>0?e.max.x:e.min.x,Pc.y=r.normal.y>0?e.max.y:e.min.y,Pc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function PT(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Ek(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,f=c.usage,p=d.byteLength,g=t.createBuffer();t.bindBuffer(u,g),t.bufferData(u,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=t.SHORT;else if(d instanceof Uint32Array)_=t.UNSIGNED_INT;else if(d instanceof Int32Array)_=t.INT;else if(d instanceof Int8Array)_=t.BYTE;else if(d instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,d){const f=u.array,p=u._updateRange,g=u.updateRanges;if(t.bindBuffer(d,c),p.count===-1&&g.length===0&&t.bufferSubData(d,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){const h=g[_];n?t.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f,h.start,h.count):t.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):t.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,u),d.version=c.version}}return{get:o,remove:a,update:l}}class Id extends tr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,p=[],g=[],_=[],m=[];for(let h=0;h<u;h++){const v=h*f-o;for(let y=0;y<c;y++){const x=y*d-s;g.push(x,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const y=v+c*h,x=v+c*(h+1),T=v+1+c*(h+1),w=v+1+c*h;p.push(y,x,w),p.push(x,T,w)}this.setIndex(p),this.setAttribute("position",new xs(g,3)),this.setAttribute("normal",new xs(_,3)),this.setAttribute("uv",new xs(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Id(e.width,e.height,e.widthSegments,e.heightSegments)}}var Mk=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wk=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tk=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bk=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ak=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ck=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rk=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pk=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lk=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dk=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Nk=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ik=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ok=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Uk=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kk=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fk=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bk=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zk=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vk=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hk=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gk=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jk=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wk=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$k=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xk=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qk=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yk=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kk=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zk=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qk=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jk="gl_FragColor = linearToOutputTexel( gl_FragColor );",eF=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,tF=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nF=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iF=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rF=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sF=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,oF=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aF=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lF=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cF=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uF=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dF=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fF=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hF=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pF=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mF=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gF=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vF=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yF=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_F=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xF=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,SF=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,EF=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,MF=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wF=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,TF=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bF=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AF=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CF=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,RF=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,PF=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LF=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DF=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,NF=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IF=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OF=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UF=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kF=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,FF=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,BF=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zF=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,VF=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HF=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GF=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jF=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WF=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$F=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XF=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qF=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YF=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KF=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZF=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,QF=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JF=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eB=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tB=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nB=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iB=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rB=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,sB=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oB=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,aB=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lB=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cB=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uB=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dB=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fB=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hB=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pB=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mB=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gB=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vB=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yB=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_B=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xB=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,SB=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const EB=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MB=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wB=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TB=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bB=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AB=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CB=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,RB=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,PB=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,LB=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,DB=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NB=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IB=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OB=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UB=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kB=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FB=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BB=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zB=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,VB=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HB=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,GB=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jB=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WB=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$B=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,XB=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qB=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YB=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KB=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ZB=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QB=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JB=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,e4=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:Mk,alphahash_pars_fragment:wk,alphamap_fragment:Tk,alphamap_pars_fragment:bk,alphatest_fragment:Ak,alphatest_pars_fragment:Ck,aomap_fragment:Rk,aomap_pars_fragment:Pk,batching_pars_vertex:Lk,batching_vertex:Dk,begin_vertex:Nk,beginnormal_vertex:Ik,bsdfs:Ok,iridescence_fragment:Uk,bumpmap_pars_fragment:kk,clipping_planes_fragment:Fk,clipping_planes_pars_fragment:Bk,clipping_planes_pars_vertex:zk,clipping_planes_vertex:Vk,color_fragment:Hk,color_pars_fragment:Gk,color_pars_vertex:jk,color_vertex:Wk,common:$k,cube_uv_reflection_fragment:Xk,defaultnormal_vertex:qk,displacementmap_pars_vertex:Yk,displacementmap_vertex:Kk,emissivemap_fragment:Zk,emissivemap_pars_fragment:Qk,colorspace_fragment:Jk,colorspace_pars_fragment:eF,envmap_fragment:tF,envmap_common_pars_fragment:nF,envmap_pars_fragment:iF,envmap_pars_vertex:rF,envmap_physical_pars_fragment:gF,envmap_vertex:sF,fog_vertex:oF,fog_pars_vertex:aF,fog_fragment:lF,fog_pars_fragment:cF,gradientmap_pars_fragment:uF,lightmap_fragment:dF,lightmap_pars_fragment:fF,lights_lambert_fragment:hF,lights_lambert_pars_fragment:pF,lights_pars_begin:mF,lights_toon_fragment:vF,lights_toon_pars_fragment:yF,lights_phong_fragment:_F,lights_phong_pars_fragment:xF,lights_physical_fragment:SF,lights_physical_pars_fragment:EF,lights_fragment_begin:MF,lights_fragment_maps:wF,lights_fragment_end:TF,logdepthbuf_fragment:bF,logdepthbuf_pars_fragment:AF,logdepthbuf_pars_vertex:CF,logdepthbuf_vertex:RF,map_fragment:PF,map_pars_fragment:LF,map_particle_fragment:DF,map_particle_pars_fragment:NF,metalnessmap_fragment:IF,metalnessmap_pars_fragment:OF,morphcolor_vertex:UF,morphnormal_vertex:kF,morphtarget_pars_vertex:FF,morphtarget_vertex:BF,normal_fragment_begin:zF,normal_fragment_maps:VF,normal_pars_fragment:HF,normal_pars_vertex:GF,normal_vertex:jF,normalmap_pars_fragment:WF,clearcoat_normal_fragment_begin:$F,clearcoat_normal_fragment_maps:XF,clearcoat_pars_fragment:qF,iridescence_pars_fragment:YF,opaque_fragment:KF,packing:ZF,premultiplied_alpha_fragment:QF,project_vertex:JF,dithering_fragment:eB,dithering_pars_fragment:tB,roughnessmap_fragment:nB,roughnessmap_pars_fragment:iB,shadowmap_pars_fragment:rB,shadowmap_pars_vertex:sB,shadowmap_vertex:oB,shadowmask_pars_fragment:aB,skinbase_vertex:lB,skinning_pars_vertex:cB,skinning_vertex:uB,skinnormal_vertex:dB,specularmap_fragment:fB,specularmap_pars_fragment:hB,tonemapping_fragment:pB,tonemapping_pars_fragment:mB,transmission_fragment:gB,transmission_pars_fragment:vB,uv_pars_fragment:yB,uv_pars_vertex:_B,uv_vertex:xB,worldpos_vertex:SB,background_vert:EB,background_frag:MB,backgroundCube_vert:wB,backgroundCube_frag:TB,cube_vert:bB,cube_frag:AB,depth_vert:CB,depth_frag:RB,distanceRGBA_vert:PB,distanceRGBA_frag:LB,equirect_vert:DB,equirect_frag:NB,linedashed_vert:IB,linedashed_frag:OB,meshbasic_vert:UB,meshbasic_frag:kB,meshlambert_vert:FB,meshlambert_frag:BB,meshmatcap_vert:zB,meshmatcap_frag:VB,meshnormal_vert:HB,meshnormal_frag:GB,meshphong_vert:jB,meshphong_frag:WB,meshphysical_vert:$B,meshphysical_frag:XB,meshtoon_vert:qB,meshtoon_frag:YB,points_vert:KB,points_frag:ZB,shadow_vert:QB,shadow_frag:JB,sprite_vert:e4,sprite_frag:t4},ae={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},mi={basic:{uniforms:on([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:on([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:on([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:on([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:on([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:on([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:on([ae.points,ae.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:on([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:on([ae.common,ae.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:on([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:on([ae.sprite,ae.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:on([ae.common,ae.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:on([ae.lights,ae.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};mi.physical={uniforms:on([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Lc={r:0,b:0,g:0};function n4(t,e,n,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function g(m,h){let v=!1,y=h.isScene===!0?h.background:null;y&&y.isTexture&&(y=(h.backgroundBlurriness>0?n:e).get(y)),y===null?_(a,l):y&&y.isColor&&(_(y,1),v=!0);const x=t.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Pd)?(u===void 0&&(u=new Vi(new Il(1,1,1),new kr({name:"BackgroundCubeMaterial",uniforms:Go(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=et.getTransfer(y.colorSpace)!==lt,(d!==y||f!==y.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Vi(new Id(2,2),new kr({name:"BackgroundMaterial",uniforms:Go(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=et.getTransfer(y.colorSpace)!==lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,h){m.getRGB(Lc,bT(t)),i.buffers.color.setClear(Lc.r,Lc.g,Lc.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function i4(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function d(N,X,W,Y,D){let U=!1;if(o){const B=_(Y,W,X);c!==B&&(c=B,p(c.object)),U=h(N,Y,W,D),U&&v(N,Y,W,D)}else{const B=X.wireframe===!0;(c.geometry!==Y.id||c.program!==W.id||c.wireframe!==B)&&(c.geometry=Y.id,c.program=W.id,c.wireframe=B,U=!0)}D!==null&&n.update(D,t.ELEMENT_ARRAY_BUFFER),(U||u)&&(u=!1,L(N,X,W,Y),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(D).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(N){return i.isWebGL2?t.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return i.isWebGL2?t.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function _(N,X,W){const Y=W.wireframe===!0;let D=a[N.id];D===void 0&&(D={},a[N.id]=D);let U=D[X.id];U===void 0&&(U={},D[X.id]=U);let B=U[Y];return B===void 0&&(B=m(f()),U[Y]=B),B}function m(N){const X=[],W=[],Y=[];for(let D=0;D<r;D++)X[D]=0,W[D]=0,Y[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:W,attributeDivisors:Y,object:N,attributes:{},index:null}}function h(N,X,W,Y){const D=c.attributes,U=X.attributes;let B=0;const K=W.getAttributes();for(const ne in K)if(K[ne].location>=0){const G=D[ne];let Q=U[ne];if(Q===void 0&&(ne==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),ne==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),G===void 0||G.attribute!==Q||Q&&G.data!==Q.data)return!0;B++}return c.attributesNum!==B||c.index!==Y}function v(N,X,W,Y){const D={},U=X.attributes;let B=0;const K=W.getAttributes();for(const ne in K)if(K[ne].location>=0){let G=U[ne];G===void 0&&(ne==="instanceMatrix"&&N.instanceMatrix&&(G=N.instanceMatrix),ne==="instanceColor"&&N.instanceColor&&(G=N.instanceColor));const Q={};Q.attribute=G,G&&G.data&&(Q.data=G.data),D[ne]=Q,B++}c.attributes=D,c.attributesNum=B,c.index=Y}function y(){const N=c.newAttributes;for(let X=0,W=N.length;X<W;X++)N[X]=0}function x(N){T(N,0)}function T(N,X){const W=c.newAttributes,Y=c.enabledAttributes,D=c.attributeDivisors;W[N]=1,Y[N]===0&&(t.enableVertexAttribArray(N),Y[N]=1),D[N]!==X&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,X),D[N]=X)}function w(){const N=c.newAttributes,X=c.enabledAttributes;for(let W=0,Y=X.length;W<Y;W++)X[W]!==N[W]&&(t.disableVertexAttribArray(W),X[W]=0)}function b(N,X,W,Y,D,U,B){B===!0?t.vertexAttribIPointer(N,X,W,D,U):t.vertexAttribPointer(N,X,W,Y,D,U)}function L(N,X,W,Y){if(i.isWebGL2===!1&&(N.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const D=Y.attributes,U=W.getAttributes(),B=X.defaultAttributeValues;for(const K in U){const ne=U[K];if(ne.location>=0){let Te=D[K];if(Te===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(Te=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(Te=N.instanceColor)),Te!==void 0){const G=Te.normalized,Q=Te.itemSize,ce=n.get(Te);if(ce===void 0)continue;const _e=ce.buffer,be=ce.type,me=ce.bytesPerElement,$e=i.isWebGL2===!0&&(be===t.INT||be===t.UNSIGNED_INT||Te.gpuType===aT);if(Te.isInterleavedBufferAttribute){const Ne=Te.data,O=Ne.stride,zt=Te.offset;if(Ne.isInstancedInterleavedBuffer){for(let Ee=0;Ee<ne.locationSize;Ee++)T(ne.location+Ee,Ne.meshPerAttribute);N.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let Ee=0;Ee<ne.locationSize;Ee++)x(ne.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,_e);for(let Ee=0;Ee<ne.locationSize;Ee++)b(ne.location+Ee,Q/ne.locationSize,be,G,O*me,(zt+Q/ne.locationSize*Ee)*me,$e)}else{if(Te.isInstancedBufferAttribute){for(let Ne=0;Ne<ne.locationSize;Ne++)T(ne.location+Ne,Te.meshPerAttribute);N.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Ne=0;Ne<ne.locationSize;Ne++)x(ne.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,_e);for(let Ne=0;Ne<ne.locationSize;Ne++)b(ne.location+Ne,Q/ne.locationSize,be,G,Q*me,Q/ne.locationSize*Ne*me,$e)}}else if(B!==void 0){const G=B[K];if(G!==void 0)switch(G.length){case 2:t.vertexAttrib2fv(ne.location,G);break;case 3:t.vertexAttrib3fv(ne.location,G);break;case 4:t.vertexAttrib4fv(ne.location,G);break;default:t.vertexAttrib1fv(ne.location,G)}}}}w()}function $(){q();for(const N in a){const X=a[N];for(const W in X){const Y=X[W];for(const D in Y)g(Y[D].object),delete Y[D];delete X[W]}delete a[N]}}function S(N){if(a[N.id]===void 0)return;const X=a[N.id];for(const W in X){const Y=X[W];for(const D in Y)g(Y[D].object),delete Y[D];delete X[W]}delete a[N.id]}function R(N){for(const X in a){const W=a[X];if(W[N.id]===void 0)continue;const Y=W[N.id];for(const D in Y)g(Y[D].object),delete Y[D];delete W[N.id]}}function q(){Z(),u=!0,c!==l&&(c=l,p(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:Z,dispose:$,releaseStatesOfGeometry:S,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:x,disableUnusedAttributes:w}}function r4(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,d){t.drawArrays(s,u,d),n.update(d,s,1)}function l(u,d,f){if(f===0)return;let p,g;if(r)p=t,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,u,d,f),n.update(d,s,f)}function c(u,d,f){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(u[g],d[g]);else{p.multiDrawArraysWEBGL(s,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_];n.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function s4(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,x=o||e.has("OES_texture_float"),T=y&&x,w=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:T,maxSamples:w}}function o4(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new is,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,y=v*4;let x=h.clippingState||null;l.value=x,x=u(g,f,y,p);for(let T=0;T!==y;++T)x[T]=n[T];h.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const h=p+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,x=p;y!==_;++y,x+=4)o.copy(d[y]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function a4(t){let e=new WeakMap;function n(o,a){return a===Jp?o.mapping=zo:a===em&&(o.mapping=Vo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jp||a===em)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new _k(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class l4 extends AT{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const vo=4,kx=[.125,.215,.35,.446,.526,.582],as=20,hh=new l4,Fx=new Ze;let ph=null,mh=0,gh=0;const rs=(1+Math.sqrt(5))/2,Qs=1/rs,Bx=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,rs,Qs),new z(0,rs,-Qs),new z(Qs,0,rs),new z(-Qs,0,rs),new z(rs,Qs,0),new z(-rs,Qs,0)];class zx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ph,mh,gh),e.scissorTest=!1,Dc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===zo||e.mapping===Vo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:cl,format:si,colorSpace:Qi,depthBuffer:!1},r=Vx(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vx(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=c4(s)),this._blurMaterial=u4(s,e,n)}return r}_compileMaterial(e){const n=new Vi(this._lodPlanes[0],e);this._renderer.compile(n,hh)}_sceneToCubeUV(e,n,i,r){const a=new Gn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Fx),u.toneMapping=Rr,u.autoClear=!1;const p=new MT({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),g=new Vi(new Il,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Fx),_=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const y=this._cubeSize;Dc(r,v*y,h>2?y:0,y,y),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===zo||e.mapping===Vo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hx());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Vi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Dc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,hh)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Bx[(r-1)%Bx.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Vi(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*as-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):as;m>as&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${as}`);const h=[];let v=0;for(let b=0;b<as;++b){const L=b/_,$=Math.exp(-L*L/2);h.push($),b===0?v+=$:b<m&&(v+=2*$)}for(let b=0;b<h.length;b++)h[b]=h[b]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const x=this._sizeLods[r],T=3*x*(r>y-vo?r-y+vo:0),w=4*(this._cubeSize-x);Dc(n,T,w,3*x,2*x),l.setRenderTarget(n),l.render(d,hh)}}function c4(t){const e=[],n=[],i=[];let r=t;const s=t-vo+1+kx.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-vo?l=kx[o-t+vo-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,_=3,m=2,h=1,v=new Float32Array(_*g*p),y=new Float32Array(m*g*p),x=new Float32Array(h*g*p);for(let w=0;w<p;w++){const b=w%3*2/3-1,L=w>2?0:-1,$=[b,L,0,b+2/3,L,0,b+2/3,L+1,0,b,L,0,b+2/3,L+1,0,b,L+1,0];v.set($,_*g*w),y.set(f,m*g*w);const S=[w,w,w,w,w,w];x.set(S,h*g*w)}const T=new tr;T.setAttribute("position",new li(v,_)),T.setAttribute("uv",new li(y,m)),T.setAttribute("faceIndex",new li(x,h)),e.push(T),r>vo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Vx(t,e,n){const i=new Rs(t,e,n);return i.texture.mapping=Pd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Dc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function u4(t,e,n){const i=new Float32Array(as),r=new z(0,1,0);return new kr({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:a0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function Hx(){return new kr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:a0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function Gx(){return new kr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:a0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function a0(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function d4(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Jp||l===em,u=l===zo||l===Vo;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new zx(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&r(d)){n===null&&(n=new zx(t));const f=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function f4(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function h4(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,h=_.length;m<h;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,h=_.length;m<h;m++)e.update(_[m],t.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let y=0,x=v.length;y<x;y+=3){const T=v[y+0],w=v[y+1],b=v[y+2];f.push(T,w,w,b,b,T)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const T=y+0,w=y+1,b=y+2;f.push(T,w,w,b,b,T)}}else return;const m=new(gT(f)?TT:wT)(f,1);m.version=_;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function p4(t,e,n,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,g){t.drawElements(s,g,a,p*l),n.update(g,s,1)}function d(p,g,_){if(_===0)return;let m,h;if(r)m=t,h="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](s,g,a,p*l,_),n.update(g,s,_)}function f(p,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<_;h++)this.render(p[h]/l,g[h]);else{m.multiDrawElementsWEBGL(s,g,0,a,p,0,_);let h=0;for(let v=0;v<_;v++)h+=g[v];n.update(h,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function m4(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function g4(t,e){return t[0]-e[0]}function v4(t,e){return Math.abs(e[1])-Math.abs(t[1])}function y4(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Wt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let X=function(){Z.dispose(),s.delete(u),u.removeEventListener("dispose",X)};var p=X;m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let $=0;y===!0&&($=1),x===!0&&($=2),T===!0&&($=3);let S=u.attributes.position.count*$,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const q=new Float32Array(S*R*4*_),Z=new _T(q,S,R,_);Z.type=ki,Z.needsUpdate=!0;const N=$*4;for(let W=0;W<_;W++){const Y=w[W],D=b[W],U=L[W],B=S*R*4*W;for(let K=0;K<Y.count;K++){const ne=K*N;y===!0&&(o.fromBufferAttribute(Y,K),q[B+ne+0]=o.x,q[B+ne+1]=o.y,q[B+ne+2]=o.z,q[B+ne+3]=0),x===!0&&(o.fromBufferAttribute(D,K),q[B+ne+4]=o.x,q[B+ne+5]=o.y,q[B+ne+6]=o.z,q[B+ne+7]=0),T===!0&&(o.fromBufferAttribute(U,K),q[B+ne+8]=o.x,q[B+ne+9]=o.y,q[B+ne+10]=o.z,q[B+ne+11]=U.itemSize===4?o.w:1)}}m={count:_,texture:Z,size:new qe(S,R)},s.set(u,m),u.addEventListener("dispose",X)}let h=0;for(let y=0;y<f.length;y++)h+=f[y];const v=u.morphTargetsRelative?1:1-h;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",f),d.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let _=i[u.id];if(_===void 0||_.length!==g){_=[];for(let x=0;x<g;x++)_[x]=[x,0];i[u.id]=_}for(let x=0;x<g;x++){const T=_[x];T[0]=x,T[1]=f[x]}_.sort(v4);for(let x=0;x<8;x++)x<g&&_[x][1]?(a[x][0]=_[x][0],a[x][1]=_[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(g4);const m=u.morphAttributes.position,h=u.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const T=a[x],w=T[0],b=T[1];w!==Number.MAX_SAFE_INTEGER&&b?(m&&u.getAttribute("morphTarget"+x)!==m[w]&&u.setAttribute("morphTarget"+x,m[w]),h&&u.getAttribute("morphNormal"+x)!==h[w]&&u.setAttribute("morphNormal"+x,h[w]),r[x]=b,v+=b):(m&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),h&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const y=u.morphTargetsRelative?1:1-v;d.getUniforms().setValue(t,"morphTargetBaseInfluence",y),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function _4(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class LT extends En{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:ys,u!==ys&&u!==Ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ys&&(i=_r),i===void 0&&u===Ho&&(i=vs),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const DT=new En,NT=new LT(1,1);NT.compareFunction=mT;const IT=new _T,OT=new nk,UT=new CT,jx=[],Wx=[],$x=new Float32Array(16),Xx=new Float32Array(9),qx=new Float32Array(4);function Qo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=jx[r];if(s===void 0&&(s=new Float32Array(r),jx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Nt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Od(t,e){let n=Wx[e];n===void 0&&(n=new Int32Array(e),Wx[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function x4(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function S4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),Nt(n,e)}}function E4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),Nt(n,e)}}function M4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),Nt(n,e)}}function w4(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nt(n,e)}else{if(Dt(n,i))return;qx.set(i),t.uniformMatrix2fv(this.addr,!1,qx),Nt(n,i)}}function T4(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nt(n,e)}else{if(Dt(n,i))return;Xx.set(i),t.uniformMatrix3fv(this.addr,!1,Xx),Nt(n,i)}}function b4(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nt(n,e)}else{if(Dt(n,i))return;$x.set(i),t.uniformMatrix4fv(this.addr,!1,$x),Nt(n,i)}}function A4(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function C4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),Nt(n,e)}}function R4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),Nt(n,e)}}function P4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),Nt(n,e)}}function L4(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function D4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),Nt(n,e)}}function N4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),Nt(n,e)}}function I4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),Nt(n,e)}}function O4(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?NT:DT;n.setTexture2D(e||s,r)}function U4(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||OT,r)}function k4(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||UT,r)}function F4(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||IT,r)}function B4(t){switch(t){case 5126:return x4;case 35664:return S4;case 35665:return E4;case 35666:return M4;case 35674:return w4;case 35675:return T4;case 35676:return b4;case 5124:case 35670:return A4;case 35667:case 35671:return C4;case 35668:case 35672:return R4;case 35669:case 35673:return P4;case 5125:return L4;case 36294:return D4;case 36295:return N4;case 36296:return I4;case 35678:case 36198:case 36298:case 36306:case 35682:return O4;case 35679:case 36299:case 36307:return U4;case 35680:case 36300:case 36308:case 36293:return k4;case 36289:case 36303:case 36311:case 36292:return F4}}function z4(t,e){t.uniform1fv(this.addr,e)}function V4(t,e){const n=Qo(e,this.size,2);t.uniform2fv(this.addr,n)}function H4(t,e){const n=Qo(e,this.size,3);t.uniform3fv(this.addr,n)}function G4(t,e){const n=Qo(e,this.size,4);t.uniform4fv(this.addr,n)}function j4(t,e){const n=Qo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function W4(t,e){const n=Qo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function $4(t,e){const n=Qo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function X4(t,e){t.uniform1iv(this.addr,e)}function q4(t,e){t.uniform2iv(this.addr,e)}function Y4(t,e){t.uniform3iv(this.addr,e)}function K4(t,e){t.uniform4iv(this.addr,e)}function Z4(t,e){t.uniform1uiv(this.addr,e)}function Q4(t,e){t.uniform2uiv(this.addr,e)}function J4(t,e){t.uniform3uiv(this.addr,e)}function ez(t,e){t.uniform4uiv(this.addr,e)}function tz(t,e,n){const i=this.cache,r=e.length,s=Od(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||DT,s[o])}function nz(t,e,n){const i=this.cache,r=e.length,s=Od(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||OT,s[o])}function iz(t,e,n){const i=this.cache,r=e.length,s=Od(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||UT,s[o])}function rz(t,e,n){const i=this.cache,r=e.length,s=Od(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||IT,s[o])}function sz(t){switch(t){case 5126:return z4;case 35664:return V4;case 35665:return H4;case 35666:return G4;case 35674:return j4;case 35675:return W4;case 35676:return $4;case 5124:case 35670:return X4;case 35667:case 35671:return q4;case 35668:case 35672:return Y4;case 35669:case 35673:return K4;case 5125:return Z4;case 36294:return Q4;case 36295:return J4;case 36296:return ez;case 35678:case 36198:case 36298:case 36306:case 35682:return tz;case 35679:case 36299:case 36307:return nz;case 35680:case 36300:case 36308:case 36293:return iz;case 36289:case 36303:case 36311:case 36292:return rz}}class oz{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=B4(n.type)}}class az{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=sz(n.type)}}class lz{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const vh=/(\w+)(\])?(\[|\.)?/g;function Yx(t,e){t.seq.push(e),t.map[e.id]=e}function cz(t,e,n){const i=t.name,r=i.length;for(vh.lastIndex=0;;){const s=vh.exec(i),o=vh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Yx(n,c===void 0?new oz(a,t,e):new az(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new lz(a),Yx(n,d)),n=d}}}class eu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);cz(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Kx(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const uz=37297;let dz=0;function fz(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function hz(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===ju&&n===Gu?i="LinearDisplayP3ToLinearSRGB":e===Gu&&n===ju&&(i="LinearSRGBToLinearDisplayP3"),t){case Qi:case Ld:return[i,"LinearTransferOETF"];case jt:case o0:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Zx(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+fz(t.getShaderSource(e),o)}else return r}function pz(t,e){const n=hz(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function mz(t,e){let n;switch(e){case TU:n="Linear";break;case bU:n="Reinhard";break;case AU:n="OptimizedCineon";break;case CU:n="ACESFilmic";break;case PU:n="AgX";break;case RU:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function gz(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(yo).join(`
`)}function vz(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function yz(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function _z(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function yo(t){return t!==""}function Qx(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jx(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xz=/^[ \t]*#include +<([\w\d./]+)>/gm;function om(t){return t.replace(xz,Ez)}const Sz=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ez(t,e){let n=ke[e];if(n===void 0){const i=Sz.get(e);if(i!==void 0)n=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return om(n)}const Mz=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eS(t){return t.replace(Mz,wz)}function wz(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function tS(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;return t.isWebGL2&&(e+=`precision ${t.precision} sampler3D;
		precision ${t.precision} sampler2DArray;
		precision ${t.precision} sampler2DShadow;
		precision ${t.precision} samplerCubeShadow;
		precision ${t.precision} sampler2DArrayShadow;
		precision ${t.precision} isampler2D;
		precision ${t.precision} isampler3D;
		precision ${t.precision} isamplerCube;
		precision ${t.precision} isampler2DArray;
		precision ${t.precision} usampler2D;
		precision ${t.precision} usampler3D;
		precision ${t.precision} usamplerCube;
		precision ${t.precision} usampler2DArray;
		`),t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tz(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===rT?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===JO?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function bz(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case zo:case Vo:e="ENVMAP_TYPE_CUBE";break;case Pd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Az(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Vo:e="ENVMAP_MODE_REFRACTION";break}return e}function Cz(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case sT:e="ENVMAP_BLENDING_MULTIPLY";break;case MU:e="ENVMAP_BLENDING_MIX";break;case wU:e="ENVMAP_BLENDING_ADD";break}return e}function Rz(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Pz(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Tz(n),c=bz(n),u=Az(n),d=Cz(n),f=Rz(n),p=n.isWebGL2?"":gz(n),g=vz(n),_=yz(s),m=r.createProgram();let h,v,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(yo).join(`
`),h.length>0&&(h+=`
`),v=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(yo).join(`
`),v.length>0&&(v+=`
`)):(h=[tS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),v=[p,tS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Rr?"#define TONE_MAPPING":"",n.toneMapping!==Rr?ke.tonemapping_pars_fragment:"",n.toneMapping!==Rr?mz("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,pz("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(yo).join(`
`)),o=om(o),o=Qx(o,n),o=Jx(o,n),a=om(a),a=Qx(a,n),a=Jx(a,n),o=eS(o),a=eS(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,h=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===vx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const x=y+h+o,T=y+v+a,w=Kx(r,r.VERTEX_SHADER,x),b=Kx(r,r.FRAGMENT_SHADER,T);r.attachShader(m,w),r.attachShader(m,b),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function L(q){if(t.debug.checkShaderErrors){const Z=r.getProgramInfoLog(m).trim(),N=r.getShaderInfoLog(w).trim(),X=r.getShaderInfoLog(b).trim();let W=!0,Y=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(W=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,w,b);else{const D=Zx(r,w,"vertex"),U=Zx(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+Z+`
`+D+`
`+U)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(N===""||X==="")&&(Y=!1);Y&&(q.diagnostics={runnable:W,programLog:Z,vertexShader:{log:N,prefix:h},fragmentShader:{log:X,prefix:v}})}r.deleteShader(w),r.deleteShader(b),$=new eu(r,m),S=_z(r,m)}let $;this.getUniforms=function(){return $===void 0&&L(this),$};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(m,uz)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=dz++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=b,this}let Lz=0;class Dz{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Nz(e),n.set(e,i)),i}}class Nz{constructor(e){this.id=Lz++,this.code=e,this.usedTimes=0}}function Iz(t,e,n,i,r,s,o){const a=new ST,l=new Dz,c=new Set,u=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,p=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return c.add(S),S===0?"uv":`uv${S}`}function h(S,R,q,Z,N){const X=Z.fog,W=N.geometry,Y=S.isMeshStandardMaterial?Z.environment:null,D=(S.isMeshStandardMaterial?n:e).get(S.envMap||Y),U=D&&D.mapping===Pd?D.image.height:null,B=_[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const K=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ne=K!==void 0?K.length:0;let Te=0;W.morphAttributes.position!==void 0&&(Te=1),W.morphAttributes.normal!==void 0&&(Te=2),W.morphAttributes.color!==void 0&&(Te=3);let G,Q,ce,_e;if(B){const it=mi[B];G=it.vertexShader,Q=it.fragmentShader}else G=S.vertexShader,Q=S.fragmentShader,l.update(S),ce=l.getVertexShaderID(S),_e=l.getFragmentShaderID(S);const be=t.getRenderTarget(),me=N.isInstancedMesh===!0,$e=N.isBatchedMesh===!0,Ne=!!S.map,O=!!S.matcap,zt=!!D,Ee=!!S.aoMap,Pe=!!S.lightMap,xe=!!S.bumpMap,ht=!!S.normalMap,Oe=!!S.displacementMap,C=!!S.emissiveMap,M=!!S.metalnessMap,k=!!S.roughnessMap,re=S.anisotropy>0,J=S.clearcoat>0,ie=S.iridescence>0,ge=S.sheen>0,le=S.transmission>0,fe=re&&!!S.anisotropyMap,Ce=J&&!!S.clearcoatMap,Fe=J&&!!S.clearcoatNormalMap,ee=J&&!!S.clearcoatRoughnessMap,Je=ie&&!!S.iridescenceMap,He=ie&&!!S.iridescenceThicknessMap,Le=ge&&!!S.sheenColorMap,Se=ge&&!!S.sheenRoughnessMap,he=!!S.specularMap,Ue=!!S.specularColorMap,Ye=!!S.specularIntensityMap,ot=le&&!!S.transmissionMap,je=le&&!!S.thicknessMap,tt=!!S.gradientMap,P=!!S.alphaMap,se=S.alphaTest>0,oe=!!S.alphaHash,pe=!!S.extensions;let Me=Rr;S.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Me=t.toneMapping);const Ke={isWebGL2:d,shaderID:B,shaderType:S.type,shaderName:S.name,vertexShader:G,fragmentShader:Q,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:_e,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:$e,instancing:me,instancingColor:me&&N.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:be===null?t.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Qi,alphaToCoverage:!!S.alphaToCoverage,map:Ne,matcap:O,envMap:zt,envMapMode:zt&&D.mapping,envMapCubeUVHeight:U,aoMap:Ee,lightMap:Pe,bumpMap:xe,normalMap:ht,displacementMap:p&&Oe,emissiveMap:C,normalMapObjectSpace:ht&&S.normalMapType===HU,normalMapTangentSpace:ht&&S.normalMapType===VU,metalnessMap:M,roughnessMap:k,anisotropy:re,anisotropyMap:fe,clearcoat:J,clearcoatMap:Ce,clearcoatNormalMap:Fe,clearcoatRoughnessMap:ee,iridescence:ie,iridescenceMap:Je,iridescenceThicknessMap:He,sheen:ge,sheenColorMap:Le,sheenRoughnessMap:Se,specularMap:he,specularColorMap:Ue,specularIntensityMap:Ye,transmission:le,transmissionMap:ot,thicknessMap:je,gradientMap:tt,opaque:S.transparent===!1&&S.blending===bo&&S.alphaToCoverage===!1,alphaMap:P,alphaTest:se,alphaHash:oe,combine:S.combine,mapUv:Ne&&m(S.map.channel),aoMapUv:Ee&&m(S.aoMap.channel),lightMapUv:Pe&&m(S.lightMap.channel),bumpMapUv:xe&&m(S.bumpMap.channel),normalMapUv:ht&&m(S.normalMap.channel),displacementMapUv:Oe&&m(S.displacementMap.channel),emissiveMapUv:C&&m(S.emissiveMap.channel),metalnessMapUv:M&&m(S.metalnessMap.channel),roughnessMapUv:k&&m(S.roughnessMap.channel),anisotropyMapUv:fe&&m(S.anisotropyMap.channel),clearcoatMapUv:Ce&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Je&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:He&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:Se&&m(S.sheenRoughnessMap.channel),specularMapUv:he&&m(S.specularMap.channel),specularColorMapUv:Ue&&m(S.specularColorMap.channel),specularIntensityMapUv:Ye&&m(S.specularIntensityMap.channel),transmissionMapUv:ot&&m(S.transmissionMap.channel),thicknessMapUv:je&&m(S.thicknessMap.channel),alphaMapUv:P&&m(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ht||re),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(Ne||P),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Te,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&q.length>0,shadowMapType:t.shadowMap.type,toneMapping:Me,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ne&&S.map.isVideoTexture===!0&&et.getTransfer(S.map.colorSpace)===lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ui,flipSided:S.side===Sn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:pe&&S.extensions.derivatives===!0,extensionFragDepth:pe&&S.extensions.fragDepth===!0,extensionDrawBuffers:pe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:pe&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function v(S){const R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(const q in S.defines)R.push(q),R.push(S.defines[q]);return S.isRawShaderMaterial===!1&&(y(R,S),x(R,S),R.push(t.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function y(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.numLightProbes),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function x(S,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),R.alphaHash&&a.enable(18),R.batching&&a.enable(19),S.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.alphaToCoverage&&a.enable(20),S.push(a.mask)}function T(S){const R=_[S.type];let q;if(R){const Z=mi[R];q=mk.clone(Z.uniforms)}else q=S.uniforms;return q}function w(S,R){let q;for(let Z=0,N=u.length;Z<N;Z++){const X=u[Z];if(X.cacheKey===R){q=X,++q.usedTimes;break}}return q===void 0&&(q=new Pz(t,R,S,s),u.push(q)),q}function b(S){if(--S.usedTimes===0){const R=u.indexOf(S);u[R]=u[u.length-1],u.pop(),S.destroy()}}function L(S){l.remove(S)}function $(){l.dispose()}return{getParameters:h,getProgramCacheKey:v,getUniforms:T,acquireProgram:w,releaseProgram:b,releaseShaderCache:L,programs:u,dispose:$}}function Oz(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Uz(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function nS(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function iS(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,p,g,_,m){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=m),e++,h}function a(d,f,p,g,_,m){const h=o(d,f,p,g,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,f,p,g,_,m){const h=o(d,f,p,g,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||Uz),i.length>1&&i.sort(f||nS),r.length>1&&r.sort(f||nS)}function u(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function kz(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new iS,t.set(i,[o])):r>=s.length?(o=new iS,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Fz(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new Ze};break;case"SpotLight":n={position:new z,direction:new z,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function Bz(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let zz=0;function Vz(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Hz(t,e){const n=new Fz,i=Bz(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new z);const s=new z,o=new Bt,a=new Bt;function l(u,d){let f=0,p=0,g=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let _=0,m=0,h=0,v=0,y=0,x=0,T=0,w=0,b=0,L=0,$=0;u.sort(Vz);const S=d===!0?Math.PI:1;for(let q=0,Z=u.length;q<Z;q++){const N=u[q],X=N.color,W=N.intensity,Y=N.distance,D=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=X.r*W*S,p+=X.g*W*S,g+=X.b*W*S;else if(N.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(N.sh.coefficients[U],W);$++}else if(N.isDirectionalLight){const U=n.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity*S),N.castShadow){const B=N.shadow,K=i.get(N);K.shadowBias=B.bias,K.shadowNormalBias=B.normalBias,K.shadowRadius=B.radius,K.shadowMapSize=B.mapSize,r.directionalShadow[_]=K,r.directionalShadowMap[_]=D,r.directionalShadowMatrix[_]=N.shadow.matrix,x++}r.directional[_]=U,_++}else if(N.isSpotLight){const U=n.get(N);U.position.setFromMatrixPosition(N.matrixWorld),U.color.copy(X).multiplyScalar(W*S),U.distance=Y,U.coneCos=Math.cos(N.angle),U.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),U.decay=N.decay,r.spot[h]=U;const B=N.shadow;if(N.map&&(r.spotLightMap[b]=N.map,b++,B.updateMatrices(N),N.castShadow&&L++),r.spotLightMatrix[h]=B.matrix,N.castShadow){const K=i.get(N);K.shadowBias=B.bias,K.shadowNormalBias=B.normalBias,K.shadowRadius=B.radius,K.shadowMapSize=B.mapSize,r.spotShadow[h]=K,r.spotShadowMap[h]=D,w++}h++}else if(N.isRectAreaLight){const U=n.get(N);U.color.copy(X).multiplyScalar(W),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),r.rectArea[v]=U,v++}else if(N.isPointLight){const U=n.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity*S),U.distance=N.distance,U.decay=N.decay,N.castShadow){const B=N.shadow,K=i.get(N);K.shadowBias=B.bias,K.shadowNormalBias=B.normalBias,K.shadowRadius=B.radius,K.shadowMapSize=B.mapSize,K.shadowCameraNear=B.camera.near,K.shadowCameraFar=B.camera.far,r.pointShadow[m]=K,r.pointShadowMap[m]=D,r.pointShadowMatrix[m]=N.shadow.matrix,T++}r.point[m]=U,m++}else if(N.isHemisphereLight){const U=n.get(N);U.skyColor.copy(N.color).multiplyScalar(W*S),U.groundColor.copy(N.groundColor).multiplyScalar(W*S),r.hemi[y]=U,y++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=g;const R=r.hash;(R.directionalLength!==_||R.pointLength!==m||R.spotLength!==h||R.rectAreaLength!==v||R.hemiLength!==y||R.numDirectionalShadows!==x||R.numPointShadows!==T||R.numSpotShadows!==w||R.numSpotMaps!==b||R.numLightProbes!==$)&&(r.directional.length=_,r.spot.length=h,r.rectArea.length=v,r.point.length=m,r.hemi.length=y,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=w+b-L,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=$,R.directionalLength=_,R.pointLength=m,R.spotLength=h,R.rectAreaLength=v,R.hemiLength=y,R.numDirectionalShadows=x,R.numPointShadows=T,R.numSpotShadows=w,R.numSpotMaps=b,R.numLightProbes=$,r.version=zz++)}function c(u,d){let f=0,p=0,g=0,_=0,m=0;const h=d.matrixWorldInverse;for(let v=0,y=u.length;v<y;v++){const x=u[v];if(x.isDirectionalLight){const T=r.directional[f];T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),f++}else if(x.isSpotLight){const T=r.spot[g];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(h),T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),g++}else if(x.isRectAreaLight){const T=r.rectArea[_];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(h),a.identity(),o.copy(x.matrixWorld),o.premultiply(h),a.extractRotation(o),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const T=r.point[p];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(h),p++}else if(x.isHemisphereLight){const T=r.hemi[m];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:r}}function rS(t,e){const n=new Hz(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Gz(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new rS(t,e),n.set(s,[l])):o>=a.length?(l=new rS(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class jz extends Nl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BU,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wz extends Nl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $z=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xz=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qz(t,e,n){let i=new RT;const r=new qe,s=new qe,o=new Wt,a=new jz({depthPacking:zU}),l=new Wz,c={},u=n.maxTextureSize,d={[Ur]:Sn,[Sn]:Ur,[Ui]:Ui},f=new kr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:$z,fragmentShader:Xz}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new tr;g.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Vi(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rT;let h=this.type;this.render=function(w,b,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const $=t.getRenderTarget(),S=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),q=t.state;q.setBlending(Cr),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const Z=h!==Di&&this.type===Di,N=h===Di&&this.type!==Di;for(let X=0,W=w.length;X<W;X++){const Y=w[X],D=Y.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const U=D.getFrameExtents();if(r.multiply(U),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/U.x),r.x=s.x*U.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/U.y),r.y=s.y*U.y,D.mapSize.y=s.y)),D.map===null||Z===!0||N===!0){const K=this.type!==Di?{minFilter:ln,magFilter:ln}:{};D.map!==null&&D.map.dispose(),D.map=new Rs(r.x,r.y,K),D.map.texture.name=Y.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const B=D.getViewportCount();for(let K=0;K<B;K++){const ne=D.getViewport(K);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),q.viewport(o),D.updateMatrices(Y,K),i=D.getFrustum(),x(b,L,D.camera,Y,this.type)}D.isPointLightShadow!==!0&&this.type===Di&&v(D,L),D.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget($,S,R)};function v(w,b){const L=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Rs(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(b,null,L,f,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(b,null,L,p,_,null)}function y(w,b,L,$){let S=null;const R=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)S=R;else if(S=L.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const q=S.uuid,Z=b.uuid;let N=c[q];N===void 0&&(N={},c[q]=N);let X=N[Z];X===void 0&&(X=S.clone(),N[Z]=X,b.addEventListener("dispose",T)),S=X}if(S.visible=b.visible,S.wireframe=b.wireframe,$===Di?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:d[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const q=t.properties.get(S);q.light=L}return S}function x(w,b,L,$,S){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Di)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const Z=e.update(w),N=w.material;if(Array.isArray(N)){const X=Z.groups;for(let W=0,Y=X.length;W<Y;W++){const D=X[W],U=N[D.materialIndex];if(U&&U.visible){const B=y(w,U,$,S);w.onBeforeShadow(t,w,b,L,Z,B,D),t.renderBufferDirect(L,null,Z,B,w,D),w.onAfterShadow(t,w,b,L,Z,B,D)}}}else if(N.visible){const X=y(w,N,$,S);w.onBeforeShadow(t,w,b,L,Z,X,null),t.renderBufferDirect(L,null,Z,X,w,null),w.onAfterShadow(t,w,b,L,Z,X,null)}}const q=w.children;for(let Z=0,N=q.length;Z<N;Z++)x(q[Z],b,L,$,S)}function T(w){w.target.removeEventListener("dispose",T);for(const L in c){const $=c[L],S=w.target.uuid;S in $&&($[S].dispose(),delete $[S])}}}function Yz(t,e,n){const i=n.isWebGL2;function r(){let P=!1;const se=new Wt;let oe=null;const pe=new Wt(0,0,0,0);return{setMask:function(Me){oe!==Me&&!P&&(t.colorMask(Me,Me,Me,Me),oe=Me)},setLocked:function(Me){P=Me},setClear:function(Me,Ke,it,Vt,Un){Un===!0&&(Me*=Vt,Ke*=Vt,it*=Vt),se.set(Me,Ke,it,Vt),pe.equals(se)===!1&&(t.clearColor(Me,Ke,it,Vt),pe.copy(se))},reset:function(){P=!1,oe=null,pe.set(-1,0,0,0)}}}function s(){let P=!1,se=null,oe=null,pe=null;return{setTest:function(Me){Me?me(t.DEPTH_TEST):$e(t.DEPTH_TEST)},setMask:function(Me){se!==Me&&!P&&(t.depthMask(Me),se=Me)},setFunc:function(Me){if(oe!==Me){switch(Me){case gU:t.depthFunc(t.NEVER);break;case vU:t.depthFunc(t.ALWAYS);break;case yU:t.depthFunc(t.LESS);break;case Vu:t.depthFunc(t.LEQUAL);break;case _U:t.depthFunc(t.EQUAL);break;case xU:t.depthFunc(t.GEQUAL);break;case SU:t.depthFunc(t.GREATER);break;case EU:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}oe=Me}},setLocked:function(Me){P=Me},setClear:function(Me){pe!==Me&&(t.clearDepth(Me),pe=Me)},reset:function(){P=!1,se=null,oe=null,pe=null}}}function o(){let P=!1,se=null,oe=null,pe=null,Me=null,Ke=null,it=null,Vt=null,Un=null;return{setTest:function(rt){P||(rt?me(t.STENCIL_TEST):$e(t.STENCIL_TEST))},setMask:function(rt){se!==rt&&!P&&(t.stencilMask(rt),se=rt)},setFunc:function(rt,sn,di){(oe!==rt||pe!==sn||Me!==di)&&(t.stencilFunc(rt,sn,di),oe=rt,pe=sn,Me=di)},setOp:function(rt,sn,di){(Ke!==rt||it!==sn||Vt!==di)&&(t.stencilOp(rt,sn,di),Ke=rt,it=sn,Vt=di)},setLocked:function(rt){P=rt},setClear:function(rt){Un!==rt&&(t.clearStencil(rt),Un=rt)},reset:function(){P=!1,se=null,oe=null,pe=null,Me=null,Ke=null,it=null,Vt=null,Un=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,d=new WeakMap;let f={},p={},g=new WeakMap,_=[],m=null,h=!1,v=null,y=null,x=null,T=null,w=null,b=null,L=null,$=new Ze(0,0,0),S=0,R=!1,q=null,Z=null,N=null,X=null,W=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,U=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(B)[1]),D=U>=1):B.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),D=U>=2);let K=null,ne={};const Te=t.getParameter(t.SCISSOR_BOX),G=t.getParameter(t.VIEWPORT),Q=new Wt().fromArray(Te),ce=new Wt().fromArray(G);function _e(P,se,oe,pe){const Me=new Uint8Array(4),Ke=t.createTexture();t.bindTexture(P,Ke),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let it=0;it<oe;it++)i&&(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)?t.texImage3D(se,0,t.RGBA,1,1,pe,0,t.RGBA,t.UNSIGNED_BYTE,Me):t.texImage2D(se+it,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Me);return Ke}const be={};be[t.TEXTURE_2D]=_e(t.TEXTURE_2D,t.TEXTURE_2D,1),be[t.TEXTURE_CUBE_MAP]=_e(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(be[t.TEXTURE_2D_ARRAY]=_e(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),be[t.TEXTURE_3D]=_e(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),me(t.DEPTH_TEST),l.setFunc(Vu),Oe(!1),C(F_),me(t.CULL_FACE),xe(Cr);function me(P){f[P]!==!0&&(t.enable(P),f[P]=!0)}function $e(P){f[P]!==!1&&(t.disable(P),f[P]=!1)}function Ne(P,se){return p[P]!==se?(t.bindFramebuffer(P,se),p[P]=se,i&&(P===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=se),P===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=se)),!0):!1}function O(P,se){let oe=_,pe=!1;if(P)if(oe=g.get(se),oe===void 0&&(oe=[],g.set(se,oe)),P.isWebGLMultipleRenderTargets){const Me=P.texture;if(oe.length!==Me.length||oe[0]!==t.COLOR_ATTACHMENT0){for(let Ke=0,it=Me.length;Ke<it;Ke++)oe[Ke]=t.COLOR_ATTACHMENT0+Ke;oe.length=Me.length,pe=!0}}else oe[0]!==t.COLOR_ATTACHMENT0&&(oe[0]=t.COLOR_ATTACHMENT0,pe=!0);else oe[0]!==t.BACK&&(oe[0]=t.BACK,pe=!0);pe&&(n.isWebGL2?t.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function zt(P){return m!==P?(t.useProgram(P),m=P,!0):!1}const Ee={[os]:t.FUNC_ADD,[tU]:t.FUNC_SUBTRACT,[nU]:t.FUNC_REVERSE_SUBTRACT};if(i)Ee[V_]=t.MIN,Ee[H_]=t.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(Ee[V_]=P.MIN_EXT,Ee[H_]=P.MAX_EXT)}const Pe={[iU]:t.ZERO,[rU]:t.ONE,[sU]:t.SRC_COLOR,[Zp]:t.SRC_ALPHA,[dU]:t.SRC_ALPHA_SATURATE,[cU]:t.DST_COLOR,[aU]:t.DST_ALPHA,[oU]:t.ONE_MINUS_SRC_COLOR,[Qp]:t.ONE_MINUS_SRC_ALPHA,[uU]:t.ONE_MINUS_DST_COLOR,[lU]:t.ONE_MINUS_DST_ALPHA,[fU]:t.CONSTANT_COLOR,[hU]:t.ONE_MINUS_CONSTANT_COLOR,[pU]:t.CONSTANT_ALPHA,[mU]:t.ONE_MINUS_CONSTANT_ALPHA};function xe(P,se,oe,pe,Me,Ke,it,Vt,Un,rt){if(P===Cr){h===!0&&($e(t.BLEND),h=!1);return}if(h===!1&&(me(t.BLEND),h=!0),P!==eU){if(P!==v||rt!==R){if((y!==os||w!==os)&&(t.blendEquation(t.FUNC_ADD),y=os,w=os),rt)switch(P){case bo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Kp:t.blendFunc(t.ONE,t.ONE);break;case B_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case z_:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case bo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Kp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case B_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case z_:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}x=null,T=null,b=null,L=null,$.set(0,0,0),S=0,v=P,R=rt}return}Me=Me||se,Ke=Ke||oe,it=it||pe,(se!==y||Me!==w)&&(t.blendEquationSeparate(Ee[se],Ee[Me]),y=se,w=Me),(oe!==x||pe!==T||Ke!==b||it!==L)&&(t.blendFuncSeparate(Pe[oe],Pe[pe],Pe[Ke],Pe[it]),x=oe,T=pe,b=Ke,L=it),(Vt.equals($)===!1||Un!==S)&&(t.blendColor(Vt.r,Vt.g,Vt.b,Un),$.copy(Vt),S=Un),v=P,R=!1}function ht(P,se){P.side===Ui?$e(t.CULL_FACE):me(t.CULL_FACE);let oe=P.side===Sn;se&&(oe=!oe),Oe(oe),P.blending===bo&&P.transparent===!1?xe(Cr):xe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const pe=P.stencilWrite;c.setTest(pe),pe&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),k(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?me(t.SAMPLE_ALPHA_TO_COVERAGE):$e(t.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(P){q!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),q=P)}function C(P){P!==ZO?(me(t.CULL_FACE),P!==Z&&(P===F_?t.cullFace(t.BACK):P===QO?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):$e(t.CULL_FACE),Z=P}function M(P){P!==N&&(D&&t.lineWidth(P),N=P)}function k(P,se,oe){P?(me(t.POLYGON_OFFSET_FILL),(X!==se||W!==oe)&&(t.polygonOffset(se,oe),X=se,W=oe)):$e(t.POLYGON_OFFSET_FILL)}function re(P){P?me(t.SCISSOR_TEST):$e(t.SCISSOR_TEST)}function J(P){P===void 0&&(P=t.TEXTURE0+Y-1),K!==P&&(t.activeTexture(P),K=P)}function ie(P,se,oe){oe===void 0&&(K===null?oe=t.TEXTURE0+Y-1:oe=K);let pe=ne[oe];pe===void 0&&(pe={type:void 0,texture:void 0},ne[oe]=pe),(pe.type!==P||pe.texture!==se)&&(K!==oe&&(t.activeTexture(oe),K=oe),t.bindTexture(P,se||be[P]),pe.type=P,pe.texture=se)}function ge(){const P=ne[K];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function le(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ce(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Fe(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Je(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function He(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Le(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ue(P){Q.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),Q.copy(P))}function Ye(P){ce.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),ce.copy(P))}function ot(P,se){let oe=d.get(se);oe===void 0&&(oe=new WeakMap,d.set(se,oe));let pe=oe.get(P);pe===void 0&&(pe=t.getUniformBlockIndex(se,P.name),oe.set(P,pe))}function je(P,se){const pe=d.get(se).get(P);u.get(se)!==pe&&(t.uniformBlockBinding(se,pe,P.__bindingPointIndex),u.set(se,pe))}function tt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},K=null,ne={},p={},g=new WeakMap,_=[],m=null,h=!1,v=null,y=null,x=null,T=null,w=null,b=null,L=null,$=new Ze(0,0,0),S=0,R=!1,q=null,Z=null,N=null,X=null,W=null,Q.set(0,0,t.canvas.width,t.canvas.height),ce.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:me,disable:$e,bindFramebuffer:Ne,drawBuffers:O,useProgram:zt,setBlending:xe,setMaterial:ht,setFlipSided:Oe,setCullFace:C,setLineWidth:M,setPolygonOffset:k,setScissorTest:re,activeTexture:J,bindTexture:ie,unbindTexture:ge,compressedTexImage2D:le,compressedTexImage3D:fe,texImage2D:Se,texImage3D:he,updateUBOMapping:ot,uniformBlockBinding:je,texStorage2D:He,texStorage3D:Le,texSubImage2D:Ce,texSubImage3D:Fe,compressedTexSubImage2D:ee,compressedTexSubImage3D:Je,scissor:Ue,viewport:Ye,reset:tt}}function Kz(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return p?new OffscreenCanvas(C,M):$u("canvas")}function _(C,M,k,re){let J=1;if((C.width>re||C.height>re)&&(J=re/Math.max(C.width,C.height)),J<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ie=M?sm:Math.floor,ge=ie(J*C.width),le=ie(J*C.height);d===void 0&&(d=g(ge,le));const fe=k?g(ge,le):d;return fe.width=ge,fe.height=le,fe.getContext("2d").drawImage(C,0,0,ge,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+ge+"x"+le+")."),fe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return yx(C.width)&&yx(C.height)}function h(C){return a?!1:C.wrapS!==ri||C.wrapT!==ri||C.minFilter!==ln&&C.minFilter!==pn}function v(C,M){return C.generateMipmaps&&M&&C.minFilter!==ln&&C.minFilter!==pn}function y(C){t.generateMipmap(C)}function x(C,M,k,re,J=!1){if(a===!1)return M;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ie=M;if(M===t.RED&&(k===t.FLOAT&&(ie=t.R32F),k===t.HALF_FLOAT&&(ie=t.R16F),k===t.UNSIGNED_BYTE&&(ie=t.R8)),M===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(ie=t.R8UI),k===t.UNSIGNED_SHORT&&(ie=t.R16UI),k===t.UNSIGNED_INT&&(ie=t.R32UI),k===t.BYTE&&(ie=t.R8I),k===t.SHORT&&(ie=t.R16I),k===t.INT&&(ie=t.R32I)),M===t.RG&&(k===t.FLOAT&&(ie=t.RG32F),k===t.HALF_FLOAT&&(ie=t.RG16F),k===t.UNSIGNED_BYTE&&(ie=t.RG8)),M===t.RGBA){const ge=J?Hu:et.getTransfer(re);k===t.FLOAT&&(ie=t.RGBA32F),k===t.HALF_FLOAT&&(ie=t.RGBA16F),k===t.UNSIGNED_BYTE&&(ie=ge===lt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function T(C,M,k){return v(C,k)===!0||C.isFramebufferTexture&&C.minFilter!==ln&&C.minFilter!==pn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function w(C){return C===ln||C===G_||C===da?t.NEAREST:t.LINEAR}function b(C){const M=C.target;M.removeEventListener("dispose",b),$(M),M.isVideoTexture&&u.delete(M)}function L(C){const M=C.target;M.removeEventListener("dispose",L),R(M)}function $(C){const M=i.get(C);if(M.__webglInit===void 0)return;const k=C.source,re=f.get(k);if(re){const J=re[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(C),Object.keys(re).length===0&&f.delete(k)}i.remove(C)}function S(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const k=C.source,re=f.get(k);delete re[M.__cacheKey],o.memory.textures--}function R(C){const M=C.texture,k=i.get(C),re=i.get(M);if(re.__webglTexture!==void 0&&(t.deleteTexture(re.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(k.__webglFramebuffer[J]))for(let ie=0;ie<k.__webglFramebuffer[J].length;ie++)t.deleteFramebuffer(k.__webglFramebuffer[J][ie]);else t.deleteFramebuffer(k.__webglFramebuffer[J]);k.__webglDepthbuffer&&t.deleteRenderbuffer(k.__webglDepthbuffer[J])}else{if(Array.isArray(k.__webglFramebuffer))for(let J=0;J<k.__webglFramebuffer.length;J++)t.deleteFramebuffer(k.__webglFramebuffer[J]);else t.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&t.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&t.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let J=0;J<k.__webglColorRenderbuffer.length;J++)k.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(k.__webglColorRenderbuffer[J]);k.__webglDepthRenderbuffer&&t.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let J=0,ie=M.length;J<ie;J++){const ge=i.get(M[J]);ge.__webglTexture&&(t.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(M[J])}i.remove(M),i.remove(C)}let q=0;function Z(){q=0}function N(){const C=q;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),q+=1,C}function X(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function W(C,M){const k=i.get(C);if(C.isVideoTexture&&ht(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const re=C.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(k,C,M);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+M)}function Y(C,M){const k=i.get(C);if(C.version>0&&k.__version!==C.version){Q(k,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+M)}function D(C,M){const k=i.get(C);if(C.version>0&&k.__version!==C.version){Q(k,C,M);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+M)}function U(C,M){const k=i.get(C);if(C.version>0&&k.__version!==C.version){ce(k,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+M)}const B={[tm]:t.REPEAT,[ri]:t.CLAMP_TO_EDGE,[nm]:t.MIRRORED_REPEAT},K={[ln]:t.NEAREST,[G_]:t.NEAREST_MIPMAP_NEAREST,[da]:t.NEAREST_MIPMAP_LINEAR,[pn]:t.LINEAR,[Hf]:t.LINEAR_MIPMAP_NEAREST,[fs]:t.LINEAR_MIPMAP_LINEAR},ne={[GU]:t.NEVER,[YU]:t.ALWAYS,[jU]:t.LESS,[mT]:t.LEQUAL,[WU]:t.EQUAL,[qU]:t.GEQUAL,[$U]:t.GREATER,[XU]:t.NOTEQUAL};function Te(C,M,k){if(M.type===ki&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===pn||M.magFilter===Hf||M.magFilter===da||M.magFilter===fs||M.minFilter===pn||M.minFilter===Hf||M.minFilter===da||M.minFilter===fs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),k?(t.texParameteri(C,t.TEXTURE_WRAP_S,B[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,B[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,B[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,K[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,K[M.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==ri||M.wrapT!==ri)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,w(M.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,w(M.minFilter)),M.minFilter!==ln&&M.minFilter!==pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,ne[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===ln||M.minFilter!==da&&M.minFilter!==fs||M.type===ki&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===cl&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(C,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function G(C,M){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",b));const re=M.source;let J=f.get(re);J===void 0&&(J={},f.set(re,J));const ie=X(M);if(ie!==C.__cacheKey){J[ie]===void 0&&(J[ie]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),J[ie].usedTimes++;const ge=J[C.__cacheKey];ge!==void 0&&(J[C.__cacheKey].usedTimes--,ge.usedTimes===0&&S(M)),C.__cacheKey=ie,C.__webglTexture=J[ie].texture}return k}function Q(C,M,k){let re=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=t.TEXTURE_3D);const J=G(C,M),ie=M.source;n.bindTexture(re,C.__webglTexture,t.TEXTURE0+k);const ge=i.get(ie);if(ie.version!==ge.__version||J===!0){n.activeTexture(t.TEXTURE0+k);const le=et.getPrimaries(et.workingColorSpace),fe=M.colorSpace===jn?null:et.getPrimaries(M.colorSpace),Ce=M.colorSpace===jn||le===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Fe=h(M)&&m(M.image)===!1;let ee=_(M.image,Fe,!1,r.maxTextureSize);ee=Oe(M,ee);const Je=m(ee)||a,He=s.convert(M.format,M.colorSpace);let Le=s.convert(M.type),Se=x(M.internalFormat,He,Le,M.colorSpace,M.isVideoTexture);Te(re,M,Je);let he;const Ue=M.mipmaps,Ye=a&&M.isVideoTexture!==!0&&Se!==hT,ot=ge.__version===void 0||J===!0,je=ie.dataReady,tt=T(M,ee,Je);if(M.isDepthTexture)Se=t.DEPTH_COMPONENT,a?M.type===ki?Se=t.DEPTH_COMPONENT32F:M.type===_r?Se=t.DEPTH_COMPONENT24:M.type===vs?Se=t.DEPTH24_STENCIL8:Se=t.DEPTH_COMPONENT16:M.type===ki&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===ys&&Se===t.DEPTH_COMPONENT&&M.type!==s0&&M.type!==_r&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=_r,Le=s.convert(M.type)),M.format===Ho&&Se===t.DEPTH_COMPONENT&&(Se=t.DEPTH_STENCIL,M.type!==vs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=vs,Le=s.convert(M.type))),ot&&(Ye?n.texStorage2D(t.TEXTURE_2D,1,Se,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,Se,ee.width,ee.height,0,He,Le,null));else if(M.isDataTexture)if(Ue.length>0&&Je){Ye&&ot&&n.texStorage2D(t.TEXTURE_2D,tt,Se,Ue[0].width,Ue[0].height);for(let P=0,se=Ue.length;P<se;P++)he=Ue[P],Ye?je&&n.texSubImage2D(t.TEXTURE_2D,P,0,0,he.width,he.height,He,Le,he.data):n.texImage2D(t.TEXTURE_2D,P,Se,he.width,he.height,0,He,Le,he.data);M.generateMipmaps=!1}else Ye?(ot&&n.texStorage2D(t.TEXTURE_2D,tt,Se,ee.width,ee.height),je&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ee.width,ee.height,He,Le,ee.data)):n.texImage2D(t.TEXTURE_2D,0,Se,ee.width,ee.height,0,He,Le,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ye&&ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,tt,Se,Ue[0].width,Ue[0].height,ee.depth);for(let P=0,se=Ue.length;P<se;P++)he=Ue[P],M.format!==si?He!==null?Ye?je&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,P,0,0,0,he.width,he.height,ee.depth,He,he.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,P,Se,he.width,he.height,ee.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?je&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,P,0,0,0,he.width,he.height,ee.depth,He,Le,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,P,Se,he.width,he.height,ee.depth,0,He,Le,he.data)}else{Ye&&ot&&n.texStorage2D(t.TEXTURE_2D,tt,Se,Ue[0].width,Ue[0].height);for(let P=0,se=Ue.length;P<se;P++)he=Ue[P],M.format!==si?He!==null?Ye?je&&n.compressedTexSubImage2D(t.TEXTURE_2D,P,0,0,he.width,he.height,He,he.data):n.compressedTexImage2D(t.TEXTURE_2D,P,Se,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?je&&n.texSubImage2D(t.TEXTURE_2D,P,0,0,he.width,he.height,He,Le,he.data):n.texImage2D(t.TEXTURE_2D,P,Se,he.width,he.height,0,He,Le,he.data)}else if(M.isDataArrayTexture)Ye?(ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,tt,Se,ee.width,ee.height,ee.depth),je&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,He,Le,ee.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Se,ee.width,ee.height,ee.depth,0,He,Le,ee.data);else if(M.isData3DTexture)Ye?(ot&&n.texStorage3D(t.TEXTURE_3D,tt,Se,ee.width,ee.height,ee.depth),je&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,He,Le,ee.data)):n.texImage3D(t.TEXTURE_3D,0,Se,ee.width,ee.height,ee.depth,0,He,Le,ee.data);else if(M.isFramebufferTexture){if(ot)if(Ye)n.texStorage2D(t.TEXTURE_2D,tt,Se,ee.width,ee.height);else{let P=ee.width,se=ee.height;for(let oe=0;oe<tt;oe++)n.texImage2D(t.TEXTURE_2D,oe,Se,P,se,0,He,Le,null),P>>=1,se>>=1}}else if(Ue.length>0&&Je){Ye&&ot&&n.texStorage2D(t.TEXTURE_2D,tt,Se,Ue[0].width,Ue[0].height);for(let P=0,se=Ue.length;P<se;P++)he=Ue[P],Ye?je&&n.texSubImage2D(t.TEXTURE_2D,P,0,0,He,Le,he):n.texImage2D(t.TEXTURE_2D,P,Se,He,Le,he);M.generateMipmaps=!1}else Ye?(ot&&n.texStorage2D(t.TEXTURE_2D,tt,Se,ee.width,ee.height),je&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,He,Le,ee)):n.texImage2D(t.TEXTURE_2D,0,Se,He,Le,ee);v(M,Je)&&y(re),ge.__version=ie.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ce(C,M,k){if(M.image.length!==6)return;const re=G(C,M),J=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+k);const ie=i.get(J);if(J.version!==ie.__version||re===!0){n.activeTexture(t.TEXTURE0+k);const ge=et.getPrimaries(et.workingColorSpace),le=M.colorSpace===jn?null:et.getPrimaries(M.colorSpace),fe=M.colorSpace===jn||ge===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ce=M.isCompressedTexture||M.image[0].isCompressedTexture,Fe=M.image[0]&&M.image[0].isDataTexture,ee=[];for(let P=0;P<6;P++)!Ce&&!Fe?ee[P]=_(M.image[P],!1,!0,r.maxCubemapSize):ee[P]=Fe?M.image[P].image:M.image[P],ee[P]=Oe(M,ee[P]);const Je=ee[0],He=m(Je)||a,Le=s.convert(M.format,M.colorSpace),Se=s.convert(M.type),he=x(M.internalFormat,Le,Se,M.colorSpace),Ue=a&&M.isVideoTexture!==!0,Ye=ie.__version===void 0||re===!0,ot=J.dataReady;let je=T(M,Je,He);Te(t.TEXTURE_CUBE_MAP,M,He);let tt;if(Ce){Ue&&Ye&&n.texStorage2D(t.TEXTURE_CUBE_MAP,je,he,Je.width,Je.height);for(let P=0;P<6;P++){tt=ee[P].mipmaps;for(let se=0;se<tt.length;se++){const oe=tt[se];M.format!==si?Le!==null?Ue?ot&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,se,0,0,oe.width,oe.height,Le,oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,se,he,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?ot&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,se,0,0,oe.width,oe.height,Le,Se,oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,se,he,oe.width,oe.height,0,Le,Se,oe.data)}}}else{tt=M.mipmaps,Ue&&Ye&&(tt.length>0&&je++,n.texStorage2D(t.TEXTURE_CUBE_MAP,je,he,ee[0].width,ee[0].height));for(let P=0;P<6;P++)if(Fe){Ue?ot&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,ee[P].width,ee[P].height,Le,Se,ee[P].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,he,ee[P].width,ee[P].height,0,Le,Se,ee[P].data);for(let se=0;se<tt.length;se++){const pe=tt[se].image[P].image;Ue?ot&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,se+1,0,0,pe.width,pe.height,Le,Se,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,se+1,he,pe.width,pe.height,0,Le,Se,pe.data)}}else{Ue?ot&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,Le,Se,ee[P]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,he,Le,Se,ee[P]);for(let se=0;se<tt.length;se++){const oe=tt[se];Ue?ot&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,se+1,0,0,Le,Se,oe.image[P]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,se+1,he,Le,Se,oe.image[P])}}}v(M,He)&&y(t.TEXTURE_CUBE_MAP),ie.__version=J.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function _e(C,M,k,re,J,ie){const ge=s.convert(k.format,k.colorSpace),le=s.convert(k.type),fe=x(k.internalFormat,ge,le,k.colorSpace);if(!i.get(M).__hasExternalTextures){const Fe=Math.max(1,M.width>>ie),ee=Math.max(1,M.height>>ie);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,ie,fe,Fe,ee,M.depth,0,ge,le,null):n.texImage2D(J,ie,fe,Fe,ee,0,ge,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),xe(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,J,i.get(k).__webglTexture,0,Pe(M)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,J,i.get(k).__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(C,M,k){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let re=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(k||xe(M)){const J=M.depthTexture;J&&J.isDepthTexture&&(J.type===ki?re=t.DEPTH_COMPONENT32F:J.type===_r&&(re=t.DEPTH_COMPONENT24));const ie=Pe(M);xe(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,re,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,re,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,re,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){const re=Pe(M);k&&xe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,M.width,M.height):xe(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const re=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let J=0;J<re.length;J++){const ie=re[J],ge=s.convert(ie.format,ie.colorSpace),le=s.convert(ie.type),fe=x(ie.internalFormat,ge,le,ie.colorSpace),Ce=Pe(M);k&&xe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,fe,M.width,M.height):xe(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,fe,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,fe,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function me(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const re=i.get(M.depthTexture).__webglTexture,J=Pe(M);if(M.depthTexture.format===ys)xe(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(M.depthTexture.format===Ho)xe(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function $e(C){const M=i.get(C),k=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");me(M.__webglFramebuffer,C)}else if(k){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]=t.createRenderbuffer(),be(M.__webglDepthbuffer[re],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),be(M.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(C,M,k){const re=i.get(C);M!==void 0&&_e(re.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&$e(C)}function O(C){const M=C.texture,k=i.get(C),re=i.get(M);C.addEventListener("dispose",L),C.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=M.version,o.memory.textures++);const J=C.isWebGLCubeRenderTarget===!0,ie=C.isWebGLMultipleRenderTargets===!0,ge=m(C)||a;if(J){k.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[le]=[];for(let fe=0;fe<M.mipmaps.length;fe++)k.__webglFramebuffer[le][fe]=t.createFramebuffer()}else k.__webglFramebuffer[le]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let le=0;le<M.mipmaps.length;le++)k.__webglFramebuffer[le]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(ie)if(r.drawBuffers){const le=C.texture;for(let fe=0,Ce=le.length;fe<Ce;fe++){const Fe=i.get(le[fe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&xe(C)===!1){const le=ie?M:[M];k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let fe=0;fe<le.length;fe++){const Ce=le[fe];k.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[fe]);const Fe=s.convert(Ce.format,Ce.colorSpace),ee=s.convert(Ce.type),Je=x(Ce.internalFormat,Fe,ee,Ce.colorSpace,C.isXRRenderTarget===!0),He=Pe(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,He,Je,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,k.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),be(k.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),Te(t.TEXTURE_CUBE_MAP,M,ge);for(let le=0;le<6;le++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)_e(k.__webglFramebuffer[le][fe],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,fe);else _e(k.__webglFramebuffer[le],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);v(M,ge)&&y(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ie){const le=C.texture;for(let fe=0,Ce=le.length;fe<Ce;fe++){const Fe=le[fe],ee=i.get(Fe);n.bindTexture(t.TEXTURE_2D,ee.__webglTexture),Te(t.TEXTURE_2D,Fe,ge),_e(k.__webglFramebuffer,C,Fe,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),v(Fe,ge)&&y(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?le=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(le,re.__webglTexture),Te(le,M,ge),a&&M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)_e(k.__webglFramebuffer[fe],C,M,t.COLOR_ATTACHMENT0,le,fe);else _e(k.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,le,0);v(M,ge)&&y(le),n.unbindTexture()}C.depthBuffer&&$e(C)}function zt(C){const M=m(C)||a,k=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let re=0,J=k.length;re<J;re++){const ie=k[re];if(v(ie,M)){const ge=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,le=i.get(ie).__webglTexture;n.bindTexture(ge,le),y(ge),n.unbindTexture()}}}function Ee(C){if(a&&C.samples>0&&xe(C)===!1){const M=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],k=C.width,re=C.height;let J=t.COLOR_BUFFER_BIT;const ie=[],ge=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(C),fe=C.isWebGLMultipleRenderTargets===!0;if(fe)for(let Ce=0;Ce<M.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Ce=0;Ce<M.length;Ce++){ie.push(t.COLOR_ATTACHMENT0+Ce),C.depthBuffer&&ie.push(ge);const Fe=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Fe===!1&&(C.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),fe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[Ce]),Fe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ge]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ge])),fe){const ee=i.get(M[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,k,re,0,0,k,re,J,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ie)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let Ce=0;Ce<M.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,le.__webglColorRenderbuffer[Ce]);const Fe=i.get(M[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Pe(C){return Math.min(r.maxSamples,C.samples)}function xe(C){const M=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ht(C){const M=o.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function Oe(C,M){const k=C.colorSpace,re=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===im||k!==Qi&&k!==jn&&(et.getTransfer(k)===lt?a===!1?e.has("EXT_sRGB")===!0&&re===si?(C.format=im,C.minFilter=pn,C.generateMipmaps=!1):M=vT.sRGBToLinear(M):(re!==si||J!==Pr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}this.allocateTextureUnit=N,this.resetTextureUnits=Z,this.setTexture2D=W,this.setTexture2DArray=Y,this.setTexture3D=D,this.setTextureCube=U,this.rebindTextures=Ne,this.setupRenderTarget=O,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=xe}function Zz(t,e,n){const i=n.isWebGL2;function r(s,o=jn){let a;const l=et.getTransfer(o);if(s===Pr)return t.UNSIGNED_BYTE;if(s===lT)return t.UNSIGNED_SHORT_4_4_4_4;if(s===cT)return t.UNSIGNED_SHORT_5_5_5_1;if(s===LU)return t.BYTE;if(s===DU)return t.SHORT;if(s===s0)return t.UNSIGNED_SHORT;if(s===aT)return t.INT;if(s===_r)return t.UNSIGNED_INT;if(s===ki)return t.FLOAT;if(s===cl)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===NU)return t.ALPHA;if(s===si)return t.RGBA;if(s===IU)return t.LUMINANCE;if(s===OU)return t.LUMINANCE_ALPHA;if(s===ys)return t.DEPTH_COMPONENT;if(s===Ho)return t.DEPTH_STENCIL;if(s===im)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===UU)return t.RED;if(s===uT)return t.RED_INTEGER;if(s===kU)return t.RG;if(s===dT)return t.RG_INTEGER;if(s===fT)return t.RGBA_INTEGER;if(s===Gf||s===jf||s===Wf||s===$f)if(l===lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Gf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Wf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===$f)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Gf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Wf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===$f)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===j_||s===W_||s===$_||s===X_)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===j_)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===W_)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===$_)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===X_)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hT)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===q_||s===Y_)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===q_)return l===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Y_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===K_||s===Z_||s===Q_||s===J_||s===ex||s===tx||s===nx||s===ix||s===rx||s===sx||s===ox||s===ax||s===lx||s===cx)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===K_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Z_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Q_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===J_)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ex)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===tx)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===nx)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ix)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===rx)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sx)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ox)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ax)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===lx)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===cx)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Xf||s===ux||s===dx)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Xf)return l===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ux)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===dx)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===FU||s===fx||s===hx||s===px)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Xf)return a.COMPRESSED_RED_RGTC1_EXT;if(s===fx)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===hx)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===px)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===vs?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class Qz extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Nc extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jz={type:"move"};class yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jz)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Nc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const eV=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tV=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nV{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new En,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new kr({extensions:{fragDepth:!0},vertexShader:eV,fragmentShader:tV,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Vi(new Id(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class iV extends Zo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,g=null;const _=new nV,m=n.getContextAttributes();let h=null,v=null;const y=[],x=[],T=new qe;let w=null;const b=new Gn;b.layers.enable(1),b.viewport=new Wt;const L=new Gn;L.layers.enable(2),L.viewport=new Wt;const $=[b,L],S=new Qz;S.layers.enable(1),S.layers.enable(2);let R=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Q=y[G];return Q===void 0&&(Q=new yh,y[G]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(G){let Q=y[G];return Q===void 0&&(Q=new yh,y[G]=Q),Q.getGripSpace()},this.getHand=function(G){let Q=y[G];return Q===void 0&&(Q=new yh,y[G]=Q),Q.getHandSpace()};function Z(G){const Q=x.indexOf(G.inputSource);if(Q===-1)return;const ce=y[Q];ce!==void 0&&(ce.update(G.inputSource,G.frame,c||o),ce.dispatchEvent({type:G.type,data:G.inputSource}))}function N(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",X);for(let G=0;G<y.length;G++){const Q=x[G];Q!==null&&(x[G]=null,y[G].disconnect(Q))}R=null,q=null,_.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,v=null,Te.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",N),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Rs(p.framebufferWidth,p.framebufferHeight,{format:si,type:Pr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,ce=null,_e=null;m.depth&&(_e=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=m.stencil?Ho:ys,ce=m.stencil?vs:_r);const be={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(be),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Rs(f.textureWidth,f.textureHeight,{format:si,type:Pr,depthTexture:new LT(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const me=e.properties.get(v);me.__ignoreDepthValues=f.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Te.setContext(r),Te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function X(G){for(let Q=0;Q<G.removed.length;Q++){const ce=G.removed[Q],_e=x.indexOf(ce);_e>=0&&(x[_e]=null,y[_e].disconnect(ce))}for(let Q=0;Q<G.added.length;Q++){const ce=G.added[Q];let _e=x.indexOf(ce);if(_e===-1){for(let me=0;me<y.length;me++)if(me>=x.length){x.push(ce),_e=me;break}else if(x[me]===null){x[me]=ce,_e=me;break}if(_e===-1)break}const be=y[_e];be&&be.connect(ce)}}const W=new z,Y=new z;function D(G,Q,ce){W.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(ce.matrixWorld);const _e=W.distanceTo(Y),be=Q.projectionMatrix.elements,me=ce.projectionMatrix.elements,$e=be[14]/(be[10]-1),Ne=be[14]/(be[10]+1),O=(be[9]+1)/be[5],zt=(be[9]-1)/be[5],Ee=(be[8]-1)/be[0],Pe=(me[8]+1)/me[0],xe=$e*Ee,ht=$e*Pe,Oe=_e/(-Ee+Pe),C=Oe*-Ee;Q.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(C),G.translateZ(Oe),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const M=$e+Oe,k=Ne+Oe,re=xe-C,J=ht+(_e-C),ie=O*Ne/k*M,ge=zt*Ne/k*M;G.projectionMatrix.makePerspective(re,J,ie,ge,M,k),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function U(G,Q){Q===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Q.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;_.texture!==null&&(G.near=_.depthNear,G.far=_.depthFar),S.near=L.near=b.near=G.near,S.far=L.far=b.far=G.far,(R!==S.near||q!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,q=S.far,b.near=R,b.far=q,L.near=R,L.far=q,b.updateProjectionMatrix(),L.updateProjectionMatrix(),G.updateProjectionMatrix());const Q=G.parent,ce=S.cameras;U(S,Q);for(let _e=0;_e<ce.length;_e++)U(ce[_e],Q);ce.length===2?D(S,b,L):S.projectionMatrix.copy(b.projectionMatrix),B(G,S,Q)};function B(G,Q,ce){ce===null?G.matrix.copy(Q.matrixWorld):(G.matrix.copy(ce.matrixWorld),G.matrix.invert(),G.matrix.multiply(Q.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Q.projectionMatrix),G.projectionMatrixInverse.copy(Q.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=rm*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null};let K=null;function ne(G,Q){if(u=Q.getViewerPose(c||o),g=Q,u!==null){const ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let _e=!1;ce.length!==S.cameras.length&&(S.cameras.length=0,_e=!0);for(let me=0;me<ce.length;me++){const $e=ce[me];let Ne=null;if(p!==null)Ne=p.getViewport($e);else{const zt=d.getViewSubImage(f,$e);Ne=zt.viewport,me===0&&(e.setRenderTargetTextures(v,zt.colorTexture,f.ignoreDepthValues?void 0:zt.depthStencilTexture),e.setRenderTarget(v))}let O=$[me];O===void 0&&(O=new Gn,O.layers.enable(me),O.viewport=new Wt,$[me]=O),O.matrix.fromArray($e.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray($e.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),me===0&&(S.matrix.copy(O.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),_e===!0&&S.cameras.push(O)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const me=d.getDepthInformation(ce[0]);me&&me.isValid&&me.texture&&_.init(e,me,r.renderState)}}for(let ce=0;ce<y.length;ce++){const _e=x[ce],be=y[ce];_e!==null&&be!==void 0&&be.update(_e,Q,c||o)}_.render(e,S),K&&K(G,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Te=new PT;Te.setAnimationLoop(ne),this.setAnimationLoop=function(G){K=G},this.dispose=function(){}}}function rV(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,bT(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,y,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,y):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Sn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Sn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const y=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*y,n(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=y*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Sn&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function sV(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,y){const x=y.program;i.uniformBlockBinding(v,x)}function c(v,y){let x=r[v.id];x===void 0&&(g(v),x=u(v),r[v.id]=x,v.addEventListener("dispose",m));const T=y.program;i.updateUBOMapping(v,T);const w=e.render.frame;s[v.id]!==w&&(f(v),s[v.id]=w)}function u(v){const y=d();v.__bindingPointIndex=y;const x=t.createBuffer(),T=v.__size,w=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,T,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,x),x}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=r[v.id],x=v.uniforms,T=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let w=0,b=x.length;w<b;w++){const L=Array.isArray(x[w])?x[w]:[x[w]];for(let $=0,S=L.length;$<S;$++){const R=L[$];if(p(R,w,$,T)===!0){const q=R.__offset,Z=Array.isArray(R.value)?R.value:[R.value];let N=0;for(let X=0;X<Z.length;X++){const W=Z[X],Y=_(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,q+N,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,N),N+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,q,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,y,x,T){const w=v.value,b=y+"_"+x;if(T[b]===void 0)return typeof w=="number"||typeof w=="boolean"?T[b]=w:T[b]=w.clone(),!0;{const L=T[b];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return T[b]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(v){const y=v.uniforms;let x=0;const T=16;for(let b=0,L=y.length;b<L;b++){const $=Array.isArray(y[b])?y[b]:[y[b]];for(let S=0,R=$.length;S<R;S++){const q=$[S],Z=Array.isArray(q.value)?q.value:[q.value];for(let N=0,X=Z.length;N<X;N++){const W=Z[N],Y=_(W),D=x%T;D!==0&&T-D<Y.boundary&&(x+=T-D),q.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=x,x+=Y.storage}}}const w=x%T;return w>0&&(x+=T-w),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class kT{constructor(e={}){const{canvas:n=ZU(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const h=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this._useLegacyLights=!1,this.toneMapping=Rr,this.toneMappingExposure=1;const y=this;let x=!1,T=0,w=0,b=null,L=-1,$=null;const S=new Wt,R=new Wt;let q=null;const Z=new Ze(0);let N=0,X=n.width,W=n.height,Y=1,D=null,U=null;const B=new Wt(0,0,X,W),K=new Wt(0,0,X,W);let ne=!1;const Te=new RT;let G=!1,Q=!1,ce=null;const _e=new Bt,be=new qe,me=new z,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ne(){return b===null?Y:1}let O=i;function zt(A,I){for(let V=0;V<A.length;V++){const j=A[V],F=n.getContext(j,I);if(F!==null)return F}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${r0}`),n.addEventListener("webglcontextlost",tt,!1),n.addEventListener("webglcontextrestored",P,!1),n.addEventListener("webglcontextcreationerror",se,!1),O===null){const I=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&I.shift(),O=zt(I,A),O===null)throw zt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ee,Pe,xe,ht,Oe,C,M,k,re,J,ie,ge,le,fe,Ce,Fe,ee,Je,He,Le,Se,he,Ue,Ye;function ot(){Ee=new f4(O),Pe=new s4(O,Ee,e),Ee.init(Pe),he=new Zz(O,Ee,Pe),xe=new Yz(O,Ee,Pe),ht=new m4(O),Oe=new Oz,C=new Kz(O,Ee,xe,Oe,Pe,he,ht),M=new a4(y),k=new d4(y),re=new Ek(O,Pe),Ue=new i4(O,Ee,re,Pe),J=new h4(O,re,ht,Ue),ie=new _4(O,J,re,ht),He=new y4(O,Pe,C),Fe=new o4(Oe),ge=new Iz(y,M,k,Ee,Pe,Ue,Fe),le=new rV(y,Oe),fe=new kz,Ce=new Gz(Ee,Pe),Je=new n4(y,M,k,xe,ie,f,l),ee=new qz(y,ie,Pe),Ye=new sV(O,ht,Pe,xe),Le=new r4(O,Ee,ht,Pe),Se=new p4(O,Ee,ht,Pe),ht.programs=ge.programs,y.capabilities=Pe,y.extensions=Ee,y.properties=Oe,y.renderLists=fe,y.shadowMap=ee,y.state=xe,y.info=ht}ot();const je=new iV(y,O);this.xr=je,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=Ee.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ee.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(X,W,!1))},this.getSize=function(A){return A.set(X,W)},this.setSize=function(A,I,V=!0){if(je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=A,W=I,n.width=Math.floor(A*Y),n.height=Math.floor(I*Y),V===!0&&(n.style.width=A+"px",n.style.height=I+"px"),this.setViewport(0,0,A,I)},this.getDrawingBufferSize=function(A){return A.set(X*Y,W*Y).floor()},this.setDrawingBufferSize=function(A,I,V){X=A,W=I,Y=V,n.width=Math.floor(A*V),n.height=Math.floor(I*V),this.setViewport(0,0,A,I)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(B)},this.setViewport=function(A,I,V,j){A.isVector4?B.set(A.x,A.y,A.z,A.w):B.set(A,I,V,j),xe.viewport(S.copy(B).multiplyScalar(Y).floor())},this.getScissor=function(A){return A.copy(K)},this.setScissor=function(A,I,V,j){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,I,V,j),xe.scissor(R.copy(K).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(A){xe.setScissorTest(ne=A)},this.setOpaqueSort=function(A){D=A},this.setTransparentSort=function(A){U=A},this.getClearColor=function(A){return A.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(A=!0,I=!0,V=!0){let j=0;if(A){let F=!1;if(b!==null){const ue=b.texture.format;F=ue===fT||ue===dT||ue===uT}if(F){const ue=b.texture.type,ye=ue===Pr||ue===_r||ue===s0||ue===vs||ue===lT||ue===cT,Ae=Je.getClearColor(),Re=Je.getClearAlpha(),Be=Ae.r,De=Ae.g,Ie=Ae.b;ye?(p[0]=Be,p[1]=De,p[2]=Ie,p[3]=Re,O.clearBufferuiv(O.COLOR,0,p)):(g[0]=Be,g[1]=De,g[2]=Ie,g[3]=Re,O.clearBufferiv(O.COLOR,0,g))}else j|=O.COLOR_BUFFER_BIT}I&&(j|=O.DEPTH_BUFFER_BIT),V&&(j|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",tt,!1),n.removeEventListener("webglcontextrestored",P,!1),n.removeEventListener("webglcontextcreationerror",se,!1),fe.dispose(),Ce.dispose(),Oe.dispose(),M.dispose(),k.dispose(),ie.dispose(),Ue.dispose(),Ye.dispose(),ge.dispose(),je.dispose(),je.removeEventListener("sessionstart",Un),je.removeEventListener("sessionend",rt),ce&&(ce.dispose(),ce=null),sn.stop()};function tt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const A=ht.autoReset,I=ee.enabled,V=ee.autoUpdate,j=ee.needsUpdate,F=ee.type;ot(),ht.autoReset=A,ee.enabled=I,ee.autoUpdate=V,ee.needsUpdate=j,ee.type=F}function se(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function oe(A){const I=A.target;I.removeEventListener("dispose",oe),pe(I)}function pe(A){Me(A),Oe.remove(A)}function Me(A){const I=Oe.get(A).programs;I!==void 0&&(I.forEach(function(V){ge.releaseProgram(V)}),A.isShaderMaterial&&ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,I,V,j,F,ue){I===null&&(I=$e);const ye=F.isMesh&&F.matrixWorld.determinant()<0,Ae=Eb(A,I,V,j,F);xe.setMaterial(j,ye);let Re=V.index,Be=1;if(j.wireframe===!0){if(Re=J.getWireframeAttribute(V),Re===void 0)return;Be=2}const De=V.drawRange,Ie=V.attributes.position;let Tt=De.start*Be,wn=(De.start+De.count)*Be;ue!==null&&(Tt=Math.max(Tt,ue.start*Be),wn=Math.min(wn,(ue.start+ue.count)*Be)),Re!==null?(Tt=Math.max(Tt,0),wn=Math.min(wn,Re.count)):Ie!=null&&(Tt=Math.max(Tt,0),wn=Math.min(wn,Ie.count));const It=wn-Tt;if(It<0||It===1/0)return;Ue.setup(F,j,Ae,V,Re);let bi,pt=Le;if(Re!==null&&(bi=re.get(Re),pt=Se,pt.setIndex(bi)),F.isMesh)j.wireframe===!0?(xe.setLineWidth(j.wireframeLinewidth*Ne()),pt.setMode(O.LINES)):pt.setMode(O.TRIANGLES);else if(F.isLine){let ze=j.linewidth;ze===void 0&&(ze=1),xe.setLineWidth(ze*Ne()),F.isLineSegments?pt.setMode(O.LINES):F.isLineLoop?pt.setMode(O.LINE_LOOP):pt.setMode(O.LINE_STRIP)}else F.isPoints?pt.setMode(O.POINTS):F.isSprite&&pt.setMode(O.TRIANGLES);if(F.isBatchedMesh)pt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)pt.renderInstances(Tt,It,F.count);else if(V.isInstancedBufferGeometry){const ze=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,zd=Math.min(V.instanceCount,ze);pt.renderInstances(Tt,It,zd)}else pt.render(Tt,It)};function Ke(A,I,V){A.transparent===!0&&A.side===Ui&&A.forceSinglePass===!1?(A.side=Sn,A.needsUpdate=!0,Ul(A,I,V),A.side=Ur,A.needsUpdate=!0,Ul(A,I,V),A.side=Ui):Ul(A,I,V)}this.compile=function(A,I,V=null){V===null&&(V=A),m=Ce.get(V),m.init(),v.push(m),V.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),A!==V&&A.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights(y._useLegacyLights);const j=new Set;return A.traverse(function(F){const ue=F.material;if(ue)if(Array.isArray(ue))for(let ye=0;ye<ue.length;ye++){const Ae=ue[ye];Ke(Ae,V,F),j.add(Ae)}else Ke(ue,V,F),j.add(ue)}),v.pop(),m=null,j},this.compileAsync=function(A,I,V=null){const j=this.compile(A,I,V);return new Promise(F=>{function ue(){if(j.forEach(function(ye){Oe.get(ye).currentProgram.isReady()&&j.delete(ye)}),j.size===0){F(A);return}setTimeout(ue,10)}Ee.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let it=null;function Vt(A){it&&it(A)}function Un(){sn.stop()}function rt(){sn.start()}const sn=new PT;sn.setAnimationLoop(Vt),typeof self<"u"&&sn.setContext(self),this.setAnimationLoop=function(A){it=A,je.setAnimationLoop(A),A===null?sn.stop():sn.start()},je.addEventListener("sessionstart",Un),je.addEventListener("sessionend",rt),this.render=function(A,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(je.cameraAutoUpdate===!0&&je.updateCamera(I),I=je.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,I,b),m=Ce.get(A,v.length),m.init(),v.push(m),_e.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Te.setFromProjectionMatrix(_e),Q=this.localClippingEnabled,G=Fe.init(this.clippingPlanes,Q),_=fe.get(A,h.length),_.init(),h.push(_),di(A,I,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(D,U),this.info.render.frame++,G===!0&&Fe.beginShadows();const V=m.state.shadowsArray;if(ee.render(V,A,I),G===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(je.enabled===!1||je.isPresenting===!1||je.hasDepthSensing()===!1)&&Je.render(_,A),m.setupLights(y._useLegacyLights),I.isArrayCamera){const j=I.cameras;for(let F=0,ue=j.length;F<ue;F++){const ye=j[F];_0(_,A,ye,ye.viewport)}}else _0(_,A,I);b!==null&&(C.updateMultisampleRenderTarget(b),C.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(y,A,I),Ue.resetDefaultState(),L=-1,$=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function di(A,I,V,j){if(A.visible===!1)return;if(A.layers.test(I.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(I);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Te.intersectsSprite(A)){j&&me.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_e);const ye=ie.update(A),Ae=A.material;Ae.visible&&_.push(A,ye,Ae,V,me.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Te.intersectsObject(A))){const ye=ie.update(A),Ae=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),me.copy(A.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),me.copy(ye.boundingSphere.center)),me.applyMatrix4(A.matrixWorld).applyMatrix4(_e)),Array.isArray(Ae)){const Re=ye.groups;for(let Be=0,De=Re.length;Be<De;Be++){const Ie=Re[Be],Tt=Ae[Ie.materialIndex];Tt&&Tt.visible&&_.push(A,ye,Tt,V,me.z,Ie)}}else Ae.visible&&_.push(A,ye,Ae,V,me.z,null)}}const ue=A.children;for(let ye=0,Ae=ue.length;ye<Ae;ye++)di(ue[ye],I,V,j)}function _0(A,I,V,j){const F=A.opaque,ue=A.transmissive,ye=A.transparent;m.setupLightsView(V),G===!0&&Fe.setGlobalState(y.clippingPlanes,V),ue.length>0&&Sb(F,ue,I,V),j&&xe.viewport(S.copy(j)),F.length>0&&Ol(F,I,V),ue.length>0&&Ol(ue,I,V),ye.length>0&&Ol(ye,I,V),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Sb(A,I,V,j){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const ue=Pe.isWebGL2;ce===null&&(ce=new Rs(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?cl:Pr,minFilter:fs,samples:ue?4:0})),y.getDrawingBufferSize(be),ue?ce.setSize(be.x,be.y):ce.setSize(sm(be.x),sm(be.y));const ye=y.getRenderTarget();y.setRenderTarget(ce),y.getClearColor(Z),N=y.getClearAlpha(),N<1&&y.setClearColor(16777215,.5),y.clear();const Ae=y.toneMapping;y.toneMapping=Rr,Ol(A,V,j),C.updateMultisampleRenderTarget(ce),C.updateRenderTargetMipmap(ce);let Re=!1;for(let Be=0,De=I.length;Be<De;Be++){const Ie=I[Be],Tt=Ie.object,wn=Ie.geometry,It=Ie.material,bi=Ie.group;if(It.side===Ui&&Tt.layers.test(j.layers)){const pt=It.side;It.side=Sn,It.needsUpdate=!0,x0(Tt,V,j,wn,It,bi),It.side=pt,It.needsUpdate=!0,Re=!0}}Re===!0&&(C.updateMultisampleRenderTarget(ce),C.updateRenderTargetMipmap(ce)),y.setRenderTarget(ye),y.setClearColor(Z,N),y.toneMapping=Ae}function Ol(A,I,V){const j=I.isScene===!0?I.overrideMaterial:null;for(let F=0,ue=A.length;F<ue;F++){const ye=A[F],Ae=ye.object,Re=ye.geometry,Be=j===null?ye.material:j,De=ye.group;Ae.layers.test(V.layers)&&x0(Ae,I,V,Re,Be,De)}}function x0(A,I,V,j,F,ue){A.onBeforeRender(y,I,V,j,F,ue),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),F.onBeforeRender(y,I,V,j,A,ue),F.transparent===!0&&F.side===Ui&&F.forceSinglePass===!1?(F.side=Sn,F.needsUpdate=!0,y.renderBufferDirect(V,I,j,F,A,ue),F.side=Ur,F.needsUpdate=!0,y.renderBufferDirect(V,I,j,F,A,ue),F.side=Ui):y.renderBufferDirect(V,I,j,F,A,ue),A.onAfterRender(y,I,V,j,F,ue)}function Ul(A,I,V){I.isScene!==!0&&(I=$e);const j=Oe.get(A),F=m.state.lights,ue=m.state.shadowsArray,ye=F.state.version,Ae=ge.getParameters(A,F.state,ue,I,V),Re=ge.getProgramCacheKey(Ae);let Be=j.programs;j.environment=A.isMeshStandardMaterial?I.environment:null,j.fog=I.fog,j.envMap=(A.isMeshStandardMaterial?k:M).get(A.envMap||j.environment),Be===void 0&&(A.addEventListener("dispose",oe),Be=new Map,j.programs=Be);let De=Be.get(Re);if(De!==void 0){if(j.currentProgram===De&&j.lightsStateVersion===ye)return E0(A,Ae),De}else Ae.uniforms=ge.getUniforms(A),A.onBuild(V,Ae,y),A.onBeforeCompile(Ae,y),De=ge.acquireProgram(Ae,Re),Be.set(Re,De),j.uniforms=Ae.uniforms;const Ie=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ie.clippingPlanes=Fe.uniform),E0(A,Ae),j.needsLights=wb(A),j.lightsStateVersion=ye,j.needsLights&&(Ie.ambientLightColor.value=F.state.ambient,Ie.lightProbe.value=F.state.probe,Ie.directionalLights.value=F.state.directional,Ie.directionalLightShadows.value=F.state.directionalShadow,Ie.spotLights.value=F.state.spot,Ie.spotLightShadows.value=F.state.spotShadow,Ie.rectAreaLights.value=F.state.rectArea,Ie.ltc_1.value=F.state.rectAreaLTC1,Ie.ltc_2.value=F.state.rectAreaLTC2,Ie.pointLights.value=F.state.point,Ie.pointLightShadows.value=F.state.pointShadow,Ie.hemisphereLights.value=F.state.hemi,Ie.directionalShadowMap.value=F.state.directionalShadowMap,Ie.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ie.spotShadowMap.value=F.state.spotShadowMap,Ie.spotLightMatrix.value=F.state.spotLightMatrix,Ie.spotLightMap.value=F.state.spotLightMap,Ie.pointShadowMap.value=F.state.pointShadowMap,Ie.pointShadowMatrix.value=F.state.pointShadowMatrix),j.currentProgram=De,j.uniformsList=null,De}function S0(A){if(A.uniformsList===null){const I=A.currentProgram.getUniforms();A.uniformsList=eu.seqWithValue(I.seq,A.uniforms)}return A.uniformsList}function E0(A,I){const V=Oe.get(A);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function Eb(A,I,V,j,F){I.isScene!==!0&&(I=$e),C.resetTextureUnits();const ue=I.fog,ye=j.isMeshStandardMaterial?I.environment:null,Ae=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Qi,Re=(j.isMeshStandardMaterial?k:M).get(j.envMap||ye),Be=j.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,De=!!V.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ie=!!V.morphAttributes.position,Tt=!!V.morphAttributes.normal,wn=!!V.morphAttributes.color;let It=Rr;j.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(It=y.toneMapping);const bi=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,pt=bi!==void 0?bi.length:0,ze=Oe.get(j),zd=m.state.lights;if(G===!0&&(Q===!0||A!==$)){const kn=A===$&&j.id===L;Fe.setState(j,A,kn)}let St=!1;j.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==zd.state.version||ze.outputColorSpace!==Ae||F.isBatchedMesh&&ze.batching===!1||!F.isBatchedMesh&&ze.batching===!0||F.isInstancedMesh&&ze.instancing===!1||!F.isInstancedMesh&&ze.instancing===!0||F.isSkinnedMesh&&ze.skinning===!1||!F.isSkinnedMesh&&ze.skinning===!0||F.isInstancedMesh&&ze.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&ze.instancingColor===!1&&F.instanceColor!==null||ze.envMap!==Re||j.fog===!0&&ze.fog!==ue||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Fe.numPlanes||ze.numIntersection!==Fe.numIntersection)||ze.vertexAlphas!==Be||ze.vertexTangents!==De||ze.morphTargets!==Ie||ze.morphNormals!==Tt||ze.morphColors!==wn||ze.toneMapping!==It||Pe.isWebGL2===!0&&ze.morphTargetsCount!==pt)&&(St=!0):(St=!0,ze.__version=j.version);let jr=ze.currentProgram;St===!0&&(jr=Ul(j,I,F));let M0=!1,ea=!1,Vd=!1;const qt=jr.getUniforms(),Wr=ze.uniforms;if(xe.useProgram(jr.program)&&(M0=!0,ea=!0,Vd=!0),j.id!==L&&(L=j.id,ea=!0),M0||$!==A){qt.setValue(O,"projectionMatrix",A.projectionMatrix),qt.setValue(O,"viewMatrix",A.matrixWorldInverse);const kn=qt.map.cameraPosition;kn!==void 0&&kn.setValue(O,me.setFromMatrixPosition(A.matrixWorld)),Pe.logarithmicDepthBuffer&&qt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&qt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),$!==A&&($=A,ea=!0,Vd=!0)}if(F.isSkinnedMesh){qt.setOptional(O,F,"bindMatrix"),qt.setOptional(O,F,"bindMatrixInverse");const kn=F.skeleton;kn&&(Pe.floatVertexTextures?(kn.boneTexture===null&&kn.computeBoneTexture(),qt.setValue(O,"boneTexture",kn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(qt.setOptional(O,F,"batchingTexture"),qt.setValue(O,"batchingTexture",F._matricesTexture,C));const Hd=V.morphAttributes;if((Hd.position!==void 0||Hd.normal!==void 0||Hd.color!==void 0&&Pe.isWebGL2===!0)&&He.update(F,V,jr),(ea||ze.receiveShadow!==F.receiveShadow)&&(ze.receiveShadow=F.receiveShadow,qt.setValue(O,"receiveShadow",F.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Wr.envMap.value=Re,Wr.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),ea&&(qt.setValue(O,"toneMappingExposure",y.toneMappingExposure),ze.needsLights&&Mb(Wr,Vd),ue&&j.fog===!0&&le.refreshFogUniforms(Wr,ue),le.refreshMaterialUniforms(Wr,j,Y,W,ce),eu.upload(O,S0(ze),Wr,C)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(eu.upload(O,S0(ze),Wr,C),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&qt.setValue(O,"center",F.center),qt.setValue(O,"modelViewMatrix",F.modelViewMatrix),qt.setValue(O,"normalMatrix",F.normalMatrix),qt.setValue(O,"modelMatrix",F.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const kn=j.uniformsGroups;for(let Gd=0,Tb=kn.length;Gd<Tb;Gd++)if(Pe.isWebGL2){const w0=kn[Gd];Ye.update(w0,jr),Ye.bind(w0,jr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return jr}function Mb(A,I){A.ambientLightColor.needsUpdate=I,A.lightProbe.needsUpdate=I,A.directionalLights.needsUpdate=I,A.directionalLightShadows.needsUpdate=I,A.pointLights.needsUpdate=I,A.pointLightShadows.needsUpdate=I,A.spotLights.needsUpdate=I,A.spotLightShadows.needsUpdate=I,A.rectAreaLights.needsUpdate=I,A.hemisphereLights.needsUpdate=I}function wb(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,I,V){Oe.get(A.texture).__webglTexture=I,Oe.get(A.depthTexture).__webglTexture=V;const j=Oe.get(A);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=V===void 0,j.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,I){const V=Oe.get(A);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(A,I=0,V=0){b=A,T=I,w=V;let j=!0,F=null,ue=!1,ye=!1;if(A){const Re=Oe.get(A);Re.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(O.FRAMEBUFFER,null),j=!1):Re.__webglFramebuffer===void 0?C.setupRenderTarget(A):Re.__hasExternalTextures&&C.rebindTextures(A,Oe.get(A.texture).__webglTexture,Oe.get(A.depthTexture).__webglTexture);const Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ye=!0);const De=Oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(De[I])?F=De[I][V]:F=De[I],ue=!0):Pe.isWebGL2&&A.samples>0&&C.useMultisampledRTT(A)===!1?F=Oe.get(A).__webglMultisampledFramebuffer:Array.isArray(De)?F=De[V]:F=De,S.copy(A.viewport),R.copy(A.scissor),q=A.scissorTest}else S.copy(B).multiplyScalar(Y).floor(),R.copy(K).multiplyScalar(Y).floor(),q=ne;if(xe.bindFramebuffer(O.FRAMEBUFFER,F)&&Pe.drawBuffers&&j&&xe.drawBuffers(A,F),xe.viewport(S),xe.scissor(R),xe.setScissorTest(q),ue){const Re=Oe.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+I,Re.__webglTexture,V)}else if(ye){const Re=Oe.get(A.texture),Be=I||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.__webglTexture,V||0,Be)}L=-1},this.readRenderTargetPixels=function(A,I,V,j,F,ue,ye){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae){xe.bindFramebuffer(O.FRAMEBUFFER,Ae);try{const Re=A.texture,Be=Re.format,De=Re.type;if(Be!==si&&he.convert(Be)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=De===cl&&(Ee.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(De!==Pr&&he.convert(De)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===ki&&(Pe.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=A.width-j&&V>=0&&V<=A.height-F&&O.readPixels(I,V,j,F,he.convert(Be),he.convert(De),ue)}finally{const Re=b!==null?Oe.get(b).__webglFramebuffer:null;xe.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(A,I,V=0){const j=Math.pow(2,-V),F=Math.floor(I.image.width*j),ue=Math.floor(I.image.height*j);C.setTexture2D(I,0),O.copyTexSubImage2D(O.TEXTURE_2D,V,0,0,A.x,A.y,F,ue),xe.unbindTexture()},this.copyTextureToTexture=function(A,I,V,j=0){const F=I.image.width,ue=I.image.height,ye=he.convert(V.format),Ae=he.convert(V.type);C.setTexture2D(V,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment),I.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,j,A.x,A.y,F,ue,ye,Ae,I.image.data):I.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,j,A.x,A.y,I.mipmaps[0].width,I.mipmaps[0].height,ye,I.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,j,A.x,A.y,ye,Ae,I.image),j===0&&V.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(A,I,V,j,F=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=A.max.x-A.min.x+1,ye=A.max.y-A.min.y+1,Ae=A.max.z-A.min.z+1,Re=he.convert(j.format),Be=he.convert(j.type);let De;if(j.isData3DTexture)C.setTexture3D(j,0),De=O.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)C.setTexture2DArray(j,0),De=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,j.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,j.unpackAlignment);const Ie=O.getParameter(O.UNPACK_ROW_LENGTH),Tt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),wn=O.getParameter(O.UNPACK_SKIP_PIXELS),It=O.getParameter(O.UNPACK_SKIP_ROWS),bi=O.getParameter(O.UNPACK_SKIP_IMAGES),pt=V.isCompressedTexture?V.mipmaps[F]:V.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,pt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,A.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,A.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,A.min.z),V.isDataTexture||V.isData3DTexture?O.texSubImage3D(De,F,I.x,I.y,I.z,ue,ye,Ae,Re,Be,pt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(De,F,I.x,I.y,I.z,ue,ye,Ae,Re,pt.data)):O.texSubImage3D(De,F,I.x,I.y,I.z,ue,ye,Ae,Re,Be,pt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ie),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Tt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,wn),O.pixelStorei(O.UNPACK_SKIP_ROWS,It),O.pixelStorei(O.UNPACK_SKIP_IMAGES,bi),F===0&&j.generateMipmaps&&O.generateMipmap(De),xe.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),xe.unbindTexture()},this.resetState=function(){T=0,w=0,b=null,xe.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===o0?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===Ld?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===jt?_s:pT}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===_s?jt:Qi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class oV extends kT{}oV.prototype.isWebGL1Renderer=!0;class aV extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class FT extends Nl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sS=new Bt,am=new xT,Ic=new Dd,Oc=new z;class lV extends Mn{constructor(e=new tr,n=new FT){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ic.copy(i.boundingSphere),Ic.applyMatrix4(r),Ic.radius+=s,e.ray.intersectsSphere(Ic)===!1)return;sS.copy(r).invert(),am.copy(e.ray).applyMatrix4(sS);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=c.getX(g);Oc.fromBufferAttribute(d,m),oS(Oc,m,l,r,e,n,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=f,_=p;g<_;g++)Oc.fromBufferAttribute(d,g),oS(Oc,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function oS(t,e,n,i,r,s,o){const a=am.distanceSqToPoint(t);if(a<n){const l=new z;am.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:r0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=r0);const cV=()=>{const t=H.useRef(null),{darkMode:e}=ww();return H.useEffect(()=>{if(!t.current)return;const n=new aV,i=new Gn(85,window.innerWidth/window.innerHeight,.1,1e3);i.position.z=15;const r=new kT({alpha:!0,antialias:!0,powerPreference:"high-performance"});r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.current.appendChild(r.domElement);const s=(m,h,v,y)=>{const x=new tr,T=new Float32Array(m*3);for(let b=0;b<m*3;b+=3)T[b]=(Math.random()-.5)*h,T[b+1]=(Math.random()-.5)*h,T[b+2]=(Math.random()-.5)*h;x.setAttribute("position",new li(T,3));const w=new FT({size:v,color:e?6619098:1096065,transparent:!0,opacity:y,blending:Kp});return new lV(x,w)},o=s(2e3,30,.02,.8),a=s(1500,25,.03,.6),l=s(1e3,20,.04,.4);n.add(o,a,l);let c=0,u=0,d=0,f=0;const p=m=>{c=m.clientX/window.innerWidth*2-1,u=-(m.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",p);const g=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",g);const _=()=>{requestAnimationFrame(_),d+=(c-d)*.02,f+=(u-f)*.02,o.rotation.x+=2e-4,o.rotation.y+=3e-4,o.rotation.z+=f*2e-4,a.rotation.x+=3e-4,a.rotation.y+=4e-4,a.rotation.z+=d*3e-4,l.rotation.x+=4e-4,l.rotation.y+=5e-4,l.rotation.z+=(d+f)*4e-4,o.position.x=d*.2,o.position.y=f*.2,a.position.x=-d*.1,a.position.y=-f*.1,l.position.x=d*.15,l.position.y=f*.15,r.render(n,i)};return _(),()=>{var m;window.removeEventListener("mousemove",p),window.removeEventListener("resize",g),(m=t.current)==null||m.removeChild(r.domElement),o.geometry.dispose(),a.geometry.dispose(),l.geometry.dispose(),o.material.dispose(),a.material.dispose(),l.material.dispose()}},[e]),E.jsx("div",{ref:t,className:"w-full h-full"})};var aS={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},uV=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},zT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),i.push(n[u],n[d],n[f],n[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(BT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uV(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||d==null)throw new dV;const f=s<<2|a>>4;if(i.push(f),c!==64){const p=a<<4&240|c>>2;if(i.push(p),d!==64){const g=c<<6&192|d;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dV extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fV=function(t){const e=BT(t);return zT.encodeByteArray(e,!0)},VT=function(t){return fV(t).replace(/\./g,"")},hV=function(t){try{return zT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pV(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mV=()=>pV().__FIREBASE_DEFAULTS__,gV=()=>{if(typeof process>"u"||typeof aS>"u")return;const t=aS.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vV=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hV(t[1]);return e&&JSON.parse(e)},yV=()=>{try{return mV()||gV()||vV()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},HT=()=>{var t;return(t=yV())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _V{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}function GT(){try{return typeof indexedDB=="object"}catch{return!1}}function jT(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function xV(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SV="FirebaseError";class Jo extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=SV,Object.setPrototypeOf(this,Jo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ud.prototype.create)}}class Ud{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?EV(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Jo(r,a,i)}}function EV(t,e){return t.replace(MV,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const MV=/\{\$([^}]+)}/g;function lm(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(lS(s)&&lS(o)){if(!lm(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function lS(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(t){return t&&t._delegate?t._delegate:t}class Fr{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wV{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new _V;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bV(e))try{this.getOrInitializeService({instanceIdentifier:ss})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=ss){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ss){return this.instances.has(e)}getOptions(e=ss){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:TV(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ss){return this.component?this.component.multipleInstances?e:ss:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TV(t){return t===ss?void 0:t}function bV(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AV{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wV(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ct||(ct={}));const CV={debug:ct.DEBUG,verbose:ct.VERBOSE,info:ct.INFO,warn:ct.WARN,error:ct.ERROR,silent:ct.SILENT},RV=ct.INFO,PV={[ct.DEBUG]:"log",[ct.VERBOSE]:"log",[ct.INFO]:"info",[ct.WARN]:"warn",[ct.ERROR]:"error"},LV=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=PV[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class DV{constructor(e){this.name=e,this._logLevel=RV,this._logHandler=LV,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ct))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CV[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ct.DEBUG,...e),this._logHandler(this,ct.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ct.VERBOSE,...e),this._logHandler(this,ct.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ct.INFO,...e),this._logHandler(this,ct.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ct.WARN,...e),this._logHandler(this,ct.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ct.ERROR,...e),this._logHandler(this,ct.ERROR,...e)}}const NV=(t,e)=>e.some(n=>t instanceof n);let cS,uS;function IV(){return cS||(cS=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OV(){return uS||(uS=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const WT=new WeakMap,cm=new WeakMap,$T=new WeakMap,_h=new WeakMap,c0=new WeakMap;function UV(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n($i(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&WT.set(n,t)}).catch(()=>{}),c0.set(e,t),e}function kV(t){if(cm.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});cm.set(t,e)}let um={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$T.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $i(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function FV(t){um=t(um)}function BV(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(xh(this),e,...n);return $T.set(i,e.sort?e.sort():[e]),$i(i)}:OV().includes(t)?function(...e){return t.apply(xh(this),e),$i(WT.get(this))}:function(...e){return $i(t.apply(xh(this),e))}}function zV(t){return typeof t=="function"?BV(t):(t instanceof IDBTransaction&&kV(t),NV(t,IV())?new Proxy(t,um):t)}function $i(t){if(t instanceof IDBRequest)return UV(t);if(_h.has(t))return _h.get(t);const e=zV(t);return e!==t&&(_h.set(t,e),c0.set(e,t)),e}const xh=t=>c0.get(t);function kd(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=$i(o);return i&&o.addEventListener("upgradeneeded",l=>{i($i(o.result),l.oldVersion,l.newVersion,$i(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}function Sh(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",i=>e(i.oldVersion,i)),$i(n).then(()=>{})}const VV=["get","getKey","getAll","getAllKeys","count"],HV=["put","add","delete","clear"],Eh=new Map;function dS(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Eh.get(e))return Eh.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=HV.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||VV.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Eh.set(e,s),s}FV(t=>({...t,get:(e,n,i)=>dS(e,n)||t.get(e,n,i),has:(e,n)=>!!dS(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GV{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jV(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function jV(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dm="@firebase/app",fS="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=new DV("@firebase/app"),WV="@firebase/app-compat",$V="@firebase/analytics-compat",XV="@firebase/analytics",qV="@firebase/app-check-compat",YV="@firebase/app-check",KV="@firebase/auth",ZV="@firebase/auth-compat",QV="@firebase/database",JV="@firebase/data-connect",e5="@firebase/database-compat",t5="@firebase/functions",n5="@firebase/functions-compat",i5="@firebase/installations",r5="@firebase/installations-compat",s5="@firebase/messaging",o5="@firebase/messaging-compat",a5="@firebase/performance",l5="@firebase/performance-compat",c5="@firebase/remote-config",u5="@firebase/remote-config-compat",d5="@firebase/storage",f5="@firebase/storage-compat",h5="@firebase/firestore",p5="@firebase/vertexai-preview",m5="@firebase/firestore-compat",g5="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm="[DEFAULT]",v5={[dm]:"fire-core",[WV]:"fire-core-compat",[XV]:"fire-analytics",[$V]:"fire-analytics-compat",[YV]:"fire-app-check",[qV]:"fire-app-check-compat",[KV]:"fire-auth",[ZV]:"fire-auth-compat",[QV]:"fire-rtdb",[JV]:"fire-data-connect",[e5]:"fire-rtdb-compat",[t5]:"fire-fn",[n5]:"fire-fn-compat",[i5]:"fire-iid",[r5]:"fire-iid-compat",[s5]:"fire-fcm",[o5]:"fire-fcm-compat",[a5]:"fire-perf",[l5]:"fire-perf-compat",[c5]:"fire-rc",[u5]:"fire-rc-compat",[d5]:"fire-gcs",[f5]:"fire-gcs-compat",[h5]:"fire-fst",[m5]:"fire-fst-compat",[p5]:"fire-vertex","fire-js":"fire-js",[g5]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu=new Map,y5=new Map,hm=new Map;function hS(t,e){try{t.container.addComponent(e)}catch(n){Ji.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ps(t){const e=t.name;if(hm.has(e))return Ji.debug(`There were multiple attempts to register component ${e}.`),!1;hm.set(e,t);for(const n of Xu.values())hS(n,t);for(const n of y5.values())hS(n,t);return!0}function u0(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _5={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Lr=new Ud("app","Firebase",_5);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x5{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lr.create("app-deleted",{appName:this._name})}}function XT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:fm,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Lr.create("bad-app-name",{appName:String(r)});if(n||(n=HT()),!n)throw Lr.create("no-options");const s=Xu.get(r);if(s){if(lm(n,s.options)&&lm(i,s.config))return s;throw Lr.create("duplicate-app",{appName:r})}const o=new AV(r);for(const l of hm.values())o.addComponent(l);const a=new x5(n,i,o);return Xu.set(r,a),a}function S5(t=fm){const e=Xu.get(t);if(!e&&t===fm&&HT())return XT();if(!e)throw Lr.create("no-app",{appName:t});return e}function Dr(t,e,n){var i;let r=(i=v5[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ji.warn(a.join(" "));return}Ps(new Fr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E5="firebase-heartbeat-database",M5=1,ul="firebase-heartbeat-store";let Mh=null;function qT(){return Mh||(Mh=kd(E5,M5,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ul)}catch(n){console.warn(n)}}}}).catch(t=>{throw Lr.create("idb-open",{originalErrorMessage:t.message})})),Mh}async function w5(t){try{const n=(await qT()).transaction(ul),i=await n.objectStore(ul).get(YT(t));return await n.done,i}catch(e){if(e instanceof Jo)Ji.warn(e.message);else{const n=Lr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ji.warn(n.message)}}}async function pS(t,e){try{const i=(await qT()).transaction(ul,"readwrite");await i.objectStore(ul).put(e,YT(t)),await i.done}catch(n){if(n instanceof Jo)Ji.warn(n.message);else{const i=Lr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ji.warn(i.message)}}}function YT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T5=1024,b5=30*24*60*60*1e3;class A5{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new R5(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=mS();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=b5}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Ji.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=mS(),{heartbeatsToSend:i,unsentEntries:r}=C5(this._heartbeatsCache.heartbeats),s=VT(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ji.warn(n),""}}}function mS(){return new Date().toISOString().substring(0,10)}function C5(t,e=T5){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),gS(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),gS(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class R5{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return GT()?jT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await w5(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return pS(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return pS(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function gS(t){return VT(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P5(t){Ps(new Fr("platform-logger",e=>new GV(e),"PRIVATE")),Ps(new Fr("heartbeat",e=>new A5(e),"PRIVATE")),Dr(dm,fS,t),Dr(dm,fS,"esm2017"),Dr("fire-js","")}P5("");var L5="firebase",D5="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dr(L5,D5,"app");const KT="@firebase/installations",d0="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT=1e4,QT=`w:${d0}`,JT="FIS_v2",N5="https://firebaseinstallations.googleapis.com/v1",I5=60*60*1e3,O5="installations",U5="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k5={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ls=new Ud(O5,U5,k5);function eb(t){return t instanceof Jo&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb({projectId:t}){return`${N5}/projects/${t}/installations`}function nb(t){return{token:t.token,requestStatus:2,expiresIn:B5(t.expiresIn),creationTime:Date.now()}}async function ib(t,e){const i=(await e.json()).error;return Ls.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function rb({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function F5(t,{refreshToken:e}){const n=rb(t);return n.append("Authorization",z5(e)),n}async function sb(t){const e=await t();return e.status>=500&&e.status<600?t():e}function B5(t){return Number(t.replace("s","000"))}function z5(t){return`${JT} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V5({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=tb(t),r=rb(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={fid:n,authVersion:JT,appId:t.appId,sdkVersion:QT},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await sb(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:nb(c.authToken)}}else throw await ib("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H5(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G5=/^[cdef][\w-]{21}$/,pm="";function j5(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=W5(t);return G5.test(n)?n:pm}catch{return pm}}function W5(t){return H5(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab=new Map;function lb(t,e){const n=Fd(t);cb(n,e),$5(n,e)}function cb(t,e){const n=ab.get(t);if(n)for(const i of n)i(e)}function $5(t,e){const n=X5();n&&n.postMessage({key:t,fid:e}),q5()}let hs=null;function X5(){return!hs&&"BroadcastChannel"in self&&(hs=new BroadcastChannel("[Firebase] FID Change"),hs.onmessage=t=>{cb(t.data.key,t.data.fid)}),hs}function q5(){ab.size===0&&hs&&(hs.close(),hs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y5="firebase-installations-database",K5=1,Ds="firebase-installations-store";let wh=null;function f0(){return wh||(wh=kd(Y5,K5,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ds)}}})),wh}async function qu(t,e){const n=Fd(t),r=(await f0()).transaction(Ds,"readwrite"),s=r.objectStore(Ds),o=await s.get(n);return await s.put(e,n),await r.done,(!o||o.fid!==e.fid)&&lb(t,e.fid),e}async function ub(t){const e=Fd(t),i=(await f0()).transaction(Ds,"readwrite");await i.objectStore(Ds).delete(e),await i.done}async function Bd(t,e){const n=Fd(t),r=(await f0()).transaction(Ds,"readwrite"),s=r.objectStore(Ds),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&lb(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h0(t){let e;const n=await Bd(t.appConfig,i=>{const r=Z5(i),s=Q5(t,r);return e=s.registrationPromise,s.installationEntry});return n.fid===pm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Z5(t){const e=t||{fid:j5(),registrationStatus:0};return db(e)}function Q5(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Ls.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=J5(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:eH(t)}:{installationEntry:e}}async function J5(t,e){try{const n=await V5(t,e);return qu(t.appConfig,n)}catch(n){throw eb(n)&&n.customData.serverCode===409?await ub(t.appConfig):await qu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function eH(t){let e=await vS(t.appConfig);for(;e.registrationStatus===1;)await ob(100),e=await vS(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await h0(t);return i||n}return e}function vS(t){return Bd(t,e=>{if(!e)throw Ls.create("installation-not-found");return db(e)})}function db(t){return tH(t)?{fid:t.fid,registrationStatus:0}:t}function tH(t){return t.registrationStatus===1&&t.registrationTime+ZT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nH({appConfig:t,heartbeatServiceProvider:e},n){const i=iH(t,n),r=F5(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={installation:{sdkVersion:QT,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await sb(()=>fetch(i,a));if(l.ok){const c=await l.json();return nb(c)}else throw await ib("Generate Auth Token",l)}function iH(t,{fid:e}){return`${tb(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p0(t,e=!1){let n;const i=await Bd(t.appConfig,s=>{if(!fb(s))throw Ls.create("not-registered");const o=s.authToken;if(!e&&oH(o))return s;if(o.requestStatus===1)return n=rH(t,e),s;{if(!navigator.onLine)throw Ls.create("app-offline");const a=lH(s);return n=sH(t,a),a}});return n?await n:i.authToken}async function rH(t,e){let n=await yS(t.appConfig);for(;n.authToken.requestStatus===1;)await ob(100),n=await yS(t.appConfig);const i=n.authToken;return i.requestStatus===0?p0(t,e):i}function yS(t){return Bd(t,e=>{if(!fb(e))throw Ls.create("not-registered");const n=e.authToken;return cH(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function sH(t,e){try{const n=await nH(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await qu(t.appConfig,i),n}catch(n){if(eb(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ub(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await qu(t.appConfig,i)}throw n}}function fb(t){return t!==void 0&&t.registrationStatus===2}function oH(t){return t.requestStatus===2&&!aH(t)}function aH(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+I5}function lH(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function cH(t){return t.requestStatus===1&&t.requestTime+ZT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uH(t){const e=t,{installationEntry:n,registrationPromise:i}=await h0(e);return i?i.catch(console.error):p0(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dH(t,e=!1){const n=t;return await fH(n),(await p0(n,e)).token}async function fH(t){const{registrationPromise:e}=await h0(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hH(t){if(!t||!t.options)throw Th("App Configuration");if(!t.name)throw Th("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Th(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Th(t){return Ls.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb="installations",pH="installations-internal",mH=t=>{const e=t.getProvider("app").getImmediate(),n=hH(e),i=u0(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},gH=t=>{const e=t.getProvider("app").getImmediate(),n=u0(e,hb).getImmediate();return{getId:()=>uH(n),getToken:r=>dH(n,r)}};function vH(){Ps(new Fr(hb,mH,"PUBLIC")),Ps(new Fr(pH,gH,"PRIVATE"))}vH();Dr(KT,d0);Dr(KT,d0,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yH="/firebase-messaging-sw.js",_H="/firebase-cloud-messaging-push-scope",pb="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",xH="https://fcmregistrations.googleapis.com/v1",mb="google.c.a.c_id",SH="google.c.a.c_l",EH="google.c.a.ts",MH="google.c.a.e";var _S;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(_S||(_S={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var dl;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(dl||(dl={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function wH(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),r=new Uint8Array(i.length);for(let s=0;s<i.length;++s)r[s]=i.charCodeAt(s);return r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="fcm_token_details_db",TH=5,xS="fcm_token_object_Store";async function bH(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(bh))return null;let e=null;return(await kd(bh,TH,{upgrade:async(i,r,s,o)=>{var a;if(r<2||!i.objectStoreNames.contains(xS))return;const l=o.objectStore(xS),c=await l.index("fcmSenderId").get(t);if(await l.clear(),!!c){if(r===2){const u=c;if(!u.auth||!u.p256dh||!u.endpoint)return;e={token:u.fcmToken,createTime:(a=u.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:Ii(u.vapidKey)}}}else if(r===3){const u=c;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:Ii(u.auth),p256dh:Ii(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:Ii(u.vapidKey)}}}else if(r===4){const u=c;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:Ii(u.auth),p256dh:Ii(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:Ii(u.vapidKey)}}}}}})).close(),await Sh(bh),await Sh("fcm_vapid_details_db"),await Sh("undefined"),AH(e)?e:null}function AH(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CH="firebase-messaging-database",RH=1,fl="firebase-messaging-store";let Ah=null;function gb(){return Ah||(Ah=kd(CH,RH,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fl)}}})),Ah}async function PH(t){const e=vb(t),i=await(await gb()).transaction(fl).objectStore(fl).get(e);if(i)return i;{const r=await bH(t.appConfig.senderId);if(r)return await m0(t,r),r}}async function m0(t,e){const n=vb(t),r=(await gb()).transaction(fl,"readwrite");return await r.objectStore(fl).put(e,n),await r.done,e}function vb({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LH={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},nn=new Ud("messaging","Messaging",LH);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DH(t,e){const n=await v0(t),i=yb(e),r={method:"POST",headers:n,body:JSON.stringify(i)};let s;try{s=await(await fetch(g0(t.appConfig),r)).json()}catch(o){throw nn.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw nn.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw nn.create("token-subscribe-no-token");return s.token}async function NH(t,e){const n=await v0(t),i=yb(e.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(i)};let s;try{s=await(await fetch(`${g0(t.appConfig)}/${e.token}`,r)).json()}catch(o){throw nn.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw nn.create("token-update-failed",{errorInfo:o})}if(!s.token)throw nn.create("token-update-no-token");return s.token}async function IH(t,e){const i={method:"DELETE",headers:await v0(t)};try{const s=await(await fetch(`${g0(t.appConfig)}/${e}`,i)).json();if(s.error){const o=s.error.message;throw nn.create("token-unsubscribe-failed",{errorInfo:o})}}catch(r){throw nn.create("token-unsubscribe-failed",{errorInfo:r==null?void 0:r.toString()})}}function g0({projectId:t}){return`${xH}/projects/${t}/registrations`}async function v0({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function yb({p256dh:t,auth:e,endpoint:n,vapidKey:i}){const r={web:{endpoint:n,auth:e,p256dh:t}};return i!==pb&&(r.web.applicationPubKey=i),r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OH=7*24*60*60*1e3;async function UH(t){const e=await FH(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Ii(e.getKey("auth")),p256dh:Ii(e.getKey("p256dh"))},i=await PH(t.firebaseDependencies);if(i){if(BH(i.subscriptionOptions,n))return Date.now()>=i.createTime+OH?kH(t,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await IH(t.firebaseDependencies,i.token)}catch(r){console.warn(r)}return SS(t.firebaseDependencies,n)}else return SS(t.firebaseDependencies,n)}async function kH(t,e){try{const n=await NH(t.firebaseDependencies,e),i=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await m0(t.firebaseDependencies,i),n}catch(n){throw n}}async function SS(t,e){const i={token:await DH(t,e),createTime:Date.now(),subscriptionOptions:e};return await m0(t,i),i.token}async function FH(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:wH(e)})}function BH(t,e){const n=e.vapidKey===t.vapidKey,i=e.endpoint===t.endpoint,r=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&i&&r&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return zH(e,t),VH(e,t),HH(e,t),e}function zH(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const i=e.notification.body;i&&(t.notification.body=i);const r=e.notification.image;r&&(t.notification.image=r);const s=e.notification.icon;s&&(t.notification.icon=s)}function VH(t,e){e.data&&(t.data=e.data)}function HH(t,e){var n,i,r,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(r=(i=e.fcmOptions)===null||i===void 0?void 0:i.link)!==null&&r!==void 0?r:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GH(t){return typeof t=="object"&&!!t&&mb in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jH(t){if(!t||!t.options)throw Ch("App Configuration Object");if(!t.name)throw Ch("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const i of e)if(!n[i])throw Ch(i);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Ch(t){return nn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WH{constructor(e,n,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const r=jH(e);this.firebaseDependencies={app:e,appConfig:r,installations:n,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $H(t){try{t.swRegistration=await navigator.serviceWorker.register(yH,{scope:_H}),t.swRegistration.update().catch(()=>{})}catch(e){throw nn.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XH(t,e){if(!e&&!t.swRegistration&&await $H(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw nn.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qH(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=pb)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _b(t,e){if(!navigator)throw nn.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw nn.create("permission-blocked");return await qH(t,e==null?void 0:e.vapidKey),await XH(t,e==null?void 0:e.serviceWorkerRegistration),UH(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YH(t,e,n){const i=KH(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:n[mb],message_name:n[SH],message_time:n[EH],message_device_time:Math.floor(Date.now()/1e3)})}function KH(t){switch(t){case dl.NOTIFICATION_CLICKED:return"notification_open";case dl.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZH(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===dl.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(ES(n)):t.onMessageHandler.next(ES(n)));const i=n.data;GH(i)&&i[MH]==="1"&&await YH(t,n.messageType,i)}const MS="@firebase/messaging",wS="0.12.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QH=t=>{const e=new WH(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>ZH(e,n)),e},JH=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:i=>_b(e,i)}};function eG(){Ps(new Fr("messaging",QH,"PUBLIC")),Ps(new Fr("messaging-internal",JH,"PRIVATE")),Dr(MS,wS),Dr(MS,wS,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tG(){try{await jT()}catch{return!1}return typeof window<"u"&&GT()&&xV()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nG(t,e){if(!navigator)throw nn.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iG(t=S5()){return tG().then(e=>{if(!e)throw nn.create("unsupported-browser")},e=>{throw nn.create("indexed-db-unsupported")}),u0(l0(t),"messaging").getImmediate()}async function rG(t,e){return t=l0(t),_b(t,e)}function sG(t,e){return t=l0(t),nG(t,e)}eG();const oG={apiKey:"AIzaSyCwj0tO_tyYMmGqJSSFxssTdzmV8z-96rk",authDomain:"ri-yan.firebaseapp.com",projectId:"ri-yan",storageBucket:"ri-yan.firebasestorage.app",messagingSenderId:"836329298716",appId:"1:836329298716:web:b808e5a6cdcb78872038d9"},aG=XT(oG),xb=iG(aG),lG=async()=>{try{if(await Notification.requestPermission()==="granted")return await rG(xb,{vapidKey:void 0})}catch(t){console.error("Notification permission error:",t)}},cG=()=>new Promise(t=>{sG(xb,e=>{t(e)})}),uG=()=>{const[t,e]=H.useState({title:"",body:""}),[n,i]=H.useState(!1);return H.useEffect(()=>{(async()=>{try{await lG()&&i(!0)}catch(s){console.error("Error getting notification token:",s)}})()},[]),H.useEffect(()=>(cG().then(r=>{var s,o;e({title:((s=r==null?void 0:r.notification)==null?void 0:s.title)||"",body:((o=r==null?void 0:r.notification)==null?void 0:o.body)||""})}),()=>{}),[]),{notification:t,isTokenFound:n}},dG="/assets/1-CxX14RXf.png",fG="/assets/2-dzZC46kH.png",hG="/assets/3-BVpzecDS.png",pG="/assets/4-FgKTefHi.png",mG="/assets/5-CYsRRRSR.png",gG="/assets/6-BYT0YEIB.png",vG="/assets/7-CDKoZ_J4.png",yG="/assets/8-BK1v4fck.png",_G="/assets/9-wTxtfl3P.png",TS=[dG,fG,hG,pG,mG,gG,vG,yG,_G],xG=()=>{const t=wi(g2),{notification:e}=uG(),n=H.useRef(null),{scrollYProgress:i}=nT(),r=zu(i,[0,1],[0,300]),s=zu(i,[0,.5],[1,0]),[o,a]=H.useState(0);return H.useEffect(()=>{const l=setInterval(()=>{a(c=>(c+1)%TS.length)},3e3);return()=>clearInterval(l)},[]),H.useEffect(()=>{e.title&&console.log("New notification:",e)},[e]),H.useEffect(()=>{const l=c=>{if(!n.current)return;const u=n.current.getBoundingClientRect(),d=c.clientX-u.left,f=c.clientY-u.top;n.current.style.setProperty("--mouse-x",`${d}px`),n.current.style.setProperty("--mouse-y",`${f}px`)};return window.addEventListener("mousemove",l),()=>window.removeEventListener("mousemove",l)},[]),E.jsxs("section",{id:"hero",className:"relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20",children:[E.jsxs("div",{className:"absolute inset-0 -z-0",children:[E.jsx(cV,{}),E.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(0,245,160,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(0,245,160,0.1),transparent_50%)]"})]}),E.jsxs(ve.div,{ref:n,style:{y:r,opacity:s},className:"container relative z-10",children:[E.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12 items-center",children:[E.jsxs("div",{className:"max-w-3xl",children:[E.jsxs(ve.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"text-6xl sm:text-7xl md:text-8xl font-bold mb-6",children:[E.jsx("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]",children:t.title.main}),E.jsx("br",{}),E.jsx("span",{className:"text-gray-800 dark:text-white",children:t.title.sub})]}),E.jsx(ve.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1},className:"text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl",children:t.description}),E.jsxs(ve.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},className:"flex flex-wrap gap-6",children:[E.jsxs(To,{to:t.buttons.primary.target,spy:!0,smooth:!0,offset:-80,duration:500,className:"group relative px-8 py-4 overflow-hidden rounded-full bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] text-white font-medium",children:[E.jsx("span",{className:"absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"}),E.jsxs("span",{className:"relative flex items-center",children:[t.buttons.primary.text," ",E.jsx(RL,{size:20,className:"ml-2"})]})]}),E.jsxs(To,{to:t.buttons.secondary.target,spy:!0,smooth:!0,offset:-80,duration:500,className:"group relative px-8 py-4 overflow-hidden rounded-full bg-transparent border-2 border-[#00F5A0] text-[#00F5A0] font-medium transition-colors hover:text-white",children:[E.jsx("span",{className:"absolute inset-0 w-full h-full bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"}),E.jsx("span",{className:"relative",children:t.buttons.secondary.text})]})]}),E.jsx(ve.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.4},className:"mt-16 flex items-center space-x-8",children:t.socialLinks.map((l,c)=>{const u=l.icon==="GitHub"?ko:l.icon==="Linkedin"?Lp:l.icon==="Twitter"?Ew:Du;return E.jsx(ve.a,{href:l.url,target:"_blank",rel:"noopener noreferrer",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.5+c*.1},className:"group relative p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors","aria-label":l.platform,children:E.jsx(u,{className:"w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-[#00F5A0] transition-colors"})},l.platform)})})]}),E.jsx("div",{className:"hidden md:block relative",children:E.jsx(Mg,{mode:"wait",children:E.jsxs(ve.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.5},className:"relative group",children:[E.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#00F5A0]/10 to-[#00D9F5]/10 rounded-2xl transform scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300"}),E.jsx("img",{src:TS[o],alt:`Slide ${o}`,className:"w-full h-[490px] object-cover rounded-b-2xl shadow-white"}),E.jsx(ve.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},className:"absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 via-gray/50 to-transparent rounded-b-2xl",children:E.jsx("p",{className:"text-white text-lg font-medium text-center",children:t.quotes[o]})})]},o)})})]}),E.jsx(ve.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.6},className:"hidden sm:absolute sm:bottom-8 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:block pointer-events-none",children:E.jsxs("div",{className:"flex flex-col items-center",children:[E.jsx("div",{className:"w-1 h-10 rounded-full bg-gradient-to-b from-[#00F5A0] to-transparent"}),E.jsx("span",{className:"mt-4 text-sm text-gray-500 dark:text-gray-400",children:"Scroll to explore"})]})})]})]})},SG={Code2:E.jsx(xg,{size:24}),Cpu:E.jsx(NL,{size:24}),Globe:E.jsx(UL,{size:24}),Codepen:E.jsx(DL,{size:24})},EG=()=>{var s,o;const t=H.useRef(null),e=Gr(t,{once:!0,margin:"-100px"}),n=wi(v2),i={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},r={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};return E.jsx("section",{id:"about",className:"section-padding bg-gray-50 dark:bg-navy-light",children:E.jsx("div",{className:"container",children:E.jsxs(ve.div,{ref:t,initial:"hidden",animate:e?"visible":"hidden",variants:i,className:"max-w-4xl mx-auto",children:[E.jsxs(ve.div,{variants:r,className:"text-center mb-12",children:[E.jsx("h2",{className:"section-title",children:n==null?void 0:n.title}),E.jsx("p",{className:"text-gray-600 dark:text-slate-light mt-6",children:n==null?void 0:n.subtitle})]}),E.jsxs("div",{className:"grid md:grid-cols-2 gap-10",children:[E.jsxs(ve.div,{variants:r,children:[E.jsx("h3",{className:"text-2xl font-bold mb-4 text-gray-800 dark:text-white",children:(n==null?void 0:n.introTitle)||"Get to know me!"}),E.jsx("div",{className:"space-y-4 text-gray-600 dark:text-slate-light",children:(s=n==null?void 0:n.intro)==null?void 0:s.map((a,l)=>E.jsx("p",{dangerouslySetInnerHTML:{__html:a}},l))})]}),E.jsxs(ve.div,{variants:r,children:[E.jsx("h3",{className:"text-2xl font-bold mb-4 text-gray-800 dark:text-white",children:n==null?void 0:n.servicesTitle}),E.jsx("div",{className:"space-y-6",children:(o=n==null?void 0:n.services)==null?void 0:o.map((a,l)=>E.jsxs("div",{className:"flex",children:[E.jsx("div",{className:"flex-shrink-0 mr-4",children:E.jsx("div",{className:"w-12 h-12 bg-teal-100 dark:bg-teal-900/30 text-teal-500 dark:text-teal-default rounded-lg flex items-center justify-center",children:SG[a.icon]||E.jsx(xg,{size:24})})}),E.jsxs("div",{children:[E.jsx("h4",{className:"text-lg font-semibold mb-1 text-gray-800 dark:text-white",children:a.title}),E.jsx("p",{className:"text-gray-600 dark:text-slate-light",children:a.description})]})]},l))})]})]})]})})})},MG={Palette:HL,Globe2:IL,Layers:kL,Code2:xg,LineChart:FL,Megaphone:zL},wG=()=>{var i;const t=H.useRef(null),e=Gr(t,{once:!0,margin:"-10%"}),n=wi(y2);return E.jsxs("section",{id:"services",className:"relative py-32 overflow-hidden",children:[E.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-[#00F5A0]/5 to-transparent dark:from-transparent dark:via-[#00F5A0]/2 dark:to-transparent"}),E.jsx("div",{ref:t,className:"container relative",children:E.jsxs(ve.div,{initial:{opacity:0},animate:e?{opacity:1}:{opacity:0},transition:{duration:1},className:"max-w-6xl mx-auto",children:[E.jsxs("div",{className:"text-center mb-20",children:[E.jsxs(ve.h2,{initial:{opacity:0,y:20},animate:e?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5},className:"text-4xl md:text-5xl font-bold mb-6",children:["Services",E.jsxs("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] ml-2",children:["< I />"," Provide"]})]}),E.jsx(ve.p,{initial:{opacity:0,y:20},animate:e?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5,delay:.1},className:"text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto",children:"Delivering exceptional digital solutions tailored to your needs"})]}),E.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:(i=n==null?void 0:n.items)==null?void 0:i.map((r,s)=>{const o=MG[r.icon];return E.jsx(ve.div,{initial:{opacity:0,y:20},animate:e?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5,delay:s*.1},className:"group relative",children:E.jsxs("div",{className:"relative h-full overflow-hidden rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 p-8 transition-all duration-300",children:[E.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/5 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),E.jsxs("div",{className:"relative",children:[E.jsx("div",{className:`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${r.gradient} p-0.5`,children:E.jsx("div",{className:"w-full h-full rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center",children:E.jsx(o,{className:"w-8 h-8 text-white"})})}),E.jsx("h3",{className:"text-2xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-[#00F5A0] transition-colors",children:r.title}),E.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-6",children:r.description}),E.jsx("div",{className:"absolute bottom-8 left-8 right-8",children:E.jsx("div",{className:"h-[1px] w-full bg-gradient-to-r from-transparent via-[#00F5A0]/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"})})]})]})},r.title)})})]})})]})},TG=({name:t,level:e,index:n})=>{const i=H.useRef(null),r=Gr(i,{once:!0});return E.jsxs(ve.div,{ref:i,initial:{opacity:0,x:-20},animate:r?{opacity:1,x:0}:{opacity:0,x:-20},transition:{duration:.5,delay:n*.1},className:"mb-6 last:mb-0",children:[E.jsxs("div",{className:"flex justify-between items-center mb-2",children:[E.jsx("span",{className:"text-gray-800 dark:text-gray-200 font-medium",children:t}),E.jsxs("span",{className:"text-[#00F5A0] dark:text-[#00F5A0]",children:[e,"%"]})]}),E.jsx("div",{className:"h-2 bg-gray-200/50 dark:bg-navy-light/50 backdrop-blur-sm rounded-full overflow-hidden",children:E.jsx(ve.div,{initial:{width:0},animate:r?{width:`${e}%`}:{width:0},transition:{duration:1,delay:n*.1},className:"h-full rounded-full bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]"})})]})},bG=()=>{const t=wi(_2),e=H.useRef(null),n=Gr(e,{once:!0,margin:"-10%"});return E.jsxs("section",{id:"skills",className:"relative py-32 overflow-hidden bg-gray-50/50 dark:bg-navy-light/20 backdrop-blur-sm",children:[E.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(0,245,160,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(0,245,160,0.05),transparent_50%)]"}),E.jsx("div",{ref:e,className:"container relative",children:E.jsxs(ve.div,{initial:{opacity:0},animate:n?{opacity:1}:{opacity:0},transition:{duration:1},className:"max-w-6xl mx-auto",children:[E.jsxs("div",{className:"text-center mb-20",children:[E.jsx(ve.h2,{initial:{opacity:0,y:20},animate:n?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5},className:"text-4xl md:text-5xl font-bold mb-6",children:E.jsx("span",{dangerouslySetInnerHTML:{__html:'My <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] ml-2">Expertise</span>'}})}),E.jsx(ve.p,{initial:{opacity:0,y:20},animate:n?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5,delay:.1},className:"text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto",children:t.subtitle})]}),E.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:t.categories.map((i,r)=>E.jsx(ve.div,{initial:{opacity:0,y:20},animate:n?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5,delay:r*.2},className:"group",children:E.jsxs("div",{className:"relative h-full overflow-hidden rounded-2xl  dark:bg-navy-default/40 backdrop-blur-xl border border-white/10 dark:border-white/5 p-8 hover:border-white/20 dark:hover:border-white/10 transition-all duration-300 transform hover:scale-[1.02]",children:[E.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#00F5A0]/5 to-[#00D9F5]/5 dark:from-[#00F5A0]/10 dark:to-[#00D9F5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),E.jsxs("div",{className:"relative",children:[E.jsx("h3",{className:"text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]",children:i.category}),E.jsx("div",{children:i.items.map((s,o)=>E.jsx(TG,{name:s.name,level:s.level,index:o},s.name))})]})]})},i.category))})]})})]})},Rh=[{id:1,title:"E-Commerce Platform",description:"A full-featured e-commerce platform with product management, user authentication, and payment processing.",image:"https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",technologies:["React","Node.js","MongoDB","Stripe"],github:"https://github.com/yourusername/project-1",demo:"https://project-1.example.com",category:"web",featured:!0},{id:2,title:"Task Management App",description:"A collaborative task management application with real-time updates, team management, and analytics.",image:"https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",technologies:["React","Redux","Firebase"],github:"https://github.com/yourusername/project-2",demo:"https://project-2.example.com",category:"web",featured:!0},{id:3,title:"Weather Dashboard",description:"A weather forecasting application that provides detailed weather information for any location.",image:"https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",technologies:["JavaScript","OpenWeather API","Chart.js"],github:"https://github.com/yourusername/project-3",demo:"https://project-3.example.com",category:"web",featured:!1},{id:4,title:"Social Media Mobile App",description:"A cross-platform mobile application for social media interaction with features like posts, comments, and messaging.",image:"https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",technologies:["React Native","Firebase","Redux"],github:"https://github.com/yourusername/project-4",demo:"https://project-4.example.com",category:"mobile",featured:!0},{id:5,title:"RESTful API Service",description:"A robust API service for data processing and integration with third-party systems.",image:"https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",technologies:["Node.js","Express","PostgreSQL","Docker"],github:"https://github.com/yourusername/project-5",demo:"https://project-5.example.com",category:"api",featured:!1},{id:6,title:"UI Component Library",description:"A comprehensive collection of reusable UI components with customization options.",image:"https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",technologies:["React","Storybook","Styled Components"],github:"https://github.com/yourusername/project-6",demo:"https://project-6.example.com",category:"ux",featured:!1}],AG=({project:t,index:e})=>{const n=H.useRef(null),{scrollYProgress:i}=nT({target:n,offset:["start end","end start"]}),r=zu(i,[0,1],[100,-100]),s=zu(i,[0,.3,.6,1],[0,1,1,0]);return wi(ew),E.jsx(ve.div,{ref:n,style:{y:r,opacity:s},className:"group relative mb-32 last:mb-0",children:E.jsxs("div",{className:"relative grid md:grid-cols-12 gap-8 items-center",children:[E.jsx("div",{className:`md:col-span-7 ${e%2===0?"md:order-1":"md:order-2"}`,children:E.jsxs("div",{className:"relative group overflow-hidden rounded-xl",children:[E.jsxs(ve.div,{initial:{scale:1.2,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.8},className:"relative aspect-video",children:[E.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#00F5A0]/20 to-[#00D9F5]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),E.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"})]}),E.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500",children:E.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-8 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500",children:E.jsxs("div",{className:"flex space-x-4",children:[E.jsx("a",{href:t.github,target:"_blank",rel:"noopener noreferrer",className:"p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors",children:E.jsx(ko,{className:"w-6 h-6 text-white"})}),E.jsx("a",{href:t.demo,target:"_blank",rel:"noopener noreferrer",className:"p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors",children:E.jsx(Pp,{className:"w-6 h-6 text-white"})})]})})})]})}),E.jsx("div",{className:`md:col-span-5 ${e%2===0?"md:order-2":"md:order-1"}`,children:E.jsxs("div",{className:"space-y-6",children:[E.jsx(ve.h3,{initial:{opacity:0,x:e%2===0?50:-50},animate:{opacity:1,x:0},transition:{duration:.5,delay:.2},className:"text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]",children:t.title}),E.jsx(ve.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.3},className:"text-gray-600 dark:text-gray-400 text-lg",children:t.description}),E.jsx(ve.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.4},className:"flex flex-wrap gap-3",children:t.technologies.map(o=>E.jsx("span",{className:"px-4 py-2 text-sm rounded-full bg-gradient-to-r from-[#00F5A0]/10 to-[#00D9F5]/10 text-[#00D9F5] font-medium backdrop-blur-sm",children:o},o))}),E.jsxs(ve.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.5},className:"flex space-x-6 pt-4",children:[E.jsxs("a",{href:t.github,target:"_blank",rel:"noopener noreferrer",className:"group relative px-6 py-3 overflow-hidden rounded-full bg-transparent border-2 border-[#00F5A0] text-[#00F5A0] font-medium transition-colors hover:text-white",children:[E.jsx("span",{className:"absolute inset-0 w-full h-full bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"}),E.jsxs("span",{className:"relative flex items-center",children:["View Code ",E.jsx(ko,{size:18,className:"ml-2"})]})]}),E.jsxs("a",{href:t.demo,target:"_blank",rel:"noopener noreferrer",className:"group relative px-6 py-3 overflow-hidden rounded-full bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] text-white font-medium",children:[E.jsx("span",{className:"absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"}),E.jsxs("span",{className:"relative flex items-center",children:["Live Demo ",E.jsx(Pp,{size:18,className:"ml-2"})]})]})]})]})})]})})},CG=({project:t})=>{const e=H.useRef(null),n=Gr(e,{once:!0,margin:"-10%"});return E.jsx(ve.div,{ref:e,initial:{opacity:0,y:20},animate:n?{opacity:1,y:0}:{opacity:0,y:20},exit:{opacity:0,y:-20},transition:{duration:.5},className:"group",children:E.jsxs("div",{className:"relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300 transform hover:scale-[1.02]",children:[E.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#00F5A0]/5 to-[#00D9F5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),E.jsxs("div",{className:"relative",children:[E.jsxs("div",{className:"flex justify-between items-start mb-6",children:[E.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-[#00F5A0]/20 to-[#00D9F5]/20 text-[#00D9F5] flex items-center justify-center",children:E.jsx(OL,{className:"w-6 h-6"})}),E.jsxs("div",{className:"flex space-x-4",children:[E.jsx("a",{href:t.github,target:"_blank",rel:"noopener noreferrer",className:"text-gray-600 dark:text-gray-400 hover:text-[#00F5A0] transition-colors",children:E.jsx(ko,{className:"w-5 h-5"})}),E.jsx("a",{href:t.demo,target:"_blank",rel:"noopener noreferrer",className:"text-gray-600 dark:text-gray-400 hover:text-[#00F5A0] transition-colors",children:E.jsx(Pp,{className:"w-5 h-5"})})]})]}),E.jsx("h4",{className:"text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-[#00F5A0] transition-colors",children:t.title}),E.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-6",children:t.description}),E.jsx("div",{className:"flex flex-wrap gap-2",children:t.technologies.map(i=>E.jsx("span",{className:"px-3 py-1 text-sm rounded-full bg-gradient-to-r from-[#00F5A0]/10 to-[#00D9F5]/10 text-[#00D9F5]",children:i},i))})]})]})})},RG=()=>{const[t,e]=H.useState("all"),n=H.useRef(null),i=Gr(n,{once:!0,margin:"-10%"}),r=wi(ew),s=Rh.filter(a=>a.featured),o=t==="all"?Rh:Rh.filter(a=>a.category===t);return H.useEffect(()=>{const a=l=>{if(!n.current)return;const c=n.current.getBoundingClientRect(),u=l.clientX-c.left,d=l.clientY-c.top;n.current.style.setProperty("--mouse-x",`${u}px`),n.current.style.setProperty("--mouse-y",`${d}px`)};return window.addEventListener("mousemove",a),()=>window.removeEventListener("mousemove",a)},[]),E.jsxs("section",{id:"projects",className:"relative py-20 overflow-hidden",children:[E.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(0,245,160,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(0,245,160,0.05),transparent_50%)]"}),E.jsx("div",{ref:n,className:"container relative",children:E.jsxs(ve.div,{initial:{opacity:0},animate:i?{opacity:1}:{opacity:0},transition:{duration:1},className:"max-w-6xl mx-auto",children:[E.jsxs("div",{className:"text-center mb-16",children:[E.jsx(ve.h2,{initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5},className:"text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]",children:"Featured Projects"}),E.jsx(ve.p,{initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5,delay:.2},className:"text-xl text-gray-600 dark:text-gray-400",children:"Explore my latest works and creative endeavors"})]}),E.jsx("div",{className:"mb-32",children:s.map((a,l)=>E.jsx(AG,{project:a,index:l},a.id))}),E.jsxs(ve.div,{initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5},children:[E.jsx("h3",{className:"text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]",children:"Other Noteworthy Projects"}),E.jsx("div",{className:"flex overflow-x-auto mb-12 pb-4 justify-center space-x-4",children:r.categories.map(a=>E.jsxs("button",{onClick:()=>e(a.id),className:`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                    ${t===a.id?"text-white bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]":"text-gray-600 dark:text-gray-400 hover:text-[#00F5A0]"}`,children:[E.jsx("span",{className:"relative z-10",children:a.label}),t===a.id&&E.jsx(ve.div,{layoutId:"activeCategory",className:"absolute inset-0 rounded-full bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]",transition:{type:"spring",bounce:.2,duration:.6}})]},a.id))}),E.jsx(Mg,{mode:"wait",children:E.jsx(ve.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.5},className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:o.filter(a=>!a.featured).map(a=>E.jsx(CG,{project:a},a.id))},t)})]}),E.jsx(ve.div,{initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5,delay:.3},className:"text-center mt-20",children:E.jsxs("a",{href:"https://github.com/yourusername",target:"_blank",rel:"noopener noreferrer",className:"group relative inline-flex items-center px-8 py-4 text-lg overflow-hidden rounded-full bg-transparent border-2 border-[#00F5A0] text-[#00F5A0] font-medium transition-colors hover:text-white",children:[E.jsx("span",{className:"absolute inset-0 w-full h-full bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"}),E.jsxs("span",{className:"relative flex items-center",children:["View More on GitHub ",E.jsx(PL,{className:"ml-2 w-5 h-5"})]})]})})]})})]})},PG=()=>{var i;const t=H.useRef(null),e=Gr(t,{once:!0,margin:"-10%"}),n=wi(x2);return E.jsxs("section",{id:"testimonials",className:"relative py-32 overflow-hidden",children:[E.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(0,245,160,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(0,245,160,0.05),transparent_50%)]"}),E.jsx("div",{ref:t,className:"container relative",children:E.jsxs(ve.div,{initial:{opacity:0},animate:e?{opacity:1}:{opacity:0},transition:{duration:1},className:"max-w-6xl mx-auto",children:[E.jsxs("div",{className:"text-center mb-20",children:[E.jsx(ve.p,{initial:{opacity:0,y:20},animate:e?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5},className:"text-lg text-[#00F5A0] font-medium mb-4",children:"Testimonials"}),E.jsxs(ve.h2,{initial:{opacity:0,y:20},animate:e?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5,delay:.1},className:"text-4xl md:text-5xl font-bold mb-6",children:["What My",E.jsx("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] ml-2",children:"Clients Say"})]})]}),E.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:(i=n==null?void 0:n.items)==null?void 0:i.map((r,s)=>E.jsx(ve.div,{initial:{opacity:0,y:20},animate:e?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5,delay:s*.1},className:"group",children:E.jsxs("div",{className:"relative overflow-hidden rounded-2xl  dark:bg-navy-default p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]",children:[E.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]"}),E.jsxs("div",{className:"flex items-center mb-6",children:[E.jsx("img",{src:r.image,alt:r.name,className:"w-16 h-16 rounded-full object-cover mr-4"}),E.jsxs("div",{children:[E.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white",children:r.name}),E.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:r.role})]})]}),E.jsx("div",{className:"flex mb-4",children:[...Array(r.rating)].map((o,a)=>E.jsx(WL,{className:"w-5 h-5 text-yellow-400 fill-current"},a))}),E.jsxs("blockquote",{className:"text-gray-600 dark:text-gray-400 italic",children:['"',r.content,'"']})]})},r.name))})]})})]})},LG=()=>{const t=H.useRef(null),e=Gr(t,{once:!0,margin:"-100px"}),[n,i]=H.useState("idle"),[r,s]=H.useState({name:"",email:"",subject:"",message:""}),o={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},a={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}},l=d=>{const{name:f,value:p}=d.target;s(g=>({...g,[f]:p}))},c=d=>{d.preventDefault(),i("submitting"),setTimeout(()=>{i("success"),s({name:"",email:"",subject:"",message:""}),setTimeout(()=>i("idle"),5e3)},1500)},u=wi(S2);return E.jsx("section",{id:"contact",className:"section-padding",children:E.jsx("div",{className:"container",children:E.jsxs(ve.div,{ref:t,initial:"hidden",animate:e?"visible":"hidden",variants:o,className:"max-w-6xl mx-auto",children:[E.jsxs(ve.div,{variants:a,className:"text-center mb-12",children:[E.jsx("h2",{className:"section-title",children:u.title}),E.jsx("p",{className:"text-gray-600 dark:text-slate-light mt-6",children:u.subtitle})]}),E.jsxs("div",{className:"grid md:grid-cols-5 gap-10",children:[E.jsxs(ve.div,{variants:a,className:"md:col-span-2 space-y-6",children:[E.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-6",children:u.leftHeader}),E.jsxs("p",{className:"text-gray-600 dark:text-slate-light mb-6",children:[u.info.description," "]}),E.jsxs("div",{className:"space-y-4",children:[E.jsxs("div",{className:"flex items-start",children:[E.jsx("div",{className:"flex-shrink-0 w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/30 text-teal-500 dark:text-teal-default flex items-center justify-center mr-4",children:E.jsx(BL,{size:20})}),E.jsxs("div",{children:[E.jsx("h4",{className:"font-medium text-gray-800 dark:text-white",children:"Location"}),E.jsx("p",{className:"text-gray-600 dark:text-slate-light",children:u.info.location})]})]}),E.jsxs("div",{className:"flex items-start",children:[E.jsx("div",{className:"flex-shrink-0 w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/30 text-teal-500 dark:text-teal-default flex items-center justify-center mr-4",children:E.jsx(Du,{size:20})}),E.jsxs("div",{children:[E.jsx("h4",{className:"font-medium text-gray-800 dark:text-white",children:"Email"}),E.jsx("a",{href:`mailto:${u.info.email}`,className:"text-gray-600 dark:text-slate-light hover:text-teal-500 dark:hover:text-teal-default transition-colors",children:u.info.email})]})]}),E.jsxs("div",{className:"flex items-start",children:[E.jsx("div",{className:"flex-shrink-0 w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/30 text-teal-500 dark:text-teal-default flex items-center justify-center mr-4",children:E.jsx(GL,{size:20})}),E.jsxs("div",{children:[E.jsx("h4",{className:"font-medium text-gray-800 dark:text-white",children:"Phone"}),E.jsx("a",{href:`tel:${u.info.email}`,className:"text-gray-600 dark:text-slate-light hover:text-teal-500 dark:hover:text-teal-default transition-colors",children:u.info.phone})]})]})]})]}),E.jsx(ve.div,{variants:a,className:"md:col-span-3",children:E.jsxs("div",{className:"card p-6",children:[E.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-6",children:u.rightHeader}),n==="success"?E.jsxs(ve.div,{initial:{opacity:0},animate:{opacity:1},className:"flex flex-col items-center justify-center py-10 text-center",children:[E.jsx(LL,{size:60,className:"text-green-500 mb-4"}),E.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-2",children:"Message Sent Successfully!"}),E.jsx("p",{className:"text-gray-600 dark:text-slate-light",children:"Thank you for reaching out. I'll get back to you soon."})]}):E.jsxs("form",{onSubmit:c,className:"space-y-4",children:[E.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[E.jsxs("div",{children:[E.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 dark:text-slate-light mb-1",children:"Name"}),E.jsx("input",{type:"text",id:"name",name:"name",value:r.name,onChange:l,required:!0,className:"w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-navy-light focus:border-teal-500 dark:focus:border-teal-default focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:focus:ring-teal-default/20 bg-white dark:bg-navy-default text-gray-800 dark:text-gray",placeholder:"Your Name"})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 dark:text-slate-light mb-1",children:"Email"}),E.jsx("input",{type:"email",id:"email",name:"email",value:r.email,onChange:l,required:!0,className:"w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-navy-light focus:border-teal-500 dark:focus:border-teal-default focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:focus:ring-teal-default/20 bg-white dark:bg-navy-default text-gray-800 dark:text-gray",placeholder:"Your Email"})]})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium text-gray-700 dark:text-slate-light mb-1",children:"Subject"}),E.jsx("input",{type:"text",id:"subject",name:"subject",value:r.subject,onChange:l,required:!0,className:"w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-navy-light focus:border-teal-500 dark:focus:border-teal-default focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:focus:ring-teal-default/20 bg-white dark:bg-navy-default text-gray-800 dark:text-gray",placeholder:"Subject"})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 dark:text-slate-light mb-1",children:"Message"}),E.jsx("textarea",{id:"message",name:"message",value:r.message,onChange:l,required:!0,rows:6,className:"w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-navy-light focus:border-teal-500 dark:focus:border-teal-default focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:focus:ring-teal-default/20 bg-white dark:bg-navy-default text-gray-800 dark:text-gray resize-none",placeholder:"Your Message"})]}),E.jsx("button",{type:"submit",disabled:n==="submitting",className:"btn-primary w-full justify-center",children:n==="submitting"?E.jsxs("span",{className:"inline-flex items-center",children:[E.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[E.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),E.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Sending..."]}):E.jsxs("span",{className:"inline-flex items-center",children:["Send Message ",E.jsx(jL,{size:16,className:"ml-2"})]})})]})]})})]})]})})})},DG=()=>{var n,i,r,s,o;const t=new Date().getFullYear(),e=wi(E2);return E.jsx("footer",{className:"py-10 bg-gray-900 dark:bg-navy-dark text-white",children:E.jsx("div",{className:"container",children:E.jsxs("div",{className:"max-w-6xl mx-auto",children:[E.jsxs("div",{className:"grid md:grid-cols-3 gap-10",children:[E.jsxs("div",{children:[E.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"<Mohd. Riyan />"}),E.jsx("p",{className:"text-gray-400 mb-6",children:(e==null?void 0:e.description)||"Your tagline or description goes here."}),E.jsxs("div",{className:"flex space-x-4",children:[E.jsx("a",{href:(n=e.socialLinks.find(a=>a.platform==="GitHub"))==null?void 0:n.url,target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-teal-default transition-colors","aria-label":"GitHub",children:E.jsx(ko,{size:20})}),E.jsx("a",{href:(i=e.socialLinks.find(a=>a.platform==="LinkedIn"))==null?void 0:i.url,target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-teal-default transition-colors","aria-label":"LinkedIn",children:E.jsx(Lp,{size:20})}),E.jsx("a",{href:(r=e.socialLinks.find(a=>a.platform==="Twitter"))==null?void 0:r.url,target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-teal-default transition-colors","aria-label":"Twitter",children:E.jsx(Ew,{size:20})}),E.jsx("a",{href:(s=e.socialLinks.find(a=>a.platform==="Email"))==null?void 0:s.url,className:"text-gray-400 hover:text-teal-default transition-colors","aria-label":"Email",children:E.jsx(Du,{size:20})})]})]}),E.jsxs("div",{children:[E.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"Quick Links"}),E.jsx("ul",{className:"space-y-2",children:(o=e==null?void 0:e.quickLinks)==null?void 0:o.map(a=>E.jsx("li",{children:E.jsx("a",{href:a.href,className:"text-gray-400 hover:text-teal-default transition-colors",children:a.name})},a.href))})]}),E.jsxs("div",{children:[E.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"Contact Me"}),E.jsxs("ul",{className:"space-y-2",children:[E.jsxs("li",{className:"flex items-center text-gray-400",children:[E.jsx(Du,{size:16,className:"mr-2"}),E.jsx("a",{href:`mailto:${e==null?void 0:e.contactme.email}`,className:"hover:text-teal-default transition-colors",children:e==null?void 0:e.contactme.email})]}),E.jsxs("li",{className:"flex items-center text-gray-400",children:[E.jsx(Lp,{size:16,className:"mr-2"}),E.jsx("a",{href:`https://${e.contactme.linkedin}`,target:"_blank",rel:"noopener noreferrer",className:"hover:text-teal-default transition-colors",children:e==null?void 0:e.contactme.linkedin})]}),E.jsxs("li",{className:"flex items-center text-gray-400",children:[E.jsx(ko,{size:16,className:"mr-2"}),E.jsx("a",{href:`https://${e.contactme.github}`,target:"_blank",rel:"noopener noreferrer",className:"hover:text-teal-default transition-colors",children:e==null?void 0:e.contactme.github})]})]})]})]}),E.jsxs("div",{className:"mt-10 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm",children:[E.jsxs("p",{children:["© ",t," Mohd. Riyan All rights reserved."]}),E.jsxs("p",{className:"mt-1",children:["Designed & Built with ",E.jsx("span",{className:"text-red-500",children:"❤"})," by Mohd. Riyan"]})]})]})})})},NG=()=>{const[t,e]=H.useState(0);return H.useEffect(()=>{const n=setInterval(()=>{e(i=>i>=100?(clearInterval(n),100):i+5)},50);return()=>clearInterval(n)},[]),E.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-white dark:bg-navy-default z-50",children:E.jsxs("div",{className:"w-64 flex flex-col items-center",children:[E.jsx(ve.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.5},className:"text-4xl text-teal-500 dark:text-teal-default mb-8 font-bold",children:"<Riyan />"}),E.jsx("div",{className:"w-full h-1 bg-gray-200 dark:bg-navy-light rounded-full overflow-hidden",children:E.jsx(ve.div,{className:"h-full bg-teal-500 dark:bg-teal-default",initial:{width:0},animate:{width:`${t}%`},transition:{duration:.2}})}),E.jsxs("div",{className:"mt-2 text-gray-600 dark:text-slate-light",children:["Know about me... ",t,"%"]})]})})},y0=H.createContext({cursorType:"",cursorChangeHandler:()=>{}}),IG=t=>{const[e,n]=H.useState(""),i=r=>{n(r)};return E.jsx(y0.Provider,{value:{cursorType:e,cursorChangeHandler:i},children:t.children})};function OG(){const[t,e]=H.useState({x:null,y:null});return H.useEffect(()=>{const n=i=>{const{clientX:r,clientY:s}=i;e({x:r,y:s})};return document.addEventListener("mousemove",n),()=>{document.removeEventListener("mousemove",n)}},[]),t}const UG=()=>{const{cursorType:t}=H.useContext(y0),{x:e,y:n}=OG(),[i,r]=H.useState(!1);return H.useEffect(()=>{const s=()=>{r(window.innerWidth<=768||"ontouchstart"in window)};return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),i||e===null||n===null?null:E.jsx("div",{className:"pointer-events-none fixed top-0 left-0 z-[999]",children:E.jsx("div",{style:{transform:`translate3d(${e-5}px, ${n-12}px, 0)`,border:"10px solid #00F5A0"},className:`w-4 h-4 rounded-full transition-transform duration-[40ms] ${t}`})})};function kG(){const[t,e]=H.useState(!0);H.useEffect(()=>{const r=setTimeout(()=>{e(!1)},2e3);return()=>clearTimeout(r)},[]);const{cursorType:n,cursorChangeHandler:i}=H.useContext(y0);return H.useEffect(()=>{const r=s=>{s.preventDefault()};return document.addEventListener("contextmenu",r),function(){document.removeEventListener("contextmenu",r)}},[]),t?E.jsx(NG,{}):E.jsxs(IG,{children:[E.jsx(UG,{}),E.jsx(XL,{children:E.jsxs("div",{className:"min-h-screen bg-white dark:bg-[#0A192F] text-gray-800 dark:text-gray-200 transition-colors duration-300",children:[E.jsx(KO,{}),E.jsxs("main",{children:[E.jsx(xG,{}),E.jsx(EG,{}),E.jsx(wG,{}),E.jsx(bG,{}),E.jsx(RG,{}),E.jsx(PG,{}),E.jsx(LG,{})]}),E.jsx(DG,{}),E.jsx("div",{onMouseEnter:()=>i("hovered"),onMouseLeave:()=>i("")})]})})]})}BM(document.getElementById("root")).render(E.jsx(H.StrictMode,{children:E.jsx(gR,{store:w2,children:E.jsx(kG,{})})}));
