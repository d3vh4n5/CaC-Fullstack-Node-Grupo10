import { createApp } from "vue";
import App from "./dashboard/App.vue";
import { router } from "./dashboard/router";

const app = createApp(App);
app.use(router);
app.mount("#app");
