import { createWebHistory , createRouter } from 'vue-router'

import Dashboard from './pages/Dashboard.vue'
import ClinicHistory from './pages/ClinicHistory.vue'
import MedicalStudies from './pages/MedicalStudies.vue'
import Test from './pages/Test.vue'
import AdminView from './pages/AdminView.vue'
import ContactMessagesTable from './components/ContactMessagesTable.vue'
import UsersTable from './components/UsersTable.vue'
import AdminInfo from './components/AdminInfo.vue'

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
  { 
    path: '/pages/dashboard/admin', 
    label: "👑 Admin", 
    component: AdminView,
    children: [
      {
        path: '',
        component: AdminInfo
      },
      {
        path: 'info',
        component: AdminInfo
      },
      {
        path: 'contact-messages',
        component: ContactMessagesTable
      },
      {
        path: 'users',
        component: UsersTable
      },
    ]
  },
  {
    path: '/pages/dashboard/test',               
    label: "🧪 Test",       
    component: Test ,
  }
]

export const router = createRouter({
  history: createWebHistory (),
  routes,
})