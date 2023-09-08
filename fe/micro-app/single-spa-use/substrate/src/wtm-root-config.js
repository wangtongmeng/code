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

// registerApplication({
//   name: "@wtm/navbar",
//   app: () => System.import("@wtm/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
