import { createMemoryHistory, createRouter } from 'vue-router'

import Dashboard from './pages/Dashboard.vue'
import ClinicHistory from './pages/ClinicHistory.vue'
import MedicalStudies from './pages/MedicalStudies.vue'

export const routes = [
  { 
    path: '/',               
    label: "🎛️ Dashboard",       
    component: Dashboard 
  },
  { 
    path: '/clinic-history', 
    label: "👤 Historia Clínica", 
    component: ClinicHistory 
  },
  { 
    path: '/medical-studies', 
    label: "📃 Estudios Médicos", 
    component: MedicalStudies 
  },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})