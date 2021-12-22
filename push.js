const webpush = require("web-push");

// let vapidKeys = webpush.generateVAPIDKeys(); // Voluntary Application Server Identifications
// Don't regenerate it every time, just only once.
// console.log(vapidKeys);

let vapidKeys = {
  publicKey:
    "BGMi__fc21zU58eN9SL4_0b3K5-pAdTCwIB8vGtWWllk3izLbIFllwCHzK8CqCvpYf7Qw2PefqAgLBsyXhSCcDo",
  privateKey: "syQa8AcHnwpp2h4UAaijlCfkyJZQ0XaJ68Ky4FhQywY",
};

webpush.setVapidDetails(
  "mailto:test@code.co.in",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/c8l5kY6BNTc:APA91bH1uEn8vsPNITxETWyvPkChRUIoJUffKgSLP1defYVuseXDSOYqzc5jzdw99X8LUVZ-S_ZG4vKL2O3qeq966OsOkrGuyxpNhAhJpi6FQu7DRD9Li6j3M3spUYCUHJMiE0vSw9rd",
  expirationTime: null,
  keys: {
    p256dh:
      "BC2Qvfp6t1fJ2E-e_iCIvLWNt4iZSDyWLeH2DpAw7OxPkt3-IYd4dbKXUWs3OyVaJw8ffIjM9sVI8zgPItsVE-Y",
    auth: "Qi64P4mZsJnNEJkCrljf8g",
  },
};

webpush.sendNotification(sub, "test message");
