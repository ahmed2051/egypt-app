self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('egypt-v1').then((cache) => {
      return cache.addAll([
        '/index.html',
        '/manifest.json',
        'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js',
        'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.production.min.js',
        'https://cdn.jsdelivr.net/npm/@babel/standalone@7.22.5/babel.min.js',
        'https://cdn.tailwindcss.com',
        'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
        'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
        'https://cdn.jsdelivr.net/npm/i18next@23.11.5/dist/umd/i18next.min.js',
        'https://img.icons8.com/color/192/000000/eye-of-horus.png',
        'https://img.icons8.com/color/48/000000/ankh.png',
        'https://img.icons8.com/color/48/000000/scarab.png',
        'https://images.unsplash.com/photo-1590428638795-2233d41dc7eb',
        'https://images.unsplash.com/photo-1579455481813-4e5013f9f68e',
        'https://images.unsplash.com/photo-1615828358478-07e85767844c'
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