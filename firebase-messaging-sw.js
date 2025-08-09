importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCvS35O-TEWh7YBA28sXa1VEzozwOYR6Y4",
  authDomain: "todaylite-github-share.firebaseapp.com",
  projectId: "todaylite-github-share",
  storageBucket: "todaylite-github-share.firebasestorage.app",
  messagingSenderId: "149613187050",
  appId: "1:149613187050:web:649b83f550a8c08aeaac93"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});