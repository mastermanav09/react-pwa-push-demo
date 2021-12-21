const webpush = require("web-push");

// let vapidKeys = webpush.generateVAPIDKeys(); // Voluntary Application Server Identifications
// Don't regenerate it every time, just only once.
// console.log(vapidKeys);

let vapidKeys = {
  publicKey: process.env.REACT_APP_PUSH_PUBLIC_VAPID_KEY,
  privateKey: process.env.REACT_APP_PUSH_PRIVATE_VAPID_KEY,
};

webpush.setVapidDetails(
  "mailto:test@code.co.in",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {
  endpoint: process.env.REACT_APP_PUSH_ENDPOINT,
  expirationTime: null,
  keys: {
    p256dh: process.env.REACT_APP_KEYS_p256dh,
    auth: "Qi64P4mZsJnNEJkCrljf8g",
  },
};

webpush.sendNotification(sub, "test message");
