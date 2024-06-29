<script setup>
import { ref } from 'vue';
import session from '../../../utils/session';

const userName = ref(session.userName)


</script>
<template>
    <section class="container p-3">
        <h1 class="my-4">Mi Historia Clinica</h1>
        
        <form class="">
            
            <fieldset class="border rounded p-3 mb-3">
                <legend>
                    <h3 class="form-titulo">Datos Personales</h3>
                </legend>
                <div class="row g3">
                    <div class="col-md-6">
                        <label for="inputNombre" class="form-label">Nombre y apellido</label>
                        <input type="text" class="form-control" id="inputNombre" name="inputNombre" placeholder="Nombre" :value="userName" disabled> 
                    </div>
                
                    
        
                    <div class="col-md-3">
                        <label for="inputFechaNacimiento" class="form-label">Fecha de Nacimiento</label>
                        <input type="date" id="inputFechaNacimiento" class="form-control" name="inputFechaNacimiento">
                        
                    </div>
        
                    <div class="col">
                        <label for="inputSexo" class="form-label">Sexo</label>
                        <select id="inputSexo" name="inputSexo" class="form-select">
                        <option value="" selected>Sexo</option>
                        <option value="">Femenino</option>
                        <option value="">Masculino</option>
                        <option value="">Binario</option>
                        <option value="">Prefiere No indicarlo</option>                      
                        </select>
                    </div>
                </div>
                <br>
                <div class="row g4">
                    <div class="col-md-3">
                        <label for="inputEstadoCivil" class="form-label">Estado Civil</label>
                        <select id="inputEstadoCivil" name="inputEstadoCivil" class="form-select">
                        <option value="" selected>Estado civil</option>
                        <option value="">Soltero/a</option>
                        <option value="">Casado/a</option>
                        <option value="">Divorciado/a</option>
                        <option value="">Viudo/a</option>
                        <option value="">Vínculo de hecho</option>
                        <option value="">Separado/a</option>        
                        </select>
                    </div>               
    
                    <div class="col-md-3">
                        <label for="inputPeso" class="form-label">Peso</label>
                        <input type="number" class="form-control" id="inputPeso" name="inputPeso" required>
                    </div>
    
                    <div class="col-md-3">
                        <label for="inputAltura" class="form-label">Altura</label>
                        <input type="number" class="form-control" id="inputAltura" name="inputAltura" required>
                    </div>                                   
                
                    <div class="col-md-3">
                        <label for="inputGrupoSanguineo" class="form-label">Grupo Sanguíneo</label>
                        <select id="inputGrupoSanguineo" name="inputGrupoSanguineo" class="form-select">
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
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckHipertension" name="flexCheckHipertension">
                                <label class="form-check-label" for="flexCheckHipertension">
                                Hipertensión
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDiabetes" name="flexCheckDiabetes">
                                <label class="form-check-label" for="flexCheckDiabetes">
                                Diabetes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckAsma" name="flexCheckAsma">
                                <label class="form-check-label" for="flexCheckAsma">
                                Asma
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckAlergias" name="flexCheckAlergias">
                                <label class="form-check-label" for="flexCheckAlergias">
                                Alergias
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckCorazon" name="flexCheckCorazon">
                                <label class="form-check-label" for="flexCheckCorazon">
                                Insuficiencia Cardíaca
                                </label>
                            </div>
                                                
                        </div>
                        <div class="col">
                            <h4>Consumos Problemáticos</h4>  
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckTabaco" name="flexCheckTabaco">
                                <label class="form-check-label" for="flexCheckTabaco">
                                Tabaco
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckAlcohol" name="flexCheckAlcohol">
                                <label class="form-check-label" for="flexCheckAlcohol">
                                Alcohol
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckMarihuana" name="flexCheckMarihuana">
                                <label class="form-check-label" for="flexCheckMarihuana">
                                Marihuana
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckCocaina" name="flexCheckCocaina">
                                <label class="form-check-label" for="flexCheckCocaina">
                                Cocaína
                                </label>
                            </div>                        
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckOtras" name="flexCheckOtras">
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
                    <input class="btn btn-warning col-md-2" type="reset" value="Resetear">
                    <br>               
                </div>
            </form>    
            
        </section>
</template>