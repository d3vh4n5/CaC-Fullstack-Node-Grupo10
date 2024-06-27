<script setup>
import { RouterView, RouterLink } from 'vue-router';
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

        <div 
            class="bg-info-subtle text-info-emphasis p-4
                    border-start border-5 border-info-subtle">
            &#9432; Advertencia: Aplicacion en desarrollo
        </div>

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
            <h3 class="my-4">Consumo del backend</h3>
            <p>Donde están presente las solicitudes:</p>
            <ul>
                <li>
                    <b>GET:</b>
                </li>
            </ul>
            <div 
                class="bg-danger-subtle text-danger-emphasis p-4
                        border-start border-5 border-danger-subtle">
                &#9432; Los Flujos del usuario tipo Doctor, y tipo ADMIN 
                (Eq. de desarrollo) no fueron implementadas por el corto 
                tiempo del curso. Pero las solicitudes pueden probarse 
                <RouterLink to="/pages/dashboard/test">AQUI</RouterLink>
            </div>
        </article>
        <div>
            <RouterView />
        </div>
    </div>
</template>