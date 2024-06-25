<script setup>
import { ref } from 'vue';
import DashboardLayout from './components/DashboardLayout.vue'
import { RouterView } from 'vue-router'

const name = ref('Juan')

</script>

<template>
    <div>
        <DashboardLayout>
            <RouterView />
        </DashboardLayout>
    </div>
</template>
<style scoped>
div{
    height: 100%;
}
</style>
  