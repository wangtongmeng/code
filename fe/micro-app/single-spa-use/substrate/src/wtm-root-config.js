import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  // activeWhen: ["/"],
  // 3.当路径是 / 时，加载 single-spa-welcome.js
  activeWhen: location => location.pathname === '/',
});

registerApplication({
  name: "@wtm/react",  // 不重名即可
  app: () =>
    System.import(
      "@wtm/react" // 获取 import map 里找
    ),
  activeWhen: location => location.pathname.startsWith('/react'),
});

registerApplication({
  name: "@wtm/vue", // 不重名即可
  app: () =>
    System.import(
      "@wtm/vue" // 获取 import map 里找
    ),
  activeWhen: location => location.pathname.startsWith('/vue'),
});

// registerApplication({
//   name: "@wtm/navbar",
//   app: () => System.import("@wtm/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
