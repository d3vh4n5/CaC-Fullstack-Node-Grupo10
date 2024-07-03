<script setup>
import { useRouter, RouterView } from 'vue-router'
import axios from 'axios';
import Swal from 'sweetalert2'
import { API_URL } from '../../../constants/apiURL';
import { ref, onMounted } from 'vue'



</script>
<template>
    <section class="container p-3">
        <h1 class="my-4">Mi Historia Clinica</h1>

        <RouterView />
       
    </section>
</template>