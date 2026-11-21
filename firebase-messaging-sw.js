// Register click handling before Firebase Messaging, which may add its own
// notification click handler during initialization.
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const requestedUrl = new URL(event.notification.data?.url || '/', self.location.origin);
  const targetUrl = requestedUrl.origin === self.location.origin ? requestedUrl.href : self.location.origin;
  event.waitUntil((async () => {
    const windows = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    const existing = windows.find((client) => client.url === targetUrl);
    if (existing) return existing.focus();
    return self.clients.openWindow(targetUrl);
  })());
});

importScripts('https://www.gstatic.com/firebasejs/12.13.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.13.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyBafWJBYdU2CIDtwXqkO85e1YTB4nJJTqE",
  authDomain: "medonex-2026.firebaseapp.com",
  projectId: "medonex-2026",
  storageBucket: "medonex-2026.firebasestorage.app",
  messagingSenderId: "111075734158",
  appId: "1:111075734158:web:94771da7637351c7264fdf",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  // FCM automatically displays messages that already have a notification
  // payload. Only data-only messages need an explicit notification here.
  if (payload.notification) return;

  const notificationTitle = payload.data?.title || 'New Message';
  const notificationOptions = {
    body: payload.data?.body,
    icon: '/icons/icon-192x192.png',
    data: { url: payload.data?.url || '/' },
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
