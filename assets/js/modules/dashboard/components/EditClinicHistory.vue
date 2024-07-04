<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router'
import axios from 'axios'
import Swal from 'sweetalert2'
import { API_URL } from '../../../constants/apiURL.js'
import LoadingSpinner from './LoadingSpinner.vue'

const form = ref({})
const queryStrings = new URLSearchParams(window.location.search)
const id = queryStrings.get("id")

const getUserClinicHistory = async () => {
    try {
        const { data } = await axios.get(API_URL + "/clinic-histories/" + id)
        form.value = {
            ...data,
             dateOfBirth: formatDate(new Date(data.dateOfBirth))
        }
    } catch (error) {
        Swal.fire({
            title: "Error",
            text: "Hubo un problema en el servidor.",
            icon: "error"
        });
    }
}

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Mes es 0-indexado
  const year = date.getFullYear();
  
  return `${year}-${month}-${day}`;
}

const handleSubmit = async () => {
    try {
        // const result = await axios.put(API_URL + '/clinic-histories/'+ id, { ...form.value })
        alert("Este flujo aún no está listo")
    } catch (error) {
        Swal.fire({
            title: "Error",
            text: "No se pudo obtener la historia clinica",
            icon: "error"
        });
    }
}

onMounted(()=>{getUserClinicHistory()})

