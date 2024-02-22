
import {createRouter, createWebHistory} from 'vue-router'
import HomePage from './../components/Homepage.vue'
import Services from './../components/Services.vue'
import About from './../components/About.vue'
import Clients from './../components/Clients.vue'
import ContactUs from './../components/ContactUs.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/services',
        name: 'services',
        component: Services
    },
    {
        path: '/about',
        name: 'about',
        component: About,

    },
    {
        path: '/clients',
        name: 'clients',
        component: Clients,
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactUs
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router