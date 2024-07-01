import { validate } from "../utils/ezFormValidator.js"
import { submitFormData2 } from "../utils/formsSendingData.js"
import LoadSpinner from "../components/LoadSpinner.js"

const $form = document.querySelector('#contactForm')

validate($form, { 
    // debug: true, 
    typeExclude: ['file']
})

$form.addEventListener('submit', async (event)=> {
    event.preventDefault()
    const $submitBtn = document.getElementById('submitBtn')
    $submitBtn.setAttribute('disabled', true)
    $submitBtn.innerHTML = LoadSpinner;

    // Tomo el valor que tiene el reCAPTCHA al momento del submit, 
    // Este debería devolverme un token, si no lo tiene entonces
    // El usuario no pasó la prueba.
    const captcha = event.target[7].value

    // console.log({ captcha })
    // console.log(captcha !== '')
    // console.log(captcha.length > 0 )
    // Validacion de los inputs

    if (captcha !== ''){    
        try {
            const success = await submitFormData2(event)
            
            if (success) {
                Swal.fire({
                    title: "¡Hecho!",
                    text: "Hemos recibido su mensaje, gracias por contactarnos :)",
                    icon: "success"
                });
                event.target.reset()
            } else {
                throw new Error("No se pudo enviar el mensaje")
            }
        } catch (error) {
            console.error(error)
            Swal.fire({
                title: "Error",
                text: "Ocurrió un error al enviar el mensaje",
                icon: "error"
            })
        } finally {
            $submitBtn.removeAttribute('disabled')
            $submitBtn.innerHTML = "Enviar";
        }
    } else {
        Swal.fire({
            title: "Error",
            text: "Debe comprobar que no es un robot para continuar.",
            icon: "error"
        });
        $submitBtn.removeAttribute('disabled')
        $submitBtn.innerHTML = "Enviar";
    }
})
