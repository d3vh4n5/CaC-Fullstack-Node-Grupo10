<script setup>
const props = defineProps(['clinicHistory'])
const { clinicHistory } = props
console.log(props.clinicHistory)

</script>
<template>
   <article v-if="clinicHistory !== null">
        <button class="btn btn-warning mb-3">Editar</button>
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
</template>