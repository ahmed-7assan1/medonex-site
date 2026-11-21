(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4453],{39926:function(e,t,r){Promise.resolve().then(r.bind(r,8552))},78030:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(2265);/**
 * @license lucide-react v0.416.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};/**
 * @license lucide-react v0.416.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.416.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:a=24,strokeWidth:c=2,absoluteStrokeWidth:s,className:u="",children:l,iconNode:d,...h}=e;return(0,n.createElement)("svg",{ref:t,...o,width:a,height:a,stroke:r,strokeWidth:s?24*Number(c)/Number(a):c,className:i("lucide",u),...h},[...d.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(l)?l:[l]])}),s=(e,t)=>{let r=(0,n.forwardRef)((r,o)=>{let{className:s,...u}=r;return(0,n.createElement)(c,{ref:o,iconNode:t,className:i("lucide-".concat(a(e)),s),...u})});return r.displayName="".concat(e),r}},3274:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.416.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(78030).Z)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},8552:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(57437),a=r(2265),i=r(82157),o=r(3274);function c(){let[e,t]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{(async()=>{let e=new URL(window.location.href),r=e.searchParams.get("code"),n=e.searchParams.get("type"),a=e.searchParams.get("next")||"/catalog",o=!a.startsWith("/")||a.startsWith("//")||a.startsWith("/\\")?"/catalog":a;if(!r){window.location.replace("/auth?mode=login");return}let c=(0,i.e)(),{data:s,error:u}=await c.auth.exchangeCodeForSession(r);if(u||!s.user){t(!0),window.location.replace("/auth?mode=login");return}if("recovery"===n){window.location.replace("/auth/reset-password");return}try{await fetch("/api/v1/auth/sync",{method:"POST"})}catch(e){}let l=s.user.user_metadata,d=(null==l?void 0:l.onboarding_completed)===!0||!!(null==l?void 0:l.semesterId);window.location.replace(d?o:"/auth?mode=complete-profile&next=".concat(encodeURIComponent(o)))})()},[]),(0,n.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-black text-white",children:e?"Redirecting to sign in…":(0,n.jsx)(o.Z,{className:"h-6 w-6 animate-spin"})})}},82157:function(e,t,r){"use strict";r.d(t,{e:function(){return a}});var n=r(25102);function a(){return(0,n.A)("https://egxvmkhynsaikucsucjs.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVneHZta2h5bnNhaWt1Y3N1Y2pzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1ODAwNzksImV4cCI6MjA5NDE1NjA3OX0.uLcrkagpPP5KZompqmXPNt3tJzDrhiK2340uooJJ5Yg")}}},function(e){e.O(0,[9762,6970,2971,5190,1744],function(){return e(e.s=39926)}),_N_E=e.O()}]);