<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import axios from 'axios';
import Swal from 'sweetalert2'
import { API_URL } from '../../../constants/apiURL';
import LoadingSpinner from './LoadingSpinner.vue';

const router = useRouter()

const clinicHistory = ref(null)

const getClinicHistory = async ()=> {
    try {
        const result = await axios.get(API_URL + '/clinic-histories/user-clinic-history')
        const data = result.data
        if (data === '') {
            router.push('/pages/dashboard/clinic-history/create-clinic-history')
        } else {
            clinicHistory.value = data
        }
    } catch (error) {
        console.error(error)
        Swal.fire({
            title: "Error",
            text: "Hubo un problema en el servidor.",
            icon: "error"
        });
    }
}

const deleteClinicHistory = async (id) => {
    try {
        await axios.delete(API_URL + '/clinic-histories/' + id)
        Swal.fire({
            title: "¡Hecho!",
            text: "Historia eliminada correctamente.",
            icon: "success"
        });
        setTimeout(()=>{
            router.push('/pages/dashboard/clinic-history/create-clinic-history')
        }, 2000)
    } catch (error) {
        console.error(error)
        Swal.fire({
            title: "Error",
            text: "Hubo un problema en el servidor.",
            icon: "error"
        });
    }
}

onMounted(()=>{
    getClinicHistory()
})


</script>
<template>
   <article v-if="clinicHistory !== null">
        <div class="d-flex justify-content-between">
            <RouterLink 
                :to="`/pages/dashboard/clinic-history/edit?id=${clinicHistory.id}`" 
                class="btn btn-warning my-3">Editar</RouterLink>
            <button 
                @click="deleteClinicHistory(clinicHistory.id)"
                class="btn btn-danger my-3"
                >Eliminar</button>
        </div>
        <div class="border rounded p-3">
            <h2>Datos Personales</h2>
            <table class="">
                <thead>
                <tr>
                    <th>Nombre y Apellido</th>
                    <td class="ps-3">{{ clinicHistory.name }}</td>
                </tr>
                <tr>
                    <th>Fecha de Nacimiento</th>
                    <td class="ps-3">{{ clinicHistory.dateOfBirth }}</td>
                </tr>
                <tr>
                    <th>Sexo</th>
                    <td class="ps-3">{{ clinicHistory.gender }}</td>
                </tr>
                <tr>
                    <th>Estado Civil</th>
                    <td class="ps-3">{{ clinicHistory.maritalStatus }}</td>
                </tr>
                <tr>
                    <th>Peso</th>
                    <td class="ps-3">{{ clinicHistory.weight }} kg</td>
                </tr>
                <tr>
                    <th>Altura</th>
                    <td class="ps-3">{{ clinicHistory.height }} m</td>
                </tr>
                <tr>
                    <th>Grupo Sanguíneo</th>
                    <td class="ps-3">{{ clinicHistory.bloodType }}</td>
                </tr>
                </thead>
            </table>
        </div>
        <div class="border rounded p-3 mt-3">
            <h2>Datos Clínicos</h2>
            <div class="row">
                <div class="col col-lg-6">

                    <h3 class="my-3">Antecedentes Familiares</h3>
                    <table>
                        <thead>
                        <tr>
                            <th>Hipertensión</th>
                            <td class="ps-3">{{ clinicHistory.hypertension ? 'Sí' : 'No' }}</td>
                        </tr>
                        <tr>
                            <th>Diabetes</th>
                            <td class="ps-3">{{ clinicHistory.diabetes ? 'Sí' : 'No' }}</td>
                        </tr>
                        <tr>
                            <th>Asma</th>
                            <td class="ps-3">{{ clinicHistory.asthma ? 'Sí' : 'No' }}</td>
                        </tr>
                        <tr>
                            <th>Alergias</th>
                            <td class="ps-3">{{ clinicHistory.allergies ? 'Sí' : 'No' }}</td>
                        </tr>
                        <tr>
                            <th>Insuficiencia Cardíaca</th>
                            <td class="ps-3">{{ clinicHistory.heartFailure ? 'Sí' : 'No' }}</td>
                        </tr>
                        </thead>
                    </table>
                </div>
                <div class="col col-lg-6">

                    <h3 class="my-3">Consumos Problemáticos</h3>
                    <table>
                        <thead>
                        <tr>
                            <th>Tabaco</th>
                            <td class="ps-3">{{ clinicHistory.tobacco ? 'Sí' : 'No' }}</td>
                        </tr>
                        <tr>
                            <th>Alcohol</th>
                            <td class="ps-3">{{ clinicHistory.alcohol ? 'Sí' : 'No' }}</td>
                        </tr>
                        <tr>
                            <th>Marihuana</th>
                            <td class="ps-3">{{ clinicHistory.marijuana ? 'Sí' : 'No' }}</td>
                        </tr>
                        <tr>
                            <th>Cocaína</th>
                            <td class="ps-3">{{ clinicHistory.cocaine ? 'Sí' : 'No' }}</td>
                        </tr>
                        <tr>
                            <th>Otras Drogas Peligrosas</th>
                            <td class="ps-3">{{ clinicHistory.otherDrugs ? 'Sí' : 'No' }}</td>
                        </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
   </article>
   <div v-else>
        <LoadingSpinner />
   </div>
</template>