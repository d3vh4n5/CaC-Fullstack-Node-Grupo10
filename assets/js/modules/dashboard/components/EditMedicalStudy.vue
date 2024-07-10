<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import axios from 'axios'
import { API_URL } from '../../../constants/apiURL';
import session from '../../../utils/session';
import { formatDate } from '../utils/formatDate'
import { Toast } from '../utils/Toast'
import Swal from 'sweetalert2'
import LoadingSpinner from './LoadingSpinner.vue'

const router = useRouter()

const form = ref(null)
const queryStrings = new URLSearchParams(window.location.search)
const id = queryStrings.get("id")

const getMedicalStudy = async () => {
    try {
        const { data } = await axios.get(API_URL + "/medical-studies/" + id)
        form.value = {
            ...data,
             date: formatDate(new Date(data.date))
        }
        console.log(form.value)
    } catch (error) {
        console.error(error)
        Swal.fire({
            title: "Error",
            text: "Hubo un problema en el servidor.",
            icon: "error"
        });
    }
}

const handleSubmit = async (e)=> {

    try {
        const resp = await fetch(API_URL + '/medical-studies/' + id, {
            method: 'PUT',
            headers: {
                'Content-type': "application/json",
                Authorization: `Bearer ${session.accessToken}`
            },
            body : JSON.stringify(form.value)
        })
        const data = await resp.json()
        console.log(data)

        if (resp.status >= 400){
            throw new Error(data.error)
        }

        Toast.fire({
            icon: "success", // este puede ser de error
            title: "Estudio cargado con éxito"
        });

        setTimeout(()=>{
            router.push('/pages/dashboard/medical-studies')
        }, 1000)

    } catch (error) {
        Toast.fire({
            icon: "error",
            title:  `No se pudo enviar
        ${error}`
        });
    }

}

const handleFile = (e) => {
    const file = e.target.files[0]

    console.log(file)

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
        $formFileErrorsContainer.innerText = `Tipo de archivo no permitido, por favor revise los tipos ed archivos habilitados.`;
        $submitBtn.setAttribute('disabled', true)
        return
    }
}

onMounted(()=> {getMedicalStudy()})

</script>
<template>
    <div>
        <h2>Editar estudio</h2>
        <pre>
            {{ form }}
        </pre>
        <form class="w-50 mx-auto" @submit.prevent="handleSubmit" v-if="form !== null">
            <div class="mb-3">
                <label for="name" class="form-label">Titulo</label>
                <input 
                    v-model="form.name"
                    type="text" 
                    class="form-control" 
                    id="name" 
                    required 
                    name="name">
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Descipción</label>
                <textarea 
                    v-model="form.description"
                    class="form-control" 
                    id="description" 
                    rows="3" 
                    required 
                    name="description"></textarea>
            </div>
            <div class="mb-3">
                <label for="date" class="form-label">Fecha del estudio</label>
                <input 
                    v-model="form.date"
                    type="date" 
                    name="date" 
                    id="date" 
                    class="form-control" required>
            </div>
            <div class="mb-3">
                <select 
                    v-model="form.type"
                    name="type" 
                    class="form-select" 
                    required>
                    <option selected disabled>Seleccione el tipo de estudio</option>
                    <option value="1">Radiografía</option>
                    <option value="2">Resonancia</option>
                    <option value="3">Análisis de sangre</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Cargar</button>
            <RouterLink 
                class="btn btn-outline-warning ms-2"
                to="/pages/dashboard/medical-studies">Volver</RouterLink>
        </form>
        <div v-else>
            <LoadingSpinner />
        </div>
    </div>
</template>