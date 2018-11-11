let cacheName = 'all-restaurant-review-1.0'
/**
 * Install all required files for offline access
 */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/favicon.ico',
        '/restaurant.html',        
        '/css/styles.css',
        '/js/cache-polyfill.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/js/dbhelper.js',
        '/data/restaurants.json',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg',
        '/img/mobile/1.jpg',
        '/img/mobile/2.jpg',
        '/img/mobile/3.jpg',
        '/img/mobile/4.jpg',
        '/img/mobile/5.jpg',
        '/img/mobile/6.jpg',
        '/img/mobile/7.jpg',
        '/img/mobile/8.jpg',
        '/img/mobile/9.jpg',
        '/img/mobile/10.jpg'
      ])
    })
  )
})

/**
 * Activate Event Listener
 */
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim())
})

/**
 * Listen to any fetch and grab it from the installed assets in Cache
 */
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request)
    })
  )
})