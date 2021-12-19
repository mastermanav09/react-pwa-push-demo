export default async function swDev() {
  let swURL = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker
    .register(swURL)
    .then((response) => console.warn(response))
    .catch((err) => console.warn(err));

  let sw = await navigator.serviceWorker.ready;
  let push = await sw.pushManager.getSubscription({
    userVisibleOnly: true,
    applicationServerKey: process.env.REACT_APP_PUSH_PUBLIC_VAPID_KEY,
  });
}