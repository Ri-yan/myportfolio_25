(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Bl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},DS={exports:{}},Qu={},NS={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pl=Symbol.for("react.element"),zb=Symbol.for("react.portal"),Vb=Symbol.for("react.fragment"),Hb=Symbol.for("react.strict_mode"),Gb=Symbol.for("react.profiler"),jb=Symbol.for("react.provider"),Wb=Symbol.for("react.context"),$b=Symbol.for("react.forward_ref"),Xb=Symbol.for("react.suspense"),qb=Symbol.for("react.memo"),Yb=Symbol.for("react.lazy"),Pv=Symbol.iterator;function Kb(t){return t===null||typeof t!="object"?null:(t=Pv&&t[Pv]||t["@@iterator"],typeof t=="function"?t:null)}var IS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},OS=Object.assign,US={};function Wo(t,e,n){this.props=t,this.context=e,this.refs=US,this.updater=n||IS}Wo.prototype.isReactComponent={};Wo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Wo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function kS(){}kS.prototype=Wo.prototype;function _m(t,e,n){this.props=t,this.context=e,this.refs=US,this.updater=n||IS}var xm=_m.prototype=new kS;xm.constructor=_m;OS(xm,Wo.prototype);xm.isPureReactComponent=!0;var Lv=Array.isArray,FS=Object.prototype.hasOwnProperty,Sm={current:null},BS={key:!0,ref:!0,__self:!0,__source:!0};function zS(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)FS.call(e,i)&&!BS.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:pl,type:t,key:s,ref:o,props:r,_owner:Sm.current}}function Zb(t,e){return{$$typeof:pl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Em(t){return typeof t=="object"&&t!==null&&t.$$typeof===pl}function Qb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dv=/\/+/g;function qd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Qb(""+t.key):e.toString(36)}function Bc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case pl:case zb:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+qd(o,0):i,Lv(r)?(n="",t!=null&&(n=t.replace(Dv,"$&/")+"/"),Bc(r,e,n,"",function(c){return c})):r!=null&&(Em(r)&&(r=Zb(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Dv,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Lv(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+qd(s,a);o+=Bc(s,e,n,l,r)}else if(l=Kb(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+qd(s,a++),o+=Bc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function zl(t,e,n){if(t==null)return t;var i=[],r=0;return Bc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Jb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var fn={current:null},zc={transition:null},eA={ReactCurrentDispatcher:fn,ReactCurrentBatchConfig:zc,ReactCurrentOwner:Sm};function VS(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:zl,forEach:function(t,e,n){zl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return zl(t,function(){e++}),e},toArray:function(t){return zl(t,function(e){return e})||[]},only:function(t){if(!Em(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=Wo;Ge.Fragment=Vb;Ge.Profiler=Gb;Ge.PureComponent=_m;Ge.StrictMode=Hb;Ge.Suspense=Xb;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eA;Ge.act=VS;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=OS({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Sm.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)FS.call(e,l)&&!BS.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:pl,type:t.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(t){return t={$$typeof:Wb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:jb,_context:t},t.Consumer=t};Ge.createElement=zS;Ge.createFactory=function(t){var e=zS.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:$b,render:t}};Ge.isValidElement=Em;Ge.lazy=function(t){return{$$typeof:Yb,_payload:{_status:-1,_result:t},_init:Jb}};Ge.memo=function(t,e){return{$$typeof:qb,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=zc.transition;zc.transition={};try{t()}finally{zc.transition=e}};Ge.unstable_act=VS;Ge.useCallback=function(t,e){return fn.current.useCallback(t,e)};Ge.useContext=function(t){return fn.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return fn.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return fn.current.useEffect(t,e)};Ge.useId=function(){return fn.current.useId()};Ge.useImperativeHandle=function(t,e,n){return fn.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return fn.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return fn.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return fn.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return fn.current.useReducer(t,e,n)};Ge.useRef=function(t){return fn.current.useRef(t)};Ge.useState=function(t){return fn.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return fn.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return fn.current.useTransition()};Ge.version="18.3.1";NS.exports=Ge;var H=NS.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tA=H,nA=Symbol.for("react.element"),iA=Symbol.for("react.fragment"),rA=Object.prototype.hasOwnProperty,sA=tA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oA={key:!0,ref:!0,__self:!0,__source:!0};function HS(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)rA.call(e,i)&&!oA.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:nA,type:t,key:s,ref:o,props:r,_owner:sA.current}}Qu.Fragment=iA;Qu.jsx=HS;Qu.jsxs=HS;DS.exports=Qu;var E=DS.exports,GS={exports:{}},Un={},jS={exports:{}},WS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,U){var B=D.length;D.push(U);e:for(;0<B;){var K=B-1>>>1,ne=D[K];if(0<r(ne,U))D[K]=U,D[B]=ne,B=K;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var U=D[0],B=D.pop();if(B!==U){D[0]=B;e:for(var K=0,ne=D.length,Te=ne>>>1;K<Te;){var G=2*(K+1)-1,Q=D[G],ce=G+1,_e=D[ce];if(0>r(Q,B))ce<ne&&0>r(_e,Q)?(D[K]=_e,D[ce]=B,K=ce):(D[K]=Q,D[G]=B,K=G);else if(ce<ne&&0>r(_e,B))D[K]=_e,D[ce]=B,K=ce;else break e}}return U}function r(D,U){var B=D.sortIndex-U.sortIndex;return B!==0?B:D.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(D){for(var U=n(c);U!==null;){if(U.callback===null)i(c);else if(U.startTime<=D)i(c),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(c)}}function x(D){if(_=!1,y(D),!g)if(n(l)!==null)g=!0,W(T);else{var U=n(c);U!==null&&Y(x,U.startTime-D)}}function T(D,U){g=!1,_&&(_=!1,h(L),L=-1),p=!0;var B=f;try{for(y(U),d=n(l);d!==null&&(!(d.expirationTime>U)||D&&!R());){var K=d.callback;if(typeof K=="function"){d.callback=null,f=d.priorityLevel;var ne=K(d.expirationTime<=U);U=t.unstable_now(),typeof ne=="function"?d.callback=ne:d===n(l)&&i(l),y(U)}else i(l);d=n(l)}if(d!==null)var Te=!0;else{var G=n(c);G!==null&&Y(x,G.startTime-U),Te=!1}return Te}finally{d=null,f=B,p=!1}}var w=!1,b=null,L=-1,$=5,S=-1;function R(){return!(t.unstable_now()-S<$)}function q(){if(b!==null){var D=t.unstable_now();S=D;var U=!0;try{U=b(!0,D)}finally{U?Z():(w=!1,b=null)}}else w=!1}var Z;if(typeof v=="function")Z=function(){v(q)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,X=N.port2;N.port1.onmessage=q,Z=function(){X.postMessage(null)}}else Z=function(){m(q,0)};function W(D){b=D,w||(w=!0,Z())}function Y(D,U){L=m(function(){D(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,W(T))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var U=3;break;default:U=f}var B=f;f=U;try{return D()}finally{f=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,U){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var B=f;f=D;try{return U()}finally{f=B}},t.unstable_scheduleCallback=function(D,U,B){var K=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?K+B:K):B=K,D){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=B+ne,D={id:u++,callback:U,priorityLevel:D,startTime:B,expirationTime:ne,sortIndex:-1},B>K?(D.sortIndex=B,e(c,D),n(l)===null&&D===n(c)&&(_?(h(L),L=-1):_=!0,Y(x,B-K))):(D.sortIndex=ne,e(l,D),g||p||(g=!0,W(T))),D},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(D){var U=f;return function(){var B=f;f=U;try{return D.apply(this,arguments)}finally{f=B}}}})(WS);jS.exports=WS;var aA=jS.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lA=H,Ln=aA;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $S=new Set,Va={};function Is(t,e){Po(t,e),Po(t+"Capture",e)}function Po(t,e){for(Va[t]=e,t=0;t<e.length;t++)$S.add(e[t])}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ih=Object.prototype.hasOwnProperty,cA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nv={},Iv={};function uA(t){return Ih.call(Iv,t)?!0:Ih.call(Nv,t)?!1:cA.test(t)?Iv[t]=!0:(Nv[t]=!0,!1)}function dA(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function fA(t,e,n,i){if(e===null||typeof e>"u"||dA(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qt[t]=new hn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qt[e]=new hn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qt[t]=new hn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qt[t]=new hn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qt[t]=new hn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qt[t]=new hn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qt[t]=new hn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qt[t]=new hn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qt[t]=new hn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Mm=/[\-:]([a-z])/g;function wm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Mm,wm);qt[e]=new hn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Mm,wm);qt[e]=new hn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Mm,wm);qt[e]=new hn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qt[t]=new hn(t,1,!1,t.toLowerCase(),null,!1,!1)});qt.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qt[t]=new hn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Tm(t,e,n,i){var r=qt.hasOwnProperty(e)?qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(fA(e,n,r,i)&&(n=null),i||r===null?uA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var tr=lA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vl=Symbol.for("react.element"),eo=Symbol.for("react.portal"),to=Symbol.for("react.fragment"),bm=Symbol.for("react.strict_mode"),Oh=Symbol.for("react.profiler"),XS=Symbol.for("react.provider"),qS=Symbol.for("react.context"),Am=Symbol.for("react.forward_ref"),Uh=Symbol.for("react.suspense"),kh=Symbol.for("react.suspense_list"),Cm=Symbol.for("react.memo"),pr=Symbol.for("react.lazy"),YS=Symbol.for("react.offscreen"),Ov=Symbol.iterator;function na(t){return t===null||typeof t!="object"?null:(t=Ov&&t[Ov]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Object.assign,Yd;function ya(t){if(Yd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yd=e&&e[1]||""}return`
`+Yd+t}var Kd=!1;function Zd(t,e){if(!t||Kd)return"";Kd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Kd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ya(t):""}function hA(t){switch(t.tag){case 5:return ya(t.type);case 16:return ya("Lazy");case 13:return ya("Suspense");case 19:return ya("SuspenseList");case 0:case 2:case 15:return t=Zd(t.type,!1),t;case 11:return t=Zd(t.type.render,!1),t;case 1:return t=Zd(t.type,!0),t;default:return""}}function Fh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case to:return"Fragment";case eo:return"Portal";case Oh:return"Profiler";case bm:return"StrictMode";case Uh:return"Suspense";case kh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qS:return(t.displayName||"Context")+".Consumer";case XS:return(t._context.displayName||"Context")+".Provider";case Am:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cm:return e=t.displayName||null,e!==null?e:Fh(t.type)||"Memo";case pr:e=t._payload,t=t._init;try{return Fh(t(e))}catch{}}return null}function pA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fh(e);case 8:return e===bm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function KS(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function mA(t){var e=KS(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Hl(t){t._valueTracker||(t._valueTracker=mA(t))}function ZS(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=KS(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ru(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bh(t,e){var n=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Uv(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function QS(t,e){e=e.checked,e!=null&&Tm(t,"checked",e,!1)}function zh(t,e){QS(t,e);var n=Ir(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vh(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function kv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vh(t,e,n){(e!=="number"||ru(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _a=Array.isArray;function xo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Hh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(_a(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function JS(t,e){var n=Ir(e.value),i=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Bv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function eE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?eE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Gl,tE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Gl=Gl||document.createElement("div"),Gl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Gl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ha(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ba={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gA=["Webkit","ms","Moz","O"];Object.keys(ba).forEach(function(t){gA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ba[e]=ba[t]})});function nE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ba.hasOwnProperty(t)&&ba[t]?(""+e).trim():e+"px"}function iE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=nE(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var vA=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jh(t,e){if(e){if(vA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Wh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $h=null;function Rm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xh=null,So=null,Eo=null;function zv(t){if(t=vl(t)){if(typeof Xh!="function")throw Error(te(280));var e=t.stateNode;e&&(e=id(e),Xh(t.stateNode,t.type,e))}}function rE(t){So?Eo?Eo.push(t):Eo=[t]:So=t}function sE(){if(So){var t=So,e=Eo;if(Eo=So=null,zv(t),e)for(t=0;t<e.length;t++)zv(e[t])}}function oE(t,e){return t(e)}function aE(){}var Qd=!1;function lE(t,e,n){if(Qd)return t(e,n);Qd=!0;try{return oE(t,e,n)}finally{Qd=!1,(So!==null||Eo!==null)&&(aE(),sE())}}function Ga(t,e){var n=t.stateNode;if(n===null)return null;var i=id(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var qh=!1;if(qi)try{var ia={};Object.defineProperty(ia,"passive",{get:function(){qh=!0}}),window.addEventListener("test",ia,ia),window.removeEventListener("test",ia,ia)}catch{qh=!1}function yA(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Aa=!1,su=null,ou=!1,Yh=null,_A={onError:function(t){Aa=!0,su=t}};function xA(t,e,n,i,r,s,o,a,l){Aa=!1,su=null,yA.apply(_A,arguments)}function SA(t,e,n,i,r,s,o,a,l){if(xA.apply(this,arguments),Aa){if(Aa){var c=su;Aa=!1,su=null}else throw Error(te(198));ou||(ou=!0,Yh=c)}}function Os(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function cE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vv(t){if(Os(t)!==t)throw Error(te(188))}function EA(t){var e=t.alternate;if(!e){if(e=Os(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Vv(r),t;if(s===i)return Vv(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function uE(t){return t=EA(t),t!==null?dE(t):null}function dE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=dE(t);if(e!==null)return e;t=t.sibling}return null}var fE=Ln.unstable_scheduleCallback,Hv=Ln.unstable_cancelCallback,MA=Ln.unstable_shouldYield,wA=Ln.unstable_requestPaint,At=Ln.unstable_now,TA=Ln.unstable_getCurrentPriorityLevel,Pm=Ln.unstable_ImmediatePriority,hE=Ln.unstable_UserBlockingPriority,au=Ln.unstable_NormalPriority,bA=Ln.unstable_LowPriority,pE=Ln.unstable_IdlePriority,Ju=null,Si=null;function AA(t){if(Si&&typeof Si.onCommitFiberRoot=="function")try{Si.onCommitFiberRoot(Ju,t,void 0,(t.current.flags&128)===128)}catch{}}var li=Math.clz32?Math.clz32:PA,CA=Math.log,RA=Math.LN2;function PA(t){return t>>>=0,t===0?32:31-(CA(t)/RA|0)|0}var jl=64,Wl=4194304;function xa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function lu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=xa(a):(s&=o,s!==0&&(i=xa(s)))}else o=n&~r,o!==0?i=xa(o):s!==0&&(i=xa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-li(e),r=1<<n,i|=t[n],e&=~r;return i}function LA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function DA(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-li(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=LA(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Kh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mE(){var t=jl;return jl<<=1,!(jl&4194240)&&(jl=64),t}function Jd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ml(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-li(e),t[e]=n}function NA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-li(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Lm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-li(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Qe=0;function gE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var vE,Dm,yE,_E,xE,Zh=!1,$l=[],Sr=null,Er=null,Mr=null,ja=new Map,Wa=new Map,gr=[],IA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gv(t,e){switch(t){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":ja.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wa.delete(e.pointerId)}}function ra(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=vl(e),e!==null&&Dm(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function OA(t,e,n,i,r){switch(e){case"focusin":return Sr=ra(Sr,t,e,n,i,r),!0;case"dragenter":return Er=ra(Er,t,e,n,i,r),!0;case"mouseover":return Mr=ra(Mr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ja.set(s,ra(ja.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Wa.set(s,ra(Wa.get(s)||null,t,e,n,i,r)),!0}return!1}function SE(t){var e=cs(t.target);if(e!==null){var n=Os(e);if(n!==null){if(e=n.tag,e===13){if(e=cE(n),e!==null){t.blockedOn=e,xE(t.priority,function(){yE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);$h=i,n.target.dispatchEvent(i),$h=null}else return e=vl(n),e!==null&&Dm(e),t.blockedOn=n,!1;e.shift()}return!0}function jv(t,e,n){Vc(t)&&n.delete(e)}function UA(){Zh=!1,Sr!==null&&Vc(Sr)&&(Sr=null),Er!==null&&Vc(Er)&&(Er=null),Mr!==null&&Vc(Mr)&&(Mr=null),ja.forEach(jv),Wa.forEach(jv)}function sa(t,e){t.blockedOn===e&&(t.blockedOn=null,Zh||(Zh=!0,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,UA)))}function $a(t){function e(r){return sa(r,t)}if(0<$l.length){sa($l[0],t);for(var n=1;n<$l.length;n++){var i=$l[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Sr!==null&&sa(Sr,t),Er!==null&&sa(Er,t),Mr!==null&&sa(Mr,t),ja.forEach(e),Wa.forEach(e),n=0;n<gr.length;n++)i=gr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<gr.length&&(n=gr[0],n.blockedOn===null);)SE(n),n.blockedOn===null&&gr.shift()}var Mo=tr.ReactCurrentBatchConfig,cu=!0;function kA(t,e,n,i){var r=Qe,s=Mo.transition;Mo.transition=null;try{Qe=1,Nm(t,e,n,i)}finally{Qe=r,Mo.transition=s}}function FA(t,e,n,i){var r=Qe,s=Mo.transition;Mo.transition=null;try{Qe=4,Nm(t,e,n,i)}finally{Qe=r,Mo.transition=s}}function Nm(t,e,n,i){if(cu){var r=Qh(t,e,n,i);if(r===null)uf(t,e,i,uu,n),Gv(t,i);else if(OA(r,t,e,n,i))i.stopPropagation();else if(Gv(t,i),e&4&&-1<IA.indexOf(t)){for(;r!==null;){var s=vl(r);if(s!==null&&vE(s),s=Qh(t,e,n,i),s===null&&uf(t,e,i,uu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else uf(t,e,i,null,n)}}var uu=null;function Qh(t,e,n,i){if(uu=null,t=Rm(i),t=cs(t),t!==null)if(e=Os(t),e===null)t=null;else if(n=e.tag,n===13){if(t=cE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return uu=t,null}function EE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(TA()){case Pm:return 1;case hE:return 4;case au:case bA:return 16;case pE:return 536870912;default:return 16}default:return 16}}var yr=null,Im=null,Hc=null;function ME(){if(Hc)return Hc;var t,e=Im,n=e.length,i,r="value"in yr?yr.value:yr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Hc=r.slice(t,1<i?1-i:void 0)}function Gc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xl(){return!0}function Wv(){return!1}function kn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xl:Wv,this.isPropagationStopped=Wv,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xl)},persist:function(){},isPersistent:Xl}),e}var $o={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Om=kn($o),gl=xt({},$o,{view:0,detail:0}),BA=kn(gl),ef,tf,oa,ed=xt({},gl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Um,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oa&&(oa&&t.type==="mousemove"?(ef=t.screenX-oa.screenX,tf=t.screenY-oa.screenY):tf=ef=0,oa=t),ef)},movementY:function(t){return"movementY"in t?t.movementY:tf}}),$v=kn(ed),zA=xt({},ed,{dataTransfer:0}),VA=kn(zA),HA=xt({},gl,{relatedTarget:0}),nf=kn(HA),GA=xt({},$o,{animationName:0,elapsedTime:0,pseudoElement:0}),jA=kn(GA),WA=xt({},$o,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$A=kn(WA),XA=xt({},$o,{data:0}),Xv=kn(XA),qA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},YA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},KA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ZA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=KA[t])?!!e[t]:!1}function Um(){return ZA}var QA=xt({},gl,{key:function(t){if(t.key){var e=qA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Gc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?YA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Um,charCode:function(t){return t.type==="keypress"?Gc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),JA=kn(QA),eC=xt({},ed,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qv=kn(eC),tC=xt({},gl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Um}),nC=kn(tC),iC=xt({},$o,{propertyName:0,elapsedTime:0,pseudoElement:0}),rC=kn(iC),sC=xt({},ed,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),oC=kn(sC),aC=[9,13,27,32],km=qi&&"CompositionEvent"in window,Ca=null;qi&&"documentMode"in document&&(Ca=document.documentMode);var lC=qi&&"TextEvent"in window&&!Ca,wE=qi&&(!km||Ca&&8<Ca&&11>=Ca),Yv=" ",Kv=!1;function TE(t,e){switch(t){case"keyup":return aC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var no=!1;function cC(t,e){switch(t){case"compositionend":return bE(e);case"keypress":return e.which!==32?null:(Kv=!0,Yv);case"textInput":return t=e.data,t===Yv&&Kv?null:t;default:return null}}function uC(t,e){if(no)return t==="compositionend"||!km&&TE(t,e)?(t=ME(),Hc=Im=yr=null,no=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return wE&&e.locale!=="ko"?null:e.data;default:return null}}var dC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dC[t.type]:e==="textarea"}function AE(t,e,n,i){rE(i),e=du(e,"onChange"),0<e.length&&(n=new Om("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ra=null,Xa=null;function fC(t){FE(t,0)}function td(t){var e=so(t);if(ZS(e))return t}function hC(t,e){if(t==="change")return e}var CE=!1;if(qi){var rf;if(qi){var sf="oninput"in document;if(!sf){var Qv=document.createElement("div");Qv.setAttribute("oninput","return;"),sf=typeof Qv.oninput=="function"}rf=sf}else rf=!1;CE=rf&&(!document.documentMode||9<document.documentMode)}function Jv(){Ra&&(Ra.detachEvent("onpropertychange",RE),Xa=Ra=null)}function RE(t){if(t.propertyName==="value"&&td(Xa)){var e=[];AE(e,Xa,t,Rm(t)),lE(fC,e)}}function pC(t,e,n){t==="focusin"?(Jv(),Ra=e,Xa=n,Ra.attachEvent("onpropertychange",RE)):t==="focusout"&&Jv()}function mC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return td(Xa)}function gC(t,e){if(t==="click")return td(e)}function vC(t,e){if(t==="input"||t==="change")return td(e)}function yC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var di=typeof Object.is=="function"?Object.is:yC;function qa(t,e){if(di(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ih.call(e,r)||!di(t[r],e[r]))return!1}return!0}function e0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function t0(t,e){var n=e0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=e0(n)}}function PE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?PE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function LE(){for(var t=window,e=ru();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ru(t.document)}return e}function Fm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _C(t){var e=LE(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&PE(n.ownerDocument.documentElement,n)){if(i!==null&&Fm(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=t0(n,s);var o=t0(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xC=qi&&"documentMode"in document&&11>=document.documentMode,io=null,Jh=null,Pa=null,ep=!1;function n0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ep||io==null||io!==ru(i)||(i=io,"selectionStart"in i&&Fm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Pa&&qa(Pa,i)||(Pa=i,i=du(Jh,"onSelect"),0<i.length&&(e=new Om("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=io)))}function ql(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ro={animationend:ql("Animation","AnimationEnd"),animationiteration:ql("Animation","AnimationIteration"),animationstart:ql("Animation","AnimationStart"),transitionend:ql("Transition","TransitionEnd")},of={},DE={};qi&&(DE=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function nd(t){if(of[t])return of[t];if(!ro[t])return t;var e=ro[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in DE)return of[t]=e[n];return t}var NE=nd("animationend"),IE=nd("animationiteration"),OE=nd("animationstart"),UE=nd("transitionend"),kE=new Map,i0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(t,e){kE.set(t,e),Is(e,[t])}for(var af=0;af<i0.length;af++){var lf=i0[af],SC=lf.toLowerCase(),EC=lf[0].toUpperCase()+lf.slice(1);zr(SC,"on"+EC)}zr(NE,"onAnimationEnd");zr(IE,"onAnimationIteration");zr(OE,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(UE,"onTransitionEnd");Po("onMouseEnter",["mouseout","mouseover"]);Po("onMouseLeave",["mouseout","mouseover"]);Po("onPointerEnter",["pointerout","pointerover"]);Po("onPointerLeave",["pointerout","pointerover"]);Is("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Is("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Is("onBeforeInput",["compositionend","keypress","textInput","paste"]);Is("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Is("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Is("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sa));function r0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,SA(i,e,void 0,t),t.currentTarget=null}function FE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;r0(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;r0(r,a,c),s=l}}}if(ou)throw t=Yh,ou=!1,Yh=null,t}function at(t,e){var n=e[sp];n===void 0&&(n=e[sp]=new Set);var i=t+"__bubble";n.has(i)||(BE(e,t,2,!1),n.add(i))}function cf(t,e,n){var i=0;e&&(i|=4),BE(n,t,i,e)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function Ya(t){if(!t[Yl]){t[Yl]=!0,$S.forEach(function(n){n!=="selectionchange"&&(MC.has(n)||cf(n,!1,t),cf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Yl]||(e[Yl]=!0,cf("selectionchange",!1,e))}}function BE(t,e,n,i){switch(EE(e)){case 1:var r=kA;break;case 4:r=FA;break;default:r=Nm}n=r.bind(null,e,n,t),r=void 0,!qh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function uf(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=cs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}lE(function(){var c=s,u=Rm(n),d=[];e:{var f=kE.get(t);if(f!==void 0){var p=Om,g=t;switch(t){case"keypress":if(Gc(n)===0)break e;case"keydown":case"keyup":p=JA;break;case"focusin":g="focus",p=nf;break;case"focusout":g="blur",p=nf;break;case"beforeblur":case"afterblur":p=nf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=$v;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=VA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=nC;break;case NE:case IE:case OE:p=jA;break;case UE:p=rC;break;case"scroll":p=BA;break;case"wheel":p=oC;break;case"copy":case"cut":case"paste":p=$A;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=qv}var _=(e&4)!==0,m=!_&&t==="scroll",h=_?f!==null?f+"Capture":null:f;_=[];for(var v=c,y;v!==null;){y=v;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,h!==null&&(x=Ga(v,h),x!=null&&_.push(Ka(v,x,y)))),m)break;v=v.return}0<_.length&&(f=new p(f,g,null,n,u),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==$h&&(g=n.relatedTarget||n.fromElement)&&(cs(g)||g[Yi]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?cs(g):null,g!==null&&(m=Os(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(_=$v,x="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=qv,x="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?f:so(p),y=g==null?f:so(g),f=new _(x,v+"leave",p,n,u),f.target=m,f.relatedTarget=y,x=null,cs(u)===c&&(_=new _(h,v+"enter",g,n,u),_.target=y,_.relatedTarget=m,x=_),m=x,p&&g)t:{for(_=p,h=g,v=0,y=_;y;y=ks(y))v++;for(y=0,x=h;x;x=ks(x))y++;for(;0<v-y;)_=ks(_),v--;for(;0<y-v;)h=ks(h),y--;for(;v--;){if(_===h||h!==null&&_===h.alternate)break t;_=ks(_),h=ks(h)}_=null}else _=null;p!==null&&s0(d,f,p,_,!1),g!==null&&m!==null&&s0(d,m,g,_,!0)}}e:{if(f=c?so(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=hC;else if(Zv(f))if(CE)T=vC;else{T=mC;var w=pC}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=gC);if(T&&(T=T(t,c))){AE(d,T,n,u);break e}w&&w(t,f,c),t==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&Vh(f,"number",f.value)}switch(w=c?so(c):window,t){case"focusin":(Zv(w)||w.contentEditable==="true")&&(io=w,Jh=c,Pa=null);break;case"focusout":Pa=Jh=io=null;break;case"mousedown":ep=!0;break;case"contextmenu":case"mouseup":case"dragend":ep=!1,n0(d,n,u);break;case"selectionchange":if(xC)break;case"keydown":case"keyup":n0(d,n,u)}var b;if(km)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else no?TE(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(wE&&n.locale!=="ko"&&(no||L!=="onCompositionStart"?L==="onCompositionEnd"&&no&&(b=ME()):(yr=u,Im="value"in yr?yr.value:yr.textContent,no=!0)),w=du(c,L),0<w.length&&(L=new Xv(L,t,null,n,u),d.push({event:L,listeners:w}),b?L.data=b:(b=bE(n),b!==null&&(L.data=b)))),(b=lC?cC(t,n):uC(t,n))&&(c=du(c,"onBeforeInput"),0<c.length&&(u=new Xv("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=b))}FE(d,e)})}function Ka(t,e,n){return{instance:t,listener:e,currentTarget:n}}function du(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ga(t,n),s!=null&&i.unshift(Ka(t,s,r)),s=Ga(t,e),s!=null&&i.push(Ka(t,s,r))),t=t.return}return i}function ks(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function s0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ga(n,s),l!=null&&o.unshift(Ka(n,l,a))):r||(l=Ga(n,s),l!=null&&o.push(Ka(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var wC=/\r\n?/g,TC=/\u0000|\uFFFD/g;function o0(t){return(typeof t=="string"?t:""+t).replace(wC,`
`).replace(TC,"")}function Kl(t,e,n){if(e=o0(e),o0(t)!==e&&n)throw Error(te(425))}function fu(){}var tp=null,np=null;function ip(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rp=typeof setTimeout=="function"?setTimeout:void 0,bC=typeof clearTimeout=="function"?clearTimeout:void 0,a0=typeof Promise=="function"?Promise:void 0,AC=typeof queueMicrotask=="function"?queueMicrotask:typeof a0<"u"?function(t){return a0.resolve(null).then(t).catch(CC)}:rp;function CC(t){setTimeout(function(){throw t})}function df(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),$a(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);$a(e)}function wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function l0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Xo=Math.random().toString(36).slice(2),yi="__reactFiber$"+Xo,Za="__reactProps$"+Xo,Yi="__reactContainer$"+Xo,sp="__reactEvents$"+Xo,RC="__reactListeners$"+Xo,PC="__reactHandles$"+Xo;function cs(t){var e=t[yi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Yi]||n[yi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=l0(t);t!==null;){if(n=t[yi])return n;t=l0(t)}return e}t=n,n=t.parentNode}return null}function vl(t){return t=t[yi]||t[Yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function so(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function id(t){return t[Za]||null}var op=[],oo=-1;function Vr(t){return{current:t}}function ut(t){0>oo||(t.current=op[oo],op[oo]=null,oo--)}function st(t,e){oo++,op[oo]=t.current,t.current=e}var Or={},sn=Vr(Or),_n=Vr(!1),Es=Or;function Lo(t,e){var n=t.type.contextTypes;if(!n)return Or;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function xn(t){return t=t.childContextTypes,t!=null}function hu(){ut(_n),ut(sn)}function c0(t,e,n){if(sn.current!==Or)throw Error(te(168));st(sn,e),st(_n,n)}function zE(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,pA(t)||"Unknown",r));return xt({},n,i)}function pu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Or,Es=sn.current,st(sn,t),st(_n,_n.current),!0}function u0(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=zE(t,e,Es),i.__reactInternalMemoizedMergedChildContext=t,ut(_n),ut(sn),st(sn,t)):ut(_n),st(_n,n)}var Ui=null,rd=!1,ff=!1;function VE(t){Ui===null?Ui=[t]:Ui.push(t)}function LC(t){rd=!0,VE(t)}function Hr(){if(!ff&&Ui!==null){ff=!0;var t=0,e=Qe;try{var n=Ui;for(Qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ui=null,rd=!1}catch(r){throw Ui!==null&&(Ui=Ui.slice(t+1)),fE(Pm,Hr),r}finally{Qe=e,ff=!1}}return null}var ao=[],lo=0,mu=null,gu=0,Gn=[],jn=0,Ms=null,Bi=1,zi="";function Jr(t,e){ao[lo++]=gu,ao[lo++]=mu,mu=t,gu=e}function HE(t,e,n){Gn[jn++]=Bi,Gn[jn++]=zi,Gn[jn++]=Ms,Ms=t;var i=Bi;t=zi;var r=32-li(i)-1;i&=~(1<<r),n+=1;var s=32-li(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Bi=1<<32-li(e)+r|n<<r|i,zi=s+t}else Bi=1<<s|n<<r|i,zi=t}function Bm(t){t.return!==null&&(Jr(t,1),HE(t,1,0))}function zm(t){for(;t===mu;)mu=ao[--lo],ao[lo]=null,gu=ao[--lo],ao[lo]=null;for(;t===Ms;)Ms=Gn[--jn],Gn[jn]=null,zi=Gn[--jn],Gn[jn]=null,Bi=Gn[--jn],Gn[jn]=null}var Pn=null,Rn=null,ft=!1,ri=null;function GE(t,e){var n=Xn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function d0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pn=t,Rn=wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pn=t,Rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ms!==null?{id:Bi,overflow:zi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pn=t,Rn=null,!0):!1;default:return!1}}function ap(t){return(t.mode&1)!==0&&(t.flags&128)===0}function lp(t){if(ft){var e=Rn;if(e){var n=e;if(!d0(t,e)){if(ap(t))throw Error(te(418));e=wr(n.nextSibling);var i=Pn;e&&d0(t,e)?GE(i,n):(t.flags=t.flags&-4097|2,ft=!1,Pn=t)}}else{if(ap(t))throw Error(te(418));t.flags=t.flags&-4097|2,ft=!1,Pn=t}}}function f0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pn=t}function Zl(t){if(t!==Pn)return!1;if(!ft)return f0(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ip(t.type,t.memoizedProps)),e&&(e=Rn)){if(ap(t))throw jE(),Error(te(418));for(;e;)GE(t,e),e=wr(e.nextSibling)}if(f0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rn=wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rn=null}}else Rn=Pn?wr(t.stateNode.nextSibling):null;return!0}function jE(){for(var t=Rn;t;)t=wr(t.nextSibling)}function Do(){Rn=Pn=null,ft=!1}function Vm(t){ri===null?ri=[t]:ri.push(t)}var DC=tr.ReactCurrentBatchConfig;function aa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function Ql(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function h0(t){var e=t._init;return e(t._payload)}function WE(t){function e(h,v){if(t){var y=h.deletions;y===null?(h.deletions=[v],h.flags|=16):y.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Cr(h,v),h.index=0,h.sibling=null,h}function s(h,v,y){return h.index=y,t?(y=h.alternate,y!==null?(y=y.index,y<v?(h.flags|=2,v):y):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,v,y,x){return v===null||v.tag!==6?(v=_f(y,h.mode,x),v.return=h,v):(v=r(v,y),v.return=h,v)}function l(h,v,y,x){var T=y.type;return T===to?u(h,v,y.props.children,x,y.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===pr&&h0(T)===v.type)?(x=r(v,y.props),x.ref=aa(h,v,y),x.return=h,x):(x=Kc(y.type,y.key,y.props,null,h.mode,x),x.ref=aa(h,v,y),x.return=h,x)}function c(h,v,y,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=xf(y,h.mode,x),v.return=h,v):(v=r(v,y.children||[]),v.return=h,v)}function u(h,v,y,x,T){return v===null||v.tag!==7?(v=gs(y,h.mode,x,T),v.return=h,v):(v=r(v,y),v.return=h,v)}function d(h,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=_f(""+v,h.mode,y),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Vl:return y=Kc(v.type,v.key,v.props,null,h.mode,y),y.ref=aa(h,null,v),y.return=h,y;case eo:return v=xf(v,h.mode,y),v.return=h,v;case pr:var x=v._init;return d(h,x(v._payload),y)}if(_a(v)||na(v))return v=gs(v,h.mode,y,null),v.return=h,v;Ql(h,v)}return null}function f(h,v,y,x){var T=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(h,v,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Vl:return y.key===T?l(h,v,y,x):null;case eo:return y.key===T?c(h,v,y,x):null;case pr:return T=y._init,f(h,v,T(y._payload),x)}if(_a(y)||na(y))return T!==null?null:u(h,v,y,x,null);Ql(h,y)}return null}function p(h,v,y,x,T){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(y)||null,a(v,h,""+x,T);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Vl:return h=h.get(x.key===null?y:x.key)||null,l(v,h,x,T);case eo:return h=h.get(x.key===null?y:x.key)||null,c(v,h,x,T);case pr:var w=x._init;return p(h,v,y,w(x._payload),T)}if(_a(x)||na(x))return h=h.get(y)||null,u(v,h,x,T,null);Ql(v,x)}return null}function g(h,v,y,x){for(var T=null,w=null,b=v,L=v=0,$=null;b!==null&&L<y.length;L++){b.index>L?($=b,b=null):$=b.sibling;var S=f(h,b,y[L],x);if(S===null){b===null&&(b=$);break}t&&b&&S.alternate===null&&e(h,b),v=s(S,v,L),w===null?T=S:w.sibling=S,w=S,b=$}if(L===y.length)return n(h,b),ft&&Jr(h,L),T;if(b===null){for(;L<y.length;L++)b=d(h,y[L],x),b!==null&&(v=s(b,v,L),w===null?T=b:w.sibling=b,w=b);return ft&&Jr(h,L),T}for(b=i(h,b);L<y.length;L++)$=p(b,h,L,y[L],x),$!==null&&(t&&$.alternate!==null&&b.delete($.key===null?L:$.key),v=s($,v,L),w===null?T=$:w.sibling=$,w=$);return t&&b.forEach(function(R){return e(h,R)}),ft&&Jr(h,L),T}function _(h,v,y,x){var T=na(y);if(typeof T!="function")throw Error(te(150));if(y=T.call(y),y==null)throw Error(te(151));for(var w=T=null,b=v,L=v=0,$=null,S=y.next();b!==null&&!S.done;L++,S=y.next()){b.index>L?($=b,b=null):$=b.sibling;var R=f(h,b,S.value,x);if(R===null){b===null&&(b=$);break}t&&b&&R.alternate===null&&e(h,b),v=s(R,v,L),w===null?T=R:w.sibling=R,w=R,b=$}if(S.done)return n(h,b),ft&&Jr(h,L),T;if(b===null){for(;!S.done;L++,S=y.next())S=d(h,S.value,x),S!==null&&(v=s(S,v,L),w===null?T=S:w.sibling=S,w=S);return ft&&Jr(h,L),T}for(b=i(h,b);!S.done;L++,S=y.next())S=p(b,h,L,S.value,x),S!==null&&(t&&S.alternate!==null&&b.delete(S.key===null?L:S.key),v=s(S,v,L),w===null?T=S:w.sibling=S,w=S);return t&&b.forEach(function(q){return e(h,q)}),ft&&Jr(h,L),T}function m(h,v,y,x){if(typeof y=="object"&&y!==null&&y.type===to&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Vl:e:{for(var T=y.key,w=v;w!==null;){if(w.key===T){if(T=y.type,T===to){if(w.tag===7){n(h,w.sibling),v=r(w,y.props.children),v.return=h,h=v;break e}}else if(w.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===pr&&h0(T)===w.type){n(h,w.sibling),v=r(w,y.props),v.ref=aa(h,w,y),v.return=h,h=v;break e}n(h,w);break}else e(h,w);w=w.sibling}y.type===to?(v=gs(y.props.children,h.mode,x,y.key),v.return=h,h=v):(x=Kc(y.type,y.key,y.props,null,h.mode,x),x.ref=aa(h,v,y),x.return=h,h=x)}return o(h);case eo:e:{for(w=y.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(h,v.sibling),v=r(v,y.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=xf(y,h.mode,x),v.return=h,h=v}return o(h);case pr:return w=y._init,m(h,v,w(y._payload),x)}if(_a(y))return g(h,v,y,x);if(na(y))return _(h,v,y,x);Ql(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,y),v.return=h,h=v):(n(h,v),v=_f(y,h.mode,x),v.return=h,h=v),o(h)):n(h,v)}return m}var No=WE(!0),$E=WE(!1),vu=Vr(null),yu=null,co=null,Hm=null;function Gm(){Hm=co=yu=null}function jm(t){var e=vu.current;ut(vu),t._currentValue=e}function cp(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function wo(t,e){yu=t,Hm=co=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yn=!0),t.firstContext=null)}function Yn(t){var e=t._currentValue;if(Hm!==t)if(t={context:t,memoizedValue:e,next:null},co===null){if(yu===null)throw Error(te(308));co=t,yu.dependencies={lanes:0,firstContext:t}}else co=co.next=t;return e}var us=null;function Wm(t){us===null?us=[t]:us.push(t)}function XE(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Wm(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ki(t,i)}function Ki(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var mr=!1;function $m(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Tr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ki(t,n)}return r=i.interleaved,r===null?(e.next=e,Wm(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ki(t,n)}function jc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Lm(t,n)}}function p0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _u(t,e,n,i){var r=t.updateQueue;mr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,_=a;switch(f=e,p=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){d=g.call(p,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,f=typeof g=="function"?g.call(p,d,f):g,f==null)break e;d=xt({},d,f);break e;case 2:mr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ts|=o,t.lanes=o,t.memoizedState=d}}function m0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var yl={},Ei=Vr(yl),Qa=Vr(yl),Ja=Vr(yl);function ds(t){if(t===yl)throw Error(te(174));return t}function Xm(t,e){switch(st(Ja,e),st(Qa,t),st(Ei,yl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Gh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Gh(e,t)}ut(Ei),st(Ei,e)}function Io(){ut(Ei),ut(Qa),ut(Ja)}function YE(t){ds(Ja.current);var e=ds(Ei.current),n=Gh(e,t.type);e!==n&&(st(Qa,t),st(Ei,n))}function qm(t){Qa.current===t&&(ut(Ei),ut(Qa))}var vt=Vr(0);function xu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var hf=[];function Ym(){for(var t=0;t<hf.length;t++)hf[t]._workInProgressVersionPrimary=null;hf.length=0}var Wc=tr.ReactCurrentDispatcher,pf=tr.ReactCurrentBatchConfig,ws=0,_t=null,Pt=null,kt=null,Su=!1,La=!1,el=0,NC=0;function Kt(){throw Error(te(321))}function Km(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!di(t[n],e[n]))return!1;return!0}function Zm(t,e,n,i,r,s){if(ws=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wc.current=t===null||t.memoizedState===null?kC:FC,t=n(i,r),La){s=0;do{if(La=!1,el=0,25<=s)throw Error(te(301));s+=1,kt=Pt=null,e.updateQueue=null,Wc.current=BC,t=n(i,r)}while(La)}if(Wc.current=Eu,e=Pt!==null&&Pt.next!==null,ws=0,kt=Pt=_t=null,Su=!1,e)throw Error(te(300));return t}function Qm(){var t=el!==0;return el=0,t}function mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?_t.memoizedState=kt=t:kt=kt.next=t,kt}function Kn(){if(Pt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var e=kt===null?_t.memoizedState:kt.next;if(e!==null)kt=e,Pt=t;else{if(t===null)throw Error(te(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},kt===null?_t.memoizedState=kt=t:kt=kt.next=t}return kt}function tl(t,e){return typeof e=="function"?e(t):e}function mf(t){var e=Kn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=Pt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((ws&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,_t.lanes|=u,Ts|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,di(i,e.memoizedState)||(yn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,_t.lanes|=s,Ts|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function gf(t){var e=Kn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);di(s,e.memoizedState)||(yn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function KE(){}function ZE(t,e){var n=_t,i=Kn(),r=e(),s=!di(i.memoizedState,r);if(s&&(i.memoizedState=r,yn=!0),i=i.queue,Jm(eM.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||kt!==null&&kt.memoizedState.tag&1){if(n.flags|=2048,nl(9,JE.bind(null,n,i,r,e),void 0,null),Ft===null)throw Error(te(349));ws&30||QE(n,e,r)}return r}function QE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function JE(t,e,n,i){e.value=n,e.getSnapshot=i,tM(e)&&nM(t)}function eM(t,e,n){return n(function(){tM(e)&&nM(t)})}function tM(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!di(t,n)}catch{return!0}}function nM(t){var e=Ki(t,1);e!==null&&ci(e,t,1,-1)}function g0(t){var e=mi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tl,lastRenderedState:t},e.queue=t,t=t.dispatch=UC.bind(null,_t,t),[e.memoizedState,t]}function nl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function iM(){return Kn().memoizedState}function $c(t,e,n,i){var r=mi();_t.flags|=t,r.memoizedState=nl(1|e,n,void 0,i===void 0?null:i)}function sd(t,e,n,i){var r=Kn();i=i===void 0?null:i;var s=void 0;if(Pt!==null){var o=Pt.memoizedState;if(s=o.destroy,i!==null&&Km(i,o.deps)){r.memoizedState=nl(e,n,s,i);return}}_t.flags|=t,r.memoizedState=nl(1|e,n,s,i)}function v0(t,e){return $c(8390656,8,t,e)}function Jm(t,e){return sd(2048,8,t,e)}function rM(t,e){return sd(4,2,t,e)}function sM(t,e){return sd(4,4,t,e)}function oM(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function aM(t,e,n){return n=n!=null?n.concat([t]):null,sd(4,4,oM.bind(null,e,t),n)}function eg(){}function lM(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Km(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function cM(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Km(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function uM(t,e,n){return ws&21?(di(n,e)||(n=mE(),_t.lanes|=n,Ts|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yn=!0),t.memoizedState=n)}function IC(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var i=pf.transition;pf.transition={};try{t(!1),e()}finally{Qe=n,pf.transition=i}}function dM(){return Kn().memoizedState}function OC(t,e,n){var i=Ar(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},fM(t))hM(e,n);else if(n=XE(t,e,n,i),n!==null){var r=un();ci(n,t,i,r),pM(n,e,i)}}function UC(t,e,n){var i=Ar(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(fM(t))hM(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,di(a,o)){var l=e.interleaved;l===null?(r.next=r,Wm(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=XE(t,e,r,i),n!==null&&(r=un(),ci(n,t,i,r),pM(n,e,i))}}function fM(t){var e=t.alternate;return t===_t||e!==null&&e===_t}function hM(t,e){La=Su=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function pM(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Lm(t,n)}}var Eu={readContext:Yn,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},kC={readContext:Yn,useCallback:function(t,e){return mi().memoizedState=[t,e===void 0?null:e],t},useContext:Yn,useEffect:v0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,$c(4194308,4,oM.bind(null,e,t),n)},useLayoutEffect:function(t,e){return $c(4194308,4,t,e)},useInsertionEffect:function(t,e){return $c(4,2,t,e)},useMemo:function(t,e){var n=mi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=mi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=OC.bind(null,_t,t),[i.memoizedState,t]},useRef:function(t){var e=mi();return t={current:t},e.memoizedState=t},useState:g0,useDebugValue:eg,useDeferredValue:function(t){return mi().memoizedState=t},useTransition:function(){var t=g0(!1),e=t[0];return t=IC.bind(null,t[1]),mi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=_t,r=mi();if(ft){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Ft===null)throw Error(te(349));ws&30||QE(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,v0(eM.bind(null,i,s,t),[t]),i.flags|=2048,nl(9,JE.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=mi(),e=Ft.identifierPrefix;if(ft){var n=zi,i=Bi;n=(i&~(1<<32-li(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=el++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=NC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},FC={readContext:Yn,useCallback:lM,useContext:Yn,useEffect:Jm,useImperativeHandle:aM,useInsertionEffect:rM,useLayoutEffect:sM,useMemo:cM,useReducer:mf,useRef:iM,useState:function(){return mf(tl)},useDebugValue:eg,useDeferredValue:function(t){var e=Kn();return uM(e,Pt.memoizedState,t)},useTransition:function(){var t=mf(tl)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:KE,useSyncExternalStore:ZE,useId:dM,unstable_isNewReconciler:!1},BC={readContext:Yn,useCallback:lM,useContext:Yn,useEffect:Jm,useImperativeHandle:aM,useInsertionEffect:rM,useLayoutEffect:sM,useMemo:cM,useReducer:gf,useRef:iM,useState:function(){return gf(tl)},useDebugValue:eg,useDeferredValue:function(t){var e=Kn();return Pt===null?e.memoizedState=t:uM(e,Pt.memoizedState,t)},useTransition:function(){var t=gf(tl)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:KE,useSyncExternalStore:ZE,useId:dM,unstable_isNewReconciler:!1};function ni(t,e){if(t&&t.defaultProps){e=xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function up(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var od={isMounted:function(t){return(t=t._reactInternals)?Os(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=un(),r=Ar(t),s=Gi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,r),e!==null&&(ci(e,t,r,i),jc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=un(),r=Ar(t),s=Gi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,r),e!==null&&(ci(e,t,r,i),jc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=un(),i=Ar(t),r=Gi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Tr(t,r,i),e!==null&&(ci(e,t,i,n),jc(e,t,i))}};function y0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!qa(n,i)||!qa(r,s):!0}function mM(t,e,n){var i=!1,r=Or,s=e.contextType;return typeof s=="object"&&s!==null?s=Yn(s):(r=xn(e)?Es:sn.current,i=e.contextTypes,s=(i=i!=null)?Lo(t,r):Or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=od,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function _0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&od.enqueueReplaceState(e,e.state,null)}function dp(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},$m(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Yn(s):(s=xn(e)?Es:sn.current,r.context=Lo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(up(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&od.enqueueReplaceState(r,r.state,null),_u(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Oo(t,e){try{var n="",i=e;do n+=hA(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function vf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function fp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var zC=typeof WeakMap=="function"?WeakMap:Map;function gM(t,e,n){n=Gi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){wu||(wu=!0,Ep=i),fp(t,e)},n}function vM(t,e,n){n=Gi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){fp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){fp(t,e),typeof i!="function"&&(br===null?br=new Set([this]):br.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function x0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new zC;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=eR.bind(null,t,e,n),e.then(t,t))}function S0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function E0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gi(-1,1),e.tag=2,Tr(n,e,1))),n.lanes|=1),t)}var VC=tr.ReactCurrentOwner,yn=!1;function ln(t,e,n,i){e.child=t===null?$E(e,null,n,i):No(e,t.child,n,i)}function M0(t,e,n,i,r){n=n.render;var s=e.ref;return wo(e,r),i=Zm(t,e,n,i,s,r),n=Qm(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Zi(t,e,r)):(ft&&n&&Bm(e),e.flags|=1,ln(t,e,i,r),e.child)}function w0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!lg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,yM(t,e,s,i,r)):(t=Kc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:qa,n(o,i)&&t.ref===e.ref)return Zi(t,e,r)}return e.flags|=1,t=Cr(s,i),t.ref=e.ref,t.return=e,e.child=t}function yM(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(qa(s,i)&&t.ref===e.ref)if(yn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(yn=!0);else return e.lanes=t.lanes,Zi(t,e,r)}return hp(t,e,n,i,r)}function _M(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(fo,Cn),Cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(fo,Cn),Cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(fo,Cn),Cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(fo,Cn),Cn|=i;return ln(t,e,r,n),e.child}function xM(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function hp(t,e,n,i,r){var s=xn(n)?Es:sn.current;return s=Lo(e,s),wo(e,r),n=Zm(t,e,n,i,s,r),i=Qm(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Zi(t,e,r)):(ft&&i&&Bm(e),e.flags|=1,ln(t,e,n,r),e.child)}function T0(t,e,n,i,r){if(xn(n)){var s=!0;pu(e)}else s=!1;if(wo(e,r),e.stateNode===null)Xc(t,e),mM(e,n,i),dp(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Yn(c):(c=xn(n)?Es:sn.current,c=Lo(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&_0(e,o,i,c),mr=!1;var f=e.memoizedState;o.state=f,_u(e,i,o,r),l=e.memoizedState,a!==i||f!==l||_n.current||mr?(typeof u=="function"&&(up(e,n,u,i),l=e.memoizedState),(a=mr||y0(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,qE(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ni(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Yn(l):(l=xn(n)?Es:sn.current,l=Lo(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&_0(e,o,i,l),mr=!1,f=e.memoizedState,o.state=f,_u(e,i,o,r);var g=e.memoizedState;a!==d||f!==g||_n.current||mr?(typeof p=="function"&&(up(e,n,p,i),g=e.memoizedState),(c=mr||y0(e,n,c,i,f,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return pp(t,e,n,i,s,r)}function pp(t,e,n,i,r,s){xM(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&u0(e,n,!1),Zi(t,e,s);i=e.stateNode,VC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=No(e,t.child,null,s),e.child=No(e,null,a,s)):ln(t,e,a,s),e.memoizedState=i.state,r&&u0(e,n,!0),e.child}function SM(t){var e=t.stateNode;e.pendingContext?c0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&c0(t,e.context,!1),Xm(t,e.containerInfo)}function b0(t,e,n,i,r){return Do(),Vm(r),e.flags|=256,ln(t,e,n,i),e.child}var mp={dehydrated:null,treeContext:null,retryLane:0};function gp(t){return{baseLanes:t,cachePool:null,transitions:null}}function EM(t,e,n){var i=e.pendingProps,r=vt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(vt,r&1),t===null)return lp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=cd(o,i,0,null),t=gs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=gp(n),e.memoizedState=mp,t):tg(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return HC(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Cr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Cr(a,s):(s=gs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?gp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=mp,i}return s=t.child,t=s.sibling,i=Cr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function tg(t,e){return e=cd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Jl(t,e,n,i){return i!==null&&Vm(i),No(e,t.child,null,n),t=tg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function HC(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=vf(Error(te(422))),Jl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=cd({mode:"visible",children:i.children},r,0,null),s=gs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&No(e,t.child,null,o),e.child.memoizedState=gp(o),e.memoizedState=mp,s);if(!(e.mode&1))return Jl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=vf(s,i,void 0),Jl(t,e,o,i)}if(a=(o&t.childLanes)!==0,yn||a){if(i=Ft,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ki(t,r),ci(i,t,r,-1))}return ag(),i=vf(Error(te(421))),Jl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=tR.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Rn=wr(r.nextSibling),Pn=e,ft=!0,ri=null,t!==null&&(Gn[jn++]=Bi,Gn[jn++]=zi,Gn[jn++]=Ms,Bi=t.id,zi=t.overflow,Ms=e),e=tg(e,i.children),e.flags|=4096,e)}function A0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),cp(t.return,e,n)}function yf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function MM(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(t,e,i.children,n),i=vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&A0(t,n,e);else if(t.tag===19)A0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&xu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),yf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&xu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}yf(e,!0,n,null,s);break;case"together":yf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ts|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=Cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function GC(t,e,n){switch(e.tag){case 3:SM(e),Do();break;case 5:YE(e);break;case 1:xn(e.type)&&pu(e);break;case 4:Xm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(vu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(vt,vt.current&1),e.flags|=128,null):n&e.child.childLanes?EM(t,e,n):(st(vt,vt.current&1),t=Zi(t,e,n),t!==null?t.sibling:null);st(vt,vt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return MM(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(vt,vt.current),i)break;return null;case 22:case 23:return e.lanes=0,_M(t,e,n)}return Zi(t,e,n)}var wM,vp,TM,bM;wM=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vp=function(){};TM=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ds(Ei.current);var s=null;switch(n){case"input":r=Bh(t,r),i=Bh(t,i),s=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),s=[];break;case"textarea":r=Hh(t,r),i=Hh(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=fu)}jh(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Va.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Va.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&at("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};bM=function(t,e,n,i){n!==i&&(e.flags|=4)};function la(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function jC(t,e,n){var i=e.pendingProps;switch(zm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return xn(e.type)&&hu(),Zt(e),null;case 3:return i=e.stateNode,Io(),ut(_n),ut(sn),Ym(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Zl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ri!==null&&(Tp(ri),ri=null))),vp(t,e),Zt(e),null;case 5:qm(e);var r=ds(Ja.current);if(n=e.type,t!==null&&e.stateNode!=null)TM(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Zt(e),null}if(t=ds(Ei.current),Zl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[yi]=e,i[Za]=s,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<Sa.length;r++)at(Sa[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":Uv(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":Fv(i,s),at("invalid",i)}jh(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Kl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Kl(i.textContent,a,t),r=["children",""+a]):Va.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&at("scroll",i)}switch(n){case"input":Hl(i),kv(i,s,!0);break;case"textarea":Hl(i),Bv(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=fu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=eE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[yi]=e,t[Za]=i,wM(t,e,!1,!1),e.stateNode=t;e:{switch(o=Wh(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<Sa.length;r++)at(Sa[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":Uv(t,i),r=Bh(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),at("invalid",t);break;case"textarea":Fv(t,i),r=Hh(t,i),at("invalid",t);break;default:r=i}jh(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?iE(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&tE(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ha(t,l):typeof l=="number"&&Ha(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Va.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",t):l!=null&&Tm(t,s,l,o))}switch(n){case"input":Hl(t),kv(t,i,!1);break;case"textarea":Hl(t),Bv(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ir(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?xo(t,!!i.multiple,s,!1):i.defaultValue!=null&&xo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=fu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Zt(e),null;case 6:if(t&&e.stateNode!=null)bM(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=ds(Ja.current),ds(Ei.current),Zl(e)){if(i=e.stateNode,n=e.memoizedProps,i[yi]=e,(s=i.nodeValue!==n)&&(t=Pn,t!==null))switch(t.tag){case 3:Kl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Kl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[yi]=e,e.stateNode=i}return Zt(e),null;case 13:if(ut(vt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&Rn!==null&&e.mode&1&&!(e.flags&128))jE(),Do(),e.flags|=98560,s=!1;else if(s=Zl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[yi]=e}else Do(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Zt(e),s=!1}else ri!==null&&(Tp(ri),ri=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||vt.current&1?Lt===0&&(Lt=3):ag())),e.updateQueue!==null&&(e.flags|=4),Zt(e),null);case 4:return Io(),vp(t,e),t===null&&Ya(e.stateNode.containerInfo),Zt(e),null;case 10:return jm(e.type._context),Zt(e),null;case 17:return xn(e.type)&&hu(),Zt(e),null;case 19:if(ut(vt),s=e.memoizedState,s===null)return Zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)la(s,!1);else{if(Lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=xu(t),o!==null){for(e.flags|=128,la(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(vt,vt.current&1|2),e.child}t=t.sibling}s.tail!==null&&At()>Uo&&(e.flags|=128,i=!0,la(s,!1),e.lanes=4194304)}else{if(!i)if(t=xu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),la(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return Zt(e),null}else 2*At()-s.renderingStartTime>Uo&&n!==1073741824&&(e.flags|=128,i=!0,la(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,n=vt.current,st(vt,i?n&1|2:n&1),e):(Zt(e),null);case 22:case 23:return og(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Cn&1073741824&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function WC(t,e){switch(zm(e),e.tag){case 1:return xn(e.type)&&hu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Io(),ut(_n),ut(sn),Ym(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qm(e),null;case 13:if(ut(vt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Do()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(vt),null;case 4:return Io(),null;case 10:return jm(e.type._context),null;case 22:case 23:return og(),null;case 24:return null;default:return null}}var ec=!1,tn=!1,$C=typeof WeakSet=="function"?WeakSet:Set,de=null;function uo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){wt(t,e,i)}else n.current=null}function yp(t,e,n){try{n()}catch(i){wt(t,e,i)}}var C0=!1;function XC(t,e){if(tp=cu,t=LE(),Fm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(np={focusedElem:t,selectionRange:n},cu=!1,de=e;de!==null;)if(e=de,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,de=t;else for(;de!==null;){e=de;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:ni(e.type,_),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(x){wt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}return g=C0,C0=!1,g}function Da(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&yp(e,n,s)}r=r.next}while(r!==i)}}function ad(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function _p(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function AM(t){var e=t.alternate;e!==null&&(t.alternate=null,AM(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[yi],delete e[Za],delete e[sp],delete e[RC],delete e[PC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function CM(t){return t.tag===5||t.tag===3||t.tag===4}function R0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||CM(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fu));else if(i!==4&&(t=t.child,t!==null))for(xp(t,e,n),t=t.sibling;t!==null;)xp(t,e,n),t=t.sibling}function Sp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Sp(t,e,n),t=t.sibling;t!==null;)Sp(t,e,n),t=t.sibling}var Gt=null,ii=!1;function ir(t,e,n){for(n=n.child;n!==null;)RM(t,e,n),n=n.sibling}function RM(t,e,n){if(Si&&typeof Si.onCommitFiberUnmount=="function")try{Si.onCommitFiberUnmount(Ju,n)}catch{}switch(n.tag){case 5:tn||uo(n,e);case 6:var i=Gt,r=ii;Gt=null,ir(t,e,n),Gt=i,ii=r,Gt!==null&&(ii?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(ii?(t=Gt,n=n.stateNode,t.nodeType===8?df(t.parentNode,n):t.nodeType===1&&df(t,n),$a(t)):df(Gt,n.stateNode));break;case 4:i=Gt,r=ii,Gt=n.stateNode.containerInfo,ii=!0,ir(t,e,n),Gt=i,ii=r;break;case 0:case 11:case 14:case 15:if(!tn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&yp(n,e,o),r=r.next}while(r!==i)}ir(t,e,n);break;case 1:if(!tn&&(uo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){wt(n,e,a)}ir(t,e,n);break;case 21:ir(t,e,n);break;case 22:n.mode&1?(tn=(i=tn)||n.memoizedState!==null,ir(t,e,n),tn=i):ir(t,e,n);break;default:ir(t,e,n)}}function P0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $C),e.forEach(function(i){var r=nR.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Gt=a.stateNode,ii=!1;break e;case 3:Gt=a.stateNode.containerInfo,ii=!0;break e;case 4:Gt=a.stateNode.containerInfo,ii=!0;break e}a=a.return}if(Gt===null)throw Error(te(160));RM(s,o,r),Gt=null,ii=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){wt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)PM(e,t),e=e.sibling}function PM(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zn(e,t),pi(t),i&4){try{Da(3,t,t.return),ad(3,t)}catch(_){wt(t,t.return,_)}try{Da(5,t,t.return)}catch(_){wt(t,t.return,_)}}break;case 1:Zn(e,t),pi(t),i&512&&n!==null&&uo(n,n.return);break;case 5:if(Zn(e,t),pi(t),i&512&&n!==null&&uo(n,n.return),t.flags&32){var r=t.stateNode;try{Ha(r,"")}catch(_){wt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&QS(r,s),Wh(a,o);var c=Wh(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?iE(r,d):u==="dangerouslySetInnerHTML"?tE(r,d):u==="children"?Ha(r,d):Tm(r,u,d,c)}switch(a){case"input":zh(r,s);break;case"textarea":JS(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?xo(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?xo(r,!!s.multiple,s.defaultValue,!0):xo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Za]=s}catch(_){wt(t,t.return,_)}}break;case 6:if(Zn(e,t),pi(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){wt(t,t.return,_)}}break;case 3:if(Zn(e,t),pi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{$a(e.containerInfo)}catch(_){wt(t,t.return,_)}break;case 4:Zn(e,t),pi(t);break;case 13:Zn(e,t),pi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(rg=At())),i&4&&P0(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(tn=(c=tn)||u,Zn(e,t),tn=c):Zn(e,t),pi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(de=t,u=t.child;u!==null;){for(d=de=u;de!==null;){switch(f=de,p=f.child,f.tag){case 0:case 11:case 14:case 15:Da(4,f,f.return);break;case 1:uo(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){wt(i,n,_)}}break;case 5:uo(f,f.return);break;case 22:if(f.memoizedState!==null){D0(d);continue}}p!==null?(p.return=f,de=p):D0(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=nE("display",o))}catch(_){wt(t,t.return,_)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(_){wt(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Zn(e,t),pi(t),i&4&&P0(t);break;case 21:break;default:Zn(e,t),pi(t)}}function pi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(CM(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ha(r,""),i.flags&=-33);var s=R0(t);Sp(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=R0(t);xp(t,a,o);break;default:throw Error(te(161))}}catch(l){wt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function qC(t,e,n){de=t,LM(t)}function LM(t,e,n){for(var i=(t.mode&1)!==0;de!==null;){var r=de,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ec;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||tn;a=ec;var c=tn;if(ec=o,(tn=l)&&!c)for(de=r;de!==null;)o=de,l=o.child,o.tag===22&&o.memoizedState!==null?N0(r):l!==null?(l.return=o,de=l):N0(r);for(;s!==null;)de=s,LM(s),s=s.sibling;de=r,ec=a,tn=c}L0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,de=s):L0(t)}}function L0(t){for(;de!==null;){var e=de;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tn||ad(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!tn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ni(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&m0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}m0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&$a(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}tn||e.flags&512&&_p(e)}catch(f){wt(e,e.return,f)}}if(e===t){de=null;break}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}}function D0(t){for(;de!==null;){var e=de;if(e===t){de=null;break}var n=e.sibling;if(n!==null){n.return=e.return,de=n;break}de=e.return}}function N0(t){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ad(4,e)}catch(l){wt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){wt(e,r,l)}}var s=e.return;try{_p(e)}catch(l){wt(e,s,l)}break;case 5:var o=e.return;try{_p(e)}catch(l){wt(e,o,l)}}}catch(l){wt(e,e.return,l)}if(e===t){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var YC=Math.ceil,Mu=tr.ReactCurrentDispatcher,ng=tr.ReactCurrentOwner,qn=tr.ReactCurrentBatchConfig,We=0,Ft=null,Rt=null,Xt=0,Cn=0,fo=Vr(0),Lt=0,il=null,Ts=0,ld=0,ig=0,Na=null,gn=null,rg=0,Uo=1/0,Ii=null,wu=!1,Ep=null,br=null,tc=!1,_r=null,Tu=0,Ia=0,Mp=null,qc=-1,Yc=0;function un(){return We&6?At():qc!==-1?qc:qc=At()}function Ar(t){return t.mode&1?We&2&&Xt!==0?Xt&-Xt:DC.transition!==null?(Yc===0&&(Yc=mE()),Yc):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:EE(t.type)),t):1}function ci(t,e,n,i){if(50<Ia)throw Ia=0,Mp=null,Error(te(185));ml(t,n,i),(!(We&2)||t!==Ft)&&(t===Ft&&(!(We&2)&&(ld|=n),Lt===4&&vr(t,Xt)),Sn(t,i),n===1&&We===0&&!(e.mode&1)&&(Uo=At()+500,rd&&Hr()))}function Sn(t,e){var n=t.callbackNode;DA(t,e);var i=lu(t,t===Ft?Xt:0);if(i===0)n!==null&&Hv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Hv(n),e===1)t.tag===0?LC(I0.bind(null,t)):VE(I0.bind(null,t)),AC(function(){!(We&6)&&Hr()}),n=null;else{switch(gE(i)){case 1:n=Pm;break;case 4:n=hE;break;case 16:n=au;break;case 536870912:n=pE;break;default:n=au}n=BM(n,DM.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function DM(t,e){if(qc=-1,Yc=0,We&6)throw Error(te(327));var n=t.callbackNode;if(To()&&t.callbackNode!==n)return null;var i=lu(t,t===Ft?Xt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=bu(t,i);else{e=i;var r=We;We|=2;var s=IM();(Ft!==t||Xt!==e)&&(Ii=null,Uo=At()+500,ms(t,e));do try{QC();break}catch(a){NM(t,a)}while(!0);Gm(),Mu.current=s,We=r,Rt!==null?e=0:(Ft=null,Xt=0,e=Lt)}if(e!==0){if(e===2&&(r=Kh(t),r!==0&&(i=r,e=wp(t,r))),e===1)throw n=il,ms(t,0),vr(t,i),Sn(t,At()),n;if(e===6)vr(t,i);else{if(r=t.current.alternate,!(i&30)&&!KC(r)&&(e=bu(t,i),e===2&&(s=Kh(t),s!==0&&(i=s,e=wp(t,s))),e===1))throw n=il,ms(t,0),vr(t,i),Sn(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:es(t,gn,Ii);break;case 3:if(vr(t,i),(i&130023424)===i&&(e=rg+500-At(),10<e)){if(lu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){un(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=rp(es.bind(null,t,gn,Ii),e);break}es(t,gn,Ii);break;case 4:if(vr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-li(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*YC(i/1960))-i,10<i){t.timeoutHandle=rp(es.bind(null,t,gn,Ii),i);break}es(t,gn,Ii);break;case 5:es(t,gn,Ii);break;default:throw Error(te(329))}}}return Sn(t,At()),t.callbackNode===n?DM.bind(null,t):null}function wp(t,e){var n=Na;return t.current.memoizedState.isDehydrated&&(ms(t,e).flags|=256),t=bu(t,e),t!==2&&(e=gn,gn=n,e!==null&&Tp(e)),t}function Tp(t){gn===null?gn=t:gn.push.apply(gn,t)}function KC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!di(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vr(t,e){for(e&=~ig,e&=~ld,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-li(e),i=1<<n;t[n]=-1,e&=~i}}function I0(t){if(We&6)throw Error(te(327));To();var e=lu(t,0);if(!(e&1))return Sn(t,At()),null;var n=bu(t,e);if(t.tag!==0&&n===2){var i=Kh(t);i!==0&&(e=i,n=wp(t,i))}if(n===1)throw n=il,ms(t,0),vr(t,e),Sn(t,At()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,es(t,gn,Ii),Sn(t,At()),null}function sg(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(Uo=At()+500,rd&&Hr())}}function bs(t){_r!==null&&_r.tag===0&&!(We&6)&&To();var e=We;We|=1;var n=qn.transition,i=Qe;try{if(qn.transition=null,Qe=1,t)return t()}finally{Qe=i,qn.transition=n,We=e,!(We&6)&&Hr()}}function og(){Cn=fo.current,ut(fo)}function ms(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,bC(n)),Rt!==null)for(n=Rt.return;n!==null;){var i=n;switch(zm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&hu();break;case 3:Io(),ut(_n),ut(sn),Ym();break;case 5:qm(i);break;case 4:Io();break;case 13:ut(vt);break;case 19:ut(vt);break;case 10:jm(i.type._context);break;case 22:case 23:og()}n=n.return}if(Ft=t,Rt=t=Cr(t.current,null),Xt=Cn=e,Lt=0,il=null,ig=ld=Ts=0,gn=Na=null,us!==null){for(e=0;e<us.length;e++)if(n=us[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}us=null}return t}function NM(t,e){do{var n=Rt;try{if(Gm(),Wc.current=Eu,Su){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Su=!1}if(ws=0,kt=Pt=_t=null,La=!1,el=0,ng.current=null,n===null||n.return===null){Lt=1,il=e,Rt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Xt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=S0(o);if(p!==null){p.flags&=-257,E0(p,o,a,s,e),p.mode&1&&x0(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){x0(s,c,e),ag();break e}l=Error(te(426))}}else if(ft&&a.mode&1){var m=S0(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),E0(m,o,a,s,e),Vm(Oo(l,a));break e}}s=l=Oo(l,a),Lt!==4&&(Lt=2),Na===null?Na=[s]:Na.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=gM(s,l,e);p0(s,h);break e;case 1:a=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(br===null||!br.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=vM(s,a,e);p0(s,x);break e}}s=s.return}while(s!==null)}UM(n)}catch(T){e=T,Rt===n&&n!==null&&(Rt=n=n.return);continue}break}while(!0)}function IM(){var t=Mu.current;return Mu.current=Eu,t===null?Eu:t}function ag(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),Ft===null||!(Ts&268435455)&&!(ld&268435455)||vr(Ft,Xt)}function bu(t,e){var n=We;We|=2;var i=IM();(Ft!==t||Xt!==e)&&(Ii=null,ms(t,e));do try{ZC();break}catch(r){NM(t,r)}while(!0);if(Gm(),We=n,Mu.current=i,Rt!==null)throw Error(te(261));return Ft=null,Xt=0,Lt}function ZC(){for(;Rt!==null;)OM(Rt)}function QC(){for(;Rt!==null&&!MA();)OM(Rt)}function OM(t){var e=FM(t.alternate,t,Cn);t.memoizedProps=t.pendingProps,e===null?UM(t):Rt=e,ng.current=null}function UM(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=WC(n,e),n!==null){n.flags&=32767,Rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,Rt=null;return}}else if(n=jC(n,e,Cn),n!==null){Rt=n;return}if(e=e.sibling,e!==null){Rt=e;return}Rt=e=t}while(e!==null);Lt===0&&(Lt=5)}function es(t,e,n){var i=Qe,r=qn.transition;try{qn.transition=null,Qe=1,JC(t,e,n,i)}finally{qn.transition=r,Qe=i}return null}function JC(t,e,n,i){do To();while(_r!==null);if(We&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(NA(t,s),t===Ft&&(Rt=Ft=null,Xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||tc||(tc=!0,BM(au,function(){return To(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qn.transition,qn.transition=null;var o=Qe;Qe=1;var a=We;We|=4,ng.current=null,XC(t,n),PM(n,t),_C(np),cu=!!tp,np=tp=null,t.current=n,qC(n),wA(),We=a,Qe=o,qn.transition=s}else t.current=n;if(tc&&(tc=!1,_r=t,Tu=r),s=t.pendingLanes,s===0&&(br=null),AA(n.stateNode),Sn(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(wu)throw wu=!1,t=Ep,Ep=null,t;return Tu&1&&t.tag!==0&&To(),s=t.pendingLanes,s&1?t===Mp?Ia++:(Ia=0,Mp=t):Ia=0,Hr(),null}function To(){if(_r!==null){var t=gE(Tu),e=qn.transition,n=Qe;try{if(qn.transition=null,Qe=16>t?16:t,_r===null)var i=!1;else{if(t=_r,_r=null,Tu=0,We&6)throw Error(te(331));var r=We;for(We|=4,de=t.current;de!==null;){var s=de,o=s.child;if(de.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(de=c;de!==null;){var u=de;switch(u.tag){case 0:case 11:case 15:Da(8,u,s)}var d=u.child;if(d!==null)d.return=u,de=d;else for(;de!==null;){u=de;var f=u.sibling,p=u.return;if(AM(u),u===c){de=null;break}if(f!==null){f.return=p,de=f;break}de=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}de=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,de=o;else e:for(;de!==null;){if(s=de,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Da(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,de=h;break e}de=s.return}}var v=t.current;for(de=v;de!==null;){o=de;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,de=y;else e:for(o=v;de!==null;){if(a=de,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ad(9,a)}}catch(T){wt(a,a.return,T)}if(a===o){de=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,de=x;break e}de=a.return}}if(We=r,Hr(),Si&&typeof Si.onPostCommitFiberRoot=="function")try{Si.onPostCommitFiberRoot(Ju,t)}catch{}i=!0}return i}finally{Qe=n,qn.transition=e}}return!1}function O0(t,e,n){e=Oo(n,e),e=gM(t,e,1),t=Tr(t,e,1),e=un(),t!==null&&(ml(t,1,e),Sn(t,e))}function wt(t,e,n){if(t.tag===3)O0(t,t,n);else for(;e!==null;){if(e.tag===3){O0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(br===null||!br.has(i))){t=Oo(n,t),t=vM(e,t,1),e=Tr(e,t,1),t=un(),e!==null&&(ml(e,1,t),Sn(e,t));break}}e=e.return}}function eR(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=un(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&(Xt&n)===n&&(Lt===4||Lt===3&&(Xt&130023424)===Xt&&500>At()-rg?ms(t,0):ig|=n),Sn(t,e)}function kM(t,e){e===0&&(t.mode&1?(e=Wl,Wl<<=1,!(Wl&130023424)&&(Wl=4194304)):e=1);var n=un();t=Ki(t,e),t!==null&&(ml(t,e,n),Sn(t,n))}function tR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),kM(t,n)}function nR(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),kM(t,n)}var FM;FM=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_n.current)yn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yn=!1,GC(t,e,n);yn=!!(t.flags&131072)}else yn=!1,ft&&e.flags&1048576&&HE(e,gu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Xc(t,e),t=e.pendingProps;var r=Lo(e,sn.current);wo(e,n),r=Zm(null,e,i,t,r,n);var s=Qm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xn(i)?(s=!0,pu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,$m(e),r.updater=od,e.stateNode=r,r._reactInternals=e,dp(e,i,t,n),e=pp(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&Bm(e),ln(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Xc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=rR(i),t=ni(i,t),r){case 0:e=hp(null,e,i,t,n);break e;case 1:e=T0(null,e,i,t,n);break e;case 11:e=M0(null,e,i,t,n);break e;case 14:e=w0(null,e,i,ni(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),hp(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),T0(t,e,i,r,n);case 3:e:{if(SM(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,qE(t,e),_u(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Oo(Error(te(423)),e),e=b0(t,e,i,n,r);break e}else if(i!==r){r=Oo(Error(te(424)),e),e=b0(t,e,i,n,r);break e}else for(Rn=wr(e.stateNode.containerInfo.firstChild),Pn=e,ft=!0,ri=null,n=$E(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Do(),i===r){e=Zi(t,e,n);break e}ln(t,e,i,n)}e=e.child}return e;case 5:return YE(e),t===null&&lp(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,ip(i,r)?o=null:s!==null&&ip(i,s)&&(e.flags|=32),xM(t,e),ln(t,e,o,n),e.child;case 6:return t===null&&lp(e),null;case 13:return EM(t,e,n);case 4:return Xm(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=No(e,null,i,n):ln(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),M0(t,e,i,r,n);case 7:return ln(t,e,e.pendingProps,n),e.child;case 8:return ln(t,e,e.pendingProps.children,n),e.child;case 12:return ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(vu,i._currentValue),i._currentValue=o,s!==null)if(di(s.value,o)){if(s.children===r.children&&!_n.current){e=Zi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Gi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),cp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),cp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ln(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,wo(e,n),r=Yn(r),i=i(r),e.flags|=1,ln(t,e,i,n),e.child;case 14:return i=e.type,r=ni(i,e.pendingProps),r=ni(i.type,r),w0(t,e,i,r,n);case 15:return yM(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),Xc(t,e),e.tag=1,xn(i)?(t=!0,pu(e)):t=!1,wo(e,n),mM(e,i,r),dp(e,i,r,n),pp(null,e,i,!0,t,n);case 19:return MM(t,e,n);case 22:return _M(t,e,n)}throw Error(te(156,e.tag))};function BM(t,e){return fE(t,e)}function iR(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,e,n,i){return new iR(t,e,n,i)}function lg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rR(t){if(typeof t=="function")return lg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Am)return 11;if(t===Cm)return 14}return 2}function Cr(t,e){var n=t.alternate;return n===null?(n=Xn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Kc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")lg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case to:return gs(n.children,r,s,e);case bm:o=8,r|=8;break;case Oh:return t=Xn(12,n,e,r|2),t.elementType=Oh,t.lanes=s,t;case Uh:return t=Xn(13,n,e,r),t.elementType=Uh,t.lanes=s,t;case kh:return t=Xn(19,n,e,r),t.elementType=kh,t.lanes=s,t;case YS:return cd(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case XS:o=10;break e;case qS:o=9;break e;case Am:o=11;break e;case Cm:o=14;break e;case pr:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=Xn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function gs(t,e,n,i){return t=Xn(7,t,i,e),t.lanes=n,t}function cd(t,e,n,i){return t=Xn(22,t,i,e),t.elementType=YS,t.lanes=n,t.stateNode={isHidden:!1},t}function _f(t,e,n){return t=Xn(6,t,null,e),t.lanes=n,t}function xf(t,e,n){return e=Xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function sR(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jd(0),this.expirationTimes=Jd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function cg(t,e,n,i,r,s,o,a,l){return t=new sR(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$m(s),t}function oR(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:eo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function zM(t){if(!t)return Or;t=t._reactInternals;e:{if(Os(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(xn(n))return zE(t,n,e)}return e}function VM(t,e,n,i,r,s,o,a,l){return t=cg(n,i,!0,t,r,s,o,a,l),t.context=zM(null),n=t.current,i=un(),r=Ar(n),s=Gi(i,r),s.callback=e??null,Tr(n,s,r),t.current.lanes=r,ml(t,r,i),Sn(t,i),t}function ud(t,e,n,i){var r=e.current,s=un(),o=Ar(r);return n=zM(n),e.context===null?e.context=n:e.pendingContext=n,e=Gi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Tr(r,e,o),t!==null&&(ci(t,r,o,s),jc(t,r,o)),o}function Au(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function U0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ug(t,e){U0(t,e),(t=t.alternate)&&U0(t,e)}function aR(){return null}var HM=typeof reportError=="function"?reportError:function(t){console.error(t)};function dg(t){this._internalRoot=t}dd.prototype.render=dg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));ud(t,e,null,null)};dd.prototype.unmount=dg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;bs(function(){ud(null,t,null,null)}),e[Yi]=null}};function dd(t){this._internalRoot=t}dd.prototype.unstable_scheduleHydration=function(t){if(t){var e=_E();t={blockedOn:null,target:t,priority:e};for(var n=0;n<gr.length&&e!==0&&e<gr[n].priority;n++);gr.splice(n,0,t),n===0&&SE(t)}};function fg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function k0(){}function lR(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Au(o);s.call(c)}}var o=VM(e,i,t,0,null,!1,!1,"",k0);return t._reactRootContainer=o,t[Yi]=o.current,Ya(t.nodeType===8?t.parentNode:t),bs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Au(l);a.call(c)}}var l=cg(t,0,!1,null,null,!1,!1,"",k0);return t._reactRootContainer=l,t[Yi]=l.current,Ya(t.nodeType===8?t.parentNode:t),bs(function(){ud(e,l,n,i)}),l}function hd(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Au(o);a.call(l)}}ud(e,o,t,r)}else o=lR(n,e,t,r,i);return Au(o)}vE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=xa(e.pendingLanes);n!==0&&(Lm(e,n|1),Sn(e,At()),!(We&6)&&(Uo=At()+500,Hr()))}break;case 13:bs(function(){var i=Ki(t,1);if(i!==null){var r=un();ci(i,t,1,r)}}),ug(t,1)}};Dm=function(t){if(t.tag===13){var e=Ki(t,134217728);if(e!==null){var n=un();ci(e,t,134217728,n)}ug(t,134217728)}};yE=function(t){if(t.tag===13){var e=Ar(t),n=Ki(t,e);if(n!==null){var i=un();ci(n,t,e,i)}ug(t,e)}};_E=function(){return Qe};xE=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};Xh=function(t,e,n){switch(e){case"input":if(zh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=id(i);if(!r)throw Error(te(90));ZS(i),zh(i,r)}}}break;case"textarea":JS(t,n);break;case"select":e=n.value,e!=null&&xo(t,!!n.multiple,e,!1)}};oE=sg;aE=bs;var cR={usingClientEntryPoint:!1,Events:[vl,so,id,rE,sE,sg]},ca={findFiberByHostInstance:cs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uR={bundleType:ca.bundleType,version:ca.version,rendererPackageName:ca.rendererPackageName,rendererConfig:ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=uE(t),t===null?null:t.stateNode},findFiberByHostInstance:ca.findFiberByHostInstance||aR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nc.isDisabled&&nc.supportsFiber)try{Ju=nc.inject(uR),Si=nc}catch{}}Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cR;Un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fg(e))throw Error(te(200));return oR(t,e,null,n)};Un.createRoot=function(t,e){if(!fg(t))throw Error(te(299));var n=!1,i="",r=HM;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=cg(t,1,!1,null,null,n,!1,i,r),t[Yi]=e.current,Ya(t.nodeType===8?t.parentNode:t),new dg(e)};Un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=uE(e),t=t===null?null:t.stateNode,t};Un.flushSync=function(t){return bs(t)};Un.hydrate=function(t,e,n){if(!fd(e))throw Error(te(200));return hd(null,t,e,!0,n)};Un.hydrateRoot=function(t,e,n){if(!fg(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=HM;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=VM(e,null,t,1,n??null,r,!1,s,o),t[Yi]=e.current,Ya(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new dd(e)};Un.render=function(t,e,n){if(!fd(e))throw Error(te(200));return hd(null,t,e,!1,n)};Un.unmountComponentAtNode=function(t){if(!fd(t))throw Error(te(40));return t._reactRootContainer?(bs(function(){hd(null,null,t,!1,function(){t._reactRootContainer=null,t[Yi]=null})}),!0):!1};Un.unstable_batchedUpdates=sg;Un.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!fd(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return hd(t,e,n,!1,i)};Un.version="18.3.1-next-f1338f8080-20240426";function GM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(GM)}catch(t){console.error(t)}}GM(),GS.exports=Un;var jM=GS.exports,WM,F0=jM;WM=F0.createRoot,F0.hydrateRoot;var $M={exports:{}},XM={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _l=H;function dR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var fR=typeof Object.is=="function"?Object.is:dR,hR=_l.useSyncExternalStore,pR=_l.useRef,mR=_l.useEffect,gR=_l.useMemo,vR=_l.useDebugValue;XM.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=pR(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=gR(function(){function l(p){if(!c){if(c=!0,u=p,p=i(p),r!==void 0&&o.hasValue){var g=o.value;if(r(g,p))return d=g}return d=p}if(g=d,fR(u,p))return g;var _=i(p);return r!==void 0&&r(g,_)?(u=p,g):(u=p,d=_)}var c=!1,u,d,f=n===void 0?null:n;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,n,i,r]);var a=hR(t,s[0],s[1]);return mR(function(){o.hasValue=!0,o.value=a},[a]),vR(a),a};$M.exports=XM;var yR=$M.exports;function _R(t){t()}function xR(){let t=null,e=null;return{clear(){t=null,e=null},notify(){_R(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let i=t;for(;i;)n.push(i),i=i.next;return n},subscribe(n){let i=!0;const r=e={callback:n,next:null,prev:e};return r.prev?r.prev.next=r:t=r,function(){!i||t===null||(i=!1,r.next?r.next.prev=r.prev:e=r.prev,r.prev?r.prev.next=r.next:t=r.next)}}}}var B0={notify(){},get:()=>[]};function SR(t,e){let n,i=B0,r=0,s=!1;function o(_){u();const m=i.subscribe(_);let h=!1;return()=>{h||(h=!0,m(),d())}}function a(){i.notify()}function l(){g.onStateChange&&g.onStateChange()}function c(){return s}function u(){r++,n||(n=t.subscribe(l),i=xR())}function d(){r--,n&&r===0&&(n(),n=void 0,i.clear(),i=B0)}function f(){s||(s=!0,u())}function p(){s&&(s=!1,d())}const g={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:c,trySubscribe:f,tryUnsubscribe:p,getListeners:()=>i};return g}var ER=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",MR=ER(),wR=()=>typeof navigator<"u"&&navigator.product==="ReactNative",TR=wR(),bR=()=>MR||TR?H.useLayoutEffect:H.useEffect,AR=bR(),Sf=Symbol.for("react-redux-context"),Ef=typeof globalThis<"u"?globalThis:{};function CR(){if(!H.createContext)return{};const t=Ef[Sf]??(Ef[Sf]=new Map);let e=t.get(H.createContext);return e||(e=H.createContext(null),t.set(H.createContext,e)),e}var Cu=CR();function RR(t){const{children:e,context:n,serverState:i,store:r}=t,s=H.useMemo(()=>{const l=SR(r);return{store:r,subscription:l,getServerState:i?()=>i:void 0}},[r,i]),o=H.useMemo(()=>r.getState(),[r]);AR(()=>{const{subscription:l}=s;return l.onStateChange=l.notifyNestedSubs,l.trySubscribe(),o!==r.getState()&&l.notifyNestedSubs(),()=>{l.tryUnsubscribe(),l.onStateChange=void 0}},[s,o]);const a=n||Cu;return H.createElement(a.Provider,{value:s},e)}var PR=RR;function qM(t=Cu){return function(){return H.useContext(t)}}var LR=qM(),DR=(t,e)=>t===e;function NR(t=Cu){const e=t===Cu?LR:qM(t),n=(i,r={})=>{const{equalityFn:s=DR}=typeof r=="function"?{equalityFn:r}:r,o=e(),{store:a,subscription:l,getServerState:c}=o;H.useRef(!0);const u=H.useCallback({[i.name](f){return i(f)}}[i.name],[i]),d=yR.useSyncExternalStoreWithSelector(l.addNestedSub,a.getState,c||a.getState,u,s);return H.useDebugValue(d),d};return Object.assign(n,{withTypes:()=>n}),n}var Dn=NR();function Ht(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var IR=typeof Symbol=="function"&&Symbol.observable||"@@observable",z0=IR,Mf=()=>Math.random().toString(36).substring(7).split("").join("."),OR={INIT:`@@redux/INIT${Mf()}`,REPLACE:`@@redux/REPLACE${Mf()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Mf()}`},Ru=OR;function hg(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function YM(t,e,n){if(typeof t!="function")throw new Error(Ht(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ht(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ht(1));return n(YM)(t,e)}let i=t,r=e,s=new Map,o=s,a=0,l=!1;function c(){o===s&&(o=new Map,s.forEach((m,h)=>{o.set(h,m)}))}function u(){if(l)throw new Error(Ht(3));return r}function d(m){if(typeof m!="function")throw new Error(Ht(4));if(l)throw new Error(Ht(5));let h=!0;c();const v=a++;return o.set(v,m),function(){if(h){if(l)throw new Error(Ht(6));h=!1,c(),o.delete(v),s=null}}}function f(m){if(!hg(m))throw new Error(Ht(7));if(typeof m.type>"u")throw new Error(Ht(8));if(typeof m.type!="string")throw new Error(Ht(17));if(l)throw new Error(Ht(9));try{l=!0,r=i(r,m)}finally{l=!1}return(s=o).forEach(v=>{v()}),m}function p(m){if(typeof m!="function")throw new Error(Ht(10));i=m,f({type:Ru.REPLACE})}function g(){const m=d;return{subscribe(h){if(typeof h!="object"||h===null)throw new Error(Ht(11));function v(){const x=h;x.next&&x.next(u())}return v(),{unsubscribe:m(v)}},[z0](){return this}}}return f({type:Ru.INIT}),{dispatch:f,subscribe:d,getState:u,replaceReducer:p,[z0]:g}}function UR(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:Ru.INIT})>"u")throw new Error(Ht(12));if(typeof n(void 0,{type:Ru.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ht(13))})}function kR(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const i=Object.keys(n);let r;try{UR(n)}catch(s){r=s}return function(o={},a){if(r)throw r;let l=!1;const c={};for(let u=0;u<i.length;u++){const d=i[u],f=n[d],p=o[d],g=f(p,a);if(typeof g>"u")throw a&&a.type,new Error(Ht(14));c[d]=g,l=l||g!==p}return l=l||i.length!==Object.keys(o).length,l?c:o}}function Pu(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...i)=>e(n(...i)))}function FR(...t){return e=>(n,i)=>{const r=e(n,i);let s=()=>{throw new Error(Ht(15))};const o={getState:r.getState,dispatch:(l,...c)=>s(l,...c)},a=t.map(l=>l(o));return s=Pu(...a)(r.dispatch),{...r,dispatch:s}}}function BR(t){return hg(t)&&"type"in t&&typeof t.type=="string"}var KM=Symbol.for("immer-nothing"),V0=Symbol.for("immer-draftable"),Nn=Symbol.for("immer-state");function si(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var ko=Object.getPrototypeOf;function As(t){return!!t&&!!t[Nn]}function Qi(t){var e;return t?ZM(t)||Array.isArray(t)||!!t[V0]||!!((e=t.constructor)!=null&&e[V0])||md(t)||gd(t):!1}var zR=Object.prototype.constructor.toString();function ZM(t){if(!t||typeof t!="object")return!1;const e=ko(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===zR}function Lu(t,e){pd(t)===0?Reflect.ownKeys(t).forEach(n=>{e(n,t[n],t)}):t.forEach((n,i)=>e(i,n,t))}function pd(t){const e=t[Nn];return e?e.type_:Array.isArray(t)?1:md(t)?2:gd(t)?3:0}function bp(t,e){return pd(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function QM(t,e,n){const i=pd(t);i===2?t.set(e,n):i===3?t.add(n):t[e]=n}function VR(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function md(t){return t instanceof Map}function gd(t){return t instanceof Set}function ts(t){return t.copy_||t.base_}function Ap(t,e){if(md(t))return new Map(t);if(gd(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);const n=ZM(t);if(e===!0||e==="class_only"&&!n){const i=Object.getOwnPropertyDescriptors(t);delete i[Nn];let r=Reflect.ownKeys(i);for(let s=0;s<r.length;s++){const o=r[s],a=i[o];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(i[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:t[o]})}return Object.create(ko(t),i)}else{const i=ko(t);if(i!==null&&n)return{...t};const r=Object.create(i);return Object.assign(r,t)}}function pg(t,e=!1){return vd(t)||As(t)||!Qi(t)||(pd(t)>1&&(t.set=t.add=t.clear=t.delete=HR),Object.freeze(t),e&&Object.entries(t).forEach(([n,i])=>pg(i,!0))),t}function HR(){si(2)}function vd(t){return Object.isFrozen(t)}var GR={};function Cs(t){const e=GR[t];return e||si(0,t),e}var rl;function JM(){return rl}function jR(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function H0(t,e){e&&(Cs("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function Cp(t){Rp(t),t.drafts_.forEach(WR),t.drafts_=null}function Rp(t){t===rl&&(rl=t.parent_)}function G0(t){return rl=jR(rl,t)}function WR(t){const e=t[Nn];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function j0(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[Nn].modified_&&(Cp(e),si(4)),Qi(t)&&(t=Du(e,t),e.parent_||Nu(e,t)),e.patches_&&Cs("Patches").generateReplacementPatches_(n[Nn].base_,t,e.patches_,e.inversePatches_)):t=Du(e,n,[]),Cp(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==KM?t:void 0}function Du(t,e,n){if(vd(e))return e;const i=e[Nn];if(!i)return Lu(e,(r,s)=>W0(t,i,e,r,s,n)),e;if(i.scope_!==t)return e;if(!i.modified_)return Nu(t,i.base_,!0),i.base_;if(!i.finalized_){i.finalized_=!0,i.scope_.unfinalizedDrafts_--;const r=i.copy_;let s=r,o=!1;i.type_===3&&(s=new Set(r),r.clear(),o=!0),Lu(s,(a,l)=>W0(t,i,r,a,l,n,o)),Nu(t,r,!1),n&&t.patches_&&Cs("Patches").generatePatches_(i,n,t.patches_,t.inversePatches_)}return i.copy_}function W0(t,e,n,i,r,s,o){if(As(r)){const a=s&&e&&e.type_!==3&&!bp(e.assigned_,i)?s.concat(i):void 0,l=Du(t,r,a);if(QM(n,i,l),As(l))t.canAutoFreeze_=!1;else return}else o&&n.add(r);if(Qi(r)&&!vd(r)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;Du(t,r),(!e||!e.scope_.parent_)&&typeof i!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,i)&&Nu(t,r)}}function Nu(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&pg(e,n)}function $R(t,e){const n=Array.isArray(t),i={type_:n?1:0,scope_:e?e.scope_:JM(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let r=i,s=mg;n&&(r=[i],s=sl);const{revoke:o,proxy:a}=Proxy.revocable(r,s);return i.draft_=a,i.revoke_=o,a}var mg={get(t,e){if(e===Nn)return t;const n=ts(t);if(!bp(n,e))return XR(t,n,e);const i=n[e];return t.finalized_||!Qi(i)?i:i===wf(t.base_,e)?(Tf(t),t.copy_[e]=Lp(i,t)):i},has(t,e){return e in ts(t)},ownKeys(t){return Reflect.ownKeys(ts(t))},set(t,e,n){const i=ew(ts(t),e);if(i!=null&&i.set)return i.set.call(t.draft_,n),!0;if(!t.modified_){const r=wf(ts(t),e),s=r==null?void 0:r[Nn];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(VR(n,r)&&(n!==void 0||bp(t.base_,e)))return!0;Tf(t),Pp(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return wf(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,Tf(t),Pp(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=ts(t),i=Reflect.getOwnPropertyDescriptor(n,e);return i&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:i.enumerable,value:n[e]}},defineProperty(){si(11)},getPrototypeOf(t){return ko(t.base_)},setPrototypeOf(){si(12)}},sl={};Lu(mg,(t,e)=>{sl[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});sl.deleteProperty=function(t,e){return sl.set.call(this,t,e,void 0)};sl.set=function(t,e,n){return mg.set.call(this,t[0],e,n,t[0])};function wf(t,e){const n=t[Nn];return(n?ts(n):t)[e]}function XR(t,e,n){var r;const i=ew(e,n);return i?"value"in i?i.value:(r=i.get)==null?void 0:r.call(t.draft_):void 0}function ew(t,e){if(!(e in t))return;let n=ko(t);for(;n;){const i=Object.getOwnPropertyDescriptor(n,e);if(i)return i;n=ko(n)}}function Pp(t){t.modified_||(t.modified_=!0,t.parent_&&Pp(t.parent_))}function Tf(t){t.copy_||(t.copy_=Ap(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var qR=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,i)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(l=s,...c){return o.produce(l,u=>n.call(this,u,...c))}}typeof n!="function"&&si(6),i!==void 0&&typeof i!="function"&&si(7);let r;if(Qi(e)){const s=G0(this),o=Lp(e,void 0);let a=!0;try{r=n(o),a=!1}finally{a?Cp(s):Rp(s)}return H0(s,i),j0(r,s)}else if(!e||typeof e!="object"){if(r=n(e),r===void 0&&(r=e),r===KM&&(r=void 0),this.autoFreeze_&&pg(r,!0),i){const s=[],o=[];Cs("Patches").generateReplacementPatches_(e,r,s,o),i(s,o)}return r}else si(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,l=>e(l,...a));let i,r;return[this.produce(e,n,(o,a)=>{i=o,r=a}),i,r]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){Qi(t)||si(8),As(t)&&(t=YR(t));const e=G0(this),n=Lp(t,void 0);return n[Nn].isManual_=!0,Rp(e),n}finishDraft(t,e){const n=t&&t[Nn];(!n||!n.isManual_)&&si(9);const{scope_:i}=n;return H0(i,e),j0(void 0,i)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const r=e[n];if(r.path.length===0&&r.op==="replace"){t=r.value;break}}n>-1&&(e=e.slice(n+1));const i=Cs("Patches").applyPatches_;return As(t)?i(t,e):this.produce(t,r=>i(r,e))}};function Lp(t,e){const n=md(t)?Cs("MapSet").proxyMap_(t,e):gd(t)?Cs("MapSet").proxySet_(t,e):$R(t,e);return(e?e.scope_:JM()).drafts_.push(n),n}function YR(t){return As(t)||si(10,t),tw(t)}function tw(t){if(!Qi(t)||vd(t))return t;const e=t[Nn];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=Ap(t,e.scope_.immer_.useStrictShallowCopy_)}else n=Ap(t,!0);return Lu(n,(i,r)=>{QM(n,i,tw(r))}),e&&(e.finalized_=!1),n}var In=new qR,nw=In.produce;In.produceWithPatches.bind(In);In.setAutoFreeze.bind(In);In.setUseStrictShallowCopy.bind(In);In.applyPatches.bind(In);In.createDraft.bind(In);In.finishDraft.bind(In);function iw(t){return({dispatch:n,getState:i})=>r=>s=>typeof s=="function"?s(n,i,t):r(s)}var KR=iw(),ZR=iw,QR=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Pu:Pu.apply(null,arguments)};function $0(t,e){function n(...i){if(e){let r=e(...i);if(!r)throw new Error(ji(0));return{type:t,payload:r.payload,..."meta"in r&&{meta:r.meta},..."error"in r&&{error:r.error}}}return{type:t,payload:i[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=i=>BR(i)&&i.type===t,n}var rw=class Ea extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,Ea.prototype)}static get[Symbol.species](){return Ea}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new Ea(...e[0].concat(this)):new Ea(...e.concat(this))}};function X0(t){return Qi(t)?nw(t,()=>{}):t}function ic(t,e,n){return t.has(e)?t.get(e):t.set(e,n(e)).get(e)}function JR(t){return typeof t=="boolean"}var eP=()=>function(e){const{thunk:n=!0,immutableCheck:i=!0,serializableCheck:r=!0,actionCreatorCheck:s=!0}=e??{};let o=new rw;return n&&(JR(n)?o.push(KR):o.push(ZR(n.extraArgument))),o},tP="RTK_autoBatch",q0=t=>e=>{setTimeout(e,t)},nP=(t={type:"raf"})=>e=>(...n)=>{const i=e(...n);let r=!0,s=!1,o=!1;const a=new Set,l=t.type==="tick"?queueMicrotask:t.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:q0(10):t.type==="callback"?t.queueNotification:q0(t.timeout),c=()=>{o=!1,s&&(s=!1,a.forEach(u=>u()))};return Object.assign({},i,{subscribe(u){const d=()=>r&&u(),f=i.subscribe(d);return a.add(u),()=>{f(),a.delete(u)}},dispatch(u){var d;try{return r=!((d=u==null?void 0:u.meta)!=null&&d[tP]),s=!r,s&&(o||(o=!0,l(c))),i.dispatch(u)}finally{r=!0}}})},iP=t=>function(n){const{autoBatch:i=!0}=n??{};let r=new rw(t);return i&&r.push(nP(typeof i=="object"?i:void 0)),r};function rP(t){const e=eP(),{reducer:n=void 0,middleware:i,devTools:r=!0,duplicateMiddlewareCheck:s=!0,preloadedState:o=void 0,enhancers:a=void 0}=t||{};let l;if(typeof n=="function")l=n;else if(hg(n))l=kR(n);else throw new Error(ji(1));let c;typeof i=="function"?c=i(e):c=e();let u=Pu;r&&(u=QR({trace:!1,...typeof r=="object"&&r}));const d=FR(...c),f=iP(d);let p=typeof a=="function"?a(f):f();const g=u(...p);return YM(l,o,g)}function sw(t){const e={},n=[];let i;const r={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(ji(28));if(a in e)throw new Error(ji(29));return e[a]=o,r},addMatcher(s,o){return n.push({matcher:s,reducer:o}),r},addDefaultCase(s){return i=s,r}};return t(r),[e,n,i]}function sP(t){return typeof t=="function"}function oP(t,e){let[n,i,r]=sw(e),s;if(sP(t))s=()=>X0(t());else{const a=X0(t);s=()=>a}function o(a=s(),l){let c=[n[l.type],...i.filter(({matcher:u})=>u(l)).map(({reducer:u})=>u)];return c.filter(u=>!!u).length===0&&(c=[r]),c.reduce((u,d)=>{if(d)if(As(u)){const p=d(u,l);return p===void 0?u:p}else{if(Qi(u))return nw(u,f=>d(f,l));{const f=d(u,l);if(f===void 0){if(u===null)return u;throw Error("A case reducer on a non-draftable value must not return undefined")}return f}}return u},a)}return o.getInitialState=s,o}var aP=Symbol.for("rtk-slice-createasyncthunk");function lP(t,e){return`${t}/${e}`}function cP({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[aP];return function(r){const{name:s,reducerPath:o=s}=r;if(!s)throw new Error(ji(11));typeof process<"u";const a=(typeof r.reducers=="function"?r.reducers(fP()):r.reducers)||{},l=Object.keys(a),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},u={addCase(x,T){const w=typeof x=="string"?x:x.type;if(!w)throw new Error(ji(12));if(w in c.sliceCaseReducersByType)throw new Error(ji(13));return c.sliceCaseReducersByType[w]=T,u},addMatcher(x,T){return c.sliceMatchers.push({matcher:x,reducer:T}),u},exposeAction(x,T){return c.actionCreators[x]=T,u},exposeCaseReducer(x,T){return c.sliceCaseReducersByName[x]=T,u}};l.forEach(x=>{const T=a[x],w={reducerName:x,type:lP(s,x),createNotation:typeof r.reducers=="function"};pP(T)?gP(w,T,u,e):hP(w,T,u)});function d(){const[x={},T=[],w=void 0]=typeof r.extraReducers=="function"?sw(r.extraReducers):[r.extraReducers],b={...x,...c.sliceCaseReducersByType};return oP(r.initialState,L=>{for(let $ in b)L.addCase($,b[$]);for(let $ of c.sliceMatchers)L.addMatcher($.matcher,$.reducer);for(let $ of T)L.addMatcher($.matcher,$.reducer);w&&L.addDefaultCase(w)})}const f=x=>x,p=new Map,g=new WeakMap;let _;function m(x,T){return _||(_=d()),_(x,T)}function h(){return _||(_=d()),_.getInitialState()}function v(x,T=!1){function w(L){let $=L[x];return typeof $>"u"&&T&&($=ic(g,w,h)),$}function b(L=f){const $=ic(p,T,()=>new WeakMap);return ic($,L,()=>{const S={};for(const[R,q]of Object.entries(r.selectors??{}))S[R]=uP(q,L,()=>ic(g,L,h),T);return S})}return{reducerPath:x,getSelectors:b,get selectors(){return b(w)},selectSlice:w}}const y={name:s,reducer:m,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:h,...v(o),injectInto(x,{reducerPath:T,...w}={}){const b=T??o;return x.inject({reducerPath:b,reducer:m},w),{...y,...v(b,!0)}}};return y}}function uP(t,e,n,i){function r(s,...o){let a=e(s);return typeof a>"u"&&i&&(a=n()),t(a,...o)}return r.unwrapped=t,r}var dP=cP();function fP(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function hP({type:t,reducerName:e,createNotation:n},i,r){let s,o;if("reducer"in i){if(n&&!mP(i))throw new Error(ji(17));s=i.reducer,o=i.prepare}else s=i;r.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?$0(t,o):$0(t))}function pP(t){return t._reducerDefinitionType==="asyncThunk"}function mP(t){return t._reducerDefinitionType==="reducerWithPrepare"}function gP({type:t,reducerName:e},n,i,r){if(!r)throw new Error(ji(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:l,settled:c,options:u}=n,d=r(t,s,u);i.exposeAction(e,d),o&&i.addCase(d.fulfilled,o),a&&i.addCase(d.pending,a),l&&i.addCase(d.rejected,l),c&&i.addMatcher(d.settled,c),i.exposeCaseReducer(e,{fulfilled:o||rc,pending:a||rc,rejected:l||rc,settled:c||rc})}function rc(){}function ji(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}const vP="/assets/1-CxX14RXf.png",yP="/assets/2-dzZC46kH.png",_P="/assets/3-BVpzecDS.png",xP="/assets/4-FgKTefHi.png",SP="/assets/5-CYsRRRSR.png",EP="/assets/6-BYT0YEIB.png",MP="/assets/7-CDKoZ_J4.png",wP="/assets/8-BK1v4fck.png",TP="/assets/9-wTxtfl3P.png",bf="https://github.com/ri-yan",Y0="https://linkedin.com/in/riyan08",K0="https://twitter.com/yourusername",sc="mriyan0801@gmail.com",bP={app:{logoText:"< Riyan />",ownerName:"Mohd. Riyan",resume:"https://drive.google.com/file/d/1ZEnXY-lU7S37OgnR0_p7G-3ocg81TM74/view?usp=drive_link"},hero:{title:{main:"Developer Planner",sub:"& Leader"},images:[vP,yP,_P,xP,SP,EP,MP,wP,TP],previewImages:["/assets/1.png","/assets/2.png","/assets/3.png","/assets/4.png","/assets/5.png","/assets/6.png","/assets/7.png","/assets/8.png","/assets/9.png"],description:"I create exceptional digital experiences that make a difference. Specializing in modern web/mobile applications and innovative solutions.",buttons:{primary:{text:"View My Work",target:"projects"},secondary:{text:"Get In Touch",target:"contact"}},socialLinks:[{platform:"GitHub",url:bf,icon:"GitHub"},{platform:"LinkedIn",url:Y0,icon:"Linkedin"},{platform:"Twitter",url:K0,icon:"Twitter"},{platform:"Email",url:`mailto:${sc}`,icon:"Mail"}],quotes:["Design is intelligence made visible.","Code is like humor. When you have to explain it, it's bad.","Simplicity is the soul of efficiency.","Make it work, make it right, make it fast.","Creativity is nothing but a mind set free.","Every great design begins with an even better story.","Any product that needs a manual is broken.","Good design is good business.","The best way to predict the future is to invent it."]},about:{title:"About Me",subtitle:"Here you'll find more information about me, what I do, and my current skills mostly in terms of programming and technology.",introTitle:"Get to know me!",intro:["I'm a <span class='text-teal-500 dark:text-teal-default font-medium'>Full Stack Developer</span> building robust and user-friendly web applications that solve real-world problems. I enjoy creating software that is both functional and visually appealing.","I specialize in developing full-stack applications using modern technologies. My passion lies in designing efficient and scalable backend systems, as well as crafting engaging and intuitive user interfaces.","In addition to my development work, I'm also available for <span class='text-teal-500 dark:text-teal-default font-medium'>freelance projects</span> and open to collaboration opportunities. If you have a project in mind, feel free to reach out!"],servicesTitle:"My Services",services:[{icon:"Code2",title:"Web Development",description:"Creating responsive, user-friendly websites and applications with modern frameworks"},{icon:"Cpu",title:"API Development",description:"Designing and implementing RESTful APIs and backend services"},{icon:"Globe",title:"DevOps & Deployment",description:"Setting up CI/CD pipelines, cloud infrastructure, and containerization"},{icon:"Codepen",title:"Custom Solutions",description:"Building tailored software solutions for specific business needs"}]},services:{title:"<span>Services <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] ml-2'> < I /> Provide  </span></span>",subtitle:"Delivering exceptional digital solutions tailored to your needs",items:[{icon:"Palette",title:"Graphic Design",description:"Creating stunning visual assets and brand identities that capture attention and communicate your message effectively.",gradient:"from-[#FF0080] to-[#7928CA]"},{icon:"Globe2",title:"Web Design",description:"Crafting beautiful, responsive websites that provide exceptional user experiences across all devices.",gradient:"from-[#7928CA] to-[#FF0080]"},{icon:"Layers",title:"UI/UX Design",description:"Designing intuitive interfaces and seamless user experiences that delight and engage your audience.",gradient:"from-[#00F5A0] to-[#00D9F5]"},{icon:"Code2",title:"Frontend Development",description:"Building modern, performant web applications using the latest technologies and best practices.",gradient:"from-[#00D9F5] to-[#00F5A0]"},{icon:"LineChart",title:"Business Analysis",description:"Providing strategic insights and data-driven solutions to help your business grow and succeed.",gradient:"from-[#7928CA] to-[#FF0080]"},{icon:"Megaphone",title:"Digital Marketing",description:"Implementing effective digital marketing strategies to increase your online presence and reach.",gradient:"from-[#00F5A0] to-[#00D9F5]"}]},skills:{title:'My <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] ml-2">Expertise</span>',subtitle:"Proficient in modern technologies and frameworks",categories:[{category:"Frontend",items:[{name:"React",level:90},{name:"Next.js",level:85},{name:"TypeScript",level:90},{name:"Vue.js",level:80},{name:"TailwindCSS",level:85}]},{category:"Backend",items:[{name:"Node.js",level:90},{name:"Express",level:85},{name:"Python",level:80},{name:"Django",level:75},{name:"GraphQL",level:70}]},{category:"Database",items:[{name:"MongoDB",level:85},{name:"PostgreSQL",level:80},{name:"Redis",level:75},{name:"MySQL",level:80},{name:"Firebase",level:85}]}]},projects:{title:"Featured Projects",subtitle:"Explore my latest works and creative endeavors",subtitleTwo:"Other Noteworthy Projects",subtitleThree:"Featured Projects",categories:[{id:"all",label:"All Projects"},{id:"web",label:"Web Apps"},{id:"mobile",label:"Mobile"},{id:"ux",label:"UX/UI"},{id:"api",label:"API"}],items:[{id:1,title:"E-Commerce Platform",description:"A full-featured e-commerce platform with product management, user authentication, and payment processing.",image:"https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",technologies:["React","Node.js","MongoDB","Stripe"],github:"https://github.com/yourusername/project-1",demo:"https://project-1.example.com",category:"web",featured:!0},{id:2,title:"Task Management App",description:"A collaborative task management application with real-time updates, team management, and analytics.",image:"https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",technologies:["React","Redux","Firebase"],github:"https://github.com/yourusername/project-2",demo:"https://project-2.example.com",category:"web",featured:!0},{id:3,title:"Weather Dashboard",description:"A weather forecasting application that provides detailed weather information for any location.",image:"https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",technologies:["JavaScript","OpenWeather API","Chart.js"],github:"https://github.com/yourusername/project-3",demo:"https://project-3.example.com",category:"web",featured:!1},{id:4,title:"Social Media Mobile App",description:"A cross-platform mobile application for social media interaction with features like posts, comments, and messaging.",image:"https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",technologies:["React Native","Firebase","Redux"],github:"https://github.com/yourusername/project-4",demo:"https://project-4.example.com",category:"mobile",featured:!0},{id:5,title:"RESTful API Service",description:"A robust API service for data processing and integration with third-party systems.",image:"https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",technologies:["Node.js","Express","PostgreSQL","Docker"],github:"https://github.com/yourusername/project-5",demo:"https://project-5.example.com",category:"api",featured:!1},{id:6,title:"UI Component Library",description:"A comprehensive collection of reusable UI components with customization options.",image:"https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",technologies:["React","Storybook","Styled Components"],github:"https://github.com/yourusername/project-6",demo:"https://project-6.example.com",category:"ux",featured:!1}],githubLink:bf},testimonials:{title:"What My Clients Say",subtitle:"Testimonials from satisfied clients",items:[{name:"Sarah Johnson",role:"CEO at TechStart",image:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",content:"Working with this team has been an absolute pleasure. Their attention to detail and creative approach to problem-solving has significantly improved our digital presence.",rating:5},{name:"Michael Chen",role:"Product Manager",image:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",content:"The level of professionalism and technical expertise is outstanding. They delivered our project ahead of schedule and exceeded all expectations.",rating:5},{name:"Emily Rodriguez",role:"Marketing Director",image:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",content:"Their innovative solutions and strategic thinking have helped us achieve remarkable growth. A truly reliable and talented partner for any digital project.",rating:5}]},contact:{title:"Get In Touch",leftHeader:"Contact Information",rightHeader:"Send Me a Message",subtitle:"Feel free to contact me for any project or collaboration",info:{description:"I'm interested in freelance opportunities – especially ambitious or large projects. However, if you have other requests or questions, don't hesitate to contact me.",location:"Lucknow, Uttar Pradesh, India",email:sc,phone:"+91 9044271286"}},footer:{description:"A passionate Software Engineer and Freelancer building digital products with a focus on user experience.",socialLinks:[{platform:"GitHub",url:bf},{platform:"LinkedIn",url:Y0},{platform:"Twitter",url:K0},{platform:"Email",url:`mailto:${sc}`}],quickLinks:[{name:"Home",href:"#hero"},{name:"About",href:"#about"},{name:"Skills",href:"#skills"},{name:"Projects",href:"#projects"},{name:"Contact",href:"#contact"}],contactme:{email:sc,phone:"+91 9044271286",github:"github.com/ri-yan",linkedin:"linkedin.com/in/riyan08",twitter:"twitter.com/yourusername"}}},AP=bP,CP=dP({name:"staticData",initialState:AP,reducers:{}}),yd=t=>t.staticData.app,RP=t=>t.staticData.hero,PP=t=>t.staticData.about,LP=t=>t.staticData.services,DP=t=>t.staticData.skills,ow=t=>t.staticData.projects,NP=t=>t.staticData.testimonials,IP=t=>t.staticData.contact,OP=t=>t.staticData.footer,UP=CP.reducer,kP=rP({reducer:{staticData:UP}});var Et={},gg={},xl={},Sl={},aw="Expected a function",Z0=NaN,FP="[object Symbol]",BP=/^\s+|\s+$/g,zP=/^[-+]0x[0-9a-f]+$/i,VP=/^0b[01]+$/i,HP=/^0o[0-7]+$/i,GP=parseInt,jP=typeof Bl=="object"&&Bl&&Bl.Object===Object&&Bl,WP=typeof self=="object"&&self&&self.Object===Object&&self,$P=jP||WP||Function("return this")(),XP=Object.prototype,qP=XP.toString,YP=Math.max,KP=Math.min,Af=function(){return $P.Date.now()};function ZP(t,e,n){var i,r,s,o,a,l,c=0,u=!1,d=!1,f=!0;if(typeof t!="function")throw new TypeError(aw);e=Q0(e)||0,Iu(n)&&(u=!!n.leading,d="maxWait"in n,s=d?YP(Q0(n.maxWait)||0,e):s,f="trailing"in n?!!n.trailing:f);function p(w){var b=i,L=r;return i=r=void 0,c=w,o=t.apply(L,b),o}function g(w){return c=w,a=setTimeout(h,e),u?p(w):o}function _(w){var b=w-l,L=w-c,$=e-b;return d?KP($,s-L):$}function m(w){var b=w-l,L=w-c;return l===void 0||b>=e||b<0||d&&L>=s}function h(){var w=Af();if(m(w))return v(w);a=setTimeout(h,_(w))}function v(w){return a=void 0,f&&i?p(w):(i=r=void 0,o)}function y(){a!==void 0&&clearTimeout(a),c=0,i=l=r=a=void 0}function x(){return a===void 0?o:v(Af())}function T(){var w=Af(),b=m(w);if(i=arguments,r=this,l=w,b){if(a===void 0)return g(l);if(d)return a=setTimeout(h,e),p(l)}return a===void 0&&(a=setTimeout(h,e)),o}return T.cancel=y,T.flush=x,T}function QP(t,e,n){var i=!0,r=!0;if(typeof t!="function")throw new TypeError(aw);return Iu(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),ZP(t,e,{leading:i,maxWait:e,trailing:r})}function Iu(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function JP(t){return!!t&&typeof t=="object"}function e2(t){return typeof t=="symbol"||JP(t)&&qP.call(t)==FP}function Q0(t){if(typeof t=="number")return t;if(e2(t))return Z0;if(Iu(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Iu(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(BP,"");var n=VP.test(t);return n||HP.test(t)?GP(t.slice(2),n?2:8):zP.test(t)?Z0:+t}var t2=QP,El={};Object.defineProperty(El,"__esModule",{value:!0});El.addPassiveEventListener=function(e,n,i){var r=i.name;r||(r=n,console.warn("Listener must be a named function.")),Zc.has(n)||Zc.set(n,new Set);var s=Zc.get(n);if(!s.has(r)){var o=function(){var a=!1;try{var l=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,l)}catch{}return a}();e.addEventListener(n,i,o?{passive:!0}:!1),s.add(r)}};El.removePassiveEventListener=function(e,n,i){e.removeEventListener(n,i),Zc.get(n).delete(i.name||n)};var Zc=new Map;Object.defineProperty(Sl,"__esModule",{value:!0});var n2=t2,i2=r2(n2),J0=El;function r2(t){return t&&t.__esModule?t:{default:t}}var s2=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,i2.default)(e,n)},mt={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,n){if(e){var i=s2(function(r){mt.scrollHandler(e)},n);return mt.scrollSpyContainers.push(e),(0,J0.addPassiveEventListener)(e,"scroll",i),function(){(0,J0.removePassiveEventListener)(e,"scroll",i),mt.scrollSpyContainers.splice(mt.scrollSpyContainers.indexOf(e),1)}}return function(){}},isMounted:function(e){return mt.scrollSpyContainers.indexOf(e)!==-1},currentPositionX:function(e){if(e===document){var n=window.scrollY!==void 0,i=(document.compatMode||"")==="CSS1Compat";return n?window.scrollX:i?document.documentElement.scrollLeft:document.body.scrollLeft}else return e.scrollLeft},currentPositionY:function(e){if(e===document){var n=window.scrollX!==void 0,i=(document.compatMode||"")==="CSS1Compat";return n?window.scrollY:i?document.documentElement.scrollTop:document.body.scrollTop}else return e.scrollTop},scrollHandler:function(e){var n=mt.scrollSpyContainers[mt.scrollSpyContainers.indexOf(e)].spyCallbacks||[];n.forEach(function(i){return i(mt.currentPositionX(e),mt.currentPositionY(e))})},addStateHandler:function(e){mt.spySetState.push(e)},addSpyHandler:function(e,n){var i=mt.scrollSpyContainers[mt.scrollSpyContainers.indexOf(n)];i.spyCallbacks||(i.spyCallbacks=[]),i.spyCallbacks.push(e)},updateStates:function(){mt.spySetState.forEach(function(e){return e()})},unmount:function(e,n){mt.scrollSpyContainers.forEach(function(i){return i.spyCallbacks&&i.spyCallbacks.length&&i.spyCallbacks.indexOf(n)>-1&&i.spyCallbacks.splice(i.spyCallbacks.indexOf(n),1)}),mt.spySetState&&mt.spySetState.length&&mt.spySetState.indexOf(e)>-1&&mt.spySetState.splice(mt.spySetState.indexOf(e),1),document.removeEventListener("scroll",mt.scrollHandler)},update:function(){return mt.scrollSpyContainers.forEach(function(e){return mt.scrollHandler(e)})}};Sl.default=mt;var qo={},Ml={};Object.defineProperty(Ml,"__esModule",{value:!0});var o2=function(e,n){var i=e.indexOf("#")===0?e.substring(1):e,r=i?"#"+i:"",s=window&&window.location,o=r?s.pathname+s.search+r:s.pathname+s.search;n?history.pushState(history.state,"",o):history.replaceState(history.state,"",o)},a2=function(){return window.location.hash.replace(/^#/,"")},l2=function(e){return function(n){return e.contains?e!=n&&e.contains(n):!!(e.compareDocumentPosition(n)&16)}},c2=function(e){return getComputedStyle(e).position!=="static"},Cf=function(e,n){for(var i=e.offsetTop,r=e.offsetParent;r&&!n(r);)i+=r.offsetTop,r=r.offsetParent;return{offsetTop:i,offsetParent:r}},u2=function(e,n,i){if(i)return e===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(e).position!=="static"?n.offsetLeft:n.offsetLeft-e.offsetLeft;if(e===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(c2(e)){if(n.offsetParent!==e){var r=function(u){return u===e||u===document},s=Cf(n,r),o=s.offsetTop,a=s.offsetParent;if(a!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return o}return n.offsetTop}if(n.offsetParent===e.offsetParent)return n.offsetTop-e.offsetTop;var l=function(u){return u===document};return Cf(n,l).offsetTop-Cf(e,l).offsetTop};Ml.default={updateHash:o2,getHash:a2,filterElementInContainer:l2,scrollOffset:u2};var _d={},vg={};Object.defineProperty(vg,"__esModule",{value:!0});vg.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}};var yg={};Object.defineProperty(yg,"__esModule",{value:!0});var d2=El,f2=["mousedown","wheel","touchmove","keydown"];yg.default={subscribe:function(e){return typeof document<"u"&&f2.forEach(function(n){return(0,d2.addPassiveEventListener)(document,n,e)})}};var wl={};Object.defineProperty(wl,"__esModule",{value:!0});var Dp={registered:{},scrollEvent:{register:function(e,n){Dp.registered[e]=n},remove:function(e){Dp.registered[e]=null}}};wl.default=Dp;Object.defineProperty(_d,"__esModule",{value:!0});var h2=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},p2=Ml;xd(p2);var m2=vg,ey=xd(m2),g2=yg,v2=xd(g2),y2=wl,gi=xd(y2);function xd(t){return t&&t.__esModule?t:{default:t}}var lw=function(e){return ey.default[e.smooth]||ey.default.defaultEasing},_2=function(e){return typeof e=="function"?e:function(){return e}},x2=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},Np=function(){return x2()||function(t,e,n){window.setTimeout(t,n||1e3/60,new Date().getTime())}}(),cw=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},uw=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var i=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return i?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft},dw=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var i=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return i?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop},S2=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var i=document.body,r=document.documentElement;return Math.max(i.scrollWidth,i.offsetWidth,r.clientWidth,r.scrollWidth,r.offsetWidth)},E2=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var i=document.body,r=document.documentElement;return Math.max(i.scrollHeight,i.offsetHeight,r.clientHeight,r.scrollHeight,r.offsetHeight)},M2=function t(e,n,i){var r=n.data;if(!n.ignoreCancelEvents&&r.cancel){gi.default.registered.end&&gi.default.registered.end(r.to,r.target,r.currentPositionY);return}if(r.delta=Math.round(r.targetPosition-r.startPosition),r.start===null&&(r.start=i),r.progress=i-r.start,r.percent=r.progress>=r.duration?1:e(r.progress/r.duration),r.currentPosition=r.startPosition+Math.ceil(r.delta*r.percent),r.containerElement&&r.containerElement!==document&&r.containerElement!==document.body?n.horizontal?r.containerElement.scrollLeft=r.currentPosition:r.containerElement.scrollTop=r.currentPosition:n.horizontal?window.scrollTo(r.currentPosition,0):window.scrollTo(0,r.currentPosition),r.percent<1){var s=t.bind(null,e,n);Np.call(window,s);return}gi.default.registered.end&&gi.default.registered.end(r.to,r.target,r.currentPosition)},_g=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},Tl=function(e,n,i,r){n.data=n.data||cw(),window.clearTimeout(n.data.delayTimeout);var s=function(){n.data.cancel=!0};if(v2.default.subscribe(s),_g(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?uw(n):dw(n),n.data.targetPosition=n.absolute?e:e+n.data.startPosition,n.data.startPosition===n.data.targetPosition){gi.default.registered.end&&gi.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=_2(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=i,n.data.target=r;var o=lw(n),a=M2.bind(null,o,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){gi.default.registered.begin&&gi.default.registered.begin(n.data.to,n.data.target),Np.call(window,a)},n.delay);return}gi.default.registered.begin&&gi.default.registered.begin(n.data.to,n.data.target),Np.call(window,a)},Sd=function(e){return e=h2({},e),e.data=e.data||cw(),e.absolute=!0,e},w2=function(e){Tl(0,Sd(e))},T2=function(e,n){Tl(e,Sd(n))},b2=function(e){e=Sd(e),_g(e),Tl(e.horizontal?S2(e):E2(e),e)},A2=function(e,n){n=Sd(n),_g(n);var i=n.horizontal?uw(n):dw(n);Tl(e+i,n)};_d.default={animateTopScroll:Tl,getAnimationType:lw,scrollToTop:w2,scrollToBottom:b2,scrollTo:T2,scrollMore:A2};Object.defineProperty(qo,"__esModule",{value:!0});var C2=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},R2=Ml,P2=xg(R2),L2=_d,D2=xg(L2),N2=wl,oc=xg(N2);function xg(t){return t&&t.__esModule?t:{default:t}}var ac={},ty=void 0;qo.default={unmount:function(){ac={}},register:function(e,n){ac[e]=n},unregister:function(e){delete ac[e]},get:function(e){return ac[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return ty=e},getActiveLink:function(){return ty},scrollTo:function(e,n){var i=this.get(e);if(!i){console.warn("target Element not found");return}n=C2({},n,{absolute:!1});var r=n.containerId,s=n.container,o=void 0;r?o=document.getElementById(r):s&&s.nodeType?o=s:o=document,n.absolute=!0;var a=n.horizontal,l=P2.default.scrollOffset(o,i,a)+(n.offset||0);if(!n.smooth){oc.default.registered.begin&&oc.default.registered.begin(e,i),o===document?n.horizontal?window.scrollTo(l,0):window.scrollTo(0,l):o.scrollTop=l,oc.default.registered.end&&oc.default.registered.end(e,i);return}D2.default.animateTopScroll(l,n,e,i)}};var fw={exports:{}},I2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",O2=I2,U2=O2;function hw(){}function pw(){}pw.resetWarningCache=hw;var k2=function(){function t(i,r,s,o,a,l){if(l!==U2){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:pw,resetWarningCache:hw};return n.PropTypes=n,n};fw.exports=k2();var Ed=fw.exports,Md={};Object.defineProperty(Md,"__esModule",{value:!0});var F2=Ml,Rf=B2(F2);function B2(t){return t&&t.__esModule?t:{default:t}}var z2={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,n){this.containers[e]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,n=this.getHash();n?window.setTimeout(function(){e.scrollTo(n,!0),e.initialized=!0},10):this.initialized=!0},scrollTo:function(e,n){var i=this.scroller,r=i.get(e);if(r&&(n||e!==i.getActiveLink())){var s=this.containers[e]||document;i.scrollTo(e,{container:s})}},getHash:function(){return Rf.default.getHash()},changeHash:function(e,n){this.isInitialized()&&Rf.default.getHash()!==e&&Rf.default.updateHash(e,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};Md.default=z2;Object.defineProperty(xl,"__esModule",{value:!0});var lc=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},V2=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),H2=H,ny=bl(H2),G2=Sl,cc=bl(G2),j2=qo,W2=bl(j2),$2=Ed,dt=bl($2),X2=Md,rr=bl(X2);function bl(t){return t&&t.__esModule?t:{default:t}}function q2(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Y2(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function K2(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var iy={to:dt.default.string.isRequired,containerId:dt.default.string,container:dt.default.object,activeClass:dt.default.string,activeStyle:dt.default.object,spy:dt.default.bool,horizontal:dt.default.bool,smooth:dt.default.oneOfType([dt.default.bool,dt.default.string]),offset:dt.default.number,delay:dt.default.number,isDynamic:dt.default.bool,onClick:dt.default.func,duration:dt.default.oneOfType([dt.default.number,dt.default.func]),absolute:dt.default.bool,onSetActive:dt.default.func,onSetInactive:dt.default.func,ignoreCancelEvents:dt.default.bool,hashSpy:dt.default.bool,saveHashHistory:dt.default.bool,spyThrottle:dt.default.number};xl.default=function(t,e){var n=e||W2.default,i=function(s){K2(o,s);function o(a){q2(this,o);var l=Y2(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,a));return r.call(l),l.state={active:!1},l.beforeUnmountCallbacks=[],l}return V2(o,[{key:"getScrollSpyContainer",value:function(){var l=this.props.containerId,c=this.props.container;return l&&!c?document.getElementById(l):c&&c.nodeType?c:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var l=this.getScrollSpyContainer();if(!cc.default.isMounted(l)){var c=cc.default.mount(l,this.props.spyThrottle);this.beforeUnmountCallbacks.push(c)}this.props.hashSpy&&(rr.default.isMounted()||rr.default.mount(n),rr.default.mapContainer(this.props.to,l)),cc.default.addSpyHandler(this.spyHandler,l),this.setState({container:l})}}},{key:"componentWillUnmount",value:function(){cc.default.unmount(this.stateHandler,this.spyHandler),this.beforeUnmountCallbacks.forEach(function(l){return l()})}},{key:"render",value:function(){var l="";this.state&&this.state.active?l=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():l=this.props.className;var c={};this.state&&this.state.active?c=lc({},this.props.style,this.props.activeStyle):c=lc({},this.props.style);var u=lc({},this.props);for(var d in iy)u.hasOwnProperty(d)&&delete u[d];return u.className=l,u.style=c,u.onClick=this.handleClick,ny.default.createElement(t,u)}}]),o}(ny.default.PureComponent),r=function(){var o=this;this.scrollTo=function(a,l){n.scrollTo(a,lc({},o.state,l))},this.handleClick=function(a){o.props.onClick&&o.props.onClick(a),a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),o.scrollTo(o.props.to,o.props)},this.spyHandler=function(a,l){var c=o.getScrollSpyContainer();if(!(rr.default.isMounted()&&!rr.default.isInitialized())){var u=o.props.horizontal,d=o.props.to,f=null,p=void 0,g=void 0;if(u){var _=0,m=0,h=0;if(c.getBoundingClientRect){var v=c.getBoundingClientRect();h=v.left}if(!f||o.props.isDynamic){if(f=n.get(d),!f)return;var y=f.getBoundingClientRect();_=y.left-h+a,m=_+y.width}var x=a-o.props.offset;p=x>=Math.floor(_)&&x<Math.floor(m),g=x<Math.floor(_)||x>=Math.floor(m)}else{var T=0,w=0,b=0;if(c.getBoundingClientRect){var L=c.getBoundingClientRect();b=L.top}if(!f||o.props.isDynamic){if(f=n.get(d),!f)return;var $=f.getBoundingClientRect();T=$.top-b+l,w=T+$.height}var S=l-o.props.offset;p=S>=Math.floor(T)&&S<Math.floor(w),g=S<Math.floor(T)||S>=Math.floor(w)}var R=n.getActiveLink();if(g){if(d===R&&n.setActiveLink(void 0),o.props.hashSpy&&rr.default.getHash()===d){var q=o.props.saveHashHistory,Z=q===void 0?!1:q;rr.default.changeHash("",Z)}o.props.spy&&o.state.active&&(o.setState({active:!1}),o.props.onSetInactive&&o.props.onSetInactive(d,f))}if(p&&(R!==d||o.state.active===!1)){n.setActiveLink(d);var N=o.props.saveHashHistory,X=N===void 0?!1:N;o.props.hashSpy&&rr.default.changeHash(d,X),o.props.spy&&(o.setState({active:!0}),o.props.onSetActive&&o.props.onSetActive(d,f))}}}};return i.propTypes=iy,i.defaultProps={offset:0},i};Object.defineProperty(gg,"__esModule",{value:!0});var Z2=H,ry=mw(Z2),Q2=xl,J2=mw(Q2);function mw(t){return t&&t.__esModule?t:{default:t}}function eL(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function sy(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function tL(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var nL=function(t){tL(e,t);function e(){var n,i,r,s;eL(this,e);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return s=(i=(r=sy(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(a))),r),r.render=function(){return ry.default.createElement("a",r.props,r.props.children)},i),sy(r,s)}return e}(ry.default.Component);gg.default=(0,J2.default)(nL);var Sg={};Object.defineProperty(Sg,"__esModule",{value:!0});var iL=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),rL=H,oy=gw(rL),sL=xl,oL=gw(sL);function gw(t){return t&&t.__esModule?t:{default:t}}function aL(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function lL(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function cL(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var uL=function(t){cL(e,t);function e(){return aL(this,e),lL(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return iL(e,[{key:"render",value:function(){return oy.default.createElement("button",this.props,this.props.children)}}]),e}(oy.default.Component);Sg.default=(0,oL.default)(uL);var Eg={},wd={};Object.defineProperty(wd,"__esModule",{value:!0});var dL=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},fL=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),hL=H,ay=Td(hL),pL=jM;Td(pL);var mL=qo,ly=Td(mL),gL=Ed,cy=Td(gL);function Td(t){return t&&t.__esModule?t:{default:t}}function vL(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function yL(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function _L(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}wd.default=function(t){var e=function(n){_L(i,n);function i(r){vL(this,i);var s=yL(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,r));return s.childBindings={domNode:null},s}return fL(i,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(s){this.props.name!==s.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;ly.default.unregister(this.props.name)}},{key:"registerElems",value:function(s){ly.default.register(s,this.childBindings.domNode)}},{key:"render",value:function(){return ay.default.createElement(t,dL({},this.props,{parentBindings:this.childBindings}))}}]),i}(ay.default.Component);return e.propTypes={name:cy.default.string,id:cy.default.string},e};Object.defineProperty(Eg,"__esModule",{value:!0});var uy=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},xL=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),SL=H,dy=Mg(SL),EL=wd,ML=Mg(EL),wL=Ed,fy=Mg(wL);function Mg(t){return t&&t.__esModule?t:{default:t}}function TL(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function bL(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function AL(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var vw=function(t){AL(e,t);function e(){return TL(this,e),bL(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return xL(e,[{key:"render",value:function(){var i=this,r=uy({},this.props);return delete r.name,r.parentBindings&&delete r.parentBindings,dy.default.createElement("div",uy({},r,{ref:function(o){i.props.parentBindings.domNode=o}}),this.props.children)}}]),e}(dy.default.Component);vw.propTypes={name:fy.default.string,id:fy.default.string};Eg.default=(0,ML.default)(vw);var Pf=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},hy=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function py(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function my(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function gy(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var uc=H,Xr=Sl,Lf=qo,gt=Ed,sr=Md,vy={to:gt.string.isRequired,containerId:gt.string,container:gt.object,activeClass:gt.string,spy:gt.bool,smooth:gt.oneOfType([gt.bool,gt.string]),offset:gt.number,delay:gt.number,isDynamic:gt.bool,onClick:gt.func,duration:gt.oneOfType([gt.number,gt.func]),absolute:gt.bool,onSetActive:gt.func,onSetInactive:gt.func,ignoreCancelEvents:gt.bool,hashSpy:gt.bool,spyThrottle:gt.number},CL={Scroll:function(e,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var i=n||Lf,r=function(o){gy(a,o);function a(l){py(this,a);var c=my(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,l));return s.call(c),c.state={active:!1},c}return hy(a,[{key:"getScrollSpyContainer",value:function(){var c=this.props.containerId,u=this.props.container;return c?document.getElementById(c):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var c=this.getScrollSpyContainer();Xr.isMounted(c)||Xr.mount(c,this.props.spyThrottle),this.props.hashSpy&&(sr.isMounted()||sr.mount(i),sr.mapContainer(this.props.to,c)),this.props.spy&&Xr.addStateHandler(this.stateHandler),Xr.addSpyHandler(this.spyHandler,c),this.setState({container:c})}}},{key:"componentWillUnmount",value:function(){Xr.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var c="";this.state&&this.state.active?c=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():c=this.props.className;var u=Pf({},this.props);for(var d in vy)u.hasOwnProperty(d)&&delete u[d];return u.className=c,u.onClick=this.handleClick,uc.createElement(e,u)}}]),a}(uc.Component),s=function(){var a=this;this.scrollTo=function(l,c){i.scrollTo(l,Pf({},a.state,c))},this.handleClick=function(l){a.props.onClick&&a.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),a.scrollTo(a.props.to,a.props)},this.stateHandler=function(){i.getActiveLink()!==a.props.to&&(a.state!==null&&a.state.active&&a.props.onSetInactive&&a.props.onSetInactive(),a.setState({active:!1}))},this.spyHandler=function(l){var c=a.getScrollSpyContainer();if(!(sr.isMounted()&&!sr.isInitialized())){var u=a.props.to,d=null,f=0,p=0,g=0;if(c.getBoundingClientRect){var _=c.getBoundingClientRect();g=_.top}if(!d||a.props.isDynamic){if(d=i.get(u),!d)return;var m=d.getBoundingClientRect();f=m.top-g+l,p=f+m.height}var h=l-a.props.offset,v=h>=Math.floor(f)&&h<Math.floor(p),y=h<Math.floor(f)||h>=Math.floor(p),x=i.getActiveLink();if(y)return u===x&&i.setActiveLink(void 0),a.props.hashSpy&&sr.getHash()===u&&sr.changeHash(),a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive()),Xr.updateStates();if(v&&x!==u)return i.setActiveLink(u),a.props.hashSpy&&sr.changeHash(u),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(u)),Xr.updateStates()}}};return r.propTypes=vy,r.defaultProps={offset:0},r},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(i){gy(r,i);function r(s){py(this,r);var o=my(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,s));return o.childBindings={domNode:null},o}return hy(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(o){this.props.name!==o.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Lf.unregister(this.props.name)}},{key:"registerElems",value:function(o){Lf.register(o,this.childBindings.domNode)}},{key:"render",value:function(){return uc.createElement(e,Pf({},this.props,{parentBindings:this.childBindings}))}}]),r}(uc.Component);return n.propTypes={name:gt.string,id:gt.string},n}},RL=CL;Object.defineProperty(Et,"__esModule",{value:!0});Et.Helpers=Et.ScrollElement=Et.ScrollLink=Et.animateScroll=Et.scrollSpy=Et.Events=Et.scroller=Et.Element=Et.Button=bo=Et.Link=void 0;var PL=gg,yw=bi(PL),LL=Sg,_w=bi(LL),DL=Eg,xw=bi(DL),NL=qo,Sw=bi(NL),IL=wl,Ew=bi(IL),OL=Sl,Mw=bi(OL),UL=_d,ww=bi(UL),kL=xl,Tw=bi(kL),FL=wd,bw=bi(FL),BL=RL,Aw=bi(BL);function bi(t){return t&&t.__esModule?t:{default:t}}var bo=Et.Link=yw.default;Et.Button=_w.default;Et.Element=xw.default;Et.scroller=Sw.default;Et.Events=Ew.default;Et.scrollSpy=Mw.default;Et.animateScroll=ww.default;Et.ScrollLink=Tw.default;Et.ScrollElement=bw.default;Et.Helpers=Aw.default;Et.default={Link:yw.default,Button:_w.default,Element:xw.default,scroller:Sw.default,Events:Ew.default,scrollSpy:Mw.default,animateScroll:ww.default,ScrollLink:Tw.default,ScrollElement:bw.default,Helpers:Aw.default};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var zL={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VL=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),nt=(t,e)=>{const n=H.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},u)=>H.createElement("svg",{ref:u,...zL,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${VL(t)}`,a].join(" "),...c},[...e.map(([d,f])=>H.createElement(d,f)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HL=nt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GL=nt("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jL=nt("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=nt("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WL=nt("Codepen",[["polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2",key:"srzb37"}],["line",{x1:"12",x2:"12",y1:"22",y2:"15.5",key:"1t73f2"}],["polyline",{points:"22 8.5 12 15.5 2 8.5",key:"ajlxae"}],["polyline",{points:"2 15.5 12 8.5 22 15.5",key:"susrui"}],["line",{x1:"12",x2:"12",y1:"2",y2:"8.5",key:"2cldga"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $L=nt("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=nt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XL=nt("Earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17",key:"1fi5u6"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"xsiumc"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=nt("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qL=nt("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=nt("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YL=nt("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KL=nt("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZL=nt("LineChart",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=nt("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=nt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QL=nt("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JL=nt("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eD=nt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=nt("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tD=nt("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nD=nt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iD=nt("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rD=nt("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=nt("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=nt("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sD=nt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Rw=H.createContext(null),Pw=()=>{const t=H.useContext(Rw);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t},oD=({children:t})=>{const[e,n]=H.useState(()=>{const r=localStorage.getItem("theme");return r?r==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches});H.useEffect(()=>{e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.setItem("theme",e?"dark":"light")},[e]);const i=()=>{n(r=>!r)};return E.jsx(Rw.Provider,{value:{darkMode:e,toggleTheme:i},children:t})},Tg=H.createContext({});function Yo(t){const e=H.useRef(null);return e.current===null&&(e.current=t()),e.current}const bd=H.createContext(null),Ad=H.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class aD extends H.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function lD({children:t,isPresent:e}){const n=H.useId(),i=H.useRef(null),r=H.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=H.useContext(Ad);return H.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:c}=r.current;if(e||!i.current||!o||!a)return;i.current.dataset.motionPopId=n;const u=document.createElement("style");return s&&(u.nonce=s),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[e]),E.jsx(aD,{isPresent:e,childRef:i,sizeRef:r,children:H.cloneElement(t,{ref:i})})}const cD=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o})=>{const a=Yo(uD),l=H.useId(),c=H.useCallback(d=>{a.set(d,!0);for(const f of a.values())if(!f)return;i&&i()},[a,i]),u=H.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:c,register:d=>(a.set(d,!1),()=>a.delete(d))}),s?[Math.random(),c]:[n,c]);return H.useMemo(()=>{a.forEach((d,f)=>a.set(f,!1))},[n]),H.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(t=E.jsx(lD,{isPresent:n,children:t})),E.jsx(bd.Provider,{value:u,children:t})};function uD(){return new Map}function Lw(t=!0){const e=H.useContext(bd);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=H.useId();H.useEffect(()=>{t&&r(s)},[t]);const o=H.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const dc=t=>t.key||"";function Sy(t){const e=[];return H.Children.forEach(t,n=>{H.isValidElement(n)&&e.push(n)}),e}const bg=typeof window<"u",Cd=bg?H.useLayoutEffect:H.useEffect,Ag=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1})=>{const[a,l]=Lw(o),c=H.useMemo(()=>Sy(t),[t]),u=o&&!a?[]:c.map(dc),d=H.useRef(!0),f=H.useRef(c),p=Yo(()=>new Map),[g,_]=H.useState(c),[m,h]=H.useState(c);Cd(()=>{d.current=!1,f.current=c;for(let x=0;x<m.length;x++){const T=dc(m[x]);u.includes(T)?p.delete(T):p.get(T)!==!0&&p.set(T,!1)}},[m,u.length,u.join("-")]);const v=[];if(c!==g){let x=[...c];for(let T=0;T<m.length;T++){const w=m[T],b=dc(w);u.includes(b)||(x.splice(T,0,w),v.push(w))}s==="wait"&&v.length&&(x=v),h(Sy(x)),_(c);return}const{forceRender:y}=H.useContext(Tg);return E.jsx(E.Fragment,{children:m.map(x=>{const T=dc(x),w=o&&!a?!1:c===m||u.includes(T),b=()=>{if(p.has(T))p.set(T,!0);else return;let L=!0;p.forEach($=>{$||(L=!1)}),L&&(y==null||y(),h(f.current),o&&(l==null||l()),i&&i())};return E.jsx(cD,{isPresent:w,initial:!d.current||n?void 0:!1,custom:w?void 0:e,presenceAffectsLayout:r,mode:s,onExitComplete:w?void 0:b,children:x},T)})})},dn=t=>t;let dD=dn,Up=dn;function Cg(t){let e;return()=>(e===void 0&&(e=t()),e)}const Rs=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},Wi=t=>t*1e3,$i=t=>t/1e3,fD={skipAnimations:!1,useManualTiming:!1};function hD(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),t()),c(o)}const l={schedule:(c,u=!1,d=!1)=>{const p=d&&i?e:n;return u&&s.add(c),p.has(c)||p.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,i){r=!0;return}i=!0,[e,n]=[n,e],e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(c))}};return l}const fc=["read","resolveKeyframes","update","preRender","render","postRender"],pD=40;function Dw(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=fc.reduce((h,v)=>(h[v]=hD(s),h),{}),{read:a,resolveKeyframes:l,update:c,preRender:u,render:d,postRender:f}=o,p=()=>{const h=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(h-r.timestamp,pD),1),r.timestamp=h,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),d.process(r),f.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(p))},g=()=>{n=!0,i=!0,r.isProcessing||t(p)};return{schedule:fc.reduce((h,v)=>{const y=o[v];return h[v]=(x,T=!1,w=!1)=>(n||g(),y.schedule(x,T,w)),h},{}),cancel:h=>{for(let v=0;v<fc.length;v++)o[fc[v]].cancel(h)},state:r,steps:o}}const{schedule:Xe,cancel:fi,state:Ut,steps:Df}=Dw(typeof requestAnimationFrame<"u"?requestAnimationFrame:dn,!0),Nw=H.createContext({strict:!1}),Ey={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Bo={};for(const t in Ey)Bo[t]={isEnabled:e=>Ey[t].some(n=>!!e[n])};function mD(t){for(const e in t)Bo[e]={...Bo[e],...t[e]}}const gD=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Uu(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||gD.has(t)}let Iw=t=>!Uu(t);function vD(t){t&&(Iw=e=>e.startsWith("on")?!Uu(e):t(e))}try{vD(require("@emotion/is-prop-valid").default)}catch{}function yD(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(Iw(r)||n===!0&&Uu(r)||!e&&!Uu(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function _D(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}const Rd=H.createContext({});function ol(t){return typeof t=="string"||Array.isArray(t)}function Pd(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Rg=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Pg=["initial",...Rg];function Ld(t){return Pd(t.animate)||Pg.some(e=>ol(t[e]))}function Ow(t){return!!(Ld(t)||t.variants)}function xD(t,e){if(Ld(t)){const{initial:n,animate:i}=t;return{initial:n===!1||ol(n)?n:void 0,animate:ol(i)?i:void 0}}return t.inherit!==!1?e:{}}function SD(t){const{initial:e,animate:n}=xD(t,H.useContext(Rd));return H.useMemo(()=>({initial:e,animate:n}),[My(e),My(n)])}function My(t){return Array.isArray(t)?t.join(" "):t}const ED=Symbol.for("motionComponentSymbol");function ho(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function MD(t,e,n){return H.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):ho(n)&&(n.current=i))},[e])}const Lg=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),wD="framerAppearId",Uw="data-"+Lg(wD),{schedule:Dg,cancel:s6}=Dw(queueMicrotask,!1),kw=H.createContext({});function TD(t,e,n,i,r){var s,o;const{visualElement:a}=H.useContext(Rd),l=H.useContext(Nw),c=H.useContext(bd),u=H.useContext(Ad).reducedMotion,d=H.useRef(null);i=i||l.renderer,!d.current&&i&&(d.current=i(t,{visualState:e,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const f=d.current,p=H.useContext(kw);f&&!f.projection&&r&&(f.type==="html"||f.type==="svg")&&bD(d.current,n,r,p);const g=H.useRef(!1);H.useInsertionEffect(()=>{f&&g.current&&f.update(n,c)});const _=n[Uw],m=H.useRef(!!_&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,_))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,_)));return Cd(()=>{f&&(g.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),Dg.render(f.render),m.current&&f.animationState&&f.animationState.animateChanges())}),H.useEffect(()=>{f&&(!m.current&&f.animationState&&f.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var h;(h=window.MotionHandoffMarkAsComplete)===null||h===void 0||h.call(window,_)}),m.current=!1))}),f}function bD(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:Fw(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&ho(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}function Fw(t){if(t)return t.options.allowProjection!==!1?t.projection:Fw(t.parent)}function AD({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){var s,o;t&&mD(t);function a(c,u){let d;const f={...H.useContext(Ad),...c,layoutId:CD(c)},{isStatic:p}=f,g=SD(c),_=i(c,p);if(!p&&bg){RD();const m=PD(f);d=m.MeasureLayout,g.visualElement=TD(r,_,f,e,m.ProjectionNode)}return E.jsxs(Rd.Provider,{value:g,children:[d&&g.visualElement?E.jsx(d,{visualElement:g.visualElement,...f}):null,n(r,c,MD(_,g.visualElement,u),_,p,g.visualElement)]})}a.displayName=`motion.${typeof r=="string"?r:`create(${(o=(s=r.displayName)!==null&&s!==void 0?s:r.name)!==null&&o!==void 0?o:""})`}`;const l=H.forwardRef(a);return l[ED]=r,l}function CD({layoutId:t}){const e=H.useContext(Tg).id;return e&&t!==void 0?e+"-"+t:t}function RD(t,e){H.useContext(Nw).strict}function PD(t){const{drag:e,layout:n}=Bo;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const LD=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ng(t){return typeof t!="string"||t.includes("-")?!1:!!(LD.indexOf(t)>-1||/[A-Z]/u.test(t))}function wy(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function Ig(t,e,n,i){if(typeof e=="function"){const[r,s]=wy(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=wy(i);e=e(n!==void 0?n:t.custom,r,s)}return e}const kp=t=>Array.isArray(t),DD=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),ND=t=>kp(t)?t[t.length-1]||0:t,nn=t=>!!(t&&t.getVelocity);function Qc(t){const e=nn(t)?t.get():t;return DD(e)?e.toValue():e}function ID({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},i,r,s){const o={latestValues:OD(i,r,s,t),renderState:e()};return n&&(o.onMount=a=>n({props:i,current:a,...o}),o.onUpdate=a=>n(a)),o}const Bw=t=>(e,n)=>{const i=H.useContext(Rd),r=H.useContext(bd),s=()=>ID(t,e,i,r);return n?s():Yo(s)};function OD(t,e,n,i){const r={},s=i(t,{});for(const f in s)r[f]=Qc(s[f]);let{initial:o,animate:a}=t;const l=Ld(t),c=Ow(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const d=u?a:o;if(d&&typeof d!="boolean"&&!Pd(d)){const f=Array.isArray(d)?d:[d];for(let p=0;p<f.length;p++){const g=Ig(t,f[p]);if(g){const{transitionEnd:_,transition:m,...h}=g;for(const v in h){let y=h[v];if(Array.isArray(y)){const x=u?y.length-1:0;y=y[x]}y!==null&&(r[v]=y)}for(const v in _)r[v]=_[v]}}}return r}const Ko=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Us=new Set(Ko),zw=t=>e=>typeof e=="string"&&e.startsWith(t),Vw=zw("--"),UD=zw("var(--"),Og=t=>UD(t)?kD.test(t.split("/*")[0].trim()):!1,kD=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Hw=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Ti=(t,e,n)=>n>e?e:n<t?t:n,Zo={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},al={...Zo,transform:t=>Ti(0,1,t)},hc={...Zo,default:1},Al=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),fr=Al("deg"),Mi=Al("%"),we=Al("px"),FD=Al("vh"),BD=Al("vw"),Ty={...Mi,parse:t=>Mi.parse(t)/100,transform:t=>Mi.transform(t*100)},zD={borderWidth:we,borderTopWidth:we,borderRightWidth:we,borderBottomWidth:we,borderLeftWidth:we,borderRadius:we,radius:we,borderTopLeftRadius:we,borderTopRightRadius:we,borderBottomRightRadius:we,borderBottomLeftRadius:we,width:we,maxWidth:we,height:we,maxHeight:we,top:we,right:we,bottom:we,left:we,padding:we,paddingTop:we,paddingRight:we,paddingBottom:we,paddingLeft:we,margin:we,marginTop:we,marginRight:we,marginBottom:we,marginLeft:we,backgroundPositionX:we,backgroundPositionY:we},VD={rotate:fr,rotateX:fr,rotateY:fr,rotateZ:fr,scale:hc,scaleX:hc,scaleY:hc,scaleZ:hc,skew:fr,skewX:fr,skewY:fr,distance:we,translateX:we,translateY:we,translateZ:we,x:we,y:we,z:we,perspective:we,transformPerspective:we,opacity:al,originX:Ty,originY:Ty,originZ:we},by={...Zo,transform:Math.round},Ug={...zD,...VD,zIndex:by,size:we,fillOpacity:al,strokeOpacity:al,numOctaves:by},HD={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},GD=Ko.length;function jD(t,e,n){let i="",r=!0;for(let s=0;s<GD;s++){const o=Ko[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=Hw(a,Ug[o]);if(!l){r=!1;const u=HD[o]||o;i+=`${u}(${c}) `}n&&(e[o]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function kg(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(Us.has(l)){o=!0;continue}else if(Vw(l)){r[l]=c;continue}else{const u=Hw(c,Ug[l]);l.startsWith("origin")?(a=!0,s[l]=u):i[l]=u}}if(e.transform||(o||n?i.transform=jD(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}const WD={offset:"stroke-dashoffset",array:"stroke-dasharray"},$D={offset:"strokeDashoffset",array:"strokeDasharray"};function XD(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?WD:$D;t[s.offset]=we.transform(-i);const o=we.transform(e),a=we.transform(n);t[s.array]=`${o} ${a}`}function Ay(t,e,n){return typeof t=="string"?t:we.transform(e+n*t)}function qD(t,e,n){const i=Ay(e,t.x,t.width),r=Ay(n,t.y,t.height);return`${i} ${r}`}function Fg(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,d){if(kg(t,c,d),u){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:f,style:p,dimensions:g}=t;f.transform&&(g&&(p.transform=f.transform),delete f.transform),g&&(r!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=qD(g,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(f.x=e),n!==void 0&&(f.y=n),i!==void 0&&(f.scale=i),o!==void 0&&XD(f,o,a,l,!1)}const Bg=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Gw=()=>({...Bg(),attrs:{}}),zg=t=>typeof t=="string"&&t.toLowerCase()==="svg";function jw(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const Ww=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function $w(t,e,n,i){jw(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(Ww.has(r)?r:Lg(r),e.attrs[r])}const ku={};function YD(t){Object.assign(ku,t)}function Xw(t,{layout:e,layoutId:n}){return Us.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!ku[t]||t==="opacity")}function Vg(t,e,n){var i;const{style:r}=t,s={};for(const o in r)(nn(r[o])||e.style&&nn(e.style[o])||Xw(o,t)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[o]=r[o]);return s}function qw(t,e,n){const i=Vg(t,e,n);for(const r in t)if(nn(t[r])||nn(e[r])){const s=Ko.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}function KD(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const Cy=["x","y","width","height","cx","cy","r"],ZD={useVisualState:Bw({scrapeMotionValuesFromProps:qw,createRenderState:Gw,onUpdate:({props:t,prevProps:e,current:n,renderState:i,latestValues:r})=>{if(!n)return;let s=!!t.drag;if(!s){for(const a in r)if(Us.has(a)){s=!0;break}}if(!s)return;let o=!e;if(e)for(let a=0;a<Cy.length;a++){const l=Cy[a];t[l]!==e[l]&&(o=!0)}o&&Xe.read(()=>{KD(n,i),Xe.render(()=>{Fg(i,r,zg(n.tagName),t.transformTemplate),$w(n,i)})})}})},QD={useVisualState:Bw({scrapeMotionValuesFromProps:Vg,createRenderState:Bg})};function Yw(t,e,n){for(const i in e)!nn(e[i])&&!Xw(i,n)&&(t[i]=e[i])}function JD({transformTemplate:t},e){return H.useMemo(()=>{const n=Bg();return kg(n,e,t),Object.assign({},n.vars,n.style)},[e])}function eN(t,e){const n=t.style||{},i={};return Yw(i,n,t),Object.assign(i,JD(t,e)),i}function tN(t,e){const n={},i=eN(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}function nN(t,e,n,i){const r=H.useMemo(()=>{const s=Gw();return Fg(s,e,zg(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};Yw(s,t.style,t),r.style={...s,...r.style}}return r}function iN(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(Ng(n)?nN:tN)(i,s,o,n),c=yD(i,typeof n=="string",t),u=n!==H.Fragment?{...c,...l,ref:r}:{},{children:d}=i,f=H.useMemo(()=>nn(d)?d.get():d,[d]);return H.createElement(n,{...u,children:f})}}function rN(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...Ng(i)?ZD:QD,preloadedFeatures:t,useRender:iN(r),createVisualElement:e,Component:i};return AD(o)}}function Kw(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function Dd(t,e,n){const i=t.getProps();return Ig(i,e,n!==void 0?n:i.custom,t)}const Zw=Cg(()=>window.ScrollTimeline!==void 0);class sN{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(r=>{if(Zw()&&r.attachTimeline)return r.attachTimeline(e);if(typeof n=="function")return n(r)});return()=>{i.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class oN extends sN{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function Hg(t,e){return t?t[e]||t.default||t:void 0}const Fp=2e4;function Qw(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Fp;)e+=n,i=t.next(e);return e>=Fp?1/0:e}function Gg(t){return typeof t=="function"}function Ry(t,e){t.timeline=e,t.onfinish=null}const jg=t=>Array.isArray(t)&&typeof t[0]=="number",aN={linearEasing:void 0};function lN(t,e){const n=Cg(t);return()=>{var i;return(i=aN[e])!==null&&i!==void 0?i:n()}}const Fu=lN(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Jw=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=t(Rs(0,r-1,s))+", ";return`linear(${i.substring(0,i.length-2)})`};function e1(t){return!!(typeof t=="function"&&Fu()||!t||typeof t=="string"&&(t in Bp||Fu())||jg(t)||Array.isArray(t)&&t.every(e1))}const Ma=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Bp={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ma([0,.65,.55,1]),circOut:Ma([.55,0,1,.45]),backIn:Ma([.31,.01,.66,-.59]),backOut:Ma([.33,1.53,.69,.99])};function t1(t,e){if(t)return typeof t=="function"&&Fu()?Jw(t,e):jg(t)?Ma(t):Array.isArray(t)?t.map(n=>t1(n,e)||Bp.easeOut):Bp[t]}const ti={x:!1,y:!1};function n1(){return ti.x||ti.y}function Wg(t,e,n){var i;if(t instanceof Element)return[t];if(typeof t=="string"){let r=document;const s=(i=void 0)!==null&&i!==void 0?i:r.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function i1(t,e){const n=Wg(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function Py(t){return e=>{e.pointerType==="touch"||n1()||t(e)}}function cN(t,e,n={}){const[i,r,s]=i1(t,n),o=Py(a=>{const{target:l}=a,c=e(a);if(typeof c!="function"||!l)return;const u=Py(d=>{c(d),l.removeEventListener("pointerleave",u)});l.addEventListener("pointerleave",u,r)});return i.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}const r1=(t,e)=>e?t===e?!0:r1(t,e.parentElement):!1,$g=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,uN=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function dN(t){return uN.has(t.tagName)||t.tabIndex!==-1}const wa=new WeakSet;function Ly(t){return e=>{e.key==="Enter"&&t(e)}}function Nf(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const fN=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=Ly(()=>{if(wa.has(n))return;Nf(n,"down");const r=Ly(()=>{Nf(n,"up")}),s=()=>Nf(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function Dy(t){return $g(t)&&!n1()}function hN(t,e,n={}){const[i,r,s]=i1(t,n),o=a=>{const l=a.currentTarget;if(!Dy(a)||wa.has(l))return;wa.add(l);const c=e(a),u=(p,g)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",f),!(!Dy(p)||!wa.has(l))&&(wa.delete(l),typeof c=="function"&&c(p,{success:g}))},d=p=>{u(p,n.useGlobalTarget||r1(l,p.target))},f=p=>{u(p,!1)};window.addEventListener("pointerup",d,r),window.addEventListener("pointercancel",f,r)};return i.forEach(a=>{!dN(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),a.addEventListener("focus",c=>fN(c,r),r)}),s}function pN(t){return t==="x"||t==="y"?ti[t]?null:(ti[t]=!0,()=>{ti[t]=!1}):ti.x||ti.y?null:(ti.x=ti.y=!0,()=>{ti.x=ti.y=!1})}const s1=new Set(["width","height","top","left","right","bottom",...Ko]);let Jc;function mN(){Jc=void 0}const wi={now:()=>(Jc===void 0&&wi.set(Ut.isProcessing||fD.useManualTiming?Ut.timestamp:performance.now()),Jc),set:t=>{Jc=t,queueMicrotask(mN)}};function Xg(t,e){t.indexOf(e)===-1&&t.push(e)}function qg(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class Yg{constructor(){this.subscriptions=[]}add(e){return Xg(this.subscriptions,e),()=>qg(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Kg(t,e){return e?t*(1e3/e):0}const Ny=30,gN=t=>!isNaN(parseFloat(t)),Oa={current:void 0};class vN{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=wi.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=wi.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=gN(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Yg);const i=this.events[e].add(n);return e==="change"?()=>{i(),Xe.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Oa.current&&Oa.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=wi.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Ny)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Ny);return Kg(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function xi(t,e){return new vN(t,e)}function yN(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,xi(n))}function _N(t,e){const n=Dd(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=ND(s[o]);yN(t,o,a)}}function xN(t){return!!(nn(t)&&t.add)}function zp(t,e){const n=t.getValue("willChange");if(xN(n))return n.add(e)}function o1(t){return t.props[Uw]}const a1=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,SN=1e-7,EN=12;function MN(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=a1(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>SN&&++a<EN);return o}function Cl(t,e,n,i){if(t===e&&n===i)return dn;const r=s=>MN(s,0,1,t,n);return s=>s===0||s===1?s:a1(r(s),e,i)}const l1=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,c1=t=>e=>1-t(1-e),u1=Cl(.33,1.53,.69,.99),Zg=c1(u1),d1=l1(Zg),f1=t=>(t*=2)<1?.5*Zg(t):.5*(2-Math.pow(2,-10*(t-1))),Qg=t=>1-Math.sin(Math.acos(t)),h1=c1(Qg),p1=l1(Qg),m1=t=>/^0[^.\s]+$/u.test(t);function wN(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||m1(t):!0}const Ua=t=>Math.round(t*1e5)/1e5,Jg=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function TN(t){return t==null}const bN=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ev=(t,e)=>n=>!!(typeof n=="string"&&bN.test(n)&&n.startsWith(t)||e&&!TN(n)&&Object.prototype.hasOwnProperty.call(n,e)),g1=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(Jg);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},AN=t=>Ti(0,255,t),If={...Zo,transform:t=>Math.round(AN(t))},fs={test:ev("rgb","red"),parse:g1("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+If.transform(t)+", "+If.transform(e)+", "+If.transform(n)+", "+Ua(al.transform(i))+")"};function CN(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Vp={test:ev("#"),parse:CN,transform:fs.transform},po={test:ev("hsl","hue"),parse:g1("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+Mi.transform(Ua(e))+", "+Mi.transform(Ua(n))+", "+Ua(al.transform(i))+")"},en={test:t=>fs.test(t)||Vp.test(t)||po.test(t),parse:t=>fs.test(t)?fs.parse(t):po.test(t)?po.parse(t):Vp.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?fs.transform(t):po.transform(t)},RN=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function PN(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Jg))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(RN))===null||n===void 0?void 0:n.length)||0)>0}const v1="number",y1="color",LN="var",DN="var(",Iy="${}",NN=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ll(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(NN,l=>(en.test(l)?(i.color.push(s),r.push(y1),n.push(en.parse(l))):l.startsWith(DN)?(i.var.push(s),r.push(LN),n.push(l)):(i.number.push(s),r.push(v1),n.push(parseFloat(l))),++s,Iy)).split(Iy);return{values:n,split:a,indexes:i,types:r}}function _1(t){return ll(t).values}function x1(t){const{split:e,types:n}=ll(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===v1?s+=Ua(r[o]):a===y1?s+=en.transform(r[o]):s+=r[o]}return s}}const IN=t=>typeof t=="number"?0:t;function ON(t){const e=_1(t);return x1(t)(e.map(IN))}const Ur={test:PN,parse:_1,createTransformer:x1,getAnimatableNone:ON},UN=new Set(["brightness","contrast","saturate","opacity"]);function kN(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Jg)||[];if(!i)return t;const r=n.replace(i,"");let s=UN.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const FN=/\b([a-z-]*)\(.*?\)/gu,Hp={...Ur,getAnimatableNone:t=>{const e=t.match(FN);return e?e.map(kN).join(" "):t}},BN={...Ug,color:en,backgroundColor:en,outlineColor:en,fill:en,stroke:en,borderColor:en,borderTopColor:en,borderRightColor:en,borderBottomColor:en,borderLeftColor:en,filter:Hp,WebkitFilter:Hp},tv=t=>BN[t];function S1(t,e){let n=tv(t);return n!==Hp&&(n=Ur),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const zN=new Set(["auto","none","0"]);function VN(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!zN.has(s)&&ll(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=S1(n,r)}const Oy=t=>t===Zo||t===we,Uy=(t,e)=>parseFloat(t.split(", ")[e]),ky=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return Uy(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?Uy(s[1],t):0}},HN=new Set(["x","y","z"]),GN=Ko.filter(t=>!HN.has(t));function jN(t){const e=[];return GN.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const zo={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:ky(4,13),y:ky(5,14)};zo.translateX=zo.x;zo.translateY=zo.y;const vs=new Set;let Gp=!1,jp=!1;function E1(){if(jp){const t=Array.from(vs).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=jN(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}jp=!1,Gp=!1,vs.forEach(t=>t.complete()),vs.clear()}function M1(){vs.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(jp=!0)})}function WN(){M1(),E1()}class nv{constructor(e,n,i,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(vs.add(this),Gp||(Gp=!0,Xe.read(M1),Xe.resolveKeyframes(E1))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),r&&o===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),vs.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,vs.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const w1=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),$N=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function XN(t){const e=$N.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function T1(t,e,n=1){const[i,r]=XN(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return w1(o)?parseFloat(o):o}return Og(r)?T1(r,e,n+1):r}const b1=t=>e=>e.test(t),qN={test:t=>t==="auto",parse:t=>t},A1=[Zo,we,Mi,fr,BD,FD,qN],Fy=t=>A1.find(b1(t));class C1 extends nv{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),Og(c))){const u=T1(c,n.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!s1.has(i)||e.length!==2)return;const[r,s]=e,o=Fy(r),a=Fy(s);if(o!==a)if(Oy(o)&&Oy(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)wN(e[r])&&i.push(r);i.length&&VN(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=zo[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=zo[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const By=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Ur.test(t)||t==="0")&&!t.startsWith("url("));function YN(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function KN(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=By(r,e),a=By(s,e);return!o||!a?!1:YN(t)||(n==="spring"||Gg(n))&&i}const ZN=t=>t!==null;function Nd(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(ZN),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const QN=40;class R1{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=wi.now(),this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>QN?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&WN(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=wi.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!KN(e,i,r,s))if(o)this.options.duration=0;else{l&&l(Nd(e,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const u=this.initPlayback(e,n);u!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const yt=(t,e,n)=>t+(e-t)*n;function Of(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function JN({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=Of(l,a,t+1/3),s=Of(l,a,t),o=Of(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function Bu(t,e){return n=>n>0?e:t}const Uf=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},eI=[Vp,fs,po],tI=t=>eI.find(e=>e.test(t));function zy(t){const e=tI(t);if(!e)return!1;let n=e.parse(t);return e===po&&(n=JN(n)),n}const Vy=(t,e)=>{const n=zy(t),i=zy(e);if(!n||!i)return Bu(t,e);const r={...n};return s=>(r.red=Uf(n.red,i.red,s),r.green=Uf(n.green,i.green,s),r.blue=Uf(n.blue,i.blue,s),r.alpha=yt(n.alpha,i.alpha,s),fs.transform(r))},nI=(t,e)=>n=>e(t(n)),Rl=(...t)=>t.reduce(nI),Wp=new Set(["none","hidden"]);function iI(t,e){return Wp.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function rI(t,e){return n=>yt(t,e,n)}function iv(t){return typeof t=="number"?rI:typeof t=="string"?Og(t)?Bu:en.test(t)?Vy:aI:Array.isArray(t)?P1:typeof t=="object"?en.test(t)?Vy:sI:Bu}function P1(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>iv(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function sI(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=iv(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function oI(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][r[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[s]=l,r[o]++}return i}const aI=(t,e)=>{const n=Ur.createTransformer(e),i=ll(t),r=ll(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Wp.has(t)&&!r.values.length||Wp.has(e)&&!i.values.length?iI(t,e):Rl(P1(oI(i,r),r.values),n):Bu(t,e)};function L1(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?yt(t,e,n):iv(t)(t,e)}const lI=5;function D1(t,e,n){const i=Math.max(e-lI,0);return Kg(n-t(i),e-i)}const Mt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},kf=.001;function cI({duration:t=Mt.duration,bounce:e=Mt.bounce,velocity:n=Mt.velocity,mass:i=Mt.mass}){let r,s,o=1-e;o=Ti(Mt.minDamping,Mt.maxDamping,o),t=Ti(Mt.minDuration,Mt.maxDuration,$i(t)),o<1?(r=c=>{const u=c*o,d=u*t,f=u-n,p=$p(c,o),g=Math.exp(-d);return kf-f/p*g},s=c=>{const d=c*o*t,f=d*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,g=Math.exp(-d),_=$p(Math.pow(c,2),o);return(-r(c)+kf>0?-1:1)*((f-p)*g)/_}):(r=c=>{const u=Math.exp(-c*t),d=(c-n)*t+1;return-kf+u*d},s=c=>{const u=Math.exp(-c*t),d=(n-c)*(t*t);return u*d});const a=5/t,l=dI(r,s,a);if(t=Wi(t),isNaN(l))return{stiffness:Mt.stiffness,damping:Mt.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const uI=12;function dI(t,e,n){let i=n;for(let r=1;r<uI;r++)i=i-t(i)/e(i);return i}function $p(t,e){return t*Math.sqrt(1-e*e)}const fI=["duration","bounce"],hI=["stiffness","damping","mass"];function Hy(t,e){return e.some(n=>t[n]!==void 0)}function pI(t){let e={velocity:Mt.velocity,stiffness:Mt.stiffness,damping:Mt.damping,mass:Mt.mass,isResolvedFromDuration:!1,...t};if(!Hy(t,hI)&&Hy(t,fI))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Ti(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:Mt.mass,stiffness:r,damping:s}}else{const n=cI(t);e={...e,...n,mass:Mt.mass},e.isResolvedFromDuration=!0}return e}function N1(t=Mt.visualDuration,e=Mt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=pI({...n,velocity:-$i(n.velocity||0)}),g=f||0,_=c/(2*Math.sqrt(l*u)),m=o-s,h=$i(Math.sqrt(l/u)),v=Math.abs(m)<5;i||(i=v?Mt.restSpeed.granular:Mt.restSpeed.default),r||(r=v?Mt.restDelta.granular:Mt.restDelta.default);let y;if(_<1){const T=$p(h,_);y=w=>{const b=Math.exp(-_*h*w);return o-b*((g+_*h*m)/T*Math.sin(T*w)+m*Math.cos(T*w))}}else if(_===1)y=T=>o-Math.exp(-h*T)*(m+(g+h*m)*T);else{const T=h*Math.sqrt(_*_-1);y=w=>{const b=Math.exp(-_*h*w),L=Math.min(T*w,300);return o-b*((g+_*h*m)*Math.sinh(L)+T*m*Math.cosh(L))/T}}const x={calculatedDuration:p&&d||null,next:T=>{const w=y(T);if(p)a.done=T>=d;else{let b=0;_<1&&(b=T===0?Wi(g):D1(y,T,w));const L=Math.abs(b)<=i,$=Math.abs(o-w)<=r;a.done=L&&$}return a.value=a.done?o:w,a},toString:()=>{const T=Math.min(Qw(x),Fp),w=Jw(b=>x.next(T*b).value,T,30);return T+"ms "+w}};return x}function Gy({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=t[0],f={done:!1,value:d},p=L=>a!==void 0&&L<a||l!==void 0&&L>l,g=L=>a===void 0?l:l===void 0||Math.abs(a-L)<Math.abs(l-L)?a:l;let _=n*e;const m=d+_,h=o===void 0?m:o(m);h!==m&&(_=h-d);const v=L=>-_*Math.exp(-L/i),y=L=>h+v(L),x=L=>{const $=v(L),S=y(L);f.done=Math.abs($)<=c,f.value=f.done?h:S};let T,w;const b=L=>{p(f.value)&&(T=L,w=N1({keyframes:[f.value,g(f.value)],velocity:D1(y,L,f.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return b(0),{calculatedDuration:null,next:L=>{let $=!1;return!w&&T===void 0&&($=!0,x(L),b(L)),T!==void 0&&L>=T?w.next(L-T):(!$&&x(L),f)}}}const mI=Cl(.42,0,1,1),gI=Cl(0,0,.58,1),I1=Cl(.42,0,.58,1),vI=t=>Array.isArray(t)&&typeof t[0]!="number",jy={linear:dn,easeIn:mI,easeInOut:I1,easeOut:gI,circIn:Qg,circInOut:p1,circOut:h1,backIn:Zg,backInOut:d1,backOut:u1,anticipate:f1},Wy=t=>{if(jg(t)){Up(t.length===4);const[e,n,i,r]=t;return Cl(e,n,i,r)}else if(typeof t=="string")return Up(jy[t]!==void 0),jy[t];return t};function yI(t,e,n){const i=[],r=n||L1,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||dn:e;a=Rl(l,a)}i.push(a)}return i}function rv(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(Up(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=yI(e,i,r),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(u<t[d+1]);d++);const f=Rs(t[d],t[d+1],u);return a[d](f)};return n?u=>c(Ti(t[0],t[s-1],u)):c}function _I(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=Rs(0,e,i);t.push(yt(n,1,r))}}function O1(t){const e=[0];return _I(e,t.length-1),e}function xI(t,e){return t.map(n=>n*e)}function SI(t,e){return t.map(()=>e||I1).splice(0,t.length-1)}function zu({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=vI(i)?i.map(Wy):Wy(i),s={done:!1,value:e[0]},o=xI(n&&n.length===e.length?n:O1(e),t),a=rv(o,e,{ease:Array.isArray(r)?r:SI(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const EI=t=>{const e=({timestamp:n})=>t(n);return{start:()=>Xe.update(e,!0),stop:()=>fi(e),now:()=>Ut.isProcessing?Ut.timestamp:wi.now()}},MI={decay:Gy,inertia:Gy,tween:zu,keyframes:zu,spring:N1},wI=t=>t/100;class sv extends R1{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:s}=this.options,o=(r==null?void 0:r.KeyframeResolver)||nv,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(s,a,n,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=Gg(n)?n:MI[n]||zu;let l,c;a!==zu&&typeof e[0]!="number"&&(l=Rl(wI,L1(e[0],e[1])),e=[0,100]);const u=a({...this.options,keyframes:e});s==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=Qw(u));const{calculatedDuration:d}=u,f=d+r,p=f*(i+1)-r;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:f,totalDuration:p}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:L}=this.options;return{done:!0,value:L[L.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:d}=i;if(this.startTime===null)return s.next(0);const{delay:f,repeat:p,repeatType:g,repeatDelay:_,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const h=this.currentTime-f*(this.speed>=0?1:-1),v=this.speed>=0?h<0:h>u;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let y=this.currentTime,x=s;if(p){const L=Math.min(this.currentTime,u)/d;let $=Math.floor(L),S=L%1;!S&&L>=1&&(S=1),S===1&&$--,$=Math.min($,p+1),!!($%2)&&(g==="reverse"?(S=1-S,_&&(S-=_/d)):g==="mirror"&&(x=o)),y=Ti(0,1,S)*d}const T=v?{done:!1,value:l[0]}:x.next(y);a&&(T.value=a(T.value));let{done:w}=T;!v&&c!==null&&(w=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const b=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&w);return b&&r!==void 0&&(T.value=Nd(l,this.options,r)),m&&m(T.value),b&&this.finish(),T}get duration(){const{resolved:e}=this;return e?$i(e.calculatedDuration):0}get time(){return $i(this.currentTime)}set time(e){e=Wi(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=$i(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=EI,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const TI=new Set(["opacity","clipPath","filter","transform"]);function bI(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[e]:n};l&&(c.offset=l);const u=t1(a,r);return Array.isArray(u)&&(c.easing=u),t.animate(c,{delay:i,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const AI=Cg(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Vu=10,CI=2e4;function RI(t){return Gg(t.type)||t.type==="spring"||!e1(t.ease)}function PI(t,e){const n=new sv({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<CI;)i=n.sample(s),r.push(i.value),s+=Vu;return{times:void 0,keyframes:r,duration:s-Vu,ease:"linear"}}const U1={anticipate:f1,backInOut:d1,circInOut:p1};function LI(t){return t in U1}class $y extends R1{constructor(e){super(e);const{name:n,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new C1(s,(o,a)=>this.onKeyframesResolved(o,a),n,i,r),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:i=300,times:r,ease:s,type:o,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&Fu()&&LI(s)&&(s=U1[s]),RI(this.options)){const{onComplete:d,onUpdate:f,motionValue:p,element:g,..._}=this.options,m=PI(e,_);e=m.keyframes,e.length===1&&(e[1]=e[0]),i=m.duration,r=m.times,s=m.ease,o="keyframes"}const u=bI(a.owner.current,l,e,{...this.options,duration:i,times:r,ease:s});return u.startTime=c??this.calcStartTime(),this.pendingTimeline?(Ry(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:d}=this.options;a.set(Nd(e,this.options,n)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:i,times:r,type:o,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return $i(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return $i(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=Wi(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return dn;const{animation:i}=n;Ry(i,e)}return dn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:d,element:f,...p}=this.options,g=new sv({...p,keyframes:i,duration:r,type:s,ease:o,times:a,isGenerator:!0}),_=Wi(this.time);c.setWithVelocity(g.sample(_-Vu).value,g.sample(_).value,Vu)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:o,type:a}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=n.owner.getProps();return AI()&&i&&TI.has(i)&&!l&&!c&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}const DI={type:"spring",stiffness:500,damping:25,restSpeed:10},NI=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),II={type:"keyframes",duration:.8},OI={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},UI=(t,{keyframes:e})=>e.length>2?II:Us.has(t)?t.startsWith("scale")?NI(e[1]):DI:OI;function kI({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const ov=(t,e,n,i={},r,s)=>o=>{const a=Hg(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Wi(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:f=>{e.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};kI(a)||(u={...u,...UI(t,u)}),u.duration&&(u.duration=Wi(u.duration)),u.repeatDelay&&(u.repeatDelay=Wi(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(d=!0)),d&&!s&&e.get()!==void 0){const f=Nd(u.keyframes,a);if(f!==void 0)return Xe.update(()=>{u.onUpdate(f),u.onComplete()}),new oN([])}return!s&&$y.supports(u)?new $y(u):new sv(u)};function FI({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function k1(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);const c=[],u=r&&t.animationState&&t.animationState.getState()[r];for(const d in l){const f=t.getValue(d,(s=t.latestValues[d])!==null&&s!==void 0?s:null),p=l[d];if(p===void 0||u&&FI(u,d))continue;const g={delay:n,...Hg(o||{},d)};let _=!1;if(window.MotionHandoffAnimation){const h=o1(t);if(h){const v=window.MotionHandoffAnimation(h,d,Xe);v!==null&&(g.startTime=v,_=!0)}}zp(t,d),f.start(ov(d,f,p,t.shouldReduceMotion&&s1.has(d)?{type:!1}:g,t,_));const m=f.animation;m&&c.push(m)}return a&&Promise.all(c).then(()=>{Xe.update(()=>{a&&_N(t,a)})}),c}function Xp(t,e,n={}){var i;const r=Dd(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const o=r?()=>Promise.all(k1(t,r,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:f}=s;return BI(t,e,u+c,d,f,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,u]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>u())}else return Promise.all([o(),a(n.delay)])}function BI(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort(zI).forEach((c,u)=>{c.notify("AnimationStart",e),o.push(Xp(c,e,{...s,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function zI(t,e){return t.sortNodePosition(e)}function VI(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Xp(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Xp(t,e,n);else{const r=typeof e=="function"?Dd(t,e,n.custom):e;i=Promise.all(k1(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const HI=Pg.length;function F1(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?F1(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<HI;n++){const i=Pg[n],r=t.props[i];(ol(r)||r===!1)&&(e[i]=r)}return e}const GI=[...Rg].reverse(),jI=Rg.length;function WI(t){return e=>Promise.all(e.map(({animation:n,options:i})=>VI(t,n,i)))}function $I(t){let e=WI(t),n=Xy(),i=!0;const r=l=>(c,u)=>{var d;const f=Dd(t,u,l==="exit"?(d=t.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(f){const{transition:p,transitionEnd:g,..._}=f;c={...c,..._,...g}}return c};function s(l){e=l(t)}function o(l){const{props:c}=t,u=F1(t.parent)||{},d=[],f=new Set;let p={},g=1/0;for(let m=0;m<jI;m++){const h=GI[m],v=n[h],y=c[h]!==void 0?c[h]:u[h],x=ol(y),T=h===l?v.isActive:null;T===!1&&(g=m);let w=y===u[h]&&y!==c[h]&&x;if(w&&i&&t.manuallyAnimateOnMount&&(w=!1),v.protectedKeys={...p},!v.isActive&&T===null||!y&&!v.prevProp||Pd(y)||typeof y=="boolean")continue;const b=XI(v.prevProp,y);let L=b||h===l&&v.isActive&&!w&&x||m>g&&x,$=!1;const S=Array.isArray(y)?y:[y];let R=S.reduce(r(h),{});T===!1&&(R={});const{prevResolvedValues:q={}}=v,Z={...q,...R},N=Y=>{L=!0,f.has(Y)&&($=!0,f.delete(Y)),v.needsAnimating[Y]=!0;const D=t.getValue(Y);D&&(D.liveStyle=!1)};for(const Y in Z){const D=R[Y],U=q[Y];if(p.hasOwnProperty(Y))continue;let B=!1;kp(D)&&kp(U)?B=!Kw(D,U):B=D!==U,B?D!=null?N(Y):f.add(Y):D!==void 0&&f.has(Y)?N(Y):v.protectedKeys[Y]=!0}v.prevProp=y,v.prevResolvedValues=R,v.isActive&&(p={...p,...R}),i&&t.blockInitialAnimation&&(L=!1),L&&(!(w&&b)||$)&&d.push(...S.map(Y=>({animation:Y,options:{type:h}})))}if(f.size){const m={};f.forEach(h=>{const v=t.getBaseTarget(h),y=t.getValue(h);y&&(y.liveStyle=!0),m[h]=v??null}),d.push({animation:m})}let _=!!d.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(_=!1),i=!1,_?e(d):Promise.resolve()}function a(l,c){var u;if(n[l].isActive===c)return Promise.resolve();(u=t.variantChildren)===null||u===void 0||u.forEach(f=>{var p;return(p=f.animationState)===null||p===void 0?void 0:p.setActive(l,c)}),n[l].isActive=c;const d=o(l);for(const f in n)n[f].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=Xy(),i=!0}}}function XI(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Kw(e,t):!1}function qr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Xy(){return{animate:qr(!0),whileInView:qr(),whileHover:qr(),whileTap:qr(),whileDrag:qr(),whileFocus:qr(),exit:qr()}}class Gr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class qI extends Gr{constructor(e){super(e),e.animationState||(e.animationState=$I(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Pd(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let YI=0;class KI extends Gr{constructor(){super(...arguments),this.id=YI++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const ZI={animation:{Feature:qI},exit:{Feature:KI}};function cl(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function Pl(t){return{point:{x:t.pageX,y:t.pageY}}}const QI=t=>e=>$g(e)&&t(e,Pl(e));function ka(t,e,n,i){return cl(t,e,QI(n),i)}const qy=(t,e)=>Math.abs(t-e);function JI(t,e){const n=qy(t.x,e.x),i=qy(t.y,e.y);return Math.sqrt(n**2+i**2)}class B1{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=Bf(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,p=JI(d.offset,{x:0,y:0})>=3;if(!f&&!p)return;const{point:g}=d,{timestamp:_}=Ut;this.history.push({...g,timestamp:_});const{onStart:m,onMove:h}=this.handlers;f||(m&&m(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,d)},this.handlePointerMove=(d,f)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Ff(f,this.transformPagePoint),Xe.update(this.updatePoint,!0)},this.handlePointerUp=(d,f)=>{this.end();const{onEnd:p,onSessionEnd:g,resumeAnimation:_}=this.handlers;if(this.dragSnapToOrigin&&_&&_(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=Bf(d.type==="pointercancel"?this.lastMoveEventInfo:Ff(f,this.transformPagePoint),this.history);this.startEvent&&p&&p(d,m),g&&g(d,m)},!$g(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=Pl(e),a=Ff(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=Ut;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,Bf(a,this.history)),this.removeListeners=Rl(ka(this.contextWindow,"pointermove",this.handlePointerMove),ka(this.contextWindow,"pointerup",this.handlePointerUp),ka(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),fi(this.updatePoint)}}function Ff(t,e){return e?{point:e(t.point)}:t}function Yy(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Bf({point:t},e){return{point:t,delta:Yy(t,z1(e)),offset:Yy(t,e3(e)),velocity:t3(e,.1)}}function e3(t){return t[0]}function z1(t){return t[t.length-1]}function t3(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=z1(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Wi(e)));)n--;if(!i)return{x:0,y:0};const s=$i(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const V1=1e-4,n3=1-V1,i3=1+V1,H1=.01,r3=0-H1,s3=0+H1;function On(t){return t.max-t.min}function o3(t,e,n){return Math.abs(t-e)<=n}function Ky(t,e,n,i=.5){t.origin=i,t.originPoint=yt(e.min,e.max,t.origin),t.scale=On(n)/On(e),t.translate=yt(n.min,n.max,t.origin)-t.originPoint,(t.scale>=n3&&t.scale<=i3||isNaN(t.scale))&&(t.scale=1),(t.translate>=r3&&t.translate<=s3||isNaN(t.translate))&&(t.translate=0)}function Fa(t,e,n,i){Ky(t.x,e.x,n.x,i?i.originX:void 0),Ky(t.y,e.y,n.y,i?i.originY:void 0)}function Zy(t,e,n){t.min=n.min+e.min,t.max=t.min+On(e)}function a3(t,e,n){Zy(t.x,e.x,n.x),Zy(t.y,e.y,n.y)}function Qy(t,e,n){t.min=e.min-n.min,t.max=t.min+On(e)}function Ba(t,e,n){Qy(t.x,e.x,n.x),Qy(t.y,e.y,n.y)}function l3(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?yt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?yt(n,t,i.max):Math.min(t,n)),t}function Jy(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function c3(t,{top:e,left:n,bottom:i,right:r}){return{x:Jy(t.x,n,r),y:Jy(t.y,e,i)}}function e_(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function u3(t,e){return{x:e_(t.x,e.x),y:e_(t.y,e.y)}}function d3(t,e){let n=.5;const i=On(t),r=On(e);return r>i?n=Rs(e.min,e.max-i,t.min):i>r&&(n=Rs(t.min,t.max-r,e.min)),Ti(0,1,n)}function f3(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const qp=.35;function h3(t=qp){return t===!1?t=0:t===!0&&(t=qp),{x:t_(t,"left","right"),y:t_(t,"top","bottom")}}function t_(t,e,n){return{min:n_(t,e),max:n_(t,n)}}function n_(t,e){return typeof t=="number"?t:t[e]||0}const i_=()=>({translate:0,scale:1,origin:0,originPoint:0}),mo=()=>({x:i_(),y:i_()}),r_=()=>({min:0,max:0}),bt=()=>({x:r_(),y:r_()});function Hn(t){return[t("x"),t("y")]}function G1({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function p3({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function m3(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function zf(t){return t===void 0||t===1}function Yp({scale:t,scaleX:e,scaleY:n}){return!zf(t)||!zf(e)||!zf(n)}function ns(t){return Yp(t)||j1(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function j1(t){return s_(t.x)||s_(t.y)}function s_(t){return t&&t!=="0%"}function Hu(t,e,n){const i=t-n,r=e*i;return n+r}function o_(t,e,n,i,r){return r!==void 0&&(t=Hu(t,r,i)),Hu(t,n,i)+e}function Kp(t,e=0,n=1,i,r){t.min=o_(t.min,e,n,i,r),t.max=o_(t.max,e,n,i,r)}function W1(t,{x:e,y:n}){Kp(t.x,e.translate,e.scale,e.originPoint),Kp(t.y,n.translate,n.scale,n.originPoint)}const a_=.999999999999,l_=1.0000000000001;function g3(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&vo(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,W1(t,o)),i&&ns(s.latestValues)&&vo(t,s.latestValues))}e.x<l_&&e.x>a_&&(e.x=1),e.y<l_&&e.y>a_&&(e.y=1)}function go(t,e){t.min=t.min+e,t.max=t.max+e}function c_(t,e,n,i,r=.5){const s=yt(t.min,t.max,r);Kp(t,e,n,s,i)}function vo(t,e){c_(t.x,e.x,e.scaleX,e.scale,e.originX),c_(t.y,e.y,e.scaleY,e.scale,e.originY)}function $1(t,e){return G1(m3(t.getBoundingClientRect(),e))}function v3(t,e,n){const i=$1(t,n),{scroll:r}=e;return r&&(go(i.x,r.offset.x),go(i.y,r.offset.y)),i}const X1=({current:t})=>t?t.ownerDocument.defaultView:null,y3=new WeakMap;class _3{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=bt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Pl(u).point)},s=(u,d)=>{const{drag:f,dragPropagation:p,onDragStart:g}=this.getProps();if(f&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=pN(f),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Hn(m=>{let h=this.getAxisMotionValue(m).get()||0;if(Mi.test(h)){const{projection:v}=this.visualElement;if(v&&v.layout){const y=v.layout.layoutBox[m];y&&(h=On(y)*(parseFloat(h)/100))}}this.originPoint[m]=h}),g&&Xe.postRender(()=>g(u,d)),zp(this.visualElement,"transform");const{animationState:_}=this.visualElement;_&&_.setActive("whileDrag",!0)},o=(u,d)=>{const{dragPropagation:f,dragDirectionLock:p,onDirectionLock:g,onDrag:_}=this.getProps();if(!f&&!this.openDragLock)return;const{offset:m}=d;if(p&&this.currentDirection===null){this.currentDirection=x3(m),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",d.point,m),this.updateAxis("y",d.point,m),this.visualElement.render(),_&&_(u,d)},a=(u,d)=>this.stop(u,d),l=()=>Hn(u=>{var d;return this.getAnimationState(u)==="paused"&&((d=this.getAxisMotionValue(u).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new B1(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:X1(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&Xe.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!pc(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=l3(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&ho(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=c3(r.layoutBox,n):this.constraints=!1,this.elastic=h3(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Hn(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=f3(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!ho(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=v3(i,r.root,this.visualElement.getTransformPagePoint());let o=u3(r.layout.layoutBox,s);if(n){const a=n(p3(o));this.hasMutatedConstraints=!!a,a&&(o=G1(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Hn(u=>{if(!pc(u,n,this.currentDirection))return;let d=l&&l[u]||{};o&&(d={min:0,max:0});const f=r?200:1e6,p=r?40:1e7,g={type:"inertia",velocity:i?e[u]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(u,g)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return zp(this.visualElement,e),i.start(ov(e,i,0,n,this.visualElement,!1))}stopAnimation(){Hn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Hn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Hn(n=>{const{drag:i}=this.getProps();if(!pc(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-yt(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!ho(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Hn(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=d3({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Hn(o=>{if(!pc(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(yt(l,c,r[o]))})}addListeners(){if(!this.visualElement.current)return;y3.set(this.visualElement,this);const e=this.visualElement.current,n=ka(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();ho(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),Xe.read(i);const o=cl(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Hn(u=>{const d=this.getAxisMotionValue(u);d&&(this.originPoint[u]+=l[u].translate,d.set(d.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=qp,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function pc(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function x3(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class S3 extends Gr{constructor(e){super(e),this.removeGroupControls=dn,this.removeListeners=dn,this.controls=new _3(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||dn}unmount(){this.removeGroupControls(),this.removeListeners()}}const u_=t=>(e,n)=>{t&&Xe.postRender(()=>t(e,n))};class E3 extends Gr{constructor(){super(...arguments),this.removePointerDownListener=dn}onPointerDown(e){this.session=new B1(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:X1(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:u_(e),onStart:u_(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&Xe.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=ka(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const eu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function d_(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const ua={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(we.test(t))t=parseFloat(t);else return t;const n=d_(t,e.target.x),i=d_(t,e.target.y);return`${n}% ${i}%`}},M3={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=Ur.parse(t);if(r.length>5)return i;const s=Ur.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=yt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};class w3 extends H.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;YD(T3),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),eu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||Xe.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Dg.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function q1(t){const[e,n]=Lw(),i=H.useContext(Tg);return E.jsx(w3,{...t,layoutGroup:i,switchLayoutGroup:H.useContext(kw),isPresent:e,safeToRemove:n})}const T3={borderRadius:{...ua,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ua,borderTopRightRadius:ua,borderBottomLeftRadius:ua,borderBottomRightRadius:ua,boxShadow:M3};function b3(t,e,n){const i=nn(t)?t:xi(t);return i.start(ov("",i,e,n)),i.animation}function A3(t){return t instanceof SVGElement&&t.tagName!=="svg"}const C3=(t,e)=>t.depth-e.depth;class R3{constructor(){this.children=[],this.isDirty=!1}add(e){Xg(this.children,e),this.isDirty=!0}remove(e){qg(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(C3),this.isDirty=!1,this.children.forEach(e)}}function P3(t,e){const n=wi.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(fi(i),t(s-e))};return Xe.read(i,!0),()=>fi(i)}const Y1=["TopLeft","TopRight","BottomLeft","BottomRight"],L3=Y1.length,f_=t=>typeof t=="string"?parseFloat(t):t,h_=t=>typeof t=="number"||we.test(t);function D3(t,e,n,i,r,s){r?(t.opacity=yt(0,n.opacity!==void 0?n.opacity:1,N3(i)),t.opacityExit=yt(e.opacity!==void 0?e.opacity:1,0,I3(i))):s&&(t.opacity=yt(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<L3;o++){const a=`border${Y1[o]}Radius`;let l=p_(e,a),c=p_(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||h_(l)===h_(c)?(t[a]=Math.max(yt(f_(l),f_(c),i),0),(Mi.test(c)||Mi.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=yt(e.rotate||0,n.rotate||0,i))}function p_(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const N3=K1(0,.5,h1),I3=K1(.5,.95,dn);function K1(t,e,n){return i=>i<t?0:i>e?1:n(Rs(t,e,i))}function m_(t,e){t.min=e.min,t.max=e.max}function zn(t,e){m_(t.x,e.x),m_(t.y,e.y)}function g_(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function v_(t,e,n,i,r){return t-=e,t=Hu(t,1/n,i),r!==void 0&&(t=Hu(t,1/r,i)),t}function O3(t,e=0,n=1,i=.5,r,s=t,o=t){if(Mi.test(e)&&(e=parseFloat(e),e=yt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=yt(s.min,s.max,i);t===s&&(a-=e),t.min=v_(t.min,e,n,a,r),t.max=v_(t.max,e,n,a,r)}function y_(t,e,[n,i,r],s,o){O3(t,e[n],e[i],e[r],e.scale,s,o)}const U3=["x","scaleX","originX"],k3=["y","scaleY","originY"];function __(t,e,n,i){y_(t.x,e,U3,n?n.x:void 0,i?i.x:void 0),y_(t.y,e,k3,n?n.y:void 0,i?i.y:void 0)}function x_(t){return t.translate===0&&t.scale===1}function Z1(t){return x_(t.x)&&x_(t.y)}function S_(t,e){return t.min===e.min&&t.max===e.max}function F3(t,e){return S_(t.x,e.x)&&S_(t.y,e.y)}function E_(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function Q1(t,e){return E_(t.x,e.x)&&E_(t.y,e.y)}function M_(t){return On(t.x)/On(t.y)}function w_(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class B3{constructor(){this.members=[]}add(e){Xg(this.members,e),e.scheduleRender()}remove(e){if(qg(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function z3(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:d,rotateY:f,skewX:p,skewY:g}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),d&&(i+=`rotateX(${d}deg) `),f&&(i+=`rotateY(${f}deg) `),p&&(i+=`skewX(${p}deg) `),g&&(i+=`skewY(${g}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const is={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Ta=typeof window<"u"&&window.MotionDebug!==void 0,Vf=["","X","Y","Z"],V3={visibility:"hidden"},T_=1e3;let H3=0;function Hf(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function J1(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=o1(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",Xe,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&J1(i)}function eT({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=H3++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ta&&(is.totalNodes=is.resolvedTargetDeltas=is.recalculatedProjection=0),this.nodes.forEach(W3),this.nodes.forEach(K3),this.nodes.forEach(Z3),this.nodes.forEach($3),Ta&&window.MotionDebug.record(is)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new R3)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Yg),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=A3(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let d;const f=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=P3(f,250),eu.hasAnimatedSinceResize&&(eu.hasAnimatedSinceResize=!1,this.nodes.forEach(A_))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeTargetChanged:p,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const _=this.options.transition||u.getDefaultTransition()||nO,{onLayoutAnimationStart:m,onLayoutAnimationComplete:h}=u.getProps(),v=!this.targetLayout||!Q1(this.targetLayout,g)||p,y=!f&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||f&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,y);const x={...Hg(_,"layout"),onPlay:m,onComplete:h};(u.shouldReduceMotion||this.options.layoutRoot)&&(x.delay=0,x.type=!1),this.startAnimation(x)}else f||A_(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,fi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Q3),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&J1(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(b_);return}this.isUpdating||this.nodes.forEach(q3),this.isUpdating=!1,this.nodes.forEach(Y3),this.nodes.forEach(G3),this.nodes.forEach(j3),this.clearAllSnapshots();const a=wi.now();Ut.delta=Ti(0,1e3/60,a-Ut.timestamp),Ut.timestamp=a,Ut.isProcessing=!0,Df.update.process(Ut),Df.preRender.process(Ut),Df.render.process(Ut),Ut.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Dg.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(X3),this.sharedNodes.forEach(J3)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Xe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Xe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=bt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Z1(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||ns(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),iO(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return bt();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(rO))){const{scroll:u}=this.root;u&&(go(l.x,u.offset.x),go(l.y,u.offset.y))}return l}removeElementScroll(o){var a;const l=bt();if(zn(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:d,options:f}=u;u!==this.root&&d&&f.layoutScroll&&(d.wasRoot&&zn(l,o),go(l.x,d.offset.x),go(l.y,d.offset.y))}return l}applyTransform(o,a=!1){const l=bt();zn(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&vo(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),ns(u.latestValues)&&vo(l,u.latestValues)}return ns(this.latestValues)&&vo(l,this.latestValues),l}removeTransform(o){const a=bt();zn(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!ns(c.latestValues))continue;Yp(c.latestValues)&&c.updateSnapshot();const u=bt(),d=c.measurePageBox();zn(u,d),__(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return ns(this.latestValues)&&__(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ut.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:f}=this.options;if(!(!this.layout||!(d||f))){if(this.resolvedRelativeTargetAt=Ut.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=bt(),this.relativeTargetOrigin=bt(),Ba(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),zn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=bt(),this.targetWithTransforms=bt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),a3(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):zn(this.target,this.layout.layoutBox),W1(this.target,this.targetDelta)):zn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=bt(),this.relativeTargetOrigin=bt(),Ba(this.relativeTargetOrigin,this.target,p.target),zn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ta&&is.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Yp(this.parent.latestValues)||j1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Ut.timestamp&&(c=!1),c)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;zn(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,p=this.treeScale.y;g3(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=bt());const{target:g}=a;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(g_(this.prevProjectionDelta.x,this.projectionDelta.x),g_(this.prevProjectionDelta.y,this.projectionDelta.y)),Fa(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==p||!w_(this.projectionDelta.x,this.prevProjectionDelta.x)||!w_(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g)),Ta&&is.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=mo(),this.projectionDelta=mo(),this.projectionDeltaWithTransform=mo()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},d=mo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=bt(),p=l?l.source:void 0,g=this.layout?this.layout.source:void 0,_=p!==g,m=this.getStack(),h=!m||m.members.length<=1,v=!!(_&&!h&&this.options.crossfade===!0&&!this.path.some(tO));this.animationProgress=0;let y;this.mixTargetDelta=x=>{const T=x/1e3;C_(d.x,o.x,T),C_(d.y,o.y,T),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ba(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),eO(this.relativeTarget,this.relativeTargetOrigin,f,T),y&&F3(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=bt()),zn(y,this.relativeTarget)),_&&(this.animationValues=u,D3(u,c,this.latestValues,T,v,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=T},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(fi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Xe.update(()=>{eu.hasAnimatedSinceResize=!0,this.currentAnimation=b3(0,T_,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(T_),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&tT(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||bt();const d=On(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const f=On(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+f}zn(a,l),vo(a,u),Fa(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new B3),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Hf("z",o,c,this.animationValues);for(let u=0;u<Vf.length;u++)Hf(`rotate${Vf[u]}`,o,c,this.animationValues),Hf(`skew${Vf[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return V3;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Qc(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const _={};return this.options.layoutId&&(_.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,_.pointerEvents=Qc(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!ns(this.latestValues)&&(_.transform=u?u({},""):"none",this.hasProjected=!1),_}const f=d.animationValues||d.latestValues;this.applyTransformsToTarget(),c.transform=z3(this.projectionDeltaWithTransform,this.treeScale,f),u&&(c.transform=u(f,c.transform));const{x:p,y:g}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${g.origin*100}% 0`,d.animationValues?c.opacity=d===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:c.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const _ in ku){if(f[_]===void 0)continue;const{correct:m,applyTo:h}=ku[_],v=c.transform==="none"?f[_]:m(f[_],d);if(h){const y=h.length;for(let x=0;x<y;x++)c[h[x]]=v}else c[_]=v}return this.options.layoutId&&(c.pointerEvents=d===this?Qc(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(b_),this.root.sharedNodes.clear()}}}function G3(t){t.updateLayout()}function j3(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?Hn(d=>{const f=o?n.measuredBox[d]:n.layoutBox[d],p=On(f);f.min=i[d].min,f.max=f.min+p}):tT(s,n.layoutBox,i)&&Hn(d=>{const f=o?n.measuredBox[d]:n.layoutBox[d],p=On(i[d]);f.max=f.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=mo();Fa(a,i,n.layoutBox);const l=mo();o?Fa(l,t.applyTransform(r,!0),n.measuredBox):Fa(l,i,n.layoutBox);const c=!Z1(a);let u=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:p}=d;if(f&&p){const g=bt();Ba(g,n.layoutBox,f.layoutBox);const _=bt();Ba(_,i,p.layoutBox),Q1(g,_)||(u=!0),d.options.layoutRoot&&(t.relativeTarget=_,t.relativeTargetOrigin=g,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function W3(t){Ta&&is.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function $3(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function X3(t){t.clearSnapshot()}function b_(t){t.clearMeasurements()}function q3(t){t.isLayoutDirty=!1}function Y3(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function A_(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function K3(t){t.resolveTargetDelta()}function Z3(t){t.calcProjection()}function Q3(t){t.resetSkewAndRotation()}function J3(t){t.removeLeadSnapshot()}function C_(t,e,n){t.translate=yt(e.translate,0,n),t.scale=yt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function R_(t,e,n,i){t.min=yt(e.min,n.min,i),t.max=yt(e.max,n.max,i)}function eO(t,e,n,i){R_(t.x,e.x,n.x,i),R_(t.y,e.y,n.y,i)}function tO(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const nO={duration:.45,ease:[.4,0,.1,1]},P_=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),L_=P_("applewebkit/")&&!P_("chrome/")?Math.round:dn;function D_(t){t.min=L_(t.min),t.max=L_(t.max)}function iO(t){D_(t.x),D_(t.y)}function tT(t,e,n){return t==="position"||t==="preserve-aspect"&&!o3(M_(e),M_(n),.2)}function rO(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const sO=eT({attachResizeListener:(t,e)=>cl(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Gf={current:void 0},nT=eT({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Gf.current){const t=new sO({});t.mount(window),t.setOptions({layoutScroll:!0}),Gf.current=t}return Gf.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),oO={pan:{Feature:E3},drag:{Feature:S3,ProjectionNode:nT,MeasureLayout:q1}};function N_(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&Xe.postRender(()=>s(e,Pl(e)))}class aO extends Gr{mount(){const{current:e}=this.node;e&&(this.unmount=cN(e,n=>(N_(this.node,n,"Start"),i=>N_(this.node,i,"End"))))}unmount(){}}class lO extends Gr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Rl(cl(this.node.current,"focus",()=>this.onFocus()),cl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function I_(t,e,n){const{props:i}=t;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&Xe.postRender(()=>s(e,Pl(e)))}class cO extends Gr{mount(){const{current:e}=this.node;e&&(this.unmount=hN(e,n=>(I_(this.node,n,"Start"),(i,{success:r})=>I_(this.node,i,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Zp=new WeakMap,jf=new WeakMap,uO=t=>{const e=Zp.get(t.target);e&&e(t)},dO=t=>{t.forEach(uO)};function fO({root:t,...e}){const n=t||document;jf.has(n)||jf.set(n,{});const i=jf.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(dO,{root:t,...e})),i[r]}function hO(t,e,n){const i=fO(e);return Zp.set(t,n),i.observe(t),()=>{Zp.delete(t),i.unobserve(t)}}const pO={some:0,all:1};class mO extends Gr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:pO[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:d}=this.node.getProps(),f=c?u:d;f&&f(l)};return hO(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(gO(e,n))&&this.startObserver()}unmount(){}}function gO({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const vO={inView:{Feature:mO},tap:{Feature:cO},focus:{Feature:lO},hover:{Feature:aO}},yO={layout:{ProjectionNode:nT,MeasureLayout:q1}},Qp={current:null},iT={current:!1};function _O(){if(iT.current=!0,!!bg)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Qp.current=t.matches;t.addListener(e),e()}else Qp.current=!1}const xO=[...A1,en,Ur],SO=t=>xO.find(b1(t)),O_=new WeakMap;function EO(t,e,n){for(const i in e){const r=e[i],s=n[i];if(nn(r))t.addValue(i,r);else if(nn(s))t.addValue(i,xi(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,xi(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const U_=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class MO{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=nv,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=wi.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,Xe.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=o;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=Ld(n),this.isVariantNode=Ow(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in f){const g=f[p];l[p]!==void 0&&nn(g)&&g.set(l[p],!1)}}mount(e){this.current=e,O_.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),iT.current||_O(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Qp.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){O_.delete(this.current),this.projection&&this.projection.unmount(),fi(this.notifyUpdate),fi(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=Us.has(e),r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&Xe.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Bo){const n=Bo[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):bt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<U_.length;i++){const r=U_[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=EO(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=xi(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(w1(r)||m1(r))?r=parseFloat(r):!SO(r)&&Ur.test(n)&&(r=S1(e,n)),this.setBaseTarget(e,nn(r)?r.get():r)),nn(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=Ig(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(r=o[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!nn(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Yg),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class rT extends MO{constructor(){super(...arguments),this.KeyframeResolver=C1}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;nn(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function wO(t){return window.getComputedStyle(t)}class TO extends rT{constructor(){super(...arguments),this.type="html",this.renderInstance=jw}readValueFromInstance(e,n){if(Us.has(n)){const i=tv(n);return i&&i.default||0}else{const i=wO(e),r=(Vw(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return $1(e,n)}build(e,n,i){kg(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return Vg(e,n,i)}}class bO extends rT{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=bt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Us.has(n)){const i=tv(n);return i&&i.default||0}return n=Ww.has(n)?n:Lg(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return qw(e,n,i)}build(e,n,i){Fg(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,r){$w(e,n,i,r)}mount(e){this.isSVGTag=zg(e.tagName),super.mount(e)}}const AO=(t,e)=>Ng(t)?new bO(e):new TO(e,{allowProjection:t!==H.Fragment}),CO=rN({...ZI,...vO,...oO,...yO},AO),ve=_D(CO);function sT(t,e){let n;const i=()=>{const{currentTime:r}=e,o=(r===null?0:r.value)/100;n!==o&&t(o),n=o};return Xe.update(i,!0),()=>fi(i)}const tu=new WeakMap;let hr;function RO(t,e){if(e){const{inlineSize:n,blockSize:i}=e[0];return{width:n,height:i}}else return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}function PO({target:t,contentRect:e,borderBoxSize:n}){var i;(i=tu.get(t))===null||i===void 0||i.forEach(r=>{r({target:t,contentSize:e,get size(){return RO(t,n)}})})}function LO(t){t.forEach(PO)}function DO(){typeof ResizeObserver>"u"||(hr=new ResizeObserver(LO))}function NO(t,e){hr||DO();const n=Wg(t);return n.forEach(i=>{let r=tu.get(i);r||(r=new Set,tu.set(i,r)),r.add(e),hr==null||hr.observe(i)}),()=>{n.forEach(i=>{const r=tu.get(i);r==null||r.delete(e),r!=null&&r.size||hr==null||hr.unobserve(i)})}}const nu=new Set;let za;function IO(){za=()=>{const t={width:window.innerWidth,height:window.innerHeight},e={target:window,size:t,contentSize:t};nu.forEach(n=>n(e))},window.addEventListener("resize",za)}function OO(t){return nu.add(t),za||IO(),()=>{nu.delete(t),!nu.size&&za&&(za=void 0)}}function UO(t,e){return typeof t=="function"?OO(t):NO(t,e)}const kO=50,k_=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),FO=()=>({time:0,x:k_(),y:k_()}),BO={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function F_(t,e,n,i){const r=n[e],{length:s,position:o}=BO[e],a=r.current,l=n.time;r.current=t[`scroll${o}`],r.scrollLength=t[`scroll${s}`]-t[`client${s}`],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=Rs(0,r.scrollLength,r.current);const c=i-l;r.velocity=c>kO?0:Kg(r.current-a,c)}function zO(t,e,n){F_(t,"x",e,n),F_(t,"y",e,n),e.time=n}function VO(t,e){const n={x:0,y:0};let i=t;for(;i&&i!==e;)if(i instanceof HTMLElement)n.x+=i.offsetLeft,n.y+=i.offsetTop,i=i.offsetParent;else if(i.tagName==="svg"){const r=i.getBoundingClientRect();i=i.parentElement;const s=i.getBoundingClientRect();n.x+=r.left-s.left,n.y+=r.top-s.top}else if(i instanceof SVGGraphicsElement){const{x:r,y:s}=i.getBBox();n.x+=r,n.y+=s;let o=null,a=i.parentNode;for(;!o;)a.tagName==="svg"&&(o=a),a=i.parentNode;i=o}else break;return n}const Jp={start:0,center:.5,end:1};function B_(t,e,n=0){let i=0;if(t in Jp&&(t=Jp[t]),typeof t=="string"){const r=parseFloat(t);t.endsWith("px")?i=r:t.endsWith("%")?t=r/100:t.endsWith("vw")?i=r/100*document.documentElement.clientWidth:t.endsWith("vh")?i=r/100*document.documentElement.clientHeight:t=r}return typeof t=="number"&&(i=e*t),n+i}const HO=[0,0];function GO(t,e,n,i){let r=Array.isArray(t)?t:HO,s=0,o=0;return typeof t=="number"?r=[t,t]:typeof t=="string"&&(t=t.trim(),t.includes(" ")?r=t.split(" "):r=[t,Jp[t]?t:"0"]),s=B_(r[0],n,i),o=B_(r[1],e),s-o}const jO={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},WO={x:0,y:0};function $O(t){return"getBBox"in t&&t.tagName!=="svg"?t.getBBox():{width:t.clientWidth,height:t.clientHeight}}function XO(t,e,n){const{offset:i=jO.All}=n,{target:r=t,axis:s="y"}=n,o=s==="y"?"height":"width",a=r!==t?VO(r,t):WO,l=r===t?{width:t.scrollWidth,height:t.scrollHeight}:$O(r),c={width:t.clientWidth,height:t.clientHeight};e[s].offset.length=0;let u=!e[s].interpolate;const d=i.length;for(let f=0;f<d;f++){const p=GO(i[f],c[o],l[o],a[s]);!u&&p!==e[s].interpolatorOffsets[f]&&(u=!0),e[s].offset[f]=p}u&&(e[s].interpolate=rv(e[s].offset,O1(i),{clamp:!1}),e[s].interpolatorOffsets=[...e[s].offset]),e[s].progress=Ti(0,1,e[s].interpolate(e[s].current))}function qO(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let i=e;for(;i&&i!==t;)n.x.targetOffset+=i.offsetLeft,n.y.targetOffset+=i.offsetTop,i=i.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight}function YO(t,e,n,i={}){return{measure:()=>qO(t,i.target,n),update:r=>{zO(t,n,r),(i.offset||i.target)&&XO(t,n,i)},notify:()=>e(n)}}const da=new WeakMap,z_=new WeakMap,Wf=new WeakMap,V_=t=>t===document.documentElement?window:t;function av(t,{container:e=document.documentElement,...n}={}){let i=Wf.get(e);i||(i=new Set,Wf.set(e,i));const r=FO(),s=YO(e,t,r,n);if(i.add(s),!da.has(e)){const a=()=>{for(const f of i)f.measure()},l=()=>{for(const f of i)f.update(Ut.timestamp)},c=()=>{for(const f of i)f.notify()},u=()=>{Xe.read(a,!1,!0),Xe.read(l,!1,!0),Xe.update(c,!1,!0)};da.set(e,u);const d=V_(e);window.addEventListener("resize",u,{passive:!0}),e!==document.documentElement&&z_.set(e,UO(e,u)),d.addEventListener("scroll",u,{passive:!0})}const o=da.get(e);return Xe.read(o,!1,!0),()=>{var a;fi(o);const l=Wf.get(e);if(!l||(l.delete(s),l.size))return;const c=da.get(e);da.delete(e),c&&(V_(e).removeEventListener("scroll",c),(a=z_.get(e))===null||a===void 0||a(),window.removeEventListener("resize",c))}}function KO({source:t,container:e,axis:n="y"}){t&&(e=t);const i={value:0},r=av(s=>{i.value=s[n].progress*100},{container:e,axis:n});return{currentTime:i,cancel:r}}const $f=new Map;function oT({source:t,container:e=document.documentElement,axis:n="y"}={}){t&&(e=t),$f.has(e)||$f.set(e,{});const i=$f.get(e);return i[n]||(i[n]=Zw()?new ScrollTimeline({source:e,axis:n}):KO({source:e,axis:n})),i[n]}function ZO(t){return t.length===2}function aT(t){return t&&(t.target||t.offset)}function QO(t,e){return ZO(t)||aT(e)?av(n=>{t(n[e.axis].progress,n)},e):sT(t,oT(e))}function JO(t,e){if(t.flatten(),aT(e))return t.pause(),av(n=>{t.time=t.duration*n[e.axis].progress},e);{const n=oT(e);return t.attachTimeline?t.attachTimeline(n,i=>(i.pause(),sT(r=>{i.time=i.duration*r},n))):dn}}function eU(t,{axis:e="y",...n}={}){const i={axis:e,...n};return typeof t=="function"?QO(t,i):JO(t,i)}function H_(t,e){dD(!!(!e||e.current))}const tU=()=>({scrollX:xi(0),scrollY:xi(0),scrollXProgress:xi(0),scrollYProgress:xi(0)});function lT({container:t,target:e,layoutEffect:n=!0,...i}={}){const r=Yo(tU);return(n?Cd:H.useEffect)(()=>(H_("target",e),H_("container",t),eU((o,{x:a,y:l})=>{r.scrollX.set(a.current),r.scrollXProgress.set(a.progress),r.scrollY.set(l.current),r.scrollYProgress.set(l.progress)},{...i,container:(t==null?void 0:t.current)||void 0,target:(e==null?void 0:e.current)||void 0})),[t,e,JSON.stringify(i.offset)]),r}function nU(t){const e=Yo(()=>xi(t)),{isStatic:n}=H.useContext(Ad);if(n){const[,i]=H.useState(t);H.useEffect(()=>e.on("change",i),[])}return e}function cT(t,e){const n=nU(e()),i=()=>n.set(e());return i(),Cd(()=>{const r=()=>Xe.preRender(i,!1,!0),s=t.map(o=>o.on("change",r));return()=>{s.forEach(o=>o()),fi(i)}}),n}const iU=t=>t&&typeof t=="object"&&t.mix,rU=t=>iU(t)?t.mix:void 0;function sU(...t){const e=!Array.isArray(t[0]),n=e?0:-1,i=t[0+n],r=t[1+n],s=t[2+n],o=t[3+n],a=rv(r,s,{mixer:rU(s[0]),...o});return e?a(i):a}function oU(t){Oa.current=[],t();const e=cT(Oa.current,t);return Oa.current=void 0,e}function Gu(t,e,n,i){if(typeof t=="function")return oU(t);const r=typeof e=="function"?e:sU(e,n,i);return Array.isArray(t)?G_(t,r):G_([t],([s])=>r(s))}function G_(t,e){const n=Yo(()=>[]);return cT(t,()=>{n.length=0;const i=t.length;for(let r=0;r<i;r++)n[r]=t[r].get();return e(n)})}const aU={some:0,all:1};function lU(t,e,{root:n,margin:i,amount:r="some"}={}){const s=Wg(t),o=new WeakMap,a=c=>{c.forEach(u=>{const d=o.get(u.target);if(u.isIntersecting!==!!d)if(u.isIntersecting){const f=e(u);typeof f=="function"?o.set(u.target,f):l.unobserve(u.target)}else typeof d=="function"&&(d(u),o.delete(u.target))})},l=new IntersectionObserver(a,{root:n,rootMargin:i,threshold:typeof r=="number"?r:aU[r]});return s.forEach(c=>l.observe(c)),()=>l.disconnect()}function jr(t,{root:e,margin:n,amount:i,once:r=!1}={}){const[s,o]=H.useState(!1);return H.useEffect(()=>{if(!t.current||r&&s)return;const a=()=>(o(!0),r?void 0:()=>o(!1)),l={root:e&&e.current||void 0,margin:n,amount:i};return lU(t.current,a,l)},[e,t,n,r,i]),s}const j_=[{name:"Home",to:"hero",offset:0},{name:"About",to:"about",offset:-80},{name:"Skills",to:"skills",offset:-80},{name:"Services",to:"services",offset:-80},{name:"Projects",to:"projects",offset:-80},{name:"Contact",to:"contact",offset:-80}],cU=()=>{const[t,e]=H.useState(!1),[n,i]=H.useState(!1),{darkMode:r,toggleTheme:s}=Pw(),o=Dn(yd);return H.useEffect(()=>{const a=()=>{const l=window.scrollY>20;l!==n&&i(l)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[n]),E.jsx("header",{className:`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${n||t?"py-4 bg-white/80 dark:bg-[#0A192F]/80 backdrop-blur-lg shadow-lg":"py-6 bg-transparent"}`,children:E.jsxs("nav",{className:"w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8",children:[E.jsxs("div",{className:"flex flex-wrap items-center justify-between w-full",children:[E.jsx(ve.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5},children:E.jsxs(bo,{to:"hero",spy:!0,smooth:!0,duration:500,className:"relative group cursor-pointer",children:[E.jsx("span",{className:"text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]",children:o==null?void 0:o.logoText}),E.jsx("span",{className:"absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] transition-all duration-300 group-hover:w-full"})]})}),E.jsxs("div",{className:"hidden lg:flex items-center space-x-8",children:[E.jsx("div",{className:"flex items-center space-x-8",children:j_.map((a,l)=>E.jsx(ve.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5,delay:l*.1},children:E.jsxs(bo,{to:a.to,spy:!0,smooth:!0,offset:a.offset,duration:500,className:"relative group cursor-pointer",children:[E.jsx("span",{className:"text-gray-600 dark:text-gray-300 transition-colors group-hover:text-[#00F5A0]",children:a.name}),E.jsx("span",{className:"absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00F5A0] transition-all duration-300 group-hover:w-full"})]})},a.name))}),E.jsxs(ve.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.5},className:"flex items-center space-x-4",children:[E.jsx("button",{onClick:s,className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors","aria-label":"Toggle theme",children:E.jsx(ve.div,{initial:!1,animate:{rotate:r?180:0},transition:{duration:.3},children:r?E.jsx(xy,{className:"w-5 h-5 text-[#00F5A0]"}):E.jsx(_y,{className:"w-5 h-5 text-gray-600"})})}),E.jsxs("a",{href:o.resume,className:"group relative px-6 py-2.5 overflow-hidden rounded-full bg-transparent border-2 border-[#00F5A0] text-[#00F5A0] font-medium transition-colors hover:text-white",target:"_blank",rel:"noopener noreferrer",children:[E.jsx("span",{className:"absolute inset-0 w-full h-full bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"}),E.jsxs("span",{className:"relative flex items-center",children:["Resume ",E.jsx(yy,{className:"ml-2 w-4 h-4"})]})]})]})]}),E.jsxs("div",{className:"lg:hidden flex items-center space-x-4",children:[E.jsx("button",{onClick:s,className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors","aria-label":"Toggle theme",children:E.jsx(ve.div,{initial:!1,animate:{rotate:r?180:0},transition:{duration:.3},children:r?E.jsx(xy,{className:"w-5 h-5 text-[#00F5A0]"}):E.jsx(_y,{className:"w-5 h-5 text-gray-600"})})}),E.jsx("button",{onClick:()=>e(!t),className:"p-2 focus:outline-none","aria-label":"Toggle menu",children:t?E.jsx(sD,{className:"w-6 h-6 text-gray-600 dark:text-gray-300"}):E.jsx(eD,{className:"w-6 h-6 text-gray-600 dark:text-gray-300"})})]})]}),E.jsx(Ag,{children:t&&E.jsx(ve.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},className:"lg:hidden overflow-hidden",children:E.jsxs("div",{className:"py-6 space-y-4",children:[j_.map((a,l)=>E.jsx(ve.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3,delay:l*.1},children:E.jsx(bo,{to:a.to,spy:!0,smooth:!0,offset:a.offset,duration:500,onClick:()=>e(!1),className:"block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-[#00F5A0] transition-colors",children:a.name})},a.name)),E.jsx(ve.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3,delay:.5},className:"px-4 pt-4",children:E.jsxs("a",{href:o.resume,className:"group relative inline-flex items-center px-6 py-2.5 overflow-hidden rounded-full bg-transparent border-2 border-[#00F5A0] text-[#00F5A0] font-medium transition-colors hover:text-white",target:"_blank",rel:"noopener noreferrer",children:[E.jsx("span",{className:"absolute inset-0 w-full h-full bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"}),E.jsxs("span",{className:"relative flex items-center",children:["Resume ",E.jsx(yy,{className:"ml-2 w-4 h-4"})]})]})})]})})})]})})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lv="161",uU=0,W_=1,dU=2,uT=1,fU=2,Ni=3,kr=0,En=1,ki=2,Rr=0,Ao=1,em=2,$_=3,X_=4,hU=5,as=100,pU=101,mU=102,q_=103,Y_=104,gU=200,vU=201,yU=202,_U=203,tm=204,nm=205,xU=206,SU=207,EU=208,MU=209,wU=210,TU=211,bU=212,AU=213,CU=214,RU=0,PU=1,LU=2,ju=3,DU=4,NU=5,IU=6,OU=7,dT=0,UU=1,kU=2,Pr=0,FU=1,BU=2,zU=3,VU=4,HU=5,GU=6,fT=300,Vo=301,Ho=302,im=303,rm=304,Id=306,sm=1e3,oi=1001,om=1002,cn=1003,K_=1004,fa=1005,mn=1006,Xf=1007,hs=1008,Lr=1009,jU=1010,WU=1011,cv=1012,hT=1013,xr=1014,Fi=1015,ul=1016,pT=1017,mT=1018,ys=1020,$U=1021,ai=1023,XU=1024,qU=1025,_s=1026,Go=1027,YU=1028,gT=1029,KU=1030,vT=1031,yT=1033,qf=33776,Yf=33777,Kf=33778,Zf=33779,Z_=35840,Q_=35841,J_=35842,ex=35843,_T=36196,tx=37492,nx=37496,ix=37808,rx=37809,sx=37810,ox=37811,ax=37812,lx=37813,cx=37814,ux=37815,dx=37816,fx=37817,hx=37818,px=37819,mx=37820,gx=37821,Qf=36492,vx=36494,yx=36495,ZU=36283,_x=36284,xx=36285,Sx=36286,xT=3e3,xs=3001,QU=3200,JU=3201,ek=0,tk=1,$n="",jt="srgb",Ji="srgb-linear",uv="display-p3",Od="display-p3-linear",Wu="linear",lt="srgb",$u="rec709",Xu="p3",Fs=7680,Ex=519,nk=512,ik=513,rk=514,ST=515,sk=516,ok=517,ak=518,lk=519,Mx=35044,wx="300 es",am=1035,Vi=2e3,qu=2001;class Qo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jf=Math.PI/180,lm=180/Math.PI;function Ll(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[t&255]+Qt[t>>8&255]+Qt[t>>16&255]+Qt[t>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[n&63|128]+Qt[n>>8&255]+"-"+Qt[n>>16&255]+Qt[n>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function vn(t,e,n){return Math.max(e,Math.min(n,t))}function ck(t,e){return(t%e+e)%e}function eh(t,e,n){return(1-n)*t+n*e}function Tx(t){return(t&t-1)===0&&t!==0}function cm(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ha(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function pn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,n=0){qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(vn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,n,i,r,s,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],h=r[6],v=r[1],y=r[4],x=r[7],T=r[2],w=r[5],b=r[8];return s[0]=o*_+a*v+l*T,s[3]=o*m+a*y+l*w,s[6]=o*h+a*x+l*b,s[1]=c*_+u*v+d*T,s[4]=c*m+u*y+d*w,s[7]=c*h+u*x+d*b,s[2]=f*_+p*v+g*T,s[5]=f*m+p*y+g*w,s[8]=f*h+p*x+g*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=n*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(th.makeScale(e,n)),this}rotate(e){return this.premultiply(th.makeRotation(-e)),this}translate(e,n){return this.premultiply(th.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const th=new Ve;function ET(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Yu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function uk(){const t=Yu("canvas");return t.style.display="block",t}const bx={};function Co(t){t in bx||(bx[t]=!0,console.warn(t))}const Ax=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Cx=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),mc={[Ji]:{transfer:Wu,primaries:$u,toReference:t=>t,fromReference:t=>t},[jt]:{transfer:lt,primaries:$u,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Od]:{transfer:Wu,primaries:Xu,toReference:t=>t.applyMatrix3(Cx),fromReference:t=>t.applyMatrix3(Ax)},[uv]:{transfer:lt,primaries:Xu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Cx),fromReference:t=>t.applyMatrix3(Ax).convertLinearToSRGB()}},dk=new Set([Ji,Od]),et={enabled:!0,_workingColorSpace:Ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!dk.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=mc[e].toReference,r=mc[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return mc[t].primaries},getTransfer:function(t){return t===$n?Wu:mc[t].transfer}};function Ro(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function nh(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Bs;class MT{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Bs===void 0&&(Bs=Yu("canvas")),Bs.width=e.width,Bs.height=e.height;const i=Bs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Bs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Yu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ro(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ro(n[i]/255)*255):n[i]=Ro(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fk=0;class wT{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fk++}),this.uuid=Ll(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ih(r[o].image)):s.push(ih(r[o]))}else s=ih(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ih(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?MT.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hk=0;class Mn extends Qo{constructor(e=Mn.DEFAULT_IMAGE,n=Mn.DEFAULT_MAPPING,i=oi,r=oi,s=mn,o=hs,a=ai,l=Lr,c=Mn.DEFAULT_ANISOTROPY,u=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hk++}),this.uuid=Ll(),this.name="",this.source=new wT(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Co("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===xs?jt:$n),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fT)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sm:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case om:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sm:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case om:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Co("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===jt?xs:xT}set encoding(e){Co("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===xs?jt:$n}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=fT;Mn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,n=0,i=0,r=1){$t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,x=(p+1)/2,T=(h+1)/2,w=(u+f)/4,b=(d+_)/4,L=(g+m)/4;return y>x&&y>T?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=w/i,s=b/i):x>T?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=w/r,s=L/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=b/s,r=L/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(f-u)/v,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pk extends Qo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new $t(0,0,e,n),this.scissorTest=!1,this.viewport=new $t(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Co("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===xs?jt:$n),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Mn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new wT(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ps extends pk{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class TT extends Mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mk extends Mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dl{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(d!==_||l!==f||c!==p||u!==g){let m=1-a;const h=l*f+c*p+u*g+d*_,v=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const T=Math.sqrt(y),w=Math.atan2(T,h*v);m=Math.sin(m*w)/T,a=Math.sin(a*w)/T}const x=a*v;if(l=l*m+f*x,c=c*m+p*x,u=u*m+g*x,d=d*m+_*x,m===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=T,c*=T,u*=T,d*=T}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*d+l*p-c*f,e[n+1]=l*g+u*f+c*d-a*p,e[n+2]=c*g+u*p+a*f-l*d,e[n+3]=u*g-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"YZX":this._x=f*u*d+c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d-f*p*g;break;case"XZY":this._x=f*u*d-c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Rx.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Rx.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return rh.copy(this).projectOnVector(e),this.sub(rh)}reflect(e){return this.sub(rh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(vn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rh=new z,Rx=new Dl;class Nl{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qn):Qn.fromBufferAttribute(s,o),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gc.copy(i.boundingBox)),gc.applyMatrix4(e.matrixWorld),this.union(gc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pa),vc.subVectors(this.max,pa),zs.subVectors(e.a,pa),Vs.subVectors(e.b,pa),Hs.subVectors(e.c,pa),or.subVectors(Vs,zs),ar.subVectors(Hs,Vs),Yr.subVectors(zs,Hs);let n=[0,-or.z,or.y,0,-ar.z,ar.y,0,-Yr.z,Yr.y,or.z,0,-or.x,ar.z,0,-ar.x,Yr.z,0,-Yr.x,-or.y,or.x,0,-ar.y,ar.x,0,-Yr.y,Yr.x,0];return!sh(n,zs,Vs,Hs,vc)||(n=[1,0,0,0,1,0,0,0,1],!sh(n,zs,Vs,Hs,vc))?!1:(yc.crossVectors(or,ar),n=[yc.x,yc.y,yc.z],sh(n,zs,Vs,Hs,vc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ci=[new z,new z,new z,new z,new z,new z,new z,new z],Qn=new z,gc=new Nl,zs=new z,Vs=new z,Hs=new z,or=new z,ar=new z,Yr=new z,pa=new z,vc=new z,yc=new z,Kr=new z;function sh(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Kr.fromArray(t,s);const a=r.x*Math.abs(Kr.x)+r.y*Math.abs(Kr.y)+r.z*Math.abs(Kr.z),l=e.dot(Kr),c=n.dot(Kr),u=i.dot(Kr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const gk=new Nl,ma=new z,oh=new z;class Ud{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):gk.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);const n=ma.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ma,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(oh)),this.expandByPoint(ma.copy(e.center).sub(oh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ri=new z,ah=new z,_c=new z,lr=new z,lh=new z,xc=new z,ch=new z;class bT{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,n),Ri.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ah.copy(e).add(n).multiplyScalar(.5),_c.copy(n).sub(e).normalize(),lr.copy(this.origin).sub(ah);const s=e.distanceTo(n)*.5,o=-this.direction.dot(_c),a=lr.dot(this.direction),l=-lr.dot(_c),c=lr.lengthSq(),u=Math.abs(1-o*o);let d,f,p,g;if(u>0)if(d=o*l-a,f=o*a-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ah).addScaledVector(_c,f),p}intersectSphere(e,n){Ri.subVectors(e.center,this.origin);const i=Ri.dot(this.direction),r=Ri.dot(Ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,n,i,r,s){lh.subVectors(n,e),xc.subVectors(i,e),ch.crossVectors(lh,xc);let o=this.direction.dot(ch),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;lr.subVectors(this.origin,e);const l=a*this.direction.dot(xc.crossVectors(lr,xc));if(l<0)return null;const c=a*this.direction.dot(lh.cross(lr));if(c<0||l+c>o)return null;const u=-a*lr.dot(ch);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,n,i,r,s,o,a,l,c,u,d,f,p,g,_,m){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,p,g,_,m)}set(e,n,i,r,s,o,a,l,c,u,d,f,p,g,_,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Gs.setFromMatrixColumn(e,0).length(),s=1/Gs.setFromMatrixColumn(e,1).length(),o=1/Gs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,g=a*u,_=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=f-_*c,n[9]=-a*l,n[2]=_-f*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,g=c*u,_=c*d;n[0]=f+_*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=_+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,g=c*u,_=c*d;n[0]=f-_*a,n[4]=-o*d,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=_-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,g=a*u,_=a*d;n[0]=l*u,n[4]=g*c-p,n[8]=f*c+_,n[1]=l*d,n[5]=_*c+f,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=_-f*d,n[8]=g*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+g,n[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+_,n[5]=o*u,n[9]=p*d-g,n[2]=g*d-p,n[6]=a*u,n[10]=_*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vk,e,yk)}lookAt(e,n,i){const r=this.elements;return bn.subVectors(e,n),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),cr.crossVectors(i,bn),cr.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),cr.crossVectors(i,bn)),cr.normalize(),Sc.crossVectors(bn,cr),r[0]=cr.x,r[4]=Sc.x,r[8]=bn.x,r[1]=cr.y,r[5]=Sc.y,r[9]=bn.y,r[2]=cr.z,r[6]=Sc.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],h=i[14],v=i[3],y=i[7],x=i[11],T=i[15],w=r[0],b=r[4],L=r[8],$=r[12],S=r[1],R=r[5],q=r[9],Z=r[13],N=r[2],X=r[6],W=r[10],Y=r[14],D=r[3],U=r[7],B=r[11],K=r[15];return s[0]=o*w+a*S+l*N+c*D,s[4]=o*b+a*R+l*X+c*U,s[8]=o*L+a*q+l*W+c*B,s[12]=o*$+a*Z+l*Y+c*K,s[1]=u*w+d*S+f*N+p*D,s[5]=u*b+d*R+f*X+p*U,s[9]=u*L+d*q+f*W+p*B,s[13]=u*$+d*Z+f*Y+p*K,s[2]=g*w+_*S+m*N+h*D,s[6]=g*b+_*R+m*X+h*U,s[10]=g*L+_*q+m*W+h*B,s[14]=g*$+_*Z+m*Y+h*K,s[3]=v*w+y*S+x*N+T*D,s[7]=v*b+y*R+x*X+T*U,s[11]=v*L+y*q+x*W+T*B,s[15]=v*$+y*Z+x*Y+T*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+_*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*d+n*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],v=d*m*c-_*f*c+_*l*p-a*m*p-d*l*h+a*f*h,y=g*f*c-u*m*c-g*l*p+o*m*p+u*l*h-o*f*h,x=u*_*c-g*d*c+g*a*p-o*_*p-u*a*h+o*d*h,T=g*d*l-u*_*l-g*a*f+o*_*f+u*a*m-o*d*m,w=n*v+i*y+r*x+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=v*b,e[1]=(_*f*s-d*m*s-_*r*p+i*m*p+d*r*h-i*f*h)*b,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*h+i*l*h)*b,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*b,e[4]=y*b,e[5]=(u*m*s-g*f*s+g*r*p-n*m*p-u*r*h+n*f*h)*b,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*h-n*l*h)*b,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*p+n*l*p)*b,e[8]=x*b,e[9]=(g*d*s-u*_*s-g*i*p+n*_*p+u*i*h-n*d*h)*b,e[10]=(o*_*s-g*a*s+g*i*c-n*_*c-o*i*h+n*a*h)*b,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*b,e[12]=T*b,e[13]=(u*_*r-g*d*r+g*i*f-n*_*f-u*i*m+n*d*m)*b,e[14]=(g*a*r-o*_*r-g*i*l+n*_*l+o*i*m-n*a*m)*b,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*f+n*a*f)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,g=s*d,_=o*u,m=o*d,h=a*d,v=l*c,y=l*u,x=l*d,T=i.x,w=i.y,b=i.z;return r[0]=(1-(_+h))*T,r[1]=(p+x)*T,r[2]=(g-y)*T,r[3]=0,r[4]=(p-x)*w,r[5]=(1-(f+h))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(g+y)*b,r[9]=(m-v)*b,r[10]=(1-(f+_))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Gs.set(r[0],r[1],r[2]).length();const o=Gs.set(r[4],r[5],r[6]).length(),a=Gs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Jn.copy(this);const c=1/s,u=1/o,d=1/a;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=u,Jn.elements[5]*=u,Jn.elements[6]*=u,Jn.elements[8]*=d,Jn.elements[9]*=d,Jn.elements[10]*=d,n.setFromRotationMatrix(Jn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Vi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,g;if(a===Vi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===qu)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Vi){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),f=(n+e)*c,p=(i+r)*u;let g,_;if(a===Vi)g=(o+s)*d,_=-2*d;else if(a===qu)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Gs=new z,Jn=new Bt,vk=new z(0,0,0),yk=new z(1,1,1),cr=new z,Sc=new z,bn=new z,Px=new Bt,Lx=new Dl;class kd{constructor(e=0,n=0,i=0,r=kd.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(vn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(vn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-vn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(vn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-vn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Px.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Px,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Lx.setFromEuler(this),this.setFromQuaternion(Lx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kd.DEFAULT_ORDER="XYZ";class AT{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _k=0;const Dx=new z,js=new Dl,Pi=new Bt,Ec=new z,ga=new z,xk=new z,Sk=new Dl,Nx=new z(1,0,0),Ix=new z(0,1,0),Ox=new z(0,0,1),Ek={type:"added"},Mk={type:"removed"};class wn extends Qo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_k++}),this.uuid=Ll(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const e=new z,n=new kd,i=new Dl,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Bt},normalMatrix:{value:new Ve}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new AT,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return js.setFromAxisAngle(e,n),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,n){return js.setFromAxisAngle(e,n),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(Nx,e)}rotateY(e){return this.rotateOnAxis(Ix,e)}rotateZ(e){return this.rotateOnAxis(Ox,e)}translateOnAxis(e,n){return Dx.copy(e).applyQuaternion(this.quaternion),this.position.add(Dx.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Nx,e)}translateY(e){return this.translateOnAxis(Ix,e)}translateZ(e){return this.translateOnAxis(Ox,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ec.copy(e):Ec.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(ga,Ec,this.up):Pi.lookAt(Ec,ga,this.up),this.quaternion.setFromRotationMatrix(Pi),r&&(Pi.extractRotation(r.matrixWorld),js.setFromRotationMatrix(Pi),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ek)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Mk)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,e,xk),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,Sk,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}wn.DEFAULT_UP=new z(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new z,Li=new z,uh=new z,Di=new z,Ws=new z,$s=new z,Ux=new z,dh=new z,fh=new z,hh=new z;class _i{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ei.subVectors(e,n),r.cross(ei);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ei.subVectors(r,n),Li.subVectors(i,n),uh.subVectors(e,n);const o=ei.dot(ei),a=ei.dot(Li),l=ei.dot(uh),c=Li.dot(Li),u=Li.dot(uh),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Di.x),l.addScaledVector(o,Di.y),l.addScaledVector(a,Di.z),l)}static isFrontFacing(e,n,i,r){return ei.subVectors(i,n),Li.subVectors(e,n),ei.cross(Li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ei.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return _i.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return _i.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ws.subVectors(r,i),$s.subVectors(s,i),dh.subVectors(e,i);const l=Ws.dot(dh),c=$s.dot(dh);if(l<=0&&c<=0)return n.copy(i);fh.subVectors(e,r);const u=Ws.dot(fh),d=$s.dot(fh);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ws,o);hh.subVectors(e,s);const p=Ws.dot(hh),g=$s.dot(hh);if(g>=0&&p<=g)return n.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector($s,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Ux.subVectors(s,r),a=(d-u)/(d-u+(p-g)),n.copy(r).addScaledVector(Ux,a);const h=1/(m+_+f);return o=_*h,a=f*h,n.copy(i).addScaledVector(Ws,o).addScaledVector($s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const CT={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},Mc={h:0,s:0,l:0};function ph(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=ck(e,1),n=vn(n,0,1),i=vn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ph(o,s,e+1/3),this.g=ph(o,s,e),this.b=ph(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=jt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=jt){const i=CT[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ro(e.r),this.g=Ro(e.g),this.b=Ro(e.b),this}copyLinearToSRGB(e){return this.r=nh(e.r),this.g=nh(e.g),this.b=nh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return et.fromWorkingColorSpace(Jt.copy(this),e),Math.round(vn(Jt.r*255,0,255))*65536+Math.round(vn(Jt.g*255,0,255))*256+Math.round(vn(Jt.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(Jt.copy(this),n);const i=Jt.r,r=Jt.g,s=Jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=jt){et.fromWorkingColorSpace(Jt.copy(this),e);const n=Jt.r,i=Jt.g,r=Jt.b;return e!==jt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ur),this.setHSL(ur.h+e,ur.s+n,ur.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ur),e.getHSL(Mc);const i=eh(ur.h,Mc.h,n),r=eh(ur.s,Mc.s,n),s=eh(ur.l,Mc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new Ze;Ze.NAMES=CT;let wk=0;class Il extends Qo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wk++}),this.uuid=Ll(),this.name="",this.type="Material",this.blending=Ao,this.side=kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tm,this.blendDst=nm,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=ju,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ex,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ao&&(i.blending=this.blending),this.side!==kr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==tm&&(i.blendSrc=this.blendSrc),this.blendDst!==nm&&(i.blendDst=this.blendDst),this.blendEquation!==as&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ju&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ex&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class RT extends Il{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dT,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new z,wc=new qe;class ui{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Mx,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Co("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)wc.fromBufferAttribute(this,n),wc.applyMatrix3(e),this.setXY(n,wc.x,wc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ha(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=pn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ha(n,this.array)),n}setX(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ha(n,this.array)),n}setY(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ha(n,this.array)),n}setZ(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ha(n,this.array)),n}setW(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array),s=pn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mx&&(e.usage=this.usage),e}}class PT extends ui{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class LT extends ui{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ss extends ui{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Tk=0;const Vn=new Bt,mh=new wn,Xs=new z,An=new Nl,va=new Nl,Ot=new z;class nr extends Qo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tk++}),this.uuid=Ll(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ET(e)?LT:PT)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,n,i){return Vn.makeTranslation(e,n,i),this.applyMatrix4(Vn),this}scale(e,n,i){return Vn.makeScale(e,n,i),this.applyMatrix4(Vn),this}lookAt(e){return mh.lookAt(e),mh.updateMatrix(),this.applyMatrix4(mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ss(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ud);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];va.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(An.min,va.min),An.expandByPoint(Ot),Ot.addVectors(An.max,va.max),An.expandByPoint(Ot)):(An.expandByPoint(va.min),An.expandByPoint(va.max))}An.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ot.fromBufferAttribute(a,c),l&&(Xs.fromBufferAttribute(e,c),Ot.add(Xs)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let S=0;S<a;S++)c[S]=new z,u[S]=new z;const d=new z,f=new z,p=new z,g=new qe,_=new qe,m=new qe,h=new z,v=new z;function y(S,R,q){d.fromArray(r,S*3),f.fromArray(r,R*3),p.fromArray(r,q*3),g.fromArray(o,S*2),_.fromArray(o,R*2),m.fromArray(o,q*2),f.sub(d),p.sub(d),_.sub(g),m.sub(g);const Z=1/(_.x*m.y-m.x*_.y);isFinite(Z)&&(h.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(Z),v.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(Z),c[S].add(h),c[R].add(h),c[q].add(h),u[S].add(v),u[R].add(v),u[q].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let S=0,R=x.length;S<R;++S){const q=x[S],Z=q.start,N=q.count;for(let X=Z,W=Z+N;X<W;X+=3)y(i[X+0],i[X+1],i[X+2])}const T=new z,w=new z,b=new z,L=new z;function $(S){b.fromArray(s,S*3),L.copy(b);const R=c[S];T.copy(R),T.sub(b.multiplyScalar(b.dot(R))).normalize(),w.crossVectors(L,R);const Z=w.dot(u[S])<0?-1:1;l[S*4]=T.x,l[S*4+1]=T.y,l[S*4+2]=T.z,l[S*4+3]=Z}for(let S=0,R=x.length;S<R;++S){const q=x[S],Z=q.start,N=q.count;for(let X=Z,W=Z+N;X<W;X+=3)$(i[X+0]),$(i[X+1]),$(i[X+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ui(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,d=new z;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let h=0;h<u;h++)f[g++]=c[p++]}return new ui(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new nr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kx=new Bt,Zr=new bT,Tc=new Ud,Fx=new z,qs=new z,Ys=new z,Ks=new z,gh=new z,bc=new z,Ac=new qe,Cc=new qe,Rc=new qe,Bx=new z,zx=new z,Vx=new z,Pc=new z,Lc=new z;class Hi extends wn{constructor(e=new nr,n=new RT){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){bc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(gh.fromBufferAttribute(d,e),o?bc.addScaledVector(gh,u):bc.addScaledVector(gh.sub(n),u))}n.add(bc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tc.copy(i.boundingSphere),Tc.applyMatrix4(s),Zr.copy(e.ray).recast(e.near),!(Tc.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(Tc,Fx)===null||Zr.origin.distanceToSquared(Fx)>(e.far-e.near)**2))&&(kx.copy(s).invert(),Zr.copy(e.ray).applyMatrix4(kx),!(i.boundingBox!==null&&Zr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Zr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,T=y;x<T;x+=3){const w=a.getX(x),b=a.getX(x+1),L=a.getX(x+2);r=Dc(this,h,e,i,c,u,d,w,b,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);r=Dc(this,o,e,i,c,u,d,v,y,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,T=y;x<T;x+=3){const w=x,b=x+1,L=x+2;r=Dc(this,h,e,i,c,u,d,w,b,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const v=m,y=m+1,x=m+2;r=Dc(this,o,e,i,c,u,d,v,y,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function bk(t,e,n,i,r,s,o,a){let l;if(e.side===En?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===kr,a),l===null)return null;Lc.copy(a),Lc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Lc);return c<n.near||c>n.far?null:{distance:c,point:Lc.clone(),object:t}}function Dc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,qs),t.getVertexPosition(l,Ys),t.getVertexPosition(c,Ks);const u=bk(t,e,n,i,qs,Ys,Ks,Pc);if(u){r&&(Ac.fromBufferAttribute(r,a),Cc.fromBufferAttribute(r,l),Rc.fromBufferAttribute(r,c),u.uv=_i.getInterpolation(Pc,qs,Ys,Ks,Ac,Cc,Rc,new qe)),s&&(Ac.fromBufferAttribute(s,a),Cc.fromBufferAttribute(s,l),Rc.fromBufferAttribute(s,c),u.uv1=_i.getInterpolation(Pc,qs,Ys,Ks,Ac,Cc,Rc,new qe),u.uv2=u.uv1),o&&(Bx.fromBufferAttribute(o,a),zx.fromBufferAttribute(o,l),Vx.fromBufferAttribute(o,c),u.normal=_i.getInterpolation(Pc,qs,Ys,Ks,Bx,zx,Vx,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new z,materialIndex:0};_i.getNormal(qs,Ys,Ks,d.normal),u.face=d}return u}class Ol extends nr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ss(c,3)),this.setAttribute("normal",new Ss(u,3)),this.setAttribute("uv",new Ss(d,2));function g(_,m,h,v,y,x,T,w,b,L,$){const S=x/b,R=T/L,q=x/2,Z=T/2,N=w/2,X=b+1,W=L+1;let Y=0,D=0;const U=new z;for(let B=0;B<W;B++){const K=B*R-Z;for(let ne=0;ne<X;ne++){const Te=ne*S-q;U[_]=Te*v,U[m]=K*y,U[h]=N,c.push(U.x,U.y,U.z),U[_]=0,U[m]=0,U[h]=w>0?1:-1,u.push(U.x,U.y,U.z),d.push(ne/b),d.push(1-B/L),Y+=1}}for(let B=0;B<L;B++)for(let K=0;K<b;K++){const ne=f+K+X*B,Te=f+K+X*(B+1),G=f+(K+1)+X*(B+1),Q=f+(K+1)+X*B;l.push(ne,Te,Q),l.push(Te,G,Q),D+=6}a.addGroup(p,D,$),p+=D,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function jo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function an(t){const e={};for(let n=0;n<t.length;n++){const i=jo(t[n]);for(const r in i)e[r]=i[r]}return e}function Ak(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function DT(t){return t.getRenderTarget()===null?t.outputColorSpace:et.workingColorSpace}const Ck={clone:jo,merge:an};var Rk=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pk=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fr extends Il{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rk,this.fragmentShader=Pk,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jo(e.uniforms),this.uniformsGroups=Ak(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class NT extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const dr=new z,Hx=new qe,Gx=new qe;class Wn extends NT{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=lm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lm*2*Math.atan(Math.tan(Jf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dr.x,dr.y).multiplyScalar(-e/dr.z),dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(dr.x,dr.y).multiplyScalar(-e/dr.z)}getViewSize(e,n){return this.getViewBounds(e,Hx,Gx),n.subVectors(Gx,Hx)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Jf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Zs=-90,Qs=1;class Lk extends wn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Wn(Zs,Qs,e,n);r.layers=this.layers,this.add(r);const s=new Wn(Zs,Qs,e,n);s.layers=this.layers,this.add(s);const o=new Wn(Zs,Qs,e,n);o.layers=this.layers,this.add(o);const a=new Wn(Zs,Qs,e,n);a.layers=this.layers,this.add(a);const l=new Wn(Zs,Qs,e,n);l.layers=this.layers,this.add(l);const c=new Wn(Zs,Qs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class IT extends Mn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Vo,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dk extends Ps{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Co("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===xs?jt:$n),this.texture=new IT(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:mn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ol(5,5,5),s=new Fr({name:"CubemapFromEquirect",uniforms:jo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Rr});s.uniforms.tEquirect.value=n;const o=new Hi(r,s),a=n.minFilter;return n.minFilter===hs&&(n.minFilter=mn),new Lk(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const vh=new z,Nk=new z,Ik=new Ve;class rs{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=vh.subVectors(i,n).cross(Nk.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(vh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Ik.getNormalMatrix(e),r=this.coplanarPoint(vh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qr=new Ud,Nc=new z;class OT{constructor(e=new rs,n=new rs,i=new rs,r=new rs,s=new rs,o=new rs){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Vi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],g=r[9],_=r[10],m=r[11],h=r[12],v=r[13],y=r[14],x=r[15];if(i[0].setComponents(l-s,f-c,m-p,x-h).normalize(),i[1].setComponents(l+s,f+c,m+p,x+h).normalize(),i[2].setComponents(l+o,f+u,m+g,x+v).normalize(),i[3].setComponents(l-o,f-u,m-g,x-v).normalize(),i[4].setComponents(l-a,f-d,m-_,x-y).normalize(),n===Vi)i[5].setComponents(l+a,f+d,m+_,x+y).normalize();else if(n===qu)i[5].setComponents(a,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){return Qr.center.set(0,0,0),Qr.radius=.7071067811865476,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Nc.x=r.normal.x>0?e.max.x:e.min.x,Nc.y=r.normal.y>0?e.max.y:e.min.y,Nc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Nc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function UT(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Ok(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,f=c.usage,p=d.byteLength,g=t.createBuffer();t.bindBuffer(u,g),t.bufferData(u,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=t.SHORT;else if(d instanceof Uint32Array)_=t.UNSIGNED_INT;else if(d instanceof Int32Array)_=t.INT;else if(d instanceof Int8Array)_=t.BYTE;else if(d instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,d){const f=u.array,p=u._updateRange,g=u.updateRanges;if(t.bindBuffer(d,c),p.count===-1&&g.length===0&&t.bufferSubData(d,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){const h=g[_];n?t.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f,h.start,h.count):t.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):t.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,u),d.version=c.version}}return{get:o,remove:a,update:l}}class Fd extends nr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,p=[],g=[],_=[],m=[];for(let h=0;h<u;h++){const v=h*f-o;for(let y=0;y<c;y++){const x=y*d-s;g.push(x,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const y=v+c*h,x=v+c*(h+1),T=v+1+c*(h+1),w=v+1+c*h;p.push(y,x,w),p.push(x,T,w)}this.setIndex(p),this.setAttribute("position",new Ss(g,3)),this.setAttribute("normal",new Ss(_,3)),this.setAttribute("uv",new Ss(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fd(e.width,e.height,e.widthSegments,e.heightSegments)}}var Uk=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kk=`#ifdef USE_ALPHAHASH
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
#endif`,Fk=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bk=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zk=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vk=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hk=`#ifdef USE_AOMAP
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
#endif`,Gk=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jk=`#ifdef USE_BATCHING
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
#endif`,Wk=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$k=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xk=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qk=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yk=`#ifdef USE_IRIDESCENCE
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
#endif`,Kk=`#ifdef USE_BUMPMAP
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
#endif`,Zk=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qk=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jk=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eF=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tF=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nF=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iF=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,rF=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sF=`#define PI 3.141592653589793
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
} // validated`,oF=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,aF=`vec3 transformedNormal = objectNormal;
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
#endif`,lF=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cF=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uF=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dF=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fF="gl_FragColor = linearToOutputTexel( gl_FragColor );",hF=`
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
}`,pF=`#ifdef USE_ENVMAP
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
#endif`,mF=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gF=`#ifdef USE_ENVMAP
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
#endif`,vF=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yF=`#ifdef USE_ENVMAP
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
#endif`,_F=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xF=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SF=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,EF=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MF=`#ifdef USE_GRADIENTMAP
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
}`,wF=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,TF=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bF=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AF=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CF=`uniform bool receiveShadow;
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
#endif`,RF=`#ifdef USE_ENVMAP
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
#endif`,PF=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LF=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DF=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NF=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IF=`PhysicalMaterial material;
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
#endif`,OF=`struct PhysicalMaterial {
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
}`,UF=`
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
#endif`,kF=`#if defined( RE_IndirectDiffuse )
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
#endif`,FF=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,BF=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zF=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VF=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,HF=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,GF=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jF=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WF=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$F=`#if defined( USE_POINTS_UV )
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
#endif`,XF=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qF=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YF=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KF=`#ifdef USE_MORPHNORMALS
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
#endif`,ZF=`#ifdef USE_MORPHTARGETS
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
#endif`,QF=`#ifdef USE_MORPHTARGETS
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
#endif`,JF=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eB=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tB=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nB=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iB=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rB=`#ifdef USE_NORMALMAP
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
#endif`,sB=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oB=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aB=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lB=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cB=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uB=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dB=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fB=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hB=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pB=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mB=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gB=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vB=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yB=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_B=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xB=`float getShadowMask() {
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
}`,SB=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,EB=`#ifdef USE_SKINNING
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
#endif`,MB=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wB=`#ifdef USE_SKINNING
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
#endif`,TB=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bB=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AB=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CB=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,RB=`#ifdef USE_TRANSMISSION
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
#endif`,PB=`#ifdef USE_TRANSMISSION
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
#endif`,LB=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DB=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NB=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IB=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OB=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UB=`uniform sampler2D t2D;
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
}`,kB=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FB=`#ifdef ENVMAP_TYPE_CUBE
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
}`,BB=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zB=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VB=`#include <common>
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
}`,HB=`#if DEPTH_PACKING == 3200
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
}`,GB=`#define DISTANCE
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
}`,jB=`#define DISTANCE
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
}`,WB=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$B=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XB=`uniform float scale;
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
}`,qB=`uniform vec3 diffuse;
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
}`,YB=`#include <common>
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
}`,KB=`uniform vec3 diffuse;
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
}`,ZB=`#define LAMBERT
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
}`,QB=`#define LAMBERT
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
}`,JB=`#define MATCAP
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
}`,e4=`#define MATCAP
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
}`,t4=`#define NORMAL
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
}`,n4=`#define NORMAL
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
}`,i4=`#define PHONG
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
}`,r4=`#define PHONG
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
}`,s4=`#define STANDARD
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
}`,o4=`#define STANDARD
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
}`,a4=`#define TOON
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
}`,l4=`#define TOON
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
}`,c4=`uniform float size;
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
}`,u4=`uniform vec3 diffuse;
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
}`,d4=`#include <common>
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
}`,f4=`uniform vec3 color;
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
}`,h4=`uniform float rotation;
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
}`,p4=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:Uk,alphahash_pars_fragment:kk,alphamap_fragment:Fk,alphamap_pars_fragment:Bk,alphatest_fragment:zk,alphatest_pars_fragment:Vk,aomap_fragment:Hk,aomap_pars_fragment:Gk,batching_pars_vertex:jk,batching_vertex:Wk,begin_vertex:$k,beginnormal_vertex:Xk,bsdfs:qk,iridescence_fragment:Yk,bumpmap_pars_fragment:Kk,clipping_planes_fragment:Zk,clipping_planes_pars_fragment:Qk,clipping_planes_pars_vertex:Jk,clipping_planes_vertex:eF,color_fragment:tF,color_pars_fragment:nF,color_pars_vertex:iF,color_vertex:rF,common:sF,cube_uv_reflection_fragment:oF,defaultnormal_vertex:aF,displacementmap_pars_vertex:lF,displacementmap_vertex:cF,emissivemap_fragment:uF,emissivemap_pars_fragment:dF,colorspace_fragment:fF,colorspace_pars_fragment:hF,envmap_fragment:pF,envmap_common_pars_fragment:mF,envmap_pars_fragment:gF,envmap_pars_vertex:vF,envmap_physical_pars_fragment:RF,envmap_vertex:yF,fog_vertex:_F,fog_pars_vertex:xF,fog_fragment:SF,fog_pars_fragment:EF,gradientmap_pars_fragment:MF,lightmap_fragment:wF,lightmap_pars_fragment:TF,lights_lambert_fragment:bF,lights_lambert_pars_fragment:AF,lights_pars_begin:CF,lights_toon_fragment:PF,lights_toon_pars_fragment:LF,lights_phong_fragment:DF,lights_phong_pars_fragment:NF,lights_physical_fragment:IF,lights_physical_pars_fragment:OF,lights_fragment_begin:UF,lights_fragment_maps:kF,lights_fragment_end:FF,logdepthbuf_fragment:BF,logdepthbuf_pars_fragment:zF,logdepthbuf_pars_vertex:VF,logdepthbuf_vertex:HF,map_fragment:GF,map_pars_fragment:jF,map_particle_fragment:WF,map_particle_pars_fragment:$F,metalnessmap_fragment:XF,metalnessmap_pars_fragment:qF,morphcolor_vertex:YF,morphnormal_vertex:KF,morphtarget_pars_vertex:ZF,morphtarget_vertex:QF,normal_fragment_begin:JF,normal_fragment_maps:eB,normal_pars_fragment:tB,normal_pars_vertex:nB,normal_vertex:iB,normalmap_pars_fragment:rB,clearcoat_normal_fragment_begin:sB,clearcoat_normal_fragment_maps:oB,clearcoat_pars_fragment:aB,iridescence_pars_fragment:lB,opaque_fragment:cB,packing:uB,premultiplied_alpha_fragment:dB,project_vertex:fB,dithering_fragment:hB,dithering_pars_fragment:pB,roughnessmap_fragment:mB,roughnessmap_pars_fragment:gB,shadowmap_pars_fragment:vB,shadowmap_pars_vertex:yB,shadowmap_vertex:_B,shadowmask_pars_fragment:xB,skinbase_vertex:SB,skinning_pars_vertex:EB,skinning_vertex:MB,skinnormal_vertex:wB,specularmap_fragment:TB,specularmap_pars_fragment:bB,tonemapping_fragment:AB,tonemapping_pars_fragment:CB,transmission_fragment:RB,transmission_pars_fragment:PB,uv_pars_fragment:LB,uv_pars_vertex:DB,uv_vertex:NB,worldpos_vertex:IB,background_vert:OB,background_frag:UB,backgroundCube_vert:kB,backgroundCube_frag:FB,cube_vert:BB,cube_frag:zB,depth_vert:VB,depth_frag:HB,distanceRGBA_vert:GB,distanceRGBA_frag:jB,equirect_vert:WB,equirect_frag:$B,linedashed_vert:XB,linedashed_frag:qB,meshbasic_vert:YB,meshbasic_frag:KB,meshlambert_vert:ZB,meshlambert_frag:QB,meshmatcap_vert:JB,meshmatcap_frag:e4,meshnormal_vert:t4,meshnormal_frag:n4,meshphong_vert:i4,meshphong_frag:r4,meshphysical_vert:s4,meshphysical_frag:o4,meshtoon_vert:a4,meshtoon_frag:l4,points_vert:c4,points_frag:u4,shadow_vert:d4,shadow_frag:f4,sprite_vert:h4,sprite_frag:p4},ae={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},vi={basic:{uniforms:an([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:an([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:an([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:an([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:an([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:an([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:an([ae.points,ae.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:an([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:an([ae.common,ae.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:an([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:an([ae.sprite,ae.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:an([ae.common,ae.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:an([ae.lights,ae.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};vi.physical={uniforms:an([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Ic={r:0,b:0,g:0};function m4(t,e,n,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function g(m,h){let v=!1,y=h.isScene===!0?h.background:null;y&&y.isTexture&&(y=(h.backgroundBlurriness>0?n:e).get(y)),y===null?_(a,l):y&&y.isColor&&(_(y,1),v=!0);const x=t.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Id)?(u===void 0&&(u=new Hi(new Ol(1,1,1),new Fr({name:"BackgroundCubeMaterial",uniforms:jo(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=et.getTransfer(y.colorSpace)!==lt,(d!==y||f!==y.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Hi(new Fd(2,2),new Fr({name:"BackgroundMaterial",uniforms:jo(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=et.getTransfer(y.colorSpace)!==lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,h){m.getRGB(Ic,DT(t)),i.buffers.color.setClear(Ic.r,Ic.g,Ic.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function g4(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function d(N,X,W,Y,D){let U=!1;if(o){const B=_(Y,W,X);c!==B&&(c=B,p(c.object)),U=h(N,Y,W,D),U&&v(N,Y,W,D)}else{const B=X.wireframe===!0;(c.geometry!==Y.id||c.program!==W.id||c.wireframe!==B)&&(c.geometry=Y.id,c.program=W.id,c.wireframe=B,U=!0)}D!==null&&n.update(D,t.ELEMENT_ARRAY_BUFFER),(U||u)&&(u=!1,L(N,X,W,Y),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(D).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(N){return i.isWebGL2?t.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return i.isWebGL2?t.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function _(N,X,W){const Y=W.wireframe===!0;let D=a[N.id];D===void 0&&(D={},a[N.id]=D);let U=D[X.id];U===void 0&&(U={},D[X.id]=U);let B=U[Y];return B===void 0&&(B=m(f()),U[Y]=B),B}function m(N){const X=[],W=[],Y=[];for(let D=0;D<r;D++)X[D]=0,W[D]=0,Y[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:W,attributeDivisors:Y,object:N,attributes:{},index:null}}function h(N,X,W,Y){const D=c.attributes,U=X.attributes;let B=0;const K=W.getAttributes();for(const ne in K)if(K[ne].location>=0){const G=D[ne];let Q=U[ne];if(Q===void 0&&(ne==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),ne==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),G===void 0||G.attribute!==Q||Q&&G.data!==Q.data)return!0;B++}return c.attributesNum!==B||c.index!==Y}function v(N,X,W,Y){const D={},U=X.attributes;let B=0;const K=W.getAttributes();for(const ne in K)if(K[ne].location>=0){let G=U[ne];G===void 0&&(ne==="instanceMatrix"&&N.instanceMatrix&&(G=N.instanceMatrix),ne==="instanceColor"&&N.instanceColor&&(G=N.instanceColor));const Q={};Q.attribute=G,G&&G.data&&(Q.data=G.data),D[ne]=Q,B++}c.attributes=D,c.attributesNum=B,c.index=Y}function y(){const N=c.newAttributes;for(let X=0,W=N.length;X<W;X++)N[X]=0}function x(N){T(N,0)}function T(N,X){const W=c.newAttributes,Y=c.enabledAttributes,D=c.attributeDivisors;W[N]=1,Y[N]===0&&(t.enableVertexAttribArray(N),Y[N]=1),D[N]!==X&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,X),D[N]=X)}function w(){const N=c.newAttributes,X=c.enabledAttributes;for(let W=0,Y=X.length;W<Y;W++)X[W]!==N[W]&&(t.disableVertexAttribArray(W),X[W]=0)}function b(N,X,W,Y,D,U,B){B===!0?t.vertexAttribIPointer(N,X,W,D,U):t.vertexAttribPointer(N,X,W,Y,D,U)}function L(N,X,W,Y){if(i.isWebGL2===!1&&(N.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const D=Y.attributes,U=W.getAttributes(),B=X.defaultAttributeValues;for(const K in U){const ne=U[K];if(ne.location>=0){let Te=D[K];if(Te===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(Te=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(Te=N.instanceColor)),Te!==void 0){const G=Te.normalized,Q=Te.itemSize,ce=n.get(Te);if(ce===void 0)continue;const _e=ce.buffer,be=ce.type,me=ce.bytesPerElement,$e=i.isWebGL2===!0&&(be===t.INT||be===t.UNSIGNED_INT||Te.gpuType===hT);if(Te.isInterleavedBufferAttribute){const Ne=Te.data,O=Ne.stride,zt=Te.offset;if(Ne.isInstancedInterleavedBuffer){for(let Ee=0;Ee<ne.locationSize;Ee++)T(ne.location+Ee,Ne.meshPerAttribute);N.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let Ee=0;Ee<ne.locationSize;Ee++)x(ne.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,_e);for(let Ee=0;Ee<ne.locationSize;Ee++)b(ne.location+Ee,Q/ne.locationSize,be,G,O*me,(zt+Q/ne.locationSize*Ee)*me,$e)}else{if(Te.isInstancedBufferAttribute){for(let Ne=0;Ne<ne.locationSize;Ne++)T(ne.location+Ne,Te.meshPerAttribute);N.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Ne=0;Ne<ne.locationSize;Ne++)x(ne.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,_e);for(let Ne=0;Ne<ne.locationSize;Ne++)b(ne.location+Ne,Q/ne.locationSize,be,G,Q*me,Q/ne.locationSize*Ne*me,$e)}}else if(B!==void 0){const G=B[K];if(G!==void 0)switch(G.length){case 2:t.vertexAttrib2fv(ne.location,G);break;case 3:t.vertexAttrib3fv(ne.location,G);break;case 4:t.vertexAttrib4fv(ne.location,G);break;default:t.vertexAttrib1fv(ne.location,G)}}}}w()}function $(){q();for(const N in a){const X=a[N];for(const W in X){const Y=X[W];for(const D in Y)g(Y[D].object),delete Y[D];delete X[W]}delete a[N]}}function S(N){if(a[N.id]===void 0)return;const X=a[N.id];for(const W in X){const Y=X[W];for(const D in Y)g(Y[D].object),delete Y[D];delete X[W]}delete a[N.id]}function R(N){for(const X in a){const W=a[X];if(W[N.id]===void 0)continue;const Y=W[N.id];for(const D in Y)g(Y[D].object),delete Y[D];delete W[N.id]}}function q(){Z(),u=!0,c!==l&&(c=l,p(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:Z,dispose:$,releaseStatesOfGeometry:S,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:x,disableUnusedAttributes:w}}function v4(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,d){t.drawArrays(s,u,d),n.update(d,s,1)}function l(u,d,f){if(f===0)return;let p,g;if(r)p=t,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,u,d,f),n.update(d,s,f)}function c(u,d,f){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(u[g],d[g]);else{p.multiDrawArraysWEBGL(s,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_];n.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function y4(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,x=o||e.has("OES_texture_float"),T=y&&x,w=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:T,maxSamples:w}}function _4(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new rs,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,y=v*4;let x=h.clippingState||null;l.value=x,x=u(g,f,y,p);for(let T=0;T!==y;++T)x[T]=n[T];h.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const h=p+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,x=p;y!==_;++y,x+=4)o.copy(d[y]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function x4(t){let e=new WeakMap;function n(o,a){return a===im?o.mapping=Vo:a===rm&&(o.mapping=Ho),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===im||a===rm)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Dk(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class S4 extends NT{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const yo=4,jx=[.125,.215,.35,.446,.526,.582],ls=20,yh=new S4,Wx=new Ze;let _h=null,xh=0,Sh=0;const ss=(1+Math.sqrt(5))/2,Js=1/ss,$x=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,ss,Js),new z(0,ss,-Js),new z(Js,0,ss),new z(-Js,0,ss),new z(ss,Js,0),new z(-ss,Js,0)];class Xx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){_h=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_h,xh,Sh),e.scissorTest=!1,Oc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vo||e.mapping===Ho?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_h=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:ul,format:ai,colorSpace:Ji,depthBuffer:!1},r=qx(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qx(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=E4(s)),this._blurMaterial=M4(s,e,n)}return r}_compileMaterial(e){const n=new Hi(this._lodPlanes[0],e);this._renderer.compile(n,yh)}_sceneToCubeUV(e,n,i,r){const a=new Wn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Wx),u.toneMapping=Pr,u.autoClear=!1;const p=new RT({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),g=new Hi(new Ol,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Wx),_=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const y=this._cubeSize;Oc(r,v*y,h>2?y:0,y,y),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Vo||e.mapping===Ho;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yx());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Hi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Oc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,yh)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=$x[(r-1)%$x.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Hi(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ls-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):ls;m>ls&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ls}`);const h=[];let v=0;for(let b=0;b<ls;++b){const L=b/_,$=Math.exp(-L*L/2);h.push($),b===0?v+=$:b<m&&(v+=2*$)}for(let b=0;b<h.length;b++)h[b]=h[b]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const x=this._sizeLods[r],T=3*x*(r>y-yo?r-y+yo:0),w=4*(this._cubeSize-x);Oc(n,T,w,3*x,2*x),l.setRenderTarget(n),l.render(d,yh)}}function E4(t){const e=[],n=[],i=[];let r=t;const s=t-yo+1+jx.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-yo?l=jx[o-t+yo-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,_=3,m=2,h=1,v=new Float32Array(_*g*p),y=new Float32Array(m*g*p),x=new Float32Array(h*g*p);for(let w=0;w<p;w++){const b=w%3*2/3-1,L=w>2?0:-1,$=[b,L,0,b+2/3,L,0,b+2/3,L+1,0,b,L,0,b+2/3,L+1,0,b,L+1,0];v.set($,_*g*w),y.set(f,m*g*w);const S=[w,w,w,w,w,w];x.set(S,h*g*w)}const T=new nr;T.setAttribute("position",new ui(v,_)),T.setAttribute("uv",new ui(y,m)),T.setAttribute("faceIndex",new ui(x,h)),e.push(T),r>yo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function qx(t,e,n){const i=new Ps(t,e,n);return i.texture.mapping=Id,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Oc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function M4(t,e,n){const i=new Float32Array(ls),r=new z(0,1,0);return new Fr({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dv(),fragmentShader:`

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
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function Yx(){return new Fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dv(),fragmentShader:`

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
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function Kx(){return new Fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function dv(){return`

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
	`}function w4(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===im||l===rm,u=l===Vo||l===Ho;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new Xx(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&r(d)){n===null&&(n=new Xx(t));const f=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function T4(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function b4(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,h=_.length;m<h;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,h=_.length;m<h;m++)e.update(_[m],t.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let y=0,x=v.length;y<x;y+=3){const T=v[y+0],w=v[y+1],b=v[y+2];f.push(T,w,w,b,b,T)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const T=y+0,w=y+1,b=y+2;f.push(T,w,w,b,b,T)}}else return;const m=new(ET(f)?LT:PT)(f,1);m.version=_;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function A4(t,e,n,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,g){t.drawElements(s,g,a,p*l),n.update(g,s,1)}function d(p,g,_){if(_===0)return;let m,h;if(r)m=t,h="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](s,g,a,p*l,_),n.update(g,s,_)}function f(p,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<_;h++)this.render(p[h]/l,g[h]);else{m.multiDrawElementsWEBGL(s,g,0,a,p,0,_);let h=0;for(let v=0;v<_;v++)h+=g[v];n.update(h,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function C4(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function R4(t,e){return t[0]-e[0]}function P4(t,e){return Math.abs(e[1])-Math.abs(t[1])}function L4(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new $t,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let X=function(){Z.dispose(),s.delete(u),u.removeEventListener("dispose",X)};var p=X;m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let $=0;y===!0&&($=1),x===!0&&($=2),T===!0&&($=3);let S=u.attributes.position.count*$,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const q=new Float32Array(S*R*4*_),Z=new TT(q,S,R,_);Z.type=Fi,Z.needsUpdate=!0;const N=$*4;for(let W=0;W<_;W++){const Y=w[W],D=b[W],U=L[W],B=S*R*4*W;for(let K=0;K<Y.count;K++){const ne=K*N;y===!0&&(o.fromBufferAttribute(Y,K),q[B+ne+0]=o.x,q[B+ne+1]=o.y,q[B+ne+2]=o.z,q[B+ne+3]=0),x===!0&&(o.fromBufferAttribute(D,K),q[B+ne+4]=o.x,q[B+ne+5]=o.y,q[B+ne+6]=o.z,q[B+ne+7]=0),T===!0&&(o.fromBufferAttribute(U,K),q[B+ne+8]=o.x,q[B+ne+9]=o.y,q[B+ne+10]=o.z,q[B+ne+11]=U.itemSize===4?o.w:1)}}m={count:_,texture:Z,size:new qe(S,R)},s.set(u,m),u.addEventListener("dispose",X)}let h=0;for(let y=0;y<f.length;y++)h+=f[y];const v=u.morphTargetsRelative?1:1-h;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",f),d.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let _=i[u.id];if(_===void 0||_.length!==g){_=[];for(let x=0;x<g;x++)_[x]=[x,0];i[u.id]=_}for(let x=0;x<g;x++){const T=_[x];T[0]=x,T[1]=f[x]}_.sort(P4);for(let x=0;x<8;x++)x<g&&_[x][1]?(a[x][0]=_[x][0],a[x][1]=_[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(R4);const m=u.morphAttributes.position,h=u.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const T=a[x],w=T[0],b=T[1];w!==Number.MAX_SAFE_INTEGER&&b?(m&&u.getAttribute("morphTarget"+x)!==m[w]&&u.setAttribute("morphTarget"+x,m[w]),h&&u.getAttribute("morphNormal"+x)!==h[w]&&u.setAttribute("morphNormal"+x,h[w]),r[x]=b,v+=b):(m&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),h&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const y=u.morphTargetsRelative?1:1-v;d.getUniforms().setValue(t,"morphTargetBaseInfluence",y),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function D4(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class kT extends Mn{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:_s,u!==_s&&u!==Go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===_s&&(i=xr),i===void 0&&u===Go&&(i=ys),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const FT=new Mn,BT=new kT(1,1);BT.compareFunction=ST;const zT=new TT,VT=new mk,HT=new IT,Zx=[],Qx=[],Jx=new Float32Array(16),eS=new Float32Array(9),tS=new Float32Array(4);function Jo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Zx[r];if(s===void 0&&(s=new Float32Array(r),Zx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Nt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Bd(t,e){let n=Qx[e];n===void 0&&(n=new Int32Array(e),Qx[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function N4(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function I4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),Nt(n,e)}}function O4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),Nt(n,e)}}function U4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),Nt(n,e)}}function k4(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nt(n,e)}else{if(Dt(n,i))return;tS.set(i),t.uniformMatrix2fv(this.addr,!1,tS),Nt(n,i)}}function F4(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nt(n,e)}else{if(Dt(n,i))return;eS.set(i),t.uniformMatrix3fv(this.addr,!1,eS),Nt(n,i)}}function B4(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nt(n,e)}else{if(Dt(n,i))return;Jx.set(i),t.uniformMatrix4fv(this.addr,!1,Jx),Nt(n,i)}}function z4(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function V4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),Nt(n,e)}}function H4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),Nt(n,e)}}function G4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),Nt(n,e)}}function j4(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function W4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),Nt(n,e)}}function $4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),Nt(n,e)}}function X4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),Nt(n,e)}}function q4(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?BT:FT;n.setTexture2D(e||s,r)}function Y4(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||VT,r)}function K4(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||HT,r)}function Z4(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||zT,r)}function Q4(t){switch(t){case 5126:return N4;case 35664:return I4;case 35665:return O4;case 35666:return U4;case 35674:return k4;case 35675:return F4;case 35676:return B4;case 5124:case 35670:return z4;case 35667:case 35671:return V4;case 35668:case 35672:return H4;case 35669:case 35673:return G4;case 5125:return j4;case 36294:return W4;case 36295:return $4;case 36296:return X4;case 35678:case 36198:case 36298:case 36306:case 35682:return q4;case 35679:case 36299:case 36307:return Y4;case 35680:case 36300:case 36308:case 36293:return K4;case 36289:case 36303:case 36311:case 36292:return Z4}}function J4(t,e){t.uniform1fv(this.addr,e)}function ez(t,e){const n=Jo(e,this.size,2);t.uniform2fv(this.addr,n)}function tz(t,e){const n=Jo(e,this.size,3);t.uniform3fv(this.addr,n)}function nz(t,e){const n=Jo(e,this.size,4);t.uniform4fv(this.addr,n)}function iz(t,e){const n=Jo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function rz(t,e){const n=Jo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function sz(t,e){const n=Jo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function oz(t,e){t.uniform1iv(this.addr,e)}function az(t,e){t.uniform2iv(this.addr,e)}function lz(t,e){t.uniform3iv(this.addr,e)}function cz(t,e){t.uniform4iv(this.addr,e)}function uz(t,e){t.uniform1uiv(this.addr,e)}function dz(t,e){t.uniform2uiv(this.addr,e)}function fz(t,e){t.uniform3uiv(this.addr,e)}function hz(t,e){t.uniform4uiv(this.addr,e)}function pz(t,e,n){const i=this.cache,r=e.length,s=Bd(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||FT,s[o])}function mz(t,e,n){const i=this.cache,r=e.length,s=Bd(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||VT,s[o])}function gz(t,e,n){const i=this.cache,r=e.length,s=Bd(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||HT,s[o])}function vz(t,e,n){const i=this.cache,r=e.length,s=Bd(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||zT,s[o])}function yz(t){switch(t){case 5126:return J4;case 35664:return ez;case 35665:return tz;case 35666:return nz;case 35674:return iz;case 35675:return rz;case 35676:return sz;case 5124:case 35670:return oz;case 35667:case 35671:return az;case 35668:case 35672:return lz;case 35669:case 35673:return cz;case 5125:return uz;case 36294:return dz;case 36295:return fz;case 36296:return hz;case 35678:case 36198:case 36298:case 36306:case 35682:return pz;case 35679:case 36299:case 36307:return mz;case 35680:case 36300:case 36308:case 36293:return gz;case 36289:case 36303:case 36311:case 36292:return vz}}class _z{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Q4(n.type)}}class xz{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=yz(n.type)}}class Sz{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Eh=/(\w+)(\])?(\[|\.)?/g;function nS(t,e){t.seq.push(e),t.map[e.id]=e}function Ez(t,e,n){const i=t.name,r=i.length;for(Eh.lastIndex=0;;){const s=Eh.exec(i),o=Eh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){nS(n,c===void 0?new _z(a,t,e):new xz(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new Sz(a),nS(n,d)),n=d}}}class iu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Ez(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function iS(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Mz=37297;let wz=0;function Tz(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function bz(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===Xu&&n===$u?i="LinearDisplayP3ToLinearSRGB":e===$u&&n===Xu&&(i="LinearSRGBToLinearDisplayP3"),t){case Ji:case Od:return[i,"LinearTransferOETF"];case jt:case uv:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function rS(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Tz(t.getShaderSource(e),o)}else return r}function Az(t,e){const n=bz(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Cz(t,e){let n;switch(e){case FU:n="Linear";break;case BU:n="Reinhard";break;case zU:n="OptimizedCineon";break;case VU:n="ACESFilmic";break;case GU:n="AgX";break;case HU:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Rz(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_o).join(`
`)}function Pz(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_o).join(`
`)}function Lz(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Dz(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function _o(t){return t!==""}function sS(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function oS(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Nz=/^[ \t]*#include +<([\w\d./]+)>/gm;function um(t){return t.replace(Nz,Oz)}const Iz=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Oz(t,e){let n=ke[e];if(n===void 0){const i=Iz.get(e);if(i!==void 0)n=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return um(n)}const Uz=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function aS(t){return t.replace(Uz,kz)}function kz(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function lS(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function Fz(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===uT?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===fU?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function Bz(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Vo:case Ho:e="ENVMAP_TYPE_CUBE";break;case Id:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zz(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ho:e="ENVMAP_MODE_REFRACTION";break}return e}function Vz(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case dT:e="ENVMAP_BLENDING_MULTIPLY";break;case UU:e="ENVMAP_BLENDING_MIX";break;case kU:e="ENVMAP_BLENDING_ADD";break}return e}function Hz(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Gz(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Fz(n),c=Bz(n),u=zz(n),d=Vz(n),f=Hz(n),p=n.isWebGL2?"":Rz(n),g=Pz(n),_=Lz(s),m=r.createProgram();let h,v,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(_o).join(`
`),h.length>0&&(h+=`
`),v=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(_o).join(`
`),v.length>0&&(v+=`
`)):(h=[lS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_o).join(`
`),v=[p,lS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pr?"#define TONE_MAPPING":"",n.toneMapping!==Pr?ke.tonemapping_pars_fragment:"",n.toneMapping!==Pr?Cz("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Az("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(_o).join(`
`)),o=um(o),o=sS(o,n),o=oS(o,n),a=um(a),a=sS(a,n),a=oS(a,n),o=aS(o),a=aS(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,h=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===wx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===wx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const x=y+h+o,T=y+v+a,w=iS(r,r.VERTEX_SHADER,x),b=iS(r,r.FRAGMENT_SHADER,T);r.attachShader(m,w),r.attachShader(m,b),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function L(q){if(t.debug.checkShaderErrors){const Z=r.getProgramInfoLog(m).trim(),N=r.getShaderInfoLog(w).trim(),X=r.getShaderInfoLog(b).trim();let W=!0,Y=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(W=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,w,b);else{const D=rS(r,w,"vertex"),U=rS(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+Z+`
`+D+`
`+U)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(N===""||X==="")&&(Y=!1);Y&&(q.diagnostics={runnable:W,programLog:Z,vertexShader:{log:N,prefix:h},fragmentShader:{log:X,prefix:v}})}r.deleteShader(w),r.deleteShader(b),$=new iu(r,m),S=Dz(r,m)}let $;this.getUniforms=function(){return $===void 0&&L(this),$};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(m,Mz)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=wz++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=b,this}let jz=0;class Wz{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new $z(e),n.set(e,i)),i}}class $z{constructor(e){this.id=jz++,this.code=e,this.usedTimes=0}}function Xz(t,e,n,i,r,s,o){const a=new AT,l=new Wz,c=new Set,u=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,p=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return c.add(S),S===0?"uv":`uv${S}`}function h(S,R,q,Z,N){const X=Z.fog,W=N.geometry,Y=S.isMeshStandardMaterial?Z.environment:null,D=(S.isMeshStandardMaterial?n:e).get(S.envMap||Y),U=D&&D.mapping===Id?D.image.height:null,B=_[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const K=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ne=K!==void 0?K.length:0;let Te=0;W.morphAttributes.position!==void 0&&(Te=1),W.morphAttributes.normal!==void 0&&(Te=2),W.morphAttributes.color!==void 0&&(Te=3);let G,Q,ce,_e;if(B){const it=vi[B];G=it.vertexShader,Q=it.fragmentShader}else G=S.vertexShader,Q=S.fragmentShader,l.update(S),ce=l.getVertexShaderID(S),_e=l.getFragmentShaderID(S);const be=t.getRenderTarget(),me=N.isInstancedMesh===!0,$e=N.isBatchedMesh===!0,Ne=!!S.map,O=!!S.matcap,zt=!!D,Ee=!!S.aoMap,Pe=!!S.lightMap,xe=!!S.bumpMap,ht=!!S.normalMap,Oe=!!S.displacementMap,C=!!S.emissiveMap,M=!!S.metalnessMap,k=!!S.roughnessMap,re=S.anisotropy>0,J=S.clearcoat>0,ie=S.iridescence>0,ge=S.sheen>0,le=S.transmission>0,fe=re&&!!S.anisotropyMap,Ce=J&&!!S.clearcoatMap,Fe=J&&!!S.clearcoatNormalMap,ee=J&&!!S.clearcoatRoughnessMap,Je=ie&&!!S.iridescenceMap,He=ie&&!!S.iridescenceThicknessMap,Le=ge&&!!S.sheenColorMap,Se=ge&&!!S.sheenRoughnessMap,he=!!S.specularMap,Ue=!!S.specularColorMap,Ye=!!S.specularIntensityMap,ot=le&&!!S.transmissionMap,je=le&&!!S.thicknessMap,tt=!!S.gradientMap,P=!!S.alphaMap,se=S.alphaTest>0,oe=!!S.alphaHash,pe=!!S.extensions;let Me=Pr;S.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Me=t.toneMapping);const Ke={isWebGL2:d,shaderID:B,shaderType:S.type,shaderName:S.name,vertexShader:G,fragmentShader:Q,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:_e,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:$e,instancing:me,instancingColor:me&&N.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:be===null?t.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Ji,alphaToCoverage:!!S.alphaToCoverage,map:Ne,matcap:O,envMap:zt,envMapMode:zt&&D.mapping,envMapCubeUVHeight:U,aoMap:Ee,lightMap:Pe,bumpMap:xe,normalMap:ht,displacementMap:p&&Oe,emissiveMap:C,normalMapObjectSpace:ht&&S.normalMapType===tk,normalMapTangentSpace:ht&&S.normalMapType===ek,metalnessMap:M,roughnessMap:k,anisotropy:re,anisotropyMap:fe,clearcoat:J,clearcoatMap:Ce,clearcoatNormalMap:Fe,clearcoatRoughnessMap:ee,iridescence:ie,iridescenceMap:Je,iridescenceThicknessMap:He,sheen:ge,sheenColorMap:Le,sheenRoughnessMap:Se,specularMap:he,specularColorMap:Ue,specularIntensityMap:Ye,transmission:le,transmissionMap:ot,thicknessMap:je,gradientMap:tt,opaque:S.transparent===!1&&S.blending===Ao&&S.alphaToCoverage===!1,alphaMap:P,alphaTest:se,alphaHash:oe,combine:S.combine,mapUv:Ne&&m(S.map.channel),aoMapUv:Ee&&m(S.aoMap.channel),lightMapUv:Pe&&m(S.lightMap.channel),bumpMapUv:xe&&m(S.bumpMap.channel),normalMapUv:ht&&m(S.normalMap.channel),displacementMapUv:Oe&&m(S.displacementMap.channel),emissiveMapUv:C&&m(S.emissiveMap.channel),metalnessMapUv:M&&m(S.metalnessMap.channel),roughnessMapUv:k&&m(S.roughnessMap.channel),anisotropyMapUv:fe&&m(S.anisotropyMap.channel),clearcoatMapUv:Ce&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Je&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:He&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:Se&&m(S.sheenRoughnessMap.channel),specularMapUv:he&&m(S.specularMap.channel),specularColorMapUv:Ue&&m(S.specularColorMap.channel),specularIntensityMapUv:Ye&&m(S.specularIntensityMap.channel),transmissionMapUv:ot&&m(S.transmissionMap.channel),thicknessMapUv:je&&m(S.thicknessMap.channel),alphaMapUv:P&&m(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ht||re),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(Ne||P),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Te,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&q.length>0,shadowMapType:t.shadowMap.type,toneMapping:Me,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ne&&S.map.isVideoTexture===!0&&et.getTransfer(S.map.colorSpace)===lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ki,flipSided:S.side===En,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:pe&&S.extensions.derivatives===!0,extensionFragDepth:pe&&S.extensions.fragDepth===!0,extensionDrawBuffers:pe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:pe&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function v(S){const R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(const q in S.defines)R.push(q),R.push(S.defines[q]);return S.isRawShaderMaterial===!1&&(y(R,S),x(R,S),R.push(t.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function y(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.numLightProbes),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function x(S,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),R.alphaHash&&a.enable(18),R.batching&&a.enable(19),S.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.alphaToCoverage&&a.enable(20),S.push(a.mask)}function T(S){const R=_[S.type];let q;if(R){const Z=vi[R];q=Ck.clone(Z.uniforms)}else q=S.uniforms;return q}function w(S,R){let q;for(let Z=0,N=u.length;Z<N;Z++){const X=u[Z];if(X.cacheKey===R){q=X,++q.usedTimes;break}}return q===void 0&&(q=new Gz(t,R,S,s),u.push(q)),q}function b(S){if(--S.usedTimes===0){const R=u.indexOf(S);u[R]=u[u.length-1],u.pop(),S.destroy()}}function L(S){l.remove(S)}function $(){l.dispose()}return{getParameters:h,getProgramCacheKey:v,getUniforms:T,acquireProgram:w,releaseProgram:b,releaseShaderCache:L,programs:u,dispose:$}}function qz(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Yz(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function cS(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function uS(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,p,g,_,m){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=m),e++,h}function a(d,f,p,g,_,m){const h=o(d,f,p,g,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,f,p,g,_,m){const h=o(d,f,p,g,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||Yz),i.length>1&&i.sort(f||cS),r.length>1&&r.sort(f||cS)}function u(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Kz(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new uS,t.set(i,[o])):r>=s.length?(o=new uS,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Zz(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new Ze};break;case"SpotLight":n={position:new z,direction:new z,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function Qz(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Jz=0;function eV(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function tV(t,e){const n=new Zz,i=Qz(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new z);const s=new z,o=new Bt,a=new Bt;function l(u,d){let f=0,p=0,g=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let _=0,m=0,h=0,v=0,y=0,x=0,T=0,w=0,b=0,L=0,$=0;u.sort(eV);const S=d===!0?Math.PI:1;for(let q=0,Z=u.length;q<Z;q++){const N=u[q],X=N.color,W=N.intensity,Y=N.distance,D=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=X.r*W*S,p+=X.g*W*S,g+=X.b*W*S;else if(N.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(N.sh.coefficients[U],W);$++}else if(N.isDirectionalLight){const U=n.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity*S),N.castShadow){const B=N.shadow,K=i.get(N);K.shadowBias=B.bias,K.shadowNormalBias=B.normalBias,K.shadowRadius=B.radius,K.shadowMapSize=B.mapSize,r.directionalShadow[_]=K,r.directionalShadowMap[_]=D,r.directionalShadowMatrix[_]=N.shadow.matrix,x++}r.directional[_]=U,_++}else if(N.isSpotLight){const U=n.get(N);U.position.setFromMatrixPosition(N.matrixWorld),U.color.copy(X).multiplyScalar(W*S),U.distance=Y,U.coneCos=Math.cos(N.angle),U.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),U.decay=N.decay,r.spot[h]=U;const B=N.shadow;if(N.map&&(r.spotLightMap[b]=N.map,b++,B.updateMatrices(N),N.castShadow&&L++),r.spotLightMatrix[h]=B.matrix,N.castShadow){const K=i.get(N);K.shadowBias=B.bias,K.shadowNormalBias=B.normalBias,K.shadowRadius=B.radius,K.shadowMapSize=B.mapSize,r.spotShadow[h]=K,r.spotShadowMap[h]=D,w++}h++}else if(N.isRectAreaLight){const U=n.get(N);U.color.copy(X).multiplyScalar(W),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),r.rectArea[v]=U,v++}else if(N.isPointLight){const U=n.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity*S),U.distance=N.distance,U.decay=N.decay,N.castShadow){const B=N.shadow,K=i.get(N);K.shadowBias=B.bias,K.shadowNormalBias=B.normalBias,K.shadowRadius=B.radius,K.shadowMapSize=B.mapSize,K.shadowCameraNear=B.camera.near,K.shadowCameraFar=B.camera.far,r.pointShadow[m]=K,r.pointShadowMap[m]=D,r.pointShadowMatrix[m]=N.shadow.matrix,T++}r.point[m]=U,m++}else if(N.isHemisphereLight){const U=n.get(N);U.skyColor.copy(N.color).multiplyScalar(W*S),U.groundColor.copy(N.groundColor).multiplyScalar(W*S),r.hemi[y]=U,y++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=g;const R=r.hash;(R.directionalLength!==_||R.pointLength!==m||R.spotLength!==h||R.rectAreaLength!==v||R.hemiLength!==y||R.numDirectionalShadows!==x||R.numPointShadows!==T||R.numSpotShadows!==w||R.numSpotMaps!==b||R.numLightProbes!==$)&&(r.directional.length=_,r.spot.length=h,r.rectArea.length=v,r.point.length=m,r.hemi.length=y,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=w+b-L,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=$,R.directionalLength=_,R.pointLength=m,R.spotLength=h,R.rectAreaLength=v,R.hemiLength=y,R.numDirectionalShadows=x,R.numPointShadows=T,R.numSpotShadows=w,R.numSpotMaps=b,R.numLightProbes=$,r.version=Jz++)}function c(u,d){let f=0,p=0,g=0,_=0,m=0;const h=d.matrixWorldInverse;for(let v=0,y=u.length;v<y;v++){const x=u[v];if(x.isDirectionalLight){const T=r.directional[f];T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),f++}else if(x.isSpotLight){const T=r.spot[g];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(h),T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),g++}else if(x.isRectAreaLight){const T=r.rectArea[_];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(h),a.identity(),o.copy(x.matrixWorld),o.premultiply(h),a.extractRotation(o),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const T=r.point[p];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(h),p++}else if(x.isHemisphereLight){const T=r.hemi[m];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:r}}function dS(t,e){const n=new tV(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function nV(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new dS(t,e),n.set(s,[l])):o>=a.length?(l=new dS(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class iV extends Il{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=QU,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rV extends Il{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sV=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oV=`uniform sampler2D shadow_pass;
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
}`;function aV(t,e,n){let i=new OT;const r=new qe,s=new qe,o=new $t,a=new iV({depthPacking:JU}),l=new rV,c={},u=n.maxTextureSize,d={[kr]:En,[En]:kr,[ki]:ki},f=new Fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:sV,fragmentShader:oV}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new nr;g.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Hi(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uT;let h=this.type;this.render=function(w,b,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const $=t.getRenderTarget(),S=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),q=t.state;q.setBlending(Rr),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const Z=h!==Ni&&this.type===Ni,N=h===Ni&&this.type!==Ni;for(let X=0,W=w.length;X<W;X++){const Y=w[X],D=Y.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const U=D.getFrameExtents();if(r.multiply(U),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/U.x),r.x=s.x*U.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/U.y),r.y=s.y*U.y,D.mapSize.y=s.y)),D.map===null||Z===!0||N===!0){const K=this.type!==Ni?{minFilter:cn,magFilter:cn}:{};D.map!==null&&D.map.dispose(),D.map=new Ps(r.x,r.y,K),D.map.texture.name=Y.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const B=D.getViewportCount();for(let K=0;K<B;K++){const ne=D.getViewport(K);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),q.viewport(o),D.updateMatrices(Y,K),i=D.getFrustum(),x(b,L,D.camera,Y,this.type)}D.isPointLightShadow!==!0&&this.type===Ni&&v(D,L),D.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget($,S,R)};function v(w,b){const L=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ps(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(b,null,L,f,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(b,null,L,p,_,null)}function y(w,b,L,$){let S=null;const R=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)S=R;else if(S=L.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const q=S.uuid,Z=b.uuid;let N=c[q];N===void 0&&(N={},c[q]=N);let X=N[Z];X===void 0&&(X=S.clone(),N[Z]=X,b.addEventListener("dispose",T)),S=X}if(S.visible=b.visible,S.wireframe=b.wireframe,$===Ni?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:d[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const q=t.properties.get(S);q.light=L}return S}function x(w,b,L,$,S){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Ni)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const Z=e.update(w),N=w.material;if(Array.isArray(N)){const X=Z.groups;for(let W=0,Y=X.length;W<Y;W++){const D=X[W],U=N[D.materialIndex];if(U&&U.visible){const B=y(w,U,$,S);w.onBeforeShadow(t,w,b,L,Z,B,D),t.renderBufferDirect(L,null,Z,B,w,D),w.onAfterShadow(t,w,b,L,Z,B,D)}}}else if(N.visible){const X=y(w,N,$,S);w.onBeforeShadow(t,w,b,L,Z,X,null),t.renderBufferDirect(L,null,Z,X,w,null),w.onAfterShadow(t,w,b,L,Z,X,null)}}const q=w.children;for(let Z=0,N=q.length;Z<N;Z++)x(q[Z],b,L,$,S)}function T(w){w.target.removeEventListener("dispose",T);for(const L in c){const $=c[L],S=w.target.uuid;S in $&&($[S].dispose(),delete $[S])}}}function lV(t,e,n){const i=n.isWebGL2;function r(){let P=!1;const se=new $t;let oe=null;const pe=new $t(0,0,0,0);return{setMask:function(Me){oe!==Me&&!P&&(t.colorMask(Me,Me,Me,Me),oe=Me)},setLocked:function(Me){P=Me},setClear:function(Me,Ke,it,Vt,Fn){Fn===!0&&(Me*=Vt,Ke*=Vt,it*=Vt),se.set(Me,Ke,it,Vt),pe.equals(se)===!1&&(t.clearColor(Me,Ke,it,Vt),pe.copy(se))},reset:function(){P=!1,oe=null,pe.set(-1,0,0,0)}}}function s(){let P=!1,se=null,oe=null,pe=null;return{setTest:function(Me){Me?me(t.DEPTH_TEST):$e(t.DEPTH_TEST)},setMask:function(Me){se!==Me&&!P&&(t.depthMask(Me),se=Me)},setFunc:function(Me){if(oe!==Me){switch(Me){case RU:t.depthFunc(t.NEVER);break;case PU:t.depthFunc(t.ALWAYS);break;case LU:t.depthFunc(t.LESS);break;case ju:t.depthFunc(t.LEQUAL);break;case DU:t.depthFunc(t.EQUAL);break;case NU:t.depthFunc(t.GEQUAL);break;case IU:t.depthFunc(t.GREATER);break;case OU:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}oe=Me}},setLocked:function(Me){P=Me},setClear:function(Me){pe!==Me&&(t.clearDepth(Me),pe=Me)},reset:function(){P=!1,se=null,oe=null,pe=null}}}function o(){let P=!1,se=null,oe=null,pe=null,Me=null,Ke=null,it=null,Vt=null,Fn=null;return{setTest:function(rt){P||(rt?me(t.STENCIL_TEST):$e(t.STENCIL_TEST))},setMask:function(rt){se!==rt&&!P&&(t.stencilMask(rt),se=rt)},setFunc:function(rt,on,hi){(oe!==rt||pe!==on||Me!==hi)&&(t.stencilFunc(rt,on,hi),oe=rt,pe=on,Me=hi)},setOp:function(rt,on,hi){(Ke!==rt||it!==on||Vt!==hi)&&(t.stencilOp(rt,on,hi),Ke=rt,it=on,Vt=hi)},setLocked:function(rt){P=rt},setClear:function(rt){Fn!==rt&&(t.clearStencil(rt),Fn=rt)},reset:function(){P=!1,se=null,oe=null,pe=null,Me=null,Ke=null,it=null,Vt=null,Fn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,d=new WeakMap;let f={},p={},g=new WeakMap,_=[],m=null,h=!1,v=null,y=null,x=null,T=null,w=null,b=null,L=null,$=new Ze(0,0,0),S=0,R=!1,q=null,Z=null,N=null,X=null,W=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,U=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(B)[1]),D=U>=1):B.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),D=U>=2);let K=null,ne={};const Te=t.getParameter(t.SCISSOR_BOX),G=t.getParameter(t.VIEWPORT),Q=new $t().fromArray(Te),ce=new $t().fromArray(G);function _e(P,se,oe,pe){const Me=new Uint8Array(4),Ke=t.createTexture();t.bindTexture(P,Ke),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let it=0;it<oe;it++)i&&(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)?t.texImage3D(se,0,t.RGBA,1,1,pe,0,t.RGBA,t.UNSIGNED_BYTE,Me):t.texImage2D(se+it,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Me);return Ke}const be={};be[t.TEXTURE_2D]=_e(t.TEXTURE_2D,t.TEXTURE_2D,1),be[t.TEXTURE_CUBE_MAP]=_e(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(be[t.TEXTURE_2D_ARRAY]=_e(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),be[t.TEXTURE_3D]=_e(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),me(t.DEPTH_TEST),l.setFunc(ju),Oe(!1),C(W_),me(t.CULL_FACE),xe(Rr);function me(P){f[P]!==!0&&(t.enable(P),f[P]=!0)}function $e(P){f[P]!==!1&&(t.disable(P),f[P]=!1)}function Ne(P,se){return p[P]!==se?(t.bindFramebuffer(P,se),p[P]=se,i&&(P===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=se),P===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=se)),!0):!1}function O(P,se){let oe=_,pe=!1;if(P)if(oe=g.get(se),oe===void 0&&(oe=[],g.set(se,oe)),P.isWebGLMultipleRenderTargets){const Me=P.texture;if(oe.length!==Me.length||oe[0]!==t.COLOR_ATTACHMENT0){for(let Ke=0,it=Me.length;Ke<it;Ke++)oe[Ke]=t.COLOR_ATTACHMENT0+Ke;oe.length=Me.length,pe=!0}}else oe[0]!==t.COLOR_ATTACHMENT0&&(oe[0]=t.COLOR_ATTACHMENT0,pe=!0);else oe[0]!==t.BACK&&(oe[0]=t.BACK,pe=!0);pe&&(n.isWebGL2?t.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function zt(P){return m!==P?(t.useProgram(P),m=P,!0):!1}const Ee={[as]:t.FUNC_ADD,[pU]:t.FUNC_SUBTRACT,[mU]:t.FUNC_REVERSE_SUBTRACT};if(i)Ee[q_]=t.MIN,Ee[Y_]=t.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(Ee[q_]=P.MIN_EXT,Ee[Y_]=P.MAX_EXT)}const Pe={[gU]:t.ZERO,[vU]:t.ONE,[yU]:t.SRC_COLOR,[tm]:t.SRC_ALPHA,[wU]:t.SRC_ALPHA_SATURATE,[EU]:t.DST_COLOR,[xU]:t.DST_ALPHA,[_U]:t.ONE_MINUS_SRC_COLOR,[nm]:t.ONE_MINUS_SRC_ALPHA,[MU]:t.ONE_MINUS_DST_COLOR,[SU]:t.ONE_MINUS_DST_ALPHA,[TU]:t.CONSTANT_COLOR,[bU]:t.ONE_MINUS_CONSTANT_COLOR,[AU]:t.CONSTANT_ALPHA,[CU]:t.ONE_MINUS_CONSTANT_ALPHA};function xe(P,se,oe,pe,Me,Ke,it,Vt,Fn,rt){if(P===Rr){h===!0&&($e(t.BLEND),h=!1);return}if(h===!1&&(me(t.BLEND),h=!0),P!==hU){if(P!==v||rt!==R){if((y!==as||w!==as)&&(t.blendEquation(t.FUNC_ADD),y=as,w=as),rt)switch(P){case Ao:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case em:t.blendFunc(t.ONE,t.ONE);break;case $_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case X_:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ao:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case em:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case $_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case X_:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}x=null,T=null,b=null,L=null,$.set(0,0,0),S=0,v=P,R=rt}return}Me=Me||se,Ke=Ke||oe,it=it||pe,(se!==y||Me!==w)&&(t.blendEquationSeparate(Ee[se],Ee[Me]),y=se,w=Me),(oe!==x||pe!==T||Ke!==b||it!==L)&&(t.blendFuncSeparate(Pe[oe],Pe[pe],Pe[Ke],Pe[it]),x=oe,T=pe,b=Ke,L=it),(Vt.equals($)===!1||Fn!==S)&&(t.blendColor(Vt.r,Vt.g,Vt.b,Fn),$.copy(Vt),S=Fn),v=P,R=!1}function ht(P,se){P.side===ki?$e(t.CULL_FACE):me(t.CULL_FACE);let oe=P.side===En;se&&(oe=!oe),Oe(oe),P.blending===Ao&&P.transparent===!1?xe(Rr):xe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const pe=P.stencilWrite;c.setTest(pe),pe&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),k(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?me(t.SAMPLE_ALPHA_TO_COVERAGE):$e(t.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(P){q!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),q=P)}function C(P){P!==uU?(me(t.CULL_FACE),P!==Z&&(P===W_?t.cullFace(t.BACK):P===dU?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):$e(t.CULL_FACE),Z=P}function M(P){P!==N&&(D&&t.lineWidth(P),N=P)}function k(P,se,oe){P?(me(t.POLYGON_OFFSET_FILL),(X!==se||W!==oe)&&(t.polygonOffset(se,oe),X=se,W=oe)):$e(t.POLYGON_OFFSET_FILL)}function re(P){P?me(t.SCISSOR_TEST):$e(t.SCISSOR_TEST)}function J(P){P===void 0&&(P=t.TEXTURE0+Y-1),K!==P&&(t.activeTexture(P),K=P)}function ie(P,se,oe){oe===void 0&&(K===null?oe=t.TEXTURE0+Y-1:oe=K);let pe=ne[oe];pe===void 0&&(pe={type:void 0,texture:void 0},ne[oe]=pe),(pe.type!==P||pe.texture!==se)&&(K!==oe&&(t.activeTexture(oe),K=oe),t.bindTexture(P,se||be[P]),pe.type=P,pe.texture=se)}function ge(){const P=ne[K];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function le(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ce(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Fe(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Je(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function He(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Le(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ue(P){Q.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),Q.copy(P))}function Ye(P){ce.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),ce.copy(P))}function ot(P,se){let oe=d.get(se);oe===void 0&&(oe=new WeakMap,d.set(se,oe));let pe=oe.get(P);pe===void 0&&(pe=t.getUniformBlockIndex(se,P.name),oe.set(P,pe))}function je(P,se){const pe=d.get(se).get(P);u.get(se)!==pe&&(t.uniformBlockBinding(se,pe,P.__bindingPointIndex),u.set(se,pe))}function tt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},K=null,ne={},p={},g=new WeakMap,_=[],m=null,h=!1,v=null,y=null,x=null,T=null,w=null,b=null,L=null,$=new Ze(0,0,0),S=0,R=!1,q=null,Z=null,N=null,X=null,W=null,Q.set(0,0,t.canvas.width,t.canvas.height),ce.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:me,disable:$e,bindFramebuffer:Ne,drawBuffers:O,useProgram:zt,setBlending:xe,setMaterial:ht,setFlipSided:Oe,setCullFace:C,setLineWidth:M,setPolygonOffset:k,setScissorTest:re,activeTexture:J,bindTexture:ie,unbindTexture:ge,compressedTexImage2D:le,compressedTexImage3D:fe,texImage2D:Se,texImage3D:he,updateUBOMapping:ot,uniformBlockBinding:je,texStorage2D:He,texStorage3D:Le,texSubImage2D:Ce,texSubImage3D:Fe,compressedTexSubImage2D:ee,compressedTexSubImage3D:Je,scissor:Ue,viewport:Ye,reset:tt}}function cV(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return p?new OffscreenCanvas(C,M):Yu("canvas")}function _(C,M,k,re){let J=1;if((C.width>re||C.height>re)&&(J=re/Math.max(C.width,C.height)),J<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ie=M?cm:Math.floor,ge=ie(J*C.width),le=ie(J*C.height);d===void 0&&(d=g(ge,le));const fe=k?g(ge,le):d;return fe.width=ge,fe.height=le,fe.getContext("2d").drawImage(C,0,0,ge,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+ge+"x"+le+")."),fe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return Tx(C.width)&&Tx(C.height)}function h(C){return a?!1:C.wrapS!==oi||C.wrapT!==oi||C.minFilter!==cn&&C.minFilter!==mn}function v(C,M){return C.generateMipmaps&&M&&C.minFilter!==cn&&C.minFilter!==mn}function y(C){t.generateMipmap(C)}function x(C,M,k,re,J=!1){if(a===!1)return M;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ie=M;if(M===t.RED&&(k===t.FLOAT&&(ie=t.R32F),k===t.HALF_FLOAT&&(ie=t.R16F),k===t.UNSIGNED_BYTE&&(ie=t.R8)),M===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(ie=t.R8UI),k===t.UNSIGNED_SHORT&&(ie=t.R16UI),k===t.UNSIGNED_INT&&(ie=t.R32UI),k===t.BYTE&&(ie=t.R8I),k===t.SHORT&&(ie=t.R16I),k===t.INT&&(ie=t.R32I)),M===t.RG&&(k===t.FLOAT&&(ie=t.RG32F),k===t.HALF_FLOAT&&(ie=t.RG16F),k===t.UNSIGNED_BYTE&&(ie=t.RG8)),M===t.RGBA){const ge=J?Wu:et.getTransfer(re);k===t.FLOAT&&(ie=t.RGBA32F),k===t.HALF_FLOAT&&(ie=t.RGBA16F),k===t.UNSIGNED_BYTE&&(ie=ge===lt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function T(C,M,k){return v(C,k)===!0||C.isFramebufferTexture&&C.minFilter!==cn&&C.minFilter!==mn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function w(C){return C===cn||C===K_||C===fa?t.NEAREST:t.LINEAR}function b(C){const M=C.target;M.removeEventListener("dispose",b),$(M),M.isVideoTexture&&u.delete(M)}function L(C){const M=C.target;M.removeEventListener("dispose",L),R(M)}function $(C){const M=i.get(C);if(M.__webglInit===void 0)return;const k=C.source,re=f.get(k);if(re){const J=re[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(C),Object.keys(re).length===0&&f.delete(k)}i.remove(C)}function S(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const k=C.source,re=f.get(k);delete re[M.__cacheKey],o.memory.textures--}function R(C){const M=C.texture,k=i.get(C),re=i.get(M);if(re.__webglTexture!==void 0&&(t.deleteTexture(re.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(k.__webglFramebuffer[J]))for(let ie=0;ie<k.__webglFramebuffer[J].length;ie++)t.deleteFramebuffer(k.__webglFramebuffer[J][ie]);else t.deleteFramebuffer(k.__webglFramebuffer[J]);k.__webglDepthbuffer&&t.deleteRenderbuffer(k.__webglDepthbuffer[J])}else{if(Array.isArray(k.__webglFramebuffer))for(let J=0;J<k.__webglFramebuffer.length;J++)t.deleteFramebuffer(k.__webglFramebuffer[J]);else t.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&t.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&t.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let J=0;J<k.__webglColorRenderbuffer.length;J++)k.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(k.__webglColorRenderbuffer[J]);k.__webglDepthRenderbuffer&&t.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let J=0,ie=M.length;J<ie;J++){const ge=i.get(M[J]);ge.__webglTexture&&(t.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(M[J])}i.remove(M),i.remove(C)}let q=0;function Z(){q=0}function N(){const C=q;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),q+=1,C}function X(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function W(C,M){const k=i.get(C);if(C.isVideoTexture&&ht(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const re=C.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(k,C,M);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+M)}function Y(C,M){const k=i.get(C);if(C.version>0&&k.__version!==C.version){Q(k,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+M)}function D(C,M){const k=i.get(C);if(C.version>0&&k.__version!==C.version){Q(k,C,M);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+M)}function U(C,M){const k=i.get(C);if(C.version>0&&k.__version!==C.version){ce(k,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+M)}const B={[sm]:t.REPEAT,[oi]:t.CLAMP_TO_EDGE,[om]:t.MIRRORED_REPEAT},K={[cn]:t.NEAREST,[K_]:t.NEAREST_MIPMAP_NEAREST,[fa]:t.NEAREST_MIPMAP_LINEAR,[mn]:t.LINEAR,[Xf]:t.LINEAR_MIPMAP_NEAREST,[hs]:t.LINEAR_MIPMAP_LINEAR},ne={[nk]:t.NEVER,[lk]:t.ALWAYS,[ik]:t.LESS,[ST]:t.LEQUAL,[rk]:t.EQUAL,[ak]:t.GEQUAL,[sk]:t.GREATER,[ok]:t.NOTEQUAL};function Te(C,M,k){if(M.type===Fi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===mn||M.magFilter===Xf||M.magFilter===fa||M.magFilter===hs||M.minFilter===mn||M.minFilter===Xf||M.minFilter===fa||M.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),k?(t.texParameteri(C,t.TEXTURE_WRAP_S,B[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,B[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,B[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,K[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,K[M.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==oi||M.wrapT!==oi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,w(M.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,w(M.minFilter)),M.minFilter!==cn&&M.minFilter!==mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,ne[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===cn||M.minFilter!==fa&&M.minFilter!==hs||M.type===Fi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===ul&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(C,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function G(C,M){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",b));const re=M.source;let J=f.get(re);J===void 0&&(J={},f.set(re,J));const ie=X(M);if(ie!==C.__cacheKey){J[ie]===void 0&&(J[ie]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),J[ie].usedTimes++;const ge=J[C.__cacheKey];ge!==void 0&&(J[C.__cacheKey].usedTimes--,ge.usedTimes===0&&S(M)),C.__cacheKey=ie,C.__webglTexture=J[ie].texture}return k}function Q(C,M,k){let re=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=t.TEXTURE_3D);const J=G(C,M),ie=M.source;n.bindTexture(re,C.__webglTexture,t.TEXTURE0+k);const ge=i.get(ie);if(ie.version!==ge.__version||J===!0){n.activeTexture(t.TEXTURE0+k);const le=et.getPrimaries(et.workingColorSpace),fe=M.colorSpace===$n?null:et.getPrimaries(M.colorSpace),Ce=M.colorSpace===$n||le===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Fe=h(M)&&m(M.image)===!1;let ee=_(M.image,Fe,!1,r.maxTextureSize);ee=Oe(M,ee);const Je=m(ee)||a,He=s.convert(M.format,M.colorSpace);let Le=s.convert(M.type),Se=x(M.internalFormat,He,Le,M.colorSpace,M.isVideoTexture);Te(re,M,Je);let he;const Ue=M.mipmaps,Ye=a&&M.isVideoTexture!==!0&&Se!==_T,ot=ge.__version===void 0||J===!0,je=ie.dataReady,tt=T(M,ee,Je);if(M.isDepthTexture)Se=t.DEPTH_COMPONENT,a?M.type===Fi?Se=t.DEPTH_COMPONENT32F:M.type===xr?Se=t.DEPTH_COMPONENT24:M.type===ys?Se=t.DEPTH24_STENCIL8:Se=t.DEPTH_COMPONENT16:M.type===Fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===_s&&Se===t.DEPTH_COMPONENT&&M.type!==cv&&M.type!==xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=xr,Le=s.convert(M.type)),M.format===Go&&Se===t.DEPTH_COMPONENT&&(Se=t.DEPTH_STENCIL,M.type!==ys&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ys,Le=s.convert(M.type))),ot&&(Ye?n.texStorage2D(t.TEXTURE_2D,1,Se,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,Se,ee.width,ee.height,0,He,Le,null));else if(M.isDataTexture)if(Ue.length>0&&Je){Ye&&ot&&n.texStorage2D(t.TEXTURE_2D,tt,Se,Ue[0].width,Ue[0].height);for(let P=0,se=Ue.length;P<se;P++)he=Ue[P],Ye?je&&n.texSubImage2D(t.TEXTURE_2D,P,0,0,he.width,he.height,He,Le,he.data):n.texImage2D(t.TEXTURE_2D,P,Se,he.width,he.height,0,He,Le,he.data);M.generateMipmaps=!1}else Ye?(ot&&n.texStorage2D(t.TEXTURE_2D,tt,Se,ee.width,ee.height),je&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ee.width,ee.height,He,Le,ee.data)):n.texImage2D(t.TEXTURE_2D,0,Se,ee.width,ee.height,0,He,Le,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ye&&ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,tt,Se,Ue[0].width,Ue[0].height,ee.depth);for(let P=0,se=Ue.length;P<se;P++)he=Ue[P],M.format!==ai?He!==null?Ye?je&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,P,0,0,0,he.width,he.height,ee.depth,He,he.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,P,Se,he.width,he.height,ee.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?je&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,P,0,0,0,he.width,he.height,ee.depth,He,Le,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,P,Se,he.width,he.height,ee.depth,0,He,Le,he.data)}else{Ye&&ot&&n.texStorage2D(t.TEXTURE_2D,tt,Se,Ue[0].width,Ue[0].height);for(let P=0,se=Ue.length;P<se;P++)he=Ue[P],M.format!==ai?He!==null?Ye?je&&n.compressedTexSubImage2D(t.TEXTURE_2D,P,0,0,he.width,he.height,He,he.data):n.compressedTexImage2D(t.TEXTURE_2D,P,Se,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?je&&n.texSubImage2D(t.TEXTURE_2D,P,0,0,he.width,he.height,He,Le,he.data):n.texImage2D(t.TEXTURE_2D,P,Se,he.width,he.height,0,He,Le,he.data)}else if(M.isDataArrayTexture)Ye?(ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,tt,Se,ee.width,ee.height,ee.depth),je&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,He,Le,ee.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Se,ee.width,ee.height,ee.depth,0,He,Le,ee.data);else if(M.isData3DTexture)Ye?(ot&&n.texStorage3D(t.TEXTURE_3D,tt,Se,ee.width,ee.height,ee.depth),je&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,He,Le,ee.data)):n.texImage3D(t.TEXTURE_3D,0,Se,ee.width,ee.height,ee.depth,0,He,Le,ee.data);else if(M.isFramebufferTexture){if(ot)if(Ye)n.texStorage2D(t.TEXTURE_2D,tt,Se,ee.width,ee.height);else{let P=ee.width,se=ee.height;for(let oe=0;oe<tt;oe++)n.texImage2D(t.TEXTURE_2D,oe,Se,P,se,0,He,Le,null),P>>=1,se>>=1}}else if(Ue.length>0&&Je){Ye&&ot&&n.texStorage2D(t.TEXTURE_2D,tt,Se,Ue[0].width,Ue[0].height);for(let P=0,se=Ue.length;P<se;P++)he=Ue[P],Ye?je&&n.texSubImage2D(t.TEXTURE_2D,P,0,0,He,Le,he):n.texImage2D(t.TEXTURE_2D,P,Se,He,Le,he);M.generateMipmaps=!1}else Ye?(ot&&n.texStorage2D(t.TEXTURE_2D,tt,Se,ee.width,ee.height),je&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,He,Le,ee)):n.texImage2D(t.TEXTURE_2D,0,Se,He,Le,ee);v(M,Je)&&y(re),ge.__version=ie.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ce(C,M,k){if(M.image.length!==6)return;const re=G(C,M),J=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+k);const ie=i.get(J);if(J.version!==ie.__version||re===!0){n.activeTexture(t.TEXTURE0+k);const ge=et.getPrimaries(et.workingColorSpace),le=M.colorSpace===$n?null:et.getPrimaries(M.colorSpace),fe=M.colorSpace===$n||ge===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ce=M.isCompressedTexture||M.image[0].isCompressedTexture,Fe=M.image[0]&&M.image[0].isDataTexture,ee=[];for(let P=0;P<6;P++)!Ce&&!Fe?ee[P]=_(M.image[P],!1,!0,r.maxCubemapSize):ee[P]=Fe?M.image[P].image:M.image[P],ee[P]=Oe(M,ee[P]);const Je=ee[0],He=m(Je)||a,Le=s.convert(M.format,M.colorSpace),Se=s.convert(M.type),he=x(M.internalFormat,Le,Se,M.colorSpace),Ue=a&&M.isVideoTexture!==!0,Ye=ie.__version===void 0||re===!0,ot=J.dataReady;let je=T(M,Je,He);Te(t.TEXTURE_CUBE_MAP,M,He);let tt;if(Ce){Ue&&Ye&&n.texStorage2D(t.TEXTURE_CUBE_MAP,je,he,Je.width,Je.height);for(let P=0;P<6;P++){tt=ee[P].mipmaps;for(let se=0;se<tt.length;se++){const oe=tt[se];M.format!==ai?Le!==null?Ue?ot&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,se,0,0,oe.width,oe.height,Le,oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,se,he,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?ot&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,se,0,0,oe.width,oe.height,Le,Se,oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,se,he,oe.width,oe.height,0,Le,Se,oe.data)}}}else{tt=M.mipmaps,Ue&&Ye&&(tt.length>0&&je++,n.texStorage2D(t.TEXTURE_CUBE_MAP,je,he,ee[0].width,ee[0].height));for(let P=0;P<6;P++)if(Fe){Ue?ot&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,ee[P].width,ee[P].height,Le,Se,ee[P].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,he,ee[P].width,ee[P].height,0,Le,Se,ee[P].data);for(let se=0;se<tt.length;se++){const pe=tt[se].image[P].image;Ue?ot&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,se+1,0,0,pe.width,pe.height,Le,Se,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,se+1,he,pe.width,pe.height,0,Le,Se,pe.data)}}else{Ue?ot&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,Le,Se,ee[P]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,he,Le,Se,ee[P]);for(let se=0;se<tt.length;se++){const oe=tt[se];Ue?ot&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,se+1,0,0,Le,Se,oe.image[P]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,se+1,he,Le,Se,oe.image[P])}}}v(M,He)&&y(t.TEXTURE_CUBE_MAP),ie.__version=J.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function _e(C,M,k,re,J,ie){const ge=s.convert(k.format,k.colorSpace),le=s.convert(k.type),fe=x(k.internalFormat,ge,le,k.colorSpace);if(!i.get(M).__hasExternalTextures){const Fe=Math.max(1,M.width>>ie),ee=Math.max(1,M.height>>ie);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,ie,fe,Fe,ee,M.depth,0,ge,le,null):n.texImage2D(J,ie,fe,Fe,ee,0,ge,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),xe(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,J,i.get(k).__webglTexture,0,Pe(M)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,J,i.get(k).__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(C,M,k){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let re=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(k||xe(M)){const J=M.depthTexture;J&&J.isDepthTexture&&(J.type===Fi?re=t.DEPTH_COMPONENT32F:J.type===xr&&(re=t.DEPTH_COMPONENT24));const ie=Pe(M);xe(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,re,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,re,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,re,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){const re=Pe(M);k&&xe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,M.width,M.height):xe(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const re=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let J=0;J<re.length;J++){const ie=re[J],ge=s.convert(ie.format,ie.colorSpace),le=s.convert(ie.type),fe=x(ie.internalFormat,ge,le,ie.colorSpace),Ce=Pe(M);k&&xe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,fe,M.width,M.height):xe(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,fe,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,fe,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function me(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const re=i.get(M.depthTexture).__webglTexture,J=Pe(M);if(M.depthTexture.format===_s)xe(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(M.depthTexture.format===Go)xe(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function $e(C){const M=i.get(C),k=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");me(M.__webglFramebuffer,C)}else if(k){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]=t.createRenderbuffer(),be(M.__webglDepthbuffer[re],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),be(M.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(C,M,k){const re=i.get(C);M!==void 0&&_e(re.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&$e(C)}function O(C){const M=C.texture,k=i.get(C),re=i.get(M);C.addEventListener("dispose",L),C.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=M.version,o.memory.textures++);const J=C.isWebGLCubeRenderTarget===!0,ie=C.isWebGLMultipleRenderTargets===!0,ge=m(C)||a;if(J){k.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[le]=[];for(let fe=0;fe<M.mipmaps.length;fe++)k.__webglFramebuffer[le][fe]=t.createFramebuffer()}else k.__webglFramebuffer[le]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let le=0;le<M.mipmaps.length;le++)k.__webglFramebuffer[le]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(ie)if(r.drawBuffers){const le=C.texture;for(let fe=0,Ce=le.length;fe<Ce;fe++){const Fe=i.get(le[fe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&xe(C)===!1){const le=ie?M:[M];k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let fe=0;fe<le.length;fe++){const Ce=le[fe];k.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[fe]);const Fe=s.convert(Ce.format,Ce.colorSpace),ee=s.convert(Ce.type),Je=x(Ce.internalFormat,Fe,ee,Ce.colorSpace,C.isXRRenderTarget===!0),He=Pe(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,He,Je,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,k.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),be(k.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),Te(t.TEXTURE_CUBE_MAP,M,ge);for(let le=0;le<6;le++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)_e(k.__webglFramebuffer[le][fe],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,fe);else _e(k.__webglFramebuffer[le],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);v(M,ge)&&y(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ie){const le=C.texture;for(let fe=0,Ce=le.length;fe<Ce;fe++){const Fe=le[fe],ee=i.get(Fe);n.bindTexture(t.TEXTURE_2D,ee.__webglTexture),Te(t.TEXTURE_2D,Fe,ge),_e(k.__webglFramebuffer,C,Fe,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),v(Fe,ge)&&y(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?le=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(le,re.__webglTexture),Te(le,M,ge),a&&M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)_e(k.__webglFramebuffer[fe],C,M,t.COLOR_ATTACHMENT0,le,fe);else _e(k.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,le,0);v(M,ge)&&y(le),n.unbindTexture()}C.depthBuffer&&$e(C)}function zt(C){const M=m(C)||a,k=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let re=0,J=k.length;re<J;re++){const ie=k[re];if(v(ie,M)){const ge=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,le=i.get(ie).__webglTexture;n.bindTexture(ge,le),y(ge),n.unbindTexture()}}}function Ee(C){if(a&&C.samples>0&&xe(C)===!1){const M=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],k=C.width,re=C.height;let J=t.COLOR_BUFFER_BIT;const ie=[],ge=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(C),fe=C.isWebGLMultipleRenderTargets===!0;if(fe)for(let Ce=0;Ce<M.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Ce=0;Ce<M.length;Ce++){ie.push(t.COLOR_ATTACHMENT0+Ce),C.depthBuffer&&ie.push(ge);const Fe=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Fe===!1&&(C.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),fe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[Ce]),Fe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ge]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ge])),fe){const ee=i.get(M[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,k,re,0,0,k,re,J,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ie)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let Ce=0;Ce<M.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,le.__webglColorRenderbuffer[Ce]);const Fe=i.get(M[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Pe(C){return Math.min(r.maxSamples,C.samples)}function xe(C){const M=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ht(C){const M=o.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function Oe(C,M){const k=C.colorSpace,re=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===am||k!==Ji&&k!==$n&&(et.getTransfer(k)===lt?a===!1?e.has("EXT_sRGB")===!0&&re===ai?(C.format=am,C.minFilter=mn,C.generateMipmaps=!1):M=MT.sRGBToLinear(M):(re!==ai||J!==Lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}this.allocateTextureUnit=N,this.resetTextureUnits=Z,this.setTexture2D=W,this.setTexture2DArray=Y,this.setTexture3D=D,this.setTextureCube=U,this.rebindTextures=Ne,this.setupRenderTarget=O,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=xe}function uV(t,e,n){const i=n.isWebGL2;function r(s,o=$n){let a;const l=et.getTransfer(o);if(s===Lr)return t.UNSIGNED_BYTE;if(s===pT)return t.UNSIGNED_SHORT_4_4_4_4;if(s===mT)return t.UNSIGNED_SHORT_5_5_5_1;if(s===jU)return t.BYTE;if(s===WU)return t.SHORT;if(s===cv)return t.UNSIGNED_SHORT;if(s===hT)return t.INT;if(s===xr)return t.UNSIGNED_INT;if(s===Fi)return t.FLOAT;if(s===ul)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===$U)return t.ALPHA;if(s===ai)return t.RGBA;if(s===XU)return t.LUMINANCE;if(s===qU)return t.LUMINANCE_ALPHA;if(s===_s)return t.DEPTH_COMPONENT;if(s===Go)return t.DEPTH_STENCIL;if(s===am)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===YU)return t.RED;if(s===gT)return t.RED_INTEGER;if(s===KU)return t.RG;if(s===vT)return t.RG_INTEGER;if(s===yT)return t.RGBA_INTEGER;if(s===qf||s===Yf||s===Kf||s===Zf)if(l===lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===qf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Yf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Kf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Zf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===qf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Yf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Kf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Zf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Z_||s===Q_||s===J_||s===ex)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Z_)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Q_)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===J_)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ex)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_T)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===tx||s===nx)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===tx)return l===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===nx)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ix||s===rx||s===sx||s===ox||s===ax||s===lx||s===cx||s===ux||s===dx||s===fx||s===hx||s===px||s===mx||s===gx)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ix)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===rx)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===sx)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ox)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ax)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===lx)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===cx)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ux)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===dx)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fx)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hx)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===px)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===mx)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===gx)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Qf||s===vx||s===yx)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Qf)return l===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===vx)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yx)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ZU||s===_x||s===xx||s===Sx)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Qf)return a.COMPRESSED_RED_RGTC1_EXT;if(s===_x)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===xx)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Sx)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ys?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class dV extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Uc extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fV={type:"move"};class Mh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fV)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Uc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const hV=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pV=`
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

}`;class mV{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Mn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Fr({extensions:{fragDepth:!0},vertexShader:hV,fragmentShader:pV,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Hi(new Fd(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class gV extends Qo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,g=null;const _=new mV,m=n.getContextAttributes();let h=null,v=null;const y=[],x=[],T=new qe;let w=null;const b=new Wn;b.layers.enable(1),b.viewport=new $t;const L=new Wn;L.layers.enable(2),L.viewport=new $t;const $=[b,L],S=new dV;S.layers.enable(1),S.layers.enable(2);let R=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Q=y[G];return Q===void 0&&(Q=new Mh,y[G]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(G){let Q=y[G];return Q===void 0&&(Q=new Mh,y[G]=Q),Q.getGripSpace()},this.getHand=function(G){let Q=y[G];return Q===void 0&&(Q=new Mh,y[G]=Q),Q.getHandSpace()};function Z(G){const Q=x.indexOf(G.inputSource);if(Q===-1)return;const ce=y[Q];ce!==void 0&&(ce.update(G.inputSource,G.frame,c||o),ce.dispatchEvent({type:G.type,data:G.inputSource}))}function N(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",X);for(let G=0;G<y.length;G++){const Q=x[G];Q!==null&&(x[G]=null,y[G].disconnect(Q))}R=null,q=null,_.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,v=null,Te.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",N),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Ps(p.framebufferWidth,p.framebufferHeight,{format:ai,type:Lr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,ce=null,_e=null;m.depth&&(_e=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=m.stencil?Go:_s,ce=m.stencil?ys:xr);const be={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(be),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Ps(f.textureWidth,f.textureHeight,{format:ai,type:Lr,depthTexture:new kT(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const me=e.properties.get(v);me.__ignoreDepthValues=f.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Te.setContext(r),Te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function X(G){for(let Q=0;Q<G.removed.length;Q++){const ce=G.removed[Q],_e=x.indexOf(ce);_e>=0&&(x[_e]=null,y[_e].disconnect(ce))}for(let Q=0;Q<G.added.length;Q++){const ce=G.added[Q];let _e=x.indexOf(ce);if(_e===-1){for(let me=0;me<y.length;me++)if(me>=x.length){x.push(ce),_e=me;break}else if(x[me]===null){x[me]=ce,_e=me;break}if(_e===-1)break}const be=y[_e];be&&be.connect(ce)}}const W=new z,Y=new z;function D(G,Q,ce){W.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(ce.matrixWorld);const _e=W.distanceTo(Y),be=Q.projectionMatrix.elements,me=ce.projectionMatrix.elements,$e=be[14]/(be[10]-1),Ne=be[14]/(be[10]+1),O=(be[9]+1)/be[5],zt=(be[9]-1)/be[5],Ee=(be[8]-1)/be[0],Pe=(me[8]+1)/me[0],xe=$e*Ee,ht=$e*Pe,Oe=_e/(-Ee+Pe),C=Oe*-Ee;Q.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(C),G.translateZ(Oe),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const M=$e+Oe,k=Ne+Oe,re=xe-C,J=ht+(_e-C),ie=O*Ne/k*M,ge=zt*Ne/k*M;G.projectionMatrix.makePerspective(re,J,ie,ge,M,k),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function U(G,Q){Q===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Q.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;_.texture!==null&&(G.near=_.depthNear,G.far=_.depthFar),S.near=L.near=b.near=G.near,S.far=L.far=b.far=G.far,(R!==S.near||q!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,q=S.far,b.near=R,b.far=q,L.near=R,L.far=q,b.updateProjectionMatrix(),L.updateProjectionMatrix(),G.updateProjectionMatrix());const Q=G.parent,ce=S.cameras;U(S,Q);for(let _e=0;_e<ce.length;_e++)U(ce[_e],Q);ce.length===2?D(S,b,L):S.projectionMatrix.copy(b.projectionMatrix),B(G,S,Q)};function B(G,Q,ce){ce===null?G.matrix.copy(Q.matrixWorld):(G.matrix.copy(ce.matrixWorld),G.matrix.invert(),G.matrix.multiply(Q.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Q.projectionMatrix),G.projectionMatrixInverse.copy(Q.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=lm*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null};let K=null;function ne(G,Q){if(u=Q.getViewerPose(c||o),g=Q,u!==null){const ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let _e=!1;ce.length!==S.cameras.length&&(S.cameras.length=0,_e=!0);for(let me=0;me<ce.length;me++){const $e=ce[me];let Ne=null;if(p!==null)Ne=p.getViewport($e);else{const zt=d.getViewSubImage(f,$e);Ne=zt.viewport,me===0&&(e.setRenderTargetTextures(v,zt.colorTexture,f.ignoreDepthValues?void 0:zt.depthStencilTexture),e.setRenderTarget(v))}let O=$[me];O===void 0&&(O=new Wn,O.layers.enable(me),O.viewport=new $t,$[me]=O),O.matrix.fromArray($e.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray($e.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),me===0&&(S.matrix.copy(O.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),_e===!0&&S.cameras.push(O)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const me=d.getDepthInformation(ce[0]);me&&me.isValid&&me.texture&&_.init(e,me,r.renderState)}}for(let ce=0;ce<y.length;ce++){const _e=x[ce],be=y[ce];_e!==null&&be!==void 0&&be.update(_e,Q,c||o)}_.render(e,S),K&&K(G,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Te=new UT;Te.setAnimationLoop(ne),this.setAnimationLoop=function(G){K=G},this.dispose=function(){}}}function vV(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,DT(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,y,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,y):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===En&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===En&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const y=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*y,n(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=y*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===En&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function yV(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,y){const x=y.program;i.uniformBlockBinding(v,x)}function c(v,y){let x=r[v.id];x===void 0&&(g(v),x=u(v),r[v.id]=x,v.addEventListener("dispose",m));const T=y.program;i.updateUBOMapping(v,T);const w=e.render.frame;s[v.id]!==w&&(f(v),s[v.id]=w)}function u(v){const y=d();v.__bindingPointIndex=y;const x=t.createBuffer(),T=v.__size,w=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,T,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,x),x}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=r[v.id],x=v.uniforms,T=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let w=0,b=x.length;w<b;w++){const L=Array.isArray(x[w])?x[w]:[x[w]];for(let $=0,S=L.length;$<S;$++){const R=L[$];if(p(R,w,$,T)===!0){const q=R.__offset,Z=Array.isArray(R.value)?R.value:[R.value];let N=0;for(let X=0;X<Z.length;X++){const W=Z[X],Y=_(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,q+N,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,N),N+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,q,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,y,x,T){const w=v.value,b=y+"_"+x;if(T[b]===void 0)return typeof w=="number"||typeof w=="boolean"?T[b]=w:T[b]=w.clone(),!0;{const L=T[b];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return T[b]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(v){const y=v.uniforms;let x=0;const T=16;for(let b=0,L=y.length;b<L;b++){const $=Array.isArray(y[b])?y[b]:[y[b]];for(let S=0,R=$.length;S<R;S++){const q=$[S],Z=Array.isArray(q.value)?q.value:[q.value];for(let N=0,X=Z.length;N<X;N++){const W=Z[N],Y=_(W),D=x%T;D!==0&&T-D<Y.boundary&&(x+=T-D),q.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=x,x+=Y.storage}}}const w=x%T;return w>0&&(x+=T-w),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class GT{constructor(e={}){const{canvas:n=uk(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const h=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this._useLegacyLights=!1,this.toneMapping=Pr,this.toneMappingExposure=1;const y=this;let x=!1,T=0,w=0,b=null,L=-1,$=null;const S=new $t,R=new $t;let q=null;const Z=new Ze(0);let N=0,X=n.width,W=n.height,Y=1,D=null,U=null;const B=new $t(0,0,X,W),K=new $t(0,0,X,W);let ne=!1;const Te=new OT;let G=!1,Q=!1,ce=null;const _e=new Bt,be=new qe,me=new z,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ne(){return b===null?Y:1}let O=i;function zt(A,I){for(let V=0;V<A.length;V++){const j=A[V],F=n.getContext(j,I);if(F!==null)return F}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${lv}`),n.addEventListener("webglcontextlost",tt,!1),n.addEventListener("webglcontextrestored",P,!1),n.addEventListener("webglcontextcreationerror",se,!1),O===null){const I=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&I.shift(),O=zt(I,A),O===null)throw zt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ee,Pe,xe,ht,Oe,C,M,k,re,J,ie,ge,le,fe,Ce,Fe,ee,Je,He,Le,Se,he,Ue,Ye;function ot(){Ee=new T4(O),Pe=new y4(O,Ee,e),Ee.init(Pe),he=new uV(O,Ee,Pe),xe=new lV(O,Ee,Pe),ht=new C4(O),Oe=new qz,C=new cV(O,Ee,xe,Oe,Pe,he,ht),M=new x4(y),k=new w4(y),re=new Ok(O,Pe),Ue=new g4(O,Ee,re,Pe),J=new b4(O,re,ht,Ue),ie=new D4(O,J,re,ht),He=new L4(O,Pe,C),Fe=new _4(Oe),ge=new Xz(y,M,k,Ee,Pe,Ue,Fe),le=new vV(y,Oe),fe=new Kz,Ce=new nV(Ee,Pe),Je=new m4(y,M,k,xe,ie,f,l),ee=new aV(y,ie,Pe),Ye=new yV(O,ht,Pe,xe),Le=new v4(O,Ee,ht,Pe),Se=new A4(O,Ee,ht,Pe),ht.programs=ge.programs,y.capabilities=Pe,y.extensions=Ee,y.properties=Oe,y.renderLists=fe,y.shadowMap=ee,y.state=xe,y.info=ht}ot();const je=new gV(y,O);this.xr=je,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=Ee.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ee.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(X,W,!1))},this.getSize=function(A){return A.set(X,W)},this.setSize=function(A,I,V=!0){if(je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=A,W=I,n.width=Math.floor(A*Y),n.height=Math.floor(I*Y),V===!0&&(n.style.width=A+"px",n.style.height=I+"px"),this.setViewport(0,0,A,I)},this.getDrawingBufferSize=function(A){return A.set(X*Y,W*Y).floor()},this.setDrawingBufferSize=function(A,I,V){X=A,W=I,Y=V,n.width=Math.floor(A*V),n.height=Math.floor(I*V),this.setViewport(0,0,A,I)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(B)},this.setViewport=function(A,I,V,j){A.isVector4?B.set(A.x,A.y,A.z,A.w):B.set(A,I,V,j),xe.viewport(S.copy(B).multiplyScalar(Y).floor())},this.getScissor=function(A){return A.copy(K)},this.setScissor=function(A,I,V,j){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,I,V,j),xe.scissor(R.copy(K).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(A){xe.setScissorTest(ne=A)},this.setOpaqueSort=function(A){D=A},this.setTransparentSort=function(A){U=A},this.getClearColor=function(A){return A.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(A=!0,I=!0,V=!0){let j=0;if(A){let F=!1;if(b!==null){const ue=b.texture.format;F=ue===yT||ue===vT||ue===gT}if(F){const ue=b.texture.type,ye=ue===Lr||ue===xr||ue===cv||ue===ys||ue===pT||ue===mT,Ae=Je.getClearColor(),Re=Je.getClearAlpha(),Be=Ae.r,De=Ae.g,Ie=Ae.b;ye?(p[0]=Be,p[1]=De,p[2]=Ie,p[3]=Re,O.clearBufferuiv(O.COLOR,0,p)):(g[0]=Be,g[1]=De,g[2]=Ie,g[3]=Re,O.clearBufferiv(O.COLOR,0,g))}else j|=O.COLOR_BUFFER_BIT}I&&(j|=O.DEPTH_BUFFER_BIT),V&&(j|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",tt,!1),n.removeEventListener("webglcontextrestored",P,!1),n.removeEventListener("webglcontextcreationerror",se,!1),fe.dispose(),Ce.dispose(),Oe.dispose(),M.dispose(),k.dispose(),ie.dispose(),Ue.dispose(),Ye.dispose(),ge.dispose(),je.dispose(),je.removeEventListener("sessionstart",Fn),je.removeEventListener("sessionend",rt),ce&&(ce.dispose(),ce=null),on.stop()};function tt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const A=ht.autoReset,I=ee.enabled,V=ee.autoUpdate,j=ee.needsUpdate,F=ee.type;ot(),ht.autoReset=A,ee.enabled=I,ee.autoUpdate=V,ee.needsUpdate=j,ee.type=F}function se(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function oe(A){const I=A.target;I.removeEventListener("dispose",oe),pe(I)}function pe(A){Me(A),Oe.remove(A)}function Me(A){const I=Oe.get(A).programs;I!==void 0&&(I.forEach(function(V){ge.releaseProgram(V)}),A.isShaderMaterial&&ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,I,V,j,F,ue){I===null&&(I=$e);const ye=F.isMesh&&F.matrixWorld.determinant()<0,Ae=Ub(A,I,V,j,F);xe.setMaterial(j,ye);let Re=V.index,Be=1;if(j.wireframe===!0){if(Re=J.getWireframeAttribute(V),Re===void 0)return;Be=2}const De=V.drawRange,Ie=V.attributes.position;let Tt=De.start*Be,Tn=(De.start+De.count)*Be;ue!==null&&(Tt=Math.max(Tt,ue.start*Be),Tn=Math.min(Tn,(ue.start+ue.count)*Be)),Re!==null?(Tt=Math.max(Tt,0),Tn=Math.min(Tn,Re.count)):Ie!=null&&(Tt=Math.max(Tt,0),Tn=Math.min(Tn,Ie.count));const It=Tn-Tt;if(It<0||It===1/0)return;Ue.setup(F,j,Ae,V,Re);let Ai,pt=Le;if(Re!==null&&(Ai=re.get(Re),pt=Se,pt.setIndex(Ai)),F.isMesh)j.wireframe===!0?(xe.setLineWidth(j.wireframeLinewidth*Ne()),pt.setMode(O.LINES)):pt.setMode(O.TRIANGLES);else if(F.isLine){let ze=j.linewidth;ze===void 0&&(ze=1),xe.setLineWidth(ze*Ne()),F.isLineSegments?pt.setMode(O.LINES):F.isLineLoop?pt.setMode(O.LINE_LOOP):pt.setMode(O.LINE_STRIP)}else F.isPoints?pt.setMode(O.POINTS):F.isSprite&&pt.setMode(O.TRIANGLES);if(F.isBatchedMesh)pt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)pt.renderInstances(Tt,It,F.count);else if(V.isInstancedBufferGeometry){const ze=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,jd=Math.min(V.instanceCount,ze);pt.renderInstances(Tt,It,jd)}else pt.render(Tt,It)};function Ke(A,I,V){A.transparent===!0&&A.side===ki&&A.forceSinglePass===!1?(A.side=En,A.needsUpdate=!0,Fl(A,I,V),A.side=kr,A.needsUpdate=!0,Fl(A,I,V),A.side=ki):Fl(A,I,V)}this.compile=function(A,I,V=null){V===null&&(V=A),m=Ce.get(V),m.init(),v.push(m),V.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),A!==V&&A.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights(y._useLegacyLights);const j=new Set;return A.traverse(function(F){const ue=F.material;if(ue)if(Array.isArray(ue))for(let ye=0;ye<ue.length;ye++){const Ae=ue[ye];Ke(Ae,V,F),j.add(Ae)}else Ke(ue,V,F),j.add(ue)}),v.pop(),m=null,j},this.compileAsync=function(A,I,V=null){const j=this.compile(A,I,V);return new Promise(F=>{function ue(){if(j.forEach(function(ye){Oe.get(ye).currentProgram.isReady()&&j.delete(ye)}),j.size===0){F(A);return}setTimeout(ue,10)}Ee.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let it=null;function Vt(A){it&&it(A)}function Fn(){on.stop()}function rt(){on.start()}const on=new UT;on.setAnimationLoop(Vt),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(A){it=A,je.setAnimationLoop(A),A===null?on.stop():on.start()},je.addEventListener("sessionstart",Fn),je.addEventListener("sessionend",rt),this.render=function(A,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(je.cameraAutoUpdate===!0&&je.updateCamera(I),I=je.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,I,b),m=Ce.get(A,v.length),m.init(),v.push(m),_e.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Te.setFromProjectionMatrix(_e),Q=this.localClippingEnabled,G=Fe.init(this.clippingPlanes,Q),_=fe.get(A,h.length),_.init(),h.push(_),hi(A,I,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(D,U),this.info.render.frame++,G===!0&&Fe.beginShadows();const V=m.state.shadowsArray;if(ee.render(V,A,I),G===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(je.enabled===!1||je.isPresenting===!1||je.hasDepthSensing()===!1)&&Je.render(_,A),m.setupLights(y._useLegacyLights),I.isArrayCamera){const j=I.cameras;for(let F=0,ue=j.length;F<ue;F++){const ye=j[F];wv(_,A,ye,ye.viewport)}}else wv(_,A,I);b!==null&&(C.updateMultisampleRenderTarget(b),C.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(y,A,I),Ue.resetDefaultState(),L=-1,$=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function hi(A,I,V,j){if(A.visible===!1)return;if(A.layers.test(I.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(I);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Te.intersectsSprite(A)){j&&me.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_e);const ye=ie.update(A),Ae=A.material;Ae.visible&&_.push(A,ye,Ae,V,me.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Te.intersectsObject(A))){const ye=ie.update(A),Ae=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),me.copy(A.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),me.copy(ye.boundingSphere.center)),me.applyMatrix4(A.matrixWorld).applyMatrix4(_e)),Array.isArray(Ae)){const Re=ye.groups;for(let Be=0,De=Re.length;Be<De;Be++){const Ie=Re[Be],Tt=Ae[Ie.materialIndex];Tt&&Tt.visible&&_.push(A,ye,Tt,V,me.z,Ie)}}else Ae.visible&&_.push(A,ye,Ae,V,me.z,null)}}const ue=A.children;for(let ye=0,Ae=ue.length;ye<Ae;ye++)hi(ue[ye],I,V,j)}function wv(A,I,V,j){const F=A.opaque,ue=A.transmissive,ye=A.transparent;m.setupLightsView(V),G===!0&&Fe.setGlobalState(y.clippingPlanes,V),ue.length>0&&Ob(F,ue,I,V),j&&xe.viewport(S.copy(j)),F.length>0&&kl(F,I,V),ue.length>0&&kl(ue,I,V),ye.length>0&&kl(ye,I,V),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Ob(A,I,V,j){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const ue=Pe.isWebGL2;ce===null&&(ce=new Ps(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?ul:Lr,minFilter:hs,samples:ue?4:0})),y.getDrawingBufferSize(be),ue?ce.setSize(be.x,be.y):ce.setSize(cm(be.x),cm(be.y));const ye=y.getRenderTarget();y.setRenderTarget(ce),y.getClearColor(Z),N=y.getClearAlpha(),N<1&&y.setClearColor(16777215,.5),y.clear();const Ae=y.toneMapping;y.toneMapping=Pr,kl(A,V,j),C.updateMultisampleRenderTarget(ce),C.updateRenderTargetMipmap(ce);let Re=!1;for(let Be=0,De=I.length;Be<De;Be++){const Ie=I[Be],Tt=Ie.object,Tn=Ie.geometry,It=Ie.material,Ai=Ie.group;if(It.side===ki&&Tt.layers.test(j.layers)){const pt=It.side;It.side=En,It.needsUpdate=!0,Tv(Tt,V,j,Tn,It,Ai),It.side=pt,It.needsUpdate=!0,Re=!0}}Re===!0&&(C.updateMultisampleRenderTarget(ce),C.updateRenderTargetMipmap(ce)),y.setRenderTarget(ye),y.setClearColor(Z,N),y.toneMapping=Ae}function kl(A,I,V){const j=I.isScene===!0?I.overrideMaterial:null;for(let F=0,ue=A.length;F<ue;F++){const ye=A[F],Ae=ye.object,Re=ye.geometry,Be=j===null?ye.material:j,De=ye.group;Ae.layers.test(V.layers)&&Tv(Ae,I,V,Re,Be,De)}}function Tv(A,I,V,j,F,ue){A.onBeforeRender(y,I,V,j,F,ue),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),F.onBeforeRender(y,I,V,j,A,ue),F.transparent===!0&&F.side===ki&&F.forceSinglePass===!1?(F.side=En,F.needsUpdate=!0,y.renderBufferDirect(V,I,j,F,A,ue),F.side=kr,F.needsUpdate=!0,y.renderBufferDirect(V,I,j,F,A,ue),F.side=ki):y.renderBufferDirect(V,I,j,F,A,ue),A.onAfterRender(y,I,V,j,F,ue)}function Fl(A,I,V){I.isScene!==!0&&(I=$e);const j=Oe.get(A),F=m.state.lights,ue=m.state.shadowsArray,ye=F.state.version,Ae=ge.getParameters(A,F.state,ue,I,V),Re=ge.getProgramCacheKey(Ae);let Be=j.programs;j.environment=A.isMeshStandardMaterial?I.environment:null,j.fog=I.fog,j.envMap=(A.isMeshStandardMaterial?k:M).get(A.envMap||j.environment),Be===void 0&&(A.addEventListener("dispose",oe),Be=new Map,j.programs=Be);let De=Be.get(Re);if(De!==void 0){if(j.currentProgram===De&&j.lightsStateVersion===ye)return Av(A,Ae),De}else Ae.uniforms=ge.getUniforms(A),A.onBuild(V,Ae,y),A.onBeforeCompile(Ae,y),De=ge.acquireProgram(Ae,Re),Be.set(Re,De),j.uniforms=Ae.uniforms;const Ie=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ie.clippingPlanes=Fe.uniform),Av(A,Ae),j.needsLights=Fb(A),j.lightsStateVersion=ye,j.needsLights&&(Ie.ambientLightColor.value=F.state.ambient,Ie.lightProbe.value=F.state.probe,Ie.directionalLights.value=F.state.directional,Ie.directionalLightShadows.value=F.state.directionalShadow,Ie.spotLights.value=F.state.spot,Ie.spotLightShadows.value=F.state.spotShadow,Ie.rectAreaLights.value=F.state.rectArea,Ie.ltc_1.value=F.state.rectAreaLTC1,Ie.ltc_2.value=F.state.rectAreaLTC2,Ie.pointLights.value=F.state.point,Ie.pointLightShadows.value=F.state.pointShadow,Ie.hemisphereLights.value=F.state.hemi,Ie.directionalShadowMap.value=F.state.directionalShadowMap,Ie.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ie.spotShadowMap.value=F.state.spotShadowMap,Ie.spotLightMatrix.value=F.state.spotLightMatrix,Ie.spotLightMap.value=F.state.spotLightMap,Ie.pointShadowMap.value=F.state.pointShadowMap,Ie.pointShadowMatrix.value=F.state.pointShadowMatrix),j.currentProgram=De,j.uniformsList=null,De}function bv(A){if(A.uniformsList===null){const I=A.currentProgram.getUniforms();A.uniformsList=iu.seqWithValue(I.seq,A.uniforms)}return A.uniformsList}function Av(A,I){const V=Oe.get(A);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function Ub(A,I,V,j,F){I.isScene!==!0&&(I=$e),C.resetTextureUnits();const ue=I.fog,ye=j.isMeshStandardMaterial?I.environment:null,Ae=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Ji,Re=(j.isMeshStandardMaterial?k:M).get(j.envMap||ye),Be=j.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,De=!!V.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ie=!!V.morphAttributes.position,Tt=!!V.morphAttributes.normal,Tn=!!V.morphAttributes.color;let It=Pr;j.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(It=y.toneMapping);const Ai=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,pt=Ai!==void 0?Ai.length:0,ze=Oe.get(j),jd=m.state.lights;if(G===!0&&(Q===!0||A!==$)){const Bn=A===$&&j.id===L;Fe.setState(j,A,Bn)}let St=!1;j.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==jd.state.version||ze.outputColorSpace!==Ae||F.isBatchedMesh&&ze.batching===!1||!F.isBatchedMesh&&ze.batching===!0||F.isInstancedMesh&&ze.instancing===!1||!F.isInstancedMesh&&ze.instancing===!0||F.isSkinnedMesh&&ze.skinning===!1||!F.isSkinnedMesh&&ze.skinning===!0||F.isInstancedMesh&&ze.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&ze.instancingColor===!1&&F.instanceColor!==null||ze.envMap!==Re||j.fog===!0&&ze.fog!==ue||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Fe.numPlanes||ze.numIntersection!==Fe.numIntersection)||ze.vertexAlphas!==Be||ze.vertexTangents!==De||ze.morphTargets!==Ie||ze.morphNormals!==Tt||ze.morphColors!==Tn||ze.toneMapping!==It||Pe.isWebGL2===!0&&ze.morphTargetsCount!==pt)&&(St=!0):(St=!0,ze.__version=j.version);let Wr=ze.currentProgram;St===!0&&(Wr=Fl(j,I,F));let Cv=!1,ta=!1,Wd=!1;const Yt=Wr.getUniforms(),$r=ze.uniforms;if(xe.useProgram(Wr.program)&&(Cv=!0,ta=!0,Wd=!0),j.id!==L&&(L=j.id,ta=!0),Cv||$!==A){Yt.setValue(O,"projectionMatrix",A.projectionMatrix),Yt.setValue(O,"viewMatrix",A.matrixWorldInverse);const Bn=Yt.map.cameraPosition;Bn!==void 0&&Bn.setValue(O,me.setFromMatrixPosition(A.matrixWorld)),Pe.logarithmicDepthBuffer&&Yt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Yt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),$!==A&&($=A,ta=!0,Wd=!0)}if(F.isSkinnedMesh){Yt.setOptional(O,F,"bindMatrix"),Yt.setOptional(O,F,"bindMatrixInverse");const Bn=F.skeleton;Bn&&(Pe.floatVertexTextures?(Bn.boneTexture===null&&Bn.computeBoneTexture(),Yt.setValue(O,"boneTexture",Bn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(Yt.setOptional(O,F,"batchingTexture"),Yt.setValue(O,"batchingTexture",F._matricesTexture,C));const $d=V.morphAttributes;if(($d.position!==void 0||$d.normal!==void 0||$d.color!==void 0&&Pe.isWebGL2===!0)&&He.update(F,V,Wr),(ta||ze.receiveShadow!==F.receiveShadow)&&(ze.receiveShadow=F.receiveShadow,Yt.setValue(O,"receiveShadow",F.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&($r.envMap.value=Re,$r.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),ta&&(Yt.setValue(O,"toneMappingExposure",y.toneMappingExposure),ze.needsLights&&kb($r,Wd),ue&&j.fog===!0&&le.refreshFogUniforms($r,ue),le.refreshMaterialUniforms($r,j,Y,W,ce),iu.upload(O,bv(ze),$r,C)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(iu.upload(O,bv(ze),$r,C),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Yt.setValue(O,"center",F.center),Yt.setValue(O,"modelViewMatrix",F.modelViewMatrix),Yt.setValue(O,"normalMatrix",F.normalMatrix),Yt.setValue(O,"modelMatrix",F.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Bn=j.uniformsGroups;for(let Xd=0,Bb=Bn.length;Xd<Bb;Xd++)if(Pe.isWebGL2){const Rv=Bn[Xd];Ye.update(Rv,Wr),Ye.bind(Rv,Wr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Wr}function kb(A,I){A.ambientLightColor.needsUpdate=I,A.lightProbe.needsUpdate=I,A.directionalLights.needsUpdate=I,A.directionalLightShadows.needsUpdate=I,A.pointLights.needsUpdate=I,A.pointLightShadows.needsUpdate=I,A.spotLights.needsUpdate=I,A.spotLightShadows.needsUpdate=I,A.rectAreaLights.needsUpdate=I,A.hemisphereLights.needsUpdate=I}function Fb(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,I,V){Oe.get(A.texture).__webglTexture=I,Oe.get(A.depthTexture).__webglTexture=V;const j=Oe.get(A);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=V===void 0,j.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,I){const V=Oe.get(A);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(A,I=0,V=0){b=A,T=I,w=V;let j=!0,F=null,ue=!1,ye=!1;if(A){const Re=Oe.get(A);Re.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(O.FRAMEBUFFER,null),j=!1):Re.__webglFramebuffer===void 0?C.setupRenderTarget(A):Re.__hasExternalTextures&&C.rebindTextures(A,Oe.get(A.texture).__webglTexture,Oe.get(A.depthTexture).__webglTexture);const Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ye=!0);const De=Oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(De[I])?F=De[I][V]:F=De[I],ue=!0):Pe.isWebGL2&&A.samples>0&&C.useMultisampledRTT(A)===!1?F=Oe.get(A).__webglMultisampledFramebuffer:Array.isArray(De)?F=De[V]:F=De,S.copy(A.viewport),R.copy(A.scissor),q=A.scissorTest}else S.copy(B).multiplyScalar(Y).floor(),R.copy(K).multiplyScalar(Y).floor(),q=ne;if(xe.bindFramebuffer(O.FRAMEBUFFER,F)&&Pe.drawBuffers&&j&&xe.drawBuffers(A,F),xe.viewport(S),xe.scissor(R),xe.setScissorTest(q),ue){const Re=Oe.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+I,Re.__webglTexture,V)}else if(ye){const Re=Oe.get(A.texture),Be=I||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.__webglTexture,V||0,Be)}L=-1},this.readRenderTargetPixels=function(A,I,V,j,F,ue,ye){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae){xe.bindFramebuffer(O.FRAMEBUFFER,Ae);try{const Re=A.texture,Be=Re.format,De=Re.type;if(Be!==ai&&he.convert(Be)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=De===ul&&(Ee.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(De!==Lr&&he.convert(De)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===Fi&&(Pe.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=A.width-j&&V>=0&&V<=A.height-F&&O.readPixels(I,V,j,F,he.convert(Be),he.convert(De),ue)}finally{const Re=b!==null?Oe.get(b).__webglFramebuffer:null;xe.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(A,I,V=0){const j=Math.pow(2,-V),F=Math.floor(I.image.width*j),ue=Math.floor(I.image.height*j);C.setTexture2D(I,0),O.copyTexSubImage2D(O.TEXTURE_2D,V,0,0,A.x,A.y,F,ue),xe.unbindTexture()},this.copyTextureToTexture=function(A,I,V,j=0){const F=I.image.width,ue=I.image.height,ye=he.convert(V.format),Ae=he.convert(V.type);C.setTexture2D(V,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment),I.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,j,A.x,A.y,F,ue,ye,Ae,I.image.data):I.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,j,A.x,A.y,I.mipmaps[0].width,I.mipmaps[0].height,ye,I.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,j,A.x,A.y,ye,Ae,I.image),j===0&&V.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(A,I,V,j,F=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=A.max.x-A.min.x+1,ye=A.max.y-A.min.y+1,Ae=A.max.z-A.min.z+1,Re=he.convert(j.format),Be=he.convert(j.type);let De;if(j.isData3DTexture)C.setTexture3D(j,0),De=O.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)C.setTexture2DArray(j,0),De=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,j.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,j.unpackAlignment);const Ie=O.getParameter(O.UNPACK_ROW_LENGTH),Tt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Tn=O.getParameter(O.UNPACK_SKIP_PIXELS),It=O.getParameter(O.UNPACK_SKIP_ROWS),Ai=O.getParameter(O.UNPACK_SKIP_IMAGES),pt=V.isCompressedTexture?V.mipmaps[F]:V.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,pt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,A.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,A.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,A.min.z),V.isDataTexture||V.isData3DTexture?O.texSubImage3D(De,F,I.x,I.y,I.z,ue,ye,Ae,Re,Be,pt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(De,F,I.x,I.y,I.z,ue,ye,Ae,Re,pt.data)):O.texSubImage3D(De,F,I.x,I.y,I.z,ue,ye,Ae,Re,Be,pt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ie),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Tt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Tn),O.pixelStorei(O.UNPACK_SKIP_ROWS,It),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ai),F===0&&j.generateMipmaps&&O.generateMipmap(De),xe.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),xe.unbindTexture()},this.resetState=function(){T=0,w=0,b=null,xe.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===uv?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===Od?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===jt?xs:xT}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===xs?jt:Ji}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class _V extends GT{}_V.prototype.isWebGL1Renderer=!0;class xV extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class jT extends Il{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fS=new Bt,dm=new bT,kc=new Ud,Fc=new z;class SV extends wn{constructor(e=new nr,n=new jT){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),kc.copy(i.boundingSphere),kc.applyMatrix4(r),kc.radius+=s,e.ray.intersectsSphere(kc)===!1)return;fS.copy(r).invert(),dm.copy(e.ray).applyMatrix4(fS);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=c.getX(g);Fc.fromBufferAttribute(d,m),hS(Fc,m,l,r,e,n,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=f,_=p;g<_;g++)Fc.fromBufferAttribute(d,g),hS(Fc,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function hS(t,e,n,i,r,s,o){const a=dm.distanceSqToPoint(t);if(a<n){const l=new z;dm.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lv}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lv);const EV=()=>{const t=H.useRef(null),{darkMode:e}=Pw();return H.useEffect(()=>{if(!t.current)return;const n=new xV,i=new Wn(85,window.innerWidth/window.innerHeight,.1,1e3);i.position.z=15;const r=new GT({alpha:!0,antialias:!0,powerPreference:"high-performance"});r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.current.appendChild(r.domElement);const s=(m,h,v,y)=>{const x=new nr,T=new Float32Array(m*3);for(let b=0;b<m*3;b+=3)T[b]=(Math.random()-.5)*h,T[b+1]=(Math.random()-.5)*h,T[b+2]=(Math.random()-.5)*h;x.setAttribute("position",new ui(T,3));const w=new jT({size:v,color:e?6619098:1096065,transparent:!0,opacity:y,blending:em});return new SV(x,w)},o=s(2e3,30,.02,.8),a=s(1500,25,.03,.6),l=s(1e3,20,.04,.4);n.add(o,a,l);let c=0,u=0,d=0,f=0;const p=m=>{c=m.clientX/window.innerWidth*2-1,u=-(m.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",p);const g=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",g);const _=()=>{requestAnimationFrame(_),d+=(c-d)*.02,f+=(u-f)*.02,o.rotation.x+=2e-4,o.rotation.y+=3e-4,o.rotation.z+=f*2e-4,a.rotation.x+=3e-4,a.rotation.y+=4e-4,a.rotation.z+=d*3e-4,l.rotation.x+=4e-4,l.rotation.y+=5e-4,l.rotation.z+=(d+f)*4e-4,o.position.x=d*.2,o.position.y=f*.2,a.position.x=-d*.1,a.position.y=-f*.1,l.position.x=d*.15,l.position.y=f*.15,r.render(n,i)};return _(),()=>{var m;window.removeEventListener("mousemove",p),window.removeEventListener("resize",g),(m=t.current)==null||m.removeChild(r.domElement),o.geometry.dispose(),a.geometry.dispose(),l.geometry.dispose(),o.material.dispose(),a.material.dispose(),l.material.dispose()}},[e]),E.jsx("div",{ref:t,className:"w-full h-full"})};var pS={};/**
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
 */const WT=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},MV=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},$T={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),i.push(n[u],n[d],n[f],n[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(WT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):MV(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||d==null)throw new wV;const f=s<<2|a>>4;if(i.push(f),c!==64){const p=a<<4&240|c>>2;if(i.push(p),d!==64){const g=c<<6&192|d;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wV extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const TV=function(t){const e=WT(t);return $T.encodeByteArray(e,!0)},XT=function(t){return TV(t).replace(/\./g,"")},bV=function(t){try{return $T.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function AV(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const CV=()=>AV().__FIREBASE_DEFAULTS__,RV=()=>{if(typeof process>"u"||typeof pS>"u")return;const t=pS.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},PV=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bV(t[1]);return e&&JSON.parse(e)},LV=()=>{try{return CV()||RV()||PV()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qT=()=>{var t;return(t=LV())===null||t===void 0?void 0:t.config};/**
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
 */class DV{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}function YT(){try{return typeof indexedDB=="object"}catch{return!1}}function KT(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function NV(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const IV="FirebaseError";class ea extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=IV,Object.setPrototypeOf(this,ea.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zd.prototype.create)}}class zd{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?OV(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ea(r,a,i)}}function OV(t,e){return t.replace(UV,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const UV=/\{\$([^}]+)}/g;function fm(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(mS(s)&&mS(o)){if(!fm(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function mS(t){return t!==null&&typeof t=="object"}/**
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
 */function fv(t){return t&&t._delegate?t._delegate:t}class Br{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const os="[DEFAULT]";/**
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
 */class kV{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new DV;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BV(e))try{this.getOrInitializeService({instanceIdentifier:os})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=os){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=os){return this.instances.has(e)}getOptions(e=os){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:FV(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=os){return this.component?this.component.multipleInstances?e:os:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function FV(t){return t===os?void 0:t}function BV(t){return t.instantiationMode==="EAGER"}/**
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
 */class zV{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kV(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ct;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ct||(ct={}));const VV={debug:ct.DEBUG,verbose:ct.VERBOSE,info:ct.INFO,warn:ct.WARN,error:ct.ERROR,silent:ct.SILENT},HV=ct.INFO,GV={[ct.DEBUG]:"log",[ct.VERBOSE]:"log",[ct.INFO]:"info",[ct.WARN]:"warn",[ct.ERROR]:"error"},jV=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=GV[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class WV{constructor(e){this.name=e,this._logLevel=HV,this._logHandler=jV,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ct))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?VV[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ct.DEBUG,...e),this._logHandler(this,ct.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ct.VERBOSE,...e),this._logHandler(this,ct.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ct.INFO,...e),this._logHandler(this,ct.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ct.WARN,...e),this._logHandler(this,ct.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ct.ERROR,...e),this._logHandler(this,ct.ERROR,...e)}}const $V=(t,e)=>e.some(n=>t instanceof n);let gS,vS;function XV(){return gS||(gS=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qV(){return vS||(vS=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ZT=new WeakMap,hm=new WeakMap,QT=new WeakMap,wh=new WeakMap,hv=new WeakMap;function YV(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Xi(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ZT.set(n,t)}).catch(()=>{}),hv.set(e,t),e}function KV(t){if(hm.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});hm.set(t,e)}let pm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||QT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ZV(t){pm=t(pm)}function QV(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Th(this),e,...n);return QT.set(i,e.sort?e.sort():[e]),Xi(i)}:qV().includes(t)?function(...e){return t.apply(Th(this),e),Xi(ZT.get(this))}:function(...e){return Xi(t.apply(Th(this),e))}}function JV(t){return typeof t=="function"?QV(t):(t instanceof IDBTransaction&&KV(t),$V(t,XV())?new Proxy(t,pm):t)}function Xi(t){if(t instanceof IDBRequest)return YV(t);if(wh.has(t))return wh.get(t);const e=JV(t);return e!==t&&(wh.set(t,e),hv.set(e,t)),e}const Th=t=>hv.get(t);function Vd(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Xi(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Xi(o.result),l.oldVersion,l.newVersion,Xi(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}function bh(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",i=>e(i.oldVersion,i)),Xi(n).then(()=>{})}const e5=["get","getKey","getAll","getAllKeys","count"],t5=["put","add","delete","clear"],Ah=new Map;function yS(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ah.get(e))return Ah.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=t5.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||e5.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Ah.set(e,s),s}ZV(t=>({...t,get:(e,n,i)=>yS(e,n)||t.get(e,n,i),has:(e,n)=>!!yS(e,n)||t.has(e,n)}));/**
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
 */class n5{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(i5(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function i5(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mm="@firebase/app",_S="0.10.13";/**
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
 */const er=new WV("@firebase/app"),r5="@firebase/app-compat",s5="@firebase/analytics-compat",o5="@firebase/analytics",a5="@firebase/app-check-compat",l5="@firebase/app-check",c5="@firebase/auth",u5="@firebase/auth-compat",d5="@firebase/database",f5="@firebase/data-connect",h5="@firebase/database-compat",p5="@firebase/functions",m5="@firebase/functions-compat",g5="@firebase/installations",v5="@firebase/installations-compat",y5="@firebase/messaging",_5="@firebase/messaging-compat",x5="@firebase/performance",S5="@firebase/performance-compat",E5="@firebase/remote-config",M5="@firebase/remote-config-compat",w5="@firebase/storage",T5="@firebase/storage-compat",b5="@firebase/firestore",A5="@firebase/vertexai-preview",C5="@firebase/firestore-compat",R5="firebase";/**
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
 */const gm="[DEFAULT]",P5={[mm]:"fire-core",[r5]:"fire-core-compat",[o5]:"fire-analytics",[s5]:"fire-analytics-compat",[l5]:"fire-app-check",[a5]:"fire-app-check-compat",[c5]:"fire-auth",[u5]:"fire-auth-compat",[d5]:"fire-rtdb",[f5]:"fire-data-connect",[h5]:"fire-rtdb-compat",[p5]:"fire-fn",[m5]:"fire-fn-compat",[g5]:"fire-iid",[v5]:"fire-iid-compat",[y5]:"fire-fcm",[_5]:"fire-fcm-compat",[x5]:"fire-perf",[S5]:"fire-perf-compat",[E5]:"fire-rc",[M5]:"fire-rc-compat",[w5]:"fire-gcs",[T5]:"fire-gcs-compat",[b5]:"fire-fst",[C5]:"fire-fst-compat",[A5]:"fire-vertex","fire-js":"fire-js",[R5]:"fire-js-all"};/**
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
 */const Ku=new Map,L5=new Map,vm=new Map;function xS(t,e){try{t.container.addComponent(e)}catch(n){er.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ls(t){const e=t.name;if(vm.has(e))return er.debug(`There were multiple attempts to register component ${e}.`),!1;vm.set(e,t);for(const n of Ku.values())xS(n,t);for(const n of L5.values())xS(n,t);return!0}function pv(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const D5={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dr=new zd("app","Firebase",D5);/**
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
 */class N5{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Br("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dr.create("app-deleted",{appName:this._name})}}function JT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:gm,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Dr.create("bad-app-name",{appName:String(r)});if(n||(n=qT()),!n)throw Dr.create("no-options");const s=Ku.get(r);if(s){if(fm(n,s.options)&&fm(i,s.config))return s;throw Dr.create("duplicate-app",{appName:r})}const o=new zV(r);for(const l of vm.values())o.addComponent(l);const a=new N5(n,i,o);return Ku.set(r,a),a}function I5(t=gm){const e=Ku.get(t);if(!e&&t===gm&&qT())return JT();if(!e)throw Dr.create("no-app",{appName:t});return e}function Nr(t,e,n){var i;let r=(i=P5[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),er.warn(a.join(" "));return}Ls(new Br(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const O5="firebase-heartbeat-database",U5=1,dl="firebase-heartbeat-store";let Ch=null;function eb(){return Ch||(Ch=Vd(O5,U5,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(dl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Dr.create("idb-open",{originalErrorMessage:t.message})})),Ch}async function k5(t){try{const n=(await eb()).transaction(dl),i=await n.objectStore(dl).get(tb(t));return await n.done,i}catch(e){if(e instanceof ea)er.warn(e.message);else{const n=Dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});er.warn(n.message)}}}async function SS(t,e){try{const i=(await eb()).transaction(dl,"readwrite");await i.objectStore(dl).put(e,tb(t)),await i.done}catch(n){if(n instanceof ea)er.warn(n.message);else{const i=Dr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});er.warn(i.message)}}}function tb(t){return`${t.name}!${t.options.appId}`}/**
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
 */const F5=1024,B5=30*24*60*60*1e3;class z5{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new H5(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ES();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=B5}),this._storage.overwrite(this._heartbeatsCache))}catch(i){er.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ES(),{heartbeatsToSend:i,unsentEntries:r}=V5(this._heartbeatsCache.heartbeats),s=XT(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return er.warn(n),""}}}function ES(){return new Date().toISOString().substring(0,10)}function V5(t,e=F5){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),MS(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),MS(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class H5{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return YT()?KT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await k5(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return SS(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return SS(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function MS(t){return XT(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function G5(t){Ls(new Br("platform-logger",e=>new n5(e),"PRIVATE")),Ls(new Br("heartbeat",e=>new z5(e),"PRIVATE")),Nr(mm,_S,t),Nr(mm,_S,"esm2017"),Nr("fire-js","")}G5("");var j5="firebase",W5="10.14.1";/**
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
 */Nr(j5,W5,"app");const nb="@firebase/installations",mv="0.6.9";/**
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
 */const ib=1e4,rb=`w:${mv}`,sb="FIS_v2",$5="https://firebaseinstallations.googleapis.com/v1",X5=60*60*1e3,q5="installations",Y5="Installations";/**
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
 */const K5={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ds=new zd(q5,Y5,K5);function ob(t){return t instanceof ea&&t.code.includes("request-failed")}/**
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
 */function ab({projectId:t}){return`${$5}/projects/${t}/installations`}function lb(t){return{token:t.token,requestStatus:2,expiresIn:Q5(t.expiresIn),creationTime:Date.now()}}async function cb(t,e){const i=(await e.json()).error;return Ds.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function ub({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Z5(t,{refreshToken:e}){const n=ub(t);return n.append("Authorization",J5(e)),n}async function db(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Q5(t){return Number(t.replace("s","000"))}function J5(t){return`${sb} ${t}`}/**
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
 */async function eH({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=ab(t),r=ub(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={fid:n,authVersion:sb,appId:t.appId,sdkVersion:rb},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await db(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:lb(c.authToken)}}else throw await cb("Create Installation",l)}/**
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
 */function fb(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function tH(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const nH=/^[cdef][\w-]{21}$/,ym="";function iH(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=rH(t);return nH.test(n)?n:ym}catch{return ym}}function rH(t){return tH(t).substr(0,22)}/**
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
 */function Hd(t){return`${t.appName}!${t.appId}`}/**
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
 */const hb=new Map;function pb(t,e){const n=Hd(t);mb(n,e),sH(n,e)}function mb(t,e){const n=hb.get(t);if(n)for(const i of n)i(e)}function sH(t,e){const n=oH();n&&n.postMessage({key:t,fid:e}),aH()}let ps=null;function oH(){return!ps&&"BroadcastChannel"in self&&(ps=new BroadcastChannel("[Firebase] FID Change"),ps.onmessage=t=>{mb(t.data.key,t.data.fid)}),ps}function aH(){hb.size===0&&ps&&(ps.close(),ps=null)}/**
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
 */const lH="firebase-installations-database",cH=1,Ns="firebase-installations-store";let Rh=null;function gv(){return Rh||(Rh=Vd(lH,cH,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ns)}}})),Rh}async function Zu(t,e){const n=Hd(t),r=(await gv()).transaction(Ns,"readwrite"),s=r.objectStore(Ns),o=await s.get(n);return await s.put(e,n),await r.done,(!o||o.fid!==e.fid)&&pb(t,e.fid),e}async function gb(t){const e=Hd(t),i=(await gv()).transaction(Ns,"readwrite");await i.objectStore(Ns).delete(e),await i.done}async function Gd(t,e){const n=Hd(t),r=(await gv()).transaction(Ns,"readwrite"),s=r.objectStore(Ns),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&pb(t,a.fid),a}/**
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
 */async function vv(t){let e;const n=await Gd(t.appConfig,i=>{const r=uH(i),s=dH(t,r);return e=s.registrationPromise,s.installationEntry});return n.fid===ym?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function uH(t){const e=t||{fid:iH(),registrationStatus:0};return vb(e)}function dH(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Ds.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=fH(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:hH(t)}:{installationEntry:e}}async function fH(t,e){try{const n=await eH(t,e);return Zu(t.appConfig,n)}catch(n){throw ob(n)&&n.customData.serverCode===409?await gb(t.appConfig):await Zu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function hH(t){let e=await wS(t.appConfig);for(;e.registrationStatus===1;)await fb(100),e=await wS(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await vv(t);return i||n}return e}function wS(t){return Gd(t,e=>{if(!e)throw Ds.create("installation-not-found");return vb(e)})}function vb(t){return pH(t)?{fid:t.fid,registrationStatus:0}:t}function pH(t){return t.registrationStatus===1&&t.registrationTime+ib<Date.now()}/**
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
 */async function mH({appConfig:t,heartbeatServiceProvider:e},n){const i=gH(t,n),r=Z5(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={installation:{sdkVersion:rb,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await db(()=>fetch(i,a));if(l.ok){const c=await l.json();return lb(c)}else throw await cb("Generate Auth Token",l)}function gH(t,{fid:e}){return`${ab(t)}/${e}/authTokens:generate`}/**
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
 */async function yv(t,e=!1){let n;const i=await Gd(t.appConfig,s=>{if(!yb(s))throw Ds.create("not-registered");const o=s.authToken;if(!e&&_H(o))return s;if(o.requestStatus===1)return n=vH(t,e),s;{if(!navigator.onLine)throw Ds.create("app-offline");const a=SH(s);return n=yH(t,a),a}});return n?await n:i.authToken}async function vH(t,e){let n=await TS(t.appConfig);for(;n.authToken.requestStatus===1;)await fb(100),n=await TS(t.appConfig);const i=n.authToken;return i.requestStatus===0?yv(t,e):i}function TS(t){return Gd(t,e=>{if(!yb(e))throw Ds.create("not-registered");const n=e.authToken;return EH(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function yH(t,e){try{const n=await mH(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await Zu(t.appConfig,i),n}catch(n){if(ob(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await gb(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Zu(t.appConfig,i)}throw n}}function yb(t){return t!==void 0&&t.registrationStatus===2}function _H(t){return t.requestStatus===2&&!xH(t)}function xH(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+X5}function SH(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function EH(t){return t.requestStatus===1&&t.requestTime+ib<Date.now()}/**
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
 */async function MH(t){const e=t,{installationEntry:n,registrationPromise:i}=await vv(e);return i?i.catch(console.error):yv(e).catch(console.error),n.fid}/**
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
 */async function wH(t,e=!1){const n=t;return await TH(n),(await yv(n,e)).token}async function TH(t){const{registrationPromise:e}=await vv(t);e&&await e}/**
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
 */function bH(t){if(!t||!t.options)throw Ph("App Configuration");if(!t.name)throw Ph("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ph(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ph(t){return Ds.create("missing-app-config-values",{valueName:t})}/**
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
 */const _b="installations",AH="installations-internal",CH=t=>{const e=t.getProvider("app").getImmediate(),n=bH(e),i=pv(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},RH=t=>{const e=t.getProvider("app").getImmediate(),n=pv(e,_b).getImmediate();return{getId:()=>MH(n),getToken:r=>wH(n,r)}};function PH(){Ls(new Br(_b,CH,"PUBLIC")),Ls(new Br(AH,RH,"PRIVATE"))}PH();Nr(nb,mv);Nr(nb,mv,"esm2017");/**
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
 */const LH="/firebase-messaging-sw.js",DH="/firebase-cloud-messaging-push-scope",xb="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",NH="https://fcmregistrations.googleapis.com/v1",Sb="google.c.a.c_id",IH="google.c.a.c_l",OH="google.c.a.ts",UH="google.c.a.e";var bS;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(bS||(bS={}));/**
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
 */var fl;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(fl||(fl={}));/**
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
 */function Oi(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function kH(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),r=new Uint8Array(i.length);for(let s=0;s<i.length;++s)r[s]=i.charCodeAt(s);return r}/**
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
 */const Lh="fcm_token_details_db",FH=5,AS="fcm_token_object_Store";async function BH(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Lh))return null;let e=null;return(await Vd(Lh,FH,{upgrade:async(i,r,s,o)=>{var a;if(r<2||!i.objectStoreNames.contains(AS))return;const l=o.objectStore(AS),c=await l.index("fcmSenderId").get(t);if(await l.clear(),!!c){if(r===2){const u=c;if(!u.auth||!u.p256dh||!u.endpoint)return;e={token:u.fcmToken,createTime:(a=u.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:Oi(u.vapidKey)}}}else if(r===3){const u=c;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:Oi(u.auth),p256dh:Oi(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:Oi(u.vapidKey)}}}else if(r===4){const u=c;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:Oi(u.auth),p256dh:Oi(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:Oi(u.vapidKey)}}}}}})).close(),await bh(Lh),await bh("fcm_vapid_details_db"),await bh("undefined"),zH(e)?e:null}function zH(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const VH="firebase-messaging-database",HH=1,hl="firebase-messaging-store";let Dh=null;function Eb(){return Dh||(Dh=Vd(VH,HH,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(hl)}}})),Dh}async function GH(t){const e=Mb(t),i=await(await Eb()).transaction(hl).objectStore(hl).get(e);if(i)return i;{const r=await BH(t.appConfig.senderId);if(r)return await _v(t,r),r}}async function _v(t,e){const n=Mb(t),r=(await Eb()).transaction(hl,"readwrite");return await r.objectStore(hl).put(e,n),await r.done,e}function Mb({appConfig:t}){return t.appId}/**
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
 */const jH={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},rn=new zd("messaging","Messaging",jH);/**
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
 */async function WH(t,e){const n=await Sv(t),i=wb(e),r={method:"POST",headers:n,body:JSON.stringify(i)};let s;try{s=await(await fetch(xv(t.appConfig),r)).json()}catch(o){throw rn.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw rn.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw rn.create("token-subscribe-no-token");return s.token}async function $H(t,e){const n=await Sv(t),i=wb(e.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(i)};let s;try{s=await(await fetch(`${xv(t.appConfig)}/${e.token}`,r)).json()}catch(o){throw rn.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw rn.create("token-update-failed",{errorInfo:o})}if(!s.token)throw rn.create("token-update-no-token");return s.token}async function XH(t,e){const i={method:"DELETE",headers:await Sv(t)};try{const s=await(await fetch(`${xv(t.appConfig)}/${e}`,i)).json();if(s.error){const o=s.error.message;throw rn.create("token-unsubscribe-failed",{errorInfo:o})}}catch(r){throw rn.create("token-unsubscribe-failed",{errorInfo:r==null?void 0:r.toString()})}}function xv({projectId:t}){return`${NH}/projects/${t}/registrations`}async function Sv({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function wb({p256dh:t,auth:e,endpoint:n,vapidKey:i}){const r={web:{endpoint:n,auth:e,p256dh:t}};return i!==xb&&(r.web.applicationPubKey=i),r}/**
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
 */const qH=7*24*60*60*1e3;async function YH(t){const e=await ZH(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Oi(e.getKey("auth")),p256dh:Oi(e.getKey("p256dh"))},i=await GH(t.firebaseDependencies);if(i){if(QH(i.subscriptionOptions,n))return Date.now()>=i.createTime+qH?KH(t,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await XH(t.firebaseDependencies,i.token)}catch(r){console.warn(r)}return CS(t.firebaseDependencies,n)}else return CS(t.firebaseDependencies,n)}async function KH(t,e){try{const n=await $H(t.firebaseDependencies,e),i=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await _v(t.firebaseDependencies,i),n}catch(n){throw n}}async function CS(t,e){const i={token:await WH(t,e),createTime:Date.now(),subscriptionOptions:e};return await _v(t,i),i.token}async function ZH(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:kH(e)})}function QH(t,e){const n=e.vapidKey===t.vapidKey,i=e.endpoint===t.endpoint,r=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&i&&r&&s}/**
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
 */function RS(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return JH(e,t),eG(e,t),tG(e,t),e}function JH(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const i=e.notification.body;i&&(t.notification.body=i);const r=e.notification.image;r&&(t.notification.image=r);const s=e.notification.icon;s&&(t.notification.icon=s)}function eG(t,e){e.data&&(t.data=e.data)}function tG(t,e){var n,i,r,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(r=(i=e.fcmOptions)===null||i===void 0?void 0:i.link)!==null&&r!==void 0?r:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
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
 */function nG(t){return typeof t=="object"&&!!t&&Sb in t}/**
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
 */function iG(t){if(!t||!t.options)throw Nh("App Configuration Object");if(!t.name)throw Nh("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const i of e)if(!n[i])throw Nh(i);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Nh(t){return rn.create("missing-app-config-values",{valueName:t})}/**
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
 */class rG{constructor(e,n,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const r=iG(e);this.firebaseDependencies={app:e,appConfig:r,installations:n,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
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
 */async function sG(t){try{t.swRegistration=await navigator.serviceWorker.register(LH,{scope:DH}),t.swRegistration.update().catch(()=>{})}catch(e){throw rn.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function oG(t,e){if(!e&&!t.swRegistration&&await sG(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw rn.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function aG(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=xb)}/**
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
 */async function Tb(t,e){if(!navigator)throw rn.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw rn.create("permission-blocked");return await aG(t,e==null?void 0:e.vapidKey),await oG(t,e==null?void 0:e.serviceWorkerRegistration),YH(t)}/**
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
 */async function lG(t,e,n){const i=cG(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:n[Sb],message_name:n[IH],message_time:n[OH],message_device_time:Math.floor(Date.now()/1e3)})}function cG(t){switch(t){case fl.NOTIFICATION_CLICKED:return"notification_open";case fl.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function uG(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===fl.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(RS(n)):t.onMessageHandler.next(RS(n)));const i=n.data;nG(i)&&i[UH]==="1"&&await lG(t,n.messageType,i)}const PS="@firebase/messaging",LS="0.12.12";/**
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
 */const dG=t=>{const e=new rG(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>uG(e,n)),e},fG=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:i=>Tb(e,i)}};function hG(){Ls(new Br("messaging",dG,"PUBLIC")),Ls(new Br("messaging-internal",fG,"PRIVATE")),Nr(PS,LS),Nr(PS,LS,"esm2017")}/**
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
 */async function pG(){try{await KT()}catch{return!1}return typeof window<"u"&&YT()&&NV()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function mG(t,e){if(!navigator)throw rn.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function gG(t=I5()){return pG().then(e=>{if(!e)throw rn.create("unsupported-browser")},e=>{throw rn.create("indexed-db-unsupported")}),pv(fv(t),"messaging").getImmediate()}async function vG(t,e){return t=fv(t),Tb(t,e)}function yG(t,e){return t=fv(t),mG(t,e)}hG();const _G={apiKey:"AIzaSyCwj0tO_tyYMmGqJSSFxssTdzmV8z-96rk",authDomain:"ri-yan.firebaseapp.com",projectId:"ri-yan",storageBucket:"ri-yan.firebasestorage.app",messagingSenderId:"836329298716",appId:"1:836329298716:web:b808e5a6cdcb78872038d9"},xG=JT(_G),bb=gG(xG),SG=async()=>{try{if(await Notification.requestPermission()==="granted")return await vG(bb,{vapidKey:void 0})}catch(t){console.error("Notification permission error:",t)}},EG=()=>new Promise(t=>{yG(bb,e=>{t(e)})}),MG=()=>{const[t,e]=H.useState({title:"",body:""}),[n,i]=H.useState(!1);return H.useEffect(()=>{(async()=>{try{await SG()&&i(!0)}catch(s){console.error("Error getting notification token:",s)}})()},[]),H.useEffect(()=>(EG().then(r=>{var s,o;e({title:((s=r==null?void 0:r.notification)==null?void 0:s.title)||"",body:((o=r==null?void 0:r.notification)==null?void 0:o.body)||""})}),()=>{}),[]),{notification:t,isTokenFound:n}},wG=()=>{const t=Dn(RP),{notification:e}=MG(),n=H.useRef(null),{scrollYProgress:i}=lT(),r=Gu(i,[0,1],[0,300]),s=Gu(i,[0,.5],[1,0]),[o,a]=H.useState(0);return H.useEffect(()=>{const l=setInterval(()=>{a(c=>(c+1)%t.images.length)},3e3);return()=>clearInterval(l)},[]),H.useEffect(()=>{e.title&&console.log("New notification:",e)},[e]),H.useEffect(()=>{const l=c=>{if(!n.current)return;const u=n.current.getBoundingClientRect(),d=c.clientX-u.left,f=c.clientY-u.top;n.current.style.setProperty("--mouse-x",`${d}px`),n.current.style.setProperty("--mouse-y",`${f}px`)};return window.addEventListener("mousemove",l),()=>window.removeEventListener("mousemove",l)},[]),E.jsxs("section",{id:"hero",className:"relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20",children:[E.jsxs("div",{className:"absolute inset-0 -z-0",children:[E.jsx(EV,{}),E.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(0,245,160,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(0,245,160,0.1),transparent_50%)]"})]}),E.jsxs(ve.div,{ref:n,style:{y:r,opacity:s},className:"container relative z-10",children:[E.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12 items-center",children:[E.jsxs("div",{className:"max-w-3xl",children:[E.jsxs(ve.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"text-6xl sm:text-7xl md:text-8xl font-bold mb-6",children:[E.jsx("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]",children:t.title.main}),E.jsx("br",{}),E.jsx("span",{className:"text-gray-800 dark:text-white",children:t.title.sub})]}),E.jsx(ve.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1},className:"text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl",children:t.description}),E.jsxs(ve.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},className:"flex flex-wrap gap-6",children:[E.jsxs(bo,{to:t.buttons.primary.target,spy:!0,smooth:!0,offset:-80,duration:500,className:"group relative px-8 py-4 overflow-hidden rounded-full bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] text-white font-medium",children:[E.jsx("span",{className:"absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"}),E.jsxs("span",{className:"relative flex items-center",children:[t.buttons.primary.text," ",E.jsx(HL,{size:20,className:"ml-2"})]})]}),E.jsxs(bo,{to:t.buttons.secondary.target,spy:!0,smooth:!0,offset:-80,duration:500,className:"group relative px-8 py-4 overflow-hidden rounded-full bg-transparent border-2 border-[#00F5A0] text-[#00F5A0] font-medium transition-colors hover:text-white",children:[E.jsx("span",{className:"absolute inset-0 w-full h-full bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"}),E.jsx("span",{className:"relative",children:t.buttons.secondary.text})]})]}),E.jsx(ve.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.4},className:"mt-16 flex items-center space-x-8",children:t.socialLinks.map((l,c)=>{const u=l.icon==="GitHub"?Fo:l.icon==="Linkedin"?Op:l.icon==="Twitter"?Cw:Ou;return E.jsx(ve.a,{href:l.url,target:"_blank",rel:"noopener noreferrer",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.5+c*.1},className:"group relative p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors","aria-label":l.platform,children:E.jsx(u,{className:"w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-[#00F5A0] transition-colors"})},l.platform)})})]}),E.jsx("div",{className:"hidden md:block relative",children:E.jsx(Ag,{mode:"wait",children:E.jsxs(ve.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.5},className:"relative group",children:[E.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#00F5A0]/10 to-[#00D9F5]/10 rounded-2xl transform scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300"}),E.jsx("img",{src:t.images[o],alt:`Slide ${o}`,className:"w-full h-[490px] object-cover rounded-b-2xl shadow-white"}),E.jsx(ve.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},className:"absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 via-gray/50 to-transparent rounded-b-2xl",children:E.jsx("p",{className:"text-white text-lg font-medium text-center",children:t.quotes[o]})})]},o)})})]}),E.jsx(ve.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.6},className:"hidden sm:absolute sm:bottom-8 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:block pointer-events-none",children:E.jsxs("div",{className:"flex flex-col items-center",children:[E.jsx("div",{className:"w-1 h-10 rounded-full bg-gradient-to-b from-[#00F5A0] to-transparent"}),E.jsx("span",{className:"mt-4 text-sm text-gray-500 dark:text-gray-400",children:"Scroll to explore"})]})})]})]})},TG={Code2:E.jsx(wg,{size:24}),Cpu:E.jsx($L,{size:24}),Globe:E.jsx(YL,{size:24}),Codepen:E.jsx(WL,{size:24})},bG=()=>{var s,o;const t=H.useRef(null),e=jr(t,{once:!0,margin:"-100px"}),n=Dn(PP),i={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},r={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};return E.jsx("section",{id:"about",className:"section-padding bg-gray-50 dark:bg-navy-light",children:E.jsx("div",{className:"container",children:E.jsxs(ve.div,{ref:t,initial:"hidden",animate:e?"visible":"hidden",variants:i,className:"max-w-4xl mx-auto",children:[E.jsxs(ve.div,{variants:r,className:"text-center mb-12",children:[E.jsx("h2",{className:"section-title",children:n==null?void 0:n.title}),E.jsx("p",{className:"text-gray-600 dark:text-slate-light mt-6",children:n==null?void 0:n.subtitle})]}),E.jsxs("div",{className:"grid md:grid-cols-2 gap-10",children:[E.jsxs(ve.div,{variants:r,children:[E.jsx("h3",{className:"text-2xl font-bold mb-4 text-gray-800 dark:text-white",children:(n==null?void 0:n.introTitle)||"Get to know me!"}),E.jsx("div",{className:"space-y-4 text-gray-600 dark:text-slate-light",children:(s=n==null?void 0:n.intro)==null?void 0:s.map((a,l)=>E.jsx("p",{dangerouslySetInnerHTML:{__html:a}},l))})]}),E.jsxs(ve.div,{variants:r,children:[E.jsx("h3",{className:"text-2xl font-bold mb-4 text-gray-800 dark:text-white",children:n==null?void 0:n.servicesTitle}),E.jsx("div",{className:"space-y-6",children:(o=n==null?void 0:n.services)==null?void 0:o.map((a,l)=>E.jsxs("div",{className:"flex",children:[E.jsx("div",{className:"flex-shrink-0 mr-4",children:E.jsx("div",{className:"w-12 h-12 bg-teal-100 dark:bg-teal-900/30 text-teal-500 dark:text-teal-default rounded-lg flex items-center justify-center",children:TG[a.icon]||E.jsx(wg,{size:24})})}),E.jsxs("div",{children:[E.jsx("h4",{className:"text-lg font-semibold mb-1 text-gray-800 dark:text-white",children:a.title}),E.jsx("p",{className:"text-gray-600 dark:text-slate-light",children:a.description})]})]},l))})]})]})]})})})},AG={Palette:tD,Globe2:XL,Layers:KL,Code2:wg,LineChart:ZL,Megaphone:JL},CG=()=>{var i;const t=H.useRef(null),e=jr(t,{once:!0,margin:"-10%"}),n=Dn(LP);return E.jsxs("section",{id:"services",className:"relative py-32 overflow-hidden",children:[E.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-[#00F5A0]/5 to-transparent dark:from-transparent dark:via-[#00F5A0]/2 dark:to-transparent"}),E.jsx("div",{ref:t,className:"container relative",children:E.jsxs(ve.div,{initial:{opacity:0},animate:e?{opacity:1}:{opacity:0},transition:{duration:1},className:"max-w-6xl mx-auto",children:[E.jsxs("div",{className:"text-center mb-20",children:[E.jsxs(ve.h2,{initial:{opacity:0,y:20},animate:e?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5},className:"text-4xl md:text-5xl font-bold mb-6",children:["Services",E.jsxs("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] ml-2",children:["< I />"," Provide"]})]}),E.jsx(ve.p,{initial:{opacity:0,y:20},animate:e?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5,delay:.1},className:"text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto",children:n==null?void 0:n.subtitle})]}),E.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:(i=n==null?void 0:n.items)==null?void 0:i.map((r,s)=>{const o=AG[r.icon];return E.jsx(ve.div,{initial:{opacity:0,y:20},animate:e?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5,delay:s*.1},className:"group relative",children:E.jsxs("div",{className:"relative h-full overflow-hidden rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 p-8 transition-all duration-300",children:[E.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/5 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),E.jsxs("div",{className:"relative",children:[E.jsx("div",{className:`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${r.gradient} p-0.5`,children:E.jsx("div",{className:"w-full h-full rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center",children:E.jsx(o,{className:"w-8 h-8 text-white"})})}),E.jsx("h3",{className:"text-2xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-[#00F5A0] transition-colors",children:r.title}),E.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-6",children:r.description}),E.jsx("div",{className:"absolute bottom-8 left-8 right-8",children:E.jsx("div",{className:"h-[1px] w-full bg-gradient-to-r from-transparent via-[#00F5A0]/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"})})]})]})},r.title)})})]})})]})},RG=({name:t,level:e,index:n})=>{const i=H.useRef(null),r=jr(i,{once:!0});return E.jsxs(ve.div,{ref:i,initial:{opacity:0,x:-20},animate:r?{opacity:1,x:0}:{opacity:0,x:-20},transition:{duration:.5,delay:n*.1},className:"mb-6 last:mb-0",children:[E.jsxs("div",{className:"flex justify-between items-center mb-2",children:[E.jsx("span",{className:"text-gray-800 dark:text-gray-200 font-medium",children:t}),E.jsxs("span",{className:"text-[#00F5A0] dark:text-[#00F5A0]",children:[e,"%"]})]}),E.jsx("div",{className:"h-2 bg-gray-200/50 dark:bg-navy-light/50 backdrop-blur-sm rounded-full overflow-hidden",children:E.jsx(ve.div,{initial:{width:0},animate:r?{width:`${e}%`}:{width:0},transition:{duration:1,delay:n*.1},className:"h-full rounded-full bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]"})})]})},PG=()=>{const t=Dn(DP),e=H.useRef(null),n=jr(e,{once:!0,margin:"-10%"});return E.jsxs("section",{id:"skills",className:"relative py-32 overflow-hidden bg-gray-50/50 dark:bg-navy-light/20 backdrop-blur-sm",children:[E.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(0,245,160,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(0,245,160,0.05),transparent_50%)]"}),E.jsx("div",{ref:e,className:"container relative",children:E.jsxs(ve.div,{initial:{opacity:0},animate:n?{opacity:1}:{opacity:0},transition:{duration:1},className:"max-w-6xl mx-auto",children:[E.jsxs("div",{className:"text-center mb-20",children:[E.jsx(ve.h2,{initial:{opacity:0,y:20},animate:n?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5},className:"text-4xl md:text-5xl font-bold mb-6",children:E.jsx("span",{dangerouslySetInnerHTML:{__html:'My <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] ml-2">Expertise</span>'}})}),E.jsx(ve.p,{initial:{opacity:0,y:20},animate:n?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5,delay:.1},className:"text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto",children:t.subtitle})]}),E.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:t.categories.map((i,r)=>E.jsx(ve.div,{initial:{opacity:0,y:20},animate:n?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5,delay:r*.2},className:"group",children:E.jsxs("div",{className:"relative h-full overflow-hidden rounded-2xl  dark:bg-navy-default/40 backdrop-blur-xl border border-white/10 dark:border-white/5 p-8 hover:border-white/20 dark:hover:border-white/10 transition-all duration-300 transform hover:scale-[1.02]",children:[E.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#00F5A0]/5 to-[#00D9F5]/5 dark:from-[#00F5A0]/10 dark:to-[#00D9F5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),E.jsxs("div",{className:"relative",children:[E.jsx("h3",{className:"text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]",children:i.category}),E.jsx("div",{children:i.items.map((s,o)=>E.jsx(RG,{name:s.name,level:s.level,index:o},s.name))})]})]})},i.category))})]})})]})},LG=({project:t,index:e})=>{const n=H.useRef(null),{scrollYProgress:i}=lT({target:n,offset:["start end","end start"]}),r=Gu(i,[0,1],[100,-100]),s=Gu(i,[0,.3,.6,1],[0,1,1,0]);return Dn(ow),E.jsx(ve.div,{ref:n,style:{y:r,opacity:s},className:"group relative mb-32 last:mb-0",children:E.jsxs("div",{className:"relative grid md:grid-cols-12 gap-8 items-center",children:[E.jsx("div",{className:`md:col-span-7 ${e%2===0?"md:order-1":"md:order-2"}`,children:E.jsxs("div",{className:"relative group overflow-hidden rounded-xl",children:[E.jsxs(ve.div,{initial:{scale:1.2,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.8},className:"relative aspect-video",children:[E.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#00F5A0]/20 to-[#00D9F5]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),E.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"})]}),E.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500",children:E.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-8 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500",children:E.jsxs("div",{className:"flex space-x-4",children:[E.jsx("a",{href:t.github,target:"_blank",rel:"noopener noreferrer",className:"p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors",children:E.jsx(Fo,{className:"w-6 h-6 text-white"})}),E.jsx("a",{href:t.demo,target:"_blank",rel:"noopener noreferrer",className:"p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors",children:E.jsx(Ip,{className:"w-6 h-6 text-white"})})]})})})]})}),E.jsx("div",{className:`md:col-span-5 ${e%2===0?"md:order-2":"md:order-1"}`,children:E.jsxs("div",{className:"space-y-6",children:[E.jsx(ve.h3,{initial:{opacity:0,x:e%2===0?50:-50},animate:{opacity:1,x:0},transition:{duration:.5,delay:.2},className:"text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]",children:t.title}),E.jsx(ve.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.3},className:"text-gray-600 dark:text-gray-400 text-lg",children:t.description}),E.jsx(ve.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.4},className:"flex flex-wrap gap-3",children:t.technologies.map(o=>E.jsx("span",{className:"px-4 py-2 text-sm rounded-full bg-gradient-to-r from-[#00F5A0]/10 to-[#00D9F5]/10 text-[#00D9F5] font-medium backdrop-blur-sm",children:o},o))}),E.jsxs(ve.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.5},className:"flex space-x-6 pt-4",children:[E.jsxs("a",{href:t.github,target:"_blank",rel:"noopener noreferrer",className:"group relative px-6 py-3 overflow-hidden rounded-full bg-transparent border-2 border-[#00F5A0] text-[#00F5A0] font-medium transition-colors hover:text-white",children:[E.jsx("span",{className:"absolute inset-0 w-full h-full bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"}),E.jsxs("span",{className:"relative flex items-center",children:["View Code ",E.jsx(Fo,{size:18,className:"ml-2"})]})]}),E.jsxs("a",{href:t.demo,target:"_blank",rel:"noopener noreferrer",className:"group relative px-6 py-3 overflow-hidden rounded-full bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] text-white font-medium",children:[E.jsx("span",{className:"absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"}),E.jsxs("span",{className:"relative flex items-center",children:["Live Demo ",E.jsx(Ip,{size:18,className:"ml-2"})]})]})]})]})})]})})},DG=({project:t})=>{const e=H.useRef(null),n=jr(e,{once:!0,margin:"-10%"});return E.jsx(ve.div,{ref:e,initial:{opacity:0,y:20},animate:n?{opacity:1,y:0}:{opacity:0,y:20},exit:{opacity:0,y:-20},transition:{duration:.5},className:"group",children:E.jsxs("div",{className:"relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300 transform hover:scale-[1.02]",children:[E.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#00F5A0]/5 to-[#00D9F5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),E.jsxs("div",{className:"relative",children:[E.jsxs("div",{className:"flex justify-between items-start mb-6",children:[E.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-[#00F5A0]/20 to-[#00D9F5]/20 text-[#00D9F5] flex items-center justify-center",children:E.jsx(qL,{className:"w-6 h-6"})}),E.jsxs("div",{className:"flex space-x-4",children:[E.jsx("a",{href:t.github,target:"_blank",rel:"noopener noreferrer",className:"text-gray-600 dark:text-gray-400 hover:text-[#00F5A0] transition-colors",children:E.jsx(Fo,{className:"w-5 h-5"})}),E.jsx("a",{href:t.demo,target:"_blank",rel:"noopener noreferrer",className:"text-gray-600 dark:text-gray-400 hover:text-[#00F5A0] transition-colors",children:E.jsx(Ip,{className:"w-5 h-5"})})]})]}),E.jsx("h4",{className:"text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-[#00F5A0] transition-colors",children:t.title}),E.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-6",children:t.description}),E.jsx("div",{className:"flex flex-wrap gap-2",children:t.technologies.map(i=>E.jsx("span",{className:"px-3 py-1 text-sm rounded-full bg-gradient-to-r from-[#00F5A0]/10 to-[#00D9F5]/10 text-[#00D9F5]",children:i},i))})]})]})})},NG=()=>{const[t,e]=H.useState("all"),n=H.useRef(null),i=jr(n,{once:!0,margin:"-10%"}),r=Dn(ow),s=Dn(yd),o=r.items.filter(l=>l.featured),a=t==="all"?r.items:r.items.filter(l=>l.category===t);return H.useEffect(()=>{const l=c=>{if(!n.current)return;const u=n.current.getBoundingClientRect(),d=c.clientX-u.left,f=c.clientY-u.top;n.current.style.setProperty("--mouse-x",`${d}px`),n.current.style.setProperty("--mouse-y",`${f}px`)};return window.addEventListener("mousemove",l),()=>window.removeEventListener("mousemove",l)},[]),E.jsxs("section",{id:"projects",className:"relative py-20 overflow-hidden",children:[E.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(0,245,160,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(0,245,160,0.05),transparent_50%)]"}),E.jsx("div",{ref:n,className:"container relative",children:E.jsxs(ve.div,{initial:{opacity:0},animate:i?{opacity:1}:{opacity:0},transition:{duration:1},className:"max-w-6xl mx-auto",children:[E.jsxs("div",{className:"text-center mb-16",children:[E.jsx(ve.h2,{initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5},className:"text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]",children:r.subtitleThree}),E.jsx(ve.p,{initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5,delay:.2},className:"text-xl text-gray-600 dark:text-gray-400",children:r.subtitle})]}),E.jsx("div",{className:"mb-32",children:o.map((l,c)=>E.jsx(LG,{project:l,index:c},l.id))}),E.jsxs(ve.div,{initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5},children:[E.jsx("h3",{className:"text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]",children:r.subtitleTwo}),E.jsx("div",{className:"flex overflow-x-auto mb-12 pb-4 justify-center space-x-4",children:r.categories.map(l=>E.jsxs("button",{onClick:()=>e(l.id),className:`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                    ${t===l.id?"text-white bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]":"text-gray-600 dark:text-gray-400 hover:text-[#00F5A0]"}`,children:[E.jsx("span",{className:"relative z-10",children:l.label}),t===l.id&&E.jsx(ve.div,{layoutId:"activeCategory",className:"absolute inset-0 rounded-full bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]",transition:{type:"spring",bounce:.2,duration:.6}})]},l.id))}),E.jsx(Ag,{mode:"wait",children:E.jsx(ve.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.5},className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:a.filter(l=>!l.featured).map(l=>E.jsx(DG,{project:l},l.id))},t)})]}),E.jsx(ve.div,{initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5,delay:.3},className:"text-center mt-20",children:E.jsxs("a",{href:s.githubLink,target:"_blank",rel:"noopener noreferrer",className:"group relative inline-flex items-center px-8 py-4 text-lg overflow-hidden rounded-full bg-transparent border-2 border-[#00F5A0] text-[#00F5A0] font-medium transition-colors hover:text-white",children:[E.jsx("span",{className:"absolute inset-0 w-full h-full bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"}),E.jsxs("span",{className:"relative flex items-center",children:["View More on GitHub ",E.jsx(GL,{className:"ml-2 w-5 h-5"})]})]})})]})})]})},IG=()=>{var i;const t=H.useRef(null),e=jr(t,{once:!0,margin:"-10%"}),n=Dn(NP);return E.jsxs("section",{id:"testimonials",className:"relative py-32 overflow-hidden",children:[E.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(0,245,160,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(0,245,160,0.05),transparent_50%)]"}),E.jsx("div",{ref:t,className:"container relative",children:E.jsxs(ve.div,{initial:{opacity:0},animate:e?{opacity:1}:{opacity:0},transition:{duration:1},className:"max-w-6xl mx-auto",children:[E.jsxs("div",{className:"text-center mb-20",children:[E.jsx(ve.p,{initial:{opacity:0,y:20},animate:e?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5},className:"text-lg text-[#00F5A0] font-medium mb-4",children:"Testimonials"}),E.jsxs(ve.h2,{initial:{opacity:0,y:20},animate:e?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5,delay:.1},className:"text-4xl md:text-5xl font-bold mb-6",children:["What My",E.jsx("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] ml-2",children:"Clients Say"})]})]}),E.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:(i=n==null?void 0:n.items)==null?void 0:i.map((r,s)=>E.jsx(ve.div,{initial:{opacity:0,y:20},animate:e?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5,delay:s*.1},className:"group",children:E.jsxs("div",{className:"relative overflow-hidden rounded-2xl  dark:bg-navy-default p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]",children:[E.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]"}),E.jsxs("div",{className:"flex items-center mb-6",children:[E.jsx("img",{src:r.image,alt:r.name,className:"w-16 h-16 rounded-full object-cover mr-4"}),E.jsxs("div",{children:[E.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white",children:r.name}),E.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:r.role})]})]}),E.jsx("div",{className:"flex mb-4",children:[...Array(r.rating)].map((o,a)=>E.jsx(rD,{className:"w-5 h-5 text-yellow-400 fill-current"},a))}),E.jsxs("blockquote",{className:"text-gray-600 dark:text-gray-400 italic",children:['"',r.content,'"']})]})},r.name))})]})})]})};class Ul{constructor(e=0,n="Network Error"){this.status=e,this.text=n}}const OG=()=>{if(!(typeof localStorage>"u"))return{get:t=>Promise.resolve(localStorage.getItem(t)),set:(t,e)=>Promise.resolve(localStorage.setItem(t,e)),remove:t=>Promise.resolve(localStorage.removeItem(t))}},Wt={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:OG()},Ev=t=>t?typeof t=="string"?{publicKey:t}:t.toString()==="[object Object]"?t:{}:{},UG=(t,e="https://api.emailjs.com")=>{if(!t)return;const n=Ev(t);Wt.publicKey=n.publicKey,Wt.blockHeadless=n.blockHeadless,Wt.storageProvider=n.storageProvider,Wt.blockList=n.blockList,Wt.limitRate=n.limitRate,Wt.origin=n.origin||e},Ab=async(t,e,n={})=>{const i=await fetch(Wt.origin+t,{method:"POST",headers:n,body:e}),r=await i.text(),s=new Ul(i.status,r);if(i.ok)return s;throw s},Cb=(t,e,n)=>{if(!t||typeof t!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||typeof n!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},kG=t=>{if(t&&t.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},Rb=t=>t.webdriver||!t.languages||t.languages.length===0,Pb=()=>new Ul(451,"Unavailable For Headless Browser"),FG=(t,e)=>{if(!Array.isArray(t))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},BG=t=>{var e;return!((e=t.list)!=null&&e.length)||!t.watchVariable},zG=(t,e)=>t instanceof FormData?t.get(e):t[e],Lb=(t,e)=>{if(BG(t))return!1;FG(t.list,t.watchVariable);const n=zG(e,t.watchVariable);return typeof n!="string"?!1:t.list.includes(n)},Db=()=>new Ul(403,"Forbidden"),VG=(t,e)=>{if(typeof t!="number"||t<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},HG=async(t,e,n)=>{const i=Number(await n.get(t)||0);return e-Date.now()+i},Nb=async(t,e,n)=>{if(!e.throttle||!n)return!1;VG(e.throttle,e.id);const i=e.id||t;return await HG(i,e.throttle,n)>0?!0:(await n.set(i,Date.now().toString()),!1)},Ib=()=>new Ul(429,"Too Many Requests"),GG=async(t,e,n,i)=>{const r=Ev(i),s=r.publicKey||Wt.publicKey,o=r.blockHeadless||Wt.blockHeadless,a=r.storageProvider||Wt.storageProvider,l={...Wt.blockList,...r.blockList},c={...Wt.limitRate,...r.limitRate};return o&&Rb(navigator)?Promise.reject(Pb()):(Cb(s,t,e),kG(n),n&&Lb(l,n)?Promise.reject(Db()):await Nb(location.pathname,c,a)?Promise.reject(Ib()):Ab("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:s,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"}))},jG=t=>{if(!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},WG=t=>typeof t=="string"?document.querySelector(t):t,$G=async(t,e,n,i)=>{const r=Ev(i),s=r.publicKey||Wt.publicKey,o=r.blockHeadless||Wt.blockHeadless,a=Wt.storageProvider||r.storageProvider,l={...Wt.blockList,...r.blockList},c={...Wt.limitRate,...r.limitRate};if(o&&Rb(navigator))return Promise.reject(Pb());const u=WG(n);Cb(s,t,e),jG(u);const d=new FormData(u);return Lb(l,d)?Promise.reject(Db()):await Nb(location.pathname,c,a)?Promise.reject(Ib()):(d.append("lib_version","4.4.1"),d.append("service_id",t),d.append("template_id",e),d.append("user_id",s),Ab("/api/v1.0/email/send-form",d))},XG={init:UG,send:GG,sendForm:$G,EmailJSResponseStatus:Ul},qG="service_gnd0iwa",YG="template_td6pv3w",KG="bkWFF_2orSX6VzMJz",ZG=async(t,e=null,n=null)=>{XG.sendForm(qG,YG,t,{publicKey:KG}).then(()=>{e&&e(),console.log("SUCCESS!")},i=>{debugger;alert("There was an error sending your message. Please try again later."),n(),console.log("FAILED...",i.message)})},QG=()=>{const t=H.useRef(null),e=jr(t,{once:!0,margin:"-100px"}),[n,i]=H.useState("idle"),[r,s]=H.useState({name:"",email:"",subject:"",message:""}),o={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},a={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}},l=f=>{const{name:p,value:g}=f.target;s(_=>({..._,[p]:g}))},c=f=>{f.preventDefault(),i("submitting"),ZG(d.current,()=>{i("success"),s({name:"",email:"",subject:"",message:""})},()=>{i("error")})},u=Dn(IP),d=H.useRef(null);return E.jsx("section",{id:"contact",className:"section-padding",children:E.jsx("div",{className:"container",children:E.jsxs(ve.div,{ref:t,initial:"hidden",animate:e?"visible":"hidden",variants:o,className:"max-w-6xl mx-auto",children:[E.jsxs(ve.div,{variants:a,className:"text-center mb-12",children:[E.jsx("h2",{className:"section-title",children:u.title}),E.jsx("p",{className:"text-gray-600 dark:text-slate-light mt-6",children:u.subtitle})]}),E.jsxs("div",{className:"grid md:grid-cols-5 gap-10",children:[E.jsxs(ve.div,{variants:a,className:"md:col-span-2 space-y-6",children:[E.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-6",children:u.leftHeader}),E.jsxs("p",{className:"text-gray-600 dark:text-slate-light mb-6",children:[u.info.description," "]}),E.jsxs("div",{className:"space-y-4",children:[E.jsxs("div",{className:"flex items-start",children:[E.jsx("div",{className:"flex-shrink-0 w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/30 text-teal-500 dark:text-teal-default flex items-center justify-center mr-4",children:E.jsx(QL,{size:20})}),E.jsxs("div",{children:[E.jsx("h4",{className:"font-medium text-gray-800 dark:text-white",children:"Location"}),E.jsx("p",{className:"text-gray-600 dark:text-slate-light",children:u.info.location})]})]}),E.jsxs("div",{className:"flex items-start",children:[E.jsx("div",{className:"flex-shrink-0 w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/30 text-teal-500 dark:text-teal-default flex items-center justify-center mr-4",children:E.jsx(Ou,{size:20})}),E.jsxs("div",{children:[E.jsx("h4",{className:"font-medium text-gray-800 dark:text-white",children:"Email"}),E.jsx("a",{href:`mailto:${u.info.email}`,className:"text-gray-600 dark:text-slate-light hover:text-teal-500 dark:hover:text-teal-default transition-colors",children:u.info.email})]})]}),E.jsxs("div",{className:"flex items-start",children:[E.jsx("div",{className:"flex-shrink-0 w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/30 text-teal-500 dark:text-teal-default flex items-center justify-center mr-4",children:E.jsx(nD,{size:20})}),E.jsxs("div",{children:[E.jsx("h4",{className:"font-medium text-gray-800 dark:text-white",children:"Phone"}),E.jsx("a",{href:`tel:${u.info.email}`,className:"text-gray-600 dark:text-slate-light hover:text-teal-500 dark:hover:text-teal-default transition-colors",children:u.info.phone})]})]})]})]}),E.jsx(ve.div,{variants:a,className:"md:col-span-3",children:E.jsxs("div",{className:"card p-6",children:[E.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-6",children:u.rightHeader}),n==="success"?E.jsxs(ve.div,{initial:{opacity:0},animate:{opacity:1},className:"flex flex-col items-center justify-center py-10 text-center",children:[E.jsx(jL,{size:60,className:"text-green-500 mb-4"}),E.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white mb-2",children:"Message Sent Successfully!"}),E.jsx("p",{className:"text-gray-600 dark:text-slate-light",children:"Thank you for reaching out. I'll get back to you soon."})]}):E.jsxs("form",{ref:d,onSubmit:c,className:"space-y-4",children:[E.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[E.jsxs("div",{children:[E.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 dark:text-slate-light mb-1",children:"Name"}),E.jsx("input",{type:"text",id:"name",name:"name",value:r.name,onChange:l,required:!0,className:"w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-navy-light focus:border-teal-500 dark:focus:border-teal-default focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:focus:ring-teal-default/20 bg-white dark:bg-navy-default text-gray-800 dark:text-gray",placeholder:"Your Name"})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 dark:text-slate-light mb-1",children:"Email"}),E.jsx("input",{type:"email",id:"email",name:"email",value:r.email,onChange:l,required:!0,className:"w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-navy-light focus:border-teal-500 dark:focus:border-teal-default focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:focus:ring-teal-default/20 bg-white dark:bg-navy-default text-gray-800 dark:text-gray",placeholder:"Your Email"})]})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium text-gray-700 dark:text-slate-light mb-1",children:"Subject"}),E.jsx("input",{type:"text",id:"subject",name:"subject",value:r.subject,onChange:l,required:!0,className:"w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-navy-light focus:border-teal-500 dark:focus:border-teal-default focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:focus:ring-teal-default/20 bg-white dark:bg-navy-default text-gray-800 dark:text-gray",placeholder:"Subject"})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 dark:text-slate-light mb-1",children:"Message"}),E.jsx("textarea",{id:"message",name:"message",value:r.message,onChange:l,required:!0,rows:6,className:"w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-navy-light focus:border-teal-500 dark:focus:border-teal-default focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:focus:ring-teal-default/20 bg-white dark:bg-navy-default text-gray-800 dark:text-gray resize-none",placeholder:"Your Message"})]}),E.jsx("button",{type:"submit",disabled:n==="submitting",className:"btn-primary w-full justify-center",children:n==="submitting"?E.jsxs("span",{className:"inline-flex items-center",children:[E.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[E.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),E.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Sending..."]}):E.jsxs("span",{className:"inline-flex items-center",children:["Send Message ",E.jsx(iD,{size:16,className:"ml-2"})]})})]})]})})]})]})})})},JG=()=>{var i,r,s,o,a;const t=new Date().getFullYear(),e=Dn(OP),n=Dn(yd);return E.jsx("footer",{className:"py-10 bg-gray-900 dark:bg-navy-dark text-white",children:E.jsx("div",{className:"container",children:E.jsxs("div",{className:"max-w-6xl mx-auto",children:[E.jsxs("div",{className:"grid md:grid-cols-3 gap-10",children:[E.jsxs("div",{children:[E.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:n==null?void 0:n.logoText}),E.jsx("p",{className:"text-gray-400 mb-6",children:(e==null?void 0:e.description)||"Your tagline or description goes here."}),E.jsxs("div",{className:"flex space-x-4",children:[E.jsx("a",{href:(i=e.socialLinks.find(l=>l.platform==="GitHub"))==null?void 0:i.url,target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-teal-default transition-colors","aria-label":"GitHub",children:E.jsx(Fo,{size:20})}),E.jsx("a",{href:(r=e.socialLinks.find(l=>l.platform==="LinkedIn"))==null?void 0:r.url,target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-teal-default transition-colors","aria-label":"LinkedIn",children:E.jsx(Op,{size:20})}),E.jsx("a",{href:(s=e.socialLinks.find(l=>l.platform==="Twitter"))==null?void 0:s.url,target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-teal-default transition-colors","aria-label":"Twitter",children:E.jsx(Cw,{size:20})}),E.jsx("a",{href:(o=e.socialLinks.find(l=>l.platform==="Email"))==null?void 0:o.url,className:"text-gray-400 hover:text-teal-default transition-colors","aria-label":"Email",children:E.jsx(Ou,{size:20})})]})]}),E.jsxs("div",{children:[E.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"Quick Links"}),E.jsx("ul",{className:"space-y-2",children:(a=e==null?void 0:e.quickLinks)==null?void 0:a.map(l=>E.jsx("li",{children:E.jsx("a",{href:l.href,className:"text-gray-400 hover:text-teal-default transition-colors",children:l.name})},l.href))})]}),E.jsxs("div",{children:[E.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"Contact Me"}),E.jsxs("ul",{className:"space-y-2",children:[E.jsxs("li",{className:"flex items-center text-gray-400",children:[E.jsx(Ou,{size:16,className:"mr-2"}),E.jsx("a",{href:`mailto:${e==null?void 0:e.contactme.email}`,className:"hover:text-teal-default transition-colors",children:e==null?void 0:e.contactme.email})]}),E.jsxs("li",{className:"flex items-center text-gray-400",children:[E.jsx(Op,{size:16,className:"mr-2"}),E.jsx("a",{href:`https://${e.contactme.linkedin}`,target:"_blank",rel:"noopener noreferrer",className:"hover:text-teal-default transition-colors",children:e==null?void 0:e.contactme.linkedin})]}),E.jsxs("li",{className:"flex items-center text-gray-400",children:[E.jsx(Fo,{size:16,className:"mr-2"}),E.jsx("a",{href:`https://${e.contactme.github}`,target:"_blank",rel:"noopener noreferrer",className:"hover:text-teal-default transition-colors",children:e==null?void 0:e.contactme.github})]})]})]})]}),E.jsxs("div",{className:"mt-10 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm",children:[E.jsxs("p",{children:["© ",t," ",n==null?void 0:n.ownerName," All rights reserved."]}),E.jsxs("p",{className:"mt-1",children:["Designed & Built with ",E.jsx("span",{className:"text-red-500",children:"❤"})," by Mohd. Riyan"]})]})]})})})},e6=()=>{const[t,e]=H.useState(0),n=Dn(yd);return H.useEffect(()=>{const i=setInterval(()=>{e(r=>r>=100?(clearInterval(i),100):r+5)},50);return()=>clearInterval(i)},[]),E.jsx("div",{className:"fixed inset-0 flex items-center justify-center  dark:bg-navy-default z-50",children:E.jsxs("div",{className:"w-64 flex flex-col items-center",children:[E.jsx(ve.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.5},className:"text-4xl text-teal-500 dark:text-teal-default mb-8 font-bold",children:n==null?void 0:n.logoText}),E.jsx("div",{className:"w-full h-1  dark:bg-navy-light rounded-full overflow-hidden",children:E.jsx(ve.div,{className:"h-full bg-teal-500 dark:bg-teal-default",initial:{width:0},animate:{width:`${t}%`},transition:{duration:.2}})}),E.jsxs("div",{className:"mt-2 text-gray-600 dark:text-slate-light",children:["Know about me... ",t,"%"]})]})})},Mv=H.createContext({cursorType:"",cursorChangeHandler:()=>{}}),t6=t=>{const[e,n]=H.useState(""),i=r=>{n(r)};return E.jsx(Mv.Provider,{value:{cursorType:e,cursorChangeHandler:i},children:t.children})};function n6(){const[t,e]=H.useState({x:null,y:null});return H.useEffect(()=>{const n=i=>{const{clientX:r,clientY:s}=i;e({x:r,y:s})};return document.addEventListener("mousemove",n),()=>{document.removeEventListener("mousemove",n)}},[]),t}const i6=()=>{const{cursorType:t}=H.useContext(Mv),{x:e,y:n}=n6(),[i,r]=H.useState(!1);return H.useEffect(()=>{const s=()=>{r(window.innerWidth<=768||"ontouchstart"in window)};return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),i||e===null||n===null?null:E.jsx("div",{className:"pointer-events-none fixed top-0 left-0 z-[999]",children:E.jsx("div",{style:{transform:`translate3d(${e-5}px, ${n-12}px, 0)`,border:"10px solid #00F5A0"},className:`w-4 h-4 rounded-full transition-transform duration-[40ms] ${t}`})})};function r6(){const[t,e]=H.useState(!0);H.useEffect(()=>{const r=setTimeout(()=>{e(!1)},2e3);return()=>clearTimeout(r)},[]);const{cursorType:n,cursorChangeHandler:i}=H.useContext(Mv);return H.useEffect(()=>{const r=s=>{s.preventDefault()};return document.addEventListener("contextmenu",r),function(){document.removeEventListener("contextmenu",r)}},[]),t?E.jsx(e6,{}):E.jsxs(t6,{children:[E.jsx(i6,{}),E.jsx(oD,{children:E.jsxs("div",{className:"min-h-screen bg-white dark:bg-[#0A192F] text-gray-800 dark:text-gray-200 transition-colors duration-300",children:[E.jsx(cU,{}),E.jsxs("main",{children:[E.jsx(wG,{}),E.jsx(bG,{}),E.jsx(CG,{}),E.jsx(PG,{}),E.jsx(NG,{}),E.jsx(IG,{}),E.jsx(QG,{})]}),E.jsx(JG,{}),E.jsx("div",{onMouseEnter:()=>i("hovered"),onMouseLeave:()=>i("")})]})})]})}WM(document.getElementById("root")).render(E.jsx(H.StrictMode,{children:E.jsx(PR,{store:kP,children:E.jsx(r6,{})})}));
