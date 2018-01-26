import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) //Vue.prototype.$route  Vue.prototype.$router

// const home = () => import('../components/home/home.vue')
// const techServer = () => import('../components/techServer/techServer.vue')
// const tradeCion = () => import('../components/tradeCion/tradeCion.vue')
// const techTraining = () => import('../components/techTraining/techTraining.vue')
// const aboutUs = () => import('../components/aboutUs/aboutUs.vue')
import home from '../components/home/home.vue'
import techServer from '../components/techServer/techServer.vue'
import tradeCion from '../components/tradeCion/tradeCion.vue'
import techTraining from '../components/techTraining/techTraining.vue'
import aboutUs from '../components/aboutUs/aboutUs.vue'

const router = new VueRouter({
    routes : [
        {path:'/',redirect:'/home'},
        {path:"/home",component:home},
        {path:"/techServer",component:techServer},
        {path:"/tradeCion",component:tradeCion},
        {path:"/techTraining",component:techTraining},
        {path:"/aboutUs",component:aboutUs},
    ]
})

export default router