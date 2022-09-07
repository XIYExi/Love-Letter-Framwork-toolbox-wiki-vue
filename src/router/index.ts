import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import homeView from "@/views/home-view.vue";
import adminEbook from "@/views/admin/admin-ebook.vue";
import adminCategory from "@/views/admin/admin-category.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home-view',
    component: homeView
  },
  {
    path: '/admin/ebook',
    name: 'admin-ebook',
    component: adminEbook
  },
  {
    path:'/admin/category',
    name:'admin-category',
    component: adminCategory
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
