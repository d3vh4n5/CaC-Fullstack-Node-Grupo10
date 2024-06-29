import { submitJsonData } from "../utils/formsSendingData.js"
import { API_URL } from "../constants/apiURL.js"
import { basePath } from "../constants/basePath.js"

window.addEventListener('load', () => {
    const $form = document.getElementById('formulario')

    $form.addEventListener('submit', async (event)=>{
        event.preventDefault()
        const $nombre = document.getElementById('nombre')
        const $email = document.getElementById('email')
        const $password = document.getElementById('password')
        const $passConfirma = document.getElementById('passConfirma')

        const name = $nombre.value
        const email = $email.value
        const password = CryptoJS.SHA256($password.value).toString()
        const passwordConfirmation = CryptoJS.SHA256($passConfirma.value).toString()
        
        if (password === passwordConfirmation) {

           

            axios.post(API_URL + '/auth/register', {
                    name,
                    email,
                    password
                })
                .then(resp => {
                    
                    // console.log(resp)
    
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "¡Usuario creado con éxito! Será redirigido al login..",
                        showConfirmButton: false,
                        timer: 3000
                      });
    
                    setTimeout(()=>{
                        document.location.href = basePath + "/pages/login.html"
                    }, 3000)
                    
                })
                .catch(error => {
                    // El objeto de error que devuelve axios es distinto 
                    // al nativo, por eso lo fui desarmando para ver el
                    // contenido.
                    console.error(error)
                    console.error(error.message)
                    console.error(error.code)
                    console.error(error.request.status)
                    console.error(error.response.data.error)
                    Swal.fire({
                        title: "Error",
                        text: error.response.data.error,
                        icon: "error"
                    });
                })
            
          

           

        } else {
            Swal.fire({
                title: "Error",
                text: "Las contraseñas no coinciden",
                icon: "error"
            });
        }
    
    })
})