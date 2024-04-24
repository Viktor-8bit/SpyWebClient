
import  notes  from './pages/notes.vue'
import  search from './pages/search.vue'
import  logout from './pages/logout.vue'
import mian from './pages/mian.vue'
import aboutHost from './pages/aboutHost.vue'
import registration from './pages/registration.vue'
import login from './pages/login.vue'
import axios from "axios";

import { createRouter, createWebHistory } from 'vue-router';



const routes = [

    {
        path: '/:hostname([\\w-]+)',
        component: aboutHost,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/notes',
        component: notes,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/search',
        component: search,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/logout',
        component: logout,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/',
        component: mian,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/registration',
        component: registration
    },
    {
        path: '/login',
        component: login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})


const api = axios.create({
});

router.beforeEach((to, from, next) => {
    var jwtToken = localStorage.getItem('jwt_token');


    if (to.matched.some((record) => record.meta.requiresAuth) && !jwtToken) {

        next('/login');
    } else {

        api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('jwt_token')}`
        next();
    }
});


export default {
    router,
    api
};

