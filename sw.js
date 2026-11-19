/* Stet offline cache. Bump VERSION whenever index.html changes. */
var VERSION="stet-2026-11-19a";
var SHELL=["./","index.html","manifest.webmanifest","icon.svg","icon-180.png","icon-512.png"];
self.addEventListener("install",function(e){ e.waitUntil(caches.open(VERSION).then(function(c){return c.addAll(SHELL);}).then(function(){return self.skipWaiting();})); });
self.addEventListener("activate",function(e){ e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==VERSION;}).map(function(k){return caches.delete(k);}));}).then(function(){return self.clients.claim();})); });
self.addEventListener("fetch",function(e){
  if(e.request.method!=="GET") return;
  var url=new URL(e.request.url), own=url.origin===location.origin, font=/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if(!own&&!font) return;
  if(own&&e.request.mode==="navigate"){
    /* page: try the network for a fresh copy, fall back to the saved one with no signal */
    e.respondWith(fetch(e.request).then(function(r){ var cp=r.clone(); caches.open(VERSION).then(function(c){c.put("index.html",cp);}); return r; }).catch(function(){ return caches.match("index.html"); }));
    return;
  }
  e.respondWith(caches.match(e.request).then(function(hit){ return hit||fetch(e.request).then(function(r){ if(r&&(r.ok||r.type==="opaque")){ var cp=r.clone(); caches.open(VERSION).then(function(c){c.put(e.request,cp);}); } return r; }); }));
});
