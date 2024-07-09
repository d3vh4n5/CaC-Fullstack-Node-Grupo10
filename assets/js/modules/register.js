import { API_URL } from "../constants/apiURL.js"
import { basePath } from "../constants/basePath.js"
import LoadSpinner from "../components/LoadSpinner.js"

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
        const password = $password.value
        const passwordConfirmation = $passConfirma.value
        
        const errors = []

        if (name.trim() === '') {
            errors.push("Debe escribir un nombre de usuario")
        }
        if (email.trim() === '') {
            errors.push("Debe escribir un email valido")
        }
        if (password.trim() === '') {
            errors.push("Debe escribir una contraseña")
        }
        if (passwordConfirmation.trim() === '') {
            errors.push("Debe escribir una confirmación de contraseña correcta")
        }

        if (errors.length > 0) {
            const $errorsContainer = document.getElementById('errorsContainer')
            
            $errorsContainer.innerHTML = ''

            errors.forEach(error => {
                $errorsContainer.innerHTML += `
                    <li class="text-danger my-2">${error}</li>
                `
            })
            
            return
        }

        if (password === passwordConfirmation) {
            const $submitBtn = document.getElementById('submitBtn')
            $submitBtn.innerHTML = LoadSpinner
            $submitBtn.setAttribute("disabled", true)

            axios.post(API_URL + '/auth/register', {
                    name,
                    email,
                    password: CryptoJS.SHA256(password).toString()
                })
                .then(resp => {
                    
                    // console.log(resp)
    
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "¡Usuario creado con éxito!",
                        text: "Será redirigido al login..",
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
                    $submitBtn.innerHTML = "Registrarme"
                    $submitBtn.removeAttribute("disabled")
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