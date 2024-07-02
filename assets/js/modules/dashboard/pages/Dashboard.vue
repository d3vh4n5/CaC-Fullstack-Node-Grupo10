<script setup>
import { RouterLink } from 'vue-router';
import Callout from '../components/Callout.vue'
</script>

<template>
    <div class="p-3">
        <article>

            <h1 class="mb-5">Bienvenido usuario</h1>
            <h5>
                En este dashboard encontrará todo lo necesario para utilizar la aplicación
            </h5>
            <hr>
            <h3>Historia clínica</h3>
            <p>
                Dentro de la historia Clinía podrá encontrar su historia cargada, 
                tendrá la posibilidad de crear una nueva en caso de no tener ninguna 
                o de editar la ya existente.
            </p>
            <h3>Estudios Médicos</h3>
            <p>
                Aquí podra ver una tabla con sus estudios cargados, o subir estudios 
                nuevos.
            </p>
        </article>
        <Callout type="info">
            Advertencia: Aplicacion en desarrollo
        </Callout>
        <article>
            <h1 class="text-danger my-5">INFORMACIÓN DESARROLLO - TESTING - PROFESOR:</h1>
            <p>
                Para el desarrollo de este Dashboard se implemetó Vue.js, el cual está
                en el material brindado por el aula virtual. Se agregó tambien el uso de un bundler (Parcel)
                para empaquetar el front-end y poder usar así una sintaxis más cómoda de Vue, así 
                como variables de entorno y demás ventajas de tener el front empaquetado.
            </p>
            <p>
                El uso de Vue nos permitó tener este Dashboard más organizado, 
                y ahorrar tiempo al reutilizar el código del Layout y demás componentes, 
                así como también facilitar las solicitudes HTTP.
            </p>
            <Callout type="warning">
                Los Flujos del usuario tipo Doctor, y tipo ADMIN 
                (Eq. de desarrollo) no fueron implementadas por el corto 
                tiempo del curso. Pero las solicitudes pueden probarse 
                <RouterLink 
                    to="/pages/dashboard/test"
                    class="btn btn-primary"
                    >AQUI</RouterLink>
            </Callout>
        </article>
    </div>
</template>