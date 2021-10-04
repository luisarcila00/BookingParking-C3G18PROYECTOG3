import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import CrearUsuario from '../views/CrearUsuario.vue'
import Login from '../views/Login.vue'
import MisVehiculos from '../views/MisVehiculos.vue'
import Reservas from '../views/Reservas.vue'
import Bookings from '../views/MisReservas'
import Formulario from '../views/Formulario.vue'

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
        path: '/Formulario',
        name: 'Formulario',
        component: Formulario
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/reservas',
        name: 'reservas',
        component: Reservas
    },
    {
        path: '/crearusuario',
        name: 'crearusuario',
        component: CrearUsuario
    },
    {
        path: '/bookings',
        name: 'Mis Reservas',
        component: Bookings
    },
    {
        path: '/asignarCupos',
        name: 'Asignar Cupos',
        component: () => import('../views/AsignarCupos.vue')
    },
    {
        path: '/asignarTarifas',
        name: 'Asignar Tarifas',
        component: () => import('../views/AsignarTarifas.vue')
    }


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
