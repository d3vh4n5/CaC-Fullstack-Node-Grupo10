import { validate } from "../utils/ezFormValidator.js"
import { sendToShowData } from "../utils/formsSendingData.js"
// import { createApp } from "vue";
// import App from "../components/App.vue";

// const app = createApp(App);
// app.mount("#app");

const $form = document.querySelector('#contactForm')

validate($form, { 
    // debug: true, 
    typeExclude: ['file']
})

sendToShowData()