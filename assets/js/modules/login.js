import { API_URL } from "../constants/apiURL.js"
import { basePath } from "../constants/basePath.js"
import LoadSpinner from "../components/LoadSpinner.js"


window.addEventListener('load', () => {
    const form = document.getElementById('formulario')
    const email = document.getElementById('email')
    const password = document.getElementById('password')

    const isSignedIn = localStorage.getItem('accessToken')

    if (isSignedIn !== null) {
        alert("Ya estás logeado, serás redirigido..")
        document.location.href =  basePath + '/pages/dashboard.html'
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault()
        const valid = validaCampos()

        if (!valid) return console.log("Campos no validos, reintentar")
        
        try {
            const resp = await fetch(API_URL + '/auth/login', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify({
                    email: email.value,
                    password: CryptoJS.SHA256(password.value).toString()
                })
            })

            console.log(resp.status)

            if (resp.status >= 200 && resp.status <= 300){
                // Swal.fire({
                //     title: "!Hecho!",
                //     text: "Logeado correctamente, será redirigido en 3 segundos..",
                //     icon: "success"
                // });

                const $loginBtn = document.getElementById('loginBtn')
                $loginBtn.setAttribute("disabled", true)
                $loginBtn.innerHTML = LoadSpinner

                const data = await resp.json()
                console.log(data)
                const { user, accessToken, refreshToken } = data

                localStorage.setItem("user", JSON.stringify(user))
                localStorage.setItem("accessToken", accessToken)
                localStorage.setItem("refreshToken", refreshToken)

                setTimeout(()=>{
                    document.location.href = basePath + '/pages/dashboard'
                }, 2000)
                
            } else {
                const data = await resp.json()
                Swal.fire({
                    title: "Error",
                    text: data.error,
                    icon: "error"
                });
            }
            
        } catch (error) {
            console.error(error)
            Swal.fire({
                title: "Error",
                text: "Ocurrió un error inesperado.",
                icon: "error"
            });
        }
        
    })

    const validaCampos = () => {
        //Verifico que los campos tengan contenido y no sean un espacio vacio
        const emailValor = email.value.trim()
        const passwordValor = password.value.trim()
      
        if (emailValor === '' || passwordValor === ''){
            alert("Por favor, complete todos los campos")
            return false
        }
        return true
    }
}) 
