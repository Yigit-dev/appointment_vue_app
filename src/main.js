import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./styles/app.css";
import store from "./store";
import router from "./router";
import { appAxios } from "@/utils/appAxios";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import icon from "./icons";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

icon();

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.component("Datepicker", Datepicker);
app.use(router);
app.use(store);
app.config.globalProperties.$appAxios = appAxios;
app.mount("#app");
