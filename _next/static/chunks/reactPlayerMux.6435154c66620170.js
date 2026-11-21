"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4258],{80053:function(e,t,i){let a,r,n;i.r(t),i.d(t,{MaxResolution:function(){return t1},MediaError:function(){return tq},MinResolution:function(){return t2},RenditionOrder:function(){return t3},default:function(){return bI},generatePlayerInitTime:function(){return al},playerSoftwareName:function(){return bS},playerSoftwareVersion:function(){return bw}});var s=i(2265),o=Object.create,l=Object.defineProperty,d=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,c=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty,m=function(e,t){return function(){return e&&(t=e(e=0)),t}},p=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},v=function(e,t,i,a){if(t&&"object"==typeof t||"function"==typeof t)for(var r,n=u(t),s=0,o=n.length;s<o;s++)r=n[s],h.call(e,r)||r===i||l(e,r,{get:(function(e){return t[e]}).bind(null,r),enumerable:!(a=d(t,r))||a.enumerable});return e},E=function(e,t,i){return i=null!=e?o(c(e)):{},v(!t&&e&&e.__esModule?i:l(i,"default",{value:e,enumerable:!0}),e)},b=p(function(e,t){var i;"undefined"!=typeof window?i=window:"undefined"!=typeof global?i=global:"undefined"!=typeof self?i=self:i={},t.exports=i});function g(e,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):g(e,t)}var f=m(function(){f()});function y(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var T=m(function(){}),A=p(function(e,t){var i=Array.prototype.slice;t.exports=function(e,t){for(("length"in e)||(e=[e]),e=i.call(e);e.length;){var a=e.shift(),r=t(a);if(r)return r;a.childNodes&&a.childNodes.length&&(e=i.call(a.childNodes).concat(e))}}}),k=p(function(e,t){function i(e,t){if(!g(this,i))return new i(e,t);this.data=e,this.nodeValue=e,this.length=e.length,this.ownerDocument=t||null}f(),t.exports=i,i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),w=p(function(e,t){function i(e,t){if(!g(this,i))return new i(e);this.data=e||"",this.length=this.data.length,this.ownerDocument=t||null}f(),t.exports=i,i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(e,t,i){var a=this.data,r=a.substring(0,e),n=a.substring(e+t,a.length);this.data=r+i+n,this.length=this.data.length}}),S=p(function(e,t){t.exports=function(e){var t=this,i=e.type;e.target||(e.target=t),t.listeners||(t.listeners={});var a=t.listeners[i];if(a)return a.forEach(function(i){e.currentTarget=t,"function"==typeof i?i(e):i.handleEvent(e)});t.parentNode&&t.parentNode.dispatchEvent(e)}}),I=p(function(e,t){t.exports=function(e,t){this.listeners||(this.listeners={}),this.listeners[e]||(this.listeners[e]=[]),-1===this.listeners[e].indexOf(t)&&this.listeners[e].push(t)}}),R=p(function(e,t){t.exports=function(e,t){if(this.listeners&&this.listeners[e]){var i=this.listeners[e],a=i.indexOf(t);-1!==a&&i.splice(a,1)}}}),L=p(function(e,t){T(),t.exports=function e(t){switch(t.nodeType){case 3:return r(t.data);case 8:return"<!--"+t.data+"-->";default:var n,s;return n=[],s=t.tagName,"http://www.w3.org/1999/xhtml"===t.namespaceURI&&(s=s.toLowerCase()),n.push("<"+s+function(e){var t=[];for(var i in e)(function(e,t){var i=y(e[t]);return"style"===t&&Object.keys(e.style).length>0||e.hasOwnProperty(t)&&("string"===i||"boolean"===i||"number"===i)&&"nodeName"!==t&&"className"!==t&&"tagName"!==t&&"textContent"!==t&&"innerText"!==t&&"namespaceURI"!==t&&"innerHTML"!==t})(e,i)&&t.push({name:i,value:e[i]});for(var r in e._attributes)for(var n in e._attributes[r]){var s=e._attributes[r][n],o=(s.prefix?s.prefix+":":"")+n;t.push({name:o,value:s.value})}return e.className&&t.push({name:"class",value:e.className}),t.length?a(t):""}(t)+function(e){var t=e.dataset,i=[];for(var r in t)i.push({name:"data-"+r,value:t[r]});return i.length?a(i):""}(t)),i.indexOf(s)>-1?n.push(" />"):(n.push(">"),t.childNodes.length?n.push.apply(n,t.childNodes.map(e)):t.textContent||t.innerText?n.push(r(t.textContent||t.innerText)):t.innerHTML&&n.push(t.innerHTML),n.push("</"+s+">")),n.join("")}};var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(e){var t=[];return e.forEach(function(e){var i=e.name,a=e.value;"style"===i&&(a=function(e){if("string"==typeof e)return e;var t="";return Object.keys(e).forEach(function(i){var a=e[i];i=i.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}),t+=i+":"+a+";"}),t}(a)),t.push(i+'="'+r(a).replace(/"/g,"&quot;")+'"')}),t.length?" "+t.join(" "):""}function r(e){var t="";return"string"==typeof e?t=e:e&&(t=e.toString()),t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}),D=p(function(e,t){f();var i=A(),a=S(),r=I(),n=R(),s=L(),o="http://www.w3.org/1999/xhtml";function l(e,t,i){if(!g(this,l))return new l(e);var a=void 0===i?o:i||null;this.tagName=a===o?String(e).toUpperCase():e,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=t||null,this.namespaceURI=a,this._attributes={},"INPUT"===this.tagName&&(this.type="text")}t.exports=l,l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(e){return e.parentNode&&e.parentNode.removeChild(e),this.childNodes.push(e),e.parentNode=this,e},l.prototype.replaceChild=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=this.childNodes.indexOf(t);return t.parentNode=null,this.childNodes[i]=e,e.parentNode=this,t},l.prototype.removeChild=function(e){var t=this.childNodes.indexOf(e);return this.childNodes.splice(t,1),e.parentNode=null,e},l.prototype.insertBefore=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=null==t?-1:this.childNodes.indexOf(t);return i>-1?this.childNodes.splice(i,0,e):this.childNodes.push(e),e.parentNode=this,e},l.prototype.setAttributeNS=function(e,t,i){var a=null,r=t,n=t.indexOf(":");(n>-1&&(a=t.substr(0,n),r=t.substr(n+1)),"INPUT"===this.tagName&&"type"===t)?this.type=i:(this._attributes[e]||(this._attributes[e]={}))[r]={value:i,prefix:a}},l.prototype.getAttributeNS=function(e,t){var i=this._attributes[e],a=i&&i[t]&&i[t].value;return"INPUT"===this.tagName&&"type"===t?this.type:"string"!=typeof a?null:a},l.prototype.removeAttributeNS=function(e,t){var i=this._attributes[e];i&&delete i[t]},l.prototype.hasAttributeNS=function(e,t){var i=this._attributes[e];return!!i&&t in i},l.prototype.setAttribute=function(e,t){return this.setAttributeNS(null,e,t)},l.prototype.getAttribute=function(e){return this.getAttributeNS(null,e)},l.prototype.removeAttribute=function(e){return this.removeAttributeNS(null,e)},l.prototype.hasAttribute=function(e){return this.hasAttributeNS(null,e)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(e){var t=e.split(" "),a=[];return i(this,function(e){if(1===e.nodeType){var i=(e.className||"").split(" ");t.every(function(e){return -1!==i.indexOf(e)})&&a.push(e)}}),a},l.prototype.getElementsByTagName=function(e){e=e.toLowerCase();var t=[];return i(this.childNodes,function(i){1===i.nodeType&&("*"===e||i.tagName.toLowerCase()===e)&&t.push(i)}),t},l.prototype.contains=function(e){return i(this,function(t){return e===t})||!1}}),C=p(function(e,t){f();var i=D();function a(e){if(!g(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=e||null}t.exports=a,a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(e){return String(e)}).join("")}}),M=p(function(e,t){function i(e){}t.exports=i,i.prototype.initEvent=function(e,t,i){this.type=e,this.bubbles=t,this.cancelable=i},i.prototype.preventDefault=function(){}}),O=p(function(e,t){f();var i=A(),a=k(),r=w(),n=D(),s=C(),o=M(),l=S(),d=I(),u=R();function c(){if(!g(this,c))return new c;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}t.exports=c;var h=c.prototype;h.createTextNode=function(e){return new r(e,this)},h.createElementNS=function(e,t){return new n(t,this,null===e?null:String(e))},h.createElement=function(e){return new n(e,this)},h.createDocumentFragment=function(){return new s(this)},h.createEvent=function(e){return new o(e)},h.createComment=function(e){return new a(e,this)},h.getElementById=function(e){return e=String(e),i(this.childNodes,function(t){if(String(t.id)===e)return t})||null},h.getElementsByClassName=n.prototype.getElementsByClassName,h.getElementsByTagName=n.prototype.getElementsByTagName,h.contains=n.prototype.contains,h.removeEventListener=u,h.addEventListener=d,h.dispatchEvent=l}),x=p(function(e,t){var i=O();t.exports=new i}),N=p(function(e,t){var i,a="undefined"!=typeof global?global:"undefined"!=typeof window?window:{},r=x();"undefined"!=typeof document?i=document:(i=a["__GLOBAL_DOCUMENT_CACHE@4"])||(i=a["__GLOBAL_DOCUMENT_CACHE@4"]=r),t.exports=i});function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function U(e,t){if(e){if("string"==typeof e)return P(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return P(e,t)}}function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],s=!0,o=!1;try{for(i=i.call(e);!(s=(a=i.next()).done)&&(n.push(a.value),!(t&&n.length===t));s=!0);}catch(e){o=!0,r=e}finally{try{s||null==i.return||i.return()}finally{if(o)throw r}}return n}}(e,t)||U(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var B=E(b()),H=E(b()),F=E(b()),V={now:function(){var e=F.default.performance,t=e&&e.timing,i=t&&t.navigationStart;return Math.round("number"==typeof i&&"function"==typeof e.now?i+e.now():Date.now())}},K=function(){if("function"==typeof(null===(e=H.default.crypto)||void 0===e?void 0:e.getRandomValues)){i=new Uint8Array(32),H.default.crypto.getRandomValues(i);for(var e,t,i,a=0;a<32;a++)i[a]=i[a]%16}else{i=[];for(var r=0;r<32;r++)i[r]=16*Math.random()|0}var n=0;t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t="x"===e?i[n]:3&i[n]|8;return n++,t.toString(16)});var s=V.now(),o=null==s?void 0:s.toString(16).substring(3);return o?t.substring(0,28)+o:t},$=function(){return("000000"+(2176782336*Math.random()<<0).toString(36)).slice(-6)},q=function(e){var t;if(e&&void 0!==e.nodeName)return e.muxId||(e.muxId=$()),e.muxId;try{t=document.querySelector(e)}catch(e){}return t&&!t.muxId&&(t.muxId=e),(null==t?void 0:t.muxId)||e},Y=function(e){e&&void 0!==e.nodeName?e=q(t=e):t=document.querySelector(e);var t,i=t&&t.nodeName?t.nodeName.toLowerCase():"";return[t,e,i]};function G(e){return function(e){if(Array.isArray(e))return P(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||U(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var j={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4},Q=function(e){var t,i,a,r,n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,o=e?[console,e]:[console],l=(t=console.trace).bind.apply(t,G(o)),d=(i=console.info).bind.apply(i,G(o)),u=(a=console.debug).bind.apply(a,G(o)),c=(r=console.warn).bind.apply(r,G(o)),h=(n=console.error).bind.apply(n,G(o)),m=s;return{trace:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>j.TRACE))return l.apply(void 0,G(t))},debug:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>j.DEBUG))return u.apply(void 0,G(t))},info:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>j.INFO))return d.apply(void 0,G(t))},warn:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>j.WARN))return c.apply(void 0,G(t))},error:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>j.ERROR))return h.apply(void 0,G(t))},get level(){return m},set level(_){_!==this.level&&(m=null!=_?_:s)}}}("[mux]"),z=E(b());function Z(){return"1"===(z.default.doNotTrack||z.default.navigator&&z.default.navigator.doNotTrack)}function X(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J(e,t){if(!g(e,t))throw TypeError("Cannot call a class as a function")}function ee(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function et(e,t,i){return t&&ee(e.prototype,t),i&&ee(e,i),e}function ei(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function ea(e){return(ea=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function er(e,t,i){return(er="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ea(e)););return e}(e,t);if(a){var r=Object.getOwnPropertyDescriptor(a,t);return r.get?r.get.call(i||e):r.value}})(e,t,i||e)}function en(e,t){return(en=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}f(),T();var es=function(e){return eo(e)[0]},eo=function(e){if("string"!=typeof e||""===e)return["localhost"];var t,i=(e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4];return i&&(t=(i.match(/[^\.]+\.[^\.]+$/)||[])[0]),[i,t]},el=E(b()),ed={exists:function(){var e=el.default.performance;return void 0!==(e&&e.timing)},domContentLoadedEventEnd:function(){var e=el.default.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},navigationStart:function(){var e=el.default.performance,t=e&&e.timing;return t&&t.navigationStart}};function eu(e,t,i){i=void 0===i?1:i,e[t]=e[t]||0,e[t]+=i}function ec(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),a.forEach(function(t){ei(e,t,i[t])})}return e}function eh(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i.push.apply(i,a)}return i})(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}),e}var em=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],ep=["x-cdn","content-type"].concat(em);function ev(e){var t={};return(e=e||"").trim().split(/[\r\n]+/).forEach(function(e){if(e){var i=e.split(": "),a=i.shift();a&&(ep.indexOf(a.toLowerCase())>=0||0===a.toLowerCase().indexOf("x-litix-"))&&(t[a]=i.join(": "))}}),t}function eE(e){if(e){var t=em.find(function(t){return void 0!==e[t]});return t?e[t]:void 0}}var eb=function(e){var t={};for(var i in e){var a=e[i];-1!==a["DATA-ID"].search("io.litix.data.")&&(t[a["DATA-ID"].replace("io.litix.data.","")]=a.VALUE)}return t},eg=function(e){if(!e)return{};var t=ed.navigationStart(),i=e.loading,a=i?i.start:e.trequest,r=i?i.first:e.tfirst,n=i?i.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+a),responseStart:Math.round(t+r),responseEnd:Math.round(t+n)}},ef=function(e){if(!(!e||"function"!=typeof e.getAllResponseHeaders))return ev(e.getAllResponseHeaders())},e_=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=arguments.length>4?arguments[4]:void 0,r=e.log,n=e.utils.secondsToMs,s=function(e){var t,i=parseInt(a.version);return 1===i&&null!==e.programDateTime&&(t=e.programDateTime),0===i&&null!==e.pdt&&(t=e.pdt),t};if(!ed.exists()){r.warn("performance timing not supported. Not tracking HLS.js.");return}var o=function(i,a){return e.emit(t,i,a)},l=function(e,t){var i=t.levels,a=t.audioTracks,r=t.url,n=t.stats,s=t.networkDetails,l=t.sessionData,d={},u={};i.forEach(function(e,t){d[t]={width:e.width,height:e.height,bitrate:e.bitrate,attrs:e.attrs}}),a.forEach(function(e,t){u[t]={name:e.name,language:e.lang,bitrate:e.bitrate}});var c=eg(n),h=c.bytesLoaded,m=c.requestStart,p=c.responseStart,v=c.responseEnd;o("requestcompleted",eh(ec({},eb(l)),{request_event_type:e,request_bytes_loaded:h,request_start:m,request_response_start:p,request_response_end:v,request_type:"manifest",request_hostname:es(r),request_response_headers:ef(s),request_rendition_lists:{media:d,audio:u,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var d=function(e,t){var i=t.details,a=t.level,r=t.networkDetails,l=eg(t.stats),d=l.bytesLoaded,u=l.requestStart,c=l.responseStart,h=l.responseEnd,m=i.fragments[i.fragments.length-1],p=s(m)+n(m.duration);o("requestcompleted",{request_event_type:e,request_bytes_loaded:d,request_start:u,request_response_start:c,request_response_end:h,request_current_level:a,request_type:"manifest",request_hostname:es(i.url),request_response_headers:ef(r),video_holdback:i.holdBack&&n(i.holdBack),video_part_holdback:i.partHoldBack&&n(i.partHoldBack),video_part_target_duration:i.partTarget&&n(i.partTarget),video_target_duration:i.targetduration&&n(i.targetduration),video_source_is_live:i.live,player_manifest_newest_program_time:isNaN(p)?void 0:p})};i.on(a.Events.LEVEL_LOADED,d);var u=function(e,t){var i=t.details,a=t.networkDetails,r=eg(t.stats);o("requestcompleted",{request_event_type:e,request_bytes_loaded:r.bytesLoaded,request_start:r.requestStart,request_response_start:r.responseStart,request_response_end:r.responseEnd,request_type:"manifest",request_hostname:es(i.url),request_response_headers:ef(a)})};i.on(a.Events.AUDIO_TRACK_LOADED,u);var c=function(e,t){var a=t.stats,r=t.networkDetails,n=t.frag,s=eg(a=a||n.stats),l=s.bytesLoaded,d=s.requestStart,u=s.responseStart,c=s.responseEnd,h=r?ef(r):void 0,m={request_event_type:e,request_bytes_loaded:l,request_start:d,request_response_start:u,request_response_end:c,request_hostname:r?es(r.responseURL):void 0,request_id:h?eE(h):void 0,request_response_headers:h,request_media_duration:n.duration,request_url:null==r?void 0:r.responseURL};"main"===n.type?(m.request_type="media",m.request_current_level=n.level,m.request_video_width=(i.levels[n.level]||{}).width,m.request_video_height=(i.levels[n.level]||{}).height,m.request_labeled_bitrate=(i.levels[n.level]||{}).bitrate):m.request_type=n.type,o("requestcompleted",m)};i.on(a.Events.FRAG_LOADED,c);var h=function(e,t){var i=t.frag,a=i.start;o("fragmentchange",{currentFragmentPDT:s(i),currentFragmentStart:n(a)})};i.on(a.Events.FRAG_CHANGED,h);var m=function(e,t){var i,r=t.type,n=t.details,s=t.response,l=t.fatal,d=t.frag,u=t.networkDetails,c=(null==d?void 0:d.url)||t.url||"",h=u?ef(u):void 0;(n===a.ErrorDetails.MANIFEST_LOAD_ERROR||n===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT||n===a.ErrorDetails.LEVEL_LOAD_ERROR||n===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:n,request_url:c,request_hostname:es(c),request_id:h?eE(h):void 0,request_type:n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:null==s?void 0:s.code,request_error_text:null==s?void 0:s.text}),l&&o("error",{player_error_code:r,player_error_message:n,player_error_context:"".concat(c?"url: ".concat(c,"\n"):"")+"".concat(s&&(s.code||s.text)?"response: ".concat(s.code,", ").concat(s.text,"\n"):"")+"".concat(t.reason?"failure reason: ".concat(t.reason,"\n"):"")+"".concat(t.level?"level: ".concat(t.level,"\n"):"")+"".concat(t.parent?"parent stream controller: ".concat(t.parent,"\n"):"")+"".concat(t.buffer?"buffer length: ".concat(t.buffer,"\n"):"")+"".concat(t.error?"error: ".concat(t.error,"\n"):"")+"".concat(t.event?"event: ".concat(t.event,"\n"):"")+"".concat(t.err?"error message: ".concat(null===(i=t.err)||void 0===i?void 0:i.message,"\n"):"")})};i.on(a.Events.ERROR,m);var p=function(e,t){var i=t.frag,a=i&&i._url||"";o("requestcanceled",{request_event_type:e,request_url:a,request_type:"media",request_hostname:es(a)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p);var v=function(e,t){var a=t.level,n=i.levels[a];if(n&&n.attrs&&n.attrs.BANDWIDTH){var s,l=n.attrs.BANDWIDTH,d=parseFloat(n.attrs["FRAME-RATE"]);isNaN(d)||(s=d),l?o("renditionchange",{video_source_fps:s,video_source_bitrate:l,video_source_width:n.width,video_source_height:n.height,video_source_rendition_name:n.name,video_source_codec:null==n?void 0:n.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,v),i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,d),i.off(a.Events.AUDIO_TRACK_LOADED,u),i.off(a.Events.FRAG_LOADED,c),i.off(a.Events.FRAG_CHANGED,h),i.off(a.Events.ERROR,m),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p),i.off(a.Events.LEVEL_SWITCHED,v),i.off(a.Events.DESTROYING,i._stopMuxMonitor),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},ey=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},eT=function(e,t){if(!e||!e.requestEndDate)return{};var i,a=es(e.url),r=e.url,n=e.bytesLoaded,s=new Date(e.requestStartDate).getTime(),o=new Date(e.firstByteDate).getTime(),l=new Date(e.requestEndDate).getTime(),d=isNaN(e.duration)?0:e.duration,u="function"==typeof t.getMetricsFor?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType);u.length>0&&(i=ev(u[u.length-1]._responseHeaders||""));var c=i?eE(i):void 0;return{requestStart:s,requestResponseStart:o,requestResponseEnd:l,requestBytesLoaded:n,requestResponseHeaders:i,requestMediaDuration:d,requestHostname:a,requestUrl:r,requestId:c}},eA=function(e,t){if("function"==typeof t.getCurrentRepresentationForType){var i=t.getCurrentRepresentationForType(e);return i?{currentLevel:i.absoluteIndex,renditionWidth:i.width||null,renditionHeight:i.height||null,renditionBitrate:i.bandwidth}:{}}var a=t.getQualityFor(e),r=t.getCurrentTrackFor(e).bitrateList;return r?{currentLevel:a,renditionWidth:r[a].width||null,renditionHeight:r[a].height||null,renditionBitrate:r[a].bandwidth}:{}},ek=function(e){var t;return null===(t=e.match(/.*codecs\*?="(.*)"/))||void 0===t?void 0:t[1]},ew=function(e){try{var t,i;return null===(i=e.getVersion)||void 0===i||null===(t=i.call(e))||void 0===t?void 0:t.split(".").map(function(e){return parseInt(e)})[0]}catch(e){return!1}},eS=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=e.log;if(!i||!i.on){a.warn("Invalid dash.js player reference. Monitoring blocked.");return}var r=ew(i),n=function(i,a){return e.emit(t,i,a)},s=function(e){var t=e.type,i=(e.data||{}).url;n("requestcompleted",{request_event_type:t,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:es(i),request_url:i})};i.on("manifestLoaded",s);var o={},l=function(e){if("function"!=typeof e.getRequests)return null;var t=e.getRequests({state:"executed"});return 0===t.length?null:t[t.length-1]},d=function(e){var t=e.type,a=e.chunk,r=e.request,s=(a||{}).mediaInfo||{},l=s.type,d=s.bitrateList,u={};(d=d||[]).forEach(function(e,t){u[t]={},u[t].width=e.width,u[t].height=e.height,u[t].bitrate=e.bandwidth,u[t].attrs={}}),"video"===l?o.video=u:"audio"===l?o.audio=u:o.media=u;var c=eT(r,i),h=c.requestStart,m=c.requestResponseStart,p=c.requestResponseEnd,v=c.requestResponseHeaders,E=c.requestMediaDuration,b=c.requestHostname,g=c.requestUrl;n("requestcompleted",{request_event_type:t,request_start:h,request_response_start:m,request_response_end:p,request_bytes_loaded:-1,request_type:l+"_init",request_response_headers:v,request_hostname:b,request_id:c.requestId,request_url:g,request_media_duration:E,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",d):i.on("initFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;d({type:t,request:l(i),chunk:a})});var u=function(e){var t=e.type,a=e.chunk,r=e.request,s=a||{},o=s.mediaInfo,l=s.start,d=(o||{}).type,u=eT(r,i),c=u.requestStart,h=u.requestResponseStart,m=u.requestResponseEnd,p=u.requestBytesLoaded,v=u.requestResponseHeaders,E=u.requestMediaDuration,b=u.requestHostname,g=u.requestUrl,f=u.requestId,y=eA(d,i),T=y.currentLevel,A=y.renditionWidth,k=y.renditionHeight;n("requestcompleted",{request_event_type:t,request_start:c,request_response_start:h,request_response_end:m,request_bytes_loaded:p,request_type:d,request_response_headers:v,request_hostname:b,request_id:f,request_url:g,request_media_start_time:l,request_media_duration:E,request_current_level:T,request_labeled_bitrate:y.renditionBitrate,request_video_width:A,request_video_height:k})};r>=4?i.on("mediaFragmentLoaded",u):i.on("mediaFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;u({type:t,request:l(i),chunk:a})});var c={video:void 0,audio:void 0,totalBitrate:void 0},h=function(){if(c.video&&"number"==typeof c.video.bitrate){if(!(c.video.width&&c.video.height)){a.warn("have bitrate info for video but missing width/height");return}var e=c.video.bitrate;if(c.audio&&"number"==typeof c.audio.bitrate&&(e+=c.audio.bitrate),e!==c.totalBitrate)return c.totalBitrate=e,{video_source_bitrate:e,video_source_height:c.video.height,video_source_width:c.video.width,video_source_codec:ek(c.video.codec)}}},m=function(e,t,r){var s=e.mediaType;if("audio"===s||"video"===s){if("function"==typeof i.getRepresentationsByType){if(e.newRepresentation)o={bitrate:e.newRepresentation.bandwidth,width:e.newRepresentation.width,height:e.newRepresentation.height,qualityIndex:e.newRepresentation.absoluteIndex};else{var o,l=i.getRepresentationsByType(s);if(l&&"number"==typeof e.newQuality){var d=l.find(function(t){return t.absoluteIndex===e.newQuality||t.index===e.newQuality});d&&(o={bitrate:d.bandwidth,width:d.width,height:d.height,qualityIndex:e.newQuality})}}}else{if("number"!=typeof e.newQuality){a.warn("missing evt.newQuality in qualityChangeRendered event",e);return}o=i.getBitrateInfoListFor(s).find(function(t){return t.qualityIndex===e.newQuality})}if(!(o&&"number"==typeof o.bitrate)){a.warn("missing bitrate info for ".concat(s));return}c[s]=eh(ec({},o),{codec:i.getCurrentTrackFor(s).codec});var u=h();u&&n("renditionchange",u)}};i.on("qualityChangeRendered",m);var p=function(e){var t=e.request,i=e.mediaType;n("requestcanceled",{request_event_type:(t=t||{}).type+"_"+t.action,request_url:t.url,request_type:i,request_hostname:es(t.url)})};i.on("fragmentLoadingAbandoned",p);var v=function(e){var t,i,a=e.error,r=(null==a||null===(t=a.data)||void 0===t?void 0:t.request)||{},s=(null==a||null===(i=a.data)||void 0===i?void 0:i.response)||{};(null==a?void 0:a.code)===27&&n("requestfailed",{request_error:r.type+"_"+r.action,request_url:r.url,request_hostname:es(r.url),request_type:r.mediaType,request_error_code:s.status,request_error_text:s.statusText});var o="".concat(null!=r&&r.url?"url: ".concat(r.url,"\n"):"")+"".concat(null!=s&&s.status||null!=s&&s.statusText?"response: ".concat(null==s?void 0:s.status,", ").concat(null==s?void 0:s.statusText,"\n"):"");n("error",{player_error_code:null==a?void 0:a.code,player_error_message:null==a?void 0:a.message,player_error_context:o})};i.on("error",v),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",d),i.off("mediaFragmentLoaded",u),i.off("qualityChangeRendered",m),i.off("error",v),i.off("fragmentLoadingAbandoned",p),delete i._stopMuxMonitor}},eI=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},eR=0,eL=function(){function e(){J(this,e),ei(this,"_listeners",void 0)}return et(e,[{key:"on",value:function(e,t,i){return t._eventEmitterGuid=t._eventEmitterGuid||++eR,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],i&&(t=t.bind(i)),this._listeners[e].push(t),t}},{key:"off",value:function(e,t){var i=this._listeners&&this._listeners[e];i&&i.forEach(function(e,a){e._eventEmitterGuid===t._eventEmitterGuid&&i.splice(a,1)})}},{key:"one",value:function(e,t,i){var a=this;t._eventEmitterGuid=t._eventEmitterGuid||++eR;var r=function(){a.off(e,r),t.apply(i||this,arguments)};r._eventEmitterGuid=t._eventEmitterGuid,this.on(e,r)}},{key:"emit",value:function(e,t){var i=this;if(this._listeners){t=t||{};var a=this._listeners["before"+e]||[],r=this._listeners["before*"]||[],n=this._listeners[e]||[],s=this._listeners["after"+e]||[],o=function(t,a){(t=t.slice()).forEach(function(t){t.call(i,{type:e},a)})};o(a,t),o(r,t),o(n,t),o(s,t)}}}]),e}(),eD=E(b()),eC=function(){function e(t){var i=this;J(this,e),ei(this,"_playbackHeartbeatInterval",void 0),ei(this,"_playheadShouldBeProgressing",void 0),ei(this,"pm",void 0),this.pm=t,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,t.on("playing",function(){i._playheadShouldBeProgressing=!0}),t.on("play",this._startPlaybackHeartbeatInterval.bind(this)),t.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),t.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),t.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("seeked",function(){t.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),t.on("timeupdate",function(){null!==i._playbackHeartbeatInterval&&t.emit("playbackheartbeat")}),t.on("devicesleep",function(e,a){null!==i._playbackHeartbeatInterval&&(eD.default.clearInterval(i._playbackHeartbeatInterval),t.emit("playbackheartbeatend",{viewer_time:a.viewer_time}),i._playbackHeartbeatInterval=null)})}return et(e,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;null===this._playbackHeartbeatInterval&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=eD.default.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,null!==this._playbackHeartbeatInterval&&(eD.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),e}(),eM=function e(t){var i=this;J(this,e),ei(this,"viewErrored",void 0),t.on("viewinit",function(){i.viewErrored=!1}),t.on("error",function(e,a){try{var r=t.errorTranslator({player_error_code:a.player_error_code,player_error_message:a.player_error_message,player_error_context:a.player_error_context,player_error_severity:a.player_error_severity,player_error_business_exception:a.player_error_business_exception});r&&(t.data.player_error_code=r.player_error_code||a.player_error_code,t.data.player_error_message=r.player_error_message||a.player_error_message,t.data.player_error_context=r.player_error_context||a.player_error_context,t.data.player_error_severity=r.player_error_severity||a.player_error_severity,t.data.player_error_business_exception=r.player_error_business_exception||a.player_error_business_exception,i.viewErrored=!0)}catch(e){t.mux.log.warn("Exception in error translator callback.",e),i.viewErrored=!0}}),t.on("aftererror",function(){var e,i,a,r,n;null===(e=t.data)||void 0===e||delete e.player_error_code,null===(i=t.data)||void 0===i||delete i.player_error_message,null===(a=t.data)||void 0===a||delete a.player_error_context,null===(r=t.data)||void 0===r||delete r.player_error_severity,null===(n=t.data)||void 0===n||delete n.player_error_business_exception})},eO=function(){function e(t){J(this,e),ei(this,"_watchTimeTrackerLastCheckedTime",void 0),ei(this,"pm",void 0),this.pm=t,this._watchTimeTrackerLastCheckedTime=null,t.on("playbackheartbeat",this._updateWatchTime.bind(this)),t.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return et(e,[{key:"_updateWatchTime",value:function(e,t){var i=t.viewer_time;null===this._watchTimeTrackerLastCheckedTime&&(this._watchTimeTrackerLastCheckedTime=i),eu(this.pm.data,"view_watch_time",i-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=i}},{key:"_clearWatchTimeState",value:function(e,t){this._updateWatchTime(e,t),this._watchTimeTrackerLastCheckedTime=null}}]),e}(),ex=function(){function e(t){var i=this;J(this,e),ei(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),ei(this,"_lastTime",void 0),ei(this,"_isAdPlaying",void 0),ei(this,"_callbackUpdatePlaybackTime",void 0),ei(this,"pm",void 0),this.pm=t,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=V.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null,t.on("viewinit",function(){i.pm.data.view_playing_time_ms_cumulative=0});var a=this._startPlaybackTimeTracking.bind(this);t.on("playing",a),t.on("adplaying",a);var r=function(){i.pm.data.player_is_paused||a()};t.on("seeked",r),t.on("rebufferend",r);var n=this._stopPlaybackTimeTracking.bind(this);t.on("playbackheartbeatend",n),t.on("seeking",n),t.on("rebufferstart",n),t.on("adplaying",function(){i._isAdPlaying=!0}),t.on("adended",function(){i._isAdPlaying=!1}),t.on("adpause",function(){i._isAdPlaying=!1}),t.on("adbreakstart",function(){i._isAdPlaying=!1}),t.on("adbreakend",function(){i._isAdPlaying=!1}),t.on("adplay",function(){i._isAdPlaying=!1}),t.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=V.now(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return et(e,[{key:"_startPlaybackTimeTracking",value:function(){null===this._callbackUpdatePlaybackTime&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this._lastTime=V.now(),this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time||0,t=V.now(),i=t-this._lastTime,a=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?a=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(a=i),a>0&&a<=1e3&&eu(this.pm.data,"view_content_playback_time",a),null!==this._callbackUpdatePlaybackTime&&i>0&&i<=1e3&&(this._isAdPlaying&&eu(this.pm.data,"ad_playing_time_ms_cumulative",i),eu(this.pm.data,"view_playing_time_ms_cumulative",i)),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=t}}]),e}(),eN=function(){function e(t){J(this,e),ei(this,"pm",void 0),this.pm=t;var i=this._updatePlayheadTime.bind(this);t.on("playbackheartbeat",i),t.on("playbackheartbeatend",i),t.on("timeupdate",i),t.on("destroy",function(){t.off("timeupdate",i)})}return et(e,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=void 0===this.pm.data.view_max_playhead_position?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,t){var i=this,a=function(){i.pm.currentFragmentPDT&&i.pm.currentFragmentStart&&(i.pm.data.player_program_time=i.pm.currentFragmentPDT+i.pm.data.player_playhead_time-i.pm.currentFragmentStart)};if(t&&t.player_playhead_time)this.pm.data.player_playhead_time=t.player_playhead_time,a(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var r=this.pm.getPlayheadTime();void 0!==r&&(this.pm.data.player_playhead_time=r,a(),this._updateMaxPlayheadPosition())}}}]),e}(),eP=function e(t){if(J(this,e),!t.disableRebufferTracking){var i,a=function(e,t){r(t),i=void 0},r=function(e){if(i){var a=e.viewer_time-i;eu(t.data,"view_rebuffer_duration",a),i=e.viewer_time,t.data.view_rebuffer_duration>3e5&&(t.emit("viewend"),t.send("viewend"),t.mux.log.warn("Ending view after rebuffering for longer than ".concat(3e5,"ms, future events will be ignored unless a programchange or videochange occurs.")))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on("playbackheartbeat",function(e,t){return r(t)}),t.on("rebufferstart",function(e,r){i||(eu(t.data,"view_rebuffer_count",1),i=r.viewer_time,t.one("rebufferend",a))}),t.on("viewinit",function(){i=void 0,t.off("rebufferend",a)})}},eU=function(){function e(t){var i=this;J(this,e),ei(this,"_lastCheckedTime",void 0),ei(this,"_lastPlayheadTime",void 0),ei(this,"_lastPlayheadTimeUpdatedTime",void 0),ei(this,"_rebuffering",void 0),ei(this,"pm",void 0),this.pm=t,t.disableRebufferTracking||t.disablePlayheadRebufferTracking||(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,t.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),t.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),t.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:V.now()})}))}return et(e,[{key:"_checkIfRebuffering",value:function(e,t){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing){this._cleanupRebufferTracker(e,t);return}if(null===this._lastCheckedTime){this._prepareRebufferTrackerState(t.viewer_time);return}if(this._lastPlayheadTime!==this.pm.data.player_playhead_time){this._cleanupRebufferTracker(e,t,!0);return}var i=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.sustainedRebufferThreshold&&i>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=t.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:t.viewer_time});else{if(null===this._lastCheckedTime)return;var a=this.pm.data.player_playhead_time-this._lastPlayheadTime,r=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.minimumRebufferDuration&&a>0&&r-a>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+r-a}))}i?this._prepareRebufferTrackerState(t.viewer_time):this._clearRebufferTrackerState()}}]),e}(),eW=function(){function e(t){var i=this;J(this,e),ei(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){var e=t.data,a=e.view_id;if(!e.view_program_changed){var r=function(e,r){var n=r.viewer_time;"playing"===e.type&&void 0===t.data.view_time_to_first_frame?i.calculateTimeToFirstFrame(n||V.now(),a):"adplaying"===e.type&&(void 0===t.data.view_time_to_first_frame||i._inPrerollPosition())&&i.calculateTimeToFirstFrame(n||V.now(),a)};t.one("playing",r),t.one("adplaying",r),t.one("viewend",function(){t.off("playing",r),t.off("adplaying",r)})}})}return et(e,[{key:"_inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,t){t===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.pm.pageLoadInitTime&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.pm.pageLoadInitTime))}}]),e}(),eB=function e(t){var i=this;J(this,e),ei(this,"_lastPlayerHeight",void 0),ei(this,"_lastPlayerWidth",void 0),ei(this,"_lastPlayheadPosition",void 0),ei(this,"_lastSourceHeight",void 0),ei(this,"_lastSourceWidth",void 0),t.on("viewinit",function(){i._lastPlayheadPosition=-1}),["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend","playbackmodechange"].forEach(function(e){t.on(e,function(){if(i._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var e=t.data.player_playhead_time-i._lastPlayheadPosition;if(e<0){i._lastPlayheadPosition=-1;return}var a=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),r=Math.max(0,a-1),n=Math.max(0,1-a);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,r),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,n),eu(t.data,"view_total_content_playback_time",e),eu(t.data,"view_total_upscaling",r*e),eu(t.data,"view_total_downscaling",n*e)}i._lastPlayheadPosition=-1})}),["playing","hb","renditionchange","orientationchange","playbackmodechange"].forEach(function(e){t.on(e,function(){i._lastPlayheadPosition=t.data.player_playhead_time,i._lastPlayerWidth=t.data.player_width,i._lastPlayerHeight=t.data.player_height,i._lastSourceWidth=t.data.video_source_width,i._lastSourceHeight=t.data.video_source_height})})},eH=function e(t){var i=this;J(this,e),ei(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var e=V.now(),r=(t.data.viewer_time||e)-(a||e);eu(t.data,"view_seek_duration",r),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,r),i.isSeeking=!1,a=-1};t.on("seeking",function(e,n){if(Object.assign(t.data,n),i.isSeeking&&n.viewer_time-a<=2e3){a=n.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=n.viewer_time,eu(t.data,"view_seek_count",1),t.send("seeking")}),t.on("seeked",function(){r()}),t.on("viewend",function(){i.isSeeking&&(r(),t.send("seeked")),i.isSeeking=!1,a=-1})},eF=function(e,t){e.push(t),e.sort(function(e,t){return e.viewer_time-t.viewer_time})},eV=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],eK=function(){function e(t){var i=this;J(this,e),ei(this,"_adHasPlayed",void 0),ei(this,"_adRequests",void 0),ei(this,"_adResponses",void 0),ei(this,"_currentAdRequestNumber",void 0),ei(this,"_currentAdResponseNumber",void 0),ei(this,"_prerollPlayTime",void 0),ei(this,"_wouldBeNewAdPlay",void 0),ei(this,"isAdBreak",void 0),ei(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),eV.forEach(function(e){return t.on(e,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};t.on("adbreakstart",function(){i.isAdBreak=!0}),t.on("play",a),t.on("playing",a),t.on("viewend",a),t.on("adrequest",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},a),eF(i._adRequests,a),eu(t.data,"view_ad_request_count"),i.inPrerollPosition()&&(t.data.view_preroll_requested=!0,i._adHasPlayed||eu(t.data,"view_preroll_request_count"))}),t.on("adresponse",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},a),eF(i._adResponses,a);var r=i.findAdRequest(a.ad_request_id);r&&eu(t.data,"view_ad_request_time",Math.max(0,a.viewer_time-r.viewer_time))}),t.on("adplay",function(e,a){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,eu(t.data,"view_ad_played_count")),i.inPrerollPosition()&&!t.data.view_preroll_played&&(t.data.view_preroll_played=!0,i._adRequests.length>0&&(t.data.view_preroll_request_time=Math.max(0,a.viewer_time-i._adRequests[0].viewer_time)),t.data.view_start&&(t.data.view_startup_preroll_request_time=Math.max(0,a.viewer_time-t.data.view_start)),i._prerollPlayTime=a.viewer_time)}),t.on("adplaying",function(e,a){i.inPrerollPosition()&&void 0===t.data.view_preroll_load_time&&void 0!==i._prerollPlayTime&&(t.data.view_preroll_load_time=a.viewer_time-i._prerollPlayTime,t.data.view_startup_preroll_load_time=a.viewer_time-i._prerollPlayTime)}),t.on("adclicked",function(e,a){i._wouldBeNewAdPlay||eu(t.data,"view_ad_clicked_count")}),t.on("adskipped",function(e,a){i._wouldBeNewAdPlay||eu(t.data,"view_ad_skipped_count")}),t.on("adended",function(){i._wouldBeNewAdPlay=!0}),t.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return et(e,[{key:"inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var t=0;t<this._adRequests.length;t++)if(this._adRequests[t].ad_request_id===e)return this._adRequests[t]}},{key:"_updateAdData",value:function(e,t){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&t.ad_tag_url){var i=W(eo(t.ad_tag_url),2),a=i[0],r=i[1];this.pm.data.view_preroll_ad_tag_domain=r,this.pm.data.view_preroll_ad_tag_hostname=a}if(!this.pm.data.view_preroll_ad_asset_hostname&&t.ad_asset_url){var n=W(eo(t.ad_asset_url),2),s=n[0],o=n[1];this.pm.data.view_preroll_ad_asset_domain=o,this.pm.data.view_preroll_ad_asset_hostname=s}this.pm.data.ad_type="preroll"}this.pm.data.ad_asset_url=null==t?void 0:t.ad_asset_url,this.pm.data.ad_tag_url=null==t?void 0:t.ad_tag_url,this.pm.data.ad_creative_id=null==t?void 0:t.ad_creative_id,this.pm.data.ad_id=null==t?void 0:t.ad_id,this.pm.data.ad_universal_id=null==t?void 0:t.ad_universal_id,null!=t&&t.ad_type&&(this.pm.data.ad_type=null==t?void 0:t.ad_type)}}]),e}(),e$=function e(t){var i=this;J(this,e),ei(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=V.now(),t.on("before*",r)},r=function(e){var a=V.now(),r=i.lastWallClockTime;i.lastWallClockTime=a,a-r>3e4&&(t.emit("devicesleep",{viewer_time:r}),Object.assign(t.data,{viewer_time:r}),t.send("devicesleep"),t.emit("devicewake",{viewer_time:a}),Object.assign(t.data,{viewer_time:a}),t.send("devicewake"))};t.one("playbackheartbeat",a),t.on("playbackheartbeatend",function(){t.off("before*",r),t.one("playbackheartbeat",a)})},eq=E(b()),eY=(t_=function(){for(var e=0,t={};e<arguments.length;e++){var i=arguments[e];for(var a in i)t[a]=i[a]}return t},function e(t){function i(e,a,r){var n;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(r=t_({path:"/"},i.defaults,r)).expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*r.expires),r.expires=s}try{n=JSON.stringify(a),/^[\{\[]/.test(n)&&(a=n)}catch(e){}return a=t.write?t.write(a,e):encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=[e,"=",a,r.expires?"; expires="+r.expires.toUTCString():"",r.path?"; path="+r.path:"",r.domain?"; domain="+r.domain:"",r.secure?"; secure":""].join("")}e||(n={});for(var o=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,d=0;d<o.length;d++){var u=o[d].split("="),c=u.slice(1).join("=");'"'===c.charAt(0)&&(c=c.slice(1,-1));try{var h=u[0].replace(l,decodeURIComponent);if(c=t.read?t.read(c,h):t(c,h)||c.replace(l,decodeURIComponent),this.json)try{c=JSON.parse(c)}catch(e){}if(e===h){n=c;break}e||(n[h]=c)}catch(e){}}return n}}return i.set=i,i.get=function(e){return i.call(i,e)},i.getJSON=function(){return i.apply({json:!0},[].slice.call(arguments))},i.defaults={},i.remove=function(e,t){i(e,"",t_(t,{expires:-1}))},i.withConverter=e,i}(function(){})),eG="muxData",ej=function(){var e;try{e=(eY.get(eG)||"").split("&").reduce(function(e,t){var i=W(t.split("="),2),a=i[0],r=i[1],n=+r;return e[a]=r&&n==r?n:r,e},{})}catch(t){e={}}return e},eQ=function(e){try{eY.set(eG,Object.entries(e).map(function(e){var t=W(e,2),i=t[0],a=t[1];return"".concat(i,"=").concat(a)}).join("&"),{expires:365})}catch(e){}},ez=function(){var e=ej();return e.mux_viewer_id=e.mux_viewer_id||K(),e.msn=e.msn||Math.random(),eQ(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},eZ=function(){var e=ej(),t=V.now();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=K(),e.sst=t),e.sex=t+15e5,eQ(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}},eX=e0({a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"}),eJ=e0({ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",ck:"clicked",cl:"canceled",cm:"cmcd",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cv:"cumulative",cx:"connection",cz:"context",da:"data",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",lw:"low",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mp:"mode",ms:"ms",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",pv:"previous",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"});function e0(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t}function e1(e){var t={},i={};return Object.keys(e).forEach(function(a){var r=!1;if(e.hasOwnProperty(a)&&void 0!==e[a]){var n=a.split("_"),s=n[0],o=eX[s];o||(Q.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(e){"url"===e&&(r=!0),eJ[e]?o+=eJ[e]:Number.isInteger(Number(e))?o+=e:(Q.info("Data key word `"+e+"` not expected in "+a),o+="_"+e+"_")}),r?i[o]=e[a]:t[o]=e[a]}}),Object.assign(t,i)}var e2=E(b()),e3=E(N()),e4={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},e5=["hb","requestcompleted","requestfailed","requestcanceled"],e9=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._beaconUrl=e||"https://img.litix.io",this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},e4,t)};e9.prototype.queueEvent=function(e,t){var i=Object.assign({},t);return(this._eventQueue.length<=this._options.maxQueueLength||"eventrateexceeded"===e)&&(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength)},e9.prototype.flushEvents=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&1===this._eventQueue.length){this._eventQueue.pop();return}this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()},e9.prototype.destroy=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),e2.default.clearTimeout(this._sendTimeout)},e9.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],e1({mux_view_message:"event queue truncated"}));var i=this._createPayload(t);e6(this._beaconUrl,i,!0,function(){})},e9.prototype._sendBeaconQueue=function(){var e=this;if(this._postInFlight){this._resendAfterPost=!0;return}var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(t),a=V.now();e6(this._beaconUrl,i,!1,function(i,r){r?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,Q.info("Error sending beacon: "+r)):e._failureCount=0,e._roundTripTime=V.now()-a,e._postInFlight=!1,e._resendAfterPost&&(e._resendAfterPost=!1,e._eventQueue.length>0&&e._sendBeaconQueue())})},e9.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return(1+(e*=Math.random()))*this._options.baseTimeBetweenBeacons},e9.prototype._startBeaconSending=function(){var e=this;e2.default.clearTimeout(this._sendTimeout),this.destroyed||(this._sendTimeout=e2.default.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))},e9.prototype._createPayload=function(e){var t=this,i={transmission_timestamp:Math.round(V.now())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){n=(a=JSON.stringify({metadata:i,events:r||e})).length/1024},o=function(){return n<=t._options.maxPayloadKBSize};return s(),o()||(Q.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=e.filter(function(e){return -1===e5.indexOf(e.e)}),s()),o()||(Q.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(e){for(var t in e){var i=e[t];"string"==typeof i&&i.length>51200&&(e[t]=i.substring(0,51200))}}),s()),a};var e8="function"==typeof e3.default.exitPictureInPicture?function(e){return e.length<=57344}:function(e){return!1},e6=function(e,t,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t)){a();return}if(e2.default.fetch){e2.default.fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain"},keepalive:e8(t)}).then(function(e){return a(null,e.ok?null:"Error")}).catch(function(e){return a(null,e)});return}if(e2.default.XMLHttpRequest){var r=new e2.default.XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState)return a(null,200!==r.status?"error":void 0)},r.open("POST",e),r.setRequestHeader("Content-Type","text/plain"),r.send(t);return}a()},e7=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception","view_playing_time_ms_cumulative","ad_playing_time_ms_cumulative"],te=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],tt=["ad_id","ad_creative_id","ad_universal_id"],ti=["viewstart","error","ended","viewend"],ta=function(){function e(t,i){var a,r,n,s,o,l,d,u,c,h,m,p,v,E,b,g,f,y,T,A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};J(this,e),ei(this,"mux",void 0),ei(this,"envKey",void 0),ei(this,"options",void 0),ei(this,"eventQueue",void 0),ei(this,"sampleRate",void 0),ei(this,"disableCookies",void 0),ei(this,"respectDoNotTrack",void 0),ei(this,"previousBeaconData",void 0),ei(this,"lastEventTime",void 0),ei(this,"rateLimited",void 0),ei(this,"pageLevelData",void 0),ei(this,"viewerData",void 0),this.mux=t,this.envKey=i,this.options=A,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new e9((a=this.envKey,n=(r=this.options).beaconCollectionDomain,s=r.beaconDomain,n?(/localhost(?::\d+)?$/.test(n)?"http://":"https://")+n:(a=a||"inferred").match(/^[a-z0-9]+$/)?"https://"+a+"."+(s||"litix.io"):"https://img.litix.io/a.gif")),this.sampleRate=null!==(f=this.options.sampleRate)&&void 0!==f?f:1,this.disableCookies=null!==(y=this.options.disableCookies)&&void 0!==y&&y,this.respectDoNotTrack=null!==(T=this.options.respectDoNotTrack)&&void 0!==T&&T,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:null===(o=this.options.platform)||void 0===o?void 0:o.name,viewer_application_version:null===(l=this.options.platform)||void 0===l?void 0:l.version,viewer_application_engine:null===(d=this.options.platform)||void 0===d?void 0:d.layout,viewer_device_name:null===(u=this.options.platform)||void 0===u?void 0:u.product,viewer_device_category:"",viewer_device_manufacturer:null===(c=this.options.platform)||void 0===c?void 0:c.manufacturer,viewer_os_family:null===(m=this.options.platform)||void 0===m||null===(h=m.os)||void 0===h?void 0:h.family,viewer_os_architecture:null===(v=this.options.platform)||void 0===v||null===(p=v.os)||void 0===p?void 0:p.architecture,viewer_os_version:null===(b=this.options.platform)||void 0===b||null===(E=b.os)||void 0===E?void 0:E.version,page_url:null===eq.default||void 0===eq.default||null===(g=eq.default.location)||void 0===g?void 0:g.href},this.viewerData=this.disableCookies?{}:ez()}return et(e,[{key:"send",value:function(e,t){if(!(!e||!(null!=t&&t.view_id))){if(this.respectDoNotTrack&&Z())return Q.info("Not sending `"+e+"` because Do Not Track is enabled");if(!t||"object"!=typeof t)return Q.error("A data object was expected in send() but was not provided");var i=this.disableCookies?{}:eZ(),a=eh(ec({},this.pageLevelData,t,i,this.viewerData),{event:e,env_key:this.envKey});a.user_id&&(a.viewer_user_id=a.user_id,delete a.user_id);var r,n=(null!==(r=a.mux_sample_number)&&void 0!==r?r:0)>=this.sampleRate,s=e1(this._deduplicateBeaconData(e,a));if(this.lastEventTime=this.mux.utils.now(),n)return Q.info("Not sending event due to sample rate restriction",e,a,s);if(this.envKey||Q.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,a,s),!this.rateLimited){if(Q.info("Sending event",e,a,s),this.rateLimited=!this.eventQueue.queueEvent(e,s),this.mux.WINDOW_UNLOADING&&"viewend"===e)this.eventQueue.destroy(!0);else{if(this.mux.WINDOW_HIDDEN&&"hb"===e)this.eventQueue.flushEvents(!0);else if(ti.indexOf(e)>=0){if("error"===e&&"warning"===t.player_error_severity)return;this.eventQueue.flushEvents()}if(this.rateLimited)return a.event="eventrateexceeded",s=e1(a),this.eventQueue.queueEvent(a.event,s),Q.error("Beaconing disabled due to rate limit.")}}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,t){var i=this,a={},r=t.view_id;if("-1"===r||"viewstart"===e||"viewend"===e||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=6e5)a=ec({},t),r&&(this.previousBeaconData=a),r&&"viewend"===e&&(this.previousBeaconData=null);else{var n=0===e.indexOf("request");Object.entries(t).forEach(function(t){var r=W(t,2),s=r[0],o=r[1];i.previousBeaconData&&(o!==i.previousBeaconData[s]||e7.indexOf(s)>-1||i.objectHasChanged(n,s,o,i.previousBeaconData[s])||i.eventRequiresKey(e,s))&&(a[s]=o,i.previousBeaconData[s]=o)})}return a}},{key:"objectHasChanged",value:function(e,t,i,a){return!!e&&0===t.indexOf("request_")&&("request_response_headers"===t||"object"!=typeof i||"object"!=typeof a||Object.keys(i||{}).length!==Object.keys(a||{}).length)}},{key:"eventRequiresKey",value:function(e,t){return!!("renditionchange"===e&&0===t.indexOf("video_source_")||tt.includes(t)&&te.includes(e)||"playbackmodechange"===e&&0===t.indexOf("player_playback_mode"))}}]),e}(),tr=function e(t){J(this,e);var i=0,a=0,r=0,n=0,s=0,o=0,l=0;t.on("requestcompleted",function(e,o){var l,d,u=o.request_start,c=o.request_response_start,h=o.request_response_end,m=o.request_bytes_loaded;if(n++,c?(l=c-(null!=u?u:0),d=(null!=h?h:0)-c):d=(null!=h?h:0)-(null!=u?u:0),d>0&&m&&m>0){var p=m/d*8e3;s++,a+=m,r+=d,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,p),t.data.view_average_request_throughput=a/r*8e3,t.data.view_request_count=n,l>0&&(i+=l,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,l),t.data.view_average_request_latency=i/s)}}),t.on("requestfailed",function(e,i){n++,o++,t.data.view_request_count=n,t.data.view_request_failed_count=o}),t.on("requestcanceled",function(e,i){n++,l++,t.data.view_request_count=n,t.data.view_request_canceled_count=l})},tn=function e(t){var i=this;J(this,e),ei(this,"_lastEventTime",void 0),t.on("before*",function(e,a){var r=a.viewer_time,n=V.now(),s=i._lastEventTime;if(i._lastEventTime=n,s&&n-s>36e5){var o=Object.keys(t.data).reduce(function(e,i){return 0===i.indexOf("video_")?Object.assign(e,ei({},i,t.data[i])):e},{});t.mux.log.info("Received event after at least an hour inactivity, creating a new view");var l=t.playbackHeartbeat._playheadShouldBeProgressing;t._resetView(Object.assign({viewer_time:r},o)),t.playbackHeartbeat._playheadShouldBeProgressing=l,t.playbackHeartbeat._playheadShouldBeProgressing&&"play"!==e.type&&"adbreakstart"!==e.type&&(t.emit("play",{viewer_time:r}),"playing"!==e.type&&t.emit("playing",{viewer_time:r}))}})};function ts(e,t){return(null==e?void 0:e.toLowerCase())===(null==t?void 0:t.toLowerCase())}var to=function e(t){J(this,e);var i=function(e){var i,a=null!=e&&e.request_type&&("media"===e.request_type||"video"===e.request_type)&&!(null===(i=e.request_response_headers)||void 0===i)&&i["x-cdn"]?e.request_response_headers["x-cdn"]:null!=e&&e.video_cdn?e.video_cdn:null,r=null!=e&&e.request_start?e.request_start:null!=e&&e.viewer_time?e.viewer_time:Date.now();null!=a&&!ts(a,n)&&s<=r&&(n=a,s=r,t.emit("cdnchange",{video_cdn:a}))},a=null,r=null,n=null,s=0;t.on("viewinit",function(){a=null,r=null,n=null,s=0}),t.on("beforecdnchange",function(e,t){var i=null==t?void 0:t.video_cdn;i&&(void 0===t.video_previous_cdn||null===t.video_previous_cdn)&&(ts(i,r)?t.video_previous_cdn=null!=a?a:void 0:(t.video_previous_cdn=null!=r?r:void 0,a=r,r=i))}),t.on("requestcompleted",function(e,t){i(t)})},tl=function(e){try{return JSON.parse(e),!0}catch(e){return!1}},td=function e(t){var i=this;J(this,e),ei(this,"_emittingAutomaticEvent",!1),ei(this,"_hasInitialized",!1),ei(this,"_currentMode","standard"),t.on("viewstart",function(){i._hasInitialized||(i._hasInitialized=!0,i._currentMode=t.data.player_playback_mode||"standard",i._emittingAutomaticEvent=!0,t.emit("playbackmodechange",{player_playback_mode:i._currentMode,player_playback_mode_data:"{}"}),i._emittingAutomaticEvent=!1)}),t.on("viewend",function(){i._hasInitialized=!1}),t.on("playbackmodechange",function(e,a){i._emittingAutomaticEvent||(a.player_playback_mode_data?tl(a.player_playback_mode_data)||(t.mux.log.warn("Invalid JSON string for player_playback_mode_data"),a.player_playback_mode_data="{}"):a.player_playback_mode_data="{}",t.data.player_playback_mode_data=a.player_playback_mode_data,t.data.player_playback_mode=a.player_playback_mode,i._currentMode=a.player_playback_mode)})},tu=function(){function e(t){J(this,e),ei(this,"pm",void 0),ei(this,"_currentRangeStart",void 0),ei(this,"_lastPlayheadTime",void 0),this.pm=t,this._currentRangeStart=null,this._lastPlayheadTime=null,t.on("playbackheartbeat",this._updatePlaybackRange.bind(this)),t.on("playbackheartbeatend",this._endPlaybackRange.bind(this))}return et(e,[{key:"_updateLastRangeEnd",value:function(){var e=this.pm.data.video_playback_ranges;if(e&&e.length>0){var t=this.pm.data.player_playhead_time||0;e[e.length-1][1]=t}}},{key:"_updatePlaybackRange",value:function(){var e,t=this.pm.data.player_playhead_time||0;if(!(!this.pm.disableAdPlaybackRangeFiltering&&!(null===(e=this.pm.adTracker)||void 0===e)&&e.isAdBreak&&null!==this._lastPlayheadTime&&t<this._lastPlayheadTime)){if(null!==this._lastPlayheadTime&&null!==this._currentRangeStart&&Math.abs(t-this._lastPlayheadTime)>1e3){var i=this.pm.data.video_playback_ranges;i&&i.length>0&&(i[i.length-1][1]=this._lastPlayheadTime),this._currentRangeStart=null}if(null===this._currentRangeStart){var a=this.pm.data.video_playback_ranges||[];a.length>0&&a[a.length-1][1]===t?this._currentRangeStart=a[a.length-1][0]:(this._currentRangeStart=t,a.push([t,t])),this.pm.data.video_playback_ranges=a}else this._updateLastRangeEnd();this._lastPlayheadTime=t}}},{key:"_endPlaybackRange",value:function(){null!==this._currentRangeStart&&(this._updateLastRangeEnd(),this._currentRangeStart=null,this._lastPlayheadTime=null)}}]),e}(),tc=Object.freeze({CELLULAR:"cellular",WIFI:"wifi",WIRED:"wired",OTHER:"other",NO_CONNECTION:"no_connection",UNKNOWN:"unknown"}),th=function(e){if(!e)return tc.UNKNOWN;switch(e){case"cellular":case"wimax":return tc.CELLULAR;case"wifi":return tc.WIFI;case"ethernet":return tc.WIRED;case"none":return tc.NO_CONNECTION;case"bluetooth":case"other":default:return tc.OTHER;case"unknown":return tc.UNKNOWN}},tm=E(b()),tp=function(){function e(t){var i=this;J(this,e),ei(this,"pm",void 0),ei(this,"lastType",void 0),ei(this,"lastLowDataMode",void 0),this.pm=t,this.pm.one("viewinit",function(){var t,a=i.emit.bind(i);a(),tm.default.addEventListener("online",a),tm.default.addEventListener("offline",a),null===(t=e.connection)||void 0===t||t.addEventListener("change",a),i.pm.on("destroy",function(){var t;null===(t=e.connection)||void 0===t||t.removeEventListener("change",a),tm.default.removeEventListener("online",a),tm.default.removeEventListener("offline",a)})})}return et(e,[{key:"type",get:function(){var t,i;return(null===(t=tm.default.navigator)||void 0===t?void 0:t.onLine)===!1?tc.NO_CONNECTION:!(null===(i=e.connection)||void 0===i)&&i.type?th(e.connection.type):tc.UNKNOWN}},{key:"lowDataMode",get:function(){var t;return null===(t=e.connection)||void 0===t?void 0:t.saveData}},{key:"emit",value:function(){var e=this.type,t=this.lowDataMode;e===this.lastType&&t===this.lastLowDataMode||(this.lastType=e,this.lastLowDataMode=t,this.pm.emit("networkchange",ec({viewer_connection_type:e},void 0!==t&&{viewer_connection_low_data_mode:t})))}}],[{key:"connection",get:function(){var e;return"object"==typeof(e=tm.default.navigator)&&"connection"in e&&"object"==typeof e.connection?tm.default.navigator.connection:null}}]),e}(),tv=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange","networkchange","cdnchange","playbackmodechange"],tE=new Set(["requestcompleted","requestfailed","requestcanceled"]),tb=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&en(e,t)}(a,e);var t,i=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,i=ea(a);return e=t?Reflect.construct(i,arguments,ea(this).constructor):i.apply(this,arguments),e&&("object"===y(e)||"function"==typeof e)?e:X(this)});function a(e,t,r){J(this,a),ei(X(n=i.call(this)),"pageLoadEndTime",void 0),ei(X(n),"pageLoadInitTime",void 0),ei(X(n),"_destroyed",void 0),ei(X(n),"_heartBeatTimeout",void 0),ei(X(n),"adTracker",void 0),ei(X(n),"dashjs",void 0),ei(X(n),"data",void 0),ei(X(n),"disablePlayheadRebufferTracking",void 0),ei(X(n),"disableRebufferTracking",void 0),ei(X(n),"disableAdPlaybackRangeFiltering",void 0),ei(X(n),"errorTracker",void 0),ei(X(n),"errorTranslator",void 0),ei(X(n),"emitTranslator",void 0),ei(X(n),"getAdData",void 0),ei(X(n),"getPlayheadTime",void 0),ei(X(n),"getStateData",void 0),ei(X(n),"stateDataTranslator",void 0),ei(X(n),"hlsjs",void 0),ei(X(n),"id",void 0),ei(X(n),"longResumeTracker",void 0),ei(X(n),"minimumRebufferDuration",void 0),ei(X(n),"mux",void 0),ei(X(n),"playbackEventDispatcher",void 0),ei(X(n),"playbackHeartbeat",void 0),ei(X(n),"playbackHeartbeatTime",void 0),ei(X(n),"playheadTime",void 0),ei(X(n),"seekingTracker",void 0),ei(X(n),"sustainedRebufferThreshold",void 0),ei(X(n),"watchTimeTracker",void 0),ei(X(n),"currentFragmentPDT",void 0),ei(X(n),"currentFragmentStart",void 0),n.pageLoadInitTime=ed.navigationStart(),n.pageLoadEndTime=ed.domContentLoadedEventEnd(),n.mux=e,n.id=t,null!=r&&r.beaconDomain&&n.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),(r=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,disableAdPlaybackRangeFiltering:!1,errorTranslator:function(e){return e},emitTranslator:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return t},stateDataTranslator:function(e){return e}},r)).data=r.data||{},r.data.property_key&&(r.data.env_key=r.data.property_key,delete r.data.property_key),Q.level=r.debug?j.DEBUG:j.WARN,n.getPlayheadTime=r.getPlayheadTime,n.getStateData=r.getStateData||function(){return{}},n.getAdData=r.getAdData||function(){},n.minimumRebufferDuration=r.minimumRebufferDuration,n.sustainedRebufferThreshold=r.sustainedRebufferThreshold,n.playbackHeartbeatTime=r.playbackHeartbeatTime,n.disableRebufferTracking=r.disableRebufferTracking,n.disableRebufferTracking&&n.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),n.disablePlayheadRebufferTracking=r.disablePlayheadRebufferTracking,n.disableAdPlaybackRangeFiltering=r.disableAdPlaybackRangeFiltering,n.errorTranslator=r.errorTranslator,n.emitTranslator=r.emitTranslator,n.stateDataTranslator=r.stateDataTranslator,n.playbackEventDispatcher=new ta(e,r.data.env_key,r),n.data={player_instance_id:K(),mux_sample_rate:r.sampleRate,beacon_domain:r.beaconCollectionDomain||r.beaconDomain},n.data.view_sequence_number=1,n.data.player_sequence_number=1;var n,s=(function(){void 0===this.data.view_start&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"),this.emit("renditionchange"))}).bind(X(n));if(n.on("viewinit",function(e,t){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,t),this._initializeViewData(),this.one("play",s),this.one("adbreakstart",s)}),n.on("videochange",function(e,t){this._resetView(t)}),n.on("programchange",function(e,t){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(t,{view_program_changed:!0})),s(),this.emit("play"),this.emit("playing")}),n.on("fragmentchange",function(e,t){this.currentFragmentPDT=t.currentFragmentPDT,this.currentFragmentStart=t.currentFragmentStart}),n.on("destroy",n.destroy),"undefined"!=typeof window&&"function"==typeof window.addEventListener&&"function"==typeof window.removeEventListener){var o=function(){var e=void 0!==n.data.view_start;n.mux.WINDOW_HIDDEN="hidden"===document.visibilityState,e&&n.mux.WINDOW_HIDDEN&&(n.data.player_is_paused||n.emit("hb"))};window.addEventListener("visibilitychange",o,!1);var l=function(e){e.persisted||n.destroy()};window.addEventListener("pagehide",l,!1),n.on("destroy",function(){window.removeEventListener("visibilitychange",o),window.removeEventListener("pagehide",l)})}return n.on("playerready",function(e,t){Object.assign(this.data,t)}),tv.forEach(function(e){n.on(e,function(t,i){0!==e.indexOf("ad")&&this._updateStateData(),Object.assign(this.data,i),this._sanitizeData()}),n.on("after"+e,function(){("error"!==e||this.errorTracker.viewErrored)&&this.send(e)})}),n.on("viewend",function(e,t){Object.assign(n.data,t)}),n.one("playerready",function(e){var t=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=t-this.data.player_init_time),this.pageLoadInitTime=this.data.page_load_init_time||this.pageLoadInitTime,this.pageLoadEndTime=this.data.page_load_end_time||this.pageLoadEndTime,!this.mux.PLAYER_TRACKED&&this.pageLoadInitTime&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.pageLoadEndTime)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.pageLoadEndTime||1/0)-this.pageLoadInitTime)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time}),n.longResumeTracker=new tn(X(n)),n.errorTracker=new eM(X(n)),new e$(X(n)),n.seekingTracker=new eH(X(n)),n.playheadTime=new eN(X(n)),n.playbackHeartbeat=new eC(X(n)),new eB(X(n)),n.watchTimeTracker=new eO(X(n)),new ex(X(n)),new tu(X(n)),n.adTracker=new eK(X(n)),new eU(X(n)),new eP(X(n)),new eW(X(n)),new tr(X(n)),new to(X(n)),new td(X(n)),new tp(X(n)),r.hlsjs&&n.addHLSJS(r),r.dashjs&&n.addDashJS(r),n.emit("viewinit",r.data),n}return et(a,[{key:"emit",value:function(e,t){var i,r=Object.assign({viewer_time:this.mux.utils.now()},t),n=[e,r];if(this.emitTranslator)try{n=this.emitTranslator(e,r)}catch(e){this.mux.log.warn("Exception in emit translator callback.",e)}null!=n&&n.length&&(i=er(ea(a.prototype),"emit",this)).call.apply(i,[this].concat(G(n)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,void 0!==this.data.view_start&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(e){if(this.data.view_id){var t=Object.assign({},this.data);if(void 0===t.video_source_is_live&&(t.player_source_duration===1/0||t.video_source_duration===1/0?t.video_source_is_live=!0:(t.player_source_duration>0||t.video_source_duration>0)&&(t.video_source_is_live=!1)),t.video_source_is_live||["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"].forEach(function(e){t[e]=void 0}),t.video_source_url=t.video_source_url||t.player_source_url,t.video_source_url){var i=W(eo(t.video_source_url),2),a=i[0],r=i[1];t.video_source_domain=r,t.video_source_hostname=a}delete t.ad_request_id,t.video_playback_ranges&&(t.video_playback_range=JSON.stringify(t.video_playback_ranges.filter(function(e){return e[0]!==e[1]}).map(function(e){return"".concat(e[0],":").concat(e[1])})),delete t.video_playback_ranges),this.playbackEventDispatcher.send(e,t),this.data.view_sequence_number++,this.data.player_sequence_number++,tE.has(e)||this._restartHeartBeat(),"viewend"===e&&delete this.data.view_id}}},{key:"_resetView",value:function(e){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",e)}},{key:"_updateStateData",value:function(){var e,t=this.getStateData();if("function"==typeof this.stateDataTranslator)try{t=this.stateDataTranslator(t)}catch(e){this.mux.log.warn("Exception in stateDataTranslator translator callback.",e)}!(null===(e=this.data)||void 0===e)&&e.video_cdn&&null!=t&&t.video_cdn&&(t.video_cdn,t=function(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}(t,["video_cdn"])),Object.assign(this.data,t),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var e=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"].forEach(function(t){var i=parseInt(e.data[t],10);e.data[t]=isNaN(i)?void 0:i}),["player_source_url","video_source_url"].forEach(function(t){if(e.data[t]){var i=e.data[t].toLowerCase();(0===i.indexOf("data:")||0===i.indexOf("blob:"))&&(e.data[t]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("video_")&&delete e.data[t]})}},{key:"_resetViewData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("view_")&&delete e.data[t]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var e=this,t=this.data.view_id=K(),i=function(){t===e.data.view_id&&eu(e.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",i):i()}},{key:"_restartHeartBeat",value:function(){var e=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){e.data.player_is_paused||e.emit("hb")},1e4)}},{key:"addHLSJS",value:function(e){if(!e.hlsjs){this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");return}if(this.hlsjs){this.mux.log.warn("An instance of HLS.js is already being monitored for this player.");return}this.hlsjs=e.hlsjs,e_(this.mux,this.id,e.hlsjs,{},e.Hls||window.Hls)}},{key:"removeHLSJS",value:function(){this.hlsjs&&(ey(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(e){if(!e.dashjs){this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");return}if(this.dashjs){this.mux.log.warn("An instance of Dash.js is already being monitored for this player.");return}this.dashjs=e.dashjs,eS(this.mux,this.id,e.dashjs)}},{key:"removeDashJS",value:function(){this.dashjs&&(eI(this.dashjs),this.dashjs=void 0)}}]),a}(eL),tg=E(N());function tf(){return tg.default&&!!(tg.default.fullscreenElement||tg.default.webkitFullscreenElement||tg.default.mozFullScreenElement||tg.default.msFullscreenElement)}var t_,ty,tT=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],tA={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"},tk=E(b());tk.default&&tk.default.WeakMap&&(ty=new WeakMap);var tw={TARGET_DURATION:"#EXT-X-TARGETDURATION",PART_INF:"#EXT-X-PART-INF",SERVER_CONTROL:"#EXT-X-SERVER-CONTROL",INF:"#EXTINF",PROGRAM_DATE_TIME:"#EXT-X-PROGRAM-DATE-TIME",VERSION:"#EXT-X-VERSION",SESSION_DATA:"#EXT-X-SESSION-DATA"},tS=function(e){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};tS.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf("\n");t>-1;t=this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)},tS.prototype.processLine=function(e){var t=e.indexOf(":"),i=tO(e,t),a=i[0],r=2===i.length?tL(i[1]):void 0;if("#"!==a[0])this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),!this.manifest.targetDuration||"duration"in this.currentUri||(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case tw.TARGET_DURATION:if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break;case tw.PART_INF:tI(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case tw.SERVER_CONTROL:tI(this.manifest,i),this.setHoldBack();break;case tw.INF:0===r?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break;case tw.PROGRAM_DATE_TIME:var n=new Date(r);this.manifest.dateTimeString||(this.manifest.dateTimeString=r,this.manifest.dateTimeObject=n),this.currentUri.dateTimeString=r,this.currentUri.dateTimeObject=n;break;case tw.VERSION:tI(this.manifest,i);break;case tw.SESSION_DATA:var s=eb(tx(i[1]));Object.assign(this.manifest.sessionData,s)}},tS.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,i=e.targetDuration,a=e.partTargetDuration;if(t){var r="holdBack",n="partHoldBack",s=i&&3*i,o=a&&2*a;i&&!t.hasOwnProperty(r)&&(t[r]=s),s&&t[r]<s&&(t[r]=s),a&&!t.hasOwnProperty(n)&&(t[n]=3*a),a&&t[n]<o&&(t[n]=o)}};var tI=function(e,t){var i,a=tR(t[0].replace("#EXT-X-",""));tM(t[1])?(i={},i=Object.assign(tC(t[1]),i)):i=tL(t[1]),e[a]=i},tR=function(e){return e.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},tL=function(e){if("yes"===e.toLowerCase()||"no"===e.toLowerCase())return"yes"===e.toLowerCase();var t=-1!==e.indexOf(":")?e:parseFloat(e);return isNaN(t)?e:t},tD=function(e){var t={},i=e.split("=");return i.length>1&&(t[tR(i[0])]=tL(i[1])),t},tC=function(e){for(var t=e.split(","),i={},a=0;t.length>a;a++)i=Object.assign(tD(t[a]),i);return i},tM=function(e){return e.indexOf("=")>-1},tO=function(e,t){return -1===t?[e]:[e.substring(0,t),e.substring(t+1)]},tx=function(e){var t={};if(e){var i=e.search(",");return[e.slice(0,i),e.slice(i+1)].forEach(function(e,i){for(var a=e.replace(/['"]+/g,"").split("="),r=0;r<a.length;r++)"DATA-ID"===a[r]&&(t["DATA-ID"]=a[1-r]),"VALUE"===a[r]&&(t.VALUE=a[1-r])}),{data:t}}},tN={safeCall:function(e,t,i,a){var r=a;if(e&&"function"==typeof e[t])try{r=e[t].apply(e,i)}catch(e){Q.info("safeCall error",e)}return r},safeIncrement:eu,getComputedStyle:function(e,t){var i;return e&&t&&tk.default&&"function"==typeof tk.default.getComputedStyle?(ty&&ty.has(e)&&(i=ty.get(e)),i||(i=tk.default.getComputedStyle(e,null),ty&&ty.set(e,i)),i.getPropertyValue(t)):""},secondsToMs:function(e){return Math.floor(1e3*e)},assign:Object.assign,headersStringToObject:ev,cdnHeadersToRequestId:eE,extractHostnameAndDomain:eo,extractHostname:es,manifestParser:tS,generateShortID:$,generateUUID:K,now:V.now,findMediaElement:Y},tP={},tU=function(e){var t=arguments;"string"==typeof e?tU.hasOwnProperty(e)?B.default.setTimeout(function(){t=Array.prototype.splice.call(t,1),tU[e].apply(null,t)},0):Q.warn("`"+e+"` is an unknown task"):"function"==typeof e?B.default.setTimeout(function(){e(tU)},0):Q.warn("`"+e+"` is invalid.")},tW={loaded:V.now(),NAME:"mux-embed",VERSION:"5.18.0",API_VERSION:"2.1",PLAYER_TRACKED:!1,monitor:function(e,t){return function(e,t,i){var a=W(Y(t),3),r=a[0],n=a[1],s=a[2],o=e.log,l=e.utils.getComputedStyle,d=e.utils.secondsToMs;if(!r)return o.error("No element was found with the `"+n+"` query selector.");if("video"!==s&&"audio"!==s)return o.error("The element of `"+n+"` was not a media element.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners")),(i=Object.assign({automaticErrorTracking:!0},i,{getPlayheadTime:function(){return d(r.currentTime)},getStateData:function(){var e,t,i=(null===(e=this.getPlayheadTime)||void 0===e?void 0:e.call(this))||d(r.currentTime),a=this.hlsjs&&this.hlsjs.url,n=this.dashjs&&"function"==typeof this.dashjs.getSource&&this.dashjs.getSource(),s={player_is_paused:r.paused,player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:tf(),video_poster_url:r.poster,video_source_url:a||n||r.currentSrc,video_source_duration:d(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:null==r||null===(t=r.getVideoPlaybackQuality)||void 0===t?void 0:t.call(r).droppedVideoFrames};if(r.getStartDate&&i>0){var o=r.getStartDate();if(o&&"function"==typeof o.getTime&&o.getTime()){var u=o.getTime();if(s.player_program_time=u+i,r.seekable.length>0){var c=u+r.seekable.end(r.seekable.length-1);s.player_live_edge_program_time=c}}}return s}})).data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:e.VERSION},i.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(t,i){e.emit(n,t,i)},r.mux.updateData=function(e){r.mux.emit("hb",e)};var u=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(e){r.removeEventListener(e,r.mux.listeners[e],!1)}),delete r.mux.listeners,r.mux.fullscreenChangeListener&&(document.removeEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1),delete r.mux.fullscreenChangeListener),r.mux.destroy=u,r.mux.swapElement=u,r.mux.emit=u,r.mux.addHLSJS=u,r.mux.addDashJS=u,r.mux.removeHLSJS=u,r.mux.removeDashJS=u,r.mux.updateData=u,r.mux.setEmitTranslator=u,r.mux.setStateDataTranslator=u,r.mux.setGetPlayheadTime=u,r.mux.deleted=!0,e.emit(n,"destroy")},r.mux.swapElement=function(t){var i=W(Y(t),3),a=i[0],n=i[1],s=i[2];return a?"video"!==s&&"audio"!==s?e.log.error("The element of `"+n+"` was not a media element."):void(a.muxId=r.muxId,delete r.muxId,a.mux=a.mux||{},a.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(a.mux.listeners).forEach(function(e){r.removeEventListener(e,a.mux.listeners[e],!1),a.addEventListener(e,a.mux.listeners[e],!1)}),a.mux.fullscreenChangeListener=r.mux.fullscreenChangeListener,delete r.mux.fullscreenChangeListener,a.mux.swapElement=r.mux.swapElement,a.mux.destroy=r.mux.destroy,delete r.mux,r=a):e.log.error("No element was found with the `"+n+"` query selector.")},r.mux.addHLSJS=function(t){e.addHLSJS(n,t)},r.mux.addDashJS=function(t){e.addDashJS(n,t)},r.mux.removeHLSJS=function(){e.removeHLSJS(n)},r.mux.removeDashJS=function(){e.removeDashJS(n)},r.mux.setEmitTranslator=function(t){e.setEmitTranslator(n,t)},r.mux.setStateDataTranslator=function(t){e.setStateDataTranslator(n,t)},r.mux.setGetPlayheadTime=function(t){t||(t=i.getPlayheadTime),e.setGetPlayheadTime(n,t)},e.init(n,i),e.emit(n,"playerready"),r.paused||(e.emit(n,"play"),r.readyState>2&&e.emit(n,"playing")),r.mux.listeners={},tT.forEach(function(t){("error"!==t||i.automaticErrorTracking)&&(r.mux.listeners[t]=function(){var i={};if("error"===t){if(!r.error||1===r.error.code)return;i.player_error_code=r.error.code,i.player_error_message=tA[r.error.code]||r.error.message}e.emit(n,t,i)},r.addEventListener(t,r.mux.listeners[t],!1))}),r.mux.listeners.enterpictureinpicture=function(){e.emit(n,"playbackmodechange",{player_playback_mode:"pip",player_playback_mode_data:"{}"})},r.mux.listeners.leavepictureinpicture=function(){var t=tf()?"fullscreen":"standard";e.emit(n,"playbackmodechange",{player_playback_mode:t,player_playback_mode_data:"{}"})},r.addEventListener("enterpictureinpicture",r.mux.listeners.enterpictureinpicture,!1),r.addEventListener("leavepictureinpicture",r.mux.listeners.leavepictureinpicture,!1),r.mux.fullscreenChangeListener=function(){var t=tf(),i=document.fullscreenElement;if(t&&(i===r||null!=i&&i.contains(r)))e.emit(n,"playbackmodechange",{player_playback_mode:"fullscreen",player_playback_mode_data:"{}"});else if(!t){var a=document.pictureInPictureElement===r;e.emit(n,"playbackmodechange",{player_playback_mode:a?"pip":"standard",player_playback_mode_data:"{}"})}},document.addEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1)}(tU,e,t)},destroyMonitor:function(e){var t=W(Y(e),1)[0];t&&t.mux&&"function"==typeof t.mux.destroy?t.mux.destroy():Q.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var i=q(e);tP[i]?tP[i].addHLSJS(t):Q.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(e,t){var i=q(e);tP[i]?tP[i].addDashJS(t):Q.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(e){var t=q(e);tP[t]?tP[t].removeHLSJS():Q.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=q(e);tP[t]?tP[t].removeDashJS():Q.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){Z()&&t&&t.respectDoNotTrack&&Q.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=q(e);tP[i]=new tb(tU,i,t)},emit:function(e,t,i){var a=q(e);tP[a]?(tP[a].emit(t,i),"destroy"===t&&delete tP[a]):Q.error("A monitor for `"+a+"` has not been initialized.")},updateData:function(e,t){var i=q(e);tP[i]?tP[i].emit("hb",t):Q.error("A monitor for `"+i+"` has not been initialized.")},setEmitTranslator:function(e,t){var i=q(e);tP[i]?tP[i].emitTranslator=t:Q.error("A monitor for `"+i+"` has not been initialized.")},setStateDataTranslator:function(e,t){var i=q(e);tP[i]?tP[i].stateDataTranslator=t:Q.error("A monitor for `"+i+"` has not been initialized.")},setGetPlayheadTime:function(e,t){var i=q(e);tP[i]?tP[i].getPlayheadTime=t:Q.error("A monitor for `"+i+"` has not been initialized.")},checkDoNotTrack:Z,log:Q,utils:tN,events:{PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",PLAYBACK_MODE_CHANGE:"playbackmodechange",NETWORK_CHANGE:"networkchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(tU,tW),void 0!==B.default&&"function"==typeof B.default.addEventListener&&B.default.addEventListener("pagehide",function(e){e.persisted||(tU.WINDOW_UNLOADING=!0)},!1);/*!
* JavaScript Cookie v2.1.3
* https://github.com/js-cookie/js-cookie
*
* Copyright 2006, 2015 Klaus Hartl & Fagner Brack
* Released under the MIT license
*/var tB=i(13915),tH=tB.ZP,tF={VIDEO:"video",DRM:"drm"},tV={NETWORK_OFFLINE:2000002,NETWORK_UNKNOWN_ERROR:2e6,NETWORK_INVALID_URL:24e5,NETWORK_NOT_FOUND:2404e3,NETWORK_NOT_READY:2412e3,NETWORK_TOKEN_MISSING:2403201,NETWORK_TOKEN_MALFORMED:2412202,NETWORK_TOKEN_EXPIRED:2403210,NETWORK_TOKEN_AUD_MISSING:2403221,NETWORK_TOKEN_AUD_MISMATCH:2403222,NETWORK_TOKEN_SUB_MISMATCH:2403232,ENCRYPTED_ERROR:5e6,ENCRYPTED_UNSUPPORTED_KEY_SYSTEM:5000001,ENCRYPTED_GENERATE_REQUEST_FAILED:5000002,ENCRYPTED_UPDATE_LICENSE_FAILED:5000003,ENCRYPTED_UPDATE_SERVER_CERT_FAILED:5000004,ENCRYPTED_CDM_ERROR:5000005,ENCRYPTED_OUTPUT_RESTRICTED:5000006,ENCRYPTED_MISSING_TOKEN:5000002},tK=e=>e===tF.VIDEO?"playback":e,t$=class e extends Error{constructor(t,i=e.MEDIA_ERR_CUSTOM,a,r){var n;super(t),this.name="MediaError",this.code=i,this.context=r,this.fatal=null!=a?a:i>=e.MEDIA_ERR_NETWORK&&i<=e.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(n=e.defaultMessages[this.code])?n:"")}};t$.MEDIA_ERR_ABORTED=1,t$.MEDIA_ERR_NETWORK=2,t$.MEDIA_ERR_DECODE=3,t$.MEDIA_ERR_SRC_NOT_SUPPORTED=4,t$.MEDIA_ERR_ENCRYPTED=5,t$.MEDIA_ERR_CUSTOM=100,t$.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var tq=t$,tY=e=>null==e,tG=(e,t)=>!tY(t)&&e in t,tj={ANY:"any",MUTED:"muted"},tQ={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},tz={MSE:"mse",NATIVE:"native"},tZ={HEADER:"header",QUERY:"query",NONE:"none"},tX=Object.values(tZ),tJ={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},t0={HLS:tJ.M3U8},t1=(Object.keys(t0),[...Object.values(tJ)],{upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"}),t2={noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},t3={DESCENDING:"desc"},t4={code:"en"},t5=(e,t,i,a,r=e)=>{r.addEventListener(t,i,a),e.addEventListener("teardown",()=>{r.removeEventListener(t,i)},{once:!0})},t9=e=>{let t=e.indexOf("?");return t<0?[e]:[e.slice(0,t),e.slice(t)]},t8=e=>{let{type:t}=e;if(t){let e=t.toUpperCase();return tG(e,t0)?t0[e]:t}return ie(e)},t6=e=>"VOD"===e?tQ.ON_DEMAND:tQ.LIVE,t7=e=>"EVENT"===e?Number.POSITIVE_INFINITY:"VOD"===e?Number.NaN:0,ie=e=>{let{src:t}=e;if(!t)return"";let i="";try{i=ia(t).pathname}catch{console.error("Invalid url when trying to infer mime type",t)}let a=i.lastIndexOf(".");if(a<0)return is(e)?tJ.M3U8:"";let r=i.slice(a+1).toUpperCase();return tG(r,tJ)?tJ[r]:""},it=e=>{try{return new URL(e),!1}catch{return!0}},ii=e=>e.split(`
`).find((e,t,i)=>t>0&&i[t-1].startsWith("#EXT-X-STREAM-INF")),ia=(e,t)=>{var i;if(!it(e))return new URL(e);let a=null==(i=null==window?void 0:window.location)?void 0:i.href,r=null!=t?t:a;return t&&it(t.toString())&&(r=new URL(t,a)),new URL(e,r)},ir="mux.com",is=({src:e,customDomain:t=ir})=>{let i;try{i=new URL(`${e}`)}catch{return!1}let a="https:"===i.protocol,r=i.hostname===`stream.${t}`.toLowerCase(),n=i.pathname.split("/"),s=2===n.length,o=!(null!=n&&n[1].includes("."));return a&&r&&s&&o},io=e=>{let t=(null!=e?e:"").split(".")[1];if(t)try{let e=t.replace(/-/g,"+").replace(/_/g,"/"),i=decodeURIComponent(atob(e).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(i)}catch{return}},il=({exp:e},t=Date.now())=>!e||1e3*e<t,id=({sub:e},t)=>e!==t,iu=({aud:e},t)=>!e,ic=({aud:e},t)=>e!==t;function ih(e,t=!0){var i;return new im(t&&null!=(i=null==t4?void 0:t4[e])?i:e,t?t4.code:"en")}var im=class{constructor(e,t=(e=>null!=(e=t4)?e:"en")()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,i)=>{var a;return null!=(a=e[i])?a:""})}toString(){return this.message}},ip=Object.values(tj),iv=e=>"boolean"==typeof e||"string"==typeof e&&ip.includes(e),iE=(e,t,i)=>{let{autoplay:a}=e,r=!1,n=!1,s=iv(a)?a:!!a,o=()=>{r||t5(t,"playing",()=>{r=!0},{once:!0})};if(o(),t5(t,"loadstart",()=>{r=!1,o(),ib(t,s)},{once:!0}),t5(t,"loadstart",()=>{i||(n=e.streamType&&e.streamType!==tQ.UNKNOWN?e.streamType===tQ.LIVE:!Number.isFinite(t.duration)),ib(t,s)},{once:!0}),i&&i.once(tH.Events.LEVEL_LOADED,(t,i)=>{var a;n=e.streamType&&e.streamType!==tQ.UNKNOWN?e.streamType===tQ.LIVE:null!=(a=i.details.live)&&a}),!s){let a=()=>{!n||Number.isFinite(e.startTime)||(null!=i&&i.liveSyncPosition?t.currentTime=i.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};i&&t5(t,"play",()=>{"metadata"===t.preload?i.once(tH.Events.LEVEL_UPDATED,a):a()},{once:!0})}return e=>{r||ib(t,s=iv(e)?e:!!e)}},ib=(e,t)=>{if(!t)return;let i=e.muted,a=()=>e.muted=i;switch(t){case tj.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(a)});break;case tj.MUTED:e.muted=!0,e.play().catch(a);break;default:e.play().catch(()=>{})}},ig=({preload:e,src:t},i,a)=>{let r=e=>{null!=e&&["","none","metadata","auto"].includes(e)?i.setAttribute("preload",e):i.removeAttribute("preload")};if(!a)return r(e),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,d=e=>{r(e);let t=null!=e?e:i.preload;s||"none"===t||("metadata"===t?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),u())},u=()=>{!n&&t&&(n=!0,a.loadSource(t))};return t5(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,u()},{once:!0}),d(e),d},i_=e=>"time"in e?e.time:e.startTime;function iy(e,t,i,a,r,n){let s=document.createElement("track");return s.kind=t,s.label=i,a&&(s.srclang=a),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),e.append(s),s.track}function iT(e,t,i){var a;return null==(a=Array.from(e.querySelectorAll("track")).find(e=>e.track.label===t&&e.track.kind===i))?void 0:a.track}async function iA(e,t,i,a){let r=iT(e,i,a);return r||((r=iy(e,a,i)).mode="hidden",await new Promise(e=>setTimeout(()=>e(void 0),0))),"hidden"!==r.mode&&(r.mode="hidden"),[...t].sort((e,t)=>i_(t)-i_(e)).forEach(t=>{var i,n;let s=t.value,o=i_(t);if("endTime"in t&&null!=t.endTime)null==r||r.addCue(new VTTCue(o,t.endTime,"chapters"===a?s:JSON.stringify(null!=s?s:null)));else{let t=Array.prototype.findIndex.call(null==r?void 0:r.cues,e=>e.startTime>=o),l=null==(i=null==r?void 0:r.cues)?void 0:i[t],d=l?l.startTime:Number.isFinite(e.duration)?e.duration:Number.MAX_SAFE_INTEGER,u=null==(n=null==r?void 0:r.cues)?void 0:n[t-1];u&&(u.endTime=o),null==r||r.addCue(new VTTCue(o,d,"chapters"===a?s:JSON.stringify(null!=s?s:null)))}}),e.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var ik="cuepoints",iw=Object.freeze({label:ik});async function iS(e,t,i=iw){return iA(e,t,i.label,"metadata")}var iI=e=>({time:e.startTime,value:JSON.parse(e.text)});function iR(e,t={label:ik}){var i,a;let r=iT(e,t.label,"metadata");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return iI(r.activeCues[0]);let{currentTime:n}=e;return iI(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function iL(e,t=iw){return new Promise(i=>{t5(e,"loadstart",async()=>{let a=await iS(e,[],t);t5(e,"cuechange",()=>{let t=iR(e);if(t){let i=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var iD="chapters",iC=Object.freeze({label:iD}),iM=e=>({startTime:e.startTime,endTime:e.endTime,value:e.text});async function iO(e,t,i=iC){return iA(e,t,i.label,"chapters")}function ix(e,t={label:iD}){var i,a;let r=iT(e,t.label,"chapters");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return iM(r.activeCues[0]);let{currentTime:n}=e;return iM(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function iN(e,t=iC){return new Promise(i=>{t5(e,"loadstart",async()=>{let a=await iO(e,[],t);t5(e,"cuechange",()=>{let t=ix(e);if(t){let i=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var iP={VIDEO:"v",THUMBNAIL:"t",STORYBOARD:"s",DRM:"d"},iU=e=>e===tF.VIDEO?iP.VIDEO:e===tF.DRM?iP.DRM:void 0,iW=(e,t)=>{var i,a;let r=tK(e),n=`${r}Token`;return null!=(i=t.tokens)&&i[r]?null==(a=t.tokens)?void 0:a[r]:tG(n,t)?t[n]:void 0},iB=(e,t,i,a,r=!1,n=!(e=>null==(e=globalThis.navigator)?void 0:e.onLine)())=>{var s,o;if(n){let i=ih("Your device appears to be offline",r),a=tq.MEDIA_ERR_NETWORK,n=new tq(i,a,!1,void 0);return n.errorCategory=t,n.muxCode=tV.NETWORK_OFFLINE,n.data=e,n}let l="status"in e?e.status:e.code,d=Date.now(),u=tq.MEDIA_ERR_NETWORK;if(200===l)return;let c=tK(t),h=iW(t,i),m=iU(t),[p]=t9(null!=(s=i.playbackId)?s:"");if(!l||!p)return;let v=io(h);if(h&&!v){let i=new tq(ih("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:c}),u,!0,ih("Compact JWT string: {token}",r).format({token:h}));return i.errorCategory=t,i.muxCode=tV.NETWORK_TOKEN_MALFORMED,i.data=e,i}if(l>=500){let e=new tq("",u,null==a||a);return e.errorCategory=t,e.muxCode=tV.NETWORK_UNKNOWN_ERROR,e}if(403===l){if(v){if(il(v,d)){let i={timeStyle:"medium",dateStyle:"medium"},a=new tq(ih("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:c}),u,!0,ih("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",i).format(null!=(o=v.exp)?o:0),currentDate:new Intl.DateTimeFormat("en",i).format(d)}));return a.errorCategory=t,a.muxCode=tV.NETWORK_TOKEN_EXPIRED,a.data=e,a}if(id(v,p)){let i=new tq(ih("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:c}),u,!0,ih("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:c,playbackId:p,tokenPlaybackId:v.sub}));return i.errorCategory=t,i.muxCode=tV.NETWORK_TOKEN_SUB_MISMATCH,i.data=e,i}if(iu(v,m)){let i=new tq(ih("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:c}),u,!0,ih("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:c,expectedAud:m}));return i.errorCategory=t,i.muxCode=tV.NETWORK_TOKEN_AUD_MISSING,i.data=e,i}if(ic(v,m)){let i=new tq(ih("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:c}),u,!0,ih("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:c,expectedAud:m,aud:v.aud}));return i.errorCategory=t,i.muxCode=tV.NETWORK_TOKEN_AUD_MISMATCH,i.data=e,i}}else{let i=new tq(ih("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:c,category:t}),u,null==a||a,ih("Specified playback ID: {playbackId}",r).format({playbackId:p}));return i.errorCategory=t,i.muxCode=tV.NETWORK_TOKEN_MISSING,i.data=e,i}}if(412===l){let n=new tq(ih("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),u,null==a||a,ih("Specified playback ID: {playbackId}",r).format({playbackId:p}));return n.errorCategory=t,n.muxCode=tV.NETWORK_NOT_READY,n.streamType=i.streamType===tQ.LIVE?"live":i.streamType===tQ.ON_DEMAND?"on-demand":"unknown",n.data=e,n}if(404===l){let i=new tq(ih("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),u,null==a||a,ih("Specified playback ID: {playbackId}",r).format({playbackId:p}));return i.errorCategory=t,i.muxCode=tV.NETWORK_NOT_FOUND,i.data=e,i}if(400===l){let i=new tq(ih("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),u,null==a||a,ih("Specified playback ID: {playbackId}",r).format({playbackId:p}));return i.errorCategory=t,i.muxCode=tV.NETWORK_INVALID_URL,i.data=e,i}let E=new tq("",u,null==a||a);return E.errorCategory=t,E.muxCode=tV.NETWORK_UNKNOWN_ERROR,E.data=e,E},iH=tH.DefaultConfig.capLevelController,iF={"720p":921600,"1080p":2073600,"1440p":4194304,"2160p":8294400},iV=class e extends iH{constructor(e){super(e)}static setMaxAutoResolution(t,i){i?e.maxAutoResolution.set(t,i):e.maxAutoResolution.delete(t)}getMaxAutoResolution(){var t;let i=this.hls;return null!=(t=e.maxAutoResolution.get(i))?t:void 0}get levels(){var e;return null!=(e=this.hls.levels)?e:[]}getValidLevels(e){return this.levels.filter((t,i)=>this.isLevelAllowed(t)&&i<=e)}getMaxLevelCapped(e){let t=this.getValidLevels(e),i=this.getMaxAutoResolution();if(!i)return super.getMaxLevel(e);let a=iF[i.toLowerCase().trim()];if(!a)return super.getMaxLevel(e);let r=t.filter(e=>e.width*e.height<=a),n=r.findIndex(e=>e.width*e.height===a);if(-1!==n){let e=r[n];return t.findIndex(t=>t===e)}if(0===r.length)return 0;let s=r[r.length-1];return t.findIndex(e=>e===s)}getMaxLevel(t){if(void 0!==this.getMaxAutoResolution())return this.getMaxLevelCapped(t);let i=super.getMaxLevel(t),a=this.getValidLevels(t);if(!a[i])return i;let r=Math.min(a[i].width,a[i].height),n=e.minMaxResolution;return r>=n?i:iH.getMaxLevelByMediaSize(a,16/9*n,n)}};iV.minMaxResolution=720,iV.maxAutoResolution=new WeakMap;var iK,i$,iq,iY,iG,ij,iQ=({mediaEl:e,getAppCertificate:t,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r})=>{if(!window.WebKitMediaKeys||!("onwebkitneedkey"in e)){console.error("No WebKitMediaKeys. FairPlay may not be supported");let t=new tq(ih("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),tq.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory=tF.DRM,t.muxCode=tV.ENCRYPTED_CDM_ERROR,a(e,t),()=>{}}let n=t(),s=null,o=t=>{(async()=>{try{e.webkitKeys||l();let i=await n;if(null===t.initData||null==i)return;let a=iz(t.initData,i);d(a)}catch(t){console.error("Could not start encrypted playback due to exception",t),a(e,t)}})()},l=()=>{try{let t=new WebKitMediaKeys("com.apple.fps.1_0");e.webkitSetMediaKeys(t),r()}catch{let e=new tq("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.",tq.MEDIA_ERR_ENCRYPTED,!0);throw e.errorCategory=tF.DRM,e.muxCode=tV.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,e}},d=t=>{let r=e.webkitKeys.createSession("application/vnd.apple.mpegurl",t),n=async t=>{try{let e=t.message,a=await i(e);r.update(a)}catch(t){console.error("Error on FairPlay session message",t),a(e,t)}},o=t=>{let i=t.target.error;if(!i)return;console.error(`Internal Webkit Key Session Error - sysCode: ${i.systemCode} code: ${i.code}`);let r=new tq(ih("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),tq.MEDIA_ERR_ENCRYPTED,!0);r.errorCategory=tF.DRM,r.muxCode=tV.ENCRYPTED_CDM_ERROR,a(e,r)},l=()=>{r.removeEventListener("webkitkeymessage",n),r.removeEventListener("webkitkeyerror",o),e.removeEventListener("teardown",l),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",l),s=null;try{r.close()}catch{}};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",l,{once:!0}),r.addEventListener("webkitkeymessage",n),r.addEventListener("webkitkeyerror",o),e.addEventListener("teardown",l),s=l},u=()=>{e.removeEventListener("webkitneedkey",o),e.removeEventListener("teardown",u),null==s||s();try{e.webkitSetMediaKeys(null)}catch{}};return e.addEventListener("webkitneedkey",o),e.addEventListener("teardown",u,{once:!0}),u},iz=(e,t)=>{let i=function(e){let t=new ArrayBuffer(2*e.length),i=new DataView(t);for(let t=0;t<e.length;t++)i.setUint16(2*t,e.charCodeAt(t),!0);return t}(iZ(e)),a=new Uint8Array(e),r=new Uint8Array(i),n=new Uint8Array(t),s=new Uint8Array(a.byteLength+4+n.byteLength+4+r.byteLength),o=0,l=e=>{s.set(e,o),o+=e.byteLength},d=e=>{let t=new DataView(s.buffer),i=e.byteLength;t.setUint32(o,i,!0),o+=4,l(e)};return l(a),d(r),d(n),s},iZ=e=>new TextDecoder("utf-16le").decode(e).replace("skd://","").slice(1),iX=({mediaEl:e,getAppCertificate:t,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r,fallbackToWebkitFairplay:n})=>{let s=null,o=async t=>{try{let i=t.initDataType;if("skd"!==i){console.error(`Received unexpected initialization data type "${i}"`);return}e.mediaKeys||await l(i);let a=t.initData;if(null==a){console.error(`Could not start encrypted playback due to missing initData in ${t.type} event`);return}await d(i,a)}catch(t){a(e,t);return}},l=async i=>{let n=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[i],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(e=>(r(),e)).catch(()=>{let t=new tq(ih("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),tq.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory=tF.DRM,t.muxCode=tV.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,a(e,t)});if(!n)return;let s=await n.createMediaKeys();try{let e=await t();await s.setServerCertificate(e).catch(()=>{let e=ih("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),t=new tq(e,tq.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory=tF.DRM,t.muxCode=tV.ENCRYPTED_UPDATE_SERVER_CERT_FAILED,Promise.reject(t)})}catch(t){a(e,t);return}await e.setMediaKeys(s)},d=async(t,r)=>{let o=e.mediaKeys.createSession(),l=async t=>{let r=t.message,n=await i(r);try{await o.update(n)}catch{let t=new tq(ih("Failed to update DRM license. This may be an issue with the player or your protected content."),tq.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory=tF.DRM,t.muxCode=tV.ENCRYPTED_UPDATE_LICENSE_FAILED,a(e,t)}},d=()=>{let t=t=>{let i;"internal-error"===t?((i=new tq(ih("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),tq.MEDIA_ERR_ENCRYPTED,!0)).errorCategory=tF.DRM,i.muxCode=tV.ENCRYPTED_CDM_ERROR):("output-restricted"===t||"output-downscaled"===t)&&((i=new tq(ih("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),tq.MEDIA_ERR_ENCRYPTED,!1)).errorCategory=tF.DRM,i.muxCode=tV.ENCRYPTED_OUTPUT_RESTRICTED),i&&a(e,i)};o.keyStatuses.forEach(e=>t(e))};o.addEventListener("keystatuseschange",d),o.addEventListener("message",l);let u=async()=>{o.removeEventListener("keystatuseschange",d),o.removeEventListener("message",l),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",u),e.removeEventListener("teardown",u),await o.close().catch(e=>{console.warn("There was an error when closing EME session",e)}),s=null};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",u,{once:!0}),e.addEventListener("teardown",u,{once:!0}),s=u,await o.generateRequest(t,r).catch(async t=>{if("NotSupportedError"===t.name&&"webkitCurrentPlaybackTargetIsWireless"in e&&e.webkitCurrentPlaybackTargetIsWireless)console.warn("Failed to generate a DRM license request. Attempting to fallback to Webkit DRM"),null==n||n();else{let e=new tq(ih("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),tq.MEDIA_ERR_ENCRYPTED,!0);return e.errorCategory=tF.DRM,e.muxCode=tV.ENCRYPTED_GENERATE_REQUEST_FAILED,console.error("Failed to generate license request",t),Promise.reject(e)}})},u=async()=>{e.removeEventListener("encrypted",o),e.removeEventListener("teardown",u),s&&await s(),await e.setMediaKeys(null).catch(()=>{})};return e.addEventListener("encrypted",o),e.addEventListener("teardown",u,{once:!0}),u},iJ={FAIRPLAY:"fairplay",PLAYREADY:"playready",WIDEVINE:"widevine"},i0=e=>e.includes("fps")?iJ.FAIRPLAY:e.includes("playready")?iJ.PLAYREADY:e.includes("widevine")?iJ.WIDEVINE:void 0,i1=(e,t)=>{let i,a=ii(e);if(!a)return Promise.reject(Error("No media playlist URL found in multivariant playlist"));if(it(a)&&!t)return Promise.reject(Error("masterPlaylistUrl is required to resolve relative media playlist URL"));try{i=ia(a,t)}catch(e){return Promise.reject(e)}return fetch(i).then(e=>200!==e.status?Promise.reject(e):e.text())},i2=e=>{let t=e.split(`
`).filter(e=>e.startsWith("#EXT-X-SESSION-DATA"));if(!t.length)return{};let i={};for(let e of t){let t=Object.fromEntries([...e.matchAll(i3)].map(([,e,t])=>[e,t])),a=t["DATA-ID"];a&&(i[a]={...t})}return{sessionData:i}},i3=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g,i4=e=>{var t,i,a;let r=e.split(`
`),n=null==(i=(null!=(t=r.find(e=>e.startsWith("#EXT-X-PLAYLIST-TYPE")))?t:"").split(":")[1])?void 0:i.trim(),s=t6(n),o=t7(n),l;if(s===tQ.LIVE){let e=r.find(e=>e.startsWith("#EXT-X-PART-INF"));if(e)l=2*+e.split(":")[1].split("=")[1];else{let e=r.find(e=>e.startsWith("#EXT-X-TARGETDURATION")),t=null==(a=null==e?void 0:e.split(":"))?void 0:a[1];l=3*+(null!=t?t:6)}}return{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}},i5=async(e,t)=>{if(t===tJ.MP4)return{streamType:tQ.ON_DEMAND,targetLiveWindow:Number.NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(t===tJ.M3U8){let t=await fetch(e);if(!t.ok)return Promise.reject(t);let i=await t.text(),a=await i1(i,t.url);return{...i2(i),...i4(a)}}return console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},i9=async(e,t,i=t8({src:e}))=>{var a,r,n,s;let{streamType:o,targetLiveWindow:l,liveEdgeStartOffset:d,sessionData:u}=await i5(e,i),c=null==u?void 0:u["com.apple.hls.chapters"];(null!=c&&c.URI||null!=c&&c.VALUE.toLocaleLowerCase().startsWith("http"))&&i8(null!=(a=c.URI)?a:c.VALUE,t),(null!=(r=ar.get(t))?r:{}).liveEdgeStartOffset=d,(null!=(n=ar.get(t))?n:{}).targetLiveWindow=l,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(s=ar.get(t))?s:{}).streamType=o,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},i8=async(e,t)=>{var i,a;try{let r=await fetch(e);if(!r.ok)throw Error(`Failed to fetch Mux metadata: ${r.status} ${r.statusText}`);let n=await r.json(),s={};if(!(null!=(i=null==n?void 0:n[0])&&i.metadata))return;for(let e of n[0].metadata)e.key&&e.value&&(s[e.key]=e.value);(null!=(a=ar.get(t))?a:{}).metadata=s;let o=new CustomEvent("muxmetadata");t.dispatchEvent(o)}catch(e){console.error(e)}},i6=e=>{var t;let i=e.type,a=t6(i),r=t7(i),n,s=!!(null!=(t=e.partList)&&t.length);return a===tQ.LIVE&&(n=s?2*e.partTarget:3*e.targetduration),{streamType:a,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:s}},i7=(e,t,i)=>{var a,r,n,s,o,l,d,u;let{streamType:c,targetLiveWindow:h,liveEdgeStartOffset:m,lowLatency:p}=i6(e);if(c===tQ.LIVE){p?(i.config.backBufferLength=null!=(a=i.userConfig.backBufferLength)?a:4,i.config.maxFragLookUpTolerance=null!=(r=i.userConfig.maxFragLookUpTolerance)?r:.001,i.config.abrBandWidthUpFactor=null!=(n=i.userConfig.abrBandWidthUpFactor)?n:i.config.abrBandWidthFactor):i.config.backBufferLength=null!=(s=i.userConfig.backBufferLength)?s:8;let e=Object.freeze({get length(){return t.seekable.length},start:e=>t.seekable.start(e),end(e){var a;return e>this.length||e<0||Number.isFinite(t.duration)?t.seekable.end(e):null!=(a=i.liveSyncPosition)?a:t.seekable.end(e)}});(null!=(o=ar.get(t))?o:{}).seekable=e}(null!=(l=ar.get(t))?l:{}).liveEdgeStartOffset=m,(null!=(d=ar.get(t))?d:{}).targetLiveWindow=h,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(u=ar.get(t))?u:{}).streamType=c,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},ae=null!=(i$=null==(iK=null==globalThis?void 0:globalThis.navigator)?void 0:iK.userAgent)?i$:"",at=null!=(iG=null==(iY=null==(iq=null==globalThis?void 0:globalThis.navigator)?void 0:iq.userAgentData)?void 0:iY.platform)?iG:"",ai=ae.toLowerCase().includes("android")||["x11","android"].some(e=>at.toLowerCase().includes(e)),aa=e=>/^((?!chrome|android).)*safari/i.test(ae)&&!!e.canPlayType("application/vnd.apple.mpegurl"),ar=new WeakMap,an="mux.com",as=null==(ij=tH.isSupported)?void 0:ij.call(tH),ao=e=>ai||!aa(e),al=()=>{if("undefined"!=typeof window)return tU.utils.now()},ad=tU.utils.generateUUID,au=({playbackId:e,customDomain:t=an,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:o,assetEndTime:l,playbackToken:d,tokens:{playback:u=d}={},extraSourceParams:c={}}={})=>{if(!e)return;let[h,m=""]=t9(e),p=new URL(`https://stream.${t}/${h}.m3u8${m}`);return u||p.searchParams.has("token")?(p.searchParams.forEach((e,t)=>{"token"!=t&&p.searchParams.delete(t)}),u&&p.searchParams.set("token",u)):(i&&p.searchParams.set("max_resolution",i),a&&(p.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&p.searchParams.set("rendition_order",r),n&&p.searchParams.set("program_start_time",`${n}`),s&&p.searchParams.set("program_end_time",`${s}`),o&&p.searchParams.set("asset_start_time",`${o}`),l&&p.searchParams.set("asset_end_time",`${l}`),Object.entries(c).forEach(([e,t])=>{null!=t&&p.searchParams.set(e,t)})),p.toString()},ac=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},ah=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(/\.m3u8|\//);return t||void 0},am=e=>{var t,i,a;return null!=(t=null==e?void 0:e.metadata)&&t.video_id?e.metadata.video_id:aW(e)&&null!=(a=null!=(i=ac(e.playbackId))?i:ah(e.src))?a:e.src},ap=e=>{var t;return null==(t=ar.get(e))?void 0:t.error},av=e=>{var t;return null==(t=ar.get(e))?void 0:t.metadata},aE=e=>{var t,i;return null!=(i=null==(t=ar.get(e))?void 0:t.streamType)?i:tQ.UNKNOWN},ab=e=>{var t,i;return null!=(i=null==(t=ar.get(e))?void 0:t.targetLiveWindow)?i:Number.NaN},ag=e=>{var t,i;return null!=(i=null==(t=ar.get(e))?void 0:t.seekable)?i:e.seekable},af=e=>{var t;let i=null==(t=ar.get(e))?void 0:t.liveEdgeStartOffset;if("number"!=typeof i)return Number.NaN;let a=ag(e);return a.length?a.end(a.length-1)-i:Number.NaN},a_=e=>{var t;return null==(t=ar.get(e))?void 0:t.coreReference},ay=.034,aT=(e,t,i=ay)=>Math.abs(e-t)<=i,aA=(e,t,i=ay)=>e>t||aT(e,t,i),ak=(e,t=ay)=>e.paused&&aA(e.currentTime,e.duration,t),aw=(e,t)=>{var i,a,r;if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?null==(a=null==(i=t.levels)?void 0:i[t.currentLevel])?void 0:a.details:null==(r=t.levels.find(e=>!!e.details))?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(null!=s&&s.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(e.currentTime<=o.start)return!1;let l=o.start+o.duration/2,d=e.buffered.start(e.buffered.length-1),u=e.buffered.end(e.buffered.length-1);return l>d&&l<u},aS=(e,t)=>e.ended||e.loop?e.ended:!!(t&&aw(e,t))||ak(e),aI=(e,t,i)=>{aR(t,i,e);let{metadata:a={}}=e,{view_session_id:r=ad()}=a,n=am(e);a.view_session_id=r,a.video_id=n,e.metadata=a,e.drmTypeCb=e=>{var i;null==(i=t.mux)||i.emit("hb",{view_drm_type:e})},e.fallbackToWebkitFairplay=async()=>{var i;let a=!t.paused,r=t.currentTime;e.useWebkitFairplay=!0;let n=e.muxDataKeepSession;e.muxDataKeepSession=!0;let s=null==(i=ar.get(t))?void 0:i.coreReference;aI(e,t,s),e.muxDataKeepSession=n,e.useWebkitFairplay=!1,a&&await t.play().then(()=>{t.currentTime=r}).catch(()=>{}),t.currentTime=r},ar.set(t,{retryCount:0});let s=aD(e,t),o=ig(e,t,s);null!=e&&e.muxDataKeepSession&&null!=t&&t.mux&&!t.mux.deleted?s&&t.mux.addHLSJS({hlsjs:s,Hls:s?tH:void 0}):aH(e,t,s),aF(e,t,s),iL(t),iN(t);let l=iE(e,t,s),d={engine:s,setAutoplay:l,setPreload:o},u=ar.get(t);return u&&(u.coreReference=d),d},aR=(e,t,i)=>{let a=null==t?void 0:t.engine;null!=e&&e.mux&&!e.mux.deleted&&(null!=i&&i.muxDataKeepSession?a&&e.mux.removeHLSJS():(e.mux.destroy(),delete e.mux)),a&&(a.detachMedia(),a.destroy()),e&&(e.hasAttribute("src")&&(e.removeAttribute("src"),e.load()),e.removeEventListener("error",aK),e.removeEventListener("error",aq),e.removeEventListener("durationchange",aV),ar.delete(e),e.dispatchEvent(new Event("teardown")))};function aL(e,t){var i;let a=t8(e);if(a!==tJ.M3U8)return!0;let r=!a||null==(i=t.canPlayType(a))||i,{preferPlayback:n}=e,s=n===tz.MSE,o=n===tz.NATIVE,l=as&&(s||ao(t));return r&&(o||!l)}var aD=(e,t)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={},maxAutoResolution:l}=e,d=t8(e)===tJ.M3U8,u=aL(e,t);if(d&&!u&&as){let d=aC(a),u=aM(e),c=[tZ.QUERY,tZ.HEADER].includes(s)?{useHeaders:s===tZ.HEADER,sessionId:null==n?void 0:n.view_session_id,contentId:null==n?void 0:n.video_id}:void 0,h=aB(e,o),m=new tH({debug:i,startPosition:r,cmcd:c,xhrSetup:(e,t)=>{var i,a;if(s&&s!==tZ.QUERY)return;let r=ia(t);if(!r.searchParams.has("CMCD"))return;let n=(null!=(a=null==(i=r.searchParams.get("CMCD"))?void 0:i.split(","))?a:[]).filter(e=>e.startsWith("sid")||e.startsWith("cid")).join(",");r.searchParams.set("CMCD",n),e.open("GET",r)},backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelOnFPSDrop:!0,...h,...d,...u,...o});return h.capLevelController===iV&&void 0!==l&&iV.setMaxAutoResolution(m,l),m.on(tH.Events.MANIFEST_PARSED,async function(e,i){var a,r;let n=null==(a=i.sessionData)?void 0:a["com.apple.hls.chapters"];(null!=n&&n.URI||null!=n&&n.VALUE.toLocaleLowerCase().startsWith("http"))&&i8(null!=(r=null==n?void 0:n.URI)?r:null==n?void 0:n.VALUE,t)}),m}},aC=e=>e===tQ.LIVE?{backBufferLength:8}:{},aM=e=>{let{tokens:{drm:t}={},playbackId:i,drmTypeCb:a}=e,r=ac(i);return t&&r?{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:aP(e,"fairplay"),serverCertificateUrl:aU(e,"fairplay")},"com.widevine.alpha":{licenseUrl:aP(e,"widevine")},"com.microsoft.playready":{licenseUrl:aP(e,"playready")}},requestMediaKeySystemAccessFunc:(e,t)=>("com.widevine.alpha"===e&&(t=[...t.map(e=>{var t;let i=null==(t=e.videoCapabilities)?void 0:t.map(e=>({...e,robustness:"HW_SECURE_ALL"}));return{...e,videoCapabilities:i}}),...t]),navigator.requestMediaKeySystemAccess(e,t).then(t=>{let i=i0(e);return null==a||a(i),t}))}:{}},aO=async e=>{let t=await fetch(e);return 200!==t.status?Promise.reject(t):await t.arrayBuffer()},ax=async(e,t)=>{let i=await fetch(t,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:e});return 200!==i.status?Promise.reject(i):new Uint8Array(await i.arrayBuffer())},aN=(e,t)=>{let i={mediaEl:t,getAppCertificate:()=>aO(aU(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=iB(t,tF.DRM,e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in app cert request"))}return Promise.reject(t)}),getLicenseKey:t=>ax(t,aP(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=iB(t,tF.DRM,e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in license key request"))}return Promise.reject(t)}),saveAndDispatchError:a$,drmTypeCb:()=>{var t;null==(t=e.drmTypeCb)||t.call(e,iJ.FAIRPLAY)}};if(e.useWebkitFairplay)iQ(i);else{let t=iX({fallbackToWebkitFairplay:async()=>{var i;await t(),null==(i=e.fallbackToWebkitFairplay)||i.call(e)},...i})}},aP=({playbackId:e,tokens:{drm:t}={},customDomain:i=an},a)=>{let r=ac(e);return`https://license.${i.toLocaleLowerCase().endsWith(an)?i:an}/license/${a}/${r}?token=${t}`},aU=({playbackId:e,tokens:{drm:t}={},customDomain:i=an},a)=>{let r=ac(e);return`https://license.${i.toLocaleLowerCase().endsWith(an)?i:an}/appcert/${a}/${r}?token=${t}`},aW=({playbackId:e,src:t,customDomain:i})=>{if(e)return!0;if("string"!=typeof t)return!1;let a=new URL(t,null==window?void 0:window.location.href).hostname.toLocaleLowerCase();return a.includes(an)||!!i&&a.includes(i.toLocaleLowerCase())},aB=(e,t)=>{let i={};return i.capLevelToPlayerSize=e.capRenditionToPlayerSize,null==i.capLevelToPlayerSize?(i.capLevelController=iV,i.capLevelToPlayerSize=!0):i.capLevelController=tB.wl,i},aH=(e,t,i)=>{var a;let{envKey:r,disableTracking:n,muxDataSDK:s=tU,muxDataSDKOptions:o={}}=e,l=aW(e);if(!n&&(r||l)){let{playerInitTime:n,playerSoftwareName:l,playerSoftwareVersion:d,beaconCollectionDomain:u,debug:c,disableCookies:h}=e,m={...e.metadata,video_title:(null==(a=null==e?void 0:e.metadata)?void 0:a.video_title)||void 0};s.monitor(t,{debug:c,beaconCollectionDomain:u,hlsjs:i,Hls:i?tH:void 0,automaticErrorTracking:!1,errorTranslator:t=>"string"!=typeof t.player_error_code&&("function"==typeof e.errorTranslator?e.errorTranslator(t):t),disableCookies:h,...o,data:{...r?{env_key:r}:{},player_software_name:l,player_software:l,player_software_version:d,player_init_time:n,...m}})}},aF=(e,t,i)=>{var a,r;let n=aL(e,t),{src:s,customDomain:o=an}=e,l=()=>{t.ended||e.disablePseudoEnded||!aS(t,i)||(aw(t,i)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},d,u,c=()=>{let e=ag(t),i,a;e.length>0&&(i=e.start(0),a=e.end(0)),(u!==a||d!==i)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),d=i,u=a};if(t5(t,"durationchange",c),t&&n){let i=t8(e);if("string"==typeof s){if(s.endsWith(".mp4")&&s.includes(o)){let e=ah(s);i8(new URL(`https://stream.${o}/${e}/metadata.json`).toString(),t)}let n=()=>{if(aE(t)!==tQ.LIVE||Number.isFinite(t.duration))return;let e=setInterval(c,1e3);t.addEventListener("teardown",()=>{clearInterval(e)},{once:!0}),t5(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(e)})},l=async()=>i9(s,t,i).then(n).catch(i=>{if(i instanceof Response){let a=iB(i,tF.VIDEO,e);if(a){a$(t,a);return}}});if("none"===t.preload){let e=()=>{l(),t.removeEventListener("loadedmetadata",i)},i=()=>{l(),t.removeEventListener("play",e)};t5(t,"play",e,{once:!0}),t5(t,"loadedmetadata",i,{once:!0})}else l();null!=(a=e.tokens)&&a.drm?aN(e,t):t5(t,"encrypted",()=>{let e=new tq(ih("Attempting to play DRM-protected content without providing a DRM token."),tq.MEDIA_ERR_ENCRYPTED,!0);e.errorCategory=tF.DRM,e.muxCode=tV.ENCRYPTED_MISSING_TOKEN,a$(t,e)},{once:!0}),t.setAttribute("src",s),e.startTime&&((null!=(r=ar.get(t))?r:{}).startTime=e.startTime,t.addEventListener("durationchange",aV,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",aK),t.addEventListener("error",aq),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})},{once:!0}),t5(t,"pause",l),t5(t,"seeked",l),t5(t,"play",()=>{t.ended||aA(t.currentTime,t.duration)&&(t.currentTime=t.seekable.length?t.seekable.start(0):0)})}else i&&s?(i.once(tH.Events.LEVEL_LOADED,(e,a)=>{i7(a.details,t,i),c(),aE(t)!==tQ.LIVE||Number.isFinite(t.duration)||(i.on(tH.Events.LEVEL_UPDATED,c),t5(t,"durationchange",()=>{Number.isFinite(t.duration)&&i.off(tH.Events.LEVELS_UPDATED,c)}))}),i.on(tH.Events.ERROR,(a,r)=>{var n,s;let o=a9(r,e);if(o.muxCode===tV.NETWORK_NOT_READY){let e=null!=(n=ar.get(t))?n:{},a=null!=(s=e.retryCount)?s:0;if(a<6){let n=0===a?5e3:6e4,s=new tq(`Retrying in ${n/1e3} seconds...`,o.code,o.fatal);Object.assign(s,o),a$(t,s);let l=setTimeout(()=>{e.retryCount=a+1,"manifestLoadError"===r.details&&r.url&&i.loadSource(r.url)},n);t.addEventListener("teardown",()=>clearTimeout(l),{once:!0});return}{e.retryCount=0;let i=new tq('Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>',o.code,o.fatal);Object.assign(i,o),a$(t,i);return}}a$(t,o)}),i.on(tH.Events.MANIFEST_LOADED,()=>{let e=ar.get(t);e&&e.error&&(e.error=null,e.retryCount=0,t.dispatchEvent(new Event("emptied")),t.dispatchEvent(new Event("loadstart")))}),t.addEventListener("error",aq),t5(t,"waiting",l),function(e,t){var i;if(!("videoTracks"in e))return;let a=new WeakMap;t.on(tH.Events.MANIFEST_PARSED,function(t,i){l();let r=e.addVideoTrack("main");for(let[e,t]of(r.selected=!0,i.levels.entries())){let i=r.addRendition(t.url[0],t.width,t.height,t.videoCodec,t.bitrate);a.set(t,`${e}`),i.id=`${e}`}}),t.on(tH.Events.AUDIO_TRACKS_UPDATED,function(t,i){for(let t of(o(),i.audioTracks)){let i=t.default?"main":"alternative",a=e.addAudioTrack(i,t.name,t.lang);a.id=`${t.id}`,t.default&&(a.enabled=!0)}});let r=()=>{var i;let a=+(null==(i=[...e.audioTracks].find(e=>e.enabled))?void 0:i.id),r=t.audioTracks.map(e=>e.id);a!=t.audioTrack&&r.includes(a)&&(t.audioTrack=a)};e.audioTracks.addEventListener("change",r),t.on(tH.Events.LEVELS_UPDATED,function(t,i){var r;let n=e.videoTracks[null!=(r=e.videoTracks.selectedIndex)?r:0];if(!n)return;let s=i.levels.map(e=>a.get(e));for(let t of e.videoRenditions)t.id&&!s.includes(t.id)&&n.removeRendition(t)});let n=e=>{let i=e.target.selectedIndex;i!=t.nextLevel&&(t.nextLevel=i)};null==(i=e.videoRenditions)||i.addEventListener("change",n);let s=()=>{for(let t of e.videoTracks)e.removeVideoTrack(t)},o=()=>{for(let t of e.audioTracks)e.removeAudioTrack(t)},l=()=>{s(),o()};t.once(tH.Events.DESTROYING,()=>{var t,i;l(),null==(t=e.audioTracks)||t.removeEventListener("change",r),null==(i=e.videoRenditions)||i.removeEventListener("change",n)})}(e,i),function(e,t){t.on(tH.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(i,{tracks:a})=>{a.forEach(i=>{var a,r;let n=null!=(a=i.subtitleTrack)?a:i.closedCaptions,s=t.subtitleTracks.findIndex(({lang:e,name:t,type:a})=>e==(null==n?void 0:n.lang)&&t===i.label&&a.toLowerCase()===i.kind),o=(null!=(r=i._id)?r:i.default)?"default":`${i.kind}${s}`;iy(e,i.kind,i.label,null==n?void 0:n.lang,o,i.default)})});let i=()=>{if(!t.subtitleTracks.length)return;let i=Array.from(e.textTracks).find(e=>e.id&&"showing"===e.mode&&["subtitles","captions"].includes(e.kind));if(!i)return;let a=t.subtitleTracks[t.subtitleTrack],r=a?a.default?"default":`${t.subtitleTracks[t.subtitleTrack].type.toLowerCase()}${t.subtitleTrack}`:void 0;if(t.subtitleTrack<0||(null==i?void 0:i.id)!==r){let e=t.subtitleTracks.findIndex(({lang:e,name:t,type:a,default:r})=>"default"===i.id&&r||e==i.language&&t===i.label&&a.toLowerCase()===i.kind);t.subtitleTrack=e}(null==i?void 0:i.id)===r&&i.cues&&Array.from(i.cues).forEach(e=>{i.addCue(e)})};e.textTracks.addEventListener("change",i),t.on(tH.Events.CUES_PARSED,(t,{track:i,cues:a})=>{let r=e.textTracks.getTrackById(i);if(!r)return;let n="disabled"===r.mode;n&&(r.mode="hidden"),a.forEach(e=>{var t;null!=(t=r.cues)&&t.getCueById(e.id)||r.addCue(e)}),n&&(r.mode="disabled")}),t.once(tH.Events.DESTROYING,()=>{e.textTracks.removeEventListener("change",i),e.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})});let a=()=>{Array.from(e.textTracks).forEach(t=>{var i,a;if(!["subtitles","caption"].includes(t.kind)&&("thumbnails"===t.label||"chapters"===t.kind)){if(!(null!=(i=t.cues)&&i.length)){let i="track";t.kind&&(i+=`[kind="${t.kind}"]`),t.label&&(i+=`[label="${t.label}"]`);let r=e.querySelector(i),n=null!=(a=null==r?void 0:r.getAttribute("src"))?a:"";null==r||r.removeAttribute("src"),setTimeout(()=>{null==r||r.setAttribute("src",n)},0)}"hidden"!==t.mode&&(t.mode="hidden")}})};t.once(tH.Events.MANIFEST_LOADED,a),t.once(tH.Events.MEDIA_ATTACHED,a)}(t,i),i.attachMedia(t)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function aV(e){var t;let i=e.target,a=null==(t=ar.get(i))?void 0:t.startTime;if(a&&function(e,t,i){t&&i>t&&(i=t);for(let t=0;t<e.length;t++)if(e.start(t)<=i&&e.end(t)>=i)return!0;return!1}(i.seekable,i.duration,a)){let e="auto"===i.preload;e&&(i.preload="none"),i.currentTime=a,e&&(i.preload="auto")}}async function aK(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(null!=t&&t.error))return;let{message:i,code:a}=t.error,r=new tq(i,a);if(t.src&&a===tq.MEDIA_ERR_SRC_NOT_SUPPORTED&&t.readyState===HTMLMediaElement.HAVE_NOTHING){setTimeout(()=>{var e;let i=null!=(e=ap(t))?e:t.error;(null==i?void 0:i.code)===tq.MEDIA_ERR_SRC_NOT_SUPPORTED&&a$(t,r)},500);return}if(t.src&&(a!==tq.MEDIA_ERR_DECODE||void 0!==a))try{let{status:e}=await fetch(t.src);r.data={response:{code:e}}}catch{}a$(t,r)}function a$(e,t){var i;t.fatal&&((null!=(i=ar.get(e))?i:{}).error=t,e.dispatchEvent(new CustomEvent("error",{detail:t})))}function aq(e){var t,i;if(!(e instanceof CustomEvent)||!(e.detail instanceof tq))return;let a=e.target,r=e.detail;r&&r.fatal&&((null!=(t=ar.get(a))?t:{}).error=r,null==(i=a.mux)||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var aY,aG,aj,aQ,az,aZ,aX,aJ,a0,a1,a2,a3,a4,a5,a9=(e,t)=>{var i,a,r;e.fatal?console.error("getErrorFromHlsErrorData()",e):t.debug&&console.warn("getErrorFromHlsErrorData() (non-fatal)",e);let n={[tH.ErrorTypes.NETWORK_ERROR]:tq.MEDIA_ERR_NETWORK,[tH.ErrorTypes.MEDIA_ERROR]:tq.MEDIA_ERR_DECODE,[tH.ErrorTypes.KEY_SYSTEM_ERROR]:tq.MEDIA_ERR_ENCRYPTED},s,o=[tH.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,tH.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(e.details)?tq.MEDIA_ERR_NETWORK:n[e.type];if(o===tq.MEDIA_ERR_NETWORK&&e.response){let r=null!=(i=e.type===tH.ErrorTypes.KEY_SYSTEM_ERROR?tF.DRM:e.type===tH.ErrorTypes.NETWORK_ERROR?tF.VIDEO:void 0)?i:tF.VIDEO;s=null!=(a=iB(e.response,r,t,e.fatal))?a:new tq("",o,e.fatal)}else o===tq.MEDIA_ERR_ENCRYPTED?e.details===tH.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE?((s=new tq(ih("Attempting to play DRM-protected content without providing a DRM token."),tq.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tF.DRM,s.muxCode=tV.ENCRYPTED_MISSING_TOKEN):e.details===tH.ErrorDetails.KEY_SYSTEM_NO_ACCESS?((s=new tq(ih("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),tq.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tF.DRM,s.muxCode=tV.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM):e.details===tH.ErrorDetails.KEY_SYSTEM_NO_SESSION?((s=new tq(ih("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),tq.MEDIA_ERR_ENCRYPTED,!0)).errorCategory=tF.DRM,s.muxCode=tV.ENCRYPTED_GENERATE_REQUEST_FAILED):e.details===tH.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED?((s=new tq(ih("Failed to update DRM license. This may be an issue with the player or your protected content."),tq.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tF.DRM,s.muxCode=tV.ENCRYPTED_UPDATE_LICENSE_FAILED):e.details===tH.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED?((s=new tq(ih("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),tq.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tF.DRM,s.muxCode=tV.ENCRYPTED_UPDATE_SERVER_CERT_FAILED):e.details===tH.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR?((s=new tq(ih("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),tq.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tF.DRM,s.muxCode=tV.ENCRYPTED_CDM_ERROR):e.details===tH.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED?((s=new tq(ih("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),tq.MEDIA_ERR_ENCRYPTED,!1)).errorCategory=tF.DRM,s.muxCode=tV.ENCRYPTED_OUTPUT_RESTRICTED):((s=new tq(e.error.message,tq.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tF.DRM,s.muxCode=tV.ENCRYPTED_ERROR):s=new tq("",o,e.fatal);return s.context||(s.context=`${e.url?`url: ${e.url}
`:""}${e.response&&(e.response.code||e.response.text)?`response: ${e.response.code}, ${e.response.text}
`:""}${e.reason?`failure reason: ${e.reason}
`:""}${e.level?`level: ${e.level}
`:""}${e.parent?`parent stream controller: ${e.parent}
`:""}${e.buffer?`buffer length: ${e.buffer}
`:""}${e.error?`error: ${e.error}
`:""}${e.event?`event: ${e.event}
`:""}${e.err?`error message: ${null==(r=e.err)?void 0:r.message}
`:""}`),s.data=e,s},a8=i(46945),a6=e=>{throw TypeError(e)},a7=(e,t,i)=>t.has(e)||a6("Cannot "+i),re=(e,t,i)=>(a7(e,t,"read from private field"),i?i.call(e):t.get(e)),rt=(e,t,i)=>t.has(e)?a6("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),ri=(e,t,i,a)=>(a7(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ra=(e,t,i)=>(a7(e,t,"access private method"),i),rr=(()=>{try{return"0.30.6"}catch{}return"UNKNOWN"})(),rn=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,rs={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",MAX_AUTO_RESOLUTION:"max-auto-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo",CAP_RENDITION_TO_PLAYER_SIZE:"cap-rendition-to-player-size"},ro=Object.values(rs),rl="mux-video",rd=class extends a8.zM{constructor(){super(),rt(this,a2),rt(this,aY),rt(this,aG),rt(this,aj,{}),rt(this,aQ,{}),rt(this,az),rt(this,aZ),rt(this,aX),rt(this,aJ),rt(this,a0,""),rt(this,a1,e=>{var t;let i=av(this.nativeEl),a=null!=(t=this.metadata)?t:{};this.metadata={...i,...a},(null==i?void 0:i["com.mux.video.branding"])==="mux-free-plan"&&(ri(this,a0,"default"),this.updateLogo())}),rt(this,a4),ri(this,aG,al())}static get NAME(){return rl}static get VERSION(){return rr}static get observedAttributes(){var e;return[...ro,...null!=(e=a8.zM.observedAttributes)?e:[]]}static getLogoHTML(e){return e&&"false"!==e?"default"===e?rn:`<img part="logo" src="${e}" />`:""}static getTemplateHTML(e={}){var t;return`
      ${a8.zM.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML(null!=(t=e[rs.LOGO])?t:"")}
      </slot>
    `}get preferCmcd(){var e;return null!=(e=this.getAttribute(rs.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?tX.includes(e)?this.setAttribute(rs.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${tX.join()}`):this.removeAttribute(rs.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(rs.PLAYER_INIT_TIME)?+this.getAttribute(rs.PLAYER_INIT_TIME):re(this,aG)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(rs.PLAYER_INIT_TIME):this.setAttribute(rs.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=re(this,aX))?e:rl}set playerSoftwareName(e){ri(this,aX,e)}get playerSoftwareVersion(){var e;return null!=(e=re(this,aZ))?e:rr}set playerSoftwareVersion(e){ri(this,aZ,e)}get _hls(){var e;return null==(e=re(this,a2,a3))?void 0:e.engine}get mux(){var e;return null==(e=this.nativeEl)?void 0:e.mux}get error(){var e;return null!=(e=ap(this.nativeEl))?e:null}get errorTranslator(){return re(this,aJ)}set errorTranslator(e){ri(this,aJ,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(null==e?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return null!=(e=this.getAttribute(rs.TYPE))?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(rs.TYPE,e):this.removeAttribute(rs.TYPE))}get preload(){let e=this.getAttribute("preload");return""===e?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(rs.DEBUG)}set debug(e){e!==this.debug&&(e?this.setAttribute(rs.DEBUG,""):this.removeAttribute(rs.DEBUG))}get disableTracking(){return this.hasAttribute(rs.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(rs.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(rs.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(rs.DISABLE_COOKIES,""):this.removeAttribute(rs.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(rs.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(rs.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(rs.DISABLE_PSEUDO_ENDED))}get startTime(){let e=this.getAttribute(rs.START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(null==e?this.removeAttribute(rs.START_TIME):this.setAttribute(rs.START_TIME,`${e}`))}get playbackId(){var e;return this.hasAttribute(rs.PLAYBACK_ID)?this.getAttribute(rs.PLAYBACK_ID):null!=(e=ah(this.src))?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(rs.PLAYBACK_ID,e):this.removeAttribute(rs.PLAYBACK_ID))}get maxResolution(){var e;return null!=(e=this.getAttribute(rs.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(rs.MAX_RESOLUTION,e):this.removeAttribute(rs.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(rs.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(rs.MIN_RESOLUTION,e):this.removeAttribute(rs.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(rs.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(rs.MAX_AUTO_RESOLUTION):this.setAttribute(rs.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(rs.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(rs.RENDITION_ORDER,e):this.removeAttribute(rs.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(rs.PROGRAM_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){null==e?this.removeAttribute(rs.PROGRAM_START_TIME):this.setAttribute(rs.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(rs.PROGRAM_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){null==e?this.removeAttribute(rs.PROGRAM_END_TIME):this.setAttribute(rs.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(rs.ASSET_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetStartTime(e){null==e?this.removeAttribute(rs.ASSET_START_TIME):this.setAttribute(rs.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(rs.ASSET_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetEndTime(e){null==e?this.removeAttribute(rs.ASSET_END_TIME):this.setAttribute(rs.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return null!=(e=this.getAttribute(rs.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(rs.CUSTOM_DOMAIN,e):this.removeAttribute(rs.CUSTOM_DOMAIN))}get capRenditionToPlayerSize(){var e;return(null==(e=this._hlsConfig)?void 0:e.capLevelToPlayerSize)!=null?this._hlsConfig.capLevelToPlayerSize:re(this,a4)}set capRenditionToPlayerSize(e){ri(this,a4,e)}get drmToken(){var e;return null!=(e=this.getAttribute(rs.DRM_TOKEN))?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(rs.DRM_TOKEN,e):this.removeAttribute(rs.DRM_TOKEN))}get playbackToken(){var e,t,i,a;if(this.hasAttribute(rs.PLAYBACK_TOKEN))return null!=(e=this.getAttribute(rs.PLAYBACK_TOKEN))?e:void 0;if(this.hasAttribute(rs.PLAYBACK_ID)){let[,e]=t9(null!=(t=this.playbackId)?t:"");return null!=(i=new URLSearchParams(e).get("token"))?i:void 0}if(this.src)return null!=(a=new URLSearchParams(this.src).get("token"))?a:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(rs.PLAYBACK_TOKEN,e):this.removeAttribute(rs.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(rs.PLAYBACK_TOKEN),t=this.getAttribute(rs.DRM_TOKEN);return{...re(this,aQ),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{}}}set tokens(e){ri(this,aQ,null!=e?e:{})}get ended(){return aS(this.nativeEl,this._hls)}get envKey(){var e;return null!=(e=this.getAttribute(rs.ENV_KEY))?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(rs.ENV_KEY,e):this.removeAttribute(rs.ENV_KEY))}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(rs.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(rs.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(rs.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return null!=(e=this.getAttribute(rs.STREAM_TYPE))?e:aE(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(rs.STREAM_TYPE,e):this.removeAttribute(rs.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(rs.TARGET_LIVE_WINDOW)?+this.getAttribute(rs.TARGET_LIVE_WINDOW):ab(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(rs.TARGET_LIVE_WINDOW):this.setAttribute(rs.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(rs.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:i}=this,a=null!=(e=this.nativeEl.seekable.end(0))?e:0;return Math.max(null!=(t=this.nativeEl.seekable.start(0))?t:0,a-i)}return af(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(rs.LIVE_EDGE_OFFSET))return+this.getAttribute(rs.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(null==e?this.removeAttribute(rs.LIVE_EDGE_OFFSET):this.setAttribute(rs.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return ag(this.nativeEl)}async addCuePoints(e){return iS(this.nativeEl,e)}get activeCuePoint(){return iR(this.nativeEl)}get cuePoints(){return function(e,t={label:ik}){let i=iT(e,t.label,"metadata");return null!=i&&i.cues?Array.from(i.cues,e=>iI(e)):[]}(this.nativeEl)}async addChapters(e){return iO(this.nativeEl,e)}get activeChapter(){return ix(this.nativeEl)}get chapters(){return function(e,t={label:iD}){var i;let a=iT(e,t.label,"chapters");return null!=(i=null==a?void 0:a.cues)&&i.length?Array.from(a.cues,e=>iM(e)):[]}(this.nativeEl)}getStartDate(){return function(e,t){if(t){let i=t.playingDate;if(null!=i)return new Date(i.getTime()-1e3*e.currentTime)}return"function"==typeof e.getStartDate?e.getStartDate():new Date(NaN)}(this.nativeEl,this._hls)}get currentPdt(){var e,t;return e=this.nativeEl,(t=this._hls)&&t.playingDate?t.playingDate:new Date("function"==typeof e.getStartDate?e.getStartDate().getTime()+1e3*e.currentTime:NaN)}get preferPlayback(){let e=this.getAttribute(rs.PREFER_PLAYBACK);if(e===tz.MSE||e===tz.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===tz.MSE||e===tz.NATIVE?this.setAttribute(rs.PREFER_PLAYBACK,e):this.removeAttribute(rs.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![rs.METADATA_URL].includes(e)).reduce((e,t)=>{let i=this.getAttribute(t);return null!=i&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=i),e},{}),...re(this,aj)}}set metadata(e){ri(this,aj,null!=e?e:{}),this.mux&&this.mux.emit("hb",re(this,aj))}get _hlsConfig(){return re(this,az)}set _hlsConfig(e){ri(this,az,e)}get logo(){var e;return null!=(e=this.getAttribute(rs.LOGO))?e:re(this,a0)}set logo(e){e?this.setAttribute(rs.LOGO,e):this.removeAttribute(rs.LOGO)}load(){aI(this,this.nativeEl,re(this,a2,a3))}unload(){aR(this.nativeEl,re(this,a2,a3),this)}attributeChangedCallback(e,t,i){var a,r;switch(a8.zM.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,i),e){case rs.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=i?i:void 0;break;case rs.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=i?i:void 0;break;case"src":{let e=!!t,a=!!i;!e&&a?ra(this,a2,a5).call(this):e&&!a?this.unload():e&&a&&(this.unload(),ra(this,a2,a5).call(this));break}case"autoplay":if(i===t)break;null==(a=re(this,a2,a3))||a.setAutoplay(this.autoplay);break;case"preload":if(i===t)break;null==(r=re(this,a2,a3))||r.setPreload(i);break;case rs.PLAYBACK_ID:case rs.CUSTOM_DOMAIN:case rs.MAX_RESOLUTION:case rs.MIN_RESOLUTION:case rs.RENDITION_ORDER:case rs.PROGRAM_START_TIME:case rs.PROGRAM_END_TIME:case rs.ASSET_START_TIME:case rs.ASSET_END_TIME:case rs.PLAYBACK_TOKEN:this.src=au(this);break;case rs.DEBUG:{let e=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=e);break}case rs.METADATA_URL:i&&fetch(i).then(e=>e.json()).then(e=>this.metadata=e).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${i}!`));break;case rs.STREAM_TYPE:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case rs.TARGET_LIVE_WINDOW:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case rs.LOGO:(null==i||i!==t)&&this.updateLogo();break;case rs.DISABLE_TRACKING:if(null==i||i!==t){let e=this.currentTime,t=this.paused;this.unload(),ra(this,a2,a5).call(this).then(()=>{this.currentTime=e,t||this.play()})}break;case rs.DISABLE_COOKIES:(null==i||i!==t)&&this.disableCookies&&document.cookie.split(";").forEach(e=>{e.trim().startsWith("muxData")&&(document.cookie=e.replace(/^ +/,"").replace(/=.*/,"=;expires="+new Date().toUTCString()+";path=/"))});break;case rs.CAP_RENDITION_TO_PLAYER_SIZE:(null==i||i!==t)&&(this.capRenditionToPlayerSize=null!=i||void 0)}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');if(!e)return;let t=this.constructor.getLogoHTML(re(this,a0)||this.logo);e.innerHTML=t}connectedCallback(){var e,t;null==(e=super.connectedCallback)||e.call(this),null==(t=this.nativeEl)||t.addEventListener("muxmetadata",re(this,a1)),this.nativeEl&&this.src&&!re(this,a2,a3)&&ra(this,a2,a5).call(this)}disconnectedCallback(){var e,t;null==(e=this.nativeEl)||e.removeEventListener("muxmetadata",re(this,a1)),this.unload(),null==(t=super.disconnectedCallback)||t.call(this)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};aY=new WeakMap,aG=new WeakMap,aj=new WeakMap,aQ=new WeakMap,az=new WeakMap,aZ=new WeakMap,aX=new WeakMap,aJ=new WeakMap,a0=new WeakMap,a1=new WeakMap,a2=new WeakSet,a3=function(){return a_(this.nativeEl)},a4=new WeakMap,a5=async function(){re(this,aY)||(await ri(this,aY,Promise.resolve()),ri(this,aY,null),this.load())};let ru=new WeakMap;class rc extends Error{}class rh extends Error{}let rm=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"];function rp(){return globalThis.cast?.framework?.CastContext.getInstance()}function rv(){return rp()?.getCurrentSession()}function rE(){return rv()?.getSessionObj().media[0]}function rb(e){return rp().setOptions({...rg(),...e})}function rg(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}async function rf(e){try{let t=(await fetch(e,{method:"HEAD"})).headers.get("Content-Type");return rm.some(e=>t===e)}catch(e){return console.error("Error while trying to get the Content-Type of the manifest",e),!1}}async function r_(e){try{let t=await (await fetch(e)).text(),i=t,a=function(e){let t=e.split("\n"),i=[];for(let e=0;e<t.length;e++)if(t[e].trim().startsWith("#EXT-X-STREAM-INF")){let a=t[e+1]?t[e+1].trim():"";a&&!a.startsWith("#")&&i.push(a)}return i}(t);if(a.length>0){let t=new URL(a[0],e).toString();i=await (await fetch(t)).text()}let r=i.split("\n").find(e=>!e.trim().startsWith("#")&&""!==e.trim());return function(e){if(!e)return;let t=e.match(/\.([a-zA-Z0-9]+)(?:\?.*)?$/);return t?t[1]:null}(r)}catch(e){console.error("Error while trying to parse the manifest playlist",e);return}}let ry=new(globalThis.WeakRef?class extends Set{add(e){super.add(new WeakRef(e))}forEach(e){super.forEach(t=>{let i=t.deref();i&&e(i)})}}:Set),rT=new WeakSet;rO=()=>{if(!globalThis.chrome?.cast?.isAvailable){console.debug("chrome.cast.isAvailable",globalThis.chrome?.cast?.isAvailable);return}a||(a=cast.framework,rp().addEventListener(a.CastContextEventType.CAST_STATE_CHANGED,e=>{ry.forEach(t=>ru.get(t).onCastStateChanged?.(e))}),rp().addEventListener(a.CastContextEventType.SESSION_STATE_CHANGED,e=>{ry.forEach(t=>ru.get(t).onSessionStateChanged?.(e))}),ry.forEach(e=>ru.get(e).init?.()))},globalThis.chrome?.cast?.isAvailable?globalThis.cast?.framework?rO():customElements.whenDefined("google-cast-button").then(rO):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(rO)};let rA=0;class rk extends EventTarget{#e;#t;#i;#a;#r="disconnected";#n=!1;#s=new Set;#o=new WeakMap;#l=()=>this.#d();constructor(e){super(),this.#e=e,ry.add(this),ru.set(this,{init:()=>this.#u(),onCastStateChanged:()=>this.#c(),onSessionStateChanged:()=>this.#h(),getCastPlayer:()=>this.#m}),this.#u()}destroy(){this.#e?.textTracks?.removeEventListener("change",this.#l),this.#a&&this.#i?.controller&&Object.entries(this.#a).forEach(([e,t])=>{this.#i.controller.removeEventListener(e,t)}),this.#e&&rT.delete(this.#e),this.#t=!1}get #m(){if(rT.has(this.#e))return this.#i}get state(){return this.#r}async watchAvailability(e){if(this.#e.disableRemotePlayback)throw new rc("disableRemotePlayback attribute is present.");return this.#o.set(e,++rA),this.#s.add(e),queueMicrotask(()=>e(this.#p())),rA}async cancelWatchAvailability(e){if(this.#e.disableRemotePlayback)throw new rc("disableRemotePlayback attribute is present.");e?this.#s.delete(e):this.#s.clear()}async prompt(){if(this.#e.disableRemotePlayback)throw new rc("disableRemotePlayback attribute is present.");if(!globalThis.chrome?.cast?.isAvailable)throw new rh("The RemotePlayback API is disabled on this platform.");let e=rT.has(this.#e);rT.add(this.#e),rb(this.#e.castOptions),Object.entries(this.#a).forEach(([e,t])=>{this.#i.controller.addEventListener(e,t)});try{await rp().requestSession()}catch(t){if(e||rT.delete(this.#e),"cancel"===t)return;throw Error(t)}ru.get(this.#e)?.loadOnPrompt?.()}#v(){rT.has(this.#e)&&(Object.entries(this.#a).forEach(([e,t])=>{this.#i.controller.removeEventListener(e,t)}),rT.delete(this.#e),this.#e.muted=this.#i.isMuted,this.#e.currentTime=this.#i.savedPlayerState.currentTime,!1===this.#i.savedPlayerState.isPaused&&this.#e.play())}#p(){let e=rp()?.getCastState();return e&&"NO_DEVICES_AVAILABLE"!==e}#c(){let e=rp().getCastState();if(rT.has(this.#e)&&"CONNECTING"===e&&(this.#r="connecting",this.dispatchEvent(new Event("connecting"))),!this.#n&&e?.includes("CONNECT"))for(let e of(this.#n=!0,this.#s))e(!0);else if(this.#n&&(!e||"NO_DEVICES_AVAILABLE"===e))for(let e of(this.#n=!1,this.#s))e(!1)}async #h(){let{SESSION_RESUMED:e}=a.SessionState;if(rp().getSessionState()===e&&this.#e.castSrc===rE()?.media.contentId){rT.add(this.#e),Object.entries(this.#a).forEach(([e,t])=>{this.#i.controller.addEventListener(e,t)});try{var t;await (t=new chrome.cast.media.GetStatusRequest,new Promise((e,i)=>{rE().getStatus(t,e,i)}))}catch(e){console.error(e)}this.#a[a.RemotePlayerEventType.IS_PAUSED_CHANGED](),this.#a[a.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}}#u(){a&&!this.#t&&(this.#t=!0,rb(this.#e.castOptions),this.#e.textTracks.addEventListener("change",this.#l),this.#c(),this.#i=new a.RemotePlayer,new a.RemotePlayerController(this.#i),this.#a={[a.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:e})=>{!0===e?(this.#r="connected",this.dispatchEvent(new Event("connect"))):(this.#v(),this.#r="disconnected",this.dispatchEvent(new Event("disconnect")))},[a.RemotePlayerEventType.DURATION_CHANGED]:()=>{this.#e.dispatchEvent(new Event("durationchange"))},[a.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{this.#e.dispatchEvent(new Event("volumechange"))},[a.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{this.#e.dispatchEvent(new Event("volumechange"))},[a.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{this.#m?.isMediaLoaded&&this.#e.dispatchEvent(new Event("timeupdate"))},[a.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{this.#e.dispatchEvent(new Event("resize"))},[a.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{this.#e.dispatchEvent(new Event(this.paused?"pause":"play"))},[a.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{this.#m?.playerState!==chrome.cast.media.PlayerState.PAUSED&&this.#e.dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[this.#m?.playerState]))},[a.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{this.#m?.isMediaLoaded&&(await Promise.resolve(),this.#E())}})}#E(){this.#d()}async #d(){let e;if(!this.#m)return;let t=(this.#i.mediaInfo?.tracks??[]).filter(({type:e})=>e===chrome.cast.media.TrackType.TEXT),i=[...this.#e.textTracks].filter(({kind:e})=>"subtitles"===e||"captions"===e),a=t.map(({language:e,name:t,trackId:a})=>{let{mode:r}=i.find(i=>i.language===e&&i.label===t)??{};return!!r&&{mode:r,trackId:a}}).filter(Boolean),r=a.filter(({mode:e})=>"showing"!==e).map(({trackId:e})=>e),n=a.find(({mode:e})=>"showing"===e),s=rv()?.getSessionObj().media[0]?.activeTrackIds??[],o=s;if(s.length&&(o=o.filter(e=>!r.includes(e))),n?.trackId&&(o=[...o,n.trackId]),e=o=[...new Set(o)],!(s.length===e.length&&s.every(t=>e.includes(t))))try{let e=new chrome.cast.media.EditTracksInfoRequest(o);await new Promise((t,i)=>{rE().editTracksInfo(e,t,i)})}catch(e){console.error(e)}}}let rw=e=>class extends e{static observedAttributes=[...e.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"];#b={paused:!1};#g=rg();#f;#_;get remote(){if(this.#_)return this.#_;if(globalThis.chrome){if(!this.isConnected)return;return this.disableRemotePlayback||function(){let e="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(globalThis.chrome?.cast||document.querySelector(`script[src="${e}"]`))return;let t=document.createElement("script");t.src=e,document.head.append(t)}(),ru.set(this,{loadOnPrompt:()=>this.#y()}),this.#_=new rk(this)}return super.remote}get #m(){return ru.get(this.remote)?.getCastPlayer?.()}disconnectedCallback(){this.#_?.destroy(),this.#_=null,ru.delete(this),super.disconnectedCallback?.()}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"cast-receiver"===e&&i){this.#g.receiverApplicationId=i;return}if(this.#m)switch(e){case"cast-stream-type":case"cast-src":this.load()}}async #y(){this.#b.paused=super.paused,super.pause(),this.muted=super.muted;try{await this.load()}catch(e){console.error(e)}}async load(){if(!this.#m)return super.load();let e=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);e.customData=this.castCustomData;let t=[...this.querySelectorAll("track")].filter(({kind:e,src:t})=>t&&("subtitles"===e||"captions"===e)),i=[],a=0;if(t.length&&(e.tracks=t.map(e=>{let t=++a;0===i.length&&"showing"===e.track.mode&&i.push(t);let r=new chrome.cast.media.Track(t,chrome.cast.media.TrackType.TEXT);return r.trackContentId=e.src,r.trackContentType="text/vtt",r.subtype="captions"===e.kind?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,r.name=e.label,r.language=e.srclang,r})),"live"===this.castStreamType?e.streamType=chrome.cast.media.StreamType.LIVE:e.streamType=chrome.cast.media.StreamType.BUFFERED,e.metadata=new chrome.cast.media.GenericMediaMetadata,e.metadata.title=this.title,e.metadata.images=[{url:this.poster}],rf(this.castSrc)){let t=await r_(this.castSrc);t?.includes("m4s")||t?.includes("mp4")?(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4):t?.includes("ts")&&(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.TS,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.TS)}let r=new chrome.cast.media.LoadRequest(e);r.currentTime=super.currentTime??0,r.autoplay=!this.#b.paused,r.activeTrackIds=i,await rv()?.loadMedia(r),this.dispatchEvent(new Event("volumechange"))}play(){if(this.#m){this.#m.isPaused&&this.#m.controller?.playOrPause();return}return super.play()}pause(){if(this.#m){this.#m.isPaused||this.#m.controller?.playOrPause();return}super.pause()}get castOptions(){return this.#g}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(e){this.castReceiver!=e&&this.setAttribute("cast-receiver",`${e}`)}get castSrc(){return this.getAttribute("cast-src")??this.querySelector("source")?.src??this.currentSrc}set castSrc(e){this.castSrc!=e&&this.setAttribute("cast-src",`${e}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(e){this.setAttribute("cast-content-type",`${e}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(e){this.setAttribute("cast-stream-type",`${e}`)}get castCustomData(){return this.#f}set castCustomData(e){let t=typeof e;if(!["object","undefined"].includes(t)){console.error(`castCustomData must be nullish or an object but value was of type ${t}`);return}this.#f=e}get readyState(){if(this.#m)switch(this.#m.playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return this.#m?this.#m.isPaused:super.paused}get muted(){return this.#m?this.#m?.isMuted:super.muted}set muted(e){if(this.#m){(e&&!this.#m.isMuted||!e&&this.#m.isMuted)&&this.#m.controller?.muteOrUnmute();return}super.muted=e}get volume(){return this.#m?this.#m?.volumeLevel??1:super.volume}set volume(e){if(this.#m){this.#m.volumeLevel=+e,this.#m.controller?.setVolumeLevel();return}super.volume=e}get duration(){return this.#m&&this.#m?.isMediaLoaded?this.#m?.duration??NaN:super.duration}get currentTime(){return this.#m&&this.#m?.isMediaLoaded?this.#m?.currentTime??0:super.currentTime}set currentTime(e){if(this.#m){this.#m.currentTime=e,this.#m.controller?.seek();return}super.currentTime=e}};var rS=i(36784),rI=e=>{throw TypeError(e)},rR=(e,t,i)=>t.has(e)||rI("Cannot "+i),rL=(e,t,i)=>(rR(e,t,"read from private field"),i?i.call(e):t.get(e)),rD=(e,t,i)=>t.has(e)?rI("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),rC=(e,t,i,a)=>(rR(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rM=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends rM{}globalThis.DocumentFragment=e}var rO,rx,rN=class extends rM{},rP=class{constructor(e,t={}){rD(this,rx),rC(this,rx,null==t?void 0:t.detail)}get detail(){return rL(this,rx)}initCustomEvent(){}};rx=new WeakMap;var rU={document:{createElement:function(e,t){return new rN}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(rN)},CustomEvent:rP,EventTarget:rM,HTMLElement:rN,HTMLVideoElement:class extends rM{}},rW="undefined"==typeof window||void 0===globalThis.customElements,rB=rW?rU:globalThis;rW&&rU.document;var rH,rF=class extends rw((0,rS.lK)(rd)){constructor(){super(...arguments),rD(this,rH)}get autoplay(){let e=this.getAttribute("autoplay");return null!==e&&(""===e||e)}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute("autoplay","string"==typeof e?e:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var e;return null!=(e=rL(this,rH))?e:this.muxCastCustomData}set castCustomData(e){rC(this,rH,e)}};rH=new WeakMap,rB.customElements.get("mux-video")||(rB.customElements.define("mux-video",rF),rB.MuxVideoElement=rF);let rV={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},rK={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},r$={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},rq=Object.entries(r$),rY=rq.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),rG=rq.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(rG).reduce((e,[t,i])=>{let a=rY[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});let rj=Object.entries(rY).reduce((e,[t,i])=>{let a=rG[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),rQ={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},rz={DISABLED:"disabled",SHOWING:"showing"},rZ={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},rX={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},rJ={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},r0={FULLSCREEN:"fullscreen"};function r1(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function r2(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function r3(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function r4(e){if(e){let[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function r5(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}function r9(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}let r8=e=>new Promise(t=>setTimeout(t,e)),r6={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it.",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds","{time} remaining":"{time} remaining","{currentTime} of {totalTime}":"{currentTime} of {totalTime}","video not loaded, unknown time.":"video not loaded, unknown time."}},r7=(null==(cy=globalThis.navigator)?void 0:cy.language)||"en",ne=e=>{r7=e},nt=e=>{var t,i,a;let[r]=r7.split("-");return(null==(t=r6[r7])?void 0:t[e])||(null==(i=r6[r])?void 0:i[e])||(null==(a=r6.en)?void 0:a[e])||e},ni=(e,t={})=>nt(e).replace(/\{(\w+)\}/g,(e,i)=>i in t?String(t[i]):`{${i}}`),na=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],nr=(e,t)=>{let i=1===e?ni(na[t].singular):ni(na[t].plural);return`${e} ${i}`},nn=e=>{if(!r5(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),r=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>e&&nr(e,t)).filter(e=>e).join(", ");return i?ni("{time} remaining",{time:r}):r};function ns(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),n=Math.floor(e/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),r=(((n=n>0||Math.floor(t/3600)>0?n+":":"")||Math.floor(t/60%60)>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+n+r+(a=a<10?"0"+a:a)}Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});class no{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class nl extends no{}class nd extends nl{constructor(){super(...arguments),this.role=null}}class nu{observe(){}unobserve(){}disconnect(){}}let nc={createElement:function(){return new nh.HTMLElement},createElementNS:function(){return new nh.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},nh={ResizeObserver:nu,document:nc,Node:nl,Element:nd,HTMLElement:class extends nd{constructor(){super(...arguments),this.innerHTML=""}get content(){return new nh.DocumentFragment}},DocumentFragment:class extends no{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e}),DOMParser:class{parseFromString(e,t){return{body:{textContent:e}}}}},nm="global"in globalThis&&(null==globalThis?void 0:globalThis.global)===globalThis||"undefined"==typeof window||void 0===window.customElements,np=Object.keys(nh).every(e=>e in globalThis),nv=nm&&!np?nh:globalThis,nE=nm&&!np?nc:globalThis.document,nb=new WeakMap,ng=e=>{let t=nb.get(e);return t||nb.set(e,t=new Set),t},nf=new nv.ResizeObserver(e=>{for(let t of e)for(let e of ng(t.target))e(t)});function n_(e,t){ng(e).add(t),nf.observe(e)}function ny(e,t){let i=ng(e);i.delete(t),i.size||nf.unobserve(e)}function nT(e){let t={};for(let i of e)t[i.name]=i.value;return t}function nA(e){var t;return null!=(t=nk(e))?t:nL(e,"media-controller")}function nk(e){var t;let{MEDIA_CONTROLLER:i}=rK,a=e.getAttribute(i);if(a)return null==(t=nC(e))?void 0:t.getElementById(a)}let nw=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},nS=(e,t)=>{let i=`slot[name="${t}"]`,a=e.shadowRoot.querySelector(i);return a?a.children:[]},nI=(e,t)=>nS(e,t)[0],nR=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||nR(e,t.getRootNode().host)),nL=(e,t)=>e?e.closest(t)||nL(e.getRootNode().host,t):null;function nD(e=document){var t;let i=null==e?void 0:e.activeElement;return i?null!=(t=nD(i.shadowRoot))?t:i:null}function nC(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function nM(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){let e=getComputedStyle(r);if(i&&"0"===e.opacity||a&&"hidden"===e.visibility||"none"===e.display)return!1;r=r.parentElement,t--}return!0}function nO(e,t){return function(e,t){var i,a;let r;for(r of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=r.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t)||nx(e,t)}function nx(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],n=null==r?void 0:r[r.length-1];if(!(null==n?void 0:n.sheet))return console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}};let s=null==n?void 0:n.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length);return null==(a=n.sheet.cssRules)?void 0:a[s]}function nN(e,t,i=Number.NaN){let a=e.getAttribute(t);return null!=a?+a:i}function nP(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}nN(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function nU(e,t){return e.hasAttribute(t)}function nW(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}nU(e,t)!=i&&e.toggleAttribute(t,i)}function nB(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function nH(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;nB(e,t,void 0)!==a&&e.setAttribute(t,a)}var nF=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nV=(e,t,i)=>(nF(e,t,"read from private field"),i?i.call(e):t.get(e)),nK=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},n$=(e,t,i,a)=>(nF(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class nq extends nv.HTMLElement{constructor(){if(super(),nK(this,cT,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nT(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rK.MEDIA_CONTROLLER,rY.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===rK.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=nV(this,cT))?void 0:a.unassociateElement)||r.call(a,this),n$(this,cT,null)),i&&this.isConnected&&(n$(this,cT,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=nV(this,cT))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),n$(this,cT,function(e){var t;let i=e.getAttribute(rK.MEDIA_CONTROLLER);return i?null==(t=e.getRootNode())?void 0:t.getElementById(i):nL(e,"media-controller")}(this)),this.getAttribute(rK.MEDIA_CONTROLLER)&&(null==(t=null==(e=nV(this,cT))?void 0:e.associateElement)||t.call(e,this)),nV(this,cT)&&(nV(this,cT).addEventListener("pointerdown",this),nV(this,cT).addEventListener("click",this),nV(this,cT).hasAttribute("tabindex")||(nV(this,cT).tabIndex=0))}disconnectedCallback(){var e,t,i,a;this.getAttribute(rK.MEDIA_CONTROLLER)&&(null==(t=null==(e=nV(this,cT))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=nV(this,cT))||i.removeEventListener("pointerdown",this),null==(a=nV(this,cT))||a.removeEventListener("click",this),n$(this,cT,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:n,height:s}=this.getBoundingClientRect(),o=t-a,l=i-r;if(o<0||l<0||o>n||l>s||0===n&&0===s)return;let d=this._pointerType||"mouse";if(this._pointerType=void 0,d===rZ.TOUCH){this.handleTap(e);return}if(d===rZ.MOUSE||d===rZ.PEN){this.handleMouseClick(e);return}}}}get mediaPaused(){return nU(this,rY.MEDIA_PAUSED)}set mediaPaused(e){nW(this,rY.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?rV.MEDIA_PLAY_REQUEST:rV.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new nv.CustomEvent(t,{composed:!0,bubbles:!0}))}}cT=new WeakMap,nq.shadowRootOptions={mode:"open"},nq.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},nv.customElements.get("media-gesture-receiver")||nv.customElements.define("media-gesture-receiver",nq);var nY=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nG=(e,t,i)=>(nY(e,t,"read from private field"),i?i.call(e):t.get(e)),nj=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nQ=(e,t,i,a)=>(nY(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nz=(e,t,i)=>(nY(e,t,"access private method"),i);let nZ={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"},nX=Object.values(rY);function nJ(e,t){var i;if(!e.isConnected)return;let a=Object.fromEntries((null!=(i=e.getAttribute(nZ.BREAKPOINTS))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),r=Object.keys(a).filter(e=>t>=parseInt(a[e])),n=!1;if(Object.keys(a).forEach(t=>{if(r.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),n=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),n=!0)}),n){let t=new CustomEvent(rG.BREAKPOINTS_CHANGE,{detail:r});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(rG.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class n0 extends nv.HTMLElement{constructor(){if(super(),nj(this,cC),nj(this,cO),nj(this,cN),nj(this,cU),nj(this,cB),nj(this,cA,void 0),nj(this,ck,0),nj(this,cw,null),nj(this,cS,null),nj(this,cI,void 0),this.breakpointsComputed=!1,nj(this,cR,e=>{let t=this.media;for(let i of e)if("childList"===i.type){for(let e of i.removedNodes){if("media"!=e.slot||i.target!=this)continue;let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}if(t)for(let e of i.addedNodes)e===t&&this.handleMediaUpdated(t)}}),nj(this,cL,!1),nj(this,cD,e=>{nG(this,cL)||(setTimeout(()=>{nJ(e.target,e.contentRect.width),nQ(this,cL,!1)},0),nQ(this,cL,!0))}),nj(this,cF,void 0),nj(this,cV,()=>{if(!nG(this,cF).assignedElements({flatten:!0}).length){nG(this,cw)&&this.mediaUnsetCallback(nG(this,cw));return}this.handleMediaUpdated(this.media)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nT(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}nQ(this,cA,new MutationObserver(nG(this,cR)))}static get observedAttributes(){return[nZ.AUTOHIDE,nZ.GESTURES_DISABLED].concat(nX).filter(e=>![rY.MEDIA_RENDITION_LIST,rY.MEDIA_AUDIO_TRACK_LIST,rY.MEDIA_CHAPTERS_CUES,rY.MEDIA_WIDTH,rY.MEDIA_HEIGHT,rY.MEDIA_ERROR,rY.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==nZ.AUTOHIDE&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(nQ(this,cw,e),e.localName.includes("-")&&await nv.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;nG(this,cA).observe(this,{childList:!0,subtree:!0}),n_(this,nG(this,cD));let t=null!=this.getAttribute(nZ.AUDIO)?ni("audio player"):ni("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(nZ.USER_INACTIVE,""),nJ(this,this.getBoundingClientRect().width);let i=this.querySelector(":scope > slot[slot=media]");i&&(nQ(this,cF,i),nG(this,cF).addEventListener("slotchange",nG(this,cV))),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=nv.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;ny(this,nG(this,cD)),clearTimeout(nG(this,cS)),nG(this,cA).disconnect(),this.media&&this.mediaUnsetCallback(this.media),null==(e=nv.window)||e.removeEventListener("mouseup",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointermove",this),this.removeEventListener("pointerup",this),this.removeEventListener("mouseleave",this),this.removeEventListener("keyup",this),nG(this,cF)&&(nG(this,cF).removeEventListener("slotchange",nG(this,cV)),nQ(this,cF,null)),nQ(this,cL,!1)}mediaSetCallback(e){}mediaUnsetCallback(e){nQ(this,cw,null)}handleEvent(e){switch(e.type){case"pointerdown":nQ(this,ck,e.timeStamp);break;case"pointermove":nz(this,cC,cM).call(this,e);break;case"pointerup":nz(this,cO,cx).call(this,e);break;case"mouseleave":nz(this,cN,cP).call(this);break;case"mouseup":this.removeAttribute(nZ.KEYBOARD_CONTROL);break;case"keyup":nz(this,cB,cH).call(this),this.setAttribute(nZ.KEYBOARD_CONTROL,"")}}set autohide(e){let t=Number(e);nQ(this,cI,isNaN(t)?0:t)}get autohide(){return(void 0===nG(this,cI)?2:nG(this,cI)).toString()}get breakpoints(){return nB(this,nZ.BREAKPOINTS)}set breakpoints(e){nH(this,nZ.BREAKPOINTS,e)}get audio(){return nU(this,nZ.AUDIO)}set audio(e){nW(this,nZ.AUDIO,e)}get gesturesDisabled(){return nU(this,nZ.GESTURES_DISABLED)}set gesturesDisabled(e){nW(this,nZ.GESTURES_DISABLED,e)}get keyboardControl(){return nU(this,nZ.KEYBOARD_CONTROL)}set keyboardControl(e){nW(this,nZ.KEYBOARD_CONTROL,e)}get noAutohide(){return nU(this,nZ.NO_AUTOHIDE)}set noAutohide(e){nW(this,nZ.NO_AUTOHIDE,e)}get autohideOverControls(){return nU(this,nZ.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){nW(this,nZ.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return nU(this,nZ.USER_INACTIVE)}set userInteractive(e){nW(this,nZ.USER_INACTIVE,e)}}cA=new WeakMap,ck=new WeakMap,cw=new WeakMap,cS=new WeakMap,cI=new WeakMap,cR=new WeakMap,cL=new WeakMap,cD=new WeakMap,cC=new WeakSet,cM=function(e){if("mouse"!==e.pointerType&&e.timeStamp-nG(this,ck)<250)return;nz(this,cU,cW).call(this),clearTimeout(nG(this,cS));let t=this.hasAttribute(nZ.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(e.target)||t)&&nz(this,cB,cH).call(this)},cO=new WeakSet,cx=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(nZ.USER_INACTIVE);[this,this.media].includes(e.target)&&t?nz(this,cN,cP).call(this):nz(this,cB,cH).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&nz(this,cB,cH).call(this)},cN=new WeakSet,cP=function(){if(0>nG(this,cI)||this.hasAttribute(nZ.USER_INACTIVE))return;this.setAttribute(nZ.USER_INACTIVE,"");let e=new nv.CustomEvent(rG.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},cU=new WeakSet,cW=function(){if(!this.hasAttribute(nZ.USER_INACTIVE))return;this.removeAttribute(nZ.USER_INACTIVE);let e=new nv.CustomEvent(rG.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},cB=new WeakSet,cH=function(){nz(this,cU,cW).call(this),clearTimeout(nG(this,cS));let e=parseInt(this.autohide);e<0||nQ(this,cS,setTimeout(()=>{nz(this,cN,cP).call(this)},1e3*e))},cF=new WeakMap,cV=new WeakMap,n0.shadowRootOptions={mode:"open"},n0.getTemplateHTML=function(e){return`
    <style>
      
      :host([${rY.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${nZ.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${nZ.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${nZ.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${nZ.AUDIO}])[${nZ.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${nZ.AUDIO}])[${nZ.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${nZ.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${nZ.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${nZ.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${nZ.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${nZ.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${nZ.USER_INACTIVE}]:not([${rY.MEDIA_PAUSED}]):not([${rY.MEDIA_IS_AIRPLAYING}]):not([${rY.MEDIA_IS_CASTING}]):not([${nZ.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${nZ.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${nZ.USER_INACTIVE}]:not([${nZ.NO_AUTOHIDE}]):not([${rY.MEDIA_PAUSED}]):not([${rY.MEDIA_IS_CASTING}]):not([${nZ.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${nZ.USER_INACTIVE}][${nZ.AUTOHIDE_OVER_CONTROLS}]:not([${nZ.NO_AUTOHIDE}]):not([${rY.MEDIA_PAUSED}]):not([${rY.MEDIA_IS_CASTING}]):not([${nZ.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${nZ.AUDIO}])[${rY.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${nq.shadowRootOptions.mode}">
          ${nq.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `},nv.customElements.get("media-container")||nv.customElements.define("media-container",n0);var n1=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},n2=(e,t,i)=>(n1(e,t,"read from private field"),i?i.call(e):t.get(e)),n3=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},n4=(e,t,i,a)=>(n1(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class n5{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){n3(this,cG),n3(this,cK,void 0),n3(this,c$,void 0),n3(this,cq,void 0),n3(this,cY,new Set),n4(this,cK,e),n4(this,c$,t),n4(this,cq,new Set(i))}[Symbol.iterator](){return n2(this,cG,cj).values()}get length(){return n2(this,cG,cj).size}get value(){var e;return null!=(e=[...n2(this,cG,cj)].join(" "))?e:""}set value(e){var t;e!==this.value&&(n4(this,cY,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...n2(this,cG,cj)][e]}values(){return n2(this,cG,cj).values()}forEach(e,t){n2(this,cG,cj).forEach(e,t)}add(...e){var t,i;e.forEach(e=>n2(this,cY).add(e)),(""!==this.value||(null==(t=n2(this,cK))?void 0:t.hasAttribute(`${n2(this,c$)}`)))&&(null==(i=n2(this,cK))||i.setAttribute(`${n2(this,c$)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>n2(this,cY).delete(e)),null==(t=n2(this,cK))||t.setAttribute(`${n2(this,c$)}`,`${this.value}`)}contains(e){return n2(this,cG,cj).has(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}cK=new WeakMap,c$=new WeakMap,cq=new WeakMap,cY=new WeakMap,cG=new WeakSet,cj=function(){return n2(this,cY).size?n2(this,cY):n2(this,cq)};let n9=(e="")=>e.split(/\s+/),n8=(e="")=>{let[t,i,a]=e.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:"cc"===t?rQ.CAPTIONS:rQ.SUBTITLES,language:i,label:r}},n6=(e="",t={})=>n9(e).map(e=>{let i=n8(e);return{...t,...i}}),n7=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?n8(e):e):"string"==typeof e?n6(e):[e]:[],se=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,st=(e=[])=>Array.prototype.map.call(e,se).join(" "),si=(e,t)=>i=>i[e]===t,sa=e=>{let t=Object.entries(e).map(([e,t])=>si(e,t));return e=>t.every(t=>t(e))},sr=(e,t=[],i=[])=>{let a=n7(i).map(sa);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},sn=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:sa(t);return Array.from(e.textTracks).filter(i)},ss=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(rY.MEDIA_SUBTITLES_SHOWING)},so=e=>{var t;let{media:i,fullscreenElement:a}=e;try{let e=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(e){let i=null==(t=a[e])?void 0:t.call(a);if(i instanceof Promise)return i.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()}catch(e){console.error(e)}},sl="exitFullscreen"in nE?"exitFullscreen":"webkitExitFullscreen"in nE?"webkitExitFullscreen":"webkitCancelFullScreen"in nE?"webkitCancelFullScreen":void 0,sd=e=>{var t;let{documentElement:i}=e;if(sl){let e=null==(t=null==i?void 0:i[sl])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}},su="fullscreenElement"in nE?"fullscreenElement":"webkitFullscreenElement"in nE?"webkitFullscreenElement":void 0,sc=e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[su];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===r0.FULLSCREEN?i:a},sh=e=>{var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;let n=sc(e);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let e=n.shadowRoot;if(!(su in e))return nR(n,r);for(;null==e?void 0:e[su];){if(e[su]===r)return!0;e=null==(t=e[su])?void 0:t.shadowRoot}}return!1},sm="fullscreenEnabled"in nE?"fullscreenEnabled":"webkitFullscreenEnabled"in nE?"webkitFullscreenEnabled":void 0,sp=e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[sm])||i&&"webkitSupportsFullscreen"in i},sv=()=>{var e;return r||(r=null==(e=null==nE?void 0:nE.createElement)?void 0:e.call(nE,"video"))},sE=async(e=sv())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let i=new AbortController,a=await Promise.race([sb(e,i.signal),sg(e,t)]);return i.abort(),a},sb=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),sg=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await r8(10)}return e.volume!==t},sf=/.*Version\/.*Safari\/.*/.test(nv.navigator.userAgent),s_=(e=sv())=>(!nv.matchMedia("(display-mode: standalone)").matches||!sf)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),sy=(e=sv())=>sp({documentElement:nE,media:e}),sT=sy(),sA=s_(),sk=!!nv.WebKitPlaybackTargetAvailabilityEvent,sw=!!nv.chrome,sS=e=>sn(e.media,e=>[rQ.SUBTITLES,rQ.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),sI=e=>sn(e.media,e=>e.mode===rz.SHOWING&&[rQ.SUBTITLES,rQ.CAPTIONS].includes(e.kind)),sR=(e,t)=>{let i=sS(e),a=sI(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)sr(rz.DISABLED,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=nv.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...nv.navigator.languages]:nv.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:n,label:s,kind:o}=t;sr(rz.DISABLED,i,a),sr(rz.SHOWING,i,[{language:n,label:s,kind:o}])}}},sL=(e,t)=>e===t||null!=e&&null!=t&&typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?sD(e,t):Object.entries(e).every(([e,i])=>e in t&&sL(i,t[e])))),sD=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>sL(e,t[i])))},sC=Object.values(rJ),sM=sE().then(e=>n=e),sO=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof nv.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=nv.customElements.get(t);i&&e instanceof i||(await nv.customElements.whenDefined(t),nv.customElements.upgrade(e))}))},sx=new nv.DOMParser,sN=e=>e&&sx.parseFromString(e,"text/html").body.textContent||e,sP={mediaError:{get(e,t){let{media:i}=e;if((null==t?void 0:t.type)!=="playing")return null==i?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;let{media:a}=e;if((null==t?void 0:t.type)!=="playing")return null==(i=null==a?void 0:a.error)?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;let{media:r}=e;if((null==t?void 0:t.type)!=="playing")return null!=(a=null==(i=null==r?void 0:r.error)?void 0:i.message)?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;i&&Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i,options:{noMutedPref:a}={}}=t;if(i){i.muted=e;try{let t=null!==nv.localStorage.getItem("media-chrome-pref-muted"),r=i.hasAttribute("muted");if(a){t&&nv.localStorage.removeItem("media-chrome-pref-muted");return}if(r&&!t)return;nv.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(e){console.debug("Error setting muted pref",e)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:i}}=t,{media:a}=t;if(a&&!a.muted&&!i)try{let i="true"===nv.localStorage.getItem("media-chrome-pref-muted");sP.mediaMuted.set(i,t),e(i)}catch(e){console.debug("Error getting muted pref",e)}}]},mediaLoop:{get(e){let{media:t}=e;return null==t?void 0:t.loop},set(e,t){let{media:i}=t;i&&(i.loop=e)},mediaEvents:["medialooprequest"]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i,options:{noVolumePref:a}={}}=t;if(i){try{null==e?nv.localStorage.removeItem("media-chrome-pref-volume"):i.hasAttribute("muted")||a||nv.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){console.debug("Error setting volume pref",e)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let{media:i}=t;if(!i)return;let a=nv.localStorage.getItem("media-chrome-pref-volume");if(null==a)return;sP.mediaVolume.set(+a,t),e(+a)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&r5(e)&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[rJ.LIVE,rJ.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(sC.includes(r))return r===rJ.UNKNOWN?a:r;let n=t.duration;return n===1/0?rJ.LIVE:Number.isFinite(n)?rJ.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return Number.NaN;let{targetLiveWindow:i}=t,a=sP.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===rJ.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(sP.mediaStreamType.get(e)!==rJ.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>sS(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>sI(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:n}=t;if(!r)return;let s=e=>{var i;n.defaultSubtitles&&(e&&![rQ.CAPTIONS,rQ.SUBTITLES].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||sR(t,!0))};return r.addEventListener("loadstart",s),null==(i=r.textTracks)||i.addEventListener("addtrack",s),null==(a=r.textTracks)||a.addEventListener("removetrack",s),()=>{var e,t;r.removeEventListener("loadstart",s),null==(e=r.textTracks)||e.removeEventListener("addtrack",s),null==(t=r.textTracks)||t.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=sn(i,{kind:rQ.CHAPTERS});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:sN(e),startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(!a)return;let r=a.querySelector('track[kind="chapters"][default][src]'),n=null==(i=a.shadowRoot)?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==r||r.addEventListener("load",e),null==n||n.addEventListener("load",e),()=>{null==r||r.removeEventListener("load",e),null==n||n.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return null!=(t=a.localName)&&!!t.includes("-")&&nR(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i){if(e){if(!nE.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else nE.pictureInPictureElement&&nE.exitPictureInPicture()}},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions)){console.warn("MediaController: Rendition selection not supported by this media.");return}let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks)){console.warn("MediaChrome: Audio track selection not supported by this media.");return}for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>sh(e),set(e,t,i){var a,r;e?(so(t),!i.detail||(null==(a=t.media)?void 0:a.inert)||null==(r=t.media)||r.focus()):sd(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return null!=i&&!!i.remote&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&!!i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&nv.WebKitPlaybackTargetAvailabilityEvent)){console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!sT||!sy(t))return rX.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;return sA&&s_(t)?(null==t?void 0:t.disablePictureInPicture)?rX.UNAVAILABLE:void 0:rX.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===n||(null==t?void 0:t.volume)==void 0)return rX.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{null==n&&sM.then(t=>e(t?void 0:rX.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return sw&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?rX.UNAVAILABLE:void 0:rX.UNSUPPORTED},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>sk?(null==t?void 0:t.availability)==="not-available"?rX.UNAVAILABLE:void 0:rX.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:rX.UNAVAILABLE:rX.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?rX.UNAVAILABLE:void 0:rX.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(e){let{options:{mediaLang:t}={}}=e;return null!=t?t:"en"}}},sU={[rV.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;let s,o;let{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=sn(l,{kind:rQ.METADATA,label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)?void 0:null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),s=i.href}}let u=e.mediaDuration.get(t),c=null==(n=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:n.text;return null!=i&&null==c&&(c=""),{mediaPreviewTime:d,mediaPreviewImage:s,mediaPreviewCoords:o,mediaPreviewChapter:c}},[rV.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[rV.MEDIA_PLAY_REQUEST](e,t){var i,a,r,n;let s=e.mediaStreamType.get(t)===rJ.LIVE,o=!(null==(i=t.options)?void 0:i.noAutoSeekToLive),l=e.mediaTargetLiveWindow.get(t)>0;if(s&&o&&!l){let i=null==(a=e.mediaSeekable.get(t))?void 0:a[1];if(i){let a=null!=(n=null==(r=t.options)?void 0:r.seekToLiveOffset)?n:0;e.mediaCurrentTime.set(i-a,t)}}e.mediaPaused.set(!1,t)},[rV.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[rV.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[rV.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[rV.MEDIA_LOOP_REQUEST](e,t,{detail:i}){let a=!!i;return e.mediaLoop.set(a,t),{mediaLoop:a}},[rV.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[rV.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[rV.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,r;let n=null==(i=e.mediaSeekable.get(t))?void 0:i[1];if(Number.isNaN(Number(n)))return;let s=null!=(r=null==(a=t.options)?void 0:a.seekToLiveOffset)?r:0;e.mediaCurrentTime.set(n-s,t)},[rV.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,n=sS(t),s=n7(i),o=null==(a=s[0])?void 0:a.language;o&&!r.noSubtitlesLangPref&&nv.localStorage.setItem("media-chrome-pref-subtitles-lang",o),sr(rz.SHOWING,n,s)},[rV.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){let a=sS(t);sr(rz.DISABLED,a,null!=i?i:[])},[rV.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){sR(t,i)},[rV.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[rV.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[rV.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[rV.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[rV.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t,i){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t,i)},[rV.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[rV.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[rV.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[rV.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}},sW=({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=sP,requestMap:r=sU,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{let o;let l=[],d={options:{...n}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),c=e=>{void 0==e||sL(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u)))},h=()=>{c(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},p=async(e,t)=>{var i,r,n,u,p,v,E,b,g,f,y,T,A,k,w,S;let I=!!o;if(o={...d,...null!=o?o:{},...e},I)return;await sO(...Object.values(e));let R=l.length>0&&0===t&&s,L=d.media!==o.media,D=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),C=(null==(n=d.media)?void 0:n.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),M=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(v=o.media)?void 0:v.audioTracks),O=(null==(E=d.media)?void 0:E.remote)!==(null==(b=o.media)?void 0:b.remote),x=d.documentElement!==o.documentElement,N=!!d.media&&(L||R),P=!!(null==(g=d.media)?void 0:g.textTracks)&&(D||R),U=!!(null==(f=d.media)?void 0:f.videoRenditions)&&(C||R),W=!!(null==(y=d.media)?void 0:y.audioTracks)&&(M||R),B=!!(null==(T=d.media)?void 0:T.remote)&&(O||R),H=!!d.documentElement&&(x||R),F=N||P||U||W||B||H,V=0===l.length&&1===t&&s,K=!!o.media&&(L||V),$=!!(null==(A=o.media)?void 0:A.textTracks)&&(D||V),q=!!(null==(k=o.media)?void 0:k.videoRenditions)&&(C||V),Y=!!(null==(w=o.media)?void 0:w.audioTracks)&&(M||V),G=!!(null==(S=o.media)?void 0:S.remote)&&(O||V),j=!!o.documentElement&&(x||V),Q=K||$||q||Y||G||j;if(!(F||Q)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:n=[],remoteEvents:s=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let h;m[e]||(m[e]={});let p=i=>{c({[e]:t(d,i)})};h=m[e].mediaEvents,i.forEach(t=>{h&&N&&(d.media.removeEventListener(t,h),m[e].mediaEvents=void 0),K&&(o.media.addEventListener(t,p),m[e].mediaEvents=p)}),h=m[e].textTracksEvents,a.forEach(t=>{var i,a;h&&P&&(null==(i=d.media.textTracks)||i.removeEventListener(t,h),m[e].textTracksEvents=void 0),$&&(null==(a=o.media.textTracks)||a.addEventListener(t,p),m[e].textTracksEvents=p)}),h=m[e].videoRenditionsEvents,r.forEach(t=>{var i,a;h&&U&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,h),m[e].videoRenditionsEvents=void 0),q&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),h=m[e].audioTracksEvents,n.forEach(t=>{var i,a;h&&W&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,h),m[e].audioTracksEvents=void 0),Y&&(null==(a=o.media.audioTracks)||a.addEventListener(t,p),m[e].audioTracksEvents=p)}),h=m[e].remoteEvents,s.forEach(t=>{var i,a;h&&B&&(null==(i=d.media.remote)||i.removeEventListener(t,h),m[e].remoteEvents=void 0),G&&(null==(a=o.media.remote)||a.addEventListener(t,p),m[e].remoteEvents=p)}),h=m[e].rootEvents,l.forEach(t=>{h&&H&&(d.documentElement.removeEventListener(t,h),m[e].rootEvents=void 0),j&&(o.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let v=m[e].stateOwnersUpdateHandlers;if(v&&F&&(Array.isArray(v)?v:[v]).forEach(e=>{"function"==typeof e&&e()}),Q){let t=u.map(e=>e(p,o)).filter(e=>"function"==typeof e);m[e].stateOwnersUpdateHandlers=1===t.length?t[0]:t}else F&&(m[e].stateOwnersUpdateHandlers=void 0)}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(e){let{type:t,detail:i}=e;if(r[t]&&null==u.mediaErrorCode){c(r[t](a,d,e));return}"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&(Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t}),h())},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}};var sB=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sH=(e,t,i)=>(sB(e,t,"read from private field"),i?i.call(e):t.get(e)),sF=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sV=(e,t,i,a)=>(sB(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),sK=(e,t,i)=>(sB(e,t,"access private method"),i);let s$=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],sq={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_DOWN_VOLUME_STEP:"keyboarddownvolumestep",KEYBOARD_UP_VOLUME_STEP:"keyboardupvolumestep",KEYS_USED:"keysused",LANG:"lang",LOOP:"loop",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_DEFAULT_STORE:"nodefaultstore",NO_HOTKEYS:"nohotkeys",NO_MUTED_PREF:"nomutedpref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_VOLUME_PREF:"novolumepref",SEEK_TO_LIVE_OFFSET:"seektoliveoffset"};class sY extends n0{constructor(){super(),sF(this,c3),sF(this,c9),sF(this,c6),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,sF(this,cQ,new n5(this,sq.HOTKEYS)),sF(this,cz,void 0),sF(this,cZ,void 0),sF(this,cX,null),sF(this,cJ,void 0),sF(this,c0,void 0),sF(this,c1,e=>{var t;null==(t=sH(this,cZ))||t.dispatch(e)}),sF(this,c2,void 0),sF(this,c5,e=>{let{key:t,shiftKey:i}=e;if(!(i&&("/"===t||"?"===t)||s$.includes(t))){this.removeEventListener("keyup",sH(this,c5));return}this.keyboardShortcutHandler(e)}),this.associateElement(this);let e={};sV(this,cJ,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new nv.CustomEvent(rj[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t})}static get observedAttributes(){return super.observedAttributes.concat(sq.NO_HOTKEYS,sq.HOTKEYS,sq.DEFAULT_STREAM_TYPE,sq.DEFAULT_SUBTITLES,sq.DEFAULT_DURATION,sq.NO_MUTED_PREF,sq.NO_VOLUME_PREF,sq.LANG,sq.LOOP,sq.LIVE_EDGE_OFFSET,sq.SEEK_TO_LIVE_OFFSET,sq.NO_AUTO_SEEK_TO_LIVE)}get mediaStore(){return sH(this,cZ)}set mediaStore(e){var t,i;if(sH(this,cZ)&&(null==(t=sH(this,c0))||t.call(this),sV(this,c0,void 0)),sV(this,cZ,e),!sH(this,cZ)&&!this.hasAttribute(sq.NO_DEFAULT_STORE)){sK(this,c3,c4).call(this);return}sV(this,c0,null==(i=sH(this,cZ))?void 0:i.subscribe(sH(this,cJ)))}get fullscreenElement(){var e;return null!=(e=sH(this,cz))?e:this}set fullscreenElement(e){var t;this.hasAttribute(sq.FULLSCREEN_ELEMENT)&&this.removeAttribute(sq.FULLSCREEN_ELEMENT),sV(this,cz,e),null==(t=sH(this,cZ))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return nU(this,sq.DEFAULT_SUBTITLES)}set defaultSubtitles(e){nW(this,sq.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return nB(this,sq.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){nH(this,sq.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return nN(this,sq.DEFAULT_DURATION)}set defaultDuration(e){nP(this,sq.DEFAULT_DURATION,e)}get noHotkeys(){return nU(this,sq.NO_HOTKEYS)}set noHotkeys(e){nW(this,sq.NO_HOTKEYS,e)}get keysUsed(){return nB(this,sq.KEYS_USED)}set keysUsed(e){nH(this,sq.KEYS_USED,e)}get liveEdgeOffset(){return nN(this,sq.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){nP(this,sq.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return nU(this,sq.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){nW(this,sq.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return nU(this,sq.NO_VOLUME_PREF)}set noVolumePref(e){nW(this,sq.NO_VOLUME_PREF,e)}get noMutedPref(){return nU(this,sq.NO_MUTED_PREF)}set noMutedPref(e){nW(this,sq.NO_MUTED_PREF,e)}get noSubtitlesLangPref(){return nU(this,sq.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){nW(this,sq.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return nU(this,sq.NO_DEFAULT_STORE)}set noDefaultStore(e){nW(this,sq.NO_DEFAULT_STORE,e)}attributeChangedCallback(e,t,i){var a,r,n,s,o,l,d,u,c,h,m,p;if(super.attributeChangedCallback(e,t,i),e===sq.NO_HOTKEYS)i!==t&&""===i?(this.hasAttribute(sq.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys();else if(e===sq.HOTKEYS)sH(this,cQ).value=i;else if(e===sq.DEFAULT_SUBTITLES&&i!==t)null==(a=sH(this,cZ))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(sq.DEFAULT_SUBTITLES)}});else if(e===sq.DEFAULT_STREAM_TYPE)null==(n=sH(this,cZ))||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(sq.DEFAULT_STREAM_TYPE))?r:void 0}});else if(e===sq.LIVE_EDGE_OFFSET&&i!==t)null==(s=sH(this,cZ))||s.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(sq.LIVE_EDGE_OFFSET)?+this.getAttribute(sq.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(sq.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(sq.SEEK_TO_LIVE_OFFSET):this.hasAttribute(sq.LIVE_EDGE_OFFSET)?+this.getAttribute(sq.LIVE_EDGE_OFFSET):void 0}});else if(e===sq.SEEK_TO_LIVE_OFFSET&&i!==t)null==(o=sH(this,cZ))||o.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(sq.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(sq.SEEK_TO_LIVE_OFFSET):this.hasAttribute(sq.LIVE_EDGE_OFFSET)?+this.getAttribute(sq.LIVE_EDGE_OFFSET):void 0}});else if(e===sq.NO_AUTO_SEEK_TO_LIVE)null==(l=sH(this,cZ))||l.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(sq.NO_AUTO_SEEK_TO_LIVE)}});else if(e===sq.FULLSCREEN_ELEMENT){let e=i?null==(d=this.getRootNode())?void 0:d.getElementById(i):void 0;sV(this,cz,e),null==(u=sH(this,cZ))||u.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===sq.LANG&&i!==t?(ne(i),null==(c=sH(this,cZ))||c.dispatch({type:"optionschangerequest",detail:{mediaLang:i}})):e===sq.LOOP&&i!==t?null==(h=sH(this,cZ))||h.dispatch({type:rV.MEDIA_LOOP_REQUEST,detail:null!=i}):e===sq.NO_VOLUME_PREF&&i!==t?null==(m=sH(this,cZ))||m.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(sq.NO_VOLUME_PREF)}}):e===sq.NO_MUTED_PREF&&i!==t&&(null==(p=sH(this,cZ))||p.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(sq.NO_MUTED_PREF)}}))}connectedCallback(){var e,t,i;this.associateElement(this),sH(this,cZ)||this.hasAttribute(sq.NO_DEFAULT_STORE)||sK(this,c3,c4).call(this),null==(e=sH(this,cZ))||e.dispatch({type:"documentelementchangerequest",detail:nE}),null==(t=sH(this,cZ))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement}),super.connectedCallback(),sH(this,cZ)&&!sH(this,c0)&&sV(this,c0,null==(i=sH(this,cZ))?void 0:i.subscribe(sH(this,cJ))),void 0!==sH(this,c2)&&sH(this,cZ)&&this.media&&setTimeout(()=>{var e,t,i;(null==(t=null==(e=this.media)?void 0:e.textTracks)?void 0:t.length)&&(null==(i=sH(this,cZ))||i.dispatch({type:rV.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:sH(this,c2)}))},0),this.hasAttribute(sq.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,t,i,a,r,n;if(null==(e=super.disconnectedCallback)||e.call(this),this.disableHotkeys(),sH(this,cZ)){let e=sH(this,cZ).getState();sV(this,c2,!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)),null==(i=sH(this,cZ))||i.dispatch({type:"fullscreenelementchangerequest",detail:void 0}),null==(a=sH(this,cZ))||a.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(r=sH(this,cZ))||r.dispatch({type:rV.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}sH(this,c0)&&(null==(n=sH(this,c0))||n.call(this),sV(this,c0,void 0)),this.unassociateElement(this),sH(this,cX)&&(sH(this,cX).remove(),sV(this,cX,null))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=sH(this,cZ))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=sH(this,cZ))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){s3(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=s4(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(rV).forEach(t=>{e.addEventListener(t,sH(this,c1))}),t.set(e,i)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(rV).forEach(t=>{e.removeEventListener(t,sH(this,c1))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),sH(this,cZ)&&Object.entries(sH(this,cZ).getState()).forEach(([t,i])=>{s3([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",sK(this,c9,c8))}disableHotkeys(){this.removeEventListener("keydown",sK(this,c9,c8)),this.removeEventListener("keyup",sH(this,c5))}get hotkeys(){return sH(this,cQ)}set hotkeys(e){nH(this,sq.HOTKEYS,e)}keyboardShortcutHandler(e){var t,i,a,r,n,s,o,l,d;let u,c,h;let m=e.target;if(!((null!=(a=null!=(i=null==(t=m.getAttribute(sq.KEYS_USED))?void 0:t.split(" "))?i:null==m?void 0:m.keysUsed)?a:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||sH(this,cQ).contains(`no${e.key.toLowerCase()}`)||" "===e.key&&sH(this,cQ).contains("nospace"))&&!(e.shiftKey&&("/"===e.key||"?"===e.key)&&sH(this,cQ).contains("noshift+/")))switch(e.key){case" ":case"k":u=sH(this,cZ).getState().mediaPaused?rV.MEDIA_PLAY_REQUEST:rV.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new nv.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"m":u="off"===this.mediaStore.getState().mediaVolumeLevel?rV.MEDIA_UNMUTE_REQUEST:rV.MEDIA_MUTE_REQUEST,this.dispatchEvent(new nv.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"f":u=this.mediaStore.getState().mediaIsFullscreen?rV.MEDIA_EXIT_FULLSCREEN_REQUEST:rV.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new nv.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new nv.CustomEvent(rV.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{let e=this.hasAttribute(sq.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(sq.KEYBOARD_BACKWARD_SEEK_OFFSET):10;c=Math.max((null!=(r=this.mediaStore.getState().mediaCurrentTime)?r:0)-e,0),h=new nv.CustomEvent(rV.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowRight":case"l":{let e=this.hasAttribute(sq.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(sq.KEYBOARD_FORWARD_SEEK_OFFSET):10;c=Math.max((null!=(n=this.mediaStore.getState().mediaCurrentTime)?n:0)+e,0),h=new nv.CustomEvent(rV.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowUp":{let e=this.hasAttribute(sq.KEYBOARD_UP_VOLUME_STEP)?+this.getAttribute(sq.KEYBOARD_UP_VOLUME_STEP):.025;c=Math.min((null!=(s=this.mediaStore.getState().mediaVolume)?s:1)+e,1),h=new nv.CustomEvent(rV.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowDown":{let e=this.hasAttribute(sq.KEYBOARD_DOWN_VOLUME_STEP)?+this.getAttribute(sq.KEYBOARD_DOWN_VOLUME_STEP):.025;c=Math.max((null!=(o=this.mediaStore.getState().mediaVolume)?o:1)-e,0),h=new nv.CustomEvent(rV.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"<":c=Math.max((null!=(l=this.mediaStore.getState().mediaPlaybackRate)?l:1)-.25,.25).toFixed(2),h=new nv.CustomEvent(rV.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break;case">":c=Math.min((null!=(d=this.mediaStore.getState().mediaPlaybackRate)?d:1)+.25,2).toFixed(2),h=new nv.CustomEvent(rV.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break;case"/":case"?":e.shiftKey&&sK(this,c6,c7).call(this);break;case"p":u=this.mediaStore.getState().mediaIsPip?rV.MEDIA_EXIT_PIP_REQUEST:rV.MEDIA_ENTER_PIP_REQUEST,h=new nv.CustomEvent(u,{composed:!0,bubbles:!0}),this.dispatchEvent(h)}}}cQ=new WeakMap,cz=new WeakMap,cZ=new WeakMap,cX=new WeakMap,cJ=new WeakMap,c0=new WeakMap,c1=new WeakMap,c2=new WeakMap,c3=new WeakSet,c4=function(){var e;this.mediaStore=sW({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(sq.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(sq.DEFAULT_DURATION)?+this.getAttribute(sq.DEFAULT_DURATION):void 0,defaultStreamType:null!=(e=this.getAttribute(sq.DEFAULT_STREAM_TYPE))?e:void 0,liveEdgeOffset:this.hasAttribute(sq.LIVE_EDGE_OFFSET)?+this.getAttribute(sq.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(sq.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(sq.SEEK_TO_LIVE_OFFSET):this.hasAttribute(sq.LIVE_EDGE_OFFSET)?+this.getAttribute(sq.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(sq.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(sq.NO_VOLUME_PREF),noMutedPref:this.hasAttribute(sq.NO_MUTED_PREF),noSubtitlesLangPref:this.hasAttribute(sq.NO_SUBTITLES_LANG_PREF)}})},c5=new WeakMap,c9=new WeakSet,c8=function(e){var t;let{metaKey:i,altKey:a,key:r,shiftKey:n}=e,s=n&&("/"===r||"?"===r);if(s&&(null==(t=sH(this,cX))?void 0:t.open)||i||a||!s&&!s$.includes(r)){this.removeEventListener("keyup",sH(this,c5));return}let o=e.target,l=o instanceof HTMLElement&&("media-volume-range"===o.tagName.toLowerCase()||"media-time-range"===o.tagName.toLowerCase());![" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)||sH(this,cQ).contains(`no${r.toLowerCase()}`)||" "===r&&sH(this,cQ).contains("nospace")||l||e.preventDefault(),this.addEventListener("keyup",sH(this,c5),{once:!0})},c6=new WeakSet,c7=function(){sH(this,cX)||(sV(this,cX,nE.createElement("media-keyboard-shortcuts-dialog")),this.appendChild(sH(this,cX))),sH(this,cX).open=!0};let sG=Object.values(rY),sj=Object.values(r$),sQ=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(nv.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let s=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,rK.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(e=>sG.includes(e)):[]},sz=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&nv.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof nv.customElements.get(e.nodeName.toLowerCase()))&&nv.customElements.upgrade(e),sj.some(t=>t in e)},sZ=e=>sz(e)||!!sQ(e).length,sX=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},sJ={[rY.MEDIA_SUBTITLES_LIST]:st,[rY.MEDIA_SUBTITLES_SHOWING]:st,[rY.MEDIA_SEEKABLE]:sX,[rY.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(sX).join(" "),[rY.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[rY.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(r1).join(" ")},[rY.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(r3).join(" ")}},s0=async(e,t,i)=>{var a,r;if(e.isConnected||await r8(0),"boolean"==typeof i||null==i)return nW(e,t,i);if("number"==typeof i)return nP(e,t,i);if("string"==typeof i)return nH(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let n=null!=(r=null==(a=sJ[t])?void 0:a.call(sJ,i))?r:i;return e.setAttribute(t,n)},s1=e=>{var t;return!!(null==(t=e.closest)?void 0:t.call(e,'*[slot="media"]'))},s2=(e,t)=>{if(s1(e))return;let i=(e,t)=>{var i,a;sZ(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>s2(e,t))},a=null==e?void 0:e.nodeName.toLowerCase();if(a.includes("-")&&!sZ(e)){nv.customElements.whenDefined(a).then(()=>{i(e,t)});return}i(e,t)},s3=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=sQ(e),r=t.toLowerCase();a.includes(r)&&s0(e,r,i)})},s4=(e,t,i)=>{s2(e,t);let a=e=>{var i;t(null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target)},r=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(rV.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(rV.UNREGISTER_MEDIA_STATE_RECEIVER,r);let n=[],s=e=>{let a=e.target;"media"!==a.name&&(n.forEach(e=>s2(e,i)),(n=[...a.assignedElements({flatten:!0})]).forEach(e=>s2(e,t)))};e.addEventListener("slotchange",s);let o=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:r=[],type:n,target:s,attributeName:o}=e;"childList"===n?(Array.prototype.forEach.call(a,e=>s2(e,t)),Array.prototype.forEach.call(r,e=>s2(e,i))):"attributes"===n&&o===rK.MEDIA_CHROME_ATTRIBUTES&&(sZ(s)?t(s):i(s))})});return o.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{s2(e,i),e.removeEventListener("slotchange",s),o.disconnect(),e.removeEventListener(rV.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(rV.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};nv.customElements.get("media-controller")||nv.customElements.define("media-controller",sY);let s5="placement",s9="bounds";class s8 extends nv.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!nM(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let t=this.placement;if("left"===t||"right"===t){this.style.removeProperty("--media-tooltip-offset-x");return}let i=getComputedStyle(this),a=null!=(e=nL(this,"#"+this.bounds))?e:nA(this);if(!a)return;let{x:r,width:n}=a.getBoundingClientRect(),{x:s,width:o}=this.getBoundingClientRect(),l=i.getPropertyValue("--media-tooltip-offset-x"),d=l?parseFloat(l.replace("px","")):0,u=i.getPropertyValue("--media-tooltip-container-margin"),c=u?parseFloat(u.replace("px","")):0,h=s-r+d-c,m=s+o-(r+n)+d+c;if(h<0){this.style.setProperty("--media-tooltip-offset-x",`${h}px`);return}if(m>0){this.style.setProperty("--media-tooltip-offset-x",`${m}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nT(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){let e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[s5,s9]}get placement(){return nB(this,s5)}set placement(e){nH(this,s5,e)}get bounds(){return nB(this,s9)}set bounds(e){nH(this,s9,e)}}s8.shadowRootOptions={mode:"open"},s8.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `},nv.customElements.get("media-tooltip")||nv.customElements.define("media-tooltip",s8);var s6=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},s7=(e,t,i)=>(s6(e,t,"read from private field"),i?i.call(e):t.get(e)),oe=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ot=(e,t,i,a)=>(s6(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),oi=(e,t,i)=>(s6(e,t,"access private method"),i);let oa={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};class or extends nv.HTMLElement{constructor(){if(super(),oe(this,hn),oe(this,he,void 0),this.preventClick=!1,this.tooltipEl=null,oe(this,ht,e=>{this.preventClick||this.handleClick(e),setTimeout(s7(this,hi),0)}),oe(this,hi,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),oe(this,ha,e=>{let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",s7(this,ha));return}this.preventClick||this.handleClick(e)}),oe(this,hr,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",s7(this,ha));return}this.addEventListener("keyup",s7(this,ha),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nT(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",oa.TOOLTIP_PLACEMENT,rK.MEDIA_CONTROLLER,rY.MEDIA_LANG]}enable(){this.addEventListener("click",s7(this,ht)),this.addEventListener("keydown",s7(this,hr)),this.tabIndex=0}disable(){this.removeEventListener("click",s7(this,ht)),this.removeEventListener("keydown",s7(this,hr)),this.removeEventListener("keyup",s7(this,ha)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===rK.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=s7(this,he))?void 0:a.unassociateElement)||r.call(a,this),ot(this,he,null)),i&&this.isConnected&&(ot(this,he,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=s7(this,he))?void 0:s.associateElement)||o.call(s,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===oa.TOOLTIP_PLACEMENT&&this.tooltipEl&&i!==t?this.tooltipEl.placement=i:e===rY.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),s7(this,hi).call(this)}connectedCallback(){var e,t,i;let{style:a}=nO(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let r=this.getAttribute(rK.MEDIA_CONTROLLER);r&&(ot(this,he,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=s7(this,he))?void 0:t.associateElement)||i.call(t,this)),nv.customElements.whenDefined("media-tooltip").then(()=>oi(this,hn,hs).call(this))}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=s7(this,he))?void 0:e.unassociateElement)||t.call(e,this),ot(this,he,null),this.removeEventListener("mouseenter",s7(this,hi)),this.removeEventListener("focus",s7(this,hi)),this.removeEventListener("click",s7(this,ht))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return nB(this,oa.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){nH(this,oa.TOOLTIP_PLACEMENT,e)}get mediaController(){return nB(this,rK.MEDIA_CONTROLLER)}set mediaController(e){nH(this,rK.MEDIA_CONTROLLER,e)}get disabled(){return nU(this,oa.DISABLED)}set disabled(e){nW(this,oa.DISABLED,e)}get noTooltip(){return nU(this,oa.NO_TOOLTIP)}set noTooltip(e){nW(this,oa.NO_TOOLTIP,e)}handleClick(e){}}he=new WeakMap,ht=new WeakMap,hi=new WeakMap,ha=new WeakMap,hr=new WeakMap,hn=new WeakSet,hs=function(){this.addEventListener("mouseenter",s7(this,hi)),this.addEventListener("focus",s7(this,hi)),this.addEventListener("click",s7(this,ht));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},or.shadowRootOptions={mode:"open"},or.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${s8.shadowRootOptions.mode}">
          ${s8.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `},or.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},or.getTooltipContentHTML=function(){return""},nv.customElements.get("media-chrome-button")||nv.customElements.define("media-chrome-button",or);let on=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,os=e=>{let t=e.mediaIsAirplaying?ni("stop airplay"):ni("start airplay");e.setAttribute("aria-label",t)};class oo extends or{static get observedAttributes(){return[...super.observedAttributes,rY.MEDIA_IS_AIRPLAYING,rY.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),os(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rY.MEDIA_IS_AIRPLAYING&&os(this)}get mediaIsAirplaying(){return nU(this,rY.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){nW(this,rY.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return nB(this,rY.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){nH(this,rY.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new nv.CustomEvent(rV.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}oo.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${rY.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${rY.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${rY.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${rY.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${on}</slot>
      <slot name="exit">${on}</slot>
    </slot>
  `},oo.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${ni("start airplay")}</slot>
    <slot name="tooltip-exit">${ni("stop airplay")}</slot>
  `},nv.customElements.get("media-airplay-button")||nv.customElements.define("media-airplay-button",oo);let ol=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,od=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,ou=e=>{e.setAttribute("aria-checked",ss(e).toString())};class oc extends or{static get observedAttributes(){return[...super.observedAttributes,rY.MEDIA_SUBTITLES_LIST,rY.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","button"),this.setAttribute("aria-label",ni("closed captions")),ou(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rY.MEDIA_SUBTITLES_SHOWING&&ou(this)}get mediaSubtitlesList(){return oh(this,rY.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){om(this,rY.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return oh(this,rY.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){om(this,rY.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new nv.CustomEvent(rV.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}oc.getSlotTemplateHTML=function(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${ol}</slot>
      <slot name="off">${od}</slot>
    </slot>
  `},oc.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${ni("Enable captions")}</slot>
    <slot name="tooltip-disable">${ni("Disable captions")}</slot>
  `};let oh=(e,t)=>{let i=e.getAttribute(t);return i?n6(i):[]},om=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=st(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};nv.customElements.get("media-captions-button")||nv.customElements.define("media-captions-button",oc);let op=e=>{let t=e.mediaIsCasting?ni("stop casting"):ni("start casting");e.setAttribute("aria-label",t)};class ov extends or{static get observedAttributes(){return[...super.observedAttributes,rY.MEDIA_IS_CASTING,rY.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),op(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rY.MEDIA_IS_CASTING&&op(this)}get mediaIsCasting(){return nU(this,rY.MEDIA_IS_CASTING)}set mediaIsCasting(e){nW(this,rY.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return nB(this,rY.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){nH(this,rY.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?rV.MEDIA_EXIT_CAST_REQUEST:rV.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new nv.CustomEvent(e,{composed:!0,bubbles:!0}))}}ov.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${rY.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${rY.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${rY.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${rY.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},ov.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${ni("Start casting")}</slot>
    <slot name="tooltip-exit">${ni("Stop casting")}</slot>
  `},nv.customElements.get("media-cast-button")||nv.customElements.define("media-cast-button",ov);var oE=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ob=(e,t,i)=>(oE(e,t,"read from private field"),i?i.call(e):t.get(e)),og=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},of=(e,t,i,a)=>(oE(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),o_=(e,t,i)=>(oE(e,t,"access private method"),i);let oy="open";class oT extends nv.HTMLElement{constructor(){super(),og(this,hu),og(this,hh),og(this,hp),og(this,hE),og(this,hg),og(this,h_),og(this,ho,!1),og(this,hl,null),og(this,hd,null)}static get observedAttributes(){return[oy,"anchor"]}get open(){return nU(this,oy)}set open(e){nW(this,oy,e)}handleEvent(e){switch(e.type){case"invoke":o_(this,hE,hb).call(this,e);break;case"focusout":o_(this,hg,hf).call(this,e);break;case"keydown":o_(this,h_,hy).call(this,e)}}connectedCallback(){o_(this,hu,hc).call(this),this.role||(this.role="dialog"),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}disconnectedCallback(){this.removeEventListener("invoke",this),this.removeEventListener("focusout",this),this.removeEventListener("keydown",this)}attributeChangedCallback(e,t,i){o_(this,hu,hc).call(this),e===oy&&i!==t&&(this.open?o_(this,hh,hm).call(this):o_(this,hp,hv).call(this))}focus(){of(this,hl,nD());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;let i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==i||i.focus()}get keysUsed(){return["Escape","Tab"]}}ho=new WeakMap,hl=new WeakMap,hd=new WeakMap,hu=new WeakSet,hc=function(){if(!ob(this,ho)&&(of(this,ho,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let e=nT(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{let{style:e}=nO(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},hh=new WeakSet,hm=function(){var e;null==(e=ob(this,hd))||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},hp=new WeakSet,hv=function(){var e;null==(e=ob(this,hd))||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},hE=new WeakSet,hb=function(e){of(this,hd,e.relatedTarget),nR(this,e.relatedTarget)||(this.open=!this.open)},hg=new WeakSet,hf=function(e){var t;!nR(this,e.relatedTarget)&&(null==(t=ob(this,hl))||t.focus(),ob(this,hd)&&ob(this,hd)!==e.relatedTarget&&this.open&&(this.open=!1))},h_=new WeakSet,hy=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;!o&&!l&&!d&&this.keysUsed.includes(s)&&(e.preventDefault(),e.stopPropagation(),"Tab"===s?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===s&&(null==(n=ob(this,hl))||n.focus(),this.open=!1))},oT.shadowRootOptions={mode:"open"},oT.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `},oT.getSlotTemplateHTML=function(e){return`
    <slot id="content"></slot>
  `},nv.customElements.get("media-chrome-dialog")||nv.customElements.define("media-chrome-dialog",oT);var oA=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ok=(e,t,i)=>(oA(e,t,"read from private field"),i?i.call(e):t.get(e)),ow=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oS=(e,t,i,a)=>(oA(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),oI=(e,t,i)=>(oA(e,t,"access private method"),i);class oR extends nv.HTMLElement{constructor(){if(super(),ow(this,hC),ow(this,hO),ow(this,hN),ow(this,hU),ow(this,hB),ow(this,hF),ow(this,hK),ow(this,hq),ow(this,hT,void 0),ow(this,hA,void 0),ow(this,hk,void 0),ow(this,hw,void 0),ow(this,hS,{}),ow(this,hI,[]),ow(this,hR,()=>{if(this.range.matches(":focus-visible")){let{style:e}=nO(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),ow(this,hL,()=>{let{style:e}=nO(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),ow(this,hD,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nT(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),oS(this,hk,this.shadowRoot.querySelector("#startpoint")),oS(this,hw,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",rK.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===rK.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=ok(this,hT))?void 0:a.unassociateElement)||r.call(a,this),oS(this,hT,null)),i&&this.isConnected&&(oS(this,hT,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=ok(this,hT))?void 0:s.associateElement)||o.call(s,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),oI(this,hO,hx).call(this)):(this.range.setAttribute(e,i),oI(this,hN,hP).call(this)))}connectedCallback(){var e,t,i;let{style:a}=nO(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),ok(this,hS).pointer=nO(this.shadowRoot,"#pointer"),ok(this,hS).progress=nO(this.shadowRoot,"#progress"),ok(this,hS).thumb=nO(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),ok(this,hS).activeSegment=nO(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let r=this.getAttribute(rK.MEDIA_CONTROLLER);r&&(oS(this,hT,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=ok(this,hT))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",ok(this,hR)),this.shadowRoot.addEventListener("focusout",ok(this,hL)),oI(this,hO,hx).call(this),n_(this.container,ok(this,hD))}disconnectedCallback(){var e,t;oI(this,hN,hP).call(this),null==(t=null==(e=ok(this,hT))?void 0:e.unassociateElement)||t.call(e,this),oS(this,hT,null),this.shadowRoot.removeEventListener("focusin",ok(this,hR)),this.shadowRoot.removeEventListener("focusout",ok(this,hL)),ny(this.container,ok(this,hD))}updatePointerBar(e){var t;null==(t=ok(this,hS).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=ok(this,hS).progress)||e.style.setProperty("width",`${i}%`),null==(t=ok(this,hS).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];oS(this,hI,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[n,s]=[0===e,e===i.length-1],o=n?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=s?a:i[e+1],d=`calc(${(l-r)*100}%${n||s?"":" - var(--segments-gap)"})`,u=nE.createElementNS("http://www.w3.org/2000/svg","rect"),c=nx(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);c.style.setProperty("x",o),c.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){return function(e,t,i,a){let r=a.x-i.x,n=a.y-i.y,s=r*r+n*n;return 0===s?0:Math.max(0,Math.min(1,((e-i.x)*r+(t-i.y)*n)/s))}(e.clientX,e.clientY,ok(this,hk).getBoundingClientRect(),ok(this,hw).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":oI(this,hq,hY).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":oI(this,hB,hH).call(this,e);break;case"pointerdown":oI(this,hU,hW).call(this,e);break;case"pointerup":oI(this,hF,hV).call(this);break;case"pointerleave":oI(this,hK,h$).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}hT=new WeakMap,hA=new WeakMap,hk=new WeakMap,hw=new WeakMap,hS=new WeakMap,hI=new WeakMap,hR=new WeakMap,hL=new WeakMap,hD=new WeakMap,hC=new WeakSet,hM=function(e){let t=ok(this,hS).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=ok(this,hI).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},hO=new WeakSet,hx=function(){!this.hasAttribute("disabled")&&this.isConnected&&(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},hN=new WeakSet,hP=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),this.removeEventListener("pointerleave",this),null==(e=nv.window)||e.removeEventListener("pointerup",this),null==(t=nv.window)||t.removeEventListener("pointermove",this)},hU=new WeakSet,hW=function(e){var t;oS(this,hA,e.composedPath().includes(this.range)),null==(t=nv.window)||t.addEventListener("pointerup",this,{once:!0})},hB=new WeakSet,hH=function(e){var t;"mouse"!==e.pointerType&&oI(this,hU,hW).call(this,e),this.addEventListener("pointerleave",this,{once:!0}),null==(t=nv.window)||t.addEventListener("pointermove",this)},hF=new WeakSet,hV=function(){var e;null==(e=nv.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},hK=new WeakSet,h$=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=nv.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=ok(this,hS).activeSegment)||t.style.removeProperty("transform")},hq=new WeakSet,hY=function(e){("pen"!==e.pointerType||0!==e.buttons)&&(this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),oI(this,hC,hM).call(this,e),this.dragging&&("mouse"!==e.pointerType||!ok(this,hA))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))},oR.shadowRootOptions={mode:"open"},oR.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }

      /* Visible label for accessibility - positioned off-screen but technically visible (Firefox requires visible labels) */
      #range-label {
        position: absolute;
        left: -10000px;
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        pointer-events: none;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments" aria-hidden="true"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
        <input id="range" type="range" min="0" max="1" step="any" value="0">
        <label for="range" id="range-label"></label>

      ${this.getContainerTemplateHTML(e)}
    </div>
    <div id="rightgap"></div>
  `},oR.getContainerTemplateHTML=function(e){return""},nv.customElements.get("media-chrome-range")||nv.customElements.define("media-chrome-range",oR);var oL=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oD=(e,t,i)=>(oL(e,t,"read from private field"),i?i.call(e):t.get(e)),oC=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oM=(e,t,i,a)=>(oL(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class oO extends nv.HTMLElement{constructor(){if(super(),oC(this,hG,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nT(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rK.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===rK.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=oD(this,hG))?void 0:a.unassociateElement)||r.call(a,this),oM(this,hG,null)),i&&this.isConnected&&(oM(this,hG,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=oD(this,hG))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(rK.MEDIA_CONTROLLER);a&&(oM(this,hG,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=oD(this,hG))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=oD(this,hG))?void 0:e.unassociateElement)||t.call(e,this),oM(this,hG,null)}}hG=new WeakMap,oO.shadowRootOptions={mode:"open"},oO.getTemplateHTML=function(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `},nv.customElements.get("media-control-bar")||nv.customElements.define("media-control-bar",oO);var ox=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oN=(e,t,i)=>(ox(e,t,"read from private field"),i?i.call(e):t.get(e)),oP=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oU=(e,t,i,a)=>(ox(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class oW extends nv.HTMLElement{constructor(){if(super(),oP(this,hj,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nT(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rK.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===rK.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=oN(this,hj))?void 0:a.unassociateElement)||r.call(a,this),oU(this,hj,null)),i&&this.isConnected&&(oU(this,hj,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=oN(this,hj))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let{style:a}=nO(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(rK.MEDIA_CONTROLLER);r&&(oU(this,hj,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=oN(this,hj))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=oN(this,hj))?void 0:e.unassociateElement)||t.call(e,this),oU(this,hj,null)}}hj=new WeakMap,oW.shadowRootOptions={mode:"open"},oW.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `},oW.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},nv.customElements.get("media-text-display")||nv.customElements.define("media-text-display",oW);var oB=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oH=(e,t,i)=>(oB(e,t,"read from private field"),i?i.call(e):t.get(e)),oF=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oV=(e,t,i,a)=>(oB(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class oK extends oW{constructor(){var e;super(),oF(this,hQ,void 0),oV(this,hQ,this.shadowRoot.querySelector("slot")),oH(this,hQ).textContent=ns(null!=(e=this.mediaDuration)?e:0)}static get observedAttributes(){return[...super.observedAttributes,rY.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===rY.MEDIA_DURATION&&(oH(this,hQ).textContent=ns(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return nN(this,rY.MEDIA_DURATION)}set mediaDuration(e){nP(this,rY.MEDIA_DURATION,e)}}hQ=new WeakMap,oK.getSlotTemplateHTML=function(e,t){return`
    <slot>${ns(t.mediaDuration)}</slot>
  `},nv.customElements.get("media-duration-display")||nv.customElements.define("media-duration-display",oK);let o$={2:ni("Network Error"),3:ni("Decode Error"),4:ni("Source Not Supported"),5:ni("Encryption Error")},oq={2:ni("A network error caused the media download to fail."),3:ni("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:ni("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:ni("The media is encrypted and there are no keys to decrypt it.")},oY=e=>{var t,i;return 1===e.code?null:{title:null!=(t=o$[e.code])?t:`Error ${e.code}`,message:null!=(i=oq[e.code])?i:e.message}};var oG=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oj=(e,t,i)=>(oG(e,t,"read from private field"),i?i.call(e):t.get(e)),oQ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oz=(e,t,i,a)=>(oG(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);function oZ(e){var t;let{title:i,message:a}=null!=(t=oY(e))?t:{},r="";return i&&(r+=`<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${e.code}-message"><p>${a}</p></slot>`),r}let oX=[rY.MEDIA_ERROR_CODE,rY.MEDIA_ERROR_MESSAGE];class oJ extends oT{constructor(){super(...arguments),oQ(this,hz,null)}static get observedAttributes(){return[...super.observedAttributes,...oX]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!oX.includes(e))return;let r=null!=(a=this.mediaError)?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};if(this.open=r.code&&null!==oY(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r),!this.hasAttribute("aria-label"))){let{title:e}=oY(r);e&&this.setAttribute("aria-label",e)}}get mediaError(){return oj(this,hz)}set mediaError(e){oz(this,hz,e)}get mediaErrorCode(){return nN(this,"mediaerrorcode")}set mediaErrorCode(e){nP(this,"mediaerrorcode",e)}get mediaErrorMessage(){return nB(this,"mediaerrormessage")}set mediaErrorMessage(e){nH(this,"mediaerrormessage",e)}}hz=new WeakMap,oJ.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${oZ({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `},oJ.formatErrorMessage=oZ,nv.customElements.get("media-error-dialog")||nv.customElements.define("media-error-dialog",oJ);var o0=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},o1=(e,t,i)=>(o0(e,t,"read from private field"),i?i.call(e):t.get(e)),o2=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};class o3 extends oT{constructor(){super(...arguments),o2(this,hZ,e=>{var t;if(!this.open)return;let i=null==(t=this.shadowRoot)?void 0:t.querySelector("#content");if(!i)return;let a=e.composedPath(),r=a[0]===this||a.includes(this),n=a.includes(i);r&&!n&&(this.open=!1)}),o2(this,hX,e=>{if(!this.open)return;let t=e.shiftKey&&("/"===e.key||"?"===e.key);"Escape"!==e.key&&!t||e.ctrlKey||e.altKey||e.metaKey||(this.open=!1,e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",o1(this,hZ)),document.addEventListener("keydown",o1(this,hX)))}disconnectedCallback(){this.removeEventListener("click",o1(this,hZ)),document.removeEventListener("keydown",o1(this,hX))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"open"===e&&(this.open?(this.addEventListener("click",o1(this,hZ)),document.addEventListener("keydown",o1(this,hX))):(this.removeEventListener("click",o1(this,hZ)),document.removeEventListener("keydown",o1(this,hX))))}}hZ=new WeakMap,hX=new WeakMap,o3.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${function(){let e=[{keys:["Space","k"],description:"Toggle Playback"},{keys:["m"],description:"Toggle mute"},{keys:["f"],description:"Toggle fullscreen"},{keys:["c"],description:"Toggle captions or subtitles, if available"},{keys:["p"],description:"Toggle Picture in Picture"},{keys:["←","j"],description:"Seek back 10s"},{keys:["→","l"],description:"Seek forward 10s"},{keys:["↑"],description:"Turn volume up"},{keys:["↓"],description:"Turn volume down"},{keys:["< (SHIFT+,)"],description:"Decrease playback rate"},{keys:["> (SHIFT+.)"],description:"Increase playback rate"}].map(({keys:e,description:t})=>{let i=e.map((e,t)=>t>0?`<span class="key-separator">or</span><span class="key">${e}</span>`:`<span class="key">${e}</span>`).join("");return`
      <tr>
        <td>
          <div class="key-combo">${i}</div>
        </td>
        <td class="description">${t}</td>
      </tr>
    `}).join("");return`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${e}</table>
  `}()}
    </slot>
  `},nv.customElements.get("media-keyboard-shortcuts-dialog")||nv.customElements.define("media-keyboard-shortcuts-dialog",o3);var o4=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},o5=(e,t,i)=>(o4(e,t,"read from private field"),i?i.call(e):t.get(e)),o9=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},o8=(e,t,i,a)=>(o4(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let o6=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,o7=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,le=e=>{let t=e.mediaIsFullscreen?ni("exit fullscreen mode"):ni("enter fullscreen mode");e.setAttribute("aria-label",t)};class lt extends or{constructor(){super(...arguments),o9(this,hJ,null)}static get observedAttributes(){return[...super.observedAttributes,rY.MEDIA_IS_FULLSCREEN,rY.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),le(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rY.MEDIA_IS_FULLSCREEN&&le(this)}get mediaFullscreenUnavailable(){return nB(this,rY.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){nH(this,rY.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return nU(this,rY.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){nW(this,rY.MEDIA_IS_FULLSCREEN,e)}handleClick(e){o8(this,hJ,e);let t=o5(this,hJ) instanceof PointerEvent,i=this.mediaIsFullscreen?new nv.CustomEvent(rV.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new nv.CustomEvent(rV.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(i)}}hJ=new WeakMap,lt.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${rY.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${rY.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${rY.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${rY.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${o6}</slot>
      <slot name="exit">${o7}</slot>
    </slot>
  `},lt.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${ni("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${ni("Exit fullscreen mode")}</slot>
  `},nv.customElements.get("media-fullscreen-button")||nv.customElements.define("media-fullscreen-button",lt);let{MEDIA_TIME_IS_LIVE:li,MEDIA_PAUSED:la}=rY,{MEDIA_SEEK_TO_LIVE_REQUEST:lr,MEDIA_PLAY_REQUEST:ln}=rV,ls=e=>{var t;let i=e.mediaPaused||!e.mediaTimeIsLive,a=i?ni("seek to live"):ni("playing live");e.setAttribute("aria-label",a);let r=null==(t=e.shadowRoot)?void 0:t.querySelector('slot[name="text"]');r&&(r.textContent=ni("live")),i?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class lo extends or{static get observedAttributes(){return[...super.observedAttributes,li,la]}connectedCallback(){super.connectedCallback(),ls(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),ls(this)}get mediaPaused(){return nU(this,rY.MEDIA_PAUSED)}set mediaPaused(e){nW(this,rY.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return nU(this,rY.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){nW(this,rY.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new nv.CustomEvent(lr,{composed:!0,bubbles:!0})),this.hasAttribute(la)&&this.dispatchEvent(new nv.CustomEvent(ln,{composed:!0,bubbles:!0})))}}lo.getSlotTemplateHTML=function(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${li}]:not([${la}])) slot[name=indicator] > *,
      :host([${li}]:not([${la}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${li}]:not([${la}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12" aria-hidden="true"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${ni("live")}</slot>
  `},nv.customElements.get("media-live-button")||nv.customElements.define("media-live-button",lo);var ll=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ld=(e,t,i)=>(ll(e,t,"read from private field"),i?i.call(e):t.get(e)),lu=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lc=(e,t,i,a)=>(ll(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let lh="loadingdelay",lm="noautohide",lp=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;class lv extends nv.HTMLElement{constructor(){if(super(),lu(this,h0,void 0),lu(this,h1,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nT(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rK.MEDIA_CONTROLLER,rY.MEDIA_PAUSED,rY.MEDIA_LOADING,lh]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===lh&&t!==i?this.loadingDelay=Number(i):e===rK.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=ld(this,h0))?void 0:a.unassociateElement)||r.call(a,this),lc(this,h0,null)),i&&this.isConnected&&(lc(this,h0,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=ld(this,h0))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(rK.MEDIA_CONTROLLER);a&&(lc(this,h0,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=ld(this,h0))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=ld(this,h0))?void 0:e.unassociateElement)||t.call(e,this),lc(this,h0,null)}get loadingDelay(){return ld(this,h1)}set loadingDelay(e){lc(this,h1,e);let{style:t}=nO(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return nU(this,rY.MEDIA_PAUSED)}set mediaPaused(e){nW(this,rY.MEDIA_PAUSED,e)}get mediaLoading(){return nU(this,rY.MEDIA_LOADING)}set mediaLoading(e){nW(this,rY.MEDIA_LOADING,e)}get mediaController(){return nB(this,rK.MEDIA_CONTROLLER)}set mediaController(e){nH(this,rK.MEDIA_CONTROLLER,e)}get noAutohide(){return nU(this,lm)}set noAutohide(e){nW(this,lm,e)}}h0=new WeakMap,h1=new WeakMap,lv.shadowRootOptions={mode:"open"},lv.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${rY.MEDIA_LOADING}]:not([${rY.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${rY.MEDIA_LOADING}]:not([${rY.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${rY.MEDIA_LOADING}]:not([${rY.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${lp}</slot>
    <div id="status" role="status" aria-live="polite">${ni("media loading")}</div>
  `},nv.customElements.get("media-loading-indicator")||nv.customElements.define("media-loading-indicator",lv);let lE=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,lb=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,lg=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,lf=e=>{let t="off"===e.mediaVolumeLevel?ni("unmute"):ni("mute");e.setAttribute("aria-label",t)};class l_ extends or{static get observedAttributes(){return[...super.observedAttributes,rY.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),lf(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rY.MEDIA_VOLUME_LEVEL&&lf(this)}get mediaVolumeLevel(){return nB(this,rY.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){nH(this,rY.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?rV.MEDIA_UNMUTE_REQUEST:rV.MEDIA_MUTE_REQUEST;this.dispatchEvent(new nv.CustomEvent(e,{composed:!0,bubbles:!0}))}}l_.getSlotTemplateHTML=function(e){return`
    <style>
      :host(:not([${rY.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${rY.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${rY.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${rY.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${rY.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${rY.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${rY.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${lE}</slot>
      <slot name="low">${lb}</slot>
      <slot name="medium">${lb}</slot>
      <slot name="high">${lg}</slot>
    </slot>
  `},l_.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${ni("Mute")}</slot>
    <slot name="tooltip-unmute">${ni("Unmute")}</slot>
  `},nv.customElements.get("media-mute-button")||nv.customElements.define("media-mute-button",l_);let ly=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,lT=e=>{let t=e.mediaIsPip?ni("exit picture in picture mode"):ni("enter picture in picture mode");e.setAttribute("aria-label",t)};class lA extends or{static get observedAttributes(){return[...super.observedAttributes,rY.MEDIA_IS_PIP,rY.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),lT(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rY.MEDIA_IS_PIP&&lT(this)}get mediaPipUnavailable(){return nB(this,rY.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){nH(this,rY.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return nU(this,rY.MEDIA_IS_PIP)}set mediaIsPip(e){nW(this,rY.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?rV.MEDIA_EXIT_PIP_REQUEST:rV.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new nv.CustomEvent(e,{composed:!0,bubbles:!0}))}}lA.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${rY.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${rY.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${rY.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${rY.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${ly}</slot>
      <slot name="exit">${ly}</slot>
    </slot>
  `},lA.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${ni("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${ni("Exit picture in picture mode")}</slot>
  `},nv.customElements.get("media-pip-button")||nv.customElements.define("media-pip-button",lA);var lk=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lw=(e,t,i)=>(lk(e,t,"read from private field"),i?i.call(e):t.get(e)),lS=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};let lI="rates",lR=[1,1.2,1.5,1.7,2];class lL extends or{constructor(){var e;super(),lS(this,h2,new n5(this,lI,{defaultValue:lR})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}static get observedAttributes(){return[...super.observedAttributes,rY.MEDIA_PLAYBACK_RATE,lI]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===lI&&(lw(this,h2).value=i),e===rY.MEDIA_PLAYBACK_RATE){let e=i?+i:Number.NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",ni("Playback rate {playbackRate}",{playbackRate:t}))}}get rates(){return lw(this,h2)}set rates(e){e?Array.isArray(e)?lw(this,h2).value=e.join(" "):"string"==typeof e&&(lw(this,h2).value=e):lw(this,h2).value=""}get mediaPlaybackRate(){return nN(this,rY.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){nP(this,rY.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(lw(this,h2).values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,r=new nv.CustomEvent(rV.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}}h2=new WeakMap,lL.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},lL.getTooltipContentHTML=function(){return ni("Playback rate")},nv.customElements.get("media-playback-rate-button")||nv.customElements.define("media-playback-rate-button",lL);let lD=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,lC=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,lM=e=>{let t=e.mediaPaused?ni("play"):ni("pause");e.setAttribute("aria-label",t)};class lO extends or{static get observedAttributes(){return[...super.observedAttributes,rY.MEDIA_PAUSED,rY.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),lM(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===rY.MEDIA_PAUSED||e===rY.MEDIA_LANG)&&lM(this)}get mediaPaused(){return nU(this,rY.MEDIA_PAUSED)}set mediaPaused(e){nW(this,rY.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?rV.MEDIA_PLAY_REQUEST:rV.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new nv.CustomEvent(e,{composed:!0,bubbles:!0}))}}lO.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${rY.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${rY.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${rY.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${rY.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${lD}</slot>
      <slot name="pause">${lC}</slot>
    </slot>
  `},lO.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${ni("Play")}</slot>
    <slot name="tooltip-pause">${ni("Pause")}</slot>
  `},nv.customElements.get("media-play-button")||nv.customElements.define("media-play-button",lO);let lx={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"},lN=e=>{e.style.removeProperty("background-image")},lP=(e,t)=>{e.style["background-image"]=`url('${t}')`};class lU extends nv.HTMLElement{static get observedAttributes(){return[lx.PLACEHOLDER_SRC,lx.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nT(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){e===lx.SRC&&(null==i?this.image.removeAttribute(lx.SRC):this.image.setAttribute(lx.SRC,i)),e===lx.PLACEHOLDER_SRC&&(null==i?lN(this.image):lP(this.image,i))}get placeholderSrc(){return nB(this,lx.PLACEHOLDER_SRC)}set placeholderSrc(e){nH(this,lx.SRC,e)}get src(){return nB(this,lx.SRC)}set src(e){nH(this,lx.SRC,e)}}lU.shadowRootOptions={mode:"open"},lU.getTemplateHTML=function(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `},nv.customElements.get("media-poster-image")||nv.customElements.define("media-poster-image",lU);var lW=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lB=(e,t,i)=>(lW(e,t,"read from private field"),i?i.call(e):t.get(e)),lH=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lF=(e,t,i,a)=>(lW(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class lV extends oW{constructor(){super(),lH(this,h3,void 0),lF(this,h3,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,rY.MEDIA_PREVIEW_CHAPTER,rY.MEDIA_LANG]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),(e===rY.MEDIA_PREVIEW_CHAPTER||e===rY.MEDIA_LANG)&&i!==t&&null!=i){if(lB(this,h3).textContent=i,""!==i){let e=ni("chapter: {chapterName}",{chapterName:i});this.setAttribute("aria-valuetext",e)}else this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return nB(this,rY.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){nH(this,rY.MEDIA_PREVIEW_CHAPTER,e)}}h3=new WeakMap,nv.customElements.get("media-preview-chapter-display")||nv.customElements.define("media-preview-chapter-display",lV);var lK=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},l$=(e,t,i)=>(lK(e,t,"read from private field"),i?i.call(e):t.get(e)),lq=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lY=(e,t,i,a)=>(lK(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class lG extends nv.HTMLElement{constructor(){if(super(),lq(this,h4,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nT(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rK.MEDIA_CONTROLLER,rY.MEDIA_PREVIEW_IMAGE,rY.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(rK.MEDIA_CONTROLLER);a&&(lY(this,h4,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=l$(this,h4))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=l$(this,h4))?void 0:e.unassociateElement)||t.call(e,this),lY(this,h4,null)}attributeChangedCallback(e,t,i){var a,r,n,s,o;[rY.MEDIA_PREVIEW_IMAGE,rY.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===rK.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=l$(this,h4))?void 0:a.unassociateElement)||r.call(a,this),lY(this,h4,null)),i&&this.isConnected&&(lY(this,h4,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=l$(this,h4))?void 0:s.associateElement)||o.call(s,this)))}get mediaPreviewImage(){return nB(this,rY.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){nH(this,rY.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(rY.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(rY.MEDIA_PREVIEW_COORDS);return}this.setAttribute(rY.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){let e,t;let i=this.mediaPreviewCoords,a=this.mediaPreviewImage;if(!(i&&a))return;let[r,n,s,o]=i,l=a.split("#")[0],d=getComputedStyle(this),{maxWidth:u,maxHeight:c,minWidth:h,minHeight:m}=d;if("fill"===(d.getPropertyValue("--media-preview-thumbnail-object-fit").trim()||"contain")){let i=parseInt(u)/s,a=parseInt(c)/o,r=parseInt(h)/s,n=parseInt(m)/o;e=i<1?i:Math.max(i,r),t=a<1?a:Math.max(a,n)}else{let i=Math.min(parseInt(u)/s,parseInt(c)/o),a=Math.max(parseInt(h)/s,parseInt(m)/o),r=i<1?i:a>1?a:1;e=r,t=r}let{style:p}=nO(this.shadowRoot,":host"),v=nO(this.shadowRoot,"img").style,E=this.shadowRoot.querySelector("img"),b=1>Math.min(e,t)?"min":"max";p.setProperty(`${b}-width`,"initial","important"),p.setProperty(`${b}-height`,"initial","important"),p.width=`${s*e}px`,p.height=`${o*t}px`;let g=()=>{v.width=`${this.imgWidth*e}px`,v.height=`${this.imgHeight*t}px`,v.display="block"};E.src!==l&&(E.onload=()=>{this.imgWidth=E.naturalWidth,this.imgHeight=E.naturalHeight,g(),E.onload=null},E.src=l,g()),g(),v.transform=`translate(-${r*e}px, -${n*t}px)`}}h4=new WeakMap,lG.shadowRootOptions={mode:"open"},lG.getTemplateHTML=function(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `},nv.customElements.get("media-preview-thumbnail")||nv.customElements.define("media-preview-thumbnail",lG);var lj=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lQ=(e,t,i)=>(lj(e,t,"read from private field"),i?i.call(e):t.get(e)),lz=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lZ=(e,t,i,a)=>(lj(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class lX extends oW{constructor(){super(),lz(this,h5,void 0),lZ(this,h5,this.shadowRoot.querySelector("slot")),lQ(this,h5).textContent=ns(0)}static get observedAttributes(){return[...super.observedAttributes,rY.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rY.MEDIA_PREVIEW_TIME&&null!=i&&(lQ(this,h5).textContent=ns(parseFloat(i)))}get mediaPreviewTime(){return nN(this,rY.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){nP(this,rY.MEDIA_PREVIEW_TIME,e)}}h5=new WeakMap,nv.customElements.get("media-preview-time-display")||nv.customElements.define("media-preview-time-display",lX);let lJ={SEEK_OFFSET:"seekoffset"},l0=e=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${e}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`,l1=(e,t)=>{e.setAttribute("aria-label",ni("seek back {seekOffset} seconds",{seekOffset:t}))};class l2 extends or{static get observedAttributes(){return[...super.observedAttributes,rY.MEDIA_CURRENT_TIME,lJ.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=nN(this,lJ.SEEK_OFFSET,30)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),l1(this,this.seekOffset),e===lJ.SEEK_OFFSET&&(this.seekOffset=nN(this,lJ.SEEK_OFFSET,30))}get seekOffset(){return nN(this,lJ.SEEK_OFFSET,30)}set seekOffset(e){nP(this,lJ.SEEK_OFFSET,e),this.setAttribute("aria-label",ni("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),nw(nI(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return nN(this,rY.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){nP(this,rY.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new nv.CustomEvent(rV.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}l2.getSlotTemplateHTML=function(e,t){return`
    <slot name="icon">${l0(t.seekOffset)}</slot>
  `},l2.getTooltipContentHTML=function(){return ni("Seek backward")},nv.customElements.get("media-seek-backward-button")||nv.customElements.define("media-seek-backward-button",l2);let l3={SEEK_OFFSET:"seekoffset"},l4=e=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${e}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`,l5=(e,t)=>{e.setAttribute("aria-label",ni("seek forward {seekOffset} seconds",{seekOffset:t}))};class l9 extends or{static get observedAttributes(){return[...super.observedAttributes,rY.MEDIA_CURRENT_TIME,l3.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=nN(this,l3.SEEK_OFFSET,30)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),l5(this,this.seekOffset),e===l3.SEEK_OFFSET&&(this.seekOffset=nN(this,l3.SEEK_OFFSET,30))}get seekOffset(){return nN(this,l3.SEEK_OFFSET,30)}set seekOffset(e){nP(this,l3.SEEK_OFFSET,e),this.setAttribute("aria-label",ni("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),nw(nI(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return nN(this,rY.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){nP(this,rY.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new nv.CustomEvent(rV.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}l9.getSlotTemplateHTML=function(e,t){return`
    <slot name="icon">${l4(t.seekOffset)}</slot>
  `},l9.getTooltipContentHTML=function(){return ni("Seek forward")},nv.customElements.get("media-seek-forward-button")||nv.customElements.define("media-seek-forward-button",l9);var l8=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},l6=(e,t,i)=>(l8(e,t,"read from private field"),i?i.call(e):t.get(e)),l7=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},de=(e,t,i,a)=>(l8(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dt=(e,t,i)=>(l8(e,t,"access private method"),i);let di={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},da=[...Object.values(di),rY.MEDIA_CURRENT_TIME,rY.MEDIA_DURATION,rY.MEDIA_SEEKABLE],dr=["Enter"," "],dn="&nbsp;/&nbsp;",ds=(e,{timesSep:t=dn}={})=>{var i,a;let r=null!=(i=e.mediaCurrentTime)?i:0,[,n]=null!=(a=e.mediaSeekable)?a:[],s=0;Number.isFinite(e.mediaDuration)?s=e.mediaDuration:Number.isFinite(n)&&(s=n);let o=e.remaining?ns(0-(s-r)):ns(r);return e.showDuration?`${o}${t}${ns(s)}`:o},dl=e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r){e.setAttribute("aria-valuetext",ni("video not loaded, unknown time."));return}let n=e.remaining?nn(0-(r-i)):nn(i);if(!e.showDuration){e.setAttribute("aria-valuetext",n);return}let s=ni("{currentTime} of {totalTime}",{currentTime:n,totalTime:nn(r)});e.setAttribute("aria-valuetext",s)},dd=e=>{e.setAttribute("aria-label",ni("playback time"))};class du extends oW{constructor(){super(),l7(this,h7),l7(this,mt),l7(this,ma),l7(this,mn),l7(this,h9,void 0),l7(this,h8,null),l7(this,h6,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!dr.includes(a)){this.removeEventListener("keyup",l6(this,h8));return}this.addEventListener("keyup",l6(this,h8))}),de(this,h9,this.shadowRoot.querySelector("slot")),l6(this,h9).innerHTML=`${ds(this)}`}static get observedAttributes(){return[...super.observedAttributes,...da,"disabled"]}connectedCallback(){let{style:e}=nO(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.setAttribute("aria-label",ni("playback time")),dt(this,ma,mr).call(this),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),dt(this,mt,mi).call(this),super.disconnectedCallback()}attributeChangedCallback(e,t,i){dd(this),da.includes(e)?this.update():"disabled"===e&&i!==t?null==i?dt(this,ma,mr).call(this):dt(this,mn,ms).call(this):e===di.NO_TOGGLE&&i!==t&&(this.noToggle?dt(this,mn,ms).call(this):dt(this,ma,mr).call(this)),super.attributeChangedCallback(e,t,i)}enable(){this.noToggle||(this.tabIndex=0)}disable(){this.tabIndex=-1}get remaining(){return nU(this,di.REMAINING)}set remaining(e){nW(this,di.REMAINING,e)}get showDuration(){return nU(this,di.SHOW_DURATION)}set showDuration(e){nW(this,di.SHOW_DURATION,e)}get noToggle(){return nU(this,di.NO_TOGGLE)}set noToggle(e){nW(this,di.NO_TOGGLE,e)}get mediaDuration(){return nN(this,rY.MEDIA_DURATION)}set mediaDuration(e){nP(this,rY.MEDIA_DURATION,e)}get mediaCurrentTime(){return nN(this,rY.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){nP(this,rY.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(rY.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e){this.removeAttribute(rY.MEDIA_SEEKABLE);return}this.setAttribute(rY.MEDIA_SEEKABLE,e.join(":"))}update(){let e=ds(this);dl(this),e!==l6(this,h9).innerHTML&&(l6(this,h9).innerHTML=e)}}h9=new WeakMap,h8=new WeakMap,h6=new WeakMap,h7=new WeakSet,me=function(){l6(this,h8)||(de(this,h8,e=>{let{key:t}=e;if(!dr.includes(t)){this.removeEventListener("keyup",l6(this,h8));return}this.toggleTimeDisplay()}),this.addEventListener("keydown",l6(this,h6)),this.addEventListener("click",this.toggleTimeDisplay))},mt=new WeakSet,mi=function(){l6(this,h8)&&(this.removeEventListener("keyup",l6(this,h8)),this.removeEventListener("keydown",l6(this,h6)),this.removeEventListener("click",this.toggleTimeDisplay),de(this,h8,null))},ma=new WeakSet,mr=function(){this.noToggle||this.hasAttribute("disabled")||(this.setAttribute("role","button"),this.enable(),dt(this,h7,me).call(this))},mn=new WeakSet,ms=function(){this.removeAttribute("role"),this.disable(),dt(this,mt,mi).call(this)},du.getSlotTemplateHTML=function(e,t){return`
    <slot>${ds(t)}</slot>
  `},nv.customElements.get("media-time-display")||nv.customElements.define("media-time-display",du);var dc=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dh=(e,t,i)=>(dc(e,t,"read from private field"),i?i.call(e):t.get(e)),dm=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dp=(e,t,i,a)=>(dc(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dv=(e,t,i,a)=>({set _(value){dp(e,t,value,i)},get _(){return dh(e,t,a)}});class dE{constructor(e,t,i){dm(this,mo,void 0),dm(this,ml,void 0),dm(this,md,void 0),dm(this,mu,void 0),dm(this,mc,void 0),dm(this,mh,void 0),dm(this,mm,void 0),dm(this,mp,void 0),dm(this,mv,0),dm(this,mE,(e=performance.now())=>{dp(this,mv,requestAnimationFrame(dh(this,mE))),dp(this,mu,performance.now()-dh(this,md));let t=1e3/this.fps;if(dh(this,mu)>t){dp(this,md,e-dh(this,mu)%t);let i=1e3/((e-dh(this,ml))/++dv(this,mc)._),a=(e-dh(this,mh))/1e3/this.duration,r=dh(this,mm)+a*this.playbackRate;r-dh(this,mo).valueAsNumber>0?dp(this,mp,this.playbackRate/this.duration/i):(dp(this,mp,.995*dh(this,mp)),r=dh(this,mo).valueAsNumber+dh(this,mp)),this.callback(r)}}),dp(this,mo,e),this.callback=t,this.fps=i}start(){0===dh(this,mv)&&(dp(this,md,performance.now()),dp(this,ml,dh(this,md)),dp(this,mc,0),dh(this,mE).call(this))}stop(){0!==dh(this,mv)&&(cancelAnimationFrame(dh(this,mv)),dp(this,mv,0))}update({start:e,duration:t,playbackRate:i}){let a=e-dh(this,mo).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),dp(this,mm,e),dp(this,mh,performance.now()),this.duration=t,this.playbackRate=i}}mo=new WeakMap,ml=new WeakMap,md=new WeakMap,mu=new WeakMap,mc=new WeakMap,mh=new WeakMap,mm=new WeakMap,mp=new WeakMap,mv=new WeakMap,mE=new WeakMap;var db=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dg=(e,t,i)=>(db(e,t,"read from private field"),i?i.call(e):t.get(e)),df=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},d_=(e,t,i,a)=>(db(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dy=(e,t,i)=>(db(e,t,"access private method"),i);let dT=e=>{let t=e.range,i=nn(+dk(e)),a=nn(+e.mediaSeekableEnd),r=i&&a?ni("{currentTime} of {totalTime}",{currentTime:i,totalTime:a}):ni("video not loaded, unknown time.");t.setAttribute("aria-valuetext",r)},dA=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},dk=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class dw extends oR{constructor(){super(),df(this,mR),df(this,mC),df(this,mO),df(this,mN),df(this,mU),df(this,mB),df(this,mF),df(this,mb,null),df(this,mg,void 0),df(this,mf,void 0),df(this,m_,void 0),df(this,my,void 0),df(this,mT,void 0),df(this,mA,void 0),df(this,mk,void 0),df(this,mw,void 0),df(this,mS,void 0),df(this,mI,()=>{dy(this,mR,mL).call(this)?dg(this,mg).start():dg(this,mg).stop()}),df(this,mD,e=>{this.dragging||(r5(e)&&(this.range.valueAsNumber=e),dg(this,mS)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),d_(this,mf,this.shadowRoot.querySelectorAll('[part~="box"]')),d_(this,my,this.shadowRoot.querySelector('[part~="preview-box"]')),d_(this,mT,this.shadowRoot.querySelector('[part~="current-box"]'));let e=getComputedStyle(this);d_(this,mA,parseInt(e.getPropertyValue("--media-box-padding-left"))),d_(this,mk,parseInt(e.getPropertyValue("--media-box-padding-right"))),d_(this,mg,new dE(this.range,dg(this,mD),60))}static get observedAttributes(){return[...super.observedAttributes,rY.MEDIA_PAUSED,rY.MEDIA_DURATION,rY.MEDIA_SEEKABLE,rY.MEDIA_CURRENT_TIME,rY.MEDIA_PREVIEW_IMAGE,rY.MEDIA_PREVIEW_TIME,rY.MEDIA_PREVIEW_CHAPTER,rY.MEDIA_BUFFERED,rY.MEDIA_PLAYBACK_RATE,rY.MEDIA_LOADING,rY.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",ni("seek")),dg(this,mI).call(this),d_(this,mb,this.getRootNode()),null==(e=dg(this,mb))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),dg(this,mg).stop(),null==(e=dg(this,mb))||e.removeEventListener("transitionstart",this),d_(this,mb,null)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!=i&&(e===rY.MEDIA_CURRENT_TIME||e===rY.MEDIA_PAUSED||e===rY.MEDIA_ENDED||e===rY.MEDIA_LOADING||e===rY.MEDIA_DURATION||e===rY.MEDIA_SEEKABLE?(dg(this,mg).update({start:dA(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),dg(this,mI).call(this),dT(this)):e===rY.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===rY.MEDIA_DURATION||e===rY.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=dg(this,mw),this.updateBar()))}get mediaChaptersCues(){return dg(this,mw)}set mediaChaptersCues(e){var t;d_(this,mw,e),this.updateSegments(null==(t=dg(this,mw))?void 0:t.map(e=>({start:dA(this,e.startTime),end:dA(this,e.endTime)})))}get mediaPaused(){return nU(this,rY.MEDIA_PAUSED)}set mediaPaused(e){nW(this,rY.MEDIA_PAUSED,e)}get mediaLoading(){return nU(this,rY.MEDIA_LOADING)}set mediaLoading(e){nW(this,rY.MEDIA_LOADING,e)}get mediaDuration(){return nN(this,rY.MEDIA_DURATION)}set mediaDuration(e){nP(this,rY.MEDIA_DURATION,e)}get mediaCurrentTime(){return nN(this,rY.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){nP(this,rY.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return nN(this,rY.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){nP(this,rY.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(rY.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(rY.MEDIA_BUFFERED);return}let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(rY.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(rY.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e){this.removeAttribute(rY.MEDIA_SEEKABLE);return}this.setAttribute(rY.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return nB(this,rY.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){nH(this,rY.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return nN(this,rY.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){nP(this,rY.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return nU(this,rY.MEDIA_ENDED)}set mediaEnded(e){nW(this,rY.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t;let i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=dA(this,r)}let{style:a}=nO(this.shadowRoot,"#buffered");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=nO(this.shadowRoot,"#current-rail"),t=nO(this.shadowRoot,'[part~="current-box"]'),i=dy(this,mC,mM).call(this,dg(this,mT)),a=dy(this,mO,mx).call(this,i,this.range.valueAsNumber),r=dy(this,mN,mP).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":dy(this,mF,mV).call(this);break;case"pointermove":dy(this,mU,mW).call(this,e);break;case"pointerup":dg(this,mS)&&d_(this,mS,!1);break;case"pointerdown":d_(this,mS,!0);break;case"pointerleave":dy(this,mB,mH).call(this,null);break;case"transitionstart":nR(e.target,this)&&setTimeout(()=>dg(this,mI).call(this),0)}}}mb=new WeakMap,mg=new WeakMap,mf=new WeakMap,m_=new WeakMap,my=new WeakMap,mT=new WeakMap,mA=new WeakMap,mk=new WeakMap,mw=new WeakMap,mS=new WeakMap,mI=new WeakMap,mR=new WeakSet,mL=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&nM(this)},mD=new WeakMap,mC=new WeakSet,mM=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?nL(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,n=-(a.left-i.left-r/2),s=i.right-a.left-r/2;return{box:{width:r,min:n,max:s},bounds:i,range:a}},mO=new WeakSet,mx=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:n}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(n)){let e=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},mN=new WeakSet,mP=function(e,t){let{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+dg(this,mA)){let t=e.range.left-e.bounds.left-dg(this,mA);return`${n-i/2+t}px`}if(n>r-dg(this,mk)){let t=e.bounds.right-e.range.right-dg(this,mk);return`${n+i/2-t-e.range.width}px`}return 0},mU=new WeakSet,mW=function(e){let t=[...dg(this,mf)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this))){dy(this,mB,mH).call(this,null);return}let i=this.mediaSeekableEnd;if(!i)return;let a=nO(this.shadowRoot,"#preview-rail"),r=nO(this.shadowRoot,'[part~="preview-box"]'),n=dy(this,mC,mM).call(this,dg(this,my)),s=(e.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));let o=dy(this,mO,mx).call(this,n,s),l=dy(this,mN,mP).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`),1>Math.abs(Math.round(dg(this,m_))-Math.round(s*i))&&s>.01&&s<.99||(d_(this,m_,s*i),dy(this,mB,mH).call(this,dg(this,m_)))},mB=new WeakSet,mH=function(e){this.dispatchEvent(new nv.CustomEvent(rV.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},mF=new WeakSet,mV=function(){dg(this,mg).stop();let e=dk(this);this.dispatchEvent(new nv.CustomEvent(rV.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},dw.shadowRootOptions={mode:"open"},dw.getContainerTemplateHTML=function(e){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${rY.MEDIA_PREVIEW_IMAGE}], [${rY.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${rY.MEDIA_PREVIEW_IMAGE}], [${rY.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${rY.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${rY.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${rY.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${rY.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${rY.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${rY.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${rY.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${rY.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${rY.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${rY.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${rY.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${rY.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${lG.shadowRootOptions.mode}">
            ${lG.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `},nv.customElements.get("media-time-range")||nv.customElements.define("media-time-range",dw);var dS=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dI=(e,t,i)=>(dS(e,t,"read from private field"),i?i.call(e):t.get(e)),dR=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};let dL=e=>e.mediaMuted?0:e.mediaVolume,dD=e=>`${Math.round(100*e)}%`;class dC extends oR{constructor(){super(...arguments),dR(this,mK,()=>{let e=this.range.value,t=new nv.CustomEvent(rV.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}static get observedAttributes(){return[...super.observedAttributes,rY.MEDIA_VOLUME,rY.MEDIA_MUTED,rY.MEDIA_VOLUME_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",ni("volume")),this.range.addEventListener("input",dI(this,mK))}disconnectedCallback(){this.range.removeEventListener("input",dI(this,mK)),super.disconnectedCallback()}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===rY.MEDIA_VOLUME||e===rY.MEDIA_MUTED)&&(this.range.valueAsNumber=dL(this),this.range.setAttribute("aria-valuetext",dD(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return nN(this,rY.MEDIA_VOLUME,1)}set mediaVolume(e){nP(this,rY.MEDIA_VOLUME,e)}get mediaMuted(){return nU(this,rY.MEDIA_MUTED)}set mediaMuted(e){nW(this,rY.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return nB(this,rY.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){nH(this,rY.MEDIA_VOLUME_UNAVAILABLE,e)}}mK=new WeakMap,nv.customElements.get("media-volume-range")||nv.customElements.define("media-volume-range",dC);class dM extends or{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,rY.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=(null==(e=this.shadowRoot)?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=ni("Loop"))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rY.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return nU(this,rY.MEDIA_LOOP)}set mediaLoop(e){nW(this,rY.MEDIA_LOOP,e)}handleClick(){let e=!this.mediaLoop,t=new nv.CustomEvent(rV.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}dM.getSlotTemplateHTML=function(e){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${rY.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `},dM.getTooltipContentHTML=function(){return ni("Loop")},nv.customElements.get("media-loop-button")||nv.customElements.define("media-loop-button",dM);var dO=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dx=(e,t,i)=>(dO(e,t,"read from private field"),i?i.call(e):t.get(e)),dN=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dP=(e,t,i,a)=>(dO(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let dU={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof dq&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof dq?a.element[a.attributeName]=t:a.value=t}}}};class dW extends nv.DocumentFragment{constructor(e,t,i=dU){var a;super(),dN(this,m$,void 0),dN(this,mq,void 0),this.append(e.content.cloneNode(!0)),dP(this,m$,dB(this)),dP(this,mq,i),null==(a=i.createCallback)||a.call(i,this,dx(this,m$),t),i.processCallback(this,dx(this,m$),t)}update(e){dx(this,mq).processCallback(this,dx(this,m$),e)}}m$=new WeakMap,mq=new WeakMap;let dB=(e,t=[])=>{let i,a;for(let r of e.attributes||[])if(r.value.includes("{{")){let n=new d$;for([i,a]of dF(r.value))if(i){let i=new dq(e,r.name,r.namespaceURI);n.append(i),t.push([a,i])}else n.append(a);r.value=n.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){let n=r.data;if(1===r.nodeType||n.includes("{{")){let s=[];if(n)for([i,a]of dF(n))if(i){let i=new dY(e);s.push(i),t.push([a,i])}else s.push(new Text(a));else if(r instanceof HTMLTemplateElement){let i=new dG(e,r);s.push(i),t.push([i.expression,i])}r.replaceWith(...s.flatMap(e=>e.replacementNodes||[e]))}}else dB(r,t);return t},dH={},dF=e=>{let t="",i=0,a=dH[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)"{"===n&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++i?(t&&a.push([0,t]),t="",r++):"}"!==n||"}"!==e[r+1]||"\\"===e[r-1]||--i?t+=n||"":(a.push([1,t.trim()]),t="",r++);return t&&a.push([0,(i>0?"{{":"")+t]),dH[e]=a};class dV{get value(){return""}set value(e){}toString(){return this.value}}let dK=new WeakMap;class d${constructor(){dN(this,mY,[])}[Symbol.iterator](){return dx(this,mY).values()}get length(){return dx(this,mY).length}item(e){return dx(this,mY)[e]}append(...e){for(let t of e)t instanceof dq&&dK.set(t,this),dx(this,mY).push(t)}toString(){return dx(this,mY).join("")}}mY=new WeakMap;class dq extends dV{constructor(e,t,i){super(),dN(this,mZ),dN(this,mG,""),dN(this,mj,void 0),dN(this,mQ,void 0),dN(this,mz,void 0),dP(this,mj,e),dP(this,mQ,t),dP(this,mz,i)}get attributeName(){return dx(this,mQ)}get attributeNamespace(){return dx(this,mz)}get element(){return dx(this,mj)}get value(){return dx(this,mG)}set value(e){dx(this,mG)!==e&&(dP(this,mG,e),dx(this,mZ,mX)&&1!==dx(this,mZ,mX).length?dx(this,mj).setAttributeNS(dx(this,mz),dx(this,mQ),dx(this,mZ,mX).toString()):null==e?dx(this,mj).removeAttributeNS(dx(this,mz),dx(this,mQ)):dx(this,mj).setAttributeNS(dx(this,mz),dx(this,mQ),e))}get booleanValue(){return dx(this,mj).hasAttributeNS(dx(this,mz),dx(this,mQ))}set booleanValue(e){if(dx(this,mZ,mX)&&1!==dx(this,mZ,mX).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}mG=new WeakMap,mj=new WeakMap,mQ=new WeakMap,mz=new WeakMap,mZ=new WeakSet,mX=function(){return dK.get(this)};class dY extends dV{constructor(e,t){super(),dN(this,mJ,void 0),dN(this,m0,void 0),dP(this,mJ,e),dP(this,m0,t?[...t]:[new Text])}get replacementNodes(){return dx(this,m0)}get parentNode(){return dx(this,mJ)}get nextSibling(){return dx(this,m0)[dx(this,m0).length-1].nextSibling}get previousSibling(){return dx(this,m0)[0].previousSibling}get value(){return dx(this,m0).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),dP(this,m0,function(e,t,i,a=null){let r=0,n,s,o,l=i.length,d=t.length;for(;r<l&&r<d&&t[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(e.replaceChild(o,n),n=s):e.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,e.removeChild(n),n=s}return i}(dx(this,m0)[0].parentNode,dx(this,m0),t,this.nextSibling))}}mJ=new WeakMap,m0=new WeakMap;class dG extends dY{constructor(e,t){let i=t.getAttribute("directive")||t.getAttribute("type"),a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}}let dj={string:e=>String(e)};class dQ{constructor(e){this.template=e,this.state=void 0}}let dz=new WeakMap,dZ=new WeakMap,dX={partial:(e,t)=>{t[e.expression]=new dQ(e.template)},if:(e,t)=>{var i;if(d2(e.expression,t)){if(dz.get(e)!==e.template){dz.set(e,e.template);let i=new dW(e.template,t,d0);e.replace(i),dZ.set(e,i)}else null==(i=dZ.get(e))||i.update(t)}else e.replace(""),dz.delete(e),dZ.delete(e)}},dJ=Object.keys(dX),d0={processCallback(e,t,i){var a,r;if(i)for(let[e,n]of t){if(n instanceof dG){if(!n.directive){let e=dJ.find(e=>n.template.hasAttribute(e));e&&(n.directive=e,n.expression=n.template.getAttribute(e))}null==(a=dX[n.directive])||a.call(dX,n,i);continue}let t=d2(e,i);if(t instanceof dQ){dz.get(n)!==t.template?(dz.set(n,t.template),t=new dW(t.template,t.state,d0),n.value=t,dZ.set(n,t)):null==(r=dZ.get(n))||r.update(t.state);continue}t?(n instanceof dq&&n.attributeName.startsWith("aria-")&&(t=String(t)),n instanceof dq?"boolean"==typeof t?n.booleanValue=t:"function"==typeof t?n.element[n.attributeName]=t:n.value=t:(n.value=t,dz.delete(n),dZ.delete(n))):n instanceof dq?n.value=void 0:(n.value=void 0,dz.delete(n),dZ.delete(n))}}},d1={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=dj[t])?void 0:i.call(dj,e)}};function d2(e,t={}){var i,a,r,n,s,o,l;let d=(function(e,t){let i,a,r;let n=[];for(;e;){for(let n in r=null,i=e.length,t)(a=t[n].exec(e))&&a.index<i&&(r={token:a[0],type:n,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return d3(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return d3(e);let o={...t};i.state=o;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(r=l[e])?void 0:r.token,a=null==(n=l[e+1])?void 0:n.token,d=null==(s=l[e+2])?void 0:s.token;i&&"="===a&&(o[i]=d5(d,t))}return i}if(1===d.length)return d4(d[0])?d5(d[0].token,t):d3(e);if(2===d.length){let i=d1[null==(o=d[0])?void 0:o.token];return i&&d4(d[1])?i(d5(d[1].token,t)):d3(e)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=d1[i];return a&&d4(d[0])&&d4(d[2])?a(d5(d[0].token,t),"|"===i?d[2].token:d5(d[2].token,t)):d3(e)}}function d3(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function d4({type:e}){return["number","boolean","string","param"].includes(e)}function d5(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):r9(e)?parseFloat(e):t[e]}var d9=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},d8=(e,t,i)=>(d9(e,t,"read from private field"),i?i.call(e):t.get(e)),d6=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},d7=(e,t,i,a)=>(d9(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ue=(e,t,i)=>(d9(e,t,"access private method"),i);let ut={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},ui=nE.createElement("template");ui.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class ua extends nv.HTMLElement{constructor(){super(),d6(this,m5),d6(this,m8),d6(this,m1,void 0),d6(this,m2,void 0),d6(this,m3,void 0),d6(this,m4,void 0),d6(this,m7,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer()),d7(this,m4,new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(ut[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()})),d7(this,m7,this.render.bind(this)),ue(this,m5,m9).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=d8(this,m1))?e:this.constructor.template}set template(e){if(null===e){this.removeAttribute("template");return}"string"==typeof e?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(d7(this,m1,e),d7(this,m3,null),this.createRenderer())}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>ut[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of a){let t=null!=(i=ut[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(r9(a)&&(a=parseFloat(a)),r[t]=""===a||a):r[t]=!1}return r}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&ue(this,m8,m6).call(this)}connectedCallback(){this.addEventListener(rG.BREAKPOINTS_COMPUTED,d8(this,m7)),d8(this,m4).observe(this,{attributes:!0}),d8(this,m4).observe(this.renderRoot,{attributes:!0,subtree:!0}),ue(this,m8,m6).call(this)}disconnectedCallback(){this.removeEventListener(rG.BREAKPOINTS_COMPUTED,d8(this,m7)),d8(this,m4).disconnect()}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==d8(this,m2)&&(d7(this,m2,this.template),this.renderer=new dW(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(ui.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function ur(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}function un(e){return e.split("-")[0]}m1=new WeakMap,m2=new WeakMap,m3=new WeakMap,m4=new WeakMap,m5=new WeakSet,m9=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},m8=new WeakSet,m6=function(){var e;let t=this.getAttribute("template");if(!t||t===d8(this,m3))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){d7(this,m3,t),d7(this,m1,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(d7(this,m3,t),ur(t).then(e=>{let t=nE.createElement("template");t.innerHTML=e,d7(this,m1,t),this.createRenderer()}).catch(console.error))},m7=new WeakMap,ua.observedAttributes=["template"],ua.processor=d0,nv.customElements.get("media-theme")||nv.customElements.define("media-theme",ua);class us extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}}class uo extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}}var ul=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ud=(e,t,i)=>(ul(e,t,"read from private field"),i?i.call(e):t.get(e)),uu=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},uc=(e,t,i,a)=>(ul(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),uh=(e,t,i)=>(ul(e,t,"access private method"),i);function um({type:e,text:t,value:i,checked:a}){let r=nE.createElement("media-chrome-menu-item");r.type=null!=e?e:"",r.part.add("menu-item"),e&&r.part.add(e),r.value=i,r.checked=a;let n=nE.createElement("span");return n.textContent=t,r.append(n),r}function up(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}let uv={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class uE extends nv.HTMLElement{constructor(){if(super(),uu(this,po),uu(this,pd),uu(this,ph),uu(this,pp),uu(this,pE),uu(this,pg),uu(this,pT),uu(this,pk),uu(this,pS),uu(this,pR),uu(this,pD),uu(this,pM),uu(this,px),uu(this,pP),uu(this,pW),uu(this,pH),uu(this,pV),uu(this,p$),uu(this,pe,null),uu(this,pt,null),uu(this,pi,null),uu(this,pa,new Set),uu(this,pr,void 0),uu(this,pn,!1),uu(this,ps,null),uu(this,pc,()=>{let e=ud(this,pa),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));uc(this,pa,t)}),uu(this,p_,()=>{uh(this,pT,pA).call(this),uh(this,pk,pw).call(this,!1)}),uu(this,py,()=>{uh(this,pT,pA).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nT(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),uc(this,pr,new MutationObserver(ud(this,pc)))}static get observedAttributes(){return[uv.DISABLED,uv.HIDDEN,uv.STYLE,uv.ANCHOR,rK.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":uh(this,po,pl).call(this,e);break;case"invoke":uh(this,pp,pv).call(this,e);break;case"click":uh(this,pS,pI).call(this,e);break;case"toggle":uh(this,pD,pC).call(this,e);break;case"focusout":uh(this,px,pN).call(this,e);break;case"keydown":uh(this,pP,pU).call(this,e)}}connectedCallback(){var e,t;ud(this,pr).observe(this.defaultSlot,{childList:!0}),uc(this,ps,nx(this.shadowRoot,":host")),uh(this,ph,pm).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),uc(this,pe,nk(this)),null==(t=null==(e=ud(this,pe))?void 0:e.associateElement)||t.call(e,this),this.hidden||(n_(ug(this),ud(this,p_)),n_(this,ud(this,py))),uh(this,pd,pu).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){var e,t;ud(this,pr).disconnect(),ny(ug(this),ud(this,p_)),ny(this,ud(this,py)),this.disable(),null==(t=null==(e=ud(this,pe))?void 0:e.unassociateElement)||t.call(e,this),uc(this,pe,null),uc(this,pt,null),uc(this,pi,null),this.shadowRoot.removeEventListener("slotchange",this)}attributeChangedCallback(e,t,i){var a,r,n,s;e===uv.HIDDEN&&i!==t?(ud(this,pn)||uc(this,pn,!0),this.hidden?uh(this,pg,pf).call(this):uh(this,pE,pb).call(this),this.dispatchEvent(new uo({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===rK.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=ud(this,pe))?void 0:a.unassociateElement)||r.call(a,this),uc(this,pe,null)),i&&this.isConnected&&(uc(this,pe,nk(this)),null==(s=null==(n=ud(this,pe))?void 0:n.associateElement)||s.call(n,this))):e===uv.DISABLED&&i!==t?null==i?this.enable():this.disable():e===uv.STYLE&&i!==t&&uh(this,ph,pm).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=nC(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(ub)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&uh(this,p$,pq).call(this,t)}focus(){if(uc(this,pt,nD()),this.items.length){uh(this,pV,pK).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=uh(this,pW,pB).call(this,e);i&&(uh(this,p$,pq).call(this,i,"checkbox"===i.type),ud(this,pi)&&!this.hidden&&(null==(t=ud(this,pt))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,r=this.items,n=null!=(i=null!=(t=uh(this,pW,pB).call(this,e))?t:uh(this,pH,pF).call(this))?i:r[0],s=Math.max(0,r.indexOf(n));"ArrowDown"===a?s++:"ArrowUp"===a?s--:"Home"===e.key?s=0:"End"===e.key&&(s=r.length-1),s<0&&(s=r.length-1),s>r.length-1&&(s=0),uh(this,pV,pK).call(this,r[s]),r[s].focus()}}function ub(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function ug(e){var t;return null!=(t=e.getAttribute("bounds")?nL(e,`#${e.getAttribute("bounds")}`):nA(e)||e.parentElement)?t:e}pe=new WeakMap,pt=new WeakMap,pi=new WeakMap,pa=new WeakMap,pr=new WeakMap,pn=new WeakMap,ps=new WeakMap,po=new WeakSet,pl=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&uh(this,pd,pu).call(this),t.name||ud(this,pc).call(this)},pd=new WeakSet,pu=function(){let e=this.shadowRoot.querySelector('slot[name="header"]'),t=this.shadowRoot.querySelector('slot[name="title"]');e.hidden=0===t.assignedNodes().length&&0===e.assignedNodes().length},pc=new WeakMap,ph=new WeakSet,pm=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},pp=new WeakSet,pv=function(e){uc(this,pi,e.relatedTarget),nR(this,e.relatedTarget)||(this.hidden=!this.hidden)},pE=new WeakSet,pb=function(){var e;null==(e=ud(this,pi))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),n_(ug(this),ud(this,p_)),n_(this,ud(this,py))},pg=new WeakSet,pf=function(){var e;null==(e=ud(this,pi))||e.setAttribute("aria-expanded","false"),ny(ug(this),ud(this,p_)),ny(this,ud(this,py))},p_=new WeakMap,py=new WeakMap,pT=new WeakSet,pA=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:t,y:i}=function({anchor:e,floating:t,placement:i}){let{x:a,y:r}=function({anchor:e,floating:t},i){let a;let r="x"==(["top","bottom"].includes(un(i))?"y":"x")?"y":"x",n="y"===r?"height":"width",s=un(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[n]/2-t[n]/2;switch(s){case"top":a={x:o,y:e.y-t.height};break;case"bottom":a={x:o,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[r]-=d;break;case"end":a[r]+=d}return a}(function({anchor:e,floating:t}){return{anchor:function(e,t){var i;let a=e.getBoundingClientRect(),r=null!=(i=null==t?void 0:t.getBoundingClientRect())?i:{x:0,y:0};return{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}}(e,t.offsetParent),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:r}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=e||(e=this.offsetWidth);let a=ug(this).getBoundingClientRect(),r=a.width-t-e,n=a.height-i-this.offsetHeight,{style:s}=ud(this,ps);s.setProperty("position","absolute"),s.setProperty("right",`${Math.max(0,r)}px`),s.setProperty("--_menu-bottom",`${n}px`);let o=getComputedStyle(this),l=s.getPropertyValue("--_menu-bottom")===o.bottom?n:parseFloat(o.bottom),d=a.height-l-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${d}px`)},pk=new WeakSet,pw=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=ud(this,ps);if(e||a.setProperty("--media-menu-transition-in","none"),i){let e=i.offsetHeight,a=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${a}px`),this.style.setProperty("min-height",`${e}px`),uh(this,pT,pA).call(this,a)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),uh(this,pT,pA).call(this);a.removeProperty("--media-menu-transition-in")},pS=new WeakSet,pI=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(ud(this,pR,pL))){null==(t=ud(this,pt))||t.focus(),this.hidden=!0;return}let i=uh(this,pW,pB).call(this,e);!i||i.hasAttribute("disabled")||(uh(this,pV,pK).call(this,i),this.handleSelect(e))},pR=new WeakSet,pL=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.matches('button[part~="back"]'))},pD=new WeakSet,pC=function(e){if(e.target===this)return;uh(this,pM,pO).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement==e.target||"open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new us({relatedTarget:i}));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);uh(this,pk,pw).call(this,!0)},pM=new WeakSet,pO=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},px=new WeakSet,pN=function(e){var t;nR(this,e.relatedTarget)||(ud(this,pn)&&(null==(t=ud(this,pt))||t.focus()),!ud(this,pi)||ud(this,pi)===e.relatedTarget||this.hidden||(this.hidden=!0))},pP=new WeakSet,pU=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;if(!o&&!l&&!d&&this.keysUsed.includes(s)){if(e.preventDefault(),e.stopPropagation(),"Tab"===s){if(ud(this,pn)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()}else"Escape"===s?(null==(n=ud(this,pt))||n.focus(),ud(this,pn)&&(this.hidden=!0)):"Enter"===s||" "===s?this.handleSelect(e):this.handleMove(e)}},pW=new WeakSet,pB=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},pH=new WeakSet,pF=function(){return this.items.find(e=>0===e.tabIndex)},pV=new WeakSet,pK=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},p$=new WeakSet,pq=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},uE.shadowRootOptions={mode:"open"},uE.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `},nv.customElements.get("media-chrome-menu")||nv.customElements.define("media-chrome-menu",uE);var uf=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},u_=(e,t,i)=>(uf(e,t,"read from private field"),i?i.call(e):t.get(e)),uy=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},uT=(e,t,i,a)=>(uf(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),uA=(e,t,i)=>(uf(e,t,"access private method"),i);let uk={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class uw extends nv.HTMLElement{constructor(){if(super(),uy(this,pj),uy(this,pz),uy(this,pX),uy(this,p3),uy(this,pY,!1),uy(this,pG,void 0),uy(this,p0,()=>{var e,t;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(e=this.submenuElement.checkedItems)?void 0:e[0],r=null!=(t=null==a?void 0:a.dataset.description)?t:null==a?void 0:a.text,n=nE.createElement("span");n.textContent=null!=r?r:"",i.replaceChildren(n)}),uy(this,p1,e=>{let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",u_(this,p1));return}this.handleClick(e)}),uy(this,p2,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",u_(this,p1));return}this.addEventListener("keyup",u_(this,p1),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=nT(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[uk.TYPE,uk.DISABLED,uk.CHECKED,uk.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),uS(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":uA(this,pj,pQ).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":u_(this,p2).call(this,e);break;case"keyup":u_(this,p1).call(this,e)}}attributeChangedCallback(e,t,i){e===uk.CHECKED&&uS(this)&&!u_(this,pY)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===uk.TYPE&&i!==t?this.role="menuitem"+i:e===uk.DISABLED&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(uk.DISABLED)||this.enable(),this.role="menuitem"+this.type,uT(this,pG,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),uA(this,p3,p4).call(this),this.submenuElement&&uA(this,pz,pZ).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){this.disable(),uA(this,p3,p4).call(this),uT(this,pG,null),this.shadowRoot.removeEventListener("slotchange",this)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=nC(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(uk.TYPE))?e:""}set type(e){this.setAttribute(uk.TYPE,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(uk.VALUE))?e:this.text}set value(e){this.setAttribute(uk.VALUE,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(uS(this))return"true"===this.getAttribute("aria-checked")}set checked(e){uS(this)&&(uT(this,pY,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!uS(this)&&this.invokeTargetElement&&nR(this,e.target)&&this.invokeTargetElement.dispatchEvent(new us({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function uS(e){return"radio"===e.type||"checkbox"===e.type}pY=new WeakMap,pG=new WeakMap,pj=new WeakSet,pQ=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?uA(this,pz,pZ).call(this):uA(this,pX,pJ).call(this))},pz=new WeakSet,pZ=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",u_(this,p0)),this.submenuElement.addEventListener("addmenuitem",u_(this,p0)),this.submenuElement.addEventListener("removemenuitem",u_(this,p0)),u_(this,p0).call(this)},pX=new WeakSet,pJ=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",u_(this,p0)),this.submenuElement.removeEventListener("addmenuitem",u_(this,p0)),this.submenuElement.removeEventListener("removemenuitem",u_(this,p0)),u_(this,p0).call(this)},p0=new WeakMap,p1=new WeakMap,p2=new WeakMap,p3=new WeakSet,p4=function(){var e;let t=null==(e=u_(this,pG))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},uw.shadowRootOptions={mode:"open"},uw.getTemplateHTML=function(e){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `},uw.getSuffixSlotInnerHTML=function(e){return""},nv.customElements.get("media-chrome-menu-item")||nv.customElements.define("media-chrome-menu-item",uw);class uI extends uE{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:nA(this).querySelector("media-settings-menu-button")}}uI.getTemplateHTML=function(e){return`
    ${uE.getTemplateHTML(e)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `},nv.customElements.get("media-settings-menu")||nv.customElements.define("media-settings-menu",uI);class uR extends uw{}uR.shadowRootOptions={mode:"open"},uR.getTemplateHTML=function(e){return`
    ${uw.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},uR.getSuffixSlotInnerHTML=function(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},nv.customElements.get("media-settings-menu-item")||nv.customElements.define("media-settings-menu-item",uR);class uL extends or{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=nC(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;null==(e=this.invokeTargetElement)||e.dispatchEvent(new us({relatedTarget:this}))}}nv.customElements.get("media-chrome-menu-button")||nv.customElements.define("media-chrome-menu-button",uL);class uD extends uL{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",ni("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:nA(this).querySelector("media-settings-menu")}}uD.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `},uD.getTooltipContentHTML=function(){return ni("Settings")},nv.customElements.get("media-settings-menu-button")||nv.customElements.define("media-settings-menu-button",uD);var uC=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},uM=(e,t,i)=>(uC(e,t,"read from private field"),i?i.call(e):t.get(e)),uO=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ux=(e,t,i,a)=>(uC(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),uN=(e,t,i)=>(uC(e,t,"access private method"),i);class uP extends uE{constructor(){super(...arguments),uO(this,p8),uO(this,p7),uO(this,p5,[]),uO(this,p9,void 0)}static get observedAttributes(){return[...super.observedAttributes,rY.MEDIA_AUDIO_TRACK_LIST,rY.MEDIA_AUDIO_TRACK_ENABLED,rY.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===rY.MEDIA_AUDIO_TRACK_ENABLED&&t!==i)this.value=i;else if(e===rY.MEDIA_AUDIO_TRACK_LIST&&t!==i){var a;ux(this,p5,null==(a=null!=i?i:"")?void 0:a.split(/\s+/).map(r4)),uN(this,p8,p6).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",uN(this,p7,ve))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",uN(this,p7,ve))}get anchorElement(){var e;return"auto"!==this.anchor?super.anchorElement:null==(e=nA(this))?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return uM(this,p5)}set mediaAudioTrackList(e){ux(this,p5,e),uN(this,p8,p6).call(this)}get mediaAudioTrackEnabled(){var e;return null!=(e=nB(this,rY.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){nH(this,rY.MEDIA_AUDIO_TRACK_ENABLED,e)}}p5=new WeakMap,p9=new WeakMap,p8=new WeakSet,p6=function(){if(uM(this,p9)===JSON.stringify(this.mediaAudioTrackList))return;ux(this,p9,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e.sort((e,t)=>e.id.localeCompare(t.id,void 0,{numeric:!0})),e)){let e=um({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(up(this,"checked-indicator")),this.defaultSlot.append(e)}},p7=new WeakSet,ve=function(){if(null==this.value)return;let e=new nv.CustomEvent(rV.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},nv.customElements.get("media-audio-track-menu")||nv.customElements.define("media-audio-track-menu",uP);let uU=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,uW=e=>{let t=ni("Audio");e.setAttribute("aria-label",t)};class uB extends uL{static get observedAttributes(){return[...super.observedAttributes,rY.MEDIA_AUDIO_TRACK_ENABLED,rY.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),uW(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rY.MEDIA_LANG&&uW(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=nA(this))?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return null!=(e=nB(this,rY.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){nH(this,rY.MEDIA_AUDIO_TRACK_ENABLED,e)}}uB.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${uU}</slot>
  `},uB.getTooltipContentHTML=function(){return ni("Audio")},nv.customElements.get("media-audio-track-menu-button")||nv.customElements.define("media-audio-track-menu-button",uB);var uH=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},uF=(e,t,i)=>(uH(e,t,"read from private field"),i?i.call(e):t.get(e)),uV=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},uK=(e,t,i,a)=>(uH(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),u$=(e,t,i)=>(uH(e,t,"access private method"),i);let uq=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class uY extends uE{constructor(){super(...arguments),uV(this,vi),uV(this,vr),uV(this,vt,void 0)}static get observedAttributes(){return[...super.observedAttributes,rY.MEDIA_SUBTITLES_LIST,rY.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rY.MEDIA_SUBTITLES_LIST&&t!==i?u$(this,vi,va).call(this):e===rY.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i||"",u$(this,vi,va).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",u$(this,vr,vn))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",u$(this,vr,vn))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:nA(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return uG(this,rY.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){uj(this,rY.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return uG(this,rY.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){uj(this,rY.MEDIA_SUBTITLES_SHOWING,e)}}vt=new WeakMap,vi=new WeakSet,va=function(){var e;let t=uF(this,vt)!==JSON.stringify(this.mediaSubtitlesList),i=this.value!==this.getAttribute(rY.MEDIA_SUBTITLES_SHOWING);if(!t&&!i)return;uK(this,vt,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";let a=!this.value,r=um({type:"radio",text:this.formatMenuItemText(ni("Off")),value:"off",checked:a});for(let t of(r.prepend(up(this,"checked-indicator")),this.defaultSlot.append(r),this.mediaSubtitlesList)){let i=um({type:"radio",text:this.formatMenuItemText(t.label,t),value:se(t),checked:this.value==se(t)});i.prepend(up(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(up(this,"captions-indicator")),this.defaultSlot.append(i)}},vr=new WeakSet,vn=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(rY.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new nv.CustomEvent(rV.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new nv.CustomEvent(rV.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},uY.getTemplateHTML=function(e){return`
    ${uE.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${uq}</slot>
  `};let uG=(e,t)=>{let i=e.getAttribute(t);return i?n6(i):[]},uj=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=st(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};nv.customElements.get("media-captions-menu")||nv.customElements.define("media-captions-menu",uY);let uQ=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,uz=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,uZ=e=>{e.setAttribute("data-captions-enabled",ss(e).toString())},uX=e=>{e.setAttribute("aria-label",ni("closed captions"))};class uJ extends uL{static get observedAttributes(){return[...super.observedAttributes,rY.MEDIA_SUBTITLES_LIST,rY.MEDIA_SUBTITLES_SHOWING,rY.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),uX(this),uZ(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rY.MEDIA_SUBTITLES_SHOWING?uZ(this):e===rY.MEDIA_LANG&&uX(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=nA(this))?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return u0(this,rY.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){u1(this,rY.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return u0(this,rY.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){u1(this,rY.MEDIA_SUBTITLES_SHOWING,e)}}uJ.getSlotTemplateHTML=function(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${uQ}</slot>
      <slot name="off">${uz}</slot>
    </slot>
  `},uJ.getTooltipContentHTML=function(){return ni("Captions")};let u0=(e,t)=>{let i=e.getAttribute(t);return i?n6(i):[]},u1=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=st(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};nv.customElements.get("media-captions-menu-button")||nv.customElements.define("media-captions-menu-button",uJ);var u2=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},u3=(e,t,i)=>(u2(e,t,"read from private field"),i?i.call(e):t.get(e)),u4=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},u5=(e,t,i)=>(u2(e,t,"access private method"),i);let u9={RATES:"rates"};class u8 extends uE{constructor(){super(),u4(this,vo),u4(this,vd),u4(this,vs,new n5(this,u9.RATES,{defaultValue:lR})),u5(this,vo,vl).call(this)}static get observedAttributes(){return[...super.observedAttributes,rY.MEDIA_PLAYBACK_RATE,u9.RATES]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rY.MEDIA_PLAYBACK_RATE&&t!=i?(this.value=i,u5(this,vo,vl).call(this)):e===u9.RATES&&t!=i&&(u3(this,vs).value=i,u5(this,vo,vl).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",u5(this,vd,vu))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",u5(this,vd,vu))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:nA(this).querySelector("media-playback-rate-menu-button")}get rates(){return u3(this,vs)}set rates(e){e?Array.isArray(e)?u3(this,vs).value=e.join(" "):"string"==typeof e&&(u3(this,vs).value=e):u3(this,vs).value="",u5(this,vo,vl).call(this)}get mediaPlaybackRate(){return nN(this,rY.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){nP(this,rY.MEDIA_PLAYBACK_RATE,e)}}vs=new WeakMap,vo=new WeakSet,vl=function(){this.defaultSlot.textContent="";let e=this.mediaPlaybackRate,t=new Set(Array.from(u3(this,vs)).map(e=>Number(e)));for(let i of(e>0&&!t.has(e)&&t.add(e),Array.from(t).sort((e,t)=>e-t))){let t=um({type:"radio",text:this.formatMenuItemText(`${i}x`,i),value:i.toString(),checked:e===i});t.prepend(up(this,"checked-indicator")),this.defaultSlot.append(t)}},vd=new WeakSet,vu=function(){if(!this.value)return;let e=new nv.CustomEvent(rV.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},nv.customElements.get("media-playback-rate-menu")||nv.customElements.define("media-playback-rate-menu",u8);class u6 extends uL{static get observedAttributes(){return[...super.observedAttributes,rY.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===rY.MEDIA_PLAYBACK_RATE){let e=i?+i:Number.NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",ni("Playback rate {playbackRate}",{playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:nA(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return nN(this,rY.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){nP(this,rY.MEDIA_PLAYBACK_RATE,e)}}u6.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot {
        display: block;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},u6.getTooltipContentHTML=function(){return ni("Playback rate")},nv.customElements.get("media-playback-rate-menu-button")||nv.customElements.define("media-playback-rate-menu-button",u6);var u7=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ce=(e,t,i)=>(u7(e,t,"read from private field"),i?i.call(e):t.get(e)),ct=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ci=(e,t,i,a)=>(u7(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ca=(e,t,i)=>(u7(e,t,"access private method"),i);class cr extends uE{constructor(){super(...arguments),ct(this,vm),ct(this,vv),ct(this,vc,[]),ct(this,vh,{})}static get observedAttributes(){return[...super.observedAttributes,rY.MEDIA_RENDITION_LIST,rY.MEDIA_RENDITION_SELECTED,rY.MEDIA_RENDITION_UNAVAILABLE,rY.MEDIA_HEIGHT]}static formatMenuItemText(e,t){return super.formatMenuItemText(e,t)}static formatRendition(e,{showBitrate:t=!1}={}){let i=`${Math.min(e.width,e.height)}p`;if(t&&e.bitrate){let t=e.bitrate/1e6,a=`${t.toFixed(t<1?1:0)} Mbps`;return`${i} (${a})`}return this.formatMenuItemText(i,e)}static compareRendition(e,t){var i,a;return t.height===e.height?(null!=(i=t.bitrate)?i:0)-(null!=(a=e.bitrate)?a:0):t.height-e.height}attributeChangedCallback(e,t,i){(super.attributeChangedCallback(e,t,i),e===rY.MEDIA_RENDITION_SELECTED&&t!==i)?(this.value=null!=i?i:"auto",ca(this,vm,vp).call(this)):e===rY.MEDIA_RENDITION_LIST&&t!==i?(ci(this,vc,null==i?void 0:i.split(/\s+/).map(r2)),ca(this,vm,vp).call(this)):e===rY.MEDIA_HEIGHT&&t!==i&&ca(this,vm,vp).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ca(this,vv,vE))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ca(this,vv,vE))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:nA(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return ce(this,vc)}set mediaRenditionList(e){ci(this,vc,e),ca(this,vm,vp).call(this)}get mediaRenditionSelected(){return nB(this,rY.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){nH(this,rY.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return nN(this,rY.MEDIA_HEIGHT)}set mediaHeight(e){nP(this,rY.MEDIA_HEIGHT,e)}compareRendition(e,t){return this.constructor.compareRendition(e,t)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}formatRendition(e,t){return this.constructor.formatRendition(e,t)}showRenditionBitrate(e){return this.mediaRenditionList.some(t=>t!==e&&t.height===e.height&&t.bitrate!==e.bitrate)}}vc=new WeakMap,vh=new WeakMap,vm=new WeakSet,vp=function(){if(ce(this,vh).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&ce(this,vh).mediaHeight===this.mediaHeight)return;ce(this,vh).mediaRenditionList=JSON.stringify(this.mediaRenditionList),ce(this,vh).mediaHeight=this.mediaHeight;let e=this.mediaRenditionList.sort(this.compareRendition.bind(this)),t=e.find(e=>e.id===this.mediaRenditionSelected);for(let i of e)i.selected=i===t;this.defaultSlot.textContent="";let i=!this.mediaRenditionSelected;for(let t of e){let e=um({type:"radio",text:this.formatRendition(t,{showBitrate:this.showRenditionBitrate(t)}),value:`${t.id}`,checked:t.selected&&!i});e.prepend(up(this,"checked-indicator")),this.defaultSlot.append(e)}let a=t&&this.showRenditionBitrate(t),r=i?t?this.formatMenuItemText(`${ni("Auto")} \u2022 ${this.formatRendition(t,{showBitrate:a})}`,t):this.formatMenuItemText(`${ni("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(ni("Auto")),n=um({type:"radio",text:r,value:"auto",checked:i});n.dataset.description=r,n.prepend(up(this,"checked-indicator")),this.defaultSlot.append(n)},vv=new WeakSet,vE=function(){if(null==this.value)return;let e=new nv.CustomEvent(rV.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},nv.customElements.get("media-rendition-menu")||nv.customElements.define("media-rendition-menu",cr);let cn=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class cs extends uL{static get observedAttributes(){return[...super.observedAttributes,rY.MEDIA_RENDITION_SELECTED,rY.MEDIA_RENDITION_UNAVAILABLE,rY.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",ni("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:nA(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return nB(this,rY.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){nH(this,rY.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return nN(this,rY.MEDIA_HEIGHT)}set mediaHeight(e){nP(this,rY.MEDIA_HEIGHT,e)}}cs.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${cn}</slot>
  `},cs.getTooltipContentHTML=function(){return ni("Quality")},nv.customElements.get("media-rendition-menu-button")||nv.customElements.define("media-rendition-menu-button",cs);var co=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},cl=(e,t,i)=>(co(e,t,"read from private field"),i?i.call(e):t.get(e)),cd=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},cu=(e,t,i,a)=>(co(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),cc=(e,t,i)=>(co(e,t,"access private method"),i);class ch extends uE{constructor(){super(),cd(this,vg),cd(this,v_),cd(this,vT),cd(this,vk),cd(this,vI),cd(this,vb,!1),cd(this,vS,e=>{let t=e.target,i=(null==t?void 0:t.nodeName)==="VIDEO",a=cc(this,vk,vw).call(this,t);(i||a)&&(cl(this,vb)?cc(this,v_,vy).call(this):cc(this,vI,vR).call(this,e))}),cd(this,vL,e=>{let t=e.target,i=this.contains(t),a=2===e.button,r=(null==t?void 0:t.nodeName)==="VIDEO",n=cc(this,vk,vw).call(this,t);!i&&(a&&(r||n)||cc(this,v_,vy).call(this))}),cd(this,vD,e=>{"Escape"===e.key&&cc(this,v_,vy).call(this)}),cd(this,vC,e=>{var t,i;let a=e.target;if(null==(t=a.matches)?void 0:t.call(a,'button[invoke="copy"]')){let e=null==(i=a.closest("media-context-menu-item"))?void 0:i.querySelector('input[slot="copy"]');e&&navigator.clipboard.writeText(e.value)}cc(this,v_,vy).call(this)}),this.setAttribute("noautohide",""),cc(this,vg,vf).call(this)}connectedCallback(){super.connectedCallback(),nA(this).addEventListener("contextmenu",cl(this,vS)),this.addEventListener("click",cl(this,vC))}disconnectedCallback(){super.disconnectedCallback(),nA(this).removeEventListener("contextmenu",cl(this,vS)),this.removeEventListener("click",cl(this,vC)),document.removeEventListener("mousedown",cl(this,vL)),document.removeEventListener("keydown",cl(this,vD))}}vb=new WeakMap,vg=new WeakSet,vf=function(){this.hidden=!cl(this,vb)},v_=new WeakSet,vy=function(){cu(this,vb,!1),cc(this,vg,vf).call(this)},vT=new WeakSet,vA=function(){document.querySelectorAll("media-context-menu").forEach(e=>{e!==this&&cc(e,v_,vy).call(e)})},vk=new WeakSet,vw=function(e){return!!e&&(!!e.hasAttribute("slot")&&"media"===e.getAttribute("slot")||!!(e.nodeName.includes("-")&&e.tagName.includes("-"))&&(e.hasAttribute("src")||e.hasAttribute("poster")||e.hasAttribute("preload")||e.hasAttribute("playsinline")))},vS=new WeakMap,vI=new WeakSet,vR=function(e){e.preventDefault(),cc(this,vT,vA).call(this),cu(this,vb,!0),this.style.position="fixed",this.style.left=`${e.clientX}px`,this.style.top=`${e.clientY}px`,cc(this,vg,vf).call(this),document.addEventListener("mousedown",cl(this,vL),{once:!0}),document.addEventListener("keydown",cl(this,vD),{once:!0})},vL=new WeakMap,vD=new WeakMap,vC=new WeakMap,ch.getTemplateHTML=function(e){return`
      ${uE.getTemplateHTML(e)}
      <style>
        :host {
          --_menu-bg: rgb(20 20 30 / .8);
          background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
          min-width: var(--media-settings-menu-min-width, 170px);
          border-radius: 2px;
          overflow: hidden;
        }
      </style>
    `},nv.customElements.get("media-context-menu")||nv.customElements.define("media-context-menu",ch);class cm extends uw{}cm.shadowRootOptions={mode:"open"},cm.getTemplateHTML=function(e){return`
    ${uw.getTemplateHTML.call(this,e)}
    <style>
        ::slotted(*) {
            color: var(--media-text-color, white);
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            min-height: var(--media-control-height, 24px);
        }
    </style>
  `},nv.customElements.get("media-context-menu-item")||nv.customElements.define("media-context-menu-item",cm);var cp=e=>{throw TypeError(e)},cv=(e,t,i)=>t.has(e)||cp("Cannot "+i),cE=(e,t,i)=>(cv(e,t,"read from private field"),i?i.call(e):t.get(e)),cb=(e,t,i)=>t.has(e)?cp("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),cg=(e,t,i,a)=>(cv(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),cf=(e,t,i)=>(cv(e,t,"access private method"),i),c_=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends c_{}globalThis.DocumentFragment=e}var cy,cT,cA,ck,cw,cS,cI,cR,cL,cD,cC,cM,cO,cx,cN,cP,cU,cW,cB,cH,cF,cV,cK,c$,cq,cY,cG,cj,cQ,cz,cZ,cX,cJ,c0,c1,c2,c3,c4,c5,c9,c8,c6,c7,he,ht,hi,ha,hr,hn,hs,ho,hl,hd,hu,hc,hh,hm,hp,hv,hE,hb,hg,hf,h_,hy,hT,hA,hk,hw,hS,hI,hR,hL,hD,hC,hM,hO,hx,hN,hP,hU,hW,hB,hH,hF,hV,hK,h$,hq,hY,hG,hj,hQ,hz,hZ,hX,hJ,h0,h1,h2,h3,h4,h5,h9,h8,h6,h7,me,mt,mi,ma,mr,mn,ms,mo,ml,md,mu,mc,mh,mm,mp,mv,mE,mb,mg,mf,m_,my,mT,mA,mk,mw,mS,mI,mR,mL,mD,mC,mM,mO,mx,mN,mP,mU,mW,mB,mH,mF,mV,mK,m$,mq,mY,mG,mj,mQ,mz,mZ,mX,mJ,m0,m1,m2,m3,m4,m5,m9,m8,m6,m7,pe,pt,pi,pa,pr,pn,ps,po,pl,pd,pu,pc,ph,pm,pp,pv,pE,pb,pg,pf,p_,py,pT,pA,pk,pw,pS,pI,pR,pL,pD,pC,pM,pO,px,pN,pP,pU,pW,pB,pH,pF,pV,pK,p$,pq,pY,pG,pj,pQ,pz,pZ,pX,pJ,p0,p1,p2,p3,p4,p5,p9,p8,p6,p7,ve,vt,vi,va,vr,vn,vs,vo,vl,vd,vu,vc,vh,vm,vp,vv,vE,vb,vg,vf,v_,vy,vT,vA,vk,vw,vS,vI,vR,vL,vD,vC,vM,vO=class extends c_{},vx=class{constructor(e,t={}){cb(this,vM),cg(this,vM,null==t?void 0:t.detail)}get detail(){return cE(this,vM)}initCustomEvent(){}};vM=new WeakMap;var vN={document:{createElement:function(e,t){return new vO}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(vO)},CustomEvent:vx,EventTarget:c_,HTMLElement:vO,HTMLVideoElement:class extends c_{}},vP="undefined"==typeof window||void 0===globalThis.customElements,vU=vP?vN:globalThis,vW=vP?vN.document:globalThis.document;function vB(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function vH(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function vF(e){if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}function vV(e){let t=(function(e){let t={};for(let i in e)null!=e[i]&&(t[i]=e[i]);return new URLSearchParams(t)})(e).toString();return t?"?"+t:""}var vK,v$,vq,vY=(e,t)=>!!e&&!!t&&(!!e.contains(t)||vY(e,t.getRootNode().host)),vG="mux.com",vj=(()=>{try{return"3.11.8"}catch{}return"UNKNOWN"})(),vQ=(e,{token:t,customDomain:i=vG,thumbnailTime:a,programTime:r}={})=>{var n;let s=null==t?a:void 0,{aud:o}=null!=(n=io(t))?n:{};if(!(t&&"t"!==o))return`https://image.${i}/${e}/thumbnail.webp${vV({token:t,time:s,program_time:r})}`},vz=(e,{token:t,customDomain:i=vG,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:s}=null!=(n=io(t))?n:{};if(!(t&&"s"!==s))return`https://image.${i}/${e}/storyboard.vtt${vV({token:t,format:"webp",program_start_time:a,program_end_time:r})}`},vZ=e=>{if(e){if([tQ.LIVE,tQ.ON_DEMAND].includes(e))return e;if(null!=e&&e.includes("live"))return tQ.LIVE}},vX={crossorigin:"crossOrigin",playsinline:"playsInline"},vJ=class{constructor(e,t){cb(this,vK),cb(this,v$),cb(this,vq,[]),cg(this,vK,e),cg(this,v$,t)}[Symbol.iterator](){return cE(this,vq).values()}get length(){return cE(this,vq).length}get value(){var e;return null!=(e=cE(this,vq).join(" "))?e:""}set value(e){var t;e!==this.value&&(cg(this,vq,[]),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return cE(this,vq)[e]}values(){return cE(this,vq).values()}keys(){return cE(this,vq).keys()}forEach(e){cE(this,vq).forEach(e)}add(...e){var t,i;e.forEach(e=>{this.contains(e)||cE(this,vq).push(e)}),(""!==this.value||null!=(t=cE(this,vK))&&t.hasAttribute(`${cE(this,v$)}`))&&null!=(i=cE(this,vK))&&i.setAttribute(`${cE(this,v$)}`,`${this.value}`)}remove(...e){var t;e.forEach(e=>{cE(this,vq).splice(cE(this,vq).indexOf(e),1)}),null==(t=cE(this,vK))||t.setAttribute(`${cE(this,v$)}`,`${this.value}`)}contains(e){return cE(this,vq).includes(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};vK=new WeakMap,v$=new WeakMap,vq=new WeakMap;var v0=`[mux-player ${vj}]`;function v1(...e){console.warn(v0,...e)}function v2(...e){console.error(v0,...e)}function v3(e){var t;let i=null!=(t=e.message)?t:"";e.context&&(i+=` ${e.context}`),e.file&&(i+=` ${ih("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),v1(i)}var v4={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},v5={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},v9=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),v8=[...Object.values(v4).filter(e=>v4.PLAYSINLINE!==e),...Object.values(v5)];function v6(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var v7=class extends vU.HTMLElement{static get observedAttributes(){return v8}constructor(){super()}attributeChangedCallback(e,t,i){var a,r;switch(e){case v5.MUTED:this.media&&(this.media.muted=null!=i,this.media.defaultMuted=null!=i);return;case v5.VOLUME:{let e=null!=(a=vF(i))?a:1;this.media&&(this.media.volume=e);return}case v5.PLAYBACKRATE:{let e=null!=(r=vF(i))?r:1;this.media&&(this.media.playbackRate=e,this.media.defaultPlaybackRate=e);return}}}play(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.play())?t:Promise.reject()}pause(){var e;null==(e=this.media)||e.pause()}load(){var e;null==(e=this.media)||e.load()}get media(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return null==(t=null==(e=this.media)?void 0:e.paused)||t}get duration(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.duration)?t:NaN}get ended(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.ended)&&t}get buffered(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.buffered)?t:v9}get seekable(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.seekable)?t:v9}get readyState(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.readyState)?t:0}get videoWidth(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoWidth)?t:0}get videoHeight(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoHeight)?t:0}get currentSrc(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentSrc)?t:""}get currentTime(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentTime)?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.volume)?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.playbackRate)?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return null!=(e=vF(this.getAttribute(v5.PLAYBACKRATE)))?e:1}set defaultPlaybackRate(e){null!=e?this.setAttribute(v5.PLAYBACKRATE,`${e}`):this.removeAttribute(v5.PLAYBACKRATE)}get crossOrigin(){return v6(this,v4.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(v4.CROSSORIGIN,`${e}`)}get autoplay(){return null!=v6(this,v4.AUTOPLAY)}set autoplay(e){e?this.setAttribute(v4.AUTOPLAY,"string"==typeof e?e:""):this.removeAttribute(v4.AUTOPLAY)}get loop(){return null!=v6(this,v4.LOOP)}set loop(e){e?this.setAttribute(v4.LOOP,""):this.removeAttribute(v4.LOOP)}get muted(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.muted)&&t}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return null!=v6(this,v4.MUTED)}set defaultMuted(e){e?this.setAttribute(v4.MUTED,""):this.removeAttribute(v4.MUTED)}get playsInline(){return null!=v6(this,v4.PLAYSINLINE)}set playsInline(e){v2("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(v4.PRELOAD,e):this.removeAttribute(v4.PRELOAD)}},Ee=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,Et=new WeakMap,Ei=class e{constructor(e,t){this.element=e,this.type=t,this.element.addEventListener(this.type,this);let i=Et.get(this.element);i&&i.set(this.type,this)}set(e){if("function"==typeof e)this.handleEvent=e.bind(this.element);else if("object"==typeof e&&"function"==typeof e.handleEvent)this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let e=Et.get(this.element);e&&e.delete(this.type)}}static for(t){Et.has(t.element)||Et.set(t.element,new Map);let i=t.attributeName.slice(2),a=Et.get(t.element);return a&&a.has(i)?a.get(i):new e(t.element,i)}},Ea=new Map,Er=new WeakMap,En=new WeakMap,Es=class{constructor(e,t,i){this.strings=e,this.values=t,this.processor=i,this.stringsKey=this.strings.join("\x01")}get template(){if(Ea.has(this.stringsKey))return Ea.get(this.stringsKey);{let e=vW.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((e,i,a)=>e+i+(a<t?`{{ ${a} }}`:""),""),Ea.set(this.stringsKey,e),e}}renderInto(e){var t;let i=this.template;if(Er.get(e)!==i){Er.set(e,i);let t=new dW(i,this.values,this.processor);En.set(e,t),e instanceof dY?e.replace(...t.children):e.appendChild(t);return}let a=En.get(e);null==(t=null==a?void 0:a.update)||t.call(a,this.values)}},Eo={processCallback(e,t,i){var a,r,n;if(i)for(let[e,s]of t){e in i&&(function(e,t){if(e instanceof dq&&t instanceof Element){let i=e.element;return i[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),i[e.attributeName]=t),!0}return!1}(r=s,n=null!=(a=i[e])?a:"")||function(e,t){if("boolean"==typeof t&&e instanceof dq){let i=e.attributeNamespace;return t!==e.element.hasAttributeNS(i,e.attributeName)&&(e.booleanValue=t),!0}return!1}(r,n)||r instanceof dq&&r.attributeName.startsWith("on")&&(Ei.for(r).set(n),r.element.removeAttributeNS(r.attributeNamespace,r.attributeName),1)||!1===n&&r instanceof dY&&(r.replace(""),1)||n instanceof Es&&r instanceof dY&&(n.renderInto(r),1)||n instanceof DocumentFragment&&r instanceof dY&&(n.childNodes.length&&r.replace(...n.childNodes),1)||function(e,t){if(e instanceof dq){let i=e.attributeNamespace,a=e.element.getAttributeNS(i,e.attributeName);return String(t)!==a&&(e.value=String(t))}e.value=String(t)}(r,n))}}};function El(e,...t){return new Es(e,t,Eo)}var Ed=e=>{let{tokens:t}=e;return t.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""},Eu=e=>El`
  <style>
    ${Ed(e)}
    ${Ee}
  </style>
  ${Em(e)}
`,Ec=e=>{let t=e.hotKeys?`${e.hotKeys}`:"";return"live"===vZ(e.streamType)&&(t+=" noarrowleft noarrowright"),t},Eh=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",THUMB:"thumb",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",MENU_ITEM:"menu-item",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),Em=e=>{var t,i,a,r,n,s,o,l,d,u,c,h,m,p,v,E,b,g,f,y,T,A,k,w,S,I,R,L,D,C,M,O,x,N,P,U,W,B,H,F,V,K;let $;return El`
  <media-theme
    template="${e.themeTemplate||!1}"
    defaultstreamtype="${null!=(t=e.defaultStreamType)&&t}"
    hotkeys="${Ec(e)||!1}"
    nohotkeys="${e.noHotKeys||!e.hasSrc||!1}"
    noautoseektolive="${!!(null!=(i=e.streamType)&&i.includes(tQ.LIVE))&&0!==e.targetLiveWindow}"
    novolumepref="${e.novolumepref||!1}"
    nomutedpref="${e.nomutedpref||!1}"
    disabled="${!e.hasSrc||e.isDialogOpen}"
    audio="${null!=(a=e.audio)&&a}"
    style="${null!=(K={"--media-primary-color":e.primaryColor,"--media-secondary-color":e.secondaryColor,"--media-accent-color":e.accentColor},$="",Object.entries(K).forEach(([e,t])=>{null!=t&&($+=`${vB(e)}: ${t}; `)}),r=$?$.trim():void 0)&&r}"
    defaultsubtitles="${!e.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(n=e.forwardSeekOffset)&&n}"
    backwardseekoffset="${null!=(s=e.backwardSeekOffset)&&s}"
    playbackrates="${null!=(o=e.playbackRates)&&o}"
    defaultshowremainingtime="${null!=(l=e.defaultShowRemainingTime)&&l}"
    defaultduration="${null!=(d=e.defaultDuration)&&d}"
    hideduration="${null!=(u=e.hideDuration)&&u}"
    title="${null!=(c=e.title)&&c}"
    videotitle="${null!=(h=e.videoTitle)&&h}"
    proudlydisplaymuxbadge="${null!=(m=e.proudlyDisplayMuxBadge)&&m}"
    exportparts="${Eh}"
    onclose="${e.onCloseErrorDialog}"
    onfocusin="${e.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      inert="${null!=(p=e.noHotKeys)&&p}"
      target-live-window="${null!=(v=e.targetLiveWindow)&&v}"
      stream-type="${null!=(E=vZ(e.streamType))&&E}"
      crossorigin="${null!=(b=e.crossOrigin)?b:""}"
      playsinline
      autoplay="${null!=(g=e.autoplay)&&g}"
      muted="${null!=(f=e.muted)&&f}"
      loop="${null!=(y=e.loop)&&y}"
      preload="${null!=(T=e.preload)&&T}"
      debug="${null!=(A=e.debug)&&A}"
      prefer-cmcd="${null!=(k=e.preferCmcd)&&k}"
      disable-tracking="${null!=(w=e.disableTracking)&&w}"
      disable-cookies="${null!=(S=e.disableCookies)&&S}"
      prefer-playback="${null!=(I=e.preferPlayback)&&I}"
      start-time="${null!=e.startTime&&e.startTime}"
      beacon-collection-domain="${null!=(R=e.beaconCollectionDomain)&&R}"
      player-init-time="${null!=(L=e.playerInitTime)&&L}"
      player-software-name="${null!=(D=e.playerSoftwareName)&&D}"
      player-software-version="${null!=(C=e.playerSoftwareVersion)&&C}"
      env-key="${null!=(M=e.envKey)&&M}"
      custom-domain="${null!=(O=e.customDomain)&&O}"
      src="${e.src?e.src:!!e.playbackId&&au(e)}"
      cast-src="${e.src?e.src:!!e.playbackId&&au(e)}"
      cast-receiver="${null!=(x=e.castReceiver)&&x}"
      drm-token="${null!=(P=null==(N=e.tokens)?void 0:N.drm)&&P}"
      playback-token="${null!=(W=null==(U=e.tokens)?void 0:U.playback)&&W}"
      exportparts="video"
      disable-pseudo-ended="${null!=(B=e.disablePseudoEnded)&&B}"
      max-auto-resolution="${null!=(H=e.maxAutoResolution)&&H}"
      cap-rendition-to-player-size="${null!=(F=e.capRenditionToPlayerSize)&&F}"
    >
      ${e.storyboard?El`<track label="thumbnails" default kind="metadata" src="${e.storyboard}" />`:El``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${!!e.poster&&e.poster}"
        placeholdersrc="${null!=(V=e.placeholder)&&V}"
      ></media-poster-image>
    </slot>
  </media-theme>
`},Ep=e=>e.charAt(0).toUpperCase()+e.slice(1),Ev=(e,t=!1)=>{var i,a;if(e.muxCode){let r=Ep(null!=(i=e.errorCategory)?i:"video"),n=tK(null!=(a=e.errorCategory)?a:tF.VIDEO);if(e.muxCode===tV.NETWORK_OFFLINE)return ih("Your device appears to be offline",t);if(e.muxCode===tV.NETWORK_TOKEN_EXPIRED)return ih("{category} URL has expired",t).format({category:r});if([tV.NETWORK_TOKEN_SUB_MISMATCH,tV.NETWORK_TOKEN_AUD_MISMATCH,tV.NETWORK_TOKEN_AUD_MISSING,tV.NETWORK_TOKEN_MALFORMED].includes(e.muxCode))return ih("{category} URL is formatted incorrectly",t).format({category:r});if(e.muxCode===tV.NETWORK_TOKEN_MISSING)return ih("Invalid {categoryName} URL",t).format({categoryName:n});if(e.muxCode===tV.NETWORK_NOT_FOUND)return ih("{category} does not exist",t).format({category:r});if(e.muxCode===tV.NETWORK_NOT_READY){let i="live"===e.streamType?"Live stream":"Video";return ih("{mediaType} is not currently available",t).format({mediaType:i})}}if(e.code){if(e.code===tq.MEDIA_ERR_NETWORK)return ih("Network Error",t);if(e.code===tq.MEDIA_ERR_DECODE)return ih("Media Error",t);if(e.code===tq.MEDIA_ERR_SRC_NOT_SUPPORTED)return ih("Source Not Supported",t)}return ih("Error",t)},EE=(e,t=!1)=>{var i,a;if(e.muxCode){let r=Ep(null!=(i=e.errorCategory)?i:"video"),n=tK(null!=(a=e.errorCategory)?a:tF.VIDEO);return e.muxCode===tV.NETWORK_OFFLINE?ih("Check your internet connection and try reloading this video.",t):e.muxCode===tV.NETWORK_TOKEN_EXPIRED?ih("The video’s secured {tokenNamePrefix}-token has expired.",t).format({tokenNamePrefix:n}):e.muxCode===tV.NETWORK_TOKEN_SUB_MISMATCH?ih("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",t).format({tokenNamePrefix:n}):e.muxCode===tV.NETWORK_TOKEN_MALFORMED?ih("{category} URL is formatted incorrectly",t).format({category:r}):[tV.NETWORK_TOKEN_AUD_MISMATCH,tV.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode)?ih("The {tokenNamePrefix}-token is formatted with incorrect information.",t).format({tokenNamePrefix:n}):[tV.NETWORK_TOKEN_MISSING,tV.NETWORK_INVALID_URL].includes(e.muxCode)?ih("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",t).format({tokenNamePrefix:n}):e.muxCode===tV.NETWORK_NOT_FOUND?"":e.message}return e.code&&(e.code===tq.MEDIA_ERR_NETWORK||e.code===tq.MEDIA_ERR_DECODE||(e.code,tq.MEDIA_ERR_SRC_NOT_SUPPORTED)),e.message},Eb=(e,t=!1)=>({title:Ev(e,t).toString(),message:EE(e,t).toString()}),Eg=e=>{if(e.muxCode){if(e.muxCode===tV.NETWORK_TOKEN_EXPIRED)return"403-expired-token.md";if(e.muxCode===tV.NETWORK_TOKEN_MALFORMED)return"403-malformatted-token.md";if([tV.NETWORK_TOKEN_AUD_MISMATCH,tV.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode))return"403-incorrect-aud-value.md";if(e.muxCode===tV.NETWORK_TOKEN_SUB_MISMATCH)return"403-playback-id-mismatch.md";if(e.muxCode===tV.NETWORK_TOKEN_MISSING)return"missing-signed-tokens.md";if(e.muxCode===tV.NETWORK_NOT_FOUND)return"404-not-found.md";if(e.muxCode===tV.NETWORK_NOT_READY)return"412-not-playable.md"}if(e.code){if(e.code===tq.MEDIA_ERR_NETWORK)return"";if(e.code===tq.MEDIA_ERR_DECODE)return"media-decode-error.md";if(e.code===tq.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""},Ef=(e,t)=>{let i=Eg(e);return{message:e.message,context:e.context,file:i}},E_=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}" exportparts="thumb">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,Ey=vW.createElement("template");"innerHTML"in Ey&&(Ey.innerHTML=E_);var ET,EA,Ek=class extends ua{};Ek.template=null==(EA=null==(ET=Ey.content)?void 0:ET.children)?void 0:EA[0],vU.customElements.get("media-theme-gerwig")||vU.customElements.define("media-theme-gerwig",Ek);var Ew={SRC:"src",POSTER:"poster"},ES={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",FULLSCREEN_ELEMENT:"fullscreen-element",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",NO_MUTED_PREF:"no-muted-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},EI=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","nomutedpref","proudlydisplaymuxbadge"],ER=oJ.formatErrorMessage;function EL(e){let t=e.videoTitle?{video_title:e.videoTitle}:{};return e.getAttributeNames().filter(e=>e.startsWith("metadata-")).reduce((t,i)=>{let a=e.getAttribute(i);return null!==a&&(t[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),t},t)}oJ.formatErrorMessage=e=>{var t,i;if(e instanceof tq){let a=Eb(e,!1);return`
      ${null!=a&&a.title?`<h3>${a.title}</h3>`:""}
      ${null!=a&&a.message||null!=a&&a.linkUrl?`<p>
        ${null==a?void 0:a.message}
        ${null!=a&&a.linkUrl?`<a
              href="${a.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null!=(t=a.linkText)?t:""} ${ih("(opens in a new window)")}"
              >${null!=(i=a.linkText)?i:a.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return ER(e)};var ED,EC,EM,EO,Ex,EN,EP,EU,EW,EB,EH,EF,EV,EK,E$,Eq,EY,EG,Ej,EQ,Ez,EZ=Object.values(rs),EX=Object.values(Ew),EJ=Object.values(ES),E0="mux-player",E1={isDialogOpen:!1},E2={redundant_streams:!0},E3=class extends v7{constructor(){super(),cb(this,EV),cb(this,ED),cb(this,EC,!1),cb(this,EM,{}),cb(this,EO,!0),cb(this,Ex,new vJ(this,"hotkeys")),cb(this,EN),cb(this,EP,()=>cf(this,EV,EY).call(this)),cb(this,EU,()=>cf(this,EV,EY).call(this)),cb(this,EW,()=>cf(this,EV,EY).call(this)),cb(this,EB),cb(this,EH,{...E1,onCloseErrorDialog:e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&cf(this,EV,Eq).call(this,{isDialogOpen:!1})},onFocusInErrorDialog:e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&(vY(this,vW.activeElement)||e.preventDefault())}}),cb(this,EF,e=>{var t;let i=null==(t=this.media)?void 0:t.error;if(!(i instanceof tq)){let{message:e,code:t}=null!=i?i:{};i=new tq(e,t)}if(!(null!=i&&i.fatal)){v1(i),i.data&&v1(`${i.name} data:`,i.data);return}let a=Ef(i,!1);a.message&&v3(a),v2(i),i.data&&v2(`${i.name} data:`,i.data),cf(this,EV,Eq).call(this,{isDialogOpen:!0})}),cg(this,ED,al()),this.attachShadow({mode:"open"}),cf(this,EV,E$).call(this),this.isConnected&&cf(this,EV,EK).call(this)}static get NAME(){return E0}static get VERSION(){return vj}static get observedAttributes(){var e;return[...null!=(e=v7.observedAttributes)?e:[],...EX,...EZ,...EJ]}get mediaTheme(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return null==(t=null==(e=this.mediaTheme)?void 0:e.shadowRoot)?void 0:t.querySelector("media-controller")}connectedCallback(){cf(this,EV,EK).call(this);let e=this.media;e&&(e.metadata=EL(this))}disconnectedCallback(){var e,t,i,a,r,n,s,o;null==(e=cE(this,EN))||e.disconnect(),null==(t=this.media)||t.removeEventListener("streamtypechange",cE(this,EP)),null==(i=this.media)||i.removeEventListener("loadstart",cE(this,EU)),this.removeEventListener("error",cE(this,EF)),this.media&&(this.media.errorTranslator=void 0),null==(r=null==(a=this.media)?void 0:a.textTracks)||r.removeEventListener("addtrack",cE(this,EW)),null==(s=null==(n=this.media)?void 0:n.textTracks)||s.removeEventListener("removetrack",cE(this,EW)),null==(o=cE(this,EB))||o.call(this),cg(this,EB,void 0),cg(this,EC,!1)}attributeChangedCallback(e,t,i){var a;switch(cf(this,EV,EK).call(this),super.attributeChangedCallback(e,t,i),e){case ES.HOTKEYS:cE(this,Ex).value=i;break;case ES.THUMBNAIL_TIME:null!=i&&this.tokens.thumbnail&&v1(ih("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break;case ES.THUMBNAIL_TOKEN:if(i){let e=io(i);if(e){let{aud:t}=e,i=iP.THUMBNAIL;t!==i&&v1(ih("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:i,tokenNamePrefix:"thumbnail"}))}}break;case ES.STORYBOARD_TOKEN:if(i){let e=io(i);if(e){let{aud:t}=e,i=iP.STORYBOARD;t!==i&&v1(ih("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:i,tokenNamePrefix:"storyboard"}))}}break;case ES.DRM_TOKEN:if(i){let e=io(i);if(e){let{aud:t}=e,i=iP.DRM;t!==i&&v1(ih("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:i,tokenNamePrefix:"drm"}))}}break;case rs.PLAYBACK_ID:null!=i&&i.includes("?token")&&v2(ih("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break;case rs.STREAM_TYPE:i&&![tQ.LIVE,tQ.ON_DEMAND,tQ.UNKNOWN].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?Number.POSITIVE_INFINITY:0:v3({file:"invalid-stream-type.md",message:ih("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===tQ.LIVE?null==this.getAttribute(ES.TARGET_LIVE_WINDOW)&&(this.targetLiveWindow=0):this.targetLiveWindow=Number.NaN;break;case ES.FULLSCREEN_ELEMENT:if(null!=i||i!==t){let e=vW.getElementById(i),t=null==e?void 0:e.querySelector("mux-player");this.mediaController&&e&&t&&(this.mediaController.fullscreenElement=e)}break;case rs.CAP_RENDITION_TO_PLAYER_SIZE:(null==i||i!==t)&&(this.capRenditionToPlayerSize=null!=i||void 0)}[rs.PLAYBACK_ID,Ew.SRC,ES.PLAYBACK_TOKEN].includes(e)&&t!==i&&cg(this,EH,{...cE(this,EH),...E1}),cf(this,EV,EY).call(this,{[null!=(a=vX[e])?a:vH(e)]:i})}async requestFullscreen(e){var t;if(!(!this.mediaController||this.mediaController.hasAttribute(rY.MEDIA_IS_FULLSCREEN)))return null==(t=this.mediaController)||t.dispatchEvent(new vU.CustomEvent(rV.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(rG.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}async exitFullscreen(){var e;if(!(!this.mediaController||!this.mediaController.hasAttribute(rY.MEDIA_IS_FULLSCREEN)))return null==(e=this.mediaController)||e.dispatchEvent(new vU.CustomEvent(rV.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(rG.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}get preferCmcd(){var e;return null!=(e=this.getAttribute(rs.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?tX.includes(e)?this.setAttribute(rs.PREFER_CMCD,e):v1(`Invalid value for preferCmcd. Must be one of ${tX.join()}`):this.removeAttribute(rs.PREFER_CMCD))}get hasPlayed(){var e,t;return null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(rY.MEDIA_HAS_PLAYED))&&t}get inLiveWindow(){var e;return null==(e=this.mediaController)?void 0:e.hasAttribute(rY.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return null==(e=this.media)?void 0:e._hls}get mux(){var e;return null==(e=this.media)?void 0:e.mux}get theme(){var e;return null!=(e=this.getAttribute(ES.THEME))?e:"gerwig"}set theme(e){this.setAttribute(ES.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let i of e.getAttributeNames()){if(EI.includes(i))continue;let a=e.getAttribute(i);t[vH(i)]=""===a||a}return t}set themeProps(e){var t,i;cf(this,EV,EK).call(this);let a={...this.themeProps,...e};for(let r in a){if(EI.includes(r))continue;let a=null==e?void 0:e[r];"boolean"==typeof a||null==a?null==(t=this.mediaTheme)||t.toggleAttribute(vB(r),!!a):null==(i=this.mediaTheme)||i.setAttribute(vB(r),a)}}get playbackId(){var e;return null!=(e=this.getAttribute(rs.PLAYBACK_ID))?e:void 0}set playbackId(e){e?this.setAttribute(rs.PLAYBACK_ID,e):this.removeAttribute(rs.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?null!=(e=E4(this,Ew.SRC))?e:void 0:null!=(t=this.getAttribute(Ew.SRC))?t:void 0}set src(e){e?this.setAttribute(Ew.SRC,e):this.removeAttribute(Ew.SRC)}get poster(){var e;let t=this.getAttribute(Ew.POSTER);if(null!=t)return t;let{tokens:i}=this;if(i.playback&&!i.thumbnail){v1("Missing expected thumbnail token. No poster image will be shown");return}if(this.playbackId&&!this.audio)return vQ(this.playbackId,{customDomain:this.customDomain,thumbnailTime:null!=(e=this.thumbnailTime)?e:this.startTime,programTime:this.programStartTime,token:i.thumbnail})}set poster(e){e||""===e?this.setAttribute(Ew.POSTER,e):this.removeAttribute(Ew.POSTER)}get storyboardSrc(){var e;return null!=(e=this.getAttribute(ES.STORYBOARD_SRC))?e:void 0}set storyboardSrc(e){e?this.setAttribute(ES.STORYBOARD_SRC,e):this.removeAttribute(ES.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;return this.storyboardSrc&&!e.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[tQ.LIVE,tQ.UNKNOWN].includes(this.streamType)||e.playback&&!e.storyboard?void 0:vz(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(ES.AUDIO)}set audio(e){if(!e){this.removeAttribute(ES.AUDIO);return}this.setAttribute(ES.AUDIO,"")}get hotkeys(){return cE(this,Ex)}get nohotkeys(){return this.hasAttribute(ES.NOHOTKEYS)}set nohotkeys(e){if(!e){this.removeAttribute(ES.NOHOTKEYS);return}this.setAttribute(ES.NOHOTKEYS,"")}get thumbnailTime(){return vF(this.getAttribute(ES.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(ES.THUMBNAIL_TIME,`${e}`)}get videoTitle(){var e,t;return null!=(t=null!=(e=this.getAttribute(ES.VIDEO_TITLE))?e:this.getAttribute(ES.TITLE))?t:""}set videoTitle(e){e!==this.videoTitle&&(e?this.setAttribute(ES.VIDEO_TITLE,e):this.removeAttribute(ES.VIDEO_TITLE))}get placeholder(){var e;return null!=(e=E4(this,ES.PLACEHOLDER))?e:""}set placeholder(e){this.setAttribute(ES.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let i=this.getAttribute(ES.PRIMARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=vU.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_primary-color"))?void 0:t.trim()))return i}set primaryColor(e){this.setAttribute(ES.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let i=this.getAttribute(ES.SECONDARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=vU.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_secondary-color"))?void 0:t.trim()))return i}set secondaryColor(e){this.setAttribute(ES.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let i=this.getAttribute(ES.ACCENT_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=vU.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_accent-color"))?void 0:t.trim()))return i}set accentColor(e){this.setAttribute(ES.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(ES.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(ES.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(ES.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(ES.PLAYBACK_RATES))return this.getAttribute(ES.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){if(!e){this.removeAttribute(ES.PLAYBACK_RATES);return}this.setAttribute(ES.PLAYBACK_RATES,e.join(" "))}get forwardSeekOffset(){var e;return null!=(e=vF(this.getAttribute(ES.FORWARD_SEEK_OFFSET)))?e:10}set forwardSeekOffset(e){this.setAttribute(ES.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return null!=(e=vF(this.getAttribute(ES.BACKWARD_SEEK_OFFSET)))?e:10}set backwardSeekOffset(e){this.setAttribute(ES.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(ES.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(ES.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(ES.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return vF(this.getAttribute(ES.DEFAULT_DURATION))}set defaultDuration(e){null==e?this.removeAttribute(ES.DEFAULT_DURATION):this.setAttribute(ES.DEFAULT_DURATION,`${e}`)}get playerInitTime(){return this.hasAttribute(rs.PLAYER_INIT_TIME)?vF(this.getAttribute(rs.PLAYER_INIT_TIME)):cE(this,ED)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(rs.PLAYER_INIT_TIME):this.setAttribute(rs.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=this.getAttribute(rs.PLAYER_SOFTWARE_NAME))?e:E0}get playerSoftwareVersion(){var e;return null!=(e=this.getAttribute(rs.PLAYER_SOFTWARE_VERSION))?e:vj}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(rs.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(rs.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(rs.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return null!=(e=this.getAttribute(rs.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(rs.MAX_RESOLUTION,e):this.removeAttribute(rs.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(rs.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(rs.MIN_RESOLUTION,e):this.removeAttribute(rs.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(rs.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(rs.MAX_AUTO_RESOLUTION):this.setAttribute(rs.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(rs.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(rs.RENDITION_ORDER,e):this.removeAttribute(rs.RENDITION_ORDER))}get programStartTime(){return vF(this.getAttribute(rs.PROGRAM_START_TIME))}set programStartTime(e){null==e?this.removeAttribute(rs.PROGRAM_START_TIME):this.setAttribute(rs.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return vF(this.getAttribute(rs.PROGRAM_END_TIME))}set programEndTime(e){null==e?this.removeAttribute(rs.PROGRAM_END_TIME):this.setAttribute(rs.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return vF(this.getAttribute(rs.ASSET_START_TIME))}set assetStartTime(e){null==e?this.removeAttribute(rs.ASSET_START_TIME):this.setAttribute(rs.ASSET_START_TIME,`${e}`)}get assetEndTime(){return vF(this.getAttribute(rs.ASSET_END_TIME))}set assetEndTime(e){null==e?this.removeAttribute(rs.ASSET_END_TIME):this.setAttribute(rs.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(ES.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(ES.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,i])=>(e[t]=i,e),{}):E2}set extraSourceParams(e){null==e?this.removeAttribute(ES.EXTRA_SOURCE_PARAMS):this.setAttribute(ES.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return null!=(e=this.getAttribute(rs.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(rs.CUSTOM_DOMAIN,e):this.removeAttribute(rs.CUSTOM_DOMAIN))}get envKey(){var e;return null!=(e=E4(this,rs.ENV_KEY))?e:void 0}set envKey(e){this.setAttribute(rs.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(ES.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(ES.NO_VOLUME_PREF,""):this.removeAttribute(ES.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(ES.NO_MUTED_PREF)}set noMutedPref(e){e?this.setAttribute(ES.NO_MUTED_PREF,""):this.removeAttribute(ES.NO_MUTED_PREF)}get debug(){return null!=E4(this,rs.DEBUG)}set debug(e){e?this.setAttribute(rs.DEBUG,""):this.removeAttribute(rs.DEBUG)}get disableTracking(){return null!=E4(this,rs.DISABLE_TRACKING)}set disableTracking(e){this.toggleAttribute(rs.DISABLE_TRACKING,!!e)}get disableCookies(){return null!=E4(this,rs.DISABLE_COOKIES)}set disableCookies(e){e?this.setAttribute(rs.DISABLE_COOKIES,""):this.removeAttribute(rs.DISABLE_COOKIES)}get streamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(rs.STREAM_TYPE))?t:null==(e=this.media)?void 0:e.streamType)?i:tQ.UNKNOWN}set streamType(e){this.setAttribute(rs.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(ES.DEFAULT_STREAM_TYPE))?t:null==(e=this.mediaController)?void 0:e.getAttribute(ES.DEFAULT_STREAM_TYPE))?i:tQ.ON_DEMAND}set defaultStreamType(e){e?this.setAttribute(ES.DEFAULT_STREAM_TYPE,e):this.removeAttribute(ES.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(ES.TARGET_LIVE_WINDOW)?+this.getAttribute(ES.TARGET_LIVE_WINDOW):null!=(t=null==(e=this.media)?void 0:e.targetLiveWindow)?t:Number.NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(null==e?this.removeAttribute(ES.TARGET_LIVE_WINDOW):this.setAttribute(ES.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return null==(e=this.media)?void 0:e.liveEdgeStart}get startTime(){return vF(E4(this,rs.START_TIME))}set startTime(e){this.setAttribute(rs.START_TIME,`${e}`)}get preferPlayback(){let e=this.getAttribute(rs.PREFER_PLAYBACK);if(e===tz.MSE||e===tz.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===tz.MSE||e===tz.NATIVE?this.setAttribute(rs.PREFER_PLAYBACK,e):this.removeAttribute(rs.PREFER_PLAYBACK))}get metadata(){var e;return null==(e=this.media)?void 0:e.metadata}set metadata(e){if(cf(this,EV,EK).call(this),!this.media){v2("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={...EL(this),...e}}get _hlsConfig(){var e;return null==(e=this.media)?void 0:e._hlsConfig}set _hlsConfig(e){if(cf(this,EV,EK).call(this),!this.media){v2("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");return}this.media._hlsConfig=e}async addCuePoints(e){var t;if(cf(this,EV,EK).call(this),!this.media){v2("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");return}return null==(t=this.media)?void 0:t.addCuePoints(e)}get activeCuePoint(){var e;return null==(e=this.media)?void 0:e.activeCuePoint}get cuePoints(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.cuePoints)?t:[]}addChapters(e){var t;if(cf(this,EV,EK).call(this),!this.media){v2("underlying media element missing when trying to addChapters. chapters will not be added.");return}return null==(t=this.media)?void 0:t.addChapters(e)}get activeChapter(){var e;return null==(e=this.media)?void 0:e.activeChapter}get chapters(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.chapters)?t:[]}getStartDate(){var e;return null==(e=this.media)?void 0:e.getStartDate()}get currentPdt(){var e;return null==(e=this.media)?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(ES.PLAYBACK_TOKEN),t=this.getAttribute(ES.DRM_TOKEN),i=this.getAttribute(ES.THUMBNAIL_TOKEN),a=this.getAttribute(ES.STORYBOARD_TOKEN);return{...cE(this,EM),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{},...null!=i?{thumbnail:i}:{},...null!=a?{storyboard:a}:{}}}set tokens(e){cg(this,EM,null!=e?e:{})}get playbackToken(){var e;return null!=(e=this.getAttribute(ES.PLAYBACK_TOKEN))?e:void 0}set playbackToken(e){this.setAttribute(ES.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return null!=(e=this.getAttribute(ES.DRM_TOKEN))?e:void 0}set drmToken(e){this.setAttribute(ES.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return null!=(e=this.getAttribute(ES.THUMBNAIL_TOKEN))?e:void 0}set thumbnailToken(e){this.setAttribute(ES.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return null!=(e=this.getAttribute(ES.STORYBOARD_TOKEN))?e:void 0}set storyboardToken(e){this.setAttribute(ES.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,i,a){var r;let n=null==(r=this.media)?void 0:r.nativeEl;if(n)return iy(n,e,t,i,a)}removeTextTrack(e){var t;let i=null==(t=this.media)?void 0:t.nativeEl;if(i){let t;return void(null==(t=Array.prototype.find.call(i.querySelectorAll("track"),t=>t.track===e))||t.remove())}}get textTracks(){var e;return null==(e=this.media)?void 0:e.textTracks}get castReceiver(){var e;return null!=(e=this.getAttribute(ES.CAST_RECEIVER))?e:void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(ES.CAST_RECEIVER,e):this.removeAttribute(ES.CAST_RECEIVER))}get castCustomData(){var e;return null==(e=this.media)?void 0:e.castCustomData}set castCustomData(e){if(!this.media){v2("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");return}this.media.castCustomData=e}get noTooltips(){return this.hasAttribute(ES.NO_TOOLTIPS)}set noTooltips(e){if(!e){this.removeAttribute(ES.NO_TOOLTIPS);return}this.setAttribute(ES.NO_TOOLTIPS,"")}get proudlyDisplayMuxBadge(){return this.hasAttribute(ES.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(e){e?this.setAttribute(ES.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(ES.PROUDLY_DISPLAY_MUX_BADGE)}get capRenditionToPlayerSize(){var e;return null==(e=this.media)?void 0:e.capRenditionToPlayerSize}set capRenditionToPlayerSize(e){if(!this.media){v2("underlying media element missing when trying to set capRenditionToPlayerSize");return}this.media.capRenditionToPlayerSize=e}};function E4(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}ED=new WeakMap,EC=new WeakMap,EM=new WeakMap,EO=new WeakMap,Ex=new WeakMap,EN=new WeakMap,EP=new WeakMap,EU=new WeakMap,EW=new WeakMap,EB=new WeakMap,EH=new WeakMap,EF=new WeakMap,EV=new WeakSet,EK=function(){var e,t,i,a;if(!cE(this,EC)){cg(this,EC,!0),cf(this,EV,EY).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof vU.HTMLElement))throw""}catch{v2("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{v2("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof sY))throw""}catch{v2("<media-controller> failed to upgrade!")}cf(this,EV,EG).call(this),cf(this,EV,Ej).call(this),cf(this,EV,EQ).call(this),cg(this,EO,null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(nZ.USER_INACTIVE))||t),cf(this,EV,Ez).call(this),null==(i=this.media)||i.addEventListener("streamtypechange",cE(this,EP)),null==(a=this.media)||a.addEventListener("loadstart",cE(this,EU))}},E$=function(){var e,t;try{null==(e=null==window?void 0:window.CSS)||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(t=null==window?void 0:window.CSS)||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},Eq=function(e){Object.assign(cE(this,EH),e),cf(this,EV,EY).call(this)},EY=function(e={}){var t,i,a,r,n;let s;(function(e,t){e.renderInto(t)})(Eu((t={...cE(this,EH),...e},{src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src||!!this.currentSrc,poster:this.poster,storyboard:(null==(i=this.media)?void 0:i.currentSrc)&&this.storyboard,storyboardSrc:this.getAttribute(ES.STORYBOARD_SRC),fullscreenElement:this.getAttribute(ES.FULLSCREEN_ELEMENT),placeholder:this.getAttribute("placeholder"),themeTemplate:function(e){var t,i;let a=e.theme;if(a){let r=null==(i=null==(t=e.getRootNode())?void 0:t.getElementById)?void 0:i.call(t,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=vU.customElements.get(a);if(null!=n&&n.template)return n.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(ES.NOHOTKEYS),hotKeys:this.getAttribute(ES.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableTracking:this.disableTracking,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,minResolution:this.minResolution,maxAutoResolution:this.maxAutoResolution,programStartTime:this.programStartTime,programEndTime:this.programEndTime,assetStartTime:this.assetStartTime,assetEndTime:this.assetEndTime,renditionOrder:this.renditionOrder,metadata:this.metadata,playerInitTime:this.playerInitTime,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(rs.TARGET_LIVE_WINDOW),streamType:vZ(this.getAttribute(rs.STREAM_TYPE)),primaryColor:this.getAttribute(ES.PRIMARY_COLOR),secondaryColor:this.getAttribute(ES.SECONDARY_COLOR),accentColor:this.getAttribute(ES.ACCENT_COLOR),forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultDuration:this.defaultDuration,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(s=null==(n=this.mediaController)?void 0:n.querySelector("media-time-display"))&&"none"===getComputedStyle(s).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(ES.PLAYBACK_RATES),customDomain:null!=(a=this.getAttribute(rs.CUSTOM_DOMAIN))?a:void 0,title:this.getAttribute(ES.TITLE),videoTitle:null!=(r=this.getAttribute(ES.VIDEO_TITLE))?r:this.getAttribute(ES.TITLE),novolumepref:this.hasAttribute(ES.NO_VOLUME_PREF),nomutedpref:this.hasAttribute(ES.NO_MUTED_PREF),proudlyDisplayMuxBadge:this.hasAttribute(ES.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:this.castReceiver,disablePseudoEnded:this.hasAttribute(ES.DISABLE_PSEUDO_ENDED),capRenditionToPlayerSize:this.capRenditionToPlayerSize,...t,extraSourceParams:this.extraSourceParams})),this.shadowRoot)},EG=function(){let e=e=>{var t,i;if(!(null!=e&&e.startsWith("theme-")))return;let a=e.replace(/^theme-/,"");if(EI.includes(a))return;let r=this.getAttribute(e);null!=r?null==(t=this.mediaTheme)||t.setAttribute(a,r):null==(i=this.mediaTheme)||i.removeAttribute(a)};cg(this,EN,new MutationObserver(t=>{for(let{attributeName:i}of t)e(i)})),cE(this,EN).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},Ej=function(){this.addEventListener("error",cE(this,EF)),this.media&&(this.media.errorTranslator=(e={})=>{var t,i,a;if(!((null==(t=this.media)?void 0:t.error)instanceof tq))return e;let r=Ef(null==(i=this.media)?void 0:i.error,!1);return{player_error_code:null==(a=this.media)?void 0:a.error.code,player_error_message:r.message?String(r.message):e.player_error_message,player_error_context:r.context?String(r.context):e.player_error_context}})},EQ=function(){var e,t,i,a;null==(t=null==(e=this.media)?void 0:e.textTracks)||t.addEventListener("addtrack",cE(this,EW)),null==(a=null==(i=this.media)?void 0:i.textTracks)||a.addEventListener("removetrack",cE(this,EW))},Ez=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===tQ.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(e,t,i=!1)=>{r()||Array.from(e&&e.activeCues||[]).forEach(e=>{if(!(!e.snapToLines||e.line<-5||e.line>=0&&e.line<10)){if(!t||this.paused){let t=e.text.split(`
`).length,r=-3;this.streamType===tQ.LIVE&&(r=-2);let n=r-t;(e.line!==n||i)&&(a.has(e)||a.set(e,e.line),e.line=n)}else setTimeout(()=>{e.line=a.get(e)||"auto"},500)}})},s=()=>{var e,t;n(i,null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(nZ.USER_INACTIVE))&&t)},o=()=>{var e,t;let a=Array.from((null==(t=null==(e=this.mediaController)?void 0:e.media)?void 0:t.textTracks)||[]).filter(e=>["subtitles","captions"].includes(e.kind)&&"showing"===e.mode)[0];a!==i&&(null==i||i.removeEventListener("cuechange",s)),null==(i=a)||i.addEventListener("cuechange",s),n(i,cE(this,EO))};o(),null==(e=this.textTracks)||e.addEventListener("change",o),null==(t=this.textTracks)||t.addEventListener("addtrack",o);let l=()=>{var e,t;let a=null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(nZ.USER_INACTIVE))||t;cE(this,EO)!==a&&(cg(this,EO,a),n(i,cE(this,EO)))};this.addEventListener("userinactivechange",l),cg(this,EB,()=>{var e,t;null==i||i.removeEventListener("cuechange",s),null==(e=this.textTracks)||e.removeEventListener("change",o),null==(t=this.textTracks)||t.removeEventListener("addtrack",o),this.removeEventListener("userinactivechange",l)})};var E5=e=>{throw TypeError(e)},E9=(e,t,i)=>t.has(e)||E5("Cannot "+i),E8=(e,t,i)=>(E9(e,t,"read from private field"),i?i.call(e):t.get(e)),E6=(e,t,i)=>t.has(e)?E5("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),E7=(e,t,i,a)=>(E9(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),be=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends be{}globalThis.DocumentFragment=e}var bt,bi=class extends be{},ba=class{constructor(e,t={}){E6(this,bt),E7(this,bt,null==t?void 0:t.detail)}get detail(){return E8(this,bt)}initCustomEvent(){}};bt=new WeakMap;var br={document:{createElement:function(e,t){return new bi}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(bi)},CustomEvent:ba,EventTarget:be,HTMLElement:bi,HTMLVideoElement:class extends be{}},bn="undefined"==typeof window||void 0===globalThis.customElements,bs=bn?br:globalThis;bn&&br.document,bs.customElements.get("mux-player")||(bs.customElements.define("mux-player",E3),bs.MuxPlayerElement=E3);var bo=parseInt(s.version)>=19,bl={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"},bd=e=>null==e,bu=(e,t)=>!bd(t)&&e in t,bc=e=>e.replace(/[A-Z]/g,e=>"-".concat(e.toLowerCase())),bh=(e,t)=>{if(!(!bo&&"boolean"==typeof t&&!t)){if(bu(e,bl))return bl[e];if(void 0!==t)return/[A-Z]/.test(e)?bc(e):e}},bm=(e,t)=>bo||"boolean"!=typeof e?e:"",bp=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{ref:t,...i}=e;return Object.entries(i).reduce((e,t)=>{let[i,a]=t,r=bh(i,a);if(!r)return e;let n=bm(a,i);return e[r]=n,e},{})};function bv(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}var bE=Object.prototype.hasOwnProperty,bb=(e,t)=>{if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(Array.isArray(e))return!!Array.isArray(t)&&e.length===t.length&&e.some((e,i)=>t[i]===e);let i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(let a=0;a<i.length;a++)if(!bE.call(t,i[a])||!Object.is(e[i[a]],t[i[a]]))return!1;return!0},bg=(e,t,i)=>!bb(t,e[i]),bf=(e,t,i)=>{e[i]=t},b_=function(e,t,i){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:bf,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:bg;return(0,s.useEffect)(()=>{let n=null==i?void 0:i.current;n&&r(n,t,e)&&a(n,t,e)},[null==i?void 0:i.current,t])},by=(()=>{try{return"3.11.8"}catch(e){}return"UNKNOWN"})(),bT=(e,t,i)=>(0,s.useEffect)(()=>{let a=null==t?void 0:t.current;if(a&&i)return a.addEventListener(e,i),()=>{a.removeEventListener(e,i)}},[null==t?void 0:t.current,i,e]),bA=s.forwardRef((e,t)=>{let{children:i,...a}=e;return s.createElement("mux-player",{suppressHydrationWarning:!0,...bp(a),ref:t},i)}),bk=(e,t)=>{let{onAbort:i,onCanPlay:a,onCanPlayThrough:r,onEmptied:n,onLoadStart:s,onLoadedData:o,onLoadedMetadata:l,onProgress:d,onDurationChange:u,onVolumeChange:c,onRateChange:h,onResize:m,onWaiting:p,onPlay:v,onPlaying:E,onTimeUpdate:b,onPause:g,onSeeking:f,onSeeked:y,onStalled:T,onSuspend:A,onEnded:k,onError:w,onCuePointChange:S,onChapterChange:I,metadata:R,tokens:L,paused:D,playbackId:C,playbackRates:M,currentTime:O,themeProps:x,extraSourceParams:N,castCustomData:P,_hlsConfig:U,...W}=t;return b_("tokens",L,e),b_("playbackId",C,e),b_("playbackRates",M,e),b_("metadata",R,e),b_("extraSourceParams",N,e),b_("_hlsConfig",U,e),b_("themeProps",x,e),b_("castCustomData",P,e),b_("paused",D,e,(e,t)=>{null!=t&&(t?e.pause():e.play())},(e,t,i)=>(!e.hasAttribute("autoplay")||!!e.hasPlayed)&&bg(e,t,i)),b_("currentTime",O,e,(e,t)=>{null!=t&&(e.currentTime=t)}),bT("abort",e,i),bT("canplay",e,a),bT("canplaythrough",e,r),bT("emptied",e,n),bT("loadstart",e,s),bT("loadeddata",e,o),bT("loadedmetadata",e,l),bT("progress",e,d),bT("durationchange",e,u),bT("volumechange",e,c),bT("ratechange",e,h),bT("resize",e,m),bT("waiting",e,p),bT("play",e,v),bT("playing",e,E),bT("timeupdate",e,b),bT("pause",e,g),bT("seeking",e,f),bT("seeked",e,y),bT("stalled",e,T),bT("suspend",e,A),bT("ended",e,k),bT("error",e,w),bT("cuepointchange",e,S),bT("chapterchange",e,I),[W]},bw=by,bS="mux-player-react",bI=s.forwardRef((e,t)=>{var i;let a=(0,s.useRef)(null),r=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return s.useCallback(function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return e=>{let i=!1,a=t.map(t=>{let a=bv(t,e);return i||"function"!=typeof a||(i=!0),a});if(i)return()=>{for(let e=0;e<a.length;e++){let i=a[e];"function"==typeof i?i():bv(t[e],null)}}}}(...t),t)}(a,t),[n]=bk(a,e),[o]=(0,s.useState)(null!=(i=e.playerInitTime)?i:al());return s.createElement(bA,{ref:r,defaultHiddenCaptions:e.defaultHiddenCaptions,playerSoftwareName:bS,playerSoftwareVersion:bw,playerInitTime:o,...n})})}}]);