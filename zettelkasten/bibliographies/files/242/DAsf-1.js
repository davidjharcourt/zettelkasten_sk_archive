!function o(r,s,d){function c(t,e){if(!s[t]){if(!r[t]){var a="function"==typeof require&&require;if(!e&&a)return a(t,!0);if(l)return l(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var i=s[t]={exports:{}};r[t][0].call(i.exports,function(e){return c(r[t][1][e]||e)},i,i.exports,o,r,s,d)}return s[t].exports}for(var l="function"==typeof require&&require,e=0;e<d.length;e++)c(d[e]);return c}({1:[function(e,t,a){var n=e("./lib/replace"),i=e("./lib/getSlotPlaceholder");t.exports.replace=n,t.exports.getSlotPlaceholder=i},{"./lib/getSlotPlaceholder":2,"./lib/replace":4}],2:[function(e,t,a){var s=e("./globals"),d="data-val";t.exports=function(e,t,a){var n=s.getDocument(),i=[e,a,t].join("_"),o=n.getElementById("ape_"+i+"_placement_ClickTracking");if(!(o&&o.hasAttribute&&"function"==typeof o.hasAttribute&&o.hasAttribute(d)&&o.getAttribute&&"function"==typeof o.getAttribute))return"";var r=o.getAttribute(d);return"string"!=typeof r?"":r}},{"./globals":3}],3:[function(e,t,a){t.exports.getDocument=function(){return document}},{}],4:[function(e,t,a){var i="&pd_rd_plhdr=t",o=/(&amp;|\?){1}pd_rd_plhdr=t(&amp;|'|&quot;){1}/g,r=/(&|\?){1}pd_rd_plhdr=t(&|'|"|\\"|\\'){1}/g;t.exports=function(e,t){var a=t,n=e;"string"!=typeof e||e===i?n="":(n.startsWith("&")&&(n=n.replace(/^&+/,"")),n.endsWith("&")&&(n=n.replace(/&+$/,"")));try{return""===n?a.replace(new RegExp("\\bpd_rd_plhdr=t&"),"").replace(new RegExp(i+"\\b"),"").replace(new RegExp("\\?pd_rd_plhdr=t\\b"),""):a.replace(r,"$1"+n+"$2").replace(o,"$1"+n.replace(/&/g,"&amp;")+"$2")}catch(e){return t}}},{}],5:[function(e,t,a){var n=e("./ajaxRequest");t.exports.Tracer=function(e,t){return this.traceId=e,this.adStartTime=t,this.storedTrace={},this.logTrace=function(e,t){if(void 0!==this.traceId){var a,n=(new Date).getTime();this.storedTrace.hasOwnProperty(e)||(this.storedTrace[e]=[]),(a=t===Object(t)?Object.assign({},t):(a='{ "'+e+'":"'+t+'"}',JSON.parse(a))).timeStamp=n,a.timeSinceAdStart=n-this.adStartTime,this.storedTrace[e].push(a)}},this.sendTrace=function(){var t=function(){console.log("failed to send request to /gp/adbarplus")};if(!function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}(this.storedTrace)){var e="/gp/adbarplus?traceId="+this.traceId+"&systemName=browser";for(var a in n.sendAjaxRequest(e,"POST",JSON.stringify(this.storedTrace),{"Content-Type":"application/x-www-form-urlencoded"},function(e){4===e.readyState&&200!==e.status&&t()},t),this.storedTrace)this.storedTrace.hasOwnProperty(a)&&delete this.storedTrace[a]}},this.bindSendTraceToPageOnLoad=function(){var e=function(e,t){return function(){return e.apply(t)}},t=function(){this.sendTrace()},a=function(){this.sendTrace(),window.setInterval(e(t,this),3e3)};"loading"!==document.readyState?e(a,this)():window.addEventListener?window.addEventListener("load",e(a,this)):document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&e(a,this)()})},void 0!==e&&this.bindSendTraceToPageOnLoad(),{traceId:this.traceId,adStartTime:this.adStartTime,storedTrace:this.storedTrace,allData:this.allData,logTrace:this.logTrace,sendTrace:this.sendTrace}}},{"./ajaxRequest":7}],6:[function(e,t,a){t.exports.AdBlockerCSMMediator=function(i,e){var o=this;this.adbMap=e||{};var n=function(e,t,a){var n=o.adbMap;!0!==n[e].adBlockerIsDisabled&&void 0!==n[e].adBlockerIsDisabled&&!1===n[e].adBlockerIsDisabled&&(!1===t?i(n[e].slot,n[e].placementId,"adblocker:blocked:".concat(a),1):!0===t&&i(n[e].slot,n[e].placementId,"adblocker:notblocked:".concat(a),1))};this.updateAdBlockerIsDisabled=function(e,t){var a=o.adbMap;a[e]&&(a[e].adBlockerIsDisabled=t,a[e].adBlockerIsDisabled?i(a[e].slot,a[e].placementId,"adblockernotdetected",1):i(a[e].slot,a[e].placementId,"adblockerdetected",1),n(e,a[e].adImgLoaded,"adimg"),n(e,a[e].adImpressionsFired,"adimpressions"),n(e,a[e].adViewabilityFired,"adviewability"))},this.updateAdImgLoaded=function(e,t){var a=o.adbMap;a[e]&&void 0===a[e].adImgLoaded&&(a[e].adImgLoaded=t,n(e,a[e].adImgLoaded,"adimg"))},this.updateAdImpressionsFired=function(e,t){var a=o.adbMap;a[e]&&void 0===a[e].adImpressionsFired&&(a[e].adImpressionsFired=t,n(e,a[e].adImpressionsFired,"adimpressions"))},this.updateAdViewabilityFired=function(e,t){var a=o.adbMap;a[e]&&void 0===a[e].adViewabilityFired&&(a[e].adViewabilityFired=t,n(e,a[e].adViewabilityFired,"adviewability"))},this.updateNoInventoryViewabilityFired=function(e,t){var a=o.adbMap;a[e]&&void 0===a[e].noInventoryViewabilityFired&&(a[e].noInventoryViewabilityFired=t,n(e,a[e].noInventoryViewabilityFired,"noInventoryViewability"))},this.updateNoInventoryImpressionFired=function(e,t){var a=o.adbMap;a[e]&&void 0===a[e].noInventoryImpressionsFired&&(a[e].noInventoryImpressionsFired=t,n(e,a[e].noInventoryImpressionsFired,"noInventoryImpressions"))}}},{}],7:[function(e,t,a){t.exports.sendAjaxRequest=function(e,t,a,n,i,o){try{var r=null;if(window.XMLHttpRequest?r=new XMLHttpRequest:o(),r){if(r.onreadystatechange=function(){i(r)},r.open(t,e,!0),null!==n)for(var s in n)r.setRequestHeader(s,n[s]);r.send(a)}else o()}catch(e){o()}}},{}],8:[function(e,t,a){var l=e("../host/metrics/counters");t.exports.checkCache=function(e,t,a,n,i){var o=l.CACHE_COUNTERS;if("undefined"!=typeof performance&&void 0!==performance.getEntriesByType){var r=performance.getEntriesByType("resource");if(void 0!==r&&Array.isArray(r)&&!(r.length<1)&&void 0!==r[0].duration){var s=void 0!==r[0].transferSize?function(e,t){0===e.transferSize?d(t+"cached"):d(t+"uncached")}:function(e,t){e.duration<20?d(t+"fastload"):d(t+"slowload")};c(e,o.SF_LIBRARY),c(t,o.SF_HTML)}}function d(e){i(a,n,e,1)}function c(e,t){if(e)for(var a=0;a<r.length;a++){var n=r[a];if(n.name&&-1!==n.name.indexOf(e))return void s(n,t)}}}},{"../host/metrics/counters":15}],9:[function(e,t,a){var n=e("@apejs/click-tracking");t.exports.getSlotPlaceholder=function(e){if(!("pageType"in e&&"subPageType"in e&&"slot"in e))return"";try{return n.getSlotPlaceholder(e.pageType,e.subPageType,e.slot)}catch(e){return""}}},{"@apejs/click-tracking":1}],10:[function(e,u,t){
/*
    @license
    Underscore.js 1.8.3
    http://underscorejs.org
    (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
    Underscore may be freely distributed under the MIT license.
*/
var n=function(){return window.P&&window.P.AUI_BUILD_DATE};u.exports.throttle=function(a,n,i){var o,r,s,d=null,c=0;i||(i={});var l=function(){c=!1===i.leading?0:u.exports.now(),d=null,s=a.apply(o,r),d||(o=r=null)};return function(){var e=u.exports.now();c||!1!==i.leading||(c=e);var t=n-(e-c);return o=this,r=arguments,t<=0||n<t?(d&&(clearTimeout(d),d=null),c=e,s=a.apply(o,r),d||(o=r=null)):d||!1===i.trailing||(d=setTimeout(l,t)),s}},u.exports.now=function(){return Date.now?Date.now():(new Date).getTime()},u.exports.addListener=function(e,t,a){e.addEventListener?e.addEventListener(t,a,!1):window.attachEvent&&e.attachEvent("on"+t,a)},u.exports.addWindowListener=function(e,t){u.exports.addListener(window,e,t)},u.exports.removeWindowListener=function(e,t){window.removeEventListener?window.removeEventListener(e,t,!1):window.detachEvent&&window.detachEvent("on"+e,t)},u.exports.ensureMessageListener=function(e){u.exports.removeWindowListener("message",e),u.exports.addWindowListener("message",e)},u.exports.decodeBase64=function(e){var t,a,n,i,o,r,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",d="",c=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");c<e.length;)t=s.indexOf(e.charAt(c++))<<2|(i=s.indexOf(e.charAt(c++)))>>4,a=(15&i)<<4|(o=s.indexOf(e.charAt(c++)))>>2,n=(3&o)<<6|(r=s.indexOf(e.charAt(c++))),d+=String.fromCharCode(t),64!=o&&(d+=String.fromCharCode(a)),64!=r&&(d+=String.fromCharCode(n));return d=function(e){for(var t="",a=0,n=0,i=0,o=0;a<e.length;)(n=e.charCodeAt(a))<128?(t+=String.fromCharCode(n),a++):191<n&&n<224?(i=e.charCodeAt(a+1),t+=String.fromCharCode((31&n)<<6|63&i),a+=2):(i=e.charCodeAt(a+1),o=e.charCodeAt(a+2),t+=String.fromCharCode((15&n)<<12|(63&i)<<6|63&o),a+=3);return t}(d)},u.exports.createScript=function(e,t,a,n,i){if(!document.getElementById(a)){var o=document.createElement("script");return o.async=!0,o.setAttribute("crossorigin","anonymous"),o.src=e,o.type=t,o.id=a,o.onerror=n,o.onload=i,o}},u.exports.isAUIAvailable=n,u.exports.safeFunctionWrapper=function(e,t,a){return n()&&"function"==typeof window.P.guardError?P.guardError("APE-SafeFrame",e):function(){try{e.apply(this,arguments)}catch(e){"function"==typeof t&&a&&t(a,e)}}},u.exports.getCookie=function(e){var t=e+"=";try{for(var a=decodeURIComponent(document.cookie).split(";"),n=0;n<a.length;n++){for(var i=a[n];" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(t))return i.substring(t.length,i.length)}}catch(e){}return""},u.exports.disableCookieAccess=function(){try{Object&&Object.defineProperty&&"function"==typeof Object.defineProperty?Object.defineProperty(document,"cookie",{get:function(){return""},set:function(){}}):(document.__defineGetter__("cookie",function(){return""}),document.__defineSetter__("cookie",function(){}))}catch(e){}}},{}],11:[function(g,e,t){
/**
 * @license
 * Copyright (c) 2014, Amazon.com
 * APE SafeFrame v1.50.d23453f -- 2019-06-04T20:55:59+0000
*/
!function(L,F){var e=g("./messenger/msgHandler"),t=g("../components/adBlockerHandler"),n=g("./metrics/counters"),r=g("../components/cacheChecker"),R=g("../components/adBarTracer"),s=g("./components/adFeedback"),a=g("./metrics/csm"),D=g("../components/clickTrackingHelper"),d=e.util,N=e.messenger,B=e.logError,c=N.appendErrorDetails,i=e.loadScript,_=a.sendCsmLatencyMetric,O=a.sendCsmCounter,z=a.addCsmTag,l=e.fireViewableLatencyMetrics,P=e.hasClass,u=e.createIframeWithName,W=e.logCounter,V=e.collapseSlot,p=e.resizeSafeFrameAd,H=e.delayLoad,m=e.getMediaCentralOrigin,f=e.scriptValidator,U=e.sizeValidator,j=e.appendJsScript,q=e.checkAgainstWhitelist,J=new t.AdBlockerCSMMediator(O);function o(){if(L.DAsf)L.DAsf.loadAds();else{L.DAsf={version:"1.50.d23453f"},O(null,null,n.SF_VERSION_COUNTERS.VERSION+":"+L.DAsf.version,1);var g="text/x-dacx-safeframe",e=m(),h=e+"/images/G/01/ape/sf/desktop/sf-1.50.d23453f._V461672327_.html",w=e+"/images/G/01/ape/sf/whitelisted/desktop/sf-1.50.d23453f._V461672326_.html",v={1:"Enabled",0:"NotEnabled","-1":"Unknown"},y="data-arid",b="d16g_postMessageUnsupported",S="d16g_postMessageSupported",T=n.ABP_STATUS_COUNTERS,A=n.AD_LOAD_COUNTERS,a=n.MESSENGER_COUNTERS,i={},x={},I={},o=null;N.supportedCommands={sendAdBarTrace:function(e,t){e.options.arid in I&&I[e.options.arid].logTrace(t.field,t.traceInfo)},logAPIInvocation:function(e,t){O(null,null,a.API+t.apiName,1),O(e.options.slot,e.options.placementId,a.API+t.apiName,1),e.options.arid in I&&I[e.options.arid].logTrace("apiCalls",t)},resizeSafeFrameAd:function(e,t){d.addWindowListener("resize",i[e.options.arid].defaultResizeSafeFrameHandler),p(e.options.arid,e.options.size.width,e.options.size.height,e.options.maxAdWidth,N,x)},changeSize:function(e,t){var a=e.options.allowedSizes;if(q(t,a,U))e.slot.style.width=t.width,e.iframe.height=t.height,e.iframe.width=t.width;else{var n="Size is not whitelisted: "+t.width+" x "+t.height+c(e.options.arid);B(n)}},collapseSlot:function(e,t){V(x[e.options.arid].placementDivId),"nav-sitewide-msg"===e.options.slotName&&H("amznJQ.available:navbarJSLoaded",function(){void 0!==parent.navbar&&"function"==typeof parent.navbar.unHideSWM&&parent.navbar.unHideSWM()})},embedScript:function(e,t){var a=e.options.allowedDomains;if(q(t.src,a,f))e.slot=F.getElementById(x[e.options.arid].placementDivId),void 0!==e.slot&&j(t.src,e.slot,t.charset);else{var n="Domain is not whitelisted: "+t.src+c(e.options.arid);B(n)}},logError:function(e,t){B(t.message+c(e.options.arid)+": "+e.options.slot,t.error)},sendCsmLatencyMetric:function(e,t){_(t.metric,e.options.slot,e.options.placementId,t.metricMsg,t.timestamp)},countMetric:function(e,t){t.isGlobal?O(null,null,t.metricMsg,t.value):O(e.options.slot,e.options.placementId,t.metricMsg,t.value)},addCsmTag:function(e,t){z(t.tag,e.options.slot,e.options.placementId,t.msg)},fireViewableLatencyMetrics:function(e,t){l(e.options.arid,e.options.slot,e.options.placementId,t.adLoadedTimestamp)},customMessage:function(e,t){N.customMessage(t.key,t.body)},enableViewabilityTracker:function(e){N.updateViewability(e.options.arid);var t=d.throttle(N.updateViewability,20);E(e.options.arid,e.options.slot,"viewabilityTracker",function(){t(e.options.arid)}),d.addWindowListener("scroll",i[e.options.arid].viewabilityTracker),d.addWindowListener("resize",i[e.options.arid].viewabilityTracker),d.addListener(F,"visibilitychange",i[e.options.arid].viewabilityTracker)},enableNoInventoryViewabilityTrackerAndInvokeFallback:function(e){N.takeSnapshotOfSlotPosition(e.options.arid),N.updateNoInventoryViewability(e.options.arid),N.sendMessageToAd(e.options.arid,"handleFallbackBehavior",{});var t=d.throttle(N.updateNoInventoryViewability,20);E(e.options.arid,e.options.slot,"noInventoryViewabilityTracker",function(){t(e.options.arid)}),d.addWindowListener("scroll",i[e.options.arid].noInventoryViewabilityTracker),d.addWindowListener("resize",i[e.options.arid].noInventoryViewabilityTracker),d.addListener(F,"visibilitychange",i[e.options.arid].noInventoryViewabilityTracker)},loadAdBlockerDetectorScript:function(e,t){var a=m()+"/images/G/01/ads/advertising/ads._TTH_.js?cachebust="+Math.ceil(99989999*Math.random()+1e4),n=d.safeFunctionWrapper(function(){J.updateAdBlockerIsDisabled(e.options.arid,!1),N.sendMessageToAd(e.options.arid,"forceFallback",{})}),i=d.createScript(a,"text/javascript","APE_adblockerdetector",n,function(){J.updateAdBlockerIsDisabled(e.options.arid,!0)}),o=F.getElementById(x[e.options.arid].placementDivId);o?o.appendChild(i):F.body.appendChild(i)},updateAdImgLoaded:function(e,t){J.updateAdImgLoaded(e.options.arid,t.isLoaded)},loadAdFeedback:function(e,t){var a=N.adMap[e.options.arid].iframe;e.options.adCreativeMetaData=t,s.appendAdFeedbackLinkToIframe(a,e.options,I)},safeFrameReady:function(e){},requestVideoAutoplay:function(e,t){if(o===e.options.arid&&N.sendCustomMessageToAd(e.options.arid,"videoAutoplayResponse",!0),null===o&&null!==e.options.arid){var a=F.getElementsByTagName("video"),n=a&&0===a.length;o=n?e.options.arid:null,N.sendCustomMessageToAd(e.options.arid,"videoAutoplayResponse",n)}},releaseVideoAutoplay:function(e,t){o=null,N.sendCustomMessageToAd(e.options.arid,"videoAutoplayReleased")}},d.addWindowListener("message",N.receiveMessage),L.DAsf.registerCustomMessageListener=N.registerCustomMessageListener,L.DAsf.sendCustomMessage=N.sendCustomMessage,L.DAsf.loadAds=function(){var e,t,a=0,n=null,i=[];if("function"!=typeof F.getElementsByClassName){var o=F.getElementsByTagName("div"),r=F.getElementsByTagName("script"),s=0;for(s=0;s<o.length;s++)i[s]=o[s];for(s=0;s<r.length;s++)i[s+o.length]=r[s]}else i=F.getElementsByClassName(g);for(0===i.length&&(i=F.getElementsByTagName("script"));n=i[a++];)if("DIV"===n.tagName&&P(n,g)||n.getAttribute("type")===g){var d=n.getAttribute("data-ad-details")||n.text||n.innerHTML||n.innerText;try{var c="ape_"+(d=JSON.parse(d)).slot+"_placement",l=F.getElementById(c);if(!N.adMap[d.arid]&&l&&l.innerHTML&&(l.innerHTML="",n.removeAttribute(y)),n.getAttribute(y))continue;d.arid=d.arid||Math.random().toString(16).slice(2),I[d.arid]=new R.Tracer(d.traceId,L[d.slotName]&&L[d.slotName].adStartTime||0),I[d.arid].logTrace("safeFrameInput",d);var u={};u.caches=L.caches?L.caches:null,u.plugins=F.plugins?F.plugins:null,u.cookies=F.cookie?F.cookie:null,u.userAgents=navigator.userAgent?navigator.userAgent:null,I[d.arid].logTrace("browserData",u),n.setAttribute(y,d.arid),d.hostDomain=location.protocol+"//"+location.host,d.allowedSizes="object"==typeof d.allowedSizes&&0<=d.allowedSizes.length?d.allowedSizes.concat(d.size):[d.size];var p="d3l3lkinz3f56t.cloudfront.net,g-ecx.images-amazon.com,z-ecx.images-amazon.com,images-na.ssl-images-amazon.com,g-ec4.images-amazon.com,images-cn.ssl-images-amazon.com".split(",");if(d.allowedDomains="object"==typeof d.allowedDomains&&0<=d.allowedDomains.length?d.allowedDomains.concat(p):p,d.queryParams=k(),d.aPageStart=L.aPageStart,d.adStartTime=L[d.slotName]&&L[d.slotName].adStartTime||0,E(d.arid,d.slot,"defaultResizeSafeFrameHandler",M(d)),e=d.arid,t=d.slot,x[e]={slotId:t,placementDivId:"ape_"+t+"_placement",iframeId:"ape_"+t+"_iframe"},"clickTracking"in d&&""===d.clickTracking&&(d.clickTracking=D.getSlotPlaceholder(d)),d.forcePunt){z("forcePunt",d.slot,d.placementId),V(x[d.arid].placementDivId);continue}if(d.safeFrameSrc="true"===d.abpAcceptable?w:h,d.abpStatus)for(var m in z("ABPStatus"+v[d.abpStatus],d.slot),v)O(d.slot,d.placementId,T[m],d.abpStatus===m?1:0);_("af",d.slot,d.placementId),O(d.slot,d.placementId,A.START,1);var f={};if(f.hostDomain=d.hostDomain,f.allowedSizes=d.allowedSizes,f.allowedDomains=d.allowedDomains,f.queryParams=d.queryParams,f.aPageStart=d.aPageStart,f.adStartTime=d.adStartTime,f.safeFrameSrc=d.safeFrameSrc,f.abpStatus=d.abpStatus,"function"!=typeof L.postMessage){W(b,1),V(x[d.arid].placementDivId),f.postMessage="postMessageNotSupported";continue}W(S,1),H(d.loadAfter,C(d),0,n),f.postMessage="postMessageSupported",f.loadAfter=d.loadAfter,I[d.arid].logTrace("additionalInitilizationParams",f)}catch(e){d=null,B("Error parsing sf tag",e)}}},L.DAsf.loadAds()}function E(e,t,a,n){i[e]=i[e]||{},i[e][a]=d.safeFunctionWrapper(n,B,"Error within ad handler "+a+": "+t)}function k(){var e={};try{for(var t=L.location.search.substring(1).split("&"),a=0;a<t.length;a++){var n=t[a].split("="),i=n[0];1<n.length&&0===i.indexOf("sf-")&&(e[i]=n[1])}}catch(e){B("Error parsing query parameters",e)}return e}function M(e){return function(){p(e.arid,e.size.width,e.size.height,e.maxAdWidth,N,x)}}function C(t){return d.safeFunctionWrapper(function(){var e={callbackOccurred:!0};e.loadAfter=t.loadAfter,I[t.arid].logTrace("pageCallBack",e),O(t.slot,t.placementId,A.CALLBACK,1),function(e,t){if(!e)return!1;var a=F.getElementById(e);if(a&&!a.innerHTML){var n=a.getAttribute(y);if(n&&n===t.arid)return!0}return!1}(x[t.arid].placementDivId,t)&&function(t){try{var a,n=JSON.stringify(t),e=F.getElementById(x[t.arid].placementDivId),i={};if(/MSIE (6|7|8)/.test(navigator.userAgent))try{a=F.createElement("<iframe name='"+n+"'>")}catch(e){a=u(n)}else a=u(n);a.id=x[t.arid].iframeId,a.src=t.safeFrameSrc,a.scrolling="no",a.height=t.size.height||"250px",a.width=t.size.width||"300px",a.className=t.iframeClass||"",a.setAttribute("frameborder","0"),a.setAttribute("marginheight","0"),a.setAttribute("marginwidth","0"),a.setAttribute("scrolling","no"),a.setAttribute("allowtransparency","true"),a.setAttribute("allowfullscreen",""),a.setAttribute("mozallowfullscreen",""),a.setAttribute("webkitallowfullscreen",""),a.setAttribute(y,t.arid),a.style.cssText=t.iframeExtraStyle||"",t.iframeSandbox&&(a.sandbox=t.iframeSandbox,i.sandbox=a.sandbox),a.onload=function(){r.checkCache(t.DAsfUrl,t.safeFrameSrc,t.slot,t.placementId,O)},e.appendChild(a),_("cf",t.slot,t.placementId),O(t.slot,t.placementId,A.IFRAME_CREATED,1),N.adMap[t.arid]={slot:e,iframe:a,options:t},J.adbMap[t.arid]={slot:t.slot,adBlockerIsDisabled:void 0,adImgLoaded:void 0,adImpressionsFired:void 0,adViewabilityFired:void 0,placementId:t.placementId},i.id=a.id,i.src=a.src,i.scrolling=a.scrolling,i.height=a.height,i.width=a.width,i.className=a.className,i.styleCssText=a.style.cssText,I[t.arid].logTrace("createSafeFrame",i)}catch(e){B("Error creating safeFrame",e),I[t.arid]&&I[t.arid].logTrace("createSafeFrame",{error:{message:"errorCreatingSafeFrame",ex:e}})}}(t)},B,"Error in callback to create Safeframe.")}}d.safeFunctionWrapper(function(){"undefined"==typeof JSON?i("https://images-na.ssl-images-amazon.com/images/G/01/da/js/json3.min._V308851628_.js",o):o()},B,"Error initializing safeFrame")()}(window,document)},{"../components/adBarTracer":5,"../components/adBlockerHandler":6,"../components/cacheChecker":8,"../components/clickTrackingHelper":9,"./components/adFeedback":12,"./messenger/msgHandler":14,"./metrics/counters":15,"./metrics/csm":16}],12:[function(e,t,a){var w=e("../metrics/csm").sendCsmCounter,v=e("../metrics/counters"),y=e("../../components/ajaxRequest");t.exports.appendAdFeedbackLinkToIframe=function(e,i,o){var t,a={};if(a.isFeedbackLoaded=e.isFeedbackLoaded,e&&!e.isFeedbackLoaded&&i.adFeedbackInfo.boolFeedback){e.isFeedbackLoaded=!0;var n=e.parentNode,r=i.placementId,s=i.adFeedbackInfo.slugText,d=i.adFeedbackInfo.endPoint,c=i.advertisementStyle,l=i.feedbackDivStyle,u=v.FEEDBACK_COUNTERS,p={adPlacementMetaData:i.adPlacementMetaData,adCreativeMetaData:i.adCreativeMetaData};a.slot=n,a.placementId=r,a.slugText=s,a.endPoint=d,a.advertisementStyle=c,a.feedbackDivStyle=l,a.adFeedbackParams=p;var m=function(e,t,a,n){var i=document.createElement(e);for(var o in t)i.setAttribute(o,t[o]);return function(e,t){if(e&&t)for(var a in t)e.style[a]=t[a]}(i,a),n&&n.insertBefore(i,null),i},f=n.getElementsByTagName("div")[0]||m("div",{id:n.id+"_Feedback"},l,n),g=function(){o[i.arid].logTrace("adFeedBack",{renderFallbackAdvertisement:!0}),w(i.slot,r,u.FALLBACK,1),(f.getElementsByTagName("div")[0]||m("div",0,c,f)).innerHTML=s},h=d&&d.length?window.location.protocol+"//"+window.location.hostname+d+"?pl="+(t=p,encodeURIComponent(JSON.stringify(t))):d;a.requestUrl=h,o[i.arid].logTrace("adFeedBack",{adFeedbackRequest:a}),h?(w(i.slot,r,u.REQUEST,1),y.sendAjaxRequest(h,"GET",null,null,function(e){var t={feedbackResponseStarted:!0};if(4===e.readyState){if(200===e.status)try{var a=e.responseText,n=JSON.parse(a);(t.response=n)&&"ok"===n.status?("html"in n&&n.html&&(f.innerHTML=n.html),"script"in n&&n.script&&((f.getElementsByTagName("script")[0]||m("script",0,null,f)).innerHTML=n.script),w(i.slot,r,u.SUCCESS,1),t.feedBackResponseReturned=!0):g()}catch(e){g()}else t.feedBackResponseReturned=!1,g();o[i.arid].logTrace("adFeedBack",{adFeedBackResponse:t})}},g)):g()}}},{"../../components/ajaxRequest":7,"../metrics/counters":15,"../metrics/csm":16}],13:[function(e,d,t){function c(e,t,a){var n=0;return document.hidden?n:(n=0<e?a-e:0<t?Math.min(t,a):0,Math.min(n,t-e))}function r(){try{var e={};return e.t=window.screenY?window.screenY:window.screenTop,e.l=window.screenX?window.screenX:window.screenLeft,e.w=d.exports.windowWidth(),e.h=d.exports.windowHeight(),e.b=e.t+e.h,e.r=e.l+e.w,e}catch(e){return null}}function s(e,t){try{var a={},n=function(e,t){try{var a={},n=t||e.getBoundingClientRect();return a.t=n.top,a.l=n.left,a.r=n.right,a.b=n.bottom,a.w=n.width||a.r-a.l,a.h=n.height||a.b-a.t,a.z=e?Number(window.getComputedStyle(e,null).zIndex):NaN,a}catch(e){return null}}(e,t),i=function(e){try{var t={},a=d.exports.windowWidth(),n=d.exports.windowHeight(),i=Math.max(0,c(e.t,e.b,n)),o=Math.max(0,c(e.l,e.r,a)),r=i*o,s=e.h*Math.min(e.w,d.exports.windowWidth());return t.xiv=Number(Math.min(1,o/e.w).toFixed(2)),t.yiv=Number(Math.min(1,i/e.h).toFixed(2)),t.iv=Number(Math.min(1,Math.max(0,r/s)).toFixed(2)),t}catch(e){return null}}(n);return a.t=n.t,a.l=n.l,a.r=n.r,a.b=n.b,a.w=n.w,a.h=n.h,a.z=n.z,a.xiv=i.xiv,a.yiv=i.yiv,a.iv=i.iv,a}catch(e){return null}}function l(e,t){try{var a={},n=t||e.getBoundingClientRect();return a.t=n.top,a.l=n.left,a.r=d.exports.windowWidth()-n.right,a.b=d.exports.windowHeight()-n.bottom,a.xs=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth)>d.exports.windowWidth()?1:0,a.yx=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)>d.exports.windowHeight()?1:0,a}catch(e){return null}}d.exports.findVerticalPositionReached=function(){try{return window.scrollY+d.exports.windowHeight()}catch(e){return null}},d.exports.findDistanceFromViewport=function(e){try{return e.getBoundingClientRect().top-d.exports.windowHeight()}catch(e){return null}},d.exports.getViewableInfo=function(e){if(!e)return null;var t={},a=r(),n=s(e),i=l(e);return a&&n&&i?(t.geom={},t.geom.win=a,t.geom.self=n,t.geom.exp=i,t.payload={},t.payload.wh=a.h,t.payload.ww=a.w,t.payload.sx=window.scrollX,t.payload.sy=window.scrollY,t.payload.ah=n.h,t.payload.aw=n.w,t.payload.top=n.t,t.payload.left=n.l,t):null},d.exports.takeSnapshotOfSlotPosition=function(e){try{return{initialBoundingRect:e.getBoundingClientRect(),adHeight:e.offsetHeight,adWidth:e.offsetWidth,originalScrollX:window.scrollX,originalScrollY:window.scrollY}}catch(e){return null}},d.exports.getNoInventoryViewabilityData=function(e){var t={},a=function(e){try{var t=e.initialBoundingRect,a=t.top-(window.scrollY-e.originalScrollY),n=a+e.adHeight,i=t.left-(window.scrollX-e.originalScrollX),o=i+e.adWidth;return{top:a,bottom:n,left:i,right:o,width:e.adWidth,height:e.adHeight}}catch(e){return null}}(e),n=r(),i=s(null,a),o=l(null,a);return n&&i&&o?(t.geom={},t.geom.win=n,t.geom.self=i,t.geom.exp=o,t.payload={},t.payload.wh=n.h,t.payload.ww=n.w,t.payload.sx=window.scrollX,t.payload.sy=window.scrollY,t.payload.ah=i.h,t.payload.aw=i.w,t.payload.top=i.t,t.payload.left=i.l,t):null},d.exports.windowHeight=function(){return window.innerHeight||document.documentElement.clientHeight},d.exports.windowWidth=function(){return window.innerWidth||document.documentElement.clientWidth}},{}],14:[function(e,t,a){var f=e("../components/viewability"),p=e("../../components/util"),n=e("../metrics/csm"),i=n.sendCsmLatencyMetric,o=n.sendCsmCounter,r={ERROR:"ERROR",WARN:"WARN",FATAL:"FATAL"},l=s();function g(e,t){var a=t||new Error(e);o("",null,"safeFrameError",1),window.sfLogErrors&&(window.ueLogError?window.ueLogError(a,{logLevel:r.ERROR,attribution:"APE-safeframe",message:e+" "}):"undefined"!=typeof console&&console.error&&console.error(e,a))}function s(){var e=window.location.host.match(/^.*\.([^.:/]*)/),t=null;if(e&&1<e.length&&(t=e[1]),!/s/.test(location.protocol))return"cn"===t?"http://g-ec4.images-amazon.com":"http://z-ecx.images-amazon.com";var a="na";return/^(com|ca|mx)$/.test(t)?a="na":/^(uk|de|fr|it|es|in)$/.test(t)?a="eu":/^(jp|au)$/.test(t)?a="fe":/^(cn)$/.test(t)&&(a="cn"),"https://images-"+a+".ssl-images-amazon.com"}function u(e){return e.replace(/^.{1,5}:\/\/|^\/\//,"")}function m(e,t,a,n){var i=!1,o=function(){n(a,e)&&(t(),i=!0)},r=p.safeFunctionWrapper(p.throttle(function(){o(),i&&(p.removeWindowListener("scroll",o),p.removeWindowListener("resize",o))},20));p.addWindowListener("scroll",r),p.addWindowListener("resize",r)}t.exports.util=p,t.exports.viewability=f,t.exports.messenger=new function(e,t,a){var c=this;this.adMap=e||{},this.supportedCommands=t||{},this.msgListeners=a||{};var r=function(e){var t=c.adMap,a=t[e].options;if(t==={}||a==={})return null;var n="ape_"+a.slot+"_iframe";return t[e].iframe&&(t[e].iframe=t[e].iframe&&t[e].iframe.innerHTML?t[e].iframe:document.getElementById(n)),t[e].iframe};this.sendMessageToAd=function(e,t,a){var n=r(e),i=n?n.contentWindow:null;if(i){var o={command:t,data:a};o=JSON.stringify(o),i.postMessage(o,"*")}},this.receiveMessage=function(t){var e=c.adMap,a=c.supportedCommands;if(e!=={}){var n,i,o,r,s;try{if(t.data&&t.data.message&&/.*Mash.*/i.test(t.data.message.id))throw"Received Mash message";i=e[(n=JSON.parse(t.data)).arid]}catch(e){return}try{if(s=t,!(r=i)||!r.options||!r.options.msfInlined&&u(s.origin)!==u(l)||"object"!=typeof n.data)throw"Invalid Message: "+JSON.stringify(t.data);var d=a[n.command];d&&(i.options.debug&&"undefined"!=typeof console&&console.log(t),d(i,n.data))}catch(e){o="Problem with message: "+t.data,void 0!==n&&(o+=c.appendErrorDetails(n.arid)),g(o,e)}}},this.appendErrorDetails=function(e){var t=c.adMap;if(t==={})return"";var a="";if(void 0!==t[e]){var n=t[e].options;void 0!==n.aanResponse&&(a=" Ad Details: "+JSON.stringify(n.aanResponse))}return a},this.customMessage=function(e,t){var a=c.msgListeners;if(a[e])try{a[e](t)}catch(e){g("Custom Message Error",e)}else g("Unrecognized custom message key: "+e)},this.registerCustomMessageListener=function(e,t,a){var n=!1,i=c.msgListeners;try{!i[e]||"function"!=typeof i[e]||a?(i[e]=t,n=!0):g("Duplicate Key",new Error("Custom message listener already exists for key: "+e))}catch(e){g("Error registering custom message listener",e)}return n},this.sendCustomMessage=function(e,t){var a=c.adMap,n={key:e,data:t};for(var i in a)c.sendMessageToAd(i,"customMessage",n)},this.sendCustomMessageToAd=function(e,t,a){var n={key:t,data:a};c.sendMessageToAd(e,"customMessage",n)},this.takeSnapshotOfSlotPosition=function(e){var t=c.adMap,a=t&&t[e]&&t[e].options;if(t&&t!=={}&&a&&a!=={}){var n=r(e);c.adMap[e].options.slotSnapshot=f.takeSnapshotOfSlotPosition(n)}},this.updateViewability=function(e){var t=c.adMap,a=t&&t[e]&&t[e].options;if(t&&t!=={}&&a&&a!=={}){var n=r(e),i=t[e].options.viewabilityStandards,o=f.getViewableInfo(n);null!==o&&(o.viewabilityStandards=i,c.sendMessageToAd(e,"updateViewability",o))}},this.updateNoInventoryViewability=function(e){var t=c.adMap,a=t&&t[e]&&t[e].options,n=a&&a.slotSnapshot;if(t&&t!=={}&&a&&a!=={}&&n){var i=a.viewabilityStandards,o=f.getNoInventoryViewabilityData(n);null!==o&&(o.viewabilityStandards=i,c.sendMessageToAd(e,"updateViewability",o))}}},t.exports.logError=g,t.exports.SF_DOMAIN=l,t.exports.loadScript=function(e,t){var a=document.createElement("script");a.src=e,a.setAttribute("crossorigin","anonymous"),a.onload=a.onreadystatechange=function(){a.readyState&&"loaded"!==a.readyState&&"complete"!==a.readyState||(a.onload=a.onreadystatechange=null,t&&"function"==typeof t&&t())},a.onerror=function(e){return g("Error loading script",e),!1},(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(a)},t.exports.fireViewableLatencyMetrics=function(e,t,a,n){window.apeViewableLatencyTrackers&&window.apeViewableLatencyTrackers[e]&&window.apeViewableLatencyTrackers[e].valid&&(window.apeViewableLatencyTrackers[e].loaded=!0,window.apeViewableLatencyTrackers[e].viewed&&(i("ld",t,a,"viewablelatency",n),o(t,a,"htmlviewed:loaded",1)))},t.exports.hasClass=function(e,t){var a=new RegExp("(^|\\s)"+t+"(\\s|$)"),n=e.className;return n&&a.test(n)},t.exports.createIframeWithName=function(e){var t=document.createElement("iframe");return t.name=e,t},t.exports.logCounter=function(e,t){window.ue&&"function"==typeof window.ue.count&&window.ue.count(e,t)},t.exports.collapseSlot=function(e){var t=document.getElementById(e);void 0!==t&&t&&(t.style.display="none")},t.exports.resizeSafeFrameAd=function(t,a,n,e,i,o){try{var r=document.getElementById(o[t].placementDivId),s=document.getElementById(o[t].wrapperDivId)||r,d=document.getElementById(o[t].iframeId);if(null===s||null===r||null===d)return;var c=n,l=a,u=function(e){c=Math.round(e*n/a),l=Math.round(e)},p=0===s.offsetWidth?f.windowWidth():s.offsetWidth;e&&f.windowHeight()<f.windowWidth()?u(e):u(p),i&&i.adMap&&i.adMap[t]&&i.adMap[t].options&&i.adMap[t].options.slotSnapshot&&(i.adMap[t].options.slotSnapshot.adHeight=c,i.adMap[t].options.slotSnapshot.adWidth=l),c+="px",l+="px",d.style.height=c;var m={width:d.style.width=l,height:c};s!==r&&(r.style.height=c,i.sendMessageToAd(t,"resizeCreativeWrapper",m))}catch(e){g("Error resizing ad: "+o[t].slotId,e)}},t.exports.delayLoad=function(e,t,a,n){var i="undefined"!=typeof P,o="undefined"!=typeof amznJQ,r="number"==typeof a&&0!==a?function(){setTimeout(t,a)}:t;if("windowOnLoad"===e)"complete"===document.readyState?r():p.addWindowListener("load",r);else if("spATFEvent"===e)i?P.when("search-page-utilities").execute(function(e){e.afterEvent("spATFEvent",r)}):o?amznJQ.available("search-js-general",function(){window.SPUtils.afterEvent("spATFEvent",r)}):r();else if("aboveTheFold"===e)i?P.when("af").execute(r):o?amznJQ.onCompletion("amznJQ.AboveTheFold",r):r();else if("criticalFeature"===e)i?P.when("cf").execute(r):o?amznJQ.onCompletion("amznJQ.criticalFeature",r):r();else if("r2OnLoad"===e)i?P.when("r2Loaded").execute(r):o?amznJQ.onReady("r2Loaded",r):r();else if(e.match("[^:]+:.+")){var s=e.split(":"),d=s[0].split("."),c=s[1],l=2<s.length?s[2]:c;i?P.when(l,"A").execute(r):o&&1<d.length?amznJQ[d[1]](c,r):r()}else if(e.match(/^\d{1,4}px$/g))m(parseInt(e,10),r,n,function(e,t){return e&&f.findDistanceFromViewport(e)<=t});else{var u=/^reached(\d{1,5}px)FromTop$/g.exec(e);u?m(parseInt(u[1],10),r,n,function(e,t){return f.findVerticalPositionReached()>=t}):r()}},t.exports.getMediaCentralOrigin=s,t.exports.appendJsScript=function(e,t,a){var n=document.createElement("script");n.charset=a||"utf-8",n.src=e,t.appendChild(n)},t.exports.scriptValidator=function(e,t){return e.match(/^((?:https?:)?\/\/)?([\w\-\.]+(?::[0-9]+)?)\/?(.*)$/)[2]===t},t.exports.sizeValidator=function(e,t){return e.height===t.height&&e.width===t.width},t.exports.checkAgainstWhitelist=function(e,t,a){if(!t||"object"!=typeof t)return!1;for(var n=0,i=t.length;n<i;n++)if(a(e,t[n]))return!0;return!1}},{"../../components/util":10,"../components/viewability":13,"../metrics/csm":16}],15:[function(e,t,a){t.exports.AD_LOAD_COUNTERS={START:"adload:start",CALLBACK:"adload:delayloadcallback",IFRAME_CREATED:"adload:iframecreated"},t.exports.CACHE_COUNTERS={SF_LIBRARY:"cache:sflibrary:",SF_HTML:"cache:sfhtml:"},t.exports.FEEDBACK_COUNTERS={REQUEST:"adfeedback:request",SUCCESS:"adfeedback:success",FALLBACK:"adfeedback:fallback"},t.exports.MESSENGER_COUNTERS={API:"messenger:"},t.exports.ABP_STATUS_COUNTERS={1:"abpstatus:enabled",0:"abpstatus:notenabled","-1":"abpstatus:unknown"},t.exports.SF_VERSION_COUNTERS={VERSION:"sfversion"}},{}],16:[function(e,t,a){var s={bb:"uet",af:"uet",cf:"uet",be:"uet",ld:"uex"};function d(e,t,a,n){var i=[e,t,a];return n&&i.push(n),i}t.exports.sendCsmLatencyMetric=function(e,t,a,n,i){var o=s[e],r=n?n+":":"";"function"==typeof window[o]&&(window[o].apply(this,d(e,"adplacements:"+r+t.replace(/_/g,":"),{wb:1},i)),a&&window[o].apply(this,d(e,"adplacements:"+r+a,{wb:1},i)))},t.exports.sendCsmCounter=function(e,t,a,n){if(window.ue&&"function"==typeof window.ue.count){var i="adplacements:"+a;if(e&&(i+=":"+e.replace(/_/g,":")),window.ue.count(i,n),t){var o="adplacements:"+(a&&t?a+":":a)+t;window.ue.count(o,n)}}},t.exports.addCsmTag=function(e,t,a,n){if(window.ue&&window.ue.tag){var i=e+":"+t.replace(/_/g,":")+(n?":"+n:"");if(window.ue.tag(i),a){var o=e+":"+a+(n?":"+n:"");window.ue.tag(o)}}}},{}]},{},[11]);