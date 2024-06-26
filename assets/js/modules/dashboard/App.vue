<script setup>
import DashboardLayout from './components/DashboardLayout.vue'
import { RouterView } from 'vue-router'

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
  