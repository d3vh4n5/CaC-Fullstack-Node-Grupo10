import { validate } from "../utils/ezFormValidator.js"
import { submitFormData2 } from "../utils/formsSendingData.js"

const $form = document.querySelector('#contactForm')

validate($form, { 
    // debug: true, 
    typeExclude: ['file']
})

$form.addEventListener('submit', async (event)=> {
    event.preventDefault()
    console.log(event)

    const { captcha, file } = event.target
    
    // Validacion de los inputs

    if (captcha.checked){
        
        await submitFormData2(event)
        
        event.target.reset()
    } else {
        alert("Debe checkear el captcha")
    }
})
