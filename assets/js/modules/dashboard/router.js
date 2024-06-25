import { createWebHistory , createRouter } from 'vue-router'

import Dashboard from './pages/Dashboard.vue'
import ClinicHistory from './pages/ClinicHistory.vue'
import MedicalStudies from './pages/MedicalStudies.vue'

export const routes = [
  { 
    path: '/pages/dashboard',               
    label: "🎛️ Dashboard",       
    component: Dashboard 
  },
  { 
    path: '/pages/dashboard/clinic-history', 
    label: "👤 Historia Clínica", 
    component: ClinicHistory 
  },
  { 
    path: '/pages/dashboard/medical-studies', 
    label: "📃 Estudios Médicos", 
    component: MedicalStudies 
  },
]

export const router = createRouter({
  history: createWebHistory (),
  routes,
})