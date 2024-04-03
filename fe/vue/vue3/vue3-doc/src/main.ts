// import './assets/main.css'

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
import { babelParse } from "vue/compiler-sfc";
import Button from "@/components/Button/index.vue";
console.log("Button", Button);

app.mount("#app");
