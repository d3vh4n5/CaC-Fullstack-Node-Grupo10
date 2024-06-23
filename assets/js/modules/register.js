import { submitJsonData } from "../utils/formsSendingData.js"
import { API_URL } from "../constants/apiURL.js"
import { basePath } from "../constants/basePath.js"

window.addEventListener('load', () => {
    const $form = document.getElementById('formulario')

    $form.addEventListener('submit', async (event)=>{
        event.preventDefault()
        console.log("Se hizo submit en register")
        const $nombre = document.getElementById('nombre')
        const $email = document.getElementById('email')
        const $password = document.getElementById('password')
        const $passConfirma = document.getElementById('passConfirma')

        const name = $nombre.value
        const email = $email.value
        const password = CryptoJS.SHA256($password.value).toString()
        const passwordConfirmation = CryptoJS.SHA256($passConfirma.value).toString()
        
        if (password === passwordConfirmation) {

            await submitJsonData(API_URL + '/auth/register', {
                name,
                email,
                password
            })

            alert("Usuario registrado correctamente, será redirigido al login.")
            document.location.href = basePath + "/pages/login.html"

        } else {
            alert("Contraseñas no coinciden")
        }
    
    })
})