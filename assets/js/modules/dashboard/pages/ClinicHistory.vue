<template>
    <section class="container">
        <h1>Mi Historia Clinica</h1>
        <h3 class="form-titulo">Datos Personales</h3>
        <!-- <h1 class="animate__animated wow animate__fadeIn">Content</h1> -->

        <form class="row g-3">

            <div class="col-md-6">
            <label for="inputNombre" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="inputNombre" name="inputNombre" placeholder="Nombre"> 
            </div>

            <div class="col-md-6">
            <label for="inputApellido" class="form-label">Apellido</label>
            <input type="text" class="form-control" id="inputApellido" name="inputApellido" placeholder="Apellido">
            </div>

            <div class="col-md-6">
                <label for="inputEmail" class="form-label">Email</label>
                <input type="email" class="form-control" id="inputEmail" name="inputEmail" placeholder="@">
            </div>
            <div class="col-md-6">
                <label for="inputIdUser" class="form-label">ID Usuario</label>
                <input type="text" class="form-control" id="inputIdUser" name="inputIdUser">
            </div>
            <div class="col-md-6">
                <label for="inputDNI" class="form-label">DNI</label>
                <input type="text" class="form-control" id="inputDNI" name="inputDNI" placeholder="123456789">
            </div>
            <div class="col-md-6">
                <label for="inputTelefono" class="form-label">Teléfono</label>
                <input type="text" class="form-control" id="inputTelefono" name="inputTelefono" placeholder="123456789">
            </div>

            <div class="col-12">
            <label for="inputAddress" class="form-label">Dirección</label>
            <input type="text" class="form-control" id="inputAddress" name="inputAddress" placeholder="Avenida Siempreviva 123">
            </div>
            <div class="col-12">
            <label for="inputAddress2" class="form-label">Dirección cont.</label>
            <input type="text" class="form-control" id="inputAddress2" name="inputAddress2" placeholder="Departamento, casa, etc">
            </div>
            <div class="col-md-6">
            <label for="inputCity" class="form-label">Ciudad</label>
            <input type="text" class="form-control" id="inputCity" name="inputCity" placeholder="Ciudad">
            </div>
            <div class="col-md-4">
            <label for="inputState" class="form-label">Provincia</label>
            <select id="inputState" name="inputState" class="form-select">
                <option value="" selected>Provincia</option>
                        <option value="Ciudad Autónoma de buenos Aires">Ciudad Autónoma de Buenos Aires</option>
                        <option value="Buenos Aires">Buenos Aires</option>
                        <option value="Catamarca">Catamarca</option>
                        <option value="Chaco">Chaco</option>
                        <option value="Chubut">Chubut</option>
                        <option value="Córdoba">Córdoba</option>
                        <option value="Corrientes">Corrientes</option>
                        <option value="Entre Ríos">Entre Ríos</option>
                        <option value="Formosa">Formosa</option>
                        <option value="Jujuy">Jujuy</option>
                        <option value="La Pampa">La Pampa</option>
                        <option value="La Rioja">La Rioja</option>
                        <option value="Mendoza">Mendoza</option>
                        <option value="Misiones">Misiones</option>
                        <option value="Neuquén">Neuquén</option>
                        <option value="Río Negro">Río Negro</option>
                        <option value="Salta">Salta</option>
                        <option value="San Juan">San Juan</option>
                        <option value="Santa Cruz">Santa Cruz</option>
                        <option value="Santa Fe">Santa Fe</option>
                        <option value="Santiago del Estero">Santiago del Estero</option>
                        <option value="Tierra del Fuego">Tierra del Fuego</option>
                        <option value="Tucumán">Tucumán</option>        
                    </select>

            </div>
            <div class="col-md-2">
            <label for="inputZip" class="form-label">Código Postal</label>
            <input type="text" class="form-control" id="inputZip" name="inputZip" placeholder="AA1243">
            </div>
                    <br>
                    <div class="col-md-1">
                        <label for="inputEdad" class="form-label">Edad</label>
                        <input type="number" class="form-control" id="inputEdad" name="inputEdad" placeholder="99">
                    </div>

                    <div class="col-md-2">
                        <label for="inputFechaNacimiento" class="form-label">Fecha de Nacimiento</label>
                        <input id="inputFechaNacimiento" name="inputFechaNacimiento">
                        
                    </div>

                    <div class="col-md-2">
                        <label for="inputSexo" class="form-label">Sexo</label>
                        <select id="inputSexo" name="inputSexo" class="form-select">
                        <option value="" selected>Sexo</option>
                        <option value="">Femenino</option>
                        <option value="">Masculino</option>
                        <option value="">Binario</option>
                        <option value="">Prefiere No indicarlo</option>                      
                        </select>
                    </div>
    
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

                    <div class="col-md-1">
                        <label for="inputPeso" class="form-label">Peso</label>
                        <input type="number" class="form-control" id="inputPeso" name="inputPeso" placeholder="99">
                    </div>

                    <div class="col-md-1">
                        <label for="inputAltura" class="form-label">Altura</label>
                        <input type="number" class="form-control" id="inputAltura" name="inputAltura" placeholder="99">
                    </div>                                   
                
                    <div class="col-md-2">
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

                    <br>
                <h3 class="form-titulo">Datos Clínicos</h3>
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
                <br>
                
                <div class="row g-3 col">
                    <h3>Consulta Médica</h3>                                 
                        <div class="col-md-2">
                            <label for="inputFechaConsulta" class="form-label">Fecha de Consulta</label>
                            <input id="inputFechaConsulta" name="inputFechaConsulta">
                            
                        </div>
                        
                        <div class="col-md-3">                    
                            <label for="inputEspecialista" class="form-label">Nombre Especialista</label>
                            <input type="text" class="form-control" id="inputEspecialista" name="inputEspecialista" placeholder="Médico Especialista"> <!-- Entre su Nombre"-->
                        </div>

                        <div class="col-md-3">                    
                            <label for="inputEspecialidad" class="form-label">Especialidad Médica</label>
                            <input type="text" class="form-control" id="inputEspecialidad" name="inputEspecialidad" placeholder="Especialidad"> <!-- Entre su Nombre"-->
                        </div>

                        <div class="col-md-3">                    
                            <label for="inputTelEspecialista" class="form-label">Teléfono Médico</label>
                            <input type="text" class="form-control" id="inputTelEspecialista" name="inputTelEspecialista" placeholder="Teléfono"> <!-- Entre su Nombre"-->
                        </div>

                        <div class="mb-3 mt-3">
                            <label for="inputSintomas">Descripción Síntomas</label>
                            <textarea class="form-control" rows="2" id="inputSintomas" name="inputSintomas" placeholder="Síntomas"></textarea>
                        </div>
                        
                        <div class="mb-3 mt-3">
                            <label for="inputDiagnostico">Diagnóstico</label>
                            <textarea class="form-control" rows="2" id="inputDiagnostico" name="inputDiagnostico" placeholder="Diagnóstico Profesional"></textarea>
                        </div>
                        
                        <div class="mb-3 mt-3">
                            <label for="inputTratamiento">Tratamiento</label>
                            <textarea class="form-control" rows="2" id="inputTratamiento" name="inputTratamiento" placeholder="Indicación Tratamiento"></textarea>
                        </div>
                        

                        <div class="mb-3 mt-3">
                            <label for="inputComentarios">Comentarios:</label>
                            <textarea class="form-control" rows="3" id="inputComentarios" name="inputComentarios" placeholder="Comentarios"></textarea>
                        </div>
                        
                        <div class="col-md-8">
                            <label for="fileEstudiosMedicos" class="form-label">Estudios Médicos: </label>
                            <input class="col-md-6" type="file" id="fileEstudiosMedicos" name="fileEstudiosMedicos">
                            <button type="submit" class="btn btn-primary btn-sm btn-block">Subir Archivo</button>
                        </div>
                        
                </div>
                <div class="mb-2">
                    <input class="btn btn-success col-md-2" type="submit" value="Registrar" >
                    <input class="btn btn-warning col-md-2" type="reset" value="Resetear">
                    <br>               
                </div>
            </form>    
            
        </section>
</template>