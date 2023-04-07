import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    //path: '/',
    //name: 'home',
    //component: HomeView
    //By default we will point login page as first page after opening website
    path: '/',// '/' this is home page/ default page
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/books',
    name: 'books',
    component: () => import( '../views/Books.vue')
  },
  {
    path: '/author',
    name: 'author',
    component: () => import( '../views/Author.vue')
  },
  {
    path: '/issues',
    name: 'issues',
    component: () => import( '../views/Issues.vue')
  },
  {
    path: '/members',
    name: 'members',
    component: () => import( '../views/Members.vue')
  },
  {
    path: '/staff',
    name: 'staff',
    component: () => import( '../views/Staff.vue')
  },
  {
    path: '/books/:id',
    name: 'bookedit',
    component: () => import( '../views/BookEdit.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
