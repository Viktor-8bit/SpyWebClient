
import  notes  from './pages/notes.vue'
import  search from './pages/search.vue'
import  logout from './pages/logout.vue'
import  test from './pages/test.vue'
import mian from './pages/mian.vue'
import aboutHost from './pages/aboutHost.vue'

import { createRouter, createWebHistory } from 'vue-router';

const routes = [

    {
        path: '/:hostname([\\w-]+)',
        component: aboutHost,
    },
    {
        path: '/notes',
        component: notes,
    },
    {
        path: '/search',
        component: search,
    },
    {
        path: '/logout',
        component: logout,
    },
    {
        path: '/test',
        component: test,
    },
    {
        path: '/',
        component: mian,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;
