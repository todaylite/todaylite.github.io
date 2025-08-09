importScripts('https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/12.1.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyCvS35O-TEWh7YBA28sXa1VEzozwOYR6Y4",
  authDomain: "todaylite-github-share.firebaseapp.com",
  databaseURL: "https://todaylite-github-share-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todaylite-github-share",
  storageBucket: "todaylite-github-share.appspot.com",
  messagingSenderId: "149613187050",
  appId: "1:149613187050:web:649b83f550a8c08aeaac93",
  measurementId: "G-9EXDCMN3F1"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png'  // Aap icon ki path ko apne hisaab se adjust karen
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
