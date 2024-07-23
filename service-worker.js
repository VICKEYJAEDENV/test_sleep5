self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('sleep-tracker-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/script.js',
                '/manifest.json',
                '/background-mobile.jpg',
                '/background-tablet.jpg',
                '/icon-192x192.png',
                '/icon-512x512.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
