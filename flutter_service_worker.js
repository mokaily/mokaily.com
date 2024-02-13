'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7121cd55013d498773dbd45f9f54cbb1",
"assets/AssetManifest.bin.json": "6184c8cfc380a2799a6ae29e3e7dbe22",
"assets/AssetManifest.json": "409297816fd3b1f42169d7465f4b59b1",
"assets/assets/Okaily's%2520CV.pdf": "ce14d542a259eb83e4456481983030aa",
"assets/FontManifest.json": "3f17d296317134347d220fa32585dd23",
"assets/fonts/Inter-Black.ttf": "980c7e8757e741bb49c7c96513924c61",
"assets/fonts/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/fonts/Inter-ExtraBold.ttf": "c9709fb8e32755490795ce5bd226c3a0",
"assets/fonts/Inter-Light.ttf": "d55f45d07cfe01e8797bd1566561f718",
"assets/fonts/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/fonts/MaterialIcons-Regular.otf": "e2097d6f161ecf2d7750f1f882227115",
"assets/images/about/1.png": "e915f9e53a242020a43b6ee9eefdf371",
"assets/images/about/2.png": "999521293b2945d5f51c8bb707c7502a",
"assets/images/blog/1.jpg": "3cf27205d6e0f23978a2f769b3409e25",
"assets/images/blog/2.jpg": "fc5f63f34be7fcf7a42542f4b7945624",
"assets/images/blog/3.jpg": "c4df78ae76d280fca2cc1460a19043b3",
"assets/images/blog/4.jpg": "3b4d2d7bdf4cac78073dcf3211890ad9",
"assets/images/experience/bavest.jpg": "1b9c140d2ff51c7641aed3c957fb6914",
"assets/images/experience/ernst.jpg": "5b95c9f52b43c509bdd0e23ab489663a",
"assets/images/experience/meinpaul.jpg": "f2ff08148a313a26f63a6fc15c64dc4d",
"assets/images/experience/mintano.jpg": "862030a4f4bcda81093312216b047bce",
"assets/images/experience/teqneia.jpg": "c742b90761259050e16ecc5852de3528",
"assets/images/feedback/dummy.png": "5eed649a05310f90cbd74c97fd581b40",
"assets/images/feedback/ra7a.png": "38c7427701ee110ac2ffb4396a699b61",
"assets/images/feedback/tobias.jpeg": "00a0df6f33b5a5dd336610c4d9d8ed94",
"assets/images/feedback/william.jpeg": "6464bd44e4dc930951570aaee8efa302",
"assets/images/projects/abela.jpg": "c02fb09b24b9d411b09637c51bb6c5f9",
"assets/images/projects/bavest.jpg": "56f08b4a995665b85a67940b1652ef2c",
"assets/images/projects/gamezy.jpg": "e0d1f26d78cf93067ca4af2896b6c7ba",
"assets/images/projects/mintano.jpg": "0300b7759f0972e48df46ffab376f4bb",
"assets/images/projects/most_used_programming_language.jpg": "7833c44ffae6ef285e36549bccf84ca2",
"assets/images/projects/mouse_follower.jpg": "d9d6ba36d375adfbb3d09e4834bbaea2",
"assets/images/services/behance.jpg": "29058cd5d0d245198be8c3a929b8c87e",
"assets/images/services/github.jpg": "ae36cb4062093995ce1cc4ed41b4b08b",
"assets/images/services/kaggle.jpg": "ce3ec272714764d7dd98649f04b4ec5b",
"assets/images/social/behance.svg": "333fff8ec8b31bc170047c5840038746",
"assets/images/social/github.svg": "f25e1f27108b1129feb44146a5de3104",
"assets/images/social/kaggle.png": "4b9208c04b397ea8da399b1f91473e10",
"assets/images/social/linkedin.svg": "0fbce2c5ceb565a4ae6d28f5396fa800",
"assets/images/social/medium.svg": "4f7ae70821ac5d548a6be2b55f09d562",
"assets/images/tools/codemagic.svg": "b26d888e42856be9da3bd53777ce60cd",
"assets/images/tools/cupertino.svg": "2008e0fff55f2bd34381ce746d51911e",
"assets/images/tools/dart.svg": "c253911f8cb353c69ffcb6992f997e01",
"assets/images/tools/docker.svg": "3ec90c521690cf6463cd14603da551e0",
"assets/images/tools/firebase.svg": "029fd3c092480d94d80837b5fc4d2744",
"assets/images/tools/flutter.svg": "9a6e81be6ff5b09956f4f85fe1f0a89f",
"assets/images/tools/git.svg": "7e7467f2d3ae0d8bd2a6ea5549421534",
"assets/images/tools/html_css_js.png": "ce69286c9df18c104e45b4663c835369",
"assets/images/tools/kubernetes.svg": "3a15213ddffc497c558cabac9f1e2c2b",
"assets/images/tools/material_design_3.svg": "8a38f2240a3c0237301fccfa1a4475a8",
"assets/images/tools/photoshop.svg": "4c7cd5a20770c6c5e1263e7de79686cf",
"assets/images/tools/postman.svg": "fbfb57a181ce251926d686d12e6cee5a",
"assets/images/tools/python.svg": "7be3e62aa19ce7d9cf28ecc838efb6a3",
"assets/images/tools/sql.svg": "903338c9eb87087f3426c116a2153b3d",
"assets/images/tools/xd.svg": "ef311297fb7e75cf09be950930784855",
"assets/NOTICES": "16d2943372d7a404443a35335e9fbc40",
"assets/Okaily's%20CV.pdf": "ce14d542a259eb83e4456481983030aa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "16bd6b3443eea1dd01bc882df018da66",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "af01afb7dc1576be0b50130f40410996",
"icons/Icon-512.png": "3b5d294daaad0c07f8c86ba753ac4503",
"icons/Icon-maskable-192.png": "af01afb7dc1576be0b50130f40410996",
"icons/Icon-maskable-512.png": "3b5d294daaad0c07f8c86ba753ac4503",
"index.html": "d321d7652d334c10bf2689402de8a5f0",
"/": "d321d7652d334c10bf2689402de8a5f0",
"main.dart.js": "6d1d3f1dab8e5621137d30a33222e78f",
"manifest.json": "fc6c9dceb7012a8e2e1f6fb79c32c99d",
"version.json": "93f79c4845bca743997d155b19290ff9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
