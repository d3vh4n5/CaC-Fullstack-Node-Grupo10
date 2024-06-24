import { basePath } from "../constants/basePath.js";

class Session {
    #name
    #email
    #role
    #state
    #accessToken
    #refreshToken
    #isSignedIn

    constructor(){
        try {
            const user = JSON.parse(localStorage.getItem('user'))
            this.#name = user.name;
            this.#email = user.email;
            this.#role = user.role
            this.#state = user.state
            this.#accessToken = localStorage.getItem('accessToken')
            this.#refreshToken = localStorage.getItem('refreshToken')
            this.#isSignedIn = true
        } catch (error) {
            console.log('Probablemente no haya sesión')
        }
    }

    get isSignedIn(){
        return this.#isSignedIn
    }

    get userName() {
        return this.#name
    }

    async destroy(){
        // solicitd de logout al back para que borre el refresh token
        localStorage.removeItem('user')
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        this.#isSignedIn = false
        document.location.href = basePath + '/'
    }

    show(){ // Por motivos didáctios, pero esto no debería existir
        console.table({
            Nombre: this.#name,
            email: this.#email,
            Rol: this.#role,
            Estado: this.#state,
            Token: this.#accessToken,
            RF: this.#refreshToken
        }
        )
    }

    check(){
        const isSignedIn = localStorage.getItem('accessToken')
        if (isSignedIn === null) {
            document.location.href = basePath + '/'
        }
    }
}

const session = new Session()

export default session;
