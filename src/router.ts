import Vue from 'vue'

import  mainpage from './pages/mainpage.vue'
import  amogus from './pages/amoguspage.vue'

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: mainpage,
    },
    {
        path: '/amogus',
        component: amogus,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;
