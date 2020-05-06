import Vue from 'vue'
import VueRouter from 'vue-router'

const home = ()=>import("../views/home/home");
const search = ()=>import("../views/search/search");
const root = ()=>import("../views/root/root");
const profile = ()=>import("../views/profile/profile");

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

  const routes = [
    {
      path:"",
      redirect:"/home"
    },{
      path:"/home",
      component:home
    },{
      path:"/search",
      component:search
    },{
      path:"/root",
      component:root
    },{
      path:"/profile",
      component:profile
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
