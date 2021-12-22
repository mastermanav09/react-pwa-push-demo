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
    p256dh:
      "BC2Qvfp6t1fJ2E-e_iCIvLWNt4iZSDyWLeH2DpAw7OxPkt3-IYd4dbKXUWs3OyVaJw8ffIjM9sVI8zgPItsVE-Y",
    auth: "Qi64P4mZsJnNEJkCrljf8g",
  },
};

webpush.sendNotification(sub, "test message");
