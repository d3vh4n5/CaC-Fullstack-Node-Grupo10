import { validate } from "../utils/ezFormValidator.js"

const $form = document.querySelector('#contactForm')

validate($form, { 
    debug: true, 
    invalidColor: 'rgba(255, 192, 203, 0.3)',
    validColor: 'rgba(144, 238, 144, 0.3)',
    typeExclude: ['checkbox', 'file']
})