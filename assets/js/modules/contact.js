import { validate } from "../utils/ezFormValidator.js"
import { submitFormData2 } from "../utils/formsSendingData.js"

const $form = document.querySelector('#contactForm')

validate($form, { 
    // debug: true, 
    typeExclude: ['file']
})

$form.addEventListener('submit', async (event)=> {
    event.preventDefault()

    // Tomo el valor que tiene el reCAPTCHA al momento del submit, 
    // Este debería devolverme un token, si no lo tiene entonces
    // El usuario no pasó la prueba.
    const captcha = event.target[7].value
    console.log({ captcha })
    console.log(captcha !== '')
    console.log(captcha.length > 0 )
    // Validacion de los inputs

    if (captcha !== ''){
        
        await submitFormData2(event)
        
        event.target.reset()
    } else {
        alert("Debe checkear el captcha")
    }
})
