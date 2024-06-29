<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { API_URL } from '../../../constants/apiURL'
import session from '../../../utils/session'

const dataGET = ref([])
const dataPOST = ref([])

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


</script>
<template>
    <div class="border rounded p-3 my-3">
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
    </div>
</template>