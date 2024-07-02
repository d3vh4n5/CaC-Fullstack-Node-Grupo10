<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { API_URL } from '../../../constants/apiURL.js'
import Callout from './Callout.vue'


const users = ref(null)

const getAllUsers = async () => {
    try {
        const resp = await axios.get(API_URL + "/auth/users")
        const data = resp.data
        users.value = data
    } catch (error) {
        alert("Ocurrió un error con el servidor")
    }
}

const deleteUser = async (id) => {
    const confirmation = confirm(`Estás seguro que querés borrar al usauario ${id}?`)
    
    if(confirmation){
        try {
            await axios.delete(API_URL + "/auth/users/" + id)
            alert ("El usuario se bloqueó correctamente.")
            await getAllUsers()
        } catch (error) {
            alert("Ocurrió un error con el servidor")
        }
    }
}

const editUser = (id) => {
    try {
        // Opcion suspendida para la demo
    } catch (error) {
        alert("Ocurrió un error con el servidor") 
    }
}

onMounted(()=>{
    getAllUsers()
})

</script>

<template>
    <div v-if="users === null">Cargando...</div>
    <div v-else>
        <h1>Usuarios</h1>
        <Callout type="info" class="my-4">
            La acción de eliminar en esta entidad, será un borrado 
            lógico, ya que queremos mantener el usuario, al ser 
            raiz de muchas relaciones de datos. Sin embargo, no estamos 
            controlando el estado del usuario al momento de logear, para 
            que no se estén bloquendo entre usuarios.
            <br><br>
            Por otra parte, se ha bloqueado la opción de editar usuarios, 
            ya que no queremos que cualquier persona que entre a conocer 
            nuestro proyecto, pueda modificar información de acceso de otro
             usuario.
        </Callout>
        <table class="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>email</th>
                    <th>Rol</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.role }}</td>
                    <td>
                        <span v-if="user.state" class="text-light bg-success p-1 rounded">Activo</span>
                        <span v-else class="text-light bg-danger p-1 rounded">Baneado</span>
                    </td>
                    <td class="d-flex gap-2">
                        <button class="btn bg-secondary-subtle" disabled>✏️</button>
                        <!-- <button class="btn bg-warning-subtle">✏️</button> -->
                        <button 
                        title="Bloquear (eliminado lógico)"
                            @click="deleteUser(user.id)"
                            class="btn bg-danger-subtle"
                        >❌</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>