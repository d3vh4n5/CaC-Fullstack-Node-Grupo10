<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { API_URL } from '../../../constants/apiURL';
import session from '../../../utils/session';
import { Toast } from '../utils/Toast'
import Callout from './Callout.vue'
import LoadingSpinner from './LoadingSpinner.vue'


const router = useRouter()
const loading = ref(false)

const handleSubmit = async (e)=> {
    loading.value = true
    const $form = e.currentTarget;
    const formData = new FormData($form)

    console.log($form )

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

        Toast.fire({
            icon: "success", // este puede ser de error
            title: "Estudio cargado con éxito"
        });

        setTimeout(()=>{
            loading.value = false
            router.push('/pages/dashboard/medical-studies')
        }, 1000)

    } catch (error) {
        Toast.fire({
            icon: "error",
            title:  `No se pudo enviar
            ${error}}`
        });
        loading.value = false
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

</script>
<template>
    <div>
        <h2>Agregar estudio</h2>
        <form class="col-12 col-md-6 mx-auto" @submit.prevent="handleSubmit">
            <div class="mb-3">
                <label for="name" class="form-label">Titulo</label>
                <input type="text" class="form-control" id="name" required name="name">
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Descipción</label>
                <textarea class="form-control" id="description" rows="3" required name="description"></textarea>
            </div>
            <div class="mb-3">
                <label for="date" class="form-label">Fecha del estudio</label>
                <input type="date" name="date" id="date" class="form-control" required>
            </div>
            <div class="mb-3">
                <select name="type" class="form-select" required>
                    <option value="" selected disabled>Seleccione el tipo de estudio</option>
                    <option value="1">Radiografía</option>
                    <option value="2">Resonancia</option>
                    <option value="3">Análisis de sangre</option>
                </select>
            </div>
            <div class="mb-5">
                <input
                    @change="handleFile" 
                    type="file" 
                    name="file"
                    class="form-control" 
                    required>
            </div>
            <button type="submit" class="btn btn-primary">
                <span v-if="!loading">Cargar</span>
                <LoadingSpinner  v-else />
            </button>
        </form>
    </div>
</template>