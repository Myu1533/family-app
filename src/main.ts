import { createApp } from "vue";
import { Quasar } from "quasar";
import quasarLang from "quasar/lang/zh-CN";
import { invoke } from "@tauri-apps/api";

import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
import "./style.css";
import App from "./App.vue";
import { router } from "./router/index";

invoke("greet", { name: "World" }).then((response) => console.log(response));

const app = createApp(App);

app.use(Quasar, {
  plugins: {},
  lang: quasarLang,
});

app.use(router);

app.mount("#app");
