import { createWebHistory , createRouter } from 'vue-router'

import Dashboard from './pages/Dashboard.vue'
import ClinicHistory from './pages/ClinicHistory.vue'
import MedicalStudies from './pages/MedicalStudies.vue'
import Test from './pages/Test.vue'

export const routes = [
  { 
    path: '/pages/dashboard',               
    label: "🎛️ Dashboard",       
    component: Dashboard ,
    children: [
      {
        path: 'test',               
        label: "🎛️ Dashboard",       
        component: Test ,
      }
    ]
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