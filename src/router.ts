
import  search from './pages/search.vue'
import  logout from './pages/logout.vue'
import mian from './pages/mian.vue'
import aboutHost from './pages/aboutHost.vue'
import registration from './pages/registration.vue'
import login from './pages/login.vue'
import axios from "axios";
import user from "./pages/user.vue"

import { createRouter, createWebHistory } from 'vue-router';



const routes = [

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
        path: '/user/:username([\\w-]+)',
        component: user,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/host/:hostname([\\w-]+)',
        component: aboutHost,
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
        api.get("http://localhost:8000/api/Auth/LoginCheck")
        .then()
        .catch(error => {
                localStorage.removeItem('jwt_token');
            }
        );



        next();
    }
});


export default {
    router,
    api
};

