import { validate } from "../utils/ezFormValidator.js"
import { sendToShowData } from "../utils/formsSendingData.js"

const $form = document.querySelector('#contactForm')

validate($form, { 
    // debug: true, 
    typeExclude: ['file']
})

sendToShowData()