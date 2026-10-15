const C='qccam-v3',A=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>Promise.all(A.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
 e.respondWith(caches.match(e.request).then(h=>{const n=fetch(e.request).then(r=>{if(r&&(r.ok||r.type==='opaque'))caches.open(C).then(c=>c.put(e.request,r.clone()));return r}).catch(()=>h);return h||n}))});
