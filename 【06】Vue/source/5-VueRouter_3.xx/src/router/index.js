//配置路由相关信息
import Vue from 'vue'
import Router from 'vue-router'	//或者导入时直接解构


/*ES6普通导入
import home from '../components/home'
import about from '../components/about'
import user from '../components/user'*/

//ES6路由懒加载写法
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')


//1.安装插件
Vue.use(Router)

//2.创建VueRouter对象  
//VUE2: const router = new Router({})
//VUE3: const router = Router.createRouter({})

const router = new Router({
  mode: 'history',            //设置改变url的方式（默认hash）
  linkActiveClass: 'active',  //统一修改点击时添加到标签上的class属性名
  routes: [                   //配置路径与组件之间的映射关系
    //配置路由重定向
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',            //路由路径
      component: Home,          //对应的组件名
      meta:{ title:'首页' },    //meta:元数据
      children:[                //路由嵌套配置
        {
          path: 'news',
          component: HomeNews,
        },
        {
          path: 'message',
          component: HomeMessage,
        }
      ]
    },
    {
      path: '/about',
      component: About,
      meta:{ title:'关于' }
    },
    {
      //path:'/user/userId',      //在当前url后面显示参数信息
      path: '/user/:id',          //获取url后面的参数信息在页面使用
      component: User,
      meta:{ title:'用户' }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{ title:'档案' }
    }
  ]
})
//3.将router导出挂载到vue实例上
export default router;



//解决路由重复跳转报错问题 (网上查的)
//******************************************
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

//全局导航守卫监听
/*******************************************
  * to与from都是route类型即当前正在活跃的路由
  * 使用时必须在函数内部调用next()方法进行下一步
*********************************************/
router.beforeEach((to,from,next) => {
  document.title = to.matched[0].meta.title;    //修改当前显示页面的标题
  //console.log(to);
  //console.log("前置守卫/钩子");
  next()
})
router.afterEach((to,from) => {
  //console.log("后置守卫/钩子");
})
