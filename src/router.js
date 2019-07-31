import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './pages/Home'
import MyProposals from './pages/MyProposals'
import ReviewProposals from './pages/ReviewProposals'
import Publish from './pages/Publish'
import Category from './pages/Category'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/myproposals', component: MyProposals },
    { path: '/publish', component: Publish },
    { path: '/reviewproposals', component: ReviewProposals },
    { path: '/categories/:id', component: Category },
]

export default new VueRouter({
    routes
})