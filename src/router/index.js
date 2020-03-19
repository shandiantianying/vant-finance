import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../view/main/MainPage'
import TabHome from '../view/main/tabs/TabHome';
import TabProducts from '../view/main/tabs/TabProducts';
import TabDiscover from '../view/main/tabs/TabDiscover';
import TabMine from '../view/main/tabs/TabMine';

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    redirect:"/main/home"
  },
  {
    path:'/main',
    name:'main',
    meta: {keepAlive: true},
    redirect: '/main/home', component: MainPage,
    children: [
           {name: 'home', path: 'home', component: TabHome, meta: {keepAlive: true}},
           {name: 'products', path: 'products', component: TabProducts, meta: {keepAlive: true}},
           {name: 'discover', path: 'discover', component: TabDiscover, meta: {keepAlive: true}},
           {name: 'mine', path: 'mine', component: TabMine, meta: {keepAlive: true}},
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
