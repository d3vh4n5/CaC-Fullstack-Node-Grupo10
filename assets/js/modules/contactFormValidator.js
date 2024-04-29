import { validate } from "../utils/ezFormValidator.js"

const $form = document.querySelector('#contactForm')

validate($form, { 
    // debug: true, 
    typeExclude: ['file']
})