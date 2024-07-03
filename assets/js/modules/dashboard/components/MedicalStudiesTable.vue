<script setup>
import { RouterLink } from 'vue-router'
import axios from 'axios';
import {API_URL} from '../../../constants/apiURL';
import { ref, onMounted } from 'vue'

const studies = ref([])

async function loadTable (){
    const resp = await axios.get (API_URL + "/medical-studies")
    console.log(resp.data);
    studies.value = resp.data
}

onMounted(() => {loadTable()})
</script>

<template>
    <div>
        <RouterLink
            to="/pages/dashboard/medical-studies/add-medical-study"
            class="btn btn-primary"
        >+ Agregar estudio</RouterLink>
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Nombre</th>
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
                        <button class="btn">✏️</button>
                        <button class="btn">❌</button>
                    </td>
                </tr>
            </tbody>
            
        </table>
    </div>
</template>