</script>
<template>
    <form v-if="form.name" @submit.prevent="handleSubmit">
        <fieldset class="border rounded p-3 mb-3">
            <legend>
                <h3 class="form-titulo">Datos Personales</h3>
            </legend>
            <div class="row g3">
                <div class="col-md-6">
                    <label for="inputNombre" class="form-label">Nombre y apellido</label>
                    <input 
                        v-model="form.name"
                        type="text" 
                        class="form-control" 
                        id="name" 
                        name="name"
                        > 
                </div>
            
                

                <div class="col-md-3">
                    <label for="inputFechaNacimiento" class="form-label">Fecha de Nacimiento</label>
                    <input 
                        v-model="form.dateOfBirth"
                        type="date" 
                        id="dateOfBirth" 
                        class="form-control" 
                        name="dateOfBirth">
                    
                </div>

                <div class="col">
                    <label for="inputSexo" class="form-label">Sexo</label>
                    <select 
                        v-model="form.gender"
                        id="gender"
                        name="gender" 
                        class="form-select">
                    <option disabled selected>Sexo</option>
                    <option>Femenino</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Binario">Binario</option>
                    <option value="Prefiere No indicarlo">Prefiere No indicarlo</option>                      
                    </select>
                </div>
            </div>
            <br>
            <div class="row g4">
                <div class="col-md-3">
                    <label for="inputEstadoCivil" class="form-label">Estado Civil</label>
                    <select 
                        v-model="form.maritalStatus"
                        id="maritalStatus" 
                        name="maritalStatus" 
                        class="form-select">
                    <option disabled selected>Estado civil</option>
                    <option>Soltero/a</option>
                    <option>Casado/a</option>
                    <option>Divorciado/a</option>
                    <option>Viudo/a</option>
                    <option>Vínculo de hecho</option>
                    <option>Separado/a</option>        
                    </select>
                </div>               

                <div class="col-md-3">
                    <label for="inputPeso" class="form-label">Peso</label>
                    <input 
                        v-model="form.weight"
                        type="number" 
                        class="form-control" 
                        id="weight" 
                        name="weight" 
                        required>
                </div>

                <div class="col-md-3">
                    <label for="inputAltura" class="form-label">Altura</label>
                    <input 
                        v-model="form.height"
                        type="number" 
                        class="form-control" 
                        id="height" 
                        name="height"
                        required>
                </div>                                   
            
                <div class="col-md-3">
                    <label for="inputGrupoSanguineo" class="form-label">Grupo Sanguíneo</label>
                    <select 
                        v-model="form.bloodType"
                        id="bloodType" 
                        name="bloodType" 
                        class="form-select">
                    <option value="" selected>Grupo Sanguíneo</option>
                    <option>A RH+</option>
                    <option>A RH-</option>
                    <option>B RH+</option>
                    <option>B RH-</option>
                    <option>AB RH+</option>
                    <option>AB RH-</option>
                    <option>O+</option>
                    <option>O-</option>
                    </select>
                </div>
            </div>
        </fieldset>

        <fieldset class="border rounded p-3 mb-3">
            <legend>
                <h3 class="form-titulo">Datos Clínicos</h3>
            </legend>
            <div class="container text">
                <div class="row align-items-start">
                    <div class="col">
                        <h4>Antecedentes Familiares</h4> 
                        <div class="form-check">
                            <input 
                                v-model="form.hypertension"
                                class="form-check-input" 
                                type="checkbox" 
                                id="hypertension" 
                                name="hypertension">
                            <label class="form-check-label" for="flexCheckHipertension">
                            Hipertensión
                            </label>
                        </div>
                        <div class="form-check">
                            <input 
                                v-model="form.diabetes"
                                class="form-check-input" 
                                type="checkbox" 
                                id="diabetes" 
                                name="diabetes">
                            <label class="form-check-label" for="flexCheckDiabetes">
                            Diabetes
                            </label>
                        </div>
                        <div class="form-check">
                            <input 
                                v-model="form.asthma"
                                class="form-check-input" 
                                type="checkbox" 
                                id="asthma" 
                                name="asthma">
                            <label class="form-check-label" for="flexCheckAsma">
                            Asma
                            </label>
                        </div>
                        <div class="form-check">
                            <input
                                v-model="form.allergies" 
                                class="form-check-input" 
                                type="checkbox" 
                                id="allergies" 
                                name="allergies">
                            <label class="form-check-label" for="flexCheckAlergias">
                            Alergias
                            </label>
                        </div>
                        <div class="form-check">
                            <input 
                                v-model="form.heartFailure"
                                class="form-check-input" 
                                type="checkbox" 
                                id="heartFailure" 
                                name="heartFailure">
                            <label class="form-check-label" for="flexCheckCorazon">
                            Insuficiencia Cardíaca
                            </label>
                        </div>
                                            
                    </div>
                    <div class="col">
                        <h4>Consumos Problemáticos</h4>  
                        <div class="form-check">
                            <input 
                                v-model="form.tobacco"
                                class="form-check-input" 
                                type="checkbox"  
                                id="tobacco" 
                                name="tobacco">
                            <label class="form-check-label" for="flexCheckTabaco">
                            Tabaco
                            </label>
                        </div>
                        <div class="form-check">
                            <input 
                                v-model="form.alcohol" 
                                class="form-check-input" 
                                type="checkbox" 
                                id="alcohol" 
                                name="alcohol">
                            <label class="form-check-label" for="flexCheckAlcohol">
                            Alcohol
                            </label>
                        </div>
                        <div class="form-check">
                            <input 
                                v-model="form.dope"
                                class="form-check-input" 
                                type="checkbox" 
                                id="dope" 
                                name="dope">
                            <label class="form-check-label" for="flexCheckMarihuana">
                            Marihuana
                            </label>
                        </div>
                        <div class="form-check">
                            <input
                                v-model="form.cocaine" 
                                class="form-check-input" 
                                type="checkbox" 
                                id="cocaine" 
                                name="cocaine">
                            <label class="form-check-label" for="flexCheckCocaina">
                            Cocaína
                            </label>
                        </div>                        
                        <div class="form-check">
                            <input 
                                v-model="form.otherDrugs"
                                class="form-check-input" 
                                type="checkbox" 
                                id="otherDrugs" 
                                name="otherDrugs">
                            <label class="form-check-label" for="flexCheckOtras">
                            Otras Drogas Peligrosas
                            </label>
                        </div> 
                    </div>
                </div>
            </div>            
        </fieldset>
            
            
        <div class="mb-2 d-flex gap-3">
            <input class="btn btn-success col-md-2" type="submit" value="Registrar" >
            <RouterLink 
                class="btn btn-outline-warning"
                to="/pages/dashboard/clinic-history">Cancelar</RouterLink>
            <br>               
        </div>
    </form>   
    <div v-else>
        <LoadingSpinner />
    </div>
</template>