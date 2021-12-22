export default async function swDev() {
  let swURL = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker
    .register(swURL)
    .then((response) => console.warn(response))
    .catch((err) => console.warn(err));
}

export async function subscribe() {
  let sw = await navigator.serviceWorker.ready;
  let push = await sw.pushManager.getSubscription().then((subscription) => {
    return response.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: process.env.REACT_APP_PUSH_PUBLIC_VAPID_KEY,
    });
  });

  console.log(push);
}
