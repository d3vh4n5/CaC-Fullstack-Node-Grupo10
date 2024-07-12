<script setup>
import { RouterLink } from 'vue-router';
import Callout from '../components/Callout.vue'
import session from '../../../utils/session';

const userName = session.userName
</script>

<template>
    <div class="p-3">
        <article>

            <h1 class="mb-5">Bienvenido {{ userName }}</h1>
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
            <p>
                <b>Advertencia:</b> Aplicacion en desarrollo. En caso de error en las peticiones, 
                sugerimos reintentar las acciones varias veces, ya que nos hemos encontrado 
                con "<b>problemas de servidor</b>" en ocaciones, siendo el código es correcto. 
                Esto probablemente sea porque el backend es un servidor de pruebas que 
                está en Francia, lo cual cause lentitud y errores en las solicitudes.
            </p>
        </Callout>
        <article>
            <h1 class="text-danger my-5">INFORMACIÓN PARA VISITANTES:</h1>
            <p>
                Para el desarrollo de este Dashboard se implemetó <b>Vue.js</b>, el cual está
                en el material brindado por el aula virtual. Se agregó tambien el uso de un <b>bundler (Parcel)</b>
                para empaquetar el front-end y poder usar así una sintaxis más cómoda de Vue, así 
                como variables de entorno y demás ventajas de tener el front empaquetado.
            </p>
            <p>
                El uso de Vue nos permitó tener este Dashboard más organizado, 
                y ahorrar tiempo al reutilizar el código del Layout y demás componentes, 
                así como también facilitar las solicitudes HTTP.
            </p>
            <p>
                De lo que vimos en axios hemos agregado también los <b>Axios Interceptors</b>, que
                no es más que una función que interceptar todas las requests de la app 
                y les agrega el token de JWT. Con ello logramos simplificar las request
                y ahorrar trabajo al no tener que agregar en todas los headers de Auth.
            </p>
            <Callout type="warning">
                Para enriquecer la demo y que se pueda apreciar mejor nuestro trabajo 
                dejamos activada por defecto la vision de "Admin". Pero con operaciones 
                restringidas para no ocacionar problemas a otros visitantes, ni perder 
                información de otros visitantes.
                <RouterLink 
                    to="/pages/dashboard/admin"
                    class="btn btn-primary m-2"
                    >ADMIN</RouterLink>
            </Callout>
        </article>
    </div>
</template>