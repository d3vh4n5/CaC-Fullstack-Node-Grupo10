<script setup>
import { RouterLink, useRouter } from 'vue-router'
import axios from 'axios';
import {API_URL} from '../../../constants/apiURL';
import { ref, onMounted } from 'vue'
import Swal from 'sweetalert2'

const router = useRouter()

const studies = ref([])

async function loadTable (){
    const resp = await axios.get (API_URL + "/medical-studies")
    console.log(resp.data);
    studies.value = resp.data
}

const editMedicalStudy = id => {
    router.push('/pages/dashboard/medical-studies/edit-medical-study?id='+id)
}

const deleteMedicalStudy = async (id) => {
    const confirmation = confirm(`Estás seguro que querés borrar el registro ${id}?`)
    
    if(confirmation){
        try {
            await axios.delete(API_URL + "/medical-studies/" + id)
            Swal.fire({
                text: "El registro se borró correctamente.",
                icon: "success",
                toast: true,
                position: 'bottom',
                timer: 3000,
                showConfirmButton: false
            });
            await loadTable()
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: "Hubo un problema en el servidor.",
                icon: "error"
            });
        }
    }
}

onMounted(() => {loadTable()})
</script>

<template>
    <div>
        <RouterLink
            to="/pages/dashboard/medical-studies/add-medical-study"
            class="btn btn-primary"
        >+ Agregar estudio</RouterLink>
        <div class="overflow-x-auto">

            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Descripción</th>
                        <th>Fecha</th>
                        <th>Tipo</th>
                        <th>Archivo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="study in studies">
                        <td>{{ study.name }}</td>
                        <td>{{ study.description }}</td>
                        <td>{{ study.date }}</td>
                        <td>{{ study.type }}</td>
                        <td>{{ study.file }}</td>
                        <td>
                            <button 
                                @click="editMedicalStudy(study.id)"
                                class="btn">✏️</button>
                            <button
                                @click="deleteMedicalStudy(study.id)" 
                                class="btn">❌</button>
                        </td>
                    </tr>
                </tbody>
                
            </table>
        </div>
    </div>
</template>