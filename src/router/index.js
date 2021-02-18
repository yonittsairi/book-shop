import Vue from 'vue'

import Router from 'vue-router'
import BookDetails from '@/views/BookDetails.vue'
import BookApp from '@/views/BookApp.vue'
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import BookAdd from "@/views//BookAdd.vue";
Vue.use(Router)
const routes = [

  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home
  },

  {
    path: '/Books',
    name: 'Books',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: BookApp
  },
  {
    path: '/About',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/BookAdd',
    name: 'BookAdd',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: BookAdd
  },
  {
    path: '/details/:id',
    name: 'details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: BookDetails
  }
]

const router = new Router({
  routes
})

export default router
