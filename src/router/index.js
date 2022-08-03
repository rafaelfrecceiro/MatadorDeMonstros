import Vue from 'vue'
import VueRouter from 'vue-router'
import PageApp from '@/pages/PagesApp'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'PageApp',
        component: PageApp
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
