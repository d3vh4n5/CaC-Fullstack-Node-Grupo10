<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { API_URL } from '../../../constants/apiURL'
import session from '../../../utils/session'
import Callout from '../components/Callout.vue'

const dataGET = ref([])
const dataPOST = ref([])
const form = ref()
const file = ref(null)

const protectedGETRequestExample = async () => {
    try {    
        // const options = {
        //     headers: {
        //         Authorization: `Bearer ${session.accessToken}`
        //     }
        // }
        // const resp = await axios.get(API_URL + '/auth/protected', options)
        
        // Ahora, al estar la request interceptada por el axios.interceptor
        // Que esta en el archivo app.js, hago la request como si fuese normal
        const resp = await axios.get(API_URL + '/auth/protected')
        console.log({ API_URL })
        dataGET.value = resp.data
    } catch (error) {
        console.error(error)
        alert("Ocurrió un error")
    }
}
const protectedPOSTRequestExample = async () => {
    try {    
        const options = {
            mySendedInfo: "Esta es la información que estoy enviando por POST desde el front"
        }
        const resp = await axios.post(API_URL + '/auth/protected', options)
        dataPOST.value = resp.data
    } catch (error) {
        console.error(error)
        alert("Ocurrió un error")
    }
}

const handleFile = (e) => {
    console.log(e.target.files[0])
    file.value = e.target.files[0]
}

const handleSubmit = async (e)=> {
    // const $form = e.currentTarget;
    // const formData = new FormData($form)
    const formData = new FormData(form.value)
    console.log(form.value)

    try {
        const resp = await fetch(API_URL + '/medical-studies', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${session.accessToken}`
            },
            body : formData
        })
        const data = await resp.json()

        if (resp.status >= 400){
            throw new Error(data.error)
        }

        alert("Se envió bien")

    } catch (error) {
        alert("No se pudo enviar. " + error)
    }

}

</script>
<template>
    <div class="p-3 my-3">
        <h1>Test Page</h1>
        <Callout type="warning" class="my-5">
            Esta pag es solo para el staff de desarrollo
        </Callout>
        <P>
            API en: <a href="https://healthup.alwaysdata.net/" target="_blank">https://healthup.alwaysdata.net/</a>
        </P>

        <h3>Consulta GET a protected (ruta de pruebas protegida por jwt):</h3>
        <button @click="protectedGETRequestExample" class="btn btn-primary">
            Pedir Información Protegida
        </button>
        <pre>
            <!-- {{ JSON.stringify(dataGET) }} -->
            {{ dataGET }}
        </pre>
        <h3>Consulta POST a protected (ruta de pruebas protegida por jwt):</h3>
        <button @click="protectedPOSTRequestExample" class="btn btn-primary">
            Enviar Información Protegida
        </button>
        <pre>
            {{ dataPOST }}
        </pre>

        <div>
            <form @submit.prevent="handleSubmit" ref="form">
                <pre>
                    {{ form }}
                </pre>
                <input  type="text" name="name" placeholder="Nombre">
                <br>
                <textarea  name="description" placeholder="Descripcion"></textarea>
                <br>
                <input type="date" name="date" id="">
                <br>
                <select  name="type" id="">
                    <option selected disabled>Tipo de estudio</option>
                    <option value=1>Dermatologica</option>
                    <option value=2>Radiografía</option>
                </select>
                <br>
                <input  type="file" name="file">
                <br>
                <button>Submit</button>
            </form>
        </div>
    </div>
</template>