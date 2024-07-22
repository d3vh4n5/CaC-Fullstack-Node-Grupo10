import { validate } from "../utils/ezFormValidator.js"
import { submitFormData2 } from "../utils/formsSendingData.js"
import LoadSpinner from "../components/LoadSpinner.js"

const $form = document.querySelector('#contactForm')
const $formFile = document.getElementById('formFile')
const $submitBtn = document.getElementById('submitBtn')

// Validando todos los inputs menos el file
validate($form, { 
    // debug: true, 
    typeExclude: ['file']
})


// Validando el input file
let file = null
$formFile.addEventListener('change', event => {
    // https://www.youtube.com/watch?v=nG2Rk01FB7k
    file = event.target.files[0]
    const $formFileErrorsContainer = document.getElementById('formFileErrorsContainer')

    $formFileErrorsContainer.innerHTML = ''

    const allowedTypes = [
        'image/png',
        'image/jpeg',
        'image/jpg',
        'application/pdf',
        'application/doc',
        'text/plain',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ]

    if (file.size >= ( 2 * 1024 * 1024) ){
        console.warn("Archivo muy grande")
        $formFileErrorsContainer.innerText = `El archivo seleccionado supera el tamaño permitido de 2mb, Tamaño de su archivo: ${(file.size/1024/1024).toFixed(2)}mb`;
        $submitBtn.setAttribute('disabled', true)
        return
    } 

    if (!allowedTypes.includes(file.type)) {
        console.warn("Tipo de archivo no permitido")
        $formFileErrorsContainer.innerText = `Tipo de archivo no permitido, por favor revise los tipos de archivos habilitados.`;
        $submitBtn.setAttribute('disabled', true)
        return
    }

    $submitBtn.removeAttribute('disabled')

})

// Controlando el submit del formulario

$form.addEventListener('submit', async (event)=> {
    event.preventDefault()
    $submitBtn.setAttribute('disabled', true)
    $submitBtn.innerHTML = LoadSpinner;

    // Tomo el valor que tiene el reCAPTCHA al momento del submit, 
    // Este debería devolverme un token, si no lo tiene entonces
    // El usuario no pasó la prueba.
    const captcha = event.target[7].value

    console.log({ captcha })
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