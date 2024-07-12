<script setup>
import Callout from './Callout.vue'

</script>
<template>
    <section>
        <h2>Información de utilidad</h2>
        
        <p class="text-danger">Usted es un usuario Admin, por favor, sea responsable en 
            sus tareas.
        </p>

        <p>En esta sección podrás:</p>
        <ul>
            <li>Ver y administrar usuarios</li>
            <li>Ver los mensajes ed contacto que envían los visitantes 
                en el formulario de contacto.
            </li>
            <li>Administrar permisos de los usuarios.</li>
        </ul>
        
        <Callout type="info" content="aasd">
            <span>
                Por motivos didácticos y corrección del tp, todos los usuarios 
                serán Admins por defecto. Pero esto se supone que es una vista 
                unica para los usuarios del staff de desarrollo.
            </span>
        </Callout>
    </section>
</template>