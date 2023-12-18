import { createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
   {
    path: '/room',
    name: 'room',
    component: ()=> import('../views/RoomView.vue')
   },
   {
    path: '/rooms/:room_id',
    name: 'rooms',
    component: ()=> import('../views/RoomsView.vue')
   },
   {
    path: '/checkIn',
    name: 'checkIn',
    component: ()=> import('../views/CheckinView.vue')
   },
   {
    path: '/logIn',
    name: 'logIn',
    component: ()=> import('../views/LoginView.vue')
   },
  {
    path: '/verify',
    name: 'verify',
    component: ()=> import('../views/VerifyView.vue')
  },
  {
    path: '/Procfile',
    name: 'Procfile',
    component: ()=> import('../views/ProcfileView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: ()=> import('../views/NotFoundView.vue')
  }
  ]
});

if(document.cookie.indexOf('token=') === 0){
  router.beforeEach((to,from)=>{
  if(to.path === '/login'){
   return '/Home'
  }


 
});

}

export default router
