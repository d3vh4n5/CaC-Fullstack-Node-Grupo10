import { createWebHistory , createRouter } from 'vue-router'

import Dashboard from './pages/Dashboard.vue'
import ClinicHistory from './pages/ClinicHistory.vue'
import MedicalStudies from './pages/MedicalStudies.vue'
import Test from './pages/Test.vue'
import AdminView from './pages/AdminView.vue'
import ContactMessagesTable from './components/ContactMessagesTable.vue'
import UsersTable from './components/UsersTable.vue'
import AdminInfo from './components/AdminInfo.vue'
import MedicalStudiesTable from './components/MedicalStudiesTable.vue'
import AddMedicalStudy from './components/AddMedicalStudy.vue'
import AddClinicHistory from './components/AddClinicHistory.vue'
import EditClinicHistory from './components/EditClinicHistory.vue'
import ClinicHistoryTemplate from './components/ClinicHistoryTemplate.vue'
import EditMedicalStudy from './components/EditMedicalStudy.vue'


export const routes = [
  { 
    path: '/pages/dashboard',               
    label: "🎛️ Dashboard",       
    component: Dashboard 
  },
  { 
    path: '/pages/dashboard/clinic-history', 
    label: "👤 Historia Clínica", 
    component: ClinicHistory,
    children: [
      {
        path: '',
        component: ClinicHistoryTemplate
      },
      {
        path: 'create-clinic-history',
        component: AddClinicHistory
      },
      {
        path: 'edit',
        component: EditClinicHistory
      },
    ]
  },
  { 
    path: '/pages/dashboard/medical-studies', 
    label: "📃 Estudios Médicos", 
    component: MedicalStudies,
    children: [
      {
        path: "",
        component: MedicalStudiesTable
      },
      {
        path: "add-medical-study",
        component: AddMedicalStudy
      },
      {
        path: "edit-medical-study",
        component: EditMedicalStudy
      },
    ]
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