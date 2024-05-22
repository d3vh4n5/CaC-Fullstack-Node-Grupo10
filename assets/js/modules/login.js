window.addEventListener('load', () => {
    const form = document.getElementById('formulario')
    const nombre = document.getElementById('nombre')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const passConfirma = document.getElementById('passConfirma')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })

    const validaCampos = () => {
        //capturar los valores ingresados por el usuario
        const nombreValor = nombre.value.trim() //trim elimina espacios vacios delante y detras del string
        const emailValor = email.value.trim()
        const passwordValor = password.value.trim()
        const passConfirmaValor = passConfirma.value.trim();
        
        //validando campo email

        if(!emailValor){
            validaFalla(email, 'Campo vacio')
        }else if(!validaEmail(emailValor)){
            validaFalla(email, 'El e-mail no es valido')
        }else{
            validaOk(email)
        }

        //validando campo nombre
        //(!nombreValor) ? console.log('CAMPO VACIO') : console.log(nombreValor)

        if(!nombreValor) {
            console.log('Campo vacío')
            validaFalla(nombre, 'Campo vacío')
        }else{
            validaOk(nombre)
        }

        const validaFalla = (input, msje) => {
            const formcontrol = input.parentElement
            const aviso = formcontrol.querySelector('p')
            aviso.innerText = msje
            formControl.className = 'form-control falla'

        }
        const validaOk = (input, msje) => {
            const formControl = input.parentElement
            formControl.className = 'form-control ok'
        }
        const validaEmail = (email) => {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
        }

        //validando campo password
        const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/
        if (!passwordValor) {
            validaFalla(password, 'Campo vacío')
        } else if (passwordValor.length < 8) {
            validaFalla(passpasword, 'Debe tener 8 caracteres cómo mínimo.')
        } else if (!passwordValor.match(er)) {
            validaFalla(password, 'Debe tener al menos una may., una min. y un núm.')
        } else {
            validaOk(password)
        }

        //validando campo password Confirmación
        if (!passConfirmaValor) {
            validaFalla(passConfirma, 'Confirme su password')
        } else if (passValor !== passConfirmaValor) {
            validaFalla(passConfirma, 'La password no coincide')
        } else {
            validaOk(passConfirma)
        } 
    
    } )