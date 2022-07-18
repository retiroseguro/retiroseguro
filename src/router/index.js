import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/administrador',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Fantasma.vue'),
    children: [
      {
        path:'',
        name:'administrador',
        component: () => import(/* webpackChunkName: "about" */ '../views/Administrador/Admin.vue'),
      },
      {
        path:'editarapoderado',
        component: () => import(/* webpackChunkName: "about" */ '../views/Administrador/EditarApoderado.vue'),
      }
    ]
  },
  {
    path: '/apoderado',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. 
    component: () => import(/* webpackChunkName: "about" */ '../views/Fantasma.vue'),
    children: [ 
      {
        path: '',
        name: 'apoderado',
        component: () => import(/* webpackChunkName: "about" */ '../views/Apoderado/Apoderado.vue'),
      },
      {
        path: 'editar-perfil',
        component: () => import( /* webpackChunkName: "about" */ '../views/Apoderado/EditarPerfil.vue'),
      },
      {
        path: 'actualizarFoto',
        component: () => import(/* webpackChunkName: "about" */ '../views/Apoderado/ImagenEstudiante.vue'),
      },
      {
        path: 'agregaRetirador',
        component: () => import(/* webpackChunkName: "about" */ '../views/Apoderado/NuevoRetirador.vue'),

      }
    ]
  },
  {
    path: '/profesor',
    name: 'profesor',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Profesor.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
