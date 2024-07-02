<script setup>
import axios from 'axios';
import { API_URL } from '../../../constants/apiURL';
import { ref, onMounted } from 'vue'
import AddClinicHistory from '../components/AddClinicHistory.vue'
import ClinicHistoryTemplate from '../components/ClinicHistoryTemplate.vue'
import Callout from '../components/Callout.vue';

const hardcodedMedicalHistory = {
    name: "pepe",
    dateOfBirth: "1991-27-01",
    gender: "Masculino",
    maritalStatus: "Soltero",
    weight: "78",
    height: "1.72",
    bloodType: "A-",
    hypertension: false,
    diabetes: false,
    asthma: false,
    allergies: false,
    heartFailure: false,
    tobacco: false,
    alcohol: false,
    marijuana: false,
    cocaine: false,
    otherDrugs: false
};

const clinicHistory = ref(null)

const getClinicHistory = async ()=> {
    // obtener los datos desde la API
    // clinicHistory.value = hardcodedMedicalHistory
}

onMounted(()=>{
    getClinicHistory()
})


</script>
<template>
    <section class="container p-3">
        <h1 class="my-4">Mi Historia Clinica</h1>
        
        <!-- Si hay cartilla cargada: -->
        <div v-if="clinicHistory !== null">
            <ClinicHistoryTemplate :clinicHistory="clinicHistory" />
        </div>
        <!-- Si no hay cartilla cargada: -->
         <div v-else>
            <Callout type="warning">
                No has creado aún tu historial clínico, por favor, 
                créalo con el siguiente formulario
            </Callout>
            <AddClinicHistory/>
        </div>
    </section>
</template>