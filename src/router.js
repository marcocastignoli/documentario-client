import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './pages/Home'
import MyProposals from './pages/MyProposals'
import ReviewProposals from './pages/ReviewProposals'
import Publish from './pages/Publish'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/myproposals', component: MyProposals },
    { path: '/publish', component: Publish },
    { path: '/reviewproposals', component: ReviewProposals },
]

export default new VueRouter({
    routes
})