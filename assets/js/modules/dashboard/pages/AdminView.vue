<script setup>
import { onMounted } from 'vue'; 
import { RouterView, RouterLink, useRouter } from 'vue-router'

const router = useRouter()

onMounted(()=> router.push('/pages/dashboard/admin/info'))

</script>

<template>
    <section class="p-3">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <RouterLink 
                    active-class="active"
                    class="nav-link"
                    to="/pages/dashboard/admin/info"
                >Info</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink 
                    active-class="active"
                    class="nav-link"
                    to="/pages/dashboard/admin/users"
                >Usuarios</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink 
                    active-class="active"
                    class="nav-link"
                    to="/pages/dashboard/admin/contact-messages"
                >Mensages de contacto</RouterLink>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Permisos</a>
            </li>
        </ul>
        <div class="border border-top-0 p-3 ">
            <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </div>
    </section>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active{
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to{
    opacity: 0;
}
</style>