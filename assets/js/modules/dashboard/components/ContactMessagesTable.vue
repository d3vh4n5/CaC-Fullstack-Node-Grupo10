<script setup>
import { ref, onMounted  } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'
import { API_URL } from '../../../constants/apiURL.js'
import Callout from './Callout.vue'
import LoadingSpinner from './LoadingSpinner.vue'

const contactMessages = ref(null)
const Toast = Swal.mixin({
  toast: true,
  position: "bottom",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});


const getAllMsgs = async () => {
    try {
        const resp = await axios.get(API_URL + "/contact-messages")
        const data = resp.data
        contactMessages.value = data
    } catch (error) {
        alert("Ocurrio un error en el servidor")
    }
}

const read = async (id) => {
    try {
        await axios.put(API_URL + "/contact-messages/" + id, {
            read: true
        })
        Toast.fire({
            icon: "success",
            title: "Mensaje cambiado a 'Leído'"
        });
        getAllMsgs()
    } catch (error) {
        Toast.fire({
            icon: "error",
            title: "Hubo un error al actualizar"
        });
    }
}

onMounted(() => {
    getAllMsgs()
})

</script>
<template>
     <div v-if="contactMessages === null">
        <LoadingSpinner />
     </div>
        <div v-else>
            <h1>Mensajes de contacto</h1>
            <Callout type="warning" class="my-4">
                A efectos de esta DEMO, los mensajes no se pueden borrar, 
                solo pueden marcarse como leídos
            </Callout>
            <table class="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>email</th>
                        <th>Asunto</th>
                        <th>Mensaje</th>
                        <th>Archivo</th>
                        <th>Leido</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="contactMessage in contactMessages">
                        <td>{{ contactMessage.name }}</td>
                        <td>{{ contactMessage.email }}</td>
                        <td>{{ contactMessage.subject }}</td>
                        <td>{{ contactMessage.message }}</td>
                        <td>
                            <button 
                                class="btn bg-light"
                                v-if=" contactMessage.file"
                                :title="contactMessage.file"
                            >
                                📂
                            </button>
                        </td>
                        <td>
                            <span v-if="contactMessage.read" class="text-light bg-success p-1 rounded">Leído</span>
                            <span v-else class="text-light bg-danger p-1 rounded">No</span>
                        </td>
                        <td class="d-flex gap-2">
                            <button 
                                v-if="!contactMessage.read"
                                @click="read(contactMessage.id)"
                                title="Marcar como leído"
                                class="btn bg-warning-subtle">👁️</button>
                            <button class="btn bg-secondary-subtle" disabled>❌</button>
                            <!-- <button class="btn bg-danger-subtle">❌</button> -->
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
</template>
<style scoped>
.file{

    &:hover{
        cursor: pointer;
    }
}
</style>