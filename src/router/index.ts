//创建路由器

//引入createRuter
import {createRouter,createWebHistory} from 'vue-router'

//引入可能要呈现的组件
import About from '@/views/About.vue'
import Home from '@/views/Home.vue'
import News from '@/views/News.vue'
import Detail from '@/views/Detail.vue'

//创建路由器
const router = createRouter({
    history:createWebHistory(),
    routes:[
       {
        path:'/',
        component:Home
       },{
        path:'/about',
        component:About
       },{
        path:'/news',
        component:News,
        children:[
        {   path:'detail/:id/:title/:content',
            name:'xiangxi',
            component:Detail,
            // 第一种写法，路由收到的所有params参作为props传给路由组件
            //props:true
            // 第二种 函数式
            props(route){
                return route.query
            }
        }
        ]
       }
    ]
})

export default router
