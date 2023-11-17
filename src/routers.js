import { createRouter, createWebHashHistory } from "vue-router"
import cAboutPage from '@/pages/c-about'
import cHomePage from '@/pages/c-home'


const routerHistory = createWebHashHistory()

const routers = createRouter({
    history: routerHistory,
    routes:[
        {
            path: '/',
            component: cHomePage
        },
        {
            path: '/About',
            component: cAboutPage
        },
        {
            path: '/:CatchAll(.*)',
            component: <h1>404 Page Not Found</h1>
        }
    ]
})

export default routers