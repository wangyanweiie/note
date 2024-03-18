import Vue from 'vue'
import Router from 'vue-router'
//路由懒加载
const Home = () => import('../../views/home/Home')
const Category = () => import('../../views/category/Category')
const Cart = () => import('../../views/cart/Cart')
const Profile = () => import('../../views/profile/Profile')


//安装插件
Vue.use(Router)
//创建路由对象
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/profile',
      component: Profile
    }
  ],
  //设置url显示模式
  mode: 'history'
})
//导出router
export default router;
