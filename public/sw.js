const CACHE_VERSION = "viandmo-v1";
const STATIC_CACHE = `static-${CACHE_VERSION}`;
const IMAGE_CACHE = `images-${CACHE_VERSION}`;
const OFFLINE_URL = "/offline";

// Assets to pre-cache on install
const PRE_CACHE_ASSETS = [
    OFFLINE_URL,
    "/",
    "/manifest.webmanifest",
    "/icons/icon-192.svg"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then((cache) => {
            return cache.addAll(PRE_CACHE_ASSETS);
        })
    );
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== STATIC_CACHE && key !== IMAGE_CACHE) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

self.addEventListener("fetch", (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip non-GET requests
    if (request.method !== "GET") return;

    // 1. Navigation strategy (HTML): Network-first with offline fallback
    if (request.mode === "navigate") {
        event.respondWith(
            fetch(request).catch(() => {
                return caches.match(OFFLINE_URL);
            })
        );
        return;
    }

    // 2. Static assets (JS, CSS, Fonts): Cache-first
    if (
        request.destination === "style" ||
        request.destination === "script" ||
        request.destination === "font"
    ) {
        event.respondWith(
            caches.match(request).then((cached) => {
                return cached || fetch(request).then((response) => {
                    const copy = response.clone();
                    caches.open(STATIC_CACHE).then((cache) => cache.put(request, copy));
                    return response;
                });
            })
        );
        return;
    }

    // 3. Images: Stale-while-revalidate
    if (request.destination === "image") {
        event.respondWith(
            caches.match(request).then((cached) => {
                const fetchPromise = fetch(request).then((response) => {
                    const copy = response.clone();
                    caches.open(IMAGE_CACHE).then((cache) => cache.put(request, copy));
                    return response;
                });
                return cached || fetchPromise;
            })
        );
        return;
    }
});
