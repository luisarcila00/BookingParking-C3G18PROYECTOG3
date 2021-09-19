import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import MisVehiculos from '../views/MisVehiculos.vue'
import Reservas from '../views/Reservas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/mis-vehiculos',
    name: 'mis-vehiculos',
    component: MisVehiculos
  },
  {
    path: '/reservas',
    name: 'reservas',
    component: Reservas
  },

  {
    path: '/asignarCupos',
    name: 'Asignar Cupos',
    component: () => import('../views/AsignarCupos.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
