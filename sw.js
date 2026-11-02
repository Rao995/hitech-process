// Service worker: shows push pop-ups when the app is closed, opens the task on tap
self.addEventListener('push', e => {
  const d = e.data ? e.data.json() : { title: 'Hi-Tech Process', body: '' }
  e.waitUntil(self.registration.showNotification(d.title, { body: d.body, icon: 'icon-192.png', badge: 'icon-192.png', data: d.url, vibrate: [120, 60, 120] }))
})
self.addEventListener('notificationclick', e => { e.notification.close(); e.waitUntil(clients.openWindow(e.notification.data || './')) })
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', e => e.waitUntil(clients.claim()))
