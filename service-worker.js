"use strict";var precacheConfig=[["/index.html","82bd97b67bb5a074c972129e890ea74e"],["/static/css/main.5bc07f67.css","d70bc4c42e618ce93a825b227df4b3c5"],["/static/js/main.317ba3e0.js","274828786e21d4a27607020263146b19"],["/static/media/cubiscan_2.105a4f39.png","105a4f3911649e2a3a81315585e00929"],["/static/media/cubiscan_3.8637f4a2.png","8637f4a2fd62d26c8bdc3541ed9edb22"],["/static/media/daily_featured.ee80cc05.png","ee80cc05438ac92fa4f4bc999a695cfe"],["/static/media/daily_finished.39733fa0.png","39733fa0535ffe97116d994fdaf02857"],["/static/media/daily_home.d3d5b577.png","d3d5b5777656898b27189621474cb82d"],["/static/media/daily_tasks.6fc40f34.png","6fc40f34d21ce42eafcce455381a4d6d"],["/static/media/featured_cubiscan.b456c2e4.png","b456c2e454ba101eb7a3fdb90a050d90"],["/static/media/ocean.032959bf.png","032959bf55641437dcd8569c0336d41f"],["/static/media/omen_dash-min.fa5a7540.png","fa5a754030800448dfd4920da99f0afb"],["/static/media/omen_desktop_4day.b9927468.png","b99274688a52a6069d64c531bf83d222"],["/static/media/omen_landing-min.fdadaa70.png","fdadaa700dd06135f9ca2a342f06cad5"],["/static/media/performant_1.ad08fb86.png","ad08fb863e8d08b12ef7827e563e7ecb"],["/static/media/performant_2.9b78b104.png","9b78b1049f0dd46901a3506e29d50c19"],["/static/media/performant_3.8b042f19.png","8b042f19ce57527047d01c0f15a62908"],["/static/media/performant_featured.fd2bae5f.png","fd2bae5f27bb88bb94beb86b4741fe73"],["/static/media/strat_1.49065a0f.png","49065a0fdf7a8334f09aa064c12432cb"],["/static/media/strat_2.d86f9a68.png","d86f9a6878d48b54619abe7a16015299"],["/static/media/strat_3.661f02ea.png","661f02ea0b62f2a54359dd5c6e5dd6e2"],["/static/media/strat_featured.4463d34f.png","4463d34f036446c5b437d421e4480319"],["/static/media/verti_1.3f13e885.png","3f13e885074cf941a31c4b6e04e22a58"],["/static/media/verti_2.d20b8b2b.png","d20b8b2bd4a90c1e96344db3a57d4988"],["/static/media/verti_3.6dd74864.png","6dd7486421ccce3c138e79713f0efdc9"],["/static/media/verti_featured.729225cd.png","729225cdace5eb34ccd3798b3618c40e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});