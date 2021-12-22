let cacheData = "appV1";

this.addEventListener("install", (event) =>
  event.waitUntil(
    caches.open(cacheData).then((cache) =>
      cache.addAll([
        // "static/js/bundle.js",
        // "static/js/main.chunk.js",
        // // "static/js/0.chunk.js",
        // "/index.html",
        // "/",
        // "/users",
      ])
    )
  )
);

this.addEventListener("fetch", (event) => {
  var options = {
    body: "This notification was generated from a push.",
    // icon: "/logo192.png",
    // vibrate: [100, 50, 100],
    // data: {
    //   dateOfArrival: Date.now(),
    //   primaryKey: "2",
    // },

    // actions: [
    //   {
    //     action: "explore",
    //     title: "Explore this new world",
    //     icon: "/logo192.png",
    //   },
    //   { action: "close", title: "close", icon: "/xmark.png" },
    // ],
  };

  event.waitUntil(this.registration.showNotification("Hello world!", options));

  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((result) => {
        if (result) {
          return result;
        }

        // added for caching the api data (clone fetch func)
        let requestUrl = event.request.clone();
        return fetch(requestUrl).catch((err) => console.log(err));
      })
    );
  }
});
