!function(){"use strict";const e=["client/modal.2837d086.js","client/about.d760adca.js","client/index.19526b80.js","client/index.e938b00f.js","client/[slug].821b3bcb.js","client/index.628d35db.js","client/footer.f8b0a5b6.js","client/client.5af8cc81.js"].concat(["service-worker-index.html","arrow.png","farmer.png","favicon.png","global.css","great-success.png","logo-192.png","logo-512.png","logo.png","logo.svg","mailbox.png","manifest.json","pencil.png","points.png","potion.png","simple-grid.min.css","union.png"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1571054311017").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1571054311017"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1571054311017").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
