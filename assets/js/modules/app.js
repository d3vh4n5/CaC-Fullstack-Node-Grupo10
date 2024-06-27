import { createApp } from "vue";
import App from "./dashboard/App.vue";
import { router } from "./dashboard/router";
import { AxiosInterceptor } from "./dashboard/interceptors/axios.interceptor";

AxiosInterceptor()

const app = createApp(App);
app.use(router);
app.mount("#app");
