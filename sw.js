if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const o=e=>i(e,r),b={module:{uri:r},exports:t,require:o};s[r]=Promise.all(c.map((e=>b[e]||o(e)))).then((e=>(n(...e),t)))}}define(["./workbox-ec979354"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/checkbox-empty.png",revision:"394998984620cb5c080cc55333331bb3"},{url:"assets/checkbox.png",revision:"947b20e8ec25c562c3bd4f0125409fdb"},{url:"assets/delete.png",revision:"4cd3280d95085dbac686410a83208339"},{url:"assets/notes-icon.png",revision:"c38746dcb47f9fb526f1bba0f7416b49"},{url:"assets/send-icon.png",revision:"221fcc0e1e02c1eede41bb714b0a479f"},{url:"css/mainStyles.css",revision:"cc789b1ab26a54b7bf2d5a25e310a886"},{url:"index.html",revision:"0a4646a85e4a0a03e5463d8a1426cd81"},{url:"js/mainJavascript.js",revision:"f16775cfb63636c4d3be03b7bc5704bb"},{url:"manifest.json",revision:"d7537078e41ee96526cfd9abd869460f"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
