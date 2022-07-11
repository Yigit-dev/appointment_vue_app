import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./styles/app.css";
import icon from "./icons";
icon();
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
